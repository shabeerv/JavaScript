import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from '../pages/Home'
import Login from '../components/Login';
import { getUser } from "../redux/Selectors";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {

    const user = useSelector(getUser)
    console.log(user.isAuth)
    //const log = true;

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute authenticated={user.isAuth}>
            <Home />
            </ProtectedRoute>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
