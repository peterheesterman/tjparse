interface AbstractSyntaxTreeNode {
  parent: AbstractSyntaxTreeNode | null
  startTokenIndex: number
  endTokenIndex: number
}

export { AbstractSyntaxTreeNode }