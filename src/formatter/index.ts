
import { AbstractSyntaxTree } from '../AbstractSyntaxTree'

interface $config {
  minify: boolean
}

const formatter = 
  (config: $config) => 
    (abstractSyntaxTree: AbstractSyntaxTree): string => {

  console.log(`formatting with config: ${config}`)
  
  return "formatted json"
}

export { formatter }