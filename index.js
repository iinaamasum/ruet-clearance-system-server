const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

//middle_ware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bps1i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const studentCollection = client
      .db('studentCollection')
      .collection('studentData');

    /**
     * student information post
     * link: http://localhost:5000/studentDetails
     */
    app.post('/studentDetails', async (req, res) => {
      const data = req.body;
      const result = await studentCollection.insertOne(data);
      console.log(result);
      res.send(result);
    });
    /**
     * get student information
     * link: http://localhost:5000/studentDetails?email=${email}
     */
    app.get('/studentDetails', async (req, res) => {
      const query = { email: req.query.email };
      const info = await studentCollection.findOne(query);
      res.send(info);
    });
  } finally {
  }
}

run().catch(console.dir);

//server_test
app.get('/', async (req, res) => {
  res.send('RUET clearance sytem server is running');
});

app.listen(port, () => {
  console.log(`Server is in the port: ${port}`);
});
