import 'dotenv/config';
import express from 'express';
import payload from 'payload'
import payloadConfig from './payload.config'

const app = express();

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to payload-api! This is jus an express server'});
});

const port = process.env.PORT || 3333;

const start = async () => {
  await payload.init({
    config: payloadConfig,
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },

  });

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });

  server.on('error', console.error);
}

start().then(() => {
  console.log(`Started!`);
})
