"use strict";

var _operators = require("rxjs/operators");

var _rxjs = require("rxjs");

// https://www.learnrxjs.io/operators/combination/combineall.html
// https://github.com/btroncone/learn-rxjs/blob/master/operators/specs/combination/combineall-spec.ts
describe('combination', function () {
  test('combineall()', function (done) {
    var results = [];
    var expected = [['Result (0): 0', 'Result (1): 0'], ['Result (0): 1', 'Result (1): 0'], ['Result (0): 1', 'Result (1): 1'], ['Result (0): 2', 'Result (1): 1'], ['Result (0): 2', 'Result (1): 2'], ['Result (0): 3', 'Result (1): 2'], ['Result (0): 3', 'Result (1): 3'], ['Result (0): 4', 'Result (1): 3'], ['Result (0): 4', 'Result (1): 4']]; //emit every 1s, take 2

    var source = (0, _rxjs.interval)(1).pipe((0, _operators.take)(2)); //map each emitted value from source to interval observable that takes 5 values

    var example = source.pipe((0, _operators.map)(function (val) {
      return (0, _rxjs.interval)(1).pipe((0, _operators.map)(function (i) {
        return "Result (".concat(val, "): ").concat(i);
      }), (0, _operators.take)(5));
    }));
    var combined = example.pipe((0, _operators.combineAll)());
    combined.subscribe({
      next: function next(val) {
        return results.push(val);
      },
      complete: function complete() {
        expect(results).toEqual(expected);
        done();
      }
    });
  });
});