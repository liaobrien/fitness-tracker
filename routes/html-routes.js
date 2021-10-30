const router = require('express').Router();
const path = require('path');

// render home page
router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
});

// render stats page
router.get('/stats', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router;