import bags from "../assets/products/bags.jpg";
import bracelet from "../assets/products/bracelet.jpg";
import camera from "../assets/products/camera.jpg";
import chair from "../assets/products/chair.jpg";
import dress from "../assets/products/dress.jpg";
import Earphone from "../assets/products/Earphone.jpg";
import Gowns from "../assets/products/Gowns.jpg";
import hoddie from "../assets/products/hoddie.jpg";
import keyboard from "../assets/products/keyboard.jpg";
import laptop from "../assets/products/laptop.jpg";
import necklace from "../assets/products/necklace.jpg";
import partydress from "../assets/products/partydress.jpg";
import phones from "../assets/products/phones.jpg";
import shose from "../assets/products/shose.jpg";
import watch from "../assets/products/watch.jpg";

 const products = [
  {
    id: 1,
    name: "Wireless Earphones",
    price: 2499,
    minPrice: 1199,
    maxPrice: 4499,
    rating: 4.5,
    category: "Audio",
    image: Earphone
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    minPrice: 5000,
    maxPrice: 400000,
    rating: 4.7,
    category: "Wearables",
    image: watch
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 3499,
    minPrice: 3499,
    maxPrice: 4999,
    rating: 4.4,
    category: "Footwear",
    image: shose
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 1599,
    minPrice: 1000,
    maxPrice: 5000,
    rating: 4.6,
    category: "Travel",
    image: bags
  },
  {
    id: 5,
    name: "Premium Smartphone",
    price: 24999,
    minPrice: 50000,
    maxPrice: 136000,
    rating: 4.6,
    category: "Smartphones",
    image: phones
  },
  {
    id: 6,
    name: "Ultra Slim Laptop",
    price: 64999,
    minPrice: 55000,
    maxPrice: 200000,
    rating: 4.8,
    category: "Laptops",
    image: laptop
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 4999,
    minPrice: 1999,
    maxPrice: 5999,
    rating: 4.5,
    category: "Accessories",
    image: keyboard
  },
  {
    id: 8,
    name: "Ergonomic Study Chair",
    price: 8999,
    minPrice: 5999,
    maxPrice: 8999,
    rating: 4.4,
    category: "Furniture",
    image: chair
  },
  {
    id: 9,
    name: "Digital Camera",
    price: 32999,
    minPrice: 45000,
    maxPrice: 65000,
    rating: 4.7,
    category: "Cameras",
    image: camera
  },
  {
    id: 10,
    name: "Summer Cotton Dress",
    price: 1499,
    minPrice: 1299,
    maxPrice: 2499,
    rating: 4.5,
    category: "Clothing",
    image: dress
  },
  {
    id: 11,
    name: "Winter Hoodie",
    price: 1999,
    minPrice: 1999,
    maxPrice: 2999,
    rating: 4.6,
    category: "Clothing",
    image: hoddie
  },
  {
    id: 12,
    name: "Elegant Wedding Dress",
    price: 8999,
    minPrice: 6940,
    maxPrice: 9999,
    rating: 4.8,
    category: "Wedding & Engagement",
    image: Gowns
  },
  {
    id: 13,
    name: "Engagement Party Dress",
    price: 5999,
    minPrice: 4999,
    maxPrice: 7999,
    rating: 4.7,
    category: "Wedding & Engagement",
    image: partydress
  },
  {
    id: 14,
    name: "Gold Style Necklace",
    price: 2999,
    minPrice: 2499,
    maxPrice: 499999,
    rating: 4.6,
    category: "Jewelry",
    image: necklace
  },
  {
    id: 15,
    name: "Elegant Bracelet",
    price: 1799,
    minPrice: 1799,
    maxPrice: 33493,
    rating: 4.5,
    category: "Jewelry",
    image: bracelet
  }
];

export default products;