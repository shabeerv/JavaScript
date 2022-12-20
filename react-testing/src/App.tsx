import './App.css';
// import { Counter } from './components/Counter/Counter';
import { MuiMode } from './components/Mui/MuiMode';
import { AppProviders } from './providers/AppProvider';
// import { Application } from './components/application/application';
// import { Skills }  from './skills/skills';

function App() {
  // const skills = ['HTML', 'CSS', 'JavaScript']
  return (
      <AppProviders>
        <div className="App">
          <MuiMode />
        </div>
      </AppProviders>

      // {/* <Application />
      // <Skills skills={skills} /> */}
      // {/* <Counter /> */}
  );
}

export default App;
