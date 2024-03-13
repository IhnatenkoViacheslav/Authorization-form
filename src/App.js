import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
    </Routes>
  );
}

export default App;
