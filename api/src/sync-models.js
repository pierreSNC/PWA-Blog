const sequelize = require('./database');
require('./models/Posts');
require('./models/Category');
require('./models/Author');

async function syncModels() {
    try {
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Error synchronizing models:", error);
    }
}

syncModels();
