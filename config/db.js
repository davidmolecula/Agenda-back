import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO)
        .then(()=> console.log('Database connected'))
        .catch((error)=>console.log(error))