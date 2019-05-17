
exports.seed = function(knex, Promise) {
    return knex("projects")insert([
	{
	    name: "Complete Node.js and Express Challenge",
	    description: "Build an awesome API using Node.js and Express to manage projects and actions GID style!"
	},
	{
	    name: "Complete Knex and SQLite3 Challenge",
	    description: "Build an awesome database using Knex and SQLite3 along with Express to manage projects and actions GID style!"
	}
    ]);
};
