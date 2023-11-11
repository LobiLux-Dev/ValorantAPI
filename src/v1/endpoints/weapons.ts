import { Base } from './'

import { CodeLang, type Weapon } from '../../interfaces'

export class Weapons extends Base<Weapon> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get weapons() {
		return this.data
	}
}
