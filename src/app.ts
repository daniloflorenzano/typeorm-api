import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './routes/usuario';
import { routerLancamento } from './routes/lancamentos';

export const app = express();

app.use(cors()); // liberando acesso

app.use(bodyParser.json());

app.use(logger('dev'));

conectarServidorNoBD();

// rotas
app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);

//rota padrao
app.use('/', (req, res) => {
	res.send('API com TypeORM');
});
