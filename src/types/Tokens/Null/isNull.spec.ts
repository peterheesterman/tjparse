
import 'ts-jest/utils'

import { isNull } from './isNull'

test('can find null', () => {
  expect(isNull("null", 1)).toBe(true)
})

test('can find null', () => {
  expect(isNull(" null", 2)).toBe(true)
})

test('not null but noll', () => {
  expect(isNull("noll", 1)).toBe(false)
})

test('not null but noll offset', () => {
  expect(isNull(" noll", 2)).toBe(false)
})