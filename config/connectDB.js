import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        Promise = global.Promise;
        const connection = await connect(process.env.MONGO_URI );        
        console.log(`Database Connected at ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;


