const router = require("express").Router();

const aboutControllers = require("../controllers/aboutControllers");

router.get("/", aboutControllers.browse);
router.get("/:id", aboutControllers.read);
router.put("/:id", aboutControllers.edit);
router.post("/", aboutControllers.add);
router.delete("/:id", aboutControllers.destroy);

module.exports = router;
