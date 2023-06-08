const Service = require("../models/serviceModel");
const express = require("express");

const {
  createService,
  updateService,
  deleteService,
  getService,
  getAllService,
  getServices,
} = require("../controllers/serviceController");
const { verifyUser } = require("../utils/verifyToken");

const router = express.Router();

//create
router.post("/", createService);

//update
router.put("/:id", verifyUser, updateService);

//delete

router.delete("/:id", deleteService);

//get

router.get("/find/", getService);

//get all

router.get("/", getAllService);

router.get("/get-services", getServices);

module.exports = router;
