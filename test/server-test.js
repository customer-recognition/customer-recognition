'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);



// Do i need this yet?
// var assert = require('mocha');

// var db = require('../controllers');

describe('Server', () => {

    it('Should show server working', () => {
        return require('../server.js').then(function (server) {
            console.log("server made");
            return chai.request(server)
            .post('/api/customer/new')
            .send({ 
                customer_name: "test",
                OrderId: "4"
             })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
        }).catch(function (err) {
            console.log(err);
            throw err;
        })
    })
})