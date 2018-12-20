
import 'ts-jest/utils'

import { analyzer } from '.'
import { BraceClose, Word, Colon, BraceOpen } from '../../types/Tokens';

test('object', () => {
  const tokens = [
    new BraceOpen(1, 0),
    new Word('"key"', 1, 2),
    new Colon(1, 7),
    new Word('"value"', 1, 9),
    new BraceClose(1, 17)
  ]

  const { errors, abstractSyntaxTree } = analyzer(tokens)
  expect(errors.length).toBe(0)
})