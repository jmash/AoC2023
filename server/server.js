const { app } = require('./config/server.config');
const port = process.env.PORT || 5000;

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(port);