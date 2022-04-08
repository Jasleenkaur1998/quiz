const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    score: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },

})

const Quiz = mongoose.model('ScoreSchema', ScoreSchema);

module.exports = Quiz;