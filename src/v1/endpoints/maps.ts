import { Base } from './'

import { CodeLang, type Map } from '../../interfaces'

export class Maps extends Base<Map> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get maps() {
		return this.data
	}
}
