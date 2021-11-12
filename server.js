const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: [
        "http://localhost:3000"
    ]
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to purchase application." });
  });

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use('/login', cors(), (req, res, next) => {
    res.send({
      token: 'test123'
    });
  });

app.post('/reimburse', cors(), (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });

//app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));