import exp from 'express'
export const ProdApp=exp.Router()
import { prodModel } from '../models/ProductModel.js'

ProdApp.post("/products",async(req,res)=>{
    let newProd=req.body
    let newProdDoc=new prodModel(newProd)
    await newProdDoc.save()
    res.status(201).json({message:"product created"})
})

ProdApp.get("/products",async(req,res)=>{
    let prodList=await prodModel.find()
    res.status(200).json({message:"products",payload:prodList})
})

ProdApp.get("/products/:pid",async(req,res)=>{
    let prodId=req.params.id
    let prodObj=await prodModel.findById(prodId)
    res.status(200).json({message:"product"})
})

ProdApp.put("/products/:pid",async(req,res)=>{
    let prodId=req.params.id
    let modifiedProd=req.body
    let latestProd=await prodModel.findByIdAndUpdate(
        prodId,
        {$set:{...modifiedProd}},
        {new:true}
    )
    res.status(200).json({message:"product updated",payload:prodId})
})
