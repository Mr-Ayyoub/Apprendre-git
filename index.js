const express =  require('express');
const  app = express();
const PORT = 3000;
app.use(express.json());

app.get("/",(req, res)=>{
    console.log("Get Request Successfull!");
    res.send("get req successfully initiated");
    });

app.listen(PORT , ()=>{
    console.log(`Server established at ${PORT}`);
    });