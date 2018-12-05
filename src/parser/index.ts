import { ParserResult } from './Results'

import { isEmpty } from '../utils/isEmpty'

import { tokenizer } from './tokenizer'
import { analyzer } from './analyzer'

const parse = (input: string): ParserResult => {
  // Get tokens
  const { errors: tokenizerErrors , tokens} = tokenizer(input)
  if (!isEmpty(tokenizerErrors)) {
    return new ParserResult(tokenizerErrors, null)
  }

  // Make AbstractSyntaxTree from tokens
  const { errors: analyzerErrors, abstractSyntaxTree } = analyzer(tokens)
  if (!isEmpty(analyzerErrors)) {
    return new ParserResult(analyzerErrors, null)
  }

  return new ParserResult([], abstractSyntaxTree)
}

export { parse }