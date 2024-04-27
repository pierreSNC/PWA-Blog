require('./src/database.js');

const express = require('express')
const app = express();
app.use(express.json());
const port = 3000

require('./src/controllers/PostsController')(app);
require('./src/controllers/CategoriesController')(app);
require('./src/controllers/AuthorsController')(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})