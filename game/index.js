import { Map } from 'immutable'
import { createStore } from 'redux'

let board = Map()
board = board.setIn([1, 1], 'X')
const move = function(arr, ){

}
const reducer= (state = initialState, action) => {
  switch(action.type) {
    case 'move':
    return {board.setIn(arr)}
  }
}

const store = createStore(reducer)
store.dispatch({type, player, position
})




export default function reducer(state, action) {
  // TODO
  return state
}
