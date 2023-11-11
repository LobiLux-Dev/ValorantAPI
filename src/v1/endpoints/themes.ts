import { Base } from './'

import { CodeLang, Theme } from '../../interfaces'

export class Themes extends Base<Theme> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get themes() {
		return this.data
	}
}
