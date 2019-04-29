var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Customer.findAll({}).then(function (data) {
            var hbsObject = {
                customer: data
            };
            res.render("index", hbsObject);
        }).catch(function (err) {
            console.log(err);
            res.status(500);
        });
    });
}