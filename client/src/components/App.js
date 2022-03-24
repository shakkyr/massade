import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Home  from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Topbar from "./topbar/Topbar";

const App = () => {
  return (
    <BrowserRouter>
    <Topbar />
    <main>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/favorite" component={Favorite} /> */}
          {/* <Route exact path="/movie/:movieId" component={MovieDetails} /> */}
          <Route exact path="/signup" element={<Register/>} />
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/profile/:username" element={<Profile/>} />
          {/* <UserRoute exact path="/profile" component={UserDashboard} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
    </main>
    
    {/* <Profile /> */}
    {/* <Login/> */}
    {/* <Register /> */}

    
    

    </BrowserRouter>
  );
}

export default App;
