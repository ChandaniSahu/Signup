import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Notes = () => {
  const [objId, setObjId] = useState("65f462b5f2f8a838dfe2f497");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const navigateCreatenote = () => {
    navigate("/createNote");
  };
  useEffect(() => {
    const fun = async () => {
      console.log("useeffect is working");
      console.log();
      const res = await axios.post(
        `https://dmy438-3000.csb.app/api/getNotes/${objId}`,
      );
      setNotes(res.data);
    };
    fun();
  }, []);
  return (
    <>
      <h1>Notes</h1>
      <button onClick={navigateCreatenote}>+</button>
      {/* {console.log(notes.data)} */}
      <div id="note">
        {" "}
        {notes.map((ele, i) => {
          return (
            <div key={i}>
              {ele.title}
              <br />
              {ele.content}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
