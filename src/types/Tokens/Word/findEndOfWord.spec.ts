
import 'ts-jest/utils'

import { findEndOfWord } from './findEndOfWord'

test('find the end', () => {
  expect(findEndOfWord('"wo 123 rd"', 0)).toBe(10)
})

test('find empty', () => {
  expect(findEndOfWord('""', 0)).toBe(1)
})

test('no end of word', () => {
  expect(findEndOfWord('"wo 123 rd', 9)).toBe(-1)
})

test('bad position', () => {
  expect(findEndOfWord('"wo 123 rd', 100)).toBe(-1)
})