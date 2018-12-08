
import 'ts-jest/utils'

import { findEndOfNumber } from './findEndOfNumber'

test('find end of number', () => {
  expect(findEndOfNumber('1.13/sdfjl', 1)).toBe(4)
})

test('- start a invalid number ', () => {
  expect(findEndOfNumber('-a', 1)).toBe(-1)
})
