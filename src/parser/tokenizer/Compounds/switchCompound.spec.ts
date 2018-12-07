
import 'ts-jest/utils'

import { Error, UnterminatedStringError } from '../../types/Errors'
import { Word, Token, Null } from '../../../types/Tokens'
import { switchCompound } from './switchCompound'
import { UnexpectedLiteral } from '../../types/Errors/UnexpectedToken'
import { True } from '../../../types/Tokens/True';
import { False } from '../../../types/Tokens/False';

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

test('Unterminated string error', () => {
  const compound = {
    element: '"',
    input: '"fajdkljflks',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const token: Token = null
  const result =  {
    error: new UnterminatedStringError(1, 1),
    token,
    tokenLength: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('null is fine', () => {
  const compound = {
    element: 'n',
    input: 'null',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const error: Error = null 
  const result = {
    tokenLength: 4,
    token: new Null(1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('nult is an unexpected token', () => {
  const compound = {
    element: 'n',
    input: 'nult',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedLiteral(1, 1),
    token,
    tokenLength: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('true is fine', () => {
  const compound = {
    element: 't',
    input: 'true',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const error: Error = null 
  const result = {
    tokenLength: 4,
    token: new True(1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('truu is an unexpected token', () => {
  const compound = {
    element: 't',
    input: 'truu',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedLiteral(1, 1),
    token,
    tokenLength: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('false is fine', () => {
  const compound = {
    element: 'f',
    input: 'false',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const error: Error = null 
  const result = {
    tokenLength: 5,
    token: new False(1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('faaaaaaaa is an unexpected token', () => {
  const compound = {
    element: 'f',
    input: 'faaaaaaaa',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedLiteral(1, 1),
    token,
    tokenLength: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})
