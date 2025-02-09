// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateLayout from "./Components/Layout/PrivateLayout";
import Anipon from "./Pages/Anipon/Anipon";
import Profile from "./Pages/Profile/Profile";
import MyList from "./Pages/MyList/MyList";
import Anime from "./Pages/Anime/Anime";
import Chat from "./Pages/Chat/Chat";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthLayout from "./Components/Layout/AuthLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          {/* Ruta de layout para las rutas protegidas */}
          <Route element={<PrivateLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/anipon" element={<Anipon />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/anime/:id" element={<Anime />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
