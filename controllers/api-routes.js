var db = require("../models");

module.exports = function (app) {
    app.post("/api/customer", function (req, res) {
        db.Customer.findAll({
            where: {
                id: "1"
            },
            include: [{
                model: db.Order,
                through: {
                    where: {
                        CustomerId: "1"
                    }
                }
            }]
        }).then((result) => {
            var customer_id = result[0].dataValues.Orders[0].Customer_order.dataValues.CustomerId;
            console.log(req.body);
            db.Customer_order.create({
                CustomerId: req.body.CustomerId,
                OrderId: req.body.OrderId
            }).then((dbCustomerOrder)=>{
                res.json(dbCustomerOrder);
            })
        }).catch((err) => {
            console.log(err);
            res.status(500);
        })
    })
}