const express = require("express");
const router = express.Router();

const edu = [
    {
      "schoolName": "B V Polytechnic",
      "degree": "Diploma in Computer Technology",
      "favoriteClass": "Computer Networks",
      "favoriteMemory": "Being elected as Student Body President and organizing the College TechFest"
    },

    {
        "schoolName": "University of Mumbai",
        "degree": "B.E in Computer Engineering",
        "favoriteClass": "Mobile Applications",
        "favoriteMemory": "Failing the final exam and later realizing it was a counting mistake so passing it"
      },

      {
        "schoolName": "Stevens Institute of Technology",
        "degree": "MS Computer Science",
        "favoriteClass": "CS 546 Web Programming",
        "favoriteMemory": "Meeting this person on the first day of arrival during orientation at the university who is now a very close friend of mine "
      }
]

router.get("/", async (req, res) => {

res.json(edu)
});

module.exports = router;
