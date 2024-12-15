# Organic Shop Application

This is a full-stack web application for an organic shop, built using modern web technologies and tools. The application enables users to browse and purchase organic products, while offering an intuitive admin panel for managing products, orders, and customers.

## Features

### User Features

- **Product Browsing**: View a wide range of organic products categorized by type.
- **Search and Filter**: Easily search for products and filter by categories, price range, etc.
- **Shopping Cart**: Add items to the cart and manage the cart before checkout.
- **Secure Checkout**: Place orders securely with an intuitive checkout process.
- **Order Tracking**: Track the status of orders after purchase.

### Admin Features

- **Product Management**: Add, edit, and delete products.
- **Order Management**: View and update the status of customer orders.
- **Customer Management**: Manage customer profiles and activities.

### Additional Features

- **Authentication**: Secure user and admin authentication using JWT.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Real-Time Updates**: Leverage Axios for seamless data fetching and real-time updates.

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **React Router DOM**: For routing and navigation.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making API requests.

### Backend

- **Express.js**: For building the server and RESTful APIs.
- **MongoDB**: For storing data such as products, orders, and user information.

### Tools and Libraries

- **JWT (JSON Web Token)**: For authentication.
- **Mongoose**: For interacting with MongoDB.
- **Dotenv**: For managing environment variables.
- **Nodemon**: For backend development with live reloading.

## Live 🚀🚀🚀

-- [**Organic Shop**](https://organic-shop-ten.vercel.app/)

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB instance (local or cloud-based).

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mamun-ethan/Organic-shop-MERN-e-commerce.git
   cd organic-shop
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   ```

4. **Run the Application**:

   - Start the backend server:
     ```bash
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
organic-shop/
├── client/             # Frontend code
│   ├── public/         # Static files
│   ├── src/            # React components and pages
│   └── tailwind.config.js # Tailwind configuration
├── server/             # Backend code
│   ├── controllers/    # API logic
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── server.js       # Main server file
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Ensure your code follows the established conventions and is thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding!
