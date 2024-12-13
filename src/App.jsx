// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateLayout from "./Layout/PrivateLayout";
import Anipon from "./Pages/Anipon/Anipon";
import Profile from "./Pages/Profile/Profile";
import MyList from "./Pages/MyList/MyList";
// import TierList from "./Pages/tierList/tierList";
import Anime from "./Pages/Anime/Anime";
import Chat from "./Pages/Chat/Chat";

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
          {/* <Route path="/tierList" element={<TierList />} />{" "} */}
          <Route path="/anime/:id" element={<Anime />} />
          <Route path="/chat" element={<Chat />} />
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
