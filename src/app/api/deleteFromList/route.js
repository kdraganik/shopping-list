import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

export async function DELETE(request) {

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

    // Use deleteOne to remove the document
    const data = await collection.deleteOne(filter);

    await client.close();

    if (data.deletedCount === 0) {
        return NextResponse.json({ message: "No document found to delete" }, { status: 404 });
    }

    return NextResponse.json({ message: "Document deleted successfully", data }, { status: 200 });
};