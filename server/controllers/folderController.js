const { Folder } = require("../models")

const createFolder = async (req, res) => {
  try {
    const { name, type, maxFileLimit } = req.body
    const folder = await Folder.create({ name, type, maxFileLimit })
    res.status(201).json({ message: "Folder created successfully", folder })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateFolder = async (req, res) => {
  try {
    const { folderId } = req.params
    const { name, type, maxFileLimit } = req.body
    const folder = await Folder.update(
      { name, type, maxFileLimit },
      { where: { folderId } }
    )
    res.status(200).json({ message: "Folder updated successfully", folder })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteFolder = async (req, res) => {
  try {
    const { folderId } = req.params
    await Folder.destroy({ where: { folderId } })
    res.status(200).json({ message: "Folder deleted successfully" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.findAll()
    res.status(200).json(folders)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createFolder, updateFolder, deleteFolder, getAllFolders }
