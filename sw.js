if (!self.define) {
  let e,
    s = {};
  const i = (i, d) => (
    (i = new URL(i + ".js", d).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (d, r) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let n = {};
    const o = (e) => i(e, c),
      t = { module: { uri: c }, exports: n, require: o };
    s[c] = Promise.all(d.map((e) => t[e] || o(e))).then((e) => (r(...e), n));
  };
}
define(["./workbox-dff2ed72"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "assets/css/index.css",
          revision: "624117c67c1a7b8d6c4ad482d4a1ad68",
        },
        {
          url: "assets/js/dexie.js",
          revision: "d32f00e77d525bb751f3adba1ff31c8d",
        },
        {
          url: "assets/js/index.js",
          revision: "2c47d54faec1be5f8511acaf751e15de",
        },
        { url: "index.html", revision: "1f3946ed7f8938e6c00a3e6c84239006" },
        {
          url: "package-lock.json",
          revision: "57801f8db36ae156b4ef72dd6b8d5c43",
        },
        { url: "package.json", revision: "c77aafad88224692bcf353e5f3e7bef1" },
        { url: "README.md", revision: "313db07583ed603a9f3e29cc9352fbdc" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
