require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind concert gesture nation fresh sun'; 
let testAccounts = [
"0xe58d97295525a0ebbe4ca8be20ccc18b9ce33c04c1b5497fd6e85f5ac93c7134",
"0xffad43fb96e28d9475089547cefa5815e4cecc83854ae04c9f79ec8c05ac25cd",
"0xf25a94e76bafae7bab7fdfcdf596820d65711cba76d05b810fb74ba8da53efd0",
"0x4375781effeaea963457b1d0d022046f6f6411a83b0d0e781ed741eeebcccbb2",
"0xe42d9aadcc3ca241835df52072acefbae770dad609062107f31edaea9309a240",
"0xc31620c8b9bf9cc7bb0dbd808c27c4e1f9f2d5428dfab116b0233151a57d020e",
"0xef45f0654215070094c4f0438aa2a49b72e0ea370f97a65101af52ccc4f152ae",
"0x06d5c784243e577aabea1140e1089e23a3092a2441b7deb62ae4ca68368f9d0a",
"0xb31de017fd26034ca2678b7292ba6c1a96cef1685753ac67f2c47779418980ba",
"0xc445b01f0908988a7029c3e1c861d46e95453060af1ec52bd4a6eeb77e271483"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

