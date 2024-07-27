// src/Pages/Menu.jsx
import React from 'react';
import { Link } from "react-router-dom";
const Menu = () => {
  const menuData = [
    {
      cuisine: "Indian",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Paneer Tikka", price: "180" },
            { name: "Samosa", price: "25" },
            { name: "Chole Bhature", price: "150" },
            { name: "Aloo Tikki", price: "100" },
            { name: "Veg Pakora", price: "150" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Butter Chicken", price: "250" },
            { name: "Palak Paneer", price: "180" },
            { name: "Biryani", price: "300" },
            { name: "Dal Makhani", price: "180" },
            { name: "Rogan Josh", price: "300" },
          ],
        },
        {
          name: "Breads",
          items: [
            { name: "Naan", price: "25" },
            { name: "Roti", price: "10" },
            { name: "Aloo Paratha", price: "60" },
          ],
        },
      ],
    },
    {
      cuisine: "Chinese",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Spring Rolls", price: "100" },
            { name: "Manchow Soup", price: "100" },
            { name: "Veg Momos", price: "70" },
            { name: "Chilli Paneer", price: "120" },
            { name: "Honey Chilli Potato", price: "100" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Fried Rice", price: "100" },
            { name: "Hakka Noodles", price: "120" },
            { name: "Schezwan Noodles", price: "130" },
            { name: "Kung Pao Tofu", price: "100" },
            { name: "Sweet and Sour Vegetables", price: "100" },
          ],
        },
      ],
    },
    {
      cuisine: "Italian",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Bruschetta", price: "170" },
            { name: "Garlic Bread", price: "100" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Margherita Pizza", price: "200" },
            { name: "Pasta Alfredo", price: "140" },
            { name: "Lasagna", price: "160" },
            { name: "Risotto", price: "130" },
          ],
        },
      ],
    },
  ];

  const beverages = [
    { name: "Coke", price: "60" },
    { name: "Lemonade", price: "40" },
    { name: "Mango Lassi", price: "50" },
    { name: "Masala Chai", price: "20" },
    { name: "Iced Coffee", price: "80" },
  ];

  const desserts = [
    { name: "Gulab Jamun", price: "30" },
    { name: "Rasgulla", price: "30" },
    { name: "Tiramisu", price: "60" },
    { name: "Cheesecake", price: "70" },
    { name: "Brownie with Ice Cream", price: "80" },
  ];

  return (
    <div className="menu-page">
      {menuData.map((cuisine, index) => (
        <div className="cuisine-section" key={index}>
          <h2>{cuisine.cuisine}</h2>
          {cuisine.sections.map((section, idx) => (
            <div className="menu-section" key={idx}>
              <h3>{section.name}</h3>
              <div className="menu-items">
                {section.items.map((item, i) => (
                  <div className="menu-item" key={i}>
                    <span>{item.name}</span>
                    <span>Rs {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="beverages-section">
        <h2>Beverages</h2>
        <div className="menu-items">
          {beverages.map((item, i) => (
            <div className="menu-item" key={i}>
              <span>{item.name}</span>
              <span>Rs {item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="desserts-section">
        <h2>Desserts</h2>
        <div className="menu-items">
          {desserts.map((item, i) => (
            <div className="menu-item" key={i}>
              <span>{item.name}</span>
              <span>Rs {item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-home">
        <Link to={"/"}>
          <button className="back-home-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
