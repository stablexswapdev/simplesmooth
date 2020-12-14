<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import { getters, contract as currentContract } from './contract'
    import { capitalizeFirstLetter } from './utils/helpers'

    const descriptions = {
    	compound: 'A StableXswapportal for swapping DAI/USDC',
    	usdt: 'A StableXswapTethered portal for swapping DAI/USDC/USDT',
    	iearn: 'A StableXswapyTokens portal for swapping DAI/USDC/USDT/TUSD',
    	busd: 'A StableXswapportal for swapping BUSD and other stablecoins',
    }

    const titles = {
    	compound: 'Compounded',
    	usdt: 'Tethered',
    	busd: 'bUSD'
    }

	export default {
		metaInfo() {
			return {
				title: 'StableXswap :: ' + titles[this.currentPool],
				meta: [
					{'property': 'og:title', 'content': 'trade.stablexswap.com' + this.currentPool},
					{'property': 'og:url', 'content': 'https://trade.stablexswap.com' + this.currentPool},
					{'property': 'og:type', 'content': 'website'},
					{'property': 'og:description', 'content': descriptions[this.currentPool]},
					{'property': 'og:image', 'content':  '/stax' + this.currentPool + '_preview.png'},
					{'name': 'twitter:card', 'content': 'summary_large_image'},
					{'name': 'twitter:title', 'content': 'trade.stablexswap.com' + this.currentPool},
					{'name': 'twitter:site', 'content': '@stablexswap'},
					{'name': 'twitter:creator', 'content': '@stablexswap'},
					{'name': 'twitter:description', 'content': descriptions[this.currentPool]},
					{'name': 'twitter:url', 'content': 'https://trade.stablexswap.com' + this.currentPool},
					{'name': 'twitter:image', 'content': this.currentPool + '/stax_preview.png'},
				]
			}
		},
        computed: {
          ...getters,
        },
	}
</script>