const path = require("path");
const router = require("express").Router();

// notes.html responds to notes file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../develop/notes.html"));
});

// other routes respond with the html file 
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../develop/index.html"));
});

module.exports = router;
