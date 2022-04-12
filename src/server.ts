import { app } from './app';

const PORTA = 3000;

const server = app.listen(PORTA, () =>
	console.log(`App ouvindo na porta ${PORTA}`)
);

// garante que o serviço na porta 3000 seja encerrado junto da aplicação
process.on('SIGINT', () => {
	server.close();
	console.log('App finalizado.');
});
