require('./src/database.js');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

app.use(express.json());
app.use(cors());

require('./src/controllers/PostsController')(app);
require('./src/controllers/CategoriesController')(app);
require('./src/controllers/AuthorsController')(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})