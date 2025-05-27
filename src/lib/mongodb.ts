import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

declare global {
  let mongoose: {
    conn: mongoose.Mongoose | null
    promise: Promise<mongoose.Mongoose> | null
  }
}

const globalForMongoose = global as typeof global & {
  mongoose: {
    conn: mongoose.Mongoose | null
    promise: Promise<mongoose.Mongoose> | null
  }
}

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null }
}

const cached = globalForMongoose.mongoose

export async function connectToDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'contact',
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
