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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          element={
            <PrivateRoute
              onlylogged={true}
              allowedRoles={["admin", "employee"]}
            />
          }
        >
          <Route element={<PrivateLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/user-setting" element={<UserSetting />} />
            <Route path="/requests" element={<Request />} />
          </Route>
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
