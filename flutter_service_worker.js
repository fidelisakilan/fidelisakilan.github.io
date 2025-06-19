'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8ec18314b22a69c6c1720c0656099af0",
"index.html": "e27bdd6a46085d4c971aaad42ef59bcd",
"/": "e27bdd6a46085d4c971aaad42ef59bcd",
"main.dart.js": "6b3202e04eed40b2cdb42e632e4a93f4",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3",
"assets/assets/likekaro.webp": "fc7a22a6051f477d7a27e54dfcc0c8a3",
"assets/assets/likekaro1.png": "86bd4ba0874c5fb605b8ae9d4d982fcd",
"assets/assets/likekaro2.png": "a56e6e21a56546501e328b7020f24e33",
"assets/assets/monkeytalk.png": "a5b3c4b2f2b9db7be482e6fe53d52ca2",
"assets/assets/pixelgo.webp": "117bd68a7fbfd66c7b1a9c76d32d1026",
"assets/assets/profile1.jpg": "55de74817c8d1f85c230e6061d5800f8",
"assets/assets/profile2.jpg": "62b9d32e20605c1fb182a9e20554d286",
"assets/assets/scannergo.webp": "e583e664b175c2bb8f4020a528c5cd82",
"assets/assets/watchdog.jpg": "22cc14b5024684ca4479e9981ba23df1",
"assets/assets/wpf.jpg": "d11b4529ed0dd7f79872d381e14ae1f6",
"assets/assets/Akilan_Resume.pdf": "690ae80fef0aa67e643c93efe36d7a18",
"assets/assets/chillbot.png": "2f73de94354b78f31bc0dcab4a8feaa9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5c034025faeee260c7a93e8d3c93cc36",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/mesh/shaders/omesh.frag": "242b80a0ff93acfab4745ef36f76f6f2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "3091079038326f51c1392a66134244f0",
"assets/packages/pdfrx/assets/pdfium_client.js": "c4b2439e5224d3fd6b34aaca97f8e8c6",
"assets/packages/pdfrx/assets/pdfium.wasm": "e45b1bd7c49fb3c1b265367302856ed6",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "41fb3ecb942e1e21bdda995fac05be9e",
"assets/AssetManifest.bin": "044771d3b9e08802a67cc4f6da922f65",
"assets/AssetManifest.bin.json": "fbb540df59687aa2ed3b612b3a3e8b7e",
"assets/NOTICES": "6bcfe900b7f3dd634a302daa9f302d1f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"favicon.png": "0260b27a4a5d21a6d0c59b9b8a1d9c3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "003269ac4e3cf7f7f1c9149748b4aef9",
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
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "5be68072a1f659e340b86eb63df918c8",
".git/refs/heads/main": "5be68072a1f659e340b86eb63df918c8",
".git/refs/remotes/origin/master": "5be68072a1f659e340b86eb63df918c8",
".git/refs/remotes/origin/main": "5be68072a1f659e340b86eb63df918c8",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/44/b69e183272619d845b75693203e77d788fef12": "2138d9992c6cceefe06d7558822a9298",
".git/objects/f1/52669d9dee1ad53296af579d5bd7cf33d6a76a": "781b1cccbe07363f7a9dd84c485eebc1",
".git/objects/4a/292538c8497c42a8cbc7e276a4156d6ac6a39d": "b4363c24a20262e14c048fe0cf4cb25f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "3bc8c4b5759649fbbdb957b7acf166d3",
".git/objects/32/e0253bbf8d048108c3315df014aff7fbba8e62": "d44a4d5a0a098bc6997d863b7a6dc898",
".git/objects/72/a667e12b0ba4e4a4bbba98834df4b97fe044aa": "564100af843a23d16ab412d70b5017c8",
".git/objects/72/c415b66e5243d7c575f9e33854a359c2c6858b": "5921b6555c1cfdd4b2c0e41693014f63",
".git/objects/d3/3fe5f21500ba3adb7923ba075a3dcc1cf407df": "228ea0c444e67e63deb239713a64d34a",
".git/objects/20/e033b46bdedaffe4e2d51263da55f25669dcef": "1a01187bf2e5c6f535a4be06c2e08413",
".git/objects/d9/6c13cca4384f7498ea0bca0da1be53863ca3bf": "b572e3a653b9b4171e683a5acea66360",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/d9/384960d44c11ce586552ba34e77a1347cf6cd7": "6ccd00614f5037e433d5780657dcdd3c",
".git/objects/97/d9e8581578d659ce72548287e5f2d1e8f1eaa5": "f153558b824e7596f1322986b19bbe21",
".git/objects/97/ff6cab1e9b3ebe9a33f700ef3bef0320cbb2c8": "af46a7cde71494e2f978dba6082d6267",
".git/objects/1f/d3d785d8ffb67c00c098fdcd3fd044fbd6c151": "e810f56c4d0ab19652ea973b7ece934b",
".git/objects/1f/561991a86610447c53706a4ed5df3d8315064f": "18c4419fbe15515e50c026bf090447aa",
".git/objects/42/8d3b5a005e7a31acdc2803f7d6376393c4e264": "a6d17127014d65e6362b413de2ea3e08",
".git/objects/42/f63e6b44fc9278f0e80d71f9797dc4e3f4e9f6": "6ea6f630c4a28e69beca8044350e69d2",
".git/objects/cf/2a717d2a41c3443b2d63d4fbd73342ae1c04cb": "a71fff3505735731fac5f00fed7c98c3",
".git/objects/11/e10fb8766af212b7422f4f94d31bdd767d9ff1": "a6d691ab867abe80ab4d94b1b949d655",
".git/objects/a8/31e54dfa8e647766195204a5bd7faba35739b8": "6b9faef1a25e6b22e0e65439d81e5003",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/7d/3f2525bc360a1ea961d45c592c902ed1e88f29": "16d2c6dc09a0b7279ed164d172d449b2",
".git/objects/fc/1da14ed1e2023fe88ea22926611b9bea2f41ba": "b77b3f42ae3526dfc956563b4653985f",
".git/objects/fc/123b9220196f7831e3804286680ed1ea4c13c1": "2693208faf35c43c44af51fc71f1228d",
".git/objects/29/942f8344adc68935218cb871f5eb7da513a4ae": "3b9221f3d03941ceff63c953eb4cd585",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/d0/e1266d8b67e9bde46e1d8fecdaf45c6c0145dd": "7fa7a389442dee5ee9349c9d18d20f5f",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "c822deb6800c2ad4f3c9d441d1d57d68",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "a3eff6d376014f4f2fc4a68f85a30273",
".git/objects/ce/245d4e558a02a16d6a1a8f4983c372785662cc": "779ea6ae5ff6a030cc96f63ed6d5de4a",
".git/objects/62/5920d1df3ca1471f8ff9d101de1bafc7f0ead9": "21e5851ffca2a06bdfd93344e80a62a5",
".git/objects/46/62f5a0dcac38af6999e473aaaef0785d2d6c22": "7f538112f4e086f690d1934c55888a33",
".git/objects/e8/32a9583a8f90a26df061158c91eee666d7c3cf": "b79acbd5d0649171bea082293078282d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/d6/df89c9fbf379f4ebf7e613fbc33d00d62f7df6": "4387e270926fc5bb26e258df8a9ed409",
".git/objects/63/073a1951b3642a43b02e4a1ba8e0837e838bba": "19aa910f4db4c55901aa3185929c2cd7",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "173e25d10f1050f98ecbdaed4f0c85ad",
".git/objects/da/8b30173fd3c2a881d5f6b742c7d49c873a43de": "be6af88394016c1f60971098fbe4b5da",
".git/objects/da/6ae738cc6d13727479525becce7e00541a086c": "0353b7e6894157294ea2b0e0f58a9b08",
".git/objects/9e/aa7394d05f63fc6c545249b301dc6973a30103": "41ebe1cb558feb4436aae84f3fb78523",
".git/objects/9e/cd458a757b007f826bbda2f70c337df4fee873": "ee3846a1d619af60f70cc488e91c5a76",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/13/cd0d3517f749951e81a06dc2e1feedf8a1a970": "6cfc7de44755476b8e53bb0d75e749b8",
".git/objects/13/381916ed7a1a74260b634e56b47b8094defbfd": "136c5af892e58b9a1361d58b07c3e3c9",
".git/objects/e1/9e4671748de8c69fae882cbb0d0cdbd434baff": "93d9a2351b0df4629b130fb8a1047ab8",
".git/objects/8d/7d425c5301017f16199ec3ffbdd63d2d4b0221": "60e35ff15fca07e9e3b9d111aaa06089",
".git/objects/e4/9bb7b2ed09dfc153b990e3a3588499beda2553": "f6f55c32c687952eb6a9d2175abd7f10",
".git/objects/2e/c88d8d88d4282ad1bb657c67fe1286834813da": "f4df62944ca95dc92e74e1b549ced070",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/69/3f47908ed05bf286a011269add4cf073018f5d": "d7daf1c909bdfcafca69c6aeaa4e6f08",
".git/index": "3d4af28646c42d43d6995b2c323e2505",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/logs/HEAD": "c0003e5dcffcc32cb8a988630dd6219d",
".git/logs/refs/heads/master": "820b458873a520070aa824ff9736afcd",
".git/logs/refs/heads/main": "bbad4f25bf486f3b9b9827c0b5700122",
".git/logs/refs/remotes/origin/master": "53753ab740c6fcba8dc978fc9120820a",
".git/logs/refs/remotes/origin/main": "cbdbbdaef6b8ec040b764fff9b2d16fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "eb47c6d0b47d5383372cb147f44f5a0c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
