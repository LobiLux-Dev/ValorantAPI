import { Base } from './'

import { CodeLang, ContentTier } from '../../interfaces'

export class ContentTiers extends Base<ContentTier> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get contentTiers() {
		return this.data
	}
}
