import { map } from 'lodash'

const OPENSEA_ASSETS_URL = 'https://api.opensea.io/api/v1/assets'
const HEXIS_SEASON_1_ADDRESS = '0x8a59b9f658c3dac396a9c380a5a8044b02caf68c'

export type OpenSeaAsset = {
	name: string
	gif: string
	url: string
	urlOpenSea: string
	urlRarible: string
}

export const fetchOpenSeaAssets = async (
	address: string = HEXIS_SEASON_1_ADDRESS,
	offset: number = 0,
	limit: number = 50
): Promise<OpenSeaAsset[]> => {
	const url = `${OPENSEA_ASSETS_URL}?asset_contract_address=${address}&order_direction=desc&offset=${offset}&limit=${limit}`

	return new Promise((resolve, reject) => {
		try {
			fetch(url)
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
	}
}
