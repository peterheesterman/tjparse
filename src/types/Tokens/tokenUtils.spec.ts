
import 'ts-jest/utils'
import { isLiteralChecker } from './tokenUtils'

// null
test('can find null', () => {
  const isNull = isLiteralChecker("null")
  expect(isNull("null", 1)).toBe(true)
})

test('can find null', () => {
  const isNull = isLiteralChecker("null")
  expect(isNull(" null", 2)).toBe(true)
})

test('not null but noll', () => {
  const isNull = isLiteralChecker("null")
  expect(isNull("noll", 1)).toBe(false)
})

test('not null but noll offset', () => {
  const isNull = isLiteralChecker("null")
  expect(isNull(" noll", 2)).toBe(false)
})

// false
test('can find false', () => {
  const isFalse = isLiteralChecker("false")
  expect(isFalse("false", 1)).toBe(true)
})

test('can find false', () => {
  const isFalse = isLiteralChecker("false")
  expect(isFalse(" false", 2)).toBe(true)
})

test('not null but noll', () => {
  const isFalse = isLiteralChecker("null")
  expect(isFalse("noll", 1)).toBe(false)
})

test('not null but noll offset', () => {
  const isFalse = isLiteralChecker("null")
  expect(isFalse(" noll", 2)).toBe(false)
})