import { Base } from './'

import { CodeLang, Spray } from '../../interfaces'

export class Sprays extends Base<Spray> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get sprays() {
		return this.data
	}
}
