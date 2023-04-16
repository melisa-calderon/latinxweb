import React from "react";
import { Routes, Route } from "react-router-dom";

import NewYork from "./components/Pages/NewYork/NewYork";
import Home from "./components/Pages/Home/Home";
import Texas from "./components/Pages/Texas/Texas";
import FederalRights from "./components/Pages/FederalRights";
import Mission from "./components/Pages/Mission";
import Error from "./components/Pages/Error";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/texas" element={<Texas />} />
        <Route path="/new-york" element={<NewYork />} />
        <Route path="/federal-rights" element={<FederalRights />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;