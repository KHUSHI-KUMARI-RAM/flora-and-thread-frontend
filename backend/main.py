from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from database import get_connection, create_tables

create_tables()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "https://flora-and-thread-frontend.vercel.app",
        "https://flora-and-thread-frontend-git-main-flora-and-thread.vercel.app",
    ],
    allow_origin_regex=r"^https://flora-and-thread.*\.vercel\.app$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {
        "message": "Flora & Thread Backend is running!"
    }

@app.get("/products")
def get_products():
    connection = get_connection()

    products = connection.execute(
        "SELECT id, name, rating, price FROM products"
    ).fetchall()

    connection.close()

    return [dict(product) for product in products]

class Product(BaseModel):
    id: int
    name: str
    rating: float
    price: str

@app.post("/products")
def add_product(product: Product):
    connection = get_connection()

    connection.execute(
        """
        INSERT INTO products (id, name, rating, price)
        VALUES (?, ?, ?, ?)
        """,
        (
            product.id,
            product.name,
            product.rating,
            product.price
        )
    )

    connection.commit()
    connection.close()

    return {
        "message": "Product added successfully!",
        "product": product
    }

@app.delete("/products/{product_id}")
def delete_product(product_id: int):
    connection = get_connection()

    connection.execute(
        "DELETE FROM products WHERE id = ?",
        (product_id,)
    )

    connection.commit()
    connection.close()

    return {
        "message": "Product deleted successfully!"
    }

class CartItem(BaseModel):
    product_id: int
    name: str
    price: float
    quantity: int

@app.get("/cart")
def get_cart():
    connection = get_connection()

    cart_items = connection.execute(
        """
        SELECT id, product_id, name, price, quantity
        FROM cart
        """
    ).fetchall()

    connection.close()

    return [dict(item) for item in cart_items]

@app.post("/cart")
def add_to_cart(item: CartItem):
    connection = get_connection()

    existing_item = connection.execute(
        """
        SELECT id, quantity
        FROM cart
        WHERE product_id = ? AND name = ?
        """,
        (
            item.product_id,
            item.name
        )
    ).fetchone()

    if existing_item:
        new_quantity = existing_item["quantity"] + item.quantity

        connection.execute(
            """
            UPDATE cart
            SET quantity = ?
            WHERE id = ?
            """,
            (
                new_quantity,
                existing_item["id"]
            )
        )
    else:
        connection.execute(
            """
            INSERT INTO cart (product_id, name, price, quantity)
            VALUES (?, ?, ?, ?)
            """,
            (
                item.product_id,
                item.name,
                item.price,
                item.quantity
            )
        )

    connection.commit()
    connection.close()

    return {
        "message": "Item added to cart successfully!"
    }

@app.put("/cart/{product_id}")
def update_cart(product_id: int, quantity: int):
    connection = get_connection()

    connection.execute(
        """
        UPDATE cart
        SET quantity = ?
        WHERE product_id = ?
        """,
        (
            quantity,
            product_id
        )
    )

    connection.commit()
    connection.close()

    return {
        "message": "Cart quantity updated successfully!"
    }

class Profile(BaseModel):
    name: str
    email: str
    phone: str
    address: str

@app.get("/profile")
def get_profile():
    connection = get_connection()

    profile = connection.execute(
        """
        SELECT id, name, email, phone, address
        FROM users
        ORDER BY id DESC
        LIMIT 1
        """
    ).fetchone()

    connection.close()

    if profile:
        return dict(profile)

    return {
        "name": "",
        "email": "",
        "phone": "",
        "address": ""
    }

@app.post("/profile")
def save_profile(profile: Profile):
    connection = get_connection()

    existing_profile = connection.execute(
        """
        SELECT id
        FROM users
        ORDER BY id DESC
        LIMIT 1
        """
    ).fetchone()

    if existing_profile:
        connection.execute(
            """
            UPDATE users
            SET name = ?, email = ?, phone = ?, address = ?
            WHERE id = ?
            """,
            (
                profile.name,
                profile.email,
                profile.phone,
                profile.address,
                existing_profile["id"]
            )
        )
    else:
        connection.execute(
            """
            INSERT INTO users (name, email, phone, address)
            VALUES (?, ?, ?, ?)
            """,
            (
                profile.name,
                profile.email,
                profile.phone,
                profile.address
            )
        )

    connection.commit()
    connection.close()

    return {
        "message": "Profile saved successfully!",
        "profile": profile
    }

