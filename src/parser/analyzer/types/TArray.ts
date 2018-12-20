
import { AbstractSyntaxTreeNode } from '../../../types/AbstractSyntaxTree';
import { Value } from './Value'

class TArray implements AbstractSyntaxTreeNode {
  parent: AbstractSyntaxTreeNode
  startTokenIndex: number
  endTokenIndex: number
  children: Array<Value>

  constructor(parent: AbstractSyntaxTreeNode, startTokenIndex: number, endTokenIndex: number, children: Array<Value>) {
    this.parent = parent
    this.startTokenIndex = startTokenIndex
    this.endTokenIndex = endTokenIndex
    this.children = children
  }
}

export {
  TArray
}