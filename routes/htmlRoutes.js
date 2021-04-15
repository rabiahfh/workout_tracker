const router = require('express').Router();
const path = require('path');

// Allow the user to navigate to the exercise page we want to send the exercise.html
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
})


router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
})

module.exports = router;