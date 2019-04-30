var db = require("../models");

module.exports = function (app) {
    app.put("/api/customer", function (req, res) {
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
            var customer_id = result[0].dataValues.Orders[0].Customer_orders.Customer_id;
            
        }).catch((err) => {
            console.log(err);
            res.status(500);
        })
    })
}

// console.log(result[0].dataValues.Orders[0].Customer_orders);

// db.Customer.findAll({
//     where: {
//         id: "1"
//     }
// }).then((result) => {
//     var ordersArray = [];
//     if (result[0].dataValues.orders) {
//         var orders = result[0].dataValues.orders + ", " + req.body.order;
//         if (ordersArray.length < 3) {
//             ordersArray.push(orders);
//         } else {
//             ordersArray.push(orders);
//         }

//     } else {
//         var orders = req.body.order;
//         ordersArray.push(orders);
//     }

//     db.Customer.update({
//         orders: orders
//     }, {
//             where: {
//                 id: "1"
//             }
//         }).then((result) => {
//             res.json(result);
//             console.log(ordersArray);
//         }).catch((err) => {
//             console.log(err);
//             res.status(500);
//         })
// });