import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import Person from './components/Person'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';



function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet name="Bruce" heroName="Batman" /> */}
      {/*<p>This is children prop</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman"/>
      <Welcome name="Bruce" heroName="Batman" />*/}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonder woman" /> */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* { <FunctionClick /> }
      { <ClassClick /> } */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
       {/* <NameList /> */}
      {/* < Person /> */}
      {/* <Stylesheet primary={true} />*/}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <Inline /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* < ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
       {/* <ErrorBoundary>
      <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary>  */}
      {/* <ClickCounter name="Shabeer" />
      <HoverCounter />  */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Shabeer' : 'Guest'} /> */}
      {/* <Counter>{(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount}/> 
      )} 
      </Counter>

      <Counter>{(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}
      </Counter> */}

      {/* <UserProvider value='Shabeer'> */}
        <ComponentC />
      {/* </UserProvider> */}
      
    </div>
  );
}

export default App;
