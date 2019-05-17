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
	      const {id, name, description} = project;
	      db("actions").where("project_id", req.params.id)
		.then(
		    actions => handleRes(
			    res, 200, {project: {id, name, description, actions:[...actions]}}
		    )
		)
	  }
	  if(!project) {
	      handleRes(res, 404, {success: false, message: `Project with id of ${req.params.id} not found`})
	  }
      }).catch(err => handleRes(res, 500, err))
})

router.post("/", (req, res) => {
    const {name, description} = req.body;
    if (!name || !description) {
	handleRes(res, 400, {success: false, message: "Must provide a name and description"});
    }
    if (typeof name !== "string" || typeof description !== "string") {
	handleRes(res, 400, {success: false, message: "Name and description must both be strings"});
    }
    if (typeof name === "string" && typeof description === "string") {
        db("projects").insert({name, description}, "id")
	.then(ids => {
	    const [id] = ids;
	    handleRes(res, 201, {success: true, id});
	}).catch(err => handleRes(res, 500, err))
    }
});

module.exports = router;
