import { Base } from './'

import { CodeLang, type Buddy } from '../../interfaces/v1'

export class Buddies extends Base<Buddy> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get buddies() {
		return this.data
	}
}
