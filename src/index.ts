import express from 'express';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import product from './routes/product'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use('/about', (req: Request, res: Response, next: NextFunction) => {    
    console.log(`This is a middleware.`);
    next()
});

// ROUTES
app.get('/', (req: any,res: any) => {
    let now = new Date()
    res.send(`[${now}] Hello World`);
});

// Import Routes
const productRoutes = 

// Connect to DB
// const uri = 'mongodb://root:example@localhost:27017/';
const uri = process.env.DB_CONNECTION_STRING as string;
mongoose.connect(uri);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);  
});