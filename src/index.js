require('dotenv').config();

const app = require ('./server')
require('./database');


app.listen(app.get('port'), ()=>{
    console.log(">>>> SERVIDOR CORRIENDO EN EL PUERTO: ", app.get('port'));
})