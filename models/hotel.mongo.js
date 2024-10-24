import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Property title is required '],
    },
    brief: {
        type: String,
        required: [true, 'Property  brief is required'],
    },
    guests: {
        type: Number,
        required: [true, 'Guest capacity is required'],
    },
    bedrooms: {
        type: Number,
        required: 
        [true, 'Bedroom count is required']
    },  
    images: [{
        type: String,
        required:[true, 'Property  image is required'],
    }],
    description: {
        type : String,
        required:[true, 'Property description is required']         
    },
    features:[{
        title:String,
        brief:String
    }],
    amenities: [{
        type:String,
        required: [true, 'Property amenities are required '],
    }],
    location: [{
        longitude:{
           type: String,
           required:[true,'Longitude is required ']
        },
        latitude:{
            type:String,
            required :[true,'Latitude is required']

        },
        city:{
        type:String,
        required: [true,'City is required']

        },
        state:{
            type:String,
            required:[true,'State is required']
        },
        country:{
            type:String,
            required:[true,'Country is required']
        },
        description:String
    }],
    rules:[ String],
    safetyProperty:[String],
    cancellationPolicy:{
        type:String,
        required:[true,'Cancellation Policy is required']
    }
    
 
});

const Property = new model('Property', propertySchema);

export default Property;

