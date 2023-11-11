import { Base } from './'

import { CodeLang, LevelBorder } from '../../interfaces'

export class LevelBorders extends Base<LevelBorder> {
	constructor(codeLang: CodeLang) {
		super(codeLang)
	}

	public get levelBorders() {
		return this.data
	}
}
