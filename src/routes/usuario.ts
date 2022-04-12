import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

// salva novo usuario
routerUsuario.post('/', async (req, res) => {
    // lembrar de validar as entradas

	const { nome, email } = req.body;
	const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});

// recupera todos usuarios
routerUsuario.get('/', async (req, res) => {
    const usaurios = await usuarioCtrl.recuperarTodos();
    res.json(usaurios);
})

// recupera lançamentos de um usuario
routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario)
    res.json(lancamentos);
})