const express = require("express");
const app = express();
port = 8080;

app.use(express.static("public"));

app.set("view engine","ejs");
app.get("/" , (req,res) => {
    res.render("home.ejs"); // .ejs is optionl likhna hai likho 
});


app.get("/rolldice" , (req,res) => {
    let num=Math.floor(Math.random()*6)+1;
    //  res.render("rolldice.ejs",{num:diceval})
    res.render("rolldice.ejs",{num}) // .ejs is optionl likhna hai likho 
});// two parameters filename and object  {key and value name same ho sakta hai isliye sirf ekk naam rakh sakte hai like num}


app.get("/ig/:username", (req, res) => {
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    console.log(data);
    res.render("instagram.ejs",{data})
});



app.listen(port,()=>{
    console.log(`listining on port ${port}`);
})