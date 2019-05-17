
exports.seed = function(knex, Promise) {
    return knex("actions").insert([
	{
	    project_id: 1,
	    description: "Fork and clone repo",
	    notes: "Repo URL: yadda yadda"
	},
	{
	    project_id: 1,
	    description: "Install dependencies",
	    notes: "Remember to cd into the folder where the project was cloned"
	},
	{
	    project_id: 1,
	    description: "Design and build API endpoints",
	    notes: "This is where the magic happens!"
	},
	{
	    project_id: 2,
	    description: "another description",
	    notes: "more notes"
	},
	{
	    project_id: 2,
	    description: "yadda yadda",
	    notes: "yadda yadda"
	},
	{
	    project_id: 2,
	    description: "yadda yadda",
	    notes: "yadda yadda"
	}
    ]);
};
