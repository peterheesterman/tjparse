import { doubleQuote } from "../literals"

const findEndOfNumber = (input: string, position: number): number => {
  if (input.length < position) return -1
  
  const numberRegex = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/
  const result = input.substring(position - 1, input.length).match(numberRegex)

  if (result != null) {
    return result[0].length
  } else {
    return -1;
  }
}

export {
  findEndOfNumber
}