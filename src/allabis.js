export var infura_url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'
export let multicall_address = '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb'
export let multicall_abi = [{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]
export const ERC20_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

export const cERC20_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0e752702"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x173b9904"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x17bfdfbc"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x182df0f5"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2608f818"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x26782247"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3af9e669"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3b1d21a2"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4576b5db"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x47bd3718"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5fe3b567"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x601a0bf1"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x675d972c"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6c540baf"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6f307dc3"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x73acee98"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x852a12e3"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8f840ddd"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95dd9193"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa0712d68"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa6afed95"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaa5af0fd"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xae9d70b0"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb2a02ff1"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb71d1a0c"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbd6d894d"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc37f68e2"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc5ebeaec"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xdb006a75"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe9c714f2"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2b3abbd"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf3fdb15a"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf5e3c462"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf851a440"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf8f9da28"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfca7820b"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xfe9c44ae"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event","signature":"0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event","signature":"0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event","signature":"0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event","signature":"0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event","signature":"0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event","signature":"0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event","signature":"0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event","signature":"0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event","signature":"0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event","signature":"0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event","signature":"0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event","signature":"0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event","signature":"0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}]

export const yERC20_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"aave","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aaveToken","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approveToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"apr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceAave","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceCompound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceCompoundInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceDydx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceFulcrum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceFulcrumInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calcPoolValueInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"compound","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dydx","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fulcrum","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAave","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAaveCore","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"provider","outputs":[{"internalType":"enum yUSDT.Lender","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"rebalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"recommend","outputs":[{"internalType":"enum yUSDT.Lender","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_APR","type":"address"}],"name":"set_new_APR","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_COMPOUND","type":"address"}],"name":"set_new_COMPOUND","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_new_DTOKEN","type":"uint256"}],"name":"set_new_DTOKEN","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_FULCRUM","type":"address"}],"name":"set_new_FULCRUM","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"supplyAave","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"supplyCompound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"supplyDydx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"supplyFulcrum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]



