
import { Error } from './errors'
import { AbstractSyntaxTree } from '../AbstractSyntaxTree'

class Result {
  errors: Array<Error>
  abstractSyntaxTree: AbstractSyntaxTree | null

  constructor(errors: Array<Error>, abstractSyntaxTree: AbstractSyntaxTree | null) {
    this.errors = errors
    this.abstractSyntaxTree = abstractSyntaxTree
  }
}

export { Result }