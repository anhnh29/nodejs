const express = require('express');
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
import initRoute from '../src/route/web';

const app = express();
//setup view engine
configViewEngine(app);

//init web route
initRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
