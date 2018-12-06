// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8080);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var router = express.Router();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const data = require("../data/data.json");

app.get('/api', (req, res) => {
    res.header(
        "Accept", "application/json",
        "Content-Type", "application/json"
    );
    res.send(JSON.stringify(data));
});

app.post('/api/devices', (req, res) => {
    console.log(req.body);
    res.json(
        `You added: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));