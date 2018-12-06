/**
 * 1. Custom logger for redux
 */
export function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)
        const returnValue = next(action)
        console.log('state after dispatch', getState())
        return returnValue
    }
}

/**
 * 2. Custom logger for redux
 */
export const addLoggingToDispatch = (store) => {
    if (!console.group) {
        return rawDispatch;
    }
    const rawDispatch = store.dispatch;
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }
}

/**
 * 3. Custom logger for redux
 */
export const colorfulLogger = store => next => action => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action);
    let result = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd()
    return result
}