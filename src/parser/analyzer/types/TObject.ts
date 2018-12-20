
import { AbstractSyntaxTreeNode } from '../../../types/AbstractSyntaxTree';
import { KeyValue } from './KeyValue'

class TObject implements AbstractSyntaxTreeNode {
  parent: AbstractSyntaxTreeNode
  startTokenIndex: number
  endTokenIndex: number
  children: Array<KeyValue>

  constructor(parent: AbstractSyntaxTreeNode, startTokenIndex: number, endTokenIndex: number, children: Array<KeyValue>) {
    this.parent = parent
    this.startTokenIndex = startTokenIndex
    this.endTokenIndex = endTokenIndex
    this.children = children
  }
}

export {
  TObject
}