// const dummy = require('./dummy');
const { create, getAll, getOne } = require('./classesService')

exports.getAllClasses = async (req, res, next) => {
	const allClasses = await getAll();
	if (allClasses) {
		res.status(200).json(allClasses);
	}
	else {
		res.status(404).json({noti: 'Not found'});
	}

}

exports.getClass = async (req, res, next) => {
	const id = req.params.id;
	const cls =  await getOne(id);
	if (cls) {
		res.stale(200).json(cls);
	}
	else {
		res.status(404).json({noti: 'Not found'});
	}

}

exports.postAddClass = async (req, res, next) => {
	const className = req.body.name;
	const classPart = req.body.part;
	const classTopic = req.body.topic;
	const classRoom = req.body.room;
	const newClass = {
		name: className,
		part: classPart,
		topic: classTopic,
		room: classRoom
	};
	try {
		const cls = await create(newClass);
		res.status(201).json(cls);
	}
	catch(e) {
		console.error(e.message);
		return res.status(409).json({noti: 'Error'});
	}
}
