// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import PrivateLayout from "./layout/PrivateLayout";
import Anipon from "./pages/anipon/anipon";
import Profile from "./pages/profile/profile";
import MyList from "./pages/myList/myList";
import TierList from "./pages/tierList/tierList";
import Anime from "./pages/anime/anime";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/anipon" element={<Anipon />} />{" "}
          <Route path="/myList" element={<MyList />} />
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/tierList" element={<TierList />} />{" "}
          <Route path="/anime/:id" element={<Anime />} />
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          element={
            <PrivateRoute
              onlylogged={true}
              allowedRoles={["admin", "employee"]}
            />
          }
        >

        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
