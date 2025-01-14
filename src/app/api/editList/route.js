import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

export async function POST(request) {

    const bodyData = await request.json();
    console.log(bodyData);

    const uri = `mongodb+srv://kdraganik:${process.env.MONGO_PASSWORD}@mp-wt18.3jo93.mongodb.net/?retryWrites=true&w=majority&appName=MP-WT18`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
    await client.connect();
    const database = await client.db("Shopping-list");
    const collection = await database.collection("List");

    const filter = { _id: new ObjectId(bodyData.id) };
    const updateDoc = {
        $set: {
            name: bodyData.name,
            link: bodyData.link,
            price: bodyData.price,
        },
    };
    const options = { upsert: false };
    const data = await collection.updateOne(filter, updateDoc, options);

    await client.close();

    return NextResponse.json({message: "ok", data}, { status: 200 }); 
};