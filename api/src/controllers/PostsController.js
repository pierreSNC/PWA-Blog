const Posts = require('../models/Posts');
const Subscriptions = require('../models/Subscriptions');
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
            await Posts.create({
                id_author,
                id_category,
                title,
                excerpt,
                thumbnail,
                time_read,
                is_popular
            });

            const subscriptions = await Subscriptions.findAll();

            const decodedSubscriptions = subscriptions.map(subscription => {
                const firstDecode = JSON.parse(subscription.subscription_json);
                return JSON.parse(firstDecode.subscription_json);
            });

            decodedSubscriptions.forEach(subscription => {


                const payload = JSON.stringify({ title: "Push Test" });

                webpush
                    .sendNotification(subscription, payload)
                    .catch(err => console.error(err));

            })
            res.json('notification send!');
        } catch (error) {
            console.error('Erreur lors de la création du post ou de la récupération des abonnements:', error);
            res.status(500).send("Erreur interne du serveur");
        }
    });

}