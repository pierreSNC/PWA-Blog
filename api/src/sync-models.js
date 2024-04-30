const sequelize = require('./database');
// require('./models/Posts');
// require('./models/Category');
// require('./models/Author');
require('./models/Subscriptions');

async function syncModels() {
    try {
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Error synchronizing models:", error);
    }
}

syncModels();
