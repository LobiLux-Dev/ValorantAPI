import { Base } from './'

import { CodeLang, type Theme } from '../../interfaces/v1'

export class Themes extends Base<Theme> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get themes() {
		return this.data
	}
}
