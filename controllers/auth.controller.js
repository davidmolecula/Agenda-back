import crypto from 'crypto'
import User from '../models/User.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


const controller={
    signup:async(req,res,next)=>{
        try{
            req.body.verified_code=crypto.randomBytes(10).toString('hex')
            req.body.password=bcryptjs.hashSync(req.body.password,10)
            const user= await User.create(req.body)
            return res.status(200).json({
                success:true,
                message:'Usuario registrado con exito',
                response:{
                    user:{
                        name:user.name,
                        email:user.email
                    }
                }
            })
        }catch(error)
        {
            res.status(500).json({
                success:false,
                message:'No se pudo crear el usuario'
            })
        }
    },
    signin:async(req,res,next)=>{
        try{
            const user=await User.findOneAndUpdate(
                {email:req.user.email},
                {online:true}
            )
            const token= jwt.sign(
                {
                    id: user._id,
                    name:user.name,
                    email: user.email,
                    photo: user.photo
                },
                process.env.SECRET,
                {expiresIn:'1h'}
            )
            user.password=null
            return res.status(200).json({
                success:true,
                message:'Usuario logeado correctamente',
                response:{
                    token,
                    user:{
                        name: user.name,
                        email: user.email,
                        photo: user.photo
                    }
                }
            })
        }catch(error)
        {
            res.status(500).json({
                success:false,
                message:'No se pudo crear el usuario'
            })

        }
    },
    signout:async(req,res,next)=>{
        try{
            let user= await User.findOneAndUpdate(
                {email: req.body.email},
                {online: false}
            )
            return res.status(200).json({
                success:true,
                message:"Usuario deslogeado correctamente",
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al deslogearse'
            })
        }
    },
    token: async(req,res,next)=>{
        const {user}=req
        try{
            return res.status(200).json({
                user:{
                    name:user.name,
                    email:user.email,
                    photo:user.photo
                }
            })
        }catch(error){
            console.log(error)
            next()
        }
    }
}
export default controller