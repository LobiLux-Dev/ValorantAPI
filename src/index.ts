import { Language } from './interfaces/v1'
import { ValorantAPIV1 } from './v1'

export class ValorantAPI {
	private constructor() {}

	public static get V1(): (language: Language) => ValorantAPIV1 {
		return (language: Language) => new ValorantAPIV1(language)
	}
}
