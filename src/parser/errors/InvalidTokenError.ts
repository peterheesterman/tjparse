import { Error } from './'

class InvalidTokenError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(description: string, lineNumber: number, columnNumber: number) {
    this.description = description
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { InvalidTokenError }