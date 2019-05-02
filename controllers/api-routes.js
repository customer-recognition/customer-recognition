var db = require("../models");

module.exports = function (app) {
    app.post("/api/customer", function (req, res) {
        db.Customer.findAll({
            where: {
                id: req.body.CustomerId
            },
            include: [{
                model: db.Order,
                through: {
                    where: {
                        CustomerId: req.body.CustomerId
                    }
                }
            }]
        }).then((result) => {
            console.log(req.body);
            db.Customer_order.create({
                CustomerId: req.body.CustomerId,
                OrderId: req.body.OrderId
            }).then((result)=>{
                res.json(result);
            })
        }).catch((err) => {
            console.log(err.message);
            res.status(500);
        })
    })

    app.post("/api/customer/new", function(req, res){
        // console.log(req.body.customer_name);
        // console.log(req.body.order_id);
        db.Customer.create({
            customer_name: req.body.customer_name,
            customer_email: req.body.customer_email
        }).then((result)=>{
            res.json(result);
            console.log(result.dataValues.id);

            db.Customer_order.create({
                CustomerId: result.dataValues.id,
                OrderId: req.body.order_id
            }).then((result)=>{
                res.json(result);
            }).catch((err)=>{
                console.log(err);
                res.status(500);
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500);
        })
    })


    // route for getting single customer
    // app.get('/api/customer/:customername', function (req, res) {
    //     db.Customer.findOne({
    //         where: {
    //             customer_name: req.params.customer_name
    //             // id: req.params.id
    //         }
    //     }).then(function (result) {
    //         res.json(result);
    //     })
    // })
}

