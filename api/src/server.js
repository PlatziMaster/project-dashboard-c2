const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { config } = require('./config/index');

app.use(cors());
app.use(bodyParser.json());

const conversationsApi = require('./routes/conversations');
conversationsApi(app);

app.listen(config.port, () => {
  console.log(`server up: ${config.port}`);
});