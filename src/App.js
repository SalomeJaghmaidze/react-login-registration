import "./App.css";
import Login from "./pages/login/Index";
import Header from "./components/header/Header";
import Register from "./pages/register/Index";
import Authorized from "./pages/authorized/Index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/authorized" element={<Authorized />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
