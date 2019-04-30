var faker = require('faker');

var randomName = faker.name.findName();
console.log(randomName)

console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

console.log(faker.fake('{{name.firstName}} {{name.lastName}}'))