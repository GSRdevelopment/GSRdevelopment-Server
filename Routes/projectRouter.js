const express = require("express");
const projectController = require("./../Controllers/projectController");

const router = express.Router();

router
  .route("/")
  .post(projectController.createProject)
  .get(projectController.getProject);

router
  .route("/:id")
  .patch(projectController.editModel)
  .delete(projectController.deleteModel);

module.exports = router;