class OrderItem(BaseModel):
    product_id: int
    product_name: str
    price: float
    quantity: int

class Order(BaseModel):
    total_amount: float
    order_date: str
    items: List[OrderItem] = []

@app.post("/orders")
def create_order(order: Order):
    connection = get_connection()

    cursor = connection.execute(
        """
        INSERT INTO orders (total_amount, order_date)
        VALUES (?, ?)
        """,
        (
            order.total_amount,
            order.order_date
        )
    )

    order_id = cursor.lastrowid

    for item in order.items:
        connection.execute(
            """
            INSERT INTO order_items
            (order_id, product_id, product_name, price, quantity)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                order_id,
                item.product_id,
                item.product_name,
                item.price,
                item.quantity
            )
        )

    connection.commit()
    connection.close()

    return {
        "message": "Order saved successfully!",
        "order_id": order_id,
        "order": order
    }

@app.get("/orders")
def get_orders():
    connection = get_connection()

    orders = connection.execute(
        """
        SELECT id, total_amount, order_date
        FROM orders
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    return [dict(order) for order in orders]

@app.get("/orders/{order_id}/items")
def get_order_items(order_id: int):
    connection = get_connection()

    items = connection.execute(
        """
        SELECT id, order_id, product_id,
               product_name, price, quantity
        FROM order_items
        WHERE order_id = ?
        """,
        (order_id,)
    ).fetchall()

    connection.close()

    return [dict(item) for item in items]

@app.put("/orders/{order_id}/cancel")
def cancel_order(order_id: int):
    connection = get_connection()

    connection.execute(
        """
        DELETE FROM order_items
        WHERE order_id = ?
        """,
        (order_id,)
    )

    connection.execute(
        """
        DELETE FROM orders
        WHERE id = ?
        """,
        (order_id,)
    )

    connection.commit()
    connection.close()

    return {
        "message": "Order cancelled successfully!"
    }

class Payment(BaseModel):
    order_id: int
    payment_method: str
    payment_status: str
    amount: float

@app.post("/payments")
def create_payment(payment: Payment):
    connection = get_connection()

    connection.execute(
        """
        INSERT INTO payments
        (order_id, payment_method, payment_status, amount)
        VALUES (?, ?, ?, ?)
        """,
        (
            payment.order_id,
            payment.payment_method,
            payment.payment_status,
            payment.amount
        )
    )

    connection.commit()
    connection.close()

    return {
        "message": "Payment saved successfully!",
        "payment": payment
    }

@app.get("/payments")
def get_payments():
    connection = get_connection()

    payments = connection.execute(
        """
        SELECT id, order_id, payment_method,
               payment_status, amount
        FROM payments
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    return [dict(payment) for payment in payments]

class WishlistItem(BaseModel):
    product_id: int
    product_name: str
    price: float
    rating: float

@app.get("/wishlist")
def get_wishlist():
    connection = get_connection()

    wishlist_items = connection.execute(
        """
        SELECT id, product_id, product_name, price, rating
        FROM wishlist
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    return [dict(item) for item in wishlist_items]

@app.post("/wishlist")
def add_to_wishlist(item: WishlistItem):
    connection = get_connection()

    existing_item = connection.execute(
        """
        SELECT id
        FROM wishlist
        WHERE product_id = ?
        """,
        (item.product_id,)
    ).fetchone()

    if existing_item:
        connection.close()

        return {
            "message": "Product already in wishlist!"
        }

    connection.execute(
        """
        INSERT INTO wishlist
        (product_id, product_name, price, rating)
        VALUES (?, ?, ?, ?)
        """,
        (
            item.product_id,
            item.product_name,
            item.price,
            item.rating
        )
    )

    connection.commit()
    connection.close()

    return {
        "message": "Product added to wishlist successfully!"
    }

@app.delete("/wishlist/{product_id}")
def remove_from_wishlist(product_id: int):
    connection = get_connection()

    connection.execute(
        """
        DELETE FROM wishlist
        WHERE product_id = ?
        """,
        (product_id,)
    )

    connection.commit()
    connection.close()

    return {
        "message": "Product removed from wishlist successfully!"
    }