
import { Error } from '.'

class UnterminatedStringError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(lineNumber: number, columnNumber: number) {
    this.description = `Unterminated string literal`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { UnterminatedStringError }