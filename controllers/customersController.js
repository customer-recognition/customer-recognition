var express = require('express');
var router = express.Router();

var db = require('../models');

// Data of all customers
router.get('/', function (req, res) {
  db.Customer.findAll({}).then(function (data) {
    res.json(data);
    console.log(data)
  }).catch(function (err) {
    console.log(err);
    res.send(500);
  });
});

// Data of customer's orders
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

router.post("/api/customers", function (req, res) {
  customer.create([
    "name"
  ], [
      req.body.name
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/customers/:id", function(req, res){
  var condition = "id = " + req.params.id;

  customer.update({
    
  })
})

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