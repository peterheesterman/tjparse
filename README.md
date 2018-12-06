
# tjparse

## Typescript JSON parser

Build and AST and then use that to produce a formatted json

## High level

```
Stage 1:

  [`tokenizer`]     [`parser`]   
string -> tokens --(! errors )-> AST
       -> errors --> errors


Stage 2:

[`formatter`]
AST -> string
```

## Next steps
  - make the tokenizer
    - null, true, false
    - number (can start with a .?) - too remember
    - analyze weaknesses and stregths of the approach
  - make the analyzer
    - tests
    - document
    - code
    - analyze weaknesses and stregths of the approach
  - make the formatter work
    - maybe port over the formatter from jjparse?
    - add flow types to it in order to see how easy or difficult it is to do

