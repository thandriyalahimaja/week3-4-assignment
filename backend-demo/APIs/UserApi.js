import exp from 'express'
export const userApp=exp.Router()
import { UserModel } from '../models/UserModel.js';
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../backend-demo/middlewares/verifyToken.js'

userApp.post("/",async(req,res)=>{
    let newUser = req.body;

    let hashedPassword=await hash(newUser.password,12)
    newUser.password=hashedPassword;
    //create document 
    let newUserDoc = new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"user created"})
})

userApp.post("/auth",async(req,res)=>{
    let userCred=req.body;
    let userOfDB=await UserModel.findOne({username : userCred.username})
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    let status=await compare(userCred.password,userOfDB.password)

    if(status===false){
         return res.status(404).json({message:"Invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30});
    //save token as httponly cookie
    res.cookie('token',signedToken,{
        httpOnly:true, //https only cookie
        secure:false,
        sameSite:"lax"
    })
    //send token
res.status(200).json({message:"login success"})
})

//test route(protected)
userApp.get("/test",verifyToken,(req,res)=>{
    res.json({mssage:"test route"})
})

userApp.get("/",async(req, res) => {
    //read user from db
    let usersList=await UserModel.find()
    res.status(200).json({message:"users",payload:usersList})
})

userApp.get("/:id",async(req,res)=>{
    let objId=req.params.id;
    let userObj=await UserModel.findById(objId)
    rse.status(200).json({message:"user",payload:userObj})
})

userApp.put("/:id",async(req,res)=>{
    let objId=req.params.id;
    let modifiedUser=req.body
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true});

    res.status(202).json({message:"user modified ",payload:userObj})
})

userApp.delete("/:id",async(req,res)=>{
    await UserModel.findByIdAndDelete(objId)
    res.status(200).json()
})

