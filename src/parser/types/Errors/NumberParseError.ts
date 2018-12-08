
import { Error } from '.'

class NumberParseError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.description = `Unterminated string literal`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { NumberParseError }