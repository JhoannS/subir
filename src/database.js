const mongoose = require('mongoose')

const { EXPEDIENTES_AE_MONGODB_HOST, EXPEDIENTES_AE_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${EXPEDIENTES_AE_MONGODB_HOST}/${EXPEDIENTES_AE_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)

.then(db => console.log('>>>> CONECTADO A MONGO DB'))
.catch(err => console.log(err));