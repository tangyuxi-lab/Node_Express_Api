import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//a;; routes in here starts with users.
app.use('/users' , usersRoutes);

app.get('/',(req, res) => {
    console.log('[TEST]!');
    res.send("hello from homepage! ")
});



app.listen(PORT, () => console.log(`Server Running on port : http : // localhost:${PORT}`));