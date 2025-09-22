import {Schema,model,Types} from 'mongoose'

let collection='agenda'

let schema=new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    importance:{type:String,required:true},
    date:{type:Object,required:true},
    color:{type:String},
    user:{type: Types.ObjectId,ref:'users'},
    type:{type:String,required:true}
},{
    timestamps:true
})

let Agenda=model(collection, schema)

export default Agenda