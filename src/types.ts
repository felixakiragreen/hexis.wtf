export type SocialLink = {
	url: string
	username: string
	title: string
	hex: string
	path: string
	transform: {
		scale: number
		translate: {
			x: number
			y: number
		}
	}
}