var usdt = {
  N_COINS: 3,
  coin_precisions: [1e18, 1e6, 1e6],
  wrapped_precisions: [1e18, 1e6, 1e6],
  use_lending: [false, false, false],
  tethered: [false, false, true],
  is_plain: [false, false, true],
  swap_address: '0x69095A758cFd87B10E0C7d2FDFA6fc250AA20420',
  token_address: '0x905406aA329695b4De2d68d59E36b1Ba4Ca523FB',
  infura_url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  underlying_coins: [
          '0x40DbaBD279477cf338E6E3f242Fca43b73b7A3f9F',
          '0xB6910ef5C9035E9E920b6958c9791895b4D2eA6f',
          '0xdC1DAcf31071fc6a812d885d52EBE3529a46b9cc'],
  coins: [
    '0x40DbaBD279477cf338E6E3f242Fca43b73b7A3f9F',
    '0xB6910ef5C9035E9E920b6958c9791895b4D2eA6f',
    '0xdC1DAcf31071fc6a812d885d52EBE3529a46b9cc'],
  deposit_address: '0x0eA60062dbEd42604757b687653D1020D526BB51',
  deposit_abi: 
[{"outputs":[],"inputs":[{"type":"address","name":"_pool"},{"type":"address","name":"_token"}],"stateMutability":"nonpayable","type":"constructor"},{"name":"add_liquidity","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256[4]","name":"amounts"},{"type":"uint256","name":"min_mint_amount"}],"stateMutability":"nonpayable","type":"function","gas":34073},{"name":"remove_liquidity","outputs":[{"type":"uint256[4]","name":""}],"inputs":[{"type":"uint256","name":"_amount"},{"type":"uint256[4]","name":"min_amounts"}],"stateMutability":"nonpayable","type":"function","gas":32919},{"name":"remove_liquidity_one_coin","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"_token_amount"},{"type":"int128","name":"i"},{"type":"uint256","name":"_min_amount"}],"stateMutability":"nonpayable","type":"function","gas":14467},{"name":"remove_liquidity_imbalance","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256[4]","name":"amounts"},{"type":"uint256","name":"max_burn_amount"}],"stateMutability":"nonpayable","type":"function","gas":38200},{"name":"calc_withdraw_one_coin","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"_token_amount"},{"type":"int128","name":"i"}],"stateMutability":"view","type":"function","gas":3147},{"name":"calc_token_amount","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256[4]","name":"amounts"},{"type":"bool","name":"is_deposit"}],"stateMutability":"view","type":"function","gas":4414},{"name":"pool","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1241},{"name":"token","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1271},{"name":"base_pool","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1301},{"name":"coins","outputs":[{"type":"address","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function","gas":1440},{"name":"base_coins","outputs":[{"type":"address","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function","gas":1470}],


  swap_abi: [
   {
    "name": "TokenExchange",
    "inputs": [
     {
      "type": "address",
      "name": "buyer",
      "indexed": true
     },
     {
      "type": "int128",
      "name": "sold_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_sold",
      "indexed": false
     },
     {
      "type": "int128",
      "name": "bought_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_bought",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "TokenExchangeUnderlying",
    "inputs": [
     {
      "type": "address",
      "name": "buyer",
      "indexed": true
     },
     {
      "type": "int128",
      "name": "sold_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_sold",
      "indexed": false
     },
     {
      "type": "int128",
      "name": "bought_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_bought",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "AddLiquidity",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[3]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[3]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "invariant",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "RemoveLiquidity",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[3]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[3]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "RemoveLiquidityImbalance",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[3]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[3]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "invariant",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "CommitNewAdmin",
    "inputs": [
     {
      "type": "uint256",
      "name": "deadline",
      "indexed": true,
      "unit": "sec"
     },
     {
      "type": "address",
      "name": "admin",
      "indexed": true
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "NewAdmin",
    "inputs": [
     {
      "type": "address",
      "name": "admin",
      "indexed": true
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "CommitNewParameters",
    "inputs": [
     {
      "type": "uint256",
      "name": "deadline",
      "indexed": true,
      "unit": "sec"
     },
     {
      "type": "uint256",
      "name": "A",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "fee",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "admin_fee",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "NewParameters",
    "inputs": [
     {
      "type": "uint256",
      "name": "A",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "fee",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "admin_fee",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "outputs": [],
    "inputs": [
     {
      "type": "address[3]",
      "name": "_coins"
     },
     {
      "type": "address[3]",
      "name": "_underlying_coins"
     },
     {
      "type": "address",
      "name": "_pool_token"
     },
     {
      "type": "uint256",
      "name": "_A"
     },
     {
      "type": "uint256",
      "name": "_fee"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "constructor"
   },
   {
    "name": "get_virtual_price",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 1327351
   },
   {
    "name": "calc_token_amount",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "uint256[3]",
      "name": "amounts"
     },
     {
      "type": "bool",
      "name": "deposit"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 5171741
   },
   {
    "name": "add_liquidity",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256[3]",
      "name": "amounts"
     },
     {
      "type": "uint256",
      "name": "min_mint_amount"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 7905846
   },
   {
    "name": "get_dy",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3016651
   },
   {
    "name": "get_dx",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dy"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3016657
   },
   {
    "name": "get_dy_underlying",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3016494
   },
   {
    "name": "get_dx_underlying",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dy"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3016500
   },
   {
    "name": "exchange",
    "outputs": [],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     },
     {
      "type": "uint256",
      "name": "min_dy"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 6109460
   },
   {
    "name": "exchange_underlying",
    "outputs": [],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     },
     {
      "type": "uint256",
      "name": "min_dy"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 6125699
   },
   {
    "name": "remove_liquidity",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256",
      "name": "_amount"
     },
     {
      "type": "uint256[3]",
      "name": "min_amounts"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 197574
   },
   {
    "name": "remove_liquidity_imbalance",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256[3]",
      "name": "amounts"
     },
     {
      "type": "uint256",
      "name": "max_burn_amount"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 7905313
   },
   {
    "name": "commit_new_parameters",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256",
      "name": "amplification"
     },
     {
      "type": "uint256",
      "name": "new_fee"
     },
     {
      "type": "uint256",
      "name": "new_admin_fee"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 145897
   },
   {
    "name": "apply_new_parameters",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 133512
   },
   {
    "name": "revert_new_parameters",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 21835
   },
   {
    "name": "commit_transfer_ownership",
    "outputs": [],
    "inputs": [
     {
      "type": "address",
      "name": "_owner"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 74512
   },
   {
    "name": "apply_transfer_ownership",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 60568
   },
   {
    "name": "revert_transfer_ownership",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 21925
   },
   {
    "name": "withdraw_admin_fees",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 18169
   },
   {
    "name": "kill_me",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 37878
   },
   {
    "name": "unkill_me",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 22015
   },
   {
    "name": "coins",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2190
   },
   {
    "name": "underlying_coins",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2220
   },
   {
    "name": "balances",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2250
   },
   {
    "name": "A",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2081
   },
   {
    "name": "fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2111
   },
   {
    "name": "admin_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2141
   },
   {
    "name": "owner",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2171
   },
   {
    "name": "admin_actions_deadline",
    "outputs": [
     {
      "type": "uint256",
      "unit": "sec",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2201
   },
   {
    "name": "transfer_ownership_deadline",
    "outputs": [
     {
      "type": "uint256",
      "unit": "sec",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2231
   },
   {
    "name": "future_A",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2261
   },
   {
    "name": "future_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2291
   },
   {
    "name": "future_admin_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2321
   },
   {
    "name": "future_owner",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2351
   }
  ],
}

var iearn = {
  N_COINS: 4,
  coin_precisions: [1e18, 1e6, 1e6, 1e18],
  wrapped_precisions: [1e18, 1e6, 1e6, 1e18],
  use_lending: [true, true, true, true],
  tethered: [false, false, true, false],
  is_plain: [false, false, false, false],
  swap_address: '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51',
  token_address: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  infura_url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  underlying_coins: [
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        '0x0000000000085d4780B73119b644AE5ecd22b376'],
  coins: [
        '0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01',
        '0xd6aD7a6750A7593E092a9B218d66C0A814a3436e',
        '0x83f798e925BcD4017Eb265844FDDAbb448f1707D',
        '0x73a052500105205d34Daf004eAb301916DA8190f'],
  deposit_address: '0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3',
  deposit_abi: [
	 {
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "address[4]",
	    "name": "_coins"
	   },
	   {
	    "type": "address[4]",
	    "name": "_underlying_coins"
	   },
	   {
	    "type": "address",
	    "name": "_curve"
	   },
	   {
	    "type": "address",
	    "name": "_token"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "constructor"
	 },
	 {
	  "name": "add_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "uamounts"
	   },
	   {
	    "type": "uint256",
	    "name": "min_mint_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 164560
	 },
	 {
	  "name": "remove_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_amount"
	   },
	   {
	    "type": "uint256[4]",
	    "name": "min_uamounts"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 99521
	 },
	 {
	  "name": "remove_liquidity_imbalance",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "uamounts"
	   },
	   {
	    "type": "uint256",
	    "name": "max_burn_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 120148
	 },
	 {
	  "name": "calc_withdraw_one_coin",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 3881601
	 },
	 {
	  "name": "remove_liquidity_one_coin",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "uint256",
	    "name": "min_uamount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function"
	 },
	 {
	  "name": "remove_liquidity_one_coin",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "uint256",
	    "name": "min_uamount"
	   },
	   {
	    "type": "bool",
	    "name": "donate_dust"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function"
	 },
	 {
	  "name": "withdraw_donated_dust",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 63973
	 },
	 {
	  "name": "coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1680
	 },
	 {
	  "name": "underlying_coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1710
	 },
	 {
	  "name": "curve",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1541
	 },
	 {
	  "name": "token",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1571
	 }
	],
  swap_abi: [
   {
    "name": "TokenExchange",
    "inputs": [
     {
      "type": "address",
      "name": "buyer",
      "indexed": true
     },
     {
      "type": "int128",
      "name": "sold_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_sold",
      "indexed": false
     },
     {
      "type": "int128",
      "name": "bought_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_bought",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "TokenExchangeUnderlying",
    "inputs": [
     {
      "type": "address",
      "name": "buyer",
      "indexed": true
     },
     {
      "type": "int128",
      "name": "sold_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_sold",
      "indexed": false
     },
     {
      "type": "int128",
      "name": "bought_id",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "tokens_bought",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "AddLiquidity",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[4]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[4]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "invariant",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "RemoveLiquidity",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[4]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[4]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "RemoveLiquidityImbalance",
    "inputs": [
     {
      "type": "address",
      "name": "provider",
      "indexed": true
     },
     {
      "type": "uint256[4]",
      "name": "token_amounts",
      "indexed": false
     },
     {
      "type": "uint256[4]",
      "name": "fees",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "invariant",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "token_supply",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "CommitNewAdmin",
    "inputs": [
     {
      "type": "uint256",
      "name": "deadline",
      "indexed": true,
      "unit": "sec"
     },
     {
      "type": "address",
      "name": "admin",
      "indexed": true
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "NewAdmin",
    "inputs": [
     {
      "type": "address",
      "name": "admin",
      "indexed": true
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "CommitNewParameters",
    "inputs": [
     {
      "type": "uint256",
      "name": "deadline",
      "indexed": true,
      "unit": "sec"
     },
     {
      "type": "uint256",
      "name": "A",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "fee",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "admin_fee",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "name": "NewParameters",
    "inputs": [
     {
      "type": "uint256",
      "name": "A",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "fee",
      "indexed": false
     },
     {
      "type": "uint256",
      "name": "admin_fee",
      "indexed": false
     }
    ],
    "anonymous": false,
    "type": "event"
   },
   {
    "outputs": [],
    "inputs": [
     {
      "type": "address[4]",
      "name": "_coins"
     },
     {
      "type": "address[4]",
      "name": "_underlying_coins"
     },
     {
      "type": "address",
      "name": "_pool_token"
     },
     {
      "type": "uint256",
      "name": "_A"
     },
     {
      "type": "uint256",
      "name": "_fee"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "constructor"
   },
   {
    "name": "get_virtual_price",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 1535185
   },
   {
    "name": "calc_token_amount",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "uint256[4]",
      "name": "amounts"
     },
     {
      "type": "bool",
      "name": "deposit"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 6067881
   },
   {
    "name": "add_liquidity",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256[4]",
      "name": "amounts"
     },
     {
      "type": "uint256",
      "name": "min_mint_amount"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 9327083
   },
   {
    "name": "get_dy",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3454227
   },
   {
    "name": "get_dx",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dy"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3454232
   },
   {
    "name": "get_dy_underlying",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3454087
   },
   {
    "name": "get_dx_underlying",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dy"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 3454093
   },
   {
    "name": "exchange",
    "outputs": [],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     },
     {
      "type": "uint256",
      "name": "min_dy"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 7030208
   },
   {
    "name": "exchange_underlying",
    "outputs": [],
    "inputs": [
     {
      "type": "int128",
      "name": "i"
     },
     {
      "type": "int128",
      "name": "j"
     },
     {
      "type": "uint256",
      "name": "dx"
     },
     {
      "type": "uint256",
      "name": "min_dy"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 7046149
   },
   {
    "name": "remove_liquidity",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256",
      "name": "_amount"
     },
     {
      "type": "uint256[4]",
      "name": "min_amounts"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 240409
   },
   {
    "name": "remove_liquidity_imbalance",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256[4]",
      "name": "amounts"
     },
     {
      "type": "uint256",
      "name": "max_burn_amount"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 9326310
   },
   {
    "name": "commit_new_parameters",
    "outputs": [],
    "inputs": [
     {
      "type": "uint256",
      "name": "amplification"
     },
     {
      "type": "uint256",
      "name": "new_fee"
     },
     {
      "type": "uint256",
      "name": "new_admin_fee"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 145867
   },
   {
    "name": "apply_new_parameters",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 133482
   },
   {
    "name": "revert_new_parameters",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 21805
   },
   {
    "name": "commit_transfer_ownership",
    "outputs": [],
    "inputs": [
     {
      "type": "address",
      "name": "_owner"
     }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 74482
   },
   {
    "name": "apply_transfer_ownership",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 60538
   },
   {
    "name": "revert_transfer_ownership",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 21895
   },
   {
    "name": "withdraw_admin_fees",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 22667
   },
   {
    "name": "kill_me",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 37848
   },
   {
    "name": "unkill_me",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 21985
   },
   {
    "name": "coins",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2160
   },
   {
    "name": "underlying_coins",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2190
   },
   {
    "name": "balances",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [
     {
      "type": "int128",
      "name": "arg0"
     }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2220
   },
   {
    "name": "A",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2051
   },
   {
    "name": "fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2081
   },
   {
    "name": "admin_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2111
   },
   {
    "name": "owner",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2141
   },
   {
    "name": "admin_actions_deadline",
    "outputs": [
     {
      "type": "uint256",
      "unit": "sec",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2171
   },
   {
    "name": "transfer_ownership_deadline",
    "outputs": [
     {
      "type": "uint256",
      "unit": "sec",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2201
   },
   {
    "name": "future_A",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2231
   },
   {
    "name": "future_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2261
   },
   {
    "name": "future_admin_fee",
    "outputs": [
     {
      "type": "uint256",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2291
   },
   {
    "name": "future_owner",
    "outputs": [
     {
      "type": "address",
      "name": "out"
     }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2321
   }
  ],
}

var susdv2 = {
	swap_abi: [
	 {
	  "name": "TokenExchange",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "buyer",
	    "indexed": true
	   },
	   {
	    "type": "int128",
	    "name": "sold_id",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "tokens_sold",
	    "indexed": false
	   },
	   {
	    "type": "int128",
	    "name": "bought_id",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "tokens_bought",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "TokenExchangeUnderlying",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "buyer",
	    "indexed": true
	   },
	   {
	    "type": "int128",
	    "name": "sold_id",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "tokens_sold",
	    "indexed": false
	   },
	   {
	    "type": "int128",
	    "name": "bought_id",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "tokens_bought",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "AddLiquidity",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "provider",
	    "indexed": true
	   },
	   {
	    "type": "uint256[4]",
	    "name": "token_amounts",
	    "indexed": false
	   },
	   {
	    "type": "uint256[4]",
	    "name": "fees",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "invariant",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "token_supply",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "RemoveLiquidity",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "provider",
	    "indexed": true
	   },
	   {
	    "type": "uint256[4]",
	    "name": "token_amounts",
	    "indexed": false
	   },
	   {
	    "type": "uint256[4]",
	    "name": "fees",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "token_supply",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "RemoveLiquidityImbalance",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "provider",
	    "indexed": true
	   },
	   {
	    "type": "uint256[4]",
	    "name": "token_amounts",
	    "indexed": false
	   },
	   {
	    "type": "uint256[4]",
	    "name": "fees",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "invariant",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "token_supply",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "CommitNewAdmin",
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "deadline",
	    "indexed": true,
	    "unit": "sec"
	   },
	   {
	    "type": "address",
	    "name": "admin",
	    "indexed": true
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "NewAdmin",
	  "inputs": [
	   {
	    "type": "address",
	    "name": "admin",
	    "indexed": true
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "CommitNewParameters",
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "deadline",
	    "indexed": true,
	    "unit": "sec"
	   },
	   {
	    "type": "uint256",
	    "name": "A",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "fee",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "admin_fee",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "name": "NewParameters",
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "A",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "fee",
	    "indexed": false
	   },
	   {
	    "type": "uint256",
	    "name": "admin_fee",
	    "indexed": false
	   }
	  ],
	  "anonymous": false,
	  "type": "event"
	 },
	 {
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "address[4]",
	    "name": "_coins"
	   },
	   {
	    "type": "address[4]",
	    "name": "_underlying_coins"
	   },
	   {
	    "type": "address",
	    "name": "_pool_token"
	   },
	   {
	    "type": "uint256",
	    "name": "_A"
	   },
	   {
	    "type": "uint256",
	    "name": "_fee"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "constructor"
	 },
	 {
	  "name": "get_virtual_price",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1570535
	 },
	 {
	  "name": "calc_token_amount",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "amounts"
	   },
	   {
	    "type": "bool",
	    "name": "deposit"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 6103471
	 },
	 {
	  "name": "add_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "amounts"
	   },
	   {
	    "type": "uint256",
	    "name": "min_mint_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 9331701
	 },
	 {
	  "name": "get_dy",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "int128",
	    "name": "j"
	   },
	   {
	    "type": "uint256",
	    "name": "dx"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 3489637
	 },
	 {
	  "name": "get_dy_underlying",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "int128",
	    "name": "j"
	   },
	   {
	    "type": "uint256",
	    "name": "dx"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 3489467
	 },
	 {
	  "name": "exchange",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "int128",
	    "name": "j"
	   },
	   {
	    "type": "uint256",
	    "name": "dx"
	   },
	   {
	    "type": "uint256",
	    "name": "min_dy"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 7034253
	 },
	 {
	  "name": "exchange_underlying",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "int128",
	    "name": "j"
	   },
	   {
	    "type": "uint256",
	    "name": "dx"
	   },
	   {
	    "type": "uint256",
	    "name": "min_dy"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 7050488
	 },
	 {
	  "name": "remove_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_amount"
	   },
	   {
	    "type": "uint256[4]",
	    "name": "min_amounts"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 241191
	 },
	 {
	  "name": "remove_liquidity_imbalance",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "amounts"
	   },
	   {
	    "type": "uint256",
	    "name": "max_burn_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 9330864
	 },
	 {
	  "name": "commit_new_parameters",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "amplification"
	   },
	   {
	    "type": "uint256",
	    "name": "new_fee"
	   },
	   {
	    "type": "uint256",
	    "name": "new_admin_fee"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 146045
	 },
	 {
	  "name": "apply_new_parameters",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 133452
	 },
	 {
	  "name": "revert_new_parameters",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 21775
	 },
	 {
	  "name": "commit_transfer_ownership",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "address",
	    "name": "_owner"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 74452
	 },
	 {
	  "name": "apply_transfer_ownership",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 60508
	 },
	 {
	  "name": "revert_transfer_ownership",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 21865
	 },
	 {
	  "name": "withdraw_admin_fees",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 23448
	 },
	 {
	  "name": "kill_me",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 37818
	 },
	 {
	  "name": "unkill_me",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 21955
	 },
	 {
	  "name": "coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2130
	 },
	 {
	  "name": "underlying_coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2160
	 },
	 {
	  "name": "balances",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2190
	 },
	 {
	  "name": "A",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2021
	 },
	 {
	  "name": "fee",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2051
	 },
	 {
	  "name": "admin_fee",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2081
	 },
	 {
	  "name": "owner",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2111
	 },
	 {
	  "name": "admin_actions_deadline",
	  "outputs": [
	   {
	    "type": "uint256",
	    "unit": "sec",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2141
	 },
	 {
	  "name": "transfer_ownership_deadline",
	  "outputs": [
	   {
	    "type": "uint256",
	    "unit": "sec",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2171
	 },
	 {
	  "name": "future_A",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2201
	 },
	 {
	  "name": "future_fee",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2231
	 },
	 {
	  "name": "future_admin_fee",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2261
	 },
	 {
	  "name": "future_owner",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 2291
	 }
	],
	deposit_abi: [
	 {
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "address[4]",
	    "name": "_coins"
	   },
	   {
	    "type": "address[4]",
	    "name": "_underlying_coins"
	   },
	   {
	    "type": "address",
	    "name": "_curve"
	   },
	   {
	    "type": "address",
	    "name": "_token"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "constructor"
	 },
	 {
	  "name": "add_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "uamounts"
	   },
	   {
	    "type": "uint256",
	    "name": "min_mint_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 166032
	 },
	 {
	  "name": "remove_liquidity",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_amount"
	   },
	   {
	    "type": "uint256[4]",
	    "name": "min_uamounts"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 101481
	 },
	 {
	  "name": "remove_liquidity_imbalance",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256[4]",
	    "name": "uamounts"
	   },
	   {
	    "type": "uint256",
	    "name": "max_burn_amount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 125088
	 },
	 {
	  "name": "calc_withdraw_one_coin",
	  "outputs": [
	   {
	    "type": "uint256",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 3881771
	 },
	 {
	  "name": "remove_liquidity_one_coin",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "uint256",
	    "name": "min_uamount"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function"
	 },
	 {
	  "name": "remove_liquidity_one_coin",
	  "outputs": [],
	  "inputs": [
	   {
	    "type": "uint256",
	    "name": "_token_amount"
	   },
	   {
	    "type": "int128",
	    "name": "i"
	   },
	   {
	    "type": "uint256",
	    "name": "min_uamount"
	   },
	   {
	    "type": "bool",
	    "name": "donate_dust"
	   }
	  ],
	  "constant": false,
	  "payable": false,
	  "type": "function"
	 },
	 {
	  "name": "withdraw_donated_dust",
	  "outputs": [],
	  "inputs": [],
	  "constant": false,
	  "payable": false,
	  "type": "function",
	  "gas": 63973
	 },
	 {
	  "name": "coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1680
	 },
	 {
	  "name": "underlying_coins",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [
	   {
	    "type": "int128",
	    "name": "arg0"
	   }
	  ],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1710
	 },
	 {
	  "name": "curve",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1541
	 },
	 {
	  "name": "token",
	  "outputs": [
	   {
	    "type": "address",
	    "name": ""
	   }
	  ],
	  "inputs": [],
	  "constant": true,
	  "payable": false,
	  "type": "function",
	  "gas": 1571
	 }
	],
	N_COINS: 4,
	coin_precisions: [1e18, 1e6, 1e6, 1e18],
	wrapped_precisions: [1e18, 1e6, 1e6, 1e18],
	tethered: [false, false, true, false],
	use_lending: [false, false, false, false],
	is_plain: [true, true, true, true],
	swap_address: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
	token_address: '0xC25a3A3b969415c80451098fa907EC722572917F',
	infura_url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
	deposit_address: '0xFCBa3E75865d2d561BE8D220616520c171F12851',
	underlying_coins: [
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',],
	coins: [
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',],
}



// export let iearnAPR_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"APR","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UNI","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UNIAPR","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UNIROI","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"aave","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"aaveUni","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"aToken","type":"address"}],"name":"addAToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"aToken","type":"address"}],"name":"addAUniToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"cToken","type":"address"}],"name":"addCToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"dToken","type":"uint256"}],"name":"addDToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"iToken","type":"address"}],"name":"addIToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"created","type":"uint256"}],"name":"addPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"yToken","type":"address"}],"name":"addYToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compound","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dydx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fulcrum","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getAPROptions","outputs":[{"internalType":"uint256","name":"_uniswap","type":"uint256"},{"internalType":"uint256","name":"_compound","type":"uint256"},{"internalType":"uint256","name":"_unicompound","type":"uint256"},{"internalType":"uint256","name":"_fulcrum","type":"uint256"},{"internalType":"uint256","name":"_unifulcrum","type":"uint256"},{"internalType":"uint256","name":"_aave","type":"uint256"},{"internalType":"uint256","name":"_uniaave","type":"uint256"},{"internalType":"uint256","name":"_dydx","type":"uint256"},{"internalType":"uint256","name":"_ddex","type":"uint256"},{"internalType":"uint256","name":"_lendf","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"name":"getAPROptionsAdjusted","outputs":[{"internalType":"uint256","name":"_uniswap","type":"uint256"},{"internalType":"uint256","name":"_compound","type":"uint256"},{"internalType":"uint256","name":"_unicompound","type":"uint256"},{"internalType":"uint256","name":"_fulcrum","type":"uint256"},{"internalType":"uint256","name":"_unifulcrum","type":"uint256"},{"internalType":"uint256","name":"_aave","type":"uint256"},{"internalType":"uint256","name":"_uniaave","type":"uint256"},{"internalType":"uint256","name":"_dydx","type":"uint256"},{"internalType":"uint256","name":"_ddex","type":"uint256"},{"internalType":"uint256","name":"_lendf","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getAPROptionsInc","outputs":[{"internalType":"uint256","name":"_uniswap","type":"uint256"},{"internalType":"uint256","name":"_compound","type":"uint256"},{"internalType":"uint256","name":"_unicompound","type":"uint256"},{"internalType":"uint256","name":"_fulcrum","type":"uint256"},{"internalType":"uint256","name":"_unifulcrum","type":"uint256"},{"internalType":"uint256","name":"_aave","type":"uint256"},{"internalType":"uint256","name":"_uniaave","type":"uint256"},{"internalType":"uint256","name":"_dydx","type":"uint256"},{"internalType":"uint256","name":"_ddex","type":"uint256"},{"internalType":"uint256","name":"_lendf","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"inCaseETHGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"_TokenAddress","type":"address"}],"name":"inCaseTokenGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"recommend","outputs":[{"internalType":"string","name":"choice","type":"string"},{"internalType":"uint256","name":"capr","type":"uint256"},{"internalType":"uint256","name":"iapr","type":"uint256"},{"internalType":"uint256","name":"aapr","type":"uint256"},{"internalType":"uint256","name":"dapr","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_APR","type":"address"}],"name":"set_new_APR","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_UNI","type":"address"}],"name":"set_new_UNI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_UNIAPR","type":"address"}],"name":"set_new_UNIAPR","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_UNIROI","type":"address"}],"name":"set_new_UNIROI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"viewPool","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"unipool","type":"address"},{"internalType":"uint256","name":"created","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"yTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]

// export let iearnAPR_address = '0x4100FB8d05e37a897ACB686AAc833DD7e49aa591'

// export let onesplit_address = '0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E'

// export let onesplit_abi = [{"inputs":[{"internalType":"contract IOneSplit","name":"impl","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newImpl","type":"address"}],"name":"ImplementationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_AAVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_BANCOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_BDAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CHAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_COMPOUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_BINANCE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_COMPOUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_USDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_Y","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_FULCRUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_IEARN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_KYBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_OASIS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_SMART_TOKEN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_UNISWAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_BANCOR_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_OASIS_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_UNISWAP_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_MULTI_PATH_ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"parts","type":"uint256"},{"internalType":"uint256","name":"disableFlags","type":"uint256"}],"name":"getExpectedReturn","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"uint256","name":"parts","type":"uint256"},{"internalType":"uint256","name":"disableFlags","type":"uint256"}],"name":"goodSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oneSplitImpl","outputs":[{"internalType":"contract IOneSplit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IOneSplit","name":"impl","type":"address"}],"name":"setNewImpl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"},{"internalType":"uint256","name":"disableFlags","type":"uint256"}],"name":"swap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// export let sCurveRewards_abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"snx","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// export let sCurveRewards_address = '0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92'

export default {usdt}
