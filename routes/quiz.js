const express = require('express');
const { fetchQuiz, fetchQuestionsByCategory, createQuestion } = require('../controller/quiz');
const router = express.Router();

router.get('/', fetchQuiz );
router.get('/:category', fetchQuestionsByCategory);
router.post('/', createQuestion);

module.exports = router;