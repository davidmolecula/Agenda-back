import Agenda from '../models/Agenda.js'
import emailHelper from '../helpers/email.helper.js'
import Tracking from '../models/Tracking.js'
import Task from '../models/Task.js'
import sendMail from '../helpers/email.helper.js'

const controller = {
    getAgenda: async(req,res) => {
        const userId = req.body.id;
        try{
            const agenda=await Agenda.find({user: userId })

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
        
    },
    deleteAgenda: async(req,res)=>{
        try{
        // Convertir el string a un objeto Date
            const deletedItem = await Agenda.findOneAndDelete({_id: req.body.id });

            return res.status(201).json({
                success:true,
                message:'Agenda eliminada'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al crear la agenda'
            })
        }
    },
    getFeriados: async(req,res) => {
        const feriado = "feriado"
        try{
            const feriados=await Agenda.find({type: feriado })
            if(feriados.length>0)
            {
                return res.status(200).json({
                    success:true,
                    feriados:feriados
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
    sendEmail:async(req,res)=>{
        const { to, subject, html } = req.body;
        try {
        const result = await sendMail({ to, subject, html });
        res.json({ success: true, result });
        } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    }
    },
    createTracking:async(req,res)=>{
        try{
            const newTracking=await Tracking.create(req.body)
            return res.status(201).json({
                success:true,
                message:'Tracking creado'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al crear el tracking'
            })
        }
    },
    getTracking:async(req,res)=>{
        const userId = req.body.id;
        try{
            const tracking=await Tracking.find({user:userId})
            if(tracking.length>0)
            {
                return res.status(200).json({
                    success:true,
                    tracking:tracking
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro tracking'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener el tracking'
            })
        }
    },
    updateTracking:async(req,res)=>{
        const filter={task: req.body.filter}
        const completed=req.body.fields.completed
        const bg=req.body.fields.bg
        const checked=req.body.fields.checked
        try{
            const tracking=await Tracking.findOneAndUpdate(filter, {
                $set:
                {
                completed,
                bg,
                checked
                }}, {
            new: true
            })
            const allTrackings=await Tracking.find()
            if(tracking)
            {
                return res.status(200).json({
                    success:true,
                    tracking:allTrackings
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro tracking'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener el tracking'
            })
        }
    },
    createTask:async(req,res)=>{
        try{
            const newTask=await Task.create(req.body)
            return res.status(201).json({
                success:true,
                message:'Tareada creada'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al crear la tarea'
            })
        }
    },
    getTask:async(req,res)=>{
        const userId = req.body.id;
        try{
            const task=await Task.find({user:userId})
            if(task.length>0)
            {
                return res.status(200).json({
                    success:true,
                    task:task
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro la tarea'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener la tarea'
            })
        }
    },
    updateTask:async(req,res)=>{
        const filter={task: req.body.filter}
        const completed=req.body.fields.completed
        const bg=req.body.fields.bg
        const checked=req.body.fields.checked
        console.log("updated")
        try{
            const task=await Task.findOneAndUpdate(filter, {
                $set:
                {
                completed,
                bg,
                checked
                }}, {
            new: true
            })
            const allTasks=await Task.find()
            console.log(allTasks)
            if(task)
            {
                return res.status(200).json({
                    success:true,
                    task:allTasks
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro tarea'
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Error al obtener la tarea'
            })
        }
    },
}

export default controller