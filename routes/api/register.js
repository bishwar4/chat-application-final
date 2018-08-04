const express = require("express");
const router = express.Router();
const Register = require("../../models/Register");

//to generate unique random no
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(10000, 99999);

//@route GET api/register/test
//@desc Tests post route
//@access public
router.get("/test", (req, res) => {
  Register.find().then(user => res.json({ user }));
});

//@route GET api/register/track
//@desc Tests post route
//@access public
router.post("/track", (req, res) => {
  const newUser = new Register({
    name: req.body.name,
    email: req.body.email,
    token: rand(),
    query: req.body.query,
    resolution: "we are processing and get back to you shortly"
  });
  newUser
    .save()
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      throw err;
    });

  // res.json({message:'works'});
});

module.exports = router;
