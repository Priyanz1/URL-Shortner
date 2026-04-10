const app = require('./app');
const db = require('./connection/config/db');

const server = async () => {
  await db();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

module.exports = server;