import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    public_id: String,
    

})


const Image = mongoose.model('ImageCollection', ImageSchema)


export default Image