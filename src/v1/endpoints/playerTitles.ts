import { Base } from './'

import { CodeLang, type PlayerTitle } from '../../interfaces/v1'

export class PlayerTitles extends Base<PlayerTitle> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get playerTitles() {
		return this.data
	}
}
