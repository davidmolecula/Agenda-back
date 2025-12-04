import express from "express"
const router=express.Router()
import agendaController from '../controllers/agenda.controller.js'

const {getAgenda, createAgenda, deleteAgenda, getFeriados, sendEmail, getTracking, updateTracking, getTask, updateTask}=agendaController
import {validator} from '../middlewares/validator.js'
import  {createAgendaSchema}  from "../schema/agenda.schema.js"



router.get('/', getAgenda)
router.post('/feriados', getFeriados)
router.post('/', getAgenda)
router.post('/',validator(createAgendaSchema), createAgenda)
router.post('/delete', deleteAgenda)
router.post('/send-email', sendEmail )
router.post('/tracking',getTracking)
router.post('/tracking-update', updateTracking)
router.post('/task', getTask)
router.post('/send-email', sendEmail)
router.post('/task-update', updateTask)

export default router