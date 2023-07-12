import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app=express();
app.use(cors());
app.use(express.json());

export const db=mysql.createConnection({
    host:'localhost',
    port:'7777',
    user:'root',
    password:'',
    database:'login-page',
});


app.get('/',(req,res)=>{
    console.log(res.json("From Backend"));
})

app.listen(7777,()=>{
    console.log("I'm  here da");
})

