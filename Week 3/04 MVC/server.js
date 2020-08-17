const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/models');
const app = express();
let whiteList = [
    'http://localhost:3001'
];
let corsOption = {
    origin: function(origin, callback) {
        if (whiteList.indexOf(origin !== -1 || !origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by cors'));
        }
    }
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to MySql'});
});

// author routes
require('./src/routes/author.routes')(app);

// post routes
require('./src/routes/post.routes')(app);

// comment routes
require('./src/routes/comment.routes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`);
});