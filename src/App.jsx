// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
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
