import 'ts-jest/utils'

import { tokenizer } from '.'
import { BraceOpen, BraceClose, Word, Colon } from '../../types/Tokens'

test('braces should be tokenized', () => {
  const json = `{}`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(2)
  expect(tokens[0]).toEqual(new BraceOpen(1, 1))
  expect(tokens[1]).toEqual(new BraceClose(1, 2))
})

test('words should be tokenized', () => {
  const json = `"wo 123 rd"`
  const { tokens, errors } = tokenizer(json)
  
  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(1)
  expect(tokens[0]).toEqual(new Word('"wo 123 rd"', 1, 1))
})

test('colons should be tokenized', () => {
  const json = `:`
  const { tokens, errors } = tokenizer(json)
  
  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(1)
  expect(tokens[0]).toEqual(new Colon(1, 1))
})

