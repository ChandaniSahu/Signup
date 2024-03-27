const express = require("express");
const router = express.Router();
const User = require("../Schema/UserSchema");

router.post("/setData", async (req, res) => {
  try {
    console.log("signup backend")
    const { uname, mono, email, pass, cpass } = req.body;
    if (!uname || !mono || !email || !pass || !cpass) {
      res.json({ msg: "all fields are medentary" })
    }
    const userindb = await User.findOne({ email: email })
    if (userindb) {
       res.json({ msg: "UAE" })
    }
    if (pass === cpass) {

      const newUser = new User({ uname, mono, email, pass })
      await newUser.save();
      res.json({ msg: "SS" });

    }
    else {
      res.json({ msg: "password and confirm password are not same" })
    }

  } catch (error) {
    res.json("Iternal server error from signup", error);
  }
});

router.post("/getData", async (req, res) => {
  try {
    console.log("loginStart")
    const { email, pass } = req.body
    const user = await User.findOne({ email , pass}).select('-pass');
    //  console.log(user)
    if (user) {
      res.json({msg:"successful"})

    }
    else {
      
      res.json({msg:"failed"})
    }
  } catch (error) {
    console.log("login", error)
  }


})


module.exports = router;