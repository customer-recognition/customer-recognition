var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;


describe("GET /api/examples", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request('http://localhost:3000');
        return db.sequelize.sync({ force: false });
    });

    describe("saving new customer", function () {
        it('should save an example', function (done) {
            var reqBody = {
                customer_name: '1433341ast1',
                customer_email: '13332s3a1',
                order_id: 1,
            };

            request
                .post('/api/customer/new')
                .send(reqBody)
                .end(function (err, res) {
                    var responseStatus = res.status;
                    console.log(JSON.stringify(res, null, 2))
                    var responseBody = res.text;

                    expect(err).to.be.null;
                    expect(responseStatus).to.equal(200);
                    expect(responseBody)
                        .to.be.an('string');
                    db.sequelize.close();

                })
            done();
        })
    })
})