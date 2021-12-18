export type SocialLink = {
	url: string
	username: string
	title: string
	hex: string
	color: string
	path: string
	transform: {
		scale: number
		translate: {
			x: number
			y: number
		}
	}
}

export type Episode = {
	id: string
	episode: string
	title: string
	date: Date
	past: boolean
	gif?: string
	url?: string
	urlOpenSea?: string
	urlRarible?: string
	available?: boolean
}
