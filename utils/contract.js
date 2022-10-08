import Web3 from 'web3';
import abi from '/utils/ABI.json';

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

export const address = '0x84b9b910527ad5c03a9ca831909e21e236ea7b06';
export const contract = new web3.eth.Contract(abi, address);
