let cloneState = require('../helpers').cloneDeep
const {
  TOKENIZER_CONTEXT_DATA
} = require('../constants/tokenizer-contexts')
const {
  TOKEN_CLOSE_TAG
} = require('../constants/token-types')


let syntaxHandlers = {
  closingCornerBrace (state) {
    let updatedState = cloneState(state)

    updatedState.tokens.push({
      type: TOKEN_CLOSE_TAG,
      content: `${ state.accumulatedContent }${ state.decisionBuffer }`
    })

    updatedState.accumulatedContent = ''
    updatedState.decisionBuffer = ''
    updatedState.currentContextType = TOKENIZER_CONTEXT_DATA

    return updatedState
  }
}

function parseSyntax (chars) {
  if (chars === '>') {
    return syntaxHandlers.closingCornerBrace
  }
}

module.exports = {
  syntaxHandlers,
  parseSyntax
}