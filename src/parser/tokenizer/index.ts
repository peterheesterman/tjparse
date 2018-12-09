
import { isEmpty } from '../../utils/isEmpty'
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
  braketOpen,
  n,
  f,
  t
} from '../../types/Tokens/literals'

import { switchSingleton } from './Singletons/switchSingleton'
import { switchCompound } from './Compounds/switchCompound'
import { findEndOfWord } from '../../types/Tokens/Word/findEndOfWord'

const tokenizer = (input: string): TokenizerResult => {
  const characters = input.split('')
  
  const tokens: Array<Token> = []
  const errors: Array<Error> = []

  let lineNumber = 1
  let columnNumber = 0
  characterLoop: for (let characterNumber = 0; characterNumber < characters.length; characterNumber++) {
    const element = characters[characterNumber]
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
      case "-":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case doubleQuote: // word
      case n: // null
      case f: // false
      case t: // true
        const { 
          token, 
          endJump,
          error: compoundError 
        } = switchCompound({ element, input, lineNumber, columnNumber, characterNumber })
        
        if (compoundError != null) {
          errors.push(compoundError)
          break characterLoop
        }

        tokens.push(token)
        columnNumber += endJump
        characterNumber += endJump
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