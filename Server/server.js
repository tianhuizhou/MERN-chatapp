//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './DbMessage.js';//import my schema
//app config
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json()); //cannot return correct info without it

//MongoDB config
const connection_url ='mongodb+srv://bobbyz:zth0714@cluster0.7rzag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//

//api routes
app.get('/', ((req, res) => res.status(200).send('hello world!')))

app.post('/api/v1/messages/new', ((req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage,(err, data)=>{
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(201).send(data);
        }
    })

}))

//listen
app.listen(port, () =>console.log(`Listening on localhost:${port}`));
