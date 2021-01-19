const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: '.env'});
const Student = require('./models/Students');
const port = process.env.PORT || 5000;
app.use(cors());
//DATA base connection

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MyMernDB', { useNewUrlParser: true, useUnifiedTopology: true  })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//serve static assert production
// if(process.env.NODE_ENV  === 'production'){
//     app.use(express.static('./client/build/'));
    
//     app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// routes
app.get('/', (req, res)=>{
    Student.find()
    .exec()
    .then(result =>{
        // console.log(result);
        res.status(200).send(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send(err);
    })
})

app.post('/students', (req, res)=>{
    const students = new Student({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        place : req.body.place
    })
    students.save()
    .then(result =>{
    //    console.log(result);
        res.status(200).json({msg : "data inserted seccessfully"});
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({msg : "error occured"})
    })
})

app.delete('/students/:id',(req, res)=>{
    const id = req.params.id;
    Student.deleteOne({_id : id},(err, result)=>{
        if(err){
            // console.log(err)
            res.status(500).send(err);
        }
        else{
            // console.log(result);
            res.status(200).send(result);
        }
    })
})

app.put('/students/:id',(req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const place  = req.body.place;
    const id = req.params.id;
    Student.updateOne({_id : id}, {$set :{firstName : firstName, lastName : lastName, place : place}})
    .then(result =>{
        // console.log(result);
        res.status(200).send(result)
    })
    .catch(err =>{
        // console.log(err);
        res.status(500).json({msg : "error"})
    })
})



//server
app.listen(port,()=>{
    console.log(`server is connected to port ${port}`)
})
