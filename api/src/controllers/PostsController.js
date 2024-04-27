const Posts = require('../models/Posts');

module.exports = (app) => {
    app.get('/posts', (req, res) => {
        Posts.findAll()
            .then(posts => {
                res.json(posts);
            })
            .catch(error => {
                console.error('Error during products retrieval', error);
                res.status(500).send(error.message);
            });
    });

    app.get('/post/:id', (req, res) => {
        const id_post = req.params.id;

        Posts.findByPk(id_post).then(post => {
            res.json(post);
        })
    })

    app.post('/post', (req, res) => {

        const {id_author, id_category, title, excerpt, thumbnail, time_read, is_popular} = req.body;

        Posts.create({

            id_author,
            id_category,
            title,
            excerpt,
            thumbnail,
            time_read,
            is_popular

        }) .then((post) => {
            res.json(post);
        })
    })
}