const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expensesRouter = require('./routes/expenses');
const incomeRouter = require('./routes/income');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/money_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/expenses', expensesRouter);
app.use('/income', incomeRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
