import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import path from 'path'

// schemas
import HelloWorldSchema from './schemas/helloWorld.schema.js'

// import environment variables
dotenv.config()

////////////////////

// declare MongoDB models
var db = {
  helloWorld: null
}

// create models from imported schemas
function connectModels() {
  db.helloWorld = mongoose.model('helloWorld', HelloWorldSchema);
}

////////////////////

async function connectToMongo() { await mongoose.connect(process.env.MONGO_CONNECTION_STRING) }

function insertHelloWorldMsg(message) {
  db.helloWorld.collection.insertOne({
    "msg": message || 'Hello World!',
    "time": Date()
  }).then(function () {
    console.log('Data inserted'); // Success
  }).catch(function (error) {
    console.error(error);
  })
}

function printCount(model) {
  model.collection.findOne({})
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
}

function drop(model) {
  model.collection.drop()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
}

////////////////////

connectToMongo()
connectModels()

drop(db.helloWorld)
insertHelloWorldMsg('Hello from the past!')

printCount(db.helloWorld)

setTimeout(async () => await mongoose.connection.close(true), 200)