
import { Token } from '../types/Token'
import { TokenizerResult } from '../types/Results'

const tokenizer = (input: string): TokenizerResult => {
  const tokens:Array<Token> = []

  const token = new Token('null', 1, 1)
  tokens.push(token)

  return new TokenizerResult([], tokens)
}

export { tokenizer }