import 'ts-jest'

import { isEmpty } from './isEmpty'
/*
Test empty

  - throw if not an array.

*/

test('empty array', () => {
  expect(isEmpty([])).toBe(true)
})

test('array with one element', () => {
  expect(isEmpty([1])).toBe(false)
})

test('null instead of array', () => {
  expect(() => isEmpty(null)).toThrowError(new Error(`Can't check that null or undefined is empty`))
})