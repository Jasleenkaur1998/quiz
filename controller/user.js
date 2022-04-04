const User = require('../models/user');

function fetchUsers(request, response) {
    User.find().then(function (data) {
        return response.status(200).json({
            data: data
        })
    }).catch(function (error) {
        return response.status(500).json({
            error: error
        })
    })
}

function signupUser(request, response) {
    let user = new User(request.body);
    user.save()
        .then(result => {
            return response.status(201).json({
                message: "User created",
                data: result
            })
        })
        .catch(error => {
            return response.status(500).json({
                error: error
            })
        });
}

function loginUser(request, response) {
    let user = request.body;
    console.log(user, "user");

    User.findOne({ "email": user.email }).then((result) => {

        if (result) {
            // If password matches 
            if (result.password == user.password) {
                return response.status(200).json({
                    output: result,
                    message: "Logged in"
                })
            } else { // If password doesnot match
                return response.status(401).json({
                    message: "Password incorrect"
                })
            }

        } else {
            return response.status(401).json({
                message: "User Not found"
            })
        }

    })
}

function fetchUserById(request, response) {
    let paramId = request.params.id;
    User.findOne({ "_id": paramId }).then((result) => {
        return response.status(200).json({
            data: result
        })
    }).catch((error) => {
        return response.status(500).json({
            error: error
        })
    })
}

module.exports = {
    signupUser,
    fetchUsers,
    fetchUserById,
    loginUser
}
