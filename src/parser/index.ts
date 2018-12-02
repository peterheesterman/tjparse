
import { Result } from './Result'
import { InvalidTokenError } from './errors'


const parse = (input: string): Result => {
  console.log(`we are parsing: ${input}`)
  console.log('but not really')

  const error = new InvalidTokenError("ops", 1, 1) 

  return new Result([error], null)
}

export { parse }