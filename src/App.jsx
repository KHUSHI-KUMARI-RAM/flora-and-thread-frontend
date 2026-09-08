import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import products from "./data/products";
import "./App.css";

import watch1 from "./assets/products/watch1.jpg";
import watch2 from "./assets/products/watch2.jpg";
import watch3 from "./assets/products/watch3.jpg";
import watch4 from "./assets/products/watch4.jpg";
import watch5 from "./assets/products/watch5.jpg";

import adidasShoes from "./assets/products/adidas.jpg";
import nikeShoes from "./assets/products/nike.jpg";
import pumaShoes from "./assets/products/puma.jpg";
import reebokShoes from "./assets/products/reebok.jpg";
import womenShoes from "./assets/products/women.jpg";

import earphone1 from "./assets/products/earphone1.jpg";
import earphone2 from "./assets/products/earphone2.jpg";
import earphone3 from "./assets/products/earphone3.jpg";
import earphone4 from "./assets/products/earphone4.jpg";
import earphone5 from "./assets/products/earphone5.jpg";

import bag1 from "./assets/products/bag1.jpg";
import bag2 from "./assets/products/bag22.jpg";
import bag3 from "./assets/products/bag3.jpg";
import bag4 from "./assets/products/bag4.jpg";
import bag5 from "./assets/products/bag5.jpg";

import phone1 from "./assets/products/phone1.jpg";
import phone2 from "./assets/products/phone2.jpg";
import phone3 from "./assets/products/phone3.jpg";
import phone4 from "./assets/products/phone4.jpg";
import phone5 from "./assets/products/phone5.jpg";

import laptop1 from "./assets/products/laptop1.jpg";
import laptop2 from "./assets/products/laptop2.jpg";
import laptop3 from "./assets/products/laptop3.jpg";
import laptop4 from "./assets/products/laptop4.jpg";
import laptop5 from "./assets/products/laptop5.jpg";

import keyboard1 from "./assets/products/keyboard1.jpg";
import keyboard2 from "./assets/products/keyboard2.jpg";
import keyboard3 from "./assets/products/keyboard3.jpg";
import keyboard4 from "./assets/products/keyboard4.jpg";
import keyboard5 from "./assets/products/keyboard5.jpg";

import chair1 from "./assets/products/chair1.jpg";
import chair2 from "./assets/products/chair2.jpg";
import chair3 from "./assets/products/chair3.jpg";
import chair4 from "./assets/products/chair4.jpg";
import chair5 from "./assets/products/chair5.jpg";

import camera1 from "./assets/products/camera1.jpg";
import camera2 from "./assets/products/camera2.jpg";
import camera3 from "./assets/products/camera3.jpg";
import camera4 from "./assets/products/camera4.jpg";
import camera5 from "./assets/products/camera5.jpg";

import summer1 from "./assets/products/summer1.jpg";
import summer2 from "./assets/products/summer2.jpg";
import summer3 from "./assets/products/summer3.jpg";
import summer4 from "./assets/products/summer4.jpg";
import summer5 from "./assets/products/summer5.jpg";

import hoodie1 from "./assets/products/hoodie1.jpg";
import hoodie2 from "./assets/products/hoodie2.jpg";
import hoodie3 from "./assets/products/hoodie3.jpg";
import hoodie4 from "./assets/products/hoodie4.jpg";
import hoodie5 from "./assets/products/hoodie5.jpg";

import wedding1 from "./assets/products/wedding1.jpg";
import wedding2 from "./assets/products/wedding2.jpg";
import wedding3 from "./assets/products/wedding3.jpg";
import wedding4 from "./assets/products/wedding4.jpg";
import wedding5 from "./assets/products/wedding5.jpg";

import dress1 from "./assets/products/dress1.jpg";
import dress2 from "./assets/products/dress2.jpg";
import dress3 from "./assets/products/dress3.jpg";
import dress4 from "./assets/products/dress4.jpg";
import dress5 from "./assets/products/dress5.jpg";

import necklace1 from "./assets/products/necklace1.jpg";
import necklace2 from "./assets/products/necklace2.jpg";
import necklace3 from "./assets/products/necklace3.jpg";
import necklace4 from "./assets/products/necklace4.jpg";
import necklace5 from "./assets/products/necklace5.jpg";

import bracelet1 from "./assets/products/bracelet1.jpg";
import bracelet2 from "./assets/products/bracelet2.jpg";
import bracelet3 from "./assets/products/bracelet3.jpg";
import bracelet4 from "./assets/products/bracelet4.jpg";
import bracelet5 from "./assets/products/bracelet5.jpg";

const deals = [
  {
    id: 101,
    name: "Dior Luxury Watch",
    brand: "Dior",
    originalPrice: 400000,
    discount: 10,
    price: 360000,
    image: watch2,
  },
  {
    id: 102,
    name: "YSL Premium Watch",
    brand: "YSL",
    originalPrice: 25000,
    discount: 5,
    price: 23750,
    image: watch5,
  },
  {
    id: 103,
    name: "Samsung Rose Pink Smartphone",
    brand: "Samsung",
    originalPrice: 135000,
    discount: 5,
    price: 128250,
    image: phone1,
  },
  {
    id: 104,
    name: "Realme Smartphone",
    brand: "Realme",
    originalPrice: 50000,
    discount: 5,
    price: 47500,
    image: phone4,
  },
  {
    id: 105,
    name: "Apple iPad",
    brand: "Apple",
    originalPrice: 105000,
    discount: 10,
    price: 94500,
    image: laptop3,
  },
  {
    id: 106,
    name: "Designer Bridal Dress",
    brand: "Designer",
    originalPrice: 9999,
    discount: 10,
    price: 8999.10,
    image: wedding3,
  },
  {
    id: 107,
    name: "Flower Diamond Design Bracelet",
    brand: "Mia by Tanishq",
    originalPrice: 22499,
    discount: 5,
    price: 21374.05,
    image: bracelet2,
  },
];

function App() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#FFF0F5";
    document.body.style.backgroundColor = "#FFF0F5";
    document.body.style.margin = "0";
    const backgroundStyle = document.createElement("style");
    backgroundStyle.id = "flora-thread-background-style";
    backgroundStyle.textContent = `
      html, body, #root {
        background-color: #FFF0F5 !important;
      }
      [class$="-page"] {
        background-color: #FFF0F5 !important;
      }
    `;
    document.head.appendChild(backgroundStyle);

    return () => {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
      const oldBackgroundStyle = document.getElementById("flora-thread-background-style");
      if (oldBackgroundStyle) {
        oldBackgroundStyle.remove();
      }
    };
  }, []);

  const [cart, setCart] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
  fetch("http://https://flora-and-thread-frontend.onrender.com/orders")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Orders load nahi hue");
      }
      return response.json();
    })
    .then((data) => {
      const savedOrderItems = JSON.parse(
        localStorage.getItem("floraThreadOrderItems") || "{}"
      );

      const formattedOrders = data.map((order) => {
        const savedItems = savedOrderItems[order.id] || [];
        const totalItems = savedItems.reduce(
          (total, item) => total + Number(item.quantity || 0),
          0
        );

        const savedItemsTotal = savedItems.reduce(
          (total, item) =>
            total + Number(item.price || 0) * Number(item.quantity || 0),
          0
        );

        return {
          id: order.id,
          date: order.order_date,
          items: savedItems,
          totalItems: totalItems,
          totalPrice: savedItems.length > 0
            ? savedItemsTotal
            : Number(order.total_amount),
          status: "Order Placed"
        };
      });

      setOrders(formattedOrders);
    })
    .catch((error) => {
      console.error("Orders backend error:", error);
    });
}, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showTrackOrder, setShowTrackOrder] = useState(false);
const [trackingOrder, setTrackingOrder] = useState(null);
  const [profile, setProfile] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
});

const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showProductPage, setShowProductPage] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [backendProducts, setBackendProducts] = useState([]);
  useEffect(() => {
  fetch("http://https://flora-and-thread-frontend.onrender.com/products")
 
    .then((response) => response.json())
    .then((data) => {
     setBackendProducts(data);
    })
    .catch((error) => {
      console.error("Backend error:", error);
    });
}, []);
useEffect(() => {
  const savedProfile = localStorage.getItem("floraThreadProfile");

  if (savedProfile) {
    try {
      setProfile(JSON.parse(savedProfile));
      return;
    } catch (error) {
      console.error("Saved profile load error:", error);
      localStorage.removeItem("floraThreadProfile");
    }
  }

  fetch("http://https://flora-and-thread-frontend.onrender.com/profile")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Profile load nahi hua");
      }
      return response.json();
    })
    .then((data) => {
      const savedProfileData = {
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
      };

      setProfile(savedProfileData);
      localStorage.setItem(
        "floraThreadProfile",
        JSON.stringify(savedProfileData)
      );
    })
    .catch((error) => {
      console.error("Profile backend error:", error);
    });
}, []);
const displayProducts = products.map((product) => {
  const backendProduct = backendProducts.find(
    (item) => item.id === product.id
  );

  if (backendProduct) {
    return {
      ...product,
      name: backendProduct.name,
      rating: backendProduct.rating,
    };
  }

  return product;
});
const categories = [
  "All",
  "Audio",
  "Wearables",
  "Footwear",
  "Travel",
  "Smartphones",
  "Laptops",
  "Accessories",
  "Furniture",
  "Cameras",
  "Clothing",
  "Wedding & Engagement",
  "Jewelry",
];

