import { Error } from '.'

class InvalidTokenError implements Error {
  description: string
  lineNumber: number
  columnNumber: number

  constructor(token: string, lineNumber: number, columnNumber: number) {
    this.description = `The character (${token}) is not valid in json`
    this.lineNumber = lineNumber
    this.columnNumber =columnNumber
  }
}

export { InvalidTokenError }