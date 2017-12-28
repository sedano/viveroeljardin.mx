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
    "url": "apple-touch-icon.png",
    "revision": "b52ce9a64dd91033f289d2796c9831b1"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "4083f5d376eb849a458cc790b53ba080"
  },
  {
    "url": "assets/css/main.css",
    "revision": "66411354ab550d3d531f0a18e945a628"
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
    "url": "demo.html",
    "revision": "e09f2caf69c23a737d01a74de719ec7b"
  },
  {
    "url": "elements.html",
    "revision": "d65e4938af1682c1da6e9a5925d80cdd"
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
    "url": "gulpfile.js",
    "revision": "862667f2411d08754e720ad2129eaa88"
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
    "url": "images/slide00.jpg",
    "revision": "75e2f76d13953c851aff2bfea2e32688"
  },
  {
    "url": "images/slide01.jpg",
    "revision": "587e65660071c4e7390eeecdebda38f2"
  },
  {
    "url": "images/slide02.jpg",
    "revision": "851e2da36a08c700dad14c041984fb05"
  },
  {
    "url": "images/slide03.jpg",
    "revision": "5b534da6fec1ecbbdfc5c1b329c8f751"
  },
  {
    "url": "images/slide04.jpg",
    "revision": "f1655ae35f7aee807618f8545817fa8e"
  },
  {
    "url": "images/slide05.jpg",
    "revision": "e58ebc1a585b70c132d0d6ef4532f296"
  },
  {
    "url": "images/slide06.jpg",
    "revision": "b482d6ffcae99f53411fd4f4dde43a8f"
  },
  {
    "url": "index.html",
    "revision": "aaf2622ce1c9ba63439e857a77de69b6"
  },
  {
    "url": "logo.png",
    "revision": "453c403266dd7406e04151dc24fef9d5"
  },
  {
    "url": "manifest.json",
    "revision": "e25fd9752ce88dbde6ae7077a8c4318e"
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
