
import { Error } from '../../types/Errors'
import { Token, Word, Number } from '../../../types/Tokens'
import { doubleQuote, n, f, t } from '../../../types/Tokens/literals'
import { findEndOfWord } from '../../../types/Tokens/Word/findEndOfWord'
import { getCheckAndType } from './compoundStatic'
import { findEndOfNumber } from '../../../types/Tokens/Number/findEndOfNumber'
import { 
  UnterminatedStringError,
  NumberParseError,
  UnexpectedTokenError
} from '../../types/Errors'

interface $input {
  element: string
  input: string
  lineNumber: number
  columnNumber: number
  characterNumber: number
}

interface $output { jump: number, token: Token, error: Error }

const switchCompound = ({ 
  element,
  input,
  lineNumber,
  columnNumber,
  characterNumber
}: $input): $output => {
  let jump: number = -1
  let token: Token =  null
  let error: Error = null

  switch (element) {
    case doubleQuote:
      jump = findEndOfWord(input, characterNumber)
      if (jump !== -1) {
        const wordLiteral = input.substr(characterNumber, jump + 1)
        token = new Word(wordLiteral, lineNumber, columnNumber)
      } else {
        error = new UnterminatedStringError(lineNumber, columnNumber)
      }
      break
    case n: // null
    case t: // true
    case f: // false
      const { check, tokenType } = getCheckAndType(element)

      if (check(input, characterNumber)) {
        token = new tokenType(lineNumber, columnNumber)
        jump = token.literal.length - 1
      } else {
        error = new UnexpectedTokenError(lineNumber, columnNumber)
      }
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
      jump = findEndOfNumber(input, characterNumber)
      if (jump !== -1) {
        const numberLiteral = input.substr(characterNumber, jump)
        jump -= 1
        token = new Number(numberLiteral, lineNumber, columnNumber)
      } else {
        error = new NumberParseError(lineNumber, columnNumber)
      }
      break
  }
  return {
    jump,
    token,
    error
  }
}

export { switchCompound }