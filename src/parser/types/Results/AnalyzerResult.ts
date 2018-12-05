
import { Result } from './Result'
import { Error } from '../Errors'
import { AbstractSyntaxTree } from '../../../types/AbstractSyntaxTree'

class AnalyzerResult implements Result {
  errors: Array<Error>
  abstractSyntaxTree: AbstractSyntaxTree | null

  constructor(errors: Array<Error>, abstractSyntaxTree: AbstractSyntaxTree | null) {
    this.errors = errors
    this.abstractSyntaxTree = abstractSyntaxTree
  }
}

export { AnalyzerResult }