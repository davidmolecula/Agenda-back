import express from "express"
const router=express.Router()
import userController from '../controllers/user.controller.js'

const {getUsers, createUsers, encryptUsers}=userController
import {validator} from '../middlewares/validator.js'
import  {createUserSchema}  from "../schema/user.schema.js"
import { actionAgendaMiddleware } from "../middlewares/auth/actionAgenda.middleware.js"


router.get('/', actionAgendaMiddleware, getUsers)
router.post('/', validator(createUserSchema), createUsers)


export default router