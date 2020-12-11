//Import Npm package
const express= require('express')
const mongoose= require('mongoose')
const morgan=require('morgan')

const app= express()

const PORT=process.env.PORT ||8080

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://NazmullEngineer:DxDv84Cw0d9CiDhj@cluster0.qidr1.mongodb.net/postManagerDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Htttp request logger
app.use(morgan('tiny'))

app.listen(PORT,()=>{
    console.log('Server is running at 8080');
})