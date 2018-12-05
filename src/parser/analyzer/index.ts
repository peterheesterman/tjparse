
import { Token } from '../Token'
import { AnalyzerResult } from '../Results/AnalyzerResult'
import { AbstractSyntaxTree } from '../../AbstractSyntaxTree'
import { Error } from '../Errors'

const analyzer = (tokens: Array<Token>): AnalyzerResult => {
  tokens.forEach(element => {
    console.log('analyzer: foreach - ', element)
  })

  const abstractSyntaxTree = new AbstractSyntaxTree()

  const errors: Array<Error> = []
  return new AnalyzerResult(errors, abstractSyntaxTree)
}

export { analyzer }