import {Schema, model,Types} from 'mongoose';

let collection='Tracking';

let schema=new Schema({
    user:{type: Types.ObjectId,ref:'users'},
    date:{type:Object,required:true},
    task:{type:String},
    meassure: {type:Number},
    fixed: Boolean,
    type:{type:String,required:true}
},{
    timestamps:true
})

let Tracking=model(collection,schema)

export default Tracking