import { n, f, t } from "../../../types/Tokens/literals"

import { isTrue } from "../../../types/Tokens/True/isTrue"
import { True } from "../../../types/Tokens/True"
import { isFalse } from "../../../types/Tokens/False/isFalse"
import { False } from "../../../types/Tokens/False"
import { isNull } from "../../../types/Tokens/Null/isNull"
import { Null } from "../../../types/Tokens/Null"

type Class = { new(...args: any[]): any }

interface output {
  check: (input: string, position: number) => boolean,
  tokenType: Class
}

const getCheckAndType = (element: string): output => {
  const literals = [n, t, f]
  const checks = [isNull, isTrue, isFalse]
  const tokenTypes = [Null, True, False]
  
  const index = literals.indexOf(element)
  return {
    check: checks[index],
    tokenType: tokenTypes[index]
  }
}

export {
  getCheckAndType
}