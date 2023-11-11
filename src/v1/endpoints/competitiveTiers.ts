import { Base } from './'

import { CodeLang, type CompetitiveTier } from '../../interfaces/v1'

export class CompetitiveTiers extends Base<CompetitiveTier> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get competitiveTiers() {
		return this.data
	}
}
