import { Base } from './'

import { CodeLang, type PlayerCard } from '../../interfaces'

export class PlayerCards extends Base<PlayerCard> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get playerCards() {
		return this.data
	}
}
