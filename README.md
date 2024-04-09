# BbonPocAnalogPayloadNx

- analog is working
- payload is not working
  - nx run payload-api:serve =>
  - /Workspace/bbon/bbon-poc-analog-payload-nx/node_modules/payload/dist/admin/components/elements/Banner/index.scss:1
    @import '../../../scss/styles.scss';
    ^
    SyntaxError: Invalid or unexpected token


## Start it

You need node, docker, dockes compose.

First run `npm ci`

Kick up the mongoDB

run `docker compose up`

Check Mongo Express server listening at http://0.0.0.0:8081 basicAuth credentials are "admin:pass",

