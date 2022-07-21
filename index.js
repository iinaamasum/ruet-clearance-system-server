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
    const deptClearanceCollection = client
      .db('deptClearanceApplication')
      .collection('deptClearance');
    const hallClearanceCollection = client
      .db('hallClearanceApplication')
      .collection('hallClearance');
    const adminClearanceCollection = client
      .db('adminClearanceApplication')
      .collection('deptClearance');
    const othersClearanceCollection = client
      .db('othersClearanceApplication')
      .collection('deptClearance');

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

    /**
     * dept clearance post application
     * link: http://localhost:5000/dept-clearance-application
     */
    app.post('/dept-clearance-application', async (req, res) => {
      const data = req.body;
      const result = await deptClearanceCollection.insertOne(data);
      res.send(result);
    });
    /**
     * dept clearance get application
     * link: http://localhost:5000/dept-clearance-application?email=${email}
     */
    app.get('/dept-clearance-application', async (req, res) => {
      const query = { email: req.query.email };
      const result = await deptClearanceCollection.findOne(query);
      res.send(result);
    });

    /**
     * HALL clearance post application
     * link: http://localhost:5000/hall-clearance-application
     */
    app.post('/hall-clearance-application', async (req, res) => {
      const data = req.body;
      const result = await hallClearanceCollection.insertOne(data);
      res.send(result);
    });
    /**
     * HALL clearance get application
     * link: http://localhost:5000/hall-clearance-application?email=${email}
     */
    app.get('/hall-clearance-application', async (req, res) => {
      const query = { email: req.query.email };
      const result = await hallClearanceCollection.findOne(query);
      res.send(result);
    });

    /**
     * admin clearance post application
     * link: http://localhost:5000/admin-clearance-application
     */
    app.post('/admin-clearance-application', async (req, res) => {
      const data = req.body;
      const result = await adminClearanceCollection.insertOne(data);
      res.send(result);
    });
    /**
     * admin clearance get application
     * link: http://localhost:5000/admin-clearance-application?email=${email}
     */
    app.get('/admin-clearance-application', async (req, res) => {
      const query = { email: req.query.email };
      const result = await adminClearanceCollection.findOne(query);
      res.send(result);
    });

    /**
     * others clearance post application
     * link: http://localhost:5000/others-clearance-application
     */
    app.post('/others-clearance-application', async (req, res) => {
      const data = req.body;
      const result = await othersClearanceCollection.insertOne(data);
      res.send(result);
    });
    /**
     * others clearance get application
     * link: http://localhost:5000/others-clearance-application?email=${email}
     */
    app.get('/others-clearance-application', async (req, res) => {
      const query = { email: req.query.email };
      const result = await othersClearanceCollection.findOne(query);
      res.send(result);
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
