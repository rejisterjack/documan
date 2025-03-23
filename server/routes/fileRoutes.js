const express = require("express")
const router = express.Router()
const {
  uploadFile,
  updateFileDescription,
  deleteFile,
  getFilesInFolder,
} = require("../controllers/fileController")
const upload = require("../middleware/upload")

router.post("/:folderId/files", upload.single("file"), uploadFile)
router.put("/:folderId/files/:fileId", updateFileDescription)
router.delete("/:folderId/files/:fileId", deleteFile)
router.get("/:folderId/files", getFilesInFolder)

module.exports = router
