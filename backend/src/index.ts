import express, {Application,Request,Response} from 'express';

import {router} from './routes/test'
const app:Application = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use('/test',router);
app.listen(4000,()=>{
    console.log(`app is listening on 4000`)
})