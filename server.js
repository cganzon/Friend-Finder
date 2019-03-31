// Dependencies
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Linking API and HTML routes so the server can use them
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts up the server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});