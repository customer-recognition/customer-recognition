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

    app.get("/customer/:id", function (req, res) {
        console.log(req.params.id);

        db.Customer.findOne({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data);
        }).catch((err)=>{
            console.log(err);
            res.status(500);
        })
    });
}