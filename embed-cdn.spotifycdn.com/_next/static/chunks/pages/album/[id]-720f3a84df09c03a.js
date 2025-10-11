try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b38f860a-0fbf-4dc6-bc48-8cdcd8541a3f", e._sentryDebugIdIdentifier = "sentry-dbid-b38f860a-0fbf-4dc6-bc48-8cdcd8541a3f")
    }()
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6321], {
        16234: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: () => G,
                default: () => z
            });
            var r = a(82536),
                n = a(1503),
                i = a(33779),
                s = a(72223),
                l = a(19670),
                d = a(3490),
                o = a(46001),
                u = a.n(o),
                c = a(93587),
                _ = a(28055),
                m = a(25882),
                b = a(14524),
                v = a(50506),
                g = a(66209),
                C = a(53328),
                h = a(38081),
                x = a(57310),
                f = a(14770),
                j = a(81987),
                w = a(84745),
                A = a(38139),
                y = a.n(A);
            let P = e => {
                let {
                    onClick: t
                } = e;
                return (0, n.jsx)(w.e, {
                    className: y().CoverArtAlbumPreRelease,
                    onClick: t
                })
            };
            var p = a(72146),
                R = a(70926),
                L = a(36262),
                k = a(40768),
                W = a(43769),
                N = a(8423),
                O = a(57661),
                M = a(2895),
                E = a(48080),
                S = a.n(E);
            let D = () => {
                (0, _.n)();
                let e = (0, c.d4)(e => e.machineState.initialized),
                    t = (0, c.d4)(e => e.machineState.playbackMode) === g.L.PREVIEW,
                    a = (0, c.d4)(e => {
                        var t;
                        return null == (t = e.data.entity) ? void 0 : t.trackList
                    }),
                    r = (0, c.d4)(e => {
                        var t;
                        return null == (t = e.data.entity) ? void 0 : t.visualIdentity
                    }),
                    i = (0, c.d4)(e => e.settings.isDarkMode) ? void 0 : (0, C.H)(r),
                    {
                        height: l,
                        width: d
                    } = s.useContext(m.k),
                    o = t && l && d && l >= b.ht.large && d >= b.OM.medium,
                    w = (0, c.d4)(e => {
                        var t;
                        return null == (t = e.data.entity) ? void 0 : t.uri
                    }),
                    A = (() => {
                        let {
                            width: e,
                            height: t
                        } = (0, s.useContext)(m.k), {
                            isCompactTracklistLegacy: a
                        } = (0, v.o)();
                        return (0, s.useMemo)(() => {
                            if (a || t && t < b.ht.large) return e && e <= b.OM.small ? 1 : e && e <= b.OM.medium ? 2 : 3;
                            if (t && t >= b.ht.large) {
                                if (e && e <= b.OM.small) return 2;
                                if (e && e <= b.OM.medium) return 3
                            }
                            return 4
                        }, [t, a, e])
                    })();
                return w ? (0, n.jsxs)("div", {
                    "data-testid": "embed-widget-container",
                    className: u()("encore-dark-theme", "encore-layout-themes", S().widgetContainer),
                    style: i,
                    children: [(0, n.jsxs)("div", {
                        "data-testid": "initialized-".concat(e),
                        className: S().trackListGridContainer,
                        children: [(0, n.jsx)("div", {
                            className: S().coverArtContainer,
                            children: (0, n.jsx)(P, {})
                        }), (0, n.jsx)("div", {
                            className: u()(S().spotifyLogoContainer, {
                                [S().isPreview]: t
                            }),
                            children: (0, n.jsx)(L.A, {
                                trackListLength: null == a ? void 0 : a.length
                            })
                        }), (0, n.jsx)("div", {
                            className: u()(S().metadataContainer, {
                                [S().isPreview]: t
                            }),
                            children: l && l >= b.ht.large ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(N.h, {
                                    variant: (() => {
                                        if (l && l > b.ht.large && d && d <= b.OM.small) return "titleSmall"
                                    })()
                                }), (0, n.jsxs)("span", {
                                    className: S().labelsAndSubtitle,
                                    children: [o && (0, n.jsx)(k.Y, {}), (0, n.jsx)(W.P, {})]
                                }), (0, n.jsxs)("div", {
                                    className: S().addToLibraryAndOverflowMenuContainer,
                                    children: [(0, n.jsx)(h.C, {
                                        uri: w
                                    }), (0, n.jsx)(p.G, {})]
                                })]
                            }) : (0, n.jsx)(f.h, {})
                        }), !o && (0, n.jsx)("div", {
                            className: u()(S().tagListContainer, {
                                [S().isPreview]: t
                            }),
                            children: (0, n.jsx)(k.Y, {})
                        }), (0, n.jsx)("div", {
                            className: u()(S().releasesOnDateContainer, {
                                [S().isPreview]: t
                            }),
                            children: (0, n.jsx)(R.U, {})
                        }), (0, n.jsxs)("div", {
                            className: S().countdownContainer,
                            children: [l && l < b.ht.large && (0, n.jsxs)("div", {
                                className: S().addToLibraryCompactAndOverflowMenuContainer,
                                children: [(0, n.jsx)(x.p, {}), (0, n.jsx)(p.G, {})]
                            }), (0, n.jsx)(j.G, {
                                visibleCells: A,
                                onCountDownEnds: () => {
                                    window.location.reload()
                                }
                            })]
                        })]
                    }), (0, n.jsx)(O.S, {
                        className: S().trackListContainer,
                        trackList: a,
                        isPreRelease: !0
                    }), (0, n.jsx)(M.a, {})]
                }) : null
            };
            var T = a(63185),
                I = a(9583),
                G = !0;
            let z = e => {
                var t;
                let a = (0, I._)(e) ? e.rtl : e.state.settings.rtl;
                if (s.useEffect(() => {
                        var e;
                        null == (e = document.querySelector("html")) || e.setAttribute("dir", a ? "rtl" : "ltr")
                    }, [a]), (0, I._)(e)) return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.mL, {
                        styles: b.E3
                    }), (0, n.jsx)(m.G, {
                        children: (0, n.jsx)(d.A, (0, r._)({}, e))
                    })]
                });
                let o = (null == (t = e.state.data.entity) ? void 0 : t.isPreRelease) && e.config.enablePreReleaseAlbum;
                return (0, n.jsx)(l.q, {
                    props: e,
                    children: o ? (0, n.jsx)(D, {}) : (0, n.jsx)(T.U, {})
                })
            }
        },
        38139: e => {
            e.exports = {
                CoverArtAlbumPreRelease: "CoverArtAlbumPreRelease_CoverArtAlbumPreRelease___z5oB"
            }
        },
        48080: e => {
            e.exports = {
                widgetContainer: "AlbumPreReleaseWidget_widgetContainer__7USZn",
                coverArtContainer: "AlbumPreReleaseWidget_coverArtContainer__BRsom",
                spotifyLogoContainer: "AlbumPreReleaseWidget_spotifyLogoContainer__z57qq",
                metadataContainer: "AlbumPreReleaseWidget_metadataContainer__WzdQi",
                title: "AlbumPreReleaseWidget_title__rSwRt",
                addToLibraryAndOverflowMenuContainer: "AlbumPreReleaseWidget_addToLibraryAndOverflowMenuContainer__h3M84",
                releasesOnDateContainer: "AlbumPreReleaseWidget_releasesOnDateContainer__Tqzxe",
                isPreview: "AlbumPreReleaseWidget_isPreview__dyhsp",
                countdownContainer: "AlbumPreReleaseWidget_countdownContainer__CIt2d",
                addToLibraryCompactAndOverflowMenuContainer: "AlbumPreReleaseWidget_addToLibraryCompactAndOverflowMenuContainer__I80J1",
                trackListGridContainer: "AlbumPreReleaseWidget_trackListGridContainer__c__hd",
                labelsAndSubtitle: "AlbumPreReleaseWidget_labelsAndSubtitle__Hs3GW",
                trackListContainer: "AlbumPreReleaseWidget_trackListContainer__iQsZW",
                tagListContainer: "AlbumPreReleaseWidget_tagListContainer__tEHHh"
            }
        },
        56025: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/album/[id]", function() {
                return a(16234)
            }])
        },
        70926: (e, t, a) => {
            "use strict";
            a.d(t, {
                U: () => _
            });
            var r = a(1503),
                n = a(9934),
                i = a(8179),
                s = a(86899),
                l = a(46001),
                d = a.n(l),
                o = a(93587),
                u = a(86982),
                c = a.n(u);
            let _ = e => {
                let {
                    shouldWrapText: t = !1
                } = e, a = (0, o.d4)(e => {
                    var t, a;
                    return null == (a = e.data.entity) || null == (t = a.releaseDate) ? void 0 : t.isoString
                }), l = (0, i.Ym)(), u = new Date(a || ""), _ = (0, i.kj)();
                return (0, r.jsxs)(n.E, {
                    variant: "marginal",
                    className: d()({
                        [c().newLineWrap]: t
                    }),
                    children: [(0, r.jsx)(n.E, {
                        variant: "marginal",
                        children: _("pre_release.releases_on", "Releases on {date}", "Release date of the entity", {
                            date: ""
                        })
                    }), (0, r.jsx)(s.gz, {
                        options: {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        },
                        locale: l,
                        date: u
                    })]
                })
            }
        },
        86982: e => {
            e.exports = {
                newLineWrap: "ReleasesOnDate_newLineWrap__qinhR"
            }
        }
    },
    e => {
        e.O(0, [4083, 1170, 2623, 2772, 1047, 3185, 636, 6593, 8792], () => e(e.s = 56025)), _N_E = e.O()
    }
]);