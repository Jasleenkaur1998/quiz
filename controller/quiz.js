const Quiz = require('../models/quiz');

function fetchQuiz(request, response) {
    Quiz.find().then(function (data) {
        return response.status(200).json({
            output: data
        })
    }).catch(function (error) {
        return response.status(500).json({
            error: error
        })
    })
}

function createQuestion(request, response) {
    let question = new Quiz(request.body);
    question.save()
        .then(result => {
            return response.status(201).json({
                message: "Question Created Succesfully",
                output: result
            })
        })
        .catch(error => {
            return response.status(500).json({
                error: error
            })
        });
}


function fetchQuestionsByCategory(request, response) {
    let category = request.params.category;
    Quiz.find({ "category": category }).then((result) => {
        return response.status(200).json({
            output: result
        })
    }).catch((error) => {
        return response.status(500).json({
            error: error
        })
    })
}

module.exports = {
    fetchQuiz,
    createQuestion,
    fetchQuestionsByCategory
}
