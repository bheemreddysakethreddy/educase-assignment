import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signin from "./pages/signin";
import Account from "./pages/account";
function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen box-border bg-gray-100 ">
      <div className="rounded w-114 h-screen px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
