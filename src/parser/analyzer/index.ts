
import { Token } from '../Token'
import { AbstractSyntaxTree } from '../../AbstractSyntaxTree'

const analyzer = (tokens: Array<Token>): AbstractSyntaxTree => {
  tokens.forEach(element => {
    console.log('analyzer: foreach - ', element)
  })

  const abstractSyntaxTree = new AbstractSyntaxTree()

  return abstractSyntaxTree
}

export { analyzer }