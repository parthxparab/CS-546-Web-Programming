const constructorMethod = app => {
    
    app.use("/", (req, res) => {
         res.render("main");
    });

    app.use("*", (req,res) => {
        res.sendStatus(500);
    });
};

    module.exports = constructorMethod;
