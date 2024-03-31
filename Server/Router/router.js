const express = require("express");
const router = express.Router();
const User = require("../Schema/UserSchema");
const Note = require("../Schema/NoteSchema");

//for signup page
router.post("/setData", async (req, res) => {
  try {
    console.log("signup backend");
    const { uname, mono, email, pass, cpass } = req.body;
    if (!uname || !mono || !email || !pass || !cpass) {
      res.json({ msg: "all fields are medentary" });
    }
    const userindb = await User.findOne({ email: email });
    if (userindb) {
      res.json({ msg: "UAE" });
    }
    if (pass === cpass) {
      const newUser = new User({ uname, mono, email, pass });
      await newUser.save();
      res.json({ msg: "SS" });
    } else {
      res.json({ msg: "password and confirm password are not same" });
    }
  } catch (error) {
    res.json("Iternal server error from signup", error);
  }
});

router.post("/getData", async (req, res) => {
  try {
    console.log("loginStart");
    const { email, pass } = req.body;
    const user = await User.findOne({ email, pass }).select("-pass");
    console.log(user);
    if (user) {
      res.json({ msg: "successful", user });
    } else {
      res.json({ msg: "failed" });
    }
  } catch (error) {
    console.log("login", error);
  }
});

router.post("/createNote", async (req, res) => {
  try {
    console.log("createNotestart");
    const { objId, title, content } = req.body;
    const newNote = new Note({ objId, title, content });
    console.log(newNote);
    await newNote.save();
    res.json({ msg: "created" });
  } catch (error) {
    console.log("createNote", error);
  }
});

router.post("/getNotes/:objId", async (req, res) => {
  try {
    console.log("getnotes start");
    // const { objId } = req.body;
    const { objId } = req.params;
    // const {charu:objId} ;
    console.log("idd", objId);
    console.log("user", User);
    console.log("Note", Note);
    const notes = await Note.find({ objId });
    console.log(notes);
    if (notes) {
      res.json(notes);
    } else {
      res.json({ msg: "no" });
    }
    // console.log("getnotes", notes);
    // res.json({ msg: "successfull" });
  } catch (error) {
    console.log("getnotes_error", error);
  }
});

router.post('/deleteNote/:id' , async(req,res)=>{
  const {id}=req.params
  const NotDeletedNote=Note.findByIdAndDelete(id)
  console.log(NotDeletedNote)
  res.json(NotDeletedNote)
})

module.exports = router;