const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  const matchesSearch =
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});

  const [showWatchPage, setShowWatchPage] = useState(false);
  const [showShoePage, setShowShoePage] = useState(false);
  const [showEarphonePage, setShowEarphonePage] = useState(false);
  const [showBagPage, setShowBagPage] = useState(false);
  const [showPhonePage, setShowPhonePage] = useState(false);
  const [showLaptopsPage, setShowLaptopsPage] = useState(false);
  const [showKeyboardPage, setShowKeyboardPage] = useState(false);
  const [showChairPage, setShowChairPage] = useState(false);
  const [showCameraPage, setShowCameraPage] = useState(false);
  const [showSummerDressPage, setShowSummerDressPage] = useState(false);
  const [showHoodiePage, setShowHoodiePage] = useState(false);
  const [showWeddingDressPage, setShowWeddingDressPage] = useState(false);
  const [showEngagementDressPage, setShowEngagementDressPage] = useState(false);
  const [showNecklacePage, setShowNecklacePage] = useState(false);
  const [showBraceletPage, setShowBraceletPage] = useState(false);

 const addToCart = (product) => {
  const productPrice = Number(
    product.price ?? product.minPrice ?? product.originalPrice
  );

  if (!Number.isFinite(productPrice) || productPrice <= 0) {
    console.error("Product price nahi mila:", product);
    return;
  }

  const productId = product.id;

  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (item) => (item.product_id ?? item.id) === productId
    );

    const updatedCart = existingItem
      ? prevCart.map((item) =>
          (item.product_id ?? item.id) === productId
            ? { ...item, quantity: item.quantity + 1, price: productPrice }
            : item
        )
      : [
          ...prevCart,
          {
            ...product,
            product_id: productId,
            price: productPrice,
            quantity: 1,
          },
        ];

    localStorage.setItem(
      "floraThreadCart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  });

  setShowCart(true);

  const cartItem = {
    product_id: productId,
    name: product.name,
    price: productPrice,
    quantity: 1,
  };

  fetch("http://https://flora-and-thread-frontend.onrender.com/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Backend cart me item save nahi hua");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Cart backend error:", error);
    });
};

const increaseQuantity = (index) => {
  const item = cart[index];
  const productId = item.product_id ?? item.id;

  fetch(
    `http://https://flora-and-thread-frontend.onrender.com/cart/${productId}?quantity=${item.quantity + 1}`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Quantity update nahi hui");
      }
      return response.json();
    })
    .then(() => {
      loadCart();
    })
    .catch((error) => {
      console.error("Quantity update error:", error);
    });
};

const decreaseQuantity = (index) => {
  const item = cart[index];
  const productId = item.product_id ?? item.id;
  const newQuantity = item.quantity - 1;

  if (newQuantity <= 0) {
    removeFromCart(index);
    return;
  }

  fetch(
    `http://https://flora-and-thread-frontend.onrender.com/cart/${productId}?quantity=${newQuantity}`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Quantity update nahi hui");
      }

      return response.json();
    })
    .then(() => {
      loadCart();
    })
    .catch((error) => {
      console.error("Quantity update error:", error);
    });
};

const removeFromCart = (index) => {
  const item = cart[index];
  const productId = item.product_id ?? item.id;

  setCart((prevCart) => {
    const updatedCart = prevCart.filter((_, i) => i !== index);

    localStorage.setItem(
      "floraThreadCart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  });

  fetch(
    `http://https://flora-and-thread-frontend.onrender.com/cart/${productId}?quantity=0`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Item remove nahi hua");
      }

      return response.json();
    })
    .then(() => {
      console.log("Cart item remove ho gaya");
    })
    .catch((error) => {
      console.error("Remove cart error:", error);
    });
};

const cancelOrder = (orderId) => {
  fetch(
    `http://https://flora-and-thread-frontend.onrender.com/orders/${orderId}/cancel`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Order cancel nahi hua");
      }

      return response.json();
    })
    .then(() => {
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );

      const savedOrderItems = JSON.parse(
        localStorage.getItem("floraThreadOrderItems") || "{}"
      );

      delete savedOrderItems[orderId];

      localStorage.setItem(
        "floraThreadOrderItems",
        JSON.stringify(savedOrderItems)
      );
    })
    .catch((error) => {
      console.error("Order cancel error:", error);
    });
};

const cancelOrderItem = (orderId, itemIndex) => {
  const order = orders.find((item) => item.id === orderId);

  if (!order || !order.items || order.items.length === 0) {
    return;
  }

  const updatedItems = order.items.filter((_, index) => index !== itemIndex);

  if (updatedItems.length === 0) {
    cancelOrder(orderId);
    return;
  }

  const updatedTotalItems = updatedItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const updatedTotalPrice = updatedItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  setOrders((prevOrders) =>
    prevOrders.map((currentOrder) =>
      currentOrder.id === orderId
        ? {
            ...currentOrder,
            items: updatedItems,
            totalItems: updatedTotalItems,
            totalPrice: updatedTotalPrice
          }
        : currentOrder
    )
  );

  const savedOrderItems = JSON.parse(
    localStorage.getItem("floraThreadOrderItems") || "{}"
  );

  savedOrderItems[orderId] = updatedItems;

  localStorage.setItem(
    "floraThreadOrderItems",
    JSON.stringify(savedOrderItems)
  );
};

const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

const checkoutTotalItems = checkoutItems.reduce(
  (total, item) => total + Number(item.quantity || 0),
  0
);

const checkoutTotalPrice = checkoutItems.reduce(
  (total, item) =>
    total + Number(item.price || 0) * Number(item.quantity || 0),
  0
);

  
 const goToProducts = () => {
  setShowWishlist(false);
  setShowProfile(false);
  setShowProductPage(true);
  setShowProducts(true);
  setSelectedCategory("All");
  setShowDeals(false);
  setShowOrders(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};
const goToHome = () => {
  setShowWishlist(false);
  setShowProfile(false);
  setShowProductPage(false);
  setShowProducts(true);
  setSelectedCategory("All");
  setShowDeals(false);
  setShowOrders(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);

  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};
const goToDeals = () => {
  setShowWishlist(false);
  setShowProfile(false);
  setShowProductPage(false);
  setShowDeals(true);
  setShowProducts(false);
  setShowOrders(false);
  setSelectedCategory("All");
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);

  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};
