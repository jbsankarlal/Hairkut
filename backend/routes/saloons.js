const Saloon = require('../models/saloonModel')
const express = require('express');
const { createSaloon, updateSaloon, deleteSaloon, getSaloon,getSaloonCity, getAllSaloon, updateSaloonStatus, countByService, countByCity, getSlots, bankInfo, getAllSaloons } = require('../controllers/saloonControllers');
const { verifyAdmin, verifyVendor } = require('../utils/verifyToken');
const upload = require('../utils/multer');
const { vendorLogin } = require('../controllers/authControllers');


const router = express.Router();

//create

router.post('/' ,upload.single('photo'),createSaloon);

router.post('/bankinfo',bankInfo)

//update
router.put('/:id', verifyAdmin , updateSaloon);
router.put('/status/:id' ,updateSaloonStatus);
//delete

router.delete('/:id', verifyAdmin, deleteSaloon);
   
//get
router.get('/', getAllSaloon);
router.get('/all',getAllSaloons)
router.post('/login',vendorLogin)
router.get('/find/:id', getSaloonCity);
router.get('/finds/:id', getSaloon);

//get all
router.get('/countByService', countByService);
router.get('/countByCity', countByCity);
router.get('/slot/:id',getSlots)


module.exports = router;