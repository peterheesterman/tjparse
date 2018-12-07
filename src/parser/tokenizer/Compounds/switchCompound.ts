
import { Error } from '../../types/Errors'
import { Token, Word, Null } from '../../../types/Tokens'
import { doubleQuote, n, f, t } from '../../../types/Tokens/literals'
import { findEndOfWord } from '../../../types/Tokens/Word/findEndOfWord'
import { UnterminatedStringError } from '../../types/Errors'
import { UnexpectedLiteral } from '../../types/Errors/UnexpectedToken'
import { isNull } from '../../../types/Tokens/Null/isNull'
import { isTrue } from '../../../types/Tokens/True/isTrue';
import { isFalse } from '../../../types/Tokens/False/isFalse';
import { False } from '../../../types/Tokens/False';
import { True } from '../../../types/Tokens/True';

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
      const literals = [n, t, f]
      const index = literals.indexOf(element)
      const checks = [isNull, isTrue, isFalse]
      const tokenTypes = [Null, True, False]

      if (checks[index](input, characterNumber)) {
        token = new (tokenTypes[index])(lineNumber, columnNumber)
        tokenLength = token.literal.length
      } else {
        error = new UnexpectedLiteral(lineNumber, columnNumber)
      }
  }

  return {
    tokenLength,
    token,
    error
  }
}

export { switchCompound }