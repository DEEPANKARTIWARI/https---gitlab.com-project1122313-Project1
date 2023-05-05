import "./App.css";
import FooterCompnonent from "./componant/footerComponant";
import React from "react";
import HeaderComponent from "./componant/headercomponent";
import Home from "./componant/Home";
import Services from "./componant/Services";
import Solutions from "./componant/Solutions";
import Blogs from "./componant/Blogs";

import ContactUs from "./componant/ContactUs";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Solutions" element={<Solutions />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
      <FooterCompnonent />
    </div>
  );
};

export default App;
