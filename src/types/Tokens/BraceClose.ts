
import { Token } from '.'
import { braceClose } from './literals'

class BraceClose implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = braceClose
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { BraceClose }