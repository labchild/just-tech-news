const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);
// get static files
app.use(express.static(path.join(__dirname, 'public')));


// turn on connection to db
sequelize.sync({ force: false })
    .then(() => {
        console.log(path.join(__dirname, 'public'));
        app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
    });