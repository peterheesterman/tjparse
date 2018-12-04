
import { Result } from './Result'
import { Error } from '../errors'
import { AbstractSyntaxTree } from '../../AbstractSyntaxTree'

class ParserResult implements Result {
  errors: Array<Error>
  abstractSyntaxTree: AbstractSyntaxTree | null

  constructor(errors: Array<Error>, abstractSyntaxTree: AbstractSyntaxTree | null) {
    this.errors = errors
    this.abstractSyntaxTree = abstractSyntaxTree
  }
}

export { ParserResult }