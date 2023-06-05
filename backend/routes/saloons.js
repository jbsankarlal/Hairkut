const Saloon = require('../models/saloonModel')
const express = require('express');
const { createSaloon, updateSaloon, deleteSaloon, getSaloon,getSaloonCity, getAllSaloon, updateSaloonStatus, countByService, countByCity, getSlots, bankInfo } = require('../controllers/saloonControllers');
const { verifyAdmin, verifyVendor } = require('../utils/verifyToken');


const router = express.Router();

//create

router.post('/' ,createSaloon);

router.post('/bankinfo',bankInfo)

//update
router.put('/:id', verifyAdmin , updateSaloon);
router.put('/status/:id' ,updateSaloonStatus);
//delete

router.delete('/:id', verifyAdmin, deleteSaloon);
   
//get
router.get('/', getAllSaloon);
router.get('/find/:id', getSaloonCity);
router.get('/finds/:id', getSaloon);

//get all
router.get('/countByService', countByService);
router.get('/countByCity', countByCity);
router.get('/slot/:id',getSlots)


module.exports = router;