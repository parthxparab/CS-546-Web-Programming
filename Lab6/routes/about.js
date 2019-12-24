const express = require("express");
const router = express.Router();

const about = {
    "name": "Parth Parab",
    "cwid": "10444835",
    "biography": "Hello, I am Parth Parab. I study at Stevens Institute of Technology. I am a grad student there studying Masters of Science in Computer Science. I am from Mumbai, India. Born and Raised. \n I love coding mostly in python and android. My hobbies include playing guitar and reading books and watching indie movies. That's it i guess. Also, I really like to listen to Maroon 5 and Coldplay but i'll also pretty much hear anything I like. Bye have a good day.",
    "favoriteShows": ["Greys Anatomy", "Brooklyn Nine Nine", "The Office", "How I Met Your Mother", "Game of Thrones"],
    "hobbies": ["Reading Books", "Playing Guitar", "Photography", "Travelling"]
  }

router.get("/", async (req, res) => {

res.json(about)
});

module.exports = router;
