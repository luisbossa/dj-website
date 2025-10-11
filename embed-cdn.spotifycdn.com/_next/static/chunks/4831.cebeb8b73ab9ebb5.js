try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ca537310-c361-4bc3-97d0-dca5db042dd5", e._sentryDebugIdIdentifier = "sentry-dbid-ca537310-c361-4bc3-97d0-dca5db042dd5")
    }()
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4831], {
        74831: (e, r, t) => {
            t.d(r, {
                checkPlatform: () => n
            });
            var d = t(74235);

            function n() {
                return URL && URL.createObjectURL ? d.X.create({
                    noServerCertificate: !0,
                    transport: {
                        request: (...e) => Promise.reject(TypeError("Unexpected call to mock Transport.request"))
                    }
                }).then(() => !0) : Promise.reject(TypeError("URL.createObjectURL is not supported"))
            }
        }
    }
]);