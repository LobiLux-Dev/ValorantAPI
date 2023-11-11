import { Base } from './'

import { CodeLang, CompetitiveTier } from '../../interfaces'

export class CompetitiveTiers extends Base<CompetitiveTier> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get competitiveTiers() {
		return this.data
	}
}
