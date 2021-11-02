const assert = require('chai').assert;

const course02 = require('../');

describe('Chapter 1 -> Course 2', _ => {
  describe('Sum two number', _ => {
    [...Array(5).keys()].map(_ => {
      const inputs = [...Array(2).keys()].reduce((acc, _) => [...acc, Math.floor(Math.random() * 100)], []);
      const output = inputs.reduce((acc, value) => acc + value, 0);
      it(`should return the sum of ${inputs[0]} and ${inputs[1]} to be equal to ${output}`, done => {
        assert.equal(course02.sum(inputs[0], inputs[1]), output)
        done()
      })
    })
  });

  describe('Reverse numbers', _ => {
    [...Array(5).keys()].map(_ => {
      const input = Math.floor(Math.random() * 1000);
      const output = parseInt(`${input}`.split("").reverse().join(""));
      it(`should reverse of ${input} be equal to ${output}`, done => {
        assert.equal(course02.reverseNumber(input), output)
        done()
      })
    })
  })
})
