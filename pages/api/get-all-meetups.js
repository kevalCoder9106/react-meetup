import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method == 'GET'){
        const client = new MongoClient('mongodb+srv://keval:helloworld@cluster0.hpxhiky.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db('sample')
        const collection = db.collection('meetings')
        const dbData = await collection.find({}).toArray((err, res) => {
            return res
        })
        
        client.close()
        res.status(200).json(JSON.stringify(dbData))
    }
}

export default handler