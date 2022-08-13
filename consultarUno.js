const MongoCli = require("mongodb").MongoClient;

// import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Johan_Alvarez:InfAST9XBcuYwfdC@clusteradsi2364481.0emlluc.mongodb.net/test";
const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const aprendices = database.collection("Aprendices");

    // query for movies that have a runtime less than 15 minutes

    const query = {"cedula":456878653};
    const Aprendiz = await aprendices.findOne(query)
    
    console.log(Aprendiz)
    } 
  
  finally {
    await client.close();
  }
  
}

run().catch(console.dir);
