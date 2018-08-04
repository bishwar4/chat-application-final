const express = require("express");
const router = express.Router();
const Faq = require("../../models/Faq");

//@route GET api/faq/find
//@desc Tests get route
//@access public
router.get("/find", (req, res) => {
  Faq.find().then(faq => res.json({ faq }));
});

//@route post api/faq/send
//@desc find faq  post route
//@access public
router.post("/send", (req, res) => {
  const newQus = new Faq({
    question: req.body.question,

    answer: req.body.answer
  });
  newQus
    .save()
    .then(faq => res.json({ faq }))
    .catch(err => {
      throw err;
    });

  // res.json({message:'works'});
});
module.exports = router;
