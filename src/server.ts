import express from 'express';
import cors from 'cors';
import routes from './routes';
import "./lib/env";

const app = express();

app.use(express.static(__dirname + '/assets'));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333,() => {
    console.log("rodando em 3333")
});