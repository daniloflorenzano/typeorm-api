import { Usuario } from '../entity/Usuario';
import { AppDataSource } from '../data-source';
import { Lancamento } from '../entity/Lancamento';

export class UsuarioController {
	async salvar(usuario: Usuario) {
		const usuarioSalvo = await AppDataSource.manager.save(usuario);
		return usuarioSalvo;
	}

	async recuperarTodos() {
		const usuarios = await AppDataSource.manager.find(Usuario);
		return usuarios;
	}

	async recuperarPorId(id: number) {
		const usuario = await AppDataSource.manager.findOneBy(Usuario, {
			id: id,
		});
		return usuario;
	}

	async recuperarLancamentosDoUsuario(id: number) {
		const usuario = await AppDataSource.manager.find(Usuario, {
			where: { id: id },
			relations: ['lancamentos'],
		});

		return usuario;
	}
}
