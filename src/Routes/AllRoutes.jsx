import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import AddNotes from "../Components/Newnotes";
import Notes from "../Components/Notes";
import Register from "../Components/Register";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/addnotes" element={<AddNotes />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
