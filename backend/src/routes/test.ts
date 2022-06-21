import express,{Router,Request,Response} from 'express';
import {testController} from '../controllers'
export const router = Router();

router.get('/',testController);

