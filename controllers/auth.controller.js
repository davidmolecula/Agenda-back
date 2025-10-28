import crypto from 'crypto'
import User from '../models/User.js'
import Agenda from '../models/Agenda.js'
import Tracking from '../models/Tracking.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

/**/ 
        
const controller={
    signup:async(req,res,next)=>{
        try{
            const feriados2025 = [
                {
                  name: "Año Nuevo",
                  description: "Inicio del año calendario.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-01-01T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Carnaval",
                  description: "Celebración tradicional con desfiles y festividades.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-03-03T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Carnaval",
                  description: "Segundo día de celebración de Carnaval.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-03-04T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día Nacional de la Memoria por la Verdad y la Justicia",
                  description: "Conmemoración de las víctimas de la dictadura militar.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-03-24T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
                  description: "Homenaje a los veteranos y caídos en la guerra de 1982.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-04-02T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Jueves Santo",
                  description: "Conmemoración de la Última Cena de Jesús.",
                  importance: "Día no laborable",
                  date: new Date('2025-04-17T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Viernes Santo",
                  description: "Conmemoración de la crucifixión de Jesús.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-04-18T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día del Trabajador",
                  description: "Celebración del movimiento obrero mundial.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-05-01T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día de la Revolución de Mayo",
                  description: "Conmemoración de la Revolución de Mayo de 1810.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-05-25T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Paso a la Inmortalidad del General Don Martín Miguel de Güemes",
                  description: "Homenaje al líder militar salteño.",
                  importance: "Feriado trasladable",
                  date: new Date('2025-06-16T00:00:00-03:00'), // Se traslada del 17 al 16 de junio
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Paso a la Inmortalidad del General Don Manuel Belgrano",
                  description: "Conmemoración del creador de la bandera argentina.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-06-20T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día de la Independencia",
                  description: "Celebración de la declaración de independencia en 1816.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-07-09T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Paso a la Inmortalidad del General Don José de San Martín",
                  description: "Homenaje al libertador de Argentina, Chile y Perú.",
                  importance: "Feriado trasladable",
                  date: new Date('2025-08-18T00:00:00-03:00'), // Se traslada del 17 al lunes 18
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día del Respeto a la Diversidad Cultural",
                  description: "Reflexión sobre la diversidad cultural en el país.",
                  importance: "Feriado trasladable",
                  date: new Date('2025-10-13T00:00:00-03:00'), // Se traslada del 12 al lunes 13
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día de la Soberanía Nacional",
                  description: "Conmemoración de la Batalla de la Vuelta de Obligado.",
                  importance: "Feriado trasladable",
                  date: new Date('2025-11-17T00:00:00-03:00'), // Se traslada del 20 al lunes 17
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día de la Inmaculada Concepción de María",
                  description: "Festividad religiosa en honor a la Virgen María.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-12-08T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Navidad",
                  description: "Celebración del nacimiento de Jesús.",
                  importance: "Feriado inamovible",
                  date: new Date('2025-12-25T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día no laborable con fines turísticos",
                  description: "Día destinado a promover la actividad turística.",
                  importance: "Día no laborable",
                  date: new Date('2025-05-02T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día no laborable con fines turísticos",
                  description: "Día destinado a promover la actividad turística.",
                  importance: "Día no laborable",
                  date: new Date('2025-08-15T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
                {
                  name: "Día no laborable con fines turísticos",
                  description: "Día destinado a promover la actividad turística.",
                  importance: "Día no laborable",
                  date: new Date('2025-11-21T00:00:00-03:00'),
                  color: "bg-indigo-500",
                  type:"feriado"
                },
            ];                    
            req.body.verified_code=crypto.randomBytes(10).toString('hex')
            req.body.password=bcryptjs.hashSync(req.body.password,10)
            const user= await User.create(req.body)
            const isEmpty = await Agenda.find().then(agenda => agenda.length === 0);
            let agenda; // Definimos la variable agenda aquí
            if (isEmpty) {
                // Si la agenda está vacía, la creamos
                agenda = await Agenda.create(feriados2025);
            } else {
                // Si no está vacía, buscamos la agenda
                agenda = await Agenda.find();  // O puedes aplicar otro filtro si necesitas
            }
            return res.status(200).json({
                success:true,
                message:'Usuario registrado con exito',
                response:{
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email
                    },
                    agenda:{
                        agenda:agenda
                    }
                }
            })
        }catch(error)
        {
            console.log(error)
            res.status(500).json({
                success:false,
                message:'No se pudo crear el usuario'
            })
        }},
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
                        id:user._id,
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
                    id:user._id,
                    name:user.name,
                    email:user.email,
                    photo:user.photo
                }
            })
        }catch(error){
            console.log(error)
            next()
        }
    },
    agenda:async(req,res,next)=>{
        try{
            const agenda= await Agenda.create(req.body)
            console.log(req.body)
            return res.status(200).json({
                success:true,
                message:'Agenda registrado con exito',
                response:{
                    agenda:{
                        name:agenda.name,
                        description:agenda.description,
                        importance:agenda.importance
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
    tracking:async(req,res,next)=>{
        try{
            const tracking= await Tracking.create(req.body)
            console.log(req.body)
            return res.status(200).json({
                success:true,
                message:'Tracking registrado con exito',
                response:{
                    tracking:{
                        meassure:tracking.meassure,
                    }
                }
            })
        }catch(error)
        {
            res.status(500).json({
                success:false,
                message:'No se pudo crear el tracking'
            })
        }
    }
}
export default controller