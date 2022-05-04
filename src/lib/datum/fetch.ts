import { map } from 'lodash'

const OS_API_KEY = `83b1064f4a1545f881a7a1f084d43137`

const options = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		'X-API-KEY': OS_API_KEY,
	},
}

const OPENSEA_ASSETS_URL = 'https://api.opensea.io/api/v1/assets'
const HEXIS_SEASON_1_ADDRESS = '0x8a59b9f658c3dac396a9c380a5a8044b02caf68c'

export type OpenSeaAsset = {
	name: string
	gif: string
	url: string
	urlOpenSea: string
	urlRarible: string
	available: boolean
}

export const fetchOpenSeaAssets = async (
	address: string = HEXIS_SEASON_1_ADDRESS,
	offset: number = 0,
	limit: number = 50
): Promise<OpenSeaAsset[]> => {
	const url = `${OPENSEA_ASSETS_URL}?asset_contract_address=${address}&order_direction=desc&offset=${offset}&limit=${limit}`

	return new Promise((resolve, reject) => {
		try {
			fetch(url, options)
				.then((res) => res.json())
				.then((json) => {
					console.log(`fetchOpenSeaAssets(${url}) → `, { json })
					resolve(map(json.assets, (asset) => mapOpenSeaAsset(asset)))
				})
		} catch (err) {
			console.error(err)
			reject(err)
		}
	})
}

const mapOpenSeaAsset = (object: any): OpenSeaAsset => {
	return {
		name: object['name'],
		gif: object['image_url'],
		url: object['animation_url'],
		urlOpenSea: object['permalink'],
		urlRarible: object['external_link'],
		available: object['owner']?.['user']?.['username'] === 'ambition_wtf',
	}
}
