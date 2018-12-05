
import { Result } from './Result'
import { Error } from '../types/Errors'
import { Token } from '../types/Token'

class TokenizerResult implements Result {
  errors: Array<Error>
  tokens: Array<Token> | null

  constructor(errors: Array<Error>, tokens: Array<Token> | null) {
    this.errors = errors
    this.tokens = tokens
  }
}

export { TokenizerResult }