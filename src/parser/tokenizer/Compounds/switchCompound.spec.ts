
import 'ts-jest/utils'

import { Error } from '../../types/Errors'
import { Word } from '../../../types/Tokens'
import { switchCompound } from './switchCompound'

test('word can be picked out as a compound token', () => {
  const compound = {
    element: '"',
    input: '"win"',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const error: Error = null 
  const result = {
    tokenLength: 4,
    token: new Word('"win"', 1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test.skip('braceOpen returns a BraceOpen singleton', () => {
  // Need the error case
})