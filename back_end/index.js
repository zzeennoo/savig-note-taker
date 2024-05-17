const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const noteRoutes = require('./routes/NoteRoute');
require('dotenv').config()
//const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors({
    origin: '*'
}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//console.log()
async function connect(){

    try {
        await mongoose.connect('mongodb+srv://Long:RIhNucxKywHdxorc@cluster0.dw4ykc7.mongodb.net/SE_Project?retryWrites=true&w=majority');
        console.log('successfully');
    } catch (error) {
        console.log('fail eo eo');
    }
}
connect();
//

// const uri = "mongodb+srv://Long:RIhNucxKywHdxorc@cluster0.dw4ykc7.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } 
//   finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);

const EventsSchem = new Schema({
    start_date: {type: String, required: true},
    end_date: {type: String, required: true},
    text: String,
    id: {type: Number, required: true},
    createdAt: { type:Date, default:Date.now},
    updateddAt: { type:Date, default:Date.now},
   });
 
   const Events = mongoose.model('Events', EventsSchem);
   
   app.get("/", (req, res) => {
    // const data = [
    //     { start_date:'2023-11-25 6:00', end_date:'2023-11-25 9:00', text:'Event 1', id: 1},
    //     { start_date:'2023-11-22 10:00', end_date:'2023-11-22 18:00', text:'Event 2', id: 2 },
    //     { start_date:'2023-11-26 10:00', end_date:'2023-11-26 12:00', text:'Event 1', id: 3},
    //     { start_date:'2023-11-23 10:00', end_date:'2023-11-23 12:00', text:'Event 1', id: 4},
    //     //{start_date: 'Tue Nov 21 2023 02:10:00 ', end_date: 'Tue Nov 21 2023 07:15:00 ', text: 'fs', id: 1704085403824,},
    //   ];
    res.send("Welcome")
    
} )

app.get("/api", (req, res) => {
    // const data = [
    //     { start_date:'2023-11-25 6:00', end_date:'2023-11-25 9:00', text:'Event 1', id: 1},
    //     { start_date:'2023-11-22 10:00', end_date:'2023-11-22 18:00', text:'Event 2', id: 2 },
    //     { start_date:'2023-11-26 10:00', end_date:'2023-11-26 12:00', text:'Event 1', id: 3},
    //     { start_date:'2023-11-23 10:00', end_date:'2023-11-23 12:00', text:'Event 1', id: 4},
    //     //{start_date: 'Tue Nov 21 2023 02:10:00 ', end_date: 'Tue Nov 21 2023 07:15:00 ', text: 'fs', id: 1704085403824,},
    //   ];
    Events.find({},'-_id start_date end_date text id')
   .then(data => {
    data.map(event => event.toObject());
       console.log(data);
       res.json(data)
       });
    
} )
//
app.post('/api/create',(req, res) => {
    //console.log(req.body);
    const data = req.body;
    const event = new Events(data);
    event.save();
    res.send('')
})

app.post('/api/delete',(req, res) => {
     console.log(req.body.id);
    Events.deleteOne({id: req.body.id}).then(data => {});
    res.send('')
})
app.post('/api/update',(req, res) => {
    const query = { id: req.body.id };
    const data = req.body;
    Events.findOneAndUpdate(query, { 
        start_date: data.start_date, 
        end_date: data.end_date,
        text: data.text,
     }).then(data => {});
    res.send('')

})

app.use('/api/notes', noteRoutes);
//const host = process.env.HOST_NAME;
app.listen(5000, () => {console.log("Server started on port 5000")})