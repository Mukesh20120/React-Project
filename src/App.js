import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"
import Header from "./Components/Header";

function App() {
  return (
   <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signOut" element={<SignOut/>} />
      </Routes>
   </Router>
   </>
  );
}

export default App;
