const express=require ('express');
const mongoose=require ('mongoose');
const path=require('path');
const bodyparser=require('bodyparser');
const formrouter=require('./routes/formRoutes');
const bodyParser = require('body-parser');
const { json } = require('stream/consumers');

const app=express;
const PORT=3000;

mongoose.connect(' mongodb:/localhost:27017/formDB',{
    useNewParser:true,
    useNewTopology:true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/api/form' formRoutes);

app.listen(PORT,()=>{
    console.log('Server running at http://localhost:${PORT}')
});