/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ff5ffed98c04f81e509c2bb2e067d9e"
  },
  {
    "url": "archives/index.html",
    "revision": "8d843734b720e3ffb64e6414c7985861"
  },
  {
    "url": "assets/css/0.styles.92683bac.css",
    "revision": "80d5157f1e2901370d95f043167468a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96935dbd.js",
    "revision": "3d8328d89575f7bf0db146db46c92e4f"
  },
  {
    "url": "assets/js/11.1b400953.js",
    "revision": "515966cc0b2afb0ba3984d8df554b8dc"
  },
  {
    "url": "assets/js/12.c1f2780f.js",
    "revision": "cde3ca26c57a8afcd579709c45fcbd76"
  },
  {
    "url": "assets/js/2.2a7cab83.js",
    "revision": "97896d22afea5e9e524955fb7589e6d7"
  },
  {
    "url": "assets/js/3.a445d2eb.js",
    "revision": "cbbc60a23f1b85fd9d80e0555a12342f"
  },
  {
    "url": "assets/js/4.3b85e1a1.js",
    "revision": "65d5ced82aff93d154f659b1f43ce853"
  },
  {
    "url": "assets/js/5.3f96e539.js",
    "revision": "30873524a0c2a9a62073787d7ddf354f"
  },
  {
    "url": "assets/js/6.de46e018.js",
    "revision": "d4c3ad28cd0d744478707fab37a49455"
  },
  {
    "url": "assets/js/7.5af2606d.js",
    "revision": "c8e7ce1568e4661442c3e9451b5e3ffa"
  },
  {
    "url": "assets/js/8.19ffb163.js",
    "revision": "8e57c82e1e04eb4c8858aba8c0d619a2"
  },
  {
    "url": "assets/js/9.657d3d24.js",
    "revision": "377d8c0dcf4f4154aa27987fb036a237"
  },
  {
    "url": "assets/js/app.2088811a.js",
    "revision": "7946e506643c0b878e5c5ef2f4ee5aac"
  },
  {
    "url": "categories/index.html",
    "revision": "d8525e8b1daa73008c4a8d2aad4329a8"
  },
  {
    "url": "docs/i18n/index.html",
    "revision": "0deb8272c36169d7686439c007e483b5"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/EB-logo.png",
    "revision": "40d8019adec67cd669c35462f14a5599"
  },
  {
    "url": "img/git.png",
    "revision": "26caa7e6d6476cf41146237fea40df9d"
  },
  {
    "url": "img/more.png",
    "revision": "20bc993bdaa9538405f85ac5fcefdf1d"
  },
  {
    "url": "img/other.png",
    "revision": "cd4a5ecbd9cc330e7fdcb9bdc3e92796"
  },
  {
    "url": "img/panda-waving.png",
    "revision": "425e622d348abc7ea349245e7e8738c2"
  },
  {
    "url": "img/python.png",
    "revision": "fd961de471b586d9049547322f8b1744"
  },
  {
    "url": "img/ui.png",
    "revision": "1c26d51f2ef9a17b8b36f55cb04be642"
  },
  {
    "url": "img/web.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "index.html",
    "revision": "eaeea2f1e7f661ca123770dce24e76a5"
  },
  {
    "url": "tags/index.html",
    "revision": "7fd3a7aacaa2f3f75c122541bf1f1cbf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
