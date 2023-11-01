import { CodeLang } from '../../interfaces/v1'

export abstract class Base {
	private readonly apiURL: string = 'https://valorant-api.com/v1'
	private endpoint: string = this.constructor.name.toLowerCase()

	protected readonly finalURL: string

	public constructor(protected readonly codeLang: CodeLang) {
		this.finalURL = `${this.apiURL}/${this.endpoint}?language=${this.codeLang}`
	}
}
