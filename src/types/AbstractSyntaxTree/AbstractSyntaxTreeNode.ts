class AbstractSyntaxTreeNode {
  parent: AbstractSyntaxTreeNode;
  children: Array<AbstractSyntaxTreeNode>;
}

export { AbstractSyntaxTreeNode }