require('./src/database.js');

const express = require('express')
const app = express();
app.use(express.json());
const port = 3000

require('./src/controllers/PostsController')(app);
require('./src/controllers/CategoriesController')(app);
require('./src/controllers/AuthorsController')(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})