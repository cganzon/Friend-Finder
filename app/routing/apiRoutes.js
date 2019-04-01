// Getting data from friends.js file
const friendsList = require("../data/friends");

module.exports = (app) => {
    // Routes
    app.get("/api/friends", (req, res) => {
        res.json(friendsList);
    });

    // Adding to friends API after user takes the survey
    app.post("/api/friends", (req, res) => {

        console.log(req.body);
        for (let i = 0; i < req.body.scores.length; i++) {
            // Converting scores to integers
            req.body.scores[i] = parseInt(req.body.scores[i]);
        };
        // Initial best friend data to compare to
        let bestFriend = friendsList[0];
        let minDiff = 50;
        // Best friend search logic
        for (let i = 0; i < friendsList.length; i++) {
            let totalDiff = 0;
            for (let j = 0; j < friendsList[i].scores.length; j++) {
                let scoreDiff = Math.abs(req.body.scores[j] - friendsList[i].scores[j]);
                totalDiff += scoreDiff;
                console.log(totalDiff);
            };

            if (totalDiff < minDiff) {
                minDiff = totalDiff;
                bestFriend = friendsList[i];
            };
        };
        // Adding user to friends array after search is done
        friendsList.push(req.body);
        // Sending back response of the user's best friend match
        res.json(bestFriend);
    });
};
