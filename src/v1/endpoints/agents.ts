import { Base } from './'

import { Agent, CodeLang } from '../../interfaces'

export class Agents extends Base<Agent> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get agents() {
		return this.data
	}
}
