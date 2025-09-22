import Agenda from '../models/Agenda.js'
import emailHelper from '../helpers/email.helper.js'
import Tracking from '../models/Tracking.js'


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
        console.log(feriado)

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
        const { to, subject, text } = req.body;

        try {
            let info = await emailHelper(to, subject, text);
            res.status(200).send(`Email sent: ${info.response}`);
        } catch (error) {
            res.status(500).send("Error sending email");
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
        const date=req.body.date;

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

    }
}

export default controller