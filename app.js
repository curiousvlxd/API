import express from "express";
import fs from 'fs';
import router from "./routes/routes.js";
import config from "./config/main.js";
import https from 'https';
import expressSession from 'express-session';
import morgan from 'morgan';

const app = express();
morgan.token('host', function(req, res) {
    return req.hostname;
});
var privateKey  = fs.readFileSync('certs/localhost.key', 'utf8');
var certificate = fs.readFileSync('certs/localhost.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))
app.use(express.json());
app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(router);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.PORT, () => {
    console.log(`Server running at https://localhost:${config.PORT}`);
});
