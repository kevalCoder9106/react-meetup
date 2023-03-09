import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST'){
        const data = req.body
        const client = new MongoClient('mongodb+srv://keval:helloworld@cluster0.hpxhiky.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db('sample')
        const collection = db.collection('meetings')
        const meeting_data = await collection.findOne({ _id: new mongoose.Types.ObjectId(data.id) })

        client.close()
        res.status(200).json(meeting_data)
    }
}

export default handler