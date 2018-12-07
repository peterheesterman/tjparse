
import { Token } from '..'

class Null implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = "null"
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { Null }