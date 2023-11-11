import { Base } from './'

import { CodeLang, type Gear as IGear } from '../../interfaces/v1'

export class Gear extends Base<IGear> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get gear() {
		return this.data
	}
}
