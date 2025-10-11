self.__BUILD_MANIFEST = function(s, e, i, a, t, c, d, r, o, u, n, b, p, h, f, k, l, y, _, m, j) {
    return {
        __rewrites: {
            afterFiles: [{
                has: d,
                source: "/embed/:path*",
                destination: r
            }, {
                has: d,
                source: "/embed-podcast/:path*",
                destination: r
            }, {
                has: d,
                source: "/embed-legacy/:path*",
                destination: r
            }, {
                has: d,
                source: "/oembed",
                destination: "/api/oembed"
            }, {
                has: d,
                source: "/iframe-api/:version*",
                destination: "/api/iframe-api/:version*"
            }, {
                has: d,
                source: "/user/:userid/:type/:id*",
                destination: "/:type/:id*"
            }],
            beforeFiles: [{
                has: [{
                    type: u,
                    key: "uri",
                    value: "spotify:user:(?<userid>.*):(?<type>.*):(?<id>.*)"
                }],
                source: r,
                destination: b
            }, {
                has: [{
                    type: u,
                    key: "uri",
                    value: "spotify:(?<type>.*):(?<id>.*)"
                }],
                source: r,
                destination: b
            }, {
                has: [{
                    type: u,
                    key: n,
                    value: "(?<protocol>.*)://(?<domain>.*)/(?<type>.*)/(?<id>.*)"
                }],
                source: r,
                destination: b
            }],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: f,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: o,
            errorRate: 1e-4,
            numBits: o,
            numHashes: f,
            bitArray: []
        },
        "/": [s, "static/chunks/pages/index-9a610ef374b9bb99.js"],
        "/_error": ["static/chunks/pages/_error-354b49bac2b63552.js"],
        "/album/[id]": [e, i, s, a, t, c, p, "static/css/cedb4e23a71c3195.css", "static/chunks/pages/album/[id]-720f3a84df09c03a.js"],
        "/artist/[id]": [e, i, s, a, t, c, p, k, "static/chunks/pages/artist/[id]-026ac381b38f4a20.js"],
        "/episode/[id]": [e, i, s, a, t, c, l, y, "static/chunks/pages/episode/[id]-57dde2104c7b4283.js"],
        "/episode/[id]/video": [e, i, s, a, _, t, c, m, j, "static/chunks/pages/episode/[id]/video-ded3c2778530d9bb.js"],
        "/playlist/[id]": [e, i, s, a, t, c, p, k, "static/chunks/pages/playlist/[id]-0233b814aa23b045.js"],
        "/show/[id]": [e, i, s, a, t, c, l, y, "static/css/14065715fb0eddf9.css", "static/chunks/pages/show/[id]-9c870a0396ba798c.js"],
        "/show/[id]/video": [e, i, s, a, _, t, c, m, j, "static/chunks/pages/show/[id]/video-a49573e733dac79a.js"],
        "/track/[id]": [e, i, s, a, t, c, "static/css/d2deb5f295d40bcd.css", "static/chunks/pages/track/[id]-dff970c749a532e7.js"],
        sortedPages: ["/", "/_app", "/_error", "/album/[id]", "/artist/[id]", "/episode/[id]", "/episode/[id]/video", "/playlist/[id]", "/show/[id]", "/show/[id]/video", "/track/[id]"]
    }
}("static/chunks/2623-fdccac939fba2484.js", "static/chunks/4cb42384-041862b1e7a8cbcc.js", "static/chunks/956ba4ca-0c87f12d5cae4c6b.js", "static/chunks/2772-2786ea2315585f3e.js", "static/css/4e47b3d8ca042ef2.css", "static/chunks/1047-b1bf81ce1698e780.js", void 0, "/:path*", 0, "query", "uri", "/:type/:id", "static/chunks/3185-fc7ad672c1eb410d.js", 1e-4, NaN, "static/css/258cb2b596b543d2.css", "static/css/8efe45e0507acd64.css", "static/chunks/9524-3427874b1ceb9c15.js", "static/chunks/149-6992f31fba2c2fde.js", "static/css/bcb1800a3ba0072c.css", "static/chunks/510-db6802327e8f1dcf.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();