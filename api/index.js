require('./src/database.js');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

/*{
    publicKey: 'BEaRqXDrifbTXtEIMTasa0u3XpL6FDUORDt8a--5qLIu_bsMg90R-QkiviIJmjCF-LHQrXJSzHVoTq5UE_vwJqg',
    privateKey: 'nQwd7cl5duQiyOiKeJahUXZY_C0ahB-ARh5NE5qI4Pc'
}*/

require('./src/controllers/PostsController')(app);
require('./src/controllers/CategoriesController')(app);
require('./src/controllers/AuthorsController')(app);
require('./src/controllers/SubscriptionsController')(app);

const vapidKeys = {
    publicKey: `${process.env.PUBLIC_KEY}`,
    privateKey: `${process.env.PRIVATE_KEY}`
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

app.post("/notification", (req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: "Push Test" });

    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})