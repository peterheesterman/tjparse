
import { Token } from '.'
import { braceOpen } from './literals'

class BraceOpen implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = braceOpen
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { BraceOpen }