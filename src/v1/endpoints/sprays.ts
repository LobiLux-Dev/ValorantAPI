import { Base } from './'

import { CodeLang, type Spray } from '../../interfaces/v1'

export class Sprays extends Base<Spray> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get sprays() {
		return this.data
	}
}
