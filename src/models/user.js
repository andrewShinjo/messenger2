const mongoose = require("mongoose"); // Importing the mongoose package.

const userSchema = new mongoose.Schema({
    _id: String,                            
    friendList: [ { type: String } ],       // List contains user ID of each friend
    friendRequests: [ { type: String } ],   // List contains user ID of each user
                                            // who sent a friend request

    conversations: [ { type: String } ]     // List of conversationIds
                                            // user belongs to

});

// Exporting user schema so other files can use it.
module.exports = mongoose.model("User", userSchema);
