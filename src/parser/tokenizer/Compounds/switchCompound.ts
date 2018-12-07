
import { Error } from '../../types/Errors'
import { Token, Word, Null } from '../../../types/Tokens'
import { doubleQuote, n, f, t } from '../../../types/Tokens/literals'
import { findEndOfWord } from '../../../types/Tokens/Word/findEndOfWord'
import { UnterminatedStringError } from '../../types/Errors'
import { UnexpectedLiteral } from '../../types/Errors/UnexpectedToken'

import { getCheckAndType } from './compoundStatic'
interface $input {
  element: string
  input: string
  lineNumber: number
  columnNumber: number
  characterNumber: number
}

interface $output { tokenLength: number, token: Token, error: Error }

const switchCompound = ({ 
  element,
  input,
  lineNumber,
  columnNumber,
  characterNumber
}: $input): $output => {
  let tokenLength: number = -1
  let token: Token =  null
  let error: Error = null

  switch (element) {
    case doubleQuote:
      tokenLength = findEndOfWord(input, characterNumber)
      if (tokenLength !== -1) {
        const wordLiteral = doubleQuote + input.substr(columnNumber, tokenLength)
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
        tokenLength = token.literal.length
      } else {
        error = new UnexpectedLiteral(lineNumber, columnNumber)
      }
      break
  }
  return {
    tokenLength,
    token,
    error
  }
}

export { switchCompound }