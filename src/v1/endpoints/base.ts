import axios from 'axios'

import { CodeLang, ServerResponse } from '../../interfaces/v1'

export abstract class Base<T> {
	private readonly apiURL: string = 'https://valorant-api.com/v1'
	private endpoint: string = this.constructor.name.toLowerCase()
	private readonly finalURL: string

	protected data: T[] = []

	public constructor(protected readonly codeLang: CodeLang) {
		this.finalURL = `${this.apiURL}/${this.endpoint}?language=${this.codeLang}`

		this.fetch()
	}

	private fetch = async (): Promise<void> => {
		try {
			const { data } = await axios.get<ServerResponse<T>>(this.finalURL)

			this.data = data.data!
		} catch (error: any) {
			throw new Error(`An error occurred while fetching the data. ${error}`)
		}
	}
}
