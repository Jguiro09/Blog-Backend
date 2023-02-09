// Importing Router Library to help incorporate the created routes
const router = require('express').Router();

// importing routes from the API folder
const apiRoutes = require('./api');

// Applying the apiRoutes from the importing library
router.use('/api', apiRoutes);

module.exports = router;