from database import insert_products

products = [
    {
        "id": 1,
        "name": "Wireless Earphones",
        "rating": 4.9,
        "price": "₹1,199 - ₹4,499"
    },
    {
        "id": 2,
        "name": "Smart Watch",
        "rating": 4.7,
        "price": "₹5,000 - ₹4,00,000"
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "rating": 4.4,
        "price": "₹3,499 - ₹4,999"
    },
    {
        "id": 4,
        "name": "Travel Backpack",
        "rating": 4.6,
        "price": "₹1,000 - ₹5,000"
    },
    {
        "id": 5,
        "name": "Premium Smartphone",
        "rating": 4.6,
        "price": "₹50,000 - ₹1,36,000"
    },
    {
        "id": 6,
        "name": "Ultra Slim Laptop",
        "rating": 4.8,
        "price": "₹55,000 - ₹2,00,000"
    },
    {
        "id": 7,
        "name": "Mechanical Keyboard",
        "rating": 4.5,
        "price": "₹1,999 - ₹5,999"
    },
    {
        "id": 8,
        "name": "Ergonomic Study Chair",
        "rating": 4.4,
        "price": "₹5,999 - ₹8,999"
    },
    {
        "id": 9,
        "name": "Digital Camera",
        "rating": 4.7,
        "price": "₹45,000 - ₹65,000"
    },
    {
        "id": 10,
        "name": "Summer Cotton Dress",
        "rating": 4.5,
        "price": "₹1,299 - ₹2,499"
    },
    {
        "id": 11,
        "name": "Winter Hoodie",
        "rating": 4.6,
        "price": "₹1,999 - ₹2,999"
    },
    {
        "id": 12,
        "name": "Elegant Wedding Dress",
        "rating": 4.8,
        "price": "₹6,940 - ₹9,999"
    },
    {
        "id": 13,
        "name": "Engagement Party Dress",
        "rating": 4.7,
        "price": "₹4,999 - ₹7,999"
    },
    {
        "id": 14,
        "name": "Gold Style Necklace",
        "rating": 4.6,
        "price": "₹2,499 - ₹4,99,999"
    },
    {
        "id": 15,
        "name": "Elegant Bracelet",
        "rating": 4.5,
        "price": "₹1,799 - ₹33,493"
    }
]

insert_products(products)

print("15 products inserted successfully!")