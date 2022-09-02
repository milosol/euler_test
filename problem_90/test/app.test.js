const app = require('../src/app');
const expect = require('chai').expect;

describe('Testing the cube Functions', function() {
    it('1. Getting one bit count', function(done) {
        let result = app.get_one_bit_Count(5);
        expect(result).to.equal(2);
        result = app.get_one_bit_Count(8);
        expect(result).to.equal(1);
        done();
    });
    it('1. Check valid for arrangements', function(done) {
        let result = app.check_valid(parseInt('1111100001', 2), parseInt('1100011110', 2));
        expect(result).to.equal(true);
        result = app.check_valid(parseInt('1111100001', 2), parseInt('0011011110', 2));
        expect(result).to.equal(true);
        result = app.check_valid(parseInt('1111100001', 2), parseInt('0010011110', 2));
        expect(result).to.equal(false);
        done();
    });
    it('1. Getting total count', function(done) {
        let result = app.compute();
        expect(result).to.equal(1217);
        done();
    });
});