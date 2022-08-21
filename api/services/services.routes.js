const express = require("express");
const router = express.Router();

const servicesController = require("./services.controller");

router.post("/createServices", servicesController.createServices);
router.get("/readServices", servicesController.readServices);
router.patch("/updateServices/:id", servicesController.updateServices);
router.delete("/deleteServices/:id", servicesController.deleteServices);

module.exports = router;