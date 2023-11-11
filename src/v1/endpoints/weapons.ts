import { Base } from './'

import { CodeLang, type Weapon } from '../../interfaces/v1'

export class Weapons extends Base<Weapon> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get weapons() {
		return this.data
	}
}
