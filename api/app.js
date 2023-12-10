import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

//connection string
mongoose.connect("mongodb+srv://srikarnallapu515:neuevents@neu-events.rcikhwf.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log('connected to mongoDB');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);
export default app;