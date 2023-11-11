import { Base } from './'

import { CodeLang, type Gamemode } from '../../interfaces/v1'

export class Gamemodes extends Base<Gamemode> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get gamemodes() {
		return this.data
	}
}
