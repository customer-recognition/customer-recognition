var db = require("../models");

module.exports = function (app) {
    app.put("/api/customer", function (req, res) {
        db.Customer_order.findAll({
            where: {
                CustomerId: req.body.CustomerId,
                OrderId: req.body.OrderId
            }
        }).then((result) => {
            if (result == "") {
                db.Customer_order.create({
                    CustomerId: req.body.CustomerId,
                    OrderId: req.body.OrderId
                }).then((result) => {
                    res.json(result);
                })
            } else {
                var orderCount = result[0].dataValues.quantity;
                db.Customer_order.update({
                    quantity: orderCount += 1
                }, {
                        where: {
                            CustomerId: req.body.CustomerId,
                            OrderId: req.body.OrderId
                        }
                    }).then((result) => {
                        res.json(result);
                    }).catch((err) => {
                        console.log(err);
                        res.status(500);
                    })
            }
        })
    })

    app.post("/api/customer/new", function (req, res) {
        // console.log(req.body.customer_name);
        // console.log(req.body.order_id);
        db.Customer.findAll({
            where: {
                customer_email: req.body.customer_email
            }
        }).then((result)=>{
            if (result == ""){
                db.Customer.create({
                    customer_name: req.body.customer_name,
                    customer_email: req.body.customer_email
                }).then((result) => {
                    db.Customer_order.create({
                        CustomerId: result.dataValues.id,
                        OrderId: req.body.order_id
                    }).then((result) => {
                        res.json(result);
                    }).catch((err) => {
                        console.log(err);
                        res.status(500);
                    })
                }).catch((err) => {
                    console.log(err);
                    res.status(500);
                })
            } else {
                res.json(result);
            }
        })
    })
}