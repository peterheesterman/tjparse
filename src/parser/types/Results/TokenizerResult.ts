
import { Result } from './Result'
import { Error } from '../Errors'
import { Token } from '../../../types/Tokens'

class TokenizerResult implements Result {
  errors: Array<Error>
  tokens: Array<Token> | null

  constructor(errors: Array<Error>, tokens: Array<Token> | null) {
    this.errors = errors
    this.tokens = tokens
  }
}

export { TokenizerResult }