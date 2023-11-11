import { Base } from './'

import { CodeLang, type Contract } from '../../interfaces'

export class Contracts extends Base<Contract> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get contracts() {
		return this.data
	}
}
