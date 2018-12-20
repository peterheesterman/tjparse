import { AbstractSyntaxTreeNode } from "../../../types/AbstractSyntaxTree";

class Value {
  parent: AbstractSyntaxTreeNode
  startTokenIndex: number
  endTokenIndex: number

  constructor(parent: AbstractSyntaxTreeNode, startTokenIndex: number, endTokenIndex: number) {
    this.parent = parent
    this.startTokenIndex = startTokenIndex
    this.endTokenIndex = endTokenIndex
  }
}

export {
  Value
}