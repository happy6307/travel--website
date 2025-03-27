function calculateAge()
{
    const dob= document.getElementById('DOB').value;
    if(dob){
        const bd=new Date(dob);
        const today=new Date();

        let age= today.getFullYear()-bd.getFullYear();

        const monthdiff=today.getMonth()-bd.getMonth();

        if(monthdiff<0||(monthdiff===0 && today.getDate()<bd.getDate())){
            age--;
        }
        document.getElementById('age').value=age;
    }
    else{
        document.getElementById('age').value=' ';
    }
}
const express=require ('express');
const mongoose=require ('mongoose');
const path=require('path');
const bodyparser=require('bodyparser');
const formrouter=require('./routes/formRoutes');
const bodyParser = require('body-parser');
const { json } = require('stream/consumers');

const app=express();
const PORT = 3000;

mongoose.connect(' mongodb://localhost:27017/formDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/api/form', formRoutes);

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});