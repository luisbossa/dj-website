try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ec0992d2-a1e5-4f80-8b48-3c82f9b7db42", e._sentryDebugIdIdentifier = "sentry-dbid-ec0992d2-a1e5-4f80-8b48-3c82f9b7db42")
    }()
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1138], {
        51138: (e, t, i) => {
            "use strict";
            i.d(t, {
                bi: () => a,
                pM: () => s,
                LW: () => A,
                jb: () => D,
                Pv: () => U,
                nD: () => i5,
                jA: () => i3,
                xj: () => i4,
                KT: () => i2
            });
            var r, a, n, s, o, l, _, d, u, c, h, p, m, E, f, g, y, v, T, S, P, b, R, I, A, L, D, C, O, k, N, w, M, U, F = i(20268);
            ! function(e) {
                e.USER_INFO_REQUEST_EMPTY_RESPONSE = "USER_INFO_REQUEST_EMPTY_RESPONSE", e.USER_INFO_REQUEST_FAILED_WITH_STATUS = "USER_INFO_REQUEST_FAILED_WITH_STATUS", e.HARMONY_NO_TRACKS_LOADED = "HARMONY_NO_TRACKS_LOADED", e.HARMONY_OPERATION_FORBIDDEN = "HARMONY_OPERATION_FORBIDDEN", e.HARMONY_LOCAL_PLAYER_DISABLED = "HARMONY_LOCAL_PLAYER_DISABLED", e.HARMONY_INVALID_DESCRIPTOR_ID = "HARMONY_INVALID_DESCRIPTOR_ID", e.HARMONY_INVALID_MEDIA_TYPE = "HARMONY_INVALID_MEDIA_TYPE", e.CONNECTAPI_CLIENT_INVALID_ARGUMENTS = "CONNECTAPI_CLIENT_INVALID_ARGUMENTS", e.CONNECTAPI_CLIENT_MISSING_DEVICE_ID = "CONNECTAPI_CLIENT_MISSING_DEVICE_ID", e.CONNECTAPI_CLIENT_NO_CONNECTION_ID = "CONNECT_API_CLIENT_NO_CONNECTION_ID", e.CONNECTAPI_CLIENT_NO_DEVICE = "CONNECTAPI_CLIENT_NO_DEVICE", e.CONNECTAPI_CLIENT_NO_SESSION_ID = "CONNECTAPI_CLIENT_NO_SESSION_ID", e.CONNECTAPI_CLIENT_NO_STATE = "CONNECTAPI_CLIENT_NO_STATE", e.CONNECTAPI_CLIENT_INVALID_POSITION = "CONNECT_API_CLIENT_INVALID_POSITION", e.CONNECTAPI_CLIENT_INVALID_VOLUME = "CONNECT_API_CLIENT_INVALID_VOLUME", e.CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED = "CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED", e.CONNECTAPI_REGISTRATION_FAILED_WITH_STATUS = "CONNECTAPI_REGISTRATION_FAILED_WITH_STATUS", e.CONNECTAPI_CLIENT_ACK_TIMEOUT = "CONNECTAPI_CLIENT_ACK_TIMEOUT", e.CP_NO_DEVICE_DESCRIPTOR = "CP_NO_DEVICE_DESCRIPTOR", e.CP_NO_CONNECTION_ID = "CP_NO_CONNECTION_ID", e.CP_REGISTRATION_FAILED_WITH_STATUS = "CP_REGISTRATION_FAILED_WITH_STATUS", e.CP_REGISTRATION_FAILED_NON_PREMIUM = "CP_REGISTRATION_FAILED_NON_PREMIUM", e.CP_REQUEST_FAILED_WITH_STATUS = "CP_REQUEST_FAILED_WITH_STATUS", e.CP_NO_DEVICE_ID = "CP_NO_DEVICE_ID", e.CP_NO_RESPONSE_BODY = "CP_NO_RESPONSE_BODY", e.CP_NO_TRACKING_DATA = "CP_NO_TRACKING_DATA", e.CP_INVALID_STATE = "CP_INVALID_STATE", e.CP_NO_PLAYBACK_ID = "CP_NO_PLAYBACK_ID", e.QUEUE_MANAGER_NO_STATE = "QUEUE_MANAGER_NO_STATE", e.QUEUE_OPERATION_FORBIDDEN = "QUEUE_OPERATION_FORBIDDEN", e.QUEUE_OPERATION_STALE_REVISION = "QUEUE_OPERATION_STALE_REVISION", e.TP_NO_RESPONSE_BODY = "TP_NO_RESPONSE_BODY", e.TP_REGISTRATION_FAILED_NON_PREMIUM = "TP_REGISTRATION_FAILED_NON_PREMIUM", e.TP_REGISTRATION_FAILED_WITH_STATUS = "TP_REGISTRATION_FAILED_WITH_STATUS", e.TP_STATE_UPDATE_FAILED = "TP_STATE_UPDATE_FAILED", e.TP_MAX_SUBSCRIPTIONS_REACHED = "TP_MAX_SUBSCRIPTIONS_REACHED", e.TP_UPDATE_REQUEST_EMPTY_RESPONSE = "TP_UPDATE_REQUEST_EMPTY_RESPONSE", e.TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS = "TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS", e.TP_SET_OPTIONS_FAILED_WITH_STATUS = "TP_SET_OPTIONS_FAILED_WITH_STATUS", e.TP_UNKNOWN_COMMAND = "TP_UNKNOWN_COMMAND", e.TP_CANNOT_CREATE_STATE_REF = "TP_CANNOT_CREATE_STATE_REF", e.TP_MISSING_INITIAL_STATE = "TP_MISSING_INITIAL_STATE", e.TP_INVALID_STATE_REFERENCE = "TP_INVALID_STATE_REFERENCE", e.TP_CONFLICT_REQUEST_FAILED_WITH_STATUS = "TP_CONFLICT_REQUEST_FAILED_WITH_STATUS"
            }(r || (r = {}));
            var x = i(16654);
            i(5372);
            var B = i(84822),
                Y = i(8159),
                V = i(17211),
                G = i(59371);
            let j = "@local";
            ! function(e) {
                e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_ERROR = "authentication_error", e.AUTOPLAY_FAILED = "autoplay_failed", e.BEFORE_DISCONNECT = "before_disconnect", e.BEFORE_VOLUME_CHANGE = "before_volume_change", e.BUFFER_STALLED = "stalled", e.BUFFERING_END = "buffering_end", e.BUFFERING_START = "buffering_start", e.REBUFFERING_END = "rebuffering_end", e.REBUFFERING_START = "rebuffering_start", e.CONNECTED = "connected", e.CONNECTION_ERROR = "connection_error", e.DEVICES_CHANGED = "devices_changed", e.DEVICE_DEACTIVATED = "device_deactivated", e.DEVICE_DESCRIPTOR_CHANGED = "descriptor_changed", e.DISCONNECTED = "disconnected", e.DISPLAYED_CUES_CHANGED = "displayed_cues_changed", e.DURATION_CHANGED = "duration_changed", e.ERROR = "error", e.LAST_ACTIVE_DEVICE_INFO_CHANGED = "last_active_device_info_changed", e.LOCAL_CONTEXT_ENDED = "local_context_ended", e.LOCAL_PLAYER_DISABLED = "local_player_disabled", e.LOCAL_PLAYER_ENABLED = "local_player_enabled", e.LOCAL_PLAYER_LOGGED_OUT = "local_player_logged_out", e.LOGGED_OUT = "logged_out", e.MAX_LIST_ERRORS_REACHED = "max_list_errors_reached", e.MAX_SUBSCRIPTIONS_REACHED = "max_subscriptions_reached", e.PLAYBACK_CAPPED = "playback_capped", e.PLAYER_INITIALIZATION_DONE = "player_initialization_done", e.PLAYER_INITIALIZATION_FAILED = "player_initialization_failed", e.PLAYING_PROFILE_CHANGED = "playing_profile_changed", e.PRODUCT_STATE_CHANGED = "product_state_changed", e.PROGRESS = "progress", e.PLAYER_QUEUE_CHANGED = "player_queue_changed", e.RECONNECTED = "reconnected", e.RECONNECTING = "reconnecting", e.REMOTE_OBSERVER_DISABLED = "remote_observer_disabled", e.REMOTE_OBSERVER_ENABLED = "remote_observer_enabled", e.REPORTING_START = "reporting_start", e.REPORTING_FIRST_QUARTILE = "reporting_first_quartile", e.REPORTING_MIDPOINT = "reporting_midpoint", e.REPORTING_THIRD_QUARTILE = "reporting_third_quartile", e.REPORTING_COMPLETE = "reporting_complete", e.REPORTING_PAUSE = "reporting_pause", e.REPORTING_RESUME = "reporting_resume", e.REPORTING_CREATIVE_VIEW = "reporting_creative_view", e.REPORTING_ERROR = "reporting_error", e.SERVICE_REGISTRATION_ERROR = "service_registration_error", e.SPEED_CHANGED = "speed_changed", e.STATE_CHANGED = "state_changed", e.STOPPED_ON_BACKGROUND = "stopped_on_background", e.SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded", e.SEEK_PANELS_LOADED = "seek_panels_loaded", e.TRACK_ENDED = "track_ended", e.UNRECOVERABLE_FAILURE = "unrecoverable_failure", e.VIDEO_ELEMENT_APPENDED = "video_element_appended", e.VIDEO_ELEMENT_REMOVED = "video_element_removed", e.VOLUME_CHANGED = "volume_changed", e.MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.PLAYER_VISIBILITY_CHANGED = "visibility_changed", e.VIDEO_VISIBILITY_CHANGED = "video_visibility_changed", e.VIDEO_SURFACE_CHANGED = "video_surface_changed"
            }(a || (a = {})),
            function(e) {
                e.CLOUD_PLAYBACK = "cloud-playback", e.CONNECT_API = "connect-api", e.HARMONY = "harmony", e.PLAYBACK = "playback", e.TRACK_PLAYBACK = "track-playback", e.TRANSPORT = "transport"
            }(n || (n = {})),
            function(e) {
                e[e.OFF = 0] = "OFF", e[e.CONTEXT = 1] = "CONTEXT", e[e.TRACK = 2] = "TRACK"
            }(s || (s = {})),
            function(e) {
                e.INCOMPATIBLE = "incompatible", e.UNAVAILABLE = "unavailable", e.AD_PLAYING = "ad_playing", e.NARRATION = "narration", e.WAKING_UP = "waking_up", e.TIMED_OUT_WAKEUP = "timed_out_wakeup", e.PREMIUM_REQUIRED = "premium_required", e.NOT_INSTALLED = "not_installed", e.UNSUPPORTED = "unsupported", e.NOT_AUTHORIZED = "not_authorized"
            }(o || (o = {}));
            class H extends Error {
                constructor(e, t) {
                    super(t), this.status = -1, this.unrecoverable = !1, this.debug = {}, this.code = e, this.name = "HarmonyError"
                }
                static fatal(e, t) {
                    let i = new H(e, t);
                    return i.unrecoverable = !0, i
                }
            }

            function J(e, t) {
                return !e && !t || !!e && !!t && e.id === t.id && e.is_active === t.is_active && e.is_controllable === t.is_controllable && e.is_observable === t.is_observable && e.is_being_activated === t.is_being_activated && e.local === t.local && e.name === t.name && e.type === t.type && e.version === t.version && e.volume === t.volume
            }! function(e) {
                e.APPLOAD = "appload", e.BACK_BUTTON = "backbtn", e.CAPPED = "capped", e.CLICK_ROW = "clickrow", e.CLICK_SIDE = "clickside", e.END_PLAY = "endplay", e.FORWARD_BUTTON = "fwdbtn", e.LOGOUT = "logout", e.PLAY_BUTTON = "playbtn", e.POPUP = "popup", e.REMOTE = "remote", e.SEEK = "seek", e.TRACK_DONE = "trackdone", e.TRACK_ERROR = "trackerror", e.UNEXPECTED_EXIT = "unexpected-exit", e.UNEXPECTED_EXIT_WHILE_PAUSE = "unexpected-exit-while-pause", e.UNKNOWN = "unknown", e.URI_OPEN = "uriopen"
            }(l || (l = {}));
            class q extends Error {
                constructor(e, t) {
                    super(t), this.unrecoverable = !1, this.code = e, this.name = "PlayerQueueError"
                }
            }

            function K(e, t = {
                isCurrentTrack: !1,
                ignoreMetaForTrack: !1
            }) {
                var i, r, a, n, s, o;
                let l = [],
                    _ = [],
                    d = !1,
                    u = !1;
                if (!(null == e ? void 0 : e.length)) return {
                    items: l,
                    tracks: _,
                    hasQueuedTracks: d
                };
                for (let c of e) {
                    let e = "spotify:delimiter" === c.uri || /^spotify:meta:/.test(c.uri) ? "meta" : "track",
                        h = `${c.uid}:::${null!=(r=null==(i=c.metadata)?void 0:i.iteration)?r:""}`,
                        p = {
                            type: e,
                            uri: c.uri,
                            uid: c.uid,
                            qid: h,
                            metadata: c.metadata || {},
                            hidden: (null == (a = c.metadata) ? void 0 : a.hidden) === "true",
                            hidden_in_queue: (null == (n = c.metadata) ? void 0 : n.hidden_in_queue) === "true" && !t.isCurrentTrack,
                            queued: (null == (s = c.metadata) ? void 0 : s.is_queued) === "true",
                            provider: c.provider,
                            removed_reasons: c.removed,
                            $blck_rs: c.blocked
                        };
                    p.queued && (d = !0), l.push(p), "meta" === p.type ? u = !0 : !t.ignoreMetaForTrack && u || "track" !== p.type || p.hidden || (null == (o = p.removed_reasons) ? void 0 : o.length) || p.hidden_in_queue || _.push(p)
                }
                return {
                    items: l,
                    tracks: _,
                    hasQueuedTracks: d
                }
            }

            function Q(e, t = {}) {
                if (!Array.isArray(e)) throw TypeError("Items is not an array.");
                if (!e.length) return [];
                let i = [];
                for (let r of e) {
                    if (!r) continue;
                    "string" == typeof r && (r = {
                        type: "track",
                        uri: r
                    });
                    let e = {
                        uri: r.uri,
                        uid: r.uid,
                        metadata: r.metadata || {},
                        removed: r.removed_reasons,
                        blocked: r.$blck_rs,
                        provider: r.provider
                    };
                    (r.queued || t.queued) && (e.metadata.is_queued = "true", e.provider = "queue"), (r.hidden || "meta" === r.type) && (e.metadata.hidden = "true"), r.hidden_in_queue && (e.metadata.hidden_in_queue = "true"), i.push(e)
                }
                return i
            }

            function W(e) {
                let [t, i] = e.split(":::"), r = {
                    type: "track",
                    uid: t
                };
                return i && (r.metadata = {
                    iteration: i
                }), r
            }
            class $ extends Y.bk {
                constructor(e) {
                    super(), this._hasInitialState = !1, this._reportInactiveQueues = !1, this._onlyLocalQueue = !1, this._currentPlayerState = null, this._currentInternalQueue = null, this._currentQueue = null, this._hasQueuedTracks = !1, this._connectClient = e.connectClient, this._runner = e.runner || (e => e()), this._parsePlayerState = this._parsePlayerState.bind(this), this._onlyLocalQueue = !!e.onlyLocalQueue, this._reportInactiveQueues = !!e.reportInactiveQueues, this._connectClient.on("player_state_changed", this._onPlayerStateChanged.bind(this)), this._parsePlayerState(e.initialContextPlayerState)
                }
                static create(e) {
                    return new $(e)
                }
                _onPlayerStateChanged(e) {
                    let {
                        playerState: t,
                        orphaned: i,
                        isLocal: r
                    } = e.data;
                    this._parsePlayerState(t, i, r)
                }
                _parsePlayerState(e, t, i) {
                    var r, n, s;
                    if (this._hasInitialState = !0, this._onlyLocalQueue && !i || !this._reportInactiveQueues && t) this._currentPlayerState = null, this._currentInternalQueue = null, this._currentQueue = null;
                    else if (this._currentPlayerState = null != e ? e : null, e) {
                        if (e.queue_revision === (null == (r = this._currentInternalQueue) ? void 0 : r.revision)) return null;
                        this._hasQueuedTracks = !1;
                        let t = {
                                ignoreMetaForTrack: null == (n = e.options) ? void 0 : n.repeating_context
                            },
                            i = e.queue_revision,
                            a = K([e.track], {
                                isCurrentTrack: !0
                            }).items[0],
                            o = K(e.next_tracks, t),
                            l = K(e.prev_tracks, t);
                        this._hasQueuedTracks = o.hasQueuedTracks;
                        let _ = {
                            uri: e.context_uri,
                            metadata: null != (s = e.context_metadata) ? s : void 0
                        };
                        this._currentInternalQueue = {
                            revision: i,
                            context: _,
                            current_track: a,
                            next_items: o.items,
                            previous_items: l.items
                        }, this._currentQueue = {
                            revision: i,
                            context: _,
                            current_track: a,
                            next_tracks: o.tracks,
                            previous_tracks: l.tracks
                        }
                    } else this._hasQueuedTracks = !1, this._currentInternalQueue = null, this._currentQueue = null;
                    return this.emit(a.PLAYER_QUEUE_CHANGED, {
                        internalPlayerQueue: this._currentInternalQueue,
                        playerQueue: this._currentQueue
                    }), this._currentInternalQueue
                }
                _setQueueNext(e, t) {
                    var i;
                    let a = this._currentPlayerState;
                    if (!a) return Promise.reject(new q(r.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    let n = {
                            next_tracks: e,
                            prev_tracks: a.prev_tracks,
                            queue_revision: a.queue_revision
                        },
                        s = null == (i = a.restrictions) ? void 0 : i.disallow_set_queue_reasons;
                    return this._runner(() => s && s.length ? Promise.reject(new q(r.QUEUE_OPERATION_FORBIDDEN, "Cannot perform operation; SetQueueCommand is not allowed.")) : this._connectClient.setQueue(n, t), t)
                }
                _insertQueuedWhenEmpty(e, t, i) {
                    var r, a, n, s;
                    let o = (null == (a = null == (r = t[0]) ? void 0 : r.metadata) ? void 0 : a.is_narration) === "true",
                        l = (null == (n = null == i ? void 0 : i.metadata) ? void 0 : n.is_narration) === "true";
                    if (l || o)
                        if (l && !o) t.splice(1, 0, ...e);
                        else {
                            let i = -1;
                            for (let e = 0, r = t.length; e < r; e++) {
                                let r = t[e];
                                if ((null == (s = null == r ? void 0 : r.metadata) ? void 0 : s.is_narration) === "true") {
                                    i = e + 1;
                                    break
                                }
                            }
                            return -1 === i ? void t.unshift(...e) : void t.splice(i + 1, 0, ...e)
                        }
                    else t.unshift(...e)
                }
                _insertQueued(e, t) {
                    var i, a;
                    let n = this._currentPlayerState;
                    if (!n) return Promise.reject(new q(r.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    let s = Array.from(null != (i = n.next_tracks) ? i : []);
                    if (this._hasQueuedTracks) {
                        let t = !1;
                        for (let i = 0, r = s.length; i < r; i++) {
                            let r = s[i];
                            if ((null == (a = null == r ? void 0 : r.metadata) ? void 0 : a.is_queued) !== "true") {
                                s.splice(i, 0, ...e), t = !0;
                                break
                            }
                        }
                        t || s.push(...e)
                    } else {
                        let t = n.track;
                        this._insertQueuedWhenEmpty(e, s, t)
                    }
                    return this._setQueueNext(s, t)
                }
                getInternalPlayerQueue() {
                    return this._hasInitialState ? Promise.resolve(this._currentInternalQueue) : new Promise(e => {
                        this.on(a.PLAYER_QUEUE_CHANGED, t => {
                            e(t.data.internalPlayerQueue)
                        })
                    })
                }
                getPlayerQueue() {
                    return this._hasInitialState ? Promise.resolve(this._currentQueue) : new Promise(e => {
                        this.on(a.PLAYER_QUEUE_CHANGED, t => {
                            e(t.data.playerQueue)
                        })
                    })
                }
                setInternalPlayerQueue(e, t, i = {
                    ignoreRevision: !1
                }) {
                    if (!this._currentPlayerState) return Promise.reject(new q(r.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    if (e.revision !== this._currentPlayerState.queue_revision && !i.ignoreRevision) return Promise.reject(new q(r.QUEUE_OPERATION_STALE_REVISION, "Cannot perform operation; revision is stale."));
                    let a = {
                        next_tracks: Q(e.next_items),
                        prev_tracks: Q(e.previous_items),
                        queue_revision: i.ignoreRevision ? void 0 : this._currentPlayerState.queue_revision
                    };
                    return this._runner(() => this._connectClient.setQueue(a, t), t)
                }
                addToQueue(e, t) {
                    var i;
                    let a = this._currentPlayerState;
                    if (!a) return Promise.reject(new q(r.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Argument `items` must be an array."));
                    let n = Q(e, {
                            queued: !0
                        }),
                        s = null == (i = a.restrictions) ? void 0 : i.disallow_add_to_queue_reasons;
                    return n.length ? 1 === n.length ? this._runner(() => s && s.length ? Promise.reject(new q(r.QUEUE_OPERATION_FORBIDDEN, "Cannot perform operation; AddToQueueCommand is not allowed.")) : this._connectClient.addToQueue(n[0], t), t) : this._insertQueued(n, t) : Promise.resolve(!1)
                }
                removeNext(e, t) {
                    var i, a, n;
                    let s, o = this._currentPlayerState;
                    if (!o) return Promise.reject(new q(r.QUEUE_MANAGER_NO_STATE, "Cannot perform operation; no current state."));
                    s = "string" == typeof e ? W(e) : e;
                    let l = Array.from(null != (i = o.next_tracks) ? i : []),
                        _ = l.length;
                    for (let e = 0; e < _; e++) {
                        let t = l[e];
                        if ((null == t ? void 0 : t.uid) === s.uid && (null == (a = null == t ? void 0 : t.metadata) ? void 0 : a.iteration) === (null == (n = s.metadata) ? void 0 : n.iteration)) {
                            l.splice(e, 1);
                            break
                        }
                    }
                    return l.length === _ ? Promise.resolve(!1) : this._setQueueNext(l, t)
                }
            }
            let z = {
                tagged: "4.57.0-8e1d38d4",
                version: "4.57.0",
                revision: "8e1d38d4"
            };
            class X extends Y.bk {
                constructor(e) {
                    super(), this._hasFakeState = !1, this._localPlayerEnabled = !1, this._localPlayback = !1, this._forceRemoteActions = !1, this._lastDeviceList = [], this._deferredStreamer = (0, V.u)(), this._throttledSeek = function(e, t, i) {
                        let r;
                        return (...e) => {
                            let a = (0, G.X)();
                            if (!r || a - r >= 100) return r = a, t.apply(i, e)
                        }
                    }(0, this._seek, this), this._client = e.client, this._streamer = e.streamer, this._controller = e.controller, this._hidden = !!e.hidden, this._onlyLocalState = !!e.onlyLocalState, this._preferController = !this._onlyLocalState && !!e.preferControllerState, this._claimInactivePlayerStates = !!e.claimInactivePlayerStates, this._enableControllerWithoutStreamer = !!e.enableControllerWithoutStreamer, this._autoActivateElement = !!e.autoActivateElement, this._deactivateOnStop = !!e.experimentalDeactivateOnStop, this._forceRemoteActions = !!e.forceRemoteActions, this._parseDeviceList = this._parseDeviceList.bind(this), this._init()
                }
                static create(e) {
                    return new X(e)
                }
                _init() {
                    this._createStreamerDeferred();
                    let e = this._client;
                    e.on("error", this._onError.bind(this)), this.proxyEmit(e, "authenticated", a.AUTHENTICATED), this.proxyEmit(e, "authentication_error", a.AUTHENTICATION_ERROR), this.proxyEmit(e, "before_disconnect", a.BEFORE_DISCONNECT), this.proxyEmit(e, "connected", a.CONNECTED), this.proxyEmit(e, "connection_error", a.CONNECTION_ERROR), this.proxyEmit(e, "descriptor_changed", a.DEVICE_DESCRIPTOR_CHANGED), this.proxyEmit(e, "product_state_changed", a.PRODUCT_STATE_CHANGED), this.proxyEmit(e, "reconnected", a.RECONNECTED), this.proxyEmit(e, "reconnecting", a.RECONNECTING), this.proxyEmit(e, "unrecoverable_failure", a.UNRECOVERABLE_FAILURE), this.proxyEmit(e, "logged_out", a.LOGGED_OUT);
                    let t = this._controller,
                        i = e => {
                            this._onDeviceStateChanged(e.data)
                        };
                    t.on("device_info_changed", i), t.on("devices_changed", this._onDevicesChanged.bind(this)), t.on("state_changed", this._onPlayerStateChanged.bind(this)), t.on("progress", this._onControllerProgress.bind(this)), this.proxyEmitAll(t, {
                        max_subscriptions_reached: a.MAX_SUBSCRIPTIONS_REACHED,
                        device_deactivated: a.DEVICE_DEACTIVATED
                    }), t.on("registered", this.emit.bind(this, a.REMOTE_OBSERVER_ENABLED, null)), t.on("deregistered", this.emit.bind(this, a.REMOTE_OBSERVER_DISABLED, null));
                    let r = this._streamer;
                    r ? (r.on("deregistered", this._onStreamerDeregistered.bind(this)), r.on("registered", this._onStreamerRegistered.bind(this)), r.on("registration_aborted", this._onStreamerRegistrationAborted.bind(this)), r.on("state_changed", this._onStreamerStateChanged.bind(this)), r.on("stopped_on_background", this._onStreamerStoppedOnBackground.bind(this)), r.on("streamer_seek_handled", this._onSeekHandled.bind(this)), this.proxyEmitSync(r, "before_volume_change", a.BEFORE_VOLUME_CHANGE), this.proxyEmit(r, "autoplay_failed", a.AUTOPLAY_FAILED), this.proxyEmit(r, "stalled", a.BUFFER_STALLED), this.proxyEmit(r, "buffering_end", a.BUFFERING_END), this.proxyEmit(r, "buffering_start", a.BUFFERING_START), this.proxyEmit(r, "rebuffering_end", a.REBUFFERING_END), this.proxyEmit(r, "rebuffering_start", a.REBUFFERING_START), this.proxyEmit(r, "duration_changed", a.DURATION_CHANGED), this.proxyEmit(r, "max_list_errors_reached", a.MAX_LIST_ERRORS_REACHED), this.proxyEmit(r, "max_subscriptions_reached", a.MAX_SUBSCRIPTIONS_REACHED), this.proxyEmit(r, "playback_capped", a.PLAYBACK_CAPPED), this.proxyEmit(r, "player_initialization_done", a.PLAYER_INITIALIZATION_DONE), this.proxyEmit(r, "player_initialization_failed", a.PLAYER_INITIALIZATION_FAILED), this.proxyEmit(r, "progress", a.PROGRESS), this.proxyEmit(r, "registration_error", a.SERVICE_REGISTRATION_ERROR), this.proxyEmit(r, "track_ended", a.TRACK_ENDED), this.proxyEmit(r, "video_element_appended", a.VIDEO_ELEMENT_APPENDED), this.proxyEmit(r, "video_element_removed", a.VIDEO_ELEMENT_REMOVED), this.proxyEmit(r, "volume_changed", a.VOLUME_CHANGED), this.proxyEmit(r, "displayed_cues_changed", a.DISPLAYED_CUES_CHANGED), this.proxyEmit(r, "subtitle_languages_loaded", a.SUBTITLE_LANGUAGES_LOADED), this.proxyEmit(r, "seek_panels_loaded", a.SEEK_PANELS_LOADED), this.proxyEmit(r, "speed_changed", a.SPEED_CHANGED), this.proxyEmit(r, "playing_profile_changed", a.PLAYING_PROFILE_CHANGED), this.proxyEmit(r, "video_visibility_changed", a.VIDEO_VISIBILITY_CHANGED), this.proxyEmit(r, "video_surface_changed", a.VIDEO_SURFACE_CHANGED), this.proxyEmitSync(r, "reporting_start", a.REPORTING_START), this.proxyEmitSync(r, "reporting_first_quartile", a.REPORTING_FIRST_QUARTILE), this.proxyEmitSync(r, "reporting_midpoint", a.REPORTING_MIDPOINT), this.proxyEmitSync(r, "reporting_third_quartile", a.REPORTING_THIRD_QUARTILE), this.proxyEmitSync(r, "reporting_complete", a.REPORTING_COMPLETE), this.proxyEmitSync(r, "reporting_pause", a.REPORTING_PAUSE), this.proxyEmitSync(r, "reporting_resume", a.REPORTING_RESUME), this.proxyEmitSync(r, "reporting_creative_view", a.REPORTING_CREATIVE_VIEW), this.proxyEmitSync(r, "reporting_error", a.REPORTING_ERROR), this.proxyEmitSync(r, "internal_endcontent", "internal_endcontent"), this.proxyEmitSync(r, "media_playback_mode_changed", a.MEDIA_PLAYBACK_MODE_CHANGED), r.on("context_ended", this.emit.bind(this, a.LOCAL_CONTEXT_ENDED, null)), r.on("logged_out", this.emit.bind(this, a.LOCAL_PLAYER_LOGGED_OUT, null))) : (this._disableLocalTarget(), this.on(a.AUTHENTICATED, () => {
                        this.emit(a.LOCAL_PLAYER_DISABLED, null)
                    }))
                }
                _createStreamerDeferred() {
                    this._deferredStreamer = (0, V.u)(), this._deferredStreamer.promise.catch(function() {})
                }
                _isTargetIdLocal(e) {
                    return e ? e === j ? Promise.resolve(!0) : this._client.getDeviceDescriptor().then(function(t) {
                        return e === t.getId()
                    }) : Promise.resolve(!!this._localPlayback)
                }
                _onStreamerRegistered(e) {
                    this._deferredStreamer.resolve(e.data), this._createStreamerDeferred(), this._deferredStreamer.resolve(e.data), this._localPlayerEnabled = !0, this._controller.register(), this.emit(a.LOCAL_PLAYER_ENABLED, null)
                }
                _onStreamerDeregistered() {
                    this._disableLocalTarget(), this.emit(a.LOCAL_PLAYER_DISABLED, null)
                }
                _onStreamerRegistrationAborted() {
                    this._disableLocalTarget(), this._enableControllerWithoutStreamer && this._controller.register(), this.emit(a.LOCAL_PLAYER_DISABLED, null)
                }
                _disableLocalTarget() {
                    this._localPlayerEnabled = !1;
                    let e = new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "Cannot perform command; local player is disabled.");
                    this._deferredStreamer.reject(e), this._createStreamerDeferred(), this._deferredStreamer.reject(e)
                }
                _onStreamerConnect() {
                    return this._deferredStreamer.promise
                }
                _onDeviceStateChanged(e) {
                    var t;
                    let i = !!this._localPlayback,
                        n = (e = !1) => {
                            this._generateLocalDeviceInfo(e).then(e => {
                                this.emit(a.LAST_ACTIVE_DEVICE_INFO_CHANGED, {
                                    deviceInfo: e,
                                    hasOrphanedState: !1
                                })
                            })
                        };
                    if (this._localPlayerEnabled && e.hasOrphanedState && this._claimInactivePlayerStates) {
                        this._hasFakeState = !0, n(!0);
                        return
                    }
                    if (this._hasFakeState = !1, this._localPlayback = !!(e.deviceInfo && e.deviceInfo.local), this._localPlayback) {
                        if (!i && (null == (t = this._streamer) ? void 0 : t.hasOptimisticUpdates()) && this._streamer.getCurrentState().then(e => {
                                this.emit(a.STATE_CHANGED, {
                                    state: e
                                })
                            }), !this._streamer) throw new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                        this._streamer.getVolume().then(t => {
                            e.deviceInfo && (e.deviceInfo.volume = t), this.emit(a.LAST_ACTIVE_DEVICE_INFO_CHANGED, e)
                        }).catch(function() {})
                    } else this._onlyLocalState ? (this._localPlayback || i) && n() : this.emit(a.LAST_ACTIVE_DEVICE_INFO_CHANGED, e)
                }
                _onDevicesChanged(e) {
                    this._parseDeviceList(e.data).then(e => {
                        ! function(e, t) {
                            if (!Array.isArray(e) || !Array.isArray(t)) throw TypeError("Invalid devices list.");
                            if (e.length !== t.length) return !1;
                            for (let i = 0, r = e.length; i < r; i++)
                                if (!J(e[i], t[i])) return !1;
                            return !0
                        }(this._lastDeviceList, e) && (this._lastDeviceList = e, this.emit(a.DEVICES_CHANGED, {
                            devices: e,
                            localDevice: null
                        }))
                    })
                }
                _onError(e) {
                    let t = e.data.error;
                    e.data.source === n.PLAYBACK && t && t.unrecoverable && (this._disableLocalTarget(), this._streamer && this._streamer.deregister()), this.emit(a.ERROR, e.data)
                }
                _onPlayerStateChanged(e) {
                    if (!this._onlyLocalState && (this._preferController || !this._localPlayback)) {
                        let t;
                        t = this._claimInactivePlayerStates && this._localPlayerEnabled || this._enableControllerWithoutStreamer ? e.data.state : e.data.orphaned ? null : e.data.state, this.emit(a.STATE_CHANGED, {
                            state: t
                        })
                    }
                }
                _onControllerProgress(e) {
                    !this._onlyLocalState && (this._localPlayback || this.emit(a.PROGRESS, e.data))
                }
                _onStreamerStateChanged(e) {
                    !this._preferController && (this._onlyLocalState ? this._triggerLocalStateChanges(e.data) : this._hidden ? this._handleHidden(e.data) : (this._localPlayback || this._hasFakeState && e.data) && this.emit(a.STATE_CHANGED, e.data))
                }
                _onStreamerStoppedOnBackground() {
                    this._deactivateOnStop && (this._localPlayback = !1), this.emit(a.STOPPED_ON_BACKGROUND, null)
                }
                _handleHidden(e) {
                    e.state ? (this._controller.suppressEvents(), this._triggerLocalStateChanges(e)) : this._controller.unsuppressEvents()
                }
                _parseDeviceList(e) {
                    let t = e.devices.slice(0).map(e => Promise.resolve(e));
                    return t.length && e.localDevice ? this._hasFakeState && e.localDevice && (e.localDevice.is_active = !0) : t.push(this._generateLocalDeviceInfo(this._hasFakeState)), Promise.all(t).then(e => e)
                }
                _triggerLocalStateChanges(e) {
                    this._generateLocalDeviceInfo().then(e => {
                        this._onDeviceStateChanged({
                            deviceInfo: e,
                            hasOrphanedState: !1
                        })
                    }), this.emit(a.STATE_CHANGED, e)
                }
                _canStartNewContext(e) {
                    return this._runOnDevice(e, () => this._streamer ? Promise.resolve(!0) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")), () => Promise.resolve(!0), {
                        bypassFakeState: !0
                    })
                }
                _activateElement() {
                    this._autoActivateElement = !1, this._streamer && this._streamer.activateElement().catch(() => {})
                }
                _runOnDevice(e, t, i, r) {
                    var a;
                    return !this._hasFakeState || (null == r ? void 0 : r.bypassFakeState) ? (null != (a = null == r ? void 0 : r.forceRemoteAction) ? a : this._forceRemoteActions) ? i() : this._isTargetIdLocal(e).then(e => e ? this._onStreamerConnect().then(t) : i()) : (this._autoActivateElement && this._activateElement(), this._claimStateAndRun(i, r))
                }
                _claimStateAndRun(e, t) {
                    return this._onStreamerConnect().then(() => {
                        this._hasFakeState = !1;
                        let e = {
                            paused: !0
                        };
                        return (null == t ? void 0 : t.loggingParams) && (e.loggingParams = t.loggingParams), Promise.all([this._controller.transfer(j, e), new Promise((e, t) => {
                            if (!this._streamer) return void t(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."));
                            this._streamer.once("track_loaded", e)
                        })])
                    }).then(() => e())
                }
                _generateLocalDeviceInfo(e = !1) {
                    let t = this._client,
                        i = this._streamer,
                        r = Promise.resolve(!1),
                        a = Promise.resolve(-1);
                    return this._localPlayerEnabled && (e ? r = Promise.resolve(!0) : i && (r = i.getCurrentState().then(e => !!e)), i && (a = i.getVolume())), Promise.all([t.getClientDescriptor(), t.getSDKId(), r, a]).then(([e, t, i, r]) => {
                        var a;
                        let n = {
                            hifi_status: {
                                fully_supported: void 0,
                                user_eligible: void 0,
                                device_supported: null == (a = e.capabilities) ? void 0 : a.lossless_playback
                            }
                        };
                        return {
                            hidden: this._hidden,
                            id: e.id,
                            is_active: i,
                            is_group: !1,
                            is_being_activated: !1,
                            is_controllable: this._localPlayerEnabled,
                            is_observable: !!this._localPlayerEnabled && !this._hidden,
                            local: !0,
                            metadata: e.metadata || {},
                            name: e.name,
                            type: e.type,
                            brand: e.brand,
                            model: e.model,
                            version: t,
                            volume: r,
                            capabilities: {
                                supports_lossless_audio: !1
                            },
                            playback_features: n,
                            has_inactive_player_state: this._hasFakeState,
                            disallow_transfer_reason: o.UNAVAILABLE
                        }
                    })
                }
                _movePosition(e, t) {
                    return this.getCurrentState().then(i => {
                        if (!i || isNaN(i.position)) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Seeking not allowed with invalid track."));
                        let a = Math.min(i.duration, Math.max(0, i.position + e));
                        return this.seek(a, t)
                    })
                }
                _prepareSkipTrack(e) {
                    return "string" == typeof e ? W(e) : e
                }
                _cycleRepeatMode(e) {
                    return this.getCurrentState().then(t => {
                        if (!t) return Promise.reject(new H(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let i = null,
                            a = t.disallows;
                        switch (t.repeat_mode) {
                            case s.OFF:
                                if (a.toggling_repeat_context)
                                    if (a.toggling_repeat_track) return Promise.resolve(!1);
                                    else i = s.TRACK;
                                else i = s.CONTEXT;
                                break;
                            case s.CONTEXT:
                                i = a.toggling_repeat_track ? s.OFF : s.TRACK;
                                break;
                            case s.TRACK:
                            default:
                                i = s.OFF
                        }
                        return this.setRepeatMode(i, e)
                    })
                }
                _onSeekHandled(e) {
                    this._controller.seek(e.data.position)
                }
                _seek(e, t) {
                    return this.getCurrentState().then(i => (null == i ? void 0 : i.disallows.seeking) ? Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Seeking is not allowed with current content.")) : (this._client.getLogger().logClientEvent({
                        source: "harmony.seek()",
                        source_version: z.tagged,
                        source_vendor: "spotify",
                        event: "Harmony/Client seek",
                        event_version: "1.0.0",
                        json_data: {
                            position: e,
                            deviceId: t
                        }
                    }, "object"), this._runOnDevice(t, () => this._streamer.seek(e), this._controller.seek.bind(this._controller, e, t))))
                }
                getClientDescriptor() {
                    return this._client.getClientDescriptor()
                }
                getProductState() {
                    return this._client.getProductState()
                }
                getPublicTransport() {
                    return this._client.getPublicTransport()
                }
                getUserInfo() {
                    return this._client.getUserInfo()
                }
                getVersionDescriptor() {
                    return this._client.getVersionDescriptor()
                }
                logAppMetrics(e, t) {
                    return this._client.logAppMetrics(e, t)
                }
                setName(e) {
                    return this._client.setName(e)
                }
                setNameTemplate(e) {
                    return this._client.setNameTemplate(e)
                }
                getContextPlayerState() {
                    return this._controller.getContextPlayerState()
                }
                updateCurrentContext(e, t) {
                    return this._controller.updateCurrentContext(e, t)
                }
                getLastActiveDevice() {
                    return this._onlyLocalState || this._hasFakeState ? this._generateLocalDeviceInfo(this._hasFakeState) : this._controller.getActiveDevice().then(e => (null == e ? void 0 : e.local) && this._streamer ? (e.hidden = this._hidden, this._streamer.getVolume().then(t => (e.volume = t, e))) : e)
                }
                getCurrentState() {
                    let e = () => this._onStreamerConnect().then(() => this._streamer.getCurrentState());
                    return this._onlyLocalState || !this._preferController && this._localPlayback ? e() : Promise.resolve(this._hasFakeState && !this._preferController ? e().catch(() => null) : null).then(e => {
                        if (e) return e;
                        let t = this._claimInactivePlayerStates && this._localPlayerEnabled || this._enableControllerWithoutStreamer;
                        return this._controller.getCurrentState(!t).then(e => !this._preferController && this._localPlayback ? this.getCurrentState() : e)
                    })
                }
                pause(e, t) {
                    return this._runOnDevice(e, () => this._streamer.pause(), this._controller.pause.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                resume(e, t) {
                    return this._runOnDevice(e, () => this._streamer.resume(), this._controller.resume.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                togglePlay(e, t) {
                    return this._runOnDevice(e, () => this._streamer.togglePlay(), this._controller.togglePlay.bind(this._controller, e, t), {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                playURI(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playURI(e, t, i)))
                }
                playPages(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playPages(e, t, i)))
                }
                playTracks(e, t, i) {
                    return this._canStartNewContext(t).then(() => (this._autoActivateElement && this._activateElement(), this._controller.playTracks(e, t, i)))
                }
                nextTrack(e, t) {
                    return this.getCurrentState().then(i => {
                        if (null == i ? void 0 : i.disallows.skipping_next) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content."));
                        let a = {},
                            n = () => this._streamer.nextTrack(l.FORWARD_BUTTON),
                            s = this._controller.nextTrack.bind(this._controller, e, a);
                        return (null == t ? void 0 : t.track) && (n = s, a.track = this._prepareSkipTrack(t.track)), (null == t ? void 0 : t.loggingParams) && (a.loggingParams = t.loggingParams), this._runOnDevice(e, n, s, {
                            loggingParams: null == t ? void 0 : t.loggingParams,
                            forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                        })
                    })
                }
                smartPreviousTrack(e, t) {
                    return this.getCurrentState().then(i => i ? (i.disallows || {}).seeking || i.position < 3e3 ? i.disallows.skipping_prev ? Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content.")) : this.previousTrack(e, t) : this.seek(0, e) : Promise.reject(new H(r.HARMONY_NO_TRACKS_LOADED, "No current state.")))
                }
                previousTrack(e, t) {
                    return this.getCurrentState().then(i => {
                        if (null == i ? void 0 : i.disallows.skipping_prev) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Skipping is not allowed with current content."));
                        let a = {},
                            n = () => this._streamer.previousTrack(l.FORWARD_BUTTON),
                            s = this._controller.previousTrack.bind(this._controller, e, a);
                        return (null == t ? void 0 : t.track) && (n = s, a.track = this._prepareSkipTrack(t.track)), (null == t ? void 0 : t.loggingParams) && (a.loggingParams = t.loggingParams), this._runOnDevice(e, n, s, {
                            loggingParams: null == t ? void 0 : t.loggingParams,
                            forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                        })
                    })
                }
                seek(e, t) {
                    var i;
                    return null != (i = this._throttledSeek(e, t)) ? i : Promise.resolve(!0)
                }
                seekForward(e = 15e3, t) {
                    return this._movePosition(e, t)
                }
                seekBackward(e = 15e3, t) {
                    return this._movePosition(-1 * e, t)
                }
                getVolume() {
                    return this._streamer ? this._streamer.getVolume() : Promise.resolve(-1)
                }
                setVolume(e, t) {
                    return this._runOnDevice(t, () => this._streamer.setVolume(e), this._controller.setVolume.bind(this._controller, e), {
                        bypassFakeState: !0
                    })
                }
                getVideoProfiles() {
                    if (!this._streamer) throw new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                    return this._streamer.getVideoVariants()
                }
                setPreferredBitrate(e) {
                    if (!this._streamer) throw new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.");
                    return this._streamer.setPreferredBitrate(e)
                }
                getDevices() {
                    return this._controller.getDevices().then(this._parseDeviceList).then(e => (this._lastDeviceList = e, e))
                }
                setQueue(e, t, i) {
                    console.warn("Harmony.setQueue is deprecated; migrate to new PlayerQueue API");
                    let r = () => this._controller.setQueue(e, t, i);
                    return this._runOnDevice(i, r, r)
                }
                addToQueue(e, t) {
                    let i = e.map(e => "string" == typeof e ? e : e.uri);
                    return this._controller.getQueueManager().addToQueue(i, t)
                }
                setShuffle(e, t, i) {
                    let r = () => this._controller.setShuffle(e, t, i);
                    return this._runOnDevice(t, r, r, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
                toggleShuffle(e, t) {
                    let i = () => this._controller.toggleShuffle(e, t);
                    return this._runOnDevice(e, i, i, {
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                setRepeatMode(e, t) {
                    let i = () => this._controller.setRepeatMode(e, t);
                    return this._runOnDevice(t, i, i)
                }
                cycleRepeatMode(e) {
                    let t = () => this._cycleRepeatMode(e);
                    return this._runOnDevice(e, t, t)
                }
                transfer(e, t) {
                    let i = e || j,
                        r = () => this._controller.transfer(i, t);
                    return this._autoActivateElement && this._activateElement(), this._runOnDevice(i, r, r, {
                        bypassFakeState: !0,
                        loggingParams: null == t ? void 0 : t.loggingParams,
                        forceRemoteAction: null == t ? void 0 : t.forceRemoteAction
                    })
                }
                logout(e) {
                    return this._controller.logout(e || j)
                }
                activateElement() {
                    return this._streamer ? this._streamer.activateElement() : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getQueueManager() {
                    return this._controller.getQueueManager((e, t) => this._runOnDevice(t, e, e), {
                        reportInactiveQueues: this._claimInactivePlayerStates,
                        onlyLocalQueue: this._onlyLocalState,
                        reportInitial: this._hasFakeState || this._localPlayback
                    })
                }
                hideSubtitles() {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot hide subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.hideSubtitles()
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                showSubtitles() {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot show subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.showSubtitles()
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                areSubtitlesShown() {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot show subtitles on remote player."));
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.areSubtitlesShown()
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getSubtitleLanguages() {
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.getSubtitleLanguages()
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getActiveSubtitleLanguage() {
                    if (!this._localPlayback) return Promise.resolve(null);
                    let e = this._streamer;
                    return e ? this.getCurrentState().then(t => {
                        var i;
                        return (null == (i = null == t ? void 0 : t.track_window.current_track) ? void 0 : i.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : e.getActiveSubtitleLanguage()
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setSubtitleLanguage(e) {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot set subtitle languages on remote player."));
                    let t = this._streamer;
                    return t ? this.getCurrentState().then(i => {
                        var a;
                        return (null == (a = null == i ? void 0 : i.track_window.current_track) ? void 0 : a.media_type) !== "video" ? Promise.reject(new H(r.HARMONY_INVALID_MEDIA_TYPE, "Content type does not allow subtitles.")) : t.setSubtitleLanguage(e)
                    }) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                deactivateSubtitleEvents() {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot deactivate subtitle events on remote player."));
                    let e = this._streamer;
                    return e ? e.deactivateSubtitleEvents() : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                activateSubtitleEvents() {
                    if (!this._localPlayback) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot activate subtitle events on remote player."));
                    let e = this._streamer;
                    return e ? e.activateSubtitleEvents() : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setBackgrounded(e) {
                    return this.setPlayerVisibility(!e)
                }
                setPlayerVisibility(e) {
                    return this._localPlayback ? this._streamer ? this._streamer.setPlayerVisibility(e) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")) : Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot set background mode on remote player."))
                }
                setIsVideoVisible(e) {
                    return this._streamer ? this._streamer.setIsVideoVisible(e) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setVideoSurface(e) {
                    return this._streamer ? this._streamer.setVideoSurface(e) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
                setVideoResolution(e) {
                    return this._localPlayback ? this._streamer ? this._streamer.setVideoResolution(e) : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled.")) : Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot set preferred video resolution on remote player."))
                }
                getMediaConfig() {
                    return this._streamer ? this._streamer.getMediaConfig() : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                getSeekPanels() {
                    return this._streamer ? this._streamer.getSeekPanels() : Promise.reject(new H(r.HARMONY_LOCAL_PLAYER_DISABLED, "The local player is not enabled."))
                }
                setPlaybackSpeed(e, t) {
                    return isNaN(e) || e < .5 || e > 3.5 ? Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, `Invalid playback speed: ${e}. Should be in range 0.5 - 3.5`)) : this.getCurrentState().then(i => !i || i.disallows.setting_playback_speed ? Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, "Cannot change playback speed; content type is not allowed.")) : this._runOnDevice(t, () => this._streamer.setPlaybackSpeed(e), () => this._controller.setPlaybackSpeed(e, t)))
                }
                sendCustomSignal(e, t, i) {
                    return this.getCurrentState().then(a => {
                        if (((null == a ? void 0 : a.disallows.signals) || {})[e]) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, `Sending signal ${e} is not allowed.`));
                        let n = () => this._controller.sendCustomSignal(e, t, i);
                        return this._runOnDevice(t, n, n, {
                            loggingParams: null == i ? void 0 : i.loggingParams,
                            forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                        })
                    })
                }
                playAsNextInQueue(e, t, i) {
                    let r = () => this._controller.playAsNextInQueue(e, t, i);
                    return this._runOnDevice(t, r, r, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
                setModes(e, t, i) {
                    return this.getCurrentState().then(a => {
                        var n, s;
                        let o = (null == a ? void 0 : a.disallows) || {};
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let i = e[t];
                                if (null == (s = null == (n = o.setting_modes) ? void 0 : n[t]) ? void 0 : s[i]) return Promise.reject(new H(r.HARMONY_OPERATION_FORBIDDEN, `Setting ${t} to ${i} is not allowed.`))
                            }
                        let l = () => this._controller.setModes(e, t, i);
                        return this._runOnDevice(t, l, l, {
                            loggingParams: null == i ? void 0 : i.loggingParams,
                            forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                        })
                    })
                }
                setShuffleMode(e, t, i) {
                    let r = () => this._controller.setShuffleMode(e, t, i);
                    return this._runOnDevice(t, r, r, {
                        loggingParams: null == i ? void 0 : i.loggingParams,
                        forceRemoteAction: null == i ? void 0 : i.forceRemoteAction
                    })
                }
            }
            var Z = i(13139),
                ee = i(10427),
                et = i(89429);
            let ei = "spotify:user:attributes:mutated";
            class er extends Y.bk {
                constructor(e) {
                    super(), this._currentState = null, this._transport = e.transport, this._endpoint = e.endpoint || "@webgate/melody", this._handleUserUpdate = this._handleUserUpdate.bind(this), this._init()
                }
                static create(e) {
                    return new er(e)
                }
                _init() {
                    this.register()
                }
                _handleUserUpdate() {
                    clearTimeout(this._debounce), this._debounce = setTimeout(() => {
                        this._transport.forceTokenRefresh().catch(function() {}), this.getCurrentState(!0).then(e => {
                            this.emit(et.J.PRODUCT_STATE_CHANGED, {
                                productState: e
                            })
                        })
                    }, 300)
                }
                _shouldRetry(e, t) {
                    let i = e.getStatusFamily();
                    return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                }
                getCurrentState(e) {
                    return !e && this._currentState ? Promise.resolve(this._currentState) : this._transport.request(`${this._endpoint}/v1/product_state`, {
                        method: "GET",
                        responseType: "json",
                        retry: {
                            condition: this._shouldRetry
                        }
                    }).then(e => {
                        if (e.status !== ee.s.OK || !e.body) throw this._currentState = null, Error("Cannot get the user's product state.");
                        return this._currentState = e.body, e.body
                    })
                }
                register() {
                    return this._transport.matchMessages(ei, this._handleUserUpdate), Promise.resolve(!0)
                }
                deregister() {
                    return this._transport.unmatchMessages(ei, this._handleUserUpdate), Promise.resolve(!0)
                }
            }
            let ea = /(edge)[\s/:]([\w\d.]+)/,
                en = RegExp("(opera|ie|firefox|chrome|trident|crios|version)[\\s/:]([\\w\\d\\.]+)?.*?(safari|(?:rv[\\s\\/:]|version[\\s\\/:])([\\w\\d\\.]+)|$)"),
                es = {};

            function eo(e) {
                if (!e) return e;
                let t = function(e, t) {
                    var i, r, a;
                    let n = e.toLowerCase(),
                        s = t ? t.toLowerCase() : "",
                        o = `${n}:${s}`,
                        l = es[o];
                    if (l) return l;
                    let _ = n.match(ea),
                        d = n.match(en) || [null, "unknown", 0],
                        u = _ || d;
                    "trident" === u[1] ? (u[1] = "ie", u[4] && (u[2] = u[4])) : "crios" === u[1] && (u[1] = "chrome"), "win" === (s = n.match(/ip(?:ad|od|hone)/) ? "ios" : null != (i = (n.match(/(?:webos|android)/) || n.match(/mac|win|linux|cros/) || [])[0]) ? i : "other") && (s = "windows");
                    let c = "version" === u[1] ? u[3] : u[1],
                        h = "opera" === u[1] && u[4] ? u[4] : u[2],
                        p = {
                            name: null != (r = null == c ? void 0 : c.toString()) ? r : "unknown",
                            version: null != (a = null == h ? void 0 : h.toString()) ? a : "unknown",
                            platform: s
                        };
                    return es[o] = p, p
                }(navigator.userAgent, navigator.platform);
                return e.replace(/\{\{([^}]+?)\}\}/g, function(e, i) {
                    return t && Object.prototype.hasOwnProperty.call(t, i) ? t[i] : ""
                })
            }! function(e) {
                e.FILE_URLS_MP3 = "file_urls_mp3", e.FILE_URLS_EXTERNAL = "file_urls_external", e.FILE_IDS_MP3 = "file_ids_mp3", e.FILE_IDS_MP4 = "file_ids_mp4", e.FILE_IDS_MP4_DUAL = "file_ids_mp4_dual", e.FILE_IDS_CBCS = "file_ids_mp4_cbcs", e.FILE_IDS_MP4FLAC = "file_ids_mp4flac", e.MANIFEST_IDS_VIDEO = "manifest_ids_video", e.MANIFEST_URLS_VIDEO_AD = "manifest_urls_video_ad", e.MANIFEST_URLS_AUDIO_AD = "manifest_urls_audio_ad"
            }(_ || (_ = {})),
            function(e) {
                e.UNKNOWN = "unknown", e.COMPUTER = "computer", e.TABLET = "tablet", e.SMARTPHONE = "smartphone", e.SPEAKER = "speaker", e.TV = "tv", e.AVR = "avr", e.STB = "stb", e.AUDIO_DONGLE = "audio_dongle", e.GAME_CONSOLE = "game_console", e.CAST_VIDEO = "cast_video", e.CAST_AUDIO = "cast_audio", e.AUTOMOBILE = "automobile", e.SMARTWATCH = "smartwatch", e.CHROMEBOOK = "chromebook"
            }(d || (d = {}));
            let el = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
                e_ = e => (function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let r = e[i];
                        r < 16 && (t += "0"), t += r.toString(16)
                    }
                    return t
                })((e => el ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                    let t = [];
                    for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                    return t
                }(e))(Math.ceil(e / 2))),
                ed = () => e_(40),
                eu = "_spharmony_device_id",
                ec = {
                    get: function(e, t = !1) {
                        if (e && "string" == typeof e) return e;
                        if (t) return ed();
                        let i = localStorage.getItem(eu);
                        return i || (i = ed(), localStorage.setItem(eu, i)), i
                    }
                };
            class eh extends Y.bk {
                constructor(e) {
                    var t;
                    if (super(), this._platformVersion = "", this._osName = "", this._osVersion = "", this._metadata = {}, this._manifestPrependOffset = 0, !e) throw TypeError("Invalid argument `options`.");
                    if (!e.id) throw TypeError("Argument `options.id` is required.");
                    if (!e.name || !e.model || !e.type) throw TypeError("Incomplete `options` value.");
                    this._id = e.id, this._type = e.type, this._brand = e.brand, this._model = e.model, this._isGroup = !!e.is_group, this._name = e.name, this._platformName = e.platform_name, this._platformIdentifier = e.platform_identifier, this._platformVersion = e.platform_version || "", this._osName = e.os_name || "", this._osVersion = e.os_version || "", this._metadata = e.metadata || {}, this._capabilities = e.capabilities || {
                        manifest_formats: []
                    }, this._manifestPrependOffset = (null == (t = this._capabilities.manifest_formats) ? void 0 : t.length) || 0
                }
                static create(e) {
                    return new eh({
                        id: ec.get(e.id, e.randomizeId),
                        model: e.model || eo("harmony-{{name}}.{{version}}-{{platform}}").toLowerCase(),
                        name: e.nameTemplate ? eo(e.nameTemplate) : e.name || eo("Spotify ({{name}}/{{platform}})").replace(/\b[a-z]/g, e => e.toUpperCase()),
                        type: e.type || d.COMPUTER,
                        brand: e.brand || "SpotifyHarmonyGeneric",
                        platform_name: e.platform_name,
                        platform_identifier: e.platform_identifier,
                        platform_version: e.platform_version,
                        os_name: e.os_name,
                        os_version: e.os_version,
                        metadata: e.metadata || {},
                        capabilities: e.capabilities || {},
                        is_group: !!e.is_group
                    })
                }
                getId() {
                    return this._id
                }
                setCapability(e, t) {
                    if ("manifest_formats" !== e) return this._capabilities[e] = t, this.emit("descriptor_changed", {
                        descriptor: this.toJSON()
                    }), !0;
                    throw TypeError('Cannot change capability "manifest_formats"')
                }
                getCapability(e) {
                    if ("manifest_formats" !== e) return this._capabilities[e];
                    throw TypeError("Use `descriptor.getManifestFormats()`.")
                }
                setName(e) {
                    return this._name = e, this.emit("descriptor_changed", {
                        descriptor: this.toJSON()
                    }), !0
                }
                getName() {
                    return this._name
                }
                getType() {
                    return this._type
                }
                getBrand() {
                    return this._brand
                }
                getModel() {
                    return this._model
                }
                getPlatformIdentifier() {
                    return this._platformIdentifier || `Partner ${this._brand} ${this._model}`
                }
                getPlatformName() {
                    return this._platformName || this.getPlatformIdentifier()
                }
                getPlatformVersion() {
                    return this._platformVersion
                }
                getOSName() {
                    return this._osName
                }
                getOSVersion() {
                    return this._osVersion
                }
                getManifestFormats() {
                    return this._capabilities.manifest_formats || []
                }
                appendManifestFormat(...e) {
                    let t = this._capabilities.manifest_formats;
                    Array.isArray(t) && t.push(...e)
                }
                prependManifestFormat(...e) {
                    let t = this._capabilities.manifest_formats;
                    Array.isArray(t) && t.splice(this._manifestPrependOffset, 0, ...e)
                }
                supportsVideoManifestFormats() {
                    let e = this._capabilities.manifest_formats;
                    return (null == e ? void 0 : e.indexOf(_.MANIFEST_IDS_VIDEO)) !== -1
                }
                toJSON() {
                    return {
                        brand: this._brand,
                        capabilities: Object.assign({}, this._capabilities),
                        id: this._id,
                        metadata: Object.assign({}, this._metadata),
                        model: this._model,
                        name: this._name,
                        platform_name: this._platformName,
                        platform_identifier: this._platformIdentifier,
                        platform_version: this._platformVersion,
                        os_name: this._osName,
                        os_version: this._osVersion,
                        type: this._type
                    }
                }
                toTrackPlaybackDeviceInfo() {
                    return {
                        brand: this._brand,
                        capabilities: Object.assign({}, this._capabilities),
                        device_id: this._id,
                        device_type: this._type,
                        metadata: Object.assign({}, this._metadata),
                        model: this._model,
                        name: this._name,
                        platform_name: this._platformName,
                        platform_identifier: this._platformIdentifier,
                        is_group: this._isGroup
                    }
                }
            }
            let ep = "undefined" != typeof globalThis && "function" == typeof globalThis.queueMicrotask ? globalThis.queueMicrotask.bind(globalThis) : function() {
                if ("undefined" == typeof Promise) return e => setTimeout(e, 0);
                let e = Promise.resolve();
                return t => {
                    e.then(t).catch(e => setTimeout(() => {
                        throw e
                    }, 0))
                }
            }();
            ! function(e) {
                e.INVALID_IDENT_DATA = "INVALID_IDENT_DATA", e.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED"
            }(u || (u = {}));
            let em = {
                UNKNOWN: "unknown",
                EMPTY: "",
                ZERO: 0,
                EMPTY_VERSION: "0.0.0"
            };
            class eE extends Error {
                constructor(e, t, i) {
                    super(t), this.name = "LoggingError", this.code = e, this.status = i || 0
                }
            }

            function ef(e, t) {
                let i = e.indexOf(t);
                return -1 === i ? [e, ""] : [e.slice(0, i), e.slice(i + t.length)]
            }
            class eg {
                constructor(e) {
                    this._transport = e.transport, this._endpoint = e.endpoint || "@webgate/melody", this._batchQueue = [], this._identData = Promise.all([e.sdkId, e.platform, e.clientVersion]).then(([e, t, i]) => ({
                        sdk_id: e || em.EMPTY,
                        platform: t || em.EMPTY,
                        client_version: i || em.EMPTY_VERSION
                    }))
                }
                _assertValidIdentData(e) {
                    if (!e.sdk_id) throw new eE(u.INVALID_IDENT_DATA, "sdkId must be a non-empty string.", 0)
                }
                _sendBatchedLogs() {
                    return this._identData.then(e => {
                        this._assertValidIdentData(e);
                        let t = this._batchQueue.splice(0, this._batchQueue.length);
                        if (t.length) {
                            let i = t.reduce(function(e, t) {
                                var i;
                                let r = t.endpoint;
                                return void 0 === r || (e[r] = null != (i = e[r]) ? i : [], e[r].push(t)), e
                            }, {});
                            return Promise.all(Object.keys(i).map(t => {
                                var r;
                                let a = null == (r = i[t]) ? void 0 : r.map(({
                                    payload: e
                                }) => e);
                                return (null == a ? void 0 : a.length) ? this._transport.request(`${this._endpoint}${t}`, {
                                    method: "POST",
                                    payload: JSON.stringify(Object.assign({
                                        messages: a
                                    }, e)),
                                    retry: {
                                        maxRetries: 5,
                                        condition: e => 202 !== e.status
                                    }
                                }).then(({
                                    status: e
                                }) => 202 === e || Promise.reject(new eE(u.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e))) : Promise.resolve(!0)
                            })).then(() => !0)
                        }
                        return Promise.resolve(!0)
                    })
                }
                _sendLog(e, t) {
                    return this.sendLog(e, t)
                }
                sendLog(e, t, i) {
                    let r = null == i ? void 0 : i.forget;
                    if (null == i ? void 0 : i.batch) {
                        if (r) throw Error("'forget' cannot be used together with 'batch'.");
                        return new Promise(i => {
                            this._batchQueue.push({
                                endpoint: e,
                                payload: t
                            }), ep(() => {
                                this._sendBatchedLogs().then(i)
                            })
                        })
                    }
                    return this._identData.then(i => {
                        this._assertValidIdentData(i);
                        let a = this._endpoint + e,
                            n = r ? this._transport.getLastToken() : null;
                        return n && (a = function(e, t, i) {
                            let [r, a] = ef(e, "#"), [n, s] = ef(r, "?"), o = a ? `#${a}` : "", l = `${t}=${encodeURIComponent(i)}`;
                            for (let e of s.split("&")) e.length > 0 && ef(e, "=")[0] !== t && (l += `&${e}`);
                            return `${n}?${l}${o}`
                        }(a, "access_token", n)), this._transport.request(a, {
                            method: "POST",
                            payload: JSON.stringify(Object.assign(Object.assign({}, t), i)),
                            forget: r,
                            retry: {
                                maxRetries: 5,
                                condition: e => 202 !== e.status
                            }
                        })
                    }).then(({
                        status: e
                    }) => !!r || 202 === e || Promise.reject(new eE(u.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e)))
                }
            }
            class ey {
                constructor(e) {
                    this._melodyLogger = new eg(e)
                }
                logClientEvent(e, t) {
                    return e ? this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "client_event",
                        message: {
                            source: e.source || em.UNKNOWN,
                            context: e.context || em.UNKNOWN,
                            event: e.event || em.UNKNOWN,
                            event_version: e.event_version || em.EMPTY,
                            test_version: e.test_version || em.EMPTY,
                            source_version: e.source_version || em.UNKNOWN,
                            source_vendor: e.source_vendor || em.UNKNOWN,
                            json_data: "json" === t ? e.json_data || "{}" : JSON.stringify(e.json_data || {})
                        }
                    }, {
                        batch: !0
                    }) : Promise.reject(TypeError("Logger.logClientEvent `data` cannot be null."))
                }
                logMetrics(e, t) {
                    if (!e && !t) return Promise.resolve(!0);
                    let i = e || [],
                        r = t || [];
                    if (!i.length && !r.length) return Promise.resolve(!0);
                    if (!Array.isArray(i) || !Array.isArray(r)) return Promise.reject(TypeError("Logger.logMetrics `meters` and `timers` must be null or an array."));
                    for (let e of i)
                        if (!("what" in e) || !("result" in e) || !("reason" in e)) return Promise.reject(TypeError("Logger.logMetrics: Invalid meter format in `meters` array."));
                    for (let e of r)
                        if (!("what" in e) || !("duration" in e)) return Promise.reject(TypeError("Logger.logMetrics: Invalid timer format in `timers` array."));
                    return this._melodyLogger.sendLog("/v1/metric", {
                        sdk_id: void 0,
                        platform: void 0,
                        client_version: void 0,
                        meters: i,
                        timers: r
                    })
                }
                logJSSDKError(e, t) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_error",
                        message: {
                            source: e.source || em.UNKNOWN,
                            source_version: e.source_version || em.UNKNOWN,
                            type: e.type || em.UNKNOWN,
                            message: e.message || em.EMPTY,
                            stack: JSON.stringify(e.stack || em.EMPTY),
                            json_data: "json" === t ? e.json_data || "{}" : JSON.stringify(e.json_data || {}),
                            json_data_version: e.json_data_version || em.EMPTY_VERSION
                        }
                    }, {
                        batch: !0
                    })
                }
                logJSSDKHarmonyError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_harmony_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKContentRequest(e) {
                    var t;
                    return this._melodyLogger.sendLog("/v1/msg/jssdk_content_request", {
                        source: e.source || em.UNKNOWN,
                        type: e.type || em.UNKNOWN,
                        http_status: null != (t = e.http_status) ? t : void 0,
                        ms_request_duration: e.ms_request_duration || em.EMPTY,
                        n_retries: e.n_retries || em.ZERO,
                        playback_id: e.playback_id || em.EMPTY
                    })
                }
                logJSSDKConnectCommand(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_connect_command",
                        message: {
                            ms_ack_duration: e.ms_ack_duration,
                            ms_request_latency: e.ms_request_latency || em.ZERO,
                            command_id: e.command_id || em.EMPTY,
                            command_type: e.command_type || em.EMPTY,
                            target_device_brand: e.target_device_brand || em.EMPTY,
                            target_device_model: e.target_device_model || em.EMPTY,
                            target_device_client_id: e.target_device_client_id || em.EMPTY,
                            target_device_id: e.target_device_id || em.EMPTY,
                            interaction_ids: e.interaction_ids || em.EMPTY,
                            play_origin: e.play_origin || em.EMPTY,
                            result: e.result || em.EMPTY,
                            http_response: e.http_response || em.EMPTY,
                            http_status_code: e.http_status_code || em.ZERO
                        }
                    }, {
                        batch: !0
                    })
                }
            }
            let ev = Z.m.forTag("harmonyclient"),
                eT = /^[a-zA-Z0-9_%:-]{1,40}$/;
            class eS extends Y.bk {
                constructor(e) {
                    if (super(), this._platformIdentifier = (0, V.u)(), this._platformVersion = (0, V.u)(), !e) throw TypeError("Argument `options` is not defined.");
                    if (!e.transport) throw TypeError("No Transport instance provided");
                    if (!e.transport.hasPlugin("dealer")) throw TypeError("Transport has no Dealer plugin.");
                    this._transport = e.transport, this._deviceDescriptor = this._initDeviceDescriptor(e), this._logger = new ey({
                        transport: this._transport.toPublic(),
                        sdkId: this.getSDKId(),
                        platform: this._platformIdentifier.promise,
                        clientVersion: this._platformVersion.promise
                    }), this._productStateObserver = er.create({
                        transport: this._transport
                    }), this._onConnected = this._onConnected.bind(this), this._onAuthenticated = this._onAuthenticated.bind(this), this._onConnectionError = this._onConnectionError.bind(this), this._onAuthenticationError = this._onAuthenticationError.bind(this), this._onShortSessionDisconnect = this._onShortSessionDisconnect.bind(this), this._attachListeners()
                }
                static create(e) {
                    return new eS(e)
                }
                static of (e) {
                    return e._client
                }
                _createDeviceDescriptor(e, t = {}) {
                    var i, a, n;
                    if ((null == t ? void 0 : t.id) && !eT.test(t.id)) throw H.fatal(r.HARMONY_INVALID_DESCRIPTOR_ID, "Invalid device id.");
                    let s = t.capabilities || {},
                        o = {
                            change_volume: null == (i = s.change_volume) || i,
                            endsong_snooping: s.endsong_snooping,
                            enable_play_token: !0,
                            supports_file_media_type: !0,
                            play_token_lost_behavior: e.playTokenLostBehavior || "pause",
                            disable_connect: !!e.hidden,
                            audio_podcasts: null == (a = s.audio_podcasts) || a,
                            video_playback: s.video_playback,
                            lossless_playback: s.lossless_playback,
                            volume_steps: void 0 !== s.volume_steps && s.volume_steps >= 0 && s.volume_steps < 65535 ? s.volume_steps : void 0,
                            manifest_formats: [_.FILE_IDS_MP3, _.FILE_URLS_MP3, _.MANIFEST_URLS_AUDIO_AD],
                            video_ads: s.video_ads,
                            supports_preferred_media_type: null == (n = s.supports_preferred_media_type) || n
                        },
                        l = eh.create(Object.assign(Object.assign({}, t), {
                            capabilities: o
                        }));
                    return this._platformIdentifier.resolve(l.getPlatformIdentifier()), this._platformVersion.resolve(l.getPlatformVersion()), this.proxyEmit(l, "descriptor_changed", "descriptor_changed"), l
                }
                _initDeviceDescriptor(e) {
                    return Promise.resolve(e.descriptor).then(this._createDeviceDescriptor.bind(this, e)).catch(e => (this._onError(n.HARMONY, {
                        error: e
                    }), Promise.reject(e)))
                }
                _attachListeners() {
                    let e = this._transport;
                    e.on(B.TransportEvent.CONNECTED, this._onConnected), e.on(B.TransportEvent.AUTHENTICATED, this._onAuthenticated), e.on(B.TransportEvent.CONNECTION_FAILED, this._onConnectionError), e.on(B.TransportEvent.AUTHENTICATION_FAILED, this._onAuthenticationError), this.proxyEmit(e, B.TransportEvent.RECONNECTING, "reconnecting"), this.proxyEmit(e, B.TransportEvent.RECONNECTED, "reconnected"), this.proxyEmit(e, B.TransportEvent.LOGGED_OUT, "logged_out"), this.proxyEmitSync(e, B.TransportEvent.BEFORE_OFFLINE_DISCONNECT, "before_offline_disconnect"), this.proxyEmitSync(e, B.TransportEvent.BEFORE_ONLINE_DISCONNECT, "before_disconnect"), e.on(B.TransportEvent.SHORT_SESSION_DISCONNECTED, this._onShortSessionDisconnect.bind(this)), this.proxyEmit(this._productStateObserver, B.TransportEvent.PRODUCT_STATE_CHANGED, "product_state_changed"), this.on("before_disconnect", e => {
                        let t = this._productStateObserver.deregister().catch(() => {});
                        e.data.awaitPromise(t)
                    })
                }
                _onError(e, t) {
                    this.emit("error", {
                        source: e,
                        error: t.error
                    }), t.error && t.error.unrecoverable && this.emit("unrecoverable_failure", {
                        source: e,
                        error: t.error
                    })
                }
                _onConnected() {
                    this.emit("connected", null)
                }
                _onAuthenticated() {
                    this.emit("authenticated", null)
                }
                _onConnectionError(e) {
                    this._onError(n.TRANSPORT, {
                        error: e.data.error
                    }), this.emit("connection_error", e.data)
                }
                _onAuthenticationError(e) {
                    this._onError(n.TRANSPORT, {
                        error: e.data.error
                    }), this.emit("authentication_error", e.data)
                }
                _onShortSessionDisconnect(e) {
                    this._logger.logClientEvent({
                        source: "transport",
                        source_version: z.tagged,
                        source_vendor: "spotify",
                        event: e.type,
                        event_version: "1.0.0",
                        json_data: {
                            disconnectCount: e.data.disconnectCount,
                            sessionLength: e.data.sessionLength
                        }
                    }, "object").catch(t => ev.warn(`${e.type} Logging Error:`, t))
                }
                getVersionDescriptor() {
                    return Object.assign({}, z)
                }
                getSDKId() {
                    return `harmony:${z.tagged}`
                }
                getUntaggedSDKId() {
                    return `harmony:${z.version}`
                }
                getPlatformIdentifier() {
                    return this._platformIdentifier.promise
                }
                getPlatformVersion() {
                    return this._platformVersion.promise
                }
                getLogger() {
                    return this._logger
                }
                logAppMetrics(e, t) {
                    if (!this._logger) throw TypeError("Invalid logger instance");
                    return this._logger.logMetrics(e, t)
                }
                request(e, t) {
                    return this._transport.request(e, t)
                }
                getPublicTransport() {
                    return this._transport.toPublic()
                }
                getClientDescriptor() {
                    return this._deviceDescriptor.then(e => e.toJSON())
                }
                getDeviceDescriptor() {
                    return this._deviceDescriptor
                }
                getUserInfo() {
                    return this._transport.request("@webapi/v1/me", {
                        responseType: "json"
                    }).then(e => {
                        let t = e.body;
                        if (200 !== e.status) {
                            let t = new H(r.USER_INFO_REQUEST_FAILED_WITH_STATUS, `User info request failed with status ${e.status}`);
                            return t.status = e.status, Promise.reject(t)
                        }
                        return t ? {
                            display_name: t.display_name,
                            followers: t.followers,
                            id: t.id,
                            images: t.images,
                            uri: t.uri
                        } : Promise.reject(new H(r.USER_INFO_REQUEST_EMPTY_RESPONSE, "Unexpected empty response."))
                    })
                }
                getProductState() {
                    return this._productStateObserver.getCurrentState()
                }
                setName(e) {
                    return this._deviceDescriptor.then(function(t) {
                        return t.setName(e)
                    })
                }
                setNameTemplate(e) {
                    return this.setName(eo(e))
                }
                setCapability(e, t) {
                    return this._deviceDescriptor.then(i => i.setCapability(e, t))
                }
                notifyError(e, t) {
                    this._onError(e, {
                        error: t
                    })
                }
            }
            var eP = i(96816);
            let eb = "Node already exists in another list!";
            class eR {
                constructor(e) {
                    this.listId = null, this.key = "", this.prev = null, this.next = null, this.value = null, this.value = e
                }
            }
            class eI {
                constructor() {
                    this._id = {}, this.length = 0, this.first = null, this.last = null
                }
                append(e) {
                    if (e.listId) throw Error(eb);
                    return e.listId = this._id, this.first ? this.last && (e.prev = this.last, e.next = null, this.last.next = e, this.last = e) : (this.first = e, this.last = e), ++this.length
                }
                insertAfter(e, t) {
                    if (t.listId) throw Error(eb);
                    return t.listId = this._id, t.prev = e, t.next = e.next, e.next && (e.next.prev = t), e.next = t, t.prev === this.last && (this.last = t), ++this.length
                }
                remove(e) {
                    return !!this.length && e.listId === this._id && (this.length > 1 ? (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.first ? this.first = e.next : e === this.last && (this.last = e.prev)) : (this.first = null, this.last = null), e.listId = null, e.prev = null, e.next = null, this.length--, !0)
                }
            }
            class eA {
                constructor(e) {
                    this._limit = 100, this._list = new eI, this._map = {}, this._limit = e
                }
                get(e) {
                    let t = this._map[e];
                    if (!t) return null;
                    let i = this._list;
                    return i.remove(t), i.append(t), t.value
                }
                set(e, t) {
                    if (!e) throw TypeError("Cache key cannot be empty.");
                    let i = this._list,
                        r = this._map;
                    if (i.length >= this._limit) {
                        let e = i.first;
                        r[e.key] = null, i.remove(e)
                    }
                    let a = r[e];
                    a ? (i.remove(a), a.value = t) : (a = new eR(t)).key = e, i.append(a), r[e] = a
                }
                remove(e) {
                    let t = this._map,
                        i = t[e];
                    return i ? (this._list.remove(i), t[e] = null, i.value) : null
                }
                keys() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.key), t = t.next;
                    return e.reverse()
                }
                values() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.value), t = t.next;
                    return e.reverse()
                }
                size() {
                    return this._list.length
                }
                clear() {
                    let e = this._list.length;
                    return this._list = new eI, this._map = {}, e
                }
            }! function(e) {
                e.URL = "URL", e.MSE = "MSE"
            }(c || (c = {}));
            var eL = i(26735),
                eD = i(54204);
            ! function(e) {
                e.SUCCESS = "RESULT_SUCCESS", e.INVALID = "RESULT_INVALID", e.FORBIDDEN = "RESULT_FORBIDDEN", e.OUT_OF_BOUNDS = "RESULT_OUT_OF_BOUNDS", e.NO_LIST = "RESULT_NO_LIST", e.NO_TRACK = "RESULT_NO_TRACK", e.LIST_END = "RESULT_LIST_END", e.INVALID_TRACK = "RESULT_INVALID_TRACK", e.CANCELLED = "CANCELLED", e.NO_TRACK_PLAYER = "NO_TRACK_PLAYER"
            }(h || (h = {})),
            function(e) {
                e.MP3 = "MP3", e.MP4 = "MP4", e.MP4_DUAL = "MP4_DUAL", e.MP4_CBCS = "MP4_CBCS", e.MP4_FLAC = "MP4_FLAC", e.MANIFEST_ID = "MANIFEST_ID", e.AD_MANIFEST = "AD_MANIFEST", e.GENERIC_MEDIA = "GENERIC_MEDIA"
            }(p || (p = {})),
            function(e) {
                e.FRAGMENT_FETCHED = "fragment_fetched", e.FRAGMENT_FETCH_ERROR = "fragment_fetch_error", e.VIDEO_PROFILE_CHANGED = "video_profile"
            }(m || (m = {}));
            class eC extends Error {
                constructor(e, t, i = {}) {
                    super(), this.unrecoverable = !1, this.listPlayerIgnore = !1, this.debug = {}, this.name = "PlaybackError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new eC(e, t);
                    return i.unrecoverable = !0, i
                }
            }
            var eO = i(74235),
                ek = i(2735);
            class eN {
                constructor(e) {
                    if (this._estimate = 0, this._totalWeight = 0, e < 0) throw TypeError("Halflife must be set to a positive value.");
                    this._weightingDecrease = Math.exp(Math.log(.5) / e)
                }
                sample(e, t) {
                    let i = Math.pow(this._weightingDecrease, e),
                        r = t * (1 - i) + i * this._estimate;
                    isNaN(r) || (this._estimate = r, this._totalWeight += t)
                }
                getEstimate() {
                    return this._estimate / 1 - Math.pow(this._weightingDecrease, this._totalWeight)
                }
            }
            class ew {
                constructor(e = 4e5) {
                    this._totalBytes = 0, this._overrideBitrate = 0, this._currentBandwidth = e, this._short = new eN(2), this._long = new eN(5), this._init()
                }
                _init() {
                    if ("undefined" == typeof navigator) return;
                    let e = navigator;
                    e.connection && e.connection.downlink && (this._currentBandwidth = 1e6 * e.connection.downlink, this._onConnectionChange = this._onConnectionChange.bind(this), e.connection.addEventListener("change", this._onConnectionChange))
                }
                _onConnectionChange(e) {
                    let t = e.target.downlink || 0;
                    this._setBandwidth(t)
                }
                _setBandwidth(e) {
                    this._currentBandwidth = 1e6 * e
                }
                getBandwidthEstimate() {
                    return this._overrideBitrate ? this._overrideBitrate : this._totalBytes < 128e3 ? this._currentBandwidth : Math.min(this._short.getEstimate(), this._long.getEstimate())
                }
                sample(e, t) {
                    if (e < 16e3) return;
                    let i = t / 1e3,
                        r = 8 * e / i;
                    this._totalBytes += e, this._short.sample(i, r), this._long.sample(i, r)
                }
                overrideBitrate(e) {
                    e <= 0 ? this._overrideBitrate = 0 : this._overrideBitrate = e
                }
            }
            var eM = i(14081);
            ! function(e) {
                e.SHOWING = "showing", e.HIDDEN = "hidden", e.DISABLED = "disabled"
            }(E || (E = {}));
            let eU = Array.prototype.slice,
                eF = "function" == typeof Array.from ? e => Array.from(e) : e => eU.call(e);

            function ex(e, t) {
                for (let i of eF(e.getElementsByTagName(t))) e.removeChild(i)
            }
            var eB = i(71392);

            function eY(e) {
                return {
                    id: e.id,
                    text: e.text
                }
            }
            let eV = "visible",
                eG = "hidden",
                ej = /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$|[A-Za-z]{2,3}-x-cc/;
            class eH extends Y.bk {
                constructor(e) {
                    super(), this._isVisible = !1, this._player = null, this._crossOrigin = null, this._currentVideoContent = null, this._unsubscribers = [], this._displayedCues = [], this._deactivateListeners = !1, this._activeLanguage = void 0, this._preferredLanguage = e.language.toLowerCase(), e.deactivateListeners && (this._deactivateListeners = !0), this._onEnter = this._onEnter.bind(this), this._onExit = this._onExit.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this.setPlayer(e.player)
                }
                _subscribeToCueEvents(e) {
                    var t;
                    let {
                        track: i
                    } = e;
                    if (!i) throw Error("No track");
                    if (!(null == (t = i.cues) ? void 0 : t.length)) {
                        let t = () => {
                            this._subscribeToCueEvents(e), e.removeEventListener("load", t)
                        };
                        e.addEventListener("load", t);
                        return
                    }
                    this._displayedCues = i.activeCues ? Array.from(i.activeCues) : [], this._emitDisplayedCues();
                    for (let e = 0; e < i.cues.length; e++) {
                        let t = i.cues[e];
                        t && (t.addEventListener("enter", this._onEnter), t.addEventListener("exit", this._onExit), this._unsubscribers.push(() => {
                            t.removeEventListener("enter", this._onEnter), t.removeEventListener("exit", this._onExit)
                        }))
                    }
                }
                _unsubscribeFromCueEvents() {
                    this._unsubscribers.forEach(e => e()), this._unsubscribers = []
                }
                _onEnter(e) {
                    let t = e.target;
                    this._displayedCues.indexOf(t) > -1 || (this._displayedCues.push(t), this._emitDisplayedCues())
                }
                _onExit(e) {
                    let t = e.target,
                        i = this._displayedCues.indexOf(t);
                    i > -1 && (this._displayedCues.splice(i, 1), this._emitDisplayedCues())
                }
                _emitDisplayedCues() {
                    this.emit(eL.J.PLAYER_DISPLAYED_CUES_CHANGED, Object.assign({
                        cues: this._displayedCues.map(eY)
                    }, (0, eB.P)()))
                }
                _updateVisibleState() {
                    var e, t;
                    if (!this._player) return;
                    let i = this.getActiveLanguage();
                    Array.from(null != (t = null == (e = this._player) ? void 0 : e.querySelectorAll("track")) ? t : []).forEach(e => {
                        e.style.visibility = this._isVisible ? eV : eG
                    });
                    let r = this._player.textTracks;
                    for (let e = 0, t = r.length; e < t; e++) {
                        let t = r[e];
                        t && (t.language.toLowerCase() === i ? t.mode = this._isVisible ? E.SHOWING : E.HIDDEN : t.mode = E.DISABLED)
                    }
                }
                _updateTextTracks() {
                    let e = this._player;
                    e && (e.readyState >= 1 ? this._switchActiveTextTrack() : this._currentVideoContent && e.addEventListener(eL.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata))
                }
                _switchActiveTextTrack() {
                    let e = this._player;
                    if (!e || !this._currentVideoContent) return;
                    let t = this._updateActiveLanguage(),
                        i = null,
                        r = null;
                    eF(e.getElementsByTagName("track")).forEach(e => {
                        e.default && (i = e), e.srclang.toLowerCase() === t && (r = e)
                    }), i && (i.default = !1, i.track.mode = E.DISABLED, this._unsubscribeFromCueEvents()), r && (r.default = !0, r.track.mode = this._isVisible ? E.SHOWING : E.HIDDEN, this._deactivateListeners || this._subscribeToCueEvents(r))
                }
                _onLoadedMetadata() {
                    let e = this._player;
                    if (e && (ex(e, "track"), this._currentVideoContent)) {
                        for (let {
                                lang: t,
                                url: i
                            } of (e.crossOrigin = "anonymous", this._updateActiveLanguage(), this._currentVideoContent.getSubtitles())) {
                            let r = document.createElement("track");
                            r.label = `${t} subtitles`, r.kind = "subtitles", r.srclang = t, r.src = i, r.style.visibility = this._isVisible ? eV : eG, e.appendChild(r)
                        }
                        setTimeout(() => this._switchActiveTextTrack())
                    }
                }
                _updateActiveLanguage() {
                    if (!this._player || !this._currentVideoContent) {
                        this._activeLanguage = void 0;
                        return
                    }
                    let e = this._currentVideoContent.getSubtitleLanguages(),
                        t = this._preferredLanguage.split("-")[0],
                        i = null;
                    for (let r of e) {
                        let e = r.toLowerCase();
                        if (e === this._preferredLanguage) return this._activeLanguage = e, this._activeLanguage;
                        e.split("-")[0] === t && null === i && (i = e)
                    }
                    return this._activeLanguage = null != i ? i : "en-us", this._activeLanguage
                }
                getActiveLanguage() {
                    if (this._player && this._currentVideoContent) return this._activeLanguage
                }
                setVideoContent(e) {
                    var t;
                    this._unsubscribeFromCueEvents(), this._displayedCues = [], this._currentVideoContent = e, e ? this.emit(eL.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, Object.assign({
                        languages: null != (t = e.getSubtitleLanguages()) ? t : []
                    }, (0, eB.P)())) : this.clear(), this._updateTextTracks()
                }
                setPlayer(e) {
                    var t;
                    let i = (null == e ? void 0 : e.tagName) === "VIDEO" ? e : null;
                    this._player !== i && this.clear(), this._player = i || null, this._crossOrigin = null != (t = null == i ? void 0 : i.crossOrigin) ? t : null, this._updateTextTracks()
                }
                getAvailableLanguages() {
                    var e, t;
                    return null != (t = null == (e = this._currentVideoContent) ? void 0 : e.getSubtitleLanguages()) ? t : []
                }
                setLanguage(e) {
                    if (!e.length) throw TypeError("Argument `code` must be a non-empty string. Hide subtitles using `hideSubtitles()`.");
                    if (!ej.test(e)) throw TypeError("Argument `code` must be a valid BCP 47 formatted language code");
                    this._preferredLanguage !== e.toLowerCase() && (this._preferredLanguage = e.toLowerCase(), this._switchActiveTextTrack())
                }
                hide() {
                    this._isVisible = !1, this._updateVisibleState()
                }
                show() {
                    this._isVisible = !0, this._updateVisibleState()
                }
                deactivateListeners() {
                    !this._deactivateListeners && this._player && (this._deactivateListeners = !0, this._unsubscribeFromCueEvents())
                }
                activateListeners() {
                    this._deactivateListeners && (this._deactivateListeners = !1, this._updateTextTracks())
                }
                areListenersActivated() {
                    return !this._deactivateListeners
                }
                clear() {
                    let e = this._player;
                    e && (this._unsubscribeFromCueEvents(), this._currentVideoContent = null, this._displayedCues = [], ex(e, "track"), e.removeEventListener(eL.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.crossOrigin = this._crossOrigin)
                }
                visible() {
                    return this._isVisible
                }
            }
            class eJ extends Error {
                constructor(e = x.I.STORAGE_ERROR, t = "File Error") {
                    super(t), this.canPlayNext = !0, this.debug = {}, this.code = e, this.message = t, this.name = "FileError"
                }
            }
            class eq {
                constructor(e) {
                    this._mediaType = e.mediaType, this._fileId = e.fileId, this._uri = e.uri, this._audioGain = e.audioGain, this._logData = e.logData, this._hasNonFatalErrors = !!e.hasNonFatalErrors, this._disableCache = e.disableCache, this._keySystemInfo = e.keySystemInfo, this._licenseEndpoint = e.licenseEndpoint, this._mediaFormat = e.mediaFormat, this._mediator = e.mediator, this._noAuth = e.noAuth, this._contentMetadata = e.contentMetadata, this._mediaPlaybackMode = e.mediaPlaybackMode
                }
                getFileId() {
                    return this._fileId
                }
                getAudioGain() {
                    return this._audioGain
                }
                getMediaType() {
                    return this._mediaType
                }
                getLogData() {
                    return this._logData
                }
                setLogData(e) {
                    this._logData = e
                }
                toLogJSON() {
                    return {
                        uri: this._uri,
                        fileId: this._fileId,
                        mediaFormat: this._mediaFormat,
                        mediaURL: this._mediaURL
                    }
                }
                hasNonFatalErrors() {
                    return this._hasNonFatalErrors
                }
                getContentMetadata() {
                    return this._contentMetadata || {}
                }
                getMediaPlaybackMode() {
                    var e;
                    return null != (e = this._mediaPlaybackMode) ? e : null
                }
                setMediaPlaybackMode(e) {
                    this._mediaPlaybackMode = e
                }
                getInitParams() {
                    return this.isProtected() ? {
                        initDataType: this._protection,
                        initData: this._pssh
                    } : null
                }
                getKeySystemInfo() {
                    var e;
                    return null != (e = this._keySystemInfo) ? e : null
                }
                getLicenseEndpoint() {
                    var e;
                    return null != (e = this._licenseEndpoint) ? e : null
                }
            }
            let eK = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                eQ = {},
                eW = {};
            ! function() {
                for (let e = 0, t = eK.length; e < t; ++e) eW[eK[e]] = e;
                for (let e = 0; e < 16; ++e) eQ["0123456789abcdef" [e]] = e;
                for (let e = 0; e < 16; ++e) eQ["0123456789ABCDEF" [e]] = e
            }();
            let e$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                ez = (() => {
                    let e = [];
                    for (let t = 0; t < 256; ++t) e[t] = 255;
                    for (let t = 0; t < e$.length; ++t) e[e$.charCodeAt(t)] = t;
                    return String.fromCharCode(...e)
                })(),
                eX = function(e) {
                    let t, i, r = String(e),
                        a = [],
                        n = r.length,
                        s = 0;
                    for (;;) {
                        do t = ez.charCodeAt(255 & r.charCodeAt(s++)); while (255 === t && s < n);
                        do i = ez.charCodeAt(255 & r.charCodeAt(s++)); while (255 === i && s < n);
                        if (255 === i) break;
                        a.push((t << 2 | i >> 4) & 255);
                        do t = ez.charCodeAt(255 & r.charCodeAt(s++)); while (255 === t && s < n);
                        if (255 === t) break;
                        a.push((i << 4 | t >> 2) & 255);
                        do i = ez.charCodeAt(255 & r.charCodeAt(s++)); while (255 === i && s < n);
                        if (255 === i) break;
                        a.push((t << 6 | i) & 255)
                    }
                    if (a.length < 4096) return String.fromCharCode(...a);
                    let o = 0,
                        l = [];
                    do l.push(String.fromCharCode(...a.slice(o, o + 4096))), o += 4096; while (o < a.length);
                    return l.join("")
                };

            function eZ(e) {
                let t = eX(e),
                    i = new Uint8Array(t.length);
                for (let e = 0, r = t.length; e < r; e++) i[e] = t.charCodeAt(e);
                return i
            }

            function e0(e, t) {
                return e.sort((e, i) => {
                    if ("video_bitrate" in e && "video_bitrate" in i) return t ? e.video_resolution === i.video_resolution ? e.video_bitrate - i.video_bitrate : e.video_resolution - i.video_resolution : e.video_bitrate - i.video_bitrate;
                    return e.max_bitrate - i.max_bitrate
                })
            }

            function e1(e) {
                return "video_codec" in e
            }

            function e2(e) {
                if (!e) return;
                let t = e.__effective_codec || ("audio_codec" in e ? e.audio_codec : e.video_codec);
                return `${e.mime_type};codecs="${t}"`
            }
            "undefined" != typeof window && window.btoa && window.atob && (eX = e => window.atob(e));
            class e4 extends eq {
                constructor(e) {
                    var t, i, r, a, n;
                    super(e), this._supportedFormats = {
                        audio: [],
                        video: []
                    }, this._baseURL = "", this._fallbackURLs = [], this._loaded = !1, this._initTemplate = "", this._segmentTemplate = "", this._segmentLength = 0, this._assetID = "", this._segments = [], this._duration = 0, this._videoProfiles = {
                        selected: null,
                        available: [],
                        backgrounded: []
                    }, this._audioProfiles = {
                        selected: null,
                        available: []
                    }, this._subtitleLanguages = [], this._subtitleTemplate = "", this._trackingData = null, this._seekPanels = null, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = e.keySystemSettings, this._playabilityChecker = e.playabilityChecker, this._supportedFormats = {
                        audio: null != (i = null == (t = this._keySystemInfo) ? void 0 : t.audioFormats) ? i : [],
                        video: null != (a = null == (r = this._keySystemInfo) ? void 0 : r.videoFormats) ? a : []
                    }, this._disallowCodec = e.disallowCodec, this._disallowProfile = e.disallowProfile, this._videoResolution = e.videoResolution, this._enableAbrOnElementSize = e.enableAbrOnElementSize, this._allowMixedAVC1Codecs = e.allowMixedAVC1Codecs, this._trackingData = e.trackingData, this._contentMetadata = e.metadata, this._mediaPlaybackMode = null != (n = e.mediaPlaybackMode) ? n : "video"
                }
                _calculateSegments(e) {
                    this._duration = e.end_time_millis / 1e3;
                    let t = this._segmentLength;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !1,
                        timeStart: -1,
                        timeEnd: -1,
                        byteRanges: {}
                    };
                    let i = [];
                    for (let e = 0, r = 0; e < this._duration; r++, e += t) i.push({
                        index: r,
                        cacheBufferSet: !e && !this._disableCache,
                        timeStart: e,
                        timeEnd: e + t,
                        byteRanges: {}
                    });
                    i[i.length - 1].isFinal = !0, this._segments = i
                }
                _parseManifest(e) {
                    var t, i;
                    let r, a, n = e.contents[0];
                    if (!n) return (r = new eJ(x.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable: no contents.")).track = this.toLogJSON(), Promise.reject(r);
                    if (this._fallbackURLs = e.base_urls.slice(), this._baseURL = null != (t = this._fallbackURLs.shift()) ? t : "", this._initTemplate = e.initialization_template, this._segmentTemplate = e.segment_template, this._segmentLength = n.segment_length, this._seekPanels = e.seekpanels || null, null == (i = n.encryption_infos) ? void 0 : i.length) {
                        let e, t = n.encryption_infos,
                            i = this._keySystemSettings.commonName;
                        for (let r = 0, n = t.length; r < n; r++) {
                            let n = t[r];
                            if (n && n.key_system === i) {
                                a = r, e = n.encryption_data, this._licenseEndpoint || (this._licenseEndpoint = `@webgate${n.license_server_endpoint}`);
                                break
                            }
                        }
                        if (!e) return (r = new eJ(x.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(r);
                        switch (this._keySystemSettings.commonName) {
                            case "widevine":
                            case "playready":
                                this._protection = "cenc";
                                try {
                                    this._pssh = eZ(e)
                                } catch (e) {
                                    return (r = new eJ(x.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(r)
                                }
                                break;
                            case "fairplay":
                                this._protection = "cbcs", this._pssh = new Uint8Array(0);
                                try {
                                    this._assetID = n.encoding_id
                                } catch (e) {
                                    return (r = new eJ(x.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(r)
                                }
                                break;
                            default:
                                return (r = new eJ(x.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(r)
                        }
                    }
                    return (function(e) {
                        let {
                            profiles: t,
                            playabilityChecker: i,
                            encryptionIndex: r,
                            strategy: a,
                            keySystem: n,
                            disallowCodec: s,
                            disallowProfile: o,
                            preferredVideoResolution: l
                        } = e, _ = [], d = {}, u = {};
                        for (let e of t) {
                            if (void 0 !== r && Array.isArray(e.encryption_indices) && -1 === e.encryption_indices.indexOf(r)) continue;
                            let t = "audio_codec" in e ? e.audio_codec : e.video_codec;
                            if (null == s ? void 0 : s(t)) continue;
                            let l = `${e.mime_type}; codecs="${t}"`;
                            i.isPlayable(l, {
                                strategy: a,
                                keySystem: n
                            }) && _.push((function(e, t) {
                                if (!t) return Promise.resolve(!1);
                                let i = Object.assign({
                                    mimeType: e.mime_type
                                }, e1(e) ? {
                                    type: "video",
                                    codec: e.video_codec,
                                    bitrate: e.video_bitrate,
                                    height: e.video_height,
                                    width: e.video_width,
                                    resolution: e.video_resolution
                                } : {
                                    type: "audio",
                                    codec: e.audio_codec,
                                    bitrate: e.audio_bitrate
                                });
                                return new Promise(e => {
                                    e(t(i))
                                }).catch(() => !0)
                            })(e, o).then(i => {
                                if (i) return;
                                let r = t.split(".")[0],
                                    a = `${e.mime_type}.${r}`;
                                if (e1(e)) {
                                    let t = u[a];
                                    t ? t.push(e) : u[a] = [e]
                                } else {
                                    let t = d[a];
                                    t ? t.push(e) : d[a] = [e]
                                }
                            }))
                        }
                        return Promise.all(_).then(() => {
                            var e, t;
                            let i = [];
                            for (let e in d) {
                                if (!d[e]) continue;
                                let t = d[e];
                                if (null == t ? void 0 : t.length) {
                                    e0(i = t);
                                    break
                                }
                            }
                            for (let t of i) t.__effective_codec = null == (e = i[0]) ? void 0 : e.audio_codec;
                            let r = [];
                            for (let e in u) {
                                if (!u[e]) continue;
                                let t = u[e];
                                if (null == t ? void 0 : t.length) {
                                    e0(r = t, l);
                                    break
                                }
                            }
                            for (let e of r) e.__effective_codec = null == (t = r[0]) ? void 0 : t.video_codec;
                            return {
                                audio: i,
                                video: r
                            }
                        })
                    })({
                        profiles: n.profiles,
                        encryptionIndex: a,
                        strategy: this.strategy,
                        disallowCodec: this._disallowCodec,
                        disallowProfile: this._disallowProfile,
                        playabilityChecker: this._playabilityChecker
                    }).then(t => {
                        var i;
                        this._audioProfiles.available = t.audio, this._videoProfiles.available = t.video, this._videoProfiles.backgrounded = [], this._calculateSegments(e), this._subtitleLanguages = e.subtitle_language_codes || [], (null == (i = e.subtitle_base_urls) ? void 0 : i.length) && e.subtitle_template ? this._subtitleTemplate = `${e.subtitle_base_urls[0]}${e.subtitle_template}` : this._subtitleTemplate = ""
                    })
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    if (this._loaded) return e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this);
                    if (!this._fileId) throw TypeError("Missing: provide either fileId or resolvedURL");
                    let t = (0, G.X)();
                    return this._resolver.getManifest(this._fileId, this._noAuth).then(i => (e.resolveLatency = 0, e.manifestLatency = (0, G.r)(t), this._parseManifest(i))).then(() => (this._loaded = !0, this))
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                setVideoResolution(e) {
                    this._videoResolution = e
                }
                getMediaProfileInfo() {
                    return {
                        audio: this._audioProfiles,
                        video: this._videoProfiles
                    }
                }
                getSubtitles() {
                    return this._subtitleLanguages.map(e => ({
                        lang: e,
                        url: this._subtitleTemplate.replace("{{language_code}}", e)
                    }))
                }
                getSubtitleLanguages() {
                    return this._subtitleLanguages
                }
                getCurrentBitrates() {
                    var e, t, i, r;
                    return {
                        audio: null != (t = null == (e = this._audioProfiles.selected) ? void 0 : e.audio_bitrate) ? t : 0,
                        video: null != (r = null == (i = this._videoProfiles.selected) ? void 0 : i.video_bitrate) ? r : 0
                    }
                }
                getTrackingEvents() {
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
                getSeekPanels() {
                    return this._seekPanels
                }
            }

            function e3(e) {
                return !!e && "getSeekPanels" in e
            }

            function e5(e) {
                return !!e && "getMediaProfileInfo" in e
            }

            function e6(e) {
                return !!e && "getCurrentBitrates" in e && "canLowerBitrate" in e && "adapt" in e
            }

            function e8(e) {
                return !!e && "getTrackingEventData" in e && "getTrackingEvents" in e
            }
            class e9 {
                constructor(e) {
                    this._bandwidthEstimator = e.bandwidthEstimator
                }
                static create(e) {
                    return new e9(e)
                }
                getSample(e, t) {
                    var i, r, a, n, s, o, l;
                    let _ = this._bandwidthEstimator.getBandwidthEstimate(),
                        d = function(e, t) {
                            let i = e.length;
                            for (let r = 0; r < i; r++)
                                if (e.start(r) <= t && t <= e.end(r)) return (e.end(r) - t) * 1e3;
                            return 0
                        }(e.buffered, e.currentTime);
                    if ("audio" === t.getMediaType() && t.strategy === c.MSE) {
                        let e = null == (r = null == (i = t.getSegmentForTime(0)) ? void 0 : i.bufferSet) ? void 0 : r.audio,
                            a = null == e ? void 0 : e.bitrate;
                        return {
                            bandwidth: _,
                            bufferAvailability: d,
                            audio: {
                                mimeType: null == e ? void 0 : e.mimeType,
                                bitrate: a
                            }
                        }
                    }
                    if (e5(t)) {
                        let {
                            audio: i,
                            video: r
                        } = t.getMediaProfileInfo(), u = "getVideoPlaybackQuality" in e ? e.getVideoPlaybackQuality() : {
                            creationTime: void 0,
                            droppedVideoFrames: void 0,
                            totalVideoFrames: void 0
                        };
                        return {
                            bandwidth: _,
                            bufferAvailability: d,
                            video: {
                                creationTime: u.creationTime,
                                droppedVideoFrames: u.droppedVideoFrames,
                                totalVideoFrames: u.totalVideoFrames,
                                bitrate: null == (a = r.selected) ? void 0 : a.video_bitrate,
                                availableBitrates: r.available.map(e => e.video_bitrate),
                                height: null == (n = r.selected) ? void 0 : n.video_height,
                                width: null == (s = r.selected) ? void 0 : s.video_width,
                                resolution: null == (o = r.selected) ? void 0 : o.video_resolution,
                                mimeType: e2(r.selected)
                            },
                            audio: {
                                bitrate: null == (l = i.selected) ? void 0 : l.audio_bitrate,
                                mimeType: e2(i.selected)
                            }
                        }
                    }
                    return null
                }
            }
            let e7 = Z.m.forTag("playback.audio_processor");
            class te {
                constructor(e) {
                    if (this._audioContext = null, this._mediaElementSource = null, this._gainNode = null, this._nodes = [], null == e ? void 0 : e.disable) return void e7.info("AudioProcessor disabled");
                    if (this._audioContext = (null == e ? void 0 : e.audioContext) || ("undefined" != typeof AudioContext ? new AudioContext : null), !this._audioContext) return void e7.warn("The AudioContext API is not supported. Any future operation related to `AudioProcessor` will be skipped.");
                    this._gainNode = this._audioContext.createGain(), this._buildNodePipeline(null == e ? void 0 : e.nodes)
                }
                static create(e) {
                    return new te(e)
                }
                _setMediaElementSource(e) {
                    var t;
                    this._audioContext && (this._mediaElementSource && (e7.info("Disconnecting previous media element source"), this._mediaElementSource.disconnect()), e7.info("Creating new media element source"), this._mediaElementSource = this._audioContext.createMediaElementSource(e) || null, this._mediaElementSource.connect(null != (t = this._nodes[0]) ? t : this._audioContext.destination))
                }
                _buildNodePipeline(e = []) {
                    var t;
                    if (!this._audioContext) return;
                    for (let e of (e7.info("Disconnecting previous nodes"), this._nodes)) e.disconnect();
                    let i = [this._gainNode, ...e],
                        r = null;
                    for (let e of i) r && r.connect(e), r = e;
                    null == (t = i[i.length - 1]) || t.connect(this._audioContext.destination), e7.info("Node pipeline built"), this._nodes = i
                }
                setPlayer(e) {
                    var t;
                    if (e) {
                        if ((null == (t = this._mediaElementSource) ? void 0 : t.mediaElement) === e) return void e7.info("The new player is the same as the current player");
                        this._setMediaElementSource(e)
                    }
                }
                getPlayer() {
                    var e;
                    return (null == (e = this._mediaElementSource) ? void 0 : e.mediaElement) || null
                }
                setAudioGain(e = 0) {
                    if (!this._gainNode) return e7.info("The default gain node is not available"), !1;
                    let t = Math.pow(10, e / 20);
                    return this._gainNode.gain.value = t, e7.info("Main gain set to", t), !0
                }
                getAudioContext() {
                    return this._audioContext
                }
                resume() {
                    return this._audioContext && "running" !== this._audioContext.state ? this._audioContext.resume() : Promise.resolve()
                }
                suspend() {
                    return this._audioContext && "suspended" !== this._audioContext.state ? this._audioContext.suspend() : Promise.resolve()
                }
                destroy() {
                    var e;
                    this._audioContext && (null == (e = this._mediaElementSource) || e.connect(this._audioContext.destination)), this._nodes = [], this._audioContext = null, this._gainNode = null, this._mediaElementSource = null, e7.info("The AudioProcessor is destroyed")
                }
            }
            let tt = Z.m.forTag("playback.media_source_manager");

            function ti(e) {
                if (!e) return "";
                let t = [];
                for (let i in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
                    let r = e[i] ? `="${e[i]}"` : "";
                    t.push(`${i}${r}`)
                }
                return t.length ? `; ${t.join("; ")}` : ""
            }
            class tr extends Y.bk {
                constructor(e) {
                    super(), this._mediaSource = null, this._sourceBuffers = {}, this._currentInitSegments = {}, this._updateQueue = [], this._playId = 0, this._lastBufferClearTime = (0, G.X)(), this._customSourceBufferParams = "";
                    let {
                        mimeTypes: t,
                        customSourceBufferParams: i,
                        disableBufferAbort: r
                    } = e;
                    this._mimeTypes = t, this._customSourceBufferParams = ti(i), this._disableBufferAbort = !!r, this._onSourceOpen = this._onSourceOpen.bind(this), this._onSourceClose = this._onSourceClose.bind(this), this._onUpdateEnd = this._onUpdateEnd.bind(this), this.dequeueUpdates = this.dequeueUpdates.bind(this), e.noInit || this._init()
                }
                static create(e) {
                    return new tr(e)
                }
                _init() {
                    this._mediaSource = new MediaSource, this._mediaSource.addEventListener(eL.J.MEDIA_SOURCE_OPEN, this._onSourceOpen), this._mediaSource.addEventListener(eL.J.MEDIA_SOURCE_CLOSE, this._onSourceClose), this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onSourceOpen() {
                    var e;
                    tt.info("MediaSource opened.");
                    let t = this._mediaSource;
                    if ((null == (e = null == t ? void 0 : t.sourceBuffers) ? void 0 : e.length) === 0 && (null == t ? void 0 : t.readyState) === "open") {
                        let e = this._mimeTypes;
                        for (let i of (tt.info("Creating source buffers for MIME types", e), ["video", "audio"])) {
                            let r = e[i];
                            if (r) {
                                let e = r + this._customSourceBufferParams;
                                try {
                                    let i = t.addSourceBuffer(e);
                                    i.addEventListener(eL.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd), this._sourceBuffers[r] = i
                                } catch (e) {
                                    if ("QuotaExceededError" === e.name) throw eC.fatal(x.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. User agent can not handle any more SourceBuffer objects.");
                                    if ("InvalidStateError" === e.name) throw eC.fatal(x.I.PLAYER_PLAYBACK_ERROR, 'MediaSourceManager: addSourceBuffer() failed. MediaSource is not in the "open" readyState.');
                                    if ("NotSupportedError" === e.name) throw eC.fatal(x.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. Given MIME type is not supported/compatible.");
                                    else throw eC.fatal(x.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed.")
                                }
                            }
                        }
                    }
                    this.dequeueUpdates(), this.emit(eL.J.BUFFER_SOURCE_OPEN, Object.assign({}, (0, eB.P)()))
                }
                _onSourceClose() {
                    tt.info("MediaSource closed."), this._destroySourceBuffers(), this.emit(eL.J.BUFFER_SOURCE_CLOSE, Object.assign({}, (0, eB.P)()))
                }
                _destroySourceBuffers() {
                    let e = this._mediaSource;
                    if (!e) return;
                    let t = e.sourceBuffers;
                    if (t.length)
                        for (let i = 0, r = t.length; i < r; i++) {
                            let r = t[i];
                            if (r) {
                                r.removeEventListener(eL.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd);
                                try {
                                    e.removeSourceBuffer(r), tt.info("Removed source buffer")
                                } catch (e) {
                                    tt.warn("Failed to remove sourcebuffer", e)
                                }
                            }
                        }
                    this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onUpdateEnd() {
                    this.dequeueUpdates(), this.emit(eL.J.BUFFER_UPDATE_END, Object.assign({}, (0, eB.P)()))
                }
                _endUpdate(e) {
                    var t;
                    this._isUpdating() ? this._updateQueue.push(e) : (null == (t = this._mediaSource) ? void 0 : t.readyState) === "open" && (tt.info("Signals end of stream."), this._mediaSource.endOfStream(), e.resolve && e.resolve(!0))
                }
                _durationUpdate(e) {
                    this._isUpdating() ? this._updateQueue.push(e) : (this._mediaSource && (this._mediaSource.duration = e.duration), e.resolve && e.resolve(!0))
                }
                _isUpdating() {
                    if (!this._mediaSource) return !1;
                    let e = this._mediaSource.sourceBuffers;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t];
                        if (i && i.updating) return !0
                    }
                    return !1
                }
                _appendUpdate(e) {
                    var t, i;
                    let r = this._sourceBuffers[e.mimeType];
                    if (!r || r.updating) return void this._updateQueue.push(e);
                    let a = e.buffer;
                    if (e.segment.init && this._currentInitSegments[e.mimeType] === e.profileId) {
                        null == (t = e.resolve) || t.call(e, !0), Promise.resolve().then(this.dequeueUpdates);
                        return
                    }
                    if (e.initBuffer && e.buffer && this._currentInitSegments[e.mimeType] !== e.profileId) {
                        let t = new Uint8Array(e.initBuffer.byteLength + e.buffer.byteLength);
                        t.set(new Uint8Array(e.initBuffer), 0), t.set(new Uint8Array(e.buffer), e.initBuffer.byteLength), a = t.buffer
                    }
                    try {
                        r.appendBuffer(a)
                    } catch (i) {
                        let t = !1;
                        "QuotaExceededError" === i.name ? (tt.warn("Failed to append buffer: exceeded quota."), t = !0, this.emitSync(eL.J.BUFFER_QUOTA_EXCEEDED, Object.assign({}, (0, eB.P)()))) : tt.warn("Failed to append buffer", i), new Promise(e => {
                            t ? setTimeout(e, 1e3) : e()
                        }).then(() => {
                            var t;
                            null == (t = e.reject) || t.call(e, i), this.dequeueUpdates()
                        }).then(() => {
                            e.init && this._updateQueue.push(e)
                        });
                        return
                    }
                    let n = a.byteLength > e.buffer.byteLength;
                    (e.segment.init || n) && (this._currentInitSegments[e.mimeType] = e.profileId), null == (i = e.resolve) || i.call(e, !0), n ? tt.info(`Injected combined init segment and playable segment (${e.mimeType}, ${e.profileId})`) : e.init && tt.info(`Injected individual init segment (${e.mimeType}, ${e.profileId})`)
                }
                _abortUpdate(e) {
                    var t;
                    null == (t = e.resolve) || t.call(e, !1), Promise.resolve().then(this.dequeueUpdates)
                }
                dequeueUpdates() {
                    let e = this._updateQueue.shift();
                    e && this.tryUpdate(e)
                }
                tryUpdate(e) {
                    if (e.playId !== this._playId) {
                        tt.info("Try update dropped: playId has changed"), this._abortUpdate(e);
                        return
                    }
                    if (e.timestamp < this._lastBufferClearTime) {
                        tt.info("Try update dropped: update is older than the last clear"), this._abortUpdate(e);
                        return
                    }
                    let t = this._mediaSource;
                    t && "open" !== t.readyState && "ended" !== t.readyState ? this._updateQueue.push(e) : "end" === e.type ? this._endUpdate(e) : "duration" === e.type ? this._durationUpdate(e) : "append" === e.type && this._appendUpdate(e)
                }
                appendBufferData(e, t, i, r = (0, G.X)()) {
                    let a = [];
                    if (e.audio) {
                        let n = (0, V.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: r,
                            segment: t,
                            type: "append",
                            profileId: e.audio.profileId,
                            buffer: e.audio.buffer,
                            initBuffer: e.audio.initBuffer,
                            mimeType: e.audio.mimeType,
                            init: !!t.init,
                            resolve: n.resolve,
                            reject: n.reject
                        }), a.push(n.promise)
                    }
                    if (e.video) {
                        let n = (0, V.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: r,
                            segment: t,
                            type: "append",
                            profileId: e.video.profileId,
                            buffer: e.video.buffer,
                            initBuffer: e.video.initBuffer,
                            mimeType: e.video.mimeType,
                            init: !!t.init,
                            resolve: n.resolve,
                            reject: n.reject
                        }), a.push(n.promise)
                    }
                    return Promise.all(a)
                }
                endOfStream(e) {
                    this._mediaSource && "ended" !== this._mediaSource.readyState && this.tryUpdate({
                        playId: e,
                        timestamp: (0, G.X)(),
                        type: "end"
                    })
                }
                abort(e = !1) {
                    if (this._lastBufferClearTime = (0, G.X)(), this._disableBufferAbort) return void tt.info("MediaSource abort skipped; action disabled.");
                    let t = this._mediaSource;
                    if (t) {
                        let i = t.sourceBuffers;
                        for (let r = 0, a = i.length; r < a; r++) {
                            let a = i[r];
                            if ("open" === t.readyState && a) try {
                                a.abort();
                                let t = a.buffered;
                                if (e && t.length) {
                                    let e = t.start(0),
                                        i = t.end(t.length - 1);
                                    a.remove(e, i), tt.info("Cleared buffer range", e, i)
                                }
                            } catch (e) {
                                tt.warn("MediaSourceManager: sourceBuffer.abort() failed due to .abort() or .remove() operation.", e)
                            }
                        }
                    }
                    this._currentInitSegments = {}
                }
                destroy() {
                    let e = this._mediaSource;
                    e && (tt.info("Source destroyed"), e.removeEventListener("sourceopen", this._onSourceOpen), e.removeEventListener("sourceclose", this._onSourceClose), this._destroySourceBuffers(), this._mediaSource = null)
                }
                recreate(e) {
                    this.abort(), this.destroy(), this._mimeTypes = e.mimeTypes, e.customSourceBufferParams && (this._customSourceBufferParams = ti(e.customSourceBufferParams)), this._init()
                }
                setDuration(e) {
                    return new Promise(t => {
                        this.tryUpdate({
                            playId: this._playId,
                            timestamp: (0, G.X)(),
                            type: "duration",
                            duration: e,
                            resolve: t
                        })
                    })
                }
                getMediaSource() {
                    return this._mediaSource
                }
                setPlayId(e) {
                    this._playId = e
                }
                getPlayId() {
                    return this._playId
                }
            }
            let ta = Z.m.forTag("playback.buffer_fill_operation");
            class tn {
                constructor(e) {
                    var t;
                    this._batchSize = 1, this._prioritizeFirst = !1, this._segmentsToAppend = [], this._abortController = (0, B.createAbortControllerLike)(), this.status = "pending", this.timeStart = e.timeStart, this.timeEnd = e.timeEnd, this.done = new Promise(e => {
                        this._resolveDone = e
                    }), this._getBufferedTimeRanges = e.getBufferedTimeRanges, this._getBufferSetForSegment = e.getBufferSetForSegment, this._getSegmentsForRange = e.getSegmentsForRange, this._appendBufferData = e.appendBufferData, this._batchSize = null != (t = e.batchSize) ? t : 1, this._prioritizeFirst = !!e.prioritizeFirst
                }
                _filterBufferedSegments(e) {
                    let t = this._getBufferedTimeRanges(),
                        i = [];
                    if (null == t ? void 0 : t.length) e: for (let r of e) {
                        let e = t.length;
                        for (; e--;) {
                            let i = t.start(e),
                                a = t.end(e);
                            if (i <= r.timeStart && (a >= r.timeEnd || a + 1e-5 > r.timeEnd)) continue e
                        }
                        i.push(r)
                    } else i = e;
                    return i
                }
                _fill(e, t = !1) {
                    var i;
                    if (e.aborted) return;
                    let r = this._segmentsToAppend,
                        a = r.length,
                        n = r.splice(0, t ? 1 : Math.max(1, this._batchSize));
                    if (!n.length) {
                        this.status = "ended", null == (i = this._resolveDone) || i.call(this);
                        return
                    }
                    ta.log(`Segments to download: ${n.length}/${a}`);
                    let s = (0, G.X)();
                    Promise.all(n.map(t => this._getBufferSetForSegment(t, e).then(i => e.aborted ? Promise.resolve([!1]) : this._appendBufferData(i, t, s)))).then(t => {
                        var i, r;
                        if (!e.aborted) {
                            if (-1 !== [].concat(...t).indexOf(!1)) {
                                this.status = "failed", null == (i = this._resolveDone) || i.call(this), ta.warn(`Fill operation ${this.timeStart}-${this.timeEnd} append failed.`), this._clear();
                                return
                            }
                            if (this._segmentsToAppend.length) return void this._fill(e);
                            this.status = "ended", null == (r = this._resolveDone) || r.call(this), this._clear()
                        }
                    }, e => {
                        var t;
                        if (e.code === B.TransportErrors.HTTP_REQUEST_ABORTED) {
                            this.status = "aborted";
                            return
                        }
                        this.status = "failed", null == (t = this._resolveDone) || t.call(this), this._clear(), ta.warn(`Fill operation ${this.timeStart}-${this.timeEnd} failed.`, "QuotaExceededError" === e.name ? "Exceeded buffer quota" : e)
                    })
                }
                _clear() {
                    this._segmentsToAppend = []
                }
                start() {
                    var e;
                    if (this._abortController.signal.aborted || "pending" !== this.status) return this.done;
                    this.status = "started", ta.log("Starting fill operation for range", this.timeStart, this.timeEnd);
                    let t = this._getSegmentsForRange(this.timeStart, this.timeEnd);
                    return (this._segmentsToAppend = this._filterBufferedSegments(t), this._segmentsToAppend.length) ? this._fill(this._abortController.signal, this._prioritizeFirst) : (ta.warn("Fill operation ended early: all segments are buffered."), this.status = "ended", null == (e = this._resolveDone) || e.call(this)), this.done
                }
                abort() {
                    var e;
                    return "aborted" === this.status || ("started" === this.status && ta.info(`Fill operation ${this.timeStart}-${this.timeEnd} aborted.`), this.status = "aborted", null == (e = this._resolveDone) || e.call(this), this._abortController.abort(), this._clear()), this
                }
            }! function(e) {
                e[e.AUDIO = 12] = "AUDIO", e[e.VIDEO = 20] = "VIDEO"
            }(f || (f = {}));
            class ts extends Y.bk {
                constructor(e, t = {}, i = {}) {
                    var r, a;
                    super(), this._bufferTarget = {
                        audio: f.AUDIO,
                        video: f.VIDEO
                    }, this._currentFillOperation = null, this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null, this._tracker = e;
                    let {
                        customSourceBufferParams: n,
                        noInit: s,
                        disableBufferAbort: o
                    } = i;
                    this._bufferTarget.audio = (null == (r = i.bufferTarget) ? void 0 : r.audio) || f.AUDIO, this._bufferTarget.video = (null == (a = i.bufferTarget) ? void 0 : a.video) || f.VIDEO, this._mediaSourceManager = tr.create({
                        mimeTypes: t,
                        noInit: s,
                        customSourceBufferParams: n,
                        disableBufferAbort: o
                    }), this.proxyEmitAll(this._mediaSourceManager, {
                        [eL.J.BUFFER_SOURCE_OPEN]: eL.J.BUFFER_SOURCE_OPEN,
                        [eL.J.BUFFER_SOURCE_CLOSE]: eL.J.BUFFER_SOURCE_CLOSE,
                        [eL.J.BUFFER_QUOTA_EXCEEDED]: eL.J.BUFFER_QUOTA_EXCEEDED,
                        [eL.J.BUFFER_UPDATE_END]: eL.J.BUFFER_UPDATE_END
                    })
                }
                static create(e, t = {}, i = {}) {
                    return new ts(e, t, i)
                }
                _trackBufferedSegment(e, t, i) {
                    let r = this._bufferedSegmentInfos;
                    r || (r = Array(i), this._bufferedSegmentInfos = r);
                    let a = {
                        timeStart: e.timeStart,
                        timeEnd: e.timeEnd,
                        index: e.index,
                        audio: t.audio ? {
                            profileId: t.audio.profileId,
                            mimeType: t.audio.mimeType,
                            bitrate: t.audio.bitrate
                        } : void 0,
                        video: t.video ? {
                            profileId: t.video.profileId,
                            mimeType: t.video.mimeType,
                            bitrate: t.video.bitrate,
                            width: t.video.videoWidth,
                            height: t.video.videoHeight,
                            resolution: t.video.resolution
                        } : void 0
                    };
                    r[e.index] = a
                }
                _trackBufferingProgress(e) {
                    e.audio && e.audio.buffer && this._tracker.trackBytesDownloaded(e.audio.buffer.byteLength), e.video && e.video.buffer && this._tracker.trackBytesDownloaded(e.video.buffer.byteLength)
                }
                _trackBufferURLs(e) {
                    var t, i, r, a, n, s;
                    (null == (t = e.audio) ? void 0 : t.bandwidth) !== null && this._tracker.trackBufferURL((null == (i = e.audio) ? void 0 : i.bufferURL) || "", {
                        bandwidth: (null == (r = e.audio) ? void 0 : r.bandwidth) || 0
                    }), (null == (a = e.video) ? void 0 : a.bandwidth) !== null && this._tracker.trackBufferURL((null == (n = e.video) ? void 0 : n.bufferURL) || "", {
                        bandwidth: (null == (s = e.video) ? void 0 : s.bandwidth) || 0
                    })
                }
                dequeueUpdates() {
                    this._mediaSourceManager.dequeueUpdates()
                }
                abort(e = !1) {
                    var t;
                    null == (t = this._currentFillOperation) || t.abort(), this._currentFillOperation = null, this._mediaSourceManager.abort(e)
                }
                getMediaSource() {
                    return this._mediaSourceManager.getMediaSource()
                }
                destroy() {
                    this._mediaSourceManager.destroy()
                }
                checkBufferHealth(e, t, i) {
                    var r;
                    let a = this._currentFillOperation;
                    if (!i && (null == a ? void 0 : a.status) === "started") return;
                    let n = this._mediaSourceManager,
                        s = n.getMediaSource();
                    if (!s || "closed" === s.readyState) return;
                    let o = t;
                    if (o >= s.duration) {
                        let t = e.getFinalSegment();
                        t && (o = t.timeStart)
                    }
                    let l = function(e, t) {
                        var i;
                        let r = null == (i = e.sourceBuffers[e.sourceBuffers.length - 1]) ? void 0 : i.buffered;
                        if (r)
                            for (let e = 0; e < r.length; e++) {
                                let i = r.start(e),
                                    a = r.end(e);
                                if (i <= t && t <= a) return {
                                    start: i,
                                    end: a
                                }
                            }
                        return null
                    }(s, o);
                    if (l && !e.getSegmentAfterTime(l.end) && "ended" === s.readyState) return;
                    let _ = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio,
                        d = null != (r = null == l ? void 0 : l.end) ? r : o,
                        u = d - o;
                    if (u > _) return;
                    let c = d + (_ - u);
                    if (!a || "started" !== a.status || a.timeStart < d || a.timeEnd > c) {
                        null == a || a.abort();
                        let t = n.getPlayId();
                        this._currentFillOperation = new tn({
                            timeStart: d,
                            timeEnd: c,
                            getBufferedTimeRanges: () => {
                                var e, t;
                                return null != (t = null == (e = s.sourceBuffers[s.sourceBuffers.length - 1]) ? void 0 : e.buffered) ? t : null
                            },
                            getBufferSetForSegment: (i, r) => e.getBufferSetForSegment(i, r).then(e => (this._trackBufferingProgress(e), this._trackBufferURLs(e), e), i => (t === n.getPlayId() && i.code !== B.TransportErrors.HTTP_REQUEST_ABORTED && this.emit(eL.J.BUFFER_APPEND_ERROR, Object.assign({
                                error: i,
                                canPlayNext: !0,
                                track: e.toLogJSON()
                            }, (0, eB.P)())), Promise.reject(i))),
                            getSegmentsForRange: (t, i = 1 / 0) => e.getSegmentsForRange(t, i),
                            appendBufferData: (i, r, a) => n.appendBufferData(i, r, t, a).then(a => (this._trackBufferedSegment(r, i, e.getSegmentsCount()), r.isFinal && (null == a ? void 0 : a.indexOf(!1)) === -1 && this._mediaSourceManager.endOfStream(t), a)),
                            prioritizeFirst: !l
                        }), this._currentFillOperation.start()
                    }
                }
                isPositionInCurrentFillRange(e, t) {
                    let i = this._currentFillOperation;
                    if ((null == i ? void 0 : i.status) !== "started") return !1;
                    let r = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio;
                    return i.timeStart >= t || i.timeEnd >= t + r
                }
                recreate(e) {
                    this._mediaSourceManager.recreate({
                        mimeTypes: e
                    }), this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null
                }
                injectInitSegment(e) {
                    let t = this._mediaSourceManager,
                        i = t.getMediaSource();
                    if (!i || "closed" === i.readyState) return Promise.resolve(!1);
                    let r = e.getInitSegment();
                    if (!r) return Promise.resolve(!1);
                    let a = (0, G.X)(),
                        n = t.getPlayId();
                    return e.getInitBufferSet().then(e => t.appendBufferData(e, r, n, a)).then(() => !0)
                }
                setDuration(e) {
                    return this._mediaSourceManager.setDuration(e)
                }
                setPlayId(e) {
                    this._mediaSourceManager.setPlayId(e)
                }
                getBufferTarget() {
                    return this._bufferTarget
                }
                getBufferedSegmentInfoForTime(e) {
                    let t = this._bufferedSegmentInfos;
                    if (!(null == t ? void 0 : t.length)) return null;
                    let i = 0,
                        r = this._cachedBufferedSegmentInfo;
                    if (r && r.timeStart <= e) {
                        if (r.timeEnd >= e) return r;
                        let a = t[r.index + 1];
                        if (a && a.timeStart <= e && a.timeEnd >= e) return this._cachedBufferedSegmentInfo = a, a;
                        e >= r.timeEnd && (i = r.index + 1)
                    }
                    for (let r = t.length; i < r; i++) {
                        let r = t[i];
                        if (r && r.timeStart <= e && r.timeEnd >= e) return this._cachedBufferedSegmentInfo = r, r
                    }
                    return this._cachedBufferedSegmentInfo = null, null
                }
            }
            var to = i(57469);
            class tl extends eq {
                constructor(e) {
                    super(e), this.strategy = c.URL, this.contentClassName = "URLContent", this._url = e.url, this._mimeType = e.mimeType
                }
                load() {
                    if (this._mimeType) {
                        var e, t;
                        if (e = this._mimeType, t = this.getMediaType(), "" === document.createElement(t).canPlayType(e)) throw new eJ(x.I.FILE_FORMAT_NOT_SUPPORTED, "Content is not playable.")
                    }
                    return Promise.resolve(this)
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return "video" === this._mediaType ? {
                        video: null != (e = this._mimeType) ? e : "video/mp4"
                    } : {
                        audio: null != (t = this._mimeType) ? t : "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
            }! function(e) {
                e[e.MP3_256 = 3] = "MP3_256", e[e.MP3_320 = 4] = "MP3_320", e[e.MP3_160 = 5] = "MP3_160", e[e.MP3_96 = 6] = "MP3_96", e[e.MP4_128 = 10] = "MP4_128", e[e.MP4_256 = 11] = "MP4_256", e[e.MP4_128_DUAL = 12] = "MP4_128_DUAL", e[e.MP4_256_DUAL = 13] = "MP4_256_DUAL", e[e.MP4_128_CBCS = 14] = "MP4_128_CBCS", e[e.MP4_256_CBCS = 15] = "MP4_256_CBCS", e[e.MP4_FLAC = 17] = "MP4_FLAC"
            }(g || (g = {}));
            let t_ = {
                [g.MP3_256]: "audio/mp3",
                [g.MP3_320]: "audio/mp3",
                [g.MP3_160]: "audio/mp3",
                [g.MP3_96]: "audio/mp3",
                [g.MP4_128]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_256]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_128_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_256_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_128_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_256_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [g.MP4_FLAC]: 'audio/mp4; codecs="flac"'
            };
            class td extends eq {
                constructor(e) {
                    if (super(e), this._loaded = !1, this._lastResolveToken = 0, this._fallbackURLs = [], this._contentSegments = [], this._duration = 0, this._segmentLength = 0, this._protection = "cenc", this._fileId = e.fileId, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = to.v[this._keySystemInfo.keySystem], this._fileFormat = e.fileFormat, this._disableCache = e.disableCache, this._preloadedManifest = e.preloadedManifest, this._preresolvedURL = e.preresolvedURL, this._fileFormat) this._mimeType = t_[this._fileFormat];
                    else switch (this._mediaFormat) {
                        case p.MP3:
                            this._mimeType = t_[g.MP3_160];
                            break;
                        case p.MP4:
                        case p.MP4_DUAL:
                        case p.MP4_CBCS:
                            this._mimeType = t_[g.MP4_128];
                            break;
                        default:
                            throw TypeError(`Unknown audio format ${this._mediaFormat}`)
                    }
                }
                _getCDNURLs(e) {
                    if (this._preresolvedURL) return this._currentURL = this._preresolvedURL, this._fallbackURLs = [], e && (e.resolveLatency = 0), Promise.resolve(!0);
                    let t = this._fileId;
                    clearTimeout(this._lastResolveToken);
                    let i = () => (this._lastResolveTime = (0, G.X)(), this._resolver.getCDNURL(t, this._fileFormat).then(t => (e && this._lastResolveTime && (e.resolveLatency = (0, G.r)(this._lastResolveTime)), t))),
                        r = this._lastResolveTime ? (0, G.r)(this._lastResolveTime) : 1 / 0;
                    return (r < 1001 ? new Promise((e, t) => {
                        this._lastResolveToken = setTimeout(() => {
                            i().then(e, t)
                        }, 1001 - r)
                    }) : i()).then(e => (this._fallbackURLs = e.uris, this._currentURL = this._fallbackURLs.shift(), !0)).catch(e => (e && (e.track = this.toLogJSON()), Promise.reject(e)))
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, G.X)();
                    return this._resolver.getManifest(this._fileId).then(i => (e && (e.manifestLatency = (0, G.r)(t)), i))
                }
                _calculateSegments(e) {
                    let t = e.offset;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !this._disableCache,
                        timeStart: 0,
                        timeEnd: 0,
                        byteRanges: {
                            audio: {
                                start: 0,
                                end: t - 1
                            }
                        }
                    };
                    let i = e.segments,
                        r = e.timescale,
                        a = i.length,
                        n = Array(a),
                        s = 0,
                        o = 0;
                    for (let e = 0; e < a; e++) {
                        let a = i[e];
                        if (!(null == a ? void 0 : a.length)) continue;
                        let [l, _] = a, d = _ / r, u = {
                            index: e,
                            init: !1,
                            cacheBufferSet: !e && !this._disableCache,
                            timeStart: s,
                            timeEnd: s + d,
                            byteRanges: {
                                audio: {
                                    start: t,
                                    end: t + (l - 1)
                                }
                            }
                        };
                        n[e] = u, t += l, o += _, s += d, Math.floor(d) > this._segmentLength && (this._segmentLength = Math.floor(d))
                    }
                    n[n.length - 1].isFinal = !0, this._contentSegments = n, this._duration = o / r
                }
                _calculateSegmentsV1(e) {
                    let t = e.offset;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !this._disableCache,
                        timeStart: 0,
                        timeEnd: 0,
                        byteRanges: {
                            audio: {
                                start: 0,
                                end: t - 1
                            }
                        }
                    };
                    let i = e.references,
                        r = e.timescale,
                        a = i.length,
                        n = Array(a),
                        s = 0,
                        o = 0;
                    for (let e = 0; e < a; e++) {
                        let a = i[e];
                        if (!a) continue;
                        let l = a.duration / r,
                            _ = {
                                index: e,
                                init: !1,
                                cacheBufferSet: !e && !this._disableCache,
                                timeStart: o,
                                timeEnd: o + l,
                                byteRanges: {
                                    audio: {
                                        start: t,
                                        end: t + (a.size - 1)
                                    }
                                }
                            };
                        n[e] = _, t += a.size, s += a.duration, o += l, Math.floor(l) > this._segmentLength && (this._segmentLength = Math.floor(l))
                    }
                    n[n.length - 1].isFinal = !0, this._contentSegments = n, this._duration = s / r
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : Promise.all([this._getCDNURLs(e), this._getManifest(e)]).then(([e, t]) => {
                        var i;
                        let r;
                        if (this._loaded = !0, !e || !t) return this;
                        if (this._keySystemInfo.keySystem === eD.J.INVALID_SPOTIFY_KEY) return this._pssh = new Uint8Array(0), this;
                        let a = this._keySystemSettings.pssh_field.audio,
                            n = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : null;
                        if (!n && "pssh_widevine" === a && "pssh" in t && (n = null != (i = t.pssh) ? i : null), !n) return (r = new eJ(x.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(r);
                        if (this._protection = t.protection || "cenc", this._pssh = eZ(n), "segments" in t && t.segments) this._calculateSegments(t);
                        else {
                            if (!("references" in t) || !t.references) return (r = new eJ(x.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable.")).track = this.toLogJSON(), Promise.reject(r);
                            this._calculateSegmentsV1(t)
                        }
                        return this
                    })
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: this._mimeType
                    }
                }
            }
            let tu = "application/vnd.apple.mpegurl";

            function tc(e) {
                var t;
                let i = e.segments.map(e => {
                        if (e.byteEnd && void 0 !== e.byteStart) {
                            let t = `${1+e.byteEnd-e.byteStart}`;
                            return t += `@${e.byteStart}`, `#EXTINF:${e.duration},
#EXT-X-BYTERANGE:${t}
${e.url}`
                        }
                        return `#EXTINF:${e.duration},
${e.url}`
                    }).join("\n"),
                    r = e.assetID ? `#EXT-X-KEY:METHOD=SAMPLE-AES,URI="skd://${e.assetID}",KEYFORMATVERSIONS="1",KEYFORMAT="com.apple.streamingkeydelivery"` : "",
                    a = e.map ? `#EXT-X-MAP:URI="${e.map.url}"` : "";
                return (null == (t = e.map) ? void 0 : t.byteEnd) && void 0 !== e.map.byteStart && (a += `,BYTERANGE="${1+e.map.byteEnd}@${e.map.byteStart}"`), `#EXTM3U
#EXT-X-VERSION:6
#EXT-X-TARGETDURATION:${Math.floor(e.targetDuration)}
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
${a?`${r}
${a}`:r}
${i}
#EXT-X-ENDLIST`
            }

            function th(e) {
                return `data:application/vnd.apple.mpegurl;base64,${btoa(e)}`
            }

            function tp(e) {
                let t = new Blob([e], {
                    type: tu
                });
                return URL.createObjectURL(t)
            }

            function tm(e) {
                return tp(tc(e))
            }

            function tE(e) {
                return th(tc(e))
            }
            class tf extends td {
                constructor() {
                    super(...arguments), this._hlsURL = null, this.strategy = c.URL, this.contentClassName = "AudioManifestHLSContent"
                }
                unload() {
                    this._hlsURL && URL.revokeObjectURL(this._hlsURL), this._hlsURL = null
                }
                getURL() {
                    var e, t;
                    let i = this._currentURL,
                        r = this._initSegment;
                    if (!i || !r) throw new eJ(x.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let a = {
                            url: i,
                            byteStart: null == (e = r.byteRanges.audio) ? void 0 : e.start,
                            byteEnd: null == (t = r.byteRanges.audio) ? void 0 : t.end
                        },
                        n = this._contentSegments.map(e => {
                            var t, r;
                            return {
                                url: i,
                                duration: e.timeEnd - e.timeStart,
                                byteStart: null == (t = e.byteRanges.audio) ? void 0 : t.start,
                                byteEnd: null == (r = e.byteRanges.audio) ? void 0 : r.end
                            }
                        }),
                        s = "undefined" == typeof MediaSource ? tm : tE;
                    return this._hlsURL = s({
                        assetID: this._fileId,
                        targetDuration: 10,
                        map: a,
                        segments: n
                    }), this._hlsURL
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: tu
                    }
                }
            }
            class tg extends Error {
                constructor(e, t, i, r = {}) {
                    super(t), this.code = e, this.message = t, this.status = i, this.debug = r, this.name = "FragmentError"
                }
            }
            class ty extends td {
                constructor(e) {
                    super(e), this._profileId = `${Date.now()}`, this._lastFetchedBuffer = null, this.strategy = c.MSE, this.contentClassName = "AudioManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _parseSegmentResponse(e, t) {
                    let {
                        requestURL: i,
                        segment: r,
                        byteRangeHeader: a,
                        expectedLength: n
                    } = e.metadata, s = `${r.timeStart}-${r.timeEnd}`, [o, l] = a.split("-").map(Number);
                    switch (e.status) {
                        case 0:
                            {
                                if (e.offline) return Promise.reject(new tg(x.I.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: s,
                                    byte_range: a,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                let n = new tg(x.I.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                        isNetworkRelated: !0,
                                        segmentTimeStart: r.timeStart,
                                        segmentTimeEnd: r.timeEnd,
                                        segmentByteStart: o,
                                        segmentByteEnd: l
                                    }),
                                    _ = !1;
                                if (this._currentURL !== i ? _ = !0 : this._fallbackURLs.length && this._currentURL === i && (_ = !0, this._currentURL = this._fallbackURLs.shift()), n.debug.has_fallback = _, _) return this.getBufferSetForSegment(r, t);
                                return Promise.reject(n)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!t) return Promise.reject(new tg(x.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                if (t.byteLength !== n) return Promise.reject(new tg(x.I.FRAGMENT_REQUEST_UNEXPECTED_LENGTH, "Received buffer of unexpected length.", e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    received_length: t.byteLength,
                                    expected_length: n,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                let _ = {
                                    audio: {
                                        profileId: this._profileId,
                                        bufferURL: i,
                                        byteStart: r.byteRanges.audio.start,
                                        byteEnd: r.byteRanges.audio.end,
                                        buffer: t,
                                        mimeType: this._mimeType,
                                        bandwidth: 8e3 * t.byteLength / e.timing.completed
                                    }
                                };
                                return r.cacheBufferSet && t && t.byteLength && (r.bufferSet = _),
                                this._abrManager.sample(t.byteLength, e.timing.completed),
                                Promise.resolve(_)
                            }
                        case 403:
                            return this._getCDNURLs().then(() => this.getBufferSetForSegment(r, t));
                        default:
                            {
                                let n = !1;
                                return this._currentURL !== i ? n = !0 : this._fallbackURLs.length && this._currentURL === i && (n = !0, this._currentURL = this._fallbackURLs.shift()),
                                n ? this.getBufferSetForSegment(r, t) : Promise.reject(new tg(x.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }))
                            }
                    }
                }
                unload() {
                    this._lastFetchedBuffer = null, this._disableCache && (this._initSegment && (this._initSegment.bufferSet = null), this._contentSegments[0] && (this._contentSegments[0].bufferSet = null))
                }
                getCalculatedDuration() {
                    return this._duration
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._contentSegments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getSegmentForTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[0]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[1]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t = 1 / 0) {
                    var i;
                    let r = [];
                    if (null == (i = this._contentSegments) ? void 0 : i.length)
                        for (let i of this._contentSegments) i.timeStart <= t && i.timeEnd >= e && r.push(i);
                    return r
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._contentSegments) ? void 0 : e[this._contentSegments.length - 1]) ? t : null
                }
                getInitBufferSet(e) {
                    var t, i;
                    if (!this._initSegment) throw new eJ(x.I.FILE_NOT_RESOLVED, "Cannot return the init bufferset: file not resolved.");
                    return (null == (i = null == (t = this._initSegment.bufferSet) ? void 0 : t.audio) ? void 0 : i.buffer.byteLength) ? Promise.resolve(this._initSegment.bufferSet) : (this._initBufferPromise || (this._initBufferPromise = this.getBufferSetForSegment(this._initSegment, e).then(e => {
                        var t;
                        if (!(null == (t = e.audio) ? void 0 : t.buffer.byteLength)) throw Error("Empty initialization segment buffer");
                        return e
                    })), this._initBufferPromise)
                }
                getBufferSetForSegment(e, t) {
                    var i;
                    if ((null == (i = this._lastFetchedBuffer) ? void 0 : i.segment) === e) return Promise.resolve(this._lastFetchedBuffer.bufferSet);
                    if (e.bufferSet) return Promise.resolve(e.bufferSet);
                    if (!this._currentURL) return Promise.reject(new eJ(x.I.FILE_NOT_RESOLVED, "Cannot fetch buffer: No resolved URL"));
                    let r = e.byteRanges.audio,
                        a = `${r.start}-${r.end}`,
                        n = r.end + 1 - r.start,
                        s = this._currentURL;
                    return (e.init ? Promise.resolve(null) : this.getInitBufferSet(t)).then(i => Promise.all([i, this._transport.request(s, {
                        method: "GET",
                        responseType: "arraybuffer",
                        headers: {
                            Range: `bytes=${a}`
                        },
                        signal: t,
                        timing: !0,
                        metadata: {
                            requestURL: s,
                            segment: e,
                            byteRangeHeader: a,
                            expectedLength: n
                        },
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return e.offline;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR || i === t.SUCCESS && !!e.body && e.body.byteLength !== n
                            }
                        }
                    }).then(e => this._parseSegmentResponse(e, t))])).then(([t, i]) => {
                        var r;
                        return (null == (r = null == t ? void 0 : t.audio) ? void 0 : r.buffer) && i.audio && (i.audio.initBuffer = t.audio.buffer), this._lastFetchedBuffer = {
                            segment: e,
                            bufferSet: i
                        }, i
                    })
                }
            }
            class tv extends e4 {
                constructor(e) {
                    super(e), this._hlsURLs = [], this.strategy = c.URL, this.contentClassName = "DirectorManifestHLSContent", this._keySystemInfo.keySystem === eD.J.FAIRPLAY && (this._supportedFormats.audio.push({
                        mimeType: "audio/mp2t",
                        codec: "mp4a.40.2"
                    }), this._supportedFormats.video.push({
                        mimeType: "video/mp2t",
                        codec: "avc1.4d402a"
                    }), this._supportedFormats.audio = this._supportedFormats.audio.filter(e => "audio/mp4" !== e.mimeType || "flac" !== e.codec))
                }
                _getHLSURLForProfile(e, t) {
                    let i = this._duration,
                        r = this._segmentLength,
                        a = this._segmentTemplate,
                        n = [];
                    for (let t = 0; t < i; t += r) {
                        let s = t + r > i ? i - t : r,
                            o = a.replace("{{profile_id}}", e.id.toString(10)).replace("{{segment_timestamp}}", t.toString(10)).replace("{{file_type}}", e.file_type);
                        n.push({
                            duration: s,
                            url: `${this._baseURL}${o}`
                        })
                    }
                    let s = ("undefined" == typeof MediaSource ? tm : tE)({
                        assetID: this._assetID,
                        targetDuration: r,
                        map: t ? {
                            url: t
                        } : void 0,
                        segments: n
                    });
                    return this._hlsURLs.push(s), s
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => {
                        var e, t;
                        return this._audioProfiles.selected = null != (e = this._audioProfiles.available[0]) ? e : null, this._videoProfiles.selected = null != (t = this._videoProfiles.available[0]) ? t : null, this
                    })
                }
                getURL() {
                    var e, t;
                    if (!this._baseURL) throw new eJ(x.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let i = [],
                        r = this._audioProfiles.available[0];
                    if (r) {
                        let e = "ts" !== r.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, r, void 0).audio : "";
                        i.push(`#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="eng",NAME="English",AUTOSELECT=YES,URI="${this._getHLSURLForProfile(r,e)}"`)
                    }
                    for (let a of this._videoProfiles.available) {
                        let n = (null != (e = null == r ? void 0 : r.max_bitrate) ? e : 0) + a.max_bitrate,
                            s = (null != (t = null == r ? void 0 : r.audio_bitrate) ? t : 0) + a.video_bitrate,
                            o = "ts" !== a.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, void 0, a).video : "";
                        i.push(`#EXT-X-STREAM-INF:BANDWIDTH=${n},AVERAGE-BANDWIDTH=${s},RESOLUTION=${a.video_width}x${a.video_height},CODECS="${(null==r?void 0:r.audio_codec)?`${r.audio_codec}, ${a.video_codec}`:a.video_codec}"${(null==r?void 0:r.audio_codec)?',AUDIO="audio"':""}
${this._getHLSURLForProfile(a,o)}`)
                    }
                    let a = ("undefined" == typeof MediaSource ? tp : th)(`#EXTM3U
${i.join("\n")}`);
                    return this._hlsURLs.push(a), a
                }
                unload() {
                    for (let e of this._hlsURLs) URL.revokeObjectURL(e);
                    this._hlsURLs = []
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return {
                        audio: e2(null == (e = this._audioProfiles.available) ? void 0 : e[0]),
                        video: e2(null == (t = this._videoProfiles.available) ? void 0 : t[0])
                    }
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: tu
                    }
                }
                adapt() {
                    return Promise.resolve(!1)
                }
                canLowerBitrate() {
                    return !1
                }
            }
            class tT extends e4 {
                constructor(e) {
                    super(e), this._initSegmentBuffers = {}, this._backgrounded = !1, this.strategy = c.MSE, this.contentClassName = "DirectorManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _isQualityMatchedForPreferredResolution(e, t) {
                    var i, r, a;
                    let n = this._videoResolution;
                    if (n) {
                        let s = null != (i = n.max) ? i : 0x1fffffffffffff,
                            o = null != (r = n.min) ? r : 0;
                        if (t) {
                            let t = null != (a = n.start) ? a : s;
                            return e.video_resolution <= t
                        }
                        return e.video_resolution >= o && e.video_resolution <= s
                    }
                    return !1
                }
                _isQualityMatchedForBandwidth(e, t) {
                    var i;
                    let r = null != (i = null == t ? void 0 : t.audio_bitrate) ? i : 0,
                        a = this._abrManager.getBandwidthEstimate();
                    return e.video_bitrate + r < a - 1e5
                }
                _isQualityMatchedForElementSize(e) {
                    return !!this._currentElementSize && e.video_height <= this._currentElementSize.height
                }
                _selectVideoProfile(e = !1) {
                    let t = this._videoProfiles.available,
                        i = this._audioProfiles.available[0],
                        r = {},
                        a = t.length;
                    if (a) {
                        for (; a--;) {
                            let n = t[a];
                            n && (!r.preferredResolution && this._isQualityMatchedForPreferredResolution(n, !!e) && (r.preferredResolution = n), !r.elementSize && this._isQualityMatchedForElementSize(n) && (r.elementSize = n), !r.bitrate && this._isQualityMatchedForBandwidth(n, i) && (r.bitrate = n))
                        }
                        return (r.backgrounded || (r.backgrounded = t[0]), r.bitrate || (r.bitrate = t[0]), r.preferredResolution) ? r.preferredResolution : this._enableAbrOnElementSize && this._backgrounded && r.backgrounded ? r.backgrounded : this._enableAbrOnElementSize && this._currentElementSize && r.elementSize ? r.bitrate.video_bitrate < r.elementSize.video_bitrate ? r.bitrate : r.elementSize : r.bitrate
                    }
                }
                _updateVariants(e) {
                    var t;
                    let i = this._audioProfiles.available[0];
                    this._audioProfiles.selected = null != i ? i : null;
                    let r = this._videoProfiles.selected,
                        a = this._selectVideoProfile(e);
                    a && (this._videoProfiles.selected = a, (null == r ? void 0 : r.id) !== a.id && (null == (t = this._mediator) || t.emit(m.VIDEO_PROFILE_CHANGED, Object.assign({
                        profile: {
                            type: "video",
                            mimeType: a.mime_type,
                            codec: a.video_codec,
                            bitrate: a.video_bitrate,
                            height: a.video_height,
                            width: a.video_width,
                            resolution: a.video_resolution
                        }
                    }, (0, eB.P)()))))
                }
                _constructSegmentURL(e, t, i) {
                    if (!t && !i) throw new eC(x.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES, "Both audioProfile and videoProfile is null");
                    return e.init ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, t, i) : this._resolver.getSegmentURLs(this._baseURL, this._segmentTemplate, e.timeStart, t, i)
                }
                _parseSegmentResponse(e) {
                    var t, i, r, a;
                    let {
                        segment: n,
                        profile: s,
                        timeStart: o,
                        loggingURL: l
                    } = e.metadata, _ = e2(s), d = s ? "audio_bitrate" in s ? s.audio_bitrate : s.video_bitrate : 0, u = "video_resolution" in s ? s.video_resolution : void 0, c = "video_width" in s ? s.video_width : void 0, h = "video_height" in s ? s.video_height : void 0, p = `${n.timeStart}-${n.timeEnd}`, E = "video_resolution" in s ? "video" : "audio";
                    switch (e.status) {
                        case 0:
                            {
                                let e = new tg(x.I.FRAGMENT_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: p,
                                    mimeType: _,
                                    resolution: u,
                                    bitrate: d,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: n.timeStart,
                                    segmentTimeEnd: n.timeEnd
                                });
                                return null == (t = this._mediator) || t.emit(m.FRAGMENT_FETCH_ERROR, Object.assign({
                                    media_type: "video",
                                    segment_type: E,
                                    url: l,
                                    start_time: o,
                                    init: n.init,
                                    error: e
                                }, (0, eB.P)())),
                                Promise.reject(e)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!(null == t ? void 0 : t.byteLength)) {
                                    let t = new tg(x.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                        time_range: p,
                                        mimeType: _,
                                        resolution: u,
                                        bitrate: d,
                                        segmentTimeStart: n.timeStart,
                                        segmentTimeEnd: n.timeEnd
                                    });
                                    return null == (i = this._mediator) || i.emit(m.FRAGMENT_FETCH_ERROR, Object.assign({
                                        media_type: "video",
                                        segment_type: E,
                                        url: l,
                                        start_time: o,
                                        init: n.init,
                                        error: t
                                    }, (0, eB.P)())), Promise.reject(t)
                                }
                                let a = t.byteLength,
                                    f = 8e3 * a / e.timing.completed;
                                return null == (r = this._mediator) || r.emit(m.FRAGMENT_FETCHED, Object.assign({
                                    media_type: "video",
                                    segment_type: E,
                                    url: l,
                                    init: n.init,
                                    byte_length: a,
                                    start_time: o,
                                    end_time: Date.now(),
                                    resolution: u,
                                    bandwidth: f
                                }, (0, eB.P)())),
                                Promise.resolve({
                                    profileId: `${this._fileId}-${s.id}`,
                                    bufferURL: l,
                                    byteStart: 0,
                                    byteEnd: a - 1,
                                    buffer: t,
                                    mimeType: _,
                                    bitrate: d,
                                    videoWidth: c,
                                    videoHeight: h,
                                    resolution: u,
                                    bandwidth: f
                                })
                            }
                    }
                    let f = new tg(x.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                        time_range: p,
                        mimeType: _,
                        resolution: u,
                        bitrate: d,
                        segmentTimeStart: n.timeStart,
                        segmentTimeEnd: n.timeEnd
                    });
                    return null == (a = this._mediator) || a.emit(m.FRAGMENT_FETCH_ERROR, Object.assign({
                        media_type: "video",
                        segment_type: E,
                        url: l,
                        init: n.init,
                        start_time: o,
                        error: f
                    }, (0, eB.P)())), Promise.reject(f)
                }
                _fetchBufferData(e, t, i, r, a) {
                    return this._transport.request(e, {
                        method: "GET",
                        responseType: "arraybuffer",
                        timing: !0,
                        signal: a,
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return !0;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR
                            }
                        },
                        metadata: {
                            timeStart: Date.now(),
                            segment: t,
                            profile: i,
                            loggingURL: r
                        }
                    }).then(this._parseSegmentResponse)
                }
                _fetchInitSegmentBuffers(e, t, i) {
                    let r, a = this._initSegment;
                    if (!a) return Promise.reject(new eJ(x.I.FILE_NOT_RESOLVED, "Cannot fetch Init Segment buffers: File not resolved."));
                    try {
                        r = this._constructSegmentURL(a, e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = this._initSegmentBuffers,
                        s = 0,
                        o = 0,
                        l = (0, G.X)(),
                        _ = e => {
                            o += e, --s || (this._abrManager.sample(o, (0, G.r)(l)), this._updateVariants())
                        },
                        d = Promise.resolve(null);
                    if (e) {
                        let t = n[e.id];
                        (null == t ? void 0 : t.buffer.byteLength) ? d = Promise.resolve(t): (null == r ? void 0 : r.audio) && (s++, d = this._fetchBufferData(r.audio, a, e, r.audioLogging, i).then(t => (n[e.id] = t, _(t.buffer.byteLength), t)))
                    }
                    let u = Promise.resolve(null);
                    if (t) {
                        let e = n[t.id];
                        (null == e ? void 0 : e.buffer.byteLength) ? u = Promise.resolve(e): (null == r ? void 0 : r.video) && (s++, u = this._fetchBufferData(r.video, a, t, r.videoLogging, i).then(e => (n[t.id] = e, _(e.buffer.byteLength), e)))
                    }
                    return Promise.all([d, u]).then(([e, t]) => ({
                        audio: e,
                        video: t
                    }))
                }
                _fetchBufferSetForSegment(e, t, i, r) {
                    let a;
                    try {
                        a = this._constructSegmentURL(e, t, i)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    return this._fetchInitSegmentBuffers(t, i, r).then(n => {
                        let s = 0,
                            o = 0,
                            l = (0, G.X)(),
                            _ = e => {
                                o += e, --s || (this._abrManager.sample(o, (0, G.r)(l)), this._updateVariants())
                            },
                            d = null;
                        !e.init && (null == a ? void 0 : a.audio) && (s++, d = this._fetchBufferData(a.audio, e, t, a.audioLogging, r).then(e => (_(e.buffer.byteLength), e)));
                        let u = null;
                        return !e.init && (null == a ? void 0 : a.video) && (s++, u = this._fetchBufferData(a.video, e, i, a.videoLogging, r).then(e => (_(e.buffer.byteLength), e))), Promise.all([n, d, u])
                    }).then(([t, i, r]) => {
                        var a, n;
                        let s;
                        return e.init ? s = {
                            audio: null != (a = t.audio) ? a : void 0,
                            video: null != (n = t.video) ? n : void 0
                        } : (s = {
                            audio: null != i ? i : void 0,
                            video: null != r ? r : void 0
                        }, e.cacheBufferSet && (e.bufferSet = s), s.audio && (null == t ? void 0 : t.audio) && (s.audio.initBuffer = t.audio.buffer), s.video && (null == t ? void 0 : t.video) && (s.video.initBuffer = t.video.buffer)), s
                    }).catch(e => Promise.reject(e))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => (this._updateVariants(!0), this))
                }
                adapt(e) {
                    let {
                        backgrounded: t = !1,
                        currentElementSize: i
                    } = null != e ? e : {};
                    return this._currentElementSize = i, this._backgrounded = t, this._updateVariants(), Promise.resolve(!0)
                }
                canLowerBitrate() {
                    var e;
                    let t = this._videoProfiles.available[0];
                    return (null == (e = this._videoProfiles.selected) ? void 0 : e.id) !== (null == t ? void 0 : t.id)
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: e2(this._audioProfiles.selected),
                        video: e2(this._videoProfiles.selected)
                    }
                }
                unload() {
                    this._initSegment && (this._initSegmentBuffers = {}), this._segments.forEach(e => {
                        e.bufferSet = null
                    })
                }
                getCalculatedDuration() {
                    return this._duration
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._segments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getInitBufferSet() {
                    var e, t;
                    let i = null != (e = this._audioProfiles.selected) ? e : void 0,
                        r = null != (t = this._videoProfiles.selected) ? t : void 0;
                    return this._fetchInitSegmentBuffers(i, r).then(e => {
                        var t, i;
                        return {
                            audio: null != (t = e.audio) ? t : void 0,
                            video: null != (i = e.video) ? i : void 0
                        }
                    })
                }
                getSegmentForTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[0];
                    for (let t of this._segments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[1];
                    for (let t of this._segments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t) {
                    var i;
                    let r = [];
                    if (null == (i = this._segments) ? void 0 : i.length)
                        for (let i of this._segments) i.timeStart <= t && i.timeEnd >= e && r.push(i);
                    return r
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._segments) ? void 0 : e[this._segments.length - 1]) ? t : null
                }
                getBufferSetForSegment(e, t) {
                    var i, r;
                    if (!e) return Promise.reject(TypeError("No segment provided"));
                    let a = this._audioProfiles.selected,
                        n = this._videoProfiles.selected,
                        s = null == (r = null == (i = e.bufferSet) ? void 0 : i.video) ? void 0 : r.resolution;
                    return e.bufferSet && (!n || s && s >= n.video_resolution) ? Promise.resolve(e.bufferSet) : this._fetchBufferSetForSegment(e, null != a ? a : void 0, null != n ? n : void 0, t)
                }
            }
            class tS extends eq {
                constructor(e) {
                    super(e), this._url = "", this.strategy = c.URL, this.contentClassName = "StorageURLContent", this._fileId = e.fileId, this._resolver = e.resolver
                }
                _getCDNURLs(e) {
                    let t = this._fileId,
                        i = (0, G.X)();
                    return this._resolver.getCDNURL(t).then(t => (e && (e.resolveLatency = (0, G.r)(i)), t))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._getCDNURLs(e).then(e => (this._url = e.uri, this))
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: "audio/mp3"
                    }
                }
            }
            class tP extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "AdManifestError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new tP(e, t);
                    return i.unrecoverable = !1, i.canPlayNext = !0, i
                }
            }
            class tb extends eq {
                constructor(e) {
                    super(e), this._loaded = !1, this._playableContentSorted = [], this._mimeType = "", this._manifestURL = "", this._adURL = "", this._product = "", this._audioFiles = [], this._videoFiles = [], this._trackingData = null, this.strategy = c.URL, this.contentClassName = "AdManifestContent", this._abrManager = e.abrManager, this._transport = e.transport, this._manifestURL = e.manifestURL, this._preloadedManifest = e.preloadedManifest, this._hasNonFatalErrors = !1, this._getManifest = this._getManifest.bind(this), this._parseManifest = this._parseManifest.bind(this), this._getPlayableContent = this._getPlayableContent.bind(this)
                }
                _isPlayable(e, t) {
                    return "" !== document.createElement(t).canPlayType(e)
                }
                _parseManifest(e) {
                    if (!(null == e ? void 0 : e.manifest)) throw new tP(x.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.");
                    let {
                        manifest: t
                    } = e;
                    this._videoFiles = t.video_files, this._audioFiles = t.audio_files, this._contentMetadata = t.metadata, this._videoManifestId = t.video_manifest_id, this._product = t.product, this._trackingData = (e => {
                        let t = {};
                        for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = {
                            urls: e[i]
                        });
                        return t
                    })(t.tracking_events)
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, G.X)(),
                        i = this._manifestURL;
                    return this._transport.request(i, {
                        responseType: "json",
                        authorize: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(r => {
                        if (200 !== r.status) {
                            let e = new tP(x.I.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS, `Ad manifest request failed with status code ${r.status}`, {
                                isNetworkRelated: !0
                            });
                            return e.debug.manifestURL = i, e.status = r.status, Promise.reject(e)
                        }
                        if (!r.body) {
                            let e = new tP(x.I.AD_MANIFEST_INVALID, "Received empty manifest.");
                            return e.debug.manifestURL = i, e.status = r.status, Promise.reject(e)
                        }
                        return e && (e.manifestLatency = (0, G.r)(t)), Promise.resolve(r.body)
                    })
                }
                _getPlayableContent() {
                    let e = "video" === this._product;
                    if (e && this._videoManifestId) return;
                    let t = e ? this._videoFiles : this._audioFiles;
                    if (!t.length) throw new eJ(x.I.FILE_NOT_RESOLVED, `Manifest's ${e?"video_files":"audio_files"} array is empty.`);
                    let i = t.filter(e => this._isPlayable(e.type, this.getMediaType()));
                    if (!i.length) throw new eJ(x.I.FILE_FORMAT_NOT_SUPPORTED, "No playable content found.");
                    this._playableContentSorted = i.sort((e, t) => t.bitrate - e.bitrate)
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : this._getManifest(e).then(this._parseManifest).then(this._getPlayableContent).then(() => (this._loaded = !0, Promise.resolve(this)))
                }
                unload() {
                    this._adURL = ""
                }
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        [this._mediaType]: this._mimeType
                    }
                }
                getURL() {
                    if ("" !== this._adURL) return this._adURL;
                    let e = this._abrManager.getBandwidthEstimate(),
                        t = this._playableContentSorted[this._playableContentSorted.length - 1];
                    for (let i of this._playableContentSorted)
                        if (i.bitrate <= e) {
                            t = i;
                            break
                        }
                    return t && (this._adURL = t.url, this._mimeType = t.type), this._adURL
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
                getManifestId() {
                    return this._videoManifestId
                }
                getTrackingEvents() {
                    if (!this._trackingData) throw new eJ(x.I.FILE_NOT_RESOLVED, "Cannot return Tracking Events: File not resolved.");
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
            }

            function tR(e, t) {
                var i;
                return {
                    mediaType: e.mediaType,
                    logData: e.logData,
                    audioGain: e.audioGain,
                    uri: e.uri,
                    fileId: e.fileId,
                    mediaFormat: e.format,
                    hasNonFatalErrors: null != (i = e.hasNonFatalErrors) ? i : e.isAd,
                    disableCache: t.disableCache,
                    keySystemInfo: t.keySystemInfo,
                    licenseEndpoint: e.licenseEndpoint,
                    mediator: t.mediator,
                    noAuth: e.noAuth,
                    mimeType: e.mimeType
                }
            }

            function tI(e, t, i) {
                if (!e.fileId) return Promise.reject(new eC(x.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                let r = Object.assign(Object.assign({}, tR(e, t)), {
                    transport: t.transport,
                    abrManager: t.abrManager,
                    fileId: e.fileId,
                    keySystemSettings: to.v[t.keySystemInfo.keySystem],
                    resolver: t.videoResolver,
                    playabilityChecker: t.playabilityChecker,
                    disallowCodec: t.disallowCodec,
                    disallowProfile: t.disallowProfile,
                    allowMixedAVC1Codecs: t.allowMixedAVC1Codecs,
                    trackingData: (null == i ? void 0 : i.trackingData) || null,
                    metadata: null == i ? void 0 : i.metadata,
                    enableAbrOnElementSize: t.enableAbrOnElementSize,
                    mediaPlaybackMode: t.mediaPlaybackMode
                });
                return t.keySystemInfo.keySystem === eD.J.FAIRPLAY ? new tv(r).load(t.measures) : new tT(r).load(t.measures)
            }
            class tA {
                _createMediaElement() {
                    let e = document.createElement("video");
                    return e.id = "jssdk-internal-playability-checker", this._mediaElement = e, e
                }
                isURLPlayable(e, t) {
                    var i;
                    let r = (null != (i = this._mediaElement) ? i : this._createMediaElement()).canPlayType(e);
                    return (null == t ? void 0 : t.confidenceLevel) === "probably" ? "probably" === r : "" !== r
                }
                isMSEPlayable(e) {
                    return "undefined" != typeof MediaSource && MediaSource.isTypeSupported(e)
                }
                isWebKitMediaKeysPlayable(e, t) {
                    return "undefined" != typeof WebKitMediaKeys && WebKitMediaKeys.isTypeSupported(e, t)
                }
                isPlayable(e, t) {
                    switch (null == t ? void 0 : t.strategy) {
                        case c.MSE:
                            return this.isMSEPlayable(e);
                        case c.URL:
                            if (t.keySystem === eD.J.FAIRPLAY) return this.isWebKitMediaKeysPlayable(t.keySystem, e);
                            return this.isURLPlayable(e, t);
                        default:
                            return this.isMSEPlayable(e) || this.isURLPlayable(e, t)
                    }
                }
            }
            let tL = Z.m.forTag("playback.player"),
                tD = /^blob:/,
                tC = {
                    [p.MP4]: !0,
                    [p.MP4_DUAL]: !0,
                    [p.MP4_CBCS]: !0,
                    [p.MP4_FLAC]: !0,
                    [p.MP3]: !1,
                    [p.MANIFEST_ID]: !0,
                    [p.AD_MANIFEST]: !0,
                    [p.GENERIC_MEDIA]: !0
                },
                tO = {
                    start: eL.J.REPORTING_START,
                    creative_view: eL.J.REPORTING_CREATIVE_VIEW,
                    first_quartile: eL.J.REPORTING_FIRST_QUARTILE,
                    midpoint: eL.J.REPORTING_MIDPOINT,
                    third_quartile: eL.J.REPORTING_THIRD_QUARTILE,
                    complete: eL.J.REPORTING_COMPLETE,
                    pause: eL.J.REPORTING_PAUSE,
                    resume: eL.J.REPORTING_RESUME,
                    error: eL.J.REPORTING_ERROR
                },
                tk = {
                    audio: 2,
                    video: 2
                };

            function tN(e) {
                return Math.ceil(1e3 * e)
            }

            function tw(e) {
                return document.createElement(e)
            }
            class tM extends Y.bk {
                constructor(e) {
                    var t, i, r, a, n, s, o;
                    super(), this._cubicVolume = !1, this._player = null, this._emeManager = null, this._mediator = new Y.bk, this._currentContent = null, this._upcomingContent = null, this._preloadingTracks = {}, this._playId = 0, this._volumeCommandId = null, this._abortController = null, this._loaded = !1, this._licenseRequested = !1, this._playerActivated = !1, this._pauseToken = 0, this._syntheticEndedToken = 0, this._activeMimeTypes = {}, this._playerVolume = 1, this._muted = !1, this._playerSpeed = 1, this._fatalOnNextError = !1, this._canPreloadEmitted = !1, this._lastReportedPosition = null, this._lastReportedPlaybackSpeed = null, this._seeking = !1, this._rebuffering = !1, this._enableAbrOnVisibilityChange = !1, this._enableAbrOnElementSize = !1, this._useResizeObserver = !1, this._preferredBitrate = 0, this._disableLicensePrefetch = !1, this._allowMixedAVC1Codecs = !0, this._disableBufferingBeforeLicense = !1, this._rebufferTarget = tk, this._currentPlayingProfile = null, this._defaultPlayerContainerInjector = (e, t) => {
                        let i = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        i && e.parentNode !== i && (i.appendChild(e), "video" === t && this.emit(eL.J.PLAYER_VIDEO_ELEMENT_APPENDED, Object.assign({}, (0, eB.P)())))
                    }, this._defaultPlayerContainerEjector = (e, t, i) => {
                        let r = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        r && e.parentNode === r && (this._newElementPerTrack || i !== t) && (r.removeChild(e), "video" === t && (this._subtitleManager.setPlayer(null), this.emit(eL.J.PLAYER_VIDEO_ELEMENT_REMOVED, Object.assign({}, (0, eB.P)()))))
                    }, this._audioResolver = e.audioResolver, this._clearBufferOnSeek = !!e.clearBufferOnSeek, this._createPlayer = e.createPlayer || tw, this._cubicVolume = e.cubicVolume, this._disableCache = !!e.disableCache, this._licenseURLResolver = e.licenseURLResolver, this._newBufferPerTrack = !!e.newBufferPerTrack, this._newElementPerTrack = !!e.newElementPerTrack, this._newMediaKeysPerTrack = e.newMediaKeysPerTrack, this._rebufferOnQuotaExceeded = !!e.rebufferOnQuotaExceeded, this._disableLicensePrefetch = !!e.disableLicensePrefetch, this._synthesizeEnded = !!e.synthesizeEnded, this._tracker = e.tracker, this._transport = e.transport, this._videoPlayerContainer = e.videoPlayerContainer, this._audioPlayerContainer = e.audioPlayerContainer, this._playerContainerManager = e.playerContainerManager || {
                        inject: this._defaultPlayerContainerInjector.bind(this),
                        eject: this._defaultPlayerContainerEjector.bind(this)
                    }, this._allowMixedAVC1Codecs = null == (t = e.allowMixedAVC1Codecs) || t, this._videoResolver = e.videoResolver, this._abrManager = new ew, this._emeManager = e.disallowProtectedTracks ? null : e.emeManager || null, this._disallowCodec = function(e) {
                        var t, i;
                        let r = ["--no-match--"];
                        r.push(...null != (t = null == e ? void 0 : e.audio) ? t : [], ...null != (i = null == e ? void 0 : e.video) ? i : []);
                        let a = RegExp(`^(${r.join("|")})$`);
                        return e => a.test(e)
                    }(e.disallowCodecs), this._disallowProfile = e.disallowProfile, this._disableBufferingBeforeLicense = !!e.disableBufferingBeforeLicense, this._cache = new eA(e.trackCacheSize || 2), this._subtitleManager = new eH({
                        language: e.preferredSubtitleLanguage || navigator.language,
                        player: this._player
                    }), this._videoResolution = e.videoResolution, this._enableAbrOnVisibilityChange = !!e.enableAbrOnVisibilityChange, this._enableAbrOnElementSize = null != (i = e.enableAbrOnElementSize) && i, this._useResizeObserver = null != (r = e.useResizeObserver) && r, tL.info("Setting Player track cache to:", e.trackCacheSize || 2), this._playabilityChecker = new tA, this._bufferManager = ts.create(this._tracker, void 0, {
                        disableBufferAbort: !!e.disableBufferAbort,
                        reinjectInitsOnAbort: !!e.reinjectInitsOnAbort,
                        noInit: !0,
                        customSourceBufferParams: e.customSourceBufferParams,
                        bufferTarget: e.bufferTarget
                    }), this._statistics = e9.create({
                        bandwidthEstimator: this._abrManager
                    }), this._newKeySystemAccessPerTrack = e.newKeySystemAccessPerTrack, this._loadingTimeout = e.loadingTimeout, this._videoSurface = e.initialVideoSurface, this._isVideoVisible = e.initialIsVideoVisible;
                    let l = this._bufferManager.getBufferTarget();
                    this._rebufferTarget = {
                        audio: Math.min(null != (n = null == (a = e.rebufferTarget) ? void 0 : a.audio) ? n : tk.audio, l.audio),
                        video: Math.min(null != (o = null == (s = e.rebufferTarget) ? void 0 : s.video) ? o : tk.video, l.video)
                    }, this._audioProcessor = te.create(e.audioProcessorOptions), this._preloadThreshold = e.preloadThreshold || 10, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._onPlay = this._onPlay.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onPause = this._onPause.bind(this), this._onSeeked = this._onSeeked.bind(this), this._onSeeking = this._onSeeking.bind(this), this._onEncrypted = this._onEncrypted.bind(this), this._onEnded = this._onEnded.bind(this), this._onError = this._onError.bind(this), this._onRequiresDuration = this._onRequiresDuration.bind(this), this._onQuotaExceeded = this._onQuotaExceeded.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this._onWaiting = this._onWaiting.bind(this), this._onFragmentFetched = this._onFragmentFetched.bind(this), this._onProfileChanged = this._onProfileChanged.bind(this), this._onPlayedThresholdReached = this._onPlayedThresholdReached.bind(this), this._onSyntheticEnded = this._onSyntheticEnded.bind(this), this._onLicenseRequestCapped = this._onLicenseRequestCapped.bind(this), this._onLicenseRequestError = this._onLicenseRequestError.bind(this), this._onNavigatorOffline = this._onNavigatorOffline.bind(this), this._onBufferError = this._onBufferError.bind(this), this._onBufferUpdateEnd = this._onBufferUpdateEnd.bind(this), this._emitWarning = this._emitWarning.bind(this), this._handleLoadingComplete = this._handleLoadingComplete.bind(this), this._onRateChange = this._onRateChange.bind(this), this._onVideoResize = this._onVideoResize.bind(this), this._setAudioGain = this._setAudioGain.bind(this), this._onVolumeChanged = this._onVolumeChanged.bind(this), this._init(), this._getCacheKey = this._getCacheKey.bind(this)
                }
                static create(e) {
                    let t = Object.assign({}, e);
                    return e.disallowProtectedTracks ? tM.createWithOptions(t) : eO.X.create({
                        transport: e.transport,
                        disallowRobustnessValues: e.disallowRobustnessValues,
                        disallowCodecs: e.disallowCodecs,
                        noServerCertificate: e.noServerCertificate,
                        precacheServerCertificate: e.precacheServerCertificate,
                        unauthServerCertificateBase: e.unauthServerCertificateBase,
                        preferredKeySystems: e.preferredKeySystems
                    }).then(e => {
                        t.emeManager = e;
                        let i = new tM(t);
                        return t.preinitMediaElement ? i._preinitMediaElement() : i
                    }).catch(i => {
                        if (e.enableWithoutEME) return tM.createWithOptions(t);
                        throw i
                    })
                }
                static createWithOptions(e) {
                    return new Promise(t => {
                        let i = new tM(e);
                        t(e.preinitMediaElement ? i._preinitMediaElement() : i)
                    })
                }
                _init() {
                    this._disableCache && tL.info("Cache disabled."), this._transport.on(this._transport.EVENT_CONNECTION_OFFLINE, this._onNavigatorOffline), this.proxyEmitAllSync(this._tracker, {
                        [eL.J.TRACKER_TRACKING_DATA_CREATED]: eL.J.PLAYER_TRACKING_DATA_CREATED,
                        [eL.J.TRACKER_TRACKING_DATA_FINALIZED]: eL.J.PLAYER_TRACKING_DATA_FINALIZED,
                        [eL.J.TRACKER_PLAYBACK_START]: eL.J.PLAYER_PLAYBACK_START,
                        [eL.J.TRACKER_LOG_CLIENT_EVENT]: eL.J.PLAYER_LOG_CLIENT_EVENT
                    }), this._tracker.on(eL.J.TRACKER_PLAYED_THRESHOLD_REACHED, this._onPlayedThresholdReached), this._emeManager && this._emeManager.addListeners({
                        [eL.J.EME_LICENSE_REQUEST_CAPPED]: this._onLicenseRequestCapped,
                        [eL.J.EME_LICENSE_REQUEST_ERROR]: this._onLicenseRequestError
                    }), this._bufferManager.addListeners({
                        [eL.J.BUFFER_APPEND_ERROR]: this._onBufferError,
                        [eL.J.BUFFER_QUOTA_EXCEEDED]: this._onQuotaExceeded,
                        [eL.J.BUFFER_UPDATE_END]: this._onBufferUpdateEnd
                    }), this._mediator.addListeners({
                        [m.FRAGMENT_FETCHED]: this._onFragmentFetched,
                        [m.VIDEO_PROFILE_CHANGED]: this._onProfileChanged
                    }), this.proxyEmitAll(this._mediator, {
                        [m.FRAGMENT_FETCH_ERROR]: eL.J.PLAYER_FRAGMENT_FETCH_ERROR
                    }), this.proxyEmitSync(this._subtitleManager, eL.J.PLAYER_DISPLAYED_CUES_CHANGED, eL.J.PLAYER_DISPLAYED_CUES_CHANGED), this.proxyEmit(this._subtitleManager, eL.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, eL.J.PLAYER_SUBTITLE_LANGUAGES_LOADED), this.proxyEmitAll(this._videoResolver, {
                        [eL.J.VIDEO_MANIFEST_RESOLVED]: eL.J.PLAYER_VIDEO_MANIFEST_RESOLVED,
                        [eL.J.VIDEO_MANIFEST_RESOLVE_FAILED]: eL.J.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED
                    }), this._tracker.addListeners({
                        [eL.J.TRACKER_FIRST_QUARTILE]: () => this._emitReporting("first_quartile"),
                        [eL.J.TRACKER_MIDPOINT]: () => this._emitReporting("midpoint"),
                        [eL.J.TRACKER_THIRD_QUARTILE]: () => this._emitReporting("third_quartile")
                    }), this.addListeners({
                        [eL.J.PLAYER_PLAYBACK_START]: () => {
                            this._emitReporting("start"), this._emitReporting("creative_view")
                        },
                        [eL.J.PLAYER_ENDED]: () => this._emitReporting("complete"),
                        [eL.J.PLAYER_ERROR]: () => this._emitReporting("error")
                    })
                }
                _onRateChange() {
                    if (!this._player) return;
                    let e = this._player.playbackRate;
                    (null === this._lastReportedPlaybackSpeed || this._lastReportedPlaybackSpeed !== e) && (this._lastReportedPlaybackSpeed = e, 0 !== e && this._tracker.trackSpeedChanged(e), this.emit(eL.J.PLAYER_PLAYBACK_SPEED_CHANGED, Object.assign({
                        playback_speed: e,
                        playback_speed_selected: this._playerSpeed,
                        rebuffering: this._rebuffering,
                        seeking: this._seeking,
                        position: tN(this._player.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, eB.P)())))
                }
                _onLicenseRequestError(e) {
                    var t;
                    if (e.data.signal.aborted) return;
                    let i = this._currentContent;
                    if (!i) return;
                    let r = e.data.error,
                        a = null == (t = i.getKeySystemInfo()) ? void 0 : t.keySystem;
                    r.shouldRefreshEndpoint && a && this._licenseURLResolver.remove(a, i.getMediaType());
                    let n = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(r, !r.unrecoverable, n, i.toLogJSON())
                }
                _onFragmentFetched(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackFragment(t), this.emit(eL.J.PLAYER_FRAGMENT_FETCHED, t)
                }
                _onProfileChanged(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackProfileChanged(t.profile), this.emit(eL.J.PLAYER_VIDEO_PROFILE_CHANGED, t)
                }
                _onLicenseRequestCapped(e) {
                    !e.data.signal.aborted && this._currentContent && (this.pause(), this.emit(eL.J.PLAYER_CAPPED, {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _shouldNextErrorBeFatal() {
                    let e = this._currentContent;
                    if (!e || e.hasNonFatalErrors() || !e.isProtected() || !this._player) return !1;
                    let t = this._player.error;
                    if (!t || !(t instanceof MediaError)) return this._fatalOnNextError = !1, !1;
                    switch (t.code) {
                        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        case MediaError.MEDIA_ERR_DECODE:
                            return !0;
                        default:
                            return !1
                    }
                }
                _onNavigatorOffline() {
                    this._tracker.trackNavigatorOffline()
                }
                _onBufferError(e) {
                    let t = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(e.data.error, e.data.canPlayNext, t, e.data.track)
                }
                _onBufferUpdateEnd() {
                    var e;
                    this._setRebufferingState(!0), this._rebuffering && this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === c.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime)
                }
                _addPlayerEvents(e) {
                    e.addEventListener(eL.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.addEventListener(eL.J.MEDIA_PLAY, this._onPlay), e.addEventListener(eL.J.MEDIA_PLAYING, this._onPlaying), e.addEventListener(eL.J.MEDIA_PAUSE, this._onPause), e.addEventListener(eL.J.MEDIA_SEEKED, this._onSeeked), e.addEventListener(eL.J.MEDIA_SEEKING, this._onSeeking), e.addEventListener(eL.J.MEDIA_ENCRYPTED, this._onEncrypted), e.addEventListener(eL.J.MEDIA_ENDED, this._onEnded), e.addEventListener(eL.J.MEDIA_ERROR, this._onError), e.addEventListener(eL.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.addEventListener(eL.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.addEventListener(eL.J.MEDIA_WAITING, this._onWaiting), e.addEventListener(eL.J.MEDIA_CANPLAY, this._onCanPlay), e.addEventListener(eL.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.addEventListener(eL.J.MEDIA_RATECHANGE, this._onRateChange), e.addEventListener(eL.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.addEventListener(eL.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.addEventListener(eL.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _removePlayerEvents(e) {
                    e.removeEventListener(eL.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.removeEventListener(eL.J.MEDIA_PLAY, this._onPlay), e.removeEventListener(eL.J.MEDIA_PLAYING, this._onPlaying), e.removeEventListener(eL.J.MEDIA_PAUSE, this._onPause), e.removeEventListener(eL.J.MEDIA_SEEKED, this._onSeeked), e.removeEventListener(eL.J.MEDIA_SEEKING, this._onSeeking), e.removeEventListener(eL.J.MEDIA_ENCRYPTED, this._onEncrypted), e.removeEventListener(eL.J.MEDIA_ENDED, this._onEnded), e.removeEventListener(eL.J.MEDIA_ERROR, this._onError), e.removeEventListener(eL.J.MEDIA_WAITING, this._onWaiting), e.removeEventListener(eL.J.MEDIA_CANPLAY, this._onCanPlay), e.removeEventListener(eL.J.MEDIA_RATECHANGE, this._onRateChange), e.removeEventListener(eL.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.removeEventListener(eL.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.removeEventListener(eL.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.removeEventListener(eL.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.removeEventListener(eL.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.removeEventListener(eL.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _recreateMediaElement(e, t, i, r) {
                    var a, n, s, o;
                    if (r.aborted) return tL.info("Recreate player dropped: operation aborted."), Promise.resolve(null);
                    let l = this._player,
                        _ = Promise.resolve(null);
                    if (l) {
                        let r;
                        if (!this._newElementPerTrack && ("AUDIO" !== l.tagName || "video" !== t) && !(l === this._audioProcessor.getPlayer() && !(null == (a = this._upcomingContent) ? void 0 : a.isProtected())) && (r = !0, Object.keys(e).forEach(t => {
                                let i = e[t];
                                'audio/mp2t;codecs="mp4a.40.2"' !== i && i && !l.canPlayType(i) && (r = !1)
                            }), r)) return tL.info("Reusing media element."), (e.audio !== this._activeMimeTypes.audio || e.video !== this._activeMimeTypes.video || this._newBufferPerTrack) && i === c.MSE && (tL.info("Recreating buffer."), this._bufferManager.recreate(e), this._activeMimeTypes = e), Promise.resolve({
                            player: l,
                            mediaKeys: l.mediaKeys
                        });
                        this._removePlayerEvents(l), l.pause(), _ = this._cleanMediaKeys(l), this._useResizeObserver && this._enableAbrOnElementSize && (null == (n = this._resizeObserver) || n.disconnect()), this._player = null, null == (s = this._playerContainerManager) || s.eject(l, "video"), null == (o = this._playerContainerManager) || o.eject(l, "audio")
                    }
                    tL.info(`Creating new media element for media type ${t}.`);
                    let d = this._createPlayer(t),
                        u = this._playerVolume;
                    return d.volume = this._cubicVolume ? Math.pow(u, 3) : u, d.autoplay = !1, d.loop = !1, d.muted = this._muted, "playsInline" in d && (d.playsInline = !0), this._player = d, this._playerActivated = !1, this._addPlayerEvents(d), i === c.MSE && this._bufferManager.recreate(e), this._activeMimeTypes = e, this._useResizeObserver && this._enableAbrOnElementSize && (this._resizeObserver = new ResizeObserver(e => {
                        for (let t of e) {
                            let e = t.contentRect;
                            e6(this._currentContent) && this._currentContent.adapt({
                                currentElementSize: {
                                    height: e.height,
                                    width: e.width
                                }
                            })
                        }
                    }), this._player && this._resizeObserver.observe(this._player)), _.then(e => ({
                        player: d,
                        mediaKeys: e
                    }))
                }
                _getContainerElement(e) {
                    var t;
                    if ("string" == typeof e) {
                        let i = document.querySelector(e);
                        if (i) return i;
                        let r = new eC(x.I.PLAYER_CONTAINER_ELEMENT_NOT_FOUND, "Container element was not found in the DOM");
                        return r.listPlayerIgnore = !0, this._emitWarning(r, null == (t = this._currentContent) ? void 0 : t.toLogJSON()), null
                    }
                    return e || null
                }
                _onVideoResize() {
                    if (!(this._player instanceof HTMLVideoElement)) return;
                    let {
                        videoWidth: e,
                        videoHeight: t
                    } = this._player;
                    this.emit(eL.J.PLAYER_VIDEO_RESIZED, Object.assign({
                        width: e,
                        height: t
                    }, (0, eB.P)()))
                }
                _onDurationChange() {
                    var e;
                    let t = null == (e = this._abortController) ? void 0 : e.signal,
                        i = () => {
                            if (!this._player) return;
                            if (null == t ? void 0 : t.aborted) return void tL.info("Duration changed drop: operation aborted.");
                            let e = tN(this._player.duration),
                                i = tN(this._player.currentTime);
                            this._tracker.setActualDuration(e), this.emit(eL.J.PLAYER_DURATION_CHANGED, Object.assign({
                                position: i,
                                duration: e,
                                playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                            }, (0, eB.P)()))
                        };
                    this._loaded ? i() : this.once(eL.J.PLAYER_LOAD, i)
                }
                _onPlay() {
                    var e;
                    if (!this._player || !this._currentContent) return;
                    let t = tN(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlay(t, this._player.playbackRate), this.emit(eL.J.PLAYER_PLAY, Object.assign({
                        position: t,
                        logData: null != (e = this._currentContent.getLogData()) ? e : null
                    }, (0, eB.P)()))
                }
                _onPlaying() {
                    if (!this._player) return;
                    this._playerActivated = !0;
                    let e = this._currentContent,
                        t = tN(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlaying(t), this.emit(eL.J.PLAYER_PLAYING, Object.assign({
                        position: t,
                        logData: e ? e.getLogData() : null,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, eB.P)()))
                }
                _onPause() {
                    var e;
                    if (!this._player) return;
                    let t = this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime,
                        i = tN(t);
                    this._tracker.trackPaused(i), this._lastReportedPosition = t;
                    let r = this._currentContent ? this._currentContent.getLogData() : null;
                    this._pauseToken = setTimeout(() => {
                        clearTimeout(this._syntheticEndedToken), this.emit(eL.J.PLAYER_PAUSED, Object.assign({
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                            position: i,
                            logData: r
                        }, (0, eB.P)()))
                    }, 10), this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === c.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime)
                }
                _onSeeked() {
                    if (this._seeking = !1, !this._player || !this._currentContent) return;
                    let e = tN(this._player.currentTime);
                    this._tracker.trackPositionChanged(e), this.emit(eL.J.PLAYER_POSITION_CHANGED, Object.assign({
                        previousPosition: null !== this._lastReportedPosition ? tN(this._lastReportedPosition) : null,
                        position: e,
                        logData: this._currentContent.getLogData(),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, eB.P)()))
                }
                _onSeeking() {
                    if (this._seeking = !0, this.emit(eL.J.PLAYER_SEEKING, Object.assign({}, (0, eB.P)())), this._setRebufferingState(), !this._player) return;
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.strategy) !== c.MSE) return;
                    if (e.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void tL.log("Dropping seek event: buffering before license disabled.");
                    let t = this._player.currentTime;
                    this._bufferManager.isPositionInCurrentFillRange(e, t) || (tL.log("Aborting buffer operations."), this._bufferManager.abort(this._clearBufferOnSeek));
                    let i = this._bufferManager;
                    i.checkBufferHealth(e, t, !1);
                    let r = i.getBufferedSegmentInfoForTime(t);
                    this._checkPlayingProfile(r)
                }
                _onRequiresDuration() {
                    this._currentContent && this._currentContent.isProtected() && this._player && (this._player.duration = this._currentContent.getCalculatedDuration())
                }
                _onQuotaExceeded() {
                    var e;
                    this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === c.MSE && this._rebufferOnQuotaExceeded && (tL.info("Exceeded quota: rebuffering current track."), this._bufferManager.abort(!0), this._player.currentTime = this._player.currentTime, this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime, !0))
                }
                _onEncrypted(e) {
                    tL.info("Got Encrypted event"), this._currentContent && this.emitSync(eL.J.INTERNAL_ENCRYPTED, Object.assign({
                        initData: e.initData,
                        fromPolyfill: !!e.fromPolyfill
                    }, (0, eB.P)()))
                }
                _onEnded() {
                    !this._currentContent || this._synthesizeEnded && this._currentContent.isProtected() || (tL.info("Native ended emitted."), this._emitEnded())
                }
                _onSyntheticEnded() {
                    this._synthesizeEnded && this._currentContent && this._currentContent.isProtected() && (tL.info("Synthetic ended emitted."), this._emitEnded())
                }
                _onError() {
                    var e, t, i, r;
                    let a, n, s, o, l;
                    if (!this._player) return;
                    let _ = this._player.error,
                        d = !1,
                        u = this._currentContent,
                        c = !1;
                    u && (d = u.isProtected(), a = u.toLogJSON(), c = u.hasNonFatalErrors(), u.unload());
                    let h = !0,
                        p = !u || c || !this._fatalOnNextError,
                        m = _ && _.msExtendedCode ? `0x${(_.msExtendedCode>>>0).toString(16).toUpperCase()}` : null,
                        E = `data:${(null==a?void 0:a.fileId)||"unknown"}`;
                    if (_ instanceof MediaError) {
                        switch (_.code) {
                            case MediaError.MEDIA_ERR_ABORTED:
                                n = x.I.MEDIA_ABORTED, s = "Media aborted.";
                                break;
                            case MediaError.MEDIA_ERR_NETWORK:
                                n = x.I.MEDIA_NETWORK_ERROR, s = "Network error.", o = {
                                    isNetworkRelated: !0
                                };
                                break;
                            case MediaError.MEDIA_ERR_DECODE:
                                n = x.I.MEDIA_DECODING_ERROR, s = "Media decoding error.", h = p;
                                break;
                            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                n = x.I.MEDIA_NOT_SUPPORTED, s = "Media not supported.", h = p;
                                break;
                            default:
                                n = x.I.PLAYER_MEDIA_ERROR, s = "Media error.", l = !0
                        }
                        let e = _.message || m || E || _.toString();
                        s += ` (${e})`
                    } else n = x.I.PLAYER_PLAYBACK_ERROR, s = "Error message undefined", l = !0;
                    this._bufferManager.abort(!0);
                    let f = new eC(n, s, o);
                    h || (f.unrecoverable = !0), f.listPlayerIgnore = c, f.debug.src_url = E, f.debug.protected = d, f.debug.extendedCode = m, f.debug.rawExCode = _ && _.msExtendedCode || null, f.debug.audio_profile = null == (t = null == (e = this._currentPlayingProfile) ? void 0 : e.audio) ? void 0 : t.id, f.debug.video_profile = null == (r = null == (i = this._currentPlayingProfile) ? void 0 : i.video) ? void 0 : r.id, l && _ && (f.debug.nativeCode = _.code || null, f.debug.errorData = _);
                    let g = (0, eB.P)();
                    this._emitError(f, h, g, a)
                }
                _onLoadedMetadata() {
                    this.emitSync(eL.J.INTERNAL_PLAYER_LOADED_METADATA, Object.assign({}, (0, eB.P)()))
                }
                _onCanPlay() {
                    let {
                        timestamp: e,
                        monotonicTimestamp: t
                    } = (0, eB.P)();
                    this._setRebufferingState(), this.emitSync(eL.J.INTERNAL_PLAYER_CANPLAY, {
                        timestamp: e,
                        monotonicTimestamp: t
                    }), this._tracker.trackFirstBytesLatency(t), this.emit(eL.J.PLAYER_FIRST_BYTES, {
                        timestamp: e,
                        monotonicTimestamp: t,
                        position: this._player ? tN(this._player.currentTime) : 0
                    })
                }
                _onCanPlayThrough() {
                    this._setRebufferingState(), this.emitSync(eL.J.INTERNAL_PLAYER_CANPLAYTHROUGH, Object.assign({}, (0, eB.P)()))
                }
                _onWaiting() {
                    var e;
                    clearTimeout(this._syntheticEndedToken);
                    let t = this._player;
                    if (!t || !this._currentContent) return;
                    let i = t.seeking;
                    this._setRebufferingState();
                    let r = !!e6(this._currentContent) && this._currentContent.canLowerBitrate(),
                        a = this._tracker;
                    this.emit(eL.J.PLAYER_BUFFERING_START, Object.assign(Object.assign({
                        position: tN(t.currentTime),
                        msPlayed: this._tracker.getMSPlayed(),
                        canLowerBitrate: r,
                        seeking: i
                    }, a.getStallsInformation()), (0, eB.P)()));
                    let n = null == (e = this._abortController) ? void 0 : e.signal;
                    this._getRebufferingLatency().then(e => {
                        null != n && n.aborted || (i || this._tracker.trackMsStalled(e), this.emit(eL.J.PLAYER_BUFFERING_END, Object.assign(Object.assign({
                            position: tN(t.currentTime),
                            msPlayed: this._tracker.getMSPlayed(),
                            canLowerBitrate: r,
                            msStalled: e,
                            seeking: i
                        }, a.getStallsInformation()), (0, eB.P)())))
                    })
                }
                _onPlayedThresholdReached(e) {
                    this._currentContent && this._player && this.emit(eL.J.PLAYER_PLAYED_THRESHOLD_REACHED, Object.assign({
                        played: e.data.played,
                        threshold: e.data.threshold,
                        position: tN(this._player.currentTime)
                    }, (0, eB.P)()))
                }
                _emitEnded() {
                    this._currentContent && "video" === this._currentContent.getMediaType() && this.emit(eL.J.PLAYER_ENDED_VIDEO, Object.assign({}, (0, eB.P)())), clearTimeout(this._pauseToken), this.emit(eL.J.PLAYER_ENDED, Object.assign({}, (0, eB.P)()))
                }
                _emitError(e, t, i, r) {
                    tL.error("Player Error", e, r, t), this._tracker.setHadError(!0), !this._disableCache && r && r.fileId && this._cache.remove(r.fileId), this.emit(eL.J.PLAYER_ERROR, {
                        playId: this._playId,
                        error: e,
                        track: r,
                        canPlayNext: t,
                        position: this._player ? tN(this._player.currentTime) : 0,
                        timestamp: i.timestamp,
                        monotonicTimestamp: i.monotonicTimestamp
                    })
                }
                _emitWarning(e, t) {
                    tL.warn("Player Warning", e, t, !0), this._tracker.trackWarning(), this.emit(eL.J.PLAYER_WARNING, Object.assign({
                        playId: this._playId,
                        error: e,
                        track: t,
                        canPlayNext: !0,
                        position: this._player ? tN(this._player.currentTime) : 0
                    }, (0, eB.P)()))
                }
                _emitReporting(e) {
                    if (!e8(this._currentContent)) return;
                    let t = this._currentContent.getTrackingEventData(e);
                    t && 0 !== t.urls.length && this.emitAndWait(tO[e], t, e => {
                        if (!e.defaultPrevented)
                            for (let e of t.urls) this._transport.request(e, {
                                forget: !0
                            })
                    })
                }
                _prepareMediaElement(e, t) {
                    if (t.aborted || !this._upcomingContent) return tL.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    let i = this._upcomingContent.getMediaTypeMimeTypes();
                    return this._recreateMediaElement(i, this._upcomingContent.getMediaType(), this._upcomingContent.strategy, t).then(i => {
                        var r;
                        if (!i || t.aborted) return tL.info("Loading content dropped after recreate: operation aborted."), Promise.resolve(!1);
                        let {
                            player: a,
                            mediaKeys: n
                        } = i;
                        if ("VIDEO" === a.tagName && (e.poster ? a.poster = e.poster : a.removeAttribute("poster")), a.muted = !!e.muted, a.loop = !!e.loop, !this._emeManager || !(null == (r = this._upcomingContent) ? void 0 : r.isProtected())) return Promise.resolve(!0);
                        let s = e => {
                            var t;
                            let i = (0, eB.P)();
                            return e.unrecoverable = !0, this._emitError(e, !1, i, null == (t = this._upcomingContent) ? void 0 : t.toLogJSON()), Promise.reject(e)
                        };
                        return !n || this._newMediaKeysPerTrack || void 0 === this._newMediaKeysPerTrack && !a.mediaKeys || (null == n ? void 0 : n.shouldRefreshPerTrack) ? (tL.info("Creating media keys"), this._emeManager.createMediaKeys(a).then(() => !0, s)) : a.mediaKeys !== n ? (tL.info("Reusing previous media keys"), this._emeManager.setMediaKeys(a, n).then(() => !0, s)) : Promise.resolve(!0)
                    })
                }
                _isRebufferingTargetReached() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return !1;
                    if (i.strategy === c.URL) return t.readyState > 2;
                    let r = null != (e = this._rebufferTarget[i.getMediaType()]) ? e : 0;
                    if (!r) return !0;
                    let a = Math.max(t.currentTime, 1),
                        n = Math.min(r, Math.floor(t.duration - a)),
                        s = t.buffered;
                    for (let e = 0, t = s.length; e < t; e++) {
                        let t = s.start(e),
                            i = s.end(e);
                        if (t <= a && a <= i && n <= i - a) return !0
                    }
                    return !1
                }
                _setPlaybackRate() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return;
                    if (i.strategy === c.MSE && this._rebuffering) {
                        t.playbackRate = 0;
                        return
                    }
                    let r = (null == (e = this._loadingOptions) ? void 0 : e.useDefaultPlaybackSpeed) ? 1 : this._playerSpeed;
                    t.playbackRate = r, t.defaultPlaybackRate = r
                }
                _setRebufferingState(e) {
                    let t = this._rebuffering,
                        i = !this._isRebufferingTargetReached();
                    e && i || (this._rebuffering = i, this._setPlaybackRate(), !t && this._rebuffering ? (tL.log("Rebuffering start"), this.emit(eL.J.PLAYER_REBUFFERING_START, Object.assign({}, (0, eB.P)()))) : t && !this._rebuffering && (tL.log("Rebuffering end"), this._tracker.trackPlayLatency(), this.emit(eL.J.PLAYER_REBUFFERING_END, Object.assign({}, (0, eB.P)()))))
                }
                _checkPlayingProfile(e, t) {
                    var i, r, a, n;
                    let s = this._currentPlayingProfile,
                        o = !!t;
                    if ((null == (i = null == s ? void 0 : s.audio) ? void 0 : i.id) !== (null == (r = null == e ? void 0 : e.audio) ? void 0 : r.profileId) || (null == (a = null == s ? void 0 : s.video) ? void 0 : a.id) !== (null == (n = null == e ? void 0 : e.video) ? void 0 : n.profileId)) {
                        let t = e ? {
                            audio: e.audio ? {
                                id: e.audio.profileId,
                                mimeType: e.audio.mimeType,
                                bitrate: e.audio.bitrate
                            } : void 0,
                            video: e.video ? {
                                id: e.video.profileId,
                                mimeType: e.video.mimeType,
                                bitrate: e.video.bitrate,
                                width: e.video.width,
                                height: e.video.height,
                                resolution: e.video.resolution
                            } : void 0
                        } : null;
                        this._currentPlayingProfile = t, o = !0
                    }
                    o && this.emit(eL.J.PLAYER_PLAYING_PROFILE_CHANGED, Object.assign({
                        profile: this._currentPlayingProfile
                    }, (0, eB.P)()))
                }
                _configureLoadingTimeout(e, t, i) {
                    let r = null != i ? i : this._loadingTimeout,
                        a = new eC(x.I.PLAYER_TIMEOUT_ERROR, `Timeout: track could not be loaded within ${r} ms.`);
                    return r ? setTimeout(() => {
                        if (e.aborted) return;
                        null == t || t.abort();
                        let i = Object.assign({}, (0, eB.P)());
                        this._emitError(a, !0, i)
                    }, r) : void 0
                }
                _handleLoadingComplete(e, t) {
                    var i;
                    clearTimeout(t);
                    let r = this._currentContent && this._currentContent.getMediaType();
                    return this._player && r && (null == (i = this._playerContainerManager) || i.inject(this._player, r)), this._upcomingContent = null, e
                }
                _handleLoadingError(e, t, i, r, a) {
                    if (clearTimeout(r), this._upcomingContent = null, i.aborted) return Promise.resolve(!1);
                    let n = (0, eB.P)();
                    if (this._tracker.trackLoadFailed(), this.emit(eL.J.PLAYER_LOADING_FAILED, Object.assign({
                            uri: e,
                            logData: t.logData
                        }, n)), a) {
                        let i = a.track || {
                            uri: e,
                            fileId: t.fileId,
                            mediaFormat: t.format,
                            deviceId: t.logData.deviceId
                        };
                        this._emitError(a, "StorageError" !== a.name || !!a.canPlayNext, n, i)
                    }
                    return Promise.reject(a)
                }
                _handleLoadedMetadata(e, t, i) {
                    if (e.aborted) return void tL.info("LoadedMetadata operations dropped: operation aborted.");
                    this._loaded = !0;
                    let r = this._player;
                    if (!r) return;
                    this._setRebufferingState(), this._bufferManager.dequeueUpdates();
                    let a = i.position > r.duration ? 0 : i.position;
                    (isNaN(r.currentTime) || r.currentTime < a) && (tL.info("Resetting initial position after metadata."), r.currentTime = a, this._lastReportedPosition = r.currentTime), this._tracker.trackLoadDone(tN(r.currentTime)), this.emitSync(eL.J.PLAYER_LOAD, Object.assign({
                        autoplay: i.autoplay,
                        position: tN(a),
                        logData: t
                    }, (0, eB.P)()));
                    let n = () => {
                        r.currentTime < a && (tL.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime)
                    };
                    i.autoplay && !r.error && (n = () => {
                        if (r.currentTime < a && (tL.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime), e.aborted) return void tL.info("Play trigger dropped: operation aborted");
                        new Promise(e => e(this._player && this._player.play())).then(() => this._audioProcessor.resume()).catch(e => {
                            if (e) {
                                if ("NotSupportedError" === e.name) return Promise.reject(e);
                                else if ("NotAllowedError" === e.name) return this.emit(eL.J.PLAYER_AUTOPLAY_FAILED, Object.assign({}, (0, eB.P)())), Promise.reject(e)
                            }
                            return this._player ? this._player.play() : Promise.resolve()
                        }).catch(() => {
                            this._onPause()
                        })
                    }), r.readyState > 2 ? (tL.info("Ready to play, triggering play."), n()) : (tL.info("Waiting to be playable."), this.once(eL.J.INTERNAL_PLAYER_CANPLAY, n))
                }
                _handleCanPlayThrough(e) {
                    var t;
                    if (e.aborted) return void tL.info("CanPlayThrough operations dropped: operation aborted.");
                    this._tracker.trackCanPlayThrough(), (null == (t = this._currentContent) ? void 0 : t.strategy) !== c.MSE && this._tracker.trackPlayLatency()
                }
                _loadContent(e, t) {
                    if (t.aborted || !this._upcomingContent) return tL.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player) throw new eC(x.I.PLAYER_INVALID_INTERNAL_STATE, "Cannot load content without an HTMLMediaElement");
                    this._canPreloadEmitted = !1;
                    let i = this._upcomingContent;
                    this._upcomingContent = null, this._currentContent = i, this._setAudioGain(i);
                    let r = e3(i) ? i.getSeekPanels() : null;
                    this.emit(eL.J.PLAYER_SEEK_PANELS_LOADED, Object.assign({
                        seekPanels: r
                    }, (0, eB.P)())), this._subtitleManager.setVideoContent(i && "getSubtitles" in i && "getSubtitleLanguages" in i ? i : null);
                    let a = e.callback;
                    a && this.once(eL.J.PLAYER_LOAD, () => {
                        if (t.aborted) return void tL.info("Load content event dropped: operation aborted.");
                        a()
                    }), this.once(eL.J.INTERNAL_PLAYER_LOADED_METADATA, this._handleLoadedMetadata.bind(this, t, this._currentContent.getLogData(), e)), this.once(eL.J.INTERNAL_PLAYER_CANPLAYTHROUGH, this._handleCanPlayThrough.bind(this, t));
                    let n = e.position,
                        s = "getCalculatedDuration" in i ? i.getCalculatedDuration() : 1 / 0;
                    s && n > s && (n = e.position = 0);
                    try {
                        this._player.currentTime = n, this._lastReportedPosition = this._player.currentTime
                    } catch (e) {
                        tL.warn("Cannot set initial position before loading.", e)
                    }
                    this._setRebufferingState();
                    let o = e.playbackSpeed;
                    return (!e.useDefaultPlaybackSpeed && o && this.setPlaybackSpeed(o), this._tracker.setProtected(i.isProtected()), this._tracker.trackStrategy(i.strategy), this._tracker.setContentClass(i.contentClassName), tL.info(`Detecting ${i.strategy} strategy for ${i.contentClassName}.`), i.strategy === c.MSE) ? this._loadMSEContent(i, e, t) : this._loadURLContent(i, e, t)
                }
                _loadURLContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new eC(x.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    tL.info("Loading URL content.");
                    let n = e.getURL();
                    if (!n) return Promise.reject(new eC(x.I.PLAYER_INVALID_INTERNAL_STATE, "Content not loaded."));
                    let s = this._tracker;
                    if (s.setUrl(n), e.isProtected()) {
                        tL.info("URL content is protected");
                        let e = t => {
                            t.data.fromPolyfill && (this.removeListener(eL.J.INTERNAL_ENCRYPTED, e), this._requestLicense(i, {
                                initData: t.data.initData
                            }))
                        };
                        this.on(eL.J.INTERNAL_ENCRYPTED, e)
                    }
                    if ("video" === e.getMediaType() && e5(e)) {
                        let t = e.getMediaProfileInfo();
                        s.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    s.trackBufferLoadStart(), s.trackBufferURL(n, {
                        bandwidth: 0
                    });
                    let o = e.getLoadingApproach();
                    if ("src" === o.approach) tL.info("URL content loaded using src attribute"), this._player.src = n;
                    else {
                        tL.info("URL content loaded using source element");
                        let e = document.createElement("source");
                        e.src = n, e.type = o.type, this._player.appendChild(e)
                    }
                    return this._player.load(), Promise.resolve(!0)
                }
                _loadMSEContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new eC(x.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    if (tL.info(`Loading MSE Content: ${e.getFileId()}`), e.isProtected()) {
                        tL.log("MSE content is protected");
                        let r = () => this._requestLicense(i).then(() => {
                            !i.aborted && (this._licenseRequested = !0, this._disableBufferingBeforeLicense && this._bufferManager.checkBufferHealth(e, t.position, !0))
                        });
                        this._disableLicensePrefetch ? this.once(eL.J.INTERNAL_ENCRYPTED, r) : this._bufferManager.once(eL.J.BUFFER_SOURCE_OPEN, r)
                    }
                    let n = this._bufferManager,
                        s = n.getMediaSource();
                    if (!s) return Promise.reject(new eC(x.I.PLAYER_INVALID_INTERNAL_STATE, "No media source."));
                    if ("video" === e.getMediaType() && e5(e)) {
                        let t = e.getMediaProfileInfo();
                        this._tracker.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    return this._player.src = URL.createObjectURL(s), this._setPlaybackRate(), new Promise((r, a) => {
                        n.once(eL.J.BUFFER_SOURCE_OPEN, () => {
                            if (i.aborted) return void r(!1);
                            this._tracker.trackBufferLoadStart(), this._getRebufferingLatency().then(e => {
                                i.aborted || this._tracker.trackInitialRebuffering(e)
                            }), ("video" === e.getMediaType() ? n.setDuration(e.getCalculatedDuration()) : Promise.resolve(!0)).then(() => !i.aborted && (e.isProtected() && this._disableBufferingBeforeLicense ? n.injectInitSegment(e) : (this._bufferManager.checkBufferHealth(e, t.position, !0), !0))).then(r, a)
                        })
                    })
                }
                _getRebufferingLatency() {
                    return new Promise(e => {
                        if (!this._player) return void e(0);
                        let t = (0, G.X)();
                        this.once(eL.J.PLAYER_REBUFFERING_END, () => {
                            e((0, G.r)(t))
                        })
                    })
                }
                _requestLicense(e, t = {}) {
                    let i;
                    if (e.aborted) return tL.info("Request license dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player || !this._currentContent || !this._emeManager) return Promise.resolve(!1);
                    let r = (0, G.X)(),
                        a = this._player.mediaKeys,
                        n = this._currentContent,
                        s = n.getFileId(),
                        o = n.getLogData(),
                        l = n.toLogJSON(),
                        _ = n.getKeySystemInfo();
                    if (!_) return Promise.resolve(!1);
                    let d = _.keySystem;
                    if (!d) return Promise.resolve(!1);
                    let u = n.getLicenseEndpoint();
                    if (u) i = Promise.resolve(u);
                    else {
                        if (!s) return Promise.reject(TypeError("Missing: fileId or licenseEndpoint"));
                        i = this._licenseURLResolver.get(d, n.getMediaType()).then(e => e.replace(/\{contentId\}/, s))
                    }
                    let c = this._emeManager,
                        h = this._tracker;
                    return h.setKeySystem(d), h.setKeySystemImpl(_.keySystemImpl), h.setKeySystemLabel(_.keySystemLabel), Promise.all([i, n.getInitParams()]).then(([i, n]) => {
                        if (!n) return Promise.resolve(!1);
                        h.setLicenseSessionLatency((0, G.r)(r));
                        let s = n.initDataType,
                            o = t.initData || n.initData;
                        return a && o && s ? c.createSessionWithParams({
                            keySystem: d,
                            signal: e,
                            initData: o,
                            mediaKeys: a,
                            licenseServer: i,
                            initDataType: s
                        }) : Promise.resolve(!1)
                    }).then(t => {
                        if (e.aborted) return tL.info("License tracking dropped: operation aborted."), Promise.resolve(!1);
                        "boolean" != typeof t && "elapsed" in t && (h.setLicenseGenerationLatency(t.elapsed.generate), h.setLicenseRequestLatency(t.elapsed.request), h.setLicenseUpdateLatency(t.elapsed.update));
                        let i = (0, G.r)(r);
                        return h.setKeyLatency(i), this.emit(eL.J.PLAYER_KEY_RECEIVED, Object.assign({
                            requestTime: i,
                            logData: o
                        }, (0, eB.P)())), tL.info("License updated."), Promise.resolve(!0)
                    }).catch(t => {
                        if (e.aborted) return Promise.resolve(!1);
                        let i = !t || !("canPlayNext" in t) || t.canPlayNext,
                            r = (0, eB.P)();
                        return this._emitError(t, !!i, r, l), Promise.reject(t)
                    })
                }
                _onTimeUpdate() {
                    var e;
                    if (!this._loaded || !(null == (e = this._player) ? void 0 : e.readyState) || !this._currentContent) return;
                    let t = this._currentContent,
                        i = this._player.currentTime,
                        r = this._player.duration;
                    if (!this._seeking) {
                        if (t.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void tL.log("Dropping time update event: buffering before license disabled.");
                        if (this._lastReportedPosition = i, t.strategy === c.MSE) {
                            let e = this._bufferManager;
                            e.checkBufferHealth(t, i, !1);
                            let r = e.getBufferedSegmentInfoForTime(i);
                            this._checkPlayingProfile(r)
                        }
                        let e = tN(i),
                            r = t.getLogData();
                        this._tracker.trackProgress(e, e6(t) ? t.getCurrentBitrates().video : 0), this.emit(eL.J.PLAYER_PROGRESS, Object.assign({
                            position: e,
                            played: this._tracker.getMSPlayed(),
                            interval: 500,
                            logData: r,
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }, (0, eB.P)()))
                    }
                    let a = r - i <= this._preloadThreshold;
                    !this._canPreloadEmitted && a ? (this._canPreloadEmitted = !0, this.emit(eL.J.PLAYER_CAN_PRELOAD, Object.assign({}, (0, eB.P)()))) : this._canPreloadEmitted && !a && (this._canPreloadEmitted = !1), clearTimeout(this._syntheticEndedToken), this._synthesizeEnded && t.isProtected() && this._isPlaying() && (this._syntheticEndedToken = setTimeout(this._onSyntheticEnded, tN(r - i)))
                }
                _onVolumeChanged() {
                    if (!this._player) return;
                    let e = this._playerVolume,
                        t = this._volumeCommandId;
                    this._volumeCommandId = null, this.emit(eL.J.PLAYER_VOLUME_CHANGED, Object.assign({
                        volume: e,
                        commandId: null != t ? t : void 0
                    }, (0, eB.P)()))
                }
                _isPlaying() {
                    return !!this._player && !this._player.paused
                }
                _cleanMediaKeys(e, t = this._emeManager) {
                    return t ? t.removeMediaKeys(e).catch(e => (tL.warn("Failed to remove current media keys.", e), null)) : Promise.resolve(null)
                }
                _checkKeySystemAccess() {
                    if (!this._newKeySystemAccessPerTrack || !this._player || !this._emeManager) return Promise.resolve();
                    let e = this._player,
                        t = this._emeManager;
                    return this._cleanMediaKeys(e, t).then(() => t.requestMediaKeySystemAccess()).then(() => {}).catch(e => (tL.warn("Failed to request new media key system access.", e), Promise.reject(e)))
                }
                _createContent(e, t = {
                    manifestLatency: 0,
                    resolveLatency: 0
                }, i = !1) {
                    return (this._emeManager ? this._emeManager.getKeySystemInfo() : this.getMediaConfig().then(e => ({
                        keySystem: eD.J.INVALID_SPOTIFY_KEY,
                        keySystemImpl: "",
                        keySystemLabel: "",
                        audioFormats: e.formatsInfo.audio,
                        videoFormats: e.formatsInfo.video
                    }))).then(i => {
                        var r;
                        return function(e, t) {
                            var i, r, a, n;
                            let s = tR(e, t);
                            switch (e.format) {
                                case p.MP3:
                                    {
                                        let r = null != (i = e.url) ? i : e.resolvedURL;
                                        if (r) return new tl(Object.assign(Object.assign({}, s), {
                                            url: r
                                        })).load();
                                        if (e.fileId) return new tS(Object.assign(Object.assign({}, s), {
                                            fileId: e.fileId,
                                            resolver: t.audioResolver
                                        })).load();
                                        return Promise.reject(new eC(x.I.INVALID_TRACK, `Invalid ${e.format} Track: No url or fileId.`))
                                    }
                                case p.GENERIC_MEDIA:
                                    {
                                        let t = null != (r = e.url) ? r : e.resolvedURL;
                                        if (t) return new tl(Object.assign(Object.assign({}, s), {
                                            url: t
                                        })).load();
                                        return Promise.reject(new eC(x.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`))
                                    }
                                case p.MP4:
                                case p.MP4_DUAL:
                                case p.MP4_CBCS:
                                case p.MP4_FLAC:
                                    {
                                        if (!e.fileId) return Promise.reject(new eC(x.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                                        let i = Object.assign(Object.assign({}, s), {
                                            transport: t.transport,
                                            abrManager: t.abrManager,
                                            fileId: e.fileId,
                                            keySystemSettings: to.v[t.keySystemInfo.keySystem],
                                            resolver: t.audioResolver,
                                            fileFormat: e.fileFormat,
                                            preloadedManifest: e.preloadedManifest,
                                            preresolvedURL: null != (a = e.url) ? a : e.resolvedURL
                                        });
                                        if (t.keySystemInfo.keySystem === eD.J.FAIRPLAY) return new tf(i).load(t.measures);
                                        return new ty(i).load(t.measures)
                                    }
                                case p.MANIFEST_ID:
                                    return tI(e, t);
                                case p.AD_MANIFEST:
                                    {
                                        let i = null != (n = e.url) ? n : e.resolvedURL;
                                        if (!i) return Promise.reject(new eC(x.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`));
                                        return new tb(Object.assign(Object.assign({}, s), {
                                            abrManager: t.abrManager,
                                            transport: t.transport,
                                            manifestURL: i,
                                            preloadedManifest: e.preloadedManifest
                                        })).load(t.measures).then(i => {
                                            let r = i.getManifestId();
                                            return r ? tI(Object.assign(Object.assign({}, e), {
                                                fileId: r,
                                                format: p.MANIFEST_ID
                                            }), t, {
                                                trackingData: i.getTrackingEvents(),
                                                metadata: i.getContentMetadata()
                                            }) : i
                                        })
                                    }
                                default:
                                    return Promise.reject(new eC(x.I.INVALID_TRACK, "Cannot create PlayableContent: Invalid MediaFormat."))
                            }
                        }(e, {
                            transport: this._transport,
                            abrManager: this._abrManager,
                            mediator: this._mediator,
                            keySystemInfo: i,
                            audioResolver: this._audioResolver,
                            videoResolver: this._videoResolver,
                            enableAbrOnElementSize: this._enableAbrOnElementSize,
                            disableCache: this._disableCache,
                            disallowCodec: this._disallowCodec,
                            disallowProfile: this._disallowProfile,
                            allowMixedAVC1Codecs: this._allowMixedAVC1Codecs,
                            playabilityChecker: this._playabilityChecker,
                            measures: t,
                            mediaPlaybackMode: null == (r = e.options) ? void 0 : r.mediaPlaybackMode
                        })
                    }).then(r => {
                        if (i) return r;
                        let a = this._tracker;
                        a.setResolveLatency(t.resolveLatency), a.setManifestLatency(t.manifestLatency);
                        let n = this._getCacheKey(e);
                        return n && this._cache.set(n, r), r
                    })
                }
                _preinitMediaElement() {
                    if (this._player || !this._emeManager) return Promise.resolve(this);
                    let e = (0, B.createAbortControllerLike)();
                    return this._emeManager.getKeySystemInfo().then(t => {
                        var i, r;
                        let a = {
                            audio: null == (i = t.audioFormats[0]) ? void 0 : i.contentType,
                            video: null == (r = t.videoFormats[0]) ? void 0 : r.contentType
                        };
                        return a.audio || a.video ? this._recreateMediaElement(a, a.video ? "video" : "audio", t.keySystem === eD.J.FAIRPLAY ? c.URL : c.MSE, e.signal) : null
                    }).then(() => this, e => (tL.warn("Cannot precreate media element:", null == e ? void 0 : e.message), this))
                }
                _setAudioGain(e) {
                    var t;
                    null == (t = this._audioProcessor) || t.setAudioGain(e.getAudioGain())
                }
                _getCacheKey({
                    fileId: e,
                    url: t,
                    format: i
                }) {
                    var r;
                    let a = !this._disableCache && tC[i],
                        n = null != (r = null != e ? e : t) ? r : null;
                    return a ? n : null
                }
                _getContentPromise(e, t) {
                    let i = this._cache,
                        r = this._getCacheKey(e);
                    if (r) {
                        let a = this._preloadingTracks[r],
                            n = i.get(r);
                        if (a) return tL.info("Waiting for preloading track.", r), a.then(e => (tL.info("Preloading succeeded.", r), t.setResolveLatency(e.resolveLatency), t.setManifestLatency(e.manifestLatency), i.get(r))).catch(() => (tL.info("Preloading failed, creating new track", r), this._createContent(e)));
                        if (n) return this._newKeySystemAccessPerTrack && this._emeManager ? this._emeManager.getKeySystemInfo().then(({
                            keySystem: i
                        }) => {
                            var a;
                            return i === (null == (a = n.getKeySystemInfo()) ? void 0 : a.keySystem) ? (tL.info("Using cached track.", r, n), t.setMemoryCached(!0), n) : (tL.info("Mismatched keysystem for cached track. Creating new track", r), this._createContent(e))
                        }) : (tL.info("Using cached track.", r, n), t.setMemoryCached(!0), Promise.resolve(n))
                    }
                    return tL.info("Creating new content", r), this._createContent(e)
                }
                _adaptVideoBitrateBasedOnVisibility() {
                    if (!this._enableAbrOnVisibilityChange || !e6(this._currentContent)) return;
                    let e = void 0 === this._isVideoVisible || this._isVideoVisible,
                        t = e ? this._preferredBitrate : 1e-32;
                    this._abrManager.overrideBitrate(t), this._currentContent.adapt({
                        backgrounded: !e
                    })
                }
                getMediaSource() {
                    return this._bufferManager.getMediaSource()
                }
                load(e, t, i) {
                    var r, a, n, s, o, l, _, d, u;
                    let h = Date.now(),
                        p = (0, G.X)(),
                        m = (u = t.uriProperty, Object.prototype.hasOwnProperty.call(e, u)) ? t.uriProperty : "uri",
                        E = e[m];
                    if (tL.info("load", E), !E) return Promise.reject(new eC(x.I.PLAYER_CANNOT_FIND_PLAYABLE_URI, "Cannot find a playable URI."));
                    if (!e.logData) return Promise.reject(Error("Invalid track: logging info not specified"));
                    this.stop(e.logData, e.mediaType);
                    let f = null == (r = this._currentContent) ? void 0 : r.getMediaPlaybackMode();
                    this._loaded = !1, this._licenseRequested = !1, this._rebuffering = !1, this._seeking = !1, this._lastReportedPosition = null, this._currentContent = null, this._checkPlayingProfile(null, !0), this._subtitleManager.setVideoContent(null), t.muted && this.setMuted(!0), this._adaptVideoBitrateBasedOnVisibility(), this._preloadThreshold = t.preloadThreshold || this._preloadThreshold;
                    let g = ++this._playId;
                    this._abortController = (0, B.createAbortControllerLike)();
                    let y = this._abortController.signal,
                        v = this._configureLoadingTimeout(y, this._abortController, t.loadingTimeout);
                    void 0 !== v && y.addEventListener("abort", () => clearTimeout(v)), this.emit(eL.J.PLAYER_BEFORE_LOAD, Object.assign({
                        track: e,
                        options: t,
                        logData: e.logData,
                        uri: E
                    }, (0, eB.P)())), this._bufferManager.setPlayId(g);
                    let T = (null == (a = e.options) ? void 0 : a.useDefaultPlaybackSpeed) ? 1 : null != (s = null == (n = e.options) ? void 0 : n.playbackSpeed) ? s : this._playerSpeed,
                        S = {
                            position: (t.position || 0) / 1e3,
                            autoplay: null == (o = t.autoplay) || o,
                            poster: e.poster,
                            useDefaultPlaybackSpeed: !!(null == (l = e.options) ? void 0 : l.useDefaultPlaybackSpeed),
                            playbackSpeed: T,
                            callback: i,
                            muted: null != (_ = t.muted) && _,
                            loop: null != (d = t.loop) && d
                        };
                    this._loadingOptions = S;
                    let P = this._tracker;
                    return P.trackLoadStart({
                        loadTime: h,
                        loadStartMonotonic: p,
                        uri: E,
                        fileId: e.fileId,
                        playId: g.toString(),
                        logData: e.logData,
                        mediaType: e.mediaType,
                        contentType: e.contentType,
                        contentMetadata: e.metadata,
                        isVideoVisible: this._isVideoVisible,
                        videoSurface: this._videoSurface,
                        muted: this._muted,
                        startingSpeed: T,
                        playIntended: S.autoplay,
                        playedThreshold: t.playedThreshold
                    }), this._checkKeySystemAccess().then(() => this._getContentPromise(e, P)).then(t => {
                        var i;
                        if (t.isProtected() && !this._emeManager) throw new eC(x.I.DISALLOW_PROTECTED_TRACK_ERROR, "Protected tracks not supported");
                        let r = t.getMediaPlaybackMode(),
                            a = null == (i = this._player) ? void 0 : i.currentTime;
                        "video" === t.getMediaType() && f !== r && this.emit(eL.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                            playbackMode: null != r ? r : "video",
                            position: tN(a || 0),
                            playbackMetadataStore: P.getPlaybackMetadataStore()
                        }, (0, eB.P)())), t.setLogData(e.logData), t.strategy === c.MSE && P.setCalculatedDuration(tN(t.getCalculatedDuration())), this._upcomingContent = t
                    }).then(() => this._prepareMediaElement(S, y)).then(() => {
                        var e;
                        this._subtitleManager.setPlayer(this._player), (null == (e = this._upcomingContent) ? void 0 : e.isProtected()) && (tL.info("Attaching HTMLMediaElement to the audio processor"), this._audioProcessor.setPlayer(this._player))
                    }).then(() => this._loadContent(S, y)).then(e => this._handleLoadingComplete(e, v), this._handleLoadingError.bind(this, E, e, y, v))
                }
                preload(e) {
                    let t = this._getCacheKey(e),
                        i = this._cache;
                    if (!t || i.get(t) || !this._emeManager) return Promise.resolve(null);
                    let r = this._preloadingTracks,
                        a = r[t];
                    if (a) return a;
                    tL.info("Preloading track", t);
                    let n = {
                            manifestLatency: 0,
                            resolveLatency: 0
                        },
                        s = this._createContent(e, n, !0).then(e => {
                            if (e.strategy !== c.MSE) return e;
                            let t = e.getSegmentForTime(0);
                            if (!t) return e;
                            let i = this._tracker;
                            return i.setProtected(e.isProtected()), i.trackStrategy(e.strategy), i.setContentClass(e.contentClassName), tL.info(`Detecting ${e.strategy} strategy for ${e.contentClassName}.`), e.getBufferSetForSegment(t).then(() => e)
                        }).then(e => (i.set(t, e), delete r[t], tL.info("Cached", t), n)).catch(e => (delete r[t], tL.warn("Preloading error", e), this.emit(eL.J.PLAYER_PRELOADING_ERROR, Object.assign({
                            error: e,
                            track: e.track || null,
                            canPlayNext: !("canPlayNext" in e) || e.canPlayNext,
                            preloading: !0
                        }, (0, eB.P)())), Promise.reject(e)));
                    return r[t] = s, s
                }
                togglePlay() {
                    return this._isPlaying() ? this.pause() : this.resume()
                }
                setSubtitleLanguage(e) {
                    this._subtitleManager.setLanguage(e)
                }
                getSubtitleLanguages() {
                    return this._subtitleManager.getAvailableLanguages()
                }
                getActiveSubtitleLanguage() {
                    return this._subtitleManager.getActiveLanguage()
                }
                deactivateCueEvents() {
                    this._subtitleManager.deactivateListeners()
                }
                activateCueEvents() {
                    this._subtitleManager.activateListeners()
                }
                setVolume(e, t) {
                    var i;
                    if (!this.emitSync(eL.J.PLAYER_BEFORE_VOLUME_CHANGE, Object.assign({
                            volume: e,
                            options: t
                        }, (0, eB.P)())).defaultPrevented) {
                        if (e < 0 || e > 1) throw new eC(x.I.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE, "Volume should be in range [0, 1]");
                        this._playerVolume = e, this._volumeCommandId = null != (i = null == t ? void 0 : t.commandId) ? i : null, this._player && (this._muted && e > 0 && this.setMuted(!1), this._player.volume = this._cubicVolume ? e * e * e : e)
                    }
                }
                getVolume() {
                    return this._playerVolume
                }
                getPlayerState() {
                    var e, t, i, r, a;
                    let n = this._player,
                        s = this._currentContent,
                        o = {
                            src: (null == n ? void 0 : n.src) ? `data:${(null==s?void 0:s.getFileId())||"unknown"}` : void 0,
                            height: (null == n ? void 0 : n.clientHeight) || 0,
                            width: (null == n ? void 0 : n.clientWidth) || 0
                        },
                        l = {};
                    if (s) {
                        let e = s.getMediaTypeMimeTypes();
                        l.audio_format = e.audio, l.video_format = e.video, "video" === s.getMediaType() && n instanceof HTMLVideoElement && (l.video_height = n.videoHeight, l.video_width = n.videoWidth, o.poster = n.poster)
                    }
                    let _ = null;
                    if (e8(s)) {
                        let e = s.getTrackingEvents();
                        e && (_ = {
                            mute: e.mute,
                            unmute: e.unmute,
                            rewind: e.rewind,
                            fullscreen: e.fullscreen,
                            accept_invitation_linear: e.accept_invitation_linear,
                            close_linear: e.close_linear,
                            exit_fullscreen: e.exit_fullscreen
                        })
                    }
                    let d = null != (e = null == s ? void 0 : s.isProtected()) && e,
                        u = null != (t = null == s ? void 0 : s.getKeySystemInfo()) ? t : void 0;
                    return {
                        playing: !!n && !n.paused,
                        position: n ? tN(n.currentTime) : 0,
                        duration: n ? tN(n.duration) : 0,
                        volume: null != (i = this._playerVolume) ? i : 1,
                        muted: this._muted,
                        loop: null != (r = null == n ? void 0 : n.loop) && r,
                        playback_speed: null != (a = null == n ? void 0 : n.playbackRate) ? a : 0,
                        playback_speed_selected: this._playerSpeed,
                        buffering: this._rebuffering,
                        media_type: (null == s ? void 0 : s.getMediaType()) || null,
                        media_info: l,
                        protected: d,
                        protection_info: d ? {
                            keysystem: null == u ? void 0 : u.keySystem,
                            keysystem_impl: null == u ? void 0 : u.keySystemImpl,
                            keysystem_config: null == u ? void 0 : u.keySystemLabel
                        } : {},
                        player_element: o,
                        content_metadata: (null == s ? void 0 : s.getContentMetadata()) || {},
                        tracking_data: _
                    }
                }
                getPlayerPosition() {
                    return this._player ? tN(this._player.currentTime) : 0
                }
                seek(e) {
                    var t;
                    if (!this._player) return;
                    let i = null == (t = this._abortController) ? void 0 : t.signal,
                        r = () => {
                            if (!this._player || (null == i ? void 0 : i.aborted)) return void tL.info("Seek dropped: operation aborted.");
                            let t = e / 1e3;
                            t < 0 ? t = 0 : t >= this._player.duration && (t = this._player.duration), this._seeking || (this._lastReportedPosition = this._player.currentTime), this._player.currentTime = t
                        };
                    this._loaded ? r() : this.once(eL.J.PLAYER_LOAD, r), this._getRebufferingLatency().then(e => {
                        null != i && i.aborted || this._tracker.trackSeekRebuffering(e)
                    })
                }
                pause() {
                    return this._audioProcessor.suspend().then(() => this._player && this._isPlaying() ? (this._emitReporting("pause"), Promise.resolve(this._player.pause())) : Promise.resolve())
                }
                resume() {
                    return this._audioProcessor.resume().then(() => {
                        if (this._player && !this._isPlaying()) {
                            this._emitReporting("resume");
                            let e = tN(this._player.currentTime);
                            return this._tracker.trackPlay(e, this._player.playbackRate), Promise.resolve(this._player.play())
                        }
                        return Promise.resolve()
                    })
                }
                stop(e, t) {
                    var i, r, a;
                    let n = [],
                        s = e || {};
                    this.emit(eL.J.PLAYER_BEFORE_STOP, Object.assign(Object.assign({}, (0, eB.P)()), {
                        logData: s
                    })), null == (i = this._abortController) || i.abort();
                    let o = -1;
                    if (this._player) {
                        let e = this._player.currentTime;
                        this._seeking && this._lastReportedPosition && (e = this._lastReportedPosition), o = tN(e)
                    }
                    this._tracker.trackStopped(o, e, this.getStatistics() || void 0), this._bufferManager.abort(!0), this._emeManager && n.push(this._emeManager.destroySessions());
                    let l = this._player;
                    if (l) {
                        this._subtitleManager.clear(), this._fatalOnNextError = this._shouldNextErrorBeFatal(), this._fatalOnNextError && tL.warn("MediaError detected: next immediate media error will be fatal.");
                        let e = l.src;
                        if (e) tD.test(e) && URL.revokeObjectURL(e), l.removeAttribute("src");
                        else {
                            let e = eF(l.getElementsByTagName("source"));
                            for (let t of (tL.info(`HTMLSourceElements to removed: ${e.length}`), e)) l.removeChild(t);
                            tL.info("Releasing HLS URLs")
                        }
                        l.load()
                    }
                    null == (r = this._currentContent) || r.unload();
                    let _ = this._currentContent && this._currentContent.getMediaType();
                    return l && _ && (null == (a = this._playerContainerManager) || a.eject(l, _, t), l.ownerDocument !== document && document.adoptNode(l)), this.emit(eL.J.PLAYER_STOPPED, Object.assign({}, (0, eB.P)())), Promise.all(n).then(() => !0)
                }
                setMuted(e = !0) {
                    let t = this._player;
                    t && (this._muted = e, t.muted = e, this.emitSync(eL.J.PLAYER_MUTED_CHANGED, Object.assign({
                        muted: e,
                        position: tN(t.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, eB.P)())))
                }
                hideSubtitles() {
                    this._subtitleManager.hide()
                }
                showSubtitles() {
                    this._subtitleManager.show()
                }
                areSubtitlesShown() {
                    return this._subtitleManager.visible()
                }
                getKeySystemInfo() {
                    return this._emeManager ? this._emeManager.getKeySystemInfo() : Promise.resolve(null)
                }
                getVideoVariants() {
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.getMediaType()) !== "video") return [];
                    let t = [];
                    if (!e5(e)) return t;
                    for (let i of e.getMediaProfileInfo().video.available) t.push({
                        width: i.video_width,
                        height: i.video_height,
                        bitrate: i.video_bitrate
                    });
                    return t
                }
                setPreferredBitrate(e) {
                    return "number" != typeof e ? Promise.resolve(h.INVALID) : (this._preferredBitrate = e, this._currentContent && "video" === this._currentContent.getMediaType() && e > 0 && this._bufferManager.abort(!0), this._abrManager.overrideBitrate(e), Promise.resolve(h.SUCCESS))
                }
                getCurrentBandwidth() {
                    return this._abrManager.getBandwidthEstimate()
                }
                setBackgrounded(e) {
                    this.setIsVideoVisible(!e)
                }
                setIsVideoVisible(e) {
                    var t;
                    if (this._isVideoVisible === e) return;
                    let i = null == (t = this._player) ? void 0 : t.currentTime;
                    this._isVideoVisible = e, this._tracker.setIsVideoVisible(e), this.emit(eL.J.PLAYER_VIDEO_VISIBILITY_CHANGED, Object.assign({
                        visible: e,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        position: tN(i || 0)
                    }, (0, eB.P)())), this._adaptVideoBitrateBasedOnVisibility()
                }
                setVideoResolution(e) {
                    var t, i, r;
                    this._videoResolution = Object.assign(Object.assign({}, this._videoResolution), e), (r = this._currentContent) && "setVideoResolution" in r && (null == (i = (t = this._currentContent).setVideoResolution) || i.call(t, this._videoResolution))
                }
                adaptToElementSize(e) {
                    e6(this._currentContent) && this._currentContent.adapt({
                        currentElementSize: e
                    })
                }
                activateElement() {
                    var e;
                    return this._playerActivated || !this._player || this._player.src ? (this._audioProcessor.resume(), !1) : (null == (e = this._player) || e.load(), this._playerActivated = !0, !0)
                }
                getMediaConfig() {
                    return void 0 === this._mediaConfig ? (function(e, t) {
                        let i = t || tw("video"),
                            r = e => {
                                i.canPlayType("audio/mp3") && (e.formats.audio.push("audio/mp3"), e.formatsInfo.audio.push({
                                    mimeType: "audio/mp3",
                                    codec: "mp3",
                                    contentType: 'audio/mp3; codecs="mp3"'
                                }), e.supports.unprotected_audio = !0)
                            };
                        if (e) return e.getKeySystemInfo().then(e => {
                            let {
                                audioFormats: t,
                                videoFormats: i
                            } = e, a = {
                                supports: {
                                    protected_audio: !!t.length,
                                    unprotected_audio: !0,
                                    protected_video: !!i.length,
                                    unprotected_video: !0
                                },
                                formats: {
                                    audio: t.map(e => e.contentType),
                                    video: i.map(e => e.contentType)
                                },
                                formatsInfo: {
                                    audio: [...t],
                                    video: [...i]
                                }
                            };
                            return a.keysystem = e.keySystem, a.keysystem_impl = e.keySystemImpl, a.keysystem_label = e.keySystemLabel, r(a), a
                        });
                        let a = "undefined" != typeof window && window.MediaSource ? e => MediaSource.isTypeSupported(e) : e => "probably" === i.canPlayType(e) || "probably" === i.canPlayType(e.split(";")[0]),
                            n = (0, eM.Z)([ek.J[0]], a),
                            s = [],
                            o = [],
                            l = [],
                            _ = [];
                        if (n) {
                            let {
                                audioCapabilities: e,
                                videoCapabilities: t
                            } = n;
                            for (let t of e) 'audio/mp4; codecs="flac"' !== t.contentType && (s.push(t.contentType), l.push((0, eM.v)(t.contentType)));
                            for (let e of t) o.push(e.contentType), _.push((0, eM.v)(e.contentType))
                        }
                        let d = {
                            supports: {
                                protected_audio: !1,
                                unprotected_audio: !!s.length,
                                protected_video: !1,
                                unprotected_video: !!o.length
                            },
                            formats: {
                                audio: s,
                                video: o
                            },
                            formatsInfo: {
                                audio: l,
                                video: _
                            }
                        };
                        return r(d), Promise.resolve(d)
                    })(this._emeManager, this._player).then(e => (this._mediaConfig = e, this._mediaConfig)) : Promise.resolve(this._mediaConfig)
                }
                setPlaybackSpeed(e) {
                    return !!isFinite(e) && !(e <= 0) && (this._playerSpeed = null != e ? e : 1, this._setPlaybackRate(), !0)
                }
                getStatistics() {
                    return this._player && this._currentContent ? this._statistics.getSample(this._player, this._currentContent) : null
                }
                getAudioProcessor() {
                    return this._audioProcessor
                }
                setMediaPlaybackMode(e) {
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i || "video" !== i.getMediaType() || i.getMediaPlaybackMode() === e) return !1;
                    let r = t.currentTime;
                    return this.emit(eL.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                        playbackMode: e,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        position: tN(r || 0)
                    }, (0, eB.P)())), i.setMediaPlaybackMode(e), !0
                }
                setVideoSurface(e) {
                    var t;
                    if (this._videoSurface === e) return;
                    this._videoSurface = e, this._tracker.setVideoSurface(e);
                    let i = null == (t = this._player) ? void 0 : t.currentTime;
                    this.emit(eL.J.PLAYER_VIDEO_SURFACE_CHANGED, Object.assign({
                        videoSurface: e,
                        position: tN(i || 0),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, eB.P)()))
                }
                getVideoSurface() {
                    return this._videoSurface
                }
                getSeekPanels() {
                    return this._currentContent && e3(this._currentContent) ? this._currentContent.getSeekPanels() : null
                }
            }
            var tU = i(82643);
            let tF = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues;
            class tx extends Error {
                constructor(e, t, i = {}) {
                    super(t), this.debug = {}, this.name = "LoggingError", this.message = t, this.code = e, this.debug = i
                }
            }
            let tB = Z.m.forTag("playback.logger");
            ! function(e) {
                e.FATAL = "Fatal", e.ERROR = "Error", e.WARNING = "Warning"
            }(y || (y = {}));
            class tY extends Y.bk {
                constructor(e) {
                    var t;
                    super(), this._currentTrackingData = null, this._sequenceId = 0, this._sequenceSessionStorage = {}, this._sessionId = "0", this._deviceInfo = {}, this._transport = e.transport, this._logSender = e.logSender, this._player = e.player, this._sdkId = null != (t = e.sdkId) ? t : em.EMPTY, this._init(e)
                }
                static create(e) {
                    return new tY(e)
                }
                _init(e) {
                    let t = this._player;
                    t.on(eL.J.PLAYER_LOAD, this._onPlayerLoad.bind(this)), t.on(eL.J.PLAYER_ERROR, this._onError.bind(this, !1)), t.on(eL.J.PLAYER_WARNING, this._onError.bind(this, !0)), t.on(eL.J.PLAYER_PRELOADING_ERROR, this._onError.bind(this, !1)), t.on(eL.J.PLAYER_TRACKING_DATA_CREATED, this._onTrackingDataCreated.bind(this)), t.on(eL.J.PLAYER_TRACKING_DATA_FINALIZED, this._onTrackingDataFinalized.bind(this)), t.on(eL.J.PLAYER_PLAYBACK_START, this._onPlaybackStart.bind(this)), t.on(eL.J.PLAYER_LOG_CLIENT_EVENT, this._logClientEvent.bind(this)), Promise.resolve(e.deviceInfo).then(e => {
                        e && (this._deviceInfo = e)
                    }).catch(() => {})
                }
                _emitError(e, t) {
                    this.emit(eL.J.LOGGER_ERROR, Object.assign({
                        error: e,
                        trackingData: t
                    }, (0, eB.P)()))
                }
                _onError(e, t) {
                    var i, r, a;
                    let n = t.data,
                        s = this._currentTrackingData;
                    if (!s || s.noLog) return;
                    let o = n.error,
                        l = null != (i = null == o ? void 0 : o.debug) ? i : {};
                    l.position = "position" in n ? n.position : 0;
                    let _ = {
                        track: n.track || {},
                        debug: l,
                        preloading: "preloading" in n && !!n.preloading,
                        session_id: this._sessionId,
                        playback_id: s.playbackId || null,
                        player_play_id: "playId" in n ? n.playId : null,
                        http_status_code: null != (r = null == o ? void 0 : o.status) ? r : null,
                        license_server: null != (a = null == o ? void 0 : o.licenseServer) ? a : null
                    };
                    this._logError(o.code || x.I.UNKNOWN, o, _, s, e), this._logPlaybackError(s, o, _, this._deviceInfo, e)
                }
                _onPlayerLoad(e) {
                    let t = e.data.logData;
                    if (t)
                        if (t.impressionURLs)
                            for (let e of t.impressionURLs) this._logImpression(e);
                        else t.impressionURL && this._logImpression(t.impressionURL)
                }
                _onPlaybackStart(e) {
                    let t = e.data.trackingData;
                    t.noLog || t.noStats || this._logPlaybackStart(t)
                }
                _onTrackingDataCreated(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) {
                        this._currentTrackingData = null;
                        return
                    }
                    this._currentTrackingData = t, this._setSessionId(), t.noTSV || this._setSequenceId()
                }
                _setSessionId() {
                    this._sessionId = this._transport.getInitTime().toString()
                }
                _setSequenceId() {
                    this._sessionId && (this._sequenceId = this._getSequenceId(this._sessionId))
                }
                _onTrackingDataFinalized(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) return;
                    let i = this._sessionId !== this._transport.getInitTime().toString();
                    if (i && this._setSessionId(), t.playbackId && !t.noTSV) {
                        if (i && this._setSequenceId(), !t.playIntended && !t.played) return void this._rollbackSequenceId(this._sessionId);
                        this._logTrackStreamVerification(t)
                    }
                    t.noStats || this._logPlaybackStats(t)
                }
                _logTrackStreamVerification(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        playback_id: e.playbackId,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        next_playback_id: e.nextPlaybackId,
                        playback_service: e.playbackService
                    };
                    tB.debug("Logged TrackStreamVerification", t), this._logSender.logTrackStreamVerification(t).catch(i => {
                        var r, a, n;
                        let s = new tx(x.I.TSV_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _logPlaybackStats(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        internal_play_id: e.internalPlayId,
                        memory_cached: e.memoryCached,
                        persistent_cached: e.persistentCached,
                        audio_format: e.audioCodec || "",
                        video_format: e.videoCodec || "",
                        manifest_id: e.fileId,
                        protected: e.isProtected,
                        key_system: e.keySystem,
                        key_system_impl: e.keySystemImpl,
                        urls_json: JSON.stringify(e.urls),
                        start_time: e.loadTime,
                        end_time: e.stopTime,
                        external_start_time: e.externalLoadTime,
                        ms_play_latency: e.msPlayLatency,
                        ms_init_latency: e.msInitLatency,
                        ms_head_latency: e.msHeadLatency,
                        ms_first_bytes_latency: e.msFirstBytesLatency,
                        ms_manifest_latency: e.msManifestLatency,
                        ms_resolve_latency: e.msResolveLatency,
                        ms_license_session_latency: e.msLicenseSessionLatency,
                        ms_license_generation_latency: e.msLicenseGenerationLatency,
                        ms_license_request_latency: e.msLicenseRequestLatency,
                        ms_license_update_latency: e.msLicenseUpdateLatency,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        ms_file_duration: e.msFileDuration,
                        ms_actual_duration: e.msActualDuration,
                        ms_metadata_duration: e.msMetadataDuration,
                        ms_start_position: e.startPosition,
                        ms_end_position: e.position,
                        ms_initial_rebuffer: e.msInitialRebuffering,
                        ms_seek_rebuffer: e.msSeekRebuffering,
                        ms_seek_rebuffer_longest: e.maxMsSeekRebuffering,
                        ms_stall_rebuffer: e.msStalled,
                        ms_stall_rebuffer_longest: e.maxMsStalled,
                        ms_played_per_surface: e.msPlayedPerSurface,
                        ms_played_visible: e.msPlayedVisible,
                        n_stalls: e.nStalls,
                        n_rendition_upgrade: e.nRenditionUpgrade,
                        n_rendition_downgrade: e.nRenditionDowngrade,
                        bps_bandwidth_max: e.bpsBandwidthMax,
                        bps_bandwidth_min: e.bpsBandwidthMin,
                        bps_bandwidth_avg: e.bpsBandwidthAvg,
                        n_seekback: e.nSeeksBackward,
                        n_seekforward: e.nSeeksForward,
                        audio_start_bitrate: e.audioStartBitrate,
                        video_start_bitrate: e.videoStartBitrate,
                        start_bitrate: e.startBitrate || e.bitrate || 0,
                        audio_quality: e.audioQuality,
                        time_weighted_bitrate: e.timeWeightedBitrate,
                        reason_start: e.reasonStart,
                        reason_end: e.reasonEnd,
                        initially_paused: !e.playIntended,
                        had_error: e.hadError,
                        n_warnings: e.nWarnings,
                        n_navigator_offline: e.nOffline,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        client_id: e.clientId,
                        correlation_id: e.correlationId,
                        n_dropped_video_frames: e.droppedVideoFrames,
                        n_total_video_frames: e.totalVideoFrames,
                        resolution_max: e.maxResolution || 0,
                        resolution_min: e.minResolution || 0,
                        total_bytes: e.totalBytes,
                        strategy: e.strategy
                    };
                    tB.info("Logging PlaybackStats"), this._logSender.logJSSDKPlaybackStats(t).catch(i => {
                        var r, a, n;
                        let s = new tx(x.I.PLAYBACK_STATS_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _logPlaybackStart(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        ms_start_position: e.startPosition,
                        initially_paused: !e.playIntended,
                        client_id: e.clientId,
                        correlation_id: e.correlationId
                    };
                    tB.info("Logging PlaybackStart"), this._logSender.logJSSDKPlaybackStart(t).catch(i => {
                        var r, a, n;
                        let s = new tx(x.I.PLAYBACK_START_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _getSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    return t || (t = 0), t + 1 >= 0x1fffffffffffff && (t = 0), this._sequenceSessionStorage[e] = t + 1, t
                }
                _rollbackSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    t && (this._sequenceSessionStorage[e] = Math.max(t - 1, 0))
                }
                _logImpression(e) {
                    this._transport.request(e, {
                        forget: !0
                    }).catch(function(e) {
                        tB.warn("Unable to send impression request", e)
                    })
                }
                _logClientEvent(e) {
                    let t = {
                        source: e.data.source || em.EMPTY,
                        source_version: z.tagged || em.UNKNOWN,
                        event: e.data.event || em.EMPTY,
                        json_data: JSON.stringify(e.data.payload || {})
                    };
                    this._logSender.logJSSDKClientEvent(t).catch(e => tB.warn("Failed to log client event", t, e))
                }
                _logError(e, t, i, r, a) {
                    let n = {
                        source: "playback",
                        source_version: z.tagged || em.UNKNOWN,
                        type: e || em.UNKNOWN,
                        message: t && t.message || em.EMPTY,
                        stack: '""',
                        json_data: JSON.stringify(i || {}),
                        json_data_version: "1.0.0",
                        client_id: r.clientId,
                        correlation_id: r.correlationId
                    };
                    a ? this._logSender.logJSSDKWarning(n).catch(e => tB.warn("Failed to log warning", n, e)) : this._logSender.logJSSDKError(n).catch(e => tB.warn("Failed to log error", n, e))
                }
                _logPlaybackError(e, t, i, r, a) {
                    let n = y.ERROR;
                    a && (n = y.WARNING), t.unrecoverable && (n = y.FATAL);
                    let {
                        preloading: s,
                        player_play_id: o
                    } = i, l = i && i.debug ? i.debug : {}, {
                        isNetworkRelated: _ = !1,
                        segmentTimeStart: d,
                        segmentTimeEnd: u,
                        segmentByteStart: c,
                        segmentByteEnd: h
                    } = l, p = (0, tU.__rest)(l, ["isNetworkRelated", "segmentTimeStart", "segmentTimeEnd", "segmentByteStart", "segmentByteEnd"]);
                    p.src_url && (p.src_url = void 0);
                    let m = {
                        sdk_id: this._sdkId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        package_version: z.tagged || em.EMPTY_VERSION,
                        feature_identifier: e.featureIdentifier,
                        device_id: r.id || em.EMPTY,
                        device_model: r.model || em.EMPTY,
                        device_brand: r.brand || em.EMPTY,
                        os_name: r.os_name || em.EMPTY,
                        os_version: r.os_version || em.EMPTY,
                        play_track: e.currentTrackUri,
                        content_id: e.fileId,
                        content_class: e.contentClass,
                        content_type: e.contentType,
                        media_type: e.mediaType,
                        position: e.position,
                        strategy: e.strategy,
                        protected: e.isProtected,
                        url: "data:" === e.url.substring(0, 5) ? `${e.url.slice(0,69)}...` : e.url,
                        preloading: s,
                        player_sequence_index: o || void 0,
                        key_system: e.keySystem,
                        key_system_label: e.keySystemLabel,
                        key_system_impl: e.keySystemImpl,
                        segment_byte_start: c,
                        segment_byte_end: h,
                        segment_time_start: d,
                        segment_time_end: u,
                        trace_id: function(e) {
                            let t = "";
                            for (let i = 0; i < e.length; i++) {
                                let r = e[i];
                                r < 16 && (t += "0"), t += r.toString(16)
                            }
                            return t
                        }((e => tF ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                            let t = [];
                            for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                            return t
                        }(e))(Math.ceil(16))),
                        category: t && t.name || em.UNKNOWN,
                        severity: n,
                        code: t && t.code || em.EMPTY,
                        message: t && t.message || em.EMPTY,
                        http_status_code: t && t.status || void 0,
                        license_server: t && t.licenseServer || em.EMPTY,
                        is_network_related: _,
                        debug: Object.keys(p).length > 0 ? p : void 0
                    };
                    this._logSender.logJSSDKPlaybackError(m).catch(t => tB.warn("Failed to log playback error", e, t))
                }
            }
            class tV extends Error {
                constructor(e = x.I.STORAGE_ERROR, t = "Storage Error", i = {}) {
                    super(t), this.status = -1, this.fileId = "", this.debug = {}, this.canPlayNext = !0, this.code = e, this.message = t, this.name = "StorageError", this.debug = i
                }
            }
            let tG = Z.m.forTag("playback.storage_resolve");
            class tj {
                constructor(e) {
                    this._transport = e
                }
                _parseResponse(e, t) {
                    var i;
                    let r;
                    if (200 !== t.status) return (r = new tV(x.I.STORAGE_FAILED_WITH_STATUS, `Storage Resolve responded with ${t.status}`, {
                        isNetworkRelated: !0
                    })).status = t.status, r.fileId = e, Promise.reject(r);
                    let a = t.body;
                    return (null == (i = null == a ? void 0 : a.cdnurl) ? void 0 : i.length) ? Promise.resolve({
                        uri: a.cdnurl[0],
                        uris: a.cdnurl,
                        protection: "cenc"
                    }) : ((r = new tV(x.I.STORAGE_RETURNED_NO_TRACKS, `Storage Resolve returned no tracks for fileId ${e}`)).fileId = e, Promise.reject(r))
                }
                getCDNURL(e, t) {
                    tG.info("Requesting CDN URL for ", e);
                    let i = "files/audio/interactive",
                        r = t ? `v2/${i}/${t}/${e}` : `${i}/${e}`,
                        a = `@webgate/storage-resolve/${r}?version=10000000&product=9&platform=39&alt=json`;
                    return this._transport.request(a, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(this._parseResponse.bind(this, e))
                }
                getManifest(e) {
                    let t = `https://seektables.scdn.co/seektable/${e}.json`;
                    return tG.info("Requesting JSON manifest for ", e), this._transport.request(t, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(t => {
                        let i;
                        return 200 !== t.status ? ((i = new tV(x.I.STORAGE_TRACK_MANIFEST_FAILED, `Track manifest request failed with status code ${t.status}`, {
                            isNetworkRelated: !0
                        })).debug.file_id = e, i.status = t.status, Promise.reject(i)) : t.body ? t.body : ((i = new tV(x.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.")).debug.file_id = e, i.status = t.status, Promise.reject(i))
                    })
                }
            }
            class tH extends Error {
                constructor(e, t) {
                    super(t), this.debug = {}, this.name = "TrackingError", this.message = t, this.code = e
                }
            }
            class tJ {
                constructor() {
                    this._version = "1.0.0", this._map = {}
                }
                clear() {
                    this._map = {}
                }
                track(e, t) {
                    let i = this._map[e];
                    i || (i = {
                        url: e,
                        segments: 0,
                        bandwidths: [],
                        totalBandwidth: 0
                    }, this._map[e] = i), i.segments += 1, i.bandwidths.push(t.bandwidth), i.totalBandwidth += t.bandwidth
                }
                toJSON() {
                    let e = [];
                    for (let t in this._map) {
                        if (!this._map[t]) continue;
                        let i = this._map[t];
                        i && e.push({
                            url: t,
                            segments: i.segments,
                            avg_bw: parseFloat((i.totalBandwidth / i.bandwidths.length).toFixed(7))
                        })
                    }
                    return {
                        version: this._version,
                        urls: e
                    }
                }
            }
            class tq {
                constructor() {
                    this._bitrates = {}, this._isFinalized = !1, this._needsEndSegment = !1, this._segments = [], this._cdnURLTracker = new tJ, this.currentSpeed = 1, this.audioCodec = null, this.bitrate = 0, this.audioQuality = void 0, this.urls = {}, this.url = "", this.currentTrackUri = "", this.displayTrack = "", this.mediaType = "", this.externalLoadTime = 0, this.fileId = "", this.gaiaDevId = "none", this.hadError = !1, this.internalPlayId = "", this.isProtected = !1, this.keySystem = "", this.keySystemImpl = "", this.keySystemLabel = "", this.lastPlayPosition = -1, this.loadTime = 0, this.localTimeMs = -1, this.maxContinuous = 0, this.msInitialRebuffering = 0, this.maxMsSeekRebuffering = 0, this.maxMsStalled = 0, this.memoryCached = !1, this.msActualDuration = 0, this.msMetadataDuration = 0, this.msFileDuration = 0, this.msHeadLatency = null, this.msInitLatency = null, this.msKeyLatency = null, this.msLicenseGenerationLatency = null, this.msLicenseRequestLatency = null, this.msLicenseSessionLatency = null, this.msLicenseUpdateLatency = null, this.msManifestLatency = null, this.msPlayed = 0, this.msNominalPlayed = 0, this.msPlayedUnion = 0, this.msPlayLatency = null, this.msFirstBytesLatency = null, this.msResolveLatency = null, this.msSeekRebuffering = 0, this.msSeeksBackward = 0, this.msSeeksForward = 0, this.nextPlaybackId = "", this.nOffline = 0, this.noLog = !1, this.noTSV = !1, this.noStats = !1, this.nWarnings = 0, this.msStalled = 0, this.nSeeksBackward = 0, this.nSeeksForward = 0, this.nSpeedChanges = 0, this.nStalls = 0, this.nRenditionUpgrade = 0, this.nRenditionDowngrade = 0, this.bpsBandwidthMax = 0, this.bpsBandwidthMin = 0, this.bpsBandwidthAvg = 0, this.totalBandwidth = 0, this.lastBitrate = 0, this.persistentCached = !1, this.playbackId = "", this.playContext = "", this.played = !1, this.position = 0, this.reasonEnd = "unknown", this.reasonStart = "unknown", this.referrer = "unknown", this.referrerVendor = "unknown", this.referrerVersion = "unknown", this.sourceEnd = "unknown", this.sourceStart = "unknown", this.startPosition = 0, this.stopTime = 0, this.streamingRule = "none", this.timeWeightedBitrate = 0, this.totalBytes = 0, this.playIntended = !1, this.audioStartBitrate = null, this.videoStartBitrate = null, this.videoCodec = null, this.clientId = "unknown", this.correlationId = "unknown", this.droppedVideoFrames = 0, this.totalVideoFrames = 0, this.maxResolution = 0, this.minResolution = 0, this.playbackService = "", this.strategy = "", this.segmentTimeStart = null, this.segmentTimeEnd = null, this.segmentByteStart = null, this.segmentByteEnd = null, this.contentClass = "", this.contentType = "unknown", this.featureIdentifier = "", this.msPlayedVisible = 0, this.muted = !1, this.logData = {}, this.msPlayedPerSurface = {}, this.deviceInfo = null
                }
                static create() {
                    return new tq
                }
                _calculateUnion() {
                    let e = this._segments.slice(0),
                        t = 0,
                        i = 0,
                        r = 0,
                        a = 0,
                        n = 0,
                        s = 0,
                        o = this.maxContinuous;
                    for (; n < e.length; n++) n % 2 != 0 && void 0 !== e[n - 1] && "start" === e[n - 1].type && (o = (s = e[n].time - e[n - 1].time) > o ? s : o);
                    for (this.maxContinuous = o, e.sort((e, t) => e.time - t.time); a < e.length; a++) "start" === e[a].type && (0 === i && (r = a), ++i), "end" === e[a].type && 0 == --i && (t += e[a].time - e[r].time);
                    return t
                }
                _calculateWeightedBitrate(e) {
                    let t = this._bitrates,
                        i = 0;
                    for (let r in t) r && Object.prototype.hasOwnProperty.call(t, r) && e > 0 && (i += parseInt(r, 10) * t[r] / e);
                    return Math.round(i)
                }
                registerVideoVariant(e) {
                    var t;
                    let i = null == (t = e.videoProfile) ? void 0 : t.video_bitrate;
                    i && (this._bitrates[i] = this._bitrates[i] || 0, this.startBitrate || (this.startBitrate = i)), e.audioProfile && (this.audioCodec = e.audioProfile.audio_codec, this.audioStartBitrate = e.audioProfile.audio_bitrate), e.videoProfile && (this.videoCodec = e.videoProfile.video_codec, this.videoStartBitrate = e.videoProfile.video_bitrate, this.lastBitrate = e.videoProfile.video_bitrate, this.minResolution = e.videoProfile.video_resolution, this.maxResolution = e.videoProfile.video_resolution)
                }
                addStartSegment() {
                    this._segments.push({
                        type: "start",
                        time: this.position
                    }), this._needsEndSegment = !0
                }
                addEndSegment() {
                    this._needsEndSegment && (this._segments.push({
                        type: "end",
                        time: this.position
                    }), this._needsEndSegment = !1)
                }
                addMSPlayed(e) {
                    if (!e) return;
                    if (e < 0) throw TypeError(`Cannot add negative msNominalPlayed value: ${e}`);
                    let t = e / this.currentSpeed;
                    this.msPlayed += t, this.msNominalPlayed += e, this.isVideoVisible && "video" === this.mediaType && (this.msPlayedVisible += t, this.videoSurface && (this.msPlayedPerSurface[this.videoSurface] = (this.msPlayedPerSurface[this.videoSurface] || 0) + t))
                }
                addSpeedChange(e) {
                    ++this.nSpeedChanges, this.currentSpeed = e
                }
                trackBitrate(e, t) {
                    let i = e || "dummy";
                    this._bitrates[i] = this._bitrates[i] || 0, this._bitrates[i] += t
                }
                trackBufferURL(e, t) {
                    let i = e.substring(0, 5);
                    "data:" !== i && "blob:" !== i && this._cdnURLTracker.track(e, t)
                }
                finalize() {
                    if (this._isFinalized) throw new tH(x.I.TRACK_DATA_ALREADY_FINALIZED, "TrackData already finalized.");
                    this.msPlayedUnion = this._calculateUnion(), this.nSeeksBackward || this.nSeeksForward || this.nSpeedChanges || (this.msNominalPlayed = this.maxContinuous = this.msPlayedUnion, this.msPlayed = this.msNominalPlayed / this.currentSpeed, this.nSpeedChanges = 0);
                    let e = this.msPlayed;
                    return this.timeWeightedBitrate = this._calculateWeightedBitrate(e), this.startBitrate || (this.startBitrate = this.bitrate), this.urls = this._cdnURLTracker.toJSON(), this._isFinalized = !0, !0
                }
                getURLsJSON() {
                    var e, t;
                    return null != (t = null == (e = this._cdnURLTracker.toJSON().urls) ? void 0 : e.map(({
                        url: e
                    }) => e)) ? t : []
                }
                getPlaybackStats() {
                    let e;
                    switch (this.keySystem) {
                        case eD.J.WIDEVINE:
                            e = "widevine";
                            break;
                        case eD.J.PLAYREADY:
                        case eD.J.PLAYREADY_HARDWARE:
                        case eD.J.PLAYREADY_RECOMMENDATION:
                        case eD.J.PLAYREADY_RECOMMENDATION_3000:
                            e = "playready";
                            break;
                        default:
                            e = "none"
                    }
                    return {
                        ms_total_est: this.msActualDuration,
                        ms_metadata_duration: this.msMetadataDuration,
                        ms_manifest_latency: this.msManifestLatency || 0,
                        ms_latency: this.msPlayLatency || 0,
                        ms_first_bytes_latency: this.msFirstBytesLatency || 0,
                        start_offset_ms: this.startPosition,
                        ms_initial_buffering: this.msInitialRebuffering,
                        ms_initial_rebuffer: this.msInitialRebuffering,
                        ms_seek_rebuffering: this.msSeekRebuffering,
                        ms_stalled: this.msStalled,
                        max_ms_seek_rebuffering: this.maxMsSeekRebuffering,
                        max_ms_stalled: this.maxMsStalled,
                        n_stalls: this.nStalls,
                        n_rendition_upgrade: this.nRenditionUpgrade,
                        n_rendition_downgrade: this.nRenditionDowngrade,
                        bps_bandwidth_max: this.bpsBandwidthMax,
                        bps_bandwidth_min: this.bpsBandwidthMin,
                        bps_bandwidth_avg: this.bpsBandwidthAvg,
                        audiocodec: this.audioCodec ? this.audioCodec.toLowerCase() : void 0,
                        videocodec: this.videoCodec ? this.videoCodec.toLowerCase() : void 0,
                        audio_start_bitrate: this.audioStartBitrate,
                        video_start_bitrate: this.videoStartBitrate,
                        start_bitrate: this.startBitrate || this.bitrate || void 0,
                        full_screen: void 0,
                        time_weighted_bitrate: this.timeWeightedBitrate,
                        buffering_percentage: void 0,
                        prefetched_bytes: void 0,
                        prefetched_bytes_loaded: void 0,
                        prefetched_initial_bitrate: void 0,
                        key_system: e,
                        ms_key_latency: this.msKeyLatency || 0,
                        total_bytes: this.totalBytes,
                        local_time_ms: this.localTimeMs,
                        ms_played_background: void 0,
                        n_dropped_video_frames: this.droppedVideoFrames,
                        n_total_video_frames: this.totalVideoFrames,
                        resolution_max: this.maxResolution,
                        resolution_min: this.minResolution,
                        strategy: this.strategy,
                        ms_played_per_surface: this.msPlayedPerSurface,
                        ms_played_visible: this.msPlayedVisible
                    }
                }
                isFinalized() {
                    return this._isFinalized
                }
            }
            class tK {
                constructor() {
                    this._store = {}
                }
                set(e, t) {
                    this._store[e] = t
                }
                get(e) {
                    var t;
                    return null != (t = this._store[e]) ? t : null
                }
            }
            let tQ = Z.m.forTag("playback.tracker");
            class tW extends Y.bk {
                constructor(e = {
                    deviceInfo: null
                }) {
                    super(), this._playedThreshold = 31e3, this._playedThresholdReached = !1, this._trackingData = null, this._playbackMetadataStore = null, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, this._playbackHistory = [], this._deviceInfo = null, this._playedThreshold = e.playerThreshold || 31e3, this._deviceInfo = e.deviceInfo || null
                }
                static create(e) {
                    return new tW(e)
                }
                _checkPlayedThreshold() {
                    let e = this._trackingData;
                    e && this._playedThreshold && !this._playedThresholdReached && !(e.msPlayed < this._playedThreshold) && (this._playedThresholdReached = !0, this.emit(eL.J.TRACKER_PLAYED_THRESHOLD_REACHED, {
                        played: e && e.msPlayed || 0,
                        threshold: this._playedThreshold
                    }))
                }
                _checkPercentileThresholds() {
                    let e = this._trackingData;
                    if (!e) return;
                    let t = e.msActualDuration || e.msFileDuration;
                    if (!t) return;
                    let i = Math.ceil(t / 4);
                    !this._quartileTrackingEvents.firstEventFired && e.position >= i && (this._quartileTrackingEvents.firstEventFired = !0, this.emit(eL.J.TRACKER_FIRST_QUARTILE, null)), !this._quartileTrackingEvents.midEventFired && e.position >= 2 * i && (this._quartileTrackingEvents.midEventFired = !0, this.emit(eL.J.TRACKER_MIDPOINT, null)), !this._quartileTrackingEvents.thirdEventFired && e.position >= 3 * i && (this._quartileTrackingEvents.thirdEventFired = !0, this.emit(eL.J.TRACKER_THIRD_QUARTILE, null))
                }
                getMSPlayed() {
                    return this._trackingData ? this._trackingData.msPlayed : 0
                }
                getStallsInformation() {
                    return this._trackingData ? {
                        nStalls: this._trackingData.nStalls,
                        msTotalStalled: this._trackingData.msStalled
                    } : {
                        nStalls: 0,
                        msTotalStalled: 0
                    }
                }
                trackLoadStart(e) {
                    var t;
                    let i = tq.create();
                    this._trackingData = i, this._playbackMetadataStore = new tK, this._playedThresholdReached = !1, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, i.fileId = null != (t = e.fileId) ? t : "", i.currentTrackUri = e.uri, i.loadTime = e.loadTime, i.loadStartMonotonic = e.loadStartMonotonic, i.internalPlayId = e.playId, i.playIntended = e.playIntended, i.contentType = e.contentType || "unknown", i.currentSpeed = e.startingSpeed || 0, this._playedThreshold = e.playedThreshold;
                    let r = e.logData;
                    i.externalLoadTime = r.externalLoadTime || 0, i.playbackId = r.playbackId || "", i.reasonStart = r.reason || "unknown", i.sourceStart = r.source || "unknown", i.clientId = r.clientId || "", i.correlationId = r.correlationId || "", i.playbackService = r.playbackService || "", i.featureIdentifier = r.featureIdentifier || "";
                    let a = r.referrer || {};
                    i.referrer = void 0 !== a.name ? a.name : "unknown", i.referrerVersion = void 0 !== a.version ? a.version : "unknown", i.referrerVendor = void 0 !== a.vendor ? a.vendor : "unknown";
                    let n = r.format || {};
                    n.codec && (i.audioCodec = n.codec.toLowerCase());
                    let s = e.mediaType;
                    i.mediaType = s, n.bitrate && ("audio" === s ? i.audioStartBitrate = n.bitrate : "video" === s && (i.videoStartBitrate = n.bitrate), i.bitrate = n.bitrate), n.audioQuality && (i.audioQuality = n.audioQuality), i.isVideoVisible = e.isVideoVisible, i.videoSurface = e.videoSurface, i.muted = e.muted, i.currentSpeed = e.startingSpeed, i.gaiaDevId = r.deviceId || "none", i.noLog = r.noLog || !1, i.noTSV = r.noTSV || !1, i.noStats = r.noStats || !1, i.logData = r, i.deviceInfo = this._deviceInfo;
                    let o = e.contentMetadata;
                    i.contentMetadata = o, "number" == typeof(null == o ? void 0 : o.displayDuration) && (i.msMetadataDuration = o.displayDuration), this.emit(eL.J.TRACKER_TRACKING_DATA_CREATED, Object.assign({
                        trackingData: i,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, eB.P)()))
                }
                trackBufferLoadStart() {
                    let e = this._trackingData;
                    e && (e.bufferLoadStartMonotonic = (0, G.X)())
                }
                trackBytesDownloaded(e) {
                    let t = this._trackingData;
                    t && (t.totalBytes += e)
                }
                trackLoadDone(e) {
                    let t = this._trackingData;
                    t && (t.bufferLoadStartMonotonic && (t.msInitLatency = (0, G.r)(t.bufferLoadStartMonotonic)), t.localTimeMs = Date.now(), t.position = e, t.addStartSegment())
                }
                trackPlay(e, t) {
                    let i = this._trackingData;
                    i && (i.played || this.emit(eL.J.TRACKER_PLAYBACK_START, {
                        trackingData: i
                    }), i.played = !0, i.position = e, i.startPosition = e, i.addSpeedChange(t || 1))
                }
                trackCanPlayThrough() {
                    if (!this._trackingData) return;
                    let e = (0, G.X)();
                    this.trackHeadLatency(e)
                }
                trackPlayLatency(e = (0, G.X)()) {
                    let t = this._trackingData;
                    t && !t.nSeeksBackward && !t.nSeeksForward && t.loadStartMonotonic && (t.msPlayLatency = (0, G.r)(t.loadStartMonotonic, e))
                }
                trackHeadLatency(e = (0, G.X)()) {
                    let t = this._trackingData;
                    t && t.bufferLoadStartMonotonic && (t.msHeadLatency = (0, G.r)(t.bufferLoadStartMonotonic, e))
                }
                trackFirstBytesLatency(e = (0, G.X)()) {
                    let t = this._trackingData;
                    t && t.loadStartMonotonic && (t.msFirstBytesLatency = (0, G.r)(t.loadStartMonotonic, e))
                }
                trackBufferURL(e, t) {
                    let i = this._trackingData;
                    i && i.trackBufferURL(e, t)
                }
                trackNavigatorOffline() {
                    let e = this._trackingData;
                    e && (e.nOffline += 1)
                }
                trackInitialRebuffering(e) {
                    let t = this._trackingData;
                    t && (t.msInitialRebuffering = e)
                }
                trackSeekRebuffering(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsSeekRebuffering && (t.maxMsSeekRebuffering = e), t.msSeekRebuffering += e)
                }
                trackMsStalled(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsStalled && (t.maxMsStalled = e), t.msStalled += e, t.nStalls++)
                }
                trackLoadFailed() {
                    let e = this._trackingData;
                    e && (this.trackPlayLatency(), e.position = 0, e.addStartSegment())
                }
                trackStopped(e, t, i) {
                    var r, a, n, s;
                    let o = this._trackingData;
                    if (!o || o.isFinalized()) return;
                    if (o.stopTime = Date.now(), o.lastPlayPosition >= 0 && e >= 0 && o.lastPlayPosition < e) {
                        let t = e - o.lastPlayPosition;
                        o.addMSPlayed(t)
                    }
                    o.addEndSegment(), o.sourceEnd = t.source || "unknown", o.reasonEnd = t.reason || "unknown", o.nextPlaybackId = t.playbackId || "", o.droppedVideoFrames = null != (a = null == (r = null == i ? void 0 : i.video) ? void 0 : r.droppedVideoFrames) ? a : 0, o.totalVideoFrames = null != (s = null == (n = null == i ? void 0 : i.video) ? void 0 : n.totalVideoFrames) ? s : 0, o.finalize(), tQ.info("Tracker data finalized.");
                    let l = o.getPlaybackStats();
                    this.emit(eL.J.TRACKER_TRACKING_DATA_FINALIZED, Object.assign({
                        trackingData: o,
                        playbackStats: l,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, eB.P)())), "" !== o.playbackId && -1 !== this._playbackHistory.indexOf(o.playbackId) && this.emit(eL.J.TRACKER_LOG_CLIENT_EVENT, {
                        source: "playback:tracker",
                        event: "playback_id_reuse",
                        payload: {
                            playbackId: o.playbackId,
                            playbackHistory: [...this._playbackHistory]
                        }
                    }), 10 === this._playbackHistory.length && (this._playbackHistory = this._playbackHistory.slice(1)), this._playbackHistory.push(o.playbackId)
                }
                trackPositionChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let i = t.position;
                    e !== i && (t.addEndSegment(), e > i ? (t.nSeeksForward++, t.msSeeksForward += e - i) : e < i && (t.nSeeksBackward++, t.msSeeksBackward += i - e), t.position = e, t.lastPlayPosition = -1, t.addStartSegment())
                }
                trackPlaying(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackPaused(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackProgress(e, t) {
                    let i = this._trackingData;
                    if (!(null == i ? void 0 : i.played)) return;
                    let r = 0;
                    if (i.lastPlayPosition >= 0) {
                        if ((r = e - i.lastPlayPosition) < 0) return void tQ.warn("Skipping msPlayed calculation: late progress event.");
                        i.addMSPlayed(r)
                    }
                    this._checkPlayedThreshold(), i.position = e, i.lastPlayPosition = e, this._checkPercentileThresholds(), t && i.trackBitrate(t, r)
                }
                trackSpeedChanged(e) {
                    let t = this._trackingData;
                    t && t.addSpeedChange(e)
                }
                trackVideoLoadStart(e) {
                    let t = this._trackingData;
                    t && t.registerVideoVariant(e)
                }
                trackWarning() {
                    let e = this._trackingData;
                    e && e.nWarnings++
                }
                trackOffline() {
                    let e = this._trackingData;
                    e && e.nOffline++
                }
                trackStrategy(e) {
                    let t = this._trackingData;
                    t && (t.strategy = e)
                }
                setActualDuration(e) {
                    let t = this._trackingData;
                    t && (t.msActualDuration = e)
                }
                setKeySystem(e) {
                    let t = this._trackingData;
                    t && (t.keySystem = e)
                }
                setKeySystemImpl(e) {
                    let t = this._trackingData;
                    t && (t.keySystemImpl = e)
                }
                setManifestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msManifestLatency = e)
                }
                setKeyLatency(e) {
                    let t = this._trackingData;
                    t && (t.msKeyLatency = e)
                }
                setMemoryCached(e) {
                    let t = this._trackingData;
                    t && (t.memoryCached = e)
                }
                setPersistentCached(e) {
                    let t = this._trackingData;
                    t && (t.persistentCached = e)
                }
                setProtected(e) {
                    let t = this._trackingData;
                    t && (t.isProtected = e)
                }
                setHadError(e) {
                    let t = this._trackingData;
                    t && (t.hadError = e)
                }
                setLicenseSessionLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseSessionLatency = e)
                }
                setLicenseGenerationLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseGenerationLatency = e)
                }
                setLicenseRequestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseRequestLatency = e)
                }
                setLicenseUpdateLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseUpdateLatency = e)
                }
                setResolveLatency(e) {
                    let t = this._trackingData;
                    t && (t.msResolveLatency = e)
                }
                setCalculatedDuration(e) {
                    let t = this._trackingData;
                    t && (t.msFileDuration = e)
                }
                setVideoSurface(e) {
                    this._trackingData && (this._trackingData.videoSurface = e)
                }
                setIsVideoVisible(e) {
                    this._trackingData && (this._trackingData.isVideoVisible = e)
                }
                trackFragment(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bandwidth: i,
                        resolution: r
                    } = e;
                    r && ((r < t.minResolution || !t.minResolution) && (t.minResolution = r), r > t.maxResolution && (t.maxResolution = r)), (i < t.bpsBandwidthMin || !t.bpsBandwidthMin) && (t.bpsBandwidthMin = i), i > t.bpsBandwidthMax && (t.bpsBandwidthMax = i), t.bpsBandwidthAvg = t.bpsBandwidthAvg ? (t.bpsBandwidthAvg + i) / 2 : i
                }
                trackProfileChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bitrate: i
                    } = e;
                    i < t.lastBitrate && t.nRenditionDowngrade++, i > t.lastBitrate && t.nRenditionUpgrade++, t.lastBitrate = i
                }
                setContentClass(e) {
                    let t = this._trackingData;
                    t && (t.contentClass = e)
                }
                setKeySystemLabel(e) {
                    let t = this._trackingData;
                    t && (t.keySystemLabel = e)
                }
                setUrl(e) {
                    let t = this._trackingData;
                    t && (t.url = e)
                }
                setMediaType(e) {
                    let t = this._trackingData;
                    t && (t.mediaType = e)
                }
                setContentType(e = "unknown") {
                    let t = this._trackingData;
                    t && (t.contentType = e)
                }
                getPlaybackMetadataStore() {
                    return this._playbackMetadataStore
                }
            }
            class t$ extends Y.bk {
                constructor(e) {
                    super(), this._transport = e, this._parseManifestResponse = this._parseManifestResponse.bind(this)
                }
                static create(e) {
                    return new t$(e)
                }
                _parseManifestResponse(e) {
                    var t;
                    let i = e.metadata.startTime;
                    if (200 !== e.status) {
                        let t = new tV(x.I.STORAGE_VIDEO_MANIFEST_FAILED, `Video manifest request failed with status ${e.status}`, {
                            isNetworkRelated: !0
                        });
                        return t.status = e.status, t.debug = e.body, this.emit(eL.J.VIDEO_MANIFEST_RESOLVE_FAILED, Object.assign({
                            url: e.url,
                            error: t,
                            start_time: i
                        }, (0, eB.P)())), Promise.reject(t)
                    }
                    let r = e.body,
                        a = null == (t = e.headers) ? void 0 : t.get("content-length");
                    return this.emit(eL.J.VIDEO_MANIFEST_RESOLVED, Object.assign({
                        url: e.url,
                        manifest_size: a ? parseInt(a, 10) : JSON.stringify(r).length,
                        start_time: i,
                        end_time: Date.now()
                    }, (0, eB.P)())), Promise.resolve(r)
                }
                getInitSegmentURLs(e, t, i, r) {
                    let a = "";
                    i && (a = e + t.replace("{{profile_id}}", i.id.toString(10)).replace("{{file_type}}", i.file_type));
                    let n = "";
                    return r && (n = e + t.replace("{{profile_id}}", r.id.toString(10)).replace("{{file_type}}", r.file_type)), {
                        audio: a,
                        video: n,
                        audioLogging: a,
                        videoLogging: n
                    }
                }
                getSegmentURLs(e, t, i, r, a) {
                    let n = "";
                    r && (n = e + t.replace("{{profile_id}}", r.id.toString(10)).replace("{{file_type}}", r.file_type));
                    let s = "";
                    return a && (s = e + t.replace("{{profile_id}}", a.id.toString(10)).replace("{{file_type}}", a.file_type)), {
                        audio: n.replace("{{segment_timestamp}}", i.toString()),
                        video: s.replace("{{segment_timestamp}}", i.toString()),
                        audioLogging: n,
                        videoLogging: s
                    }
                }
                getManifest(e, t = !1) {
                    let i = `${t?"@webgate/manifests/v9/unauth/json/sources":"@webgate/manifests/v9/json/sources"}/${e}/options/supports_drm`;
                    return this._transport.request(i, {
                        authorize: !t,
                        responseType: "json",
                        parseResponseHeaders: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        },
                        metadata: {
                            startTime: Date.now()
                        }
                    }).then(this._parseManifestResponse)
                }
            }
            var tz = i(6606);
            class tX extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "LicenseError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t, i = {}) {
                    let r = new tX(e, t, i);
                    return r.unrecoverable = !0, r.canPlayNext = !1, r
                }
            }
            class tZ {
                constructor(e) {
                    this._sdk = {
                        name: "",
                        version: ""
                    }, this._securityLevel = null, this._urls = {}, e.sdk && (this._sdk = e.sdk), e.securityLevel && (this._securityLevel = e.securityLevel), this._transport = e.transport, this._useTestLicenseServer = !!e.useTestLicenseServer, this._transport.on(this._transport.EVENT_CONNECTION_ID, () => {
                        this._urls = {}
                    })
                }
                _getFallbackLicenseURL(e, t) {
                    switch (e) {
                        case eD.J.WIDEVINE:
                            return `@webgate/${this._useTestLicenseServer?"widevine-license-test":"widevine-license"}/v1/${t}/license`;
                        case eD.J.PLAYREADY_RECOMMENDATION:
                        case eD.J.PLAYREADY_RECOMMENDATION_3000:
                        case eD.J.PLAYREADY_HARDWARE:
                        case eD.J.PLAYREADY:
                            return `@webgate/playready-license/v1/${t}/license/{contentId}`;
                        case eD.J.FAIRPLAY:
                            return `@webgate/fairplay-license/v1/${t}/license`;
                        default:
                            return
                    }
                }
                get(e, t) {
                    let i = `${e}:${t}`,
                        r = this._urls[i];
                    if (r && r.expires > Date.now() + 6e4) return Promise.resolve(r.uri);
                    let a = this._useTestLicenseServer ? "&use_test_license_server=true" : "",
                        n = (() => {
                            switch (e) {
                                case eD.J.PLAYREADY_HARDWARE:
                                case eD.J.PLAYREADY_RECOMMENDATION:
                                case eD.J.PLAYREADY_RECOMMENDATION_3000:
                                    return eD.J.PLAYREADY;
                                default:
                                    return e
                            }
                        })(),
                        s = `@webgate/melody/v1/license_url?keysystem=${n}&mediatype=${t}&sdk_name=${this._sdk.name}&sdk_version=${this._sdk.version}${a}`;
                    return this._transport.request(s, {
                        responseType: "json",
                        signal: (0, B.createAbortSignalWithTimeout)(1e3),
                        retry: {
                            condition: e => {
                                let t = e.getStatusFamily();
                                return 429 === e.status || t === tz.t.SERVER_ERROR || t === tz.t.CONNECTION_ERROR
                            }
                        }
                    }).then(r => {
                        let a, n = r.body;
                        if (n && 200 === r.status) return n.expires *= 1e3, n.uri = `@webgate/${n.uri}`, this._securityLevel && (n.uri += (-1 !== n.uri.indexOf("?") ? "&" : "?") + "sl=" + this._securityLevel), this._urls[i] = n, n.uri;
                        if (n)
                            if (400 === r.status && n && "deprecated-version" === n.code) a = tX.fatal(x.I.LICENSE_RESOLVER_DEPRECATED_VERSION, "This version of the SDK is no longer supported. Please upgrade");
                            else if (r.getStatusFamily() === tz.t.SERVER_ERROR) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            a = new tX(x.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        } else a = new tX(x.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `License URL endpoint responded with status ${r.status}`, {
                            isNetworkRelated: !0
                        });
                        else a = tX.fatal(x.I.LICENSE_RESOLVE_INVALID_RESPONSE, "License URL endpoint responded with invalid response");
                        return a.status = r.status, Promise.reject(a)
                    }, i => {
                        if (i.code === B.TransportErrors.HTTP_REQUEST_TIMEOUT) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            new tX(x.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        }
                        return Promise.reject(new tX(x.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, "License URL endpoint request failed", {
                            isNetworkRelated: !0
                        }))
                    })
                }
                remove(e, t) {
                    this._urls[`${e}:${t}`] = null
                }
            }
            class t0 {
                constructor(e) {
                    this._melodyLogger = new eg(e)
                }
                logTrackStreamVerification(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "track_stream_verification",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStats(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_stats",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStart(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_start",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKWarning(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_warning",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKClientEvent(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "client_event",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
            }! function(e) {
                e[e.ABORTED = 101] = "ABORTED", e[e.NETWORK = 102] = "NETWORK", e[e.MEDIA_DECODING = 103] = "MEDIA_DECODING", e[e.SRC_NOT_SUPPORTED = 104] = "SRC_NOT_SUPPORTED", e[e.EME = 105] = "EME", e[e.GENERIC = 100] = "GENERIC"
            }(v || (v = {}));
            let t1 = {
                [x.I.MEDIA_ABORTED]: v.ABORTED,
                [x.I.MEDIA_DECODING_ERROR]: v.MEDIA_DECODING,
                [x.I.MEDIA_NOT_SUPPORTED]: v.SRC_NOT_SUPPORTED,
                [x.I.MEDIA_NETWORK_ERROR]: v.NETWORK
            };

            function t2(e) {
                var t;
                let i = e.match(/^https?:\/\/([^/]+@)?([^/?#]+)/);
                return null != (t = null == i ? void 0 : i[2]) ? t : ""
            }! function(e) {
                e.READY = "playerready", e.VIDEO_CHANGE = "videochange", e.PLAY = "play", e.PLAYING = "playing", e.PAUSE = "pause", e.TIMEUPDATE = "timeupdate", e.SEEKING = "seeking", e.SEEKED = "seeked", e.ERROR = "error", e.ENDED = "ended", e.RENDITION_CHANGE = "renditionchange", e.REBUFFERSTART = "rebufferstart", e.REBUFFEREND = "rebufferend", e.REQUEST_COMPLETED = "requestcompleted", e.REQUEST_FAILED = "requestfailed", e.REQUEST_CANCELED = "requestcanceled"
            }(T || (T = {})),
            function(e) {
                e.MUSIC_VIDEO = "Music Video", e.VODCAST = "Video Podcast", e.AD = "Ad"
            }(S || (S = {}));
            let t4 = {
                    episode: S.VODCAST,
                    track: S.MUSIC_VIDEO,
                    ad: S.AD
                },
                t3 = {
                    player_is_paused: !0,
                    player_width: 0,
                    player_height: 0,
                    video_source_height: 0,
                    video_source_width: 0,
                    player_is_fullscreen: void 0,
                    player_autoplay_on: void 0,
                    player_preload_on: void 0,
                    video_source_url: void 0,
                    video_source_mime_type: void 0,
                    video_source_duration: void 0,
                    video_poster_url: void 0,
                    player_language_code: void 0
                };
            class t5 {
                constructor(e) {
                    this._playerId = `spotify-playback-${Date.now()}`, this._currentContentInfo = null, this._readyDeferred = (0, V.u)(), this._isMuxInitialized = !1, this._muxInitData = null, this._player = e.player, this._mux = e.mux, this._getPlayheadTime = this._getPlayheadTime.bind(this), this._getStateData = this._getStateData.bind(this), this._init(e)
                }
                static create(e) {
                    return new t5(e)
                }
                _init(e) {
                    Promise.all([Promise.resolve(e.deviceInfo)]).then(([t]) => {
                        var i;
                        this._muxInitData = {
                            data: Object.assign({
                                env_key: e.envKey || "2qbjhhcl4u87btjbo7dh8vi2n",
                                player_name: null != (i = null == t ? void 0 : t.platform_name) ? i : null == t ? void 0 : t.platform,
                                player_version: null == t ? void 0 : t.version,
                                viewer_device_manufacturer: null == t ? void 0 : t.brand,
                                viewer_device_category: null == t ? void 0 : t.type,
                                viewer_device_name: null == t ? void 0 : t.model,
                                player_software_name: e.sdk || "spotify-playback",
                                player_software_version: e.sdkVersion || z.version,
                                player_mux_plugin_name: "spotify-playback-mux-reporter",
                                player_mux_plugin_version: z.version
                            }, e.muxCustomDimensions),
                            getPlayheadTime: this._getPlayheadTime,
                            getStateData: this._getStateData,
                            disablePlayheadRebufferTracking: !0
                        }, this._player.addListeners({
                            [eL.J.PLAYER_BEFORE_LOAD]: this._onBeforeLoad.bind(this),
                            [eL.J.PLAYER_PLAY]: this._onPlay.bind(this),
                            [eL.J.PLAYER_PLAYING]: this._onPlaying.bind(this),
                            [eL.J.PLAYER_PAUSED]: this._onPause.bind(this),
                            [eL.J.PLAYER_PROGRESS]: this._onProgress.bind(this),
                            [eL.J.PLAYER_SEEKING]: this._onSeeking.bind(this),
                            [eL.J.PLAYER_POSITION_CHANGED]: this._onPositionChanged.bind(this),
                            [eL.J.PLAYER_ERROR]: this._onError.bind(this),
                            [eL.J.PLAYER_ENDED]: this._onEnded.bind(this),
                            [eL.J.PLAYER_DURATION_CHANGED]: this._onDurationChanged.bind(this),
                            [eL.J.PLAYER_VIDEO_RESIZED]: this._onVideoResized.bind(this),
                            [eL.J.PLAYER_VIDEO_PROFILE_CHANGED]: this._onVideoProfileChanged.bind(this),
                            [eL.J.PLAYER_FRAGMENT_FETCHED]: this._onFragmentFetched.bind(this),
                            [eL.J.PLAYER_FRAGMENT_FETCH_ERROR]: this._onFragmentFetchError.bind(this),
                            [eL.J.PLAYER_VIDEO_MANIFEST_RESOLVED]: this._onVideoManifestResolved.bind(this),
                            [eL.J.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED]: this._onVideoManifestResolveFailed.bind(this),
                            [eL.J.PLAYER_REBUFFERING_START]: this._onRebufferingStart.bind(this),
                            [eL.J.PLAYER_REBUFFERING_END]: this._onRebufferingEnd.bind(this)
                        })
                    }).then(this._readyDeferred.resolve, this._readyDeferred.reject)
                }
                _getPlayheadTime() {
                    return this._player.getPlayerPosition()
                }
                _getStateData() {
                    return this._currentContentInfo ? Object.assign(Object.assign({}, this._currentContentInfo.stateData), {
                        player_language_code: this._player.getActiveSubtitleLanguage()
                    }) : null
                }
                _onDurationChanged(e) {
                    this._currentContentInfo && (this._currentContentInfo.stateData.video_source_duration = e.data.duration)
                }
                _onVideoResized(e) {
                    this._currentContentInfo && (this._currentContentInfo.stateData.player_width = e.data.width, this._currentContentInfo.stateData.player_height = e.data.height)
                }
                _onBeforeLoad(e) {
                    let {
                        track: t,
                        options: i,
                        logData: r
                    } = e.data, a = !!this._currentContentInfo;
                    if ("video" !== t.mediaType || (null == r ? void 0 : r.noLog) || (null == r ? void 0 : r.noMuxEvents)) {
                        a && this._mux.emit(this._playerId, T.VIDEO_CHANGE, {}), this._currentContentInfo = null;
                        return
                    }
                    let n = {
                            video_id: t.fileId,
                            video_title: (null == r ? void 0 : r.displayTitle) || void 0,
                            video_series: (null == r ? void 0 : r.displayGroup) || void 0,
                            video_duration: (null == r ? void 0 : r.displayDuration) || void 0
                        },
                        s = t.logData.uriType;
                    s && s in t4 && (n.video_content_type = t4[s] || void 0);
                    let o = Object.assign({}, t3);
                    this._currentContentInfo = {
                        track: t,
                        options: i,
                        videoData: n,
                        stateData: o
                    }, !this._isMuxInitialized && this._muxInitData ? (this._mux.init(this._playerId, this._muxInitData), this._mux.emit(this._playerId, T.READY), this._isMuxInitialized = !0) : a && this._mux.emit(this._playerId, T.VIDEO_CHANGE, n)
                }
                _onPlay() {
                    var e, t;
                    if (!this._currentContentInfo) return;
                    let i = this._currentContentInfo.stateData,
                        r = this._player.getPlayerState(),
                        a = r.media_info,
                        n = (null == (t = null == (e = this._currentContentInfo) ? void 0 : e.options) ? void 0 : t.autoplay) || !1,
                        {
                            width: s,
                            height: o,
                            src: l,
                            poster: _
                        } = r.player_element;
                    i.player_is_paused = !r.playing, i.player_width = s || 0, i.player_height = o || 0, i.video_source_height = a.video_height || 0, i.video_source_width = a.video_width || 0, i.player_autoplay_on = n, i.video_source_url = l, i.video_source_mime_type = a.video_format, i.video_source_duration = r.duration, i.video_poster_url = _, this._mux.emit(this._playerId, T.PLAY, this._currentContentInfo.videoData)
                }
                _onPlaying() {
                    if (!this._currentContentInfo) return;
                    this._currentContentInfo.stateData.player_is_paused = !1;
                    let {
                        buffering: e
                    } = this._player.getPlayerState();
                    e || this._mux.emit(this._playerId, T.PLAYING)
                }
                _onPause() {
                    this._currentContentInfo && (this._currentContentInfo.stateData.player_is_paused = !0, this._mux.emit(this._playerId, T.PAUSE))
                }
                _onProgress(e) {
                    this._currentContentInfo && this._mux.emit(this._playerId, T.TIMEUPDATE, {
                        player_playhead_time: e.data.position
                    })
                }
                _onSeeking() {
                    this._currentContentInfo && this._mux.emit(this._playerId, T.SEEKING)
                }
                _onPositionChanged() {
                    this._currentContentInfo && this._mux.emit(this._playerId, T.SEEKED)
                }
                _onError(e) {
                    var t, i;
                    let r = null == (i = null == (t = e.data) ? void 0 : t.error) ? void 0 : i.code;
                    if (this._currentContentInfo && r) {
                        let e;
                        this._mux.emit(this._playerId, T.ERROR, {
                            player_error_code: (e = t1[r], /_REQUEST_|_RESPONSE$/.test(r) ? e = v.NETWORK : e || (e = /^EME_/.test(r) ? v.EME : v.GENERIC), e),
                            player_error_message: r
                        })
                    }
                }
                _onEnded() {
                    this._currentContentInfo && this._mux.emit(this._playerId, T.ENDED)
                }
                _onVideoProfileChanged(e) {
                    if (!this._currentContentInfo) return;
                    let t = e.data.profile,
                        i = this._currentContentInfo.stateData;
                    i.video_source_height = t.height || 0, i.video_source_width = t.width || 0, i.video_source_mime_type = t.mimeType, this._mux.emit(this._playerId, T.RENDITION_CHANGE, {
                        video_source_bitrate: t.bitrate,
                        video_source_width: t.width,
                        video_source_height: t.height
                    })
                }
                _onFragmentFetched(e) {
                    let t = e.data;
                    if (!this._currentContentInfo && "video" !== t.media_type) return;
                    let i = `${t.segment_type}${t.init?"_init":""}`;
                    this._mux.emit(this._playerId, T.REQUEST_COMPLETED, {
                        request_type: i,
                        request_hostname: t2(t.url),
                        request_start: t.start_time,
                        request_response_end: t.end_time,
                        request_bytes_loaded: t.byte_length
                    })
                }
                _onFragmentFetchError(e) {
                    let t = e.data;
                    if (!this._currentContentInfo && "video" !== t.media_type) return;
                    let i = `${t.segment_type}${t.init?"_init":""}`;
                    this._mux.emit(this._playerId, T.REQUEST_FAILED, {
                        request_type: i,
                        request_hostname: t2(t.url),
                        request_start: t.start_time,
                        request_error: t.error.code,
                        request_error_code: t.error.status,
                        request_error_text: ""
                    })
                }
                _onVideoManifestResolved(e) {
                    let t = e.data;
                    this._currentContentInfo && this._mux.emit(this._playerId, T.REQUEST_COMPLETED, {
                        request_type: "manifest",
                        request_hostname: t2(t.url),
                        request_start: t.start_time,
                        request_response_end: t.end_time,
                        request_bytes_loaded: t.manifest_size
                    })
                }
                _onVideoManifestResolveFailed(e) {
                    let t = e.data;
                    this._currentContentInfo && this._mux.emit(this._playerId, T.REQUEST_FAILED, {
                        request_type: "manifest",
                        request_hostname: t2(t.url),
                        request_start: t.start_time,
                        request_error: t.error.code,
                        request_error_code: t.error.status,
                        request_error_text: ""
                    })
                }
                _onRebufferingStart() {
                    this._currentContentInfo && this._mux.emit(this._playerId, T.REBUFFERSTART)
                }
                _onRebufferingEnd() {
                    if (!this._currentContentInfo) return;
                    this._mux.emit(this._playerId, T.REBUFFEREND);
                    let {
                        playing: e
                    } = this._player.getPlayerState();
                    e && this._mux.emit(this._playerId, T.PLAYING)
                }
                ready() {
                    return this._readyDeferred.promise
                }
            }

            function t6(e) {
                return "uri" in e
            }! function(e) {
                e.NULL_VALUE = "NULL_VALUE", e.LIST_START = "LIST_START", e.LIST_END = "LIST_END", e.FORBIDDEN = "FORBIDDEN", e.IGNORE = "IGNORE", e.PAUSE = "PAUSE"
            }(P || (P = {})),
            function(e) {
                e.AAC_LC = "mp4a.40.2", e.AAC_HE = "mp4a.40.5", e.AAC_ALL = "mp4a\\..*", e.FLAC = "flac", e.OPUS = "opus", e.VP9 = "vp9", e.VP8 = "vp8", e.H264_31 = "avc1.4d401f", e.H264_ALL = "avc1\\..*", e.AV1_ALL = "av01\\..*"
            }(b || (b = {})),
            function(e) {
                e.UNKNOWN = "UNKNOWN", e.DEFAULT = "DEFAULT", e.LOW = "LOW", e.NORMAL = "NORMAL", e.HIGH = "HIGH", e.VERY_HIGH = "VERY_HIGH", e.HIFI = "HIFI"
            }(R || (R = {})),
            function(e) {
                e.NONE = "NONE", e.CONTEXT = "CONTEXT", e.TRACK = "TRACK"
            }(I || (I = {})),
            function(e) {
                e.EMPTY = "EMPTY", e.SW_CRYPTO = "SW_CRYPTO", e.SW_DECODE = "SW_DECODE", e.HW_CRYPTO = "HW_CRYPTO", e.HW_DECODE = "HW_DECODE", e.HW_ALL = "HW_ALL"
            }(A || (A = {}));
            class t8 extends Y.bk {
                constructor(e) {
                    if (super(), this._trackPlayerPromise = (0, V.u)(), this._maxListErrors = 5, this._uid = 0, this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this._listPlayCount = 0, this._listErrorCount = 0, this._shuffled = !1, this._repeatMode = I.NONE, this._currentSeqId = 0, !e.trackPlayer) throw TypeError("Argument `options.trackPlayer` not found.");
                    e.maxListErrors && (this._maxListErrors = e.maxListErrors), this._setListOptions = this._setListOptions.bind(this), this._replaceCurrentList = this._replaceCurrentList.bind(this), this._handleCapped = this._handleCapped.bind(this), this._handlePlaying = this._handlePlaying.bind(this), this._handlePaused = this._handlePaused.bind(this), this._handleEnded = this._handleEnded.bind(this), this._handleCanPreload = this._handleCanPreload.bind(this), this._handleError = this._handleError.bind(this), this._handlePositionChanged = this._handlePositionChanged.bind(this), this._handleDurationChanged = this._handleDurationChanged.bind(this), this._handleTimeout = this._handleTimeout.bind(this), this._handlePlayerInitError = this._handlePlayerInitError.bind(this), this._handleProgress = this._handleProgress.bind(this), this._handlePlayedThresholdReached = this._handlePlayedThresholdReached.bind(this), this._handleBeforeLoad = this._handleBeforeLoad.bind(this), this._init(e.trackPlayer)
                }
                static create(e) {
                    return new t8(e)
                }
                _init(e) {
                    this._trackPlayerPromise.promise.catch(() => {}), Promise.resolve(e).then(e => {
                        this._attachPlayerEvents(e), this._trackPlayerPromise.resolve(e)
                    }).catch(this._handlePlayerInitError)
                }
                _attachPlayerEvents(e) {
                    e.addListeners({
                        [eL.J.PLAYER_CAN_PRELOAD]: this._handleCanPreload,
                        [eL.J.PLAYER_CAPPED]: this._handleCapped,
                        [eL.J.PLAYER_ENDED]: this._handleEnded,
                        [eL.J.PLAYER_ERROR]: this._handleError,
                        [eL.J.PLAYER_PAUSED]: this._handlePaused,
                        [eL.J.PLAYER_PLAYING]: this._handlePlaying,
                        [eL.J.PLAYER_TIMEOUT]: this._handleTimeout,
                        [eL.J.PLAYER_POSITION_CHANGED]: this._handlePositionChanged,
                        [eL.J.PLAYER_DURATION_CHANGED]: this._handleDurationChanged,
                        [eL.J.PLAYER_PROGRESS]: this._handleProgress,
                        [eL.J.PLAYER_BEFORE_LOAD]: this._handleBeforeLoad,
                        [eL.J.PLAYER_PLAYED_THRESHOLD_REACHED]: this._handlePlayedThresholdReached
                    }), this.proxyEmitAllSync(e, {
                        [eL.J.PLAYER_BEFORE_VOLUME_CHANGE]: eL.J.LIST_PLAYER_BEFORE_VOLUME_CHANGE,
                        [eL.J.PLAYER_VOLUME_CHANGED]: eL.J.LIST_PLAYER_VOLUME_CHANGED,
                        [eL.J.PLAYER_LOAD]: eL.J.LIST_PLAYER_PLAYER_LOAD,
                        [eL.J.REPORTING_START]: eL.J.REPORTING_START,
                        [eL.J.REPORTING_CREATIVE_VIEW]: eL.J.REPORTING_CREATIVE_VIEW,
                        [eL.J.REPORTING_FIRST_QUARTILE]: eL.J.REPORTING_FIRST_QUARTILE,
                        [eL.J.REPORTING_MIDPOINT]: eL.J.REPORTING_MIDPOINT,
                        [eL.J.REPORTING_THIRD_QUARTILE]: eL.J.REPORTING_THIRD_QUARTILE,
                        [eL.J.REPORTING_COMPLETE]: eL.J.REPORTING_COMPLETE,
                        [eL.J.REPORTING_PAUSE]: eL.J.REPORTING_PAUSE,
                        [eL.J.REPORTING_RESUME]: eL.J.REPORTING_RESUME,
                        [eL.J.REPORTING_ERROR]: eL.J.REPORTING_ERROR
                    }), this.proxyEmitAll(e, {
                        [eL.J.PLAYER_AUTOPLAY_FAILED]: eL.J.LIST_PLAYER_AUTOPLAY_FAILED,
                        [eL.J.PLAYER_TRACKING_DATA_CREATED]: eL.J.LIST_PLAYER_TRACKING_DATA_CREATED,
                        [eL.J.PLAYER_TRACKING_DATA_FINALIZED]: eL.J.LIST_PLAYER_TRACKING_DATA_FINALIZED,
                        [eL.J.PLAYER_BUFFER_STALLED]: eL.J.LIST_PLAYER_BUFFER_STALLED,
                        [eL.J.PLAYER_BUFFERING_START]: eL.J.LIST_PLAYER_BUFFERING_START,
                        [eL.J.PLAYER_BUFFERING_END]: eL.J.LIST_PLAYER_BUFFERING_END,
                        [eL.J.PLAYER_REBUFFERING_START]: eL.J.LIST_PLAYER_REBUFFERING_START,
                        [eL.J.PLAYER_REBUFFERING_END]: eL.J.LIST_PLAYER_REBUFFERING_END,
                        [eL.J.PLAYER_VIDEO_ELEMENT_APPENDED]: eL.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED,
                        [eL.J.PLAYER_VIDEO_ELEMENT_REMOVED]: eL.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED,
                        [eL.J.PLAYER_DISPLAYED_CUES_CHANGED]: eL.J.LIST_PLAYER_DISPLAYED_CUES_CHANGED,
                        [eL.J.PLAYER_VIDEO_PROFILE_CHANGED]: eL.J.LIST_PLAYER_VIDEO_PROFILE_CHANGED,
                        [eL.J.PLAYER_PLAYBACK_SPEED_CHANGED]: eL.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED,
                        [eL.J.PLAYER_MUTED_CHANGED]: eL.J.LIST_PLAYER_MUTED_CHANGED,
                        [eL.J.PLAYER_SEEKING]: eL.J.LIST_PLAYER_SEEKING,
                        [eL.J.PLAYER_SUBTITLE_LANGUAGES_LOADED]: eL.J.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED,
                        [eL.J.PLAYER_SEEK_PANELS_LOADED]: eL.J.LIST_PLAYER_SEEK_PANELS_LOADED,
                        [eL.J.PLAYER_PLAYING_PROFILE_CHANGED]: eL.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED,
                        [eL.J.PLAYER_FIRST_BYTES]: eL.J.LIST_PLAYER_FIRST_BYTES,
                        [eL.J.PLAYER_BEFORE_STOP]: eL.J.LIST_PLAYER_BEFORE_STOP,
                        [eL.J.PLAYER_VIDEO_VISIBILITY_CHANGED]: eL.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED,
                        [eL.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: eL.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED,
                        [eL.J.PLAYER_VIDEO_SURFACE_CHANGED]: eL.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED
                    })
                }
                _translatePosition(e) {
                    var t, i, r;
                    return null != (r = null == (i = null == (t = this._loadedList) ? void 0 : t.translatePosition) ? void 0 : i.call(t, e)) ? r : e
                }
                _translateDuration(e) {
                    var t, i, r;
                    let a = isNaN(e) ? 0 : e;
                    return null != (r = null == (i = null == (t = this._loadedList) ? void 0 : t.translateDuration) ? void 0 : i.call(t, a)) ? r : a
                }
                _handleProgress(e) {
                    this.emit(eL.J.LIST_PLAYER_PROGRESS, Object.assign(Object.assign({}, e.data), {
                        position: this._translatePosition(e.data.position)
                    }))
                }
                _handleBeforeLoad(e) {
                    this.emit(eL.J.LIST_PLAYER_BEFORE_PLAYER_LOAD, Object.assign(Object.assign({}, e.data), {
                        options: Object.assign(Object.assign({}, e.data.options), {
                            position: this._translatePosition(e.data.options.position)
                        })
                    }))
                }
                _handlePlayerInitError(e) {
                    this._trackPlayerPromise.reject(new eC(x.I.LIST_PLAYER_NO_TRACK_PLAYER, e.message || "Track player promise was rejected."))
                }
                _handleCapped(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_CAPPED, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data))
                }
                _handlePlaying(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_PLAYING, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePaused(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_PAUSED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleCanPreload() {
                    this._preloadUpcomingTrack().catch(() => {})
                }
                _handleEnded(e) {
                    let t = this._currentTrack;
                    t && (this.emit(eL.J.LIST_PLAYER_TRACK_ENDED, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data)), this.next(l.TRACK_DONE))
                }
                _handleTimeout(e) {
                    let t = this._currentTrack;
                    t && (this.emit(eL.J.LIST_PLAYER_TRACK_TIMEOUT, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data)), this.next(l.TRACK_ERROR))
                }
                _handlePositionChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_POSITION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        previousPosition: null !== e.data.previousPosition ? this._translatePosition(e.data.previousPosition) : e.data.previousPosition,
                        position: this._translatePosition(e.data.position),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleDurationChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_DURATION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        position: this._translatePosition(e.data.position),
                        duration: this._translateDuration(e.data.duration),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePlayedThresholdReached(e) {
                    let t = this._currentTrack;
                    t && this.emit(eL.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        threshold: e.data.threshold,
                        position: this._translatePosition(e.data.position),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    })
                }
                _handleError(e) {
                    let t = this._currentTrack,
                        i = e.data;
                    if (!t) return;
                    i.position = this._translatePosition(e.data.position), this.emit(eL.J.LIST_PLAYER_ERROR, i), this.emitSync(eL.J.LIST_PLAYER_ERROR_SYNC, i);
                    let r = !!i.error && i.error.listPlayerIgnore;
                    !r && this._listErrorCount++, i.canPlayNext && (r || this._listErrorCount <= this._maxListErrors ? this.next(l.TRACK_ERROR) : this.emit(eL.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED, {
                        count: this._listErrorCount,
                        threshold: this._maxListErrors,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _handleTrackLoaded(e) {
                    this.emitSync(eL.J.LIST_PLAYER_TRACK_LOADED, e)
                }
                _incrementSeqId() {
                    return this._currentSeqId >= 0x1fffffffffffff ? this._currentSeqId = 0 : this._currentSeqId += 1, this._currentSeqId
                }
                _getTrackPlayer() {
                    return this._trackPlayerPromise.promise
                }
                _setListIndex(e, t) {
                    let i = t.index && -1 !== t.index ? t.index : 0;
                    return Promise.all([e, t, e.startAt(i)])
                }
                _setListOptions([e, t, i]) {
                    return Promise.all([e.setShuffle(!!this._shuffled), e.setRepeatMode(this._repeatMode)]).then(() => [e, t])
                }
                _replaceCurrentList([e, t]) {
                    return this.emitSync(eL.J.LIST_PLAYER_BEFORE_LIST_CHANGE, Object.assign({
                        newList: e,
                        newOptions: t,
                        oldList: this._loadedList,
                        oldOptions: this._loadedOptions
                    }, (0, eB.P)())), this._loadedList = e, this._loadedOptions = t, this._listPlayCount = 0, this._listErrorCount = 0, this.emit(eL.J.LIST_PLAYER_LIST_CHANGED, Object.assign({
                        list: e,
                        options: t
                    }, (0, eB.P)())), h.SUCCESS
                }
                _changeTrack(e, t, i) {
                    let r;
                    if (this._currentSeqId !== i) return Promise.resolve(h.CANCELLED);
                    this.emitSync(eL.J.LIST_PLAYER_BEFORE_TRACK_LOAD, Object.assign({
                        list: this._loadedList,
                        newTrack: e,
                        oldTrack: this._currentTrack
                    }, (0, eB.P)())), this._uid++;
                    let a = ++this._listPlayCount,
                        n = this._loadedOptions,
                        s = !0,
                        o = 0,
                        _ = 3e4,
                        d = !1,
                        u = !1;
                    n && (1 === a ? (s = !n.paused, o = n.initialPosition || n.position || 0) : o = n.position || 0, d = n.muted || !1, u = n.loop || !1);
                    let c = t === l.TRACK_DONE;
                    if (e.options) {
                        let t = e.options;
                        void 0 !== t.paused && (s = !t.paused), void 0 !== t.position && (o = t.position), void 0 !== t.playedThreshold && (_ = t.playedThreshold), void 0 !== t.loadingTimeout && (r = t.loadingTimeout), void 0 !== t.muted && (d = t.muted), void 0 !== t.loop && (u = t.loop)
                    }
                    this._currentTrack = e, this._currentTrackOptions = {
                        reason: t,
                        paused: !s,
                        position: o,
                        playedThreshold: _,
                        muted: d,
                        loop: u
                    };
                    let p = this._handleTrackLoaded.bind(this, Object.assign({
                        uid: this._uid,
                        track: this._currentTrack,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, (0, eB.P)()));
                    return this._getTrackPlayer().then(t => this._currentSeqId !== i ? h.CANCELLED : (Promise.resolve(t.load(e, {
                        uriProperty: "playableURI",
                        autoplay: s,
                        position: o,
                        playedThreshold: _,
                        continuePrevious: c,
                        loadingTimeout: r,
                        muted: d,
                        loop: u
                    }, p)).catch(() => {}), h.SUCCESS))
                }
                _preloadUpcomingTrack() {
                    let e = this._loadedList;
                    return e ? e.peekNext({
                        reason: l.TRACK_DONE,
                        listConstants: P
                    }).then(e => e === P.FORBIDDEN ? h.FORBIDDEN : e === P.NULL_VALUE ? h.INVALID : e === P.LIST_END ? h.LIST_END : t6(e) && e.playable ? this.preloadTrack(e) : h.INVALID) : Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                preloadTrack(e) {
                    return this._getTrackPlayer().then(t => (t.preload(e).catch(() => {}), h.SUCCESS))
                }
                activateElement() {
                    return this._getTrackPlayer().then(e => (e.activateElement(), h.SUCCESS))
                }
                load(e, t) {
                    let i = function(e = {}) {
                        let t = {
                            index: -1,
                            position: 0,
                            initialPosition: 0,
                            playbackSpeed: 1,
                            duration: -1,
                            paused: !1,
                            reason: l.UNKNOWN,
                            muted: !1,
                            loop: !1
                        };
                        return void 0 !== e.index && (t.index = e.index), void 0 !== e.position && (t.position = e.position), void 0 !== e.initialPosition && (t.initialPosition = e.initialPosition), void 0 !== e.duration && (t.duration = e.duration), void 0 !== e.paused && (t.paused = e.paused), void 0 !== e.playbackSpeed && (t.playbackSpeed = e.playbackSpeed), void 0 !== e.reason && (t.reason = e.reason), void 0 !== e.muted && (t.muted = e.muted), void 0 !== e.loop && (t.loop = e.loop), t
                    }(t || this._loadedOptions || {});
                    return this._setListIndex(e, i).then(this._setListOptions).then(this._replaceCurrentList)
                }
                play(e, t) {
                    return this.load(e, t).then(() => {
                        if (this._loadedList !== e) return h.CANCELLED;
                        let t = this._loadedOptions ? this._loadedOptions.reason : l.UNKNOWN;
                        return this.next(t)
                    })
                }
                canChangeTrack() {
                    return this._loadedList ? this._loadedList.peekNext({
                        reason: l.FORWARD_BUTTON,
                        listConstants: P
                    }).then(e => e !== P.FORBIDDEN) : Promise.resolve(!0)
                }
                next(e) {
                    if (!e) return Promise.reject(new eC(x.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(eL.J.LIST_PLAYER_BEFORE_NEXT, Object.assign({
                        list: t,
                        reason: e
                    }, (0, eB.P)()));
                    let i = this._incrementSeqId(),
                        r = {
                            reason: e,
                            listConstants: P
                        };
                    return t.next(r).then(r => this._currentSeqId !== i ? h.CANCELLED : r === P.FORBIDDEN ? h.FORBIDDEN : r === P.NULL_VALUE ? this.next(e) : r === P.LIST_END ? (this.emit(eL.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: l.END_PLAY
                    }, (0, eB.P)())), this.clear(e), h.LIST_END) : t6(r) ? r.playable ? this._changeTrack(r, e, i) : (this.emit(eL.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: r,
                        list: t
                    }, (0, eB.P)())), this.next(e)) : h.INVALID)
                }
                previous(e) {
                    if (!e) return Promise.reject(new eC(x.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(eL.J.LIST_PLAYER_BEFORE_PREVIOUS, Object.assign({
                        list: t,
                        reason: e
                    }, (0, eB.P)()));
                    let i = this._incrementSeqId(),
                        r = {
                            reason: e,
                            listConstants: P
                        };
                    return t.previous(r).then(r => this._currentSeqId !== i ? h.CANCELLED : r === P.FORBIDDEN ? h.FORBIDDEN : r === P.NULL_VALUE ? this.previous(e) : r === P.LIST_START ? (this.emit(eL.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: l.END_PLAY
                    }, (0, eB.P)())), this.clear(e), h.LIST_END) : t6(r) ? r.playable ? this._changeTrack(r, e, i) : (this.emit(eL.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: r,
                        list: t
                    }, (0, eB.P)())), this.previous(e)) : h.INVALID)
                }
                pause() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.pause().then(() => h.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? h.CANCELLED : h.FORBIDDEN)) : Promise.resolve(h.SUCCESS) : Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                resume() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.resume().then(() => h.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? h.CANCELLED : h.FORBIDDEN)) : Promise.resolve(h.SUCCESS) : Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                togglePlay() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.togglePlay().then(() => h.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? h.CANCELLED : h.FORBIDDEN)) : Promise.resolve(h.SUCCESS) : Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                stop(e) {
                    let t = {
                            reason: e || l.UNKNOWN
                        },
                        i = this._currentTrack;
                    return i && i.logData && (t.source = i.logData.source, t.playbackService = i.logData.playbackService), this._incrementSeqId(), this._getTrackPlayer().then(e => (e.stop(t), this.emit(eL.J.LIST_PLAYER_STOPPED, Object.assign({
                        uid: this._uid,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, (0, eB.P)())), h.SUCCESS))
                }
                clear(e) {
                    return this.stop(e).then(() => (this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this.emit(eL.J.LIST_PLAYER_CLEARED, Object.assign({}, (0, eB.P)())), h.SUCCESS))
                }
                setShuffle(e) {
                    let t = !!e;
                    if (this._shuffled !== t) {
                        this._shuffled = t, this.emit(eL.J.LIST_PLAYER_SHUFFLE_CHANGED, Object.assign({
                            player: this,
                            shuffled: t
                        }, (0, eB.P)()));
                        let e = this._loadedList;
                        e && e.setShuffle(this._shuffled)
                    }
                    return Promise.resolve(h.SUCCESS)
                }
                setRepeatMode(e) {
                    if (!(e in I)) return Promise.reject(new eC(x.I.LIST_PLAYER_INVALID_ARGUMENT, "The value of repeat mode is not a correct RepeatMode enum value"));
                    if (this._repeatMode !== e) {
                        this._repeatMode = e, this.emit(eL.J.LIST_PLAYER_REPEAT_MODE_CHANGED, Object.assign({
                            player: this,
                            repeatMode: e
                        }, (0, eB.P)()));
                        let t = this._loadedList;
                        t && t.setRepeatMode(this._repeatMode)
                    }
                    return Promise.resolve(h.SUCCESS)
                }
                getVolume() {
                    return this._getTrackPlayer().then(e => e.getVolume())
                }
                setVolume(e, t = null) {
                    return this._getTrackPlayer().then(i => (i.setVolume(e, {
                        commandId: null != t ? t : void 0
                    }), h.SUCCESS))
                }
                seek(e, t = l.SEEK) {
                    var i, r;
                    let a = this._loadedList;
                    if (!a) return Promise.reject(new eC(x.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    if ("function" == typeof a.allowSeeking && !a.allowSeeking()) return Promise.reject(new eC(x.I.LIST_PLAYER_FORBIDDEN, "The operation is not allowed."));
                    let n = null != (r = null == (i = a.handleSeek) ? void 0 : i.call(a, e, {
                        reason: t,
                        listConstants: P
                    })) ? r : e;
                    return n === P.PAUSE ? this.pause().then(t => (this.emit(eL.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: n
                    }, (0, eB.P)())), t)) : n === P.IGNORE ? (this.emit(eL.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: n
                    }, (0, eB.P)())), Promise.resolve(h.SUCCESS)) : this._currentTrack ? this._getTrackPlayer().then(e => (e.seek(n), h.SUCCESS)) : Promise.resolve(h.SUCCESS)
                }
                getListConstants() {
                    return P
                }
                getLoadedList() {
                    return this._loadedList
                }
                getLoadedOptions() {
                    return this._loadedOptions
                }
                getPlayerState() {
                    return this._getTrackPlayer().then(e => {
                        let t = e.getPlayerState();
                        return Object.assign(Object.assign({}, t), {
                            position: this._translatePosition(t.position),
                            duration: this._translateDuration(t.duration)
                        })
                    })
                }
                getState() {
                    return this.getPlayerState().then(e => ({
                        playbackState: e,
                        track: this._currentTrack,
                        list: this._loadedList,
                        options: this._loadedOptions
                    }))
                }
                getMediaConfig() {
                    return this._getTrackPlayer().then(e => e.getMediaConfig())
                }
                hideSubtitles() {
                    return this._getTrackPlayer().then(e => e.hideSubtitles()).then(() => h.SUCCESS)
                }
                showSubtitles() {
                    return this._getTrackPlayer().then(e => e.showSubtitles()).then(() => h.SUCCESS)
                }
                areSubtitlesShown() {
                    return this._getTrackPlayer().then(e => e.areSubtitlesShown())
                }
                getSubtitleLanguages() {
                    return this._getTrackPlayer().then(e => e.getSubtitleLanguages())
                }
                getActiveSubtitleLanguage() {
                    return this._getTrackPlayer().then(e => {
                        var t;
                        return null != (t = e.getActiveSubtitleLanguage()) ? t : null
                    })
                }
                deactivateCueEvents() {
                    return this._getTrackPlayer().then(e => e.deactivateCueEvents()).then(() => h.SUCCESS)
                }
                activateCueEvents() {
                    return this._getTrackPlayer().then(e => e.activateCueEvents()).then(() => h.SUCCESS)
                }
                getCurrentBandwidth() {
                    return this._getTrackPlayer().then(e => e.getCurrentBandwidth())
                }
                setSubtitleLanguage(e) {
                    return this._getTrackPlayer().then(t => t.setSubtitleLanguage(e)).then(() => h.SUCCESS)
                }
                setPlaybackSpeed(e) {
                    return this._getTrackPlayer().then(t => t.setPlaybackSpeed(e)).then(e => e ? h.SUCCESS : h.FORBIDDEN)
                }
                setMuted(e) {
                    return this._getTrackPlayer().then(t => (t.setMuted(e), h.SUCCESS))
                }
                getStatistics() {
                    return this._getTrackPlayer().then(e => e.getStatistics())
                }
                getAudioProcessor() {
                    return this._getTrackPlayer().then(e => e.getAudioProcessor())
                }
                adaptToElementSize(e) {
                    return this._getTrackPlayer().then(t => (t.adaptToElementSize(e), h.SUCCESS))
                }
                setIsVideoVisible(e) {
                    return this._getTrackPlayer().then(t => (t.setIsVideoVisible(e), h.SUCCESS))
                }
                setMediaPlaybackMode(e) {
                    return this._getTrackPlayer().then(t => t.setMediaPlaybackMode(e)).then(e => e ? h.SUCCESS : h.FORBIDDEN)
                }
                setVideoSurface(e) {
                    return this._getTrackPlayer().then(t => (t.setVideoSurface(e), h.SUCCESS))
                }
                getVideoSurface() {
                    return this._getTrackPlayer().then(e => e.getVideoSurface())
                }
            }
            let t9 = Z.m.forTag("playback.init");

            function t7(e) {
                return new Promise((t, i) => {
                    var r, a, n, s, o, l, _, d, u, c, h, p, m;
                    if (!e.transport) return void i(TypeError("Argument transport is required."));
                    if ("undefined" != typeof window && (("boolean" == typeof window.isSecureContext ? window.isSecureContext : function() {
                            if ("undefined" == typeof window || !window.location) return !1;
                            let e = window.location;
                            if ("https" === e.protocol || "file" === e.protocol) return !0;
                            let t = e.hostname;
                            return !!/^127(\.[0-255]){3}$|^locahost\.?$|\.localhost\.?$/.test(t)
                        }()) || null == (r = window.console) || r.warn("%cDRM might not be available from unsecure contexts", "background: #222; color: #bada55; font-size: 40px")), e.playerContainerManager && ("function" != typeof(null == (a = e.playerContainerManager) ? void 0 : a.eject) || "function" != typeof(null == (n = e.playerContainerManager) ? void 0 : n.inject))) return void i(TypeError("Both inject and eject PlayerContainerManager functions must be present."));
                    let {
                        transport: E
                    } = e, [f = "", g = ""] = (e.sdkId || "").split(":"), y = Object.assign(Object.assign({}, e), {
                        tracker: tW.create({
                            deviceInfo: (null == (s = e.loggerOptions) ? void 0 : s.deviceInfo) ? Promise.resolve(null == (o = e.loggerOptions) ? void 0 : o.deviceInfo) : null
                        }),
                        audioResolver: new tj(E),
                        videoResolver: new t$(E),
                        licenseURLResolver: new tZ({
                            transport: E,
                            sdk: {
                                name: f,
                                version: g
                            },
                            securityLevel: e.securityLevel,
                            useTestLicenseServer: e.useTestLicenseServer
                        }),
                        newBufferPerTrack: null == (l = e.newBufferPerTrack) || l,
                        preinitMediaElement: null == (_ = e.preinitMediaElement) || _,
                        audioProcessorOptions: Object.assign(Object.assign({}, e.audioProcessorOptions), {
                            disable: null != (u = null == (d = e.audioProcessorOptions) ? void 0 : d.disable) ? u : !!e.createPlayer
                        })
                    });
                    !e.unauthenticatedLogs || (null == (c = e.loggerOptions) ? void 0 : c.endpoint) || (e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                        endpoint: "https://spclient.wg.spotify.com/melody/unauth"
                    })), (null == (h = null == e ? void 0 : e.loggerOptions) ? void 0 : h.deviceInfo) || Promise.all([null == (p = e.loggerOptions) ? void 0 : p.platform, null == (m = e.loggerOptions) ? void 0 : m.clientVersion]).then(([t, i]) => {
                        e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                            deviceInfo: {
                                platform: t,
                                version: i
                            }
                        })
                    }), tM.create(y).then(t => {
                        let i = Object.assign({
                                disableMux: !0
                            }, e.loggerOptions),
                            r = new t0(Object.assign(Object.assign({}, i), {
                                transport: E,
                                sdkId: e.sdkId,
                                platform: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.platform) ? t : ""
                                }),
                                clientVersion: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.version) ? t : ""
                                })
                            })),
                            a = tY.create({
                                transport: E,
                                player: t,
                                logSender: r,
                                sdkId: e.sdkId,
                                deviceInfo: i.deviceInfo
                            });
                        return i.disableMux || t5.create({
                            player: t,
                            mux: eP,
                            envKey: null == i ? void 0 : i.muxEnvKey,
                            sdk: f,
                            sdkVersion: g,
                            deviceInfo: i.deviceInfo,
                            muxCustomDimensions: i.muxCustomDimensions
                        }).ready().then(() => t9.info("MuxReporter ready"), e => t9.error("Failed to instantiate MuxReporter", null == e ? void 0 : e.message)), {
                            player: t,
                            logger: a
                        }
                    }).then(t, i)
                })
            }
            let ie = Z.m.forTag("media_session");

            function it(e) {
                return Math.round(1e3 * e)
            }
            class ii {
                constructor(e) {
                    this._currentURI = null, this._streamer = e.streamer, this._handleAction = this._handleAction.bind(this), this._updateMediaSession = this._updateMediaSession.bind(this), this._updateMediaSessionMetadata = this._updateMediaSessionMetadata.bind(this), this._init()
                }
                static create(e) {
                    return "undefined" != typeof window && "undefined" != typeof navigator && "mediaSession" in navigator && "MediaMetadata" in window ? new ii(e) : (ie.warn("The MediaSession API is not supported."), null)
                }
                _init() {
                    this._streamer.on("state_changed", this._updateMediaSession)
                }
                _handleAction(e) {
                    switch (e.action) {
                        case "play":
                            this._streamer.resume();
                            break;
                        case "pause":
                            this._streamer.pause();
                            break;
                        case "seekto":
                            {
                                let t = e.seekTime;null != t && this._streamer.seek(it(t))
                            }
                            break;
                        case "seekforward":
                            {
                                let t = e.seekOffset;this._streamer.getCurrentState().then(e => {
                                    if (!e) return;
                                    let {
                                        position: i,
                                        duration: r
                                    } = e, a = Math.min(r, Math.max(0, t ? i + it(t) : i + 15e3));
                                    this._streamer.seek(a)
                                })
                            }
                            break;
                        case "seekbackward":
                            {
                                let t = e.seekOffset;this._streamer.getCurrentState().then(e => {
                                    if (!e) return;
                                    let {
                                        position: i
                                    } = e, r = Math.max(0, t ? i - it(t) : i - 15e3);
                                    this._streamer.seek(r)
                                })
                            }
                            break;
                        case "nexttrack":
                            this._streamer.nextTrack();
                            break;
                        case "previoustrack":
                            this._smartPreviousTrack()
                    }
                }
                _clearHandlers() {
                    navigator.mediaSession.setActionHandler("play", null), navigator.mediaSession.setActionHandler("pause", null), navigator.mediaSession.setActionHandler("seekto", null), navigator.mediaSession.setActionHandler("nexttrack", null), navigator.mediaSession.setActionHandler("previoustrack", null), navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("seekbackward", null)
                }
                _smartPreviousTrack() {
                    this._streamer.getCurrentState().then(e => {
                        if (!e) return Promise.reject(new H(r.HARMONY_NO_TRACKS_LOADED, "No current state."));
                        let {
                            disallows: t,
                            position: i,
                            track_window: a
                        } = e;
                        return t.seeking || i < 3e3 && a.previous_tracks.length > 0 ? this._streamer.previousTrack() : this._streamer.seek(0)
                    })
                }
                _updateMediaSessionMetadata({
                    name: e,
                    artists: t,
                    album: i
                }) {
                    var r;
                    let a = null == (r = null == i ? void 0 : i.images) ? void 0 : r.map(({
                            url: e,
                            width: t,
                            height: i
                        }) => ({
                            src: e,
                            sizes: `${t}x${i}`
                        })),
                        n = {
                            title: e || "",
                            artist: (null == t ? void 0 : t.map(e => null == e ? void 0 : e.name).join(", ")) || "",
                            album: (null == i ? void 0 : i.name) || "",
                            artwork: a
                        };
                    navigator.mediaSession.metadata = new window.MediaMetadata(n)
                }
                _updateMediaSession({
                    data: e
                }) {
                    var t;
                    let i = e.state,
                        r = null == (t = null == i ? void 0 : i.track_window) ? void 0 : t.current_track;
                    if (!i || !r) {
                        this._currentURI = null, navigator.mediaSession.metadata = null, navigator.mediaSession.playbackState = "none", this._clearHandlers();
                        return
                    }
                    navigator.mediaSession.playbackState = i.paused ? "paused" : "playing", this._currentURI !== r.uri && (this._currentURI = r.uri, this._updateMediaSessionMetadata(r));
                    let {
                        position: a,
                        duration: n
                    } = i, s = Math.min(Math.max(0, a), n);
                    n && navigator.mediaSession.setPositionState({
                        position: s,
                        duration: n
                    }), navigator.mediaSession.setActionHandler("play", this._handleAction), navigator.mediaSession.setActionHandler("pause", this._handleAction);
                    let o = i.disallows;
                    navigator.mediaSession.setActionHandler("seekto", o.seeking ? null : this._handleAction), navigator.mediaSession.setActionHandler("nexttrack", o.skipping_next ? null : this._handleAction), navigator.mediaSession.setActionHandler("previoustrack", this._handleAction), "episode" === r.type ? (navigator.mediaSession.setActionHandler("seekforward", this._handleAction), navigator.mediaSession.setActionHandler("seekbackward", this._handleAction)) : (navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("seekbackward", null))
                }
            }
            class ir extends Y.bk {
                constructor(e) {
                    super(), this._client = e.client, this._initialVolume = e.initialVolume, this._listPlayer = e.listPlayer, this._playerPromise = e.playerPromise, this._playbackServiceClient = e.playbackServiceClient, this._playbackStateObserver = e.playbackStateObserver, this._stopOnBackground = e.stopOnBackground, this._enableMediaSession = e.enableMediaSession, this._init()
                }
                _init() {
                    this._client.addListeners({
                        before_disconnect: this._onClientBeforeDisconnect.bind(this),
                        before_offline_disconnect: this._onClientBeforeOfflineDisconnect.bind(this)
                    });
                    let e = this._listPlayer;
                    e.addListeners({
                        [eL.J.LIST_PLAYER_CAPPED]: this._onCapped.bind(this),
                        [eL.J.LIST_PLAYER_TRACK_ENDED]: this._onTrackEnded.bind(this),
                        [eL.J.LIST_PLAYER_BEFORE_VOLUME_CHANGE]: this._onBeforeVolumeChange.bind(this),
                        [eL.J.LIST_PLAYER_VOLUME_CHANGED]: this._onVolumeChanged.bind(this),
                        [eL.J.LIST_PLAYER_ERROR]: e => {
                            this._onError(e, n.PLAYBACK)
                        }
                    }), this.proxyEmitAll(e, {
                        [eL.J.LIST_PLAYER_AUTOPLAY_FAILED]: "autoplay_failed",
                        [eL.J.LIST_PLAYER_TRACK_LOADED]: "track_loaded",
                        [eL.J.LIST_PLAYER_DURATION_CHANGED]: "duration_changed",
                        [eL.J.LIST_PLAYER_POSITION_CHANGED]: "position_changed",
                        [eL.J.LIST_PLAYER_PROGRESS]: "progress",
                        [eL.J.LIST_PLAYER_BUFFER_STALLED]: "stalled",
                        [eL.J.LIST_PLAYER_BUFFERING_END]: "buffering_end",
                        [eL.J.LIST_PLAYER_BUFFERING_START]: "buffering_start",
                        [eL.J.LIST_PLAYER_REBUFFERING_END]: "rebuffering_end",
                        [eL.J.LIST_PLAYER_REBUFFERING_START]: "rebuffering_start",
                        [eL.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]: "max_list_errors_reached",
                        [eL.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]: "video_element_appended",
                        [eL.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: "video_element_removed",
                        [eL.J.LIST_PLAYER_LIST_ENDED]: "context_ended",
                        [eL.J.LIST_PLAYER_SEEK_HANDLED]: "streamer_seek_handled",
                        [eL.J.LIST_PLAYER_DISPLAYED_CUES_CHANGED]: "displayed_cues_changed",
                        [eL.J.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED]: "subtitle_languages_loaded",
                        [eL.J.LIST_PLAYER_SEEK_PANELS_LOADED]: "seek_panels_loaded",
                        [eL.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]: "speed_changed",
                        [eL.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: "playing_profile_changed",
                        [eL.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: "media_playback_mode_changed",
                        [eL.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: "video_visibility_changed",
                        [eL.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: "video_surface_changed"
                    }), this.proxyEmitAllSync(e, {
                        [eL.J.REPORTING_START]: "reporting_start",
                        [eL.J.REPORTING_FIRST_QUARTILE]: "reporting_first_quartile",
                        [eL.J.REPORTING_MIDPOINT]: "reporting_midpoint",
                        [eL.J.REPORTING_THIRD_QUARTILE]: "reporting_third_quartile",
                        [eL.J.REPORTING_COMPLETE]: "reporting_complete",
                        [eL.J.REPORTING_PAUSE]: "reporting_pause",
                        [eL.J.REPORTING_RESUME]: "reporting_resume",
                        [eL.J.REPORTING_CREATIVE_VIEW]: "reporting_creative_view",
                        [eL.J.REPORTING_ERROR]: "reporting_error"
                    });
                    let t = this._playbackServiceClient;
                    t.addListeners({
                        logout: this._onPlaybackClientLogout.bind(this),
                        error: e => {
                            this._onError(e, e.data.source)
                        }
                    }), this.proxyEmitAll(t, {
                        max_subscriptions_reached: "max_subscriptions_reached",
                        deregistered: "deregistered",
                        registered: "registered",
                        registration_aborted: "registration_aborted",
                        internal_endcontent: "internal_endcontent"
                    }), this.proxyEmit(this._playbackStateObserver, "state_changed", "state_changed"), this._stopOnBackground && document.addEventListener && document.addEventListener("visibilitychange", () => {
                        document.hidden && this.stop() && this.emitSync("stopped_on_background", null)
                    }), this._enableMediaSession && ii.create({
                        streamer: this
                    }), this._playerPromise.then(e => {
                        e.setVolume(this._initialVolume), this.emit("player_initialization_done", null)
                    }, e => {
                        this.emit("player_initialization_failed", {
                            reason: e.message,
                            error: e
                        })
                    })
                }
                _assertOperationSuccess(e) {
                    return e === h.SUCCESS
                }
                _onTrackEnded() {
                    this.emit("track_ended", null)
                }
                _onClientBeforeDisconnect(e) {
                    e.data.awaitPromise(this.deregister().catch(() => {}))
                }
                _onClientBeforeOfflineDisconnect(e) {
                    e.data.awaitPromise(this.pause().catch(() => {}))
                }
                _onBeforeVolumeChange(e) {
                    var t;
                    this.emitSync("before_volume_change", {
                        volume: e.data.volume,
                        remote: !!(null == (t = e.data.options) ? void 0 : t.commandId)
                    }).defaultPrevented && e.preventDefault()
                }
                _onVolumeChanged(e) {
                    this.emit("volume_changed", {
                        volume: e.data.volume,
                        remote: !!e.data.commandId
                    })
                }
                _onCapped() {
                    this.emit("playback_capped", null)
                }
                _onError(e, t) {
                    let {
                        error: i
                    } = e.data;
                    i && (i.registration && this.emit("registration_error", {
                        error: i
                    }), this.emit("error", {
                        source: t,
                        error: i
                    }), this._client.notifyError(t, i))
                }
                _onPlaybackClientLogout() {
                    this.emit("logged_out", null)
                }
                stop() {
                    return this._playbackServiceClient.stop()
                }
                register() {
                    return this._playbackServiceClient.register()
                }
                deregister() {
                    return this._playbackServiceClient.deregister()
                }
                resume() {
                    return this._listPlayer.resume().then(this._assertOperationSuccess)
                }
                pause() {
                    return this._listPlayer.pause().then(this._assertOperationSuccess)
                }
                nextTrack(e = l.FORWARD_BUTTON) {
                    return this._listPlayer.next(e).then(this._assertOperationSuccess)
                }
                canChangeTrack() {
                    return this._listPlayer.canChangeTrack()
                }
                previousTrack(e = l.BACK_BUTTON) {
                    return this._listPlayer.previous(e).then(this._assertOperationSuccess)
                }
                togglePlay() {
                    return this._listPlayer.togglePlay().then(this._assertOperationSuccess)
                }
                setVolume(e) {
                    return this._listPlayer.setVolume(e).then(this._assertOperationSuccess)
                }
                getVolume() {
                    return this._listPlayer.getVolume()
                }
                seek(e) {
                    return this._listPlayer.seek(e).then(this._assertOperationSuccess)
                }
                getCurrentState() {
                    return this._playbackStateObserver.getCurrentState()
                }
                getVideoVariants() {
                    return this._playerPromise.then(e => e.getVideoVariants())
                }
                setPreferredBitrate(e) {
                    return this._playerPromise.then(t => t.setPreferredBitrate(e).then(this._assertOperationSuccess))
                }
                setVideoResolution(e) {
                    return this._playerPromise.then(t => t.setVideoResolution(e))
                }
                setBackgrounded(e) {
                    return this.setPlayerVisibility(!e)
                }
                setPlayerVisibility(e) {
                    return this._listPlayer.setIsVideoVisible(e).then(this._assertOperationSuccess)
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
                setIsVideoVisible(e) {
                    return this._listPlayer.setIsVideoVisible(e).then(this._assertOperationSuccess)
                }
                setVideoSurface(e) {
                    return this._listPlayer.setVideoSurface(e).then(this._assertOperationSuccess)
                }
                activateElement() {
                    return this._playerPromise.then(e => e.activateElement())
                }
                hideSubtitles() {
                    return this._listPlayer.hideSubtitles().then(this._assertOperationSuccess)
                }
                showSubtitles() {
                    return this._listPlayer.showSubtitles().then(this._assertOperationSuccess)
                }
                areSubtitlesShown() {
                    return this._listPlayer.areSubtitlesShown()
                }
                getSubtitleLanguages() {
                    return this._listPlayer.getSubtitleLanguages()
                }
                getActiveSubtitleLanguage() {
                    return this._listPlayer.getActiveSubtitleLanguage()
                }
                setSubtitleLanguage(e) {
                    return this._listPlayer.setSubtitleLanguage(e).then(this._assertOperationSuccess)
                }
                getSeekPanels() {
                    return this._playerPromise.then(e => e.getSeekPanels())
                }
                getMediaConfig() {
                    return this._listPlayer.getMediaConfig()
                }
                setPlaybackSpeed(e) {
                    return this._listPlayer.setPlaybackSpeed(e).then(this._assertOperationSuccess)
                }
                deactivateSubtitleEvents() {
                    return this._listPlayer.deactivateCueEvents().then(this._assertOperationSuccess)
                }
                activateSubtitleEvents() {
                    return this._listPlayer.activateCueEvents().then(this._assertOperationSuccess)
                }
                hasOptimisticUpdates() {
                    return this._playbackServiceClient.hasOptimisticUpdates()
                }
            }
            var ia = i(84693);
            class is extends Error {
                constructor(e, t, i = {}) {
                    super(t), this.status = -1, this.maxedSubscriptions = !1, this.unrecoverable = !1, this.debug = {}, this.registration = !1, this.code = e, this.name = "TrackPlayerAPIClientError", this.debug = i
                }
                static fatal(e, t, i = {}) {
                    let r = new is(e, t, i);
                    return r.unrecoverable = !0, r
                }
            }

            function io(e, t) {
                return e && (null == t ? void 0 : t.context_enhancement) === "RECOMMENDATION" ? D.SMART : D[e ? "ON" : "OFF"]
            }! function(e) {
                e.ON = "ON", e.OFF = "OFF", e.NONE = "NONE"
            }(L || (L = {})),
            function(e) {
                e[e.OFF = 0] = "OFF", e[e.ON = 1] = "ON", e[e.SMART = 2] = "SMART"
            }(D || (D = {}));
            let il = /^disallow_([^]+)_reasons$/;

            function i_(e) {
                let t = {};
                for (let i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i))
                        if ("disallow_setting_modes" === i) t.setting_modes = function(e) {
                            var t, i, r, a, n, s, o, l;
                            let _ = {};
                            for (let d in e)
                                if (Object.prototype.hasOwnProperty.call(e, d))
                                    for (let u in _[d] = {}, null == (t = e[d]) ? void 0 : t.values) Object.prototype.hasOwnProperty.call(null == (i = e[d]) ? void 0 : i.values, u) && ((_[d] || {})[u] = !!((null == (n = null == (a = null == (r = e[d]) ? void 0 : r.values) ? void 0 : a[u]) ? void 0 : n.reasons) && (null == (l = null == (o = null == (s = e[d]) ? void 0 : s.values) ? void 0 : o[u]) ? void 0 : l.reasons.length)));
                            return _
                        }(e[i]);
                        else if ("disallow_signals" === i) t.signals = function(e) {
                    var t, i;
                    let r = {};
                    for (let a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = !!(null == (i = null == (t = null == e ? void 0 : e[a]) ? void 0 : t.reasons) ? void 0 : i.length));
                    return r
                }(e[i]);
                else {
                    let r = e[i];
                    if (Array.isArray(r)) {
                        let e = !!(r && r.length);
                        t[i.replace(il, "$1")] = e
                    }
                }
                return t
            }

            function id(e, t) {
                let i = {
                    episode: (null == t ? void 0 : t.toLowerCase()) || "unknown",
                    track: "music",
                    ad: "ad",
                    interruption: "ad",
                    media: "narration"
                };
                return (null == e ? void 0 : e.type) && e.type in i ? i[e.type] : "unknown"
            }
            let iu = Z.m.forTag("tp.stream.PlaybackStateObserver");
            class ic extends Y.bk {
                constructor(e, t = {}) {
                    super(), this._tpApiClient = e, this._numPreviousTracks = t.numPrevious || 2, this._numNextTracks = t.numNextTracks || 2, this._currentState = null, this._init()
                }
                static create(e, t) {
                    return new ic(e, t)
                }
                _init() {
                    this._tpApiClient.on("state_changed", this._onStateChanged.bind(this)), this._tpApiClient.on("state_cleared", this._onStateCleared.bind(this))
                }
                _onStateChanged(e) {
                    var t, i, r, a, n, s, o, l, _;
                    let {
                        stateMachine: d,
                        stateRef: u,
                        position: c,
                        paused: h,
                        loading: p,
                        currentTrackInfo: m,
                        contextMetadata: E
                    } = e.data, f = null == d ? void 0 : d.states;
                    if (!d || !(null == f ? void 0 : f.length) || !u) return void iu.warn("_onStateChanged called with no current state", e);
                    let g = f[u.state_index],
                        y = d.tracks[null == g ? void 0 : g.track];
                    if (!g || !y) return void iu.warn("_onStateChanged called with no current state or track", e);
                    let {
                        options: v
                    } = g, T = null != (t = m.duration) ? t : 0, S = this._createTrackWindow(d, g, T);
                    T || (T = null != (r = null == (i = S.current_track) ? void 0 : i.duration_ms) ? r : 0), (null == v ? void 0 : v.playback_speed) || !m.isPlaybackSpeedRestricted || (g.restrictions = Object.assign({
                        disallow_setting_playback_speed_reasons: ["not_supported_by_content_type"]
                    }, g.restrictions));
                    let P = function(e, t) {
                            let i = Object.assign({}, e);
                            return delete i.disallow_pausing_reasons, delete i.disallow_resuming_reasons, t ? i.disallow_pausing_reasons = ["already_paused"] : i.disallow_resuming_reasons = ["not_paused"], i
                        }(g.restrictions || {}, h),
                        b = i_(P),
                        I = {
                            current: h ? 0 : null != (a = m.currentPlaybackSpeed) ? a : 1,
                            selected: b.setting_playback_speed ? 1 : null != (n = m.selectedPlaybackSpeed) ? n : 1,
                            restricted: !!b.setting_playback_speed
                        },
                        A = {
                            timestamp: Date.now(),
                            context: {
                                uri: null != (o = null == (s = y.metadata) ? void 0 : s.context_uri) ? o : null,
                                metadata: E
                            },
                            position: c,
                            duration: T,
                            paused: h,
                            playback_quality: null != (l = m.playbackQuality) ? l : R.UNKNOWN,
                            playback_features: {
                                hifi_status: null != (_ = m.hifiStatus) ? _ : L.NONE,
                                playback_speed: I,
                                signal_ids: g.signals || [],
                                modes: (null == v ? void 0 : v.modes) || {}
                            },
                            shuffle: this._getShuffleSetting(d),
                            shuffle_mode: io(null == v ? void 0 : v.shuffling_context, null == v ? void 0 : v.modes),
                            repeat_mode: this._getRepeatSetting(d),
                            track_window: S,
                            restrictions: P,
                            disallows: b,
                            loading: p,
                            playback_speed: I.current,
                            playback_id: g.state_id
                        };
                    this._currentState = A, this.emit("state_changed", {
                        state: A ? Object.assign({}, A) : null
                    })
                }
                _createTrackWindow(e, t, i) {
                    let r = e.states;
                    return {
                        current_track: this._getTrackMetadata(e, t, i),
                        next_tracks: this._getNextStates(t, r).map(t => this._getTrackMetadata(e, t, null)).filter(e => !!e),
                        previous_tracks: this._getPreviousStates(t, r).map(t => this._getTrackMetadata(e, t, null)).filter(e => !!e)
                    }
                }
                _onStateCleared() {
                    this._currentState = null, this.emit("state_changed", {
                        state: null
                    })
                }
                _getRepeatSetting(e) {
                    let t = e.attributes.options;
                    return t.repeating_track ? s.TRACK : t.repeating_context ? s.CONTEXT : s.OFF
                }
                _getShuffleSetting(e) {
                    return e.attributes.options.shuffling_context
                }
                _getNextStates(e, t) {
                    let i = this._numNextTracks,
                        r = [],
                        a = e;
                    for (; a && "show_next" in a.transitions && a.transitions.show_next;) {
                        let e = t[a.transitions.show_next.state_index];
                        if (e && r.push(e), a = e, r.length >= i) break
                    }
                    return r
                }
                _getPreviousStates(e, t) {
                    let i = this._numPreviousTracks,
                        r = [],
                        a = e;
                    for (; a && "show_prev" in a.transitions && a.transitions.show_prev;) {
                        let e = t[a.transitions.show_prev.state_index];
                        if (e && r.unshift(e), a = e, r.length >= i) break
                    }
                    return r
                }
                _getTrackMetadata(e, t, i) {
                    var r;
                    let a = null == e ? void 0 : e.tracks[t.track];
                    if (!(null == a ? void 0 : a.metadata)) return null;
                    let n = a.metadata,
                        s = a.manifest && "manifest_ids_video" in a.manifest,
                        o = a.track_type.toLowerCase(),
                        l = (0, ia.o_h)(n.uri),
                        _ = n.linked_from_uri ? (0, ia.o_h)(n.linked_from_uri) : null,
                        d = id(l, n.episode_content_type),
                        u = null == (r = n.images) ? void 0 : r.map(e => {
                            if (0 === e.url.indexOf("spotify:image:")) {
                                let t = e.url.split(":").slice(-1)[0];
                                return Object.assign(Object.assign({}, e), {
                                    url: `https://i.scdn.co/image/${t}`
                                })
                            }
                            return e
                        });
                    return {
                        id: l ? l.id : null,
                        uri: n.uri,
                        type: (null == l ? void 0 : l.type) || "unknown",
                        uid: t.track_uid,
                        linked_from: {
                            uri: n.linked_from_uri || null,
                            id: _ ? _.id : null
                        },
                        media_type: s ? "video" : "audio",
                        track_type: o,
                        content_type: d,
                        name: n.name,
                        duration_ms: i || n.duration,
                        artists: n.authors,
                        album: {
                            uri: n.group_uri,
                            name: n.group_name,
                            images: u
                        },
                        is_playable: !0,
                        metadata: t.track_metadata || {}
                    }
                }
                getCurrentState() {
                    let e = this._currentState;
                    if (e && !e.paused) {
                        let t = Date.now(),
                            i = e.position + (t - e.timestamp);
                        e.position = i, e.timestamp = t
                    }
                    return Promise.resolve(this._currentState ? Object.assign({}, this._currentState) : null)
                }
            }
            class ih {
                constructor(e, t) {
                    this._stateMachine = null, this._currentState = null, this._currentStateIndex = null, this._pausedState = !1, this._initialPlaybackPosition = null, this._contextMetadata = null, this._uri = e, this._manifestTrackResolver = t
                }
                static create(e, t) {
                    return new ih(e, t)
                }
                _transitionTo(e, t, i = !1) {
                    return new Promise(r => {
                        var a;
                        let n = e.reason,
                            s = e.listConstants;
                        if (!t) return r(s.FORBIDDEN);
                        let o = this._stateMachine;
                        if (!o) return r(s.NULL_VALUE);
                        let l = o.states[t.state_index];
                        if (!l) return r(s.NULL_VALUE);
                        let _ = o.tracks[l.track];
                        if (!(null == (a = null == _ ? void 0 : _.metadata) ? void 0 : a.uri) || !this._currentState) return r(s.NULL_VALUE);
                        let d = this._currentState,
                            u = d.decoy ? !!d.paused : t.paused;
                        i || (this._currentState = l, this._currentStateIndex = t.state_index, this._pausedState = !!u);
                        let c = 0;
                        return i || null === this._initialPlaybackPosition ? "initial_playback_position" in l && (c = l.initial_playback_position || 0) : (c = this._initialPlaybackPosition, this._initialPlaybackPosition = null), this._manifestTrackResolver.resolveFromStateTrack(_).then(e => {
                            var t, i, a;
                            if (!e) return r(s.NULL_VALUE);
                            let o = this._uri;
                            _.metadata && _.metadata.context_uri && (o = _.metadata.context_uri);
                            let d = (0, ia.o_h)(_.metadata.uri),
                                h = _.ms_played_until_update,
                                p = {
                                    playbackQuality: e.playbackQuality,
                                    hifiStatus: e.hifi_status
                                },
                                m = null == (t = this._currentState) ? void 0 : t.preferred_media_type,
                                E = {
                                    uri: e.uri,
                                    playableURI: e.uri,
                                    fileId: e.fileId,
                                    resolvedURL: e.resolvedURL,
                                    contentType: id(d, _.metadata.episode_content_type),
                                    playable: e.playable,
                                    isAd: e.isAd,
                                    format: e.format,
                                    fileFormat: e.fileFormat,
                                    mediaType: e.mediaType,
                                    noManifest: e.noManifest,
                                    metadata: p,
                                    options: {
                                        position: c,
                                        paused: u,
                                        playedThreshold: h,
                                        useDefaultPlaybackSpeed: !(0, ia.gHQ)(e.uri),
                                        playbackSpeed: null == (a = null == (i = this._currentState) ? void 0 : i.options) ? void 0 : a.playback_speed
                                    },
                                    logData: {
                                        noLog: !!e.noLog,
                                        noTSV: !!e.noTSV,
                                        deviceId: this._deviceId,
                                        playbackId: l.state_id ? l.state_id : void 0,
                                        reason: n,
                                        displayTrack: e.uri,
                                        playContext: o,
                                        impressionURL: e.impressionURL,
                                        impressionURLs: e.impressionURLs,
                                        format: {
                                            codec: e.format,
                                            bitrate: e.bitrate
                                        },
                                        uriType: e.uriType,
                                        displayTitle: _.metadata.name,
                                        displayGroup: _.metadata.group_name,
                                        displayDuration: _.metadata.duration,
                                        playbackService: "track-playback"
                                    },
                                    stateId: l.state_id ? l.state_id : void 0,
                                    audioGain: e.gainDb
                                };
                            return m && (E.options.mediaPlaybackMode = m.toLowerCase()), r(E)
                        })
                    })
                }
                setPaused(e) {
                    this._pausedState = e
                }
                isPaused() {
                    return this._currentStateIndex && this._currentStateIndex < 0 && this._currentState && this._currentState.transitions.advance ? !!this._currentState.transitions.advance.paused : this._pausedState
                }
                setInitialPosition(e) {
                    this._initialPlaybackPosition = e
                }
                setStateMachine(e) {
                    this._stateMachine = e
                }
                setDeviceId(e) {
                    this._deviceId = e
                }
                setContextMetadata(e) {
                    this._contextMetadata = e
                }
                getContextMetadata() {
                    return this._contextMetadata || {}
                }
                startAtState(e) {
                    let t = this._stateMachine && this._stateMachine.states[e.state_index];
                    if (!t) throw new is(r.TP_MISSING_INITIAL_STATE, "Invalid state reference.");
                    let i = t.transitions;
                    this._currentStateIndex = -1, this._currentState = {
                        decoy: !0,
                        paused: !!e.paused,
                        track: -1,
                        state_id: null,
                        transitions: {
                            advance: e,
                            show_next: i.show_next,
                            show_prev: i.show_prev,
                            skip_next: e,
                            skip_prev: i.skip_prev
                        },
                        options: t.options,
                        duration_override: t.duration_override,
                        position_offset: t.position_offset
                    }
                }
                setCurrentState(e) {
                    let t = e.state_index;
                    this._currentStateIndex = t, this._currentState = this._stateMachine && this._stateMachine.states[t]
                }
                getStateMachine() {
                    return this._stateMachine
                }
                getInternalStateRef() {
                    let e = this._pausedState,
                        t = this._currentStateIndex;
                    if (!t) return null;
                    if (t && t < 0) {
                        let i = this._currentState && this._currentState.transitions.advance;
                        i && (t = i.state_index, e = !!i.paused)
                    }
                    return {
                        paused: e,
                        state_index: t
                    }
                }
                getStateRef() {
                    let e, t, i = this._stateMachine;
                    if (!i || null === this._currentStateIndex) return null;
                    if (this._currentStateIndex < 0) {
                        let r = this._currentState && this._currentState.transitions.advance;
                        r && (e = i.states[r.state_index], t = r.paused)
                    } else e = i.states[this._currentStateIndex], t = this._pausedState;
                    return e ? {
                        state_machine_id: i.state_machine_id,
                        state_id: e.state_id,
                        paused: !!t
                    } : null
                }
                getCurrentTrack() {
                    let e, t = this._stateMachine;
                    if (!t || null === this._currentStateIndex) return null;
                    if (this._currentStateIndex < 0) {
                        let i = this._currentState && this._currentState.transitions.advance;
                        i && (e = t.states[i.state_index])
                    } else e = t.states[this._currentStateIndex];
                    return e ? t.tracks[e.track] : null
                }
                startAt() {
                    return Promise.resolve(h.SUCCESS)
                }
                setShuffle() {
                    return Promise.resolve(h.SUCCESS)
                }
                setRepeatMode() {
                    return Promise.resolve(h.SUCCESS)
                }
                next(e) {
                    let t = this._currentState,
                        i = null;
                    if (t) {
                        let r = t.transitions;
                        e.reason === l.FORWARD_BUTTON ? "skip_next" in r && (i = r.skip_next) : "advance" in r && (i = r.advance)
                    }
                    return this._transitionTo(e, i, !1)
                }
                peekNext(e) {
                    let t = this._currentState,
                        i = null;
                    if (t) {
                        let r = t.transitions;
                        e.reason === l.FORWARD_BUTTON ? "skip_next" in r && (i = r.skip_next) : "advance" in r && (i = r.advance)
                    }
                    return this._transitionTo(e, i, !0)
                }
                previous(e) {
                    let t = this._currentState,
                        i = null;
                    return t && (i = t.transitions.skip_prev), this._transitionTo(e, i, !1)
                }
                translatePosition(e) {
                    var t, i;
                    return (null != (i = null == (t = this._currentState) ? void 0 : t.position_offset) ? i : 0) + e
                }
                translateDuration(e) {
                    var t, i;
                    return null != (i = null == (t = this._currentState) ? void 0 : t.duration_override) ? i : e
                }
                handleSeek(e, t) {
                    var i;
                    return (null == (i = this._currentState) ? void 0 : i.duration_override) && t.reason !== l.REMOTE ? t.listConstants.IGNORE : e
                }
                allowSeeking() {
                    return !!this._currentState && !this._currentState.disallow_seeking
                }
                getCurrentState() {
                    return this._currentState
                }
            }
            let ip = /^https:\/\//,
                im = {
                    [_.FILE_URLS_MP3]: p.MP3,
                    [_.FILE_URLS_EXTERNAL]: p.MP3,
                    [_.FILE_IDS_MP3]: p.MP3,
                    [_.FILE_IDS_MP4]: p.MP4,
                    [_.FILE_IDS_MP4_DUAL]: p.MP4,
                    [_.FILE_IDS_CBCS]: p.MP4_CBCS,
                    [_.FILE_IDS_MP4FLAC]: p.MP4_FLAC,
                    [_.MANIFEST_IDS_VIDEO]: p.MANIFEST_ID,
                    [_.MANIFEST_URLS_VIDEO_AD]: p.AD_MANIFEST,
                    [_.MANIFEST_URLS_AUDIO_AD]: p.AD_MANIFEST
                };
            class iE {
                constructor(e) {
                    this._descriptor = e.descriptor, this._listPlayer = e.listPlayer
                }
                static create(e) {
                    return new iE(e)
                }
                _resolveFromStateTrack(e, t, i) {
                    var r, a, n, s;
                    let o = e.manifest,
                        l = e.metadata.uri,
                        d = (0, ia.o_h)(l),
                        u = null;
                    for (let e of i) {
                        let i = o[e];
                        if (i)
                            for (let o of i) {
                                let i, c;
                                if (!o.file_id && !ip.test(null != (r = o.file_url) ? r : "")) continue;
                                let h = !!(d && (d.type === ia.NQG.AD || d.type === ia.NQG.INTERRUPTION));
                                if (e === _.FILE_IDS_MP3 && !h) continue;
                                if (i = o.track_type ? o.track_type.toLowerCase() : e === _.MANIFEST_IDS_VIDEO ? "video" : "audio", o.format) {
                                    let e = parseInt(o.format, 10);
                                    g[e] && (c = e)
                                }
                                let m = null != (a = o.bitrate) ? a : e === _.FILE_IDS_MP4FLAC ? 1411200 : 128e3,
                                    E = null != (n = o.bitrate) ? n : e === _.FILE_IDS_MP4FLAC ? 7e5 : 128e3,
                                    f = im[e];
                                if (u = {
                                        uri: l,
                                        uriType: d && d.type ? d.type : void 0,
                                        fileId: null != (s = o.file_id) ? s : "",
                                        resolvedURL: o.file_url,
                                        mediaType: i,
                                        format: f,
                                        bitrate: E,
                                        fileFormat: null != c ? c : void 0,
                                        playbackQuality: o.audio_quality,
                                        hifi_status: o.hifi_status,
                                        impressionURL: o.impression_url,
                                        impressionURLs: o.impression_urls,
                                        gainDb: o.gain_db,
                                        isAd: h,
                                        noLog: !1,
                                        noTSV: h,
                                        noManifest: f === p.MP3,
                                        playable: !0
                                    }, e === _.MANIFEST_IDS_VIDEO || m <= t) return u
                            }
                    }
                    return u
                }
                resolveFromStateTrack(e) {
                    return Promise.all([Promise.resolve(this._descriptor), this._listPlayer.getCurrentBandwidth()]).then(([t, i]) => this._resolveFromStateTrack(e, i, t.getManifestFormats()))
                }
            }
            let ig = {
                threshold: 1e3,
                timestamp: 0,
                blockInitial: !1
            };
            class iy {
                constructor(e, t = {}) {
                    this._cancelFn = null, this._deferredTimer = 0, this._fn = e, this._cancelFn = t.cancel || null, this._threshold = t.threshold || ig.threshold, this._ts = t.initialTimetamp || ig.timestamp, this._blockInital = t.blockInitial || ig.blockInitial
                }
                _deferFn(e) {
                    this._fn.apply(this._fn, e)
                }
                _deferPromise(e, t) {
                    this._fn.apply(this._fn, e).then(e => {
                        t.resolve(e)
                    })
                }
                sync(...e) {
                    let t = Date.now() - this._ts;
                    if (this._ts = Date.now(), t < this._threshold) {
                        this._cancelFn && this._deferredTimer && this._cancelFn(), clearTimeout(this._deferredTimer), this._deferredTimer = setTimeout(this._deferFn.bind(this, e), this._threshold);
                        return
                    }
                    if (!0 === this._blockInital) return void this.sync.apply(this, e);
                    this._fn.apply(this._fn, e)
                }
                async (...e) {
                    let t = Date.now() - this._ts;
                    if (this._ts = Date.now(), t < this._threshold) {
                        this._cancelFn && this._deferredTimer && this._cancelFn(), clearTimeout(this._deferredTimer);
                        let t = (0, V.u)();
                        return this._deferredTimer = setTimeout(this._deferPromise.bind(this, e, t), this._threshold), t.promise
                    }
                    return !0 === this._blockInital ? this.async.apply(this, e) : this._fn.apply(this._fn, e)
                }
                setCancel(e) {
                    this._cancelFn = e
                }
            }! function(e) {
                e.TRACK_DATA_FINALIZED = "track_data_finalized", e.DEREGISTER = "deregister", e.REGISTER = "register", e.BEFORE_TRACK_LOAD = "before_track_load", e.CAPPED = "capped", e.ERROR = "error", e.PAUSE = "pause", e.RESUME = "resume", e.PLAYED_THRESHOLD_REACHED = "played_threshold_reached", e.POSITION_CHANGED = "position_changed", e.SPEED_CHANGED = "speed_changed", e.STARTED_PLAYING = "started_playing", e.PROGRESS = "progress", e.PING = "ping", e.MODIFY_CURRENT_STATE = "modify_current_state", e.STATE_CLEAR = "state_clear", e.VIDEO_SURFACE_CHANGED = "video_surface_changed", e.IS_VIDEO_ON_CHANGED = "is_video_on_changed", e.MEDIA_PLAYBACK_MODE_CHANGED = "media_playback_mode_changed", e.VIDEO_VISIBILITY_CHANGED = "video_visibility_changed"
            }(C || (C = {})),
            function(e) {
                e.FATAL = "Fatal", e.ERROR = "Error", e.WARNING = "Warning"
            }(O || (O = {}));
            var iv = i(26115);
            let iT = Z.m.forTag("tpapiclient"),
                iS = Z.m.forTag("tpapiclient.endsong"),
                iP = Z.m.forTag("tpapiclient.endsongs"),
                ib = /^hm:\/\/track-playback\/v1/,
                iR = /^hm:\/\/play-token\/lost/,
                iI = function(e, t) {
                    let i = e.getStatusFamily();
                    return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                },
                iA = {
                    condition: iI,
                    maxRetries: 8
                },
                iL = {
                    condition: iI,
                    maxRetries: 2
                };
            class iD extends Y.bk {
                constructor(e) {
                    super(), this._deviceId = null, this._sequenceNumber = 0, this._currentContext = null, this._loading = !1, this._lastSentStateUpdatePayload = null, this._isSendingConflict = !1, this._queuedRejectedStates = [], this._isSendingUpdate = !1, this._queueSendUpdate = [], this._currentTrackInfo = {}, this._registered = !1, this._isDeregistering = !1, this._waitingForTrackingData = (0, V.u)(), this._lastProcessedStateId = null, this._limitStateUpdates = !1, this._lastUpdateStateMonotonicTime = (0, G.X)(), this._initialUpdateSent = !1, this._startedPlayingUpdateSent = !1, this._nextFinalizedDataPayload = null, this._switchingContext = !1, this._connectionId = null, this._transport = e.transport, this._logger = e.logger, this._endpoint = e.endpoint || "http://@webgate/track-playback", this._listPlayer = e.listPlayer, this._ListClass = e.ListClass, this._currentGaiaVolume = 65535 * e.initialVolume, this._clientVersion = e.clientVersion, this._manifestTrackResolver = e.manifestTrackResolver, this._currentTrackInfo.isVideoVisible = e.initialIsVideoVisible, this._currentTrackInfo.videoSurface = e.initialVideoSurface, this._descriptorPromise = Promise.resolve(e.descriptor), this._init(), this._performCommand = this._performCommand.bind(this), this._handleRegisterResponse = this._handleRegisterResponse.bind(this), this._handleStateConflictResponse = this._handleStateConflictResponse.bind(this), this.register = this.register.bind(this), this._parseDescriptor = this._parseDescriptor.bind(this), this._volumeDebouncer = new iy(this._sendVolume.bind(this), {
                        blockInitial: !0
                    })
                }
                static create(e) {
                    return new iD(e)
                }
                _init() {
                    this._waitingForTrackingData = (0, V.u)(), this._waitingForTrackingData.resolve(!0), this._transport.on(this._transport.EVENT_CONNECTION_ID, this._onConnectionId.bind(this)), this._transport.matchMessages(iR, this._onPlayTokenLost.bind(this)), this._transport.matchMessages(ib, this._onTrackPlaybackMessage.bind(this)), this._listPlayer.addListeners({
                        [eL.J.LIST_PLAYER_CAPPED]: this._onCapped.bind(this),
                        [eL.J.LIST_PLAYER_ERROR_SYNC]: this._onError.bind(this),
                        [eL.J.LIST_PLAYER_BEFORE_NEXT]: this._onBeforeTrackChange.bind(this),
                        [eL.J.LIST_PLAYER_BEFORE_PREVIOUS]: this._onBeforeTrackChange.bind(this),
                        [eL.J.LIST_PLAYER_BEFORE_PLAYER_LOAD]: this._onBeforePlayerLoad.bind(this),
                        [eL.J.LIST_PLAYER_PLAYER_LOAD]: this._onListPlayerLoad.bind(this),
                        [eL.J.LIST_PLAYER_BEFORE_TRACK_LOAD]: this._onBeforeTrackLoad.bind(this),
                        [eL.J.LIST_PLAYER_POSITION_CHANGED]: this._onPositionChanged.bind(this),
                        [eL.J.LIST_PLAYER_DURATION_CHANGED]: this._onDurationChanged.bind(this),
                        [eL.J.LIST_PLAYER_VOLUME_CHANGED]: this._onVolumeChanged.bind(this),
                        [eL.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]: this._onSpeedChanged.bind(this),
                        [eL.J.LIST_PLAYER_PAUSED]: this._onPlayPause.bind(this, !0),
                        [eL.J.LIST_PLAYER_PLAYING]: this._onPlayPause.bind(this, !1),
                        [eL.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]: this._onPlayThresholdReached.bind(this),
                        [eL.J.LIST_PLAYER_PROGRESS]: this._onProgress.bind(this),
                        [eL.J.LIST_PLAYER_TRACKING_DATA_CREATED]: this._onTrackDataCreatedEvent.bind(this),
                        [eL.J.LIST_PLAYER_TRACKING_DATA_FINALIZED]: this._onTrackDataFinalizedEvent.bind(this),
                        [eL.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: this._onVisibilityChanged.bind(this),
                        [eL.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: this._onMediaPlaybackModeChanged.bind(this),
                        [eL.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: this._onVideoSurfaceChanged.bind(this)
                    }), this._descriptorPromise.then(e => {
                        e.on("descriptor_changed", () => {
                            this._parseDescriptor(e), this._updateDeviceInfo()
                        })
                    })
                }
                _onBeforeTrackChange() {
                    var e, t;
                    if (this._nextFinalizedDataPayload || this._switchingContext) return;
                    let i = null != (t = null == (e = this._currentContext) ? void 0 : e.getStateRef()) ? t : null,
                        r = this._generateStatePayload(i, C.TRACK_DATA_FINALIZED);
                    this._setSequenceNumber(r), this._nextFinalizedDataPayload = r
                }
                _onBeforeTrackLoad(e) {
                    var t;
                    this._loading = !0, this._switchingContext = !1, this._currentTrackInfo.duration = void 0, this._stateEventPositionOverride = null == (t = e.data.newTrack.options) ? void 0 : t.position
                }
                _onBeforePlayerLoad(e) {
                    var t, i, r, a, n, s, o, l, _;
                    let d = this._currentContext;
                    if (!d) return;
                    let u = d.getCurrentTrack(),
                        c = d.getCurrentState(),
                        h = null != (i = null != (t = null == c ? void 0 : c.duration_override) ? t : null == u ? void 0 : u.metadata.duration) ? i : 0,
                        {
                            data: p
                        } = e,
                        m = p.track.metadata || {},
                        E = null == (r = null == c ? void 0 : c.options) ? void 0 : r.playback_speed;
                    this._currentTrack = p.track, this._currentTrackInfo = {
                        duration: h,
                        mediaType: p.track.mediaType.toUpperCase(),
                        fileFormat: p.track.fileFormat,
                        bitrate: null == (n = null == (a = p.logData) ? void 0 : a.format) ? void 0 : n.bitrate,
                        playbackQuality: m.playbackQuality,
                        hifiStatus: m.hifiStatus,
                        isPlaybackSpeedRestricted: E ? !!(null == (o = null == (s = null == c ? void 0 : c.restrictions) ? void 0 : s.disallow_setting_playback_speed_reasons) ? void 0 : o.length) : !!(null == (l = p.track.options) ? void 0 : l.useDefaultPlaybackSpeed),
                        currentPlaybackSpeed: null != E ? E : this._currentTrackInfo.selectedPlaybackSpeed,
                        selectedPlaybackSpeed: null != E ? E : this._currentTrackInfo.selectedPlaybackSpeed,
                        isMediaPlaybackModeVideo: "video" === ((null == (_ = p.track.options) ? void 0 : _.mediaPlaybackMode) || p.track.mediaType),
                        videoSurface: this._currentTrackInfo.videoSurface,
                        isVideoVisible: this._currentTrackInfo.isVideoVisible
                    };
                    let f = p.options;
                    d.setPaused(!f.autoplay), this._setCurrentTrackPosition(f && f.position || 0), this._updateState(C.BEFORE_TRACK_LOAD), this._startedPlayingUpdateSent = !1, this._initialUpdateSent = !1
                }
                _onCapped() {
                    this._listPlayer.clear(l.CAPPED), this._currentContext = null, this._updateState(C.CAPPED), this._setCurrentTrackPosition(void 0), this._lastProcessedStateId = null, this.emit("state_cleared", null)
                }
                _onConnectionId(e) {
                    this._connectionId = e.data.id, this._isDeregistering || (this._registered = !1, Promise.all([this._listPlayer.getVolume(), this._descriptorPromise.then(this._parseDescriptor)]).then(this.register, e => {
                        iT.info("Skipping registration due to error", e), this.emit("registration_aborted", {
                            reason_error: e,
                            source: n.TRACK_PLAYBACK
                        })
                    }).catch(() => {}))
                }
                _onDurationChanged(e) {
                    var t;
                    let i = null == (t = this._currentContext) ? void 0 : t.getCurrentTrack();
                    (null == i ? void 0 : i.metadata.uri) === e.data.track.uri && this._currentTrackInfo.duration !== e.data.duration && (this._currentTrackInfo.duration = e.data.duration, this._setCurrentTrackPosition(e.data.position), this._emitStateChanged())
                }
                _onError(e) {
                    "position" in e.data && (this._setCurrentTrackPosition(e.data.position), this._updateState(C.ERROR))
                }
                _onSpeedChanged(e) {
                    this._currentTrackInfo.currentPlaybackSpeed = e.data.playback_speed, this._currentTrackInfo.selectedPlaybackSpeed = e.data.playback_speed_selected, this._setAllTrackPositions(e.data.position), this._updateState(C.SPEED_CHANGED)
                }
                _onPlayPause(e, t) {
                    let i = this._currentContext;
                    i && (i.setPaused(e), "position" in t.data && this._setAllTrackPositions(t.data.position), t.data.track.stateId && this._shouldSendUpdateForEvent(t.data.track.stateId) ? this._updateState(e ? C.PAUSE : C.RESUME) : (this._lastProcessedStateId = null, this._emitStateChanged()))
                }
                _onPlayThresholdReached(e) {
                    this._initialUpdateSent = !0, this._setAllTrackPositions(e.data.position), this._updateState(C.PLAYED_THRESHOLD_REACHED)
                }
                _onPlayTokenLost() {
                    this._listPlayer.pause().catch(function() {})
                }
                _onPositionChanged(e) {
                    this._loading || (this._setCurrentTrackPosition(e.data.position), this._logger.logClientEvent({
                        source: "harmony:track_playback:client",
                        source_version: z.tagged,
                        source_vendor: "spotify",
                        event: e.type,
                        event_version: "1.0.0",
                        json_data: {
                            track: e.data.track,
                            event_position: e.data.position,
                            prev_position: this._previousTrackPosition,
                            curr_position: this._currentTrackPosition
                        }
                    }, "object"), e.data.position === this._previousTrackPosition && this._logger.logClientEvent({
                        source: "harmony:track_playback:client",
                        source_version: z.tagged,
                        source_vendor: "spotify",
                        event: `${e.type} - same position as previous event`,
                        event_version: "1.0.0",
                        json_data: {
                            track: e.data.track,
                            event_position: e.data.position,
                            prev_position: this._previousTrackPosition,
                            curr_position: this._currentTrackPosition
                        }
                    }, "object"), e.data.track && this._shouldSendUpdateForEvent(e.data.track.stateId) ? this._updateState(C.POSITION_CHANGED) : (this._lastProcessedStateId = null, this._emitStateChanged()))
                }
                _onProgress(e) {
                    if (this._loading || !this._currentContext || (this._setAllTrackPositions(e.data.position), !this._startedPlayingUpdateSent && e.data.played > 1e3 && (this._startedPlayingUpdateSent = !0, this._updateState(C.STARTED_PLAYING)), !e.data.logData)) return;
                    let t = this._currentContext.getCurrentTrack(),
                        i = t && "number" == typeof t.ms_playing_update_interval ? t.ms_playing_update_interval : null;
                    this._initialUpdateSent && null !== i && i > 0 && (0, G.X)() - this._lastUpdateStateMonotonicTime > i && this._updateState(C.PROGRESS)
                }
                _onTrackDataCreatedEvent() {
                    this._waitingForTrackingData = (0, V.u)()
                }
                _onTrackDataFinalizedEvent(e) {
                    let t = this._nextFinalizedDataPayload;
                    t && (t.playback_stats = e.data.playbackStats, this._updateState(C.TRACK_DATA_FINALIZED, t)), this._nextFinalizedDataPayload = null, this._waitingForTrackingData && this._waitingForTrackingData.resolve(!0)
                }
                _onListPlayerLoad(e) {
                    this._loading = !1;
                    let t = this._currentContext;
                    t && (t.setPaused(!e.data.autoplay), this._setCurrentTrackPosition(e.data.position || 0))
                }
                _onTrackPlaybackMessage(e) {
                    let t = e.payloads;
                    Array.isArray(t) && t.length && this._performCommand(t[0])
                }
                _onVolumeChanged(e) {
                    var t;
                    if (this._currentGaiaVolume = 65535 * e.data.volume, !this._registered) return;
                    let i = null != (t = e.data.commandId) ? t : "",
                        r = {
                            seq_num: void 0,
                            volume: this._currentGaiaVolume,
                            command_id: i
                        };
                    this._volumeDebouncer.async(r)
                }
                _onMediaPlaybackModeChanged(e) {
                    this._currentTrackInfo.isMediaPlaybackModeVideo = "video" === e.data.playbackMode, this._updateState(C.MEDIA_PLAYBACK_MODE_CHANGED)
                }
                _onVisibilityChanged(e) {
                    this._currentTrackInfo.isVideoVisible = e.data.visible, this._updateState(C.VIDEO_VISIBILITY_CHANGED)
                }
                _onVideoSurfaceChanged(e) {
                    this._currentTrackInfo.videoSurface = e.data.videoSurface, this._updateState(C.VIDEO_SURFACE_CHANGED)
                }
                _clearSessionData() {
                    this._connectionId = null, this._sequenceNumber = 0, this._currentContext = null, this._lastSentStateUpdatePayload = null, this._isSendingConflict = !1, this._isSendingUpdate = !1, this._queueSendUpdate = [], this._previousTrackPosition = void 0, this._currentTrackPosition = void 0, this._currentTrack = void 0, this._currentTrackInfo = {}, this._lastProcessedStateId = null, this.emit("state_cleared", null)
                }
                _createStateRef(e, t) {
                    if (!t) return null;
                    let i = e.states[t.state_index];
                    if (!i) throw new is(r.TP_CANNOT_CREATE_STATE_REF, "Invalid state reference.");
                    return {
                        state_machine_id: e.state_machine_id,
                        state_id: i.state_id,
                        paused: t.paused
                    }
                }
                _deregisterFromService(e) {
                    let t = null,
                        i = this._currentContext;
                    i && (e && (i.setPaused(!e.playing), this._setAllTrackPositions(e.position)), t = i.getStateRef());
                    let r = this._generateStatePayload(t, C.DEREGISTER);
                    this._setSequenceNumber(r);
                    let a = `${this._endpoint}/v1/devices/${this._deviceId}`;
                    return this._transport.request(a, {
                        authorize: !0,
                        method: "DELETE",
                        payload: JSON.stringify(r),
                        responseType: "json",
                        retry: iL
                    }).then(e => {
                        if (200 !== e.status && 204 !== e.status) return this._registered = !0, !1;
                        let {
                            body: t
                        } = e;
                        return t && (t.endsong && iS.log(t.endsong), t.endsongs && (iP.log(t.endsongs), this.emit("internal_endcontent", {
                            endcontents: t.endsongs
                        }))), this._clearSessionData(), this.emit("deregistered", null), !0
                    })
                }
                _emitError(e) {
                    var t, i, r, a, s, o, l, _, d, u;
                    if (this.emit("error", {
                            error: e,
                            source: n.TRACK_PLAYBACK
                        }), e.registration) return;
                    this._logger.logJSSDKError({
                        source: "tpapi-client",
                        source_version: z.tagged,
                        type: e.code,
                        message: e && e.message,
                        stack: e && e.stack,
                        json_data: e.debug,
                        json_data_version: "1.0.0"
                    }, "object").catch(function(e) {
                        iT.error("Track-Playback Logging Error", e)
                    });
                    let c = e.debug,
                        {
                            isNetworkRelated: h = !1
                        } = c,
                        p = (0, tU.__rest)(c, ["isNetworkRelated"]),
                        m = {
                            sdk_id: this._clientVersion,
                            session_id: this._transport.getInitTime().toString(),
                            device_id: (null == (t = this._deviceInfo) ? void 0 : t.device_id) || em.EMPTY,
                            device_model: (null == (i = this._deviceInfo) ? void 0 : i.model) || em.EMPTY,
                            device_brand: (null == (r = this._deviceInfo) ? void 0 : r.brand) || em.EMPTY,
                            os_name: (null == (a = this._deviceInfo) ? void 0 : a.os_name) || em.EMPTY,
                            os_version: (null == (s = this._deviceInfo) ? void 0 : s.os_version) || em.EMPTY,
                            playback_id: (null == (o = this._currentTrack) ? void 0 : o.logData.playbackId) || em.EMPTY,
                            play_track: (null == (l = this._currentTrack) ? void 0 : l.uri) || em.EMPTY,
                            content_id: (null == (_ = this._currentTrack) ? void 0 : _.fileId) || em.EMPTY,
                            content_type: (null == (d = this._currentTrack) ? void 0 : d.contentType) || em.UNKNOWN,
                            media_type: (null == (u = this._currentTrack) ? void 0 : u.mediaType) || em.UNKNOWN,
                            position: this._currentTrackPosition || 0,
                            trace_id: e_(32),
                            category: e && e.name || em.UNKNOWN,
                            severity: e.unrecoverable ? O.FATAL : O.ERROR,
                            code: e && e.code || em.EMPTY,
                            message: e && e.message || em.EMPTY,
                            http_status_code: e && e.status,
                            is_network_related: h,
                            debug: Object.keys(p).length > 0 ? p : void 0
                        };
                    this._logger.logJSSDKHarmonyError(m).catch(function(e) {
                        iT.error("Track-Playback Logging Error", e)
                    })
                }
                _emitStateChanged() {
                    let e = this._currentContext;
                    if (!e) return;
                    let t = this._currentTrackPosition || 0;
                    void 0 !== this._stateEventPositionOverride && (t = this._stateEventPositionOverride, this._stateEventPositionOverride = void 0), this.emit("state_changed", {
                        position: t,
                        currentTrackInfo: this._currentTrackInfo,
                        stateMachine: e.getStateMachine(),
                        stateRef: e.getInternalStateRef(),
                        paused: e.isPaused(),
                        contextMetadata: e.getContextMetadata(),
                        loading: this._loading
                    })
                }
                _generateStatePayload(e, t) {
                    var i;
                    let r = this._currentTrackInfo,
                        a = (null == e ? void 0 : e.paused) ? 0 : null != (i = this._currentTrackInfo.currentPlaybackSpeed) ? i : 1;
                    return {
                        seq_num: void 0,
                        seq_nums: void 0,
                        state_ref: e,
                        sub_state: {
                            playback_speed: a,
                            position: this._currentTrackPosition,
                            duration: r.duration || void 0,
                            media_type: r.mediaType,
                            bitrate: r.bitrate,
                            audio_quality: r.playbackQuality,
                            format: r.fileFormat,
                            video_surface: r.videoSurface,
                            is_video_on: r.isVideoVisible && r.isMediaPlaybackModeVideo
                        },
                        previous_position: this._previousTrackPosition,
                        playback_stats: void 0,
                        rejected_state_refs: void 0,
                        debug_source: t
                    }
                }
                _handleRegisterResponse(e) {
                    let t;
                    if (429 === e.status) return (t = is.fatal(r.TP_MAX_SUBSCRIPTIONS_REACHED, "Max connections reached")).maxedSubscriptions = !0, t.status = e.status, this.emit("max_subscriptions_reached", {
                        error: t
                    }), Promise.reject(t);
                    if (403 === e.status && e.body && "PREMIUM_REQUIRED" === e.body.error_type ? t = is.fatal(r.TP_REGISTRATION_FAILED_NON_PREMIUM, "Cannot register to Track Playback with non-premium user.") : 200 !== e.status ? t = is.fatal(r.TP_REGISTRATION_FAILED_WITH_STATUS, `track-playback service responded with status ${e.status} when registering device`, {
                            isNetworkRelated: !0
                        }) : e.body || (t = is.fatal(r.TP_NO_RESPONSE_BODY, "Unexpected empty response body from registration request.")), t) return t.status = e.status, Promise.reject(t);
                    let i = e.body;
                    return i.endsong && iS.log(i.endsong), i.endsongs && (iP.log(i.endsongs), this.emit("internal_endcontent", {
                        endcontents: i.endsongs
                    })), this._sequenceNumber = i.initial_seq_num, this._registered = !0, this.emit("registered", {
                        deviceId: this._deviceId
                    }), Promise.resolve(!0)
                }
                _handleStateConflictResponse(e) {
                    var t;
                    if (e.status >= 200 && e.status < 300) {
                        let i = null == (t = e.body) ? void 0 : t.commands;
                        if (!i || !i.length) return;
                        for (let e = 0, t = i.length; e < t; e++) this._performCommand(i[e])
                    } else {
                        let t = new is(r.TP_CONFLICT_REQUEST_FAILED_WITH_STATUS, `Track-Playback service responded with ${e.status}`, {
                            isNetworkRelated: !0
                        });
                        t.status = e.status, this._emitError(t)
                    }
                }
                _handleStateUpdateResponse(e, t) {
                    let i;
                    if (200 !== t.status) return (i = new is(r.TP_PARSE_STATE_UPDATE_FAILED_WITH_STATUS, `Service responded with status ${t.status}`, {
                        isNetworkRelated: !0
                    })).status = t.status, Promise.reject(i);
                    if (!t.body) return (i = new is(r.TP_UPDATE_REQUEST_EMPTY_RESPONSE, "Unexpected empty response body from state update request.")).status = t.status, Promise.reject(i);
                    let a = t.body;
                    a.endsong && iS.log(a.endsong), a.endsongs && (iP.log(a.endsongs), this.emit("internal_endcontent", {
                        endcontents: a.endsongs
                    }));
                    let n = this._currentContext;
                    if (!n) return Promise.resolve();
                    let s = a.state_machine,
                        o = a.updated_state_ref;
                    return this._isCurrentStateRef(e) && (n.setStateMachine(s), n.setCurrentState(o), n.setContextMetadata(a.context_metadata || null), this._emitStateChanged()), Promise.resolve()
                }
                _isCurrentStateRef(e) {
                    let t = this._currentContext ? this._currentContext.getStateRef() : null;
                    return !t && !e || !!t && !!e && t.state_machine_id === e.state_machine_id && t.state_id === e.state_id && t.paused === e.paused
                }
                _logUnsentStateUpdate(e) {
                    iT.info("Unsent state update.", e), this._logger.logClientEvent({
                        source: "tpapi-client",
                        source_version: z.tagged,
                        source_vendor: "spotify",
                        event: "unsent-state-update",
                        event_version: "1.0.0",
                        json_data: e
                    }, "object").catch(e => {
                        iT.error("Track-Playback Logging Error", e)
                    })
                }
                _logout() {
                    this._listPlayer.pause().catch(() => {}), this.emit("state_cleared", null), this.deregister().then(e => {
                        this._currentContext = null, this._setCurrentTrackPosition(void 0), e && this.emit("logout", null)
                    })
                }
                _parseDescriptor(e) {
                    return this._deviceId = e.getId(), this._deviceInfo = e.toTrackPlaybackDeviceInfo(), !0
                }
                _performCommand(e) {
                    switch (e.type) {
                        case "set_volume":
                            this._setVolume(e);
                            break;
                        case "log_out":
                            this._logout();
                            break;
                        case "replace_state":
                            this._replaceState(e);
                            break;
                        case "ping":
                            this._updateState(C.PING);
                            break;
                        default:
                            this._emitError(new is(r.TP_UNKNOWN_COMMAND, "Received unknown command.", {
                                command: e
                            }))
                    }
                }
                _rejectState(e) {
                    let t = this._queuedRejectedStates;
                    if (void 0 !== e && t.push(e), !this._registered || this._isSendingConflict || !t.length) return;
                    this._isSendingConflict = !0;
                    let i = t.splice(0, 5),
                        r = this._currentContext ? this._currentContext.getStateRef() : null,
                        a = this._generateStatePayload(r);
                    a.rejected_state_refs = i, this._setSequenceNumbers(a, i.length);
                    let n = () => {
                            this._isSendingConflict = !1, this._rejectState()
                        },
                        s = `${this._endpoint}/v1/devices/${this._deviceId}/state_conflict`;
                    this._transport.request(s, {
                        authorize: !0,
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(a),
                        retry: iL
                    }).then(this._handleStateConflictResponse).then(n, n)
                }
                _replaceState(e) {
                    var t, i, r, a;
                    let n = this._listPlayer,
                        s = e.state_machine,
                        o = e.state_ref,
                        _ = this._createStateRef(s, o);
                    if (!this._isCurrentStateRef(e.prev_state_ref)) return void this._rejectState(_);
                    if (!o) return void this._clearContextAndState();
                    let d = null != (i = null == (t = this._currentContext) ? void 0 : t.getStateRef()) ? i : null;
                    if (null === _) throw Error("Assertion failed: New state reference is null");
                    if (this._currentContext && (null == d ? void 0 : d.state_id) === _.state_id) {
                        let t = this._currentContext;
                        t.setStateMachine(s), t.setCurrentState(o), t.setContextMetadata(e.context_metadata || null);
                        let i = !1;
                        t.isPaused() !== o.paused && (i = !0), o.paused ? (t.setPaused(!0), n.pause()) : (t.setPaused(!1), n.resume());
                        let a = s.states[o.state_index],
                            _ = null == (r = null == a ? void 0 : a.options) ? void 0 : r.playback_speed;
                        _ && _ !== this._currentTrackInfo.currentPlaybackSpeed && (n.setPlaybackSpeed(_), i = !0);
                        let d = parseInt(e.seek_to, 10);
                        t.allowSeeking() && !isNaN(d) && (n.seek(d, l.REMOTE), this._setCurrentTrackPosition(d), i = !0);
                        let u = null == a ? void 0 : a.preferred_media_type;
                        u && (iT.log(`Setting media playback mode to ${u}`), n.setMediaPlaybackMode(u.toLowerCase())), i ? this._emitStateChanged() : (this._lastProcessedStateId = null, this._updateState(C.MODIFY_CURRENT_STATE))
                    } else {
                        this._lastProcessedStateId = null != (a = _.state_id) ? a : null, this._currentContext && this._onBeforeTrackChange();
                        let t = this._ListClass.create("spotify:app:jsspeaker", this._manifestTrackResolver);
                        t.setStateMachine(s), t.startAtState(o), this._deviceId && t.setDeviceId(this._deviceId), this._currentContext = t;
                        let i = e.seek_to || 0;
                        t.setInitialPosition(i), this._loading = !0, this._switchingContext = !0, n.play(t, {
                            reason: l.REMOTE
                        })
                    }
                }
                _clearContextAndState() {
                    let e = this._listPlayer;
                    e.pause().catch(function() {}), e.clear(l.REMOTE), this._currentContext = null, this._updateState(C.STATE_CLEAR), this._setAllTrackPositions(void 0), this._lastProcessedStateId = null, this.emit("state_cleared", null), this._loading = !0
                }
                _sendDevicesRequest(e, t) {
                    let i = `${this._endpoint}/v1/devices`;
                    return "PUT" === e && (i = `${i}/${this._deviceId}`), this._transport.request(i, {
                        authorize: !0,
                        method: e || "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(t),
                        retry: iA
                    })
                }
                _sendVolume(e) {
                    let t = `${this._endpoint}/v1/devices/${this._deviceId}/volume`;
                    return this._setSequenceNumber(e), this._transport.request(t, {
                        authorize: !0,
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        payload: JSON.stringify(e)
                    })
                }
                _setAllTrackPositions(e) {
                    this._previousTrackPosition = e, this._currentTrackPosition = e
                }
                _setCurrentTrackPosition(e) {
                    (void 0 === e || void 0 === this._currentTrackPosition || e !== this._currentTrackPosition) && (this._previousTrackPosition = this._currentTrackPosition, this._currentTrackPosition = e)
                }
                _setSequenceNumber(e) {
                    return void 0 === e.seq_num && (e.seq_num = ++this._sequenceNumber), e
                }
                _setSequenceNumbers(e, t) {
                    e.seq_nums = [];
                    for (let i = 0; i < t; i++) e.seq_nums.push(++this._sequenceNumber);
                    return e
                }
                _setVolume(e) {
                    var t;
                    let i = e.volume / 65535;
                    this._listPlayer.setVolume(i, null != (t = e.command_id) ? t : `tpcommand-${Date.now()}`)
                }
                _shouldSendUpdateForEvent(e) {
                    return !!(e && e !== this._lastProcessedStateId)
                }
                _updateDeviceInfo() {
                    this._registered && this._deviceInfo && this._sendDevicesRequest("PUT", this._deviceInfo).then(e => {
                        204 === e.status && this.emit("registration_updated", null)
                    })
                }
                _updateState(e, t) {
                    var i, a;
                    let n, s;
                    if (!this._registered) return;
                    if (t ? (n = t.state_ref, s = t) : (n = null != (a = null == (i = this._currentContext) ? void 0 : i.getStateRef()) ? a : null, s = this._generateStatePayload(n, e)), !this._shouldSendPayload(s)) return void iT.info("State update ignored (duplicate).", s);
                    if (this._emitStateChanged(), this._isSendingUpdate && this._limitStateUpdates) {
                        this._logUnsentStateUpdate(s), this._queueSendUpdate.push(e);
                        return
                    }
                    this._isSendingUpdate = !0, this._queueSendUpdate = [], this._setSequenceNumber(s), this._lastSentStateUpdatePayload = s;
                    let o = () => {
                            this._isSendingUpdate = !1, this._queueSendUpdate.length && this._updateState(this._queueSendUpdate[this._queueSendUpdate.length - 1]), iT.info("State update sent.", e, s)
                        },
                        l = `${this._endpoint}/v1/devices/${this._deviceId}/state`;
                    this._lastUpdateStateMonotonicTime = (0, G.X)(), this._transport.request(l, {
                        authorize: !0,
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        responseType: "json",
                        payload: JSON.stringify(s),
                        retry: iA
                    }).then(this._handleStateUpdateResponse.bind(this, n)).then(o, e => {
                        "object" == typeof e && null !== e && "code" in e ? this._emitError(e) : this._emitError(new is(r.TP_STATE_UPDATE_FAILED, `${e}`, {
                            isNetworkRelated: !0
                        })), o()
                    })
                }
                _shouldSendPayload(e) {
                    let t = this._lastSentStateUpdatePayload;
                    if (!t || !t.state_ref || !e.state_ref) return !0;
                    let i = e.state_ref,
                        r = t.state_ref;
                    if (i.paused !== r.paused || i.state_id !== r.state_id || i.state_machine_id !== r.state_machine_id) return !0;
                    let a = e.sub_state,
                        n = t.sub_state;
                    return a.playback_speed !== n.playback_speed || a.position !== n.position || a.video_surface !== n.video_surface || a.is_video_on !== n.is_video_on || e.previous_position !== t.previous_position || Math.abs((a.duration || 0) - (n.duration || 0)) >= 51
                }
                stop() {
                    return !!this._registered && !!this._currentContext && (this._clearContextAndState(), !0)
                }
                deregister() {
                    return this._registered ? (this._isDeregistering = !0, this._registered = !1, this._listPlayer.getPlayerState().then(e => Promise.all([this._deregisterFromService(e), this._waitingForTrackingData.promise, this._listPlayer.stop().catch(() => {})]).then(([e]) => (this._isDeregistering = !1, e)), () => (this._isDeregistering = !1, this._registered = !0, !1))) : Promise.resolve(!1)
                }
                register() {
                    let e;
                    if (this._registered) return Promise.resolve(!1);
                    if (!this._deviceInfo) return Promise.reject(Error("Need DeviceInfo for device registration."));
                    if (!this._connectionId) return Promise.reject(Error("Need connection-id for device registration"));
                    let t = this._currentContext;
                    return t && (e = this._generateStatePayload(t.getStateRef(), C.REGISTER), this._setSequenceNumber(e)), this._sendDevicesRequest("POST", {
                        device: this._deviceInfo,
                        outro_endcontent_snooping: "true" === iv.env.OUTRO_SNOOPING,
                        connection_id: this._connectionId,
                        client_version: this._clientVersion,
                        previous_session_state: e,
                        volume: this._currentGaiaVolume
                    }).then(this._handleRegisterResponse).catch(e => (e && !e.maxedSubscriptions && (e.registration = !0, this._emitError(e)), !1))
                }
                hasOptimisticUpdates() {
                    return !1
                }
            }
            let iC = Z.m.forTag("transport.server_time");
            class iO {
                constructor(e) {
                    this._serverTime = 0, this._serverTimeFetchedAt = null, this._transport = e
                }
                static create(e) {
                    return new iO(e)
                }
                _handleResponse(e, t) {
                    var i;
                    let r = (0, G.X)();
                    return t.status !== ee.s.OK ? this._handleError(`Status ${t.status}`) : "number" != typeof(null == (i = t.body) ? void 0 : i.timestamp) ? this._handleError("Invalid response") : (this._serverTimeFetchedAt = r, this._serverTime = t.body.timestamp + Math.round((r - e) / 2), this._serverTime)
                }
                _handleError(e) {
                    return iC.error(`Cannot fetch server time: ${e}`), this._serverTimeFetchedAt = (0, G.X)(), this._serverTime = Date.now(), this._serverTime
                }
                get() {
                    let e = (0, G.X)();
                    return this._transport.request("@webgate/melody/v1/time", {
                        responseType: "json",
                        signal: (0, B.createAbortSignalWithTimeout)(1e3)
                    }).then(this._handleResponse.bind(this, e), this._handleError.bind(this))
                }
                getApproximate() {
                    if (!this._serverTime || null === this._serverTimeFetchedAt) return this.get(), Date.now();
                    let e = (0, G.r)(this._serverTimeFetchedAt);
                    return e > 18e4 && this.get(), this._serverTime + e
                }
            }! function(e) {
                e.LOCAL_PLAYER_DISABLED = "local_player_disabled", e.STOPPED = "stopped", e.REMOTE_ACTIVATED = "remote_activated", e.UNKNOWN = "unknown"
            }(k || (k = {}));
            class ik extends Error {
                constructor(e, t) {
                    super(t), this.status = -1, this.maxedSubscriptions = !1, this.unrecoverable = !1, this.debug = {}, this.code = e, this.name = "PlayerAPIClientError"
                }
                static fatal(e, t) {
                    let i = new ik(e, t);
                    return i.unrecoverable = !0, i
                }
            }
            class iN {
                constructor(e) {
                    this._transport = e.transport, this._metadataCache = new eA(e.cacheSize || 20)
                }
                static create(e) {
                    return new iN(e)
                }
                _decorateTrackWindow(e) {
                    let t, i, r, a = this._metadataCache,
                        n = {
                            current_track: null,
                            next_tracks: [],
                            previous_tracks: []
                        },
                        s = e => {
                            var t;
                            let i = null == (t = null == e ? void 0 : e.metadata) ? void 0 : t.track_player;
                            e && i && (e.media_type = "video" === i ? "video" : "audio")
                        };
                    for (e.current_track && (i = a && e.current_track && ("uri" in e.current_track) && a.get(e.current_track.uri), n.current_track = Object.assign({
                            uid: e.current_track.uid,
                            metadata: e.current_track.metadata
                        }, i || e.current_track), s(n.current_track)), t = e.next_tracks.length; t--;) r = e.next_tracks[t], i = a && r && "uri" in r && a.get(r.uri), n.next_tracks[t] = Object.assign({
                        uid: r.uid,
                        metadata: r.metadata
                    }, i || r), s(n.next_tracks[t]);
                    for (t = e.previous_tracks.length; t--;) r = e.previous_tracks[t], i = a && r && "uri" in r && a.get(r.uri), n.previous_tracks[t] = Object.assign({
                        uid: r.uid,
                        metadata: r.metadata
                    }, i || r), s(n.previous_tracks[t]);
                    return n
                }
                _buildTrackList(e) {
                    let t = [],
                        i = {};
                    for (let r of [e.current_track, ...e.next_tracks, ...e.previous_tracks]) r && !i[r.uri] && t.push(r.uri);
                    return t
                }
                _cacheMetadata(e, t) {
                    let i = [],
                        r = [],
                        a = [],
                        n = this._metadataCache;
                    for (let s of e) {
                        if (n.get(s)) continue;
                        let e = (0, ia.o_h)(s);
                        e && (e.type === ia.NQG.TRACK ? r.push(e.id) : (null == t ? void 0 : t.contentType) === "chapter" ? a.push(e.id) : e.type === ia.NQG.EPISODE && i.push(e.id))
                    }
                    return i.length || r.length || a.length ? Promise.all([this._requestMultiData("episodes", i), this._requestMultiData("tracks", r), this._requestMultiData("chapters", a)]).then(([e, t, i]) => !!e || !!t || !!i) : Promise.resolve(!0)
                }
                _requestMultiData(e, t) {
                    if (!t.length) return Promise.resolve(!1);
                    let i = this._metadataCache,
                        r = "https://@webapi/v1/" + e + "?ids=" + t.join(",") + "&market=from_token";
                    return this._transport.request(r, {
                        responseType: "json"
                    }).then(t => {
                        var r;
                        if (200 !== t.status) return !1;
                        let a = null == (r = t.body) ? void 0 : r[e];
                        if (!a) return !1;
                        let n = a.length;
                        for (; n--;) {
                            let t = a[n];
                            t && ("episodes" === e ? t = this._formatEpisodeData(t) : "chapters" === e ? t = this._formatChapterData(t) : (t.track_type = "audio", t.media_type = "audio", t.content_type = "tracks" === e ? "music" : "undefined"), i && i.set(t.uri, t), i && t.linked_from && t.linked_from.uri && i.set(t.linked_from.uri, t))
                        }
                        return !0
                    })
                }
                _formatEpisodeData(e) {
                    let t = "audio" === e.show.media_type ? "audio" : "video";
                    return {
                        id: e.id,
                        uri: e.uri,
                        type: "episode",
                        media_type: t,
                        track_type: e.show.media_type,
                        content_type: "podcast",
                        name: e.name,
                        artists: [{
                            uri: e.show.uri,
                            name: e.show.publisher
                        }],
                        album: {
                            uri: e.show.uri,
                            name: e.show.name,
                            images: e.images
                        },
                        duration_ms: e.duration_ms || 0,
                        is_playable: !0
                    }
                }
                _formatChapterData(e) {
                    return {
                        id: e.id,
                        uri: e.uri,
                        type: "episode",
                        name: e.name,
                        media_type: e.audiobook.media_type,
                        track_type: "audio",
                        content_type: "chapter",
                        artists: [{
                            uri: e.audiobook.uri,
                            name: e.audiobook.name
                        }],
                        album: {
                            name: e.audiobook.name,
                            uri: e.audiobook.uri,
                            images: e.images
                        },
                        duration_ms: e.duration_ms || 0,
                        is_playable: !0
                    }
                }
                formatLocalTrack(e, t) {
                    return e && e.type === ia.NQG.LOCAL_TRACK ? {
                        uri: e.toURI(),
                        type: "local",
                        uid: t,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "music",
                        name: e.track,
                        artists: [{
                            uri: (0, ia.DY5)(e.artist).toURI(),
                            name: e.artist
                        }],
                        album: {
                            uri: (0, ia.dx2)(e.artist, e.album).toURI(),
                            name: e.album,
                            images: [{
                                url: ""
                            }]
                        },
                        duration_ms: e.duration ? 1e3 * e.duration : 0,
                        is_playable: !1
                    } : null
                }
                formatAd(e, t) {
                    if (!e || e.type !== ia.NQG.AD && e.type !== ia.NQG.INTERRUPTION || !t || !t.metadata) return null;
                    let i = t.metadata;
                    return {
                        id: e.id,
                        uri: e.toURI(),
                        type: e.type,
                        uid: t.uid,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "ad",
                        name: i.advertiser,
                        artists: [{
                            uri: i.click_url,
                            name: i.buttonMessage || i.advertiser
                        }],
                        album: {
                            uri: i.click_url,
                            name: i.advertiser,
                            images: [{
                                url: i.image_url
                            }]
                        },
                        duration_ms: parseInt(i.duration, 10),
                        is_playable: !1
                    }
                }
                formatDJNarration(e, t) {
                    var i;
                    if (!e || (null == (i = t.metadata) ? void 0 : i.is_narration) !== "true" || !t || !t.metadata) return null;
                    let r = t.metadata;
                    return {
                        id: e.id,
                        uri: e.toURI(),
                        type: e.type,
                        uid: t.uid,
                        name: r.title,
                        media_type: "audio",
                        track_type: "audio",
                        content_type: "narration",
                        album: {
                            name: r.album_title,
                            images: [{
                                url: r.image_url
                            }]
                        },
                        artists: [{
                            uri: "",
                            name: r.artist_name
                        }]
                    }
                }
                formatGenericTrack(e, t) {
                    var i, r, a, n, s, o;
                    let l = t.metadata || {};
                    return {
                        id: null != (i = null == e ? void 0 : e.id) ? i : "",
                        uri: null != (r = null == e ? void 0 : e.toURI()) ? r : t.uri,
                        type: null != (a = null == e ? void 0 : e.type) ? a : "unknown",
                        uid: t.uid,
                        name: l.title,
                        media_type: "video" === l.track_player ? "video" : "audio",
                        duration_ms: l.duration || 0,
                        track_type: void 0,
                        content_type: "unknown",
                        album: {
                            name: null != (n = l.album_title) ? n : "",
                            uri: null != (s = l.album_uri) ? s : "",
                            images: l.image_url && [{
                                url: l.image_url
                            }]
                        },
                        artists: [{
                            uri: null != (o = l.artist_uri) ? o : "",
                            name: l.artist_name
                        }]
                    }
                }
                decorateTrackWindow(e, t, i) {
                    let r = null != t ? t : this._buildTrackList(e);
                    return this._cacheMetadata(r, {
                        contentType: null == i ? void 0 : i.contentType
                    }).then(t => t ? this._decorateTrackWindow(e) : e)
                }
            }
            let iw = /^[0-9a-f]{32}$/i,
                iM = () => e_(32),
                iU = Z.m.forTag("harmony.controller"),
                iF = {
                    disallow_pausing_reasons: !0,
                    disallow_peeking_next_reasons: !0,
                    disallow_peeking_prev_reasons: !0,
                    disallow_resuming_reasons: !0,
                    disallow_seeking_reasons: !0,
                    disallow_skipping_next_reasons: !0,
                    disallow_skipping_prev_reasons: !0,
                    disallow_toggling_repeat_context_reasons: !0,
                    disallow_toggling_repeat_track_reasons: !0,
                    disallow_toggling_shuffle_reasons: !0,
                    disallow_transferring_playback_reasons: !0,
                    disallow_setting_playback_speed_reasons: !0,
                    disallow_setting_modes: !0,
                    disallow_signals: !0,
                    disallow_add_to_queue_reasons: !0,
                    disallow_set_queue_reasons: !0,
                    disallow_updating_context_reasons: !0,
                    disallow_removing_from_context_tracks_reasons: !0,
                    disallow_removing_from_next_tracks_reasons: !0,
                    disallow_reordering_in_context_tracks_reasons: !0,
                    disallow_reordering_in_next_tracks_reasons: !0,
                    disallow_inserting_into_context_tracks_reasons: !0,
                    disallow_inserting_into_next_tracks_reasons: !0,
                    disallow_remote_control_reasons: !0
                },
                ix = {
                    unknown: R.UNKNOWN,
                    default: R.DEFAULT,
                    low: R.LOW,
                    normal: R.NORMAL,
                    normalized: R.NORMAL,
                    high: R.HIGH,
                    veryhigh: R.VERY_HIGH,
                    hifi: R.HIFI
                },
                iB = {
                    on: L.ON,
                    off: L.OFF,
                    none: L.NONE
                };

            function iY(e, t) {
                if (!e) return [];
                let i = [],
                    r = [ia.NQG.TRACK, ia.NQG.EPISODE];
                for (let a = 0, n = e.length; a < n; a++) {
                    let n, s = e[a];
                    if (!s) throw TypeError("Null value inside track array.");
                    if ("string" == typeof s ? (n = (0, ia.o_h)(s), s = {
                            uri: s
                        }) : n = (0, ia.o_h)(s.uri), !/^spotify:(meta:|delimiter)/.test(s.uri))
                        if (n) {
                            if (-1 === r.indexOf(n.type)) throw TypeError(`Invalid track uri: ${s.uri}`)
                        } else throw TypeError(`Invalid uri string: ${n}`);
                    s.metadata || (s.metadata = {}), t && t.queued && (s.metadata.is_queued = "true"), i.push(s)
                }
                return i
            }

            function iV(e) {
                if (e) {
                    if (/^.+:\/\//.test(e)) return e;
                    throw TypeError(`Invalid page url: ${e}`)
                }
            }
            class iG extends Y.bk {
                constructor(e) {
                    super(), this._suppressed = !1, this._lastDeviceInfoData = null, this._state = null, this._lastPlayerState = null, this._isOrphanedState = !1, this._progressPosition = 0, this._lastProgressMonotonicTime = (0, G.X)(), this._trackingIntervalId = 0, this._queue = null, this._client = e.client, this._serverTime = e.serverTime, this._version = e.version, this._playerClient = e.playerClient, this._disableProgress = !!e.disableProgress, this._transport = this._client.getPublicTransport(), this._decorate = !!e.decorateTrackWindow, this._metadataDecorator = new iN({
                        transport: this._transport
                    }), this._onClientBeforeDisconnect = this._onClientBeforeDisconnect.bind(this), this._onDeviceStateChanged = this._onDeviceStateChanged.bind(this), this._onPlayerStateChanged = this._onPlayerStateChanged.bind(this), this._onProgressTracking = this._onProgressTracking.bind(this), this._client.on("before_disconnect", this._onClientBeforeDisconnect), this.proxyEmit(this._playerClient, "max_subscriptions_reached", "max_subscriptions_reached"), this.proxyEmit(this._playerClient, "devices_changed", "devices_changed"), this.proxyEmit(this._playerClient, "registered", "registered"), this.proxyEmit(this._playerClient, "deregistered", "deregistered"), this._playerClient.on("device_state_changed", this._onDeviceStateChanged), this._playerClient.on("player_state_changed", this._onPlayerStateChanged)
                }
                static create(e) {
                    return new iG(e)
                }
                _onClientBeforeDisconnect(e) {
                    e && e.data.awaitPromise(this._playerClient.deregister().catch(() => {}))
                }
                _onDeviceStateChanged(e) {
                    var t, i;
                    let {
                        deviceState: r,
                        hasOrphanedState: a
                    } = e.data, n = !!(null == (i = null == (t = this._lastDeviceInfoData) ? void 0 : t.deviceInfo) ? void 0 : i.local);
                    this._lastDeviceInfoData = {
                        deviceInfo: r,
                        hasOrphanedState: a
                    }, !n || (null == r ? void 0 : r.local) || this._playerClient.getDevices().then(({
                        localDevice: e
                    }) => {
                        let t = k.STOPPED;
                        a ? e || (t = k.LOCAL_PLAYER_DISABLED) : t = k.REMOTE_ACTIVATED, this.emit("device_deactivated", {
                            reason: t
                        })
                    }).catch(e => {
                        iU.warn("Device deactivation checking failed.", e)
                    }), this._suppressed || this.emit("device_info_changed", this._lastDeviceInfoData)
                }
                _startProgressTracking() {
                    this._stopProgressTracking(), this._lastProgressMonotonicTime = (0, G.X)(), this._onProgressTracking(), this._trackingIntervalId = setInterval(this._onProgressTracking, 500)
                }
                _stopProgressTracking() {
                    this._trackingIntervalId && (clearInterval(this._trackingIntervalId), this._trackingIntervalId = 0)
                }
                _onProgressTracking() {
                    var e;
                    let t = (0, G.X)(),
                        i = (null == (e = this._lastPlayerState) ? void 0 : e.playback_speed) || 1;
                    this._progressPosition += i * (t - this._lastProgressMonotonicTime), this.emit("progress", {
                        position: this._progressPosition,
                        timestamp: Date.now()
                    }), this._lastProgressMonotonicTime = t
                }
                _generatePlayOptions(e, t) {
                    var i;
                    let r = {
                        license: null != (i = this._playerClient.getDeviceLicense()) ? i : ""
                    };
                    if (!e || (("index" in e || "trackUID" in e || "trackURI" in e || "pageIndex" in e) && (r.skip_to = {
                            track_uid: e.trackUID,
                            track_index: e.index,
                            track_uri: e.trackURI,
                            page_index: e.pageIndex
                        }), "initialOffset" in e && (r.seek_to = e.initialOffset), "paused" in e && (r.initially_paused = e.paused), "alwaysPlaySomething" in e && (r.always_play_something = e.alwaysPlaySomething), t)) return r;
                    r.player_options_override = {};
                    let a = r.player_options_override;
                    if ("modes" in e && (a.modes = e.modes), "shuffle" in e && (a.shuffling_context = e.shuffle), "repeatMode" in e) switch (e.repeatMode) {
                        case s.CONTEXT:
                            a.repeating_context = !0, a.repeating_track = !1;
                            break;
                        case s.TRACK:
                            a.repeating_track = !0, a.repeating_context = !1;
                            break;
                        case s.OFF:
                            a.repeating_track = !1, a.repeating_context = !1
                    }
                    return r
                }
                _setFilterAndSort(e, t) {
                    t && t.filter && e.metadata && (e.metadata["filtering.predicate"] = t.filter), t && t.sort && e.metadata && (e.metadata["sorting.criteria"] = t.sort)
                }
                _setMetadataOptions(e, t) {
                    if (!t) return;
                    let i = e.metadata || {};
                    "autoplayCandidate" in t && (i.autoplay_candidate = t.autoplayCandidate ? "true" : "false"), e.metadata = i
                }
                _generatePlayOrigin(e) {
                    if ((null == e ? void 0 : e.featureClasses) && !Array.isArray(e.featureClasses)) throw TypeError("PlayOptions playOrigin.featureClasses must be an array of strings.");
                    return {
                        feature_identifier: (null == e ? void 0 : e.featureIdentifier) || "harmony",
                        feature_version: (null == e ? void 0 : e.featureVersion) || this._version,
                        feature_classes: null == e ? void 0 : e.featureClasses,
                        view_uri: null == e ? void 0 : e.viewURI,
                        external_referrer: null == e ? void 0 : e.externalReferrer,
                        referrer_identifier: null == e ? void 0 : e.referrerIdentifier,
                        restriction_identifier: null == e ? void 0 : e.restrictionIdentifier
                    }
                }
                _generateLoggingParams(e = {}) {
                    let {
                        pageInstanceId: t,
                        interactionId: i,
                        commandId: r
                    } = e;
                    try {
                        return Promise.resolve({
                            page_instance_ids: t ? [t] : [],
                            interaction_ids: i ? [i] : [],
                            command_id: (e => {
                                if (e && !iw.test(e)) throw TypeError(`Invalid commandId. Expected a 32 character hex string but got: ${e}`);
                                return e || iM()
                            })(r)
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                _parseRestrictions(e) {
                    let t = {};
                    for (let i in e.restrictions) Object.prototype.hasOwnProperty.call(e.restrictions, i) && iF[i] ? t[i] = e.restrictions[i] : iF[i] && (t[i] = []);
                    return t
                }
                _onPlayerStateChanged(e) {
                    this._isOrphanedState = e.data.orphaned, this._parsePlayerState(e.data.playerState).then(t => {
                        this._state = t, this._suppressed || this.emit("state_changed", {
                            state: t ? Object.assign({}, t) : null,
                            orphaned: e.data.orphaned
                        }), !this._disableProgress && t && (this._progressPosition = t.position, t.paused ? this._stopProgressTracking() : this._startProgressTracking())
                    })
                }
                _isUsingPlayerService(e) {
                    var t, i, r;
                    let a = null == (i = null == (t = this._lastDeviceInfoData) ? void 0 : t.deviceInfo) ? void 0 : i.version,
                        n = /\/(cloud|track)-playback$/.test(a || ""),
                        s = (null == (r = null == e ? void 0 : e.context_metadata) ? void 0 : r["player.arch"]) === 2;
                    return n && s
                }
                _parsePlayerState(e) {
                    return (this._lastPlayerState = e, e) ? this._getTrackWindow(e).then(t => {
                        var i, r, a, n, s, o, l, _, d, u, c, h;
                        let p = !!(null == (i = e.options) ? void 0 : i.playback_speed);
                        if (!p) {
                            let t = (0, ia.gHQ)(e.track.uri) ? "not_supported_by_device" : "not_supported_by_content_type";
                            e.restrictions = Object.assign({
                                disallow_setting_playback_speed_reasons: [t]
                            }, e.restrictions)
                        }
                        let m = this._parseRestrictions(e),
                            E = i_(m),
                            f = this._serverTime.getApproximate();
                        return {
                            context: {
                                uri: e.context_uri || null,
                                metadata: e.context_metadata || {}
                            },
                            duration: e.duration || t.current_track && "uri" in t.current_track && t.current_track.duration_ms || 0,
                            timestamp: e.is_paused ? e.timestamp : f,
                            position: e.is_paused ? e.position_as_of_timestamp : this._offsetPosition(e.timestamp, e.position_as_of_timestamp, e.playback_speed, f),
                            playback_id: this._isUsingPlayerService(e) ? null : e.playback_id,
                            playback_quality: null != (n = ix[null != (a = null == (r = e.playback_quality) ? void 0 : r.bitrate_level) ? a : "unknown"]) ? n : R.UNKNOWN,
                            playback_features: {
                                hifi_status: iB[null != (o = null == (s = e.playback_quality) ? void 0 : s.hifi_status) ? o : "none"],
                                playback_speed: {
                                    current: e.playback_speed,
                                    selected: null != (_ = null == (l = e.options) ? void 0 : l.playback_speed) ? _ : 1,
                                    restricted: !p || !!(null == E ? void 0 : E.setting_playback_speed)
                                },
                                signal_ids: e.signals || [],
                                modes: e.modes || {}
                            },
                            paused: !!e.is_paused,
                            shuffle: !!(e.options && e.options.shuffling_context),
                            shuffle_mode: io(null == (d = e.options) ? void 0 : d.shuffling_context, null == (u = e.options) ? void 0 : u.modes),
                            repeat_mode: this._getStateRepeatMode(e),
                            restrictions: m,
                            disallows: E,
                            track_window: t,
                            loading: null != (h = null == (c = this._state) ? void 0 : c.loading) && h,
                            playback_speed: e.playback_speed
                        }
                    }) : Promise.resolve(null)
                }
                _offsetPosition(e, t, i = 1, r) {
                    let a = t + ((r || this._serverTime.getApproximate()) - e) * i;
                    return a < 0 ? 0 : a
                }
                _isRestricted(e, t) {
                    if (!e || !e.restrictions) return !1;
                    let i = `disallow_${t}_reasons`;
                    return !!(e.restrictions[i] || []).length
                }
                _getTrackWindow(e) {
                    var t, i;
                    let r = {
                            current_track: null,
                            next_tracks: [],
                            previous_tracks: []
                        },
                        a = {},
                        n = [];
                    if (!e.track) return Promise.resolve(r);
                    let s = e.track.uri;
                    if (!s) return Promise.resolve(r);
                    let o = (0, ia.o_h)(s),
                        l = this._metadataDecorator,
                        _ = l.formatLocalTrack(o, e.track.uid),
                        d = l.formatAd(o, e.track),
                        u = l.formatDJNarration(o, e.track),
                        c = l.formatGenericTrack(o, e.track);
                    r.current_track = _ || d || u || c, r.current_track.metadata = e.track.metadata || {}, _ || d || u || (a[s] = 1, n.push(s)), this._isRestricted(e, "peeking_next") || this._fillWindow(n, r.next_tracks, a, e.next_tracks ? e.next_tracks.slice(0, 5) : []), this._isRestricted(e, "peeking_prev") || this._fillWindow(n, r.previous_tracks, a, e.prev_tracks ? e.prev_tracks.slice(-5) : [], !0);
                    let h = (null == (t = e.track.metadata) ? void 0 : t.is_audiobook_chapter) === "true" || (null == (i = e.track.metadata) ? void 0 : i.is_audiobook) === "true" ? "chapter" : "unknown";
                    return this._decorate ? this._metadataDecorator.decorateTrackWindow(r, n, {
                        contentType: h
                    }) : Promise.resolve(r)
                }
                _fillWindow(e, t, i, r, a) {
                    for (let n of (a && r.reverse(), r)) {
                        let {
                            metadata: r,
                            uri: s,
                            uid: o
                        } = n;
                        if ((null == r ? void 0 : r.hidden_in_queue) === "true") continue;
                        let l = (0, ia.o_h)(s);
                        if (!s || "spotify:delimiter" === s || l && (l.type === ia.NQG.AD || l.type === ia.NQG.INTERRUPTION)) continue;
                        let _ = this._metadataDecorator.formatLocalTrack(l, o),
                            d = _ || {
                                uri: s,
                                uid: o,
                                type: "unknown"
                            };
                        if (_ || s in i || (i[s] = 1, e.push(s)), a ? t.unshift(Object.assign(Object.assign({}, d), {
                                metadata: r
                            })) : t.push(Object.assign(Object.assign({}, d), {
                                metadata: r
                            })), 2 === t.length) break
                    }
                }
                _getStateRepeatMode(e) {
                    let t = e.options;
                    return t && t.repeating_track ? s.TRACK : t && t.repeating_context ? s.CONTEXT : s.OFF
                }
                _play(e, t, i) {
                    return this._setFilterAndSort(e, i), this._setMetadataOptions(e, i), Promise.all([this._generatePlayOptions(i), this._generateLoggingParams(null == i ? void 0 : i.loggingParams)]).then(([r, a]) => {
                        let n = {
                            context: e,
                            play_origin: this._generatePlayOrigin(i && i.playOrigin),
                            options: r,
                            logging_params: a
                        };
                        return this._playerClient.play(n, t)
                    })
                }
                _setContextURIOptions(e, t) {
                    return this._client.getDeviceDescriptor().then(i => {
                        let a = e.split("?")[0],
                            n = i.toTrackPlaybackDeviceInfo(),
                            s = `http://@webgate/track-playback/v1/devices/${n.device_id}/context/${encodeURIComponent(a)}/player_options`,
                            o = {
                                player_options: t,
                                device_info: Object.assign(Object.assign({}, n), {
                                    client_version: this._client.getSDKId()
                                })
                            };
                        return this._transport.request(s, {
                            authorize: !0,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            responseType: "json",
                            payload: JSON.stringify(o)
                        }).then(e => {
                            if (200 !== e.status) {
                                let t = new is(r.TP_SET_OPTIONS_FAILED_WITH_STATUS, `Track-Playback service responded with ${e.status}`, {
                                    isNetworkRelated: !0
                                });
                                return t.status = e.status, Promise.reject(t)
                            }
                            return !0
                        }).catch(e => Promise.reject(e))
                    })
                }
                _setOptions(e, t, i) {
                    return Promise.all([this._generateLoggingParams(null == i ? void 0 : i.loggingParams), this.getCurrentState(), this.getActiveDevice()]).then(([a, n, s]) => {
                        if (null == i ? void 0 : i.contextURI) {
                            if (!(0, ia.o_h)(i.contextURI)) return Promise.reject(TypeError("contextURI is not a valid URI"));
                            if (!((null == n ? void 0 : n.context.uri) && (0, ia.B2u)(n.context.uri, i.contextURI)) || !s) return this._setContextURIOptions(i.contextURI, e)
                        }
                        return n ? this._playerClient.setOptions(e, t, {
                            logging_params: a
                        }) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"))
                    })
                }
                getActiveDevice() {
                    return this._playerClient.getActiveDevice()
                }
                getCurrentState(e) {
                    var t;
                    if (e && this._isOrphanedState) return Promise.resolve(null);
                    let i = this._state;
                    if (i && !i.paused) {
                        let e = this._serverTime.getApproximate();
                        i.position = this._offsetPosition(i.timestamp, i.position, null == (t = this._lastPlayerState) ? void 0 : t.playback_speed, e), i.timestamp = e
                    }
                    return Promise.resolve(i ? Object.assign({}, i) : null)
                }
                getContextPlayerState() {
                    return iU.warn("The `getContextPlayerState()` method is not well supported. Please avoid using it directly."), this._playerClient.getContextPlayerState()
                }
                getDevices() {
                    return this._playerClient.getDevices()
                }
                playURI(e, t, i) {
                    if (!(0, ia.o_h)(e)) return Promise.reject(TypeError("Invalid Spotify URI"));
                    let r = {
                        uri: e,
                        url: `context://${e}`,
                        metadata: i && i.contextMetadata || {}
                    };
                    return this._play(r, t, i)
                }
                playPages(e, t, i) {
                    var r;
                    let a;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid pages array."));
                    try {
                        a = function(e) {
                            var t, i, r;
                            let a = [];
                            for (let n of e) a.push({
                                tracks: Array.isArray(n.tracks) ? iY(n.tracks) : void 0,
                                page_url: null != (t = iV(n.pageURL)) ? t : void 0,
                                next_page_url: null != (i = iV(n.nextPageURL)) ? i : void 0,
                                metadata: null != (r = n.metadata) ? r : void 0
                            });
                            return a
                        }(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = {
                        uri: null != (r = null == i ? void 0 : i.contextURI) ? r : "spotify:internal:harmony-play-pages",
                        metadata: (null == i ? void 0 : i.contextMetadata) || {},
                        pages: a
                    };
                    return this._play(n, t, i)
                }
                playTracks(e, t, i) {
                    var r;
                    let a;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid tracks array."));
                    try {
                        a = iY(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = {
                        uri: null != (r = null == i ? void 0 : i.contextURI) ? r : "spotify:internal:harmony-play-tracks",
                        metadata: (null == i ? void 0 : i.contextMetadata) || {},
                        pages: [{
                            tracks: a
                        }]
                    };
                    return this._play(n, t, i)
                }
                updateCurrentContext(e, t = {}) {
                    return this._playerClient.updateCurrentContext(e, t)
                }
                setQueue(e, t, i) {
                    let r, a;
                    if (!Array.isArray(e)) return Promise.reject(TypeError("Invalid nextTracks array."));
                    if (!Array.isArray(t)) return Promise.reject(TypeError("Invalid previousTracks array."));
                    try {
                        r = iY(e), a = iY(t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = {
                        next_tracks: r.length ? r : void 0,
                        prev_tracks: a.length ? a : void 0
                    };
                    return this._playerClient.setQueue(n, i)
                }
                transfer(e, t = {}) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let r = Object.assign(Object.assign({}, t), {
                            logging_params: i
                        });
                        return this._playerClient.transfer(e, r)
                    })
                }
                pause(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.pause(e, {
                        logging_params: t
                    }))
                }
                resume(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.resume(e, {
                        logging_params: t
                    }))
                }
                togglePlay(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.togglePlay(e, {
                        logging_params: t
                    }))
                }
                nextTrack(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let r = {
                            logging_params: i
                        };
                        return (null == t ? void 0 : t.track) && (r.track = Q([t.track])[0]), this._playerClient.nextTrack(e, r)
                    })
                }
                previousTrack(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(i => {
                        let r = {
                            logging_params: i
                        };
                        return (null == t ? void 0 : t.track) && (r.track = Q([t.track])[0]), this._playerClient.previousTrack(e, r)
                    })
                }
                seek(e, t) {
                    return this._playerClient.seek(e, t)
                }
                setShuffle(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(i => this._playerClient.setShuffle(e, t, {
                        logging_params: i
                    }))
                }
                toggleShuffle(e, t) {
                    return this._generateLoggingParams(null == t ? void 0 : t.loggingParams).then(t => this._playerClient.toggleShuffle(e, {
                        logging_params: t
                    }))
                }
                setVolume(e, t) {
                    return this._playerClient.setVolume(e, t)
                }
                logout(e) {
                    return this._playerClient.logout(e)
                }
                setRepeatMode(e, t) {
                    return this.getCurrentState().then(i => {
                        if (!i) return Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let a = this._playerClient,
                            n = i.disallows;
                        switch (e) {
                            case s.OFF:
                                if (n.toggling_repeat_context && n.toggling_repeat_track) return !1;
                                return a.setOptions({
                                    repeating_context: !!n.toggling_repeat_context && void 0,
                                    repeating_track: !!n.toggling_repeat_track && void 0
                                }, t);
                            case s.CONTEXT:
                                if (n.toggling_repeat_context) return !1;
                                return a.setOptions({
                                    repeating_context: !0,
                                    repeating_track: !!n.toggling_repeat_track && void 0
                                }, t);
                            case s.TRACK:
                                if (n.toggling_repeat_track) return !1;
                                return a.setOptions({
                                    repeating_context: !n.toggling_repeat_context || void 0,
                                    repeating_track: !0
                                }, t);
                            default:
                                return Promise.reject(TypeError("Unknown repeat mode."))
                        }
                    })
                }
                setPlaybackSpeed(e, t) {
                    return this.getCurrentState().then(i => i ? this._playerClient.setOptions({
                        playback_speed: e
                    }, t) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                register() {
                    return this._playerClient.register()
                }
                suppressEvents() {
                    this._suppressed = !0
                }
                unsuppressEvents() {
                    this._suppressed = !1, this._lastDeviceInfoData && this.emit("device_info_changed", this._lastDeviceInfoData), this._state && this.emit("state_changed", {
                        state: this._state
                    })
                }
                getQueueManager(e, t = {}) {
                    if (!this._queue) {
                        let i = t.reportInitial ? this._lastPlayerState : null;
                        this._queue = new $(Object.assign({
                            connectClient: this._playerClient,
                            initialContextPlayerState: i,
                            runner: e
                        }, t))
                    }
                    return this._queue
                }
                sendCustomSignal(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(r => this._playerClient.sendCustomSignal(t, {
                        parameters: null == i ? void 0 : i.parameters,
                        logging_params: r,
                        signal_id: e
                    }))
                }
                playAsNextInQueue(e, t, i) {
                    return this._generateLoggingParams(null == i ? void 0 : i.loggingParams).then(i => {
                        let r = iY(e);
                        return this._playerClient.playAsNextInQueue(r, t, {
                            logging_params: i
                        })
                    })
                }
                setModes(e, t, i) {
                    return this._setOptions({
                        modes: e
                    }, t, i)
                }
                setShuffleMode(e, t, i) {
                    return this.getCurrentState().then(a => {
                        var n, s;
                        let o = (null == a ? void 0 : a.disallows) || {},
                            l = {};
                        if (null == i ? void 0 : i.contextURI) return l = {
                            shuffling_context: !!e,
                            modes: {
                                context_enhancement: e === D.SMART ? "RECOMMENDATION" : "NONE"
                            }
                        }, this._setOptions(l, t, i);
                        if (o.toggling_shuffle) return Promise.reject(new ik(r.HARMONY_OPERATION_FORBIDDEN, "Shuffle mode cannot be modified."));
                        if (e === D.SMART) {
                            if (null == (s = null == (n = o.setting_modes) ? void 0 : n.context_enhancement) ? void 0 : s.RECOMMENDATION) return Promise.reject(new ik(r.HARMONY_OPERATION_FORBIDDEN, "Setting shuffle mode to SMART is not allowed."));
                            l = {
                                shuffling_context: !0,
                                modes: {
                                    context_enhancement: "RECOMMENDATION"
                                }
                            }
                        } else l = {
                            shuffling_context: !!e,
                            modes: {
                                context_enhancement: "NONE"
                            }
                        };
                        return this._setOptions(l, t, i)
                    })
                }
            }
            var ij = i(23454);
            ! function(e) {
                e.PREMIUM = "premium", e.TFT = "tft"
            }(N || (N = {}));
            let iH = /connect-state\/v1\/cluster$/,
                iJ = /^([a-zA-Z0-9_%:-]{1,40}).*$/;

            function iq(e) {
                var t, i, r;
                return !!e.track && (null != (r = null == (i = null == (t = e.restrictions) ? void 0 : t.disallow_transferring_playback_reasons) ? void 0 : i.length) ? r : 0) === 0
            }
            let iK = "::a_";
            ! function(e) {
                e.NOT_PLAYING_LOCALLY = "not_playing_locally", e.NOT_PLAYING_CONTEXT = "not_playing_context", e.NOT_PLAYING_TRACK = "not_playing_track", e.NOT_PLAYING_MEDIA = "not_playing_media", e.NO_PREV_TRACK = "no_prev_track", e.NO_NEXT_TRACK = "no_next_track", e.NO_SPECIFIC_TRACK = "no_specific_track", e.ALREADY_PAUSED = "already_paused", e.NOT_PAUSED = "not_paused", e.NARRATION = "narration", e.PLAYER_CONTEXT_DISALLOW = "context_player_disallow", e.MFT_DISALLOW = "mft_disallow", e.AD_DISALLOW = "ad_disallow", e.PROTOCOL_LIMITATIONS = "protocol_limitations", e.UNKNOWN = "unknown", e.ALREADY_PLAYING = "already_playing", e.THROTTLED = "throttled", e.ENDLESS_CONTEXT = "endless_context"
            }(w || (w = {}));
            let iQ = {
                [w.AD_DISALLOW]: o.AD_PLAYING,
                [w.NARRATION]: o.NARRATION
            };

            function iW(e) {
                if (!e) return {
                    deviceId: null
                };
                let [t, i] = e.split(iK);
                return {
                    deviceId: t,
                    aliasId: i ? parseInt(i, 10) : void 0
                }
            }
            class i$ extends Y.bk {
                constructor(e) {
                    super(), this._autoregister = !0, this._connectionId = "", this._localDeviceId = "", this._localObserverDeviceId = null, this._lastActiveDevice = null, this._lastKnownPlayerState = null, this._lastKnownDevices = [], this._localDevice = null, this._fetchedInitialState = !1, this._lastProcessedTimestamp = 0, this._descriptor = e.descriptor, this._transport = e.transport, this._tracker = e.tracker, this._endpoint = e.endpoint || "@webgate/connect-state", this._autoregister = !("autoregister" in e) || !!e.autoregister, this._onConnectionId = this._onConnectionId.bind(this), this._onClusterMessage = this._onClusterMessage.bind(this), this._awaitResponseWithAck = this._awaitResponseWithAck.bind(this), this._transport.on(this._transport.EVENT_CONNECTION_ID, e => {
                        this._onConnectionId(e.data.id)
                    }), this._transport.matchMessages(iH, this._onClusterMessage), this._descriptorPromise = Promise.resolve(this._descriptor).then(e => (this._localDeviceId = e.id || "", this._localObserverDeviceId = ("hobs_" + this._localDeviceId).replace(iJ, "$1"), !0))
                }
                static create(e) {
                    return new i$(e)
                }
                _onConnectionId(e) {
                    this._connectionId = e, this._autoregister && this.register()
                }
                _onClusterMessage(e) {
                    let t = e.payloads && e.payloads[0];
                    if (!t) return;
                    let i = t.ack_id;
                    i && this._tracker.trackCommandAcknowledged(i), this._parseCluster(t.cluster)
                }
                _resolveTargetDevice(e) {
                    return this._descriptorPromise.then(() => {
                        let t = this._localDeviceId;
                        return e ? e === j ? iW(t) : iW(e) : iW(this._lastActiveDevice ? this._lastActiveDevice.id : t)
                    })
                }
                _makeEndpoint(e, t, i) {
                    return this._descriptorPromise.then(() => {
                        let r = this._localDeviceId;
                        return `${this._endpoint}/${e}/${t}/from/${r}/to/${i}`
                    })
                }
                _sendPlayerCommand(e, t = null, i = {}) {
                    var a, n;
                    i.endpoint = e;
                    let s = (null == (a = i.logging_params) ? void 0 : a.command_id) || iM();
                    i.logging_params = Object.assign(Object.assign({}, i.logging_params), {
                        command_id: s
                    });
                    let o = {
                        command: i
                    };
                    return this._tracker.startTracking({
                        commandId: s,
                        commandType: e,
                        interactionIds: null == (n = null == i ? void 0 : i.loggingParams) ? void 0 : n.interaction_ids,
                        playOrigin: null == i ? void 0 : i.play_origin
                    }), this._resolveTargetDevice(t).then(e => {
                        if (!e.deviceId) throw new ik(r.CONNECTAPI_CLIENT_MISSING_DEVICE_ID, "Operation resulted in a null device id");
                        !o.target_alias_id && e.aliasId && (o.target_alias_id = e.aliasId);
                        let t = this._getTargetDeviceInfo(e.deviceId);
                        return this._tracker.trackDeviceInfo(s, t), this._makeEndpoint("v1", "player/command", e.deviceId)
                    }).then(e => this._sendRequest(ij.I.POST, e, o, s)).then(this._awaitResponseWithAck.bind(this, s)).then(e => (this._tracker.logCommand(s), e)).catch(e => {
                        throw this._tracker.logCommand(s), e
                    })
                }
                _sendConnectCommand(e, t = null, i = {}) {
                    let a = "volume" === e ? ij.I.PUT : ij.I.POST,
                        n = "volume" === e || "logout" === e,
                        s = (null == i ? void 0 : i.command_id) || iM();
                    return this._tracker.startTracking({
                        commandId: s,
                        commandType: e,
                        interactionIds: i.interaction_id ? [i.interaction_id] : void 0
                    }), this._resolveTargetDevice(t).then(t => {
                        if (!t.deviceId) throw new ik(r.CONNECTAPI_CLIENT_MISSING_DEVICE_ID, "Operation resulted in a null device id");
                        t.aliasId && (n ? i.command_options = {
                            target_alias_id: t.aliasId
                        } : i.target_alias_id || (i.target_alias_id = t.aliasId));
                        let a = this._getTargetDeviceInfo(t.deviceId);
                        return this._tracker.trackDeviceInfo(s, a), this._makeEndpoint("v1", `connect/${e}`, t.deviceId)
                    }).then(e => this._sendRequest(a, e, i, s)).then(this._awaitResponseWithAck.bind(this, s)).then(e => (this._tracker.logCommand(s), e)).catch(e => {
                        throw this._tracker.logCommand(s), e
                    })
                }
                _sendRequest(e, t, i, r) {
                    return this._tracker.trackRequestStart(r), this._transport.request(t, {
                        method: e,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        payload: i ? JSON.stringify(i) : void 0,
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).catch(e => Promise.reject(e))
                }
                _awaitResponseWithAck(e, t) {
                    var i, a;
                    if (this._tracker.trackRequestComplete(e, t), 404 === t.status) return Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_DEVICE, "No such device."));
                    let n = null == (i = t.body) ? void 0 : i.ack_id;
                    if (200 === t.status && n) {
                        if ((null == (a = this._localDevice) ? void 0 : a.hidden) !== !1) return Promise.resolve(!0);
                        let t = (0, V.u)();
                        return this._tracker.trackAcknowledgementRequired(e, n, t), t.promise
                    }
                    return Promise.resolve(202 === t.status && !n)
                }
                _parseCluster(e) {
                    if (!e) return;
                    let t = parseInt(e.timestamp, 10);
                    this._lastProcessedTimestamp > t || (this._lastProcessedTimestamp = t, this._parseClusterDevices(e), this._parseClusterPlayerState(e))
                }
                _parseClusterDevices(e) {
                    var t;
                    let i = this._lastActiveDevice;
                    this._lastActiveDevice = null, this._lastKnownDevices = [], this._localDevice = null;
                    let r = [];
                    for (let t in e.devices) Object.prototype.hasOwnProperty.call(e.devices, t) && r.push(t);
                    if (r.sort(), r.length)
                        for (let i of r) {
                            let r = this._formatClusterDevice(e, i);
                            for (let i of (this._lastKnownDevices.push(...r), r)) i.is_active && (this._lastActiveDevice = i), i.local && (this._localDevice = i, this._deviceLicense = null == (t = e.devices[i.id]) ? void 0 : t.license)
                        }
                    if (!this._fetchedInitialState || !J(this._lastActiveDevice, i)) {
                        let t = e.player_state,
                            r = t && iq(t);
                        this.emit("device_state_changed", {
                            deviceState: this._lastActiveDevice,
                            hasOrphanedState: !this._lastActiveDevice && !!r,
                            disappeared: !!i && !this._lastActiveDevice
                        })
                    }
                    this.emit("devices_changed", {
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    })
                }
                _shouldDisallowTransfer(e, t) {
                    var i, r, a;
                    let n = e.player_state;
                    if (!n) return null;
                    let {
                        track: s,
                        restrictions: l
                    } = n;
                    if (s) {
                        let e = (null == (i = s.metadata) ? void 0 : i["media.type"]) || (null == (r = s.metadata) ? void 0 : r.track_player),
                            n = null == (a = (0, ia.o_h)(s.uri)) ? void 0 : a.type;
                        if (e && "mixed" !== e || (e = "audio"), -1 === (t.capabilities.supported_types || []).indexOf(`${e}/${n}`)) return o.INCOMPATIBLE
                    }
                    if (l) {
                        let e = l.disallow_transferring_playback_reasons;
                        if (null == e ? void 0 : e.length)
                            for (let t of e) {
                                if (iQ[t]) return iQ[t] || null;
                                return o.UNSUPPORTED
                            }
                    }
                    let _ = e.active_device_id;
                    if (!t.can_play || _ === t.device_id) return o.UNAVAILABLE;
                    let u = e.devices[_];
                    return (null == u ? void 0 : u.license) === N.TFT && (t.license !== N.TFT || t.device_type === d.SMARTPHONE) ? o.PREMIUM_REQUIRED : null
                }
                _formatClusterDevice(e, t) {
                    let i = e.devices[t],
                        r = {};
                    if (i && Array.isArray(i.metadata))
                        for (let e = 0, t = i.metadata.length; e < t; e++) {
                            let t = i.metadata[e];
                            r[t.type] = t.metadata
                        }
                    let {
                        capabilities: a
                    } = i, n = this._shouldDisallowTransfer(e, i), s = {
                        hidden: !1,
                        id: i.device_id,
                        client_id: i.client_id,
                        is_active: i.device_id === e.active_device_id,
                        is_controllable: !!a.is_controllable,
                        is_observable: !!a.is_observable,
                        local: i.device_id === this._localDeviceId,
                        metadata: r,
                        name: i.name,
                        type: (i.device_type || d.UNKNOWN).toLowerCase(),
                        brand: i.brand,
                        model: i.model,
                        version: i.device_software_version,
                        volume: a.disable_volume ? -1 : i.volume / 65535 || 0,
                        capabilities: {
                            supports_lossless_audio: !!a.supports_lossless_audio,
                            supports_dj: !!a.supports_dj,
                            supports_remote_sleep_timer: !!a.supports_remote_sleep_timer
                        },
                        is_alias: !1,
                        is_alias_group: !1,
                        playback_features: {
                            hifi_status: a.supports_hifi
                        },
                        is_group: !!i.is_group,
                        is_being_activated: !1,
                        disallow_transfer_reason: n
                    };
                    if (!i.device_aliases) return [s];
                    let o = [];
                    for (let e in i.device_aliases) {
                        if (!Object.prototype.hasOwnProperty.call(i.device_aliases, e)) continue;
                        let t = i.device_aliases[e];
                        if (!t) continue;
                        let r = Object.assign(Object.assign({}, s), {
                            id: `${s.id}${iK}${t.id}`,
                            name: t.display_name,
                            is_alias: !0,
                            is_alias_group: i.is_group || t.is_group,
                            is_active: s.is_active && i.selected_alias_id === t.id,
                            is_group: !!t.is_group
                        });
                        o.push(r)
                    }
                    return o
                }
                _parseClusterPlayerState(e) {
                    this._lastKnownPlayerState = null;
                    let t = e.active_device_id,
                        i = t && e.devices[t],
                        r = e.player_state;
                    r && r.track && (i && i.capabilities && !i.capabilities.is_observable ? r = null : (!i && (r.is_paused = !0, r.restrictions && (delete r.restrictions.disallow_resuming_reasons, r.restrictions.disallow_pausing_reasons = ["already_paused"])), r.duration = parseInt(r.duration, 10), r.position = parseInt(r.position, 10), r.position_as_of_timestamp = parseInt(r.position_as_of_timestamp, 10), r.timestamp = parseInt(r.timestamp, 10), r.next_tracks = r.next_tracks || [], r.prev_tracks = r.prev_tracks || []), this._lastKnownPlayerState = r);
                    let a = !i && !!this._lastKnownPlayerState;
                    a && r && !iq(r) && (this._lastKnownPlayerState = null, a = !1), this.emit("player_state_changed", {
                        playerState: this._lastKnownPlayerState,
                        orphaned: a,
                        isLocal: !!t && t === this._localDeviceId
                    })
                }
                _register() {
                    this._fetchedInitialState = !1;
                    let e = `${this._endpoint}/v1/devices/${this._localObserverDeviceId}`;
                    return this._connectionId || Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_CONNECTION_ID, "Cannot register: no connection id.")), this._transport.request(e, {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "X-Spotify-Connection-Id": this._connectionId
                        },
                        payload: JSON.stringify({
                            member_type: "CONNECT_STATE",
                            device: {
                                device_info: {
                                    capabilities: {
                                        can_be_player: !1,
                                        hidden: !0,
                                        needs_full_player_state: !0
                                    }
                                }
                            }
                        }),
                        responseType: "json"
                    }).then(e => {
                        429 === e.status ? this.emit("max_subscriptions_reached", {
                            error: new ik(r.CONNECTAPI_MAX_SUBSCRIPTIONS_REACHED, "Max connections reached")
                        }) : 200 === e.status && (this.emit("registered", null), e.body && (this._parseCluster(e.body), this._fetchedInitialState = !0)), (429 === e.status || 408 === e.status) && (this._lastKnownDevices = this._lastKnownDevices.map(e => (e.is_being_activated = !1, e)), this._localDevice && (this._localDevice.is_being_activated = !1), this.emit("devices_changed", {
                            devices: this._lastKnownDevices,
                            localDevice: this._localDevice
                        }))
                    })
                }
                _getTargetDeviceInfo(e) {
                    let t = null;
                    for (let i of this._lastKnownDevices)
                        if (i.id === e) {
                            t = i;
                            break
                        }
                    return t
                }
                register() {
                    return this._connectionId ? this._descriptorPromise.then(this._register.bind(this)) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_CONNECTION_ID, "Cannot register: no connection id."))
                }
                deregister() {
                    let e = `${this._endpoint}/v1/devices/${this._localObserverDeviceId}`;
                    return this._transport.request(e, {
                        method: "DELETE",
                        responseType: "json"
                    }).then(e => {
                        200 === e.status && this.emit("deregistered", null)
                    })
                }
                getDevices() {
                    return this._fetchedInitialState ? Promise.resolve({
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    }) : new Promise(e => {
                        this.once("device_state_changed", () => {
                            e({
                                devices: this._lastKnownDevices,
                                localDevice: this._localDevice
                            })
                        })
                    })
                }
                getActiveDevice() {
                    return this._fetchedInitialState ? Promise.resolve(this._lastActiveDevice) : new Promise(e => {
                        this.once("device_state_changed", t => {
                            e(t.data.deviceState)
                        })
                    })
                }
                getDeviceLicense() {
                    return this._deviceLicense || null
                }
                getContextPlayerState() {
                    return this._fetchedInitialState ? Promise.resolve(this._lastKnownPlayerState) : new Promise(e => {
                        this.once("player_state_changed", t => {
                            e(t.data.playerState)
                        })
                    })
                }
                play(e, t = null) {
                    return e ? this._sendPlayerCommand("play", t, e) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_INVALID_ARGUMENTS, "Descriptor is required for play commands"))
                }
                updateCurrentContext(e = null, t) {
                    return this.getContextPlayerState().then(i => i ? i.session_id ? i.context_url || t.forceNonUpdateable ? this._sendPlayerCommand("update_context", e, {
                        context: {
                            url: t.contextURI ? `context://${t.contextURI}` : i.context_url || `context://${i.context_uri}`
                        },
                        session_id: i.session_id
                    }) : Promise.resolve(!1) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_SESSION_ID, "The current state does not have a session id")) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                setQueue(e, t) {
                    return this._sendPlayerCommand("set_queue", t, e)
                }
                addToQueue(e, t) {
                    return this._sendPlayerCommand("add_to_queue", t, {
                        track: e
                    })
                }
                transfer(e, t = {}) {
                    var i, r;
                    this._lastKnownDevices = this._lastKnownDevices.map(t => (t.is_being_activated = t.id === e, t)), this._localDevice && (this._localDevice.is_being_activated = e === j), this.emit("devices_changed", {
                        devices: this._lastKnownDevices,
                        localDevice: this._localDevice
                    });
                    let a = {
                        restore_paused: "restore"
                    };
                    return "paused" in t && (a.restore_paused = t.paused ? "pause" : "resume"), this._sendConnectCommand("transfer", e || j, {
                        transfer_options: a,
                        interaction_id: null == (i = t.logging_params) ? void 0 : i.interaction_ids[0],
                        command_id: null == (r = t.logging_params) ? void 0 : r.command_id
                    })
                }
                pause(e, t) {
                    return this._sendPlayerCommand("pause", e, t)
                }
                resume(e, t) {
                    return this._sendPlayerCommand("resume", e, t)
                }
                togglePlay(e, t) {
                    return this.getContextPlayerState().then(i => i ? i.is_paused ? this.resume(e, t) : this.pause(e, t) : Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing")))
                }
                nextTrack(e, t) {
                    return this._sendPlayerCommand("skip_next", e, t)
                }
                previousTrack(e, t) {
                    return this._sendPlayerCommand("skip_prev", e, t)
                }
                seek(e, t) {
                    return isNaN(e) || e < 0 ? Promise.reject(new ik(r.CONNECTAPI_CLIENT_INVALID_POSITION, "Invalid position.")) : this._sendPlayerCommand("seek_to", t, {
                        value: e
                    })
                }
                setShuffle(e, t, i) {
                    return this._sendPlayerCommand("set_shuffling_context", t, Object.assign({
                        value: !!e
                    }, i))
                }
                toggleShuffle(e, t) {
                    return this.getContextPlayerState().then(i => {
                        if (!i) return Promise.reject(new ik(r.CONNECTAPI_CLIENT_NO_STATE, "Nothing playing"));
                        let a = i.options && i.options.shuffling_context;
                        return this.setShuffle(!a, e, t)
                    })
                }
                setRepeatingContext(e, t) {
                    return this._sendPlayerCommand("set_repeating_context", t, {
                        value: e
                    })
                }
                setRepeatingTrack(e, t) {
                    return this._sendPlayerCommand("set_repeating_track", t, {
                        value: !!e
                    })
                }
                setOptions(e, t, i) {
                    return this._sendPlayerCommand("set_options", t, Object.assign(Object.assign({}, e), i))
                }
                setVolume(e, t) {
                    if (isNaN(e) || e < 0) return Promise.reject(new ik(r.CONNECTAPI_CLIENT_INVALID_VOLUME, "Invalid volume."));
                    let i = Math.round(65535 * e);
                    return this._sendConnectCommand("volume", t, {
                        volume: i
                    })
                }
                logout(e) {
                    return this._sendConnectCommand("logout", e)
                }
                sendCustomSignal(e, t) {
                    return this._sendPlayerCommand("signal", e, t)
                }
                playAsNextInQueue(e, t, i) {
                    return this._sendPlayerCommand("play_as_next_in_queue", t, Object.assign({
                        tracks: e
                    }, i))
                }
            }! function(e) {
                e.SUCCESS = "success", e.ACK_TIMEOUT = "ack_timeout", e.HTTP_ERROR = "http_error", e.SYSTEM_ERROR = "system_error", e.PLAYER_ERROR = "player_error", e.UNKNOWN_ERROR = "unknown_error"
            }(M || (M = {}));
            class iz {
                constructor(e) {
                    this._commandDataMap = {}, this._orphanedAcknowledgements = {}, this._logger = e
                }
                _finalizeData(e) {
                    if (!e.response) return M.UNKNOWN_ERROR;
                    let t = e.response.status,
                        i = e.response.getStatusFamily();
                    return 403 === t ? (e.response.body && (e.httpResponse = JSON.stringify(e.response.body)), M.PLAYER_ERROR) : 200 === t && e.ackId && null === e.timings.acknowledgement.end ? M.ACK_TIMEOUT : i === tz.t.SUCCESS ? M.SUCCESS : i === tz.t.CONNECTION_ERROR ? M.SYSTEM_ERROR : t ? (e.response.body && (e.httpResponse = JSON.stringify(e.response.body)), M.HTTP_ERROR) : M.UNKNOWN_ERROR
                }
                _calculateTimings(e) {
                    let t = {};
                    return e.request.start && e.request.end && (t.msRequestLatency = (0, G.r)(e.request.start, e.request.end)), e.acknowledgement.start && e.acknowledgement.end && (t.msAckDuration = (0, G.r)(e.acknowledgement.start, e.acknowledgement.end)), t
                }
                _waitingOnCommands() {
                    let e = !1;
                    for (let t in this._commandDataMap) {
                        if (!Object.prototype.hasOwnProperty.call(this._commandDataMap, t)) continue;
                        let i = this._commandDataMap[t];
                        if (i && !i.response) {
                            e = !0;
                            break
                        }
                    }
                    return e
                }
                startTracking({
                    commandId: e,
                    commandType: t,
                    interactionIds: i,
                    playOrigin: r
                }) {
                    e && (this._commandDataMap[e] = {
                        commandType: t,
                        ackId: null,
                        interactionIds: (i || []).join(","),
                        playOrigin: r ? JSON.stringify(r) : void 0,
                        timings: {
                            request: {
                                start: null,
                                end: null
                            },
                            acknowledgement: {
                                start: null,
                                end: null
                            }
                        }
                    })
                }
                trackDeviceInfo(e, t) {
                    let i = this._commandDataMap[e];
                    i && t && (i.deviceInfo = {
                        id: t.id,
                        client_id: t.client_id,
                        target_device_brand: t.brand,
                        target_device_model: t.model
                    })
                }
                trackRequestStart(e) {
                    let t = this._commandDataMap[e];
                    if (!t) return;
                    let i = (0, G.X)();
                    t.timings.request.start = i, t.timings.acknowledgement.start = i
                }
                trackRequestComplete(e, t) {
                    let i = this._commandDataMap[e];
                    i && (i.response = t, i.timings.request.end = (0, G.X)())
                }
                trackAcknowledgementRequired(e, t, i) {
                    let a = this._commandDataMap[e],
                        n = this._orphanedAcknowledgements[t];
                    if (a)
                        if (a.ackId = t, n) a.timings.acknowledgement.end = n.ackTimeMs, n.deferredPromise.resolve(!0), delete this._orphanedAcknowledgements[t];
                        else {
                            let e = setTimeout(() => {
                                i.reject(new ik(r.CONNECTAPI_CLIENT_ACK_TIMEOUT, "Command didn't receive an acknowledgement within 30000ms"))
                            }, 3e4);
                            i.promise.then(t => (clearTimeout(e), t)), a.deferredPromise = i
                        }
                }
                trackCommandAcknowledged(e) {
                    let t = (0, G.X)();
                    for (let i in this._commandDataMap) {
                        if (!Object.prototype.hasOwnProperty.call(this._commandDataMap, i)) continue;
                        let r = this._commandDataMap[i];
                        if (r && r.ackId === e) {
                            r.deferredPromise && r.deferredPromise.resolve(!0), r.timings.acknowledgement.end = t;
                            return
                        }
                    }
                    this._waitingOnCommands() && (this._orphanedAcknowledgements[e] = {
                        deferredPromise: (0, V.u)(),
                        ackTimeMs: t
                    }, setTimeout(() => {
                        this._orphanedAcknowledgements[e] && delete this._orphanedAcknowledgements[e]
                    }, 6e4))
                }
                logCommand(e) {
                    var t;
                    let i = this._commandDataMap[e];
                    if (!i) return Promise.resolve();
                    let r = this._finalizeData(i),
                        {
                            msAckDuration: a,
                            msRequestLatency: n
                        } = this._calculateTimings(i.timings),
                        s = {
                            command_id: e,
                            command_type: i.commandType,
                            ms_ack_duration: null != a ? a : null,
                            ms_request_latency: n,
                            interaction_ids: i.interactionIds,
                            play_origin: i.playOrigin,
                            result: r,
                            http_response: i.httpResponse,
                            http_status_code: null == (t = i.response) ? void 0 : t.status
                        };
                    i.deviceInfo && (s.target_device_id = i.deviceInfo.id, s.target_device_brand = i.deviceInfo.target_device_brand, s.target_device_model = i.deviceInfo.target_device_model, s.target_device_client_id = i.deviceInfo.client_id);
                    let o = () => {
                        delete this._commandDataMap[e]
                    };
                    return this._logger.logJSSDKConnectCommand(s).then(o, o)
                }
            }! function(e) {
                e.PLAYER_INITIALIZATION_DONE = "PLAYER_INITIALIZATION_DONE", e.PLAYER_INITIALIZATION_FAILED = "PLAYER_INITIALIZATION_FAILED", e.STATE_CHANGED = "STATE_CHANGED", e.AUTOPLAY_FAILED = "AUTOPLAY_FAILED", e.BEFORE_LIST_CHANGE = "BEFORE_LIST_CHANGE", e.BEFORE_NEXT = "BEFORE_NEXT", e.BEFORE_PREVIOUS = "BEFORE_PREVIOUS", e.BEFORE_TRACK_LOAD = "BEFORE_TRACK_LOAD", e.BEFORE_PLAYER_LOAD = "BEFORE_PLAYER_LOAD", e.BUFFER_STALLED = "BUFFER_STALLED", e.BUFFERING_START = "BUFFERING_START", e.BUFFERING_END = "BUFFERING_END", e.REBUFFERING_START = "REBUFFERING_START", e.REBUFFERING_END = "REBUFFERING_END", e.CAPPED = "CAPPED", e.CLEARED = "CLEARED", e.DISPLAYED_CUES_CHANGED = "DISPLAYED_CUES_CHANGED", e.SUBTITLE_LANGUAGES_LOADED = "SUBTITLE_LANGUAGES_LOADED", e.DURATION_CHANGED = "DURATION_CHANGED", e.ERROR = "ERROR", e.ERROR_SYNC = "ERROR_SYNC", e.FIRST_BYTES = "FIRST_BYTES", e.LIST_CHANGED = "LIST_CHANGED", e.LIST_ENDED = "LIST_ENDED", e.LOAD_VIDEO = "LOAD_VIDEO", e.MAX_LIST_ERRORS_REACHED = "MAX_LIST_ERRORS_REACHED", e.PAUSED = "PAUSED", e.PLAYING = "PLAYING", e.PLAYED_THRESHOLD_REACHED = "PLAYED_THRESHOLD_REACHED", e.POSITION_CHANGED = "POSITION_CHANGED", e.PROGRESS = "PROGRESS", e.SEEKING = "SEEKING", e.REPEAT_MODE_CHANGED = "REPEAT_MODE_CHANGED", e.SHUFFLE_CHANGED = "SHUFFLE_CHANGED", e.BEFORE_STOP = "BEFORE_STOP", e.STOPPED = "STOPPED", e.STOPPED_VIDEO = "STOPPED_VIDEO", e.TRACKING_DATA_CREATED = "TRACKING_DATA_CREATED", e.TRACKING_DATA_FINALIZED = "TRACKING_DATA_FINALIZED", e.TRACK_ENDED = "TRACK_ENDED", e.TRACK_LOADED = "TRACK_LOADED", e.TRACK_TIMEOUT = "TRACK_TIMEOUT", e.TRACK_UNPLAYABLE = "TRACK_UNPLAYABLE", e.VOLUME_CHANGED = "VOLUME_CHANGED", e.VIDEO_ELEMENT_APPENDED = "VIDEO_ELEMENT_APPENDED", e.VIDEO_ELEMENT_REMOVED = "VIDEO_ELEMENT_REMOVED", e.SPEED_CHANGED = "SPEED_CHANGED", e.MUTED_CHANGED = "MUTED_CHANGED", e.PLAYING_PROFILE_CHANGED = "PLAYING_PROFILE_CHANGED", e.MEDIA_PLAYBACK_MODE_CHANGED = "MEDIA_PLAYBACK_MODE_CHANGED", e.VISIBILITY_CHANGED = "VISIBILITY_CHANGED", e.VIDEO_VISIBILITY_CHANGED = "VIDEO_VISIBILITY_CHANGED", e.VIDEO_SURFACE_CHANGED = "VIDEO_SURFACE_CHANGED", e.REPORTING_START = "REPORTING_START", e.REPORTING_FIRST_QUARTILE = "REPORTING_FIRST_QUARTILE", e.REPORTING_MIDPOINT = "REPORTING_MIDPOINT", e.REPORTING_THIRD_QUARTILE = "REPORTING_THIRD_QUARTILE", e.REPORTING_COMPLETE = "REPORTING_COMPLETE", e.REPORTING_PAUSE = "REPORTING_PAUSE", e.REPORTING_RESUME = "REPORTING_RESUME", e.REPORTING_CREATIVE_VIEW = "REPORTING_CREATIVE_VIEW", e.REPORTING_ERROR = "REPORTING_ERROR"
            }(U || (U = {}));
            let iX = {
                MP3: p.MP3,
                MP4: p.MP4,
                MP4_DUAL: p.MP4_DUAL,
                MP4_CBCS: p.MP4_CBCS,
                MP4_FLAC: p.MP4_FLAC,
                MANIFEST_ID: p.MANIFEST_ID,
                AD_MANIFEST: p.AD_MANIFEST,
                GENERIC_MEDIA: p.GENERIC_MEDIA
            };
            class iZ {
                constructor(e) {
                    var t, i, r, a, n, s, o, l;
                    if (this.isAd = !1, !e.uri) throw TypeError("Missing required `uri` option.");
                    if (!e.fileId && !(null != (t = e.url) ? t : e.resolvedURL)) throw TypeError("Missing: provide either fileId or url");
                    this.uri = e.uri, this.playableURI = this.uri, this.fileId = e.fileId || "", this.playable = null == (i = e.playable) || i, this.mediaType = e.mediaType || "audio", this.metadata = e.metadata || {}, this.url = null != (r = e.url) ? r : e.resolvedURL, this.noManifest = null != (a = e.noManifest) ? a : !!this.url, this.noAuth = null != (n = e.noAuth) && n, this.preloadedManifest = e.preloadedManifest, this.licenseEndpoint = e.licenseEndpoint, this.fileFormat = e.fileFormat, this.poster = e.poster, this.options = e.options, this.audioGain = e.audioGain, this.mimeType = e.mimeType, this.contentType = e.contentType;
                    let {
                        format: _
                    } = e;
                    if (_)
                        if (Object.prototype.hasOwnProperty.call(iX, _)) this.format = iX[_];
                        else throw TypeError("Invalid `format` option.");
                    else this.format = this.url && !this.fileId ? p.GENERIC_MEDIA : p.MP4;
                    this.logData = Object.assign(Object.assign({}, e.logData), {
                        noLog: !1,
                        noTSV: null == (o = null == (s = e.logData) ? void 0 : s.noTSV) || o,
                        noStats: !1,
                        playbackId: (e => e && e.length > 0 ? e : e_(32))(null == (l = e.logData) ? void 0 : l.playbackId)
                    })
                }
                static create(e) {
                    return new iZ(e)
                }
            }
            class i0 {
                constructor(e) {
                    this._index = -1, this._tracks = [], this._tracks = e.tracks
                }
                static create(e) {
                    let t = [];
                    for (let i of e.tracks) i instanceof iZ ? t.push(i) : t.push(iZ.create(i));
                    return new i0({
                        tracks: t
                    })
                }
                startAt(e) {
                    return e > this._tracks.length || e < 0 ? this._index = -1 : this._index = e - 1, Promise.resolve(h.SUCCESS)
                }
                next(e, t) {
                    let i = this._index + 1;
                    if (i >= this._tracks.length) return Promise.resolve(e.listConstants.LIST_END);
                    let r = this._tracks[i];
                    return (t || (this._index = i), r) ? Promise.resolve(r) : Promise.reject(P.NULL_VALUE)
                }
                peekNext(e) {
                    return this.next(e, !0)
                }
                allowSeeking() {
                    return !0
                }
                previous(e) {
                    let t = this._index - 1;
                    if (t < 0) return Promise.resolve(e.listConstants.LIST_START);
                    let i = this._tracks[t];
                    return (this._index = t, i) ? Promise.resolve(i) : Promise.reject(P.NULL_VALUE)
                }
                setShuffle() {
                    return Promise.resolve(h.SUCCESS)
                }
                setRepeatMode() {
                    return Promise.resolve(h.SUCCESS)
                }
            }
            class i1 extends Y.bk {
                constructor(e) {
                    super(), this._playerPromise = e.playerPromise, this._listPlayer = e.listPlayer, this._transport = e.transport, this._autoActivateElement = !!e.autoActivateElement, this._init()
                }
                static create(e) {
                    return new i1(e)
                }
                _init() {
                    let e = this._listPlayer;
                    this.proxyEmitAll(e, {
                        [eL.J.LIST_PLAYER_AUTOPLAY_FAILED]: U.AUTOPLAY_FAILED,
                        [eL.J.LIST_PLAYER_BEFORE_LIST_CHANGE]: U.BEFORE_LIST_CHANGE,
                        [eL.J.LIST_PLAYER_BUFFER_STALLED]: U.BUFFER_STALLED,
                        [eL.J.LIST_PLAYER_BUFFERING_START]: U.BUFFERING_START,
                        [eL.J.LIST_PLAYER_BUFFERING_END]: U.BUFFERING_END,
                        [eL.J.LIST_PLAYER_REBUFFERING_START]: U.REBUFFERING_START,
                        [eL.J.LIST_PLAYER_REBUFFERING_END]: U.REBUFFERING_END,
                        [eL.J.LIST_PLAYER_CLEARED]: U.CLEARED,
                        [eL.J.LIST_PLAYER_DURATION_CHANGED]: U.DURATION_CHANGED,
                        [eL.J.LIST_PLAYER_ERROR]: U.ERROR,
                        [eL.J.LIST_PLAYER_LIST_CHANGED]: U.LIST_CHANGED,
                        [eL.J.LIST_PLAYER_LIST_ENDED]: U.LIST_ENDED,
                        [eL.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]: U.MAX_LIST_ERRORS_REACHED,
                        [eL.J.LIST_PLAYER_PAUSED]: U.PAUSED,
                        [eL.J.LIST_PLAYER_PLAYING]: U.PLAYING,
                        [eL.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]: U.PLAYED_THRESHOLD_REACHED,
                        [eL.J.LIST_PLAYER_POSITION_CHANGED]: U.POSITION_CHANGED,
                        [eL.J.LIST_PLAYER_PROGRESS]: U.PROGRESS,
                        [eL.J.LIST_PLAYER_REPEAT_MODE_CHANGED]: U.REPEAT_MODE_CHANGED,
                        [eL.J.LIST_PLAYER_SEEKING]: U.SEEKING,
                        [eL.J.LIST_PLAYER_SHUFFLE_CHANGED]: U.SHUFFLE_CHANGED,
                        [eL.J.LIST_PLAYER_BEFORE_STOP]: U.BEFORE_STOP,
                        [eL.J.LIST_PLAYER_STOPPED]: U.STOPPED,
                        [eL.J.LIST_PLAYER_TRACKING_DATA_CREATED]: U.TRACKING_DATA_CREATED,
                        [eL.J.LIST_PLAYER_TRACKING_DATA_FINALIZED]: U.TRACKING_DATA_FINALIZED,
                        [eL.J.LIST_PLAYER_TRACK_ENDED]: U.TRACK_ENDED,
                        [eL.J.LIST_PLAYER_TRACK_LOADED]: U.TRACK_LOADED,
                        [eL.J.LIST_PLAYER_TRACK_TIMEOUT]: U.TRACK_TIMEOUT,
                        [eL.J.LIST_PLAYER_TRACK_UNPLAYABLE]: U.TRACK_UNPLAYABLE,
                        [eL.J.LIST_PLAYER_VOLUME_CHANGED]: U.VOLUME_CHANGED,
                        [eL.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]: U.VIDEO_ELEMENT_APPENDED,
                        [eL.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: U.VIDEO_ELEMENT_REMOVED,
                        [eL.J.PLAYER_DISPLAYED_CUES_CHANGED]: U.DISPLAYED_CUES_CHANGED,
                        [eL.J.PLAYER_SUBTITLE_LANGUAGES_LOADED]: U.SUBTITLE_LANGUAGES_LOADED,
                        [eL.J.PLAYER_PLAYBACK_SPEED_CHANGED]: U.SPEED_CHANGED,
                        [eL.J.PLAYER_MUTED_CHANGED]: U.MUTED_CHANGED,
                        [eL.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: U.PLAYING_PROFILE_CHANGED,
                        [eL.J.LIST_PLAYER_FIRST_BYTES]: U.FIRST_BYTES,
                        [eL.J.LIST_PLAYER_BEFORE_PLAYER_LOAD]: U.BEFORE_PLAYER_LOAD,
                        [eL.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: U.MEDIA_PLAYBACK_MODE_CHANGED,
                        [eL.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: U.VIDEO_VISIBILITY_CHANGED,
                        [eL.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: U.VIDEO_SURFACE_CHANGED
                    }), this.proxyEmitAllSync(e, {
                        [eL.J.LIST_PLAYER_BEFORE_NEXT]: U.BEFORE_NEXT,
                        [eL.J.LIST_PLAYER_BEFORE_PREVIOUS]: U.BEFORE_PREVIOUS,
                        [eL.J.LIST_PLAYER_BEFORE_TRACK_LOAD]: U.BEFORE_TRACK_LOAD,
                        [eL.J.LIST_PLAYER_ERROR_SYNC]: U.ERROR_SYNC,
                        [eL.J.REPORTING_START]: U.REPORTING_START,
                        [eL.J.REPORTING_FIRST_QUARTILE]: U.REPORTING_FIRST_QUARTILE,
                        [eL.J.REPORTING_MIDPOINT]: U.REPORTING_MIDPOINT,
                        [eL.J.REPORTING_THIRD_QUARTILE]: U.REPORTING_THIRD_QUARTILE,
                        [eL.J.REPORTING_COMPLETE]: U.REPORTING_COMPLETE,
                        [eL.J.REPORTING_PAUSE]: U.REPORTING_PAUSE,
                        [eL.J.REPORTING_RESUME]: U.REPORTING_RESUME,
                        [eL.J.REPORTING_CREATIVE_VIEW]: U.REPORTING_CREATIVE_VIEW,
                        [eL.J.REPORTING_ERROR]: U.REPORTING_ERROR
                    }), this._emitStateChanged = this._emitStateChanged.bind(this), this.on(U.CLEARED, this._emitStateChanged), this.on(U.PAUSED, this._emitStateChanged), this.on(U.PLAYING, this._emitStateChanged), this.on(U.POSITION_CHANGED, this._emitStateChanged), this.on(U.STOPPED, this._emitStateChanged), this.on(U.LIST_CHANGED, this._emitStateChanged), this.on(U.VOLUME_CHANGED, this._emitStateChanged), this.on(U.SPEED_CHANGED, this._emitStateChanged), this.on(U.MUTED_CHANGED, this._emitStateChanged), this.on(U.TRACK_LOADED, this._emitStateChanged), this.on(U.DURATION_CHANGED, this._emitStateChanged), this.on(U.REBUFFERING_START, this._emitStateChanged), this.on(U.REBUFFERING_END, this._emitStateChanged), this._playerPromise.then(() => this.emit(U.PLAYER_INITIALIZATION_DONE, null)).catch(e => this.emit(U.PLAYER_INITIALIZATION_FAILED, {
                        error: e
                    })), this._transport.on(B.TransportEvent.BEFORE_ONLINE_DISCONNECT, e => {
                        e.data.awaitPromise(this._listPlayer.stop(l.END_PLAY).catch(e => {}))
                    })
                }
                _emitStateChanged() {
                    this._listPlayer.getState().then(e => {
                        this.emit(U.STATE_CHANGED, {
                            state: e
                        })
                    })
                }
                playTracks(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), new Promise(t => {
                        t(i0.create({
                            tracks: e
                        }))
                    }).then(e => this._listPlayer.play(e, t))
                }
                playList(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), this._listPlayer.play(e, t)
                }
                getState() {
                    return this.getCurrentState()
                }
                getCurrentState() {
                    return this._listPlayer.getState()
                }
                pause() {
                    return this._listPlayer.pause()
                }
                resume() {
                    return this._listPlayer.resume()
                }
                togglePlay() {
                    return this._listPlayer.togglePlay()
                }
                stop() {
                    return this._listPlayer.stop(l.END_PLAY)
                }
                seek(e) {
                    return this._listPlayer.seek(e)
                }
                nextTrack() {
                    return this._listPlayer.next(l.FORWARD_BUTTON)
                }
                previousTrack() {
                    return this._listPlayer.previous(l.BACK_BUTTON)
                }
                getVolume() {
                    return this._listPlayer.getVolume()
                }
                setVolume(e) {
                    return this._listPlayer.setVolume(e)
                }
                setPlaybackSpeed(e) {
                    return this._listPlayer.setPlaybackSpeed(e)
                }
                setMuted(e) {
                    return this._listPlayer.setMuted(e)
                }
                activateElement() {
                    return this._listPlayer.activateElement()
                }
                preloadTrack(e) {
                    return this._listPlayer.preloadTrack(e)
                }
                hideSubtitles() {
                    return this._listPlayer.hideSubtitles()
                }
                showSubtitles() {
                    return this._listPlayer.showSubtitles()
                }
                getSubtitleLanguages() {
                    return this._listPlayer.getSubtitleLanguages()
                }
                setSubtitleLanguage(e) {
                    return this._listPlayer.setSubtitleLanguage(e)
                }
                areSubtitlesShown() {
                    return this._listPlayer.areSubtitlesShown()
                }
                getActiveSubtitleLanguage() {
                    return this._listPlayer.getActiveSubtitleLanguage()
                }
                getMediaConfig() {
                    return this._listPlayer.getMediaConfig()
                }
                deactivateSubtitleEvents() {
                    return this._listPlayer.deactivateCueEvents()
                }
                activateSubtitleEvents() {
                    return this._listPlayer.activateCueEvents()
                }
                setMediaPlaybackMode(e) {
                    return this._listPlayer.setMediaPlaybackMode(e)
                }
                setPlayerVisibility(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setIsVideoVisible(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setVideoSurface(e) {
                    return this._listPlayer.setVideoSurface(e)
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
            }
            Object.assign(Object.assign({}, B.TransportErrors), x.I);
            let i2 = iZ.create,
                i4 = i0.create;

            function i3(e) {
                var t, i, r, a, n, s, o;
                let {
                    transport: l,
                    autoActivateElement: _,
                    config: d
                } = e, u = null == d ? void 0 : d.mux, c = t7(Object.assign(Object.assign({}, d), {
                    loggerOptions: {
                        platform: e.platform_identifier,
                        disableMux: null == (i = null != (t = null == u ? void 0 : u.disable) ? t : null == d ? void 0 : d.disableMux) || i,
                        muxEnvKey: null != (r = null == u ? void 0 : u.envKey) ? r : null == d ? void 0 : d.muxEnvKey,
                        muxCustomDimensions: null == u ? void 0 : u.customDimensions,
                        deviceInfo: null != (a = null == u ? void 0 : u.deviceInfo) ? a : null == (n = null == d ? void 0 : d.loggerOptions) ? void 0 : n.deviceInfo
                    },
                    sdkId: `overture:${z.version}`,
                    transport: l.toPublic(),
                    audioProcessorOptions: {
                        disable: null == (o = null == (s = null == d ? void 0 : d.audioProcessorOptions) ? void 0 : s.disable) || o
                    }
                })).then(e => e.player), h = t8.create({
                    trackPlayer: c
                });
                return i1.create({
                    listPlayer: h,
                    playerPromise: c,
                    transport: l,
                    autoActivateElement: _
                })
            }

            function i5(e) {
                var t, i, r, a;
                let n, s = e.transport;
                if (!s) throw TypeError("No Transport instance provided");
                let o = (a = Object.assign(Object.assign({}, e.client), {
                        transport: s,
                        hidden: !!e.hidden,
                        playTokenLostBehavior: e.playTokenLostBehavior || (e.hidden && !e.onlyLocalState ? "stop" : "pause")
                    }), eS.create(a)),
                    l = e.streamer || {},
                    d = e.controller || {},
                    u = null != (i = null == (t = e.controller) ? void 0 : t.enableWithoutStreamer) && i;
                e.streamer && e.streamer.disabled ? (e.hidden = !0, e.onlyLocalState = !1, e.claimInactivePlayerStates = !1, u = !0) : (n = function(e, t = {}) {
                    return function(e, t, i = {}) {
                        var r, a, n, s, o, l, d;
                        let u = e.getSDKId(),
                            c = e.getPublicTransport(),
                            h = e.getLogger(),
                            p = e.getDeviceDescriptor(),
                            m = null != (r = i.initialVolume) ? r : 1,
                            E = t7(Object.assign(Object.assign({}, i), {
                                transport: c,
                                sdkId: e.getUntaggedSDKId(),
                                loggerOptions: {
                                    disableMux: null == (s = null != (n = null == (a = null == i ? void 0 : i.mux) ? void 0 : a.disable) ? n : null == i ? void 0 : i.disableMux) || s,
                                    muxEnvKey: null != (l = null == (o = null == i ? void 0 : i.mux) ? void 0 : o.envKey) ? l : null == i ? void 0 : i.muxEnvKey,
                                    deviceInfo: p.then(e => ({
                                        platform_name: e.getPlatformName(),
                                        platform: e.getPlatformIdentifier(),
                                        version: e.getPlatformVersion(),
                                        os_name: e.getOSName(),
                                        os_version: e.getOSVersion(),
                                        brand: e.getBrand(),
                                        model: e.getModel(),
                                        type: e.getType()
                                    })),
                                    muxCustomDimensions: null == (d = null == i ? void 0 : i.mux) ? void 0 : d.customDimensions,
                                    platform: e.getPlatformIdentifier(),
                                    clientVersion: e.getPlatformVersion()
                                }
                            })).then(({
                                player: e
                            }) => e),
                            f = Promise.all([p, E.then(e => e.getMediaConfig())]).then(([e, t]) => (e.getCapability("audio_podcasts") && !i.disableExternalFiles && e.appendManifestFormat(_.FILE_URLS_EXTERNAL), t.keysystem === eD.J.FAIRPLAY ? e.appendManifestFormat(_.FILE_IDS_CBCS) : t.keysystem !== eD.J.WIDEVINE || i.preferMultiDRMFormat ? e.appendManifestFormat(_.FILE_IDS_MP4_DUAL, _.FILE_IDS_MP4, _.MANIFEST_URLS_AUDIO_AD) : (-1 !== t.formats.audio.indexOf('audio/mp4; codecs="flac"') && e.getCapability("lossless_playback") && e.appendManifestFormat(_.FILE_IDS_MP4FLAC), e.appendManifestFormat(_.FILE_IDS_MP4, _.FILE_IDS_MP4_DUAL, _.MANIFEST_URLS_AUDIO_AD)), t.supports.protected_video && e.getCapability("video_playback") && e.prependManifestFormat(_.MANIFEST_IDS_VIDEO), t.supports.unprotected_video && e.getCapability("video_ads") && e.prependManifestFormat(_.MANIFEST_URLS_VIDEO_AD), e)),
                            g = t8.create({
                                trackPlayer: E
                            }),
                            y = iE.create({
                                descriptor: p,
                                listPlayer: g
                            }),
                            {
                                playbackServiceClient: v,
                                playbackStateObserver: T
                            } = t({
                                initialVolume: m,
                                listPlayer: g,
                                logger: h,
                                transport: c,
                                clientVersion: u,
                                descriptor: f,
                                endpoint: i.endpoint,
                                manifestTrackResolver: y,
                                initialVideoSurface: i.initialVideoSurface,
                                initialIsVideoVisible: i.initialIsVideoVisible
                            });
                        return new ir({
                            client: e,
                            playbackServiceClient: v,
                            playbackStateObserver: T,
                            initialVolume: m,
                            playerPromise: E,
                            listPlayer: g,
                            stopOnBackground: i.stopOnBackground,
                            enableMediaSession: i.enableMediaSession
                        })
                    }(e, e => {
                        let t = iD.create(Object.assign(Object.assign({}, e), {
                                ListClass: ih
                            })),
                            i = ic.create(t);
                        return {
                            playbackServiceClient: t,
                            playbackStateObserver: i
                        }
                    }, t)
                }(o, l), d.autoregister = !1, e.onlyLocalState && (d.decorateTrackWindow = !1, d.disableProgress = !0));
                let c = function(e, t = {}) {
                    let i = e.getPublicTransport(),
                        r = e.getVersionDescriptor().tagged,
                        a = i$.create({
                            autoregister: !("autoregister" in t) || t.autoregister,
                            descriptor: e.getClientDescriptor(),
                            transport: i,
                            tracker: new iz(e.getLogger())
                        });
                    return iG.create({
                        client: e,
                        playerClient: a,
                        version: r,
                        serverTime: iO.create(i),
                        decorateTrackWindow: "boolean" != typeof t.decorateTrackWindow || t.decorateTrackWindow,
                        disableProgress: t.disableProgress
                    })
                }(o, d);
                return X.create({
                    transport: s,
                    client: o,
                    streamer: n,
                    controller: c,
                    enableControllerWithoutStreamer: u,
                    hidden: e.hidden,
                    onlyLocalState: e.onlyLocalState,
                    claimInactivePlayerStates: e.claimInactivePlayerStates,
                    forceRemoteActions: e.forceRemoteActions,
                    autoActivateElement: null != (r = e.autoActivateElement) ? r : "undefined" != typeof WebKitMediaKeys,
                    experimentalDeactivateOnStop: e.experimentalDeactivateOnStop
                })
            }
            Object.assign(Object.assign(Object.assign({}, r), F.L), x.I)
        },
        96816: e => {
            e.exports = function() {
                var e = {
                        80: function(e, t, i) {
                            e.exports = i(728).default
                        },
                        728: function(e, t, i) {
                            "use strict";
                            i.d(t, {
                                default: function() {
                                    return th
                                }
                            });
                            var r = i(48),
                                a = i.n(r),
                                n = function() {
                                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                        var t = 16 * Math.random() | 0;
                                        return ("x" === e ? t : 3 & t | 8).toString(16)
                                    })
                                },
                                s = function() {
                                    return ("000000" + (0x81bf1000 * Math.random() | 0).toString(36)).slice(-6)
                                },
                                o = function(e) {
                                    var t, i;
                                    if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = s()), e.muxId;
                                    try {
                                        i = document.querySelector(e)
                                    } catch (e) {}
                                    return i && !i.muxId && (i.muxId = e), (null == (t = i) ? void 0 : t.muxId) || e
                                },
                                l = function(e) {
                                    e && void 0 !== e.nodeName ? e = o(t = e) : t = document.querySelector(e);
                                    var t, i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
                                    return [t, e, i]
                                },
                                _ = i(640),
                                d = i.n(_),
                                u = d().methodFactory;
                            d().methodFactory = function(e, t, i) {
                                var r = u(e, t, i);
                                return function() {
                                    for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                                    r.apply(void 0, e)
                                }
                            }, d().setLevel(d().getLevel());
                            var c = d();

                            function h() {
                                return "1" === (a().doNotTrack || a().navigator && a().navigator.doNotTrack)
                            }
                            var p = function() {
                                    var e = a().performance,
                                        t = e && e.timing,
                                        i = t && t.navigationStart;
                                    return Math.round("number" == typeof i && "function" == typeof e.now ? i + e.now() : Date.now())
                                },
                                m = function(e) {
                                    return E(e)[0]
                                },
                                E = function(e) {
                                    if ("string" != typeof e || "" === e) return ["localhost"];
                                    var t, i = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
                                    return i && (t = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [i, t]
                                },
                                f = function() {
                                    var e = a().performance;
                                    return void 0 !== (e && e.timing)
                                },
                                g = function() {
                                    var e = a().performance,
                                        t = e && e.timing;
                                    return t && t.domContentLoadedEventEnd
                                },
                                y = function() {
                                    var e = a().performance,
                                        t = e && e.timing;
                                    return t && t.navigationStart
                                };

                            function v(e, t, i) {
                                i = void 0 === i ? 1 : i, e[t] = e[t] || 0, e[t] += i
                            }
                            var T = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
                                S = ["x-cdn", "content-type"].concat(T);

                            function P(e) {
                                var t = {};
                                return (e = e || "").trim().split(/[\r\n]+/).forEach(function(e) {
                                    if (e) {
                                        var i = e.split(": "),
                                            r = i.shift();
                                        r && (S.indexOf(r.toLowerCase()) >= 0 || 0 === r.toLowerCase().indexOf("x-litix-")) && (t[r] = i.join(": "))
                                    }
                                }), t
                            }

                            function b(e) {
                                if (e) {
                                    var t = T.find(function(t) {
                                        return void 0 !== e[t]
                                    });
                                    return t ? e[t] : void 0
                                }
                            }
                            var R = function(e) {
                                var t = {};
                                for (var i in e) {
                                    var r = e[i]; - 1 !== r["DATA-ID"].search("io.litix.data.") && (t[r["DATA-ID"].replace("io.litix.data.", "")] = r.VALUE)
                                }
                                return t
                            };

                            function I(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function A(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? I(Object(i), !0).forEach(function(t) {
                                        var r, a, n;
                                        r = e, a = t, n = i[t], a in r ? Object.defineProperty(r, a, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[a] = n
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }
                            var L = function(e) {
                                    if (!e) return {};
                                    var t = y(),
                                        i = e.loading,
                                        r = i ? i.start : e.trequest,
                                        a = i ? i.first : e.tfirst,
                                        n = i ? i.end : e.tload;
                                    return {
                                        bytesLoaded: e.total,
                                        requestStart: Math.round(t + r),
                                        responseStart: Math.round(t + a),
                                        responseEnd: Math.round(t + n)
                                    }
                                },
                                D = function(e) {
                                    if (e && "function" == typeof e.getAllResponseHeaders) return P(e.getAllResponseHeaders())
                                };

                            function C(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function O(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? C(Object(i), !0).forEach(function(t) {
                                        var r, a, n;
                                        r = e, a = t, n = i[t], a in r ? Object.defineProperty(r, a, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[a] = n
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }
                            var k = function(e, t) {
                                    if (!e || !e.requestEndDate) return {};
                                    var i, r = m(e.url),
                                        a = e.url,
                                        n = e.bytesLoaded,
                                        s = new Date(e.requestStartDate).getTime(),
                                        o = new Date(e.firstByteDate).getTime(),
                                        l = new Date(e.requestEndDate).getTime(),
                                        _ = isNaN(e.duration) ? 0 : e.duration,
                                        d = "function" == typeof t.getMetricsFor ? t.getMetricsFor(e.mediaType).HttpList : t.getDashMetrics().getHttpRequests(e.mediaType);
                                    return d.length > 0 && (i = P(d[d.length - 1]._responseHeaders || "")), {
                                        requestStart: s,
                                        requestResponseStart: o,
                                        requestResponseEnd: l,
                                        requestBytesLoaded: n,
                                        requestResponseHeaders: i,
                                        requestMediaDuration: _,
                                        requestHostname: r,
                                        requestUrl: a,
                                        requestId: i ? b(i) : void 0
                                    }
                                },
                                N = function(e, t) {
                                    var i = t.getQualityFor(e),
                                        r = t.getCurrentTrackFor(e).bitrateList;
                                    return r ? {
                                        currentLevel: i,
                                        renditionWidth: r[i].width || null,
                                        renditionHeight: r[i].height || null,
                                        renditionBitrate: r[i].bandwidth
                                    } : {}
                                },
                                w = function(e) {
                                    var t;
                                    return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1]
                                },
                                M = function(e) {
                                    try {
                                        var t, i;
                                        return null == (t = e.getVersion) || null == (i = t.call(e)) ? void 0 : i.split(".").map(function(e) {
                                            return parseInt(e)
                                        })[0]
                                    } catch (e) {
                                        return !1
                                    }
                                };

                            function U(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var F = 0,
                                x = function() {
                                    var e, t;

                                    function i() {
                                        if (!(this instanceof i)) throw TypeError("Cannot call a class as a function")
                                    }
                                    return e = [{
                                        key: "on",
                                        value: function(e, t, i) {
                                            return t._eventEmitterGuid = t._eventEmitterGuid || ++F, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], i && (t = t.bind(i)), this._listeners[e].push(t), t
                                        }
                                    }, {
                                        key: "off",
                                        value: function(e, t) {
                                            var i = this._listeners && this._listeners[e];
                                            i && i.forEach(function(e, r) {
                                                e._eventEmitterGuid === t._eventEmitterGuid && i.splice(r, 1)
                                            })
                                        }
                                    }, {
                                        key: "one",
                                        value: function(e, t, i) {
                                            var r = this;
                                            t._eventEmitterGuid = t._eventEmitterGuid || ++F;
                                            var a = function a() {
                                                r.off(e, a), t.apply(i || this, arguments)
                                            };
                                            a._eventEmitterGuid = t._eventEmitterGuid, this.on(e, a)
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(e, t) {
                                            var i = this;
                                            if (this._listeners) {
                                                t = t || {};
                                                var r = this._listeners["before*"] || [],
                                                    a = this._listeners[e] || [],
                                                    n = this._listeners["after" + e] || [],
                                                    s = function(t, r) {
                                                        (t = t.slice()).forEach(function(t) {
                                                            t.call(i, {
                                                                type: e
                                                            }, r)
                                                        })
                                                    };
                                                s(r, t), s(a, t), s(n, t)
                                            }
                                        }
                                    }], U(i.prototype, e), t && U(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }();

                            function B(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var Y = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, e.on("playing", function() {
                                            t._playheadShouldBeProgressing = !0
                                        }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("seeking", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
                                            e.data.player_is_paused ? t._stopPlaybackHeartbeatInterval() : t._startPlaybackHeartbeatInterval()
                                        }), e.on("timeupdate", function() {
                                            null !== t._playbackHeartbeatInterval && e.emit("playbackheartbeat")
                                        }), e.on("devicesleep", function(i, r) {
                                            null !== t._playbackHeartbeatInterval && (a().clearInterval(t._playbackHeartbeatInterval), e.emit("playbackheartbeatend", {
                                                viewer_time: r.viewer_time
                                            }), t._playbackHeartbeatInterval = null)
                                        })
                                    }
                                    return e = [{
                                        key: "_startPlaybackHeartbeatInterval",
                                        value: function() {
                                            var e = this;
                                            null === this._playbackHeartbeatInterval && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = a().setInterval(function() {
                                                e.pm.emit("playbackheartbeat")
                                            }, this.pm.playbackHeartbeatTime))
                                        }
                                    }, {
                                        key: "_stopPlaybackHeartbeatInterval",
                                        value: function() {
                                            this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (a().clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
                                        }
                                    }], B(i.prototype, e), t && B(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                V = (Object.defineProperty(eX = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("viewinit", function() {
                                        i.viewErrored = !1
                                    }), t.on("error", function(e, r) {
                                        try {
                                            var a = t.errorTranslator({
                                                player_error_code: r.player_error_code,
                                                player_error_message: r.player_error_message,
                                                player_error_context: r.player_error_context
                                            });
                                            a ? (t.data.player_error_code = a.player_error_code || r.player_error_code, t.data.player_error_message = a.player_error_message || r.player_error_message, t.data.player_error_context = a.player_error_context || r.player_error_context, i.viewErrored = !0) : (delete t.data.player_error_code, delete t.data.player_error_message, delete t.data.player_error_context)
                                        } catch (e) {
                                            t.mux.log.warn("Exception in error translator callback.", e), i.viewErrored = !0
                                        }
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), eX);

                            function G(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var j = function() {
                                var e, t;

                                function i(e) {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this))
                                }
                                return e = [{
                                    key: "_updateWatchTime",
                                    value: function(e, t) {
                                        var i = t.viewer_time;
                                        null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = i), v(this.pm.data, "view_watch_time", i - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = i
                                    }
                                }, {
                                    key: "_clearWatchTimeState",
                                    value: function(e, t) {
                                        this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
                                    }
                                }], G(i.prototype, e), t && G(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function H(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var J = function() {
                                var e, t;

                                function i(e) {
                                    var t = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = p(), this._isAdPlaying = !1, this._callbackUpdatePlaybackTime = null;
                                    var r = this._startPlaybackTimeTracking.bind(this);
                                    e.on("playing", r), e.on("adplaying", r), e.on("seeked", r);
                                    var a = this._stopPlaybackTimeTracking.bind(this);
                                    e.on("playbackheartbeatend", a), e.on("seeking", a), e.on("adplaying", function() {
                                        t._isAdPlaying = !0
                                    }), e.on("adended", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adpause", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adbreakstart", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adbreakend", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adplay", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("viewinit", function() {
                                        t._playbackTimeTrackerLastPlayheadPosition = -1, t._lastTime = p(), t._isAdPlaying = !1, t._callbackUpdatePlaybackTime = null
                                    })
                                }
                                return e = [{
                                    key: "_startPlaybackTimeTracking",
                                    value: function() {
                                        null === this._callbackUpdatePlaybackTime && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime))
                                    }
                                }, {
                                    key: "_stopPlaybackTimeTracking",
                                    value: function() {
                                        this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1)
                                    }
                                }, {
                                    key: "_updatePlaybackTime",
                                    value: function() {
                                        var e = this.pm.data.player_playhead_time,
                                            t = p(),
                                            i = -1;
                                        this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition ? i = e - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (i = t - this._lastTime), i > 0 && i <= 1e3 && v(this.pm.data, "view_content_playback_time", i), this._playbackTimeTrackerLastPlayheadPosition = e, this._lastTime = t
                                    }
                                }], H(i.prototype, e), t && H(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function q(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var K = function() {
                                    var e, t;

                                    function i(e) {
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e;
                                        var t = this._updatePlayheadTime.bind(this);
                                        e.on("playbackheartbeat", t), e.on("playbackheartbeatend", t), e.on("timeupdate", t), e.on("destroy", function() {
                                            e.off("timeupdate", t)
                                        })
                                    }
                                    return e = [{
                                        key: "_updateMaxPlayheadPosition",
                                        value: function() {
                                            this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time)
                                        }
                                    }, {
                                        key: "_updatePlayheadTime",
                                        value: function(e, t) {
                                            var i = this,
                                                r = function() {
                                                    i.pm.currentFragmentPDT && i.pm.currentFragmentStart && (i.pm.data.player_program_time = i.pm.currentFragmentPDT + i.pm.data.player_playhead_time - i.pm.currentFragmentStart)
                                                };
                                            if (t && t.player_playhead_time) this.pm.data.player_playhead_time = t.player_playhead_time, r(), this._updateMaxPlayheadPosition();
                                            else if (this.pm.getPlayheadTime) {
                                                var a = this.pm.getPlayheadTime();
                                                void 0 !== a && (this.pm.data.player_playhead_time = a, r(), this._updateMaxPlayheadPosition())
                                            }
                                        }
                                    }], q(i.prototype, e), t && q(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                Q = (Object.defineProperty(eZ = function e(t) {
                                    if (function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, e), !t.disableRebufferTracking) {
                                        var i, r = function(e, t) {
                                                a(t), i = void 0
                                            },
                                            a = function(e) {
                                                if (i) {
                                                    var r = e.viewer_time - i;
                                                    v(t.data, "view_rebuffer_duration", r), i = e.viewer_time, t.data.view_rebuffer_duration > 3e5 && (t.emit("viewend"), t.send("viewend"), t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5, "ms, future events will be ignored unless a programchange or videochange occurs.")))
                                                }
                                                t.data.view_watch_time >= 0 && t.data.view_rebuffer_count > 0 && (t.data.view_rebuffer_frequency = t.data.view_rebuffer_count / t.data.view_watch_time, t.data.view_rebuffer_percentage = t.data.view_rebuffer_duration / t.data.view_watch_time)
                                            };
                                        t.on("playbackheartbeat", function(e, t) {
                                            return a(t)
                                        }), t.on("rebufferstart", function(e, a) {
                                            i || (v(t.data, "view_rebuffer_count", 1), i = a.viewer_time, t.one("rebufferend", r))
                                        }), t.on("viewinit", function() {
                                            i = void 0, t.off("rebufferend", r)
                                        })
                                    }
                                }, "prototype", {
                                    writable: !1
                                }), eZ);

                            function W(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var $ = function() {
                                var e, t;

                                function i(e) {
                                    var t = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, e.disableRebufferTracking || e.disablePlayheadRebufferTracking || (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
                                        t._cleanupRebufferTracker(null, {
                                            viewer_time: p()
                                        })
                                    }))
                                }
                                return e = [{
                                    key: "_checkIfRebuffering",
                                    value: function(e, t) {
                                        if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t);
                                        else if (null !== this._lastCheckedTime)
                                            if (this._lastPlayheadTime === this.pm.data.player_playhead_time) {
                                                var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                                "number" == typeof this.pm.sustainedRebufferThreshold && i >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                                                    viewer_time: this._lastPlayheadTimeUpdatedTime
                                                }))), this._lastCheckedTime = t.viewer_time
                                            } else this._cleanupRebufferTracker(e, t, !0);
                                        else this._prepareRebufferTrackerState(t.viewer_time)
                                    }
                                }, {
                                    key: "_clearRebufferTrackerState",
                                    value: function() {
                                        this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
                                    }
                                }, {
                                    key: "_prepareRebufferTrackerState",
                                    value: function(e) {
                                        this._lastCheckedTime = e, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
                                    }
                                }, {
                                    key: "_cleanupRebufferTracker",
                                    value: function(e, t) {
                                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                        if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                                            viewer_time: t.viewer_time
                                        });
                                        else {
                                            if (null === this._lastCheckedTime) return;
                                            var r = this.pm.data.player_playhead_time - this._lastPlayheadTime,
                                                a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                            "number" == typeof this.pm.minimumRebufferDuration && r > 0 && a - r > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", {
                                                viewer_time: this._lastPlayheadTimeUpdatedTime
                                            }), this.pm.emit("rebufferend", {
                                                viewer_time: this._lastPlayheadTimeUpdatedTime + a - r
                                            }))
                                        }
                                        i ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
                                    }
                                }], W(i.prototype, e), t && W(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function z(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var X = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, e.on("viewinit", function() {
                                            var i = e.data,
                                                r = i.view_id;
                                            if (!i.view_program_changed) {
                                                var a = function(i, a) {
                                                    var n = a.viewer_time;
                                                    "playing" === i.type && void 0 === e.data.view_time_to_first_frame ? t.calculateTimeToFirstFrame(n || p(), r) : "adplaying" === i.type && (void 0 === e.data.view_time_to_first_frame || t._inPrerollPosition()) && t.calculateTimeToFirstFrame(n || p(), r)
                                                };
                                                e.one("playing", a), e.one("adplaying", a), e.one("viewend", function() {
                                                    e.off("playing", a), e.off("adplaying", a)
                                                })
                                            }
                                        })
                                    }
                                    return e = [{
                                        key: "_inPrerollPosition",
                                        value: function() {
                                            return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3
                                        }
                                    }, {
                                        key: "calculateTimeToFirstFrame",
                                        value: function(e, t) {
                                            t === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                                                viewer_time: e
                                            }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START))
                                        }
                                    }], z(i.prototype, e), t && z(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                Z = (Object.defineProperty(e0 = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("viewinit", function() {
                                        i._lastPlayheadPosition = -1
                                    }), ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"].forEach(function(e) {
                                        t.on(e, function() {
                                            if (i._lastPlayheadPosition >= 0 && t.data.player_playhead_time >= 0 && i._lastPlayerWidth >= 0 && i._lastSourceWidth > 0 && i._lastPlayerHeight >= 0 && i._lastSourceHeight > 0) {
                                                var e = t.data.player_playhead_time - i._lastPlayheadPosition;
                                                if (e < 0) return void(i._lastPlayheadPosition = -1);
                                                var r = Math.min(i._lastPlayerWidth / i._lastSourceWidth, i._lastPlayerHeight / i._lastSourceHeight),
                                                    a = Math.max(0, r - 1),
                                                    n = Math.max(0, 1 - r);
                                                t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, a), t.data.view_max_downscale_percentage = Math.max(t.data.view_max_downscale_percentage || 0, n), v(t.data, "view_total_content_playback_time", e), v(t.data, "view_total_upscaling", a * e), v(t.data, "view_total_downscaling", n * e)
                                            }
                                            i._lastPlayheadPosition = -1
                                        })
                                    }), ["playing", "hb"].forEach(function(e) {
                                        t.on(e, function() {
                                            i._lastPlayheadPosition = t.data.player_playhead_time, i._lastPlayerWidth = t.data.player_width, i._lastPlayerHeight = t.data.player_height, i._lastSourceWidth = t.data.video_source_width, i._lastSourceHeight = t.data.video_source_height
                                        })
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e0),
                                ee = (Object.defineProperty(e1 = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), this.isSeeking = !1;
                                    var r = -1,
                                        a = function() {
                                            var e = p(),
                                                a = (t.data.viewer_time || e) - (r || e);
                                            v(t.data, "view_seek_duration", a), t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, a), i.isSeeking = !1, r = -1
                                        };
                                    t.on("seeking", function(e, n) {
                                        Object.assign(t.data, n), i.isSeeking && n.viewer_time - r <= 2e3 ? r = n.viewer_time : (i.isSeeking && a(), i.isSeeking = !0, r = n.viewer_time, v(t.data, "view_seek_count", 1), t.send("seeking"))
                                    }), t.on("seeked", function() {
                                        a()
                                    }), t.on("viewend", function() {
                                        i.isSeeking && (a(), t.send("seeked")), i.isSeeking = !1, r = -1
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e1);

                            function et(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var r, a, n = [],
                                            s = !0,
                                            o = !1;
                                        try {
                                            for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                s || null == i.return || i.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                        return n
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return ei(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ei(e, t) : void 0
                                    }
                                }(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function ei(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function er(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var ea = function(e, t) {
                                    e.push(t), e.sort(function(e, t) {
                                        return e.viewer_time - t.viewer_time
                                    })
                                },
                                en = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"],
                                es = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, e.on("viewinit", function() {
                                            t.isAdBreak = !1, t._currentAdRequestNumber = 0, t._currentAdResponseNumber = 0, t._adRequests = [], t._adResponses = [], t._adHasPlayed = !1, t._wouldBeNewAdPlay = !0, t._prerollPlayTime = void 0
                                        }), en.forEach(function(i) {
                                            return e.on(i, t._updateAdData.bind(t))
                                        });
                                        var r = function() {
                                            t.isAdBreak = !1
                                        };
                                        e.on("adbreakstart", function() {
                                            t.isAdBreak = !0
                                        }), e.on("play", r), e.on("playing", r), e.on("viewend", r), e.on("adrequest", function(i, r) {
                                            r = Object.assign({
                                                ad_request_id: "generatedAdRequestId" + t._currentAdRequestNumber++
                                            }, r), ea(t._adRequests, r), v(e.data, "view_ad_request_count"), t.inPrerollPosition() && (e.data.view_preroll_requested = !0, t._adHasPlayed || v(e.data, "view_preroll_request_count"))
                                        }), e.on("adresponse", function(i, r) {
                                            r = Object.assign({
                                                ad_request_id: "generatedAdRequestId" + t._currentAdResponseNumber++
                                            }, r), ea(t._adResponses, r);
                                            var a = t.findAdRequest(r.ad_request_id);
                                            a && v(e.data, "view_ad_request_time", Math.max(0, r.viewer_time - a.viewer_time))
                                        }), e.on("adplay", function(i, r) {
                                            t._adHasPlayed = !0, t._wouldBeNewAdPlay && (t._wouldBeNewAdPlay = !1, v(e.data, "view_ad_played_count")), t.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = !0, t._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, r.viewer_time - t._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, r.viewer_time - e.data.view_start)), t._prerollPlayTime = r.viewer_time)
                                        }), e.on("adplaying", function(i, r) {
                                            t.inPrerollPosition() && void 0 === e.data.view_preroll_load_time && void 0 !== t._prerollPlayTime && (e.data.view_preroll_load_time = r.viewer_time - t._prerollPlayTime, e.data.view_startup_preroll_load_time = r.viewer_time - t._prerollPlayTime)
                                        }), e.on("adclicked", function(i, r) {
                                            t._wouldBeNewAdPlay || v(e.data, "view_ad_clicked_count")
                                        }), e.on("adskipped", function(i, r) {
                                            t._wouldBeNewAdPlay || v(e.data, "view_ad_skipped_count")
                                        }), e.on("adended", function() {
                                            t._wouldBeNewAdPlay = !0
                                        }), e.on("aderror", function() {
                                            t._wouldBeNewAdPlay = !0
                                        })
                                    }
                                    return e = [{
                                        key: "inPrerollPosition",
                                        value: function() {
                                            return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3
                                        }
                                    }, {
                                        key: "findAdRequest",
                                        value: function(e) {
                                            for (var t = 0; t < this._adRequests.length; t++)
                                                if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
                                        }
                                    }, {
                                        key: "_updateAdData",
                                        value: function(e, t) {
                                            if (this.inPrerollPosition()) {
                                                if (!this.pm.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                                                    var i = et(E(t.ad_tag_url), 2),
                                                        r = i[0],
                                                        a = i[1];
                                                    this.pm.data.view_preroll_ad_tag_domain = a, this.pm.data.view_preroll_ad_tag_hostname = r
                                                }
                                                if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                                    var n = et(E(t.ad_asset_url), 2),
                                                        s = n[0],
                                                        o = n[1];
                                                    this.pm.data.view_preroll_ad_asset_domain = o, this.pm.data.view_preroll_ad_asset_hostname = s
                                                }
                                            }
                                            this.pm.data.ad_asset_url = null == t ? void 0 : t.ad_asset_url, this.pm.data.ad_tag_url = null == t ? void 0 : t.ad_tag_url, this.pm.data.ad_creative_id = null == t ? void 0 : t.ad_creative_id, this.pm.data.ad_id = null == t ? void 0 : t.ad_id, this.pm.data.ad_universal_id = null == t ? void 0 : t.ad_universal_id
                                        }
                                    }], er(i.prototype, e), t && er(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                eo = (Object.defineProperty(e2 = function e(t) {
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var i, r, n = function() {
                                            t.disableRebufferTracking || i && (v(t.data, "view_waiting_rebuffer_duration", p() - i), i = !1, a().clearInterval(r))
                                        },
                                        s = !1,
                                        o = function() {
                                            s = !1, n()
                                        };
                                    t.on("waiting", function() {
                                        s && (t.disableRebufferTracking || (v(t.data, "view_waiting_rebuffer_count", 1), i = p(), r = a().setInterval(function() {
                                            if (i) {
                                                var e = p();
                                                v(t.data, "view_waiting_rebuffer_duration", e - i), i = e
                                            }
                                        }, 250)))
                                    }), t.on("playing", function() {
                                        n(), s = !0
                                    }), t.on("pause", o), t.on("seeking", o)
                                }, "prototype", {
                                    writable: !1
                                }), e2),
                                el = (Object.defineProperty(e4 = function e(t) {
                                    var i = this;
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var r = function() {
                                            i.lastWallClockTime = p(), t.on("before*", a)
                                        },
                                        a = function(e) {
                                            var r = p(),
                                                a = i.lastWallClockTime;
                                            i.lastWallClockTime = r, r - a > 3e4 && (t.emit("devicesleep", {
                                                viewer_time: a
                                            }), Object.assign(t.data, {
                                                viewer_time: a
                                            }), t.send("devicesleep"), t.emit("devicewake", {
                                                viewer_time: r
                                            }), Object.assign(t.data, {
                                                viewer_time: r
                                            }), t.send("devicewake"))
                                        };
                                    t.one("playbackheartbeat", r), t.on("playbackheartbeatend", function() {
                                        t.off("before*", a), t.one("playbackheartbeat", r)
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e4),
                                e_ = i(375),
                                ed = i(655),
                                eu = i.n(ed),
                                ec = "muxData",
                                eh = function() {
                                    var e;
                                    try {
                                        e = e_.parse(eu().get(ec) || "")
                                    } catch (t) {
                                        e = {}
                                    }
                                    return e
                                },
                                ep = function(e) {
                                    try {
                                        eu().set(ec, e_.stringify(e), {
                                            expires: 365
                                        })
                                    } catch (e) {}
                                },
                                em = function() {
                                    var e = eh();
                                    return e.mux_viewer_id = e.mux_viewer_id || n(), e.msn = e.msn || Math.random(), ep(e), {
                                        mux_viewer_id: e.mux_viewer_id,
                                        mux_sample_number: e.msn
                                    }
                                },
                                eE = function() {
                                    var e;
                                    switch (ef()) {
                                        case "cellular":
                                            e = "cellular";
                                            break;
                                        case "ethernet":
                                            e = "wired";
                                            break;
                                        case "wifi":
                                            e = "wifi";
                                            break;
                                        case void 0:
                                            break;
                                        default:
                                            e = "other"
                                    }
                                    return e
                                },
                                ef = function() {
                                    var e = a().navigator,
                                        t = e && (e.connection || e.mozConnection || e.webkitConnection);
                                    return t && t.type
                                };
                            eE.getConnectionFromAPI = ef;
                            var eg = ev({
                                    a: "env",
                                    b: "beacon",
                                    c: "custom",
                                    d: "ad",
                                    e: "event",
                                    f: "experiment",
                                    i: "internal",
                                    m: "mux",
                                    n: "response",
                                    p: "player",
                                    q: "request",
                                    r: "retry",
                                    s: "session",
                                    t: "timestamp",
                                    u: "viewer",
                                    v: "video",
                                    w: "page",
                                    x: "view",
                                    y: "sub"
                                }),
                                ey = ev({
                                    ad: "ad",
                                    ag: "aggregate",
                                    ap: "api",
                                    al: "application",
                                    ar: "architecture",
                                    as: "asset",
                                    au: "autoplay",
                                    av: "average",
                                    bi: "bitrate",
                                    br: "break",
                                    bw: "browser",
                                    by: "bytes",
                                    ca: "cached",
                                    cb: "cancel",
                                    cc: "codec",
                                    cd: "code",
                                    cg: "category",
                                    ch: "changed",
                                    ck: "clicked",
                                    cl: "canceled",
                                    cn: "config",
                                    co: "count",
                                    ce: "counter",
                                    cp: "complete",
                                    cr: "creative",
                                    ct: "content",
                                    cu: "current",
                                    cx: "connection",
                                    cz: "context",
                                    dg: "downscaling",
                                    dm: "domain",
                                    dn: "cdn",
                                    do: "downscale",
                                    dr: "drm",
                                    dp: "dropped",
                                    du: "duration",
                                    dv: "device",
                                    ec: "encoding",
                                    ed: "edge",
                                    en: "end",
                                    eg: "engine",
                                    em: "embed",
                                    er: "error",
                                    es: "errorcode",
                                    et: "errortext",
                                    ee: "event",
                                    ev: "events",
                                    ex: "expires",
                                    ep: "experiments",
                                    fa: "failed",
                                    fi: "first",
                                    fm: "family",
                                    ft: "format",
                                    fp: "fps",
                                    fq: "frequency",
                                    fr: "frame",
                                    fs: "fullscreen",
                                    ha: "has",
                                    hb: "holdback",
                                    he: "headers",
                                    ho: "host",
                                    hn: "hostname",
                                    ht: "height",
                                    id: "id",
                                    ii: "init",
                                    in: "instance",
                                    ip: "ip",
                                    is: "is",
                                    ke: "key",
                                    la: "language",
                                    lb: "labeled",
                                    le: "level",
                                    li: "live",
                                    ld: "loaded",
                                    lo: "load",
                                    ls: "lists",
                                    lt: "latency",
                                    ma: "max",
                                    md: "media",
                                    me: "message",
                                    mf: "manifest",
                                    mi: "mime",
                                    ml: "midroll",
                                    mm: "min",
                                    mn: "manufacturer",
                                    mo: "model",
                                    mx: "mux",
                                    ne: "newest",
                                    nm: "name",
                                    no: "number",
                                    on: "on",
                                    os: "os",
                                    pa: "paused",
                                    pb: "playback",
                                    pd: "producer",
                                    pe: "percentage",
                                    pf: "played",
                                    pg: "program",
                                    ph: "playhead",
                                    pi: "plugin",
                                    pl: "preroll",
                                    pn: "playing",
                                    po: "poster",
                                    pr: "preload",
                                    ps: "position",
                                    pt: "part",
                                    py: "property",
                                    ra: "rate",
                                    rd: "requested",
                                    re: "rebuffer",
                                    rf: "rendition",
                                    rm: "remote",
                                    ro: "ratio",
                                    rp: "response",
                                    rq: "request",
                                    rs: "requests",
                                    sa: "sample",
                                    sd: "skipped",
                                    se: "session",
                                    sk: "seek",
                                    sm: "stream",
                                    so: "source",
                                    sq: "sequence",
                                    sr: "series",
                                    st: "start",
                                    su: "startup",
                                    sv: "server",
                                    sw: "software",
                                    ta: "tag",
                                    tc: "tech",
                                    te: "text",
                                    tg: "target",
                                    th: "throughput",
                                    ti: "time",
                                    tl: "total",
                                    to: "to",
                                    tt: "title",
                                    ty: "type",
                                    ug: "upscaling",
                                    un: "universal",
                                    up: "upscale",
                                    ur: "url",
                                    us: "user",
                                    va: "variant",
                                    vd: "viewed",
                                    vi: "video",
                                    ve: "version",
                                    vw: "view",
                                    vr: "viewer",
                                    wd: "width",
                                    wa: "watch",
                                    wt: "waiting"
                                });

                            function ev(e) {
                                var t = {};
                                for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                                return t
                            }

                            function eT(e) {
                                var t = {},
                                    i = {};
                                return Object.keys(e).forEach(function(r) {
                                    var a = !1;
                                    if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                                        var n = r.split("_"),
                                            s = n[0],
                                            o = eg[s];
                                        o || (c.info("Data key word `" + n[0] + "` not expected in " + r), o = s + "_"), n.splice(1).forEach(function(e) {
                                            "url" === e && (a = !0), ey[e] ? o += ey[e] : Number(e) && Math.floor(Number(e)) === Number(e) ? o += e : (c.info("Data key word `" + e + "` not expected in " + r), o += "_" + e + "_")
                                        }), a ? i[o] = e[r] : t[o] = e[r]
                                    }
                                }), Object.assign(t, i)
                            }
                            var eS = {
                                    maxBeaconSize: 300,
                                    maxQueueLength: 3600,
                                    baseTimeBetweenBeacons: 1e4,
                                    maxPayloadKBSize: 500
                                },
                                eP = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
                                eb = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = Object.assign({}, eS, t)
                                };
                            eb.prototype.queueEvent = function(e, t) {
                                var i = Object.assign({}, t);
                                return (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(i), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength)
                            }, eb.prototype.flushEvents = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                e && 1 === this._eventQueue.length ? this._eventQueue.pop() : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
                            }, eb.prototype.destroy = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), a().clearTimeout(this._sendTimeout)
                            }, eb.prototype._clearBeaconQueue = function() {
                                var e = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
                                    t = this._eventQueue.slice(e);
                                e > 0 && Object.assign(t[t.length - 1], eT({
                                    mux_view_message: "event queue truncated"
                                }));
                                var i = this._createPayload(t);
                                eR(this._beaconUrl, i, !0, function() {})
                            }, eb.prototype._sendBeaconQueue = function() {
                                var e = this;
                                if (!this._postInFlight) {
                                    var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
                                    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
                                    var i = this._createPayload(t),
                                        r = p();
                                    eR(this._beaconUrl, i, !1, function(i, a) {
                                        a ? (e._eventQueue = t.concat(e._eventQueue), e._failureCount += 1, c.info("Error sending beacon: " + a)) : e._failureCount = 0, e._roundTripTime = p() - r, e._postInFlight = !1
                                    })
                                }
                            }, eb.prototype._getNextBeaconTime = function() {
                                if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                                var e = Math.pow(2, this._failureCount - 1);
                                return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
                            }, eb.prototype._startBeaconSending = function() {
                                var e = this;
                                a().clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = a().setTimeout(function() {
                                    e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending()
                                }, this._getNextBeaconTime()))
                            }, eb.prototype._createPayload = function(e) {
                                var t, i, r, a = this,
                                    n = {
                                        transmission_timestamp: Math.round(p())
                                    };
                                this._roundTripTime && (n.rtt_ms = Math.round(this._roundTripTime));
                                var s = function() {
                                        r = (t = JSON.stringify({
                                            metadata: n,
                                            events: i || e
                                        })).length / 1024
                                    },
                                    o = function() {
                                        return r <= a._options.maxPayloadKBSize
                                    };
                                return s(), o() || (c.info("Payload size is too big (" + r + " kb). Removing unnecessary events."), i = e.filter(function(e) {
                                    return -1 === eP.indexOf(e.e)
                                }), s()), o() || (c.info("Payload size still too big (" + r + " kb). Cropping fields.."), i.forEach(function(e) {
                                    for (var t in e) {
                                        var i = e[t];
                                        "string" == typeof i && i.length > 51200 && (e[t] = i.substring(0, 51200))
                                    }
                                }), s()), t
                            };
                            var eR = function(e, t, i, r) {
                                if (i && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) r();
                                else if (a().fetch) a().fetch(e, {
                                    method: "POST",
                                    body: t,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    keepalive: t.length <= 57344
                                }).then(function(e) {
                                    return r(null, e.ok ? null : "Error")
                                }).catch(function(e) {
                                    return r(null, e)
                                });
                                else {
                                    if (a().XMLHttpRequest) {
                                        var n = new(a()).XMLHttpRequest;
                                        return n.onreadystatechange = function() {
                                            if (4 === n.readyState) return r(null, 200 !== n.status ? "error" : void 0)
                                        }, n.open("POST", e), n.setRequestHeader("Content-Type", "text/plain"), void n.send(t)
                                    }
                                    r()
                                }
                            };

                            function eI(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function eA(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function eL(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? eA(Object(i), !0).forEach(function(t) {
                                        eO(e, t, i[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : eA(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }

                            function eD(e) {
                                return (eD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function eC(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }

                            function eO(e, t, i) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = i, e
                            }
                            var ek = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"],
                                eN = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"],
                                ew = ["ad_id", "ad_creative_id", "ad_universal_id"],
                                eM = ["viewstart", "error", "ended", "viewend"],
                                eU = function() {
                                    var e, t;

                                    function i(e, t) {
                                        var r, n, s, o, l, _, d, u, c, h, p, m, E, f, g, y, v, T, S, P = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                        (function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        })(this, i), eO(this, "previousBeaconData", null), eO(this, "lastEventTime", 0), eO(this, "rateLimited", !1), this.mux = e, this.envKey = t, this.options = P, this.eventQueue = new eb((r = this.envKey, s = (n = this.options).beaconCollectionDomain, o = n.beaconDomain, s ? "https://" + s : (r = r || "inferred").match(/^[a-z0-9]+$/) ? "https://" + r + "." + (o || "litix.io") : "https://img.litix.io/a.gif")), this.sampleRate = null != (l = this.options.sampleRate) ? l : 1, this.disableCookies = null != (_ = this.options.disableCookies) && _, this.respectDoNotTrack = null != (d = this.options.respectDoNotTrack) && d, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
                                            mux_api_version: this.mux.API_VERSION,
                                            mux_embed: this.mux.NAME,
                                            mux_embed_version: this.mux.VERSION,
                                            viewer_application_name: null == (u = this.options.platform) ? void 0 : u.name,
                                            viewer_application_version: null == (c = this.options.platform) ? void 0 : c.version,
                                            viewer_application_engine: null == (h = this.options.platform) ? void 0 : h.layout,
                                            viewer_device_name: null == (p = this.options.platform) ? void 0 : p.product,
                                            viewer_device_category: "",
                                            viewer_device_manufacturer: null == (m = this.options.platform) ? void 0 : m.manufacturer,
                                            viewer_os_family: null == (E = this.options.platform) || null == (f = E.os) ? void 0 : f.family,
                                            viewer_os_architecture: null == (g = this.options.platform) || null == (y = g.os) ? void 0 : y.architecture,
                                            viewer_os_version: null == (v = this.options.platform) || null == (T = v.os) ? void 0 : T.version,
                                            viewer_connection_type: eE(),
                                            page_url: null === a() || void 0 === a() || null == (S = a().location) ? void 0 : S.href
                                        }, this.viewerData = this.disableCookies ? {} : em()
                                    }
                                    return e = [{
                                        key: "send",
                                        value: function(e, t) {
                                            var i;
                                            if (e && null != t && t.view_id) {
                                                if (this.respectDoNotTrack && h()) return c.info("Not sending `" + e + "` because Do Not Track is enabled");
                                                if (!t || "object" !== eD(t)) return c.error("A data object was expected in send() but was not provided");
                                                var r, a, s = this.disableCookies ? {} : (r = eh(), a = p(), r.session_start && (r.sst = r.session_start, delete r.session_start), r.session_id && (r.sid = r.session_id, delete r.session_id), r.session_expires && (r.sex = r.session_expires, delete r.session_expires), (!r.sex || r.sex < a) && (r.sid = n(), r.sst = a), r.sex = a + 15e5, ep(r), {
                                                        session_id: r.sid,
                                                        session_start: r.sst,
                                                        session_expires: r.sex
                                                    }),
                                                    o = eL(eL(eL(eL(eL({}, this.pageLevelData), t), s), this.viewerData), {}, {
                                                        event: e,
                                                        env_key: this.envKey
                                                    });
                                                o.user_id && (o.viewer_user_id = o.user_id, delete o.user_id);
                                                var l = (null != (i = o.mux_sample_number) ? i : 0) >= this.sampleRate,
                                                    _ = eT(this._deduplicateBeaconData(e, o));
                                                if (this.lastEventTime = this.mux.utils.now(), l) return c.info("Not sending event due to sample rate restriction", e, o, _);
                                                if (this.envKey || c.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", e, o, _), !this.rateLimited) {
                                                    if (c.info("Sending event", e, o, _), this.rateLimited = !this.eventQueue.queueEvent(e, _), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
                                                    else if (this.mux.WINDOW_HIDDEN && "hb" === e ? this.eventQueue.flushEvents(!0) : eM.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return o.event = "eventrateexceeded", _ = eT(o), this.eventQueue.queueEvent(o.event, _), c.error("Beaconing disabled due to rate limit.")
                                                }
                                            }
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.eventQueue.destroy(!1)
                                        }
                                    }, {
                                        key: "_deduplicateBeaconData",
                                        value: function(e, t) {
                                            var i = this,
                                                r = {},
                                                a = t.view_id;
                                            if ("-1" === a || "viewstart" === e || "viewend" === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) r = eL({}, t), a && (this.previousBeaconData = r), a && "viewend" === e && (this.previousBeaconData = null);
                                            else {
                                                var n = 0 === e.indexOf("request");
                                                Object.entries(t).forEach(function(t) {
                                                    var a = function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(t) || function(e, t) {
                                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (null != i) {
                                                                var r, a, n = [],
                                                                    s = !0,
                                                                    o = !1;
                                                                try {
                                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                                } catch (e) {
                                                                    o = !0, a = e
                                                                } finally {
                                                                    try {
                                                                        s || null == i.return || i.return()
                                                                    } finally {
                                                                        if (o) throw a
                                                                    }
                                                                }
                                                                return n
                                                            }
                                                        }(t, 2) || function(e, t) {
                                                            if (e) {
                                                                if ("string" == typeof e) return eI(e, 2);
                                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? eI(e, t) : void 0
                                                            }
                                                        }(t, 2) || function() {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }(),
                                                        s = a[0],
                                                        o = a[1];
                                                    i.previousBeaconData && (o !== i.previousBeaconData[s] || ek.indexOf(s) > -1 || i.objectHasChanged(n, s, o, i.previousBeaconData[s]) || i.eventRequiresKey(e, s)) && (r[s] = o, i.previousBeaconData[s] = o)
                                                })
                                            }
                                            return r
                                        }
                                    }, {
                                        key: "objectHasChanged",
                                        value: function(e, t, i, r) {
                                            return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === eD(i) && "object" === eD(r) && Object.keys(i || {}).length === Object.keys(r || {}).length)
                                        }
                                    }, {
                                        key: "eventRequiresKey",
                                        value: function(e, t) {
                                            return "renditionchange" === e && 0 === t.indexOf("video_source_") || !(!ew.includes(t) || !eN.includes(e))
                                        }
                                    }], eC(i.prototype, e), t && eC(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                eF = (Object.defineProperty(e3 = function e(t) {
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var i = 0,
                                        r = 0,
                                        a = 0,
                                        n = 0,
                                        s = 0,
                                        o = 0,
                                        l = 0;
                                    t.on("requestcompleted", function(e, o) {
                                        var l, _, d = o.request_start,
                                            u = o.request_response_start,
                                            c = o.request_response_end,
                                            h = o.request_bytes_loaded;
                                        if (n++, u ? (l = u - (null != d ? d : 0), _ = (null != c ? c : 0) - u) : _ = (null != c ? c : 0) - (null != d ? d : 0), _ > 0 && h && h > 0) {
                                            var p = h / _ * 8e3;
                                            s++, r += h, a += _, t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, p), t.data.view_average_request_throughput = r / a * 8e3, t.data.view_request_count = n, l > 0 && (i += l, t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, l), t.data.view_average_request_latency = i / s)
                                        }
                                    }), t.on("requestfailed", function(e, i) {
                                        n++, o++, t.data.view_request_count = n, t.data.view_request_failed_count = o
                                    }), t.on("requestcanceled", function(e, i) {
                                        n++, l++, t.data.view_request_count = n, t.data.view_request_canceled_count = l
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e3),
                                ex = (Object.defineProperty(e5 = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("before*", function(e, r) {
                                        var a = r.viewer_time,
                                            n = p(),
                                            s = i._lastEventTime;
                                        if (i._lastEventTime = n, s && n - s > 36e5) {
                                            var o = Object.keys(t.data).reduce(function(e, i) {
                                                var r, a;
                                                return 0 === i.indexOf("video_") ? Object.assign(e, (r = {}, a = t.data[i], i in r ? Object.defineProperty(r, i, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : r[i] = a, r)) : e
                                            }, {});
                                            t.mux.log.info("Received event after at least an hour inactivity, creating a new view"), t.emit("viewinit", Object.assign({
                                                viewer_time: a
                                            }, o)), t.playbackHeartbeat._playheadShouldBeProgressing && "play" !== e.type && "adbreakstart" !== e.type && (t.emit("play", {
                                                viewer_time: a
                                            }), "playing" !== e.type && t.emit("playing", {
                                                viewer_time: a
                                            }))
                                        }
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e5);

                            function eB(e) {
                                return (eB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function eY(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function eV(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }

                            function eG(e, t) {
                                return (eG = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }

                            function ej(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }

                            function eH(e) {
                                return (eH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }
                            var eJ = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"],
                                eq = function(e) {
                                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                    s.prototype = Object.create(e && e.prototype, {
                                        constructor: {
                                            value: s,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), Object.defineProperty(s, "prototype", {
                                        writable: !1
                                    }), e && eG(s, e);
                                    var t, i, r, a = (t = function() {
                                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                        if ("function" == typeof Proxy) return !0;
                                        try {
                                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                        } catch (e) {
                                            return !1
                                        }
                                    }(), function() {
                                        var e, i = eH(s);
                                        return e = t ? Reflect.construct(i, arguments, eH(this).constructor) : i.apply(this, arguments),
                                            function(e, t) {
                                                if (t && ("object" === eB(t) || "function" == typeof t)) return t;
                                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                                return ej(e)
                                            }(this, e)
                                    });

                                    function s(e, t, i) {
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, s), (o = a.call(this)).DOM_CONTENT_LOADED_EVENT_END = g(), o.NAVIGATION_START = y(), o.mux = e, o.id = t, null != (r = i) && r.beaconDomain && o.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), (i = Object.assign({
                                            debug: !1,
                                            minimumRebufferDuration: 250,
                                            sustainedRebufferThreshold: 1e3,
                                            playbackHeartbeatTime: 25,
                                            beaconDomain: "litix.io",
                                            sampleRate: 1,
                                            disableCookies: !1,
                                            respectDoNotTrack: !1,
                                            disableRebufferTracking: !1,
                                            disablePlayheadRebufferTracking: !1,
                                            errorTranslator: function(e) {
                                                return e
                                            }
                                        }, i)).data = i.data || {}, i.data.property_key && (i.data.env_key = i.data.property_key, delete i.data.property_key), c.setLevel(i.debug ? "debug" : "warn"), o.getPlayheadTime = i.getPlayheadTime, o.getStateData = i.getStateData || function() {
                                            return {}
                                        }, o.getAdData = i.getAdData || function() {}, o.minimumRebufferDuration = i.minimumRebufferDuration, o.sustainedRebufferThreshold = i.sustainedRebufferThreshold, o.playbackHeartbeatTime = i.playbackHeartbeatTime, o.disableRebufferTracking = i.disableRebufferTracking, o.disableRebufferTracking && o.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o.disablePlayheadRebufferTracking = i.disablePlayheadRebufferTracking, o.errorTranslator = i.errorTranslator, o.playbackEventDispatcher = new eU(e, i.data.env_key, i), o.data = {
                                            player_instance_id: n(),
                                            mux_sample_rate: i.sampleRate,
                                            beacon_domain: i.beaconCollectionDomain || i.beaconDomain
                                        }, o.data.view_sequence_number = 1, o.data.player_sequence_number = 1, o.oldEmit = o.emit, o.emit = function(e, t) {
                                            t = Object.assign({
                                                viewer_time: this.mux.utils.now()
                                            }, t), this.oldEmit(e, t)
                                        };
                                        var r, o, l = (function() {
                                            void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"))
                                        }).bind(ej(o));
                                        o.on("viewinit", function(e, t) {
                                            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, t), this._initializeViewData(), this.one("play", l), this.one("adbreakstart", l)
                                        });
                                        var _ = (function(e) {
                                            this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e)
                                        }).bind(ej(o));
                                        if (o.on("videochange", function(e, t) {
                                                _(t)
                                            }), o.on("programchange", function(e, t) {
                                                this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), _(Object.assign(t, {
                                                    view_program_changed: !0
                                                })), l(), this.emit("play"), this.emit("playing")
                                            }), o.on("fragmentchange", function(e, t) {
                                                this.currentFragmentPDT = t.currentFragmentPDT, this.currentFragmentStart = t.currentFragmentStart
                                            }), o.on("destroy", o.destroy), "undefined" != typeof window && "function" == typeof window.addEventListener && "function" == typeof window.removeEventListener) {
                                            var d = function() {
                                                var e = void 0 !== o.data.view_start;
                                                o.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState, e && o.mux.WINDOW_HIDDEN && (o.data.player_is_paused || o.emit("hb"))
                                            };
                                            window.addEventListener("visibilitychange", d, !1);
                                            var u = function(e) {
                                                e.persisted || o.destroy()
                                            };
                                            window.addEventListener("pagehide", u, !1), o.on("destroy", function() {
                                                window.removeEventListener("visibilitychange", d), window.removeEventListener("pagehide", u)
                                            })
                                        }
                                        return o.on("playerready", function(e, t) {
                                            Object.assign(this.data, t)
                                        }), eJ.forEach(function(e) {
                                            o.on(e, function(t, i) {
                                                0 !== e.indexOf("ad") && this._updateStateData(), Object.assign(this.data, i), this._sanitizeData()
                                            }), o.on("after" + e, function() {
                                                ("error" !== e || this.errorTracker.viewErrored) && this.send(e)
                                            })
                                        }), o.on("viewend", function(e, t) {
                                            Object.assign(o.data, t)
                                        }), o.one("playerready", function(e) {
                                            var t = this.mux.utils.now();
                                            this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
                                        }), o.longResumeTracker = new ex(ej(o)), o.errorTracker = new V(ej(o)), new el(ej(o)), o.seekingTracker = new ee(ej(o)), o.playheadTime = new K(ej(o)), o.playbackHeartbeat = new Y(ej(o)), new Z(ej(o)), o.watchTimeTracker = new j(ej(o)), new J(ej(o)), o.adTracker = new es(ej(o)), new $(ej(o)), new Q(ej(o)), new X(ej(o)), new eo(ej(o)), new eF(ej(o)), i.hlsjs && o.addHLSJS(i), i.dashjs && o.addDashJS(i), o.emit("viewinit", i.data), o
                                    }
                                    return i = [{
                                        key: "destroy",
                                        value: function() {
                                            this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout))
                                        }
                                    }, {
                                        key: "send",
                                        value: function(e) {
                                            if (this.data.view_id) {
                                                var t = Object.assign({}, this.data);
                                                if (void 0 === t.video_source_is_live && (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1)), t.video_source_is_live || ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"].forEach(function(e) {
                                                        t[e] = void 0
                                                    }), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
                                                    var i, r = (i = E(t.video_source_url), function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(i) || function(e, t) {
                                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (null != i) {
                                                                var r, a, n = [],
                                                                    s = !0,
                                                                    o = !1;
                                                                try {
                                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                                } catch (e) {
                                                                    o = !0, a = e
                                                                } finally {
                                                                    try {
                                                                        s || null == i.return || i.return()
                                                                    } finally {
                                                                        if (o) throw a
                                                                    }
                                                                }
                                                                return n
                                                            }
                                                        }(i, 2) || function(e, t) {
                                                            if (e) {
                                                                if ("string" == typeof e) return eY(e, 2);
                                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? eY(e, t) : void 0
                                                            }
                                                        }(i, 2) || function() {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }()),
                                                        a = r[0];
                                                    t.video_source_domain = r[1], t.video_source_hostname = a
                                                }
                                                delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat(), "viewend" === e && delete this.data.view_id
                                            }
                                        }
                                    }, {
                                        key: "_updateStateData",
                                        value: function() {
                                            Object.assign(this.data, this.getStateData()), this.playheadTime._updatePlayheadTime(), this._sanitizeData()
                                        }
                                    }, {
                                        key: "_sanitizeData",
                                        value: function() {
                                            var e = this;
                                            ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(t) {
                                                var i = parseInt(e.data[t], 10);
                                                e.data[t] = isNaN(i) ? void 0 : i
                                            }), ["player_source_url", "video_source_url"].forEach(function(t) {
                                                if (e.data[t]) {
                                                    var i = e.data[t].toLowerCase();
                                                    0 !== i.indexOf("data:") && 0 !== i.indexOf("blob:") || (e.data[t] = "MSE style URL")
                                                }
                                            })
                                        }
                                    }, {
                                        key: "_resetVideoData",
                                        value: function(e, t) {
                                            var i = this;
                                            Object.keys(this.data).forEach(function(e) {
                                                0 === e.indexOf("video_") && delete i.data[e]
                                            })
                                        }
                                    }, {
                                        key: "_resetViewData",
                                        value: function() {
                                            var e = this;
                                            Object.keys(this.data).forEach(function(t) {
                                                0 === t.indexOf("view_") && delete e.data[t]
                                            }), this.data.view_sequence_number = 1
                                        }
                                    }, {
                                        key: "_resetErrorData",
                                        value: function(e, t) {
                                            delete this.data.player_error_code, delete this.data.player_error_message
                                        }
                                    }, {
                                        key: "_initializeViewData",
                                        value: function() {
                                            var e = this,
                                                t = this.data.view_id = n(),
                                                i = function() {
                                                    t === e.data.view_id && v(e.data, "player_view_count", 1)
                                                };
                                            this.data.player_is_paused ? this.one("play", i) : i()
                                        }
                                    }, {
                                        key: "_restartHeartBeat",
                                        value: function() {
                                            var e = this;
                                            window.clearTimeout(this._heartBeatTimeout), this.errorTracker.viewErrored || (this._heartBeatTimeout = window.setTimeout(function() {
                                                e.data.player_is_paused || e.emit("hb")
                                            }, 1e4))
                                        }
                                    }, {
                                        key: "addHLSJS",
                                        value: function(e) {
                                            e.hlsjs ? this.hlsjs ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, function(e, t, i) {
                                                var r = arguments.length > 4 ? arguments[4] : void 0,
                                                    a = e.log,
                                                    n = e.utils.secondsToMs,
                                                    s = function(e) {
                                                        var t, i = parseInt(r.version);
                                                        return 1 === i && null !== e.programDateTime && (t = e.programDateTime), 0 === i && null !== e.pdt && (t = e.pdt), t
                                                    };
                                                if (f()) {
                                                    var o = function(i, r) {
                                                            return e.emit(t, i, r)
                                                        },
                                                        l = function(e, t) {
                                                            var i = t.levels,
                                                                r = t.audioTracks,
                                                                a = t.url,
                                                                n = t.stats,
                                                                s = t.networkDetails,
                                                                l = t.sessionData,
                                                                _ = {},
                                                                d = {};
                                                            i.forEach(function(e, t) {
                                                                _[t] = {
                                                                    width: e.width,
                                                                    height: e.height,
                                                                    bitrate: e.bitrate,
                                                                    attrs: e.attrs
                                                                }
                                                            }), r.forEach(function(e, t) {
                                                                d[t] = {
                                                                    name: e.name,
                                                                    language: e.lang,
                                                                    bitrate: e.bitrate
                                                                }
                                                            });
                                                            var u = L(n),
                                                                c = u.bytesLoaded,
                                                                h = u.requestStart,
                                                                p = u.responseStart,
                                                                E = u.responseEnd;
                                                            o("requestcompleted", A(A({}, R(l)), {}, {
                                                                request_event_type: e,
                                                                request_bytes_loaded: c,
                                                                request_start: h,
                                                                request_response_start: p,
                                                                request_response_end: E,
                                                                request_type: "manifest",
                                                                request_hostname: m(a),
                                                                request_response_headers: D(s),
                                                                request_rendition_lists: {
                                                                    media: _,
                                                                    audio: d,
                                                                    video: {}
                                                                }
                                                            }))
                                                        };
                                                    i.on(r.Events.MANIFEST_LOADED, l);
                                                    var _ = function(e, t) {
                                                        var i = t.details,
                                                            r = t.level,
                                                            a = t.networkDetails,
                                                            l = L(t.stats),
                                                            _ = l.bytesLoaded,
                                                            d = l.requestStart,
                                                            u = l.responseStart,
                                                            c = l.responseEnd,
                                                            h = i.fragments[i.fragments.length - 1],
                                                            p = s(h) + n(h.duration);
                                                        o("requestcompleted", {
                                                            request_event_type: e,
                                                            request_bytes_loaded: _,
                                                            request_start: d,
                                                            request_response_start: u,
                                                            request_response_end: c,
                                                            request_current_level: r,
                                                            request_type: "manifest",
                                                            request_hostname: m(i.url),
                                                            request_response_headers: D(a),
                                                            video_holdback: i.holdBack && n(i.holdBack),
                                                            video_part_holdback: i.partHoldBack && n(i.partHoldBack),
                                                            video_part_target_duration: i.partTarget && n(i.partTarget),
                                                            video_target_duration: i.targetduration && n(i.targetduration),
                                                            video_source_is_live: i.live,
                                                            player_manifest_newest_program_time: isNaN(p) ? void 0 : p
                                                        })
                                                    };
                                                    i.on(r.Events.LEVEL_LOADED, _);
                                                    var d = function(e, t) {
                                                        var i = t.details,
                                                            r = t.networkDetails,
                                                            a = L(t.stats);
                                                        o("requestcompleted", {
                                                            request_event_type: e,
                                                            request_bytes_loaded: a.bytesLoaded,
                                                            request_start: a.requestStart,
                                                            request_response_start: a.responseStart,
                                                            request_response_end: a.responseEnd,
                                                            request_type: "manifest",
                                                            request_hostname: m(i.url),
                                                            request_response_headers: D(r)
                                                        })
                                                    };
                                                    i.on(r.Events.AUDIO_TRACK_LOADED, d);
                                                    var u = function(e, t) {
                                                        var r = t.stats,
                                                            a = t.networkDetails,
                                                            n = t.frag,
                                                            s = L(r = r || n.stats),
                                                            l = s.bytesLoaded,
                                                            _ = s.requestStart,
                                                            d = s.responseStart,
                                                            u = s.responseEnd,
                                                            c = a ? D(a) : void 0,
                                                            h = {
                                                                request_event_type: e,
                                                                request_bytes_loaded: l,
                                                                request_start: _,
                                                                request_response_start: d,
                                                                request_response_end: u,
                                                                request_hostname: a ? m(a.responseURL) : void 0,
                                                                request_id: c ? b(c) : void 0,
                                                                request_response_headers: c,
                                                                request_media_duration: n.duration,
                                                                request_url: null == a ? void 0 : a.responseURL
                                                            };
                                                        "main" === n.type ? (h.request_type = "media", h.request_current_level = n.level, h.request_video_width = (i.levels[n.level] || {}).width, h.request_video_height = (i.levels[n.level] || {}).height, h.request_labeled_bitrate = (i.levels[n.level] || {}).bitrate) : h.request_type = n.type, o("requestcompleted", h)
                                                    };
                                                    i.on(r.Events.FRAG_LOADED, u);
                                                    var c = function(e, t) {
                                                        var i = t.frag,
                                                            r = i.start;
                                                        o("fragmentchange", {
                                                            currentFragmentPDT: s(i),
                                                            currentFragmentStart: n(r)
                                                        })
                                                    };
                                                    i.on(r.Events.FRAG_CHANGED, c);
                                                    var h = function(e, t) {
                                                        var i, a = t.type,
                                                            n = t.details,
                                                            s = t.response,
                                                            l = t.fatal,
                                                            _ = t.frag,
                                                            d = t.networkDetails,
                                                            u = (null == _ ? void 0 : _.url) || t.url || "",
                                                            c = d ? D(d) : void 0;
                                                        n !== r.ErrorDetails.MANIFEST_LOAD_ERROR && n !== r.ErrorDetails.MANIFEST_LOAD_TIMEOUT && n !== r.ErrorDetails.FRAG_LOAD_ERROR && n !== r.ErrorDetails.FRAG_LOAD_TIMEOUT && n !== r.ErrorDetails.LEVEL_LOAD_ERROR && n !== r.ErrorDetails.LEVEL_LOAD_TIMEOUT && n !== r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && n !== r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT && n !== r.ErrorDetails.SUBTITLE_LOAD_ERROR && n !== r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT && n !== r.ErrorDetails.KEY_LOAD_ERROR && n !== r.ErrorDetails.KEY_LOAD_TIMEOUT || o("requestfailed", {
                                                            request_error: n,
                                                            request_url: u,
                                                            request_hostname: m(u),
                                                            request_id: c ? b(c) : void 0,
                                                            request_type: n === r.ErrorDetails.FRAG_LOAD_ERROR || n === r.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : n === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || n === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : n === r.ErrorDetails.SUBTITLE_LOAD_ERROR || n === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : n === r.ErrorDetails.KEY_LOAD_ERROR || n === r.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest",
                                                            request_error_code: null == s ? void 0 : s.code,
                                                            request_error_text: null == s ? void 0 : s.text
                                                        }), l && o("error", {
                                                            player_error_code: a,
                                                            player_error_message: n,
                                                            player_error_context: "".concat(u ? "url: ".concat(u, "\n") : "") + "".concat(s && (s.code || s.text) ? "response: ".concat(s.code, ", ").concat(s.text, "\n") : "") + "".concat(t.reason ? "failure reason: ".concat(t.reason, "\n") : "") + "".concat(t.level ? "level: ".concat(t.level, "\n") : "") + "".concat(t.parent ? "parent stream controller: ".concat(t.parent, "\n") : "") + "".concat(t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "") + "".concat(t.error ? "error: ".concat(t.error, "\n") : "") + "".concat(t.event ? "event: ".concat(t.event, "\n") : "") + "".concat(t.err ? "error message: ".concat(null == (i = t.err) ? void 0 : i.message, "\n") : "")
                                                        })
                                                    };
                                                    i.on(r.Events.ERROR, h);
                                                    var p = function(e, t) {
                                                        var i = t.frag,
                                                            r = i && i._url || "";
                                                        o("requestcanceled", {
                                                            request_event_type: e,
                                                            request_url: r,
                                                            request_type: "media",
                                                            request_hostname: m(r)
                                                        })
                                                    };
                                                    i.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, p);
                                                    var E = function(e, t) {
                                                        var r = t.level,
                                                            n = i.levels[r];
                                                        if (n && n.attrs && n.attrs.BANDWIDTH) {
                                                            var s, l = n.attrs.BANDWIDTH,
                                                                _ = parseFloat(n.attrs["FRAME-RATE"]);
                                                            isNaN(_) || (s = _), l ? o("renditionchange", {
                                                                video_source_fps: s,
                                                                video_source_bitrate: l,
                                                                video_source_width: n.width,
                                                                video_source_height: n.height,
                                                                video_source_rendition_name: n.name,
                                                                video_source_codec: null == n ? void 0 : n.videoCodec
                                                            }) : a.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")
                                                        }
                                                    };
                                                    i.on(r.Events.LEVEL_SWITCHED, E), i._stopMuxMonitor = function() {
                                                        i.off(r.Events.MANIFEST_LOADED, l), i.off(r.Events.LEVEL_LOADED, _), i.off(r.Events.AUDIO_TRACK_LOADED, d), i.off(r.Events.FRAG_LOADED, u), i.off(r.Events.FRAG_CHANGED, c), i.off(r.Events.ERROR, h), i.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, p), i.off(r.Events.LEVEL_SWITCHED, E), i.off(r.Events.DESTROYING, i._stopMuxMonitor), delete i._stopMuxMonitor
                                                    }, i.on(r.Events.DESTROYING, i._stopMuxMonitor)
                                                } else a.warn("performance timing not supported. Not tracking HLS.js.")
                                            }(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls)) : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
                                        }
                                    }, {
                                        key: "removeHLSJS",
                                        value: function() {
                                            var e;
                                            this.hlsjs && ((e = this.hlsjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.hlsjs = void 0)
                                        }
                                    }, {
                                        key: "addDashJS",
                                        value: function(e) {
                                            e.dashjs ? this.dashjs ? this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, function(e, t, i) {
                                                var r = e.log;
                                                if (i && i.on) {
                                                    var a = M(i),
                                                        n = function(i, r) {
                                                            return e.emit(t, i, r)
                                                        },
                                                        s = function(e) {
                                                            var t = e.type,
                                                                i = (e.data || {}).url;
                                                            n("requestcompleted", {
                                                                request_event_type: t,
                                                                request_start: 0,
                                                                request_response_start: 0,
                                                                request_response_end: 0,
                                                                request_bytes_loaded: -1,
                                                                request_type: "manifest",
                                                                request_hostname: m(i),
                                                                request_url: i
                                                            })
                                                        };
                                                    i.on("manifestLoaded", s);
                                                    var o = {},
                                                        l = function(e) {
                                                            if ("function" != typeof e.getRequests) return null;
                                                            var t = e.getRequests({
                                                                state: "executed"
                                                            });
                                                            return 0 === t.length ? null : t[t.length - 1]
                                                        },
                                                        _ = function(e) {
                                                            var t = e.type,
                                                                r = e.chunk,
                                                                a = e.request,
                                                                s = (r || {}).mediaInfo || {},
                                                                l = s.type,
                                                                _ = s.bitrateList,
                                                                d = {};
                                                            (_ = _ || []).forEach(function(e, t) {
                                                                d[t] = {}, d[t].width = e.width, d[t].height = e.height, d[t].bitrate = e.bandwidth, d[t].attrs = {}
                                                            }), "video" === l ? o.video = d : "audio" === l ? o.audio = d : o.media = d;
                                                            var u = k(a, i),
                                                                c = u.requestStart,
                                                                h = u.requestResponseStart,
                                                                p = u.requestResponseEnd,
                                                                m = u.requestResponseHeaders,
                                                                E = u.requestMediaDuration,
                                                                f = u.requestHostname,
                                                                g = u.requestUrl;
                                                            n("requestcompleted", {
                                                                request_event_type: t,
                                                                request_start: c,
                                                                request_response_start: h,
                                                                request_response_end: p,
                                                                request_bytes_loaded: -1,
                                                                request_type: l + "_init",
                                                                request_response_headers: m,
                                                                request_hostname: f,
                                                                request_id: u.requestId,
                                                                request_url: g,
                                                                request_media_duration: E,
                                                                request_rendition_lists: o
                                                            })
                                                        };
                                                    a >= 4 ? i.on("initFragmentLoaded", _) : i.on("initFragmentLoaded", function(e) {
                                                        var t = e.type,
                                                            i = e.fragmentModel,
                                                            r = e.chunk;
                                                        _({
                                                            type: t,
                                                            request: l(i),
                                                            chunk: r
                                                        })
                                                    });
                                                    var d = function(e) {
                                                        var t = e.type,
                                                            r = e.chunk,
                                                            a = e.request,
                                                            s = r || {},
                                                            o = s.mediaInfo,
                                                            l = s.start,
                                                            _ = (o || {}).type,
                                                            d = k(a, i),
                                                            u = d.requestStart,
                                                            c = d.requestResponseStart,
                                                            h = d.requestResponseEnd,
                                                            p = d.requestBytesLoaded,
                                                            m = d.requestResponseHeaders,
                                                            E = d.requestMediaDuration,
                                                            f = d.requestHostname,
                                                            g = d.requestUrl,
                                                            y = d.requestId,
                                                            v = N(_, i),
                                                            T = v.currentLevel,
                                                            S = v.renditionWidth,
                                                            P = v.renditionHeight;
                                                        n("requestcompleted", {
                                                            request_event_type: t,
                                                            request_start: u,
                                                            request_response_start: c,
                                                            request_response_end: h,
                                                            request_bytes_loaded: p,
                                                            request_type: _,
                                                            request_response_headers: m,
                                                            request_hostname: f,
                                                            request_id: y,
                                                            request_url: g,
                                                            request_media_start_time: l,
                                                            request_media_duration: E,
                                                            request_current_level: T,
                                                            request_labeled_bitrate: v.renditionBitrate,
                                                            request_video_width: S,
                                                            request_video_height: P
                                                        })
                                                    };
                                                    a >= 4 ? i.on("mediaFragmentLoaded", d) : i.on("mediaFragmentLoaded", function(e) {
                                                        var t = e.type,
                                                            i = e.fragmentModel,
                                                            r = e.chunk;
                                                        d({
                                                            type: t,
                                                            request: l(i),
                                                            chunk: r
                                                        })
                                                    });
                                                    var u = {
                                                            video: void 0,
                                                            audio: void 0,
                                                            totalBitrate: void 0
                                                        },
                                                        c = function() {
                                                            if (u.video && "number" == typeof u.video.bitrate) {
                                                                if (u.video.width && u.video.height) {
                                                                    var e = u.video.bitrate;
                                                                    return u.audio && "number" == typeof u.audio.bitrate && (e += u.audio.bitrate), e !== u.totalBitrate ? (u.totalBitrate = e, {
                                                                        video_source_bitrate: e,
                                                                        video_source_height: u.video.height,
                                                                        video_source_width: u.video.width,
                                                                        video_source_codec: w(u.video.codec)
                                                                    }) : void 0
                                                                }
                                                                r.warn("have bitrate info for video but missing width/height")
                                                            }
                                                        },
                                                        h = function(e, t, a) {
                                                            if ("number" == typeof e.newQuality) {
                                                                var s = e.mediaType;
                                                                if ("audio" === s || "video" === s) {
                                                                    var o = i.getBitrateInfoListFor(s).find(function(t) {
                                                                        return t.qualityIndex === e.newQuality
                                                                    });
                                                                    if (o && "number" == typeof o.bitrate) {
                                                                        u[s] = O(O({}, o), {}, {
                                                                            codec: i.getCurrentTrackFor(s).codec
                                                                        });
                                                                        var l = c();
                                                                        l && n("renditionchange", l)
                                                                    } else r.warn("missing bitrate info for ".concat(s))
                                                                }
                                                            } else r.warn("missing evt.newQuality in qualityChangeRendered event", e)
                                                        };
                                                    i.on("qualityChangeRendered", h);
                                                    var p = function(e) {
                                                        var t = e.request,
                                                            i = e.mediaType;
                                                        n("requestcanceled", {
                                                            request_event_type: (t = t || {}).type + "_" + t.action,
                                                            request_url: t.url,
                                                            request_type: i,
                                                            request_hostname: m(t.url)
                                                        })
                                                    };
                                                    i.on("fragmentLoadingAbandoned", p);
                                                    var E = function(e) {
                                                        var t, i, r = e.error,
                                                            a = (null == r || null == (t = r.data) ? void 0 : t.request) || {},
                                                            s = (null == r || null == (i = r.data) ? void 0 : i.response) || {};
                                                        27 === (null == r ? void 0 : r.code) && n("requestfailed", {
                                                            request_error: a.type + "_" + a.action,
                                                            request_url: a.url,
                                                            request_hostname: m(a.url),
                                                            request_type: a.mediaType,
                                                            request_error_code: s.status,
                                                            request_error_text: s.statusText
                                                        });
                                                        var o = "".concat(null != a && a.url ? "url: ".concat(a.url, "\n") : "") + "".concat(null != s && s.status || null != s && s.statusText ? "response: ".concat(null == s ? void 0 : s.status, ", ").concat(null == s ? void 0 : s.statusText, "\n") : "");
                                                        n("error", {
                                                            player_error_code: null == r ? void 0 : r.code,
                                                            player_error_message: null == r ? void 0 : r.message,
                                                            player_error_context: o
                                                        })
                                                    };
                                                    i.on("error", E), i._stopMuxMonitor = function() {
                                                        i.off("manifestLoaded", s), i.off("initFragmentLoaded", _), i.off("mediaFragmentLoaded", d), i.off("qualityChangeRendered", h), i.off("error", E), i.off("fragmentLoadingAbandoned", p), delete i._stopMuxMonitor
                                                    }
                                                } else r.warn("Invalid dash.js player reference. Monitoring blocked.")
                                            }(this.mux, this.id, e.dashjs)) : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
                                        }
                                    }, {
                                        key: "removeDashJS",
                                        value: function() {
                                            var e;
                                            this.dashjs && ((e = this.dashjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.dashjs = void 0)
                                        }
                                    }], eV(s.prototype, i), r && eV(s, r), Object.defineProperty(s, "prototype", {
                                        writable: !1
                                    }), s
                                }(x),
                                eK = i(153),
                                eQ = i.n(eK);

                            function eW(e) {
                                return (eW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function e$(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var r, a, n = [],
                                            s = !0,
                                            o = !1;
                                        try {
                                            for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                s || null == i.return || i.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                        return n
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return ez(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ez(e, t) : void 0
                                    }
                                }(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function ez(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }
                            var eX, eZ, e0, e1, e2, e4, e3, e5, e6, e8 = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
                                e9 = {
                                    1: "MEDIA_ERR_ABORTED",
                                    2: "MEDIA_ERR_NETWORK",
                                    3: "MEDIA_ERR_DECODE",
                                    4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                                };
                            a() && a().WeakMap && (e6 = new WeakMap);
                            var e7 = function(e) {
                                return this.buffer = "", this.manifest = {
                                    segments: [],
                                    serverControl: {},
                                    sessionData: {}
                                }, this.currentUri = {}, this.process(e), this.manifest
                            };
                            e7.prototype.process = function(e) {
                                var t;
                                for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n")) this.processLine(this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
                            }, e7.prototype.processLine = function(e) {
                                var t = e.indexOf(":"),
                                    i = ts(e, t),
                                    r = i[0],
                                    a = 2 === i.length ? ti(i[1]) : void 0;
                                if ("#" !== r[0]) this.currentUri.uri = r, this.manifest.segments.push(this.currentUri), !this.manifest.targetDuration || "duration" in this.currentUri || (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
                                else switch (r) {
                                    case "#EXT-X-TARGETDURATION":
                                        if (!isFinite(a) || a < 0) return;
                                        this.manifest.targetDuration = a, this.setHoldBack();
                                        break;
                                    case "#EXT-X-PART-INF":
                                        te(this.manifest, i), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                                        break;
                                    case "#EXT-X-SERVER-CONTROL":
                                        te(this.manifest, i), this.setHoldBack();
                                        break;
                                    case "#EXTINF":
                                        0 === a ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                                        break;
                                    case "#EXT-X-PROGRAM-DATE-TIME":
                                        var n = new Date(a);
                                        this.manifest.dateTimeString || (this.manifest.dateTimeString = a, this.manifest.dateTimeObject = n), this.currentUri.dateTimeString = a, this.currentUri.dateTimeObject = n;
                                        break;
                                    case "#EXT-X-VERSION":
                                        te(this.manifest, i);
                                        break;
                                    case "#EXT-X-SESSION-DATA":
                                        var s = R(to(i[1]));
                                        Object.assign(this.manifest.sessionData, s)
                                }
                            }, e7.prototype.setHoldBack = function() {
                                var e = this.manifest,
                                    t = e.serverControl,
                                    i = e.targetDuration,
                                    r = e.partTargetDuration;
                                if (t) {
                                    var a = "holdBack",
                                        n = "partHoldBack",
                                        s = i && 3 * i,
                                        o = r && 2 * r;
                                    i && !t.hasOwnProperty(a) && (t[a] = s), s && t[a] < s && (t[a] = s), r && !t.hasOwnProperty(n) && (t[n] = 3 * r), r && t[n] < o && (t[n] = o)
                                }
                            };
                            var te = function(e, t) {
                                    var i, r = tt(t[0].replace("#EXT-X-", ""));
                                    tn(t[1]) ? (i = {}, i = Object.assign(ta(t[1]), i)) : i = ti(t[1]), e[r] = i
                                },
                                tt = function(e) {
                                    return e.toLowerCase().replace(/-(\w)/g, function(e) {
                                        return e[1].toUpperCase()
                                    })
                                },
                                ti = function(e) {
                                    if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
                                    var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
                                    return isNaN(t) ? e : t
                                },
                                tr = function(e) {
                                    var t = {},
                                        i = e.split("=");
                                    return i.length > 1 && (t[tt(i[0])] = ti(i[1])), t
                                },
                                ta = function(e) {
                                    for (var t = e.split(","), i = {}, r = 0; t.length > r; r++) i = Object.assign(tr(t[r]), i);
                                    return i
                                },
                                tn = function(e) {
                                    return e.indexOf("=") > -1
                                },
                                ts = function(e, t) {
                                    return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)]
                                },
                                to = function(e) {
                                    var t = {};
                                    if (e) {
                                        var i = e.search(",");
                                        return [e.slice(0, i), e.slice(i + 1)].forEach(function(e, i) {
                                            for (var r = e.replace(/['"]+/g, "").split("="), a = 0; a < r.length; a++) "DATA-ID" === r[a] && (t["DATA-ID"] = r[1 - a]), "VALUE" === r[a] && (t.VALUE = r[1 - a])
                                        }), {
                                            data: t
                                        }
                                    }
                                },
                                tl = {
                                    safeCall: function(e, t, i, r) {
                                        var a = r;
                                        if (e && "function" == typeof e[t]) try {
                                            a = e[t].apply(e, i)
                                        } catch (e) {
                                            c.info("safeCall error", e)
                                        }
                                        return a
                                    },
                                    safeIncrement: v,
                                    getComputedStyle: function(e, t) {
                                        var i;
                                        if (e && t && a() && "function" == typeof a().getComputedStyle) return e6 && e6.has(e) && (i = e6.get(e)), i || (i = a().getComputedStyle(e, null), e6 && e6.set(e, i)), i.getPropertyValue(t)
                                    },
                                    secondsToMs: function(e) {
                                        return Math.floor(1e3 * e)
                                    },
                                    assign: Object.assign,
                                    headersStringToObject: P,
                                    cdnHeadersToRequestId: b,
                                    extractHostnameAndDomain: E,
                                    extractHostname: m,
                                    manifestParser: e7,
                                    generateShortID: s,
                                    generateUUID: n,
                                    now: p
                                };

                            function t_(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }
                            var td = {},
                                tu = function e(t) {
                                    var i = arguments;
                                    "string" == typeof t ? e.hasOwnProperty(t) ? a().setTimeout(function() {
                                        i = Array.prototype.splice.call(i, 1), e[t].apply(null, i)
                                    }, 0) : c.warn("`" + t + "` is an unknown task") : "function" == typeof t ? a().setTimeout(function() {
                                        t(e)
                                    }, 0) : c.warn("`" + t + "` is invalid.")
                                },
                                tc = {
                                    loaded: p(),
                                    NAME: "mux-embed",
                                    VERSION: "4.30.0",
                                    API_VERSION: "2.1",
                                    PLAYER_TRACKED: !1,
                                    monitor: function(e, t) {
                                        return function(e, t, i) {
                                            var r = e$(l(t), 3),
                                                a = r[0],
                                                n = r[1],
                                                s = r[2],
                                                o = e.log,
                                                _ = e.utils.getComputedStyle,
                                                d = e.utils.secondsToMs;
                                            if (!a) return o.error("No element was found with the `" + n + "` query selector.");
                                            if ("video" !== s && "audio" !== s) return o.error("The element of `" + n + "` was not a media element.");
                                            a.mux && (a.mux.destroy(), delete a.mux, o.warn("Already monitoring this video element, replacing existing event listeners")), (i = Object.assign({
                                                automaticErrorTracking: !0
                                            }, i)).data = Object.assign({
                                                player_software: "HTML5 Video Element",
                                                player_mux_plugin_name: "VideoElementMonitor",
                                                player_mux_plugin_version: e.VERSION
                                            }, i.data), i.getPlayheadTime = function() {
                                                return d(a.currentTime)
                                            }, i.getStateData = function() {
                                                var e, t, r = this.hlsjs && this.hlsjs.url,
                                                    n = this.dashjs && eW("function" === this.dashjs.getSource) && this.dashjs.getSource(),
                                                    s = {
                                                        player_is_paused: a.paused,
                                                        player_playhead_time: d(a.currentTime),
                                                        player_width: parseInt(_(a, "width")),
                                                        player_height: parseInt(_(a, "height")),
                                                        player_autoplay_on: a.autoplay,
                                                        player_preload_on: a.preload,
                                                        player_language_code: a.lang,
                                                        player_is_fullscreen: eQ() && !!(eQ().fullscreenElement || eQ().webkitFullscreenElement || eQ().mozFullScreenElement || eQ().msFullscreenElement),
                                                        video_poster_url: a.poster,
                                                        video_source_url: r || n || a.currentSrc,
                                                        video_source_duration: d(a.duration),
                                                        video_source_height: a.videoHeight,
                                                        video_source_width: a.videoWidth,
                                                        view_dropped_frame_count: null == (e = a) || null == (t = e.getVideoPlaybackQuality) ? void 0 : t.call(e).droppedVideoFrames
                                                    },
                                                    o = i.getPlayheadTime();
                                                if (a.getStartDate && o > 0) {
                                                    var l = a.getStartDate();
                                                    if (l && "function" == typeof l.getTime && l.getTime()) {
                                                        var u = l.getTime();
                                                        s.player_program_time = u + o, a.seekable.length > 0 && (s.player_live_edge_program_time = u + a.seekable.end(a.seekable.length - 1))
                                                    }
                                                }
                                                return s
                                            }, a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(t, i) {
                                                e.emit(n, t, i)
                                            };
                                            var u = function() {
                                                o.error("The monitor for this video element has already been destroyed.")
                                            };
                                            a.mux.destroy = function() {
                                                Object.keys(a.mux.listeners).forEach(function(e) {
                                                    a.removeEventListener(e, a.mux.listeners[e], !1)
                                                }), delete a.mux.listeners, a.mux.destroy = u, a.mux.swapElement = u, a.mux.emit = u, a.mux.addHLSJS = u, a.mux.addDashJS = u, a.mux.removeHLSJS = u, a.mux.removeDashJS = u, a.mux.deleted = !0, e.emit(n, "destroy")
                                            }, a.mux.swapElement = function(t) {
                                                var i = e$(l(t), 3),
                                                    r = i[0],
                                                    n = i[1],
                                                    s = i[2];
                                                return r ? "video" !== s && "audio" !== s ? e.log.error("The element of `" + n + "` was not a media element.") : (r.muxId = a.muxId, delete a.muxId, r.mux = r.mux || {}, r.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(r.mux.listeners).forEach(function(e) {
                                                    a.removeEventListener(e, r.mux.listeners[e], !1), r.addEventListener(e, r.mux.listeners[e], !1)
                                                }), r.mux.swapElement = a.mux.swapElement, r.mux.destroy = a.mux.destroy, delete a.mux, void(a = r)) : e.log.error("No element was found with the `" + n + "` query selector.")
                                            }, a.mux.addHLSJS = function(t) {
                                                e.addHLSJS(n, t)
                                            }, a.mux.addDashJS = function(t) {
                                                e.addDashJS(n, t)
                                            }, a.mux.removeHLSJS = function() {
                                                e.removeHLSJS(n)
                                            }, a.mux.removeDashJS = function() {
                                                e.removeDashJS(n)
                                            }, e.init(n, i), e.emit(n, "playerready"), a.paused || (e.emit(n, "play"), a.readyState > 2 && e.emit(n, "playing")), a.mux.listeners = {}, e8.forEach(function(t) {
                                                ("error" !== t || i.automaticErrorTracking) && (a.mux.listeners[t] = function() {
                                                    var i = {};
                                                    if ("error" === t) {
                                                        if (!a.error || 1 === a.error.code) return;
                                                        i.player_error_code = a.error.code, i.player_error_message = e9[a.error.code] || a.error.message
                                                    }
                                                    e.emit(n, t, i)
                                                }, a.addEventListener(t, a.mux.listeners[t], !1))
                                            })
                                        }(tu, e, t)
                                    },
                                    destroyMonitor: function(e) {
                                        var t, i = (t = l(e), function(e) {
                                            if (Array.isArray(e)) return e
                                        }(t) || function(e, t) {
                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != i) {
                                                var r, a, n = [],
                                                    s = !0,
                                                    o = !1;
                                                try {
                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                } catch (e) {
                                                    o = !0, a = e
                                                } finally {
                                                    try {
                                                        s || null == i.return || i.return()
                                                    } finally {
                                                        if (o) throw a
                                                    }
                                                }
                                                return n
                                            }
                                        }(t, 1) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return t_(e, 1);
                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t_(e, t) : void 0
                                            }
                                        }(t, 1) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }())[0];
                                        i && i.mux && "function" == typeof i.mux.destroy ? i.mux.destroy() : c.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
                                    },
                                    addHLSJS: function(e, t) {
                                        var i = o(e);
                                        td[i] ? td[i].addHLSJS(t) : c.error("A monitor for `" + i + "` has not been initialized.")
                                    },
                                    addDashJS: function(e, t) {
                                        var i = o(e);
                                        td[i] ? td[i].addDashJS(t) : c.error("A monitor for `" + i + "` has not been initialized.")
                                    },
                                    removeHLSJS: function(e) {
                                        var t = o(e);
                                        td[t] ? td[t].removeHLSJS() : c.error("A monitor for `" + t + "` has not been initialized.")
                                    },
                                    removeDashJS: function(e) {
                                        var t = o(e);
                                        td[t] ? td[t].removeDashJS() : c.error("A monitor for `" + t + "` has not been initialized.")
                                    },
                                    init: function(e, t) {
                                        h() && t && t.respectDoNotTrack && c.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
                                        var i = o(e);
                                        td[i] = new eq(tu, i, t)
                                    },
                                    emit: function(e, t, i) {
                                        var r = o(e);
                                        td[r] ? (td[r].emit(t, i), "destroy" === t && delete td[r]) : c.error("A monitor for `" + r + "` has not been initialized.")
                                    },
                                    checkDoNotTrack: h,
                                    log: c,
                                    utils: tl,
                                    events: {
                                        PLAYER_READY: "playerready",
                                        VIEW_INIT: "viewinit",
                                        VIDEO_CHANGE: "videochange",
                                        PLAY: "play",
                                        PAUSE: "pause",
                                        PLAYING: "playing",
                                        TIME_UPDATE: "timeupdate",
                                        SEEKING: "seeking",
                                        SEEKED: "seeked",
                                        REBUFFER_START: "rebufferstart",
                                        REBUFFER_END: "rebufferend",
                                        ERROR: "error",
                                        ENDED: "ended",
                                        RENDITION_CHANGE: "renditionchange",
                                        ORIENTATION_CHANGE: "orientationchange",
                                        AD_REQUEST: "adrequest",
                                        AD_RESPONSE: "adresponse",
                                        AD_BREAK_START: "adbreakstart",
                                        AD_PLAY: "adplay",
                                        AD_PLAYING: "adplaying",
                                        AD_PAUSE: "adpause",
                                        AD_FIRST_QUARTILE: "adfirstquartile",
                                        AD_MID_POINT: "admidpoint",
                                        AD_THIRD_QUARTILE: "adthirdquartile",
                                        AD_ENDED: "adended",
                                        AD_BREAK_END: "adbreakend",
                                        AD_ERROR: "aderror",
                                        REQUEST_COMPLETED: "requestcompleted",
                                        REQUEST_FAILED: "requestfailed",
                                        REQUEST_CANCELLED: "requestcanceled"
                                    },
                                    WINDOW_HIDDEN: !1,
                                    WINDOW_UNLOADING: !1
                                };
                            Object.assign(tu, tc), void 0 !== a() && "function" == typeof a().addEventListener && a().addEventListener("pagehide", function(e) {
                                e.persisted || (tu.WINDOW_UNLOADING = !0)
                            }, !1);
                            var th = tu
                        },
                        655: function(e, t, i) {
                            var r, a;

                            function n(e) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }! function(s) {
                                var o = !1;
                                if (void 0 === (a = "function" == typeof(r = s) ? r.call(t, i, t, e) : r) || (e.exports = a), o = !0, "object" === n(t) && (e.exports = s(), o = !0), !o) {
                                    var l = window.Cookies,
                                        _ = window.Cookies = s();
                                    _.noConflict = function() {
                                        return window.Cookies = l, _
                                    }
                                }
                            }(function() {
                                var e = function() {
                                    for (var e = 0, t = {}; e < arguments.length; e++) {
                                        var i = arguments[e];
                                        for (var r in i) t[r] = i[r]
                                    }
                                    return t
                                };
                                return function t(i) {
                                    function r(t, a, n) {
                                        var s;
                                        if ("undefined" != typeof document) {
                                            if (arguments.length > 1) {
                                                if ("number" == typeof(n = e({
                                                        path: "/"
                                                    }, r.defaults, n)).expires) {
                                                    var o = new Date;
                                                    o.setMilliseconds(o.getMilliseconds() + 864e5 * n.expires), n.expires = o
                                                }
                                                try {
                                                    s = JSON.stringify(a), /^[\{\[]/.test(s) && (a = s)
                                                } catch (e) {}
                                                return a = i.write ? i.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = t + "=" + a + (n.expires ? "; expires=" + n.expires.toUTCString() : "") + (n.path ? "; path=" + n.path : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
                                            }
                                            t || (s = {});
                                            for (var l = document.cookie ? document.cookie.split("; ") : [], _ = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                                                var u = l[d].split("="),
                                                    c = u.slice(1).join("=");
                                                '"' === c.charAt(0) && (c = c.slice(1, -1));
                                                try {
                                                    var h = u[0].replace(_, decodeURIComponent);
                                                    if (c = i.read ? i.read(c, h) : i(c, h) || c.replace(_, decodeURIComponent), this.json) try {
                                                        c = JSON.parse(c)
                                                    } catch (e) {}
                                                    if (t === h) {
                                                        s = c;
                                                        break
                                                    }
                                                    t || (s[h] = c)
                                                } catch (e) {}
                                            }
                                            return s
                                        }
                                    }
                                    return r.set = r, r.get = function(e) {
                                        return r.call(r, e)
                                    }, r.getJSON = function() {
                                        return r.apply({
                                            json: !0
                                        }, [].slice.call(arguments))
                                    }, r.defaults = {}, r.remove = function(t, i) {
                                        r(t, "", e(i, {
                                            expires: -1
                                        }))
                                    }, r.withConverter = t, r
                                }(function() {})
                            })
                        },
                        153: function(e, t, i) {
                            var r, a = void 0 !== i.g ? i.g : "undefined" != typeof window ? window : {},
                                n = i(558);
                            "undefined" != typeof document ? r = document : (r = a["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = a["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = r
                        },
                        48: function(e, t, i) {
                            e.exports = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {}
                        },
                        640: function(e, t, i) {
                            var r, a;
                            ! function(n, s) {
                                "use strict";
                                void 0 === (a = "function" == typeof(r = function() {
                                    var e = function() {},
                                        t = "undefined",
                                        i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                                        r = ["trace", "debug", "info", "warn", "error"];

                                    function a(e, t) {
                                        var i = e[t];
                                        if ("function" == typeof i.bind) return i.bind(e);
                                        try {
                                            return Function.prototype.bind.call(i, e)
                                        } catch (t) {
                                            return function() {
                                                return Function.prototype.apply.apply(i, [e, arguments])
                                            }
                                        }
                                    }

                                    function n() {
                                        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                                    }

                                    function s(t, i) {
                                        for (var a = 0; a < r.length; a++) {
                                            var n = r[a];
                                            this[n] = a < t ? e : this.methodFactory(n, t, i)
                                        }
                                        this.log = this.debug
                                    }

                                    function o(e, i, r) {
                                        return function() {
                                            typeof console !== t && (s.call(this, i, r), this[e].apply(this, arguments))
                                        }
                                    }

                                    function l(r, s, l) {
                                        var _;
                                        return "debug" === (_ = r) && (_ = "log"), typeof console !== t && ("trace" === _ && i ? n : void 0 !== console[_] ? a(console, _) : void 0 !== console.log ? a(console, "log") : e) || o.apply(this, arguments)
                                    }

                                    function _(e, i, a) {
                                        var n, o = this;
                                        i = null == i ? "WARN" : i;
                                        var _ = "loglevel";

                                        function d() {
                                            var e;
                                            if (typeof window !== t && _) {
                                                try {
                                                    e = window.localStorage[_]
                                                } catch (e) {}
                                                if (typeof e === t) try {
                                                    var i = window.document.cookie,
                                                        r = i.indexOf(encodeURIComponent(_) + "="); - 1 !== r && (e = /^([^;]+)/.exec(i.slice(r))[1])
                                                } catch (e) {}
                                                return void 0 === o.levels[e] && (e = void 0), e
                                            }
                                        }
                                        "string" == typeof e ? _ += ":" + e : "symbol" == typeof e && (_ = void 0), o.name = e, o.levels = {
                                            TRACE: 0,
                                            DEBUG: 1,
                                            INFO: 2,
                                            WARN: 3,
                                            ERROR: 4,
                                            SILENT: 5
                                        }, o.methodFactory = a || l, o.getLevel = function() {
                                            return n
                                        }, o.setLevel = function(i, a) {
                                            if ("string" == typeof i && void 0 !== o.levels[i.toUpperCase()] && (i = o.levels[i.toUpperCase()]), !("number" == typeof i && i >= 0 && i <= o.levels.SILENT)) throw "log.setLevel() called with invalid level: " + i;
                                            if (n = i, !1 !== a && function(e) {
                                                    var i = (r[e] || "silent").toUpperCase();
                                                    if (typeof window !== t && _) {
                                                        try {
                                                            return void(window.localStorage[_] = i)
                                                        } catch (e) {}
                                                        try {
                                                            window.document.cookie = encodeURIComponent(_) + "=" + i + ";"
                                                        } catch (e) {}
                                                    }
                                                }(i), s.call(o, i, e), typeof console === t && i < o.levels.SILENT) return "No console available for logging"
                                        }, o.setDefaultLevel = function(e) {
                                            i = e, d() || o.setLevel(e, !1)
                                        }, o.resetLevel = function() {
                                            o.setLevel(i, !1),
                                                function() {
                                                    if (typeof window !== t && _) {
                                                        try {
                                                            return void window.localStorage.removeItem(_)
                                                        } catch (e) {}
                                                        try {
                                                            window.document.cookie = encodeURIComponent(_) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                                        } catch (e) {}
                                                    }
                                                }()
                                        }, o.enableAll = function(e) {
                                            o.setLevel(o.levels.TRACE, e)
                                        }, o.disableAll = function(e) {
                                            o.setLevel(o.levels.SILENT, e)
                                        };
                                        var u = d();
                                        null == u && (u = i), o.setLevel(u, !1)
                                    }
                                    var d = new _,
                                        u = {};
                                    d.getLogger = function(e) {
                                        if ("symbol" != typeof e && "string" != typeof e || "" === e) throw TypeError("You must supply a name when creating a logger.");
                                        var t = u[e];
                                        return t || (t = u[e] = new _(e, d.getLevel(), d.methodFactory)), t
                                    };
                                    var c = typeof window !== t ? window.log : void 0;
                                    return d.noConflict = function() {
                                        return typeof window !== t && window.log === d && (window.log = c), d
                                    }, d.getLoggers = function() {
                                        return u
                                    }, d.default = d, d
                                }) ? r.call(t, i, t, e) : r) || (e.exports = a)
                            }()
                        },
                        375: function(e, t) {
                            "use strict";
                            var i = Object.prototype.hasOwnProperty;

                            function r(e) {
                                try {
                                    return decodeURIComponent(e.replace(/\+/g, " "))
                                } catch (e) {
                                    return null
                                }
                            }

                            function a(e) {
                                try {
                                    return encodeURIComponent(e)
                                } catch (e) {
                                    return null
                                }
                            }
                            t.stringify = function(e, t) {
                                var r, n, s = [];
                                for (n in "string" != typeof(t = t || "") && (t = "?"), e)
                                    if (i.call(e, n)) {
                                        if ((r = e[n]) || null != r && !isNaN(r) || (r = ""), n = a(n), r = a(r), null === n || null === r) continue;
                                        s.push(n + "=" + r)
                                    }
                                return s.length ? t + s.join("&") : ""
                            }, t.parse = function(e) {
                                for (var t, i = /([^=?#&]+)=?([^&]*)/g, a = {}; t = i.exec(e);) {
                                    var n = r(t[1]),
                                        s = r(t[2]);
                                    null === n || null === s || n in a || (a[n] = s)
                                }
                                return a
                            }
                        },
                        558: function() {}
                    },
                    t = {};

                function i(r) {
                    var a = t[r];
                    if (void 0 !== a) return a.exports;
                    var n = t[r] = {
                        exports: {}
                    };
                    return e[r].call(n.exports, n, n.exports, i), n.exports
                }
                return i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(t, {
                        a: t
                    }), t
                }, i.d = function(e, t) {
                    for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, i.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, i(80)
            }()
        }
    }
]);