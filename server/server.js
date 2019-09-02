const express = require('express');
const app = express();
const bodyParser = require('body-parser');


let env = require('dotenv');
env.config();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Filestack key call
const FILESTACK_KEY = process.env.FILESTACK_KEY;
app.get('/filestack-key', (req, res) => {
    res.send(FILESTACK_KEY);
})

//Twilio Key
const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
app.get('/twilio-key', (req, res) => {
    res.send(ACCOUNT_SID, AUTH_TOKEN);
})


// Serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 3000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});