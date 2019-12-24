const express = require("express");
const router = express.Router();

const story = {
    "storyTitle": "My stupid friend at JFK",
    "story": "This story about what a stupid thing my friend did when all of us landed at JFK. There were five of us, we had just landed after a total of 22 hours from Mumbai, India. Me and three of my friends were from Stevens where as the 5th guy was from Rutgers. Let's call him Peet for this story. So My friends and I we booked the same cab to go to the University. Peet had trouble connecting to the internet so when we got out of JFK there were these people with the UBER sign in their hands asking us where do we want to go. Our cab was on the way so we didn't bother but Peet went and spoke to one of them about the price and stuff. \n We totally forgot about him because we were rushing to take our cab. Next day when we call him to ask if he's settled in we get to know and one of the UBER driver he spoke to and agreed with got an entire limo at the airport just for Peet and his 3 bags and he couldn't back out because the driver was harassing him. Turns out that day the first transaction Peet made when he landed in New York was spend $550 for a fancy limo UBER ride from JFK to Newark."

  }

router.get("/", async (req, res) => {

res.json(story)
});

module.exports = router;
