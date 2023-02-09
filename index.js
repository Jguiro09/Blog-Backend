// Import Express (Backend Framework: http://expressjs.com/)
const express = require('express');
const app = express();
const port = 3000;

// Importing Routes for your backend (user CRUD (create read update delete) routes etc)
const routes = require('./routes/');

// A middleware that will only parse JSON items
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declaring the routes to be used in the app
app.use(routes);

// App starting and listening on port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})