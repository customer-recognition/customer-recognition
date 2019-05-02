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
            if (data != "") {
                var customer_id = data[0].dataValues.id;
            } else {
                res.render("customer");
            }
            if (customer_id) {
                db.Order.findAll({}).then((data2) => {
                    db.Customer.findAll({
                        where: {
                            id: customer_id
                        },
                        include: [db.Order]
                    }).then((data3) => {

                        if (data3[0].Orders[0]) {
                            var order1 = data3[0].Orders[0].dataValues.Customer_order.dataValues.quantity;
                        } else {
                            var order1 = 0;
                        }
                        if (data3[0].Orders[1]) {
                            var order2 = data3[0].Orders[1].dataValues.Customer_order.dataValues.quantity;
                        } else {
                            var order2 = 0;
                        }
                        if (data3[0].Orders[2]) {
                            var order3 = data3[0].Orders[2].dataValues.Customer_order.dataValues.quantity;
                        } else {
                            var order3 = 0;
                        }

                        var favFood = Math.max(order1, order2, order3);

                        if (favFood == order1) {
                            var favorite_food = data3[0].Orders[0].dataValues.order_name
                        } else if (favFood == order2){
                            var favorite_food = data3[0].Orders[1].dataValues.order_name
                        } else if (favFood == order3){
                            var favorite_food = data3[0].Orders[2].dataValues.order_name
                        }

                        console.log(favorite_food)

                        var hbsObject = {
                            customer: data,
                            order: data2,
                            favorite_food: favorite_food,
                            customer_order: data3
                        }
                        var wtf = hbsObject.customer_order[0].dataValues.Orders[0].dataValues.Customer_order.dataValues;
                        console.log(wtf);
                        res.render("customer", hbsObject);
                    })
                })
            }
        });
    }
)}