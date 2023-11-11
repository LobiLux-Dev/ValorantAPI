import { Base } from './'

import { CodeLang, type Ceremony } from '../../interfaces/v1'

export class Ceremonies extends Base<Ceremony> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get ceremonies() {
		return this.data
	}
}
