const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/dbConfig")
const routes = require("./routes");
const errorHandler = require("./middlewares/errorMiddleware");
// Custom CORS middleware (ensure it's the first middleware)
app.use(cors({
    origin: ['http://localhost:3000','*'],  // Allow specific frontend origin
    credentials: true,  // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
}));

// Connect to the database
connectDB()

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes

const userRoutes = require("./routes/v1/adminRoutes");
// const productRoutes = require("./routes/productRoutes");
// const dealRoutes = require("./routes/dealRoutes");
// const categoryRoutes = require("./routes/CategoryRoutes");
// const SubCategoryRoutes = require("./routes/SubCategory");

// Parse JSON requests
app.use(express.json());
app.use("/api/v1/admin" , userRoutes)

// Define routes
// app.use("/user", userRoutes);
// app.use("/product", productRoutes);
// app.use("/deal", dealRoutes);
// app.use("/category", categoryRoutes);
// app.use("/subCategory", SubCategoryRoutes);

// Start the server
const port = process.env.PORT || 8006;  // Use the port from environment variable or default to 8002
app.listen(port, () => {
    console.log("Server running on "+ port);
});

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});
// Error Middleware
app.use(errorHandler);