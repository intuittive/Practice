const fs = require('fs')
const path = require('path');
const rewire = require('rewire')

describe('#getTimerDisplayVal', () => {
  // CONFIG: MODIFY WITH CAUTION
  const app = fs.readFileSync(path.resolve(__dirname, '../js/app.js'), 'utf8');
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../html/index.html'), 'utf8');

  const mockDOM = `
  'use strict';

  const { JSDOM } = require('jsdom')
  const dom = new JSDOM(\`${indexHTML}\`)
  document = dom.window.document
  window = dom.window
  `

  fs.writeFileSync(path.resolve(__dirname, './__mocks__/index.jsdom.js'), mockDOM + app, 'utf-8')
  const index = rewire('./__mocks__/index.jsdom.js')
  const getTimerDisplayVal = index.__get__('getTimerDisplayVal');
  // END CONFIG: MODIFY WITH CAUTION

  test("returns equivalent string if number already has two digits", () => {
    const twoDigitTime = 10;
    const timerDisplayVal = getTimerDisplayVal(twoDigitTime);
    // Why is this test failing? Hint: Check the types.
    expect(timerDisplayVal).toBe(twoDigitTime.toString());
  });

  // Your (Fernanda's) work. We need more tests for most (maybe all) functions.
  test("returns two digit string if number is less than 10", () => {
    fail('We need some test logic here.')
  })

  afterAll(() => {
    fs.unlinkSync(path.resolve(__dirname, './__mocks__/index.jsdom.js'))
  });
})
