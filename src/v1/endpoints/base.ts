import axios from 'axios'

import { CodeLang, ServerResponse } from '../../interfaces/v1'

export abstract class Base<T> {
	private readonly apiURL: string = 'https://valorant-api.com/v1'
	private endpoint: string

	protected data: T[] = []

	public constructor(protected readonly codeLang: CodeLang) {
		this.endpoint = this.constructor.name.toLowerCase()

		this.fetchData()
	}

	private get finalURL(): string {
		return `${this.apiURL}/${this.endpoint}?language=${this.codeLang}`
	}

	private async fetchData(): Promise<void> {
		try {
			const { data } = await axios.get<ServerResponse<T>>(this.finalURL)

			this.data = data.data!
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error)

			throw new Error(`Failed to fetch data from ${this.finalURL}. ${errorMessage}`)
		}
	}
}
