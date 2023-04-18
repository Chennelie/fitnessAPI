const express = require('express');
const exercises = require('../json/exercises/exerciseList.json');
const router = express.Router();

//Get all exercises
router.get(`/`, function (req, res) {
	res.status(200).json({exercises});
});

//Get all exercises by name
router.get(`/:name`, function (req, res) {
	const name = req.params.name;
	const exercisesByName = exercises.filter(exercise => exercise.name === name);
	res.status(200).json({exercisesByName});
});

//Get all exercises by body parts
router.get(`/bodyparts/:bodyPart`, function (req, res) {
	const bodyPart = req.params.bodyPart;
	const exercisesByBodyPart = exercises.filter(exercise => exercise.bodyPart === bodyPart);
	res.status(200).json({exercisesByBodyPart});
});

//Get all exercises by target muscles
router.get(`/target/:target`, function (req, res) {
	const target = req.params.target;
	const exercisesByTarget = exercises.filter(exercise => exercise.target === target);
	res.status(200).json({exercisesByTarget});
});

//Get all exercises by equipment
router.get(`/equipment/:equipment`, function (req, res) {
	const equipment = req.params.equipment;
	const exercisesByEquipment = exercises.filter(exercise => exercise.equipment === equipment);
	res.status(200).json({exercisesByEquipment});
});

module.exports = router;