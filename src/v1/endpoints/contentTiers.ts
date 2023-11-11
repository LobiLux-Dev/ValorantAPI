import { Base } from './'

import { CodeLang, type ContentTier } from '../../interfaces/v1'

export class ContentTiers extends Base<ContentTier> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get contentTiers() {
		return this.data
	}
}
