
import { AbstractSyntaxTree, AbstractSyntaxTreeNode } from '../../types/AbstractSyntaxTree'
import { AnalyzerResult } from '../types/Results/AnalyzerResult'
import { Error } from '../types/Errors'
import { Token, BraceOpen, BraketOpen } from '../../types/Tokens'
import { isEmpty } from '../../utils/isEmpty'

import { processObject, processArray } from './processers'
import { TObject } from './types/TObject';
import { TArray } from './types/TArray';

const analyzer = (tokens: Array<Token>): AnalyzerResult => {
  const abstractSyntaxTree = new AbstractSyntaxTree()
  const errors: Array<Error> = []

  if (isEmpty(tokens)) {
    //errors.push(new )
  }

  let processer
  let node

  switch (tokens[0].constructor) {
    case Array: // need a type
      node = new TArray(null, 0, 0, [])
      processer = processArray
      break
    case Object: // need a type
      node = new TObject(null, 0, 0, [])
      processer = processObject
      break
    default:
      // errors.push(new )
      break
  }

  const { error: analyzerError } = processer(node, tokens, 0)

  if (analyzerError != null) {
    // TODO: remove this console log and handle the error
    console.log('we got an error')
    // error.push(new )
  } else {
    abstractSyntaxTree.root = node
  }
  
  return new AnalyzerResult(errors, abstractSyntaxTree)
}

export { analyzer }