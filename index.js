const express = require("express")
const DatabaseConnection = require("./Db/databaseConfig")
const taskSchema = require("./model/taskSchema")
const app = express()
const port = 8000
DatabaseConnection()
app.post("/", async(req, res) => {
    let task = new taskSchema({
        name: "Hasan",
        age: 21
    })
    let result = await task.save()
    return res.status(201).send(result)
})

app.use((req, res) => {
    return res.status(404).send("404 Not Found")
})
app.listen(port, () => {
    console.log("Server is running")
})