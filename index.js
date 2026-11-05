const { application } = require('express');
const mongoose = require('mongoose');

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/mongodb-26")
        .then(()=>console.log("MongoDB Connected"))
        .catch((err) => console.log("Mongo Error", err));


//Schema
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        gender: {
            type: String,
        },

    },
    {timestamps: true}
);

//Model
const User = mongoose.model("user", userSchema);

//MiddleWare - plugin
// app.use(express.urlencoded({extended:false}));
// app.use((req,res,next)
// =>{
//     fs.appendFile(
//         "log.txt",
//         '\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n',
//         (err.data)=>{

//         }
//     )
// })
app.post("/api/users", async(req,res) => {
    const body = req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
    ){
        return res.status(400).json({msg: "All fields are req..."});
    }
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender
    });
    console.log("results",result);

    return res.status(201).json({msg: "Success"});
    });  

