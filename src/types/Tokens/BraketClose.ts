
import { Token } from '.'
import { braketClose } from './literals'

class BraketClose implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = braketClose
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }

  getLiteral() {
    return this.literal
  }
}

export { BraketClose }