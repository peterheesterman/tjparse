
import 'ts-jest/utils'

import { Error, UnterminatedStringError, NumberParseError } from '../../types/Errors'
import { Word, Token, Null, Number } from '../../../types/Tokens'
import { switchCompound } from './switchCompound'
import { UnexpectedTokenError } from '../../types/Errors'
import { True } from '../../../types/Tokens/True'
import { False } from '../../../types/Tokens/False'

test('word can be picked out as a compound token', () => {
  const compound = {
    element: '"',
    input: '"win"',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 0
  }

  const error: Error = null 
  const result = {
    jump: 4,
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
    characterNumber: 0
  }

  const token: Token = null
  const result =  {
    error: new UnterminatedStringError(1, 1),
    token,
    jump: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('null is fine', () => {
  const compound = {
    element: 'n',
    input: 'null',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 0
  }

  const error: Error = null 
  const result = {
    jump: 3,
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
    characterNumber: 0
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedTokenError(1, 1),
    token,
    jump: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('true is fine', () => {
  const compound = {
    element: 't',
    input: 'true',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 0
  }

  const error: Error = null 
  const result = {
    jump: 3,
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
    characterNumber: 0
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedTokenError(1, 1),
    token,
    jump: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('false is fine', () => {
  const compound = {
    element: 'f',
    input: ' false',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const error: Error = null 
  const result = {
    jump: 4,
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
    characterNumber: 0
  }

  const token: Token = null
  const result =  {
    error: new UnexpectedTokenError(1, 1),
    token,
    jump: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('numbers are tokens', () => {
  const compound = {
    element: '-',
    input: '-343.343',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 0
  }

  const error: Error = null 
  const result = {
    jump: 7,
    token: new Number('-343.343', 1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('numbers are tokens - two', () => {
  const compound = {
    element: '2',
    input: '2',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 0
  }

  const error: Error = null 
  const result = {
    jump: 0,
    token: new Number('2', 1, 1),
    error
  }
  expect(switchCompound(compound)).toEqual(result)
})

test('fail number', () => {
  const compound = {
    element: '-',
    input: '-',
    lineNumber: 1,
    columnNumber: 1,
    characterNumber: 1
  }

  const token: Token = null
  const result =  {
    error: new NumberParseError(1, 1),
    token,
    jump: -1
  }
  expect(switchCompound(compound)).toEqual(result)
})
