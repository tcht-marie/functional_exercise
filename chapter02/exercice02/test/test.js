import { assert } from 'chai';
import sinon from 'sinon';

import { cumulativeSumOfTable, evenNumberOfTable, greaterThanLimitInTable, indexOfWantedInTable, printMaxValue, printMinValue, sumOfTable } from '../index.js';

describe('Filter, Map, Reduce', _ => {
  let consoleLogSpy = sinon.spy(console, 'log');
  let consoleErrorSpy = sinon.spy(console, 'error');
  const inputs = [...Array(5 + Math.floor(Math.random() * 5))].map(_ => Math.floor(Math.random() * 100))
  const wanted = inputs[Math.floor(Math.random() * (inputs.length - 1))]
  let unwanted
  do {
    unwanted = Math.floor(Math.random() * (inputs.length - 1))
  } while(inputs.includes(unwanted))
  const limit = Math.floor(Math.random() * 100)

  beforeEach(function () {
    consoleLogSpy.resetHistory();
    consoleErrorSpy.resetHistory();
  });

  it(`sumOfTable should print the sum of ${inputs}`, function() {
    const output = inputs.reduce((acc, value)=>acc+value, 0)
    sumOfTable(inputs)
    assert.strictEqual(consoleLogSpy.getCall(0).args[0], output);
  })

  it(`evenNumberOfTable should print only even number of ${inputs}`, function() {
    const output = inputs.filter((value)=>value % 2 == 0)
    evenNumberOfTable(inputs)
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], output);
  })

  it(`indexOfWantedInTable should print the index of ${wanted} in ${inputs}`, function() {
    const output = inputs.findIndex((value)=>value==wanted)
    indexOfWantedInTable(inputs, wanted)
    assert.strictEqual(consoleLogSpy.getCall(0).args[0], output);
  })
  it(`indexOfWantedInTable should print an error message`, function() {
    const output = inputs.findIndex((value)=>value==unwanted)
    indexOfWantedInTable(inputs, unwanted)
    assert.isNotNumber(consoleLogSpy.getCall(0)?.args[0] ?? consoleErrorSpy.getCall(0).args[0], 'Must print an error message')
  })

  it(`greaterThanLimitInTable should print elements that's greater than ${limit} in ${inputs}`, function() {
    const output = inputs.filter((value)=>value > limit)
    greaterThanLimitInTable(inputs, limit)
    assert.deepEqual(consoleLogSpy.getCall(0).args[0], output);
  })

  it(`cumulativeSumOfTable should print elements that's greater than ${limit} in ${inputs}`, function() {
    cumulativeSumOfTable(inputs)
    inputs.reduce((acc, value, index) => {
      const result = acc+value
      assert.deepEqual(consoleLogSpy.getCall(index).args[0], result);
      return result
    }, 0)
  })

  it(`printMinValue should print the greater element in ${inputs}`, function() {
    printMinValue(inputs)
    const result = inputs.reduce((acc, value) => value < acc ? value : acc, inputs[0])
    assert.strictEqual(consoleLogSpy.getCall(0).args[0], result);
  })

  it(`printMaxValue should print the greater element in ${inputs}`, function() {
    printMaxValue(inputs)
    const result = inputs.reduce((acc, value) => value > acc ? value : acc, inputs[0])
    assert.strictEqual(consoleLogSpy.getCall(0).args[0], result);
  })


})
