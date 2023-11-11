import { Base } from './'

import { CodeLang, type LevelBorder } from '../../interfaces/v1'

export class LevelBorders extends Base<LevelBorder> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get levelBorders() {
		return this.data
	}
}
