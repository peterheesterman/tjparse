
const isLiteralChecker = (literal: string) => (input: string, position: number): boolean => {
  return input.substr(position, literal.length) === literal
}

export {
  isLiteralChecker
}