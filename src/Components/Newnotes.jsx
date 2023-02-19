import React from "react";
import axios from "axios";
const AddNotes = () => {
  const [titel, setTitel] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const HandelSubmit = async () => {
    const payload = {
      titel,
      desc,
    };
    try {
      let req = await fetch(
        "https://fair-red-agouti-ring.cyclic.app/notes/addnotes",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(req);
      alert("addNotes success");
    } catch (error) {}
  };
  return (
    <div style={{ display: "block" }}>
      <label style={{ display: "block" }}>Titel </label>
      <input
        value={titel}
        type="text"
        placeholder="titel"
        onChange={(e) => setTitel(e.target.value)}
      />
      <label style={{ display: "block" }}>Email </label>
      <input
        type="text"
        value={desc}
        placeholder="desciption"
        onChange={(e) => setDesc(e.target.value)}
      />

      <label style={{ display: "block" }}>Register </label>

      <button onClick={HandelSubmit}>Register</button>
    </div>
  );
};

export default AddNotes;
