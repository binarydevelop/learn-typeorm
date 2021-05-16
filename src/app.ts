import express from 'express';
import config from './config/config';
import log from './utils/logging';


const app= express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*Routes*/
app.get('/ping', (req,res) => {
    res.send('hello working');
})

const namespace = 'Bootstrap';

app.listen('3000', () => {
    log.info(namespace, `Server started on ${config.server.port}`);
})