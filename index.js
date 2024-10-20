var express=require("express")
var app=express()

app.get("/test",(req,res)=>{
    res.send("hello god")
})

app.listen(8080,()=>{
    console.log("server is listening to the port 8080")
})