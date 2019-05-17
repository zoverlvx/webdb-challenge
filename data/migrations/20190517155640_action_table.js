
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", tbl => {
	tbl.increments();
	tbl.integer("project_id")
	  .unsigned()
	  .notNullable()
	  .references("id")
	  .inTable("projects")
	  .onDelete("CASCADE")
	  .onUpdate("CASCADE");

	tbl.string("description", 128).notNullable();
	tbl.text("notes").notNullable();
	tbl.boolean("completed").defaultTo(false);
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
};
