import { Lancamento } from '../entity/Lancamento';
import { AppDataSource } from '../data-source';

export class LancamentoController {
	async salvar(lancamento: Lancamento) {
		const lancamentoSalvo = await AppDataSource.manager.save(lancamento);
		return lancamentoSalvo;
	}
}
