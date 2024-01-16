import express from "express"
const router=express.Router()
import userController from '../controllers/user.controller.js'

const {getUsers, createUsers}=userController
import {validator} from '../middlewares/validator.js'
import  {createUserSchema}  from "../schema/user.schema.js"

router.get('/', getUsers)
router.post('/',validator(createUserSchema), createUsers)

export default router