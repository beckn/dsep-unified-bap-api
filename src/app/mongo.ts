import { connect } from "mongoose";
import { savedItems, UserDetails } from "../user";

export const connectMongo = async () => {
    const mongooseUrl: string = process.env.MONGO_URI || "";
    try {
        await connect(mongooseUrl);
        savedItems()
        console.log("MongoDB Connected...");
    } catch (err: any) {
        console.error(err?.message);
        process.exit(1);
    }
};
