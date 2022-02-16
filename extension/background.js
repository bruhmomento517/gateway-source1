(function (S, x) {
    const a = o, p = o, B = o, w = o, L = o, d = S();
    while (!![]) {
      try {
        const K = parseInt(a("0x158")) / 1 + -parseInt(a("0x156")) / 2 * (parseInt(B("0x155")) / 3) + parseInt(a("0x157")) / 4 * (parseInt(L("0x152")) / 5) + -parseInt(B("0x15a")) / 6 + -parseInt(L("0x153")) / 7 + -parseInt(p("0x151")) / 8 + parseInt(w("0x154")) / 9 * (parseInt(w("0x159")) / 10);
        if (K === x) break; else d.push(d.shift());
      } catch (i) {
        d.push(d.shift());
      }
    }
  }(r, 623514));
  const h = {};
  h.urls = ["https://*.relics.ai/*", "https://wk-notary-prod.magiceden.io/*", "https://api-mainnet.magiceden.io/*", "https://gatekeeper-api.civic.com/*", "https://ssc-dao.genesysgo.net/*"], chrome.webRequest.onBeforeSendHeaders.addListener(function (d) {
    const K = {};
    K.dSUPK = function (j, s) {
      return j === s;
    }, K.aPfey = "access-control-allow-origin", K.MJfBq = "https://gatekeeper-api.civic.com/", K.ijxHd = "NJjen", K.nrtWN = "origin", K.yNIAU = "https://magiceden.io", K.HdbFH = "referer", K.ilMMc = "vMygE";
    const i = K;
    if (d.url.startsWith("https://wk-notary-prod.magiceden.io/") || d.url.startsWith("https://api-mainnet.magiceden.io/") || d.url.startsWith(i.MJfBq) || d.url.startsWith("https://ssc-dao.genesysgo.net/")) for (const j of d.requestHeaders) {
      if ("FxeWp" === i.ijxHd) E.value = "https://magiceden.io/"; else {
        if (i.dSUPK(j.name.toLowerCase(), i.nrtWN)) j.value = i.yNIAU; else {
          if (i.dSUPK(j.name.toLowerCase(), i.HdbFH)) {
            if (i.dSUPK("vMygE", i.ilMMc)) j.value = "https://magiceden.io/"; else {
              for (const V of i.responseHeaders) {
                i.dSUPK(V.name.toLowerCase(), i.aPfey) && (V.value = "*");
              }
              const m = {};
              return m.responseHeaders = K.responseHeaders, m;
            }
          }
        }
      }
    }
    const E = {};
    return E.requestHeaders = d.requestHeaders, E;
  }, h, ["requestHeaders", "blocking", "extraHeaders"]);
  const T = {};
  T.urls = ["https://wk-notary-prod.magiceden.io/*", "https://api-mainnet.magiceden.io/*", "https://gatekeeper-api.civic.com/*", "https://ssc-dao.genesysgo.net/*"], chrome.webRequest.onHeadersReceived.addListener(function (d) {
    const K = {};
    K.NblQg = function (j, s) {
      return j === s;
    }, K.gPTAm = "access-control-allow-origin";
    const i = K;
    for (const j of d.responseHeaders) {
      i.NblQg(j.name.toLowerCase(), i.gPTAm) && (j.value = "*");
    }
    const E = {};
    return E.responseHeaders = d.responseHeaders, E;
  }, T, ["blocking", "responseHeaders", "extraHeaders"]);
  function o(S, x) {
    const d = r();
    return o = function (K, i) {
      K = K - 337;
      let E = d[K];
      return E;
    }, o(S, x);
  }
  function r() {
    const u = ["19100sgwbnt", "370vgGSAV", "5350002DZUBXS", "6314008ljnCSr", "897590AUBjPu", "878276QUtppO", "603054NdQNoM", "210bYRXzl", "7084pFyCvb", "4xHtRDr"];
    r = function () {
      return u;
    };
    return r();
  }
  