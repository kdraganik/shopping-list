import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET(request) { 

    const uri = `mongodb+srv://kdraganik:${process.env.MONGO_PASSWORD}@mp-wt18.3jo93.mongodb.net/?retryWrites=true&w=majority&appName=MP-WT18`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
    async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
    }
    run().catch(console.dir);

    return NextResponse.json(data, { status: 200 }); 
};