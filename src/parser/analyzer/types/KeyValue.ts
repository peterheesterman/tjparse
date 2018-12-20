
import { AbstractSyntaxTreeNode } from '../../../types/AbstractSyntaxTree';
import { Key } from './Key'
import { Value } from './Value'

class KeyValue implements AbstractSyntaxTreeNode {
  parent: AbstractSyntaxTreeNode
  startTokenIndex: number
  endTokenIndex: number
  key: Key
  value: Value

  constructor(parent: AbstractSyntaxTreeNode, key: Key, value: Value, startTokenIndex: number, endTokenIndex: number) {
    this.parent = parent
    this.key = key
    this.value = value
    this.startTokenIndex = startTokenIndex
    this.endTokenIndex = endTokenIndex
  }
}

export {
  KeyValue
}