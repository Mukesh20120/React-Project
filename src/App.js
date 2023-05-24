import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"
import Header from "./Components/Header";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signOut" element={<SignOut />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
