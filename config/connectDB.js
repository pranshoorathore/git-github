import { connect } from 'mongoose';
<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        Promise = global.Promise;
        const connection = await connect(process.env.MONGO_URI );        
=======

const connectDB = async () => {
    try {
        const connection = await connect(process.env.MONGO_URI);
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
        console.log(`Database Connected at ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

<<<<<<< HEAD
export default connectDB;


=======
export default connectDB;
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
