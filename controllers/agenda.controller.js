import Agenda from '../models/Agenda.js'



const controller = {
    getAgenda: async(req,res) => {
        const userId = req.body.id;
        console.log('aca', userId)
        try{
            const agenda=await Agenda.find({_id: userId })
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
            console.log(deletedItem)
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
    }
}

export default controller