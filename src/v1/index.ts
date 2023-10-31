import {
	Agents,
	Buddies,
	Bundles,
	Ceremonies,
	CompetitiveTiers,
	ContentTiers,
	Contracts,
	Currencies,
	Events,
	Gamemodes,
	Gear,
	LevelBorders,
	Maps,
	PlayerCards,
	PlayerTitles,
	Seasons,
	Sprays,
	Themes,
	Weapons,
} from './endpoints'
import { CodeLang, type Language } from '../interfaces/v1'

export class ValorantAPIV1 {
	private codeLang: CodeLang

	public constructor(language: Language = 'English') {
		this.codeLang = CodeLang[language]
	}

	public get agents(): Agents {
		return new Agents(this.codeLang)
	}

	public get buddies(): Buddies {
		return new Buddies(this.codeLang)
	}

	public get bundles(): Bundles {
		return new Bundles(this.codeLang)
	}

	public get ceremonies(): Ceremonies {
		return new Ceremonies(this.codeLang)
	}

	public get competitiveTiers(): CompetitiveTiers {
		return new CompetitiveTiers(this.codeLang)
	}

	public get contentTiers(): ContentTiers {
		return new ContentTiers(this.codeLang)
	}

	public get contracts(): Contracts {
		return new Contracts(this.codeLang)
	}

	public get currencies(): Currencies {
		return new Currencies(this.codeLang)
	}

	public get events(): Events {
		return new Events(this.codeLang)
	}

	public get gamemodes(): Gamemodes {
		return new Gamemodes(this.codeLang)
	}

	public get gear(): Gear {
		return new Gear(this.codeLang)
	}

	public get levelBorders(): LevelBorders {
		return new LevelBorders(this.codeLang)
	}

	public get maps(): Maps {
		return new Maps(this.codeLang)
	}

	public get playerCards(): PlayerCards {
		return new PlayerCards(this.codeLang)
	}

	public get playerTitles(): PlayerTitles {
		return new PlayerTitles(this.codeLang)
	}

	public get seasons(): Seasons {
		return new Seasons(this.codeLang)
	}

	public get sprays(): Sprays {
		return new Sprays(this.codeLang)
	}

	public get themes(): Themes {
		return new Themes(this.codeLang)
	}

	public get weapons(): Weapons {
		return new Weapons(this.codeLang)
	}
}
