export const validator=(schema)=>[
    (req,res,next)=>{
        const validation= schema.validate(req.body,{abortEarly:false})
        console.log("paso?")
        if(validation.error){
            return res.status(400).json({
                success:false,
                message:validation.error.details.map(error=>error.message)
            })
        }
        return next()
    }
]