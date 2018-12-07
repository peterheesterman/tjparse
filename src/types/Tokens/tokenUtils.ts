
const isLiteralChecker = (literal: string) => (input: string, position: number): boolean => {
  return input.substr(position - 1, literal.length) === literal
}

export {
  isLiteralChecker
}