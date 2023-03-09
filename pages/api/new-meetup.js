import { MongoClient } from "mongodb";

const handler = (req, res) => {
    if (req.method == 'POST'){
        const data = req.body
        const client = new MongoClient('mongodb+srv://keval:helloworld@cluster0.hpxhiky.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db('sample')
        const collection = db.collection('meetings')
        collection.insertOne(data)
        
        client.close()
        res.status(201).json({message: 0})
    }
}

export default handler