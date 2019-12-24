const dbConnection = require("../data/mongoConnection");
const data = require("../data/");
const animals = data.animals;
const posts = data.posts;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

  const phil = await animals.create("Phil", "Barresi");
  const id = phil._id;
  await posts.addPost("Hello, class!", "Today we are creating a blog!", id);
  await posts.addPost(
    "Using the seed",
    "We use the seed to have some initial data so we can just focus on servers this week",
    id
  );

  await posts.addPost(
    "Using routes",
    "The purpose of today is to simply look at some GET routes",
    id
  );

  console.log("Done seeding database");

  await db.serverConfig.close();
}

main();
