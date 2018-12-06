
import { Token } from '..'

class Word implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(literal: string, lineNumber: number, columnNumber: number) {
    this.literal = literal
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { Word }