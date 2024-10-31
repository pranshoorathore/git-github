<<<<<<< HEAD
import Property from "./hotel.mongo.js";

const createHotel = async (data) => {
    try {
        return await Property.create(data);
=======
import Hotel from "./hotel.mongo.js";

const createHotel = async (data) => {
    try {
        return await Hotel.create(data);
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
    } catch (error) {
        console.log(error);
    }
}

<<<<<<< HEAD
export  { createHotel };
=======
export { createHotel }
>>>>>>> 2fe8df263773ed2eff735ecac6f4d2d760b5e206
