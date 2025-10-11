try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "15c98401-39ac-40b1-9ec2-95ceea4874bc", e._sentryDebugIdIdentifier = "sentry-dbid-15c98401-39ac-40b1-9ec2-95ceea4874bc")
    }()
} catch (e) {}(() => {
    "use strict";
    var e = {},
        a = {};

    function t(r) {
        var d = a[r];
        if (void 0 !== d) return d.exports;
        var f = a[r] = {
                id: r,
                loaded: !1,
                exports: {}
            },
            c = !0;
        try {
            e[r].call(f.exports, f, f.exports, t), c = !1
        } finally {
            c && delete a[r]
        }
        return f.loaded = !0, f.exports
    }
    t.m = e, (() => {
        var e = [];
        t.O = (a, r, d, f) => {
            if (r) {
                f = f || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > f; c--) e[c] = e[c - 1];
                e[c] = [r, d, f];
                return
            }
            for (var b = 1 / 0, c = 0; c < e.length; c++) {
                for (var [r, d, f] = e[c], o = !0, n = 0; n < r.length; n++)(!1 & f || b >= f) && Object.keys(t.O).every(e => t.O[e](r[n])) ? r.splice(n--, 1) : (o = !1, f < b && (b = f));
                if (o) {
                    e.splice(c--, 1);
                    var i = d();
                    void 0 !== i && (a = i)
                }
            }
            return a
        }
    })(), t.n = e => {
        var a = e && e.__esModule ? () => e.default : () => e;
        return t.d(a, {
            a: a
        }), a
    }, (() => {
        var e, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(r, d) {
            if (1 & d && (r = this(r)), 8 & d || "object" == typeof r && r && (4 & d && r.__esModule || 16 & d && "function" == typeof r.then)) return r;
            var f = Object.create(null);
            t.r(f);
            var c = {};
            e = e || [null, a({}), a([]), a(a)];
            for (var b = 2 & d && r;
                "object" == typeof b && !~e.indexOf(b); b = a(b)) Object.getOwnPropertyNames(b).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, t.d(f, c), f
        }
    })(), t.d = (e, a) => {
        for (var r in a) t.o(a, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
        })
    }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce((a, r) => (t.f[r](e, a), a), [])), t.u = e => "static/chunks/" + (({
        4847: "spotify_player_o",
        5824: "spotify_player_h"
    })[e] || e) + "." + ({
        16: "30548a42d5609a44",
        94: "86575f47e0f22e39",
        103: "52e395d4544f33c6",
        464: "9f57e5c89351390e",
        528: "e41e9d9d897533ac",
        1056: "ab14cb1d2319ba3e",
        1138: "7123d637b8bbd1f8",
        1139: "088025717a0e608b",
        1499: "19b2dcda203302cc",
        1708: "b352a862b186eea7",
        1735: "ddbb0c6021a48b02",
        1927: "02adae116a7f54bf",
        2013: "102c679560af33f3",
        2340: "09081bec8610bd5b",
        2494: "905a4bd1307c76e8",
        2520: "d08c4437ccee4989",
        2579: "0fb25bdb8d3d718b",
        2618: "db65c9e37741f352",
        2746: "77682e1ddda18a97",
        2776: "db290e7925d5ae07",
        3014: "62a5170ea68bfa38",
        3156: "d14a5b7da96b762b",
        3161: "e49b197d4fe90cd6",
        3277: "bbafa6f62d5f8c83",
        3436: "b951315001f5c4fe",
        3507: "15838203a38aff82",
        3543: "1e5f87ddd338c68a",
        3555: "643d6dcbce3bf5a8",
        3768: "0c85009ac16e0765",
        3769: "0d0ce5eb4c9c4ba8",
        3997: "dcfba3576637e792",
        4028: "b78e6f829761846c",
        4094: "348a97ae0e78848c",
        4235: "080baabd6ae71128",
        4313: "bcb41bf7df9599bc",
        4319: "540c102ad2577f30",
        4326: "f1aac69547919f35",
        4438: "1e69bb462cb21de4",
        4607: "60d6f6857b3f9e7a",
        4668: "b0b59c86ca8b9cce",
        4734: "aa0de4334473365a",
        4768: "78e3d209b111bfa4",
        4769: "c558eb53ede9f41c",
        4808: "f8d4fd72b32dc5f0",
        4831: "cebeb8b73ab9ebb5",
        4847: "2a2279243f36d939",
        4894: "ebbfb9e1a499ceb7",
        5278: "0ca180b6a2baa1dc",
        5365: "a04eba163fadcb3d",
        5737: "f4949ff90142c277",
        5749: "9230e2aee2d6c65f",
        5824: "d45ca9dd23b5136b",
        5954: "ab1ba42c9ae71709",
        6140: "f3d74ba10a776d60",
        6234: "9fbc504573729ea9",
        6367: "66bb8fc64ab2290f",
        6395: "112905b3c7936d27",
        6542: "666c54f9e039f67e",
        6577: "8ecd2b48bbfbc9ce",
        6974: "73f8000f043de6e5",
        8032: "617e6599ac560c9f",
        8070: "1890392c0c989ac8",
        8174: "4089dee447f671af",
        8181: "51410e54977c6732",
        8404: "517672f713aad72c",
        8701: "4688458b38fe0c78",
        8811: "6147b3e6b4faa331",
        8942: "9940d14e4d86c4df",
        8949: "7952dada1f7d1910",
        8972: "8bb598900dde9b05",
        9190: "a5320d99d85bcec0",
        9323: "5ce7bf940a359ee6",
        9485: "7aa53623bb1875dc",
        9494: "324f54c0028ea40a",
        9658: "20ebe81c4a84bff8",
        9855: "6612d5d2001335ec",
        9870: "541245a11de3a0ee",
        9886: "4280aacbc3eb1992"
    })[e] + ".js", t.miniCssF = e => {}, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), (() => {
        var e = {},
            a = "_N_E:";
        t.l = (r, d, f, c) => {
            if (e[r]) return void e[r].push(d);
            if (void 0 !== f)
                for (var b, o, n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                    var l = n[i];
                    if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == a + f) {
                        b = l;
                        break
                    }
                }
            b || (o = !0, (b = document.createElement("script")).charset = "utf-8", b.timeout = 120, t.nc && b.setAttribute("nonce", t.nc), b.setAttribute("data-webpack", a + f), b.src = t.tu(r)), e[r] = [d];
            var u = (a, t) => {
                    b.onerror = b.onload = null, clearTimeout(s);
                    var d = e[r];
                    if (delete e[r], b.parentNode && b.parentNode.removeChild(b), d && d.forEach(e => e(t)), a) return a(t)
                },
                s = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: b
                }), 12e4);
            b.onerror = u.bind(null, b.onerror), b.onload = u.bind(null, b.onload), o && document.head.appendChild(b)
        }
    })(), t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        t.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
    })(), t.tu = e => t.tt().createScriptURL(e), t.p = "https://embed-cdn.spotifycdn.com/_next/", (() => {
        var e = {
            8068: 0
        };
        t.f.j = (a, r) => {
            var d = t.o(e, a) ? e[a] : void 0;
            if (0 !== d)
                if (d) r.push(d[2]);
                else if (8068 != a) {
                var f = new Promise((t, r) => d = e[a] = [t, r]);
                r.push(d[2] = f);
                var c = t.p + t.u(a),
                    b = Error();
                t.l(c, r => {
                    if (t.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                        var f = r && ("load" === r.type ? "missing" : r.type),
                            c = r && r.target && r.target.src;
                        b.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", b.name = "ChunkLoadError", b.type = f, b.request = c, d[1](b)
                    }
                }, "chunk-" + a, a)
            } else e[a] = 0
        }, t.O.j = a => 0 === e[a];
        var a = (a, r) => {
                var d, f, [c, b, o] = r,
                    n = 0;
                if (c.some(a => 0 !== e[a])) {
                    for (d in b) t.o(b, d) && (t.m[d] = b[d]);
                    if (o) var i = o(t)
                }
                for (a && a(r); n < c.length; n++) f = c[n], t.o(e, f) && e[f] && e[f][0](), e[f] = 0;
                return t.O(i)
            },
            r = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
    })(), t.nc = void 0
})();