const Author = require('../models/Author');

module.exports = (app) => {

    app.get('/authors', (req, res) => {
        Author.findAll().then((authors) => {
            res.json(authors);
        })
    })

    app.get('/author/:id', (req, res) => {
        const id_author = req.params.id;
        Author.findByPk(id_author).then(author => {
            res.json(author);
        })
    })

    app.post('/author', (req, res) => {
        const { firstname, lastname, picture, linkedin, instagram, facebook } = req.body;

        Author.create({
            firstname,
            lastname,
            picture,
            linkedin,
            instagram,
            facebook
        }).then((author) => {
            res.json(author);
        })
    })
}