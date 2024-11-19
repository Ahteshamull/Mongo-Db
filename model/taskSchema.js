const mongoose = require("mongoose")
const { Schema } = mongoose
let taskSchema = new Schema({
    name: String,
    age: Number
    
})
module.exports= mongoose.model("Task",taskSchema)