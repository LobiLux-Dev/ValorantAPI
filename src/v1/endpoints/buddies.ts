import { Base } from './'

import { CodeLang, Buddy } from '../../interfaces'

export class Buddies extends Base<Buddy> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get buddies() {
		return this.data
	}
}
