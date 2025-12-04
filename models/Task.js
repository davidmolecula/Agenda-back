import {Schema, model,Types} from 'mongoose';

let collection='Task';

let schema=new Schema({
    user:{type: Types.ObjectId,ref:'users'},
    date:{type:Object,required:true},
    task:{type:String},
    fixed: {type: Boolean},
    completed:{type:Boolean},
    bg:{type: String},
    checked:{type:String},
    type:{type:String,required:true}
},{
    timestamps:true
})

let Task=model(collection,schema)

export default Task