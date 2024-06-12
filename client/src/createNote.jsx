import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {store} from "./store";
const CreateNote = (props) => {
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  const [NoteData, setNoteData] = useState({
    objId: "",
    title: "",
    content: "",
  });
  const handleInput = (e) => {
    setNoteData({ ...NoteData, [e.target.name]: e.target.value });
  };
  useEffect(() => {

    setNoteData({...NoteData,objId:persistor.getState().detail.noteID });
    
  }, []);


  const createNote = async () => {
    const res = await axios.post(
      "http://localhost:3000/api/createNote",
      NoteData,
    );
    console.log(res);
    if (res.data.msg == "created") {
      navigate("/notes");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={NoteData.title}
          name="title"
          onChange={handleInput}
        />
        <textarea
          placeholder="write your note"
          value={NoteData.content}
          name="content"
          onChange={handleInput}
        />
        <button onClick={createNote}>Submit</button>
      </div>
    </>
  );
};
export default CreateNote;
