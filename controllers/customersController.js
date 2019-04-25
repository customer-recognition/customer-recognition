var express = require("express");

var router = express.Router();

var customer = require("../models/customer.js");

router.get("/", function(req, res){
    customer.all(function(data){
        var hbsObject = {
            customer: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;