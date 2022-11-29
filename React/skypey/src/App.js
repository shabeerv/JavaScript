import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { getContacts, getActiveUserId, getUser  } from './redux/Selectors/selectors';
import { useSelector } from 'react-redux'
import _ from 'lodash'

function App() {

  const contacts = useSelector(getContacts)
  const user = useSelector(getUser)
  const activeUserId = useSelector(getActiveUserId)

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  )
}

export default App;
