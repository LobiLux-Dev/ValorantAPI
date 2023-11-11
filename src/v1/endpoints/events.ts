import { Base } from './'

import { CodeLang, type Event } from '../../interfaces'

export class Events extends Base<Event> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get events() {
		return this.data
	}
}
