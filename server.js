
import express from 'express';
import connectDB from './config/connectDB.js';
import hotelRouter from './routers/hotel.router.js'
import dotenv from 'dotenv';


dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use('/hotel',hotelRouter);

app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
});




//  {
//   "name" : "Taj Hotel",
//   "address" : "Mumbai, Maharashtra",
//   "contact" : "7648976298",
//   "rent" : "25000",
//   "images" : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWkywCnTv9jgWQ3-zfezXagosZiAvy16Dhve0aUtZ4j7zHsZyuoT6MUs&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiLYXJiL0-iHkqLB-vfVyB0SPq17-yKlp4A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hhL3hIFdonH47yv1sphBg_caf8cZubIfkA&s"]
// }



