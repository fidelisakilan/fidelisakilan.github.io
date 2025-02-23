'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0c372c26ced1cdf114974dd22f0c17e6",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3",
"index.html": "e27bdd6a46085d4c971aaad42ef59bcd",
"/": "e27bdd6a46085d4c971aaad42ef59bcd",
"main.dart.js": "7f0ba6c9438742296168af47db9d5515",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "0260b27a4a5d21a6d0c59b9b8a1d9c3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "003269ac4e3cf7f7f1c9149748b4aef9",
".git/config": "14afef1c17afc829d234d09e7ad1e873",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6a/951bd727aba361d91d7e02b9c6edf64ef2f3b7": "3c618994d2c8b3409677b4e2e722ac52",
".git/objects/51/f10a95689aee58bc9b2c4e823d27e9c5a47ee7": "e3da79d56ef376701cebe353f8fd6bf3",
".git/objects/93/91f993b5faa4991ee00b4d6cc529058f25ad0c": "03347524626aa9f0b04a48d8366dad80",
".git/objects/0e/302b23b4e09d543e9104610dc0fef4e30372dd": "fc25717fa71d4b294cdb1ef733428764",
".git/objects/d9/384960d44c11ce586552ba34e77a1347cf6cd7": "d39c0860eb9bf7c83e9d0e69db59f6b9",
".git/objects/d9/6c13cca4384f7498ea0bca0da1be53863ca3bf": "2b903a14694cc95d34ef96c146c91d24",
".git/objects/d0/e1266d8b67e9bde46e1d8fecdaf45c6c0145dd": "0916c0f09e830c1bb8537c772e1c1e9f",
".git/objects/da/6ae738cc6d13727479525becce7e00541a086c": "0353b7e6894157294ea2b0e0f58a9b08",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/2555063695e28e0dea2770ba4b7aef0ab66d99": "7159e704a8fa484824a250f6dbb37f60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/1da14ed1e2023fe88ea22926611b9bea2f41ba": "0df0ecf1031590566b44f10c94ac4ab3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/2a717d2a41c3443b2d63d4fbd73342ae1c04cb": "adcc92e37dc3b340d9662b01167205d2",
".git/objects/fe/4535e96cd0a0564da71ee57ca66f56eda2fd94": "322c512f951d167480bbe407478eba1b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/e033b46bdedaffe4e2d51263da55f25669dcef": "0a2ad6c8f3eafd341132f822cc24fe0f",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/e10fb8766af212b7422f4f94d31bdd767d9ff1": "0fe0e42f93ce5e049caba5676d9c128f",
".git/objects/7d/3f2525bc360a1ea961d45c592c902ed1e88f29": "450fb3bd01eeab77d4fa259133c49db0",
".git/objects/42/8d3b5a005e7a31acdc2803f7d6376393c4e264": "b8de214e058c1fc1771d75edd1dfef07",
".git/objects/1f/561991a86610447c53706a4ed5df3d8315064f": "9fa8dc94b6783ed63303a04765421a16",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8a/9aa00cb9750c3f186d1520c67e420768ccd40a": "4c15e0c2ce1f71a3b8b78abf20dbfbfd",
".git/objects/7e/47243246df8e4f45e3b32e4e0f040faa013928": "ab81bd0b8cb9ce73f94797f5df0ba79f",
".git/objects/44/acddc6a17f6f38a8b3ff583cb6ea68fe9d32a5": "9e3e3615599bbcb22ac7d38da01835ea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/5920d1df3ca1471f8ff9d101de1bafc7f0ead9": "ac9073059eb5aea7276b5894ac1d0df2",
".git/objects/08/bf1e47f4127fa4b247cdbe9a9a78491cdfd056": "219353261367e1b5590ab7771da47a7e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/55/e1714207965b664d5789d60f24cd779df36d6a": "ac222539073e0e1e200e4455d2fca7c7",
".git/objects/97/ff6cab1e9b3ebe9a33f700ef3bef0320cbb2c8": "9178c93b9f47868cf989e29c0691aa3b",
".git/objects/97/d9e8581578d659ce72548287e5f2d1e8f1eaa5": "a249adb951add89be8c2d20ca6469dea",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/45cff99773fbbf5afc38b2e96c1149a36ff532": "94466a5a996827284ba20919cad0244d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/31e54dfa8e647766195204a5bd7faba35739b8": "3d3d819b96f3a0931f9458e3a58183ad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e1/9e4671748de8c69fae882cbb0d0cdbd434baff": "83feecde80c5c7e1a0ba42c743819030",
".git/objects/e6/08233ead59be910c48e41cce1998a773769b48": "376af2cd99fb8174fde8e6a902c44d29",
".git/objects/f0/a37e73c3809c97b4b2da174f778c1a6cd4bf4e": "3aa11c38c5ac2a57275de8f3e3b287ac",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/245d4e558a02a16d6a1a8f4983c372785662cc": "779ea6ae5ff6a030cc96f63ed6d5de4a",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/48/0ad8b68a197dcdbad9ec9c36b757469825f0d3": "d3f4c6900d8438a41b456ec4d4358154",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/13/cd0d3517f749951e81a06dc2e1feedf8a1a970": "9990c1d2a367bbfa745cd9f4ad2eb8ec",
".git/objects/13/381916ed7a1a74260b634e56b47b8094defbfd": "2e20b37a59629264c656c5ae7e9d8843",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b436b77f815de7c6a38de33431572f3",
".git/logs/refs/heads/main": "7b436b77f815de7c6a38de33431572f3",
".git/logs/refs/remotes/origin/main": "115608cc7a842208df51ca6c3445f6c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "544d7ddad2314d0c1bd8205dc3a6861d",
".git/refs/remotes/origin/main": "544d7ddad2314d0c1bd8205dc3a6861d",
".git/index": "24b183d4196daf9f3177bfd9bf9dd9d9",
".git/COMMIT_EDITMSG": "7a8a2233d31e9c0fdb58407c5d5d08c9",
"assets/AssetManifest.json": "efbe2aec9ebec128c883b20c234e495b",
"assets/NOTICES": "fe8a4947b5d1a115f40016b1b8d82288",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "b7f29ced0593c5140b4a1b73836358b5",
"assets/packages/mesh/shaders/omesh.frag": "242b80a0ff93acfab4745ef36f76f6f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5c034025faeee260c7a93e8d3c93cc36",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c95a603d24285356f2e2334ae8f539b9",
"assets/fonts/MaterialIcons-Regular.otf": "066eb6051da2641f9dbe35b373400908",
"assets/assets/pixelgo.webp": "117bd68a7fbfd66c7b1a9c76d32d1026",
"assets/assets/resume.pdf": "4f50bcdd845a53c075f07c7db439efe3",
"assets/assets/likekaro.webp": "fc7a22a6051f477d7a27e54dfcc0c8a3",
"assets/assets/wpf.jpg": "d11b4529ed0dd7f79872d381e14ae1f6",
"assets/assets/likekaro1.png": "86bd4ba0874c5fb605b8ae9d4d982fcd",
"assets/assets/likekaro2.png": "a56e6e21a56546501e328b7020f24e33",
"assets/assets/watchdog.jpg": "22cc14b5024684ca4479e9981ba23df1",
"assets/assets/scannergo.webp": "e583e664b175c2bb8f4020a528c5cd82",
"assets/assets/profile2.jpg": "62b9d32e20605c1fb182a9e20554d286",
"assets/assets/monkeytalk.png": "a5b3c4b2f2b9db7be482e6fe53d52ca2",
"assets/assets/profile1.jpg": "55de74817c8d1f85c230e6061d5800f8",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
