const Score = require('../models/score');

function fetchScoreBoard(request, response) {
    Score.find(). populate("user").then(function (data) {
        return response.status(200).json({
            output: data
        })
    }).catch(function (error) {
        return response.status(500).json({
            error: error
        })
    })
}

function createScore(request, response) {
    let score = new Score(request.body);
    console.log(request.body);
    score.save()
        .then(function(result) {
            return response.status(201).json({
                message: "Score saved Succesfully",
                output: result
            })
        })
        .catch(function(error) {
            return response.status(500).json({
                error: error
            })
        });
}


module.exports =  { fetchScoreBoard, createScore };