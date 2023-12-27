const auth = (req,res,next)=>{
    try {
        let token  = req.headers.authorization;
        if (token) {
            
        } else {
            res.status(401).json({messege:"Unauthorized User"})
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({messege:"Unauthorized User"})
    }
}