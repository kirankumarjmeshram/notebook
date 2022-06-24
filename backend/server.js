const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.get("/", (req,res) => {
    res.send("<h1>Hello World<h1>")
})

app.get("/api/notes",(req,res)=>{
    res.send(notes)
})

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((el)=>el._id == req.params.id)
    res.send(note)
})

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,console.log(`Server is running on port ${PORT}`));

