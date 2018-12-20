import 'ts-jest/utils'
import { processValue } from '.';
import { Token, BraceOpen, BraceClose, BraketOpen, BraketClose, Number } from '../../../types/Tokens';
import { TObject } from '../types/TObject';
import { TArray } from '../types/TArray';
import { Value } from '../types/Value';

test('Empty object', () => {
  // {}
  const tokens: Array<Token> = [
    new BraceOpen(1, 0),
    new BraceClose(1, 1)
  ]

  const object = new TObject(null, 0, 0, [])

  const { node, jump } = processValue(object, tokens, 0)
  expect(node).toEqual(new TObject(null, 0, 1, []))
  expect(jump).toBe(2)
})

test('Empty array', () => {
  // []
  const tokens: Array<Token> = [
    new BraketOpen(1, 0),
    new BraketClose(1, 1)
  ]

  const array = new TArray(null, 0, 0, [])

  const { node, jump } = processValue(array, tokens, 0)
  expect(node).toEqual(new TArray(null, 0, 1, []))
  expect(jump).toBe(2)
})

test('Array with a number in it', () => {
  // [1]
  const tokens: Array<Token> = [
    new BraketOpen(1, 0),
    new Number('1',1, 1),
    new BraketClose(1, 2)
  ]

  const array = new TArray(null, 0, 0, [])

  const { node, jump } = processValue(array, tokens, 0)

  expect(node).toEqual(new TArray(null, 0, 1, [new Value(array, 1, 1)]))
  expect(jump).toBe(2)
})
