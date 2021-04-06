//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './DbMessage.js';//import my schema
import Pusher from "pusher";
import cors from "cors";
//app config
const app = express();
const port = process.env.PORT || 5000;
const pusher = new Pusher({
    appId: "1183569",
    key: "59a796aef0b77322e157",
    secret: "ef4af0588d6f2459f5d3",
    cluster: "us3",
    useTLS: true
});

//middleware
app.use(express.json()); //cannot return correct Json without it
app.use(cors());


//MongoDB config
const connection_url ='mongodb+srv://bobbyz:zth0714@cluster0.7rzag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db = mongoose.connection;
db.once('open',()=>{
    console.log("Successfully connected with MongoDB!");
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change)=>{
        console.log(change);
        if (change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                time: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log("Error happen in trigger Pusher")
        }
    });
})
//

//api routes
app.get('/', ((req, res) => res.status(200).send('hello world!')))

app.get('/api/v1/messages/sync', ((req, res) => {
    Messages.find((err, data)=>{
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    })
}) );

app.post('/api/v1/messages/new', ((req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage,(err, data)=>{
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).send(data);
        }
    })
}));



//listen
app.listen(port, () =>console.log(`Listening on localhost:${port}`));
