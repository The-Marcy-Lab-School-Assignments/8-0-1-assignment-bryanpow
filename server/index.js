const express = require('express');
const path = require('path');
const {logRoutes} = require('./middleware/loggingMiddleware');

const app = express();

app.use(logRoutes);
const port = process.env.PORT || 8080;
const pathToDist = path.join(__dirname, '../vite-project/dist');
express.static(pathToDist);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})