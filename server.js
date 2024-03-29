const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const bodyParser = require('body-parser')


const app=express()
app.use(cors());
app.use(express.json());


const con=mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "",
    database: "naveen"
}
)


app.post('/signup',(req,res)=>
{
const sql="insert into x(name,email,password,number)values('"+req.body.state.name+"','"+req.body.state.email+"','"+req.body.state.password+"','"+req.body.state.number+"')";
 
con.query(sql,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
})
}
)


app.get('/display2',(req,res)=>
{
const sql3="select * from x";
console.log(sql3)
con.query(sql3,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
})
}
)

app.post('/delete2',(req,res)=>
{
const sql="delete from x where email='"+req.body.state.email+"'";
 
con.query(sql,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
})
}
)

app.delete('/del/:Email',(req,res)=>
{
    const id=req.params.Email;
const sql="delete from x where email='"+id+"'";
 
con.query(sql,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
})
}
)


//display

app.get('/display2',(req,res)=>
{
const sql="select * from x";
console.log(sql)
con.query(sql,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
})
}
)

// model popup

app.get('/update/:email',(req,res)=>
{
    const email=req.params.email;
    console.log(email)
const sql3="select * from x where  email='"+email+"'";

con.query(sql3,(err,data)=>
{  
    if(err) return res.json(err);
    return res.json(data);
    
})
}
)

//update

app.put('/up/',(req1,res)=>
{
const sql14="update x set name='"+req1.body.newvalue.name+"',password='"+req1.body.newvalue.password+"',number='"+req1.body.newvalue.number+"' where email='"+req1.body.newvalue.email+"'";
 
console.log(sql14)
con.query(sql14,(err,data)=>
{  
    if(err) return res.json(err);
    console.log(data)
    return res.json(data);
})
}
)




app.listen(8081,()=>{console.log("working...")})