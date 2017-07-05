var expect  = require('chai').expect;
var request = require('request');
it('Main page content', function() {
    request('http://localhost:3000/api/drug/Asprin' , function(error, response, body) {
        expect(response.body).to.equal('true');
    });
});

it('Main page status', function() {
    request('http://localhost:3000/#!/drugs' , function(error, response, body) {
        expect(response.statusCode).to.equal(001);
    });
});

it('Main page content', function() {
    request('http://localhost:3000/#!/prescriptions' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

it('Main page status', function() {
    request('http://localhost:3000/#!/dash' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});


it('Main page status', function() {
    request('http://localhost:3000/#!/issueDrugs' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});