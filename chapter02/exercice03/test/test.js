import { assert } from 'chai';
import sinon from 'sinon';

import { countOccurrencesInTable, printUniqueElements, isTableSorted } from '../index.js';

describe('Array operation', _ => {
  let consoleLogSpy = sinon.spy(console, 'log');
  const inputs = [...Array(5 + Math.floor(Math.random() * 5))].map(_ => Math.floor(Math.random() * 100))
  const filter = inputs[Math.floor(Math.random() * (inputs.length - 1))]
  const sorted = [...inputs].sort((a, b)=>a - b)

  beforeEach(function () {
    consoleLogSpy.resetHistory();
  });

  it(`countOccurrencesInTable should print number of occurence of ${filter} in ${inputs}`, function () {
    const result = inputs.filter((value)=>value == filter).length
    countOccurrencesInTable([...inputs], filter)
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], result);
  })

  it(`printUniqueElements should print an array without duplicate element of ${inputs}`, function () {
    const result = inputs.filter((value, index, self) => self.indexOf(value) === index);
    printUniqueElements([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], result);
  })

  it(`isTableSorted sort should print true or false if the table is sorted or not: ${inputs}`, function() {
    isTableSorted([...inputs])
    assert.deepEqual(consoleLogSpy.callCount, 1, "Only one print must be done in this test.");
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], JSON.stringify(inputs) == JSON.stringify(sorted));
  })
  it(`isTableSorted sort should print true or false if the table is sorted or not: ${sorted}`, function() {
    isTableSorted([...sorted])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], true);
  })

})
