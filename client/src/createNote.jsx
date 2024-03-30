import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateNote = () => {
  // const [id, setId] = useState("");
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
    setNoteData({ objId: "65f462b5f2f8a838dfe2f497" });
  }, []);
  const createNote = async () => {
    const res = await axios.post(
      "https://dmy438-3000.csb.app/api/createNote",
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
