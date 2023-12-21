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
    "revision": "88c20fabc85c113f74b2a8b6891c573d"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/DELETEUser.49af2bae.png",
    "revision": "49af2baefcaa84c8554e04bc720c9581"
  },
  {
    "url": "assets/img/GetUsers.d4519c8e.png",
    "revision": "d4519c8e26c6dbd5d45bbb7d398fe71a"
  },
  {
    "url": "assets/img/GETUsersId.09f8acda.png",
    "revision": "09f8acda3eea4eb59b986ac18ae02248"
  },
  {
    "url": "assets/img/NOmoreuserId45.c6aff530.png",
    "revision": "c6aff530550f81c8d230095bf9ae8990"
  },
  {
    "url": "assets/img/PATCHUser.479444d5.png",
    "revision": "479444d5e0eed12614eb334497ed4fff"
  },
  {
    "url": "assets/img/POSTUser.a61ed3b2.png",
    "revision": "a61ed3b287c3047266e60044355fd675"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ServerLaunch.fe93d449.png",
    "revision": "fe93d449b86583c32ca2bc64df2464c3"
  },
  {
    "url": "assets/js/10.af8aa30c.js",
    "revision": "3cd9f4b4e129e12798e9ddb6e9c630dc"
  },
  {
    "url": "assets/js/11.4853f4f4.js",
    "revision": "a7dbb40d5ace45bdf90e32ac98e9172c"
  },
  {
    "url": "assets/js/12.f2371c08.js",
    "revision": "fa65c64eaa031a18651a93cc55c4c9bc"
  },
  {
    "url": "assets/js/13.fb84e666.js",
    "revision": "6a54d0207e175f78521e75752883493f"
  },
  {
    "url": "assets/js/14.7eb66b78.js",
    "revision": "ae2b9aab184a0ea51f0f3d94c328c10b"
  },
  {
    "url": "assets/js/15.cc135c96.js",
    "revision": "9d220749e4111e8e6ca1577a56c25417"
  },
  {
    "url": "assets/js/16.51067cbe.js",
    "revision": "4e27ef24f1e4734a62fb542b50211fab"
  },
  {
    "url": "assets/js/17.9889227b.js",
    "revision": "7b9004e992f8229a37a4e82227b9e4de"
  },
  {
    "url": "assets/js/18.48b1987b.js",
    "revision": "43b2786a9ab8ca44c745739810b84c09"
  },
  {
    "url": "assets/js/19.22b5d461.js",
    "revision": "832f923dc97ec852b68832b05c79b8c3"
  },
  {
    "url": "assets/js/2.448af9c1.js",
    "revision": "1a64d55207817ac3ef015b182a651ade"
  },
  {
    "url": "assets/js/20.6df6abc8.js",
    "revision": "9b0870de857322390487d003edfb53ff"
  },
  {
    "url": "assets/js/21.2bb64187.js",
    "revision": "e19e57e0ae9bcd25ee3a467f57027600"
  },
  {
    "url": "assets/js/22.ca3b6f79.js",
    "revision": "99bc2853c5be662fd469d5faa37ce4af"
  },
  {
    "url": "assets/js/23.84d9ad28.js",
    "revision": "135c2a28b67cc85afbe0b645aba080f0"
  },
  {
    "url": "assets/js/24.1ba77202.js",
    "revision": "80be309cafc9307caf42040b07ddc325"
  },
  {
    "url": "assets/js/26.2b4a522c.js",
    "revision": "42ca6b7bb997e3a1ead8805f3febd51f"
  },
  {
    "url": "assets/js/3.ccd42190.js",
    "revision": "a84e3099f2d00ee23cb134724b21085f"
  },
  {
    "url": "assets/js/4.581953bc.js",
    "revision": "59d9ad36600bdbac4716cf4e072f42ef"
  },
  {
    "url": "assets/js/5.8a53ddc0.js",
    "revision": "1658087952a0bb3cf2c8c1b6edd63fc6"
  },
  {
    "url": "assets/js/6.2cb0df01.js",
    "revision": "e739bb1d078712c5a76bb6307fd1f5fc"
  },
  {
    "url": "assets/js/7.14aca18e.js",
    "revision": "b70d5f2acc283889ed3cb8de1ff1960c"
  },
  {
    "url": "assets/js/8.4e53214e.js",
    "revision": "86ba72ddc2955e7e8af7ff9dc733d897"
  },
  {
    "url": "assets/js/9.05871dd2.js",
    "revision": "898ee9a6ea535794b22d2d2992edcec6"
  },
  {
    "url": "assets/js/app.17b1d619.js",
    "revision": "54c150ecb273dabdd400574a5e9bf39f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d5aa88158752d201385aafd4101bbf3a"
  },
  {
    "url": "design/index.html",
    "revision": "dfc327cb2dc080e3337e38b397b13d87"
  },
  {
    "url": "index.html",
    "revision": "4666bdcce55eb3e12dd28f86801d20f8"
  },
  {
    "url": "intro/index.html",
    "revision": "d5832c44eb61d4f59189a237b8b4f53c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "2aa6d295c84bf2f7ded9e571d077b6b0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6a5da95cc331474947a1a1c6d6b80968"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4fe64849b43c12e2b959ebf5d3f735a4"
  },
  {
    "url": "software/index.html",
    "revision": "4e4d41f70c6239a9304367153a104c55"
  },
  {
    "url": "test/index.html",
    "revision": "f9d2260c141141d7fdad4e5013596c67"
  },
  {
    "url": "use cases/index.html",
    "revision": "8cba0218e7824a47bb5ddb07c139c1cf"
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
