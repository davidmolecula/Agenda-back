import express from 'express'
import userRouter from './user.router.js'
import authRouter from './auth.router.js'

const router=express.Router()

router.get(('/'),(req,res)=>{
    res.send('Index router')
})

router.use('/users', userRouter)
router.use('/auth', authRouter)

export default router