import { connect } from "mongoose";

export const connectMongo = async () => {
    const mongooseUrl: string = process.env.MONGO_URI || "";
    try {
        await connect(mongooseUrl);
        console.log("MongoDB Connected...");
    } catch (err: any) {
        console.error(err?.message);
        process.exit(1);
    }
};
