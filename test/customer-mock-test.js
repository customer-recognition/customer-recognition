var expect = require('chai').expect;
var faker = require('faker');

// Do i need this yet?
// var assert = require('mocha');

// Customer Model
// var db = require('../models');


// Using faker to grab random name - PASSED
describe('Customer', () => {
    it('Should pass when value is not a number', () => {
        expect(faker.fake('{{name.firstName}} {{name.lastName}}')).to.be.a('string');
    });
    // Using faker to make sure random name exist - PASSED
    it('Should exist', () => {
        expect(faker.fake('{{name.firstName}} {{name.lastName}}')).to.exist;
    });
    // Using faker to make sure random name is not null - PASSED
    it('Should NOT be null', () => {
        expect(faker.fake('{{name.firstName}} {{name.lastName}}')).to.not.be.null;
    });
    // Using faker to make sure random name is null - FAIL
    // it('Should be null', () => {
    //     expect(faker.fake('{{name.firstName}} {{name.lastName}}')).to.be.null;
    // });
})