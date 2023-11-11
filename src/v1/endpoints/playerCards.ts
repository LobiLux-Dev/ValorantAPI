import { Base } from './'

import { CodeLang, type PlayerCard } from '../../interfaces/v1'

export class PlayerCards extends Base<PlayerCard> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get playerCards() {
		return this.data
	}
}
