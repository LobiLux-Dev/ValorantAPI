import { Base } from './'

import { CodeLang, Season } from '../../interfaces'

export class Seasons extends Base<Season> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get seasons() {
		return this.data
	}
}
