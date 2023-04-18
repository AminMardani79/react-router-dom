import { Link, Routes, Route, NavLink } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
type ActiveType = {
  isActive :boolean
}
function App() {
  const setActiveMode = ({isActive}:ActiveType)=>{
    return isActive ? "text-red-800" : 'text-blue-400'
  } 
  return (
    <div className="App">
      <nav className="flex justify-center w-full gap-4 py-3">
        <NavLink className={setActiveMode} to="/home">Home</NavLink>
        <NavLink className={setActiveMode} to="/about-us">AboutUs</NavLink>
        <NavLink className={setActiveMode} to="/cart">Cart</NavLink>
        <NavLink className={setActiveMode} to="/users">Users</NavLink>
      </nav>

      <div className="flex justify-center pt-5">
        <Routes>
          <Route path="/" element={<div>start</div>} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart/*" element={<Cart />}>
            <Route path="1" element={<div>number 1</div>} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/users" element={<Users />}>
            <Route
              index
              element={
                <div className="text-2xl text-green-800 text-center">
                  Select User
                </div>
              }
            />
            <Route path=":userId" element={<User />} />
          </Route>
          {/* <Route path="/users/:userId" element={<User />} /> */}
          <Route
            path="*"
            element={
              <div className="text-xl text-red-800 py-5">
                There is nothing here
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
