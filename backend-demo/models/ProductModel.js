import {Schema,model} from 'mongoose'
const prodSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"product id required"],
    
    },
    productName:{
        type :String,
        required:[true,"product name is required"],
        minLength:[5,"name shpuld be below 5 char"],
        maxLength:[20,"name length shld be maximum 20 char "]
    },
    price:{
        type:Number,
        required:[true,"price should be defined"],
        min:[1000,"price shld be above 1000"],
        max:[5000,"price should be below 5000"]
    }
},{strict:true})
export const prodModel= model("product",prodSchema)