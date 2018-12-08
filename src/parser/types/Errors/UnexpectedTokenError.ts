
import { Error } from '.'

class UnexpectedTokenError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.description = `Unexpected literal`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { UnexpectedTokenError }