import { doubleQuote } from "../literals"

const findEndOfWord = (input: string, position: number): number => {
  if (input.length < position) return -1
  return input.substring(position, input.length).indexOf(doubleQuote) + 1 || -1
}

export {
  findEndOfWord
}