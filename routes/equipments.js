const express = require('express');
const equipments = require('../json/equipments/equipmentList.json');
const router = express.Router();

//Get all equipments
router.get(`/`, function (req, res) {
	res.status(200).json({equipments});
});

module.exports = router;