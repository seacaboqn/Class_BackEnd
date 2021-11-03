const express = require('express');
const router = express.Router();
const classesController = require('./classesController')

/* GET users listing. */
router.get('/', classesController.getAllClasses);

router.get('/:id', classesController.getClass);

router.post('/', classesController.postAddClass);

module.exports = router;
