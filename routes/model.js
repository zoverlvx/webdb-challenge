const db = require("../data/dbConfig");

module.exports = function (db) {
    function find() {
	return db(db);	
    }
    function findById(id) {
	return db(db).where({id}).first()
    }
    function add(json) {
	return db(db).insert(json, "id").then(([id]) => {
	    return findById(id);
	}) 
    }
    function update(id, changes) {
	return db(db).where({id}).update(changes).then(count => {
	    if (count > 0) return findById(id);
	    if (count < 0) return null;
	});
    }
    function remove(id) {
	return db(db).where({id}).del();
    }
    return {
	find,
	findById,
	add,
	update,
	remove
    }
}
