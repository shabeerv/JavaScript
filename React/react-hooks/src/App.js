import './App.css';
import React, { useReducer } from 'react';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterFour from './components/CounterFour';
import CounterFive from './components/CounterFive';
import UserForm from './components/UserForm';
// import ComponentB from './components/ComponentB';
// import ComponentA from './components/ComponentA';
// import ComponentC from './components/ComponentC';

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <PostList /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <CounterOne /> */}
      {/* <CounterThree /> */} 
      {/* Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterFour />
      <CounterFive /> */}
      <UserForm />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
