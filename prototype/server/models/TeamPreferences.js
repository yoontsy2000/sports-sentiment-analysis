const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TeamPrefSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    teams: {
        type: [String],
        required: true
    }  
});

module.exports = TeamPreferences = mongoose.model("teampreference", TeamPrefSchema);


