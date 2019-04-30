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
    });

    app.get("/customer", function(req, res){
        console.log(req.query.id);
        // db.Customer.findAll({
        //     where: {
        //         id: req.body.customer_id
        //     }
        // }).then((result)=>{
        //     var hbsObject = {
        //         customer: data
        //     };
        //     res.render("customer", hbsObject);
        // }).catch((err)=>{
        //     console.log(err);
        //     res.status(500);
        // })
    })
}