// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");
// var db = require("../models");
// var expect = chai.expect;

// // Setting up the chai http plugin
// chai.use(chaiHttp);

// var request;


// describe("GET /api/examples", function () {
//     // Before each test begins, create a new request server for testing
//     // & delete all examples from the db
//     beforeEach(function () {
//         request = chai.request('http://localhost:3000');
//         return db.sequelize.sync({ force: false });
//     });

//     it('Should show server working', () => {
//         db.Customer.bulkCreate([
//             {
//                 customer_name: "15customertest",
//                 customer_email: "15emailtest@gmail.com",
//                 order_id: "2"
//             }
//         ]).then(function () {
//             request.get('/').end(function (err, res) {
//                 var responseStatus = res.status;
//                 var responseBody = res.body;

//                 expect(err).to.be.null;
//                 expect(responseStatus).to.equal(200);
//                 expect(responseBody[0])
//                     .to.be.an("object")
//                     .that.includes({
//                         customer_name: "15customertest",
//                         customer_email: "15emailtest@gmail.com",
//                         order_id: "2"
//                     }).catch(function (err) {
//                         console.log(err);
//                         throw err;
//                     });
//             })
//         })
//     })
// })