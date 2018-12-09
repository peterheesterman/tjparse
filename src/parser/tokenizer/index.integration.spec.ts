import 'ts-jest/utils'

import { tokenizer } from '.'
import { BraceOpen, BraceClose, Word, Colon, Comma, BraketClose, BraketOpen, Null, Number } from '../../types/Tokens'
import { False } from '../../types/Tokens/False';
import { True } from '../../types/Tokens/True';

test('Simple word word json should pass', () => {
  const json = `{ "key": "value" }`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(5)
  expect(tokens[0]).toEqual(new BraceOpen(1, 0))
  expect(tokens[1]).toEqual(new Word('"key"', 1, 2))
  expect(tokens[2]).toEqual(new Colon(1, 7))
  expect(tokens[3]).toEqual(new Word('"value"', 1, 9))
  expect(tokens[4]).toEqual(new BraceClose(1, 17))
})

test('Array should be tokenized', () => {
  const json = ` ["win", "lose"]`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(5)
  expect(tokens[0]).toEqual(new BraketOpen(1, 1))
  expect(tokens[1]).toEqual(new Word('"win"', 1, 2))
  expect(tokens[2]).toEqual(new Comma(1, 7))
  expect(tokens[3]).toEqual(new Word('"lose"', 1, 9))
  expect(tokens[4]).toEqual(new BraketClose(1, 15))
})

test('An object', () => {
  const json = `{
    "ok": ["win", "lose"],
    "yes": "ok"
  }`
  const { tokens, errors } = tokenizer(json)

  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(13)
  expect(tokens[0]).toEqual(new BraceOpen(1, 0))
  expect(tokens[1]).toEqual(new Word('"ok"', 2, 5))
  expect(tokens[2]).toEqual(new Colon(2, 9))
  expect(tokens[3]).toEqual(new BraketOpen(2, 11))
  expect(tokens[4]).toEqual(new Word('"win"', 2, 12))
  expect(tokens[5]).toEqual(new Comma(2, 17))
  expect(tokens[6]).toEqual(new Word('"lose"', 2, 19))
  expect(tokens[7]).toEqual(new BraketClose(2, 25))
  expect(tokens[8]).toEqual(new Comma(2, 26))
  expect(tokens[9]).toEqual(new Word('"yes"', 3, 5))
  // . . .
  expect(tokens[12]).toEqual(new BraceClose(4, 3))
})


test('All the types followed by commas (,)', () => {
  const json = `{
    "ok": [null, false, true,  "lose",  2, null],
    "yes": 1.3e12
  }`
  const { tokens, errors } = tokenizer(json)
  
  expect(errors.length).toBe(0)
  expect(tokens.length).toBe(21)
  expect(tokens[0]).toEqual(new BraceOpen(1, 0))
  expect(tokens[1]).toEqual(new Word('"ok"', 2, 5))
  expect(tokens[2]).toEqual(new Colon(2, 9))
  expect(tokens[3]).toEqual(new BraketOpen(2, 11))
  expect(tokens[4]).toEqual(new Null(2, 12))
  expect(tokens[5]).toEqual(new Comma(2, 16))
  expect(tokens[6]).toEqual(new False(2, 18))
  expect(tokens[7]).toEqual(new Comma(2, 23))
  expect(tokens[8]).toEqual(new True(2, 25))
  expect(tokens[9]).toEqual(new Comma(2, 29))
  expect(tokens[10]).toEqual(new Word('"lose"', 2, 32))
  expect(tokens[11]).toEqual(new Comma(2, 38))
  expect(tokens[12]).toEqual(new Number('2', 2, 41))
  expect(tokens[13]).toEqual(new Comma(2, 42))
  expect(tokens[14]).toEqual(new Null(2, 44))

  // . . .
  expect(tokens[20]).toEqual(new BraceClose(4, 3))
})