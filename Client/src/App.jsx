import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notes from "./Pages/Notes";
import Reminders from "./Pages/Reminders";
import Archive from "./Pages/Archive";
import AppLayout from "./Components/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App pages with sidebar */}
        <Route element={<AppLayout />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
