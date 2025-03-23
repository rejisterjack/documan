const { File, Folder } = require("../models")
const upload = require("../middleware/upload")

const uploadFile = async (req, res) => {
  try {
    const { folderId } = req.params
    const { description } = req.body
    const file = req.file

    const folder = await Folder.findByPk(folderId)
    if (!folder) throw new Error("Folder does not exist")

    const newFile = await File.create({
      folderId,
      name: file.originalname,
      description,
      type: file.mimetype,
      size: file.size,
    })

    res
      .status(201)
      .json({ message: "File uploaded successfully", file: newFile })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateFileDescription = async (req, res) => {
  try {
    const { folderId, fileId } = req.params
    const { description } = req.body
    const file = await File.update(
      { description },
      { where: { fileId, folderId } }
    )
    res
      .status(200)
      .json({ message: "File description updated successfully", file })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteFile = async (req, res) => {
  try {
    const { folderId, fileId } = req.params
    await File.destroy({ where: { fileId, folderId } })
    res.status(200).json({ message: "File deleted successfully" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getFilesInFolder = async (req, res) => {
  try {
    const { folderId } = req.params
    const files = await File.findAll({ where: { folderId } })
    res.status(200).json(files)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  uploadFile,
  updateFileDescription,
  deleteFile,
  getFilesInFolder,
}
