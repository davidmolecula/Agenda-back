import express from 'express'
import User from '../models/User.js'

const controller = {
    getUsers: async(req,res) => {
        let queries={}
        if(req.query.name)
        {
            queries.name=new RegExp(`${req.query.name}`,'i')
        }
        
        try{
            const users=await User.find(queries)
            if(users.length>0)
            {
                return res.status(200).json({
                    success:true,
                    users:users
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontraron usuarios'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener el evento'
            })
        }
    },
    createUsers: async(req,res)=>{

        try{
            const newUser=await User.create(req.body)
            return res.status(201).json({
                success:true,
                message:'User creado'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al crear el usuario'
            })
        }
        
    }
}

export default controller