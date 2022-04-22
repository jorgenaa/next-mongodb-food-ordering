import mongoose, { Connection } from "mongoose"


const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB: string | any = process.env.MONGODB_NAME;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

// if (!MONGODB_DB) {
//   throw new Error('Define the MONGODB_DB environmental variable');
// }

declare global {
  var mongoose: any
}

let cached = global.mongoose || new Connection()

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {}

  //const conn = await mongoose
  cached.promise = mongoose.connect(MONGODB_URI as string).then((mongoose) => {
    return mongoose
  })

  cached.conn = await cached.promise
  return cached.conn
  }  
}



export default connectToDatabase