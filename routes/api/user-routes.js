const router = require('express').Router();

// Creates the first route, the route for this is localhost:3000/api/user/
router.get('/', (req, res) => {
    res.send('hello world!');
});

module.exports = router;