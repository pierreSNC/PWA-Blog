const Category = require('../models/Category');

module.exports = (app) => {
    app.get('/categories', (req, res) => {
        Category.findAll()
            .then(category => {
                res.json(category);
            })
            .catch(error => {
                console.error('Error during products retrieval', error);
                res.status(500).send(error.message);
            });
    });

    app.get('/category/:id', (req, res) => {
        const id_category = req.params.id;

        Category.findByPk(id_category).then(category => {
            res.json(category);
        })
    })

    app.post('/category', (req, res) => {
        const name = req.body.name;

        Category.create({
            name
        }).then((category) => {
            res.json(category)
        })
    })
}