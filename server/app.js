const express = require('express');
const cors = require('cors')
const router = require('./routes/index');
const { errorHandlers } = require('./middlewares/errorHandlers');


const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);
app.use(errorHandlers);


module.exports = app;
