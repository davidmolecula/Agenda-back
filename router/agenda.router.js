import express from "express"
const router=express.Router()
import agendaController from '../controllers/agenda.controller.js'
const {getAgenda, createAgenda, updateAgenda, deleteAgenda, getFeriados, sendEmail, getTracking, updateTracking, getTask, updateTask}=agendaController
import {validator} from '../middlewares/validator.js'
import  {createAgendaSchema}  from "../schema/agenda.schema.js"
import { actionAgendaMiddleware } from "../middlewares/auth/actionAgenda.middleware.js"

router.post('/feriados', actionAgendaMiddleware, getFeriados)
router.post('/', actionAgendaMiddleware, getAgenda)
router.post('/', actionAgendaMiddleware, validator(createAgendaSchema), createAgenda)
router.post('/update', actionAgendaMiddleware, updateAgenda)
router.post('/delete', actionAgendaMiddleware, deleteAgenda)
router.post('/send-email', actionAgendaMiddleware, sendEmail )
router.post('/tracking', actionAgendaMiddleware, getTracking)
router.post('/tracking-update', actionAgendaMiddleware, updateTracking)
router.post('/task', actionAgendaMiddleware, getTask)
router.post('/task-update', actionAgendaMiddleware, updateTask)

export default router