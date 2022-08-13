const MongoCli = require("mongodb").MongoClient;


const uri = "mongodb+srv://Johan_Alvarez:InfAST9XBcuYwfdC@clusteradsi2364481.0emlluc.mongodb.net/test";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("FakeStore");
    const aprendices = database.collection("Aprendices");

    
    
    
    //const query = { edad: { $gte: 18 } };
    const query = {};

    const options = {
      
      projection: { _id: 0, nombre: 1, edad: 1 },
    };

    const cursor = aprendices.find(query, options);


    console.log(cursor)
    
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    await cursor.forEach(console.dir);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);