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
import {
	CodeLang,
	type Agent,
	type Buddy,
	type Bundle,
	type Ceremony,
	type CompetitiveTier,
	type ContentTier,
	type Contract,
	type Currency,
	type Event,
	type Gamemode,
	type Gear as IGear,
	type Language,
	type LevelBorder,
	type Map,
	type PlayerCard,
	type PlayerTitle,
	type Season,
	type Spray,
	type Theme,
	type Weapon,
} from '../interfaces/v1'

export class ValorantAPIV1 {
	private codeLang: CodeLang

	public constructor(language: Language = 'English') {
		this.codeLang = CodeLang[language]
	}

	public get agents(): Agent[] {
		return new Agents(this.codeLang).agents
	}

	public get buddies(): Buddy[] {
		return new Buddies(this.codeLang).buddies
	}

	public get bundles(): Bundle[] {
		return new Bundles(this.codeLang).bundles
	}

	public get ceremonies(): Ceremony[] {
		return new Ceremonies(this.codeLang).ceremonies
	}

	public get competitiveTiers(): CompetitiveTier[] {
		return new CompetitiveTiers(this.codeLang).competitiveTiers
	}

	public get contentTiers(): ContentTier[] {
		return new ContentTiers(this.codeLang).contentTiers
	}

	public get contracts(): Contract[] {
		return new Contracts(this.codeLang).contracts
	}

	public get currencies(): Currency[] {
		return new Currencies(this.codeLang).currencies
	}

	public get events(): Event[] {
		return new Events(this.codeLang).events
	}

	public get gamemodes(): Gamemode[] {
		return new Gamemodes(this.codeLang).gamemodes
	}

	public get gear(): IGear[] {
		return new Gear(this.codeLang).gear
	}

	public get levelBorders(): LevelBorder[] {
		return new LevelBorders(this.codeLang).levelBorders
	}

	public get maps(): Map[] {
		return new Maps(this.codeLang).maps
	}

	public get playerCards(): PlayerCard[] {
		return new PlayerCards(this.codeLang).playerCards
	}

	public get playerTitles(): PlayerTitle[] {
		return new PlayerTitles(this.codeLang).playerTitles
	}

	public get seasons(): Season[] {
		return new Seasons(this.codeLang).seasons
	}

	public get sprays(): Spray[] {
		return new Sprays(this.codeLang).sprays
	}

	public get themes(): Theme[] {
		return new Themes(this.codeLang).themes
	}

	public get weapons(): Weapon[] {
		return new Weapons(this.codeLang).weapons
	}
}
