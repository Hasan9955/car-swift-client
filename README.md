# Car Swift

Car Swift is a comprehensive car rental application that allows users to browse, reserve, and manage car rentals. The platform provides an intuitive user interface, secure payment processing, and a robust backend for managing bookings and fleet details.

## Live Link

[Car Swift Live Application](https://car-swift-client.vercel.app/) 

---

## **Features**

### **User Features**
- **Browse Cars**: Users can browse available cars with detailed descriptions and images.
- **Reservation System**: Users can book cars for specific dates and times.
- **Payment Gateway**: Secure payment processing with Stripe integration.
- **User Dashboard**: View past and upcoming bookings.

### **Admin Features**
- **Admin Dashboard**: Manage cars, view reservations, and control user activity.
- **Car Management**: Add, update, and delete cars from the fleet.
- **Booking Management**: View and manage all customer bookings.

---

## **Technologies Used**

### **Frontend**
- **React.js**: For building dynamic and responsive user interfaces.
- **Redux**: State management for seamless user experience.
- **TypeScript**: For strong type-checking and better developer experience.
- **Stripe**: For secure payment processing.
- **Tailwind CSS**: For fast, responsive, and modern styling.

### **Backend**
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web server for API endpoints.
- **MongoDB**: NoSQL database for storing users, bookings, and cars.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **JWT**: Authentication and authorization.

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed on your system:
- **Node.js**
- **MongoDB**
- **Git**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/car-swift.git
   ```
2. Navigate to the project directory:
   ```bash
   cd car-swift
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

4. Set up environment variables. Create a `.env` file in the `backend` folder and add the following:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

5. Start the development servers:
   ```bash
   # Start backend server
   cd backend && npm run dev

   # Start frontend server
   cd frontend && npm start
   ```

--- 

## **Available Scripts**

In the `frontend` and `backend` directories, you can run:

### **Frontend Scripts**
```bash
npm start       # Runs the app in the development mode
npm run build   # Builds the app for production
```

### **Backend Scripts**
```bash
npm run dev     # Runs the server in development mode with nodemon
npm start       # Runs the server in production mode
```

---

## **Environment Variables**

The following environment variables must be set in the `.env` file in the `backend/` directory:

| Key                 | Description                        |
|--------------------|------------------------------------|
| **MONGO_URI**       | Connection string for MongoDB      |
| **JWT_SECRET**      | Secret key for JWT authentication  |
| **STRIPE_SECRET_KEY** | Secret key for Stripe payments    |

---

## **API Endpoints**

### **User Endpoints**
- **POST** `/auth/register` - Register a new user
- **POST** `/auth/login` - User login
- **GET** `/user/profile` - Get user profile

### **Car Endpoints**
- **GET** `/cars` - Get all available cars
- **GET** `/cars/:id` - Get details of a specific car

### **Booking Endpoints**
- **POST** `/bookings` - Create a new booking
- **GET** `/bookings` - Get user's bookings
- **DELETE** `/bookings/:id` - Cancel a booking

---

## **Why We Chose These Technologies**

### **React & Redux**
- **React** provides a fast, dynamic, and responsive user interface.
- **Redux** offers a centralized state management solution for handling complex state logic.

### **Stripe**
- Stripe ensures secure, fast, and reliable payment processing.

### **Node.js & Express**
- **Node.js** allows for non-blocking, event-driven architecture.
- **Express** simplifies the creation of API endpoints.

### **MongoDB & Mongoose**
- **MongoDB**'s NoSQL structure offers flexibility and scalability.
- **Mongoose** allows for schema-based modeling, ensuring data consistency.

---

## **Contributing**

We welcome contributions from the community. To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature name'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


If you have any questions or issues, feel free to contact us at hasanbinali7556@gmail.com.

