const express=require('express');
const path=require('path');
const app=express();
const mainRouters=require('./routes/routers');


app.set("view engine","ejs");

app.use(mainRouters)


const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}...`)) 