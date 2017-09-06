let fs = require('fs')
let path = require('path')

let tokenize = require('./lib/tokenize')
let parse = require('./lib/parse')
let prettyJSON = require('./lib/helpers').prettyJSON

let template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf8')

let tokenizerState = tokenize(template)
let ast = parse(tokenizerState.tokens)

fs.writeFileSync('./tmp/tokens.json', prettyJSON(tokenizerState.tokens))
fs.writeFileSync('./tmp/ast.json', prettyJSON(ast))
