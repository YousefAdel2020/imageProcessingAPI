import express from 'express'
import resize  from './routes/resizing_route'
const app=express();
const port=3000;

app.use('/',resize);

// app.get('/',(req,res)=>{

//     res.send('hello');
// })




app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
});

export default app;