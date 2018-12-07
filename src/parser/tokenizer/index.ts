
import { TokenizerResult } from '../types/Results'

import { 
  Error, 
  InvalidTokenError,
  UnterminatedStringError
} from '../types/Errors'

import { Token, Word } from '../../types/Tokens'

import {
  braceOpen,
  braceClose,
  doubleQuote,
  colon,
  comma,
  braketClose,
  braketOpen
} from '../../types/Tokens/literals'

import { switchSingleton } from './Singletons/switchSingleton'
import { findEndOfWord } from '../../types/Tokens/Word/findEndOfWord'

const tokenizer = (input: string): TokenizerResult => {
  const characters = input.split('')
  
  const tokens: Array<Token> = []
  const errors: Array<Error> = []

  let lineNumber = 1
  let columnNumber = 1;
  characterLoop: for (let characterNumber = 1; characterNumber - 1 < characters.length; characterNumber++) {
    const element = characters[characterNumber - 1]
    
    switch (element) {
      case " ":
      case "\t":
      case "\r":
      // eat whitespace
        break
      case "\n":
        lineNumber += 1
        columnNumber = 0
        break
      case braceOpen: 
      case braceClose:
      case colon:
      case comma:
      case braketOpen:
      case braketClose:
        // singletons
        tokens.push(switchSingleton(element, lineNumber, columnNumber))
        break
      case doubleQuote:
        const wordLength = findEndOfWord(input, characterNumber)
        if (wordLength !== -1) {
          const wordLiteral = doubleQuote + input.substr(columnNumber, wordLength)
          tokens.push(new Word(wordLiteral, lineNumber, columnNumber))
          characterNumber = characterNumber + wordLength
          columnNumber = columnNumber + wordLength
        } else {
          errors.push(new UnterminatedStringError(lineNumber, columnNumber))
          break characterLoop
        }
        break
      default:
        errors.push(new InvalidTokenError(element, lineNumber, columnNumber))
        break characterLoop
    }
    columnNumber += 1
  }

  return new TokenizerResult(errors, tokens)
}

export { tokenizer }