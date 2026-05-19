import exp from 'express'
import { model } from 'mongoose'
import { userModel } from '../models/userModel.js'
export const userApp=exp.Router()

userApp.get("/users",async(req,res)=>{
    let userList=await userModel.find()
    res.json({message:"users ",payload:userList})

})
userApp.post("/users",async(req,res)=>{
    let newUser = req.body;
    //create document 
    let newUserDoc = new userModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"user created"})
})
userApp.post("/user-cart",async(req,res)=>{
    
})