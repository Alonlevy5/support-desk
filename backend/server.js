const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const path = require('path');
const PORT = process.env.PORT || 5000;

// Connect to databases
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Create GET request
app.get("/alon", (req, res) => {
  res.send("Express on Vercel");
});

// Serve FrontEnd
if (process.env.NODE_ENV == 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} 
// else {
//   app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Welcome to the Apple Support Desk API' });
//   });
// }

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));


module.exports = app;