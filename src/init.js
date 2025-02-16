import Web3 from "web3";

import Onboard from 'bnc-onboard'

import * as common from './utils/common.js'
import * as state from './contract.js'
import { infura_url } from './allabis.js'
import { multicall_address, multicall_abi } from './allabis'


const wallets = [
  { walletName: "metamask" },
  // {
  //   walletName: "trezor",
  //   appUrl: "https://curve.fi",
  //   email: "info@curve.fi",
  //   rpcUrl:
  //     "https://data-seed-prebsc-1-s1.binance.org:8545/"
  // },
  // {
  //   walletName: "ledger",
  //   rpcUrl:
  //     "https://data-seed-prebsc-1-s1.binance.org:8545/"
  // },
  { walletName: "trust" },
  {
    walletName: "walletConnect",
    infuraKey: "c334bb4b45a444979057f0fb8a0c9d1b"
  },
  // todo, check if walletconnect works this way
 

]

if(window.web3 && window.web3.currentProvider.isTrust) {
  wallets.find(wallet => wallet.walletName == 'trust').preferred = true
}
// TODO: Confirm if we need this dappID if we're not using infura
export const onboard = Onboard({
  dappId: 'c68d8ec3-9b9a-4ba5-a3eb-6232eff79030',       // [String] The API key created by step one above
  networkId: 97,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
      state.contract.web3 = window.web3 = new Web3(wallet.provider)
      state.contract.walletName = wallet.name;
      localStorage.setItem('selectedWallet', wallet.name)
    },
    network: network => {
      if(network != 97) {
        state.contract.error = 'Error: wrong network type. Please switch to mainnet';
        state.contract.showShares = false
        window.web3 = new Web3(infura_url)
      }
      else {
        state.contract.error = ''
        state.contract.showShares = true;
      }
    },
    address: account => {
      if(state.contract.default_account)
        common.update_fee_info()
      state.contract.default_account = account;
    }
  },
  walletSelect: {
    wallets: wallets,
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'connect' },
    { checkName: 'accounts' },
    { checkName: 'network' },
  ],

});

async function init(init = true, name, walletlink = false) {
  console.time('initswap')
	//try catch for checking cancel dialog
	//const provider = await web3Modal.connect();

	/*const web3 = new Web3(provider);
	window.web3 = web3;
  window.web3provider = web3;*/
  try {
    state.contract.initializedContracts = false;
    let userSelectedWallet = await onboard.walletSelect(localStorage.getItem('selectedWallet'));
    if(userSelectedWallet) await onboard.walletCheck();
    else window.web3 = new Web3(infura_url)
    state.contract.web3 = window.web3
    state.contract.multicall = new state.contract.web3.eth.Contract(multicall_abi, multicall_address)

    var default_account = (await state.contract.web3.eth.getAccounts())[0];
    state.contract.default_account = default_account;
    if(init) await state.init(name);
    state.contract.initializedContracts = true;
    console.timeEnd('initswap')
  }
  catch(err) {
    console.error(err)
  }

}

export default init;