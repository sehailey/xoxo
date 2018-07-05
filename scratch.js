import { Map } from 'immutable'
import { createStore } from 'redux'

const initialState = {
    turn: 'X',
    board: Map()
}

const flipTurn = function(turn) {
    if (turn === 'X') {
        return 'O'
    } else {
        return 'X'
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'move':
            if (state.board.getIn(action.arr === undefined)) {
                state.board.setIn(action.arr, state.turn)
                state.turn = flipTurn(state.turn)
                return state
            }
        default:
            return state
    }
}

const store = createStore(reducer)

// "Hi, player X! where would you like to move?"
let playerInput = raw_input('Where would you like to move? >>> ')
// X: types 0,0
store.dispatch({ type: 'move', arr: playerInput })

//export default store

//     if (state.turn === 'X' && state.board.getIn(action.arr) === undefined) {
//         state.board.setIn(action.arr, state.turn)
//         state.turn = 'O'
//         return state
//     } else if (
//         state.turn === 'O' &&
//         state.board.getIn(action.arr) === undefined
//     ) {
//         state.board.setIn(action.arr, state.turn)
//         state.turn = 'X'
//         return state
//     } else {
//         console.log('there is already something there')
//     }
