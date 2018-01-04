importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "android-chrome-192x192.png",
    "revision": "0c57d70cbd8bbb5728059c638b184664"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "f81753d0915521f897f45339522bffc0"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "6d6ea4e26444409207250bb2708687c9"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b52ce9a64dd91033f289d2796c9831b1"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "4083f5d376eb849a458cc790b53ba080"
  },
  {
    "url": "assets/css/main.css",
    "revision": "59793015af35c12cf47019b2f8c739e7"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "assets/fonts/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "895323ed2f7258af4fae2c738c8aea49"
  },
  {
    "url": "assets/js/jquery.scrollex.min.js",
    "revision": "f89065e3d988006af9791b44561d7c90"
  },
  {
    "url": "assets/js/jquery.scrolly.min.js",
    "revision": "3cb632af86e884723ff92a3b867ae9bb"
  },
  {
    "url": "assets/js/main.js",
    "revision": "65e08588bd32f0422d43bcbc4154af79"
  },
  {
    "url": "assets/js/skel.min.js",
    "revision": "63eae98d84a04c4ce52e92787d861838"
  },
  {
    "url": "assets/js/util.js",
    "revision": "fd2716a7b68ce7748c9676787b61db43"
  },
  {
    "url": "browserconfig.xml",
    "revision": "e4e40b0c82d228add33b5bcfe276a859"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "26729df41f38c1b9023dc737d658ef62"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b4d7a2add4655a89ea0b8e744e16f2b5"
  },
  {
    "url": "favicon.ico",
    "revision": "802437deb2e6c525f12e2c01b439d28a"
  },
  {
    "url": "gallery.html",
    "revision": "707e76d2c8b227fb86acba71875ec968"
  },
  {
    "url": "gulpfile.js",
    "revision": "7f79869c09a25532ffffe8a6e591ffac"
  },
  {
    "url": "images/ic_jardin.svg",
    "revision": "762b36e9216d15405edbb3f4ee8ba7a9"
  },
  {
    "url": "images/logo_jardin_opt.svg",
    "revision": "f8f9823e75bfcd7d16dd36e2aac7da4e"
  },
  {
    "url": "images/logo-big.png",
    "revision": "d4d7d682697c636f8cfd50f6d365c03d"
  },
  {
    "url": "images/logo-small.png",
    "revision": "32de16a57af6cf4037b3a19b9583f171"
  },
  {
    "url": "index.html",
    "revision": "fdd8edadc2bf3bc3c3c40b67afd62b36"
  },
  {
    "url": "logo.png",
    "revision": "453c403266dd7406e04151dc24fef9d5"
  },
  {
    "url": "manifest.json",
    "revision": "0f5017735a1cacd96b52e554f62a13cc"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "f016408de79517bdbd1b5e242427f6f3"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "90ceeeb2129f205dc8f2edf65776b666"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/.jpg$/, workboxSW.strategies.cacheFirst({
  "cacheName": "image-cache",
  "cacheExpiration": {
    "maxEntries": 20
  }
}), 'GET');
workboxSW.router.registerRoute(/fonts/, workboxSW.strategies.cacheFirst({
  "cacheName": "font-cache",
  "cacheExpiration": {
    "maxEntries": 5
  }
}), 'GET');
