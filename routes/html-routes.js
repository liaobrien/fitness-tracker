const router = require('express').Router();
const path = require('path');

// render home page
router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname + 'index.html'));
});

