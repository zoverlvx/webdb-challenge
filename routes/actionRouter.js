const router = require("express").Router();
const db = require("../data/dbConfig");
const handleRes = require("./tools/handleRes");

router.get("/", (req, res) => {
    db("actions").then(actions => {
	handleRes(res, 200, actions);
    }).catch(err => handleRes(res, 500, {error: "There was an error retrieving the actions data"}));
});

router.post("/", (req, res) => {
    const {description, notes, project_id} = req.body;
    if (!description || !notes || !project_id) {
	handleRes(
	    res, 
	    400, 
	    {success: false, message: "Must provide a description, notes, and project id"}
	)
    }
    if (description && notes && project_id) {
	const failed = {success: false, message: null}
	if (typeof description !== "string") {
	    failed.message = "Description must be a string";
	    handleRes(res, 400, failed);
	}
	if (typeof notes !== "string") {
	    failed.message = "Notes must be a string";
	    handleRes(res, 400, failed);
	}
	if (typeof project_id !== "number") {
	    failed.message = "Project id must be a number";
	    handleRes(res, 400, failed);
	}
	db("actions").insert({description, notes, project_id}, "id")
	  .then(ids => {
	      const [id] = ids;
	      handleRes(res, 201, {success: true, id})  
	  }).catch(err => handleRes(res, 500, err));
    }
});

module.exports = router;
