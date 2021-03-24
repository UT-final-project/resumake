const router = require("express").Router();
const resumeController = require("../../controller/resumeController");

// Matches with "/api/resume"
router.route("/")
  // Responds with an array of all resumes
  .get(resumeController.findAll)
  // Creates a new resume document when the user confirms the document
  .post(resumeController.create)

// Matches with "/api/resume/:id"
router.route('/:id')
  // Responds with a single resume matching the provided ID
  .get(resumeController.findById)
  // Updates a resume's content matching the provided ID
  .put(resumeController.update)
  // Removes the resume matching the provided ID
  .delete(resumeController.remove)
  

module.exports = router;
