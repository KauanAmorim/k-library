import mongoose from "mongoose";

const password = process.env.MONGO_DB_ATLAS_PASS;
const connectionLink = `mongodb+srv://KauanAmorim:${password}@boc-hord.itsmngx.mongodb.net/boc-hord`;
mongoose.connect(connectionLink);

const database = mongoose.connection;

export default database;