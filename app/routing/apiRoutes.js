// Getting data from friends.js file
const friendsList = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendsList);
    });

    // Adding to friends list API after user takes the survey
    app.post("/api/friends", (req, res) => {
            friendsList.push(req.body);
    });
};
