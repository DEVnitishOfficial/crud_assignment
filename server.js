
const app = require('./app.js')

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL

app.listen(PORT,() => {
 console.log(`Server listening on http://localhost:${PORT}`);
 console.log(`MongoDb connected to ${MONGO_URL}`);
})

