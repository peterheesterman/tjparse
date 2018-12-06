import 'ts-jest/utils'

import { tokenizer } from '.'
import { BraceOpen, BraceClose, Word, Colon, Comma, BraketClose, BraketOpen } from '../../types/Tokens'

test('Simple word word json should pass', () => {
  const json = `{ "key": "value" }`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(5)
  expect(tokens[0]).toEqual(new BraceOpen(1, 1))
  expect(tokens[1]).toEqual(new Word('"key"', 1, 3))
  expect(tokens[2]).toEqual(new Colon(1, 8))
  expect(tokens[3]).toEqual(new Word('"value"', 1, 10))
  expect(tokens[4]).toEqual(new BraceClose(1, 18))
})

test('Array should be tokenized', () => {
  const json = ` ["win", "lose"]`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(5)
  expect(tokens[0]).toEqual(new BraketOpen(1, 2))
  expect(tokens[1]).toEqual(new Word('"win"', 1, 3))
  expect(tokens[2]).toEqual(new Comma(1, 8))
  expect(tokens[3]).toEqual(new Word('"lose"', 1, 10))
  expect(tokens[4]).toEqual(new BraketClose(1, 16))
})