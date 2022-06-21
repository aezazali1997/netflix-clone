import express,{Request,Response} from 'express';

export const  testController = (req:Request,res:Response)=>{
        res.send('hello world')
    
}