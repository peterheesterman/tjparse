
import { Token } from '.'
import { braketOpen } from './literals'

class BraketOpen implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = braketOpen
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }

  getLiteral() {
    return this.literal
  }
}

export { BraketOpen }