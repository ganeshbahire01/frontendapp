import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        margin: "auto",
        fontSize: "20px",
      }}
    >
      <a href="/">Register</a>
      <a href="/login">Login</a>
      <a href="/notes">Notes</a>
      <a href="/addnotes">addNotes</a>
    </div>
  );
};

export default Navbar;