const goToProfile = () => {
  setShowWishlist(false);
  setShowProfile(true);
  setShowProductPage(false);
  setShowProducts(false);
  setShowDeals(false);
  setShowOrders(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
  setSelectedCategory("All");

  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};

const goToOrders = () => {
  setShowWishlist(false);
  setShowOrders(true);
  setShowProfile(false);
  setShowProductPage(false);
  setShowProducts(false);
  setShowDeals(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
  setSelectedCategory("All");

  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};

const goToCart = () => {
  setShowWishlist(false);
  setShowCart(true);
  setShowProfile(false);
  setShowProductPage(false);
  setShowProducts(false);
  setShowDeals(false);
  setShowOrders(false);
  setShowCheckout(false);
  setOrderPlaced(false);
  setSelectedCategory("All");

  setShowWatchPage(false);
  setShowShoePage(false);
  setShowEarphonePage(false);
  setShowBagPage(false);
  setShowPhonePage(false);
  setShowLaptopsPage(false);
  setShowKeyboardPage(false);
  setShowChairPage(false);
  setShowCameraPage(false);
  setShowSummerDressPage(false);
  setShowHoodiePage(false);
  setShowWeddingDressPage(false);
  setShowEngagementDressPage(false);
  setShowNecklacePage(false);
  setShowBraceletPage(false);
};

  const watchOptions = [
    {
      id: 201,
      brand: "Fossil",
      name: "Fossil Watch",
      color: "Rose Gold",
      price: 15000,
      rating: 4.7,
      image: watch1,
    },
    {
      id: 202,
      brand: "Dior",
      name: "Dior Luxury Watch",
      color: "Lavender White and Silver",
      price: 400000,
      rating: 4.9,
      image: watch2,
    },
    {
      id: 203,
      brand: "Daniel Wellington",
      name: "Daniel Wellington Watch",
      color: "White Pink",
      price: 10000,
      rating: 4.6,
      image: watch3,
    },
    {
      id: 204,
      brand: "Timex",
      name: "Timex Classic Watch",
      color: "Silver and Black",
      price: 5000,
      rating: 4.5,
      image: watch4,
    },
    {
      id: 205,
      brand: "Yves Saint Laurent",
      name: "YSL Premium Watch",
      color: "Black Silver",
      price: 25000,
      rating: 4.8,
      image: watch5,
    },
  ];

  const shoeOptions = [
    {
      id: 301,
      brand: "Adidas",
      name: "Adidas Running Shoes",
      color: "Light pink with white",
      price: 3499,
      rating: 4.7,
      image: adidasShoes,
    },
    {
      id: 302,
      brand: "Nike",
      name: "Nike Sports Shoes",
      color: "White with cherry Red",
      price: 4999,
      rating: 4.8,
      image: nikeShoes,
    },
    {
      id: 303,
      brand: "Puma",
      name: "Puma Running Shoes",
      color: "White with brown",
      price: 3999,
      rating: 4.6,
      image: pumaShoes,
    },
    {
      id: 304,
      brand: "Reebok",
      name: "Reebok Sports Shoes",
      color: "white & cherry red",
      price: 4499,
      rating: 4.5,
      image: reebokShoes,
    },
    {
      id: 305,
      brand: "Skechers",
      name: "Women's Comfort Shoes",
      color: "Rose Pink & White",
      price: 4299,
      rating: 4.7,
      image: womenShoes,
    },
  ];

  const earphoneOptions = [
    {
      id: 401,
      brand: "boAt",
      name: "boAt Neckband Earphones",
      color: "Light pink",
      price: 1199,
      rating: 4.5,
      image: earphone1,
    },
    {
      id: 402,
      brand: "Boult Audio",
      name: "Boult Audio Headphone",
      color: "White and light pink",
      price: 2499,
      rating: 4.6,
      image: earphone2,
    },
    {
      id: 403,
      brand: "Boult",
      name: "Boult Premium Earbuds",
      color: "Rose Pink",
      price: 3799,
      rating: 4.5,
      image: earphone3,
    },
    {
      id: 404,
      brand: "Sony",
      name: "Sony Wireless Headphones",
      color: "Blush Pink",
      price: 4499,
      rating: 4.8,
      image: earphone4,
    },
    {
      id: 405,
      brand: "Realme",
      name: "Realme Teddy Buds",
      color: "Baby pink",
      price: 3399,
      rating: 4.5,
      image: earphone5,
    },
  ];

  const bagOptions = [
    {
      id: 501,
      brand: "Lavie",
      name: "Lavie Pink Bag",
      color: "Light Pink",
      price: 1000,
      rating: 4.6,
      image: bag1,
    },
    {
      id: 502,
      brand: "Caprese",
      name: "Caprese Classic Bag",
      color: "White & Brown",
      price: 3000,
      rating: 4.7,
      image: bag2,
    },
    {
      id: 503,
      brand: "Baggit",
      name: "Baggit Green Bag",
      color: "Light Green & White",
      price: 2000,
      rating: 4.5,
      image: bag3,
    },
    {
      id: 504,
      brand: "Hidesign",
      name: "Hidesign Premium Bag",
      color: "Chocolate",
      price: 5000,
      rating: 4.8,
      image: bag4,
    },
    {
      id: 505,
      brand: "Da Milano",
      name: "Da Milano Elegant Bag",
      color: "White & Rose Pink",
      price: 3500,
      rating: 4.6,
      image: bag5,
    },
  ];

  const phoneOptions = [
    {
      id: 601,
      brand: "Samsung",
      name: "Samsung Rose Pink Smartphone",
      color: "Rose Pink",
      price: 135000,
      rating: 4.8,
      image: phone1,
    },
    {
      id: 602,
      brand: "Samsung",
      name: "Samsung Black & Purple Smartphone",
      color: "Black & Purple",
      price: 136000,
      rating: 4.8,
      image: phone2,
    },
    {
      id: 603,
      brand: "Apple",
      name: "iPhone 15",
      color: "Light Pink",
      price: 80000,
      rating: 4.9,
      image: phone3,
    },
    {
      id: 604,
      brand: "Realme",
      name: "Realme Smartphone",
      color: "Rose Pink & Light Green",
      price: 50000,
      rating: 4.7,
      image: phone4,
    },
    {
      id: 605,
      brand: "Apple",
      name: "iPhone 16",
      color: "White",
      price: 100000,
      rating: 4.9,
      image: phone5,
    },
  ];

  const laptopOptions = [
    {
      id: 701,
      brand: "HP",
      name: "HP Premium Laptop",
      color: "Light & Silver",
      price: 55000,
      rating: 4.8,
      image: laptop1,
    },
    {
      id: 702,
      brand: "Huawei",
      name: "Huawei Laptop",
      color: "Light Green",
      price: 70000,
      rating: 4.7,
      image: laptop2,
    },
    {
      id: 703,
      brand: "Apple",
      name: "Apple ipad",
      color: "purple",
      price: 105000,
      rating: 4.6,
      image: laptop3,
    },
    {
      id: 704,
      brand: "ASUS",
      name: "ASUS VivoBook Laptop",
      color: "light pink with white",
      price: 60000,
      rating: 4.8,
      image: laptop4,
    },
    {
      id: 705,
      brand: "Apple",
      name: "Apple MacBook Air",
      color: "Rose pink",
      price: 200000,
      rating: 4.9,
      image: laptop5,
    },
  ];

  const keyboardOptions = [
    {
      id: 801,
      brand: "Logitech",
      name: "Logitech Mechanical Keyboard",
      color: "Baby pink with Rose pink",
      price: 4999,
      rating: 4.7,
      image: keyboard1,
    },
    {
      id: 802,
      brand: "Redragon",
      name: "Redragon Gaming Keyboard",
      color: "White with lavender",
      price: 3999,
      rating: 4.8,
      image: keyboard2,
    },
    {
      id: 803,
      brand: "HP",
      name: "HP Wireless Keyboard",
      color: "White with Brown",
      price: 2499,
      rating: 4.6,
      image: keyboard3,
    },
    {
      id: 804,
      brand: "Dell",
      name: "Dell Wireless Keyboard",
      color: "White with light pink",
      price: 1999,
      rating: 4.5,
      image: keyboard4,
    },
    {
      id: 805,
      brand: "ASUS",
      name: "ASUS RGB Gaming Keyboard",
      color: "White and Brown",
      price: 5999,
      rating: 4.8,
      image: keyboard5,
    },
  ];
  const chairOptions = [
    {
      id: 901,
      brand: "Green Soul",
      name: "Green Soul Ergonomic Chair",
      color: "Rose pink",
      price: 8999,
      rating: 4.8,
      image: chair1,
    },
    {
      id: 902,
      brand: "Wakefit",
      name: "Wakefit Office Chair",
      color: "Peach",
      price: 6999,
      rating: 4.6,
      image: chair2,
    },
    {
      id: 903,
      brand: "CellBell",
      name: "CellBell Gaming Chair",
      color: "Light pink",
      price: 7999,
      rating: 4.7,
      image: chair3,
    },
    {
      id: 904,
      brand: "Featherlite",
      name: "Featherlite Study Chair",
      color: "Baby pink",
      price: 9999,
      rating: 4.8,
      image: chair4,
    },
    {
      id: 905,
      brand: "INNOWIN",
      name: "INNOWIN Premium Chair",
      color: "Lavender",
      price: 5999,
      rating: 4.5,
      image: chair5,
    },
  ];

  const cameraOptions = [
    {
      id: 1001,
      brand: "Canon",
      name: "Canon Professional Camera",
      color: "Lavender",
      price: 45000,
      rating: 4.8,
      image: camera1,
    },
    {
      id: 1002,
      brand: "Nikon",
      name: "Nikon DSLR Camera",
      color: "Rose pink",
      price: 55000,
      rating: 4.8,
      image: camera2,
    },
    {
      id: 1003,
      brand: "Sony",
      name: "Sony Mirrorless Camera",
      color: "Skyblue",
      price: 75000,
      rating: 4.9,
      image: camera3,
    },
    {
      id: 1004,
      brand: "Fujifilm",
      name: "Fujifilm Mirrorless Camera",
      color: "Silver",
      price: 65000,
      rating: 4.7,
      image: camera4,
    },
    {
      id: 1005,
      brand: "Panasonic",
      name: "Panasonic Lumix Camera",
      color: "Dark Green",
      price: 50000,
      rating: 4.6,
      image: camera5,
    },
  ];

  const summerDressOptions = [
    {
      id: 1101,
      brand: "Zara",
      name: "Floral Summer Dress",
      color: "Pink & White",
      price: 1499,
      rating: 4.7,
      image: summer1,
    },
    {
      id: 1102,
      brand: "H&M",
      name: "Cotton Summer Dress",
      color: "Dark Maroon",
      price: 1799,
      rating: 4.6,
      image: summer2,
    },
    {
      id: 1103,
      brand: "Mango",
      name: "Elegant Summer Dress",
      color: "White with Light green",
      price: 1999,
      rating: 4.8,
      image: summer3,
    },
    {
      id: 1104,
      brand: "Forever 21",
      name: "Casual Summer Dress",
      color: "White with skyblue",
      price: 1299,
      rating: 4.5,
      image: summer4,
    },
    {
      id: 1105,
      brand: "AND",
      name: "Premium Summer Dress",
      color: "Peach with light green",
      price: 2499,
      rating: 4.7,
      image: summer5,
    },
  ];

  const hoodieOptions = [
    {
      id: 1201,
      brand: "H&M",
      name: "Classic Winter Hoodie",
      color: "Coffee Brown",
      price: 1999,
      rating: 4.6,
      image: hoodie1,
    },
    {
      id: 1202,
      brand: "Zara",
      name: "Premium Casual Hoodie",
      color: "White",
      price: 2499,
      rating: 4.7,
      image: hoodie2,
    },
    {
      id: 1203,
      brand: "Nike",
      name: "Sports Hoodie",
      color: "Rose pink",
      price: 2999,
      rating: 4.8,
      image: hoodie3,
    },
    {
      id: 1204,
      brand: "Puma",
      name: "Comfort Winter Hoodie",
      color: "White with light pink",
      price: 2299,
      rating: 4.6,
      image: hoodie4,
    },
    {
      id: 1205,
      brand: "Adidas",
      name: "Premium Sports Hoodie",
      color: "White with coffee brown",
      price: 2799,
      rating: 4.8,
      image: hoodie5,
    },
  ];

  const weddingDressOptions = [
    {
      id: 1301,
      brand: "Sabyasachi",
      name: "Royal Bridal Wedding Dress",
      color: "Soft Lavender",
      price: 8999,
      rating: 4.9,
      image: wedding1,
    },
    {
      id: 1302,
      brand: "Manyavar",
      name: "Elegant Wedding Dress",
      color: "Pastel purple",
      price: 7499,
      rating: 4.8,
      image: wedding2,
    },
    {
      id: 1303,
      brand: "Kalki Fashion",
      name: "Designer Bridal Dress",
      color: "soft lavender",
      price: 9999,
      rating: 4.9,
      image: wedding3,
    },
    {
      id: 1304,
      brand: "Biba",
      name: "Traditional Wedding Dress",
      color: "Purple and Megenta",
      price: 6999,
      rating: 4.7,
      image: wedding4,
    },
    {
      id: 1305,
      brand: "W for Woman",
      name: "Premium Wedding Dress",
      color: "Blush Pink",
      price: 8499,
      rating: 4.8,
      image: wedding5,
    },
  ];

  const engagementDressOptions = [
    {
      id: 1401,
      brand: "Zara",
      name: "Elegant Party Dress",
      color: "White and sage green",
      price: 5999,
      rating: 4.8,
      image: dress1,
    },
    {
      id: 1402,
      brand: "Mango",
      name: "Designer Engagement Dress",
      color: "Light seafoam green with cream",
      price: 6999,
      rating: 4.7,
      image: dress2,
    },
    {
      id: 1403,
      brand: "H&M",
      name: "Classic Party Dress",
      color: "Rich dark pink",
      price: 7000,
      rating: 4.6,
      image: dress3,
    },
    {
      id: 1404,
      brand: "AND",
      name: "Premium Engagement Dress",
      color: "Deep maroon or Burgundy",
      price: 7999,
      rating: 4.9,
      image: dress4,
    },
    {
      id: 1405,
      brand: "Forever 21",
      name: "Stylish Party Dress",
      color: "Lavender",
      price: 6000,
      rating: 4.7,
      image: dress5,
    },
  ];

  const necklaceOptions = [
    {
      id: 1501,
      brand: "Tanishq",
      name: "Elegant Gold Necklace",
      color: "Champagne Gold",
      price: 20999,
      rating: 4.8,
      image: necklace1,
    },
    {
      id: 1502,
      brand: "Mia by Tanishq",
      name: "Y-necklace wiyh pretty floral details",
      color: "Rose Gold",
      price: 30999,
      rating: 4.7,
      image: necklace2,
    },
    {
      id: 1503,
      brand: "PC Jeweller",
      name: "Necklace with a prominent bow design and floral details",
      color: "Rose Gold",
      price: 499999,
      rating: 4.9,
      image: necklace3,
    },
    {
      id: 1504,
      brand: "CaratLane",
      name: "Butterfly pendant with Dimond",
      color: "Silver",
      price: 20999,
      rating: 4.8,
      image: necklace4,
    },
    {
      id: 1505,
      brand: "Sukkhi",
      name: "Dimond Style bow nacklace",
      color: "silver",
      price: 2499,
      rating: 4.6,
      image: necklace5,
    },
  ];

  const braceletOptions = [
    {
      id: 1601,
      brand: "Tanishq",
      name: "Elegant Gold Bracelet",
      color: "Gold with pastel lavender",
      price: 31799,
      rating: 4.7,
      image: bracelet1,
    },
    {
      id: 1602,
      brand: "Mia by Tanishq",
      name: "flower dimond desigh",
      color: "Lilac Lavender",
      price: 22499,
      rating: 4.8,
      image: bracelet2,
    },
    {
      id: 1603,
      brand: "CaratLane",
      name: "Designer Diamond Bracelet",
      color: "Silver",
      price: 33499,
      rating: 4.9,
      image: bracelet3,
    },
    {
      id: 1604,
      brand: "PC Jeweller",
      name: "Classic Silver Bracelet",
      color: "silver with lilac lavender",
      price: 1799,
      rating: 4.7,
      image: bracelet4,
    },
    {
      id: 1605,
      brand: "Sukkhi",
      name: "Traditional Bracelet",
      color: "Gold & lavender",
      price: 11999,
      rating: 4.6,
      image: bracelet5,
    },
  ];

  const allCartProducts = [
  ...products,
  ...deals,
  ...watchOptions,
  ...shoeOptions,
  ...earphoneOptions,
  ...bagOptions,
  ...phoneOptions,
  ...laptopOptions,
  ...keyboardOptions,
  ...chairOptions,
  ...cameraOptions,
  ...summerDressOptions,
  ...hoodieOptions,
  ...weddingDressOptions,
  ...engagementDressOptions,
  ...necklaceOptions,
  ...braceletOptions,
];

const toggleWishlist = (product) => {
  const productId = Number(product.product_id ?? product.id);

  const productPrice = Number(
    product.price ?? product.minPrice ?? product.originalPrice
  );

  const productRating = Number(product.rating ?? 0);

  const existing = wishlist.some(
    (item) => Number(item.product_id ?? item.id) === productId
  );

  if (existing) {
    setWishlist((prev) =>
      prev.filter(
        (item) => Number(item.product_id ?? item.id) !== productId
      )
    );

    fetch(`http://https://flora-and-thread-frontend.onrender.com/wishlist/${productId}`, {
      method: "DELETE",
    });

    return;
  }

  const wishlistItem = {
    product_id: productId,
    product_name: product.name,
    price: productPrice,
    rating: productRating,
    image: product.image,
  };

  setWishlist((prev) => [...prev, wishlistItem]);

  fetch("http://https://flora-and-thread-frontend.onrender.com/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wishlistItem),
  });
};
const goToWishlist = () => {
  setShowWishlist(true);
  setShowProfile(false);
  setShowProducts(false);
  setShowCart(false);
  setShowOrders(false);
  setShowDeals(false);
  setShowProductPage(false);
  setShowCheckout(false);
  setOrderPlaced(false);
};

useEffect(() => {
  fetch("http://https://flora-and-thread-frontend.onrender.com/wishlist")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Wishlist load nahi hui");
      }

      return response.json();
    })
    .then((data) => {
      const mergedWishlist = data.map((item) => {
        const catalogProduct = allCartProducts.find(
          (product) => product.id === item.product_id
        );

        if (catalogProduct) {
          return {
            ...catalogProduct,
            ...item,
            product_id: item.product_id,
            name: item.product_name,
            price: Number(item.price),
            rating: Number(item.rating),
          };
        }

        return {
          ...item,
          name: item.product_name,
          price: Number(item.price),
          rating: Number(item.rating),
        };
      });

      setWishlist(mergedWishlist);
    })
    .catch((error) => {
      console.error("Wishlist backend error:", error);
    });
}, []);

