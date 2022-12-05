const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const e = require('cors');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Mugu@9842",
    database : "radical"
})

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.post('/signup',(request,response)=>{

    let {first_name,last_name,email,phonenumber,password} = request.body;

    let sql = 'insert into students(firstname,lastname,email,phonenumber,password,status) values (?,?,?,?,?,?,?,?)';

    c.query(sql,[phonenumber,firstname,lastname,email,phonenumber,password,0],(error,result)=>{
        if(error){
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"Success"};
            response.send(s);
        }
    })

})

app.get('/assesment',(request,response)=>{

    let sql = 'select * from students';

    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })

})



app.listen(3002, ()=>{console.log('Server running port number is : 3002')});