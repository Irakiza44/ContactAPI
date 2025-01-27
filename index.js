const express = require("express");
const errorHandler = require('./middleware/errorHandler');
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config()
connectDb();

const app = express();
const port = 5000;

app.use(express.json());
// Routes
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));
// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});