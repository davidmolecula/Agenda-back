import {Schema,model,Types} from 'mongoose'

let collection='users'

let schema=new Schema({
    name:{type:String, required:true},
    surname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String,required:true},
    photo:{type:String},
    online:{type:Boolean, default:true},
    verified:{type:Boolean,default:true},
    agenda: [{ type: Types.ObjectId, ref: 'Agenda' }],
    verified_code:{type:String}
},{
    timestamps:true
})

let User=model(collection, schema)

export default User