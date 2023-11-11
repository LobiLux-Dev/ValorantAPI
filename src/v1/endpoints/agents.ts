import { Base } from './'

import { CodeLang, type Agent } from '../../interfaces'

export class Agents extends Base<Agent> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get agents() {
		return this.data
	}
}
