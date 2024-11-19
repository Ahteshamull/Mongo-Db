const  mongoose  = require("mongoose");

const DatabaseConnection = () => {
    try {
        
        mongoose.connect(
          "mongodb+srv://crud:crud@cluster0.eke1e.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
        ).then(() => {
            console.log("Database connected")
        }).catch(() => {
            console.log("Error")
        })
    }catch {
       console.log("error") 
    }
}
module.exports = DatabaseConnection