
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


