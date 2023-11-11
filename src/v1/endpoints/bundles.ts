import { Base } from './'

import { CodeLang, Bundle } from '../../interfaces'

export class Bundles extends Base<Bundle> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get bundles() {
		return this.data
	}
}
