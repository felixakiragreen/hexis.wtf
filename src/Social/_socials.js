import icon_twitter from 'simple-icons/icons/twitter'
import icon_instagram from 'simple-icons/icons/instagram'
import icon_rarible from './icon_rarible'

export const socials = [
  [
    {
      // type: 'rarible',
      url: 'https://app.rarible.com/hexis_wtf',
      username: 'hexis_wtf',
      color: 'yellow',
      ...icon_rarible,
      offset: 3,
    },
    {
      // type: 'twitter',
      url: 'https://twitter.com/hexis_wtf',
      username: '@hexis_wtf',
      color: 'blue',
      ...icon_twitter,
    },
    {
      // type: 'instagram',
      url: 'https://www.instagram.com/hexis_wtf',
      username: 'hexis_wtf',
      color: 'red',
      ...icon_instagram,
    },
  ],
]
