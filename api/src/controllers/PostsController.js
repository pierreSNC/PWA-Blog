const Posts = require('../models/Posts');
const Subscriptions = require('../models/Subscriptions');
const Author = require('../models/Author');
const webpush = require('web-push');


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

    app.post('/post', async (req, res) => {
        const { id_author, id_category, title, excerpt, thumbnail, time_read, is_popular } = req.body;

        try {
            const post = await Posts.create({
                id_author,
                id_category,
                title,
                excerpt,
                thumbnail,
                time_read,
                is_popular
            });

            const id_post = post.id;
            const subscriptions = await Subscriptions.findAll();
            const author = await Author.findByPk(id_author);

            let author_name = 'Quelqu\'un';
            if (author) {
                const firstname = author.dataValues.firstname;
                const lastname = author.dataValues.lastname;
                author_name = firstname + " " + lastname;
                console.log('Author Name:', firstname, lastname);
            } else {
                console.log('No author found with ID:', id_author);
            }


            const decodedSubscriptions = subscriptions.map(subscription => {
                const firstDecode = JSON.parse(subscription.subscription_json);
                return JSON.parse(firstDecode.subscription_json);
            });

            decodedSubscriptions.forEach(subscription => {

                console.log(`/post/${id_post}`);
                const payload = JSON.stringify({
                    title:  author_name + " a publié nouvel article ",
                    body: title,
                    url: `http://localhost:49453/post/${id_post}`
                });
                webpush
                    .sendNotification(subscription, payload)
                    .catch(err => console.error(err));
            });

            res.json('notification send!');
        } catch (error) {
            console.error('Erreur lors de la création du post ou de la récupération des abonnements:', error);
            res.status(500).send("Erreur interne du serveur");
        }
    });

}