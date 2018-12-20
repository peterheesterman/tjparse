import { AbstractSyntaxTreeNode } from '../../../types/AbstractSyntaxTree'
import { Error } from '../../types/Errors'

interface processerOutput {
  node: AbstractSyntaxTreeNode
  error?: Error
  jump: number
}

export {
  processerOutput
}