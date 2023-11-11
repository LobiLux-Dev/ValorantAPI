import { Base } from './'

import { CodeLang, type Currency } from '../../interfaces/v1'

export class Currencies extends Base<Currency> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get currencies() {
		return this.data
	}
}
