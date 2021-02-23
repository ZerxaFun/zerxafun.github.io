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
    "revision": "e894b9282c1ad352dca1f98246c86aa8"
  },
  {
    "url": "archives/index.html",
    "revision": "4a1aa028eed59f30a1b7216f149ad233"
  },
  {
    "url": "assets/css/0.styles.c0a30dcd.css",
    "revision": "f280b533d4f8217aaf1eb1c92c7a849f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.24806eb5.js",
    "revision": "a72d51b41d97daaec43aafcd5bd7e042"
  },
  {
    "url": "assets/js/11.fd1d7ba7.js",
    "revision": "e0d110ceced03e2c2ecef4ff8eb879a8"
  },
  {
    "url": "assets/js/12.049022d1.js",
    "revision": "6b39059b0d10c5d2dd8d5f6083574ced"
  },
  {
    "url": "assets/js/13.e6dba9c7.js",
    "revision": "fd032f1676699c4be904b3bd6059c894"
  },
  {
    "url": "assets/js/14.fd20faba.js",
    "revision": "13ba1ed586799bb131960fd7097b6611"
  },
  {
    "url": "assets/js/15.6167e578.js",
    "revision": "880e0e763312fadd3d7d758f82fc00c3"
  },
  {
    "url": "assets/js/2.d1da3c2f.js",
    "revision": "d4068b029efd8ddf8e56a6000b898ee3"
  },
  {
    "url": "assets/js/3.028e5320.js",
    "revision": "bc36389243cf0533d2f2d23c78218ab0"
  },
  {
    "url": "assets/js/4.25788f2d.js",
    "revision": "835aade045a83de43fd3694984c20407"
  },
  {
    "url": "assets/js/5.743ffb0e.js",
    "revision": "b69da89da2bed19445a456cf0d29978a"
  },
  {
    "url": "assets/js/6.fc77b50d.js",
    "revision": "2dc4d7a06c364218f4058d44388b08b7"
  },
  {
    "url": "assets/js/7.a9ec9cf0.js",
    "revision": "3fd89ecb59fdbc0faf483d49eb622416"
  },
  {
    "url": "assets/js/8.420a0c43.js",
    "revision": "8650cdcec10ea51ae1f73e7a8b6e3e37"
  },
  {
    "url": "assets/js/9.790a24c4.js",
    "revision": "63e857aca1420bfea3f608a2a1d03cf2"
  },
  {
    "url": "assets/js/app.e0318423.js",
    "revision": "4ab678065c8fa1ad46ee06337763b2b4"
  },
  {
    "url": "categories/index.html",
    "revision": "b0c0447ef8046debde11df57a0555d01"
  },
  {
    "url": "docs/i18n/index.html",
    "revision": "8d2d766f7f1253d9dd80c68e2ee49e23"
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
    "revision": "444a2c477d5cc35d6c189542dda20b6a"
  },
  {
    "url": "tags/index.html",
    "revision": "b532888160914419ee80102f9f6c7956"
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
