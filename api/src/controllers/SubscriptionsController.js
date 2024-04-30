const Subscriptions = require('../models/Subscriptions');

module.exports = (app) => {
    app.get('/subscriptions', (req, res) => {
        Subscriptions.findAll().then(subscriptions => {
            res.json(subscriptions);
        });
    });

    app.post('/subscription', (req, res) => {
        const subscriptionJson = JSON.stringify(req.body);

        Subscriptions.create({
            subscription_json: subscriptionJson
        }).then(subscription => {
            res.json(subscription);
        })
    })
}