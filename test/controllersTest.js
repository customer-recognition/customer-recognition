process.env.NODE_ENV = 'test';

var db = require('../models/customer');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();


chai.use(chaiHttp);

// var assert = require('chai').assert;
// Where we are testing from
// var routes = require('../controllers');
// describe('API routes', function () {
//     describe('POST route', function () {
//     })
// });

describe('Customer', function () {
    beforeEach((done) => {
        db.Customer.remove({}, (err) => {
            done();
        });
    });
    describe('/GET customer', function () {
        it('It should get all the customers', (done) => {
            chai.request(server)
                .get('/api/customer')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                done();
                })
        })
    })
});

