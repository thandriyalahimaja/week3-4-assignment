# E-Commerce Backend API

A Node.js/Express backend server for an e-commerce platform with user management, product catalog, and shopping cart functionality. The server connects to MongoDB for persistent data storage.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Features](#features)
- [Technologies Used](#technologies-used)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (Local instance running on default port `27017`)

## 📁 Project Structure

```
e-commerce/
├── server.js                 # Main server entry point
├── package.json              # Project dependencies and metadata
├── reg.http                  # API endpoint examples (REST Client format)
├── APIs/
│   ├── userAPI.js           # User management routes
│   └── productAPI.js        # Product management routes
├── models/
│   ├── userModel.js         # User database schema
│   └── productModel.js      # Product database schema
└── middlewares/
    └── verifyToken.js       # JWT token verification middleware
```

## 🚀 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd e-commerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `express` (^5.2.1) - Web framework
   - `mongoose` (^9.1.5) - MongoDB ODM

## ⚙️ Configuration

### MongoDB Connection

The server connects to MongoDB at `mongodb://localhost:27017/` by default.

**To use a different MongoDB URL:**
1. Edit `server.js`
2. Replace the connection string in the `connectDB()` function:
   ```javascript
   await connect('YOUR_MONGODB_URL')
   ```

### Server Port

Default port is **4000**. To change it, modify the `port` variable in `server.js`:
```javascript
const port = 4000;
```

## ▶️ Running the Server

1. **Ensure MongoDB is running:**
   ```bash
   mongod
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Expected output:**
   ```
   db connection successful
   server is running on port 4000..
   ```

## 🔌 API Endpoints

### User API Routes (`/user-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/users` | Retrieve all users |
| POST | `/user-api/users` | Create a new user |
| PUT | `/user-api/user-cart/:userid/product/:productid` | Add/Update product in user's cart |

#### User Request Examples:

**Get All Users:**
```http
GET http://localhost:4000/user-api/users
```

**Create New User:**
```http
POST http://localhost:4000/user-api/users
Content-Type: application/json

{
    "name": "sam",
    "email": "sam12@gmail.com",
    "password": "sam",
    "cart": []
}
```

**Update User Cart:**
```http
PUT http://localhost:4000/user-api/user-cart/userid/698072aa644f7c18ddd5c4ba/product/69807090df81961f14e5e6ab
```

---

### Product API Routes (`/product-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/product-api/products` | Retrieve all products |
| POST | `/product-api/products` | Create a new product |

#### Product Request Examples:

**Get All Products:**
```http
GET http://localhost:4000/product-api/products
```

**Create New Product:**
```http
POST http://localhost:4000/product-api/products
Content-Type: application/json

{
    "productName": "tv",
    "price": 300,
    "brand": "philips"
}
```

## 📊 Database Models

### User Model

**Fields:**
- `name` (String) - User's full name
- `email` (String) - User's email address
- `password` (String) - User's password (consider hashing in production)
- `cart` (Array) - Array of product IDs in the user's shopping cart

### Product Model

**Fields:**
- `productName` (String) - Name of the product
- `price` (Number) - Product price
- `brand` (String) - Product brand/manufacturer

## ✨ Features

- ✅ User management (Create, Read)
- ✅ Product catalog (Create, Read)
- ✅ Shopping cart functionality (In development)
- ✅ MongoDB integration via Mongoose
- ✅ RESTful API architecture
- ✅ Express middleware support for JSON parsing

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express** | Web application framework |
| **Mongoose** | MongoDB object modeling |
| **MongoDB** | NoSQL database |

## 📝 Testing API Endpoints

You can test the API endpoints using:
- **REST Client Extension** (VS Code) - Use the provided `reg.http` file
- **Postman** - Import the endpoints
- **cURL** - Command-line tool
- **Thunder Client** - VS Code extension

## 🔒 Security Notes (For Production)

- Implement password hashing (bcrypt)
- Add input validation and sanitization
- Complete JWT token verification implementation
- Add error handling and validation middleware
- Use environment variables for sensitive data

## 📞 Support & Documentation

For more information about the technologies used:
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

**Version:** 1.0.0  
**Last Updated:** May 2026
