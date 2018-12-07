import { n } from "../literals"

const isNull = (input: string, position: number): boolean => {
  return input.substr(position - 1, 4) === "null"
}

export {
  isNull
}