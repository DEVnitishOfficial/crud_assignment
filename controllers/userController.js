
const userModel = require("../model/userModel.js")

// register user
exports.home = (req,res) => {
    res.send('Hello says crud assignment') 
}
exports.registerUser = async (req,res) => {
    try{
    const {name,email,password} = req.body

    const registerData = await userModel.create({
        name,
        email,
        password
    })
    
    // creating a document in database
    res.status(200).json({
       success:true,
       message:'User registered successfully',
       registerData

    })
    }catch(error){
     console.log(error);
     res.status(400).json({
        success:false,
        message: `error in sending data ${error.message}`
     })
    }
}

// Login user
exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;

    try{
        const userLoginData = await userModel.findOne({email});
        if(userLoginData){
            if(userLoginData.password === password){
                res.status(200).json({
                    message:"User Login Successfully, Congrats!!"
                })
            }else{
                res.status(400).json({
                    message:"You Have Entered Wrong Password"
                })
            }
        }else{
            res.status(404).json({
                message:"No Account Find associated to this email"
            })
        }

    }catch(error){
        console.log(error);
        res.status(501).json({
            success:false,
            message:error.message
        })
    }
}