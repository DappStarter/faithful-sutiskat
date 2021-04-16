require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remind huge inner entire suspect seek'; 
let testAccounts = [
"0x16b266bc817549b1783bc7982983906335a9b29d50ea8daa5db097999ac439cb",
"0x65f4bc70ff11d15f1388a68198ecd9ca72f38246a9e71b03faf6b4eecc8f6a24",
"0x3e1052c97bf44c5311ad8faf197914606362c9bdaf384c69e850561b42897c11",
"0x1b6e1921f0db5bfd29198ae54cf31f953b93a410cf751ec13b4721b84a153160",
"0xd251a36e8f812e1b8031d54d73f87c3ccaac49617d6ebba752cf337bb4b6ed7f",
"0x73a4350a35f5a3fa1d0cb6ffc84ac39aaf69d14a0ba36e882d68467558e3e885",
"0x0715a7450af88b9d3de964ca1cab307d34913a323f169af9817ca859d8188088",
"0x9b6fa105a02059ed7e89b6cad20b696dae51c9b658726e8e69490e1a48049214",
"0x2f54f5eccb5b5b3096e469681a213cdd489218ae009a4108e736f4b22d3d1425",
"0x324c73e1d5498bd630eb4dc10ec81cceaa2668fef4fe7e97bbff0a969e7bfdfc"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

