import React from "react"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"

import rootReducer from "./rootReducer"

const devEnv = process.env.NODE_ENV === "development"

function createReduxStore() {
  const middlewares = []

  if (devEnv) {
    const logger = createLogger({
      duration: true,
      collapsed: true,
      colors: {
        title: () => "#139BFE",
        prevState: () => "#1C5FAF",
        action: () => "#149945",
        nextState: () => "#A47104",
        error: () => "#ff0005",
      },
    })
    middlewares.push(logger)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  let composeEnhancers
  if (devEnv && typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    composeEnhancers = devtools
  } else {
    composeEnhancers = compose
  }
  const composedEnhancers = composeEnhancers(...enhancers)

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

const store = createReduxStore()

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
