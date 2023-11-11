import { Base } from './'

import { CodeLang, type Season } from '../../interfaces/v1'

export class Seasons extends Base<Season> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get seasons() {
		return this.data
	}
}
