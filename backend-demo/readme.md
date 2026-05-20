# Backend Demo Project

## Overview

The **Backend Demo Project** is a simple backend application developed using:

* Node.js
* Express.js
* MongoDB
* Mongoose

This project demonstrates:

* REST API development
* User authentication
* JWT token verification
* Password encryption
* Middleware handling
* CRUD operations

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* jsonwebtoken
* cookie-parser

---

# Features

## User Features

* User Registration
* User Login
* Secure Password Hashing
* JWT Authentication
* Protected Routes

## Product Features

* Add Products
* Get Products
* Update Products
* Delete Products

## Backend Features

* REST APIs
* Middleware Verification
* MongoDB Database Integration
* Error Handling

---

# Project Structure

```bash
backend-demo/
│
├── APIs/
│   ├── ProductAPI.js
│   └── UserApi.js
│
├── middlewares/
│   └── verifyToken.js
│
├── models/
│   ├── ProductModel.js
│   └── UserModel.js
│
├── index.js
├── package.json
└── README.md
```

---

# Folder Explanation

## APIs/

Contains all backend route APIs.

### ProductAPI.js

Handles:

* Add product
* Get products
* Update product
* Delete product

### UserApi.js

Handles:

* User registration
* User login
* Authentication

---

## middlewares/

Contains middleware functions.

### verifyToken.js

Used for:

* JWT token verification
* Protecting private routes

---

## models/

Contains MongoDB schemas.

### ProductModel.js

Defines product schema.

### UserModel.js

Defines user schema.

---

# Installation Steps

## Step 1: Open Project Folder

```bash
cd backend-demo
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Install Required Packages

```bash
npm install express mongoose bcryptjs jsonwebtoken cookie-parser
```

---

## Step 4: Start Server

```bash
node index.js
```

Server will run on:

```bash
http://localhost:3000
```

---

# MongoDB Connection

Example MongoDB connection:

```js
mongoose.connect("mongodb://127.0.0.1:27017/backendDemoDB")
```

---

# API Endpoints

## User APIs

### Register User

```http
POST /register
```

### Login User

```http
POST /login
```

---

## Product APIs

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

---

# Middleware Usage

The project uses middleware for:

* Token verification
* Authentication
* Route protection

Example:

```js
app.use(verifyToken)
```

---

# HTTP Methods Used

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch Data  |
| POST   | Create Data |
| PUT    | Update Data |
| DELETE | Delete Data |

---

# Learning Outcomes

After completing this project, you will understand:

* Backend development basics
* Express.js routing
* MongoDB integration
* JWT authentication
* Middleware handling
* CRUD operations
* API testing

---

# Future Improvements

Possible enhancements:

* Add frontend integration
* Add admin panel
* Add role-based authorization
* Add validation
* Add image uploads
* Add pagination
* Improve error handling

---

# Author

**Himaja Chakravarthy**
B.Tech – Information Technology
Anurag University

---

# Conclusion

This Backend Demo Project is a beginner-friendly backend application that helps in learning real-world backend development concepts using Node.js, Express.js, and MongoDB.
