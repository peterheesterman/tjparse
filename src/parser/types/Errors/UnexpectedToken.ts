
import { Error } from '.'

class UnexpectedLiteral implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.description = `Unexpected literal`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { UnexpectedLiteral }