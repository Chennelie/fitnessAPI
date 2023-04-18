const express = require('express');
const bodyPart = require('../json/muscles/bodyPartList.json');
const target = require('../json/muscles/targetList.json');
const router = express.Router();

router.get(`/`, function (req, res) {
	res.status(200).json({msg: "OK"});
});

//Get all body parts
router.get(`/parts`, function (req, res) {
	res.status(200).json({bodyPart});
});

//Get all target muscles
router.get(`/muscles`, function (req, res) {
	res.status(200).json({target});
});

module.exports = router;