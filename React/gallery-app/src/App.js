import { useSelector } from "react-redux";
import AppRouter from "./AppRouter";
import Loader from "./components/Loader";
import { isLoadingSelector, successSelector } from "./redux/Selectors/statusSelector";
//import ActionTracker from "./helpers/ActionTracker";
//import UserTracker from "./helpers/UserTracker";
import { loadingList } from "./helpers/ActionTracker";


function App() {

  const load = useSelector((state) => isLoadingSelector(loadingList, state));

  return (
    <>
      <Loader show={load} />
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
