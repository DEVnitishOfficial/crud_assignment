
const mongoose = require("mongoose")

const connectToDataBase = async ()=> {
     mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`Database connected successfully : ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log("something went wrong while connecting DB",err.message);
        process.exit(1)
    })
}

module.exports = connectToDataBase