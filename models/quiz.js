const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: Boolean,
        required: true
    },
    options: [{
        type: Boolean,
        required: true
    }],
    category: {
        type: String,
        required: true
    }
})

const Quiz = mongoose.model('QuizSchema', QuizSchema);

module.exports = Quiz;