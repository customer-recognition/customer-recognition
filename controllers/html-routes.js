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

    // QT-
    //     app.get("/customer", function(req, res){
    //         console.log(req.query.id);
    //         db.Customer.findAll({
    //             where: {
    //                 id: req.query.id
    //             },
    //         }).then((data)=>{
    //             var hbsObject = {
    //                 customer: data
    //             };
    //             res.render("customer", hbsObject);
    //         }).catch((err)=>{
    //             console.log(err);
    //             res.status(500);
    //         })
    //     })


    app.get("/customer/:customername", function (req, res) {
        db.Customer.findAll({
            where: {
                customer_name: req.params.customername
                // id: req.params.customerid
            }
        }).then((data) => {
            // console.log("data: ", data);
            res.render("customer", { Customer: data });
        });
    });
};

