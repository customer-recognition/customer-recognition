var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;




// describe('Customer', function () {
//     // Before each test begins, create a new request server for testing
//     // & delete all examples from the db
//     beforeEach(function () {
//         request = chai.request(server);
//         return db.sequelize.sync({ force: true });
//     });
//         it('It should get all the customers', (done) => {
//             chai.request(server)
//                 .get('/api/customer')
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('array');
//                     res.body.length.should.be.eql(0);
//                     done();
//                 })
//         })
// });

describe("GET /api/examples", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request('http://localhost:3000');
        return db.sequelize.sync({ force: false });
    });

    it("should find all examples", function (done) {
        // Add some examples to the db to test with
        db.Customer.bulkCreate([
            {
                customer_name: "First Example",
                customer_email: "First Description"
            },
            {
                customer_name: "Second Example",
                customer_email: "Second Description"
            }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("array")
                    .that.has.lengthOf(2);

                expect(responseBody[0])
                    .to.be.an("object")
                    .that.includes({
                        customer_name: "First Example",
                        customer_email: "First Description"
                    });

                expect(responseBody[1])
                    .to.be.an("object")
                    .that.includes({
                        customer_name: "Second Example",
                        customer_email: "Second Description"
                    });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});
