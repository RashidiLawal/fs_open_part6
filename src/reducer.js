import React from 'react'
import ReactDOM from 'react-dom/client'

import {createStore} from 'redux'



const initialState = {
   good: 0,
   ok: 0,
   bad: 0
}


const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GOOD':
            return {...state, good: 5}
        case 'OK':
            return {...state, ok: 4}
        case 'BAD':
            return {...state, bad: 2}
        case 'ZERO':
            return state
        default:
            return state
    }


}

const store = createStore(counterReducer)

console.log(store.getState())
store.dispatch({type: 'GOOD'})
console.log(store.getState())
store.dispatch({type: 'OK'})
console.log(store.getState())
store.dispatch({type: 'BAD'})
console.log(store.getState())
store.dispatch({type: 'ZERO'})

store.subscribe(() => {
    const newState = store.getState()
    console.log(newState)
})


const App = () => {
    return (
        <div>
            <div>
                {store.getState()}
            </div>
            <button onClick={e => store.dispatch({type: 'GOOD'})}>
                GOOD
              </button>
              <button onClick={e => store.dispatch({type: 'OK'})}>
                OK
              </button>
              <button onClick={e => store.dispatch({type: 'BAD'})}>
                BAD
              </button>
              <button onClick={e => store.dispatch({type: 'ZERO'})}>
                Zero
              </button>
        </div>
    )
}


const renderApp = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
}

renderApp()
store.subscribe(renderApp)

export default counterReducer;