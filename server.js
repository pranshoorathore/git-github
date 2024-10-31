<<<<<<< HEAD

=======
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
import express from 'express';
import connectDB from './config/connectDB.js';
import hotelRouter from './routers/hotel.router.js'
import dotenv from 'dotenv';

<<<<<<< HEAD

=======
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

<<<<<<< HEAD
app.use('/hotel',hotelRouter);

app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
});




=======
app.use('/hotel', hotelRouter);

app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
});
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
