const router = require("express").Router();
const resumeController = require("../../controller/resumeController");

router.route("/resume")
    // Creates a new resume document when the user confirms the document
    .post(resumeController.create)
    // Responds with a single resume matching the provided ID
    .get(resumeController.findById)
    // Updates a resume's content
    .put(resumeController.update)
    // Removes the resume
    .delete(resumeController.remove)

module.exports = router;