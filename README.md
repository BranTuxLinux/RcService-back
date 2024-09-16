# RC Service - Backend

This repository contains the backend for the **RC Service** application, a service management platform. The backend is built with **Node.js** and **Express**, using **MongoDB** as the database, and other modern technologies like **JWT** for authentication and **Nodemailer** for email handling.

## Features

- **Secure authentication** using **JWT** (JSON Web Tokens).
- **Password encryption** with **bcrypt**.
- **MongoDB connection** using **Mongoose** for database management.
- **CORS enabled** to allow requests from different origins.
- **Body parsing** for handling JSON and form data.
- **Request logging** with **morgan**.
- **Email sending** via **Nodemailer**.
- Use of **dotenv** for managing environment variables.

## Requirements

Before running the backend, ensure you have the following components installed:

- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/usuario/rcservice-backend.git
