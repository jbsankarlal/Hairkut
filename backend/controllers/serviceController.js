const Saloon = require("../models/saloonModel");
const Service = require("../models/serviceModel");

const createService = async (req, res, next) => {
  try {
    const { service, price, gender, saloonID } = req.body;
    const newService = new Service({
      servicename: service,
      price: price,
      gender: gender,
      saloonId: saloonID,
    });

    const savedService = await newService.save();
    await Saloon.findByIdAndUpdate(saloonID, {
      $push: { services: savedService._id },
    });
    res.status(200).json(savedService);
  } catch (err) {
    next(err);
  }
};

const updateService = async (req, res, next) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json("Service has been deleted");
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

const getService = async (req, res, next) => {
  try {
    console.log("service kitti", req.query.sname);

    const service = await Service.find({
      saloonId: req.query.id,
      servicename: req.query.sname,
    });
    console.log(service, "daataSEE");
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

const getAllService = async (req, res, next) => {
  try {
    const service = await Service.find();
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

const getServices = async (req, res, next) => {
  try {
    const data = await Service.find({ saloonId: req.query.id });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createService,
  updateService,
  deleteService,
  getService,
  getAllService,
  getServices,
};
