import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Johan_Alvarez:InfAST9XBcuYwfdC@clusteradsi2364481.0emlluc.mongodb.net/test";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const aprendices = database.collection("Aprendices");
    // create a document to insert

    const doc = {
      cedula: 123654898,
      nombre: "johansito",
      edad: 26,
      promedios: [4,4],
      proyecto_formativo:{"nombre_proyecto":"checho","descripcion":"pagina web de barberia","porcentate_avance":0.7},
      promedio_acumulado:5
    }
    const result = await aprendices.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);