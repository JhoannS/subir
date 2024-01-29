const { Router } = require("express");
const router = Router();

const {
  renderDbForm,
  createNewDate,
  renderDb,
  renderEditForm,
  updateDb,
  deleteDoc,
} = require("../controllers/db.controller");

// Get all db
router.get("/database", renderDb );

// New db
router.get("/database", renderDbForm);

router.post("/database/add", createNewDate);


//Edit db
router.get("", renderEditForm);

router.put("/database/edit/:id", updateDb);

//Delete document
router.delete("/database/delete/:id", deleteDoc);

module.exports = router;
