import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    // title: String,
    // imageUrl: String,
    // public_id: String,
    {
        title:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
            default:null,
        },
        public_Id:{
            type:String,
            default:null,

        },
        status:{
            type:String,
            enum:["processing","completed","failed"],
            default:"processing",

        },
        progress:{
            type:Number,
            default:0,

        },
        error:{
            type:String,
            default:null,
        },


},
{
    timestamps:true,
}
)


const Image = mongoose.model('ImageCollection', ImageSchema)


export default Image