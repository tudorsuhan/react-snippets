// Core
import { combineReducers } from "redux"

// Reducers
import cart from "./cart"

const combinedReducers = combineReducers({
  cart,
})

const jamshopReducer = (state, action) => combinedReducers(state, action)

export default jamshopReducer
