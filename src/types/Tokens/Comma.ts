
import { Token } from '.'
import { comma } from './literals'

class Comma implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = comma
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }

  getLiteral() {
    return this.literal
  }
}

export { Comma }