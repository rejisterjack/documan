const express = require("express")
const router = express.Router()
const {
  createFolder,
  updateFolder,
  deleteFolder,
  getAllFolders,
} = require("../controllers/folderController")

router.post("/create", createFolder)
router.put("/:folderId", updateFolder)
router.delete("/:folderId", deleteFolder)
router.get("/", getAllFolders)

module.exports = router