const loadCart = () => {
  fetch("http://https://flora-and-thread-frontend.onrender.com/cart")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cart load nahi hua");
      }

      return response.json();
    })
    .then((data) => {
      const mergedCart = data
        .filter((item) => item.quantity > 0)
        .map((item) => {
          const catalogProduct = allCartProducts.find(
            (product) => product.id === item.product_id
          );

          if (catalogProduct) {
            return {
              ...catalogProduct,
              ...item,
              product_id: item.product_id,
              price: Number(item.price),
            };
          }

          return {
            ...item,
            price: Number(item.price),
          };
        });

      if (mergedCart.length > 0) {
        setCart(mergedCart);

        localStorage.setItem(
          "floraThreadCart",
          JSON.stringify(mergedCart)
        );
      } else {
        const savedCart = JSON.parse(
          localStorage.getItem("floraThreadCart") || "[]"
        );

        setCart(savedCart);
      }
    })
    .catch((error) => {
      console.error("Cart backend error:", error);

      const savedCart = JSON.parse(
        localStorage.getItem("floraThreadCart") || "[]"
      );

      setCart(savedCart);
    });
};
  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    localStorage.setItem("floraThreadCart", JSON.stringify(cart));
  }, [cart]);


  if (orderPlaced) {
   return  (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={0}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={() => 
            setShowCart(true)}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
        onOrdersClick={() => {
  setShowProductPage(false);
  setShowOrders(true);
  setShowDeals(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
}}
onProfileClick={() => {
  setShowProfile(true);
  setShowProductPage(false);
  setShowProducts(false);
  setShowDeals(false);
  setShowOrders(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
}}
            onSearchChange={setSearchTerm}
        />

        <div className="order-success-page">
          <div className="order-success-card">
            <div className="success-icon">✓</div>

            <h1>Order Confirmed!</h1>

            <p className="success-message">
              Thank you for your order.
            </p>

            <p className="success-submessage">
              Your order has been placed successfully.
            </p>

            <button
              className="continue-shopping-button"
              onClick={goToProducts}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }
if (showProductPage) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}

        onCartClick={goToCart}

        onProductsClick={goToProducts}

        onDealsClick={() => {
          setShowProductPage(false);
          goToDeals();
        }}

        onOrdersClick={() => {
          setShowProductPage(false);
          setShowOrders(true);
          setShowDeals(false);
          setShowCart(false);
          setShowCheckout(false);
          setOrderPlaced(false);
        }}

        onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
      />

      <div className="products-page">
        <h1>🛍️ Products</h1>
        <p>Explore our products</p>

        <div className="products-list">
          {displayProducts.map((product) => (
            <div className="product-row" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div>
                <h2>{product.name}</h2>
                <p>⭐ {product.rating}</p>
                <p>
                  💰 ₹{product.minPrice} – ₹{product.maxPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 if (showCheckout) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
        onCartClick={() => 
      setShowCart(true)}
        onProductsClick={goToProducts}
        onDealsClick={goToDeals}
        onOrdersClick={goToOrders}
        onProfileClick={() => {
  setShowProfile(true);
  setShowProductPage(false);
  setShowProducts(false);
  setShowDeals(false);
  setShowOrders(false);
  setShowCart(false);
  setShowCheckout(false);
  setOrderPlaced(false);
}}
        onSearchChange={setSearchTerm}
      />
        <div className="checkout-page">
          <button
            className="checkout-back-button"
            onClick={() => setShowCheckout(false)}
          >
            ← Back to Cart
          </button>

          <h1>Checkout</h1>

          <div className="checkout-container">
            <div className="checkout-form">
              <h2>Delivery Details</h2>

              <div className="checkout-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="checkout-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="checkout-field">
                <label>Address</label>
                <textarea
                  rows="4"
                  placeholder="Enter your delivery address"
                ></textarea>
              </div>

              <div className="checkout-row">
                <div className="checkout-field">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="checkout-field">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                  />
                </div>
              </div>

              <h2>Payment Method</h2>

              <div className="payment-options">
                <label>
                  <input
  type="radio"
  name="payment"
  value="Cash on Delivery"
  checked={paymentMethod === "Cash on Delivery"}
  onChange={(e) => setPaymentMethod(e.target.value)}
/>
Cash on Delivery
                </label>

                <label>
                 <input
  type="radio"
  name="payment"
  value="UPI"
  checked={paymentMethod === "UPI"}
  onChange={(e) => setPaymentMethod(e.target.value)}
/>
UPI
                </label>

                <label>
                  <input
  type="radio"
  name="payment"
  value="Card"
  checked={paymentMethod === "Card"}
  onChange={(e) => setPaymentMethod(e.target.value)}
/>
Card
                </label>
              </div>

              <button
                className="place-order-button"
                onClick={async () => {
                  if (checkoutItems.length === 0) {
                    alert("Order karne ke liye koi product select nahi hai.");
                    return;
                  }

                  const orderAmount = Number(checkoutTotalPrice);

                  if (!Number.isFinite(orderAmount) || orderAmount <= 0) {
                    alert("Order amount sahi nahi hai.");
                    return;
                  }

                  try {
                   const orderData = {
  total_amount: orderAmount,
  order_date: new Date().toLocaleDateString("en-IN"),
  items: checkoutItems.map((item) => ({
    product_id: Number(item.product_id ?? item.id),
    product_name: item.name,
    price: Number(item.price),
    quantity: Number(item.quantity)
  }))
};

                    const orderResponse = await fetch(
                      "http://https://flora-and-thread-frontend.onrender.com/orders",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(orderData)
                      }
                    );

                    if (!orderResponse.ok) {
                      throw new Error("Order save nahi hua");
                    }

                    await orderResponse.json();

                    const ordersResponse = await fetch(
                      "http://https://flora-and-thread-frontend.onrender.com/orders"
                    );

                    if (!ordersResponse.ok) {
                      throw new Error("Orders load nahi hue");
                    }

                    const ordersData = await ordersResponse.json();

                    if (!Array.isArray(ordersData) || ordersData.length === 0) {
                      throw new Error("Latest order nahi mila");
                    }

                    const latestOrder = ordersData.reduce((latest, order) =>
                      Number(order.id) > Number(latest.id) ? order : latest
                    );

                    const paymentData = {
                      order_id: Number(latestOrder.id),
                      payment_method: paymentMethod,
                      payment_status: "Pending",
                      amount: orderAmount
                    };

                    const paymentResponse = await fetch(
                      "http://https://flora-and-thread-frontend.onrender.com/payments",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(paymentData)
                      }
                    );

                    if (!paymentResponse.ok) {
                      throw new Error("Payment save nahi hua");
                    }

                    await paymentResponse.json();

                    const savedOrderItems = JSON.parse(
                      localStorage.getItem("floraThreadOrderItems") || "{}"
                    );

                    savedOrderItems[latestOrder.id] = checkoutItems;

                    localStorage.setItem(
                      "floraThreadOrderItems",
                      JSON.stringify(savedOrderItems)
                    );

                    const newOrder = {
                      id: latestOrder.id,
                      date: latestOrder.order_date,
                      items: checkoutItems,
                      totalItems: checkoutTotalItems,
                      totalPrice: Number(latestOrder.total_amount),
                      status: "Order Placed"
                    };

                    setOrders((prevOrders) => [
                      newOrder,
                      ...prevOrders.filter(
                        (order) => order.id !== latestOrder.id
                      )
                    ]);

                    const orderedProductIds = checkoutItems.map(
                      (item) => item.product_id ?? item.id
                    );

                    const remainingCart = cart.filter(
                      (item) =>
                        !orderedProductIds.includes(item.product_id ?? item.id)
                    );

                    setCart(remainingCart);
                    localStorage.setItem(
                      "floraThreadCart",
                      JSON.stringify(remainingCart)
                    );

                    await Promise.all(
                      orderedProductIds.map((productId) =>
                        fetch(
                          `http://https://flora-and-thread-frontend.onrender.com/cart/${productId}?quantity=0`,
                          { method: "PUT" }
                        )
                      )
                    );

                    setCheckoutItems([]);
                    setOrderPlaced(true);
                    setShowCheckout(false);
                  } catch (error) {
                    console.error("Order/Payment backend error:", error);
                    alert(error.message || "Order place nahi hua");
                  }
                }}
              >
                Place Order
              </button>
            </div>

            <div className="checkout-summary">
              <h2>Order Summary</h2>

              {checkoutItems.map((item, index) => (
                <div
                  className="checkout-item"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    {item.brand && (
                      <p>{item.brand}</p>
                    )}

                    {item.color && (
                      <p>Color: {item.color}</p>
                    )}

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <strong>
                      ₹{(
                        item.price * item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>
              ))}

              <div className="checkout-total">
                <p>
                  Total Items:
                  <strong>{checkoutTotalItems}</strong>
                </p>

                <p>
                  Total Price:
                  <strong>
                    ₹{checkoutTotalPrice.toLocaleString("en-IN")}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (showOrders) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
          cartCount={totalItems}
          wishlistCount={wishlist.length}
          onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
          onSearchChange={setSearchTerm}
        />

        <div style={{ padding: "40px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "38px",
              fontWeight: "800",
              color: "#771e33",
              marginBottom: "8px"
            }}
          >
            📦 My Orders
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#830c87",
              fontSize: "17px",
              marginBottom: "30px"
            }}
          >
            Track and manage your recent purchases
          </p>

          {orders.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h2>No orders yet 🛍️</h2>
              <p>Your placed orders will appear here.</p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                style={{
                  maxWidth: "800px",
                  margin: "0 auto 25px",
                  padding: "24px",
                  border: "1px solid #ead6dc",
                  borderRadius: "16px",
                  background: "#fff",
                  boxShadow: "0 4px 15px rgba(168, 95, 112, 0.12)"
                }}
              >
                <h2
                  style={{
                    color: "#0c4f4b",
                    fontSize: "22px",
                    fontWeight: "600",
                    fontFamily: "'Segoe UI', sans-serif",
                    marginBottom: "12px"
                  }}
                >
                  Order #{order.id}
                </h2>

                <p>📅 Date: {order.date}</p>

                <p>
                  📦 Status:
                  <strong style={{ color: "green", marginLeft: "8px" }}>
                    {order.status}
                  </strong>
                </p>

                <p>
                  🛍️ Total Items: <strong>{order.totalItems}</strong>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                    marginBottom: "10px"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    💰 Total:
                    <strong style={{ marginLeft: "8px" }}>
                      ₹{Number(order.totalPrice || 0).toLocaleString("en-IN")}
                    </strong>
                  </p>

                  <button
                    onClick={() => cancelOrder(order.id)}
                    style={{
                      padding: "10px 18px",
                      border: "none",
                      borderRadius: "8px",
                      backgroundColor: "#d71c15",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "600"
                    }}
                  >
                    Cancel Order
                  </button>
                </div>

                <hr />

                {order.items.length === 0 ? (
                  <p>No product details available for this order.</p>
                ) : (
                  order.items.map((item, index) => (
                    <div
                      key={`${order.id}-${item.product_id ?? item.id ?? index}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        marginBottom: "15px",
                        padding: "12px 0",
                        borderBottom: "1px solid #f0dfe5"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />

                      <div style={{ flex: 1 }}>
                        <h3 style={{ margin: "0 0 8px" }}>{item.name}</h3>
                        <p style={{ margin: "5px 0" }}>
                          Quantity: {item.quantity}
                        </p>
                        <p style={{ margin: "5px 0" }}>
                          Price: ₹{Number(item.price || 0).toLocaleString("en-IN")} × {item.quantity} = ₹{(
                            Number(item.price || 0) * Number(item.quantity || 0)
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>

                      <button
                        onClick={() => cancelOrderItem(order.id, index)}
                        style={{
                          padding: "9px 14px",
                          border: "none",
                          borderRadius: "8px",
                          backgroundColor: "#e05a73",
                          color: "white",
                          cursor: "pointer",
                          fontWeight: "600",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Cancel Product
                      </button>
                    </div>
                  ))
                )}
              </div>
            ))
          )}
        </div>
      </>
    );
  }

 if (showDeals) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
        onCartClick={goToCart}
        onProductsClick={goToProducts}
        onDealsClick={goToDeals}
        onOrdersClick={goToOrders}
        onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
      />

      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          🔥 Today's Best Deals
        </h1>

        <p className="deals-subtitle"
        style={{ textAlign: "center", marginBottom: "30px" }}>
          Grab these special offers before they're gone!
        </p>

        <div className="products-grid
          deals-grid">
          {deals.map((deal) => (
            <div className="product-card"
             key={deal.id}>
              <div className="product-image">
              <img
              src={deal.image}
                alt={deal.name}
              
              />
                </div>
              <h3>{deal.name}</h3>

              <p style={{ color: "#777" }}>
                {deal.brand}
              </p>

              <p>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    marginRight: "10px",
                  }}
                >
                  ₹{deal.originalPrice.toLocaleString("en-IN")}
                </span>

                <strong
                  style={{
                    color: "#C97C9D",
                    fontSize: "18px",
                  }}
                >
                  ₹
                  {deal.price.toLocaleString("en-IN", {
                    minimumFractionDigits:
                      deal.price % 1 !== 0 ? 2 : 0,
                    maximumFractionDigits: 2,
                  })}
                </strong>
              </p>

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                🔥 {deal.discount}% OFF
              </p>

              <button 
                className="deals-cart-button"
                onClick={() => {
                  addToCart(deal);
                  setShowDeals(false);
                }}
                >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
if (showProfile) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
        onCartClick={() => {
          setShowProfile(false);
          setShowCart(true);
        }}
        onProductsClick={() => {
          setShowProfile(false);
          goToProducts();
        }}
        onDealsClick={() => {
          setShowProfile(false);
          goToDeals();
        }}
        onOrdersClick={() => {
          setShowProfile(false);
          setShowOrders(true);
        }}
        onProfileClick={() => setShowProfile(true)}
        onSearchChange={setSearchTerm}
      />

      <div className="profile-page">

        <div className="profile-card">

          <div className="profile-avatar">
            👤
          </div>

          <h1>My Profile</h1>

          <p className="profile-subtitle">
            Manage your personal information
          </p>

          <div className="profile-info">
            {isEditingProfile && (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                  />
                </div>
              </>
            )}

            <div className="profile-info-box">
              <span>👤</span>
              <div>
                <small>Name</small>
                <strong>{profile.name || "Flora User"}</strong>
              </div>
            </div>

            <div className="profile-info-box">
              <span>📧</span>
              <div>
                <small>Email</small>
                <strong>{profile.email || "user@example.com"}</strong>
              </div>
            </div>

            <div className="profile-info-box">
              <span>📱</span>
              <div>
                <small>Phone</small>
                <strong>{profile.phone || "+91 XXXXX XXXXX"}</strong>
              </div>
            </div>

            <div className="profile-info-box">
              <span>📍</span>
              <div>
                <small>Address</small>
                <strong>{profile.address || "Your Address"}</strong>
              </div>
            </div>

          </div>

   {isEditingProfile ? (
  <button
    className="edit-profile-btn"
    onClick={() => {
      const profileToSave = {
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        address: profile.address || "",
      };

      setProfile(profileToSave);
      setIsEditingProfile(false);

      localStorage.setItem(
        "floraThreadProfile",
        JSON.stringify(profileToSave)
      );

      fetch("http://https://flora-and-thread-frontend.onrender.com/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileToSave),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Profile save nahi hua");
          }
          return response.json();
        })
        .then(() => {
          setProfile(profileToSave);
          localStorage.setItem(
            "floraThreadProfile",
            JSON.stringify(profileToSave)
          );
        })
        .catch((error) => {
          console.error("Profile save error:", error);
        });
    }}
  >
    💾 Save Profile
  </button>
) : (
  <button
    className="edit-profile-btn"
    onClick={() => setIsEditingProfile(true)}
  >
    ✏️ Edit Profile
  </button>
)}
<button
  className="edit-profile-btn"
  onClick={goToWishlist}
>
  ❤️ My Wishlist
</button>
        </div>

      </div>
    </>
  );
}
  if (showWishlist) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
        onCartClick={goToCart}
        onProductsClick={goToProducts}
        onDealsClick={goToDeals}
        onOrdersClick={goToOrders}
        onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
      />

      <main
        className="wishlist-page"
        style={{
          minHeight: "calc(100vh - 72px)",
          backgroundColor: "#FFF0F5",
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          ❤️ My Wishlist
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#c84675",
            marginBottom: "30px",
          }}
        >
          Your favourite products
        </p>

        {wishlist.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px",
            }}
          >
            <h2>The wishlist is empty right now. ❤️</h2>

            <button
              className="product-cart-button"
              onClick={goToProducts}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {wishlist.map((item) => (
              <div
                className="product-card"
                key={item.product_id}
              >
                <div
                  className="product-image"
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.product_name}
                  />

                  <button
                    onClick={() => toggleWishlist(item)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      border: "none",
                      background: "white",
                      cursor: "pointer",
                      padding: "9px 12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    Remove from Wishlist
                  </button>
                </div>

                <div className="product-info">
                  <h2>{item.product_name}</h2>

                  <p className="product-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="product-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  <button
                    className="product-cart-button"
                    onClick={() => {
                      setCheckoutItems([
                        {
                          ...item,
                          id: item.product_id,
                          name: item.product_name,
                          price: Number(item.price),
                          rating: Number(item.rating),
                          quantity: 1,
                        },
                      ]);
                      setShowCheckout(true);
                    }}
                  >
                    💳 Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}



 if (showCart) {
  return (
    <>
      <Navbar
        onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
        onCartClick={goToCart}
        onProductsClick={goToProducts}
        onDealsClick={goToDeals}
        onOrdersClick={goToOrders}
        onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
      />
        <div className="cart-page">
          <button
            className="cart-back-button"
            onClick={() => setShowCart(false)}
          >
            ← Back to Products
          </button>

          <h1>Your Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty 🛒</h2>
              <p>Add some products to your cart.</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div
                    className="cart-item"
                    key={index}
                  >
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="cart-item-info">
                      <h2>{item.name}</h2>

                      {item.brand && (
                        <p>{item.brand}</p>
                      )}

                      {item.color && (
                        <p>
                          Color: {item.color}
                        </p>
                      )}

                      <h3>
                        ₹{item.price.toLocaleString("en-IN")}
                      </h3>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                        >
                          +
                        </button>
                      </div>

                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <button
                          className="remove-cart-button"
                          onClick={() =>
                            removeFromCart(index)
                          }
                        >
                          Remove
                        </button>

                        <button
                          style={{
                            border: "none",
                            backgroundColor: "#e20960",
                            color: "white",
                            padding: "10px 16px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "600"
                          }}
                          onClick={() => {
                            setCheckoutItems([item]);
                            setShowCheckout(true);
                          }}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h2>Cart Summary</h2>

                <p>
                  Total Items:{" "}
                  <strong>{totalItems}</strong>
                </p>

                <p>
                  Total Price:{" "}
                  <strong>
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </strong>
                </p>

                <button
                  className="checkout-button"
                  onClick={() => {
                    setCheckoutItems(cart);
                    setShowCheckout(true);
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  if (showWatchPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="watch-page">
          <button
            className="watch-back-button"
            onClick={() => setShowWatchPage(false)}
          >
            ← Back
          </button>

          <h1>Watch Options</h1>

          <p className="watch-subtitle">
            Choose your favourite watch
          </p>

          <div className="watch-grid">
            {watchOptions.map((item, index) => (
              <div className="watch-card" key={index}>
                <div className="watch-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="watch-info">
                  <span className="watch-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="watch-color">
                    Color: {item.color}
                  </p>

                  <p className="watch-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="watch-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="watch-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="watch-cart-button"
    onClick={() => toggleWishlist(item)}
  >
  <span style={{ color: "#F3CEEE" }}>♥</span> Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showShoePage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="shoe-page">
          <button
            className="shoe-back-button"
            onClick={() => setShowShoePage(false)}
          >
            ← Back
          </button>

          <h1>Shoe Options</h1>

          <p className="shoe-subtitle">
            Choose your favourite shoes
          </p>

          <div className="shoe-grid">
            {shoeOptions.map((item, index) => (
              <div className="shoe-card" key={index}>
                <div className="shoe-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="shoe-info">
                  <span className="shoe-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="shoe-color">
                    Color: {item.color}
                  </p>

                  <p className="shoe-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="shoe-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="shoe-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="shoe-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE" }}>♥</span> Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showEarphonePage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="earphone-page">
          <button
            className="earphone-back-button"
            onClick={() => setShowEarphonePage(false)}
          >
            ← Back
          </button>

          <h1>Earphone Options</h1>

          <p className="earphone-subtitle">
            Choose your favourite earphones
          </p>

          <div className="earphone-grid">
            {earphoneOptions.map((item, index) => (
              <div
                className="earphone-card"
                key={index}
              >
                <div className="earphone-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="earphone-info">
                  <span className="earphone-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="earphone-color">
                    Color: {item.color}
                  </p>

                  <p className="earphone-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="earphone-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="earphone-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="earphone-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showBagPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="bag-page">
          <button
            className="bag-back-button"
            onClick={() => setShowBagPage(false)}
          >
            ← Back
          </button>

          <h1>Bag Options</h1>

          <p className="bag-subtitle">
            Choose your favourite bag
          </p>

          <div className="bag-grid">
            {bagOptions.map((item, index) => (
              <div className="bag-card" key={index}>
                <div className="bag-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="bag-info">
                  <span className="bag-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="bag-color">
                    Color: {item.color}
                  </p>

                  <p className="bag-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="bag-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="bag-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="bag-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showPhonePage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="phone-page">
          <button
            className="phone-back-button"
            onClick={() => setShowPhonePage(false)}
          >
            ← Back
          </button>

          <h1>Smartphone Options</h1>

          <p className="phone-subtitle">
            Choose your favourite smartphone
          </p>

          <div className="phone-grid">
            {phoneOptions.map((item, index) => (
              <div className="phone-card" key={index}>
                <div className="phone-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="phone-info">
                  <span className="phone-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="phone-color">
                    Color: {item.color}
                  </p>

                  <p className="phone-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="phone-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="phone-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="phone-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showLaptopsPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="laptop-page">
          <button
            className="laptop-back-button"
            onClick={() => setShowLaptopsPage(false)}
          >
            ← Back
          </button>

          <h1>Laptop Options</h1>

          <p className="laptop-subtitle">
            Choose your favourite laptop
          </p>

          <div className="laptop-grid">
            {laptopOptions.map((item, index) => (
              <div className="laptop-card" key={index}>
                <div className="laptop-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="laptop-info">
                  <span className="laptop-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="laptop-color">
                    Color: {item.color}
                  </p>

                  <p className="laptop-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="laptop-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="laptop-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="laptop-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  if (showKeyboardPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="keyboard-page">
          <button
            className="keyboard-back-button"
            onClick={() => setShowKeyboardPage(false)}
          >
            ← Back
          </button>

          <h1>Keyboard Options</h1>

          <p className="keyboard-subtitle">
            Choose your favourite keyboard
          </p>

          <div className="keyboard-grid">
            {keyboardOptions.map((item, index) => (
              <div className="keyboard-card" key={index}>
                <div className="keyboard-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="keyboard-info">
                  <span className="keyboard-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="keyboard-color">
                    Color: {item.color}
                  </p>

                  <p className="keyboard-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="keyboard-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="keyboard-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="keyboard-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showChairPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="chair-page">
          <button
            className="chair-back-button"
            onClick={() => setShowChairPage(false)}
          >
            ← Back
          </button>

          <h1>Chair Options</h1>

          <p className="chair-subtitle">
            Choose your favourite chair
          </p>

          <div className="chair-grid">
            {chairOptions.map((item, index) => (
              <div className="chair-card" key={index}>
                <div className="chair-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="chair-info">
                  <span className="chair-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="chair-color">
                    Color: {item.color}
                  </p>

                  <p className="chair-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="chair-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                 <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="chair-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="chair-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showCameraPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="camera-page">
          <button
            className="camera-back-button"
            onClick={() => setShowCameraPage(false)}
          >
            ← Back
          </button>

          <h1>Camera Options</h1>

          <p className="camera-subtitle">
            Choose your favourite camera
          </p>

          <div className="camera-grid">
            {cameraOptions.map((item, index) => (
              <div className="camera-card" key={index}>
                <div className="camera-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="camera-info">
                  <span className="camera-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="camera-color">
                    Color: {item.color}
                  </p>

                  <p className="camera-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="camera-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="camera-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="camera-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showSummerDressPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="dress-page">
          <button
            className="dress-back-button"
            onClick={() => setShowSummerDressPage(false)}
          >
            ← Back
          </button>

          <h1>Summer Dress Options</h1>

          <p className="dress-subtitle">
            Choose your favourite summer dress
          </p>

          <div className="dress-grid">
            {summerDressOptions.map((item, index) => (
              <div className="dress-card" key={index}>
                <div className="dress-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="dress-info">
                  <span className="dress-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="dress-color">
                    Color: {item.color}
                  </p>

                  <p className="dress-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="dress-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="dress-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="dress-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showHoodiePage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="hoodie-page">
          <button
            className="hoodie-back-button"
            onClick={() => setShowHoodiePage(false)}
          >
            ← Back
          </button>

          <h1>Winter Hoodie Options</h1>

          <p className="hoodie-subtitle">
            Choose your favourite winter hoodie
          </p>

          <div className="hoodie-grid">
            {hoodieOptions.map((item, index) => (
              <div className="hoodie-card" key={index}>
                <div className="hoodie-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="hoodie-info">
                  <span className="hoodie-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="hoodie-color">
                    Color: {item.color}
                  </p>

                  <p className="hoodie-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="hoodie-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="hoodie-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="hoodie-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showWeddingDressPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="wedding-page">
          <button
            className="wedding-back-button"
            onClick={() => setShowWeddingDressPage(false)}
          >
            ← Back
          </button>

          <h1>Wedding Dress Options</h1>

          <p className="wedding-subtitle">
            Choose your favourite wedding dress
          </p>

          <div className="wedding-grid">
            {weddingDressOptions.map((item, index) => (
              <div className="wedding-card" key={index}>
                <div className="wedding-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="wedding-info">
                  <span className="wedding-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="wedding-color">
                    Color: {item.color}
                  </p>

                  <p className="wedding-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="wedding-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="wedding-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="wedding-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showEngagementDressPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="engagement-page">
          <button
            className="engagement-back-button"
            onClick={() => setShowEngagementDressPage(false)}
          >
            ← Back
          </button>

          <h1>Engagement Party Dress Options</h1>

          <p className="engagement-subtitle">
            Choose your favourite engagement party dress
          </p>

          <div className="engagement-grid">
            {engagementDressOptions.map((item, index) => (
              <div className="engagement-card" key={index}>
                <div className="engagement-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="engagement-info">
                  <span className="engagement-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="engagement-color">
                    Color: {item.color}
                  </p>

                  <p className="engagement-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="engagement-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="engagement-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="engagement-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showNecklacePage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="necklace-page">
          <button
            className="necklace-back-button"
            onClick={() => setShowNecklacePage(false)}
          >
            ← Back
          </button>

          <h1>Necklace Options</h1>

          <p className="necklace-subtitle">
            Choose your favourite necklace
          </p>

          <div className="necklace-grid">
            {necklaceOptions.map((item, index) => (
              <div className="necklace-card" key={index}>
                <div className="necklace-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="necklace-info">
                  <span className="necklace-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="necklace-color">
                    Color: {item.color}
                  </p>

                  <p className="necklace-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="necklace-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="necklace-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="necklace-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (showBraceletPage) {
    return (
      <>
        <Navbar
          onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
        onWishlistClick={goToWishlist}
          onCartClick={goToCart}
          onProductsClick={goToProducts}
          onDealsClick={goToDeals}
          onOrdersClick={goToOrders}
          onProfileClick={goToProfile}
        onSearchChange={setSearchTerm}
        />

        <div className="bracelet-page">
          <button
            className="bracelet-back-button"
            onClick={() => setShowBraceletPage(false)}
          >
            ← Back
          </button>

          <h1>Bracelet Options</h1>

          <p className="bracelet-subtitle">
            Choose your favourite bracelet
          </p>

          <div className="bracelet-grid">
            {braceletOptions.map((item, index) => (
              <div className="bracelet-card" key={index}>
                <div className="bracelet-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="bracelet-info">
                  <span className="bracelet-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="bracelet-color">
                    Color: {item.color}
                  </p>

                  <p className="bracelet-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="bracelet-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                 <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    className="bracelet-cart-button"
    onClick={() => addToCart(item)}
  >
    🛒 Add to Cart
  </button>

  <button
    className="bracelet-cart-button"
    onClick={() => toggleWishlist(item)}
  >
    <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
    Add to Wishlist
  </button>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar
  onHomeClick={goToHome}
        cartCount={totalItems}
        wishlistCount={wishlist.length}
  onWishlistClick={goToWishlist}
  onCartClick={goToCart}
  onProductsClick={goToProducts}
  onDealsClick={goToDeals}
  onOrdersClick={goToOrders}
  onProfileClick={() => {
    setShowProfile(true);
    setShowProductPage(false);
    setShowProducts(false);
    setShowDeals(false);
    setShowOrders(false);
    setShowCart(false);
    setShowCheckout(false);
    setOrderPlaced(false);
  }}
  onSearchChange={setSearchTerm}
/>

      <main className="products-page"
       style={{ backgroundColor: "#FFF0F5", minHeight: "calc(100vh - 72px)" }}>
        <div className="products-header">
          <h1
            style={{
              fontFamily: " 'parisienne' cursive",
              color: "#000000",
            }}
          >
            Flora & Thread
          </h1>

          <p style={{ color: "#f6497d" }}>
            Unwrap happiness, one favorite at a time 🩷
          </p>
        </div>
        <div className="category-filter">
  {categories.map((category) => (
    <button
      key={category}
      className={selectedCategory === category ? "active" : ""}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>




        <div className="products-grid">
          {filteredProducts.map((product) => {
            const isWatch =
              product.name === "Smart Watch";

            const isShoe =
              product.name === "Running Shoes";

            const isEarphone =
              product.name === "Wireless Earphones";

            const isBag =
              product.name === "Travel Backpack";

            const isPhone =
              product.name === "Premium Smartphone";

            const isLaptop =
              product.name === "Ultra Slim Laptop";

            const isKeyboard =
              product.name === "Mechanical Keyboard";

            const isChair =
              product.name === "Ergonomic Study Chair";

            const isCamera =
              product.name === "Digital Camera";

            const isSummerDress =
              product.name === "Summer Cotton Dress";

            const isHoodie =
              product.name === "Winter Hoodie";

            const isWeddingDress =
              product.name === "Elegant Wedding Dress";

            const isEngagementDress =
              product.name === "Engagement Party Dress";

            const isNecklace =
              product.name === "Gold Style Necklace";

            const isBracelet =
              product.name === "Elegant Bracelet";

            return (
              <div
                className="product-card"
                key={product.id}
              >
               <div
  className="product-image"
  style={{ position: "relative" }}
>
  <img
    src={product.image}
    alt={product.name}
  />

  
</div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h2>{product.name}</h2>

                  <p className="product-rating">
                    ⭐ {product.rating}
                  </p>

                  {isWatch ? (
                    <>
                      <p className="product-price">
                        Starting at ₹5,000
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowWatchPage(true)
                        }
                      >
                        View Watch Options
                      </button>
                    </>
                  ) : isShoe ? (
                    <>
                      <p className="product-price">
                        Starting at ₹3,499
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowShoePage(true)
                        }
                      >
                        View Shoe Options
                      </button>
                    </>
                  ) : isEarphone ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,199
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowEarphonePage(true)
                        }
                      >
                        View Earphone Options
                      </button>
                    </>
                  ) : isBag ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,000
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowBagPage(true)
                        }
                      >
                        View Bag Options
                      </button>
                    </>
                  ) : isPhone ? (
                    <>
                      <p className="product-price">
                        Starting at ₹50,000
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowPhonePage(true)
                        }
                      >
                        View Phone Options
                      </button>
                    </>
                  ) : isLaptop ? (
                    <>
                      <p className="product-price">
                        Starting at ₹55,000
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowLaptopsPage(true)
                        }
                      >
                        View Laptop Options
                      </button>
                    </>
                  ) : isKeyboard ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,999
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowKeyboardPage(true)
                        }
                      >
                        View Keyboard Options
                      </button>
                    </>
                  ) : isChair ? (
                    <>
                      <p className="product-price">
                        Starting at ₹5,999
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowChairPage(true)
                        }
                      >
                        View Chair Options
                      </button>
                    </>
                  ) : isCamera ? (
                    <>
                      <p className="product-price">
                        Starting at ₹45,000
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowCameraPage(true)
                        }
                      >
                        View Camera Options
                      </button>
                    </>
                  ) : isSummerDress ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,299
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowSummerDressPage(true)
                        }
                      >
                        View Dress Options
                      </button>
                    </>
                  ) : isHoodie ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,999
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowHoodiePage(true)
                        }
                      >
                        View Hoodie Options
                      </button>
                    </>
                  ) : isWeddingDress ? (
                    <>
                      <p className="product-price">
                        Starting at ₹6,999
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowWeddingDressPage(true)
                        }
                      >
                        View Wedding Dress Options
                      </button>
                    </>
                  ) : isNecklace ? (
                    <>
                      <p className="product-price">
                        Starting at ₹2,499
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowNecklacePage(true)
                        }
                      >
                        View Necklace Options
                      </button>
                    </>
                  ) : isBracelet ? (
                    <>
                      <p className="product-price">
                        Starting at ₹1,799
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowBraceletPage(true)
                        }
                      >
                        View Bracelet Options
                      </button>
                    </>
                  ) : isEngagementDress ? (
                    <>
                      <p className="product-price">
                        Starting at ₹4,999
                      </p>

                      <button
                        className="product-options-button"
                        onClick={() =>
                          setShowEngagementDressPage(true)
                        }
                      >
                        View Engagement Dress Options
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="product-price">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <button
                        className="product-cart-button"
                        onClick={() =>
                          addToCart(product)
                        }
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
export default App;