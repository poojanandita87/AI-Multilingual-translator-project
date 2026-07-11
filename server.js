require("dotenv").config();
const historyRoutes = require("./routes/history");

const express=require("express");

const cors=require("cors");

const connectDB=require("./config/db");

const authRoutes=require("./routes/auth");

const translateRoutes=require("./routes/translate");

const app=express();

connectDB();

app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoutes);

app.use("/api/translate", translateRoutes);

app.use("/api/history", historyRoutes);


app.get("/",(req,res)=>{

res.send("AI Translator Backend Running");

});

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{

console.log(`Server Running on Port ${PORT}`);

});
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));