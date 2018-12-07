
import { Token } from '..'

class True implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = "true"
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { True }