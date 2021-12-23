import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  async function run() {
    try {
      await client.connect();
      const database = client.db(process.env.MONGODB_DB!);
      const collection = database.collection('newCollection');

      if (req.method === 'GET') {
        const findResult = await collection.find({}).toArray();

        return res.status(200).json(findResult);
      }

      if (req.method === 'POST') {
        const newValue = { name: 'harry' };

        const insertResult = await collection.insertOne(newValue);

        return res
          .status(200)
          .send({ ...newValue, _id: insertResult.insertedId });
      }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  run().catch(console.dir);
}
