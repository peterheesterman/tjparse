
import { Error } from './Errors'
import { AbstractSyntaxTree } from '../AbstractSyntaxTree'

class Token {
  literal: string
  lineNumber: number
  columnNumber: number

  constructor(literal: string, lineNumber: number, columnNumber: number) {
    this.literal = literal
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
  }
}

export { Token }