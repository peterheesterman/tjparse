
import { AbstractSyntaxTree } from '../../types/AbstractSyntaxTree'
import { AnalyzerResult } from '../types/Results/AnalyzerResult'
import { Error } from '../types/Errors'
import { Token } from '../types/Token'

const analyzer = (tokens: Array<Token>): AnalyzerResult => {
  tokens.forEach(element => {
    console.log('analyzer: foreach - ', element)
  })

  const abstractSyntaxTree = new AbstractSyntaxTree()

  const errors: Array<Error> = []
  return new AnalyzerResult(errors, abstractSyntaxTree)
}

export { analyzer }