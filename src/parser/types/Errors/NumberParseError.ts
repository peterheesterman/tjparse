
import { Error } from '.'

class NumberParseError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.description = `number parser error`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { NumberParseError }