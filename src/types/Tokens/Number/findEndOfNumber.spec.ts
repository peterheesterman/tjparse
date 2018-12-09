
import 'ts-jest/utils'

import { findEndOfNumber } from './findEndOfNumber'

test('find end of number', () => {
  expect(findEndOfNumber('1.13/sdfjl', 0)).toBe(4)
})

test('- start a invalid number', () => {
  expect(findEndOfNumber('-a', 0)).toBe(-1)
})

test('This should pass', () => {
  expect(findEndOfNumber(`  1.3e12 
  `, 2)).toBe(6)
})

