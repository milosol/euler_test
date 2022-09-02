const app = require('../src/app');
const expect = require('chai').expect;

describe('Testing the arithmetic expression Functions', function() {
    it('1. Getting consecutive length of expression', function(done) {
        let result = app.get_consecutive_length([1, 2, 4]);
        expect(result).to.equal(2);
        done();
    });
    it('1. Getting expressed numbers', function(done) {
        let result = [];
        app.calc_exp([1, 2, 3, 4], result);
        expect(result).to.include(28);
        expect(result).to.be.an('array').that.does.not.include(29);
        expect(result).to.include(36);
        done();
    });
    it('1. Getting longest consecutive expressions', function(done) {
        let result = app.compute();
        expect(result).to.equal('1258');
        done();
    });
});