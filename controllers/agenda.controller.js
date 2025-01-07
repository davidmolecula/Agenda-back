import express from 'express'
import Agenda from '../models/Agenda.js'



const controller = {
    getAgenda: async(req,res) => {
        let queries={}
        if(req.query.name)
        {
            queries.name=new RegExp(`${req.query.name}`,'i')
        }
        try{
            const agenda=await Agenda.find(queries)
            console.log(agenda)
            if(agenda.length>0)
            {
                return res.status(200).json({
                    success:true,
                    agenda:agenda
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro agenda'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener la agenda'
            })
        }
    },
    createAgenda: async(req,res)=>{
        try{
            const newAgenda=await Agenda.create(req.body)
            return res.status(201).json({
                success:true,
                message:'Agenda creada'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al crear la agenda'
            })
        }
        
    }
}

export default controller