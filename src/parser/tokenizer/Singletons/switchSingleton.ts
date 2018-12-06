
import { Token, BraceOpen, BraceClose, Colon, Comma, BraketOpen, BraketClose } from '../../../types/Tokens'
import { braceOpen, braceClose, colon, braketClose, braketOpen, comma } from '../../../types/Tokens/literals'

const switchSingleton = (
  literal: string,
  lineNumber: number,
  columnNumber: number
): Token => {
  switch (literal) {
    case braceOpen:
      return new BraceOpen(lineNumber, columnNumber)
    case braceClose:
      return new BraceClose(lineNumber, columnNumber)
    case colon:
      return new Colon(lineNumber, columnNumber)
    case comma:
      return new Comma(lineNumber, columnNumber)
    case braketOpen:
      return new BraketOpen(lineNumber, columnNumber)
    case braketClose:
      return new BraketClose(lineNumber, columnNumber)
  }
}

export { switchSingleton }