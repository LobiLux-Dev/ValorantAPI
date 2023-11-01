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

export interface ServerResponse<
	T extends Agents &
		Buddies &
		Bundles &
		Ceremonies &
		CompetitiveTiers &
		ContentTiers &
		Contracts &
		Currencies &
		Events &
		Gamemodes &
		Gear &
		LevelBorders &
		Maps &
		PlayerCards &
		PlayerTitles &
		Seasons &
		Sprays &
		Themes &
		Weapons,
> {
	status: number
	error?: string
	data?: T
}
