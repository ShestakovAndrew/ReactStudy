import React, {useReducer} from 'react'

const initialState = {count: 0}

type CounterStateType = {
    count: number
}

type UpdateActionType = {
    type: 'increment' | 'decrement' | 'reset'
    payload: number
}

type ResetActionType = {
    type: 'reset'
    payload?: number
}

type CounterAction = UpdateActionType | ResetActionType

function reducer(state: CounterStateType, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset
            </button>
        </>
    )
}
