import { readFileSync, writeFileSync } from 'fs'

import { isEmpty } from './utils/isEmpty'

import { parse } from './parser'
import { formatter } from './formatter'

// Get command line arguments for running tjparse.
const args:Array<string> = process.argv.slice(2)
const inputPath: string = args[0]
const outputPath: string = args[1]

const text = readFileSync(inputPath, { encoding: 'utf8' })

const { errors, abstractSyntaxTree } = parse(text)

if (!isEmpty(errors)) {
  console.log('we have some errors!')
} else {
  console.log('no errors making the Abstract Syntax Tree')
}

const config = {
  minify: true
}

writeFileSync(outputPath, formatter(config)(abstractSyntaxTree))
