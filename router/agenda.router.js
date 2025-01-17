import express from "express"
const router=express.Router()
import agendaController from '../controllers/agenda.controller.js'

const {getAgenda, createAgenda, deleteAgenda}=agendaController
import {validator} from '../middlewares/validator.js'
import  {createAgendaSchema}  from "../schema/agenda.schema.js"


router.get('/', getAgenda)
router.post('/',validator(createAgendaSchema), createAgenda)
router.post('/delete', deleteAgenda)


export default router