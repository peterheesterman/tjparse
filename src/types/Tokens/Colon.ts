
import { Token } from '.'
import { colon } from './literals'

class Colon implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = colon
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }

  getLiteral() {
    return this.literal
  }
}

export { Colon }