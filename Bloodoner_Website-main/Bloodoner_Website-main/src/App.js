import React, { useEffect, useState} from "react";
import Home from "./Home";
import FindDonors from "./FindDonors";
import DonateBlood from "./DonateBlood";
import OrderBlood from "./OrderBlood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import { auth } from "./Firebase";


const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home name={userName} />} />
            <Route path="/FindDonors" element={<FindDonors />} />
            <Route path="/DonateBlood" element={<DonateBlood />} />
            <Route path="/OrderBlood" element={<OrderBlood />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
};

export default App;
