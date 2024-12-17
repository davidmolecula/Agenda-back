import {Schema,model,Types} from 'mongoose'

let collection='users_encrypted'

let schema=new Schema({
    platform:{type:String, required:true},
    account:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String,required:true},
    iv:{type:String,required:true}
},{
    timestamps:true
})

let UserEncrypted=model(collection, schema)

export default UserEncrypted