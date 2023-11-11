import { Base } from './'

import { CodeLang, Ceremony } from '../../interfaces'

export class Ceremonies extends Base<Ceremony> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get ceremonies() {
		return this.data
	}
}
