try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d6315bf9-bd11-4985-b289-bd61019a1327", e._sentryDebugIdIdentifier = "sentry-dbid-d6315bf9-bd11-4985-b289-bd61019a1327")
    }()
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1047], {
        1106: e => {
            e.exports = {
                circularContainer: "PreviewPlayButton_circularContainer__IPZte",
                circularInner: "PreviewPlayButton_circularInner___9inH",
                rangeBarRight: "PreviewPlayButton_rangeBarRight__7U2dx",
                rangeBarLeft: "PreviewPlayButton_rangeBarLeft__QqPAO",
                rangeBarProgress: "PreviewPlayButton_rangeBarProgress__m16Uz"
            }
        },
        1149: e => {
            e.exports = {
                getSpotifyButton: "UpsellButton_getSpotifyButton__9XE6r",
                buttonText: "UpsellButton_buttonText__L41pW"
            }
        },
        1477: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => a
            });
            var i = n(34061);
            let a = e => {
                var t, n, a, r, s, o, l, d;
                let u;
                if (!e) throw Error("Error: Entity Unavailable");
                let c = e.uri,
                    p = {};
                return (p.title = e.title, p.subtitle = e.subtitle, p.duration = null == (t = null != (r = e.duration) ? r : 0) ? void 0 : t.toString(), p.audioPreviewUrl = null != (s = null == (n = e.audioPreview) ? void 0 : n.url) ? s : void 0, p.videoPreviewUrl = null != (o = null == (a = e.videoPreview) ? void 0 : a.url) ? o : void 0, p.explicit = e.isExplicit ? "true" : "false", "relatedEntityUri" in e) ? (p.releaseDate = null == (l = e.releaseDate) ? void 0 : l.isoString, e.trackList && e.trackList.length > 0 && e.trackList.some(e => e.entityType === i.c.CHAPTER && e.isPlayable) && (u = [{
                    items: null == (d = e.trackList) ? void 0 : d.filter(e => e.isPlayable).map(e => ({
                        uid: e.uid,
                        type: function(e) {
                            return e === i.c.EPISODE ? i.c.EPISODE : e === i.c.TRACK ? i.c.TRACK : e === i.c.CHAPTER ? i.c.CHAPTER : i.c.UNKNOWN
                        }(e.entityType),
                        uri: e.uri,
                        provider: null
                    }))
                }])) : p.uid = e.uid, {
                    uri: c,
                    metadata: p,
                    pages: u
                }
            }
        },
        1538: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => f
            });
            var i = n(82536),
                a = n(93629),
                r = n(1503),
                s = n(79705),
                o = n(44214),
                l = n(56369),
                d = n(8179),
                u = n(72223),
                c = n(55594),
                p = n(22527),
                m = n(88976),
                _ = n(31629),
                v = n(25882),
                h = n(14524),
                y = n(1106),
                k = n.n(y);
            let f = () => {
                var e;
                let t = (0, d.kj)(),
                    [n, y] = (0, u.useState)({
                        left: 0,
                        right: 0,
                        animationState: 0
                    }),
                    [f, g] = (0, u.useState)(!0),
                    {
                        playbackState: b,
                        triggerPlaybackOperation: E
                    } = (0, u.useContext)(m.T),
                    T = null == b ? void 0 : b.duration,
                    w = null == b ? void 0 : b.positionAsOfTimestamp,
                    {
                        isEntityPlayable: x
                    } = (0, p.y)(),
                    S = null == b || null == (e = b.item) ? void 0 : e.uri,
                    N = (null == b ? void 0 : b.isDisabled) || !x,
                    C = (0, c.O)(),
                    A = !(null == b ? void 0 : b.hasContext) || (null == b ? void 0 : b.isPaused),
                    j = (0, u.useRef)(!0);
                j.current = n.right < 180;
                let {
                    height: P
                } = u.useContext(v.k);
                (0, u.useEffect)(() => {
                    P && g(P >= h.ht.large)
                }, [P]), (0, u.useEffect)(() => {
                    if (0 === w) {
                        j.current = !0, y(e => (0, a._)((0, i._)({}, e), {
                            left: 0,
                            right: 0,
                            animationState: 2
                        }));
                        return
                    }
                    if (T && w && w > 0) {
                        let e = 360 * w / T,
                            t = e > 180 ? 180 : e,
                            n = e > 180 ? e - 180 : 0,
                            r = j.current;
                        y(e => (0, a._)((0, i._)({}, e), {
                            left: 180 === t && r && 2 === e.animationState ? 0 : n,
                            right: t,
                            animationState: 0 === e.animationState ? 1 : e.animationState
                        }))
                    }
                }, [T, w]), (0, u.useEffect)(() => {
                    1 === n.animationState && y(e => (0, a._)((0, i._)({}, e), {
                        animationState: 2
                    }))
                }, [n.animationState]);
                let O = {
                        zIndex: 1,
                        transform: "rotate(".concat(n.right, "deg)"),
                        transition: 0 === n.right || 2 !== n.animationState ? "none" : "transform 1s ease-in-out"
                    },
                    L = {
                        zIndex: 2,
                        transform: "rotate(".concat(n.left, "deg)"),
                        transition: 0 === n.left || 2 !== n.animationState ? "none" : "transform 1s ease-in-out"
                    },
                    R = () => {
                        !N && (E((0, _.d5)()), C({
                            action_type: "click",
                            action_intent: (null == b ? void 0 : b.isPaused) === !1 ? "pause" : "play",
                            action_item_id: "now-playing-bar",
                            item_uri: S
                        }), x || C({
                            action_type: "playback",
                            action_intent: "track-not-available",
                            action_item_id: "now-playing-bar",
                            item_uri: S
                        }))
                    };
                return (0, r.jsx)("div", {
                    className: k().circularContainer,
                    "data-testid": "preview-play-pause",
                    children: A ? (0, r.jsx)(s.H, {
                        disabled: N,
                        "aria-label": t("embed_play", "Play", "Accessibility label for a button that plays preview of a track"),
                        "data-testid": "play-pause-button",
                        onClick: R,
                        semanticColor: "textBase",
                        condensedAll: !0,
                        children: (0, r.jsx)(o.x, {
                            semanticColor: "textBase",
                            size: f ? "xlarge" : "large"
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: k().rangeBarRight,
                            children: (0, r.jsx)("div", {
                                className: k().rangeBarProgress,
                                style: O,
                                "data-testid": "progress-right"
                            })
                        }), (0, r.jsx)("div", {
                            className: k().rangeBarLeft,
                            children: (0, r.jsx)("div", {
                                className: k().rangeBarProgress,
                                style: L,
                                "data-testid": "progress-left"
                            })
                        }), (0, r.jsx)("div", {
                            className: k().circularInner,
                            children: (0, r.jsx)(s.H, {
                                className: k().iconPlayingButton,
                                "aria-label": t("embed_pause", "Pause", "Accessibility label for a button that pauses preview of a track"),
                                "data-testid": "play-pause-button",
                                onClick: R,
                                semanticColor: "textBase",
                                condensedAll: !0,
                                children: (0, r.jsx)(l._, {
                                    size: f ? "large" : "medium"
                                })
                            })
                        })]
                    })
                })
            }
        },
        1756: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => k
            });
            var i = n(1503),
                a = n(99166),
                r = n(8179),
                s = n(46001),
                o = n.n(s),
                l = n(66164);
            n(72223);
            var d = n(93587),
                u = n(55594),
                c = n(98849),
                p = n(47734),
                m = n(66209),
                _ = n(25322),
                v = n(93782),
                h = n(67578),
                y = n.n(h);
            let k = e => {
                let {
                    visible: t,
                    showPolicies: n = !0,
                    onClose: s,
                    children: h
                } = e, k = (0, r.kj)(), f = (0, d.d4)(e => e.machineState.playbackMode), g = (0, d.d4)(e => e.settings.isVideoEmbed), b = (0, p.j)(), E = (0, u.O)(), T = () => {
                    null == s || s(), b((0, c.eL)()), E({
                        action_type: "click",
                        action_intent: "close-context-menu"
                    })
                };
                return (0, i.jsx)(i.Fragment, {
                    children: f !== m.L.UNKNOWN && (0, i.jsx)(l.FocusTrap, {
                        active: t,
                        focusTrapOptions: {
                            onDeactivate: T,
                            initialFocus: !1
                        },
                        children: (0, i.jsxs)("div", {
                            className: o()(y().wrapper, {
                                [y().visible]: t
                            }),
                            children: [(0, i.jsxs)("div", {
                                className: o()(y().menuContent, {
                                    [y().visible]: t
                                }),
                                children: [h, n && (0, i.jsxs)("div", {
                                    className: o()(y().policies, {
                                        [y().stickDown]: !g
                                    }),
                                    children: [(0, i.jsx)(a.Y, {
                                        className: y().link,
                                        href: "https://www.spotify.com/legal/privacy-policy/",
                                        target: "_blank",
                                        onClick: () => {
                                            E({
                                                action_type: "click",
                                                action_intent: "privacypolicy-show"
                                            })
                                        },
                                        semanticColor: "textSubdued",
                                        standalone: !0,
                                        children: k("spe.privacy_policy", "Privacy Policy", "Button`s text that opens privacy policy Spotify`s page")
                                    }), (0, i.jsx)(v.w, {
                                        className: y().separator
                                    }), (0, i.jsx)(a.Y, {
                                        className: y().link,
                                        href: "https://www.spotify.com/legal",
                                        target: "_blank",
                                        semanticColor: "textSubdued",
                                        onClick: () => {
                                            E({
                                                action_type: "click",
                                                action_intent: "termsandconditions-show"
                                            })
                                        },
                                        standalone: !0,
                                        children: k("spe.terms_and_conditions", "Terms & Conditions", "Button`s text that opens a terms and conditions Spotify`s page")
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: y().closeButton,
                                children: (0, i.jsx)(_.J, {
                                    handleClose: T
                                })
                            })]
                        })
                    })
                })
            }
        },
        2895: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => ed
            });
            var i = n(1503),
                a = n(46001),
                r = n.n(a),
                s = n(66164),
                o = n(72223),
                l = n(93587),
                d = n(37606),
                u = n(55594),
                c = n(25968),
                p = n(66209),
                m = n(88976),
                _ = n(77017),
                v = n(23847),
                h = n(9934),
                y = n(8179),
                k = n(25882),
                f = n(14524),
                g = n(50506),
                b = n(35312),
                E = n(10800),
                T = n(25322),
                w = n(81987),
                x = n(84745),
                S = n(17655),
                N = n(40768),
                C = n(43769),
                A = n(8423),
                j = n(55531),
                P = n.n(j);
            let O = () => (0, i.jsx)("div", {
                className: P().backgroundCoverArt
            });
            var L = n(19471),
                R = n(90270),
                I = n(6303),
                B = n(47734);
            let D = (e, t) => e < f.ht.landscape && t < f.OM.small || e < f.ht.large ? "small" : "medium";
            var M = n(28378),
                U = n(1149),
                F = n.n(U);
            let V = () => {
                    let e = (0, R.aG)({
                            productName: "embed_player_p"
                        }),
                        t = (0, y.kj)(),
                        {
                            width: n,
                            height: a
                        } = o.useContext(k.k),
                        r = (0, B.j)(),
                        s = async () => {
                            r((0, I.d)({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: "open-spotify"
                            })), (0, M.J)({
                                url: e.embeddedEntity
                            })
                        };
                    return (0, i.jsx)("div", {
                        className: F().getSpotifyButton,
                        children: (0, i.jsx)(L.$, {
                            size: D(a, n),
                            colorSet: "invertedLight",
                            onClick: s,
                            children: (0, i.jsx)(h.E, {
                                className: F().buttonText,
                                variant: "titleSmall",
                                children: t("embed.open-spotify", "Open Spotify", "A button the user can press to open the Spotify application")
                            })
                        })
                    })
                },
                W = () => {
                    let e = (0, l.d4)(e => e.settings.session.isAnonymous),
                        t = (0, l.d4)(e => e.settings.isMobile),
                        n = (0, R.aG)({
                            productName: "embed_player_p",
                            intent: R.pg.ADD_TO_LIBRARY
                        }),
                        a = (0, y.kj)(),
                        {
                            width: r,
                            height: s
                        } = o.useContext(k.k),
                        d = (0, B.j)(),
                        u = async () => {
                            e ? (d((0, I.d)({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: "pre-save"
                            })), (0, M.J)({
                                url: n.selectedEntity,
                                newWindow: !t
                            })) : d((0, I.d)({
                                action_type: "click",
                                action_intent: "pre-save-on-spotify"
                            }))
                        },
                        c = a("pre_release.button.pre_save", "Pre-save", "Pre-saves the entity to the user`s library");
                    return (0, i.jsx)("div", {
                        className: F().getSpotifyButton,
                        children: (0, i.jsx)(L.$, {
                            size: D(s, r),
                            colorSet: "invertedLight",
                            onClick: u,
                            children: (0, i.jsx)(h.E, {
                                className: F().buttonText,
                                variant: "titleSmall",
                                children: c
                            })
                        })
                    })
                };
            var G = n(21619),
                q = n.n(G),
                H = n(10377),
                Y = n.n(H);
            let K = e => {
                let {
                    showUpsell: t,
                    setShowUpsell: n,
                    onClose: a
                } = e, r = (0, y.kj)(), s = (0, o.useRef)(null), u = (0, l.d4)(e => e.data.entity), c = (null == u ? void 0 : u.isAudiobook) ? null == u ? void 0 : u.relatedEntityUri : null == u ? void 0 : u.uri, [p] = (0, b.A)(c || ""), m = !!p && !!c && p[c], _ = (() => {
                    let {
                        width: e,
                        height: t
                    } = (0, o.useContext)(k.k), {
                        isCompactLegacy: n
                    } = (0, g.o)();
                    return (0, o.useMemo)(() => n || t && t < f.ht.landscapeLegacy ? e && e <= f.OM.small ? 1 : e && e <= f.OM.medium ? 2 : 3 : t && t < f.ht.large || e && e <= f.OM.small ? 3 : 4, [n, t, e])
                })(), v = (0, E.M)(), j = m ? r("pre_release.upsell.listen_more", "Listen to more content like this in the Spotify app!", "Text displayed on pre-release upsell when the entity is already pre-saved") : r("pre_release.upsell.pre_save", "Pre-save and be the first to listen in the Spotify app!", "Text displayed on pre-release upsell encouraging users to pre-save the content");
                return (0, i.jsx)(d.A, {
                    nodeRef: s,
                    in: t,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 200,
                    classNames: {
                        enter: q().transition_enter,
                        enterActive: q().transition_enterActive,
                        exit: q().transition_exit,
                        exitActive: q().transition_exitActive
                    },
                    children: (0, i.jsxs)("div", {
                        ref: s,
                        className: Y().fullscreenWrapper,
                        children: [(0, i.jsxs)("div", {
                            className: Y().ctaWrapper,
                            children: [(0, i.jsx)(O, {}), (0, i.jsxs)("div", {
                                className: q().content,
                                children: [(0, i.jsx)("div", {
                                    className: q().countdownContainer,
                                    children: (0, i.jsx)(w.G, {
                                        visibleCells: _
                                    })
                                }), (0, i.jsx)("div", {
                                    className: q().messageContainer,
                                    children: (0, i.jsx)(h.E, {
                                        variant: "titleLarge",
                                        className: q().upsellMessage,
                                        semanticColor: "textBase",
                                        children: j
                                    })
                                }), (0, i.jsx)("div", {
                                    className: q().buttonContainer,
                                    children: m || !v ? (0, i.jsx)(V, {}) : (0, i.jsx)(W, {})
                                }), (0, i.jsx)("div", {
                                    className: q().closeButton,
                                    children: (0, i.jsx)(T.J, {
                                        handleClose: () => {
                                            a(), n(!1)
                                        }
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: Y().footerWrapper,
                            children: [(0, i.jsx)("div", {
                                className: Y().coverArtWrapper,
                                children: (0, i.jsx)(x.e, {
                                    className: Y().coverArtUpsell
                                })
                            }), (0, i.jsxs)("div", {
                                className: Y().metadataWrapper,
                                children: [(0, i.jsx)(A.h, {}), (0, i.jsxs)("span", {
                                    className: Y().labelsAndSubtitle,
                                    children: [(0, i.jsx)(N.Y, {}), (0, i.jsx)(C.P, {})]
                                })]
                            }), (0, i.jsx)("div", {
                                className: Y().playerControlsWrapper,
                                children: (0, i.jsx)(S.l, {})
                            })]
                        })]
                    })
                })
            };
            var Q = n(72146),
                z = n(49371),
                X = n(34090),
                J = n.n(X);
            let Z = () => (0, i.jsxs)("div", {
                    className: J().playerControlsWrapper,
                    children: [(0, i.jsx)("div", {
                        className: J().overflowMenuButtonWrapper,
                        children: (0, i.jsx)(Q.G, {})
                    }), (0, i.jsx)("div", {
                        className: J().previewPlayPauseWrapper,
                        children: (0, i.jsx)(z.D, {})
                    })]
                }),
                $ = () => {
                    let e = (0, R.aG)({
                            productName: "embed_player_p"
                        }),
                        t = (0, y.kj)(),
                        {
                            width: n,
                            height: a
                        } = o.useContext(k.k),
                        r = (0, u.O)(),
                        s = async () => {
                            r({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: "get-spotify"
                            }), (0, M.J)({
                                url: e.embeddedEntity
                            })
                        };
                    return (0, i.jsx)("div", {
                        className: F().getSpotifyButton,
                        children: (0, i.jsx)(L.$, {
                            size: D(a, n),
                            colorSet: "invertedLight",
                            onClick: s,
                            children: (0, i.jsx)(h.E, {
                                className: F().buttonText,
                                variant: "titleSmall",
                                children: t("get_spotify", "Get Spotify", "A button the user can press to download / get the Spotify application")
                            })
                        })
                    })
                },
                ee = () => {
                    let e = (0, R.aG)({
                            productName: "embed_player_p"
                        }),
                        t = (0, l.d4)(e => e.settings.isMobile),
                        n = (0, y.kj)(),
                        {
                            width: a,
                            height: r
                        } = o.useContext(k.k),
                        s = (0, u.O)();
                    return (0, i.jsx)("div", {
                        className: F().getSpotifyButton,
                        children: (0, i.jsx)(L.$, {
                            size: D(r, a),
                            colorSet: "invertedLight",
                            onClick: () => {
                                s({
                                    action_type: "click",
                                    action_intent: "deeplink",
                                    action_item_id: "buy-this-audiobook"
                                }), (0, M.J)({
                                    url: t ? (e => {
                                        try {
                                            let t = new URL(e);
                                            return t.searchParams.set("nd", "1"), t.pathname = t.pathname.startsWith("/__noul__") ? t.pathname : "__noul__".concat(t.pathname), t.toString()
                                        } catch (e) {
                                            throw Error("Invalid URL")
                                        }
                                    })(e.embeddedEntity) : e.embeddedEntity
                                })
                            },
                            children: (0, i.jsx)(h.E, {
                                className: F().buttonText,
                                variant: "titleSmall",
                                children: n("audiobook.embed.get-this-audiobook", "Get this audiobook", "An upsell button that a user can click to redirect them to the Spotify App and buy the book")
                            })
                        })
                    })
                };
            var et = n(84693);
            let en = () => {
                let e = (0, l.d4)(e => e.data.entity),
                    t = (0, l.d4)(e => e.settings.session.isAnonymous),
                    n = (0, R.aG)({
                        productName: "embed_player_p"
                    }),
                    a = (0, y.kj)(),
                    {
                        width: r,
                        height: s
                    } = o.useContext(k.k),
                    d = (0, u.O)(),
                    [c, p] = (0, b.A)(e.relatedEntityUri),
                    m = async () => {
                        t ? (d({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "follow"
                        }), (0, M.J)({
                            url: n.compositeEntity
                        })) : (d({
                            action_type: "click",
                            action_intent: (null == c ? void 0 : c[e.relatedEntityUri]) ? "unfollow" : "follow"
                        }), await p(!(null == c ? void 0 : c[e.relatedEntityUri])))
                    };
                return (0, i.jsx)("div", {
                    className: F().getSpotifyButton,
                    children: (0, i.jsx)(L.$, {
                        size: D(s, r),
                        colorSet: "invertedLight",
                        onClick: m,
                        children: (0, i.jsx)(h.E, {
                            className: F().buttonText,
                            variant: "titleSmall",
                            children: (e.type === et.NQG.EPISODE || e.type === et.NQG.SHOW) && (null == c ? void 0 : c[e.relatedEntityUri]) ? a("following", "Following", "Button`s text that adds an item to the user`s library") : a("follow", "Follow", "Button`s text that removes an item to the user`s library")
                        })
                    })
                })
            };
            var ei = n(63665),
                ea = n.n(ei);
            let er = () => {
                    let e = (0, y.kj)(),
                        t = (0, l.d4)(e => e.data.entity.type),
                        n = (0, l.d4)(t => {
                            var n;
                            return (null == (n = t.data.entity) ? void 0 : n.subtitle) || e("spe.upsell_cta", "Discover even more podcasts on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.")
                        }),
                        a = (0, l.d4)(e => e.data.entity.isAudiobook || !1),
                        s = (0, l.d4)(e => e.machineState.playbackMode) === p.L.PREVIEW,
                        o = (0, l.d4)(v.BT);
                    return (0, i.jsx)(h.E, {
                        variant: "titleLarge",
                        className: r()(ea().text),
                        id: "dialogUpsellTitle",
                        semanticColor: "textBase",
                        children: ((e, t, n, i, a, r) => {
                            switch (e) {
                                case et.NQG.EPISODE:
                                case et.NQG.SHOW:
                                    if (n) return t("audiobook.embed.upsell_cta", "Hooked? Take this audiobook everywhere you go, on Spotify", "Text displayed on an upsell menu after a user has listened to 60 seconds of an audiobook sample.");
                                    if (i && !a) return t("spe.podcast_full_upsell_cta", "Discover even more from {podcastName}", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.", {
                                        podcastName: r
                                    });
                                    return t("spe.upsell_cta", "Discover even more podcasts on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.");
                                case et.NQG.TRACK:
                                    return t("spe.track_upsell_cta", "Listen to the full track and millions more on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec track preview.");
                                case et.NQG.PLAYLIST:
                                default:
                                    return t("spe.track_list_upsell", "Listen to these tracks & millions more on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec of track list preview.")
                            }
                        })(t, e, a, o, s, n)
                    })
                },
                es = e => {
                    let {
                        showUpsell: t,
                        setShowUpsell: n,
                        onClose: a
                    } = e, s = (0, l.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return null == (t = n.entity) ? void 0 : t.isAudiobook
                    }), u = (0, l.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }) === p.L.PREVIEW, c = (0, l.d4)(v.BT), m = (0, l.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return !!(null == (t = n.entity) ? void 0 : t.trackList)
                    }), _ = (0, o.useRef)(null);
                    return (0, i.jsx)(d.A, {
                        nodeRef: _,
                        in: t,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        timeout: 200,
                        classNames: {
                            enter: Y().transition_enter,
                            enterActive: Y().transition_enterActive,
                            exit: Y().transition_exit,
                            exitActive: Y().transition_exitActive
                        },
                        children: (0, i.jsxs)("div", {
                            ref: _,
                            className: r()(Y().fullscreenWrapper, {
                                [Y().playlistContainer]: m
                            }),
                            children: [(0, i.jsxs)("div", {
                                className: Y().ctaWrapper,
                                children: [(0, i.jsx)(O, {}), (0, i.jsxs)("div", {
                                    className: Y().content,
                                    children: [(0, i.jsx)(er, {}), s ? (0, i.jsx)(ee, {}) : c && !u ? (0, i.jsx)(en, {}) : (0, i.jsx)($, {}), (0, i.jsx)("div", {
                                        className: Y().closeButton,
                                        children: (0, i.jsx)(T.J, {
                                            handleClose: () => {
                                                a(), n(!1)
                                            }
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: Y().footerWrapper,
                                children: [(0, i.jsx)("div", {
                                    className: Y().coverArtWrapper,
                                    children: (0, i.jsx)(x.e, {
                                        className: Y().coverArtUpsell
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: Y().metadataWrapper,
                                    children: [(0, i.jsx)(A.h, {}), (0, i.jsxs)("span", {
                                        className: Y().labelsAndSubtitle,
                                        children: [(0, i.jsx)(N.Y, {}), (0, i.jsx)(C.P, {})]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: Y().playerControlsWrapper,
                                    children: u && !s ? (0, i.jsx)(S.l, {}) : (0, i.jsx)(Z, {})
                                })]
                            })]
                        })
                    })
                };
            var eo = n(20965),
                el = n.n(eo);
            let ed = () => {
                let e = (0, l.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }),
                    t = (0, l.d4)(e => {
                        let {
                            data: t
                        } = e;
                        return t.entity
                    }),
                    n = !!(null == t ? void 0 : t.isPreRelease),
                    {
                        showUpsell: a,
                        setShowUpsell: h
                    } = (() => {
                        let e = (0, l.d4)(e => {
                                let {
                                    machineState: t
                                } = e;
                                return t.playbackMode
                            }) === p.L.PREVIEW,
                            {
                                playbackState: t
                            } = (0, o.useContext)(m.T),
                            n = (0, _.s)(t),
                            i = null == t ? void 0 : t.isPaused,
                            a = null == t ? void 0 : t.duration,
                            r = null == t ? void 0 : t.hasContext,
                            s = (0, l.d4)(e => {
                                let {
                                    machineState: t
                                } = e;
                                return t.currentPreviewTrackIndex
                            }),
                            d = (0, l.d4)(e => {
                                var t;
                                let {
                                    data: n
                                } = e;
                                return !!(null == (t = n.entity) ? void 0 : t.isAudiobook)
                            }),
                            u = (0, l.d4)(v.BT),
                            h = (0, c.c)(),
                            [y, k] = (0, o.useState)(!1),
                            [f, g] = (0, o.useState)(!1),
                            [b, E] = (0, o.useState)(s + 1),
                            {
                                skipCount: T,
                                incrementSkipCounter: w,
                                resetSkipCounter: x
                            } = (() => {
                                let [e, t] = (0, o.useState)(0);
                                return {
                                    skipCount: e,
                                    incrementSkipCounter: (0, o.useCallback)(() => {
                                        t(e + 1)
                                    }, [e]),
                                    resetSkipCounter: (0, o.useCallback)(() => {
                                        t(0)
                                    }, [])
                                }
                            })();
                        return (0, o.useEffect)(() => {
                            (s === b || s === b - 2) && (E(() => b + 1), w()), E(() => s + 1)
                        }, [s, w, b]), (0, o.useEffect)(() => {
                            d && a && (r && null !== n && (n > 6e4 && T < 1 && (k(!0), w()), n > 0 && i && k(!0)), n === a && (k(!0), x())), r && null !== n && a && (e ? (n > 2 * a / 3 || n > 0 && i || 3 === T) && f !== h && (g(h), k(!0), x()) : u && (n > a / 2 || n > 0 && i) && f !== h && (g(h), k(!0)))
                        }, [n, a, e, i, h, r, f, T, x, d, w, u]), {
                            showUpsell: y,
                            setShowUpsell: k
                        }
                    })(),
                    y = (0, u.O)(),
                    k = () => {
                        h(!1), y({
                            action_type: "click",
                            action_intent: "close-upsell"
                        })
                    };
                (0, o.useEffect)(() => {
                    a && y({
                        action_intent: "open-upsell",
                        action_type: "view"
                    })
                }, [y, a]);
                let f = (0, o.useRef)(null);
                return e === p.L.UNKNOWN ? null : (0, i.jsx)(d.A, {
                    nodeRef: f,
                    in: a,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 200,
                    classNames: {
                        enter: el().transition_enter,
                        enterActive: el().transition_enterActive,
                        exit: el().transition_exit,
                        exitActive: el().transition_exitActive
                    },
                    children: (0, i.jsx)(s.FocusTrap, {
                        focusTrapOptions: {
                            initialFocus: !1,
                            onDeactivate: k,
                            checkCanFocusTrap: () => new Promise(e => {
                                f && Promise.resolve(e)
                            })
                        },
                        children: (0, i.jsx)("div", {
                            ref: f,
                            role: "dialog",
                            "aria-labelledby": "dialogUpsellTitle",
                            className: r()(el().upsellContentContainer, "encore-layout-themes"),
                            children: n ? (0, i.jsx)(K, {
                                showUpsell: !0,
                                setShowUpsell: h,
                                onClose: k
                            }) : (0, i.jsx)(es, {
                                showUpsell: !0,
                                setShowUpsell: h,
                                onClose: k
                            })
                        })
                    })
                })
            }
        },
        3490: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n(1503),
                a = n(24812),
                r = n(72223),
                s = n(25882),
                o = n(4898),
                l = n.n(o);
            let d = e => {
                let {
                    title: t,
                    description: n,
                    links: o
                } = e, [d, u] = (0, r.useState)("large"), {
                    height: c
                } = (0, r.useContext)(s.k);
                return (0, r.useEffect)(() => {
                    c && u(c > 550 ? "xxlarge" : "medium")
                }, [c]), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: l().wrapper,
                        children: [(0, i.jsx)("div", {
                            className: l().icon,
                            children: (0, i.jsx)(a.D, {
                                size: d
                            })
                        }), (0, i.jsxs)("div", {
                            className: l().content,
                            children: [(0, i.jsx)("h1", {
                                className: l().title,
                                children: t
                            }), (0, i.jsx)("p", {
                                className: l().description,
                                children: n
                            }), (0, i.jsx)("div", {
                                className: l().links,
                                children: (e => {
                                    let t = e.map(e => (0, i.jsx)("a", {
                                        target: "_blank",
                                        href: e.href,
                                        className: e.isPrimaryStyle ? l().primary : l().secondary,
                                        children: e.title
                                    }, e.href));
                                    return (0, i.jsx)(i.Fragment, {
                                        children: t.map(e => e)
                                    })
                                })(o)
                            })]
                        })]
                    })
                })
            }
        },
        4898: e => {
            e.exports = {
                wrapper: "Error_wrapper__rnmqo",
                content: "Error_content__DLtLW",
                title: "Error_title__Itx4f",
                description: "Error_description__wJgFt",
                links: "Error_links__xYnxY",
                primary: "Error_primary__1qg4H",
                icon: "Error_icon__7F4I4",
                secondary: "Error_secondary__pz9N0"
            }
        },
        6303: (e, t, n) => {
            "use strict";

            function i(e) {
                return {
                    type: "LOG_INTERACTION",
                    interactionData: e
                }
            }
            n.d(t, {
                d: () => i
            })
        },
        6309: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => k
            });
            var i = n(82536),
                a = n(93629),
                r = n(1503),
                s = n(79705),
                o = n(19471),
                l = n(9934),
                d = n(46001),
                u = n.n(d),
                c = n(72223),
                p = n(93587),
                m = n(50506),
                _ = n(25882),
                v = n(14524),
                h = n(32313),
                y = n.n(h);
            let k = e => {
                let {
                    variant: t = "bodyMedium",
                    icon: n,
                    disabled: d = !1,
                    className: h,
                    href: k,
                    children: f,
                    title: g,
                    ariaLabel: b,
                    clickedAnimation: E = !1,
                    testId: T,
                    onClick: w
                } = e, {
                    isCompactLegacy: x,
                    isCompactTracklistLegacy: S
                } = (0, m.o)(), N = x || S, C = N ? s.H : o.$, {
                    height: A
                } = (0, c.useContext)(_.k), j = (0, p.d4)(e => e.settings.isVideoEmbed);
                return (0, r.jsx)(C, (0, a._)((0, i._)({
                    colorSet: "base",
                    disabled: d,
                    className: u()(h, y().overflowButton, {
                        [y().clicked]: E
                    }),
                    onClick: e => {
                        e.stopPropagation(), null == w || w()
                    },
                    iconLeading: n,
                    title: g,
                    "aria-label": b,
                    href: k,
                    "data-testid": T,
                    size: A && A < v.ht.large && !j ? "small" : "medium"
                }, N ? {
                    condensedAll: !0
                } : {
                    colorSet: "base",
                    fullWidth: !0
                }), {
                    children: (0, r.jsx)(l.E, {
                        variant: t,
                        className: u()(y().truncator, y().text, {
                            [y().compact]: N
                        }),
                        children: f
                    })
                }))
            }
        },
        8423: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => f
            });
            var i = n(1503),
                a = n(9934),
                r = n(99166),
                s = n(46001),
                o = n.n(s),
                l = n(72223),
                d = n(93587),
                u = n(90270),
                c = n(55594),
                p = n(1477),
                m = n(88976),
                _ = n(31629),
                v = n(23847),
                h = n(54648),
                y = n(54422),
                k = n.n(y);
            let f = e => {
                let {
                    showUpsell: t,
                    variant: n
                } = e, s = (0, d.d4)(e => e.data.entity), {
                    metadata: y
                } = (0, l.useMemo)(() => (0, p.O)(s), [s]), {
                    playbackState: f,
                    triggerPlaybackOperation: g
                } = (0, l.useContext)(m.T), b = null == f ? void 0 : f.isPaused, E = (0, c.O)(), T = (null == y ? void 0 : y.title) || "", w = (0, u.aG)({
                    productName: "embed_player_p"
                }), x = (0, d.d4)(v.BT);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.E, {
                        as: "h1",
                        variant: null != n ? n : "bodyMedium",
                        className: o()(k().title, {
                            [k().alignBelowUpsell]: t
                        }),
                        "data-testid": "entity-title",
                        children: (0, i.jsx)(h.r, {
                            title: T,
                            children: (0, i.jsx)(r.Y, {
                                standalone: !0,
                                semanticColor: "textBase",
                                onClick: (e => () => {
                                    ("title" === e || "cover-art" === e) && x && void 0 !== b && g((0, _.v7)()), E({
                                        action_type: "click",
                                        action_intent: "deeplink",
                                        action_item_id: e
                                    })
                                })("title"),
                                href: null == w ? void 0 : w.selectedEntity,
                                children: T
                            })
                        })
                    })
                })
            }
        },
        9583: (e, t, n) => {
            "use strict";

            function i(e) {
                return void 0 !== e.status
            }
            n.d(t, {
                _: () => i
            })
        },
        10377: e => {
            e.exports = {
                fullscreenWrapper: "UpsellContent_fullscreenWrapper__yafMY",
                transition_enter: "UpsellContent_transition_enter__SPRuw",
                transition_enterActive: "UpsellContent_transition_enterActive__HOboE",
                transition_exit: "UpsellContent_transition_exit__r7VXK",
                transition_exitActive: "UpsellContent_transition_exitActive__dhScU",
                footerWrapper: "UpsellContent_footerWrapper__M_dNe",
                coverArtWrapper: "UpsellContent_coverArtWrapper__O1I7x",
                ctaWrapper: "UpsellContent_ctaWrapper___t9Gy",
                closeButton: "UpsellContent_closeButton__Rxr0B",
                content: "UpsellContent_content__YTOSs",
                metadataWrapper: "UpsellContent_metadataWrapper__iSJfD",
                labelsAndSubtitle: "UpsellContent_labelsAndSubtitle__2mVsp",
                playerControlsWrapper: "UpsellContent_playerControlsWrapper__HdcB9",
                coverArtUpsell: "UpsellContent_coverArtUpsell__bAFhO",
                playlistContainer: "UpsellContent_playlistContainer__ittRM"
            }
        },
        10800: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => a
            });
            var i = n(93587);
            let a = () => {
                let e = (0, i.d4)(e => e.settings.session.isAnonymous),
                    t = (0, i.d4)(e => e.settings.isMobile);
                return !e || !t
            }
        },
        13597: e => {
            e.exports = {
                visibleOnlyToScreenReader: "ScreenReaderInput_visibleOnlyToScreenReader__TVvYo"
            }
        },
        16277: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                E: () => r,
                i: () => a
            });
            let a = () => {
                    if (!i) throw Error("Config data not set");
                    return i
                },
                r = e => {
                    i = e
                }
        },
        16724: e => {
            e.exports = {
                followButtonWrapper: "FollowButton_followButtonWrapper__uMaPG",
                followButtonText: "FollowButton_followButtonText__axhEd"
            }
        },
        17655: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => u
            });
            var i = n(1503),
                a = n(50506),
                r = n(57310),
                s = n(72146),
                o = n(1538),
                l = n(34090),
                d = n.n(l);
            let u = () => {
                let {
                    isCompactLegacy: e
                } = (0, a.o)();
                return (0, i.jsxs)("div", {
                    className: d().playerControlsWrapper,
                    children: [e && (0, i.jsx)("div", {
                        className: d().addToLibraryCompactWrapper,
                        children: (0, i.jsx)(r.p, {})
                    }), (0, i.jsx)("div", {
                        className: d().overflowMenuButtonWrapper,
                        children: (0, i.jsx)(s.G, {})
                    }), (0, i.jsx)(o.n, {})]
                })
            }
        },
        18688: e => {
            e.exports = {
                preSaveButton: "PreSaveButton_preSaveButton__6lIqM",
                preSaveButtonText: "PreSaveButton_preSaveButtonText__sJca0"
            }
        },
        19670: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                q: () => eC
            });
            var a = n(1503),
                r = n(33779),
                s = n(1304),
                o = n(8179),
                l = n(72223),
                d = n(93587),
                u = n(48957),
                c = n(84693);
            let p = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "addItemsToRootlist"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "newPosition"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "RootlistItemPositionInput"
                                    }
                                }
                            }
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "addItemsToRootlist"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "newPosition"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPosition"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                m = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "removePlaylistFromRootlist"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "removeItemsFromRootlist"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                };
            var _ = function(e) {
                return e.AfterUri = "AFTER_URI", e.BeforeUri = "BEFORE_URI", e.BottomOfRootlist = "BOTTOM_OF_ROOTLIST", e.TopOfRootlist = "TOP_OF_ROOTLIST", e
            }({});
            let v = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "addEntitiesToLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "addLibraryItems"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "library"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                h = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areAlbumsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "albums"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Album"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                y = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areArtistsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "artists"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Artist"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                k = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areTracksInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tracks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Track"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                f = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areShowsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "podcasts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Audiobook"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Podcast"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                g = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areEpisodesInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "episodes"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Episode"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                b = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "arePlaylistsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "playlistsV2"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playlist"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "following"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                E = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "removeEntitiesFromLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "removeLibraryItems"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "library"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                };
            var T = n(70481);

            function w(e) {
                return e === c.NQG.ALBUM || e === c.NQG.ARTIST || e === c.NQG.TRACK || e === c.NQG.SHOW || e === c.NQG.EPISODE || e === c.NQG.PLAYLIST_V2
            }

            function x(e) {
                return e.map(e => {
                    if ("GenericError" === e.__typename || "NotFound" === e.__typename || "RestrictedContent" === e.__typename || "Chapter" === e.__typename) throw Error("The typename: ".concat(e.__typename, " is not supported"));
                    return "Playlist" === e.__typename ? !!(null == e ? void 0 : e.following) : !!(null == e ? void 0 : e.saved)
                })
            }
            class S {
                getEvents() {
                    return this._events
                }
                async add() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (n.length) {
                        n.forEach(t => {
                            if (!(e = (0, c.o_h)(t)) || !w(e.type)) throw Error("Unknown URI type: ".concat(null == e ? void 0 : e.type))
                        });
                        try {
                            let t = (null == e ? void 0 : e.type) === c.NQG.PLAYLIST_V2 ? await this.requestGQL(p, {
                                newPosition: {
                                    fromUri: null,
                                    moveType: _.TopOfRootlist
                                },
                                uris: n
                            }) : await this.requestGQL(v, {
                                uris: n
                            });
                            if (!t || t.errors) throw Error("GraphQL query failed");
                            if (!(null == t ? void 0 : t.errors))
                                for (let e of n) this._cache.set(e, !0), this._events.emit(T.U.UPDATE_ITEM, {
                                    uri: e,
                                    isInLibrary: !0
                                })
                        } catch (e) {
                            throw Error("Error adding ".concat(JSON.stringify(n), " to library: ").concat(e))
                        }
                    }
                }
                async remove() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (n.length) {
                        n.forEach(t => {
                            if (!(e = (0, c.o_h)(t)) || !w(e.type)) throw Error("Unknown URI type: ".concat(null == e ? void 0 : e.type))
                        });
                        try {
                            let t = (null == e ? void 0 : e.type) === c.NQG.PLAYLIST_V2 ? await this.requestGQL(m, {
                                uris: n
                            }) : await this.requestGQL(E, {
                                uris: n
                            });
                            if (!t || t.errors) throw Error("GraphQL query failed");
                            for (let e of n) this._cache.set(e, !1), this._events.emit(T.U.UPDATE_ITEM, {
                                uri: e,
                                isInLibrary: !1
                            })
                        } catch (e) {
                            throw Error("Error removing ".concat(JSON.stringify(n), " from library: ").concat(e))
                        }
                    }
                }
                async containsEntitiesOfType(e, t) {
                    if (0 === t.length) return [];
                    let n = async e => {
                        let n = await this.requestGQL(e, {
                            uris: t
                        });
                        if (!n || n.errors) throw Error("GraphQL query failed");
                        return n
                    };
                    switch (e) {
                        case c.NQG.ALBUM:
                            return x((await n(h)).data.albums);
                        case c.NQG.ARTIST:
                            return x((await n(y)).data.artists);
                        case c.NQG.TRACK:
                            return x((await n(k)).data.tracks);
                        case c.NQG.SHOW:
                            return x((await n(f)).data.podcasts);
                        case c.NQG.EPISODE:
                            return x((await n(g)).data.episodes);
                        case c.NQG.PLAYLIST_V2:
                            return x((await n(b)).data.playlistsV2);
                        default:
                            throw Error("Unknown URI type: ".concat(e))
                    }
                }
                containsSync(e) {
                    return this._cache.get(e)
                }
                async contains() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    let a = []; {
                        let e = [];
                        if (n.forEach(t => {
                                let n = this._cache.get(t);
                                void 0 !== n ? e.push(n) : a.push(t)
                            }), e.length === n.length) return e
                    }
                    let r = (e = e => {
                        let t = (0, c.o_h)(e);
                        if (null === t || !w(t.type)) throw Error("Unknown URI type: ".concat(null == t ? void 0 : t.type));
                        return t.type
                    }, a.reduce((t, n) => {
                        let i = e(n);
                        return (t[i] = t[i] || []).push(n), t
                    }, {}));
                    return await Promise.all(Object.entries(r).map(async e => {
                        let t, [n, i] = e,
                            a = i.join(",");
                        this._pendingRequests.has(a) ? t = this._pendingRequests.get(a) : (t = this.containsEntitiesOfType(n, i), this._pendingRequests.set(a, t));
                        let r = await t;
                        i.forEach((e, t) => {
                            this._cache.set(e, r[t]), this._events.emit(T.U.UPDATE_ITEM, {
                                uri: e,
                                isInLibrary: r[t]
                            })
                        }), this._pendingRequests.delete(a)
                    })), n.map(e => this._cache.get(e))
                }
                constructor(e) {
                    this.requestGQL = e, this._events = new T.b, this._cache = new Map, this._pendingRequests = new Map
                }
            }
            var N = n(49203),
                C = n(16277),
                A = n(79298),
                j = n(34155),
                P = n(26115);
            let O = P.env.DEBUG_EVENT_SENDER;
            var L = n(55594),
                R = n(72447),
                I = function(e) {
                    return e.InvalidURI = "invalid_uri", e.PlaybackError = "playback_error", e
                }({}),
                B = function(e) {
                    return e.READY = "ready", e.PLAYBACK_STARTED = "playback_started", e.PLAYBACK_UPDATE = "playback_update", e.ERROR = "error", e
                }({}),
                D = function(e) {
                    return e.PLAY_FROM_START = "play_from_start", e.PLAY = "play", e.PAUSE = "pause", e.RESUME = "resume", e.TOGGLE_PLAY = "toggle", e.SEEK = "seek", e.LOAD_COMPLETE_ACK = "load_complete_ack", e
                }({}),
                M = n(31629),
                U = n(37795),
                F = n(85489),
                V = n(87472);
            let W = new WeakSet,
                G = new WeakSet;

            function q(e) {
                let {
                    playerApi: t,
                    store: n
                } = e, {
                    triggerPlaybackOperation: i
                } = (0, R.N)(t, n), a = (0, L.O)(), r = (0, l.useRef)(!1);
                return (0, l.useEffect)(() => {
                    if (!t || !a) return () => {};
                    let e = e => {
                        var r, s, o, l, d;
                        let u = n.getState(),
                            c = u.settings.isVideoEmbed && (null == (s = u.data) || null == (r = s.entity) ? void 0 : r.hasVideo);
                        switch (null == (o = e.data) ? void 0 : o.command) {
                            case D.PLAY:
                            case D.PLAY_FROM_START:
                                i((0, M.ZH)(c ? V.Xr.VIDEO : V.Xr.AUDIO)), a({
                                    page: window.location.pathname,
                                    action_intent: "play",
                                    action_type: "iframe-api"
                                });
                                break;
                            case D.PAUSE:
                                i((0, M.v7)()), a({
                                    page: window.location.pathname,
                                    action_intent: "pause",
                                    action_type: "iframe-api"
                                });
                                break;
                            case D.RESUME:
                                (null == (l = t.getState()) ? void 0 : l.hasContext) ? i((0, M.U)()): i((0, M.ZH)(c ? V.Xr.VIDEO : V.Xr.AUDIO)), a({
                                    page: window.location.pathname,
                                    action_intent: "resume",
                                    action_type: "iframe-api"
                                });
                                break;
                            case D.TOGGLE_PLAY:
                                i((0, M.d5)(c ? V.Xr.VIDEO : V.Xr.AUDIO)), a({
                                    page: window.location.pathname,
                                    action_intent: "toggle",
                                    action_type: "iframe-api"
                                });
                                break;
                            case D.SEEK:
                                {
                                    let t = parseInt(null == (d = e.data) ? void 0 : d.timestamp, 10);i((0, M.jF)(1e3 * t)),
                                    a({
                                        page: window.location.pathname,
                                        action_intent: "seek",
                                        action_type: "iframe-api"
                                    })
                                }
                                break;
                            case D.LOAD_COMPLETE_ACK:
                                a({
                                    page: window.location.pathname,
                                    action_intent: "load-episode",
                                    action_type: "iframe-api"
                                });
                                break;
                            default:
                                return
                        }
                    };
                    return G.has(e) || (window.addEventListener("message", e), G.add(e)), r.current || (window.parent && window.parent.postMessage({
                        type: B.READY
                    }, "*"), r.current = !0), () => {
                        G.has(e) && (window.removeEventListener("message", e), G.delete(e))
                    }
                }, [t, n, i, a]), (0, l.useEffect)(() => (function(e) {
                    let t = !1,
                        n = null;
                    if (window.parent && e) {
                        let i = e => {
                                if (e.data) {
                                    let {
                                        isPaused: i,
                                        isBuffering: a,
                                        duration: r,
                                        positionAsOfTimestamp: s,
                                        hasContext: o,
                                        context: l
                                    } = e.data;
                                    window.parent.postMessage({
                                        type: B.PLAYBACK_UPDATE,
                                        payload: {
                                            isPaused: i,
                                            isBuffering: a,
                                            duration: r,
                                            position: s,
                                            playingURI: l.uri
                                        }
                                    }, "*"), o && !t && (window.parent.postMessage({
                                        type: B.PLAYBACK_STARTED,
                                        payload: {
                                            playingURI: l.uri
                                        }
                                    }, "*"), t = !0, n = l.uri), (o || i) && n === l.uri || (t = !1, n = l.uri)
                                }
                            },
                            a = e => {
                                var t = e.data;
                                if (window.parent) {
                                    let e = {
                                        code: I.PlaybackError,
                                        message: "".concat(t.code, ": ").concat(t.message),
                                        recoverable: t.type === U.Yq.TRANSIENT
                                    };
                                    window.parent.postMessage({
                                        type: B.ERROR,
                                        payload: e
                                    }, "*")
                                }
                            };
                        return W.has(e) || (e.getEvents().addListener(F.gd.UPDATE, i).addListener(F.gd.ERROR, a), W.add(e)), () => {
                            e && W.has(e) && (e.getEvents().removeListener(F.gd.UPDATE, i).removeListener(F.gd.ERROR, a), W.delete(e))
                        }
                    }
                    return () => {}
                })(t), [t]), null
            }
            var H = n(23847),
                Y = n(66209);
            async function K(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                try {
                    return await e()
                } catch (i) {
                    if (t) return await new Promise(e => setTimeout(e, n)), K(e, t - 1, n);
                    throw Error("Import failed after retry.", {
                        cause: i
                    })
                }
            }
            async function Q(e) {
                let {
                    createHarmonyPlayer: t
                } = await K(() => Promise.all([n.e(4235), n.e(1138), n.e(5824)]).then(n.bind(n, 20721)));
                return t(e)
            }
            async function z(e, t) {
                let {
                    createStandalonePlayer: i
                } = await K(() => Promise.all([n.e(4235), n.e(1138), n.e(4847)]).then(n.bind(n, 69798)));
                return i(e, t)
            }
            let X = async (e, t, n) => {
                let {
                    playbackMode: i,
                    platformSupportsEncryptedContent: a
                } = await n, r = !t.settings.session.isAnonymous;
                return !(0, H.BT)(t) && i === Y.L.FULL || (0, H.o2)(t) && r && i === Y.L.PREVIEW && a ? Q(e) : z(e, t)
            };
            var J = n(84822),
                Z = n(43903),
                $ = n(88976),
                ee = n(84189);
            let et = (0, l.createContext)(null);
            var en = n(25882),
                ei = n(86143),
                ea = n(10895),
                er = n(32510),
                es = n(82536),
                eo = n(93629),
                el = n(72280),
                ed = n(84160);
            let eu = {
                    initialized: !1,
                    showOverflowMenu: !1,
                    playbackMode: Y.L.UNKNOWN,
                    platformSupportsEncryptedContent: !1,
                    currentPreviewTrackIndex: 0
                },
                ec = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eu,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ed.Z:
                            return (0, eo._)((0, es._)({}, e), {
                                initialized: !0
                            });
                        case el.tx:
                            return (0, eo._)((0, es._)({}, e), {
                                showOverflowMenu: !0
                            });
                        case el.iG:
                            return (0, eo._)((0, es._)({}, e), {
                                showOverflowMenu: !1
                            });
                        case Y.b:
                            return (0, eo._)((0, es._)({}, e), {
                                playbackMode: t.playbackMode,
                                platformSupportsEncryptedContent: t.platformSupportsEncryptedContent
                            });
                        case V.j5:
                            return (0, eo._)((0, es._)({}, e), {
                                currentPreviewTrackIndex: t.index
                            });
                        default:
                            return e
                    }
                };

            function ep(e) {
                let t = ei.Zz,
                    n = [ea.P],
                    i = (0, ei.HY)({
                        data: () => e.data,
                        settings: () => e.settings,
                        machineState: ec
                    });
                return (0, er.U1)({
                    reducer: i,
                    preloadedState: e,
                    middleware: e => e({
                        immutableCheck: !1,
                        composeEnhancer: t
                    }).concat(n),
                    duplicateMiddlewareCheck: !1
                })
            }
            var em = n(76072);

            function e_(e) {
                if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
                let t = new Uint8Array(e.length);
                for (let n = 0; n < e.length; n += 1) t[n] = e.charCodeAt(n);
                return t
            }
            var ev = n(52715),
                eh = n.n(ev);
            let ey = async function(e) {
                let t = e_(e);
                return eh().createHash("sha256").update(t).digest("hex")
            };
            class ek {}
            ek.encode = e_, ek.hash = ey;
            var ef = n(71135);

            function eg(e) {
                return "OperationDefinition" === e.kind
            }
            let eb = "https://api-partner.spotify.com/pathfinder/v1";
            async function eE(e) {
                return {
                    persistedQuery: {
                        version: 1,
                        sha256Hash: await ek.hash(e.body)
                    }
                }
            }
            async function eT(e, t, n, i, a) {
                let {
                    type: r,
                    name: s
                } = t;
                return e.build().withHost(eb).withMethod("mutation" === r ? "POST" : "GET").withoutMarket().withPath("/query").withJsonContentType().withRetries({
                    retries: 2,
                    retryDelay: 800,
                    retryOn: [503]
                }).withQueryParameters((0, es._)({
                    operationName: s,
                    variables: JSON.stringify(n),
                    extensions: JSON.stringify(i)
                }, a)).withEndpointIdentifier("/query/".concat(s)).send()
            }
            async function ew(e, t, n, i, a) {
                let {
                    name: r,
                    body: s
                } = t;
                return e.build().withHost(eb).withMethod("POST").withoutMarket().withPath("/query").withJsonContentType().withBody({
                    operationName: r,
                    variables: n,
                    query: s,
                    extensions: i
                }).withQueryParameters((0, es._)({}, a)).withEndpointIdentifier("/query/".concat(r)).send()
            }
            async function ex(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = await eE(t);
                try {
                    var r, s;
                    let o = await eT(e, t, n, a, i);
                    if (null == (s = o.body) || null == (r = s.errors) ? void 0 : r.some(e => "PersistedQueryNotFound" === e.message)) return ew(e, t, n, a, i);
                    return o
                } catch (r) {
                    if (r instanceof em.O && 405 === r.status) return ew(e, t, n, a, i);
                    throw r
                }
            }
            var eS = n(14524);
            async function eN() {
                let {
                    checkPlatform: e
                } = await Promise.all([n.e(4235), n.e(4831)]).then(n.bind(n, 74831));
                return e()
            }
            let eC = e => {
                let {
                    children: t,
                    props: {
                        config: c,
                        state: p
                    }
                } = e, [m, _] = (0, l.useState)(ep(p)), [v, h] = (0, l.useState)(null), [y, k] = (0, l.useState)(null), [f, g] = (0, l.useState)(null), [b] = (0, l.useState)(() => (0, o.hU)(c.strings, {
                    type: "backend",
                    async read(e, t, i) {
                        try {
                            if ("en" === e) return i(null, {});
                            return i(null, await n(50713)("./".concat(e, "/strings.json")))
                        } catch (e) {
                            return i(null, {})
                        }
                    }
                }));
                return (0, C.E)(c), (0, l.useEffect)(() => {
                    var e;
                    u.n.setSession(p.settings.session);
                    let t = (e => {
                            if (i) return i;
                            let t = (0, J.createBaseTransport)({
                                providers: {
                                    endpoints: (0, J.createXResolveProvider)(),
                                    token: function(e) {
                                        var t;
                                        let n;
                                        return t = async () => {
                                            let t;
                                            if (e && !(Date.now() >= e.accessTokenExpirationTimestampMs)) t = e;
                                            else {
                                                if (null === (t = (await u.n.getInstance().build().withPath("/embed/api/token").withoutMarket().withoutAuthorization().withEndpointIdentifier("/embed/api/token").send()).body)) throw Error("Token is currently unavailable.");
                                                u.n.setSession(t)
                                            }
                                            let {
                                                accessToken: n,
                                                accessTokenExpirationTimestampMs: i
                                            } = t;
                                            return [n, Math.floor(((i || 0) - Date.now()) / 1e3)]
                                        }, n = null, async () => {
                                            let e;
                                            if (n) return n;
                                            n = t();
                                            try {
                                                e = await n
                                            } finally {
                                                n = null
                                            }
                                            return e
                                        }
                                    }(e.tokenFromServer)
                                },
                                disconnectBeforeUnload: !0,
                                reconnectionRetries: 3,
                                requestMode: "fetch"
                            });
                            return e.useDealer && t.addPlugin(Z.kJ, {
                                WebSocket: WebSocket
                            }), t.on(J.TransportEvent.CONNECTED, () => {
                                t.isAuthenticated() || t.authenticate()
                            }), t.on(J.TransportEvent.DISCONNECTED, () => {
                                t.connect()
                            }), t.connect(), i = t, t
                        })({
                            useDealer: !p.settings.session.isAnonymous,
                            tokenFromServer: p.settings.session
                        }),
                        n = eN().catch(() => !1).then(e => ({
                            playbackMode: ((e, t) => {
                                let n = (0, H.BT)(t),
                                    i = !(0, H.yY)(t),
                                    a = t.settings.isSpotifyDesktopApp;
                                return n && a && t.data.defaultAudioFileObject.passthrough === V.Z4.NONE ? Y.L.PREVIEW : n && (e || t.data.defaultAudioFileObject.passthrough !== V.Z4.NONE && t.data.defaultAudioFileObject.passthroughUrl) || !n && e && !(e => {
                                    let {
                                        settings: {
                                            session: t
                                        }
                                    } = e;
                                    return !!(!t.accessToken || t.isAnonymous)
                                })(t) && !(e => {
                                    let {
                                        settings: t
                                    } = e;
                                    return !!t.isMobile
                                })(t) && !(e => {
                                    let {
                                        settings: t
                                    } = e;
                                    return !!t.isSafari
                                })(t) || t.settings.isVideoEmbed && i ? Y.L.FULL : Y.L.PREVIEW
                            })(e, p),
                            platformSupportsEncryptedContent: e
                        }));
                    X(t, p, n).then(e => {
                        let {
                            playerAPI: t
                        } = e;
                        k(t)
                    }), g(new S((e = u.n.getInstance(), async function(t, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = function(e) {
                                let t = e.definitions.filter(eg);
                                if (0 === t.length) throw Error("No GraphQL operation definition found in document!");
                                if (t.length > 1) throw Error("Too many GraphQL operation definitions found in document! Expected exactly one.");
                                let [n] = t;
                                if (void 0 === n.name) throw Error("Nameless GraphQL operations are not supported!");
                                return {
                                    type: n.operation,
                                    name: n.name.value,
                                    body: (0, ef.y)(e)
                                }
                            }(t);
                        if ("subscription" === a.type) throw Error("GraphQL subscriptions are not supported!");
                        return (await ex(e, a, n, i)).body
                    })));
                    let {
                        correlationId: a,
                        clientId: r
                    } = c;
                    h(((e, t, n) => {
                        let i = (0, A.kE)({
                            transport: e,
                            suppressPersist: !1,
                            context: [(0, j.createClientIdContext)(t), (0, j.createApplicationContext)({
                                version: P.env.__BUILD_VERSION__
                            }), (0, j.createUserAgentContext)(), (0, j.createCorrelationIdContext)(n)],
                            ownerProvider: () => null,
                            storagePrefix: t
                        });
                        return O && (i._send = i.send, i.send = function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                            return console.log("EventSender.send"), console.table(e), i._send(e, ...n)
                        }, i.addListeners({
                            [A.ky.UPLOAD_SUCCEEDED]: e => {
                                console.log("EventSender: uploaded ".concat(e.data.num_events, " events"))
                            },
                            [A.ky.UPLOAD_FAILED]: e => {
                                console.error("EventSender: upload failed", e)
                            }
                        })), i
                    })(t, r, a));
                    let s = ep(p);
                    n.then(e => {
                        var t;
                        let {
                            playbackMode: n,
                            platformSupportsEncryptedContent: i
                        } = e;
                        return (0, s.dispatch)((t = n || Y.L.PREVIEW, {
                            type: Y.b,
                            playbackMode: t,
                            platformSupportsEncryptedContent: i
                        })), n
                    }), _(s)
                }, [p, c]), (0, a.jsx)(d.Kq, {
                    store: m,
                    serverState: m.getState(),
                    children: (0, a.jsx)(N.Z.Provider, {
                        value: f,
                        children: (0, a.jsx)(o.OW.Provider, {
                            value: b,
                            children: (0, a.jsx)(o.YO, {
                                value: c.locale,
                                children: (0, a.jsx)(et.Provider, {
                                    value: v,
                                    children: (0, a.jsx)(ee.E, {
                                        eventSender: v,
                                        children: (0, a.jsx)($.v, {
                                            reduxStore: m,
                                            playerAPI: y,
                                            children: (0, a.jsxs)(s.K, {
                                                children: [(0, a.jsx)("base", {
                                                    target: p.settings.isMobile ? "_top" : "_blank"
                                                }), (0, a.jsx)(r.mL, {
                                                    styles: eS.E3
                                                }), (0, a.jsx)(en.G, {
                                                    children: (0, a.jsxs)(a.Fragment, {
                                                        children: [t, (0, a.jsx)(q, {
                                                            store: m,
                                                            playerApi: y
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        20799: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => a
            });
            var i = n(84160);

            function a() {
                return {
                    type: i.Z
                }
            }
        },
        20965: e => {
            e.exports = {
                upsellContentContainer: "Upsell_upsellContentContainer__xjlbk",
                transition_enter: "Upsell_transition_enter__1J8pP",
                transition_enterActive: "Upsell_transition_enterActive__7oD__",
                transition_exit: "Upsell_transition_exit__gTMji",
                transition_exitActive: "Upsell_transition_exitActive__MLvE3"
            }
        },
        21619: e => {
            e.exports = {
                closeButton: "PreReleaseUpsellContent_closeButton__n4_vO",
                content: "PreReleaseUpsellContent_content__0R5TN",
                countdownContainer: "PreReleaseUpsellContent_countdownContainer__Wgdf4",
                messageContainer: "PreReleaseUpsellContent_messageContainer__X5Nr5",
                upsellMessage: "PreReleaseUpsellContent_upsellMessage__VtyER",
                buttonContainer: "PreReleaseUpsellContent_buttonContainer__yXbia"
            }
        },
        21702: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => T
            });
            var i = n(1503),
                a = n(79705),
                r = n(4535),
                s = n(8179),
                o = n(46001),
                l = n.n(o),
                d = n(72223),
                u = n(93587),
                c = n(50506),
                p = n(55594),
                m = n(48957),
                _ = n(84693);
            let v = "".concat("https://spclient.wg.spotify.com", "/url-dispenser/v1"),
                h = async (e, t, n) => {
                    let {
                        utmParameters: i,
                        customData: a,
                        linkPreview: r
                    } = n, s = await e.build().withHost(v).withPath("/generate-url").withMethod("POST").withJsonContentType().withoutMarket().withEndpointIdentifier("/v1/generate-url").withBody({
                        spotify_uri: t,
                        custom_data: a,
                        link_preview: r,
                        utm_parameters: i
                    }).send();
                    if (201 === s.status) return s.body;
                    throw Error("Failed to get short link for uri ".concat(t))
                },
                y = async (e, t) => {
                    var n;
                    return null != (n = (await h(e, t, {}).catch(() => {
                        var e;
                        return {
                            shareable_url: null == (e = (0, _.o_h)(t)) ? void 0 : e.toURL()
                        }
                    })).shareable_url) ? n : null
                };
            var k = n(23847);
            async function f(e) {
                if ("clipboard" in navigator && navigator.clipboard) try {
                    if ("string" == typeof e) return await new Promise((t, n) => setTimeout(() => {
                        navigator.clipboard.writeText(e).then(t).catch(n)
                    }, 0));
                    let t = await e;
                    return await navigator.clipboard.writeText(t)
                } catch (t) {
                    let e = t instanceof Error ? t.message : String(t);
                    throw Error("Failed to copy to clipboard using Clipboard API. ".concat(e))
                }
                throw Error("Clipboard API is not available")
            }
            var g = n(77580),
                b = n.n(g),
                E = n(6309);
            let T = e => {
                let {
                    handleStandaloneCopyItem: t,
                    showFallbackCopy: n = !1
                } = e, o = (0, u.d4)(k.M0), [_, v] = (0, d.useState)(!1), [h, g] = (0, d.useState)(!1), [T, w] = (0, d.useState)(null), x = (0, p.O)(), {
                    isCompactLegacy: S,
                    isCompactTracklistLegacy: N
                } = (0, c.o)(), C = (0, s.kj)(), A = (0, u.d4)(e => e.settings.isVideoEmbed), j = ((e, t) => t ? e("embed_success_share_link", "Copied to clipboard", "Text on a button when an entity link was copied to a clipboard") : e("spe.copy_link", "Copy link", "Text on a button to copy an entity link to the clipboard"))(C, _), P = async e => {
                    if (n) setTimeout(() => {
                        document.execCommand("copy")
                    }, 0), v(!0);
                    else try {
                        await f(e), v(!0)
                    } catch (n) {
                        A && t && t(e)
                    }
                    x({
                        action_type: "click",
                        action_intent: "clipboard-copy"
                    })
                }, O = async () => {
                    if (!_ && o)
                        if (T) await P(T);
                        else {
                            let e = await y(m.n.getInstance(), o);
                            e && await P(e), w(e)
                        }
                };
                return ((0, d.useEffect)(() => {
                    _ && setTimeout(() => {
                        v(!1), g(!0)
                    }, 2e3)
                }, [_]), (0, d.useEffect)(() => {
                    w(null)
                }, [o]), n) ? (0, i.jsx)(a.H, {
                    disabled: !o,
                    onClick: O,
                    condensedAll: !0,
                    semanticColor: "textBase",
                    className: l()({
                        [b().clicked]: _,
                        [b().unclicked]: h
                    }),
                    "data-testid": "copy-link-fallback-button",
                    children: j
                }) : (0, i.jsx)(E.D, {
                    disabled: !o,
                    onClick: O,
                    icon: S || N ? void 0 : r.y,
                    variant: "bodyMedium",
                    clickedAnimation: _,
                    testId: "copy-link-button",
                    children: j
                })
            }
        },
        22527: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => u
            });
            var i = n(71343),
                a = n(72223),
                r = n(93587),
                s = n(66209),
                o = n(34061),
                l = n(79917);
            let d = (0, i.Mz)([e => e.data.entity, e => e.settings.session.isAnonymous, e => e.machineState.platformSupportsEncryptedContent, e => e.machineState.playbackMode, e => {
                    var t;
                    return null != (t = e.settings.isAudiobookLaunchedInGeoMarket) && t
                }], (e, t, n, i, a) => ({
                    entity: e,
                    isAnonymous: t,
                    platformSupportsEncryptedContent: n,
                    playbackMode: i,
                    isAudiobookLaunchedInGeoMarket: a
                })),
                u = () => {
                    let {
                        entity: e,
                        isAnonymous: t,
                        platformSupportsEncryptedContent: n,
                        playbackMode: i,
                        isAudiobookLaunchedInGeoMarket: u
                    } = (0, r.d4)(d), c = (0, a.useMemo)(() => (function(e) {
                        let {
                            entity: t,
                            options: n
                        } = e, {
                            playbackMode: i
                        } = n;
                        if (!t || i === s.L.UNKNOWN || !t.isPlayable) return !1;
                        let a = i === s.L.PREVIEW;
                        if (t.isAudiobook) {
                            var r = n;
                            let {
                                playbackMode: e,
                                platformSupportsEncryptedContent: t,
                                isAnonymous: i,
                                isAudiobookLaunchedInGeoMarket: a
                            } = r;
                            return !(!i && !t && e === s.L.PREVIEW && !a)
                        }
                        if (t.type === o.c.PLAYLIST) {
                            var d = t,
                                u = n;
                            let {
                                trackList: e
                            } = d, {
                                playbackMode: i,
                                isAudiobookLaunchedInGeoMarket: a
                            } = u;
                            if (!e || 0 === e.length) return !1;
                            let r = i === s.L.PREVIEW;
                            return e.some(e => (0, l.C)(e, r, a))
                        }
                        return t.type !== o.c.TRACK && t.type !== o.c.EPISODE || !(a && (null == t ? void 0 : t.audioPreview) === null)
                    })({
                        entity: e,
                        options: {
                            playbackMode: i,
                            platformSupportsEncryptedContent: n,
                            isAnonymous: t,
                            isAudiobookLaunchedInGeoMarket: u
                        }
                    }), [e, i, u, t, n]), p = i === s.L.PREVIEW;
                    return {
                        isEntityPlayable: c,
                        tracklistPlayability: (0, a.useMemo)(() => {
                            var t;
                            return null == (t = (null == e ? void 0 : e.trackList) || []) ? void 0 : t.reduce((e, t) => (e[t.uri] = (0, l.C)(t, p, u), e), {})
                        }, [null == e ? void 0 : e.trackList, p, u])
                    }
                }
        },
        22548: e => {
            e.exports = {
                overflowMenuButton: "OverflowMenuButton_overflowMenuButton__JPKiT"
            }
        },
        23847: (e, t, n) => {
            "use strict";
            n.d(t, {
                BT: () => a,
                M0: () => s,
                o2: () => r,
                yY: () => o
            });
            var i = n(84693);
            let a = e => {
                    let {
                        data: {
                            entity: t
                        }
                    } = e;
                    return (null == t ? void 0 : t.type) === i.NQG.EPISODE && !(null == t ? void 0 : t.isAudiobook)
                },
                r = e => {
                    let {
                        data: {
                            entity: t
                        }
                    } = e;
                    return (null == t ? void 0 : t.isAudiobook) === !0 && !t.isRestrictedContent
                },
                s = e => e.data.embeded_entity_uri,
                o = e => {
                    var t;
                    let {
                        data: {
                            defaultAudioFileObject: n
                        }
                    } = e;
                    return !!n.video && (null == (t = n.video[0]) ? void 0 : t.requiresDRM)
                }
        },
        25322: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => d
            });
            var i = n(1503),
                a = n(79705),
                r = n(85871),
                s = n(8179),
                o = n(59050),
                l = n.n(o);
            let d = e => {
                let {
                    handleClose: t
                } = e, n = (0, s.kj)();
                return (0, i.jsx)("div", {
                    className: l().closeButton,
                    children: (0, i.jsx)(a.H, {
                        iconOnly: r.M,
                        "aria-label": n("close_button_action", "Close", "Accessibility label for a close button"),
                        onClick: t,
                        semanticColor: "textBase"
                    })
                })
            }
        },
        25616: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => a
            });
            var i = n(93587);
            let a = () => !!(0, i.d4)(e => {
                var t;
                return null == (t = e.data.entity) ? void 0 : t.visualIdentity
            })
        },
        25882: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => l,
                k: () => o
            });
            var i = n(82536),
                a = n(1503),
                r = n(72223);
            let s = {
                    width: null,
                    height: null
                },
                o = (0, r.createContext)(s),
                l = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, r.useState)(s);
                    return (0, r.useEffect)(() => {
                        l({
                            width: window.innerWidth,
                            height: window.innerHeight
                        });
                        let e = () => {
                            l({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, a.jsx)(o.Provider, {
                        value: (0, i._)({}, n),
                        children: t
                    })
                }
        },
        25968: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => o
            });
            var i = n(72223),
                a = n(93587),
                r = n(88976),
                s = n(66209);
            let o = () => {
                var e, t, n, o, l;
                let d = (0, a.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }),
                    u = (0, a.d4)(e => {
                        let {
                            data: t
                        } = e;
                        return t.entity
                    }),
                    {
                        playbackState: c
                    } = (0, i.useContext)(r.T);
                if ("artist" === u.type && d === s.L.FULL) {
                    let e = u.trackList;
                    return null == e || null == (o = e.find(e => {
                        var t;
                        return e.uri === (null == c || null == (t = c.item) ? void 0 : t.uri)
                    })) ? void 0 : o.uid
                }
                return null != (l = d === s.L.FULL ? null == c || null == (e = c.item) ? void 0 : e.uid : null == c || null == (n = c.context) || null == (t = n.metadata) ? void 0 : t.uid) ? l : void 0
            }
        },
        27442: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r
            });
            var i = n(51580),
                a = n.n(i);

            function r() {
                let e = a().getParser(window.navigator.userAgent),
                    t = function(e) {
                        switch (e) {
                            case "macOS":
                                return "osx";
                            case "Chrome OS":
                                return "chrome";
                            default:
                                return e
                        }
                    }(e.getOSName() || "not_applicable"),
                    n = function(e, t) {
                        if ("Windows" === e) switch (t) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return ""
                        }
                        return t
                    }(t, e.getOSVersion());
                return {
                    osName: t,
                    osVersion: n,
                    browserName: e.getBrowserName(),
                    browserVersion: e.getBrowserVersion()
                }
            }
        },
        28055: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => u
            });
            var i = n(72223),
                a = n(93587),
                r = n(20799),
                s = n(47734),
                o = n(66209),
                l = n(55594);
            let d = () => "ontouchstart" in document.documentElement ? "touchstart" : "mouseover";

            function u() {
                let e = (0, s.j)(),
                    t = (0, l.O)(),
                    n = (0, a.d4)(e => e.machineState.playbackMode),
                    u = (0, i.useCallback)(() => {
                        document.removeEventListener(d(), u), e((0, r.n)()), t({
                            action_type: "interacted",
                            action_intent: d()
                        })
                    }, [e, t]);
                (0, i.useEffect)(() => (n && n !== o.L.UNKNOWN && (t({
                    action_type: "pageview",
                    action_intent: null
                }), document.addEventListener(d(), u)), () => {
                    document.removeEventListener(d(), u)
                }), [t, u, n])
            }
        },
        28378: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => i
            });
            let i = e => {
                let {
                    url: t,
                    newWindow: n = !0
                } = e;
                window.open(t, n ? "_blank" : "_top")
            }
        },
        31629: (e, t, n) => {
            "use strict";
            n.d(t, {
                A4: () => d,
                GT: () => p,
                LY: () => _,
                TB: () => v,
                U: () => o,
                ZH: () => r,
                d5: () => a,
                h2: () => s,
                i2: () => m,
                jF: () => h,
                mb: () => c,
                q3: () => u,
                v7: () => l
            });
            var i = n(87472);

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Xr.AUDIO;
                return {
                    type: i.CU,
                    mediaType: e
                }
            }

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Xr.AUDIO;
                return {
                    type: i.tr,
                    mediaType: e
                }
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Xr.AUDIO;
                return {
                    type: i.WO,
                    index: e,
                    mediaType: t
                }
            }

            function o() {
                return {
                    type: i.IY
                }
            }

            function l() {
                return {
                    type: i.Hz
                }
            }

            function d() {
                return {
                    type: i.hM
                }
            }

            function u() {
                return {
                    type: i.r2
                }
            }

            function c() {
                return {
                    type: i.rp
                }
            }

            function p() {
                return {
                    type: i.lQ
                }
            }

            function m() {
                return {
                    type: i.oD
                }
            }

            function _() {
                return {
                    type: i.zK
                }
            }

            function v(e) {
                return {
                    type: i.j5,
                    index: e
                }
            }

            function h(e) {
                return {
                    type: i.NI,
                    time: e
                }
            }
        },
        32313: e => {
            e.exports = {
                overflowButton: "OverflowButton_overflowButton__KR6lg",
                clicked: "OverflowButton_clicked__xDnu9",
                text: "OverflowButton_text__VM_aj",
                "out-in": "OverflowButton_out-in__Xdrpp",
                compact: "OverflowButton_compact__U_g0C",
                truncator: "OverflowButton_truncator__ldTUs"
            }
        },
        34061: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => i
            });
            var i = function(e) {
                return e.ALBUM = "album", e.ARTIST = "artist", e.AUDIOBOOK = "audiobook", e.CHAPTER = "chapter", e.EPISODE = "episode", e.PLAYLIST = "playlist", e.PLAYLISTV2 = "playlist-v2", e.SHOW = "show", e.TRACK = "track", e.UNKNOWN = "unknown", e
            }({})
        },
        34090: e => {
            e.exports = {
                playerControlsWrapper: "PlayerControlsShort_playerControlsWrapper__qdkr5",
                addToLibraryCompactWrapper: "PlayerControlsShort_addToLibraryCompactWrapper__vXwv0",
                overflowMenuButtonWrapper: "PlayerControlsShort_overflowMenuButtonWrapper__qNhz2",
                previewPlayPauseWrapper: "PlayerControlsShort_previewPlayPauseWrapper__39zQA",
                skipButtonsWrapper: "PlayerControlsShort_skipButtonsWrapper__8Nqc6"
            }
        },
        35312: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n(82536),
                a = n(93629),
                r = n(72223),
                s = n(93587),
                o = n(49203),
                l = n(70481);

            function d(e) {
                let t = (0, r.useContext)(o.Z),
                    n = null == t ? void 0 : t.containsSync(e),
                    d = n ? {
                        [e]: n
                    } : void 0,
                    [u, c] = (0, r.useState)(d),
                    p = (0, s.d4)(e => e.settings.session.isAnonymous),
                    m = u && void 0 !== u[e],
                    _ = (0, r.useCallback)(async n => {
                        n ? await (null == t ? void 0 : t.add(e)) : await (null == t ? void 0 : t.remove(e))
                    }, [e, t]);
                return (0, r.useEffect)(() => {
                    let n;
                    if (t && !p)
                        if (m) {
                            let r = t => {
                                let {
                                    data: n
                                } = t;
                                e === n.uri && c(t => (0, a._)((0, i._)({}, t), {
                                    [e]: n.isInLibrary
                                }))
                            };
                            t.getEvents().addListener(l.U.UPDATE_ITEM, r), n = () => {
                                t.getEvents().removeListener(l.U.UPDATE_ITEM, r)
                            }
                        } else t.contains(e).then(t => {
                            let [n] = t;
                            return c(t => t ? (0, a._)((0, i._)({}, t), {
                                [e]: n
                            }) : {
                                [e]: n
                            })
                        });
                    return p && c(t => (0, a._)((0, i._)({}, t), {
                        [e]: !1
                    })), n
                }, [t, p, e, m]), [u, _]
            }
        },
        36262: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var i = n(1503),
                a = n(24812),
                r = n(8179),
                s = n(72223),
                o = n(98462),
                l = n(90270),
                d = n(55594),
                u = n(25882),
                c = n(14524);
            let p = e => {
                let {
                    trackListLength: t,
                    className: n,
                    isVideoEntity: p
                } = e, m = (0, d.O)(), [_, v] = (0, s.useState)("large"), {
                    width: h,
                    height: y
                } = s.useContext(u.k), k = (0, l.aG)({
                    productName: p ? "embed_player_v" : "embed_player_p"
                }), f = (0, r.kj)();
                (0, s.useEffect)(() => {
                    y && h && v(((e, t, n, i) => n ? t <= c.OM.smallVideo ? "medium" : t <= c.OM.mediumVideo ? "large" : "xlarge" : e >= c.ht.large && t >= c.OM.medium && !i ? "large" : e >= c.ht.landscape ? "medium" : "small")(y, h, p, t))
                }, [y, h, t, p]);
                let g = f("play_on_spotify", "Play on Spotify", "Button that plays the viewed content in the Spotify client");
                return (0, i.jsx)("a", {
                    className: n,
                    onClick: () => {
                        m({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "spotify-logo"
                        })
                    },
                    title: g,
                    href: (null == k ? void 0 : k.embeddedEntity) || o.G,
                    role: "button",
                    "aria-label": g,
                    "data-testid": "spotify-logo",
                    children: (0, i.jsx)(a.D, {
                        size: _,
                        semanticColor: "textBase"
                    })
                })
            }
        },
        37795: (e, t, n) => {
            "use strict";
            n.d(t, {
                Yq: () => i,
                Z9: () => a,
                bt: () => o,
                q3: () => s
            });
            var i = function(e) {
                    return e[e.TRANSIENT = 0] = "TRANSIENT", e[e.PERSISTENT = 1] = "PERSISTENT", e
                }({}),
                a = function(e) {
                    return e.SUCCESS = "success", e.PLAYBACK_STUCK = "playback_stuck", e.PLAYBACK_ERROR = "playback_error", e.LICENSE_CHANGE = "license_change", e.PLAY_RESTRICTED = "play_restricted", e.STOP_RESTRICTED = "stop_restricted", e.UPDATE_RESTRICTED = "update_restricted", e.PAUSE_RESTRICTED = "pause_restricted", e.RESUME_RESTRICTED = "resume_restricted", e.SKIP_TO_PREV_RESTRICTED = "skip_to_prev_restricted", e.SKIP_TO_NEXT_RESTRICTED = "skip_to_next_restricted", e.SKIP_TO_NON_EXISTENT_TRACK = "skip_to_non_existent_track", e.TOGGLE_REPEAT_CONTEXT_RESTRICTED = "toggle_repeat_context_restricted", e.TOGGLE_REPEAT_TRACK_RESTRICTED = "toggle_repeat_track_restricted", e.SET_OPTIONS_RESTRICTED = "set_options_restricted", e.TOGGLE_SHUFFLE_RESTRICTED = "toggle_shuffle_restricted", e.SET_QUEUE_RESTRICTED = "set_queue_restricted", e.INTERRUPT_PLAYBACK_RESTRICTED = "interrupt_playback_restricted", e.SEEK_TO_RESTRICTED = "seek_to_restricted", e.ONE_TRACK_UNPLAYABLE = "one_track_unplayable", e.ONE_TRACK_UNPLAYABLE_AUTO_STOPPED = "one_track_unplayable_auto_stopped", e.ALL_TRACKS_UNPLAYABLE_AUTO_STOPPED = "all_tracks_unplayable_auto_stopped", e.SKIP_TO_NON_EXISTENT_TRACK_AUTO_STOPPED = "skip_to_non_existent_track_auto_stopped", e.QUEUE_REVISION_MISMATCH = "queue_revision_mismatch", e.VIDEO_PLAYBACK_ERROR = "video_playback_error", e.VIDEO_GEORESTRICTED = "video_georestricted", e.VIDEO_UNSUPPORTED_PLATFORM_VERSION = "video_unsupported_platform_version", e.VIDEO_UNSUPPORTED_CLIENT_VERSION = "video_unsupported_client_version", e.VIDEO_UNSUPPORTED_KEY_SYSTEM = "video_unsupported_key_system", e.VIDEO_COUNTRY_RESTRICTED = "video_country_restricted", e.VIDEO_UNAVAILABLE = "video_unavailable", e.VIDEO_CATALOGUE_RESTRICTED = "video_catalogue_restricted", e.VIDEO_MANIFEST_DELETED = "video_manifest_deleted", e.TIMEOUT = "timeout", e.INVALID = "invalid", e.PLAYBACK_REPORTING_ERROR = "playback_reporting_error", e.UNKNOWN = "unknown", e.UNRECOGNIZED = "unrecognized", e
                }({});
            class r extends Error {
                static getMessage(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return t.length > 0 ? "Code '".concat(e, "' with reasons '").concat(t.join(", "), "'") : void 0 !== n ? "Code '".concat(e, "' with cause '").concat(n.name, ": ").concat(n.message, "'") : "Code '".concat(e, "'")
                }
                constructor(e, t, n, i) {
                    super(r.getMessage(t, n, i)), this.type = e, this.code = t, this.reasons = n, this.cause = i
                }
            }
            class s extends r {
                constructor(e, t, n) {
                    super(0, e, t, n)
                }
            }
            class o extends r {
                constructor(e, t, n) {
                    super(1, e, t, n)
                }
            }
        },
        38081: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => O
            });
            var i = n(1503),
                a = n(84693),
                r = n(46001),
                s = n.n(r);
            n(72223);
            var o = n(93587),
                l = n(90270),
                d = n(35312),
                u = n(10800),
                c = n(79705),
                p = n(9934),
                m = n(8179),
                _ = n(55594),
                v = n(28378),
                h = n(16724),
                y = n.n(h);
            let k = e => {
                let {
                    saved: t,
                    links: n,
                    isMobile: a,
                    savedCb: r
                } = e, s = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.session.isAnonymous
                }), l = (0, _.O)(), d = (0, m.kj)(), u = t ? d("following", "Following", "Button`s text that adds an item to the user`s library") : d("follow", "Follow", "Button`s text that removes an item to the user`s library"), h = async () => {
                    s ? (l({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: "follow"
                    }), (0, v.J)({
                        url: n.embeddedEntity,
                        newWindow: !a
                    })) : (l({
                        action_type: "click",
                        action_intent: t ? "unfollow" : "follow"
                    }), await r(!t))
                };
                return (0, i.jsx)("div", {
                    className: y().followButtonWrapper,
                    children: (0, i.jsx)(c.H, {
                        "data-testid": "follow-button",
                        condensedAll: !0,
                        title: u,
                        "aria-label": u,
                        onClick: h,
                        semanticColor: "textBase",
                        size: "medium",
                        className: y().followButtonButton,
                        children: (0, i.jsx)(p.E, {
                            variant: "bodySmallBold",
                            className: y().followButtonText,
                            semanticColor: "textBase",
                            "data-testid": "follow-button-label",
                            children: u
                        })
                    })
                })
            };
            var f = n(16599),
                g = n(79098),
                b = n(50506),
                E = n(6303),
                T = n(47734),
                w = n(18688),
                x = n.n(w);
            let S = e => {
                let {
                    isPreSaved: t,
                    isMobile: n,
                    preSavedCb: a,
                    links: r
                } = e, l = (0, T.j)(), d = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.session.isAnonymous
                }), u = (0, m.kj)(), _ = t ? u("pre_release.button.pre_saved", "Pre-saved", "Label for the pre-saved button") : u("pre_release.button.pre_save", "Pre-save", "Label for the pre-save button"), h = async () => {
                    d ? (l((0, E.d)({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: "pre-save-on-spotify-button"
                    })), (0, v.J)({
                        url: r.selectedEntity,
                        newWindow: !n
                    })) : (l((0, E.d)({
                        action_type: "click",
                        action_intent: t ? "remove-pre-save-from-spotify" : "pre-save-on-spotify"
                    })), await a(!t))
                };
                return (0, i.jsx)(c.H, {
                    "data-testid": "pre-save-button",
                    condensedAll: !0,
                    title: _,
                    "aria-label": _,
                    iconLeading: (0, b.o)().isCompactLegacy ? void 0 : t ? f.k : g.P,
                    onClick: h,
                    semanticColor: "textBase",
                    size: "medium",
                    className: s()(x().preSaveButton),
                    children: (0, i.jsx)(p.E, {
                        "data-testid": "pre-save-button-label",
                        className: s()(x().preSaveButtonText),
                        children: _
                    })
                })
            };
            var N = n(90512),
                C = n.n(N);
            let A = e => {
                let {
                    saved: t,
                    isMobile: n,
                    savedCb: a,
                    links: r
                } = e, s = (0, _.O)(), l = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.session.isAnonymous
                }), d = (0, m.kj)(), u = t ? d("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : d("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library"), h = async () => {
                    l ? (s({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: "save-on-spotify-button"
                    }), (0, v.J)({
                        url: r.selectedEntity,
                        newWindow: !n
                    })) : (s({
                        action_type: "click",
                        action_intent: t ? "remove-from-spotify" : "save-on-spotify"
                    }), await a(!t))
                };
                return (0, i.jsx)(c.H, {
                    "data-testid": "save-on-spotify-button",
                    condensedAll: !0,
                    title: u,
                    "aria-label": u,
                    iconLeading: (0, b.o)().isCompactLegacy ? void 0 : t ? f.k : g.P,
                    onClick: h,
                    semanticColor: "textBase",
                    size: "medium",
                    className: C().saveOnSpotifyButton,
                    children: (0, i.jsx)(p.E, {
                        "data-testid": "save-button-label",
                        className: C().saveOnSpotifyButtonText,
                        children: u
                    })
                })
            };
            var j = n(73920),
                P = n.n(j);
            let O = e => {
                var t;
                let {
                    uri: n,
                    className: r
                } = e, c = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.isMobile
                }), p = (0, o.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return null == (t = n.entity) ? void 0 : t.isPreRelease
                }), m = (null == (t = (0, a.o_h)(n)) ? void 0 : t.type) === a.NQG.ARTIST, _ = (0, l.aG)({
                    productName: "embed_player_p",
                    intent: l.pg.ADD_TO_LIBRARY
                }), [v, h] = (0, d.A)(n), y = (0, u.M)();
                if (void 0 === v) return null;
                let f = p ? y ? (0, i.jsx)(S, {
                    isPreSaved: v[n],
                    preSavedCb: h,
                    isMobile: c,
                    links: _
                }) : null : m ? (0, i.jsx)(k, {
                    isMobile: c,
                    links: _,
                    saved: v[n],
                    savedCb: h
                }) : (0, i.jsx)(A, {
                    isMobile: c,
                    links: _,
                    saved: v[n],
                    savedCb: h
                });
                return (0, i.jsx)("div", {
                    "data-testid": "save-on-spotify",
                    className: s()(P().wrapper, r),
                    children: f
                })
            }
        },
        40768: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => h
            });
            var i = n(1503),
                a = n(82759),
                r = n(8179),
                s = n(46001),
                o = n.n(s);
            n(72223);
            var l = n(93587),
                d = n(66209),
                u = n(45027),
                c = n(61447);
            let p = e => {
                let {
                    className: t,
                    isPreview: n,
                    isAudiobook: a,
                    isTrailer: s
                } = e, o = (0, r.kj)(), l = "";
                return a ? l = o("audiobook.page.sample", "Sample", "Text on a sample tag") : n ? l = o("embed_preview", "Preview", "Text on a preview tag") : s && (l = o("track-trailer", "Trailer", "Text on a trailer tag")), (0, i.jsx)(c.v, {
                    className: t,
                    text: l
                })
            };
            var m = n(60559),
                _ = n.n(m);
            let v = e => {
                    let {
                        className: t,
                        isPreview: n,
                        isExplicit: s,
                        isAudiobook: l,
                        isTrailer: d
                    } = e, c = (0, r.kj)();
                    return (0, i.jsxs)(a.b, {
                        condensedAll: !0,
                        className: o()(_().tagList, t),
                        "aria-label": c("spe.tags", "Tags", 'Accessibility label for a list of tags such as "Explicit" and "Preview"'),
                        children: [(0, i.jsx)(p, {
                            isAudiobook: l,
                            isTrailer: d,
                            isPreview: n,
                            className: o()(_().tag, {
                                [_().hidden]: !(n || d || l)
                            })
                        }), (0, i.jsx)(u.f, {
                            className: o()(_().tag, {
                                [_().hidden]: !s
                            })
                        })]
                    })
                },
                h = () => {
                    let e = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isExplicit) && n
                        }),
                        t = (0, l.d4)(e => e.machineState.playbackMode),
                        n = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isAudiobook) && n
                        }),
                        a = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isTrailer) && n
                        }),
                        r = t === d.L.PREVIEW;
                    return e || a || n || r ? (0, i.jsx)(v, {
                        isPreview: r,
                        isExplicit: e,
                        isAudiobook: n,
                        isTrailer: a,
                        className: _().condensedTags
                    }) : null
                }
        },
        43769: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => A
            });
            var i = n(1503),
                a = n(9934),
                r = n(99166),
                s = n(8179),
                o = n(86899),
                l = n(46001),
                d = n.n(l),
                u = n(72223),
                c = n(93587),
                p = n(90270),
                m = n(55594),
                _ = n(78902),
                v = n(1477),
                h = n(88976),
                y = n(31629),
                k = n(25882),
                f = n(23847),
                g = n(14524),
                b = n(84693),
                E = n(25616),
                T = n(47662);
            let w = e => {
                let {
                    uri: t,
                    name: n,
                    onClick: a
                } = e, s = (0, u.useMemo)(() => {
                    var e;
                    return (0, T.jT)(null != (e = (0, b.o_h)(t)) ? e : void 0, !1).toString()
                }, [t]), o = (0, E.g)();
                return (0, i.jsx)(r.Y, {
                    standalone: !0,
                    semanticColor: o ? "textSubdued" : "textBase",
                    onClick: a,
                    href: s,
                    children: n
                })
            };
            var x = n(54648),
                S = n(93782),
                N = n(54422),
                C = n.n(N);
            let A = e => {
                let {
                    showUpsell: t
                } = e, {
                    width: n,
                    height: l
                } = u.useContext(k.k), b = (0, c.d4)(e => e.data.entity), {
                    metadata: E
                } = (0, u.useMemo)(() => (0, v.O)(b), [b]), {
                    playbackState: T,
                    triggerPlaybackOperation: N
                } = (0, u.useContext)(h.T), A = null == T ? void 0 : T.isPaused, j = (0, c.d4)(e => {
                    var t;
                    return !!(null == (t = e.data.entity) ? void 0 : t.isAudiobook)
                }), P = (0, m.O)(), O = (null == E ? void 0 : E.title) || "", L = (null == E ? void 0 : E.subtitle) || "", R = b.artists, I = new Date((null == E ? void 0 : E.releaseDate) || ""), B = (0, p.aG)({
                    productName: "embed_player_p"
                }), D = (0, s.Ym)(), M = (0, c.d4)(f.BT), U = ((e, t) => e && t ? t < g.ht.landscape ? "marginal" : e < g.OM.medium || t < g.ht.large ? "bodySmall" : "bodyMedium" : "bodyMedium")(n, l), F = e => () => {
                    ("title" === e || "cover-art" === e) && M && void 0 !== A && N((0, y.v7)()), P({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: e
                    })
                }, [V, W] = (0, u.useState)(!1);
                return (0, u.useEffect)(() => {
                    W(!0)
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("h2", {
                        className: d()(C().subtitle, {
                            [C().alignBelowUpsell]: t,
                            [C().isAudiobook]: j
                        }),
                        children: (0, i.jsx)(x.r, {
                            title: O,
                            children: (0, i.jsxs)("span", {
                                className: C().wrapper,
                                children: [M && !j && (0, i.jsxs)(i.Fragment, {
                                    children: [V && (0, i.jsx)(a.E, {
                                        semanticColor: "textSubdued",
                                        variant: U,
                                        children: (0, i.jsx)(o.gz, {
                                            options: {
                                                day: "numeric",
                                                month: "short"
                                            },
                                            locale: D,
                                            date: I
                                        })
                                    }), (0, i.jsx)(S.w, {
                                        className: C().separator
                                    })]
                                }), L && (0, i.jsx)(a.E, {
                                    variant: U,
                                    children: (0, i.jsx)(r.Y, {
                                        standalone: !0,
                                        semanticColor: "textSubdued",
                                        dir: "auto",
                                        onClick: F("subtitle"),
                                        href: null == B ? void 0 : B.compositeEntity,
                                        children: L
                                    })
                                }), (null == R ? void 0 : R.length) && R.map((e, t) => [t > 0 && (0, i.jsx)(a.E, {
                                    semanticColor: "textSubdued",
                                    variant: U,
                                    children: (0, _.A)(D)
                                }, "separator-".concat(e.uri)), (0, i.jsx)(w, {
                                    uri: e.uri,
                                    name: e.name,
                                    onClick: F("artist")
                                }, "artist-link-".concat(e.uri))])]
                            })
                        })
                    })
                })
            }
        },
        45027: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => s
            });
            var i = n(1503),
                a = n(8179);
            n(72223);
            var r = n(61447);
            let s = e => {
                let {
                    className: t,
                    fullText: n = !1,
                    bold: s = !1
                } = e, o = (0, a.kj)()("card.a11y.explicit", "Explicit", "Label for explicit tagging, only read by accessibility tools");
                return (0, i.jsx)(r.v, {
                    ariaLabel: o,
                    text: n ? o : "E",
                    className: t,
                    bold: s
                })
            }
        },
        45684: e => {
            e.exports = {
                buttonWrapper: "PlayButton_buttonWrapper___CMG4",
                adaptForVideo: "PlayButton_adaptForVideo__bsKjt",
                playPauseIcon: "PlayButton_playPauseIcon__EBXpd",
                disabled: "PlayButton_disabled__F2saR"
            }
        },
        46968: e => {
            e.exports = {
                menu: "OverflowMenuAudio_menu__Z7Mj5",
                visible: "OverflowMenuAudio_visible__neisd",
                menuItem: "OverflowMenuAudio_menuItem__hhrIj"
            }
        },
        47662: (e, t, n) => {
            "use strict";
            n.d(t, {
                KY: () => s,
                jT: () => r
            });
            var i = n(98462),
                a = n(16277);

            function r(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = new URL("undefined" != typeof location && location.href ? location.href : i.G),
                    r = null;
                e ? (r = new URL(e.toURL()), t && n.searchParams.forEach((e, t) => {
                    r.searchParams.set(t, e)
                })) : (r = n, t || (r.search = "")), r.searchParams.delete("nd"), r.searchParams.delete("fallback"), r.searchParams.set("go", "1");
                let s = (0, a.i)();
                return "string" == typeof(null == s ? void 0 : s.correlationId) && r.searchParams.append("sp_cid", s.correlationId), r
            }

            function s(e, t) {
                let n = r(e, t);
                return n.searchParams.set("fallback", "getapp"), n
            }
        },
        47734: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => i
            });
            let i = n(93587).wA
        },
        48957: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                n: () => k
            });
            var a = n(82536),
                r = n(71730),
                s = n(76072),
                o = n(93629),
                l = n(75410),
                d = n.n(l),
                u = n(83331),
                c = n(57953);
            let p = n.n(c)()(u.fetch);
            async function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4,
                    i = new(d()),
                    r = i.signal,
                    l = setTimeout(() => i.abort(), n);
                return (t && void 0 !== t.retries && t.retries > 0 ? p : (0, u.fetch))(e, (0, o._)((0, a._)({}, t), {
                    signal: r
                })).then(e => (clearTimeout(l), e)).catch(i => {
                    if ("AbortError" === i.name) {
                        var a;
                        throw new s.JO({
                            timeout: n,
                            url: e,
                            method: null != (a = null == t ? void 0 : t.method) ? a : "get"
                        })
                    }
                    throw clearTimeout(l), i
                })
            }
            class _ {
                withQueryParameters(e) {
                    this.queryParameters = e
                }
                withResponseType(e) {
                    this.responseType = e
                }
                withPostData(e) {
                    this.postData = e
                }
                withRetries(e) {
                    let {
                        retries: t,
                        retryOn: n,
                        retryDelay: i
                    } = e;
                    this._retryOptions = {
                        retries: t,
                        retryDelay: i,
                        retryOn: n
                    }
                }
                addHeader(e, t) {
                    return this._headers[e] = t, this
                }
                includeCredentials() {
                    return this._includeCredentials = !0, this
                }
                async send() {
                    let e;
                    if (this.postData) {
                        var t;
                        e = (null == (t = this._headers["Content-Type"]) ? void 0 : t.startsWith("application/json;charset=UTF-8")) ? JSON.stringify(this.postData) : this.postData
                    }
                    let n = new URLSearchParams(this.queryParameters).toString();
                    return m("".concat(this.url).concat(n ? "?".concat(n) : ""), (0, a._)({
                        method: this.method,
                        body: e,
                        credentials: this._includeCredentials ? "include" : void 0,
                        headers: (0, a._)({
                            "Content-Type": "text" === this.responseType ? "text/plain" : "application/json"
                        }, this._headers)
                    }, this._retryOptions)).then(async e => {
                        if (!e.ok) {
                            let t = s.O.fromResponse(e, this.method || "GET");
                            throw (0, r.oy)(t, new URL(this.url).hostname), t
                        }
                        return {
                            body: "text" === this.responseType ? await e.text() : await e.json(),
                            status: e.status
                        }
                    }).catch(e => {
                        throw e
                    })
                }
                constructor(e, t) {
                    return this.method = e, this.url = t, this.postData = null, this.queryParameters = void 0, this.responseType = "json", this._retryOptions = null, this._headers = {}, this._includeCredentials = !1, this
                }
            }
            class v {
                static setRequestImplementation(e) {
                    i = e
                }
                getRequestImplementation() {
                    return i
                }
                set accessToken(e) {
                    this._accessToken = e
                }
                get market() {
                    return this._market
                }
                set market(e) {
                    this._market = e
                }
                get locale() {
                    return this._locale
                }
                set locale(e) {
                    this._locale = e
                }
                get globalRequestHeaders() {
                    return this._globalRequestHeaders
                }
                set globalRequestHeaders(e) {
                    this._globalRequestHeaders = e
                }
                get startTimestamp() {
                    return this._startTimestamp
                }
                get host() {
                    return this._host
                }
                get method() {
                    return this._method
                }
                get endpointIdentifier() {
                    return this._endpointIdentifier
                }
                withHost(e) {
                    return this._host = e, this
                }
                withPath(e) {
                    return this.path = e, this
                }
                withResponseType(e) {
                    return this.responseType = e, this
                }
                withEndpointIdentifier(e) {
                    return this._endpointIdentifier = e, this
                }
                withQueryParameters(e) {
                    return this.queryParameters = e, this
                }
                withBody(e) {
                    return this.body = e, this
                }
                withMethod(e) {
                    return this._method = e, this
                }
                withRetries(e) {
                    let {
                        retries: t,
                        retryOn: n,
                        retryDelay: i
                    } = e;
                    return this._retryCount = t, n && (this._retryStatusCodes = n), i && (this._retryDelay = i), this
                }
                withoutMarket() {
                    return this._shouldSendMarket = !1, this
                }
                withoutGlobalHeaders() {
                    return this._shouldSendGlobalHeaders = !1, this
                }
                withoutAuthorization() {
                    return this._shouldSendAuthorization = !1, this
                }
                withLocale(e) {
                    return this._shouldSendLocale = !0, e && (this._locale = e), this
                }
                withJsonContentType() {
                    return this.jsonContentType = !0, this
                }
                withHeaders(e) {
                    return this._headers = e, this
                }
                withCredentials() {
                    return this._includeCredentials = !0, this
                }
                onBeforeSend(e) {}
                onAfterSend(e) {}
                async send() {
                    let e = new i(this.method, "".concat(this._host).concat(this.path));
                    this._shouldSendMarket && this.market && (this.queryParameters = (0, o._)((0, a._)({}, this.queryParameters), {
                        market: this.market
                    })), this._shouldSendLocale && this.locale && (this.queryParameters = (0, o._)((0, a._)({}, this.queryParameters), {
                        locale: this.locale
                    })), this.locale && e.addHeader("Accept-Language", this.locale), this._retryCount && e.withRetries({
                        retries: this._retryCount,
                        retryOn: this._retryStatusCodes,
                        retryDelay: this._retryDelay
                    }), e.withQueryParameters(this.queryParameters), e.withResponseType(this.responseType), this._shouldSendAuthorization && this._accessToken && e.addHeader("Authorization", "Bearer ".concat(this._accessToken)), e.addHeader("Accept", "application/json"), this._includeCredentials && e.includeCredentials(), this._shouldSendGlobalHeaders && this._globalRequestHeaders.length > 0 && this._globalRequestHeaders.forEach(t => {
                        let [n, i] = t;
                        e.addHeader(n, i)
                    });
                    for (let t = 0; t < this._headers.length; t++) {
                        let n = this._headers[t];
                        e.addHeader(n.key, n.value)
                    }
                    this.jsonContentType && e.addHeader("Content-Type", "application/json;charset=UTF-8"), this.body && e.withPostData(this.body);
                    try {
                        this.onBeforeSend(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    return this._startTimestamp = Date.now(), e.send().then(e => (this.onAfterSend(), e)).catch(e => {
                        throw this.onAfterSend(e), e
                    })
                }
                constructor() {
                    this._accessToken = null, this._market = "", this._headers = [], this._globalRequestHeaders = [], this._shouldSendMarket = !0, this._shouldSendGlobalHeaders = !0, this._locale = null, this._retryStatusCodes = [503], this._retryDelay = 1e3, this._shouldSendLocale = !1, this._shouldSendAuthorization = !0, this._host = "", this.path = "", this.responseType = "json", this.queryParameters = void 0, this._method = "GET", this.jsonContentType = !1, this.body = null, this._endpointIdentifier = null, this._startTimestamp = null, this._includeCredentials = !1
                }
            }
            class h {
                get accessToken() {
                    return this._accessToken
                }
                set accessToken(e) {
                    this._accessToken = e
                }
                get globalRequestHeaders() {
                    return this._globalRequestHeaders
                }
                set globalRequestHeaders(e) {
                    this._globalRequestHeaders = e
                }
                get market() {
                    return this._market
                }
                set market(e) {
                    this._market = e
                }
                get locale() {
                    return this._locale
                }
                set locale(e) {
                    this._locale = e
                }
                resetPendingRequests() {}
                build() {
                    v.setRequestImplementation(this._RequestImplementation);
                    let e = new v;
                    return e.accessToken = this._accessToken, e.market = this.market, e.locale = this.locale, e.globalRequestHeaders = this.globalRequestHeaders, e
                }
                constructor(e) {
                    this._accessToken = null, this._market = "", this._locale = "", this._globalRequestHeaders = [], this._RequestImplementation = e
                }
            }
            let y = null;
            class k {
                static setSession(e) {
                    if (!e) return;
                    let {
                        accessToken: t
                    } = e, n = this.getInstance();
                    n.accessToken = t, t || n.resetPendingRequests()
                }
                static setLocale(e) {
                    this.getInstance().locale = e
                }
                static setGlobalRequestHeaders(e) {
                    this.getInstance().globalRequestHeaders = e
                }
                static setMarket(e) {
                    this.getInstance().market = e
                }
                static resetInstance() {
                    y = null
                }
                static getInstance() {
                    return y || (y = this.createNew()), y
                }
                static createNew() {
                    return new h(_)
                }
            }
        },
        49203: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            let i = (0, n(72223).createContext)(null)
        },
        49363: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => S
            });
            var i = n(1503),
                a = n(72223),
                r = n(93587),
                s = n(55594),
                o = n(1477),
                l = n(31629),
                d = n(88976),
                u = n(84693);

            function c(e) {
                return e === u.NQG.TRACK || e === u.NQG.ALBUM || e === u.NQG.PLAYLIST || e === u.NQG.ARTIST ? 5e3 : 15e3
            }
            var p = n(8179),
                m = n(46001),
                _ = n.n(m),
                v = n(86969),
                h = n(80344),
                y = n(87082),
                k = n.n(y),
                f = n(82536),
                g = n(17459),
                b = n(13597),
                E = n.n(b);

            function T(e) {
                var {
                    children: t
                } = e, n = (0, g._)(e, ["children"]);
                return (0, i.jsxs)("label", {
                    className: E().visibleOnlyToScreenReader,
                    children: [t, (0, i.jsx)("input", (0, f._)({}, n))]
                })
            }

            function w(e, t, n) {
                let i = e.current;
                if (null === i) return 0;
                let a = i.getBoundingClientRect();
                return "vertical" === n ? 1 - Math.max(0, Math.min((t.clientY - a.top) / a.height, 1)) : Math.max(0, Math.min((t.clientX - a.left) / a.width, 1))
            }
            let x = e => {
                    let {
                        enabled: t,
                        max: n,
                        current: r,
                        entityType: s,
                        onDragStart: o,
                        onDragMove: l,
                        onDragEnd: d,
                        onStepBackward: u,
                        onStepForward: m
                    } = e, y = (0, p.kj)(), f = (0, a.useRef)(null), {
                        isDragging: g,
                        onPointerDown: b,
                        onPointerEnter: E,
                        onPointerLeave: x,
                        isHovering: S,
                        hoverPercentage: N
                    } = (e => {
                        let {
                            progressBarRef: t,
                            onDragStart: n,
                            onDragMove: i,
                            onDragEnd: r,
                            direction: s = "horizontal"
                        } = e, [o, l] = (0, a.useState)(!1), [d, u] = (0, a.useState)(!1), [c, p] = (0, a.useState)(0), m = (0, a.useRef)(n), _ = (0, a.useRef)(i), h = (0, a.useRef)(r);
                        m.current = n, _.current = i, h.current = r;
                        let y = (0, v.YQ)(e => {
                                _.current(w(t, e, s))
                            }, 20, {
                                leading: !0,
                                maxWait: 20
                            }),
                            k = (0, a.useCallback)(e => {
                                0 === e.button && (m.current(w(t, e, s)), l(!0), document.addEventListener("pointermove", y), document.addEventListener("pointerup", e => {
                                    l(!1), y.cancel(), h.current(w(t, e, s)), document.removeEventListener("pointermove", y)
                                }, {
                                    once: !0
                                }))
                            }, [y, t, s]),
                            f = (0, a.useCallback)(e => {
                                p(w(t, e, s))
                            }, [t, s]);
                        return {
                            isDragging: o,
                            onPointerDown: k,
                            onPointerEnter: (0, a.useCallback)(() => {
                                u(!0), document.addEventListener("pointermove", f)
                            }, [f]),
                            onPointerLeave: (0, a.useCallback)(() => {
                                u(!1), document.removeEventListener("pointermove", f)
                            }, [f]),
                            isHovering: d,
                            hoverPercentage: c
                        }
                    })({
                        progressBarRef: f,
                        onDragStart: o,
                        onDragMove: l,
                        onDragEnd: d
                    }), [C, A] = (0, a.useState)(!1), j = Math.max(0, Math.min(1, (null != r ? r : 0) / (n || 1))), P = S ? null != N ? N : 0 : j, O = S && n ? n * N : 0, L = C && n ? null != r ? r : 0 + c(s) : 0, R = void 0 !== n && n > 0 && (S || C), I = t && S || g, B = (e => {
                        let {
                            onStepForward: t,
                            onStepBackward: n,
                            value: i
                        } = e;
                        return (0, v.YQ)(e => {
                            parseFloat(e.target.value) > i ? null == t || t() : null == n || n()
                        }, 100, {
                            trailing: !1,
                            leading: !0,
                            maxWait: 200
                        })
                    })({
                        onStepForward: m,
                        onStepBackward: u,
                        value: null != r ? r : 0
                    });
                    return (0, i.jsxs)("div", {
                        ref: f,
                        onPointerDown: t ? b : void 0,
                        onPointerEnter: t ? E : void 0,
                        onPointerLeave: t ? x : void 0,
                        className: k().progressBarContainer,
                        children: [(0, i.jsx)(T, {
                            disabled: !t,
                            type: "range",
                            min: 0,
                            max: n,
                            value: null != r ? r : 0,
                            step: c(s),
                            onChange: e => (A(!0), B(e)),
                            onKeyDown: e => "Escape" === e.code && A(!1),
                            onFocus: () => A(!0),
                            onBlur: () => A(!1),
                            "aria-valuetext": "\n         ".concat((0, h.A)(null != r ? r : 0), " /\n         ").concat((0, h.A)(null != n ? n : 0), "\n        "),
                            children: y("playback-control.a11y.seek-slider-button", "Change progress", "Text read by accessibility tools explaining what the white dot on the player bar is for")
                        }), R && (0, i.jsx)("div", {
                            className: k().tooltip,
                            style: {
                                left: "".concat(100 * P, "%")
                            },
                            children: S ? (0, h.A)(O) : (0, h.A)(L)
                        }), (0, i.jsxs)("div", {
                            className: k().progressBarLineBackground,
                            children: [(0, i.jsx)("div", {
                                className: k().progressBarLineActive,
                                style: {
                                    transform: "translateX(-".concat(100 - (S ? N : 0) * 100, "%)")
                                }
                            }), (0, i.jsx)("div", {
                                "data-testid": "progress-bar-line",
                                id: "progress-bar-line",
                                style: {
                                    transform: "translateX(-".concat(100 - 100 * j, "%)")
                                },
                                className: k().progressBarLine
                            })]
                        }), (0, i.jsx)("div", {
                            "data-testid": "progress-bar-slider",
                            id: "progress-bar-slider",
                            className: _()(k().progressBarSlider, {
                                [k().visible]: I
                            }),
                            style: {
                                left: "".concat(100 * j, "%")
                            }
                        })]
                    })
                },
                S = () => {
                    var e;
                    let t = (0, r.d4)(e => e.data.entity),
                        {
                            triggerPlaybackOperation: n,
                            playbackState: u
                        } = (0, a.useContext)(d.T),
                        p = t.isPlayable && !!(null == u ? void 0 : u.hasContext),
                        {
                            metadata: m
                        } = (0, a.useMemo)(() => (0, o.O)(t), [t]),
                        _ = (null == u ? void 0 : u.duration) || Number(null == m ? void 0 : m.duration),
                        v = null == u || null == (e = u.item) ? void 0 : e.uri,
                        [h, y] = (0, a.useState)(null),
                        [k, f] = (0, a.useState)((null == u ? void 0 : u.positionAsOfTimestamp) || 0),
                        g = null !== h ? h : k,
                        b = (0, s.O)();
                    (0, a.useEffect)(() => {
                        f((null == u ? void 0 : u.positionAsOfTimestamp) || 0)
                    }, [null == u ? void 0 : u.positionAsOfTimestamp]);
                    let E = e => {
                        y(e * _)
                    };
                    return (0, i.jsx)(x, {
                        onDragStart: E,
                        onDragMove: E,
                        onDragEnd: e => {
                            y(null), b({
                                action_type: "click",
                                action_intent: "seek-click",
                                item_uri: v
                            });
                            let t = e * _;
                            f(t), n((0, l.jF)(t))
                        },
                        max: _,
                        current: g,
                        enabled: p,
                        entityType: t.type,
                        onStepBackward: () => {
                            f(g - c(t.type)), n((0, l.jF)(g - c(t.type)))
                        },
                        onStepForward: () => {
                            f(g + c(t.type)), n((0, l.jF)(g + c(t.type)))
                        }
                    })
                }
        },
        49371: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => E
            });
            var i = n(1503),
                a = n(44214),
                r = n(40240),
                s = n(99664),
                o = n(8179),
                l = n(46001),
                d = n.n(l),
                u = n(72223),
                c = n(93587),
                p = n(55594),
                m = n(22527),
                _ = n(88976),
                v = n(31629),
                h = n(87472),
                y = n(62046),
                k = n.n(y);
            let f = () => (0, i.jsx)("div", {
                className: k().loadingSpinner
            });
            var g = n(45684),
                b = n.n(g);
            let E = e => {
                var t, n;
                let {
                    maxTimeToNotShowLoading: l
                } = e, {
                    playbackState: y,
                    triggerPlaybackOperation: k
                } = (0, u.useContext)(_.T), {
                    isEntityPlayable: g
                } = (0, m.y)(), E = (null == y ? void 0 : y.isDisabled) || !g, T = (null == y ? void 0 : y.isBuffering) || !1, w = (0, p.O)(), x = !!(null == y ? void 0 : y.hasContext), S = null == y || null == (t = y.item) ? void 0 : t.uri, N = !x || null == (n = null == y ? void 0 : y.isPaused) || n, C = (0, o.kj)(), A = (0, c.d4)(e => e.settings.isVideoEmbed), [j, P] = (0, u.useState)(C("page.loading", "Loading", "Accessibility label for loading spinner")), O = (0, u.useRef)(!1), L = (0, u.useRef)(void 0), R = (0, u.useRef)(void 0), [I, B] = (0, u.useState)(!1);
                (0, u.useEffect)(() => {
                    O.current ? (T ? L.current = setTimeout(() => {
                        L.current = void 0, T && B(!0)
                    }, l || 200) : (L && clearTimeout(L.current), I && !R && setTimeout(() => {
                        B(!1)
                    }, 300)), I && (R.current = setTimeout(() => {
                        R.current = void 0, T || B(!1)
                    }, 300))) : O.current = !0
                });
                let D = (0, u.useRef)(null);
                return (0, u.useEffect)(() => {
                    E ? (P(C("spe.error_heading", "Something went wrong", "Accessibility label for error message")), D.current = (0, i.jsx)(a.x, {
                        className: b().playPauseIcon,
                        title: j,
                        color: (0, r.cl)("textBase")
                    })) : I ? (P(C("page.loading", "Loading", "Accessibility label for loading spinner")), D.current = (0, i.jsx)(f, {})) : N ? (P(C("embed_play", "Play", "Accessibility label for a button that plays preview of a track")), D.current = (0, i.jsx)(a.x, {
                        className: b().playPauseIcon,
                        title: j,
                        color: (0, r.cl)("textBase")
                    })) : (P(C("embed_pause", "Pause", "Accessibility label for a button that pauses preview of a track")), D.current = (0, i.jsx)(s.B, {
                        className: b().playPauseIcon,
                        title: j,
                        color: (0, r.cl)("textBase")
                    }))
                }, [I, N, C, j, E, g]), (0, i.jsx)("button", {
                    "data-testid": "play-pause-button",
                    className: d()(b().buttonWrapper, {
                        [b().disabled]: E || !g,
                        [b().adaptForVideo]: A
                    }),
                    onClick: () => {
                        E || (g ? (k((0, v.d5)(A ? h.Xr.VIDEO : h.Xr.AUDIO)), w({
                            action_type: "click",
                            action_intent: !1 === N ? "pause" : "play",
                            action_item_id: "now-playing-bar",
                            item_uri: S
                        })) : w({
                            action_type: "playback",
                            action_intent: "track-not-available",
                            action_item_id: "now-playing-bar",
                            item_uri: S
                        }))
                    },
                    "aria-label": j,
                    tabIndex: 0,
                    children: D.current
                })
            }
        },
        50506: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => o
            });
            var i = n(72223),
                a = n(93587),
                r = n(25882),
                s = n(14524);

            function o() {
                let {
                    height: e
                } = i.useContext(r.k), t = (0, a.d4)(e => e.settings.isVideoEmbed), n = (0, a.d4)(e => {
                    var t, n, i, a, r;
                    return !!(null == (n = e.data.entity) || null == (t = n.trackList) ? void 0 : t.length) || (null == (i = e.data.entity) ? void 0 : i.type) === "album" || (null == (a = e.data.entity) ? void 0 : a.type) === "artist" || (null == (r = e.data.entity) ? void 0 : r.type) === "playlist"
                });
                return {
                    isCompactLegacy: !!(e && e < s.ht.landscape) && !t && !n,
                    isCompactTracklistLegacy: !!(e && e < s.ht.landscape) && !t && n,
                    isCompactTracklist: !!(e && e < s.ht.large) && !t && n
                }
            }
        },
        50713: (e, t, n) => {
            var i = {
                "./af/strings.json": [48404, 8404],
                "./am/strings.json": [78181, 8181],
                "./ar-EG/strings.json": [91139, 1139],
                "./ar-MA/strings.json": [25749, 5749],
                "./ar-SA/strings.json": [63543, 3543],
                "./ar/strings.json": [23768, 3768],
                "./az/strings.json": [50016, 16],
                "./bg/strings.json": [50464, 464],
                "./bho/strings.json": [89870, 9870],
                "./bn/strings.json": [42579, 2579],
                "./bs/strings.json": [66140, 6140],
                "./ca/strings.json": [51735, 1735],
                "./cs/strings.json": [25365, 5365],
                "./da/strings.json": [8032, 8032],
                "./de/strings.json": [14028, 4028],
                "./el/strings.json": [29886, 9886],
                "./en-GB/strings.json": [34734, 4734],
                "./es-419/strings.json": [63436, 3436],
                "./es-AR/strings.json": [68701, 8701],
                "./es-MX/strings.json": [11499, 1499],
                "./es/strings.json": [99855, 9855],
                "./et/strings.json": [24326, 4326],
                "./eu/strings.json": [86577, 6577],
                "./fa/strings.json": [34438, 4438],
                "./fi/strings.json": [55278, 5278],
                "./fil/strings.json": [3014, 3014],
                "./fr-CA/strings.json": [36542, 6542],
                "./fr/strings.json": [33555, 3555],
                "./gl/strings.json": [54668, 4668],
                "./gu/strings.json": [76367, 6367],
                "./he/strings.json": [71056, 1056],
                "./hi/strings.json": [63156, 3156],
                "./hr/strings.json": [88949, 8949],
                "./hu/strings.json": [64768, 4768],
                "./id/strings.json": [82618, 2618],
                "./is/strings.json": [16395, 6395],
                "./it/strings.json": [12746, 2746],
                "./ja/strings.json": [35954, 5954],
                "./kn/strings.json": [94894, 4894],
                "./ko/strings.json": [64313, 4313],
                "./lt/strings.json": [14607, 4607],
                "./lv/strings.json": [99485, 9485],
                "./mk/strings.json": [74319, 4319],
                "./ml/strings.json": [49190, 9190],
                "./mr/strings.json": [68972, 8972],
                "./ms/strings.json": [61927, 1927],
                "./nb/strings.json": [79323, 9323],
                "./ne/strings.json": [49658, 9658],
                "./nl/strings.json": [33997, 3997],
                "./or/strings.json": [64094, 4094],
                "./pa-IN/strings.json": [92520, 2520],
                "./pa-PK/strings.json": [19494, 9494],
                "./pl/strings.json": [8811, 8811],
                "./pt-BR/strings.json": [6974, 6974],
                "./pt-PT/strings.json": [88174, 8174],
                "./ro/strings.json": [24808, 4808],
                "./ru/strings.json": [58942, 8942],
                "./sk/strings.json": [23277, 3277],
                "./sl/strings.json": [22776, 2776],
                "./sr/strings.json": [96234, 6234],
                "./sv/strings.json": [10094, 94],
                "./sw/strings.json": [63161, 3161],
                "./ta/strings.json": [60528, 528],
                "./te/strings.json": [31708, 1708],
                "./th/strings.json": [33507, 3507],
                "./tr/strings.json": [5737, 5737],
                "./uk/strings.json": [70103, 103],
                "./ur/strings.json": [2340, 2340],
                "./vi/strings.json": [62494, 2494],
                "./zh-CN/strings.json": [82013, 2013],
                "./zh-HK/strings.json": [84769, 4769],
                "./zh-TW/strings.json": [73769, 3769],
                "./zu/strings.json": [78070, 8070]
            };

            function a(e) {
                if (!n.o(i, e)) return Promise.resolve().then(() => {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = i[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19))
            }
            a.keys = () => Object.keys(i), a.id = 50713, e.exports = a
        },
        52886: e => {
            e.exports = {
                countdownContainer: "Countdown_countdownContainer__Kx1gI",
                column: "Countdown_column__R_JOP",
                divider: "Countdown_divider__kt4CT",
                dateInteger: "Countdown_dateInteger__O3DNs"
            }
        },
        53328: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => s
            });
            var i = n(82536),
                a = n(93629);
            let r = e => e ? "rgba(".concat(e.red, ", ").concat(e.green, ", ").concat(e.blue, ", ").concat(e.alpha, ")") : null,
                s = e => e ? (e => ({
                    "--dynamic-opacity": e.opacity,
                    "--dynamic-background-base": e.backgroundBase,
                    "--dynamic-background-tinted": e.backgroundTinted,
                    "--dynamic-background-tinted-50": e.backgroundTinted50,
                    "--background-base": e.backgroundBase,
                    "--background-tinted": e.backgroundTinted,
                    "--text-base": e.textBase,
                    "--text-bright-accent": e.textBrightAccent,
                    "--text-subdued": e.textSubdued
                }))({
                    backgroundBase: r(null == e ? void 0 : e.backgroundBase),
                    backgroundTinted: r(null == e ? void 0 : e.backgroundTintedBase),
                    backgroundTinted50: r((null == e ? void 0 : e.backgroundTintedBase) ? (0, a._)((0, i._)({}, e.backgroundTintedBase), {
                        alpha: .5
                    }) : null),
                    textBase: r(null == e ? void 0 : e.textBase),
                    textBrightAccent: r(null == e ? void 0 : e.textBrightAccent),
                    textSubdued: r(null == e ? void 0 : e.textSubdued),
                    opacity: e ? "1" : null
                }) : {}
        },
        54146: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => _
            });
            var i = n(1503),
                a = n(46001),
                r = n.n(a),
                s = n(93587),
                o = n(23847),
                l = n(74673),
                d = n(21702),
                u = n(91248),
                c = n(1756),
                p = n(46968),
                m = n.n(p);
            let _ = () => {
                let e = (0, s.d4)(e => e.machineState.showOverflowMenu),
                    t = (0, s.d4)(e => {
                        var t;
                        return (0, o.BT)(e) || (null == (t = e.data.entity) ? void 0 : t.isAudiobook) ? e.data.entity.relatedEntityUri : e.data.entity.uri
                    });
                return (0, i.jsx)(c.N, {
                    visible: e,
                    children: (0, i.jsxs)("ul", {
                        className: r()(m().menu, {
                            [m().visible]: e
                        }),
                        children: [(0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(u.y, {})
                        }), (0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(l.C, {
                                uri: t
                            })
                        }), (0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(d.M, {})
                        })]
                    })
                })
            }
        },
        54422: e => {
            e.exports = {
                title: "TitleAndSubtitle_title__Nwyku",
                subtitle: "TitleAndSubtitle_subtitle__P1cxq",
                wrapper: "TitleAndSubtitle_wrapper__xndXC",
                separator: "TitleAndSubtitle_separator__4WdMW"
            }
        },
        54648: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => c
            });
            var i = n(1503),
                a = n(46001),
                r = n.n(a),
                s = n(72223),
                o = n(93587),
                l = n(86969),
                d = n(90786),
                u = n.n(d);
            let c = e => {
                let {
                    children: t,
                    title: n
                } = e, a = (0, s.useRef)(null), d = (0, s.useRef)(null), c = (0, s.useRef)(null), p = (0, s.useRef)(0), m = (0, s.useRef)("scrolling"), _ = (0, o.d4)(e => e.settings.rtl) ? "rtl" : "ltr", v = (0, s.useRef)(void 0), h = (e => {
                    let t = (0, s.useMemo)(() => window.matchMedia(e), [e]),
                        [n, i] = (0, s.useState)(() => !t || t.matches);
                    return (0, s.useEffect)(() => {
                        if (!t || !t.addEventListener) return () => {};
                        let e = e => {
                            i(e.matches)
                        };
                        return t.addEventListener("change", e), () => {
                            t.removeEventListener("change", e)
                        }
                    }, [t]), n
                })("(prefers-reduced-motion: reduce)"), y = (0, s.useRef)({
                    initialMouseInteraction: null,
                    animationOnMount: null
                }), k = (0, s.useCallback)(() => c.current && a.current ? c.current.clientWidth - a.current.clientWidth : 0, []), f = (0, s.useCallback)(() => v && "rtl" === v.current ? 1 : -1, [v]), g = (0, s.useCallback)(() => {
                    let e = k();
                    return e > 0 && _ !== v.current ? 0 + -1 * f() * e : 0
                }, [k, _, f]), b = (0, s.useCallback)(() => {
                    var e;
                    null == (e = c.current) || e.style.setProperty("--trans-x", "".concat(g(), "px"))
                }, [g]), E = (0, s.useCallback)(() => {
                    if (h || p.current) return;
                    let e = !1,
                        t = 0,
                        n = 1,
                        i = !1,
                        a = r => {
                            let s = k();
                            if (s <= 0) return;
                            let o = !0,
                                l = t;
                            e && (i ? r > i + 1200 && (i = !1) : "paused" === m.current || ((l += (r - e) * 60 / 1e3 * n * .2) > s ? (n *= -1, i = r, l = s) : l < 0 && (n *= -1, i = r, l = 0, o = !1)), t = l, d.current.scrollLeft = t), e = r, p.current = 0, o && (p.current = requestAnimationFrame(a))
                        };
                    m.current = "scrolling", a(0)
                }, [.2, 1200, k, h]), T = (0, s.useCallback)(() => p.current, []), w = (0, s.useCallback)(() => {
                    m.current = "paused"
                }, []), x = (0, s.useCallback)(() => {
                    m.current = "scrolling"
                }, []), S = (0, s.useCallback)(() => {
                    cancelAnimationFrame(p.current), m.current = "paused", p.current = 0
                }, []), N = (0, s.useCallback)(() => {
                    Object.values(y.current).forEach(e => e && clearTimeout(e))
                }, []), C = (0, s.useCallback)(e => {
                    T() ? w() : "focus" !== e && (y.current.initialMouseInteraction = setTimeout(E, 200))
                }, [E, w, 200, T]), A = (0, s.useCallback)(() => {
                    y.current.initialMouseInteraction && clearTimeout(y.current.initialMouseInteraction), T() && x()
                }, [x, T]);
                return (0, s.useEffect)(() => {
                    y.current.animationOnMount && clearTimeout(y.current.animationOnMount), y.current.animationOnMount = setTimeout(E, 1e3)
                }, [E, 1e3]), (0, s.useEffect)(() => () => {
                    S(), N(), b()
                }, [S, N, b]), (0, s.useEffect)(() => {
                    var e, t;
                    let n = null == (e = c.current) ? void 0 : e.children[0];
                    n && (v.current = getComputedStyle(n).direction, "rtl" === v.current && (null == (t = a.current) || t.classList.add(u().containerRtl))), b()
                }, [_, g, b]), ! function(e) {
                    let t = (0, l.YQ)(e, 100, {
                        leading: !0
                    });
                    (0, s.useEffect)(() => (window.addEventListener("resize", t), () => {
                        window.removeEventListener("resize", t), t.cancel()
                    }), [t])
                }(() => {
                    S(), b()
                }), (0, i.jsx)("div", {
                    ref: a,
                    className: u().container,
                    onMouseOver: () => C("mouse"),
                    onFocus: () => C("focus"),
                    onMouseOut: A,
                    onBlur: A,
                    title: h && n ? n : void 0,
                    children: (0, i.jsx)("div", {
                        ref: d,
                        className: r()(u().scrollableContainer, {
                            [u().gradient]: k() > 0
                        }),
                        children: (0, i.jsx)("div", {
                            ref: c,
                            className: u().inner,
                            children: t
                        })
                    })
                })
            }
        },
        55531: e => {
            e.exports = {
                backgroundCoverArt: "BackgroundCoverArt_backgroundCoverArt__i5yOP"
            }
        },
        55594: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => p
            });
            var i = n(54651),
                a = n(84693),
                r = n(72223),
                s = n(93587),
                o = n(84189),
                l = n(34061),
                d = n(66209),
                u = n(99128),
                c = n(27442);
            let p = () => {
                let {
                    eventSender: e
                } = (0, o.g)(), t = (0, s.d4)(e => {
                    var t;
                    return null == (t = e.data.entity) ? void 0 : t.uri
                }), n = (0, s.d4)(e => e.data.embeded_entity_uri), p = (0, s.d4)(e => e.settings.isVideoEmbed), m = (0, s.d4)(e => e.machineState.playbackMode), _ = (0, s.d4)(e => e.settings.isMobile), v = (0, s.d4)(e => e.settings.isTablet), h = (0, s.d4)(e => e.settings.session.isAnonymous), y = (0, a.o_h)(n), k = (0, s.d4)(e => {
                    var t;
                    return (null == (t = e.data.entity) ? void 0 : t.isAudiobook) ? l.c.AUDIOBOOK : null == y ? void 0 : y.type
                });
                return (0, r.useCallback)(a => {
                    var r, s, o;
                    if (!e) return;
                    let l = m === d.L.PREVIEW,
                        {
                            osName: y,
                            osVersion: f,
                            browserName: g,
                            browserVersion: b
                        } = (0, c.F)(),
                        E = (0, u.H)(),
                        T = {
                            device_type: _ || v ? "mobile" : "desktop",
                            view_uri: t,
                            entity_uri: n,
                            entity_type: k,
                            embed_is_video: !!p,
                            page_url: window.location.href,
                            referrer: E,
                            viewport_width: window.innerWidth,
                            viewport_height: window.innerHeight,
                            is_authenticated: !h,
                            browser_name: g,
                            browser_version: b,
                            os_name: y,
                            os_version: f,
                            is_preview: l,
                            action_type: a.action_type,
                            action_intent: null != (r = a.action_intent) ? r : null,
                            action_item_id: null != (s = a.action_item_id) ? s : null,
                            item_uri: null != (o = a.item_uri) ? o : null
                        };
                    e.send((0, i.i)(T))
                }, [e, t, n, p, _, v, h, m, k])
            }
        },
        57310: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => g
            });
            var i = n(1503),
                a = n(79705),
                r = n(16599),
                s = n(79098),
                o = n(8179),
                l = n(84693),
                d = n(72223),
                u = n(93587),
                c = n(90270),
                p = n(35312),
                m = n(55594),
                _ = n(10800),
                v = n(25882),
                h = n(14524),
                y = n(28378),
                k = n(94244),
                f = n.n(k);
            let g = () => {
                var e;
                let t = (0, u.d4)(e => {
                        var t;
                        return (null == (t = e.data.entity) ? void 0 : t.type) !== l.NQG.ARTIST
                    }),
                    n = (0, u.d4)(e => e.settings.isMobile),
                    k = (0, m.O)(),
                    g = (0, o.kj)(),
                    b = (0, u.d4)(e => e.settings.session.isAnonymous),
                    E = (0, u.d4)(e => {
                        var t;
                        return (null == (t = e.data.entity) ? void 0 : t.isAudiobook) ? e.data.entity.relatedEntityUri : e.data.entity.uri
                    }),
                    T = (0, u.d4)(e => e.settings.isVideoEmbed),
                    w = null != (e = (0, u.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return null == (t = n.entity) ? void 0 : t.isPreRelease
                    })) && e,
                    x = (0, c.aG)({
                        productName: "embed_player_p",
                        intent: c.pg.ADD_TO_LIBRARY
                    }),
                    [S, N] = (0, p.A)(E),
                    {
                        width: C
                    } = d.useContext(v.k),
                    A = (0, _.M)();
                if (!(t && (!w || A)) || void 0 === S) return null;
                let j = ((e, t, n) => t ? e ? n("embed.saved-on-spotify", "Pre-saved", "Button`s text that removes an item to the user`s library") : n("embed.save-on-spotify", "Pre-save", "Button`s text that adds an item to the user`s library") : e ? n("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : n("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library"))(S[E], w, g),
                    P = ((e, t) => t ? e ? "remove-pre-save-from-spotify" : "pre-save-on-spotify" : e ? "remove-from-spotify" : "save-on-spotify")(S[E], w),
                    O = async () => {
                        b ? (k({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: P
                        }), (0, y.J)({
                            url: x.embeddedEntity,
                            newWindow: !n
                        })) : (k({
                            action_type: "click",
                            action_intent: S[E] ? "remove-from-spotify" : "save-on-spotify",
                            action_item_id: P
                        }), await N(!S[E]))
                    };
                return (0, i.jsx)(a.H, {
                    iconOnly: S[E] ? r.k : s.P,
                    "data-testid": "save-on-spotify-button",
                    condensedAll: !0,
                    title: j,
                    "aria-label": j,
                    onClick: O,
                    semanticColor: "textBase",
                    size: T && C && C > h.OM.mediumVideo ? "large" : "medium",
                    className: f().addToLibraryButton
                })
            }
        },
        59050: e => {
            e.exports = {
                closeButton: "CloseButton_closeButton__FDeuo"
            }
        },
        59462: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => k
            });
            var i = n(82536),
                a = n(93629),
                r = n(1503),
                s = n(9934),
                o = n(8179),
                l = n(46001),
                d = n.n(l),
                u = n(72223),
                c = n(93587),
                p = n(55594),
                m = n(1477),
                _ = n(88976),
                v = n(80344),
                h = n(63502),
                y = n.n(h);
            let k = () => {
                let e = (0, c.d4)(e => e.data.entity),
                    {
                        playbackState: t
                    } = (0, u.useContext)(_.T),
                    {
                        metadata: n
                    } = (0, u.useMemo)(() => (0, m.O)(e), [e]),
                    l = (0, c.d4)(e => {
                        var t;
                        return null == (t = e.data.entity) ? void 0 : t.isPreRelease
                    }),
                    h = (null == t ? void 0 : t.duration) || Number(null == n ? void 0 : n.duration),
                    [k, f] = (0, u.useState)({
                        dragPosition: null,
                        showRemainingTime: !0
                    }),
                    g = (0, o.kj)(),
                    {
                        showRemainingTime: b,
                        dragPosition: E
                    } = k,
                    [T, w] = (0, u.useState)(g("spe.playback-control.progress-timestamp", "Progress timestamp", "Accessibility label for a numeric progress display in the currently playing track, in minutes and seconds")),
                    x = 0;
                Number.isFinite(E) ? x = E * h : (null == t ? void 0 : t.positionAsOfTimestamp) && (x = null == t ? void 0 : t.positionAsOfTimestamp);
                let S = "";
                S = (null == t ? void 0 : t.hasContext) || (null == t ? void 0 : t.isPaused) !== void 0 ? b ? (0, v.A)((x || 0) - h) : (0, v.A)(x || 0) : (0, v.A)(h), (0, u.useEffect)(() => {
                    b ? w("".concat(S, " remaining time. Toggle to elapsed.")) : w("".concat(S, " elapsed time. Toggle to remaining."))
                }, [S, b]);
                let N = S.replace(/\d/g, "0").replace(/^\d/, "-0"),
                    C = (0, p.O)();
                return (0, r.jsxs)("button", {
                    className: d()(y().progressTimer, {
                        [y().hideForSmallLandscape]: l
                    }),
                    onClick: () => {
                        f((0, a._)((0, i._)({}, k), {
                            showRemainingTime: !k.showRemainingTime
                        })), C({
                            action_type: "click",
                            action_intent: "change-time-format"
                        })
                    },
                    "aria-disabled": !(null == t ? void 0 : t.hasContext) && (null == t ? void 0 : t.isPaused) === void 0 || (null == t ? void 0 : t.isPaused),
                    tabIndex: !(null == t ? void 0 : t.hasContext) && (null == t ? void 0 : t.isPaused) === void 0 || (null == t ? void 0 : t.isPaused) ? -1 : 0,
                    "aria-pressed": b,
                    "aria-label": T,
                    children: [(0, r.jsx)("span", {
                        className: y().progressTimeSpacer,
                        "aria-hidden": !0,
                        children: N
                    }), (0, r.jsx)(s.E, {
                        className: y().actualProgressTime,
                        "data-testid": "progress-timestamp",
                        semanticColor: "textBase",
                        variant: "bodySmall",
                        children: S
                    })]
                })
            }
        },
        60559: e => {
            e.exports = {
                tagList: "Tags_tagList__6JpKG",
                tag: "Tags_tag__bbXTA",
                hidden: "Tags_hidden__IArVG",
                condensedTags: "Tags_condensedTags__w_NCJ"
            }
        },
        61447: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => u
            });
            var i = n(1503),
                a = n(9934),
                r = n(46001),
                s = n.n(r),
                o = n(93587),
                l = n(75921),
                d = n.n(l);
            let u = e => {
                let {
                    text: t,
                    ariaLabel: n = t,
                    title: r = n,
                    className: l,
                    bold: u = !1
                } = e, c = (0, o.d4)(e => e.settings.isDarkMode);
                return (0, i.jsx)(a.E, {
                    "aria-label": n,
                    className: s()(d().container, l, {
                        [d().isDarkTheme]: c,
                        [d().bold]: u
                    }),
                    title: r,
                    "data-testid": "tag",
                    children: t
                })
            }
        },
        62046: e => {
            e.exports = {
                loadingSpinner: "LoadingSpinner_loadingSpinner__RhjXu",
                SpinAnimation: "LoadingSpinner_SpinAnimation__yiW4R"
            }
        },
        63502: e => {
            e.exports = {
                progressTimeSpacer: "ProgressTimer_progressTimeSpacer__aN1q5",
                actualProgressTime: "ProgressTimer_actualProgressTime__kN3ww",
                progressTimer: "ProgressTimer_progressTimer__EIq8k",
                hideForSmallLandscape: "ProgressTimer_hideForSmallLandscape__kbEzw"
            }
        },
        63665: e => {
            e.exports = {
                text: "UpsellTitle_text__28Mv1"
            }
        },
        66209: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => i,
                b: () => a
            });
            var i = function(e) {
                return e.UNKNOWN = "unknown", e.FULL = "full-playback", e.PREVIEW = "preview-playback", e
            }({});
            let a = "SET_PLAYBACK_MODE"
        },
        67578: e => {
            e.exports = {
                wrapper: "OverflowMenuBase_wrapper__CyfQs",
                visible: "OverflowMenuBase_visible__bdlfX",
                menuContent: "OverflowMenuBase_menuContent__Kcicz",
                closeButton: "OverflowMenuBase_closeButton__pATy_",
                policies: "OverflowMenuBase_policies__r_Fbu",
                stickDown: "OverflowMenuBase_stickDown__xfZSA",
                link: "OverflowMenuBase_link__8OQFz",
                separator: "OverflowMenuBase_separator__l_I5t",
                adaptToOverflowMenu: "OverflowMenuBase_adaptToOverflowMenu__YeDTC"
            }
        },
        70481: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => a,
                b: () => r
            });
            var i = n(8159),
                a = function(e) {
                    return e.UPDATE_ITEM = "update_item", e
                }({});
            class r extends i.bk {}
        },
        71730: (e, t, n) => {
            "use strict";
            n.d(t, {
                oy: () => r
            }), n(67510);
            var i = n(86727),
                a = n(50581);
            let r = (e, t) => {
                var n;
                let r = e instanceof Error ? e : Error(String(e));
                (0, a.fE)({
                    metric_type: i.MetricTypes.COUNTER,
                    what: "error",
                    tags: {
                        errorName: null != (n = r.name) ? n : JSON.stringify(r),
                        type: "network",
                        serviceName: t,
                        status: void 0 !== r.status ? String(r.status) : "UNKNOWN_STATUS"
                    },
                    value: 1
                })
            }
        },
        72146: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => p
            });
            var i = n(1503),
                a = n(79705),
                r = n(6302),
                s = n(8179),
                o = n(55594),
                l = n(98849),
                d = n(47734),
                u = n(22548),
                c = n.n(u);
            let p = () => {
                let e = (0, d.j)(),
                    t = (0, o.O)(),
                    n = (0, s.kj)()("embed_more", "More", "Accessibility label for an open context menu button");
                return (0, i.jsx)(a.H, {
                    condensedAll: !0,
                    size: "small",
                    className: c().overflowMenuButton,
                    semanticColor: "textBase",
                    title: n,
                    "aria-label": n,
                    onClick: () => {
                        e((0, l.v7)()), t({
                            action_type: "click",
                            action_intent: "open-context-menu"
                        })
                    },
                    children: (0, i.jsx)(r.x, {})
                })
            }
        },
        72280: (e, t, n) => {
            "use strict";
            n.d(t, {
                Fv: () => r,
                iG: () => i,
                tx: () => a
            });
            let i = "CLOSE_OVERFLOW_MENU",
                a = "SHOW_OVERFLOW_MENU",
                r = "PLAY_ON_SPOTIFY_CLICK"
        },
        72447: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => b
            });
            var i = n(82536),
                a = n(93629),
                r = n(72223),
                s = n(85489),
                o = n(66209);
            let l = e => {
                let t = new URL(e.href).searchParams.get("t");
                if (t) {
                    let e = parseInt(t, 10);
                    if (e > 0) return e
                }
                return null
            };
            var d = n(16277),
                u = n(1477),
                c = n(87472),
                p = n(79917),
                m = n(31629);
            let _ = () => ({
                    featureIdentifier: "embed",
                    featureVersion: "3",
                    referrerIdentifier: "PlayerStub_UnknownReferrer",
                    restrictionIdentifier: (0, d.i)().restrictionId ? (0, d.i)().restrictionId : void 0
                }),
                v = (e, t, n, r) => {
                    if (t === o.L.PREVIEW) {
                        var s, l;
                        return (0, a._)((0, i._)({}, e), {
                            metadata: (0, a._)((0, i._)({}, e.metadata), {
                                externalResolvedUrl: r === c.Xr.AUDIO ? null == (s = e.metadata) ? void 0 : s.audioPreviewUrl : null == (l = e.metadata) ? void 0 : l.videoPreviewUrl
                            })
                        })
                    }
                    return (0, a._)((0, i._)({}, e), {
                        metadata: (0, a._)((0, i._)({}, e.metadata), {
                            useAuthEndpoint: n ? "yes" : ""
                        })
                    })
                },
                h = (e, t) => t.mediaType !== c.Xr.VIDEO ? e : (0, a._)((0, i._)({}, e), {
                    metadata: (0, a._)((0, i._)({}, e.metadata), {
                        mediaType: c.Xr.VIDEO
                    })
                }),
                y = (e, t, n, i) => {
                    let a = n === o.L.PREVIEW,
                        r = null == e ? void 0 : e.findIndex((e, n) => n > t && (0, p.C)(e, a, i));
                    return null != r ? r : -1
                },
                k = (e, t, n) => (null == e ? void 0 : e.trackList) && t === o.L.PREVIEW ? (0, u.O)(e.trackList[null != n ? n : 0]) : (0, u.O)(e),
                f = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        a = t === o.L.PREVIEW;
                    return e.slice(0, i + 1).map(e => (0, p.C)(e, a, n)).reduce((e, t) => t ? e + 1 : e, 0) - 1
                };
            async function g(e, t, n) {
                var i, a, r, s, d, u, b, E, T;
                let {
                    settings: w,
                    machineState: x,
                    data: {
                        entity: S,
                        defaultAudioFileObject: N
                    }
                } = t.getState(), C = t.dispatch, A = w.session.isAnonymous, j = x.playbackMode === o.L.PREVIEW, P = k(S, x.playbackMode), O = e.getState();
                switch (n.type) {
                    case c.CU:
                        if ((null == S ? void 0 : S.trackList) && j && !(null == O ? void 0 : O.hasContext)) {
                            let n = null != (i = w.isAudiobookLaunchedInGeoMarket) && i,
                                a = S.trackList.findIndex(e => (0, p.C)(e, j, n));
                            if (-1 === a) break;
                            await g(e, t, (0, m.h2)(a))
                        } else if ((null == O ? void 0 : O.hasContext) && (null == O ? void 0 : O.isPaused) === !1) await e.pause();
                        else if ((null == O ? void 0 : O.hasContext) && (null == O ? void 0 : O.isPaused) === !0) await e.resume();
                        else {
                            let t = l(window.location),
                                i = v(h(P, n), x.playbackMode, !A, n.mediaType);
                            await e.play(i, _(), {
                                seekTo: t ? 1e3 * t : void 0
                            }, N)
                        }
                        break;
                    case c.tr:
                        {
                            let t = l(window.location),
                                i = v(h(P, n), x.playbackMode, !A, n.mediaType);await e.play(i, _(), {
                                seekTo: t ? 1e3 * t : void 0
                            }, N)
                        }
                        break;
                    case c.WO:
                        if (j) {
                            let t = v(h(k(S, x.playbackMode, n.index), n), x.playbackMode, !A, n.mediaType);
                            await e.play(t, _(), {}, N), C((0, m.TB)(n.index))
                        } else {
                            let t = v(h(P, n), x.playbackMode, !A, n.mediaType),
                                i = (null == (a = t.pages) ? void 0 : a.length) !== (null == S || null == (r = S.trackList) ? void 0 : r.length) && t.pages ? f(null == S ? void 0 : S.trackList, x.playbackMode, null != (s = w.isAudiobookLaunchedInGeoMarket) && s, n.index) : n.index;
                            await e.play(t, _(), {
                                skipTo: {
                                    index: i
                                }
                            }, N)
                        }
                        break;
                    case c.IY:
                        await e.resume();
                        break;
                    case c.Hz:
                        await e.pause();
                        break;
                    case c.NI:
                        if (n.time && Number.isFinite(n.time)) await e.seekTo(n.time);
                        else if (n.percentage && Number.isFinite(n.percentage)) {
                            let t = (null == O ? void 0 : O.duration) || Number(null == (d = P.metadata) ? void 0 : d.duration);
                            await e.seekTo(n.percentage * t)
                        }
                        break;
                    case c.r2:
                        await e.seekForward(15e3);
                        break;
                    case c.hM:
                        await e.seekBackward(15e3);
                        break;
                    case c.lQ:
                        if (j) {
                            let n = y(null == S ? void 0 : S.trackList, x.currentPreviewTrackIndex, x.playbackMode, null != (u = w.isAudiobookLaunchedInGeoMarket) && u);
                            if (n >= 0) await g(e, t, (0, m.h2)(n));
                            else {
                                let n = null != (E = null == S || null == (b = S.trackList) ? void 0 : b.findIndex(e => {
                                    var t;
                                    return (0, p.C)(e, j, null != (t = w.isAudiobookLaunchedInGeoMarket) && t)
                                })) ? E : -1;
                                n >= 0 && await g(e, t, (0, m.h2)(n))
                            }
                        } else await e.skipToNext();
                        break;
                    case c.rp:
                        if (j) {
                            if (O && null !== O.positionAsOfTimestamp && (O.positionAsOfTimestamp > 3e3 || 0 === x.currentPreviewTrackIndex)) await e.seekTo(0);
                            else if (x.currentPreviewTrackIndex > 0) {
                                let n = ((e, t, n, i) => {
                                    let a = n === o.L.PREVIEW;
                                    for (let n = t - 1; n >= 0; n--)
                                        if (e && (0, p.C)(e[n], a, i)) return n;
                                    return -1
                                })(null == S ? void 0 : S.trackList, x.currentPreviewTrackIndex, x.playbackMode, null != (T = w.isAudiobookLaunchedInGeoMarket) && T);
                                n >= 0 && await g(e, t, (0, m.h2)(n))
                            }
                        } else await e.skipToPrevious();
                        break;
                    case c.oD:
                        await e.mute();
                        break;
                    case c.zK:
                        await e.unmute()
                }
            }
            let b = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [d, u] = (0, r.useState)(n),
                    [c, p] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = l(window.location);
                    e && u((0, a._)((0, i._)({}, n), {
                        positionAsOfTimestamp: 1e3 * e
                    }))
                }, [n]);
                let _ = (0, r.useCallback)(n => e && g(e, t, n), [e, t]),
                    {
                        machineState: {
                            playbackMode: v,
                            currentPreviewTrackIndex: h
                        },
                        settings: {
                            isAudiobookLaunchedInGeoMarket: k
                        },
                        data: {
                            entity: f
                        }
                    } = t.getState();
                return (0, r.useEffect)(() => {
                    if (!c || v !== o.L.PREVIEW || !(null == f ? void 0 : f.trackList)) return;
                    let e = f.trackList.length > h + 1,
                        t = h >= f.trackList.length - 1;
                    if (e) {
                        let e = y(f.trackList, h, v, null != k && k);
                        e >= 0 ? (p(!1), _((0, m.h2)(e))) : (p(!1), _((0, m.TB)(0)))
                    } else t && (p(!1), _((0, m.TB)(0)))
                }, [c, _, v, null == f ? void 0 : f.trackList, h, k]), (0, r.useEffect)(() => {
                    let t = e => {
                            u(t => (0, i._)({}, t, e.data))
                        },
                        n = e => {
                            u(t => (0, a._)((0, i._)({}, t), {
                                isDisabled: !0,
                                error: (0, a._)((0, i._)({}, e.data), {
                                    message: e.data.message
                                })
                            }))
                        },
                        r = () => {
                            p(!0)
                        };
                    if (e) {
                        let o = e.getEvents();
                        o.addListener(s.gd.UPDATE, t), o.addListener(s.gd.ERROR, n), o.addListener(s.gd.TRACK_ENDED, r), u(e => (0, a._)((0, i._)({}, e), {
                            isDisabled: !1
                        }))
                    } else u(e => (0, a._)((0, i._)({}, e), {
                        isDisabled: !0
                    }));
                    return () => {
                        if (e) {
                            let i = e.getEvents();
                            i.removeListener(s.gd.UPDATE, t), i.removeListener(s.gd.ERROR, n), i.removeListener(s.gd.TRACK_ENDED, r)
                        }
                    }
                }, [e]), {
                    playbackState: d,
                    triggerPlaybackOperation: _
                }
            }
        },
        73920: e => {
            e.exports = {
                wrapper: "AddToLibrary_wrapper__FZKUv"
            }
        },
        74673: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => y
            });
            var i = n(1503),
                a = n(85871),
                r = n(73606),
                s = n(16599),
                o = n(79098),
                l = n(8179),
                d = n(84693);
            n(72223);
            var u = n(93587),
                c = n(90270),
                p = n(50506),
                m = n(35312),
                _ = n(55594),
                v = n(28378),
                h = n(6309);
            let y = e => {
                let {
                    uri: t,
                    action: n
                } = e, y = (0, l.kj)(), k = (0, u.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.isMobile
                }), f = (0, _.O)(), g = (0, u.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return null == (t = n.entity) ? void 0 : t.isAudiobook
                }), b = (0, u.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return (null == (t = n.entity) ? void 0 : t.type) === d.NQG.EPISODE
                }), {
                    isCompactLegacy: E,
                    isCompactTracklistLegacy: T
                } = (0, p.o)(), w = (0, u.d4)(e => e.settings.session.isAnonymous), x = n && "follow" === n || !n && (e => {
                    var t;
                    let {
                        uri: n,
                        isAudiobook: i
                    } = e, a = null == (t = (0, d.o_h)(n)) ? void 0 : t.type;
                    return a === d.NQG.ARTIST || a === d.NQG.SHOW && !i
                })({
                    uri: t,
                    isAudiobook: g
                }), S = (0, c.aG)({
                    productName: "embed_player_v",
                    intent: c.pg.ADD_TO_LIBRARY
                }), [N, C] = (0, m.A)(t);
                if (void 0 === N) return null;
                let A = (e => {
                        let {
                            isFollowButton: t,
                            saved: n,
                            t: i
                        } = e;
                        return t ? n ? i("mwp.context.stop.following", "Stop Following", "Button`s text that removes an item to the user`s library") : i("follow_on_spotify", "Follow on Spotify", "Button`s text that adds an item to the user`s library") : n ? i("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : i("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library")
                    })({
                        isFollowButton: x,
                        saved: N[t],
                        t: y
                    }),
                    j = async () => {
                        w ? (f({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: x ? "follow" : "add-to-library"
                        }), (0, v.J)({
                            url: ((e, t, n) => e ? t ? n.compositeEntity : n.embeddedEntity : n.selectedEntity)(x, b, S),
                            newWindow: !k
                        })) : (f({
                            action_type: "click",
                            action_intent: ((e, t) => e ? t ? "unfollow" : "follow" : t ? "remove-from-spotify" : "save-on-spotify")(x, N[t])
                        }), await C(!N[t]))
                    };
                return (0, i.jsx)(h.D, {
                    title: A,
                    onClick: j,
                    icon: E || T ? void 0 : ((e, t) => e ? t ? a.M : r.h : t ? s.k : o.P)(x, N[t]),
                    testId: x ? "follow-button" : "save-on-spotify-button",
                    children: A
                })
            }
        },
        75921: e => {
            e.exports = {
                container: "Tag_container__ju3CN",
                isDarkTheme: "Tag_isDarkTheme__RUhz8",
                bold: "Tag_bold__ALYll"
            }
        },
        76072: (e, t, n) => {
            "use strict";
            n.d(t, {
                JO: () => a,
                O: () => i
            }), n(82536), n(93629), n(84693);
            class i extends Error {
                static fromResponse(e, t) {
                    return new i({
                        message: e.statusText,
                        url: e.url,
                        method: t,
                        status: e.status,
                        response: e
                    })
                }
                constructor(e) {
                    let {
                        message: t,
                        url: n,
                        method: i,
                        status: a,
                        response: r
                    } = e;
                    super(t), this.name = "HttpResponseError", this.requestUrl = n, this.requestMethod = i, this.status = a, this.response = r
                }
            }
            class a extends i {
                constructor(e) {
                    let {
                        timeout: t,
                        url: n,
                        method: i
                    } = e;
                    super({
                        message: "".concat(i.toUpperCase(), " ").concat(n, " timed out (").concat(t, "ms)"),
                        url: n,
                        method: i,
                        status: 503
                    }), this.name = "HttpRequestTimeoutError", this.timeout = t
                }
            }
            n(71730)
        },
        77017: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            let i = e => {
                var t;
                let n = null != (t = null == e ? void 0 : e.positionAsOfTimestamp) ? t : null;
                if (null === e || null === n || null === e.duration) return null;
                let {
                    timestamp: i,
                    duration: a,
                    speed: r,
                    hasContext: s,
                    isPaused: o,
                    isBuffering: l
                } = e;
                return !s || o || l ? n : Math.min(n + (Date.now() - i) * (null != r ? r : 0), a)
            }
        },
        77580: e => {
            e.exports = {
                clicked: "CopyLink_clicked__O9BXe",
                "out-in": "CopyLink_out-in__HDSDy",
                unclicked: "CopyLink_unclicked__dYp_M",
                "in-out": "CopyLink_in-out__3Q56J"
            }
        },
        78902: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var i = function(e) {
                return e.AR = "،\xa0", e.FA = "،\xa0", e.EN = ",\xa0", e
            }(i || {});
            let a = e => {
                switch (e) {
                    case "ar":
                    case "fa":
                        return "،\xa0";
                    default:
                        return ",\xa0"
                }
            }
        },
        79917: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => a
            });
            var i = n(34061);

            function a(e, t, n) {
                if (t) {
                    var a;
                    if (e.entityType === i.c.CHAPTER) return e.isPlayable && n;
                    if (e.entityType === i.c.EPISODE && !e.isPlayable && (null == (a = e.audioPreview) ? void 0 : a.url)) return !0
                }
                return e.isPlayable
            }
        },
        80344: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            let i = e => e < 10 ? "0".concat(e) : "".concat(e),
                a = e => {
                    let t = Math.abs(e),
                        n = Math.floor(t / 36e5),
                        a = Math.floor(t % 36e5 / 6e4) || 0,
                        r = Math.floor(t % 6e4 / 1e3) || 0,
                        s = i(a),
                        o = i(r),
                        l = [n ? "".concat(n) : "", s, o].filter(e => e).join(":");
                    return "".concat(e < 0 ? "-" : "").concat(l)
                }
        },
        81987: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => _
            });
            var i = n(1503),
                a = n(14350),
                r = n(9934),
                s = n(8179),
                o = n(46001),
                l = n.n(o),
                d = n(72223),
                u = n(93587);
            let c = e => {
                let t = new Date;
                return new Date(e).getTime() - t.getTime()
            };
            var p = n(52886),
                m = n.n(p);
            let _ = e => {
                let {
                    visibleCells: t,
                    onCountDownEnds: n
                } = e, o = (0, u.d4)(e => {
                    var t;
                    return null == (t = e.data.entity) ? void 0 : t.releaseDate
                }), {
                    days: p,
                    hours: _,
                    minutes: v,
                    seconds: h
                } = (e => {
                    let {
                        releaseDate: t,
                        onCountDownEnds: n
                    } = e, [i, a] = (0, d.useState)(0);
                    return (0, d.useEffect)(() => {
                        a(c(t))
                    }, [t]), (0, d.useEffect)(() => {
                        let e = setInterval(() => {
                            let i = c(t);
                            i <= 0 ? (null == n || n(), clearInterval(e)) : a(i)
                        }, 1e3);
                        return () => clearInterval(e)
                    }, [t, n]), (e => e <= 0 ? {
                        days: "00",
                        hours: "00",
                        minutes: "00",
                        seconds: "00"
                    } : {
                        days: Math.floor(e / 864e5).toString(),
                        hours: Math.floor(e / 36e5 % 24).toString(),
                        minutes: Math.floor(e / 6e4 % 60).toString(),
                        seconds: Math.floor(e / 1e3 % 60).toString()
                    })(i)
                })({
                    releaseDate: (null == o ? void 0 : o.isoString) || "",
                    onCountDownEnds: n
                }), y = (0, s.kj)(), k = "0" !== p, f = "0" !== _, g = "0" !== v, b = "0" !== h, E = [], T = (E = 1 === t ? k ? ["days"] : f ? ["hours"] : g ? ["minutes"] : b ? ["seconds"] : ["days"] : 2 === t ? k ? ["days", "hours"] : f ? ["hours", "minutes"] : g ? ["minutes", "seconds"] : b ? ["seconds"] : ["days", "hours"] : 3 === t ? ["days", "hours", "minutes"] : ["days", "hours", "minutes", "seconds"]).includes("days"), w = E.includes("hours"), x = E.includes("minutes"), S = E.includes("seconds"), N = (0, d.useMemo)(() => "1" === p ? y("pre_release.countdown.day", "Day", "Countdown label for a day") : y("pre_release.countdown.days", "Days", "Countdown label for days"), [p, y]), C = (0, d.useMemo)(() => "1" === _ ? y("pre_release.countdown.hour", "Hour", "Countdown label for an hour") : y("pre_release.countdown.hours", "Hours", "Countdown label for hours"), [_, y]), A = (0, d.useMemo)(() => "1" === v ? y("pre_release.countdown.minute", "Minute", "Countdown label for a minute") : y("pre_release.countdown.minutes", "Minutes", "Countdown label for minutes"), [v, y]), j = (0, d.useMemo)(() => "1" === h ? y("pre_release.countdown.second", "Second", "Countdown label for a second") : y("pre_release.countdown.seconds", "Seconds", "Countdown label for seconds"), [h, y]);
                return (0, i.jsxs)(a.a, {
                    borderRadius: "larger",
                    className: m().countdownContainer,
                    "data-testid": "prerelease-countdown",
                    paddingBlockStart: "tighter-4",
                    paddingBlockEnd: "tighter-4",
                    paddingInlineStart: "tighter-2",
                    paddingInlineEnd: "tighter-2",
                    children: [T && (0, i.jsxs)("div", {
                        className: l()(m().column, {
                            [m().divider]: w
                        }),
                        children: [(0, i.jsx)(r.E, {
                            className: m().dateInteger,
                            variant: "titleSmall",
                            children: p
                        }), (0, i.jsx)(r.E, {
                            variant: "marginal",
                            color: "textSubdued",
                            children: N
                        })]
                    }), w && (0, i.jsxs)("div", {
                        className: l()(m().column, {
                            [m().divider]: x
                        }),
                        children: [(0, i.jsx)(r.E, {
                            className: m().dateInteger,
                            variant: "titleSmall",
                            children: _
                        }), (0, i.jsx)(r.E, {
                            variant: "marginal",
                            color: "textSubdued",
                            children: C
                        })]
                    }), x && (0, i.jsxs)("div", {
                        className: l()(m().column, {
                            [m().divider]: S
                        }),
                        children: [(0, i.jsx)(r.E, {
                            className: m().dateInteger,
                            variant: "titleSmall",
                            children: v
                        }), (0, i.jsx)(r.E, {
                            variant: "marginal",
                            color: "textSubdued",
                            children: A
                        })]
                    }), S && (0, i.jsxs)("div", {
                        className: m().column,
                        children: [(0, i.jsx)(r.E, {
                            className: m().dateInteger,
                            variant: "titleSmall",
                            children: h
                        }), (0, i.jsx)(r.E, {
                            variant: "marginal",
                            color: "textSubdued",
                            children: j
                        })]
                    })]
                })
            }
        },
        84160: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            let i = "INITIALIZE"
        },
        84189: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => s,
                g: () => o
            });
            var i = n(1503),
                a = n(72223);
            let r = (0, a.createContext)(null),
                s = e => {
                    let {
                        eventSender: t,
                        children: n
                    } = e;
                    return (0, i.jsx)(r.Provider, {
                        value: {
                            eventSender: t
                        },
                        children: n
                    })
                },
                o = () => {
                    let e = (0, a.useContext)(r);
                    if (!e) throw Error("useEventLogger must be used within an EventLoggerProvider");
                    return e
                }
        },
        84745: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => c
            });
            var i = n(1503),
                a = n(46001),
                r = n.n(a),
                s = n(72223),
                o = n(90270),
                l = n(55594),
                d = n(86783),
                u = n.n(d);
            let c = e => {
                let {
                    className: t,
                    onClick: n
                } = e, a = (0, l.O)(), d = (0, s.useCallback)(e => a(e), [a]), c = (0, o.aG)({
                    productName: "embed_player_p"
                });
                return (0, i.jsx)("div", {
                    onClick: () => {
                        n && n(), d({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "cover-art"
                        }), window.open(null == c ? void 0 : c.embeddedEntity, "_blank")
                    },
                    "aria-hidden": !0,
                    className: r()(u().coverArt, t)
                })
            }
        },
        85489: (e, t, n) => {
            "use strict";
            n.d(t, {
                gd: () => r,
                JW: () => s
            });
            var i = n(8159);
            class a {
                addListener(e, t, n) {
                    return this._emitter.addListener(e, t, n), this
                }
                removeListener(e, t, n) {
                    return this._emitter.removeListener(e, t, n), this
                }
                onAddListener(e, t) {
                    return this._emitter.onAddListener(e, t), this
                }
                onRemoveListener(e, t) {
                    return this._emitter.onRemoveListener(e, t), this
                }
                emit(e, t) {
                    return this._emitter.emit(e, t)
                }
                emitSync(e, t) {
                    return this._emitter.emitSync(e, t)
                }
                constructor(e = new i.bk) {
                    this._emitter = e, this._emitter = e || new i.bk
                }
            }
            var r = function(e) {
                return e.TRACK_LOADED = "track_loaded", e.TRACK_ENDED = "track_ended", e.UPDATE = "update", e.ERROR = "error", e.ACTION = "action", e.QUEUE_ACTION = "queue_action", e.QUEUE_ACTION_COMPLETE = "queue_action_complete", e.QUEUE_UPDATE = "queue_update", e.CONTEXT_WRAPAROUND = "context_wraparound", e
            }({});
            class s extends a {
                emitPlaySync(e, t, n) {
                    let {
                        defaultPrevented: i
                    } = this.emitSync("action", {
                        action: "play",
                        context: e,
                        origin: t,
                        options: n
                    });
                    return i
                }
                emitPauseSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "pause"
                    });
                    return e
                }
                emitResumeSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "resume"
                    });
                    return e
                }
                emitSkipToNextSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "skipToNext"
                    });
                    return e
                }
                emitSkipToPreviousSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "skipToPrevious"
                    });
                    return e
                }
            }
        },
        86783: e => {
            e.exports = {
                coverArt: "CoverArtBase_coverArt__ne0XI"
            }
        },
        87082: e => {
            e.exports = {
                progressBarContainer: "ProgressBar_progressBarContainer__glVHh",
                progressBarLineActive: "ProgressBar_progressBarLineActive__eawR7",
                progressBarLineBackground: "ProgressBar_progressBarLineBackground__S9lxG",
                progressBarLine: "ProgressBar_progressBarLine__a7FZb",
                progressBarSlider: "ProgressBar_progressBarSlider__oFBQJ",
                visible: "ProgressBar_visible__kkOqc",
                tooltip: "ProgressBar_tooltip__E8aUa",
                tooltipContainer: "ProgressBar_tooltipContainer__GjrK3"
            }
        },
        87472: (e, t, n) => {
            "use strict";
            n.d(t, {
                CU: () => r,
                Hz: () => i,
                IY: () => o,
                NI: () => l,
                WO: () => s,
                Xr: () => h,
                Z4: () => y,
                hM: () => d,
                j5: () => v,
                lQ: () => c,
                oD: () => m,
                r2: () => u,
                rp: () => p,
                tr: () => a,
                zK: () => _
            });
            let i = "PAUSE",
                a = "PLAY",
                r = "TOGGLE_PLAY",
                s = "PLAY_INDEX",
                o = "RESUME",
                l = "SEEK",
                d = "SEEK_BACK",
                u = "SEEK_FORWARD",
                c = "PLAY_NEXT",
                p = "PLAY_PREVIOUS",
                m = "MUTE",
                _ = "UNMUTE",
                v = "SET_CURRENT_PREVIEW_TRACK_INDEX",
                h = {
                    AUDIO: "audio",
                    VIDEO: "video"
                },
                y = {
                    NONE: "NONE",
                    ALLOWED: "ALLOWED",
                    MANDATORY: "MANDATORY"
                }
        },
        88976: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => s,
                v: () => o
            });
            var i = n(1503),
                a = n(72223),
                r = n(72447);
            let s = (0, a.createContext)({
                    playbackState: null,
                    triggerPlaybackOperation: () => {}
                }),
                o = e => {
                    let {
                        children: t,
                        reduxStore: n,
                        playerAPI: a
                    } = e, {
                        playbackState: o,
                        triggerPlaybackOperation: l
                    } = (0, r.N)(a, n);
                    return (0, i.jsx)(s.Provider, {
                        value: {
                            playbackState: o,
                            triggerPlaybackOperation: l
                        },
                        children: t
                    })
                }
        },
        90270: (e, t, n) => {
            "use strict";
            n.d(t, {
                pg: () => d,
                O$: () => u,
                aG: () => p
            });
            var i = n(84693),
                a = n(72223),
                r = n(93587),
                s = n(47662),
                o = n(88976),
                l = n(77017),
                d = function(e) {
                    return e.ADD_TO_LIBRARY = "1", e
                }({});
            let u = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "embed-player-p",
                        i = new URL("undefined" != typeof location && location.href ? location.href : "https://open.spotify.com");
                    e.searchParams.has("utm_source") || e.searchParams.set("utm_source", n), e.searchParams.has("utm_medium") || e.searchParams.set("utm_medium", t ? "mobile" : "desktop");
                    let a = i.searchParams.get("utm_campaign");
                    a && e.searchParams.set("utm_campaign", a);
                    let r = i.searchParams.get("si");
                    return r && e.searchParams.set("si", r), e
                },
                c = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "embed-player-p",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    return (null == i ? void 0 : i.playbackResumeSeconds) && e.searchParams.set("t", i.playbackResumeSeconds.toString()), (null == i ? void 0 : i.intent) && "1" === i.intent && e.searchParams.set("intent", "1"), u(e, n, t)
                };

            function p(e) {
                var t;
                let {
                    productName: n,
                    intent: d
                } = e, {
                    playbackState: u
                } = (0, a.useContext)(o.T), p = (0, r.d4)(e => {
                    let {
                        data: t
                    } = e;
                    return t.entity
                }), m = (0, r.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    switch (t.entityContext) {
                        case "episode":
                        case "track":
                            return !1;
                        default:
                            return !0
                    }
                }), _ = (0, r.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.isMobile
                }), v = Math.floor((null != (t = (0, l.s)(u)) ? t : 0) / 1e3), [h, y] = (0, a.useState)({
                    selectedEntity: "",
                    compositeEntity: "",
                    embeddedEntity: "",
                    cta: ""
                }), k = null == p ? void 0 : p.relatedEntityUri, f = (null == p ? void 0 : p.isAudiobook) ? k : null == p ? void 0 : p.uri;
                return (0, a.useEffect)(() => {
                    let e = e => {
                            var t;
                            return null != (t = e ? (0, i.o_h)(e) : null) ? t : void 0
                        },
                        t = {
                            compositeEntity: {
                                deepLink: c((0, s.jT)(e(k), !1), n, _, {
                                    intent: d
                                }).toString(),
                                storeLink: c((0, s.KY)(e(k), !1), n, _, {
                                    intent: d
                                }).toString()
                            },
                            selectedEntity: {
                                deepLink: c((0, s.jT)(e(f), !1), n, _, {
                                    playbackResumeSeconds: v,
                                    intent: d
                                }).toString(),
                                storeLink: c((0, s.KY)(e(f), !1), n, _, {
                                    playbackResumeSeconds: v,
                                    intent: d
                                }).toString()
                            }
                        },
                        a = m ? t.compositeEntity : t.selectedEntity;
                    y({
                        selectedEntity: t.selectedEntity.deepLink,
                        compositeEntity: t.compositeEntity.deepLink,
                        embeddedEntity: a.deepLink,
                        cta: a.storeLink
                    })
                }, [n, m, v, _, d, f, k]), h
            }
        },
        90512: e => {
            e.exports = {
                saveOnSpotifyButton: "SaveOnSpotifyButton_saveOnSpotifyButton__QCoJx",
                saveOnSpotifyButtonText: "SaveOnSpotifyButton_saveOnSpotifyButtonText__6Jv6P"
            }
        },
        90786: e => {
            e.exports = {
                container: "Marquee_container__CV7du",
                containerRtl: "Marquee_containerRtl__1Gbu_",
                scrollableContainer: "Marquee_scrollableContainer__mcSox",
                gradient: "Marquee_gradient__dpJhe",
                inner: "Marquee_inner__UKCZf"
            }
        },
        91248: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => c
            });
            var i = n(1503),
                a = n(24812),
                r = n(8179),
                s = n(93587),
                o = n(90270),
                l = n(50506),
                d = n(55594),
                u = n(6309);
            let c = () => {
                let e = (0, r.kj)(),
                    {
                        isCompactLegacy: t,
                        isCompactTracklistLegacy: n
                    } = (0, l.o)(),
                    c = (0, s.d4)(e => e.settings.isVideoEmbed),
                    p = (0, d.O)(),
                    m = (0, o.aG)({
                        productName: c ? "embed_player_v" : "embed_player_p"
                    }),
                    _ = e("play_on_spotify", "Play on Spotify", "Button that plays the viewed content in the Spotify client");
                return (0, i.jsx)(u.D, {
                    ariaLabel: _,
                    icon: t || n ? void 0 : a.D,
                    onClick: () => {
                        p({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "play-on-spotify"
                        })
                    },
                    href: m.embeddedEntity ? m.embeddedEntity : void 0,
                    testId: "play-on-spotify-button",
                    children: _
                })
            }
        },
        93782: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r
            });
            var i = n(1503),
                a = n(9934);
            let r = e => {
                let {
                    className: t
                } = e;
                return (0, i.jsx)(a.E, {
                    className: t,
                    "aria-hidden": !0,
                    semanticColor: "textSubdued",
                    variant: "bodySmallBold",
                    children: "\xb7"
                })
            }
        },
        94244: e => {
            e.exports = {
                addToLibraryButton: "AddToLibraryCompact_addToLibraryButton__eRbCq"
            }
        },
        98462: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => i
            });
            let i = "https://open.spotify.com"
        },
        98849: (e, t, n) => {
            "use strict";
            n.d(t, {
                eL: () => r,
                kD: () => s,
                v7: () => a
            });
            var i = n(72280);

            function a() {
                return {
                    type: i.tx
                }
            }

            function r() {
                return {
                    type: i.iG
                }
            }

            function s(e) {
                return {
                    type: i.Fv,
                    productName: e
                }
            }
        }
    }
]);