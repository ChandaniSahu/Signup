import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import {store} from './store.js'
import { RiDeleteBin6Line } from "react-icons/ri";


const Notes = () => {

  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const navigateCreatenote = () => {
    navigate("/createNote")
  };
  useEffect(() => {
    const fun = async () => {
      console.log("useeffect is working");
      console.log('rani',store.getState().detail.noteID)
      
      const res = await axios.post(
        `http://localhost:3000/api/getNotes/${store.getState().detail.noteID}`,
      );
      // console.log(res)
      setNotes(res.data);
      // console.log("from notes")
    };
    fun();
  }, []);

  // const deleteNote = async(id)=>{
  //   const res= await axios.post(`http://localhost:30000/api/deleteNote${id}`)
  // }
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
{/* <RiDeleteBin6Line onClick={()=>deleteNote(ele_id)}/> */}
export default Notes;
