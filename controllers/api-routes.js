var db = require("../models");

module.exports = function (app) {
    app.put("/api/customer", function (req, res) {
        db.Customer.findAll({
            where: {
                id: "3"
            }
        }).then((result) => {
            var ordersArray = [];
            if (result[0].dataValues.orders) {
                var orders = result[0].dataValues.orders + ", " + req.body.order;
                if (ordersArray.length < 3) {
                    ordersArray.push(orders);
                    console.log(ordersArray.length);
                } else {
                    ordersArray.push(orders);
                }

            } else {
                var orders = req.body.order;
                ordersArray.push(orders);
            }

            db.Customer.update({
                orders: orders
            }, {
                    where: {
                        id: "3"
                    }
                }).then((result) => {
                    res.json(result);
                    console.log(ordersArray);
                }).catch((err) => {
                    console.log(err);
                    res.status(500);
                })
        });
    })
}