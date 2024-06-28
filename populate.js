require('dotenv').config()

const Job = require('./models/Job');
const connectDB = require('./db/connect');
const data = require('./mock.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(data)
        console.log('Data imported successfully')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()