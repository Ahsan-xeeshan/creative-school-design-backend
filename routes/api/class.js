const express = require("express");

const router = express.Router();
const {
  createClassController,
  allClassController,
  updateFeedbackController,
  classAcceptController,
  classRejectController,
  updateClassController,
  deleteClassController,
  classPurchaseController,
  selectedClassesController,
  deleteSelectionController,
} = require("../../controllers/createClassController.js");
const instructorCardController = require("../../controllers/instructorCardController.js");

router.post("/createclass", createClassController);
router.get("/allclasses", allClassController);
router.get("/myclasses", instructorCardController);
router.post("/updatefeedback", updateFeedbackController);
router.post("/classaccept", classAcceptController);
router.post("/classreject", classRejectController);
router.post("/updateclass/:id", updateClassController);
router.post("/deleteclass", deleteClassController);
router.post("/purchaseclass", classPurchaseController);
router.get("/selectedclasses", selectedClassesController);
router.post("/deleteselection", deleteSelectionController);

module.exports = router;
