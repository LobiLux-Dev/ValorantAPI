import { CodeLang } from '../../interfaces/v1'
import type { IBase } from '../../interfaces/v1/endpoints'

export abstract class Base implements IBase {
	protected readonly apiURL: string = 'https://valorant-api.com/v1'

	public constructor(protected readonly codeLang: CodeLang) {}
}
