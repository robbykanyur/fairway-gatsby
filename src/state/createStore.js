import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === 'TOGGLE_MENU') {
    return Object.assign({}, state, {
      isMenuActive: !state.isMenuActive
    })
  }
  return state
}

const initialState = {
  isMenuActive: false
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
