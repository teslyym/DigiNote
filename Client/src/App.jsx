import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notes from "./Pages/Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App Pages With Sidebar */}
        <Route element={<AppLayout />}>
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
