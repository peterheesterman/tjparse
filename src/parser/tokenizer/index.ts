
import { TokenizerResult } from '../types/Results'

import { Error, InvalidTokenError } from '../types/Errors'
import { Token, Word } from '../../types/Tokens'

import {
  braceOpen,
  braceClose,
  doubleQuote,
  colon
} from '../../types/Tokens/literals'

import { switchSingleton } from './Singletons/switchSingleton'
import { findEndOfWord } from '../../types/Tokens/Word/findEndOfWord'

const tokenizer = (input: string): TokenizerResult => {
  const characters = input.split('')
  
  const tokens: Array<Token> = []
  const errors: Array<Error> = []

  for (let columnNumber = 1; columnNumber - 1 < characters.length; columnNumber++) {
    const lineNumber = 1
    const element = characters[columnNumber - 1]
    
    switch (element) {
      case " ":
      case "\t":
      case "\n":
      case "\r":
        // eat whitespace
        break
      case braceOpen: 
      case braceClose:
      case colon:
        // singletons
        tokens.push(switchSingleton(element, lineNumber, columnNumber))
        break
      case doubleQuote:
        const wordLength = findEndOfWord(input, columnNumber)
        const wordLiteral = doubleQuote + input.substr(columnNumber, wordLength)
        tokens.push(new Word(wordLiteral, lineNumber, columnNumber))
        columnNumber = columnNumber + wordLength
        break
      default:
        errors.push(new InvalidTokenError(element, lineNumber, columnNumber))
        break
    }
  }

  return new TokenizerResult(errors, tokens)
}

export { tokenizer }