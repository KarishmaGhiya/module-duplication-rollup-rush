import * as index from "./index";

// another node built-in that has to be shimmed for the browser
var chai = require('chai');  
var expect = chai.expect; 

describe('calculate', function() {
    it('add', function() {
      expect(index.MySum(5, 2)).toBe(7);
    });

    it('multiple', function() {
        expect(index.MyProductOfSum(5, 2)).toBe(49);
      });
  });