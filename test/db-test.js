'use strict';

// var chai = require('chai');
// var expect = chai.expect;
// Line 3 & 4 combined makes line 6 
var expect = require('chai').expect;

// Do i need this yet?
// var assert = require('mocha');

var db = require('../controllers/api-routes');

describe('Routes', () => {
    var host = "http://" + process.env.IP + ':' + process.env.PORT;
    var path = "/api/customer";

    it('Should send parameters to: /path POST', (done) => {
        chai
            .request(host)
    })
})