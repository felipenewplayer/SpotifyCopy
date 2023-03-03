import { Route, Routes } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import './index.css'
import { Login } from "./pages/Login";

function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
