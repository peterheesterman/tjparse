
import { Token, BraceOpen, BraceClose, Colon } from '../../../types/Tokens'
import { braceOpen, braceClose, colon } from '../../../types/Tokens/literals'

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
  }
}

export { switchSingleton }