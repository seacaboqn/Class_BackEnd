const Classes = require('./classesModel');
exports.create = async (newClass) =>{
	await Classes.create(newClass);
}

exports.getAll = async () => {
	return Classes.findAll();
}

exports.getOne = async (id) => {
	return Classes.findByPk(id);
}
