
const mongoose = require("mongoose")

const connectToDataBase = async ()=> {
    (await mongoose.connect(process.env.MONGO_URI)).then((conn) => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("something went wrong while connecting DB",err.message);
    } )
}

module.exports = {connectToDataBase};