const express = require("express");
const router = express.Router();
const Register = require("../../models/Register");

//@route GET /api/searchtoken/test
//@desc Tests post route
//@access public
router.get("/test", (req, res) => res.json({ message: "serachtoken works" }));

//@route POst /api/searchtoken/token
//@desc  Search token
//@access public

router.post("/token", (req, res) => {
  const token = req.body.token;
  Register.findOne({ token }).then(user => {
    if (!user) {
      return res.json({ resolution: "Token Not Found" });
    } else {
      res.json(user);
    }
  });
});
module.exports = router;
