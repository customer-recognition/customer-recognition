var express = require('express');
var router = express.Router();

var db = require('../models');

// Data of all customers
// router.get('/', function (req, res) {
//   db.Customer.findAll({}).then(function (data) {
//     res.json(data);
//   }).catch(function (err) {
//     console.log(err);
//     res.send(500);
//   });
// });

// Customer information
router.get('/', function (req, res) {
  db.Customer.findAll({}).then(function (data) {
    var hbsObject = {
      customer: data
    };
    res.render('index', hbsObject);
    console.log(hbsObject)
  }).catch(function (err) {
    console.log(err);
    res.send(500);
  });
});


//  //  //  //
router.get('/', function (req, res) {
  db.Customer.findAll({
    where: {
      name: req.body.name,
      orders: req.body.orders,
    }
  }).then(function (customerData) {
    res.json(customerData)
  }).catch(function (err) {
    console.log(err);
    res.send(500);
  });
});

// Data of all inventory list
router.get('/customer/inventory', function (req, res) {
  db.Inventory.findAll({}).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    console.log(err);
    res.send(500);
  });
});


module.exports = router;