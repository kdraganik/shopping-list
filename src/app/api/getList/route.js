import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET(request) { 

    console.log(process.env.MONGO_USER);
    const uri =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mp-wt18.3jo93.mongodb.net/?retryWrites=true&w=majority&appName=MP-WT18`;

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
    const data = await collection.find().toArray();
    await client.close();

    return NextResponse.json(data, { status: 200 }); 
};