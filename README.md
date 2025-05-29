# 🛒 FreshCart - Grocery Delivery Web App

**FreshCart** is a full-stack grocery delivery eCommerce platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It features a customer storefront for browsing and ordering groceries, and a seller dashboard for managing products, stock, and orders.

## 🌐 Live Demo

👉 [Visit FreshCart](https://fresh-cart-rust-six.vercel.app)
👉 [Visit FreshCart Seller](https://fresh-cart-rust-six.vercel.app/seller)

---

## 🚀 Features

### 🛍️ User Features
- Browse grocery products by categories
- View product details
- Add to cart and manage cart items
- Place orders with **online payment integration**
- Responsive and mobile-friendly design

### 🔧 Admin/Seller Features
- Secure admin login
- Add, edit, and delete products
- Manage inventory/stock
- View and manage customer orders

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – for building interactive UI
- **Tailwind CSS** – for fast and responsive styling

### Backend
- **Node.js** + **Express.js** – RESTful API and server-side logic
- **MongoDB** – NoSQL database for storing user data, products, and orders
- **Stripe** – Online payment integration

---

## 📂 Project Structure

Fresh-Cart/
├── client/                   
│   ├── public/              
│   ├── src/
│   │   ├── assets/         
│   │   ├── components/       
│   │   ├── pages/            
│   │   ├── redux/            
│   │   ├── App.jsx           
│   │   └── main.jsx          
│   ├── tailwind.config.js    
│   ├── vite.config.js        
│   └── .env                  
│
├── server/                   
│   ├── controllers/          
│   ├── models/               
│   ├── routes/               
│   ├── config/               
│   ├── middlewares/          
│   ├── server.js             
│   └── .env                 
│
├── package.json             
├── README.md                
└── .gitignore


## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB Atlas or local MongoDB
- Stripe and Cloudinary accounts (for payments and image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/vijayy75/Fresh-Cart.git
cd Fresh-Cart
cd server
npm install
cd ../client
npm install
cd ../server
npm run server
cd ../client
npm run dev
```


## 📄 License

This project is open source and available under the MIT License.

## 📬 Contact

For any questions or feedback:  
**Vijay Kumar**  
Email: vijayykumar051@gmail.com 
GitHub: [@vijayy75](https://github.com/vijayy75)


