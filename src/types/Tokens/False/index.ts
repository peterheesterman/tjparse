
import { Token } from '..'

class False implements Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.literal = "false"
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { False }