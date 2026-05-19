import exp from 'express'
import { userApp } from './APIs/UserApi.js';
import { connect } from 'mongoose';
import { ProdApp } from './APIs/ProductAPI.js';
import cookieParser from 'cookie-parser';
const app=exp()
const port=4000;

//Assign port 
app.use(exp.json())
//add cookie-parser middleware
app.use(cookieParser())
app.use('/users',userApp)
app.use('/product-api',ProdApp)
async function connectDB(){
    try{await connect('mongodb://localhost:27017/')
    //.then(()=>console.log("connected to db "))
    //.catch((err)=>console.log("error in connecting to db",err))
    console.log("db connection succesful")

//Assign port 

app.listen(port,()=>console.log("server is runnning on port 4000.."))
}
    catch(err){
        console.log("err in db connection:",err)
    }
}
connectDB()
