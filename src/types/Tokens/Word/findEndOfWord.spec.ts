
import 'ts-jest/utils'

import { findEndOfWord } from './findEndOfWord'

test('find the end', () => {
  expect(findEndOfWord('"wo 123 rd"', 1)).toBe(10)
})

test('no end of word', () => {
  expect(findEndOfWord('"wo 123 rd', 1)).toBe(-1)
})

test('bad position', () => {
  expect(findEndOfWord('"wo 123 rd', 100)).toBe(-1)
})