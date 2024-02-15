import { assert } from 'chai';
import sinon from 'sinon';

import { basicSortTable, bubbleSortTable, insertionSortTable ,mergeSortTable,quickSortTable } from '../index.js';

describe('Array sort', _ => {
  let consoleLogSpy = sinon.spy(console, 'log');
  const inputs = [...Array(5 + Math.floor(Math.random() * 5))].map(_ => Math.floor(Math.random() * 100))
  const sorted = [...inputs].sort((a, b)=>a - b)

  beforeEach(function () {
    consoleLogSpy.resetHistory();
  });

  it(`basicSortTable should print a sorted table of ${inputs}`, function() {
    basicSortTable([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], sorted);
  })

  it(`bubbleSortTable should print a sorted table of ${inputs}`, function() {
    bubbleSortTable([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], sorted);
  })

  it(`insertionSortTable sort should print a sorted table of ${inputs}`, function() {
    insertionSortTable([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], sorted);
  })

  it(`mergeSortTable sort should print a sorted table of ${inputs}`, function() {
    mergeSortTable([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], sorted);
  })

  it(`quickSortTable sort should print a sorted table of ${inputs}`, function() {
    quickSortTable([...inputs])
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], sorted);
  })

})
