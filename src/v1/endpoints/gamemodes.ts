import { Base } from './'

import { CodeLang, type Gamemode } from '../../interfaces'

export class Gamemodes extends Base<Gamemode> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get gamemodes() {
		return this.data
	}
}
