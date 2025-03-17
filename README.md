# Warehouse Inventory Management System

## Overview
The **Warehouse Inventory Management System** is a full-stack web application designed to streamline the management of factory warehouse inventory. Built using **React**, **Node.js**, and **MongoDB**, this system allows users to efficiently track and manage warehouse stock.

## Features
- **Secure Authentication**: User signup & login system with email and password authentication.
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/8e05cc88-003d-49c1-bf41-b689972ed3b2" />
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/643d7cd9-ea90-4e24-8a06-659cf1cd6c4a" />



- **Inventory Management**:
  - Add new items to the warehouse stock.
  - Remove items when they are used or shipped.
  - Restock existing items when new supplies arrive.
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/2d604b50-ac86-446f-92a7-9a6e57ec79d3" />

- **User-Friendly Interface**: A responsive frontend built with **React** for seamless interaction.
- **Scalable Backend**:
  - **Node.js** and **Express.js** handle API requests efficiently.
  - **MongoDB** for reliable and scalable data storage.

## Tech Stack
- **Frontend**: React.js (with modern hooks and components)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: Secure login system with hashed passwords

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/InventorySys.git
   cd InventorySys
   ```
2. **Install dependencies for backend and frontend:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. **Start MongoDB (if running locally):**
   ```bash
   mongod
   ```
4. **Run the backend server:**
   ```bash
   cd backend
   npm start
   ```
5. **Run the frontend application:**
   ```bash
   cd frontend
   npm start
   ```
6. Open `http://localhost:3000` in your browser.

## Future Enhancements
- Data reports
- Role-based access control (Admin/User permissions)

---
Developed with ❤️ by Koalazodiac

