export default {
"abi":[
{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"chainlinkDeicmals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"getRatio","outputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"isSupported","outputs":[{"internalType":"bool","name":"supported","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"priceFeedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60a06040526001805460ff1916601217905534801561001d57600080fd5b507fc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000608052600060208190527f922605635d8625baeee2632c4abd30ed3e656c608e4e1d527ac798b2e7bbaf8080546001600160a01b03199081167372afaecf99c9d9c8215ff44c77b94b99c28741e8179091557f7145bb02480b505fc02ccfdba07d3ba3a9d821606f0688263abedd0ac6e5bec580548216736df09e975c830ecae5bd4ed9d90f3a95a4f880121790557f2fd76cfb49d3383b2a06baf321cf3e4267eb5cb4e5c9f424191270833864efcf805482167389c7926c7c15fd5bfdb1edcff7e7fc8283b578f61790557f652f71c42b843343e1ef371dbb9eee4ae200cef6c0330cc356d68047e9c79b628054821673492575fdd11a0fcf2c6c719867890a7648d526eb1790557f6aa415b64acb0a434cca4219caf83aa35a6e08e958efcfbc0a11e6938dcca50b80548216738f83670260f8f7708143b836a2a6f11ef0abac011790557f8dd1acf2f417f842f399a5c6c5a803e3017458a53801bad96df1fe1972a4537c805482167358921ac140522867bf50b9e009599da0ca4a23791790557f2bc93a8060526cefdf8802183664660d7d7310808def67df12894f0e5193b4338054821673c1438aa3823a6ba0c159cfa8d98df5a994ba120b1790557f60788a10714095b4b847dd17e28e2482eb05bcedcbe89ea8d5fa139281c227ff80548216730bdb051e10c9718d1c29efbad442e88d389582741790557f9d36796f595ad8c503b82568e7e967e06e60c0e85648af5d26070800c033c7f080548216730d16d4528239e9ee52fa531af613acdb23d88c941790557f72ecb6b277d69e65f266d635816977482f3bd43f38cd571ba98aab196b191eb28054821673cf61d1841b178fe82c8895fe60c2edda083144161790557f51c8e55e820f27a577f1b35603f17913888fc9eae77c90ee67b8ebed664dfd858054821673dd22a54e05410d8d1007c38b5c7a3ed74b8552811790557fac42b33335ec2d57e8c892598a95336eedfbe3a46f787016e9d908bff25633e98054821673deb288f737066589598e9214e782fa5a8ed689e81790557f939f7cabc28bdbedc4485191b21a60d41b948f6b2be04fad8a9bba962c7a74b18054821673614715d2af89e6ec99a233818275142ce88d1cfd1790557f714d08b158d6cc294ffeb4a3b345613fb0e642c104a5bce757c5f7f16bd4df5480548216738f7c7181ed1a2ba41cfc3f5d064ef91b67daef661790557fc19dbee4376f33a2c7d0d8afb05074ae4879269d0731097362888a48b88cbe4e805482167375fbd83b4bd51dee765b2a01e8d3aa1b020f9d331790557f511cc89fca1810b4d2868146b87932d94ee0e38147e04dc2f8572df83cf520a880548216731b39ee86ec5979ba5c322b826b3ecb8c799916991790557f74b21504d6ce8d3085ff4d3c40f4f6f826f045fe400f691809753490c1113ccc80548216737b6230ef79d5e97c11049ab362c0b685facba0c21790557fa321655a2bbe4fb76e06e998714ab65c52c1c2c1d83195276a2c435589568d76805482167382597cfe6af8baad7c0d441aa82cbc3b517596071790557ff7b15f98e94b56adc7bc4251d8e5bab2a85df3c658d291f469be1863917931e98054821673ca696a9eb93b81adfe6435759a29ab4cf2991a961790557f70c3dba262fa5eaaf3e393830b86a1923f032bbcdc463b5d2b22ed5f11b1e68580548216738a12be339b0cd1829b91adc01977caa5e9ac121e1790557f5306b8fbe80b30a74098357ee8e26fad8dc069da9011cca5f0870a0a5982e5418054821673773616e4d11a78f511299002da57a0a94577f1f41790557f1bc36087bcda8c8f0a1d3644ff9e81045f37abda2f3e48c9950fe55b89d0df568054821673029849bbc0b1d93b85a8b6190e979fd38f5760e21790557f2a792ecbe4cc20859315764ffd1173cc3d655abe0eab051e1b91505d05664e5f805482167324d9ab51950f3d62e9144fdc2f3135daa6ce8d1b1790557f27e997bcf7e34b5892c35718d72ca8a4d44f6f77265e19fe4feb6a8ebb16cc7b805482167314d04fff8d21bd62987a5ce9ce543d2f1edf5d3e1790557f69385f4f59c73b47d354995d37e8afb2d12626a98f707577a862ca34c9b8dfab80548216732de7e4a9488488e0058b95854cc2f7955b35dc9b1790557fe1f42dac1a969062788e146df38452cb3deb0c18993a68cabc3beaf2d8927b318054821673a614953df476577e90dcf4e3428960e221ea47271790557f1937f4929bf506eeb2c6a1d0a2fcd058a6c656179f2f8b4280efa139cc62bcba805482167317d054ecac33d91f7340645341efb5de9009f1c11790557f65ddfc0b22efd48a70a9225c1497ac6013365784568b598beb41c24a618196638054821673af5e8d9cd9fc85725a83bf23c52f1c39a71588a61790557fa47c6237e3771726e573ebf3e2aae7b22fb6912d94711a8c0ebc4a9f4941e83080548216731b61bad1495161bcb6c03ddb0e41622c0270bb1a1790557ff3da0919264f7c718053ecd775aaadf3e60482b8a48602c1a29f9e3fa1891d1c8054821673656c0544ef4c98a6a98491833a89204abb045d6b1790557fcf66ea24a3a22ace3478fe5474bcc1fe794b64f2f3e3e510121d34175d9fca748054821673e7015ccb7e5f788b8c1010fc22343473eaac37411790557f7e8b0ddd41f45dc519379597a96fbf674e542ac0abe9d28115974f5e6d9d1f6280548216734e844125952d32acdf339be976c98e22f6f318db1790557f730d6fdf8f2d5e5e75a62ad49cc4d175b7750703aa72e452e1e22258c77079fb8054821673dc530d9457755926550b59e8eccdae76241815571790557fb155860a6156b882a029d82cb64ada93d58af9bcf177423c0df252ea57537f45805482167313a8f2cc27ccc2761ca1b21d2f3e762445f201ce1790557ffde91a0e4ce347aee87f50e1828f560ac227f5a85b774d40a730df907420cbdd8054821673160ac928a16c93ed4895c2de6f81ecce9a7eb7b41790557fe9ac309054ae3ea057b8ba5ade5fbdb631fd2a69208b4c4996b5da5c0c28541a805482167382a44d92d6c329826dc557c5e1be6ebec5d5feb91790557fdda00a57bee26ed4ac93f73d0238caf2b0b80d455de521e247ae994efa80def5805482167324551a8fb2a7211a25a17b1481f043a8a8adc7f21790557fd85a4d964d4d582b84640f5fb5e87df4a5d5298bb387091004bd9260d56a89e38054821673daea8386611a157b08829ed4997a8a62b557014c1790557f8368c25c4b2f30d7b2ab019df22a73e277c773d0fb7cde331e90efc89d2692fb805482167398334b85de2a8b998ba844c5521e73d68ad69c001790557f7b66cee30b2b198fbf35e728c76f17d88c3a425bd48097e22eafaff9da2e7e8f80548216739cb2a01a7e64992d32a34db7ceea4c919c391f6a1790557fe8643eefe5c7411f6a5fa5efbc8c5ba3b518d0fb73c9e4b17263132fddb35ddd8054821673fd93c391f3a81565dae1f6a66115c26f36a92d6d1790557fe7ad96a34620650a4b4bc1354f7fc06794a9fe551267162fdb4eedc2720590f880548216739b0fc4bb9981e5333689d69bdbf66351b9861e621790557f291fc04542f545d171df618942aa085a5ff8408cbc578fd254cdb33abd33d35580548216732c881b6f3f6b5ff6c975813f87a4dad0b241c15b1790557f692c63a03bf35f688365fdce87bd4530629214d76f11021ca81cb251428807a9805482167357c9ab3e56ee4a83752c181f241120a3dbba06a11790557f629da0e8ff2229b61f23ea59f6fc9fae5385ec7d86836d69d66518b801a1a2b98054821673ba9b2a360eb8abdb677d6d7f27e12de11aa052ef1790557fc13b7ee270ec43e8a6443e3b8f180d8f4fca097dedaede03fcc04df7145c999a80548216733a08ebbab125224b7b6474384ee39fbb247d22001790557fdfcc185e406aad40b3880bc723dcc773f9b6e7bc42904ab3f9845c594921f49d80548216739b97304ea12efed0fad976fbecaad46016bf269e1790557f3dac7eedd2c2c2f790ed98399eb44d86394a11105d16c59b53e16a8788cb866b80548216733b41d5571468904d4e53b6a8d93a6bac43f02dc91790557fc8923fd5e49e23bbf39410f29ed2fd031284ae9deae0421a55fa840a74091ffc80548216734ad7b025127e89263242ab68f0f9c4e5c033b4891790557fca6d9c5f0f8a61760221632ac5123020f6457c97c340e39c224f27f10709004880548216732a784368b1d492f458bf919389f42c18315765f51790557f72d1ea1bd06e478789ce223c9d4541833ee2f7ebeef7a8270683f3d403f32f9480548216733147d7203354dc06d9fd350c7a2437bca92387a41790557fe2c8e4a8fa3904a45b2d114396c1fba62bf2ed05bd169dc940fa95bf862d58858054821673d4ce430c3b67b3e2f7026d86e7128588629e24551790557ff1d4fe8be39ae1d5174965bc28753959e2d0aee29df2ece084d4796a3291c4428054821673c16935b445f4bdc172e408433c8f7101bbbbe3681790557f915ea3178cf8d84ce8970365961a708ef05e98859d8d4717485c47bf3cbcb26480548216734cba1e1fdc738d0fe8db3ee07728e2bc4da676c61790557f3a366db8310f607ec90a3e157b2d9c96b54e5b9058a23c07ffef108dcac299bf8054821673875d60c44cfbc38baa4eb2ddb76a767deb91b97e1790557f6a0ff5e9c82c4b6c02813537e66c776442d8694c3e7f57c0041dc74622b13d228054821673ea286b2584f79cd4d322fe107d9683971c8905961790557f6cd63715d5f0db03eec592ada4e78050279222b9583fb20a52ef8a37c8e911b9805482167379291a9d692df95334b1a0b3b4ae6bc606782f8c1790557f86533f34a757e46c0721fbd7d349a6f1936fb78c3f41968b01245132d7a80c658054821673050c048c9a0cd0e76f166e2539f87ef2accec58f1790557fa292fc3a060596e7bbf9388db4399d71e37bb598ae8f7221306b31a84208ac728054821673a1ffc11eaa62d34c3b3272270aecf9d879773b321790557f891368e9fb55bce905a27799ff398f5706410e14205316f805cafda2a6c93be480548216738e0b7e6062272b5ef4524250bfff8e5bd34977571790557fb738e63d4f4906dfb172df67af9f36b70db9ec183d59b161eabe70a6ea8083e68054821673e572cef69f43c2e488b33924af04bdace19079cf1790557f319239e9c6ea28d449eae6ff18cd00242df63538dddb59444559ab635416b0c68054821673ffa4bb3a24b60c0262dbaad60d77a3c3fa6173e81790557f690bb39a0a5e54120bf07b6463b8fcd7bea90578d8ae77d1e573a88ddc40bfec80548216733886ba987236181d98f2401c507fb8bea7871df21790557fef188c9425e10b9ff1f1fb69b77afe1d1874b5bbe31bfcba2584fae894ee14478054821673f817b69ea583caff291e287cae00ea329d22765c1790557f6da98f1d47bb0bc5549e1497f71ab684f8d693b19b458fbccae05e126d246e908054821673d6aa3d25116d8da79ea0246c4826eb951872e02e1790557fc6521c8ea4247e8beb499344e591b9401fb2807ff9997dd598fd9e56c73a264d8054821673986b5e1e1755e3c2440e960477f25201b0a8bbd41790557fa934b07068f5d95a11413ed6d08a4a1122dc4b8c14a6ab2d94f8b279dac630428054821673ee9f2375b4bdf6387aa8265dd4fb8f16512a1d461790557fbfbb6e0ba78daf468733c76bad8771bca2c4b9e50f4caf63c623fea7eda8d6028054821673a20623070413d42a5c01db2c8111640dd7a5a03a1790557f69c5978d336f25ec042bca14912a5485eeb71dabfb9b8e5726ad13db570f76c2805482167399cd3337aa0da455845d7afe7781341fdae4d2ef1790557fe2f5263ab0aff2d245fbc15bf86f3654aada3c07fe237aa7b35d5a4307de57698054821673e5dc0a609ab8bcf15d3f35cfaa1ff40f521173ea1790557f828ac2cfae8391df6fe4c86c1beb4a85a14c88f651908f41682259723170b5dc80548216737c5d4f8345e66f68099581db340cd65b078c41f41790557f1ce7425dcaab438b3aa06773f467c327bc5dafb088bd4b5574d752d6ef71f7d78054821673aab2f6b45b28e962b3acd1ee4fc88aeddf55775617905573e41d2489571d322189246dafa5ebde1f4699f4989091527fd3bdcf34226f9e810a1afecc8561c82ca9d9fd3955869ad47d9842f2dba8fa1e8054909116732da4983a622a8498bb1a21fae9d8f6c66493996217905560805160601c610be86112036000398061034e52806103d252806104c3528061056f52806106085250610be86000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e9e56ef1161005b5780638e9e56ef146101fe578063ad5c464814610206578063d9da4fe61461020e578063e0af3616146102c957610088565b8063313ce5671461008d578063495e4348146100ab57806375aa41741461015357806388462c8d146101af575b600080fd5b6100956102d1565b6040805160ff9092168252519081900360200190f35b610141600480360360608110156100c157600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561010257600080fd5b82018360208201111561011457600080fd5b8035906020019184600183028401116401000000008311171561013657600080fd5b5090925090506102d6565b60408051918252519081900360200190f35b6101866004803603602081101561016957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610322565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101ea600480360360408110156101c557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661034a565b604080519115158252519081900360200190f35b6100956104b8565b6101866104c1565b6102b0600480360360a081101561022457600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561027157600080fd5b82018360208201111561028357600080fd5b803590602001918460018302840111640100000000831117156102a557600080fd5b5090925090506104e5565b6040805192835260208301919091528051918290030190f35b61018661078e565b601290565b60008060006102ea878760008089896104e5565b90925090506103178161030b84670de0b6b3a764000063ffffffff6107a616565b9063ffffffff61082016565b979650505050505050565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103d0575073ffffffffffffffffffffffffffffffffffffffff8082166000908152602081905260409020541615156104b2565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610454575073ffffffffffffffffffffffffffffffffffffffff8083166000908152602081905260409020541615156104b2565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260208190526040808220548584168352912054908216911681158015906104ad575073ffffffffffffffffffffffffffffffffffffffff811615155b925050505b92915050565b60015460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16141561056d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610b3c6029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614156106065773ffffffffffffffffffffffffffffffffffffffff8088166000908152602081905260408120549091166105f481610862565b60ff16600a0a94509250610783915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156106a05773ffffffffffffffffffffffffffffffffffffffff80891660009081526020819052604081205490911661068d81610862565b90945060ff16600a0a9250610783915050565b73ffffffffffffffffffffffffffffffffffffffff808916600090815260208190526040812054909116906106d482610862565b73ffffffffffffffffffffffffffffffffffffffff808c16600090815260208190526040812054939750919350919091169061070f82610862565b909550905060ff80841690821611156107525761074b61073b60ff83811690861663ffffffff6109c916565b8790600a0a63ffffffff6107a616565b955061077e565b61077b61076b60ff85811690841663ffffffff6109c916565b8690600a0a63ffffffff6107a616565b94505b505050505b965096945050505050565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6000826107b5575060006104b2565b828202828482816107c257fe5b0414610819576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610b656021913960400191505060405180910390fd5b9392505050565b600061081983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610a0b565b60008073ffffffffffffffffffffffffffffffffffffffff83166108e757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a2070726963652066656564206e6f7420666f756e640000000000604482015290519081900360640190fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561092f57600080fd5b505afa158015610943573d6000803e3d6000fd5b505050506040513d60a081101561095957600080fd5b506020015160015460ff1692509050600081136109c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610b86602d913960400191505060405180910390fd5b939092509050565b600061081983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610ac7565b60008183610ab1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a76578181015183820152602001610a5e565b50505050905090810190601f168015610aa35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610abd57fe5b0495945050505050565b60008184841115610b33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152835160248401528351909283926044909101919085019080838360008315610a76578181015183820152602001610a5e565b50505090039056fe4f535741503a2066726f6d20616e6420746f2061646472657373657320617265207468652073616d65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f535741505f4f7261636c65436861696e6c696e6b3a204e65676174697665206f72207a65726f207072696365a264697066735822122039346efde2b87c03e6ead462cdb46d7b3fab491025c03988000a85991b47c6e664736f6c634300060b0033"
}