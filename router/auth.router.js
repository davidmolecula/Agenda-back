import express from "express";
import authController from '../controllers/auth.controller.js'
import { accountExistSignup } from "../middlewares/auth/accountExistSignup.middleware.js";
import { accountExistSignin } from "../middlewares/auth/accountExistSignin.middleware.js";
import { accountHasBeenVerified } from "../middlewares/auth/accountHasBeenVerified.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";
import passport from "../middlewares/passport.js";
import { createUserSchema } from "../schema/user.schema.js";
const router=express.Router()
const {signup, signin, signout,token,agenda}=authController
import {validator} from '../middlewares/validator.js'
import { createAgendaSchema } from "../schema/agenda.schema.js";



router.post('/signup', accountExistSignup, validator(createUserSchema),signup)
router.post('/signin', accountExistSignin, accountHasBeenVerified,passwordIsOk, signin)
router.post('/signout', signout)
router.post('/token',passport.authenticate('jwt',{session:false}),token)
router.post('/agenda',validator(createAgendaSchema), agenda)


export default router