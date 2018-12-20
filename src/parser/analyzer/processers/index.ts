
import { Token, BraceOpen, BraketOpen, Null, BraceClose, BraketClose, Number } from '../../../types/Tokens'
import { processerOutput } from './processerOutput'
import { TObject } from '../types/TObject';
import { AbstractSyntaxTreeNode } from '../../../types/AbstractSyntaxTree';
import { TArray } from '../types/TArray';

type Class = { new(...args: any[]): any }

const processArray = (parent: TArray, tokens: Array<Token>, index: number): processerOutput => {
  if (parent.constructor !== TArray) 
    throw new Error("ProcessArray Error: The parent is not of type TArray")

  const token = tokens[index]

  let jump = 0
  switch (token.constructor) {
    case BraketClose:
      jump = 2
      parent.endTokenIndex += jump - 1 
    case Number:
      //processValue(parent, tokens, index)
      break;
    default:
      break
  }

  return { jump, error: null, node: parent }
}

const processObject = (parent: TObject, tokens: Array<Token>, index: number): processerOutput => {
  if (parent.constructor !== TObject) 
    throw new Error("ProcessArray Error: The parent is not of type TObject")

  const token = tokens[index]

  switch (token.constructor) {
    case BraceClose:
      const jump = 2
      parent.endTokenIndex += jump - 1 
      return { jump, node: parent }
      break
  
    default:
      break
  }

  return { jump:1, error: null, node: parent }
}

// If it is an object or an array then pass it on but if it is a simple value, consume it.
const processValue = (parent: AbstractSyntaxTreeNode, tokens: Array<Token>, index: number): processerOutput => {
  const token = tokens[index]

  const getConstructor = (type: Class): string => type.toString()

  const simpleValue =
    (type: Class) => 
      (parent:AbstractSyntaxTreeNode, tokens: Array<Token>, index: number) =>
        ({ node: new type(index), jump: 1 })

  const processers = {
    [getConstructor(BraceOpen)]: processObject,
    [getConstructor(BraketOpen)]: processArray,
    [getConstructor(Null)]: simpleValue(Null),
    [getConstructor(Number)]: simpleValue(Number)
  }

  return processers[token.constructor.toString()](parent, tokens, index + 1)
}

export {
  processArray,
  processObject,
  processValue
}