var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Customer.findAll({}).then((data) => {
            db.Order.findAll({}).then((data2) => {
                var hbsObject = {
                    customer: data,
                    order: data2
                }
                res.render("index", hbsObject);
            })
        }).catch(function (err) {
            console.log(err);
            res.status(500);
        });
    })

app.get("/customer/:search", function (req, res) {
    db.Customer.findAll({
        where: {
            customer_email: req.params.search
            // id: req.params.customerid
        }
    }).then((data) => {
        // console.log("data: ", data);
        db.Order.findAll({}).then((data2) => {
            var hbsObject = {
                customer: data,
                order: data2
            }
                res.render("customer", hbsObject);
            })
        });
    });
}