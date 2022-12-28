import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
const app = express()

app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", blogRouter)
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://admin:k@cluster0.at8tjjr.mongodb.net/Blog?retryWrites=true&w=majority").then(() => app.listen(5000)).then(() => console.log("listening on http://localhost:5000")).catch((err) => console.log('err:', err))