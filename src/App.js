import {createStore} from 'redux'
function App() {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
 }
 
 
 const counterReducer = (state = initialState, action) => {
    //  console.log(action)
     switch (action.type) {
         case 'GOOD':
             return {...state, good: 5}
         case 'OK':
             return {...state, ok: 4}
         case 'BAD':
             return {...state, bad: 2}
         default:
             return state
     }
 
 
 }
 
 const store = createStore(counterReducer)
 
 store.dispatch({type: 'GOOD'})
//  console.log(store.getState())
 store.dispatch({type: 'OK'})
//  console.log(store.getState())
 store.dispatch({type: 'BAD'})
 console.log(store.getState())
 
 let newState = store.getState()

//  store.subscribe(() => {
//     let newState = store.getState();
//    console.log(newState)
//  })
 
 
  return (
    <div className="App">
        <h1>
           {
             Object.keys(newState).map((item, itemIndex)=><p key={`item_${itemIndex}`}>{item}: {newState[item]}</p>)
           }
        </h1>
    </div>
  );
}

export default App;
