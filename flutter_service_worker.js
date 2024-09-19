'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5076d9bd74629582109f18eb5e51445",
".git/config": "c669e6b99578986d1a1355d766bfe7e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e79d69d07a3856118222b3820b69a0d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3387b722ddb62f4af0af020c87f1c22",
".git/logs/refs/heads/main": "c0d62f3ba1ef77d8ee44d30263bd7b75",
".git/logs/refs/heads/master": "70f27e4638ba4c349ce690f8aad7528c",
".git/logs/refs/remotes/origin/main": "33bfdaed2f5156b36ee43f52c37c2fb1",
".git/objects/02/10a2642f2147629b08f93a6e6a24ddf0d7e1df": "d7848b329b02aa2fe2cfe126304f8fd1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/6ef0c7dc98ac51323c5964671fe569a317a4db": "ae686fe048148ad5715bb74a8fa932f3",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/971e05a4dfef1238f21a5388d5e574fa093ce3": "cc09bc522d50ba580947a23cee380c88",
".git/objects/0a/6f2a35b20a8fbb65ce4fd7b75859e12445d42a": "73a05807cbfc9cbfeddf30ca707a7838",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/9cbe16093f68fb6b6e4eb69ae4be20a5373240": "1ac9955dc83c33ac2ee4903e2d575309",
".git/objects/0e/220bd2d6ec71063654dc29be714aa8269094ba": "cad71e585aeee8dc21032dfe6abb315c",
".git/objects/11/13a23104bd44bb04e210849a7a818b5587d8c7": "0bfc8be2be11026ebab7823527ce1cc0",
".git/objects/11/8dd968d4a6b98a8c209b77b37cb164b7c68765": "761a9c0497c746fb027ca41c9849e98f",
".git/objects/13/703836ade29428f5bd3b6fa74f5957771908ed": "95ec19d239958e7058cd73b05100b95f",
".git/objects/18/c30a64ccf1e62b443937d486460a6706af03a1": "841b5b5fdb3cae832602ba09155c2eef",
".git/objects/1a/f1078dec2de16388e71647d2a2380ae7267c68": "abde1ecaab7b1f2f80cf37f326f519f4",
".git/objects/1c/6003d6378be684f6f986933f928e0dd3316bc4": "83c7e91aaa1fe78523cf78d924e9ec61",
".git/objects/1d/2919392fb8898ffc61380b477458d787c80add": "436a99326f93c4201da5e252194049a8",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/53151a6c7b684a0bb24a89c295200fcb274b39": "4c5aa6a847e0f84e6b5a50c065222719",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/628c4582606ead2508521c826fbd09cea854d0": "325233c07da46f07c3c872be2fe4dfa5",
".git/objects/22/a8ea486458df81f3a18cd5ce69f90f4c2e2c56": "b13019f2ce76f2a760093720c30aa349",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/804bc731d5fcf6866e49a28c69874037f702b4": "e0f86d4d4c689c70b2f8d99bc6bc0a05",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/30/214f7c44d2c67da34166716c028df06b8eda62": "79b14b8e3be280df46fd75d240fde482",
".git/objects/32/37854a4b8841191d98ee1b97a38954a5def0da": "7a9d87677118e35359e9c696f91c6de0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/e4860bde786b1790d955eee33c7a3801476462": "8467f453df5098717bb79487175fb5e8",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/4cbaa04ce068273cd35657e8a7ac4f45189a66": "8166907e3d13b425c55769b121d87e14",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/40/a8b9e12ac20f7e90c10c1dea8a70c382c6dff5": "90309177cec17e58994708792922a3c5",
".git/objects/43/0b579f76cfa32865451427316b87a1b1aeb8be": "c8334218293d607e3f984184edd76115",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/e8b38ad5ceed57dbb0ce5faa8f55cf1836735b": "ac280b39446c0f0143f3ca8d2fe863a5",
".git/objects/4a/4e72e80ccf33cd31082c4ac6b36c8d799d073d": "6001fb82fce00f2eb33238fc557228d4",
".git/objects/4a/ae1607be69115c9d1ff48ed21385f46084eba5": "7a5de67e6fdf406fd6b380475fe048b1",
".git/objects/4c/ccf2b0666f343c161794c4bbf3de2ba5d1e27c": "26de534a865009ec9edc620b49c3cdcb",
".git/objects/4f/ea262c395921e2850fa70266f91bc02fbadd31": "3e7ecb9ce4ff9e30fc8da08fe877a6a4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/3371fa55952f4a141acedb3c1ad93a418aca74": "1b110d6c628a95fee294059b7cacadc8",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/83a6b0e41255e712f6b753a0544c266790d393": "38b3fd8e94cf5e93ef0773c8a84a03d4",
".git/objects/5e/4fbe3ba9746ec07d65af7c50a41256a241e4f1": "48a68779e32fb108f1776159ee20e15d",
".git/objects/5f/7bd201f8244ab01a95bd1958ce0927f22a5dd9": "51f7d865d5ea788fc2b9c096da78d187",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/e929736621d511a3f849c227fe1d2272034c2d": "d627900728a552b2abe95796470dd1dc",
".git/objects/75/48687a48759f7164d969649e35cec6bfd0b602": "c6bf9765d87579ce91a5559de8f246fa",
".git/objects/75/dbeff0c7ed3e1c0ae6e2be420064c194a0e62c": "6146aad21b5bf714833a8b5ff62ef83d",
".git/objects/76/1be463ee894ba6978628a23c71c09a464681a5": "266b00945b9df1211736d53b901ea718",
".git/objects/79/484e42742c6afd2dafc00b24cc4061b97945c3": "e3bb98f013b7842bfed77d084f384162",
".git/objects/7a/a42a64b00c8d747629232c4943bbfebe8b32ad": "9d6e0082464079e72db445c170314afc",
".git/objects/7f/16cca58c1de4b05302d9a773d145d362b845c3": "b8ef58d82f40dbd7c7c98a97f65ca63a",
".git/objects/7f/73ef31397806fd726f0f266759072f1af3b2a5": "a4b9d0024dfeccddf4c8d15f2ba6799b",
".git/objects/80/38695bb08bb5e96486d01cf4d2c687c08cb2b7": "eed8ef4a8e37199023994fbf798845d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/3f0528d06e4352e44872c61e0008aa34404a91": "430af0e9e86981f749a809d76462afac",
".git/objects/92/c98d14a5c4da5cb63ff79409657f142f05ed2c": "c0de2f8d55f51653bed171a6be29303d",
".git/objects/95/af76ec843d2cdcc3f283a903d3cebb1fe6c434": "452484435100f890d8478d0545250696",
".git/objects/98/a45219a916ed3315407e539a195ecd554202f2": "ad49cdf2e5d82f8b8f7c616adda54d69",
".git/objects/9b/0aa775fe22386ffc6171058cbe4b5de2876fdf": "7e8035b1b8f3eee0a5190b1f63b7b1a4",
".git/objects/9c/c2d3e2261d46be3632227046415a8ed9ca248d": "c91c05185a6a6002322d802e6473ce7a",
".git/objects/a4/0ab3aeba72c248de0405eac24bdedba2bb53aa": "fd98f7b8141527fce05a644635dad63f",
".git/objects/a4/2bcf725b5b9a437abc5d37a6c9be211e9a8459": "7f328ed79d11124790a23796aae800e6",
".git/objects/a7/264c06ada505f56295b1ac5d3411d7fc8c1d84": "f4ab7260275377dff029aa784b42460a",
".git/objects/a7/e65b0e60606a5dab6455095c3d0042e96cebfb": "f59cc4521b215830af95854c22343ae3",
".git/objects/aa/e5e9abf716dbbd9ed412a94161c8f7006e131e": "35466b1eb52cd1e6490b9e76a3007103",
".git/objects/ac/4a71a5aa529e5a15923e5fb7082e86da0873f4": "0f14cb7ab2fd34c8fa7af5c098e6f86e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/3adeaddba70fdb3e73bc80f553582e889df3f9": "2f2a67cd0165f276bfc83f97cc968285",
".git/objects/b6/cda2cba296e89aee62d0c003aed573d1f28ae5": "ca40febd9185c6b4bab1310f66c190dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/67f8c8f487c51a4831aa38bc6ddcef53808bbd": "35a00cc530eea880749adbe16b9a4c24",
".git/objects/b8/80d961cf720e6a47c7ff3f72171a12e8c19a28": "71271ec7c0851d6e22af84d43feaacab",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4944744b15d2ef81cc57d740f9f6285dc9a2e1": "9b85de492da90ab0a323ba1b5d0a23f4",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/6c81e7f58371c8c16edd130bf4d365bb6d8444": "e6d2188e05be2951df6f571ee9dbba7c",
".git/objects/bf/d32ed87a2068f6995432656e5314f036a66f52": "bcde8551c479e0ca36bb4bfc192bc821",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/d8a19c44b4fbd3b72698dc629433aac8908e17": "67eafdf1859c0ef9dfe3d12a04ccbcf4",
".git/objects/c5/0b7e97689a5d29282da7e18d4d0c87ea6194a0": "f6d79ac719c9a705d061752eed25d3f6",
".git/objects/c5/9eddbaf5f2032f4368f6014367e1d5ad2e5997": "1bf8f397a1f63253cc048c51608c1e54",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cd/783b42064076a8342c0572cf4e4a25dbd7b353": "b7d15a31df29d412573dc83945a842cb",
".git/objects/d0/53dfdc27bf46bf3a34e499361457738b86a383": "f168038545fdf2bb889ee5938c23c903",
".git/objects/d0/69bb8ceba0ea5c35199c4bb41758a2e6288184": "28d4db48aa1447e048a856ee2f4ac444",
".git/objects/d1/4699cdfb7811be2137da8003bd2a95dd2598a7": "8c36f7488d25a5b5229beb5049bf51c6",
".git/objects/d2/6da585d9d24e044c96c182db435e2aeecda884": "766dc22c9177965f0604a7d65170a833",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/12601ce9004d3b255f70636a04be3ae774a06c": "113e40bfc2729c2cfe1fe3dadedda22c",
".git/objects/df/f9ca1814d2be5950491c39c7ecd8e514490e19": "f96daa9c11cd7c1fcb225b1cbd01eaf1",
".git/objects/e5/4acceb8e19d30a775ffdb47dfe4ae0f574feed": "518907e839483ebe54203dcc5ffd480b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/37e348b788bf25f99daee12f1120f7a203f07e": "cb975a913839f4539171e15afb3ff733",
".git/objects/ef/b2a3fde64f31a3f90e0a2c0e861bdfda441416": "df7df4394000bcb713c1bbfb631ffcbb",
".git/objects/f4/e9badb5473878c72a53690df38e7c4b033d2e0": "0f920ab0654271d6e516d414cc4a6cc5",
".git/objects/ff/b300529e42257e12a26b85e67cf8857cd30f1f": "f21912ce8ff5f249683d5d60154bd994",
".git/refs/heads/main": "60f2b2773fb69ccc1d4008d8bb1bc774",
".git/refs/heads/master": "60f2b2773fb69ccc1d4008d8bb1bc774",
".git/refs/remotes/origin/main": "60f2b2773fb69ccc1d4008d8bb1bc774",
"assets/AssetManifest.bin": "6d29ba000d9fe5f8a65a252c66a69d84",
"assets/AssetManifest.json": "5557e73b9a32036c16084ef9aeeef5bd",
"assets/assets/icons/add.svg": "0e89797f8cd078049acd3e7313be6e0d",
"assets/assets/icons/copy.svg": "6371d775b930b563a6c52f902e2a4758",
"assets/assets/icons/copyright.svg": "5035c37424c1384d70ff88165caf1dbf",
"assets/assets/icons/done.svg": "37b91043cc6e120f507369361730da70",
"assets/assets/icons/fb.svg": "599c44ed0e24b01b692b275ae4c10502",
"assets/assets/icons/homicon2.svg": "6c08c34feb25f4bbec95775a93a23cdd",
"assets/assets/icons/icon1.svg": "2318b5a6e3cde0199f85685b9113ee8e",
"assets/assets/icons/ig.svg": "5612451096dde6405b367a687e1d4fa6",
"assets/assets/icons/li.svg": "11bf2b374000c4a07e22527c44053857",
"assets/assets/icons/log.svg": "db4a1594022dd59c837d258c7147c317",
"assets/assets/icons/Logo.png": "ad3d692fe962896b955c2e875f590d1a",
"assets/assets/icons/logo2.png": "764022875e0163200949a846cca97661",
"assets/assets/icons/map_pin_out.svg": "3477362f96c535903f3d1298f0f50415",
"assets/assets/icons/pin_map.svg": "03e364be0d50e90d7fd1ee10dc7de83f",
"assets/assets/icons/point.svg": "153e4d5fb3fdde35d52ce9b1094eb5e3",
"assets/assets/icons/redstar.svg": "1b203fa2fef3281e6eafc9bec389ea8c",
"assets/assets/icons/sc.svg": "258a008fffc0222d72156c5596b2d184",
"assets/assets/icons/search.svg": "d086fa86ae3e13d9ebee9a21c155102f",
"assets/assets/icons/tt.svg": "0c116f12e89397d2afc19d1cddc36977",
"assets/assets/icons/tw.svg": "a017b438d4890911ec528eba74a57242",
"assets/assets/icons/wa.svg": "f972a615c1f34d750cf28b2ab9385002",
"assets/assets/icons/yu.svg": "3e161f4a7c8084b877de961d38058f4d",
"assets/assets/images/logo.png": "ad3d692fe962896b955c2e875f590d1a",
"assets/assets/images/markt_service.png": "87b3f53b484a4509ca7ae54c18afe664",
"assets/assets/images/soft_service.png": "ef2fe26d9f35117cf37735e5464121b7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5a92869bb7c3b34356c00fef3911ac17",
"assets/NOTICES": "fc0af70a9434a100970d0148f4373647",
"assets/packages/chat_composer/images/delete_icon.png": "caa15c135fdebfd5bfcd5f1e96268bf5",
"assets/packages/country_state_city_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_tap_payment/lib/src/assets/img/cloud_state.png": "e695e021561a6d9754f06038b4d6b1d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "26d97a37c33771a3f7e7f211367ae58a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b92768b85a28e5ec4778f515bad8689",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "61cf8c030fcd33cd1ab8b39d3fb91862",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "631bbefe2870054e14fd7aa32e84bef2",
"/": "631bbefe2870054e14fd7aa32e84bef2",
"main.dart.js": "7a830488bb2eb0200ff6e3f558ea07ad",
"manifest.json": "9cc4f414c25844c55e1f2fdfbfcfe83b",
"version.json": "1b55b8b618d079f4e5c5c7a9c9de0023"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
