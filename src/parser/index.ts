
import { isEmpty } from '../utils/isEmpty'

import { ParserResult } from './Results'
import { Error, InvalidTokenError } from './errors'

import { tokenizer } from './tokenizer'
import { analyzer } from './analyzer'

const parse = (input: string): ParserResult => {

  let { errors, tokens} = tokenizer(input)
  if (!isEmpty(errors)) {
    return new ParserResult(errors, null)
  }

  // bubble up erros like above - add the other result type
  const abstractSyntaxTree = analyzer(tokens)

  errors = [new InvalidTokenError("ops", 1, 1)]

  if (!isEmpty(errors)) {
    return new ParserResult(errors, null)
  }

  return new ParserResult([], abstractSyntaxTree)
}

export { parse }