const express = require('express');
const Score = require('../controller/score');
const router = express.Router();

router.get('/', Score.fetchScoreBoard );
router.post('/', Score.createScore);

module.exports = router;