import { assert } from 'chai';
import sinon from 'sinon';

import { printTable, printTableInverted } from '../index.js';

describe('Array iteration', _ => {
  let consoleLogSpy = sinon.spy(console, 'log');
  const inputs = [...Array(5 + Math.floor(Math.random() * 5))].map(_ => Math.floor(Math.random() * 100))
  beforeEach(function () {
    consoleLogSpy.resetHistory();
  });

  it(`should print the content of ${inputs}`, function() {
    printTable(inputs)
    for (let i = 0; i < inputs.length; i++) {
      assert.strictEqual(consoleLogSpy.getCall(i).args[0], inputs[i]);
    }
  })

  it(`should print the content of ${inputs} in reverse order`, function() {
    const reverseInput = [...inputs].reverse()
    printTableInverted(inputs)
    for (let i = 0; i < reverseInput.length; i++) {
      assert.strictEqual(consoleLogSpy.getCall(i).args[0], reverseInput[i]);
    }
  })
})
