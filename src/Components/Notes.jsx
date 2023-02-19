import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = React.useState([]);
  const getData = async () => {
    try {
      let data = await axios.get(
        "https://fair-red-agouti-ring.cyclic.app/notes",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setNotes(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNote = async (id) => {
    //   console.log(id)
    try {
      const data = await axios.delete(
        `https://fair-red-agouti-ring.cyclic.app/notes/deletenotes/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      alert(data.data);
      getData();
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {notes.map((el) => {
        return (
          <div key={el._id}>
            <h1>{el.titel}</h1>
            <p>{el.desc}</p>
            <button onClick={() => deleteNote(el._id)}>Delete</button>
            <button>UPDATE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
