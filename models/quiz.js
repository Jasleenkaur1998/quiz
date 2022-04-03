const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const Quiz = mongoose.model('QuizSchema', QuizSchema);

module.exports = Quiz;