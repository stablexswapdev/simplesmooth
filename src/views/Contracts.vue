<template>
	<div class="window white">
	        <fieldset class='contractsdialog'>
	            <legend>Contracts</legend>
	            <fieldset v-for = '(addresses, i) in contractAddresses'>
	            	<legend>{{allPools[i]}}</legend>
	                	<a :href = "'https://testnet.bscscan.com/address/' + addresses.swap">
	                		<img class='icon' :src="getTokenUrl(i)"> <span class='text'>swap address</span>
	                	</a>
	                	<a :href = "'https://testnet.bscscan.com/address/' + addresses.token">
	                		<img class='icon' :src="getTokenUrl(i)"> 
	                		<span class='text'>[{{tokenNames[i].ticker}}] {{tokenNames[i].name}} token address</span>
	                	</a>
	            </fieldset>
	        </fieldset>
	    </div>
</template>

<script>
	import allabis from '../allabis'

	export default {
		data: () => ({
			allPools: ['compound', 'usdt', 'y', 'busd', 'susdv2', 'pax'],
			tokenNames: [
				{ name: 'cCurve', ticker: 'cCrv' },
				{ name: 'tCurve', ticker: 'tCrv' },
				{ name: 'yCurve', ticker: 'yCrv' },
				{ name: 'bCurve', ticker: 'bCrv' },
				{ name: 'sCurve', ticker: 'sCrv' },
				{ name: 'pCurve', ticker: 'pCrv' },
			]
		}),
		computed: {
			contractAddresses() {
				console.log(Object.keys(allabis).filter(pool => pool != 'y' || pool != 'susd'))
				return Object.keys(allabis).filter(pool => pool != 'y' && pool != 'susd').map(pool => 
					({swap: allabis[pool].swap_address, token: allabis[pool].token_address})
				)
			}
		},
		methods: {
			getTokenUrl(i) {
				return require(`../assets/${this.tokenNames[i].ticker}1.png`)
			}
		},
		metaInfo: {
	      title: 'StableXswap :: Contracts',
	      meta: [
	        {'property': 'og:title', 'content': 'beta.trade.stablexswap.comcontracts'},
	        {'property': 'og:url', 'content': 'https://trade.stablexswap.comcontracts'},
	        {'property': 'og:type', 'content': 'website'},
	        {'property': 'og:description', 'content': 'Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading'},
	        {'property': 'og:image', 'content': '/curve.png'},
	        {'name': 'twitter:card', 'content': 'summary_large_image'},
	        {'name': 'twitter:title', 'content': 'beta.trade.stablexswap.comcontracts'},
	        {'name': 'twitter:site', 'content': '@stablexswap'},
	        {'name': 'twitter:creator', 'content': '@stablexswap'},
	        {'name': 'twitter:description', 'content': 'Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading'},
	        {'name': 'twitter:url', 'content': 'https://trade.stablexswap.comcontracts'},
	        {'name': 'twitter:image', 'content': '/curve.png'},
	      ]
	    },
	}
</script>

<style scoped>
	legend {
		text-align: center;
	}
	.contractsdialog a {
		display: flex;
		padding: 0.1em;
	}
	.contractsdialog a img {
		margin-right: 10px;
	}
	.contractsdialog div {
		display: block;
		margin-top: 10px;
	}
	.contractsdialog a:hover {
	    background-color: blue;
    	color: white;
	}
</style>