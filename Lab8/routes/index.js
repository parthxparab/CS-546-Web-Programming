const searchRoute = require("./search");
const detailsRoute = require("./details");
const path = require("path");

const constructorMethod = app => {
  app.use("/search", searchRoute);
  app.use("/details", detailsRoute);
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/site.html"));
  });

  app.use("*", (req, res) => {
   // res.sendFile(path.resolve("static/about.html"));
   res.status(404).json({error : "404 not found"});
  });
};

