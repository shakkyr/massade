const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./database/db');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


app.get('/', (req,res) => {
res.send('welcome to homepage')})

connectDB()



const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));