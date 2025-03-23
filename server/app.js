const express = require("express")
const folderRoutes = require("./routes/folderRoutes")
const fileRoutes = require("./routes/fileRoutes")

const app = express()

app.use(express.json())
app.use("/folders", folderRoutes)
app.use("/folders", fileRoutes)

module.exports = app
