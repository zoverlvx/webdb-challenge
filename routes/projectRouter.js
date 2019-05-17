const router = require("express").Router();
const db = require("../data/dbConfig");
const handleRes = require("./tools/handleRes");

router.get("/", (req, res) => {
    db("projects").then(projects => {
	handleRes(res, 200, projects);
    }).catch(err => handleRes(res, 500, {error: "There was an error retrieving the projects"}))
});

router.get("/:id", (req, res) => {
    db("projects").where({id: req.params.id}).first()
      .then(project => {
	  if(project) {
	      handleRes(res, 200, {success: true, project});
	  }
	  if(!project) {
	      handleRes(res, 404, {success: false, message: `Project with id of ${req.params.id} not found`})
	  }
      }).catch(err => handleRes(res, 500, err))
})

module.exports = router;
