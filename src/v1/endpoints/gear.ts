import { Base } from './'

import { CodeLang, Gear as IGear } from '../../interfaces'

export class Gear extends Base<IGear> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get gear() {
		return this.data
	}
}
