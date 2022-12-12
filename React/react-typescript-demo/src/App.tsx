import './App.css';
// import { Button } from './components/Button';
import { Container } from './components/Container';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

function App() {

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]

  return (
    <div className="App">
        {/* <Greet name='Shabeer' messageCount={10} isLoggedIn={false} />
        <Person name={personName}/>
        <PersonList names={nameList} /> */}
      {/* <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>The Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Shabeer' isLoggedIn={false} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log('Button Clicked', event)
        }} />
        <Input value='' handleChange={event => console.log(event)} /> */}
        <Container styles={{border: '1px solid black', padding: '1rem'}} />
    </div>
  );
}

export default App;
