const router = require("express").Router();
const db = require("../data/dbConfig");
const handleRes = require("./tools/handleRes");

router.get("/", (req, res) => {
    db("projects").then(projects => {
	handleRes(res, 200, projects);
    }).catch(err => handleRes(res, 500, {error: "There was an error retrieving the projects"}))
});

module.exports = router;
