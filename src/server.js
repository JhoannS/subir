const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

// configuraciones
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


//midslewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));



//variables globales



//rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/db.routes'));

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));




module.exports = app;
