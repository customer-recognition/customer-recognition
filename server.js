var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("/public"));
app.use(express.static(__dirname + '/public'));
// IDK WHY THE FIRST ONE DIDNT WORK BUT THE SECOND ONE DID IDK

// Requiring our models for syncing
var db = require("./models");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require('./controllers/html-routes.js')(app);
require('./controllers/api-routes.js')(app);
// app.use('/', routes);
module.exports = new Promise(function (resolve, reject) {
  // Start our server so that it can begin listening to client requests.
  db.sequelize.sync({ force: false }).then(function () {
    resolve(app.listen(PORT, function () {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    }));
  });

})