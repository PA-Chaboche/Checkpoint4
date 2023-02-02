const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const emailControllers = require("../controllers/emailControllers");
const userRoutes = require("./user.routes");
const adminRoutes = require("./admin.routes");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);
router.post("/contact", emailControllers.sendEmail);
router.use("/users", userRoutes);
router.use("/about", adminRoutes);

module.exports = router;
