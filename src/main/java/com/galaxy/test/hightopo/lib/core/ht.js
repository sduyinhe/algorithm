!
function(z, o, V) {
    "use strict";
    var K = "ht";
    if (!z[K]) { !
        function() {
            for (var K = 0,
            o = ["ms", "moz", "webkit", "o"], O = 0; O < o.length && !z.requestAnimationFrame; ++O) z.requestAnimationFrame = z[o[O] + "RequestAnimationFrame"],
            z.cancelAnimationFrame = z[o[O] + "CancelAnimationFrame"] || z[o[O] + "CancelRequestAnimationFrame"];
            z.requestAnimationFrame || (z.requestAnimationFrame = function(f) {
                var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - K)),
                B = z.setTimeout(function() {
                    f(r + i)
                },
                i);
                return K = r + i,
                B
            }),
            z.cancelAnimationFrame || (z.cancelAnimationFrame = function(a) {
                l(a)
            })
        } ();
        var A, e, Z, n, E = z.document,
        F = null,
        Y = z[K] = {},
        P = z[K + "config"],
        C = Y.Default = P && P.Default || {},
        b = Y.Style = P && P.Style || {},
        _ = Y.Color = P && P.Color || {},
        v = Y.IsGetter = P && P.IsGetter || {},
        r = Math,
        Q = r.round,
        T = r.floor,
        w = r.ceil,
        k = r.sqrt,
        h = r.max,
        s = r.min,
        R = r.abs,
        i = r.cos,
        d = r.acos,
        g = r.sin,
        L = r.pow,
        $ = r.asin,
        y = r.PI,
        X = 2 * y,
        S = y / 2,
        I = r.tan,
        B = r.atan2,
        N = r.random,
        M = !1,
        x = !1,
        q = z.parseInt || global.parseInt,
        m = "2017-02-15",
        O = function() {
            try {
                return z.navigator.platform.indexOf("Win") > -1
            } catch(A) {}
        } (),
        c = function(O) {
            return O * O
        },
        u = z.setTimeout,
        l = z.clearTimeout,
        D = z.location,
        p = z.navigator ? z.navigator.userAgent.toLowerCase() : "",
        W = function(P) {
            return P.test(p)
        },
        H = W(/msie/) || W(/trident/),
        J = W(/msie 10/),
        U = W(/edge/),
        f = W(/firefox/),
        j = W(/mac/),
        a = C.isTouchable === V ? O ? !1 : E ? "ontouchend" in E: !1 : C.isTouchable,
        G = "default",
        t = "single",
        bs = "multiple",
        ps = "front",
        $m = "back",
        Tb = "left",
        um = "right",
        aq = "top",
        Gg = "bottom",
        Nq = "center",
        vh = "eye",
        Jh = "middle",
        uk = "east",
        Mr = "west",
        $e = "north",
        yh = "none",
        mb = "px",
        sm = "absolute",
        Af = "border",
        tr = "triangle",
        ih = "rect",
        zf = "circle",
        fo = "cylinder",
        Fb = "shape",
        uq = "items",
        bo = "normal",
        ej = "remove",
        Rg = "clear",
        $o = "width",
        $f = "height",
        ss = "ingroup",
        Pb = "check",
        be = "uncheck",
        gi = "radio",
        nb = "radioOn",
        Ip = "radioOff",
        ue = "points",
        Tp = "values",
        bm = "series",
        Gj = "body",
        br = "label",
        Sb = "label2",
        Wr = "note",
        cp = "note2",
        Ph = "icons",
        xh = "labelFont",
        kj = "labelColor",
        pi = "labelSelectColor",
        to = "note.expanded",
        cq = "note2.expanded",
        ap = "edge.expanded",
        ah = "edge.points",
        Ae = "edge.type",
        Mj = "rotation",
        ad = "getRotation",
        Bl = "setRotation",
        gl = "hidden",
        ql = "visible",
        wg = "tuv",
        kp = "no",
        Yj = "select",
        Xg = "currentSubGraph",
        Ng = "selectBackground",
        ur = "autoMakeVisible",
        Hh = "autoHideScrollBar",
        ik = "scrollBarColor",
        Oi = "scrollBarSize",
        Jj = "indent",
        tl = "rowHeight",
        hf = "columnLineColor",
        yd = "rowLineColor",
        Bi = "columnLineVisible",
        bq = "rowLineVisible",
        pb = "visibleFunc",
        jd = "expandIcon",
        Ok = "collapseIcon",
        Ec = "checkMode",
        ho = "sortFunc",
        rk = "editable",
        Be = "batchEditable",
        pg = "tristate",
        Vm = "asc",
        Rj = "desc",
        Rq = "position",
        qb = "elevation",
        Yc = "children",
        Se = "translateX",
        _d = "translateY",
        Kj = "dataModel",
        Ce = "shape3d",
        Ie = "shape3d.resolution",
        _e = "shape3d.visible",
        id = "shape3d.from.visible",
        Cd = "shape3d.to.visible",
        Sm = "shape3d.top.visible",
        Ap = "shape3d.bottom.visible",
        $h = "repeat.uv.length",
        Up = "serializeValue",
        Pj = "deserializeValue",
        Sh = "centerUniform",
        fh = "rgba(255,255,255,0)",
        rr = "style",
        Zj = "attr",
        oj = "field",
        ip = "string",
        hh = "boolean",
        Qk = "color",
        Ek = "int",
        xq = "number",
        Sf = "ew-resize",
        Xo = "ns-resize",
        bg = "pointer",
        or = "auto",
        Tc = "mousedown",
        zp = "mousemove",
        Fr = "mouseup",
        ji = "mouseout",
        Nn = "touchstart",
        Ob = "touchmove",
        Zd = "touchend",
        Ur = "keydown",
        Lg = "keyup",
        Gr = f ? "DOMMouseScroll": "mousewheel",
        Rd = a ? [Nn, Ob, Zd] : [Ur, Lg, Tc, zp, Fr, ji, Gr, "contextmenu"],
        Ue = F,
        cg = F,
        lp = F,
        xf = Fr.length,
        Xi = function() {
            lp && (l(lp.timeout), lp = F)
        },
        Fo = function() {
            lp && ff(lp.e, lp.info)
        };
        z.addEventListener && (a || (z.addEventListener(ji,
        function() {
            Xi()
        },
        !1), z.addEventListener(Gr,
        function() {
            of()
        },
        !1)), z.addEventListener(Lg,
        function(T) {
            91 === T.keyCode ? Eq = {}: delete Eq[T.keyCode]
        },
        !0), z.addEventListener(Ur,
        function(y) {
            Eq[y.keyCode] = !0
        },
        !0));
        var Dg, xo, oe, rl = !1,
        rs = F,
        Oe = F,
        cc = {},
        sf = {},
        iq = {},
        Df = {},
        Ej = {},
        Eq = {},
        df = {},
        cb = {},
        Mi = {},
        fb = [],
        jj = {},
        pl = F,
        Vg = F,
        vm = function() {},
        re = function() {
            throw "Oops!"
        },
        rf = [0, 0, 0],
        jh = [0, 0, 0, 0],
        mk = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        os = F,
        lj = F,
        Mc = F,
        Ld = function(O) {
            lj && !O._72O && (Mc || (Mc = {}), Mc[O._72O = js()] = O),
            Dg != F ? Hj() < .05 && n && !xo && (ws = Xi) : ws = Xq
        },
        $d = function(Q, w, G, W) {
            lj || (lj = {});
            var i = lj[Q];
            if (i) {
                if (i.url === w) return;
                i.image ? (i.image.onload = vm, i.image.onerror = vm) : i.request && (i.request.onload = vm, i.request.onerror = vm)
            }
            if (/.json$/.test(w)) {
                var T = new XMLHttpRequest;
                lj[Q] = {
                    request: T,
                    url: w
                },
                T.overrideMimeType("text/plain"),
                T.open("GET", w, !0),
                T.onload = function(P) {
                    if (200 === this.status || 0 === this.status) {
                        var m = C.parse(P.target.response);
                        C.handleImageLoaded(Q, m),
                        As(Q, m)
                    } else As(Q, C.handleUnfoundImage(Q, w) || F)
                },
                T.onerror = function() {
                    As(Q, C.handleUnfoundImage(Q, w) || F)
                },
                T.send(null)
            } else {
                var S = new Image;
                lj[Q] = {
                    image: S,
                    url: w
                },
                S.onload = function() {
                    G && (S.width = G),
                    W && (S.height = W),
                    C.handleImageLoaded(Q, S),
                    As(Q, S)
                },
                S.onerror = function() {
                    As(Q, C.handleUnfoundImage(Q, w) || F)
                },
                /^data:image/.test(w) || (w += w.indexOf("?") >= 0 ? "&__ht__=" + db() : "?" + db()),
                S.src = w
            }
        },
        As = function(j, q) {
            if (sf[j] = q, delete lj[j], Sk(lj) && (lj = F, Mc)) {
                for (var n in Mc) {
                    var x = Mc[n];
                    x.invalidateAll && x.invalidateAll(V, "imageLoaded", j),
                    x.redraw && x.redraw(),
                    x.iv(),
                    delete x._72O
                }
                Mc = F
            }
            if (q && Mc) for (var n in Mc) {
                var x = Mc[n];
                x.invalidateAll && x.invalidateAll(V, "imageLoading", j),
                x.redraw && x.redraw(),
                x.iv()
            }
        },
        db = function() {
            return z.performance && z.performance.now ? z.performance.now() : Date.now()
        },
        cr = function(O, v) {
            v ? l(O) : z.cancelAnimationFrame(O)
        },
        yf = function(y, H, E) {
            return {
                width: y,
                height: H,
                comps: eb(E) ? E: [E]
            }
        },
        sr = function(d, t) {
            return {
                type: zf,
                rect: [d, t, 1.6, 1.6],
                borderWidth: 1,
                borderColor: Ln,
                gradient: wh,
                gradientColor: le,
                background: Ln
            }
        },
        Wm = function(u, H) {
            return yf(16, 16, {
                type: tr,
                rect: [4, 4, 10, 8],
                background: u,
                rotation: H ? 1.57 : 3.14
            })
        },
        Qb = function(W, o) {
            return yf(16, 16, {
                type: tr,
                rect: [4, 4, 8, 7],
                background: W,
                rotation: o ? 3.14 : 0
            })
        },
        gr = function(W) {
            var b = W._orientation;
            return "horizontal" === b || "h" === b
        },
        nj = function(t) {
            Y.z = e = t
        },
        fg = function(e) {
            var d = 2,
            J = 0;
            for (var i in e) i.length === d && q(i, 32) === we && (pl = Vg = e[i]),
            J++;
            return J
        },
        Xp = function(x, s, g) {
            return g ? {
                x: x - g,
                y: s - g,
                width: 2 * g + 1,
                height: 2 * g + 1
            }: a ? {
                x: x - 5,
                y: s - 5,
                width: 11,
                height: 11
            }: {
                x: x - 1,
                y: s - 1,
                width: 3,
                height: 3
            }
        },
        sc = function(V) {
            return (/ble$/.test(V) || /ed$/.test(V) || v[V] ? "is": "get") + V.charAt(0).toUpperCase() + V.slice(1)
        },
        es = function(x) {
            return "set" + x.charAt(0).toUpperCase() + x.slice(1)
        },
        Cl = function(O) {
            return typeof O === ip || O instanceof String
        },
        ye = function(I) {
            return typeof I === xq
        },
        Xq = function(L) {
            return typeof L === hh
        },
        _l = function(k) {
            return k && "object" == typeof k
        },
        Pp = function(c) {
            return "function" == typeof c
        },
        eb = function(k) {
            return k instanceof Array
        },
        Fm = function(i) {
            return i instanceof Lq
        },
        yo = function(Z) {
            return eb(Z) ? new Lq(Z) : Z
        },
        Bm = function(f) {
            return f instanceof go
        },
        wn = function(w) {
            return w instanceof mq
        },
        sl = function(n) {
            return n instanceof Hf
        },
        Al = function(n) {
            return n && "IFRAME" === n.tagName
        },
        mj = function(U) {
            return U == F ? U: parseFloat(U.toFixed(2))
        },
        qk = function(L, Q, B) {
            var j, F = Q.length;
            if (B) for (var d = 0; B > d; d++) if (3 === F) L.push(Q[0]),
            L.push(Q[1]),
            L.push(Q[2]);
            else for (j = 0; F > j; j++) L.push(Q[j]);
            else if (3 === F) L.push(Q[0]),
            L.push(Q[1]),
            L.push(Q[2]);
            else for (j = 0; F > j; j++) L.push(Q[j])
        },
        wq = function(m) {
            return m ? _l(m) ? m: {}: !1
        },
        vc = function($, y, D) {
            var Q, h = _l($) ? $: $.prototype;
            for (Q in y) D && h[Q] !== V || (h[Q] = y[Q]);
            return $
        },
        ms = function(J) {
            return String.fromCharCode(J)
        },
        Yp = function(c) {
            for (var f, E = 0,
            B = ""; E < c.length; E++) f = c[c.length - 1 - E],
            "%" === f ? f = "'": "a" === f ? f = '"': "]" === f && (f = "\\"),
            B += ms(f.charCodeAt(0) - 1);
            return B
        },
        Lo = function($, z, e) {
            $.superClass.constructor.apply(z, e)
        },
        Sk = function(Q) {
            for (var R in Q) return ! 1;
            return ! 0
        },
        Tn = function(D) {
            return D ? 0 === D.length: !0
        },
        Dj = function(d, k) {
            return d.x === k.x && d.y === k.y && d.width === k.width && d.height === k.height
        },
        Xh = function(_, P, f) {
            return P > _ ? P: _ > f ? f: _
        },
        Hj = function() {
            var x = 1e4 * g(xf++);
            return x - T(x)
        },
        er = function(Z, b, t) {
            return Uq(Z.x, Z.y, b.x, b.y, t.x, t.y, t.x + t.width, t.y, !0) || Uq(Z.x, Z.y, b.x, b.y, t.x + t.width, t.y, t.x + t.width, t.y + t.height, !0) || Uq(Z.x, Z.y, b.x, b.y, t.x + t.width, t.y + t.height, t.x, t.y + t.height, !0) || Uq(Z.x, Z.y, b.x, b.y, t.x, t.y + t.height, t.x, t.y, !0)
        },
        Uq = function(y, A, c, b, X, d, O, w, E) {
            var T = (O - X) * (A - d) - (w - d) * (y - X),
            Z = (w - d) * (c - y) - (O - X) * (b - A);
            if (0 !== Z) {
                var i = T / Z,
                m = y + i * (c - y),
                v = A + i * (b - A);
                return E && (m + Un < s(y, c) || m - Un > h(y, c) || m + Un < s(X, O) || m - Un > h(X, O) || v + Un < s(A, b) || v - Un > h(A, b) || v + Un < s(d, w) || v - Un > h(d, w)) ? F: [m, v]
            }
            return F
        },
        rp = function(u, z, q) {
            if (u && q) if (z) {
                if (z === rr) return u.getStyle(q);
                if (z === Zj) return u.getAttr(q);
                if (z === oj) return u[q]
            } else if (q = sc(q), u[q]) return u[q]();
            return V
        },
        Wb = function(x, v, B, O) {
            if (x && B) if (v) {
                if (v === rr) x.s(B, O);
                else if (v === Zj) x.a(B, O);
                else if (v === oj) {
                    var l = x[B];
                    x[B] = O,
                    x.fp("f:" + B, l, O)
                }
            } else B = es(B),
            x[B] && x[B](O)
        },
        Ci = function(U, m, T, o, z) {
            m && qe(U, T, o, 1, z, m)
        },
        bc = function(x, z, Z, G) {
            var $ = 1 - x;
            return $ * $ * z + 2 * x * $ * Z + x * x * G
        },
        ak = function(D, t, i, V, $) {
            var L = 1 - D;
            return L * L * L * t + 3 * L * L * D * i + 3 * L * D * D * V + D * D * D * $
        },
        Si = function(R) {
            var o, F, c, j, V = 0;
            return R.forEach(function(N) {
                if (o = N.length, o > 0) for (F = N[0], j = 1; o > j; j++) c = N[j],
                V += ep(F, c),
                F = c
            }),
            V
        },
        _q = function(z, r, a) {
            var U = "__" + z,
            N = function(d) {
                a["handle_" + z](d)
            };
            a[U] || (a[U] = N, r.addEventListener(z, N, !1))
        },
        rj = function(z, N, S) {
            var a = "__" + z,
            c = S[a];
            c && (N.removeEventListener(z, c, !1), delete S[a])
        },
        Ro = function(g, M) {
            var y = "_" + M;
            g[sc(M)] = function() {
                return this[y]
            },
            g[es(M)] = function(u) {
                var U = this[y];
                this[y] = u,
                this.fp(M, U, u)
            }
        },
        Re = function(f) {
            return o.create(f)
        },
        yj = function(s) {
            if (!s.element) {
                var h, d; (h = s.textField) ? d = on(Ff.TextField, h) : (h = s.textArea) ? d = on(Ff.TextArea, h) : (h = s.button) ? d = on(Ff.Button, h) : (h = s.comboBox) ? d = on(Ff.ComboBox, h) : (h = s.checkBox) ? d = on(Ff.CheckBox, h) : (h = s.radioButton) ? d = on(Ff.RadioButton, h) : (h = s.slider) ? d = on(Ff.Slider, h) : (h = s.colorPicker) ? d = on(Ff.ColorPicker, h) : (h = s.image) && (d = on(Ff.Image, h)),
                d && (s.element = d)
            }
        },
        Kp = function(q, c) {
            var O = hs(q);
            return O._ht = c,
            O
        },
        hs = function(N) {
            var g = E.createElement("div"),
            h = g.style;
            return g.tabIndex = -1,
            g.onkeydown = pm,
            h.msTouchAction = yh,
            h.cursor = G,
            rd(g, F, 0),
            a && h.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", F),
            N && (h.overflow = gl),
            g
        },
        Jr = function(m) {
            var O = E.createElement("canvas"),
            l = O.style;
            return l.msTouchAction = yh,
            l.pointerEvents = yh,
            rd(O, F, 0),
            m && Bf(m, O),
            O
        },
        rd = function(s, c, q) {
            var r = s.style;
            r.border = c ? c + " solid 1px": 0,
            r.outline = 0,
            r.padding = q ? "0 " + q + mb: 0,
            dg(s)
        },
        dg = function(z) {
            var Y = z.style;
            Y.position = sm,
            Y.margin = 0,
            Y.setProperty("box-sizing", "border-box", F),
            Y.setProperty("-moz-box-sizing", "border-box", F)
        },
        Kc = function(l, t, c, S) {
            S || (S = Wj),
            t != F && (l.width = t * S, l.style.width = t + mb),
            c != F && (l.height = c * S, l.style.height = c + mb)
        },
        Bf = function($, P, C) {
            $.appendChild(P),
            C && (P.style.position = sm)
        },
        Pf = function(R, w) {
            w.split || (w += "");
            for (var o, t = w.split("\n"), T = 0, K = t.length, L = 0; K > L; L++) {
                var B = Te(R.font, t[L]);
                B.width > T && (T = B.width),
                o || (o = B.height)
            }
            return R.ss = t,
            {
                width: T,
                height: o * K
            }
        },
        Dh = function(t, l, J, C, W, w) {
            var r = l.length;
            if (1 === r) _j(t, l[0], J, C, W);
            else for (var R = J.height / r,
            F = {
                x: J.x,
                y: J.y,
                width: J.width,
                height: R
            },
            A = 0; A < l.length; A++) w ? wb(t, l[A], C, W, F.x, F.y, F.width, F.height, w) : _j(t, l[A], F, C, W),
            F.y += R
        },
        _j = function(T, n, d, D, h) {
            T.font = D ? D: El,
            T.fillStyle = h ? h: Wp,
            T.textAlign = Nq,
            T.textBaseline = Jh;
            var l, U;
            d ? d.width === V ? (l = d.x, U = d.y) : (l = d.x + d.width / 2, U = d.y + d.height / 2) : (l = 0, U = 0),
            T.fillText(n, Q(l), Q(U))
        },
        Fi = function(F) {
            F.getView && (F = F.getView());
            var g = F.offsetWidth || F.scrollWidth;
            return ! g && F.style.width && (g = q(F.style.width)),
            g
        },
        hd = function(R) {
            R.getView && (R = R.getView());
            var X = R.offsetHeight || R.scrollHeight;
            return ! X && R.style.height && (X = q(R.style.height)),
            X
        },
        he = function() {
            var j = function(u) {
                pm(u),
                u.stopPropagation()
            },
            G = a ? [Nn] : [Ur, Tc, Gr];
            return function(p) {
                var $ = hs(),
                D = $.style;
                return D.backgroundColor = C.disabledBackground,
                p && (D.backgroundImage = "url(" + p + ")", D.backgroundPosition = "50% 50%", D.backgroundRepeat = "no-repeat no-repeat"),
                G.forEach(function(N) {
                    $.addEventListener(N, j)
                }),
                $
            }
        } (),
        oo = function(j) {
            var k = j.getContext("2d");
            return k.save(),
            k.lineCap = ol,
            k.lineJoin = qc,
            k
        },
        ws = function(u, O, k, e) {
            Oj(u, O * Wj, k * Wj),
            e *= Wj,
            1 !== e && u.scale(e, e)
        },
        Oj = function(T, A, h) {
            T.translate(A, h)
        },
        Wk = function(m, _) {
            m.rotate(_)
        },
        ze = function(w) {
            if (E.activeElement !== w) if (a) w.focus();
            else {
                var V = Me(),
                L = V.target;
                w.focus(),
                L.scrollLeft = V.left,
                L.scrollTop = V.top
            }
        },
        Ee = function(B) {
            return B && B.getView ? B.getView() : B
        },
        Sn = function(q, r, L, _, t) {
            2 === arguments.length && (L = r.y, _ = r.width, t = r.height, r = r.x);
            var d = Ee(q),
            D = d.style; (E.fullscreenElement || E.mozFullScreenElement || E.webkitFullscreenElement || E.msFullscreenElement) !== d && (r !== V && (D.left = r + mb), L !== V && (D.top = L + mb), _ !== V && (D.width = _ + mb), t !== V && (D.height = t + mb)),
            q.endEditing && !a && q.endEditing(),
            q.redraw && q.redraw(),
            q.invalidate && q.invalidate(),
            q.onLayouted && q.onLayouted(r, L, _, t),
            q._41O && q._41O("layout")
        },
        dr = function(F) {
            var n = F.touches[0];
            return n ? n: F.changedTouches[0]
        },
        Or = function(g) {
            C.popup && C.popup.close(),
            C.popup = g
        },
        Nf = F,
        fc = function(z) {
            Nf.handleWindowTouchMove(z)
        },
        so = function(q) {
            Nf.handleWindowTouchEnd(q),
            z.removeEventListener(Ob, fc, !1),
            z.removeEventListener(Zd, so, !1),
            Nf = F
        },
        Vp = function(L) {
            Nf.handleWindowMouseMove(L)
        },
        Co = function(G) {
            Nf.handleWindowMouseUp(G),
            z.removeEventListener(zp, Vp, !1),
            z.removeEventListener(Fr, Co, !1),
            Nf = F
        },
        dc = function(D) {
            return 1 === se(D)
        },
        xn = function(m, w) {
            return w ? w.keyCode === m: Eq[m]
        },
        zg = function(B) {
            return ui(B) && xn(65, B)
        },
        qs = function(L) {
            return xn(46, L) || xn(8, L)
        },
        dk = function($) {
            return function(v) {
                return v ? v.keyCode === $: Eq[$]
            }
        },
        we = 573,
        tp = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
        bp = dk(tp[0]),
        Ac = dk(tp[1]),
        ig = dk(tp[2]),
        ag = dk(tp[3]),
        kb = dk(tp[4]),
        cj = dk(tp[5]),
        Bo = dk(tp[6]),
        ll = dk(tp[7]),
        Go = dk(tp[8]),
        ib = dk(tp[9]),
        sn = dk(tp[10]),
        nc = {
            65 : 1,
            83 : 1,
            68 : 1,
            87 : 1,
            37 : 1,
            38 : 1,
            39 : 1,
            40 : 1
        },
        hl = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 13, 331],
        Sc = F,
        gm = F,
        Sj = function(F, g) {
            Sc || (Sc = Jr()),
            Kc(Sc, F, g, 1);
            var R = oo(Sc);
            return R.clearRect(0, 0, F, g),
            R
        },
        cd = function() {
            var y, d = {};
            return function(K) {
                var s, m = d[K];
                return m || (y || (y = Jr(), Kc(y, 1, 1, 1)), s = y.getContext("2d"), s.clearRect(0, 0, 1, 1), qe(s, 0, 0, 1, 1, K), m = s.getImageData(0, 0, 1, 1).data, m = d[K] = [m[0], m[1], m[2], m[3]]),
                m
            }
        } (),
        sj = function(r) {
            if (!Cl(r)) return r;
            var t = cd(r);
            return t.CA || (t.CA = [t[0] / 255, t[1] / 255, t[2] / 255, t[3] / 255]),
            t.CA
        },
        Wi = function(p, w, P, G) {
            var o = Jr();
            o.width = P,
            o.height = G;
            var B = o.getContext("2d");
            B.drawImage(p, 0, 0, P, G);
            try {
                for (var W = B.getImageData(0, 0, P, G), f = W.data, u = 0, Z = f.length; Z > u; u += 4) {
                    var U = f[u + 0],
                    Y = f[u + 1],
                    k = f[u + 2];
                    f[u + 0] = w[0] * U,
                    f[u + 1] = w[1] * Y,
                    f[u + 2] = w[2] * k
                }
                B.putImageData(W, 0, 0)
            } catch(M) {
                return p
            }
            return o
        },
        Pc = function(V, l, z) {
            return l && (l = "miter" === z ? 8 * l + 20 : l + 1, V && tq(V, l)),
            l
        },
        ld = function(d, a) {
            if (a) {
                var H = new ls(a),
                o = d.width / 2,
                O = d.height / 2,
                f = Hd([H.tf( - o, -O), H.tf(o, -O), H.tf(o, O), H.tf( - o, O)]);
                return f.x += d.x + o,
                f.y += d.y + O,
                f
            }
            return d
        },
        zh = function(Z, c, k, N, i, $, U, V) {
            N *= Math.PI / 180;
            var K = {
                x: Math.cos(N) * (Z.x - U.x) / 2 + Math.sin(N) * (Z.y - U.y) / 2,
                y: -Math.sin(N) * (Z.x - U.x) / 2 + Math.cos(N) * (Z.y - U.y) / 2
            },
            r = Math.pow(K.x, 2) / Math.pow(c, 2) + Math.pow(K.y, 2) / Math.pow(k, 2);
            r > 1 && (c *= Math.sqrt(r), k *= Math.sqrt(r));
            var h = (i == $ ? -1 : 1) * Math.sqrt((Math.pow(c, 2) * Math.pow(k, 2) - Math.pow(c, 2) * Math.pow(K.y, 2) - Math.pow(k, 2) * Math.pow(K.x, 2)) / (Math.pow(c, 2) * Math.pow(K.y, 2) + Math.pow(k, 2) * Math.pow(K.x, 2)));
            isNaN(h) && (h = 0);
            var X = {
                x: h * c * K.y / k,
                y: h * -k * K.x / c
            },
            Q = {
                x: (Z.x + U.x) / 2 + Math.cos(N) * X.x - Math.sin(N) * X.y,
                y: (Z.y + U.y) / 2 + Math.sin(N) * X.x + Math.cos(N) * X.y
            },
            q = function(A) {
                return Math.sqrt(Math.pow(A[0], 2) + Math.pow(A[1], 2))
            },
            a = function(s, P) {
                return (s[0] * P[0] + s[1] * P[1]) / (q(s) * q(P))
            },
            J = function(b, d) {
                return (b[0] * d[1] < b[1] * d[0] ? -1 : 1) * Math.acos(a(b, d))
            },
            u = J([1, 0], [(K.x - X.x) / c, (K.y - X.y) / k]),
            H = [(K.x - X.x) / c, (K.y - X.y) / k],
            S = [( - K.x - X.x) / c, ( - K.y - X.y) / k],
            v = J(H, S);
            a(H, S) <= -1 && (v = Math.PI),
            a(H, S) >= 1 && (v = 0);
            var a = c > k ? c: k,
            D = c > k ? 1 : c / k,
            Y = c > k ? k / c: 1;
            if (null == V) {
                var L = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                tq(L, a),
                L.x *= D,
                L.width *= D,
                L.y *= Y,
                L.height *= Y;
                var G = new ls(N);
                return L = Hd([G.tf(L.x, L.y), G.tf(L.x + L.width, L.y), G.tf(L.x + L.width, L.y + L.height), G.tf(L.x, L.y + L.height)]),
                L.x += Q.x,
                L.y += Q.y,
                [{
                    x: L.x,
                    y: L.y
                },
                {
                    x: L.x + L.width,
                    y: L.y
                },
                {
                    x: L.x + L.width,
                    y: L.y + L.height
                },
                {
                    x: L.x,
                    y: L.y + L.height
                }]
            }
            V.translate(Q.x, Q.y),
            V.rotate(N),
            V.scale(D, Y),
            V.arc(0, 0, a, u, u + v, 1 - $),
            V.scale(1 / D, 1 / Y),
            V.rotate( - N),
            V.translate( - Q.x, -Q.y)
        },
        Oo = function(O, K) {
            O && O.beginPath();
            for (var b, q, d, e = [], B = function(i) {
                for (var y, p = /(\-{0,1}[\d\.]+)/gi,
                e = []; y = p.exec(i);) e.push(parseFloat(y[0]));
                return e
            },
            n = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, W = {
                x: 0,
                y: 0
            }; b = n.exec(K);) {
                var $ = b[0],
                s = $.substr(0, 1);
                if ("M" === s || "m" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 2) {
                        var v = I[E],
                        u = I[E + 1];
                        "m" === s && (v += W.x, u += W.y),
                        O && O.moveTo(v, u),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = d = null
                } else if ("H" === s || "h" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 1) {
                        var v = I[E];
                        "h" === s && (v += W.x),
                        O && O.lineTo(v, W.y),
                        e.push({
                            x: v,
                            y: W.y
                        }),
                        W.x = v
                    }
                    q = d = null
                } else if ("C" === s || "c" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 6) {
                        var Y = I[E],
                        p = I[E + 1],
                        T = I[E + 2],
                        z = I[E + 3],
                        v = I[E + 4],
                        u = I[E + 5];
                        "c" === s && (Y += W.x, p += W.y, T += W.x, z += W.y, v += W.x, u += W.y),
                        O && O.bezierCurveTo(Y, p, T, z, v, u),
                        e.push({
                            x: Y,
                            y: p
                        }),
                        e.push({
                            x: T,
                            y: z
                        }),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = [Y, p, T, z, v, u],
                    d = null
                } else if ("S" === s || "s" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 4) {
                        var Y, p;
                        q ? (Y = 2 * q[4] - q[2], p = 2 * q[5] - q[3]) : (Y = W.x, p = W.y);
                        var T = I[E],
                        z = I[E + 1],
                        v = I[E + 2],
                        u = I[E + 3];
                        "s" === s && (T += W.x, z += W.y, v += W.x, u += W.y),
                        O && O.bezierCurveTo(Y, p, T, z, v, u),
                        e.push({
                            x: Y,
                            y: p
                        }),
                        e.push({
                            x: T,
                            y: z
                        }),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = [Y, p, T, z, v, u],
                    d = null
                } else if ("Q" === s || "q" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 4) {
                        var Y = I[E],
                        p = I[E + 1],
                        v = I[E + 2],
                        u = I[E + 3];
                        "q" === s && (Y += W.x, p += W.y, v += W.x, u += W.y),
                        O && O.quadraticCurveTo(Y, p, v, u),
                        e.push({
                            x: Y,
                            y: p
                        }),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = null,
                    d = [Y, p, v, u]
                } else if ("T" === s || "t" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 2) {
                        var Y, p;
                        d ? (Y = 2 * d[2] - d[0], p = 2 * d[3] - d[1]) : (Y = W.x, p = W.y);
                        var v = I[E],
                        u = I[E + 1];
                        "t" === s && (v += W.x, u += W.y),
                        O && O.quadraticCurveTo(Y, p, v, u),
                        e.push({
                            x: Y,
                            y: p
                        }),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = null,
                    d = [Y, p, v, u]
                } else if ("V" === s || "v" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 1) {
                        var u = I[E];
                        "v" === s && (u += W.y),
                        O && O.lineTo(W.x, u),
                        e.push({
                            x: W.x,
                            y: u
                        }),
                        W.y = u
                    }
                    q = d = null
                } else if ("L" === s || "l" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 2) {
                        var v = I[E],
                        u = I[E + 1];
                        "l" === s && (v += W.x, u += W.y),
                        O && O.lineTo(v, u),
                        e.push({
                            x: v,
                            y: u
                        }),
                        W.x = v,
                        W.y = u
                    }
                    q = d = null
                } else if ("A" === s || "a" === s) {
                    for (var I = B($), E = 0; E < I.length; E += 7) {
                        var Q = I[E],
                        k = I[E + 1],
                        g = I[E + 2],
                        R = I[E + 3],
                        w = I[E + 4],
                        v = I[E + 5],
                        u = I[E + 6];
                        "a" === s && (v += W.x, u += W.y);
                        var D = zh(W, Q, k, g, R, w, {
                            x: v,
                            y: u
                        },
                        O);
                        D && (e = e.concat(D)),
                        W.x = v,
                        W.y = u
                    }
                    q = d = null
                }
                var o = $.substr($.length - 1); ("z" === o || "Z" === o) && O && O.closePath()
            }
            return e
        },
        ch = function(w, $, Z, I) {
            var R = !1;
            if (w.beginPath ? w.beginPath() : R = !0, Fm($) && ($ = $._as), Fm(Z) && (Z = Z._as), Z && Z.length) {
                for (var H, v, l, o, s = 0,
                N = 0,
                e = Z.length; e > N; N++) H = Z[N],
                1 === H ? (v = $[s++], w.moveTo(v.x, R ? -v.y: v.y)) : 2 === H ? (v = $[s++], w.lineTo(v.x, R ? -v.y: v.y)) : 3 === H ? (v = $[s++], l = $[s++], w.quadraticCurveTo(v.x, R ? -v.y: v.y, l.x, R ? -l.y: l.y)) : 4 === H ? (v = $[s++], l = $[s++], o = $[s++], w.bezierCurveTo(v.x, R ? -v.y: v.y, l.x, R ? -l.y: l.y, o.x, R ? -o.y: o.y)) : 5 === H && w.closePath();
                I && 5 !== H && w.closePath()
            } else {
                var L, b, i, g = $.length;
                if (g > 0) {
                    for (L = $[0], w.moveTo(L.x, R ? -L.y: L.y), b = 1; g > b; b++) i = $[b],
                    w.lineTo(i.x, R ? -i.y: i.y);
                    I && w.closePath()
                }
            }
        },
        Dp = function(L, X, _, t) {
            if (Fm(L) && (L = L._as), Fm(X) && (X = X._as), X && X.length) {
                _ = _ || Oq;
                for (var r, u, y, C, E, D, k = [], V = F, O = 0, I = 0, v = X.length; v > I; I++) if (r = X[I], 1 === r) k.push(V = []),
                V.push(L[O++]);
                else if (2 === r) V.push(L[O++]);
                else if (3 === r) for (u = V[V.length - 1], y = L[O++], C = L[O++], D = 1; _ >= D; D++) V.push({
                    x: bc(D / _, u.x, y.x, C.x),
                    y: bc(D / _, u.y, y.y, C.y)
                });
                else if (4 === r) for (u = V[V.length - 1], y = L[O++], C = L[O++], E = L[O++], D = 1; _ >= D; D++) V.push({
                    x: ak(D / _, u.x, y.x, C.x, E.x),
                    y: ak(D / _, u.y, y.y, C.y, E.y)
                });
                else 5 === r && V.push(V[0]);
                return t && 5 !== r && V && V.length > 2 && V.push(V[0]),
                k
            }
            return t && L.length > 2 && (L = L.slice(), L.push(L[0])),
            L ? [L] : []
        },
        Xr = function(Z, G, j, U, e, J) {
            var B, n, c, l = cd(G),
            E = U,
            z = l[0],
            $ = l[1],
            g = l[2];
            if (j) {
                var Q = cd(j);
                B = Q[0] - z,
                n = Q[1] - $,
                c = Q[2] - g
            } else B = 255 - z,
            n = 255 - $,
            c = 255 - g;
            for (J || (J = U > 10 ? 1 : .5, J = 1 > e ? s(J / e, 2) : J); (U -= J) > 0;) {
                var C = 1 - U / E,
                _ = z + B * C,
                N = $ + n * C,
                H = g + c * C;
                _ = s(w(_), 255),
                N = s(w(N), 255),
                H = s(w(H), 255),
                Z.strokeStyle = "rgb(" + _ + "," + N + "," + H + ")",
                Z.lineWidth = U,
                Z.stroke()
            }
        },
        Zk = function() {
            var q = {};
            return function(t, i) {
                var p = t + "-" + i,
                M = q[p];
                if (M) return M;
                var W, F, U, K = cd(t);
                return 0 > i ? (i = (100 + i) / 100, W = w(K[0] * i), F = w(K[1] * i), U = w(K[2] * i)) : (i /= 100, W = K[0], F = K[1], U = K[2], W += (255 - W) * i, F += (255 - F) * i, U += (255 - U) * i, W = s(w(W), 255), F = s(w(F), 255), U = s(w(U), 255)),
                q[p] = "rgb(" + W + "," + F + "," + U + ")"
            }
        } (),
        qe = function(C, N, M, k, S, c) {
            c && (C.fillStyle = c),
            C.beginPath(),
            C.rect(N, M, k, S),
            C.fill()
        },
        Ak = function(V, m, K, Y, M, u, a) {
            V.beginPath(),
            eq[m](V, K.x, K.y, K.width, K.height, Y, M, u, a)
        },
        Qp = function(h, s, R, o, A) {
            var d = eq[R];
            h.fillStyle = d ? d(h, s, o ? o: le, A.x, A.y, A.width, A.height) : s
        },
        Eb = function(h, H) {
            h.fillStyle = h.createPattern(H, "repeat")
        },
        mm = function(C, S, c, N, B, H, U, z) {
            var p, v, D, P, k, a, _, e, l, f, t;
            if (R(B) > 2 * y && (B = 2 * y), k = w(R(B) / (y / 4)), p = B / k, v = -p, D = -N, k > 0) {
                a = S + i(N) * H,
                _ = c + g( - N) * U,
                z ? C.lineTo(a, _) : C.moveTo(a, _);
                for (var $ = 0; k > $; $++) D += v,
                P = D - v / 2,
                e = S + i(D) * H,
                l = c + g(D) * U,
                f = S + i(P) * (H / i(v / 2)),
                t = c + g(P) * (U / i(v / 2)),
                C.quadraticCurveTo(f, t, e, l)
            }
        },
        Kk = function(E, g, S, o, t, C, z, X, s) {
            6 === arguments.length && (z = C, X = C, s = C);
            var B = g + o,
            T = S + t,
            p = t > o ? 2 * o: 2 * t;
            C = p > C ? C: p,
            z = p > z ? z: p,
            X = p > X ? X: p,
            s = p > s ? s: p;
            var P = .29 * s,
            b = .58 * s;
            E.moveTo(B, T - s),
            E.quadraticCurveTo(B, T - b, B - P, T - P),
            E.quadraticCurveTo(B - b, T, B - s, T),
            P = .29 * X,
            b = .58 * X,
            E.lineTo(g + X, T),
            E.quadraticCurveTo(g + b, T, g + P, T - P),
            E.quadraticCurveTo(g, T - b, g, T - X),
            P = .29 * C,
            b = .58 * C,
            E.lineTo(g, S + C),
            E.quadraticCurveTo(g, S + b, g + P, S + P),
            E.quadraticCurveTo(g + b, S, g + C, S),
            P = .29 * z,
            b = .58 * z,
            E.lineTo(B - z, S),
            E.quadraticCurveTo(B - b, S, B - P, S + P),
            E.quadraticCurveTo(B, S + b, B, S + z),
            E.lineTo(B, T - s)
        },
        Hb = function(N, T, H, m, q, G, K) {
            T && (H = Q(H), m = Q(m), K || (K = 1), N.fillStyle = T, N.beginPath(), N.rect(H, m, K, G), N.rect(H, m, q, K), N.rect(H, m + G - K, q, K), N.rect(H + q - K, m, K, G), N.fill())
        },
        qi = function(b, i, G, A) {
            var y = A.x,
            T = A.y,
            q = A.width,
            E = A.height;
            if (! (!i || !G || 0 >= q || 0 >= E)) {
                var W, x = fi(i),
                m = rh(i),
                d = G > 0;
                1 === G || -1 === G ? (b.fillStyle = d ? x: m, b.beginPath(), b.rect(y, T, 1, E), b.rect(y, T, q, 1), b.fill(), b.fillStyle = d ? m: x, b.beginPath(), b.rect(y, T + E - 1, q, 1), b.rect(y + q - 1, T, 1, E), b.fill()) : (G = s(R(G), s(q / 2, E / 2)), W = b.createLinearGradient(y, T, y + G, T), W.addColorStop(0, d ? x: m), W.addColorStop(1, i), b.fillStyle = W, b.beginPath(), b.moveTo(y, T), b.lineTo(y + G, T + G), b.lineTo(y + G, T + E - G), b.lineTo(y, T + E), b.lineTo(y, T), b.fill(), W = b.createLinearGradient(y, T, y, T + G), W.addColorStop(0, d ? x: m), W.addColorStop(1, i), b.fillStyle = W, b.beginPath(), b.moveTo(y, T), b.lineTo(y + G, T + G), b.lineTo(y + q - G, T + G), b.lineTo(y + q, T), b.lineTo(y, T), b.fill(), W = b.createLinearGradient(y, T + E, y, T + E - G), W.addColorStop(0, d ? m: x), W.addColorStop(1, i), b.fillStyle = W, b.beginPath(), b.moveTo(y, T + E), b.lineTo(y + G, T + E - G), b.lineTo(y + q - G, T + E - G), b.lineTo(y + q, T + E), b.lineTo(y, T + E), b.fill(), W = b.createLinearGradient(y + q, T, y + q - G, T), W.addColorStop(0, d ? m: x), W.addColorStop(1, i), b.fillStyle = W, b.beginPath(), b.moveTo(y + q, T), b.lineTo(y + q - G, T + G), b.lineTo(y + q - G, T + E - G), b.lineTo(y + q, T + E), b.lineTo(y + q, T), b.fill())
            }
        },
        _g = function(Q, u, T, s, N, m, C) {
            var x = Q.createLinearGradient(s, N, m, C);
            return x.addColorStop(0, T),
            x.addColorStop(1, u),
            x
        },
        Wd = function(n, i, f, F, v, H, _) {
            var I = n.createLinearGradient(F, v, H, _);
            return I.addColorStop(0, i),
            I.addColorStop(.5, f),
            I.addColorStop(1, i),
            I
        },
        Wh = function(T, D, E, A, r, S, _) {
            var e = T.createLinearGradient(A, r, S, _);
            return e.addColorStop(0, D),
            e.addColorStop(1 / 3, E),
            e.addColorStop(2 / 3, D),
            e.addColorStop(1, E),
            e
        },
        nq = function(D, p, z, G, E, N, q, H, I) {
            var F = D.createRadialGradient(G + N * H, E + q * I, s(N, q) / 24, G + N / 2, E + q / 2, h(N, q) / 2);
            return F.addColorStop(0, z),
            F.addColorStop(1, p),
            F
        },
        eq = {
            polygon: function(N, G, n, h, V, M) { (M == F || 3 > M) && (M = 6);
                for (var P, I, w = s(h, V) / 2, Q = G + h / 2, K = n + V / 2, z = 0, L = 2 * y / M, S = 0; M > S; S++) P = Q + i(z) * w,
                I = K + g(z) * w,
                0 === S ? N.moveTo(P, I) : N.lineTo(P, I),
                z += L;
                N.closePath()
            },
            arc: function(m, O, M, k, b, t, f, Y, P) {
                t == F && (t = y),
                f == F && (f = X),
                Y == F && (Y = !0);
                var B = O + k / 2,
                Z = M + b / 2;
                Y && m.moveTo(B, Z),
                P ? (t = -t, f = -f, mm(m, B, Z, t, f - t, k / 2, b / 2, !0)) : m.arc(B, Z, s(k, b) / 2, t, f),
                Y && m.closePath()
            },
            rect: function(Q, w, y, g, q) {
                Q.rect(w, y, g, q)
            },
            circle: function(g, p, C, x, m) {
                g.arc(p + x / 2, C + m / 2, s(x, m) / 2, 0, X, !0)
            },
            oval: function(C, m, o, N, K) {
                mm(C, m + N / 2, o + K / 2, 0, X, N / 2, K / 2, !1)
            },
            roundRect: function(R, g, Q, k, H, L) {
                L == F && (L = s(s(k, H) / 4, 8)),
                Kk(R, g, Q, k, H, L)
            },
            star: function(j, t, G, h, d) {
                var H = 2 * h,
                I = 2 * d,
                W = t + h / 2,
                T = G + d / 2;
                j.moveTo(W - H / 4, T - I / 12),
                j.lineTo(t + .306 * h, G + .579 * d),
                j.lineTo(W - H / 6, T + I / 4),
                j.lineTo(t + h / 2, G + .733 * d),
                j.lineTo(W + H / 6, T + I / 4),
                j.lineTo(t + .693 * h, G + .579 * d),
                j.lineTo(W + H / 4, T - I / 12),
                j.lineTo(t + .611 * h, G + .332 * d),
                j.lineTo(W + 0, T - I / 4),
                j.lineTo(t + .388 * h, G + .332 * d),
                j.closePath()
            },
            triangle: function(h, q, i, V, J) {
                h.moveTo(q + V / 2, i),
                h.lineTo(q + V, i + J),
                h.lineTo(q, i + J),
                h.closePath()
            },
            hexagon: function(u, o, e, U, m) {
                u.moveTo(o, e + m / 2),
                u.lineTo(o + U / 4, e + m),
                u.lineTo(o + 3 * U / 4, +e + m),
                u.lineTo(o + U, e + m / 2),
                u.lineTo(o + 3 * U / 4, e),
                u.lineTo(o + U / 4, e),
                u.closePath()
            },
            pentagon: function(M, z, Q, o, C) {
                var Z = 2 * o,
                L = 2 * C,
                s = z + o / 2,
                V = Q + C / 2;
                M.moveTo(s - Z / 4, V - L / 12),
                M.lineTo(s - Z / 6, V + L / 4),
                M.lineTo(s + Z / 6, V + L / 4),
                M.lineTo(s + Z / 4, V - L / 12),
                M.lineTo(s + 0, V - L / 4),
                M.closePath()
            },
            diamond: function(P, L, V, x, Z) {
                P.moveTo(L + x / 2, V),
                P.lineTo(L, V + Z / 2),
                P.lineTo(L + x / 2, V + Z),
                P.lineTo(L + x, V + Z / 2),
                P.closePath()
            },
            rightTriangle: function(q, l, i, V, J) {
                q.moveTo(l, i),
                q.lineTo(l + V, i + J),
                q.lineTo(l, i + J),
                q.closePath()
            },
            parallelogram: function(X, b, j, L, p) {
                var B = L / 4;
                X.moveTo(b + B, j),
                X.lineTo(b + L, j),
                X.lineTo(b + L - B, j + p),
                X.lineTo(b, j + p),
                X.closePath()
            },
            trapezoid: function(b, l, m, X, N) {
                var I = X / 4;
                b.moveTo(l + I, m),
                b.lineTo(l + X - I, m),
                b.lineTo(l + X, m + N),
                b.lineTo(l, m + N),
                b.closePath()
            },
            "linear.southwest": function(B, n, O, o, b, w, H) {
                return _g(B, n, O, o, b + H, o + w, b)
            },
            "linear.southeast": function(v, P, N, z, k, Q, T) {
                return _g(v, P, N, z + Q, k + T, z, k)
            },
            "linear.northwest": function(i, $, W, G, S, N, b) {
                return _g(i, $, W, G, S, G + N, S + b)
            },
            "linear.northeast": function(Z, T, g, U, x, w, b) {
                return _g(Z, T, g, U + w, x, U, x + b)
            },
            "linear.north": function(K, M, W, k, Q, O, u) {
                return _g(K, M, W, k, Q, k, Q + u)
            },
            "linear.south": function(l, a, _, h, $, o, i) {
                return _g(l, a, _, h, $ + i, h, $)
            },
            "linear.west": function(g, p, h, k, l, e) {
                return _g(g, p, h, k, l, k + e, l)
            },
            "linear.east": function(p, a, i, G, E, X) {
                return _g(p, a, i, G + X, E, G, E)
            },
            "radial.center": function(F, v, c, b, Y, p, H) {
                return nq(F, v, c, b, Y, p, H, .5, .5)
            },
            "radial.southwest": function(Z, X, s, $, U, l, c) {
                return nq(Z, X, s, $, U, l, c, .25, .75)
            },
            "radial.southeast": function(f, d, X, c, h, k, P) {
                return nq(f, d, X, c, h, k, P, .75, .75)
            },
            "radial.northwest": function(T, m, P, c, C, L, N) {
                return nq(T, m, P, c, C, L, N, .25, .25)
            },
            "radial.northeast": function(f, R, u, z, B, s, C) {
                return nq(f, R, u, z, B, s, C, .75, .25)
            },
            "radial.north": function(Q, q, E, k, S, s, n) {
                return nq(Q, q, E, k, S, s, n, .5, .25)
            },
            "radial.south": function(H, S, V, h, C, Z, o) {
                return nq(H, S, V, h, C, Z, o, .5, .75)
            },
            "radial.west": function(J, U, H, n, q, f, c) {
                return nq(J, U, H, n, q, f, c, .25, .5)
            },
            "radial.east": function(T, I, F, k, N, K, O) {
                return nq(T, I, F, k, N, K, O, .75, .5)
            },
            "spread.horizontal": function(A, e, Y, c, h, m) {
                return Wd(A, e, Y, c, h, c + m, h)
            },
            "spread.vertical": function(r, y, Q, u, s, X, $) {
                return Wd(r, y, Q, u, s, u, s + $)
            },
            "spread.diagonal": function(Z, b, A, r, i, k, S) {
                return Wd(Z, b, A, r + k, i, r, i + S)
            },
            "spread.antidiagonal": function($, X, R, q, e, j, f) {
                return Wd($, X, R, q, e, q + j, e + f)
            },
            "spread.north": function(K, y, k, g, a, z, e) {
                return Wh(K, y, k, g, a - e / 4, g, a + e + e / 4)
            },
            "spread.south": function(W, v, R, l, G, P, n) {
                return Wh(W, R, v, l, G - n / 4, l, G + n + n / 4)
            },
            "spread.west": function(h, H, $, Q, u, z) {
                return Wh(h, H, $, Q - z / 4, u, Q + z + z / 4, u)
            },
            "spread.east": function(U, q, T, g, r, y) {
                return Wh(U, T, q, g - y / 4, r, g + y + y / 4, r)
            }
        },
        ls = function(c, A, u) {
            var Y = this;
            Y.s = g(c),
            Y.c = i(c),
            Y.cx = A || 0,
            Y.cy = u || 0
        };
        ls.prototype.tf = function(v, k) {
            1 === arguments.length && (k = v.y, v = v.x);
            var $ = this;
            return {
                x: $.c * v - $.s * k + $.cx,
                y: $.s * v + $.c * k + $.cy
            }
        };
        var Rl = function(F, P, n) {
            return new ls(F).tf(P, n)
        },
        hb = function(u) {
            var P = u.touches[0],
            w = u.touches[1],
            x = P.clientX,
            h = P.clientY,
            J = w.clientX,
            s = w.clientY;
            return k((x - J) * (x - J) + (h - s) * (h - s))
        },
        Lh = (function() {
            for (var V = 0,
            e = Rj.split(""), J = 0; J < e.length; J++) V = 10 * q(e[J]) + V;
            return nj(z[we.toString(8 * J) + br.substr(J)]),
            V
        } (),
        function(x, U, N) {
            for (var V = 0; V < N.size(); V++) {
                var _ = N.get(V);
                x.co(_) && U.add(_)
            }
            for (V = 0; V < N.size(); V++) _ = N.get(V),
            Lh(x, U, _._children)
        }),
        vs = function(Z, L, r) {
            for (var $ = 0; $ < r.size(); $++) {
                var v = r.get(r.size() - 1 - $);
                Z.co(v) && L.add(v)
            }
            for ($ = 0; $ < r.size(); $++) v = r.get($),
            vs(Z, L, v._children)
        },
        zm = function(H, X, D) {
            for (var _ = !1,
            c = 0; c < D.size(); c++) {
                var G = D.get(c);
                H.co(G) ? _ && X.add(G) : _ = 1
            }
            for (c = 0; c < D.size(); c++) G = D.get(c),
            zm(H, X, G._children)
        },
        Yh = function(Y, x, E) {
            for (var c = !1,
            V = 0; V < E.size(); V++) {
                var N = E.get(E.size() - 1 - V);
                Y.co(N) ? c && x.add(N) : c = !0
            }
            for (V = 0; V < E.size(); V++) N = E.get(V),
            Yh(Y, x, N._children)
        },
        Nh = function(w, p, n, b) {
            var H = b == F;
            if (0 !== p || 0 !== n || !H && 0 !== b) {
                var y, d, v, g, x = new Lq;
                w.each(function(h) {
                    if (Bm(h)) {
                        var t = !0;
                        if (v) for (y = 0; y < v.size(); y++) d = v.get(y),
                        d.isHostOn(h) ? (v.removeAt(y), y--, x.remove(d)) : t && (h.isHostOn(d) || h.isLoopedHostOn(d)) && (t = !1);
                        if (g) for (y = 0; y < g.size(); y++) d = g.get(y),
                        _p(d, h) ? (g.removeAt(y), y--, x.remove(d)) : t && _p(h, d) && (t = !1);
                        t && (x.add(h), (h._host || h._69O) && (v || (v = new Lq), v.add(h)), (sl(h) || sl(h._parent)) && (g || (g = new Lq), g.add(h)))
                    } else if (wn(h) && h.s(Ae) === ue) {
                        var R = h.s(ah);
                        R && !R.isEmpty() && (R.each(function(J) {
                            H ? (J.x += p, J.y += n) : (J.x += p, J.y += b, J.e == F ? J.e = n: J.e += n)
                        }), h.fp(ah, !1, !0))
                    }
                }),
                x.each(function(f) {
                    H ? f.translate(p, n) : f.translate3d(p, n, b)
                })
            }
        },
        Vo = {
            1 : 29,
            2 : 30,
            3 : 31,
            4 : 32,
            5 : 33,
            6 : 26,
            7 : 27,
            8 : 28,
            9 : 21,
            10 : 22,
            11 : 23,
            12 : 24,
            13 : 25,
            14 : 14,
            15 : 15,
            16 : 16,
            17 : 17,
            18 : 18,
            19 : 19,
            20 : 20,
            21 : 9,
            22 : 10,
            23 : 11,
            24 : 12,
            25 : 13,
            26 : 6,
            27 : 7,
            28 : 8,
            29 : 1,
            30 : 2,
            31 : 3,
            32 : 4,
            33 : 5,
            34 : 36,
            35 : 37,
            36 : 34,
            37 : 35,
            38 : 54,
            39 : 55,
            40 : 52,
            41 : 53,
            42 : 50,
            43 : 51,
            44 : 49,
            50 : 42,
            51 : 43,
            52 : 40,
            53 : 41,
            54 : 38,
            55 : 39
        },
        jc = function() {
            var D = {
                1 : function(h, e) {
                    return {
                        x: h.x - e.width / 2,
                        y: h.y - e.height / 2
                    }
                },
                2 : function(H, J) {
                    return {
                        x: H.x + J.width / 2,
                        y: H.y - J.height / 2
                    }
                },
                3 : function(F, i) {
                    return {
                        x: F.x + F.width / 2,
                        y: F.y - i.height / 2
                    }
                },
                4 : function(v, s) {
                    return {
                        x: v.x + v.width - s.width / 2,
                        y: v.y - s.height / 2
                    }
                },
                5 : function(p, y) {
                    return {
                        x: p.x + p.width + y.width / 2,
                        y: p.y - y.height / 2
                    }
                },
                6 : function(q) {
                    return {
                        x: q.x,
                        y: q.y
                    }
                },
                7 : function(e) {
                    return {
                        x: e.x + e.width / 2,
                        y: e.y
                    }
                },
                8 : function(E) {
                    return {
                        x: E.x + E.width,
                        y: E.y
                    }
                },
                9 : function(L, F) {
                    return {
                        x: L.x - F.width / 2,
                        y: L.y + F.height / 2
                    }
                },
                10 : function(A, h) {
                    return {
                        x: A.x + h.width / 2,
                        y: A.y + h.height / 2
                    }
                },
                11 : function(v, X) {
                    return {
                        x: v.x + v.width / 2,
                        y: v.y + X.height / 2
                    }
                },
                12 : function(G, x) {
                    return {
                        x: G.x - x.width / 2 + G.width,
                        y: G.y + x.height / 2
                    }
                },
                13 : function(q, t) {
                    return {
                        x: q.x + q.width + t.width / 2,
                        y: q.y + t.height / 2
                    }
                },
                14 : function(E, p) {
                    return {
                        x: E.x - p.width / 2,
                        y: E.y + E.height / 2
                    }
                },
                15 : function(p) {
                    return {
                        x: p.x,
                        y: p.y + p.height / 2
                    }
                },
                16 : function(f, K) {
                    return {
                        x: f.x + K.width / 2,
                        y: f.y + f.height / 2
                    }
                },
                17 : function(d) {
                    return {
                        x: d.x + d.width / 2,
                        y: d.y + d.height / 2
                    }
                },
                18 : function(J, B) {
                    return {
                        x: J.x + J.width - B.width / 2,
                        y: J.y + J.height / 2
                    }
                },
                19 : function(O) {
                    return {
                        x: O.x + O.width,
                        y: O.y + O.height / 2
                    }
                },
                20 : function(t, L) {
                    return {
                        x: t.x + t.width + L.width / 2,
                        y: t.y + t.height / 2
                    }
                },
                21 : function(r, Q) {
                    return {
                        x: r.x - Q.width / 2,
                        y: r.y + r.height - Q.height / 2
                    }
                },
                22 : function(L, q) {
                    return {
                        x: L.x + q.width / 2,
                        y: L.y + L.height - q.height / 2
                    }
                },
                23 : function(N, z) {
                    return {
                        x: N.x + N.width / 2,
                        y: N.y + N.height - z.height / 2
                    }
                },
                24 : function(u, B) {
                    return {
                        x: u.x + u.width - B.width / 2,
                        y: u.y + u.height - B.height / 2
                    }
                },
                25 : function(M, Q) {
                    return {
                        x: M.x + M.width + Q.width / 2,
                        y: M.y + M.height - Q.height / 2
                    }
                },
                26 : function(p) {
                    return {
                        x: p.x,
                        y: p.y + p.height
                    }
                },
                27 : function($) {
                    return {
                        x: $.x + $.width / 2,
                        y: $.y + $.height
                    }
                },
                28 : function(N) {
                    return {
                        x: N.x + N.width,
                        y: N.y + N.height
                    }
                },
                29 : function(M, r) {
                    return {
                        x: M.x - r.width / 2,
                        y: M.y + M.height + r.height / 2
                    }
                },
                30 : function(n, m) {
                    return {
                        x: n.x + m.width / 2,
                        y: n.y + n.height + m.height / 2
                    }
                },
                31 : function(x, U) {
                    return {
                        x: x.x + x.width / 2,
                        y: x.y + x.height + U.height / 2
                    }
                },
                32 : function(B, Z) {
                    return {
                        x: B.x + B.width - Z.width / 2,
                        y: B.y + B.height + Z.height / 2
                    }
                },
                33 : function(x, G) {
                    return {
                        x: x.x + x.width + G.width / 2,
                        y: x.y + x.height + G.height / 2
                    }
                },
                34 : function(N, G) {
                    return {
                        x: N.x,
                        y: N.y - G.height / 2
                    }
                },
                35 : function(Q, z) {
                    return {
                        x: Q.x + Q.width,
                        y: Q.y - z.height / 2
                    }
                },
                36 : function(z, O) {
                    return {
                        x: z.x,
                        y: z.y + z.height + O.height / 2
                    }
                },
                37 : function(q, L) {
                    return {
                        x: q.x + q.width,
                        y: q.y + q.height + L.height / 2
                    }
                },
                38 : function(H, l) {
                    return {
                        x: H.x + H.width / 4,
                        y: H.y - l.height / 2
                    }
                },
                39 : function(J, A) {
                    return {
                        x: J.x + 3 * J.width / 4,
                        y: J.y - A.height / 2
                    }
                },
                40 : function(S) {
                    return {
                        x: S.x + S.width / 4,
                        y: S.y
                    }
                },
                41 : function(N) {
                    return {
                        x: N.x + 3 * N.width / 4,
                        y: N.y
                    }
                },
                42 : function(B, l) {
                    return {
                        x: B.x + B.width / 4,
                        y: B.y + l.height / 2
                    }
                },
                43 : function(Y, W) {
                    return {
                        x: Y.x + 3 * Y.width / 4,
                        y: Y.y + W.height / 2
                    }
                },
                44 : function($, m) {
                    return {
                        x: $.x + $.width / 2,
                        y: $.y + $.height / 2 - m.height / 2
                    }
                },
                45 : function(U) {
                    return {
                        x: U.x + U.width / 4,
                        y: U.y + U.height / 2
                    }
                },
                46 : function(O, y) {
                    return {
                        x: O.x + O.width / 2 - y.width / 2,
                        y: O.y + O.height / 2
                    }
                },
                47 : function(J, y) {
                    return {
                        x: J.x + J.width / 2 + y.width / 2,
                        y: J.y + J.height / 2
                    }
                },
                48 : function(J) {
                    return {
                        x: J.x + 3 * J.width / 4,
                        y: J.y + J.height / 2
                    }
                },
                49 : function(I, N) {
                    return {
                        x: I.x + I.width / 2,
                        y: I.y + I.height / 2 + N.height / 2
                    }
                },
                50 : function(X, l) {
                    return {
                        x: X.x + X.width / 4,
                        y: X.y + X.height - l.height / 2
                    }
                },
                51 : function(w, M) {
                    return {
                        x: w.x + 3 * w.width / 4,
                        y: w.y + w.height - M.height / 2
                    }
                },
                52 : function(G) {
                    return {
                        x: G.x + G.width / 4,
                        y: G.y + G.height
                    }
                },
                53 : function(P) {
                    return {
                        x: P.x + 3 * P.width / 4,
                        y: P.y + P.height
                    }
                },
                54 : function(h, _) {
                    return {
                        x: h.x + h.width / 4,
                        y: h.y + h.height + _.height / 2
                    }
                },
                55 : function(I, x) {
                    return {
                        x: I.x + 3 * I.width / 4,
                        y: I.y + I.height + x.height / 2
                    }
                }
            };
            return fg(z) ?
            function(Q, c, m) {
                return D[Q](c, m ? m: mk)
            }: void 0
        } ();
        vc(_, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        },
        !0);
        var zc = _.reverse,
        gc = _.transparent,
        Tr = _.rectSelectBackground,
        Oc = _.dash,
        Fh = _.titleBackground,
        _r = _.titleIconBackground,
        Ch = _.headerBackground,
        bk = _.headerIconBackground,
        Br = _.headerSeparator,
        Bd = _.headerLine,
        ge = _.contentIconBackground,
        tn = _.contentLine,
        ed = (_.widgetIconHighlight, _.widgetIconBorder),
        Ln = (_.widgetIconGradient, _.imageBackground),
        le = _.imageGradient,
        jk = _.highlight,
        yc = _.label,
        Ef = _.labelSelect;
        if (m && !z.noAlert) {
			if(false){
				var Sg = new Date,
				Xm = m.split("-"),
				Qc = new Date(Sg.getFullYear(), Sg.getMonth(), Sg.getDate()),
				m = new Date(q(Xm[0], 10), q(Xm[1], 10) - 1, q(Xm[2], 10)),
				Nb = Qc.getTime(),
				Nd = m.getTime(),
				$p = K + "_try",
				ei = z.localStorage,
				Eo = z.alert;
				if (ei && Eo) if (Nd > Nb && 6048e5 > Nd - Nb) {
					var Uk = (Nd - Nb) / 864e5;
					ei && ei[$p] != Uk && (ei[$p] = Uk, Eo("HT for Web free trail license will expire in " + Uk + " days, please apply for a new license!"))
				} else Nb >= Nd && Eo("HT for Web free trail license expired!"),
				ei && delete ei[$p]
			}
        }
        var Yn = {
            ms_ac: function(i, x) {
                for (var s = x.ms_ac,
                Y = 0; Y < s.length; Y++) Ro(i, s[Y])
            },
            ms_listener: function(y) {
                y.addListeners = function() {
                    for (var x = this,
                    d = 0; d < Rd.length; d++) x["handle_" + Rd[d]] && _q(Rd[d], x.getView(), x)
                },
                y.removeListeners = function() {
                    for (var w = this,
                    R = 0; R < Rd.length; R++) w["handle_" + Rd[R]] && rj(Rd[R], w.getView(), w)
                }
            },
            ms_fire: function(s) {
                s.mp = function(C, L, m) {
                    this.addPropertyChangeListener(C, L, m)
                },
                s.ump = function(i, p) {
                    this.removePropertyChangeListener(i, p)
                },
                s.fp = function(Z, t, U) {
                    return this.firePropertyChange(Z, t, U)
                },
                s.addPropertyChangeListener = function(J, R, w) {
                    var r = this;
                    r._62I || (r._62I = new Lf),
                    r._62I.add(J, R, w)
                },
                s.removePropertyChangeListener = function(g, i) {
                    this._62I.remove(g, i)
                },
                s.firePropertyChange = function(R, i, r) {
                    if (i === r) return ! 1;
                    var b = this,
                    B = {
                        property: R,
                        oldValue: i,
                        newValue: r,
                        data: b
                    };
                    return b._62I && b._62I.fire(B),
                    b.onPropertyChanged && b.onPropertyChanged(B),
                    !0
                }
            },
            ms_attr: function(n) {
                n.a = function(D, h) {
                    var _ = this;
                    if (2 === arguments.length) _.setAttr(D, h);
                    else {
                        if (!_l(D)) return _.getAttr(D);
                        for (var K in D) _.setAttr(K, D[K])
                    }
                    return _
                },
                n.getAttr = function(k) {
                    return this._attrObject ? this._attrObject[k] : V
                },
                n.setAttr = function(Q, S) {
                    var N = this;
                    N._attrObject || (N._attrObject = {});
                    var R = N._attrObject[Q];
                    S === V ? delete N._attrObject[Q] : N._attrObject[Q] = S,
                    N.fp && N.fp("a:" + Q, R, S) && N.onAttrChanged && N.onAttrChanged(Q, R, S)
                },
                n.getSerializableAttrs = function() {
                    var J, f = {};
                    for (J in this._attrObject) f[J] = 1;
                    return f
                }
            },
            ms_bnb: function(e) {
                e.getBodyColor = function(x) {
                    return x.s("body.color")
                },
                e.getBorderColor = function(c) {
                    return c.s("border.color")
                }
            },
            _51o: function(F) {
                F.mi = function(T, b, y) {
                    this.addInteractorListener(T, b, y)
                },
                F.umi = function(N, x) {
                    this.removeInteractorListener(N, x)
                },
                F.fi = function(R) {
                    this.fireInteractorEvent(R)
                },
                F.addInteractorListener = function(a, t, T) {
                    var i = this;
                    i._63I || (i._63I = new Lf),
                    i._63I.add(a, t, T)
                },
                F.removeInteractorListener = function(m, $) {
                    this._63I.remove(m, $)
                },
                F.fireInteractorEvent = function(f) {
                    this._63I && this._63I.fire(f)
                },
                F.setInteractors = function($) {
                    var s = this,
                    d = s._interactors;
                    d && d.each(function(K) {
                        K.tearDown()
                    }),
                    eb($) && ($ = new Lq($)),
                    s._interactors = $,
                    $ && $.each(function(E) {
                        E.setUp()
                    }),
                    s.fp("interactors", d, $),
                    s.invalidateSelection()
                },
                F.getInteractors = function() {
                    return this._interactors
                }
            },
            _49o: function(u) {
                u._44O = F,
                u._45O = F,
                u.addTopPainter = function(j) {
                    var F = this;
                    F._44O || (F._44O = new Lq),
                    F._44O.contains(j) || (F._44O.add(j), F.redraw && F.redraw())
                },
                u.removeTopPainter = function(h) {
                    var e = this;
                    e._44O && (e._44O.remove(h), e.redraw && e.redraw())
                },
                u.addBottomPainter = function(c) {
                    var J = this;
                    J._45O || (J._45O = new Lq),
                    J._45O.contains(c) || (J._45O.add(c), J.redraw && J.redraw())
                },
                u.removeBottomPainter = function(_) {
                    var i = this;
                    i._45O && (i._45O.remove(_), i.redraw && i.redraw())
                },
                u._93db = function(_, k) {
                    var O = this;
                    O._45O && O._45O.each(function(i) {
                        i.draw ? i.draw(_, k) : i.call(O, _, k)
                    })
                },
                u._92db = function(X, Y) {
                    var A = this;
                    A._44O && A._44O.each(function(v) {
                        v.draw ? v.draw(X, Y) : v.call(A, X, Y)
                    })
                }
            },
            ms_sm: function(N) {
                N.sm = function() {
                    return this.getSelectionModel()
                },
                N.setSelectableFunc = function(W) {
                    this.sm().setFilterFunc(W)
                },
                N.getSelectableFunc = function() {
                    return this.sm().getFilterFunc()
                },
                N.getSelectionModel = function() {
                    var e = this;
                    return e._3o ? e._3o: e.dm().sm()
                },
                N.isSelectionModelShared = function() {
                    return ! this._3o
                },
                N.setSelectionModelShared = function(W) {
                    var w = this,
                    J = !w._3o,
                    t = w._16o,
                    $ = w.dm();
                    J !== W && (w.invalidateSelection && w.invalidateSelection(), W ? ($.sm().ms(t, w), w._3o.ums(t, w), w._3o.dispose(), w._3o = F) : ($.sm().ums(t, w), w._3o = new tf($), w._3o.ms(t, w)), w.onSelectionModelSharedChanged(), w.fp("selectionModelShared", J, W))
                },
                N.onSelectionModelSharedChanged = function() {
                    var o = this;
                    o.redraw(),
                    o.invalidateSelection && o.invalidateSelection()
                },
                N.removeSelection = function() {
                    var l = this.dm(),
                    u = l.getHistoryManager();
                    u && u.beginInteraction(),
                    this.sm().toSelection().each(l.remove, l),
                    u && u.endInteraction()
                },
                N.selectAll = function() {
                    var R = this;
                    R.sm().ss(R.dm().toDatas(R.isVisible, R))
                },
                N.isSelected = function(r) {
                    return this.sm().co(r)
                },
                N.isSelectedById = function(X) {
                    var U = this.dm().getDataById(X);
                    return U ? this.isSelected(U) : !1
                },
                N.isSelectable = function(o) {
                    return this.sm().isSelectable(o)
                }
            },
            ms_tx: function(J) {
                J._64I = 0,
                J._65O = 0,
                J.isScrollable = function() {
                    return this.getWidth() < this._64I
                },
                J._40o = function() {
                    return this.isScrollable()
                },
                J.getLogicalPoint = function(A) {
                    return Kh(A, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                },
                J.tx = function(T) {
                    return T === V ? this.getTranslateX() : (this.setTranslateX(T), void 0)
                },
                J.getTranslateX = function() {
                    return this._65O
                },
                J.setTranslateX = function(w) {
                    var J = this,
                    p = J.getWidth() - J._64I;
                    p > w && (w = p),
                    w > 0 && (w = 0),
                    w = Q(w);
                    var S = J._65O;
                    J._65O = w,
                    J.fp(Se, S, w)
                }
            },
            ms_ty: function(J) {
                J._23Q = 0,
                J._66O = 0,
                J._41o = function() {
                    return this.getHeight() < this._23Q
                },
                J.getLogicalPoint = function(a) {
                    return Kh(a, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                },
                J.ty = function(M) {
                    return M === V ? this.getTranslateY() : (this.setTranslateY(M), void 0)
                },
                J.getTranslateY = function() {
                    return this._66O
                },
                J.setTranslateY = function(I) {
                    var k = this,
                    Z = k.getHeight() - k._23Q;
                    Z > I && (I = Z),
                    I > 0 && (I = 0),
                    I = Q(I);
                    var f = k._66O;
                    k._66O = I,
                    k.fp(_d, f, I)
                }
            },
            ms_txy: function(I) {
                I._65O = 0,
                I._66O = 0,
                I.tx = function(j) {
                    return j === V ? this.getTranslateX() : (this.setTranslateX(j), void 0)
                },
                I.ty = function(B) {
                    return B === V ? this.getTranslateY() : (this.setTranslateY(B), void 0)
                },
                I.onTranslateEnded = function() {},
                I.setTranslate = function(W, P, U) {
                    var L = this;
                    if (U = wq(U)) {
                        L._65I && L._65I.stop(!0);
                        var Q = L.tx(),
                        F = L.ty();
                        U.action = function(l) {
                            L.setTranslate(Q + (W - Q) * l, F + (P - F) * l)
                        },
                        U._37o = function() {
                            delete L._66I,
                            delete L._65I,
                            L.onTranslateEnded()
                        },
                        L._66I = 1,
                        L._65I = Cm(U)
                    } else L.tx(W),
                    L.ty(P)
                },
                I.getTranslateX = function() {
                    return this._65O
                },
                I.setTranslateX = function(D) {
                    var k = this;
                    D = k.adjustTranslateX(D);
                    var w = k._65O;
                    k._65O = D,
                    k.fp(Se, w, D)
                },
                I.getTranslateY = function() {
                    return this._66O
                },
                I.setTranslateY = function(h) {
                    var G = this;
                    h = G.adjustTranslateY(h);
                    var M = G._66O;
                    G._66O = h,
                    G.fp(_d, M, h)
                },
                I.adjustTranslateX = function(p) {
                    return Q(p)
                },
                I.adjustTranslateY = function(Y) {
                    return Q(Y)
                },
                I.translate = function(E, g, G) {
                    this.setTranslate(this.tx() + E, this.ty() + g, G)
                },
                I.getLogicalPoint = function(M) {
                    var T = this;
                    return Kh(M, this._canvas || T._view, T.tx(), T.ty())
                }
            },
            ms_dm: function(H) {
                H.dm = function(s) {
                    return s ? (this.setDataModel(s), void 0) : this.getDataModel()
                },
                H.getDataModel = function() {
                    return this._dataModel
                }
            },
            ms_lp: function(n) {
                n.lp = function(q) {
                    return this.getLogicalPoint(q)
                }
            },
            ms_v: function(d) {
                d._disabled = !1,
                d.setDisabled = function(s, K) {
                    var j = this,
                    Y = j._disabled;
                    Y !== s && (Y && (Gq(j._63O), delete j._63O), s && (Bf(j._view, j._63O = he(K)), j.iv()), j._disabled = s, j.fp("disabled", Y, s))
                },
                d.isDisabled = function() {
                    return this._disabled
                },
                d.getView = function() {
                    return this._view
                },
                d.addToDOM = function() {
                    var Z = this,
                    t = Z.getView(),
                    s = t.style;
                    E.body.appendChild(t),
                    s.left = "0",
                    s.right = "0",
                    s.top = "0",
                    s.bottom = "0",
                    z.addEventListener("resize",
                    function() {
                        Z.iv()
                    },
                    !1)
                },
                d.getWidth = function() {
                    return this._view.clientWidth
                },
                d.getHeight = function() {
                    return this._view.clientHeight
                },
                d.setWidth = function(s) {
                    var W = this;
                    W._view.style.width = s + mb,
                    W.iv(),
                    W.fp && W.fp($o, F, s)
                },
                d.setHeight = function(m) {
                    var C = this;
                    C._view.style.height = m + mb,
                    C.iv(),
                    C.fp && C.fp($f, F, m)
                },
                d.setFocus = function(I) {
                    var P = this,
                    W = P._currentEditor;
                    return I && W && (W.getView && (W = W.getView()), W.contains(I.target)) ? !1 : (ze(P._view), P.endEditing && P.endEditing(), P._41O("focus"), !0)
                },
                d.iv = function(j) {
                    this.invalidate(j)
                },
                d.invalidate = function(h) {
                    var V = this;
                    V._68I || (V._68I = 1, jp(V.validate, V, F, h), V.onInvalidated && V.onInvalidated(), V._41O("invalidate"))
                },
                d.validate = function() {
                    var j = this,
                    Y = j._view;
                    if (j._68I && (delete j._68I, Y.parentNode)) if (0 === Y.offsetWidth && 0 === Y.offsetHeight && j._67I !== F) j._67I === V && (j._67I = C.reinvalidateCount),
                    j._67I > 0 ? j._67I--:j._67I = F,
                    j.iv();
                    else {
                        j._41O("beginValidate"),
                        j.validateImpl(),
                        j.onValidated && j.onValidated(),
                        j._41O("validate");
                        var x = j._63O;
                        x && (Y.lastChild !== x && (Gq(x), Bf(Y, x)), Sn(x, 0, 0, j.getWidth(), j.getHeight())),
                        Ld(j)
                    }
                },
                d.layout = function(O, s, P, E) {
                    1 === arguments.length ? Sn(this, O) : Sn(this, O, s, P, E)
                },
                d.addViewListener = function(r, a, P) {
                    var D = this;
                    D._67O || (D._67O = new Lf),
                    D._67O.add(r, a, P)
                },
                d.removeViewListener = function(c, u) {
                    this._67O.remove(c, u)
                },
                d._41O = function(m) {
                    var q = this;
                    q._67O && (Cl(m) && (m = {
                        kind: m
                    }), q._67O.fire(m)),
                    C.viewListener && C.viewListener(q, m)
                }
            },
            ms_tip: function(R) {
                R.enableToolTip = function() {
                    var V = this;
                    a || V._13o || (V._13o = function(j) {
                        var X = V.getToolTip(j);
                        X != F ? C.toolTipContinual && C.isToolTipShowing() ? ff(j, X) : (of(), lp = {
                            timeout: u(Fo, xe),
                            e: j,
                            info: X
                        }) : of()
                    },
                    V.getView().addEventListener(zp, V._13o, !1))
                },
                R.disableToolTip = function() {
                    var E = this;
                    E._13o && (E.getView().removeEventListener(zp, E._13o, !1), delete E._13o)
                },
                R.getToolTip = function(g) {
                    var J = this;
                    if (J.getDataAt) {
                        var W = J.getDataAt(g);
                        return W ? W.getToolTip() : F
                    }
                    return J.getValue ? mj(J.getValue()) : void 0
                }
            },
            _52o: function(c) {
                c._zoom = 1,
                c._29I = mk,
                c.zoomIn = function(_, Y) {
                    this.setZoom(this._zoom * ef, _, Y)
                },
                c.zoomOut = function(L, r) {
                    this.setZoom(this._zoom / ef, L, r)
                },
                c.zoomReset = function(q, d) {
                    this.setZoom(1, q, d)
                },
                c.scrollZoomIn = function(G) {
                    this.setZoom(this._zoom * Hg, F, G)
                },
                c.scrollZoomOut = function(p) {
                    this.setZoom(this._zoom / Hg, F, p)
                },
                c.pinchZoomIn = function(j) {
                    this.setZoom(this._zoom * Gc, F, j)
                },
                c.pinchZoomOut = function(G) {
                    this.setZoom(this._zoom / Gc, F, G)
                },
                c.adjustZoom = function(t) {
                    return mh > t ? mh: t > vi ? vi: t
                },
                c.getZoom = function() {
                    return this._zoom
                },
                c.setZoom = function(x, t, A) {
                    var X = this;
                    if (t = wq(t)) {
                        X._14o && X._14o.stop(!0);
                        var L = X._zoom;
                        t.action = function(k) {
                            X._96O(L + (x - L) * k, A)
                        },
                        t._37o = function() {
                            delete X._zooming,
                            delete X._14o,
                            X.onZoomEnded()
                        },
                        X._zooming = 1,
                        X._14o = Cm(t)
                    } else X._96O(x, A)
                },
                c._96O = function(S, V) {
                    var n = this;
                    if (S = n.adjustZoom(S), S !== n._zoom) {
                        n.validate();
                        var f = n._29I,
                        B = n._zoom;
                        0 !== f.width && 0 !== f.height && (V = V ? V: {
                            x: f.x + f.width / 2,
                            y: f.y + f.height / 2
                        },
                        n.tx((V.x - f.x) * B - V.x * S), n.ty((V.y - f.y) * B - V.y * S)),
                        n._zoom = S,
                        n.fp("zoom", B, S)
                    }
                }
            }
        };
        vc(C, {
            baseZIndex: V,
            isTouchable: a,
            devicePixelRatio: z.devicePixelRatio ? z.devicePixelRatio: 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: _.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function(O) {
                return O * O
            },
            labelColor: yc,
            labelSelectColor: Ef,
            labelFont: (a ? "15": "12") + "px arial, sans-serif",
            widgetIndent: a ? 30 : 20,
            widgetRowHeight: a ? 30 : 20,
            widgetHeaderHeight: a ? 32 : 22,
            widgetTitleHeight: a ? 34 : 24,
            scrollBarColor: gc,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: a ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            intersectionLineRect: er,
            intersectionLineLine: Uq,
            getVersion: function() {
                return "5.3"
            },
            setCompType: function(f, r) {
                df[f] = r
            },
            getCompType: function(m) {
                return df[m]
            },
            numberListener: function() {
                var y = {
                    46 : 1,
                    8 : 1,
                    9 : 1,
                    27 : 1,
                    13 : 1,
                    109 : 1,
                    110 : 1,
                    189 : 1,
                    190 : 1
                };
                return function(l) {
                    var O = l.keyCode;
                    y[O] || 65 === O && C.isCtrlDown(l) || O >= 35 && 39 >= O || (l.shiftKey || 48 > O || O > 57) && (96 > O || O > 105) && l.preventDefault()
                }
            } (),
            preventDefault: function(G) {
                var j = G.target.tagName; ("DIV" === j || "CANVAS" === j) && (G.preventDefault(), G.preventManipulation && G.preventManipulation())
            },
            getWindowInfo: function() {
                var J = E.documentElement,
                y = J && (J.scrollLeft || J.scrollTop) ? J: E.body;
                return {
                    target: y,
                    left: y.scrollLeft,
                    top: y.scrollTop,
                    width: z.innerWidth || y.clientWidth,
                    height: z.innerHeight || y.clientHeight
                }
            },
            isDragging: function() {
                return !! Nf
            },
            isLeftButton: function(J) {
                return a ? !0 : 0 === J.button
            },
            getTouchCount: function(Y) {
                return a ? Y.touches.length: 1
            },
            isDoubleClick: function() {
                var n = new Date,
                X = F,
                H = new Date,
                f = F;
                return function(R) {
                    if (rs = new Date, Oe = rs.getTime(), a) {
                        var o = R.type,
                        s = o + "_isDoubleClick";
                        if (R[s] === V) {
                            var h = ce(R);
                            "touchstart" === o ? (R[s] = X && ep(X, h) < 20 && Oe - n.getTime() < 500, n = rs, X = h) : (R[s] = f && ep(f, h) < 20 && Oe - H.getTime() < 500, H = rs, f = h)
                        }
                        return R[s]
                    }
                    return 2 === R.detail
                }
            } (),
            isShiftDown: function(P) {
                return P ? P.shiftKey: Eq["16"]
            },
            isCtrlDown: function(e) {
                return e ? j ? e.metaKey: e.ctrlKey: j ? Eq["91"] : Eq["17"]
            },
            getClientPoint: function(A) {
                return a && (A = dr(A)),
                {
                    x: A.clientX,
                    y: A.clientY
                }
            },
            getPagePoint: function(N) {
                return a && (N = dr(N)),
                {
                    x: N.pageX,
                    y: N.pageY
                }
            },
            createObject: function(K, f) {
                var D = new K;
                for (var U in f) {
                    var m = es(U),
                    g = f[U];
                    D[m] ? (D[m](g), "setToolTip" === m && D.enableToolTip && D.enableToolTip()) : D[U] = g
                }
                return D
            },
            setImage: function(u, L, J, I) {
                var D = arguments.length;
                4 === D ? $d(u, I, L, J) : 2 === D ? Cl(L) ? $d(u, L) : sf[u] = L: 1 === D && $d(u, u)
            },
            getImage: function(a, p) {
                var y;
                if (a == F) return F;
                if (_l(a) ? y = a: (y = sf[a], a && y === V && (lj && lj[a] || $d(a, a))), p && y && y.tagName) {
                    y.colors || (y.colors = {});
                    var E = y.colors[p];
                    return E || (E = Wi(y, sj(p), y.width, y.height), y.colors[p] = E),
                    E
                }
                return y
            },
            getId: function() {
                var j = 1;
                return function() {
                    return++j
                }
            } (),
            callLater: function(r, I, W, Z) {
                var P = function() {
                    r.apply(I, W)
                };
                return Z ? u(P, Z) : z.requestAnimationFrame(P)
            },
            asyncEach: function(T, B, A) {
                "function" != typeof A && (A = Function.prototype);
                var d = new Array(T.length),
                m = 0,
                N = !1;
                T.forEach(function(I, s) {
                    B(I,
                    function(v, H) {
                        return N ? void 0 : v ? (N = !0, A(null)) : (d[s] = H, m++, m === T.length ? A(d) : void 0)
                    })
                })
            },
            xhrLoad: function(b, G, V) {
                var Y = !1;
                eb(b) || (Y = !0, b = [b]),
                b.length;
                var A = V && V.sync;
                th(b,
                function(a, H) {
                    var M = new XMLHttpRequest;
                    M.overrideMimeType("text/plain"),
                    M.open("GET", a, !A),
                    M.onload = function(p) {
                        200 === this.status || 0 === this.status ? H(null, p.target.response) : H(!0)
                    },
                    M.onerror = function() {
                        H(!0)
                    },
                    M.send(null)
                },
                function(J) {
                    "function" == typeof G && G(Y && J ? J[0] : J)
                })
            },
            clone: function(h) {
                if (!h) return F;
                if (eb(h)) return h.slice(0);
                if (_l(h)) {
                    var c, $ = {};
                    for (c in h) $[c] = h[c];
                    return $
                }
                return h
            },
            handleImageLoaded: function() {},
            handleUnfoundImage: function() {},
            sortFunc: function(m, Q) {
                if (m === Q) return 0;
                if (m == F && Q != F) return 1;
                if (m != F && Q == F) return - 1;
                if (m == F && Q == F) return 0;
                var e, g = typeof m,
                B = typeof Q;
                return g === ip && B === ip ? e = m.localeCompare(Q) : g === xq && B === xq && (e = m - Q),
                e === V && (e = ("" + m).localeCompare("" + Q)),
                e > 0 ? 1 : 0 > e ? -1 : 0
            },
            getClassMap: function() {
                return cc
            },
            getClass: function(b) {
                if (Cl(b)) {
                    var $, t = cc[b];
                    if (!t) {
                        $ = b.split("."),
                        t = z;
                        for (var l = 0; l < $.length; l++) t = t[$[l]];
                        cc[b] = t
                    }
                    return t
                }
                return b
            },
            def: function(t, R, w) {
                var h, m, r, X = function() {};
                if (X.prototype = R.prototype, h = new X, Cl(t)) {
                    if (cc[t]) throw "'" + t + "' alreay defined";
                    r = cf(t),
                    h.getClassName = function() {
                        return t
                    }
                } else r = t;
                if (h.constructor = r, h.getClass = function() {
                    return r
                },
                h.getSuperClass = function() {
                    return R
                },
                w) for (m in w) Yn[m] && Yn.hasOwnProperty(m) ? Yn[m](h, w) : h[m] = w[m];
                r.prototype = h,
                r.superClass = R.prototype
            },
            startAnim: function() {
                var l = function(Y) {
                    Y.duration && (Y.startTime = db()),
                    Y.timeId = jp(Y.tick, F, F, Y.interval)
                };
                return function(W) {
                    return W = qj(W),
                    W.easing = W.easing || C.animEasing,
                    W.duration || W.frames || (W.duration = C.animDuration),
                    W.t = 0,
                    W.duration ? W.interval = 0 : (W.frame = 0, W.interval = W.interval || 10),
                    W.tick = function() {
                        if (W.duration) {
                            var E = (db() - W.startTime) / W.duration;
                            E > 1 && (E = 1),
                            W.t = E,
                            W.action(W.easing(E), E),
                            1 === E ? W.stop() : W._isPaused || (W.timeId = jp(W.tick))
                        } else W.frame++,
                        E = W.t = W.frame / W.frames,
                        W.action(W.easing(E), E),
                        W.frame < W.frames ? W._isPaused || (W.timeId = jp(W.tick, F, F, W.interval)) : W.stop()
                    },
                    W.resume = function() {
                        W._isPaused && (delete W._isPaused, W.duration ? W.t < 1 && (W.startTime = db() - W.duration * W.t, W.timeId = jp(W.tick)) : W.frame < W.frames && (W.timeId = jp(W.tick, F, F, W.interval)))
                    },
                    W.pause = function() {
                        W._isPaused = !0
                    },
                    W.stop = function(I) {
                        W.isRunning() && (W.duration ? W.t < 1 && I && (W.t = 1, W.action(W.easing(1))) : W.frame < W.frames && I && (W.frame = W.frames, W.action(W.easing(1))), W._37o && W._37o(), W.finishFunc && W.finishFunc(), cr(W.timeId, !W.duration), delete W.timeId)
                    },
                    W.isRunning = function() {
                        return W.timeId != F
                    },
                    W.delay ? jp(l, F, [W], W.delay) : l(W),
                    W
                }
            } (),
            getTextSize: function() {
                var S = {},
                M = E ? Jr().getContext("2d") : F;
                return function(n, R) {
                    M.font = n ? n: El;
                    var H = S[M.font];
                    return H || (H = 2 * M.measureText("e").width + 4, S[M.font] = H),
                    {
                        width: M.measureText(R).width + 4,
                        height: H
                    }
                }
            } (),
            drawText: function(X, m, E, z, s, L, A, u, C, o) {
                if (m != F) {
                    var Q = Te(E, m),
                    M = {};
                    M.y = o && o !== Jh ? o === aq ? L + Q.height / 2 : L + u - Q.height / 2 : L + u / 2,
                    M.x = C && C !== Tb ? C === um ? s + A - Q.width / 2 : s + A / 2 : s + Q.width / 2,
                    _j(X, m, M, E, z)
                }
            },
            getDistance: function(Y, i) {
                var a = Y.length;
                return i ? 3 === a ? k(c(Y[0] - i[0]) + c(Y[1] - i[1]) + c(Y[2] - i[2])) : 2 === a ? k(c(Y[0] - i[0]) + c(Y[1] - i[1])) : Y.z === V ? k(c(i.x - Y.x) + c(i.y - Y.y)) : k(c(i.x - Y.x) + c(i.y - Y.y) + c(i.z - Y.z)) : 3 === a ? k(c(Y[0]) + c(Y[1]) + c(Y[2])) : 2 === a ? k(c(Y[0]) + c(Y[1])) : void 0
            },
            brighter: function(c, Z) {
                return Zk(c, Z ? Z: 40)
            },
            darker: function(s, x) {
                return Zk(s, x ? x: -40)
            },
            unionPoint: function(E, j) {
                if (!E) return F;
                if (2 === arguments.length) return E && j ? {
                    x: s(E.x, j.x),
                    y: s(E.y, j.y),
                    width: R(E.x - j.x),
                    height: R(E.y - j.y)
                }: F;
                var H = E;
                if (H._as && (H = H._as), H.length === V) return F;
                var B = H.length;
                if (0 >= B) return F;
                for (var D = 1,
                z = H[0], d = {
                    x: z.x,
                    y: z.y,
                    width: 0,
                    height: 0
                }; B > D; D++) {
                    z = H[D];
                    var L = s(d.x, z.x),
                    A = h(d.x + d.width, z.x),
                    o = s(d.y, z.y),
                    y = h(d.y + d.height, z.y);
                    d.x = L,
                    d.y = o,
                    d.width = A - L,
                    d.height = y - o
                }
                return d
            },
            unionRect: function(I, a) {
                if (I && !a) return qj(I);
                if (!I && a) return qj(a);
                if (I && a) {
                    var d = {
                        x: s(I.x, a.x),
                        y: s(I.y, a.y)
                    };
                    return d.width = h(I.x + I.width, a.x + a.width) - d.x,
                    d.height = h(I.y + I.height, a.y + a.height) - d.y,
                    d
                }
                return F
            },
            containsPoint: function(N, H) {
                return ! (!N || H.x < N.x || H.y < N.y || H.x > N.x + N.width || H.y > N.y + N.height)
            },
            containsRect: function(f, E) {
                if (!f || !E) return ! 1;
                var T = E.x,
                B = E.y,
                S = E.width,
                Y = E.height,
                r = f.width,
                p = f.height;
                if (0 > (r | p | S | Y)) return ! 1;
                var R = f.x,
                L = f.y;
                if (R > T || L > B) return ! 1;
                if (r += R, S += T, T >= S) {
                    if (r >= R || S > r) return ! 1
                } else if (r >= R && S > r) return ! 1;
                if (p += L, Y += B, B >= Y) {
                    if (p >= L || Y > p) return ! 1
                } else if (p >= L && Y > p) return ! 1;
                return ! 0
            },
            intersectsRect: function(b, g) {
                if (!b || !g) return ! 1;
                var z = g.width,
                H = g.height,
                I = b.width,
                s = b.height;
                if (0 >= I || 0 >= s || 0 >= z || 0 >= H) return ! 1;
                var G = g.x,
                F = g.y,
                _ = b.x,
                k = b.y;
                return I += _,
                s += k,
                z += G,
                H += F,
                I > G && s > F && z > _ && H > k
            },
            intersection: function(g, T) {
                if (!g || !T) return F;
                var O = T.x,
                U = T.y,
                n = g.x,
                J = g.y,
                u = O,
                w = U,
                G = n,
                I = J;
                return u += T.width,
                w += T.height,
                G += g.width,
                I += g.height,
                n > O && (O = n),
                J > U && (U = J),
                u > G && (u = G),
                w > I && (w = I),
                u -= O,
                w -= U,
                0 >= u || 0 >= w ? F: {
                    x: O,
                    y: U,
                    width: u,
                    height: w
                }
            },
            grow: function(s, R) {
                s.x -= R,
                s.y -= R,
                s.width = s.width + 2 * R,
                s.height = s.height + 2 * R
            },
            getLogicalPoint: function(K, t, v, g, W, b) {
                var $ = t.getBoundingClientRect();
                return K = a ? dr(K) : K,
                {
                    x: (K.clientX - $.left + t.scrollLeft - (v || 0)) / (W || 1),
                    y: (K.clientY - $.top + t.scrollTop - (g || 0)) / (b || 1)
                }
            },
            removeHTML: function() {
                var j;
                return function(d) {
                    return d && d.parentNode ? j === d ? !0 : (j = d, d.parentNode.removeChild(d), j = F, !0) : !1
                }
            } (),
            getToolTipDiv: function() {
                if (!Ue) {
                    Ue = hs(),
                    cg = hs();
                    var n = Ue.style;
                    C.baseZIndex != F && (n.zIndex = q(C.baseZIndex) + 3 + ""),
                    n.whiteSpace = "nowrap",
                    n.color = C.toolTipLabelColor,
                    n.background = C.toolTipBackground,
                    n.font = C.toolTipLabelFont,
                    n.padding = "5px",
                    n.boxShadow = "0px 0px 3px " + C.toolTipShadowColor
                }
                return Ue
            },
            isToolTipShowing: function() {
                return Ue && Ue.parentNode ? !0 : cg && cg.parentNode ? !0 : !1
            },
            hideToolTip: function() {
                Gq(Ue),
                Gq(cg),
                Xi()
            },
            showToolTip: function(X, V) {
                if (!X || V == F) return of(),
                void 0;
                C.getToolTipDiv();
                var N, p;
                if (V.html ? (V = V.html, N = cg, Gq(Ue)) : (N = Ue, Gq(cg)), p = N.style, N.innerHTML = V, N.parentNode || Bf(E.body, N), X.target) {
                    X = $g(X);
                    var k = Me(),
                    c = X.x,
                    Q = X.y,
                    n = a ? 60 : 12;
                    if (a) {
                        var t = N.getBoundingClientRect();
                        p.left = c - t.width / 2 + mb,
                        p.top = Q - t.height - n < k.top ? Q + n + mb: Q - t.height - n + mb
                    } else {
                        p.left = c + n + mb,
                        p.top = Q + n + mb;
                        var t = N.getBoundingClientRect();
                        t.left + t.width > k.width && (p.left = c - n - t.width + mb),
                        t.top + t.height > k.height && (p.top = Q - n - t.height + mb),
                        t.left < 0 && (p.left = c + n + mb),
                        t.top < 0 && (p.top = Q + n + mb)
                    }
                } else p.left = X.x + mb,
                p.top = X.y + mb;
                Xi()
            },
            startDragging: function(N, $) {
                N !== Nf && (Nf ? a ? Nf.handleWindowTouchEnd($) : Nf.handleWindowMouseUp($) : a ? (z.addEventListener(Ob, fc, !1), z.addEventListener(Zd, so, !1)) : (z.addEventListener(zp, Vp, !1), z.addEventListener(Fr, Co, !1)), Nf = N)
            },
            getImageMap: function() {
                return sf
            },
            toBoundaries: function(y, O, X, B) {
                var u = [];
                return Dp(y, O, X, B).forEach(function(z) {
                    var y = [];
                    z.forEach(function(f) {
                        y.push(f.x, f.y)
                    }),
                    u.push(y)
                }),
                u
            },
            getCurrentKeyCodeMap: function() {
                return Eq
            },
            drawCenterImage: function(u, j, y, G, m, w, I) {
                var F = Dr(j, m),
                H = Ll(j, m);
                zd(u, j, Q(y - F / 2), Q(G - H / 2), F, H, m, w, I)
            },
            drawStretchImage: function(D, h, l, S, v, P, M, H, Y, u) {
                var $, C = Dr(h, H),
                r = Ll(h, H);
                "uniform" === l ? ($ = s(P / C, M / r), C *= $, r *= $, S += Q((P - C) / 2), v += Q((M - r) / 2), P = C, M = r) : l === Sh && ((C > P || r > M) && ($ = s(P / C, M / r), C *= $, r *= $), S += Q((P - C) / 2), v += Q((M - r) / 2), P = C, M = r),
                zd(D, h, S, v, P, M, H, Y, u)
            },
            toCanvas: function(K, T, b, u, X, U, o) {
                K = oq(K, o),
                T = T || Dr(K, X),
                b = b || Ll(K, X);
                var i = Jr();
                Kc(i, T, b, 1);
                var V = oo(i);
                return qg(V, K, u, 0, 0, T, b, X, U, o),
                V.restore(),
                i
            },
            createElement: function(T, R, f, $) {
                var Y = E.createElement(T);
                return rd(Y, R || _.widgetBorder, 2),
                Y.style.font = f ? f: El,
                $ != F && (Y.value = $),
                Y
            },
            containedInView: function(e, V) {
                var o = Ee(V).getBoundingClientRect();
                return je({
                    x: o.left,
                    y: o.top,
                    width: o.width,
                    height: o.height
                },
                ce(e))
            },
            isIsolating: function() {
                return rl
            },
            setIsolating: function(h) {
                rl = h
            },
            getMSMap: function() {
                return Yn
            },
            stringify: function(r, D) {
                var g = Date.prototype.toJSON;
                Date.prototype.toJSON = function() {
                    return "__ht__date" + this.getTime()
                };
                var A = JSON.stringify(r,
                function(o, U) {
                    return "function" == typeof U ? "__ht__" + U.toString() : U
                },
                D == F ? 2 : D);
                return Date.prototype.toJSON = g,
                A
            },
            parse: function(a) {
                return JSON.parse(a,
                function(Z, u) {
                    if (Cl(u)) {
                        if ("__ht__function" == u.substr(0, 14)) {
                            var C = u.indexOf("{") + 1,
                            y = u.lastIndexOf("}"),
                            b = u.indexOf("(") + 1,
                            a = u.indexOf(")");
                            return new Function(u.substring(b, a), u.substring(C, y))
                        }
                        if ("__ht__date" == u.substr(0, 10)) return new Date(q(u.substr(10)))
                    }
                    return u
                })
            },
            toColorData: cd,
            setCanvas: Kc,
            createDiv: hs,
            createView: Kp,
            createCanvas: Jr,
            initContext: oo,
            layout: Sn,
            getPosition: jc
        },
        !0),
        vc(v, {
            autoAdjustIndex: 1,
            adjustChildrenToTop: 1,
            autoHideScrollBar: 1,
            autoUpdate: 1,
            firstPersonMode: 1,
            ortho: 1,
            strict: 1,
            stickToRight: 1,
            instant: 1,
            closePath: 1,
            hierarchical: 1,
            doubleClickToToggle: 1
        },
        !0);
        var xr = C.disabledOpacity,
        xe = C.toolTipDelay,
        Wj = C.devicePixelRatio,
        Tl = C.autoMakeVisible,
        xi = C.autoHideScrollBar,
        wh = C.imageGradient,
        ff = C.showToolTip,
        of = C.hideToolTip,
        cl = C.dashPattern,
        ol = C.lineCap,
        qc = C.lineJoin,
        Wp = C.labelColor,
        Cf = C.labelSelectColor,
        El = C.labelFont,
        Tk = C.widgetIndent,
        ks = C.widgetRowHeight,
        Zq = C.widgetHeaderHeight,
        nl = C.widgetTitleHeight,
        kn = C.scrollBarColor,
        Ki = C.scrollBarSize,
        gd = C.scrollBarTimeout,
        Xf = C.scrollBarMinLength,
        _f = C.scrollBarInteractiveSize,
        ef = C.zoomIncrement,
        Hg = C.scrollZoomIncrement,
        Gc = C.pinchZoomIncrement,
        vi = C.zoomMax,
        mh = C.zoomMin,
        on = C.createObject,
        pm = C.preventDefault,
        Td = C.setImage,
        oq = C.getImage,
        Cs = C.drawCenterImage,
        qg = C.drawStretchImage,
        js = C.getId,
        jp = C.callLater,
        th = C.asyncEach,
        $q = (C.xhrLoad, C.sortFunc),
        qj = C.clone,
        cf = C.getClass,
        Cm = C.startAnim,
        fi = C.brighter,
        rh = C.darker,
        wb = C.drawText,
        Te = C.getTextSize,
        oi = C.isLeftButton,
        se = C.getTouchCount,
        Rr = C.isDoubleClick,
        Ei = C.isShiftDown,
        ui = C.isCtrlDown,
        ce = C.getClientPoint,
        $g = C.getPagePoint,
        ep = C.getDistance,
        Hd = C.unionPoint,
        _o = C.unionRect,
        je = C.containsPoint,
        po = C.containsRect,
        Ii = C.intersectsRect,
        Vh = C.intersection,
        Me = C.getWindowInfo,
        tq = C.grow,
        Kh = C.getLogicalPoint,
        fk = C.startDragging,
        Gq = C.removeHTML,
        Jk = C.createElement,
        Oq = C.segmentResolution,
        Yr = C.shapeResolution,
        Qm = C.shapeSide,
        eg = C.def,
        uh = function(D, n, S) {
            eg(K + "." + D, n, S)
        },
        Ye = function(D, K) {
            D.childNodes.forEach(function(p) {
                K(p),
                Ye(p, K)
            })
        };
        vc(C, {
            toolTipLabelColor: Wp,
            toolTipLabelFont: El,
            toolTipBackground: _.toolTipBackground,
            toolTipShadowColor: gc,
            setDevicePixelRatio: function(b) {
                Wj = C.devicePixelRatio = "number" == typeof b ? b: z.devicePixelRatio,
                Ye(E.body,
                function(W) {
                    var u = W._ht;
                    u && u._canvas && (Kc(u._canvas, u.getWidth(), u.getHeight()), u.redraw ? u.redraw() : u.iv())
                })
            }
        },
        !0);
        var Un = 1e-6,
        Kn = "undefined" != typeof Uint16Array ? Uint16Array: Array,
        zl = "undefined" != typeof Float32Array ? Float32Array: Array,
        Ge = function(H, o, q) {
            var V = [H[0] - o[0], H[1] - o[1], H[2] - o[2]];
            if (q) {
                var i = ep(V);
                i > 0 && (V[0] /= i, V[1] /= i, V[2] /= i)
            }
            return V
        },
        ck = function(J) {
            return [ - J[0], -J[1], -J[2]]
        },
        Xd = function(Q, q) {
            return 3 === Q.length ? Q[0] * q[0] + Q[1] * q[1] + Q[2] * q[2] : Q[0] * q[0] + Q[1] * q[1]
        },
        Vi = function() {
            var c = new zl(16);
            return c[0] = 1,
            c[1] = 0,
            c[2] = 0,
            c[3] = 0,
            c[4] = 0,
            c[5] = 1,
            c[6] = 0,
            c[7] = 0,
            c[8] = 0,
            c[9] = 0,
            c[10] = 1,
            c[11] = 0,
            c[12] = 0,
            c[13] = 0,
            c[14] = 0,
            c[15] = 1,
            c
        },
        Je = Vi(),
        _m = function(K) {
            var h = new zl(16);
            return h[0] = K[0],
            h[1] = K[1],
            h[2] = K[2],
            h[3] = K[3],
            h[4] = K[4],
            h[5] = K[5],
            h[6] = K[6],
            h[7] = K[7],
            h[8] = K[8],
            h[9] = K[9],
            h[10] = K[10],
            h[11] = K[11],
            h[12] = K[12],
            h[13] = K[13],
            h[14] = K[14],
            h[15] = K[15],
            h
        },
        oh = function(h, y) {
            return h[0] = y[0],
            h[1] = y[1],
            h[2] = y[2],
            h[3] = y[3],
            h[4] = y[4],
            h[5] = y[5],
            h[6] = y[6],
            h[7] = y[7],
            h[8] = y[8],
            h[9] = y[9],
            h[10] = y[10],
            h[11] = y[11],
            h[12] = y[12],
            h[13] = y[13],
            h[14] = y[14],
            h[15] = y[15],
            h
        },
        ng = function(Y) {
            return Y[0] = 1,
            Y[1] = 0,
            Y[2] = 0,
            Y[3] = 0,
            Y[4] = 0,
            Y[5] = 1,
            Y[6] = 0,
            Y[7] = 0,
            Y[8] = 0,
            Y[9] = 0,
            Y[10] = 1,
            Y[11] = 0,
            Y[12] = 0,
            Y[13] = 0,
            Y[14] = 0,
            Y[15] = 1,
            Y
        },
        Uo = function(m, X) {
            var n = m[0],
            Z = m[1],
            z = m[2];
            return m[0] = X[0] * n + X[4] * Z + X[8] * z + X[12],
            m[1] = X[1] * n + X[5] * Z + X[9] * z + X[13],
            m[2] = X[2] * n + X[6] * Z + X[10] * z + X[14],
            m
        },
        wp = function(x, K) {
            var T = x[0],
            R = x[1],
            S = x[2],
            M = x[3];
            return x[0] = K[0] * T + K[4] * R + K[8] * S + K[12] * M,
            x[1] = K[1] * T + K[5] * R + K[9] * S + K[13] * M,
            x[2] = K[2] * T + K[6] * R + K[10] * S + K[14] * M,
            x[3] = K[3] * T + K[7] * R + K[11] * S + K[15] * M,
            x
        },
        wm = function() {
            var _, b, s, g, R = ms(tp[1] + tp[7]),
            N = ms(tp[0] + tp[3] - tp[10]),
            f = ms(tp[8] + 2),
            H = function() {
                return b = s.charAt(_),
                _ += 1,
                b
            },
            m = function() {
                var K = "";
                if (b === f) for (; H();) {
                    if (b === f) return H(),
                    K;
                    K += b
                } else H()
            },
            T = function() {
                for (; b && " " >= b;) H()
            },
            U = function() {
                var o, x = {};
                if (b === R) {
                    if (H(), T(), b === N) return H(),
                    x;
                    for (; b;) {
                        if (o = m(), T(), H(), x[o] = g(), T(), b === N) return H(),
                        x;
                        H(),
                        T()
                    }
                }
            };
            return g = function() {
                switch (T(), b) {
                case R:
                    return U();
                default:
                    return m()
                }
            },
            function(K) {
                if (n = {},
                K) {
                    var J;
                    if (s = K, _ = 0, b = " ", J = g(), T(), !b) return J
                }
            }
        } (),
        Bq = function(n, S) {
            if (S) {
                var P = g(S),
                G = i(S),
                L = n[4],
                y = n[5],
                O = n[6],
                v = n[7],
                k = n[8],
                z = n[9],
                N = n[10],
                M = n[11];
                n[4] = L * G + k * P,
                n[5] = y * G + z * P,
                n[6] = O * G + N * P,
                n[7] = v * G + M * P,
                n[8] = k * G - L * P,
                n[9] = z * G - y * P,
                n[10] = N * G - O * P,
                n[11] = M * G - v * P
            }
        },
        Dd = function(Q, f) {
            if (f) {
                var J = g(f),
                L = i(f),
                B = Q[0],
                c = Q[1],
                w = Q[2],
                r = Q[3],
                Y = Q[8],
                O = Q[9],
                t = Q[10],
                I = Q[11];
                Q[0] = B * L - Y * J,
                Q[1] = c * L - O * J,
                Q[2] = w * L - t * J,
                Q[3] = r * L - I * J,
                Q[8] = B * J + Y * L,
                Q[9] = c * J + O * L,
                Q[10] = w * J + t * L,
                Q[11] = r * J + I * L
            }
        },
        jf = function(c, Z) {
            if (Z) {
                var v = g(Z),
                W = i(Z),
                z = c[0],
                O = c[1],
                D = c[2],
                f = c[3],
                e = c[4],
                d = c[5],
                s = c[6],
                m = c[7];
                c[0] = z * W + e * v,
                c[1] = O * W + d * v,
                c[2] = D * W + s * v,
                c[3] = f * W + m * v,
                c[4] = e * W - z * v,
                c[5] = d * W - O * v,
                c[6] = s * W - D * v,
                c[7] = m * W - f * v
            }
        },
        vb = function(j, z, e) {
            return Bg(F, e === !1 ? F: j.s3(), j.r3(), j.getRotationMode(), j.p3(), F, z)
        },
        Bg = function(Z, k, D, s, C, c, N) {
            return c || (c = Vi()),
            C && rc(c, C),
            Bh(c, D, s),
            N && jq(c, c, N),
            k && tc(c, k),
            Z && jq(c, c, Z),
            c
        },
        im = function(H, f, F) {
            f = q(f),
            F = q(F);
            var R = this;
            R.g = H,
            R._84O = f,
            R._85O = F,
            R._70I = !0,
            R.F = 0,
            R._83O = f + F,
            R.pen = {
                x: 0,
                y: 0
            }
        },
        Sd = "lineDashOffset",
        hp = "setLineDash",
        ok = function(u) {
            for (var q in u) 1 === q.length && (Sd = u[q]);
            return q ? 1 : 0
        },
        fp = function(E, p, X) {
            return Tn(p) ? E: E[hp] ? (E[hp](p), X && (E.lineDashOffset = X), E) : new im(E, p[0], p.length > 1 ? p[1] : p[0])
        },
        Zr = function(F, D) { ! Tn(D) && F[hp] && (F[hp](fb), F.lineDashOffset = 0)
        };
        if (eg(im, o, {
            _69I: 6,
            moveTo: function(g, B) {
                var $ = this,
                Z = $.pen;
                Z.x = g,
                Z.y = B,
                $.g.moveTo(g, B),
                $.start || ($.start = {
                    x: g,
                    y: B
                })
            },
            lineTo: function(C, W) {
                var u = this,
                N = u.pen,
                k = C - N.x,
                R = W - N.y,
                b = B(R, k),
                H = i(b),
                E = g(b),
                j = u._23O(N.x, N.y, C, W),
                I = u._85O,
                e = u._84O,
                M = u._83O;
                if (u.F) {
                    if (u.F > j) return u._70I ? u._72I(C, W) : u.moveTo(C, W),
                    u.F -= j,
                    void 0;
                    if (u._70I ? u._72I(N.x + H * u.F, N.y + E * u.F) : u.moveTo(N.x + H * u.F, N.y + E * u.F), j -= u.F, u.F = 0, u._70I = !u._70I, !j) return
                }
                var s = T(j / M);
                if (s) {
                    for (var q = H * e,
                    D = E * e,
                    n = H * I,
                    d = E * I,
                    t = 0; s > t; t++) u._70I ? (u._72I(N.x + q, N.y + D), u.moveTo(N.x + n, N.y + d)) : (u.moveTo(N.x + n, N.y + d), u._72I(N.x + q, N.y + D));
                    j -= M * s
                }
                u._70I ? j > e ? (u._72I(N.x + H * e, N.y + E * e), u.moveTo(C, W), u.F = I - (j - e), u._70I = !1) : (u._72I(C, W), j === e ? (u.F = 0, u._70I = !u._70I) : (u.F = e - j, u.moveTo(C, W))) : j > I ? (u.moveTo(N.x + H * I, N.y + E * I), u._72I(C, W), u.F = e - (j - I), u._70I = !0) : (u.moveTo(C, W), j === I ? (u.F = 0, u._70I = !u._70I) : u.F = I - j)
            },
            quadraticCurveTo: function(w, K, M, y) {
                var t, L = this,
                O = L.pen,
                $ = O.x,
                X = O.y,
                x = L._22O($, X, w, K, M, y),
                A = 0,
                N = 0,
                c = L._85O,
                J = L._84O;
                if (L.F) {
                    if (L.F > x) return L._70I ? L._71I(w, K, M, y) : L.moveTo(M, y),
                    L.F -= x,
                    void 0;
                    if (A = L.F / x, t = L._20O($, X, w, K, M, y, A), L._70I ? L._71I(t[2], t[3], t[4], t[5]) : L.moveTo(t[4], t[5]), L.F = 0, L._70I = !L._70I, !x) return
                }
                var v = x - x * A,
                q = T(v / L._83O),
                n = J / x,
                g = c / x;
                if (q) for (var l = 0; q > l; l++) L._70I ? (N = A + n, t = L._21O($, X, w, K, M, y, A, N), L._71I(t[2], t[3], t[4], t[5]), A = N, N = A + g, t = L._21O($, X, w, K, M, y, A, N), L.moveTo(t[4], t[5])) : (N = A + g, t = L._21O($, X, w, K, M, y, A, N), L.moveTo(t[4], t[5]), A = N, N = A + n, t = L._21O($, X, w, K, M, y, A, N), L._71I(t[2], t[3], t[4], t[5])),
                A = N;
                v = x - x * A,
                L._70I ? v > J ? (N = A + n, t = L._21O($, X, w, K, M, y, A, N), L._71I(t[2], t[3], t[4], t[5]), L.moveTo(M, y), L.F = c - (v - J), L._70I = !1) : (t = L._19O($, X, w, K, M, y, A), L._71I(t[2], t[3], t[4], t[5]), x === J ? (L.F = 0, L._70I = !L._70I) : (L.F = J - v, L.moveTo(M, y))) : v > c ? (N = A + g, t = L._21O($, X, w, K, M, y, A, N), L.moveTo(t[4], t[5]), t = L._19O($, X, w, K, M, y, N), L._71I(t[2], t[3], t[4], t[5]), L.F = J - (v - c), L._70I = !0) : (L.moveTo(M, y), v === c ? (L.F = 0, L._70I = !L._70I) : L.F = c - v)
            },
            bezierCurveTo: function() {
                var v = arguments;
                this.pen = {
                    x: v[4],
                    y: v[5]
                },
                this.g.bezierCurveTo(v[0], v[1], v[2], v[3], v[4], v[5])
            },
            arc: function(p, t, u, h, i, o) {
                o || (h = -h, i = -i),
                mm(this, p, t, h, i - h, u, u, !1)
            },
            rect: function(T, d, P, S) {
                var L = this;
                L.pen = {
                    x: T,
                    y: d
                },
                L.moveTo(T, d),
                L.lineTo(T, d + S),
                L.lineTo(T + P, d + S),
                L.lineTo(T + P, d),
                L.lineTo(T, d)
            },
            beginPath: function() {
                this.g.beginPath()
            },
            closePath: function() {
                this.lineTo(this.start.x, this.start.y)
            },
            _23O: function(V, j, e, S) {
                var Z = e - V,
                I = S - j;
                return k(Z * Z + I * I)
            },
            _22O: function(N, P, Q, B, b, M, S) {
                for (var z, x, Z, H, w, n, h, m = 0,
                k = N,
                J = P,
                C = S > 0 ? S: this._69I, j = 1; C >= j; j++) Z = j / C,
                H = 1 - Z,
                w = H * H,
                n = 2 * Z * H,
                h = Z * Z,
                z = w * N + n * Q + h * b,
                x = w * P + n * B + h * M,
                m += this._23O(k, J, z, x),
                k = z,
                J = x;
                return m
            },
            _21O: function(r, P, c, g, i, e, H, E) {
                var R = this;
                if (0 === H) return R._20O(r, P, c, g, i, e, E);
                if (1 === E) return R._19O(r, P, c, g, i, e, H);
                var q = R._20O(r, P, c, g, i, e, E);
                return q.push(H / E),
                R._19O.apply(R, q)
            },
            _20O: function(H, M, u, E, g, l, B) {
                if (1 !== B) {
                    var N = u + (g - u) * B,
                    J = E + (l - E) * B;
                    u = H + (u - H) * B,
                    E = M + (E - M) * B,
                    g = u + (N - u) * B,
                    l = E + (J - E) * B
                }
                return [H, M, u, E, g, l]
            },
            _19O: function(K, J, j, A, p, r, e) {
                if (1 !== e) {
                    var h = K + (j - K) * e,
                    g = J + (A - J) * e;
                    j += (p - j) * e,
                    A += (r - A) * e,
                    K = h + (j - h) * e,
                    J = g + (A - g) * e
                }
                return [K, J, j, A, p, r]
            },
            _72I: function(b, Z) {
                var y = this.pen; (b !== y.x || Z !== y.y) && (y.x = b, y.y = Z, this.g.lineTo(b, Z))
            },
            _71I: function(F, Q, $, g) {
                var P = this.pen; (F !== $ || Q !== g || $ !== P.x || g !== P.y) && (P.x = $, P.y = g, this.g.quadraticCurveTo(F, Q, $, g))
            }
        }), M && D) {
            var Ub = D.toString();
            x = Ub.indexOf(gl.substr(0, 2)) > 0 && Ub.indexOf(aq + aq.substr(1, 1)) > 1 ? !0 : !1
        }
        var An = _.chart,
        ri = C.compStack = [],
        Zh = /^style@/,
        lg = /^attr@/,
        Vj = /^field@/,
        Dr = function(q, w) {
            return q ? dj(q.width, w) : 0
        },
        Ll = function(X, R) {
            return X ? dj(X.height, R) : 0
        },
        dj = function(H, $, I) {
            if (!H || !H.func) return H;
            var B, v = H.func,
            J = H.value;
            return B = Pp(v) ? v($, I) : $ ? Zh.test(v) ? $.s(v.slice(6)) : lg.test(v) ? $.a(v.slice(5)) : Vj.test(v) ? $[v.slice(6)] : $[v] ? $[v](I) : J: J,
            J !== V && B == F ? J: B
        },
        zd = C.drawImage = function() {
            var x, K, m, u, N, z = function(p, c, r) {
                var k = p[c];
                return k && k.func ? (k = dj(k, K, m), r && (k = r(k))) : r && (k = p[c] = r(k)),
                k
            },
            t = function(O, v) {
                var M = z(O, v);
                if (N && M) {
                    var p = sj(N);
                    return M = cd(M),
                    "rgba(" + T(M[0] * p[0]) + "," + T(M[1] * p[1]) + "," + T(M[2] * p[2]) + "," + M[3] + ")"
                }
                return M
            },
            p = function(b) {
                if (eb(b)) {
                    for (var E = new Lq,
                    V = b.length,
                    A = 0; V > A; A += 2) E.add({
                        x: b[A],
                        y: b[A + 1]
                    });
                    b = E
                }
                return b
            },
            R = function(G, d) {
                var J = z(G, ih);
                if (eb(J)) {
                    var p = J.length,
                    y = z(G, "relative"),
                    P = d.width,
                    u = d.height;
                    if (4 === p) J = {
                        x: J[0],
                        y: J[1],
                        width: J[2],
                        height: J[3]
                    },
                    y && (J.x *= P, J.y *= u, J.width *= P, J.height *= u);
                    else if (3 === p) {
                        var F = J[0];
                        J = {
                            width: J[1],
                            height: J[2]
                        },
                        y && (J.width *= P, J.height *= u),
                        F = jc(F, d, J),
                        J.x = F.x - J.width / 2,
                        J.y = F.y - J.height / 2
                    }
                    var R = z(G, "offsetX");
                    R && (J.x += R),
                    R = z(G, "offsetY"),
                    R && (J.y += R)
                }
                return J
            },
            b = function(S) {
                return eb(S) ? new Lq(S) : S
            },
            j = function(c, M) {
                if (c) {
                    var S = M.x + M.width / 2,
                    f = M.y + M.height / 2;
                    x.save(),
                    Oj(x, S, f),
                    Wk(x, c),
                    Oj(x, -S, -f)
                }
            },
            H = function(p) {
                p && x.restore()
            },
            P = function(h, s, V) {
                var e = z(h, "path"),
                M = z(h, Mj),
                Y = F,
                L = Oo(null, e);
                if (V || (V = h.unionRect, V || (V = Hd(L), h.path.func || (h.unionRect = V)), Y = V), V) {
                    Y || (Y = h.unionRect, Y || (Y = Hd(L), h.path.func || (h.unionRect = Y)));
                    var b = Dj(Y, V);
                    if (b) j(M, Y);
                    else {
                        var I = Y.width,
                        i = Y.height,
                        X = V.width,
                        E = V.height,
                        y = X / I,
                        l = E / i;
                        x.save(),
                        Oj(x, V.x + X / 2, V.y + E / 2),
                        x.scale(y, l),
                        M && Wk(x, M),
                        Oj(x, -Y.x - I / 2, -Y.y - i / 2)
                    }
                    var g = z(h, "borderPattern"),
                    w = fp(x, g),
                    O = t(h, "background"),
                    P = t(h, "borderColor"),
                    N = z(h, "borderWidth"),
                    r = z(h, "gradient"),
                    T = t(h, "gradientColor"),
                    $ = z(h, "border3d"),
                    c = z(h, "border3dColor"),
                    U = z(h, "border3dAccuracy"),
                    d = x.lineJoin,
                    Q = x.lineCap;
                    if (x.lineJoin = z(h, "borderJoin") || qc, x.lineCap = z(h, "borderCap") || ol, O ? (Qp(x, O, r, T, Y), Oo(x, e), x.fill(), w !== x && Oo(x, e)) : Oo(x, e), N && P && (x.lineWidth = N, x.strokeStyle = P, x.stroke(), $ && Xr(x, P, c, N, u, U)), Zr(x, g), z(h, "dash")) {
                        var Z = z(h, "dashWidth") || N;
                        if (Z > 0) {
                            g = z(h, "dashPattern") || cl;
                            var w = fp(x, g, z(h, "dashOffset")),
                            q = z(h, "dashColor") || Oc;
                            w !== x && Oo(x, e),
                            x.strokeStyle = q,
                            x.lineWidth = Z,
                            x.stroke(),
                            z(h, "dash3d") && Xr(x, q, z(h, "dash3dColor"), Z, u, z(h, "dash3dAccuracy")),
                            Zr(x, g)
                        }
                    }
                    s === ih && qi(x, O, z(h, "depth"), Y),
                    x.lineJoin = d,
                    x.lineCap = Q,
                    b ? H(M) : x.restore()
                }
            },
            O = function(w, d, X) {
                var B = z(w, ue, p),
                U = z(w, Mj),
                i = d === Fb,
                C = F;
                if (!X && i && (X = w.unionRect, X || (X = Hd(B), w.points.func || (w.unionRect = X)), C = X), X) {
                    i ? C || (C = w.unionRect, C || (C = Hd(B), w.points.func || (w.unionRect = C))) : C = X;
                    var r = Dj(C, X);
                    if (r) j(U, C);
                    else {
                        var K = C.width,
                        k = C.height,
                        T = X.width,
                        s = X.height,
                        Z = T / K,
                        v = s / k;
                        x.save(),
                        Oj(x, X.x + T / 2, X.y + s / 2),
                        x.scale(Z, v),
                        U && Wk(x, U),
                        Oj(x, -C.x - K / 2, -C.y - k / 2)
                    }
                    var M, _, V, S, A = z(w, "borderPattern"),
                    O = fp(x, A),
                    E = t(w, "background"),
                    g = oq(z(w, "repeatImage"), N),
                    n = t(w, "borderColor"),
                    h = z(w, "borderWidth"),
                    J = z(w, "segments", b),
                    D = z(w, "gradient"),
                    l = t(w, "gradientColor"),
                    W = z(w, "border3d"),
                    y = z(w, "border3dColor"),
                    L = z(w, "border3dAccuracy"),
                    c = z(w, "closePath"),
                    P = x.lineJoin,
                    I = x.lineCap;
                    if (x.lineJoin = z(w, "borderJoin") || qc, x.lineCap = z(w, "borderCap") || ol, i ? E || g ? (g ? Eb(x, g) : Qp(x, E, D, l, C), ch(x, B, J, c), x.fill(), O !== x && ch(O, B, J, c)) : ch(O, B, J, c) : ("roundRect" === d ? M = z(w, "cornerRadius") : "polygon" === d ? M = z(w, "polygonSide") : "arc" === d && (M = z(w, "arcFrom"), _ = z(w, "arcTo"), V = z(w, "arcClose"), S = z(w, "arcOval")), E || g ? (g ? Eb(x, g) : Qp(x, E, D, l, C), Ak(x, d, C, M, _, V, S), x.fill(), x !== O && Ak(O, d, C, M, _, V, S)) : Ak(O, d, C, M, _, V, S)), h && n && (x.lineWidth = h, x.strokeStyle = n, x.stroke(), W && Xr(x, n, y, h, u, L)), Zr(x, A), z(w, "dash")) {
                        var $ = z(w, "dashWidth") || h;
                        if ($ > 0) {
                            A = z(w, "dashPattern") || cl;
                            var O = fp(x, A, z(w, "dashOffset")),
                            e = z(w, "dashColor") || Oc;
                            O !== x && (i ? ch(O, B, J, c) : Ak(O, d, C, M, _, V, S)),
                            x.strokeStyle = e,
                            x.lineWidth = $,
                            x.stroke(),
                            z(w, "dash3d") && Xr(x, e, z(w, "dash3dColor"), $, u, z(w, "dash3dAccuracy")),
                            Zr(x, A)
                        }
                    }
                    d === ih && qi(x, E, z(w, "depth"), C),
                    x.lineJoin = P,
                    x.lineCap = I,
                    r ? H(U) : x.restore()
                }
            },
            y = function(b, w) {
                var i = N,
                f = N || z(b, Qk),
                P = oq(z(b, "name"), f);
                P && (qg(x, P, z(b, "stretch"), w.x, w.y, w.width, w.height, K, m, f), N = i)
            },
            Z = function(h, B) {
                var D = z(h, "text");
                D != F && wb(x, D, z(h, "font"), t(h, Qk), B.x, B.y, B.width, B.height, z(h, "align"), z(h, "vAlign"))
            },
            l = function(C, s) {
                Hb(x, t(C, Qk), s.x, s.y, s.width, s.height, z(C, "width"))
            },
            o = function(U, k) {
                var H = z(U, Tp),
                h = 0;
                if (H && (H.forEach(function(j) {
                    h += j
                }), h > 0)) {
                    for (var L = z(U, "colors") || An, W = z(U, "startAngle") || 0, $ = z(U, "hollow"), a = z(U, br), _ = z(U, xh), Q = z(U, kj), R = a ? new Lq: F, V = k.x, N = k.y, v = k.width, p = k.height, u = V + v / 2, d = N + p / 2, G = s(v, p) / 2, C = 0, f = 0; f < H.length; f++) {
                        var A = H[f],
                        T = X * A / h,
                        P = W + T;
                        if (x.fillStyle = L[C++], C === L.length && (C = 0), x.beginPath(), $) {
                            var j = u + i(W) * G / 2,
                            c = d + g(W) * G / 2,
                            I = u + i(P) * G,
                            Y = d + g(P) * G;
                            x.moveTo(j, c),
                            x.arc(u, d, G / 2, W, P, !1),
                            x.lineTo(I, Y),
                            x.arc(u, d, G, P, W, !0)
                        } else x.moveTo(u, d),
                        x.arc(u, d, G, P, W, !0);
                        R && (T = (W + P) / 2, R.add({
                            text: Pp(a) ? a(A, f, h, K) : A,
                            x: u + .75 * i(T) * G,
                            y: d + .75 * g(T) * G
                        })),
                        x.closePath(),
                        x.fill(),
                        W = P
                    }
                    R && R.each(function(c) {
                        wb(x, c.text, _, Q, c.x, c.y, 0, 0, Nq)
                    })
                }
            },
            M = function(U, W) {
                var r = z(U, bm);
                if (r && r.length > 0) {
                    var P = r.length,
                    b = z(U, br),
                    t = z(U, xh),
                    k = z(U, kj),
                    l = b ? new Lq: F,
                    S = z(U, "minValue") || 0,
                    A = z(U, "maxValue");
                    if (A == F && (A = 0, r.forEach(function(U) {
                        U.values.forEach(function(v) {
                            A = h(A, v)
                        })
                    })), S === A) return;
                    for (var v = W.height / (A - S), E = W.y + A * v, H = z(r[0], Tp).length, N = W.width / (3 * H + 1), y = 2 * N / P, w = 0, T = 0; P > T; T++) for (var B = r[T], a = z(B, Qk), u = z(B, "colors"), O = z(B, Tp), e = 0; H > e; e++) {
                        u ? x.fillStyle = u[e] : a ? x.fillStyle = a: (x.fillStyle = An[w++], w === An.length && (w = 0));
                        var q = O[e],
                        c = q * v,
                        L = W.x + (1 + 3 * e) * N + T * y;
                        if (qe(x, L, E - c, y, c), l) {
                            var g = Pp(b) ? b(q, e, B, K) : q,
                            Q = Te(t, g).height;
                            l.add({
                                x: L,
                                y: E - c - Q,
                                width: y,
                                height: Q,
                                text: g
                            })
                        }
                    }
                    l && l.each(function(S) {
                        wb(x, S.text, t, k, S.x, S.y, S.width, S.height, Nq)
                    })
                }
            },
            L = function(A, f) {
                var i = z(A, bm);
                if (i && i.length > 0) {
                    var V = i.length,
                    O = z(i[0], Tp).length,
                    E = f.width / (3 * O + 1),
                    t = 0,
                    L = z(A, "maxValue"),
                    D = z(A, br),
                    W = z(A, xh),
                    y = z(A, kj),
                    B = D ? new Lq: F;
                    if (L == F) {
                        L = 0;
                        for (var J = 0; O > J; J++) {
                            for (var r = 0,
                            k = 0; V > k; k++) r += z(i[k], Tp)[J];
                            L = h(L, r)
                        }
                    }
                    if (L > 0) {
                        for (var J = 0; O > J; J++) for (var u = f.y + f.height,
                        k = 0; V > k; k++) {
                            var g = i[k],
                            C = z(g, Qk),
                            Y = z(g, Tp)[J],
                            R = Y / L * f.height;
                            C ? x.fillStyle = C: (x.fillStyle = An[t++], t === An.length && (t = 0)),
                            u -= R;
                            var P = {
                                x: f.x + (1 + 3 * J) * E,
                                y: u,
                                width: 2 * E,
                                height: R
                            };
                            qe(x, P.x, P.y, P.width, P.height),
                            B && (P.text = Pp(D) ? D(Y, J, g, K) : Y, B.add(P))
                        }
                        B && B.each(function(L) {
                            wb(x, L.text, W, y, L.x, L.y, L.width, L.height, Nq)
                        })
                    }
                }
            },
            n = function(O, c) {
                var g = z(O, bm);
                if (g && g.length > 0) {
                    for (var W = g.length,
                    a = z(g[0], Tp).length, o = c.width / (3 * a + 1), y = 0, L = z(O, br), h = z(O, xh), u = z(O, kj), D = L ? new Lq: F, Q = 0; a > Q; Q++) {
                        for (var $ = 0,
                        d = 0; W > d; d++) $ += z(g[d], Tp)[Q];
                        if ($ > 0) {
                            var P = c.y + c.height;
                            for (d = 0; W > d; d++) {
                                var S = g[d],
                                M = z(S, Qk),
                                t = z(S, Tp)[Q],
                                p = t / $ * c.height;
                                M ? x.fillStyle = M: (x.fillStyle = An[y++], y === An.length && (y = 0)),
                                P -= p;
                                var U = {
                                    x: c.x + (1 + 3 * Q) * o,
                                    y: P,
                                    width: 2 * o,
                                    height: p
                                };
                                qe(x, U.x, U.y, U.width, U.height),
                                D && (U.text = Pp(L) ? L(t, Q, S, K) : t, D.add(U))
                            }
                        }
                    }
                    D && D.each(function(j) {
                        wb(x, j.text, h, u, j.x, j.y, j.width, j.height, Nq)
                    })
                }
            },
            E = function(J, q) {
                var B = z(J, bm);
                if (B && B.length > 0) {
                    var s = B.length,
                    $ = z(J, "minValue") || 0,
                    i = z(J, "maxValue");
                    if (i == F && (i = 0, B.forEach(function(N) {
                        N.values.forEach(function(C) {
                            i = h(i, C)
                        })
                    })), $ === i) return;
                    for (var j = q.height / (i - $), M = q.y + i * j, o = z(B[0], Tp).length, I = q.width / (3 * o + 1), Y = 0, N = z(J, "lineWidth") || 2, Q = z(J, "line3d"), W = z(J, "linePoint"), w = z(J, br), V = z(J, xh), G = z(J, kj), m = 0; s > m; m++) {
                        var O = B[m],
                        E = z(O, Qk),
                        t = z(O, Tp);
                        E ? x.strokeStyle = E: (E = x.strokeStyle = An[Y++], Y === An.length && (Y = 0)),
                        x.beginPath();
                        for (var b = 0; o > b; b++) {
                            var p = q.x + (2 + 3 * b) * I,
                            A = M - t[b] * j;
                            0 === b ? x.moveTo(p, A) : x.lineTo(p, A)
                        }
                        if (x.lineWidth = N, x.stroke(), Q && Xr(x, E, F, N, u), W || w) {
                            var S, Z = N / 2 + 2;
                            for (b = 0; o > b; b++) {
                                var k = t[b];
                                if (p = q.x + (2 + 3 * b) * I, A = M - k * j, Pp(W) ? W(x, p, A, E, b, O, K) : W && (x.fillStyle = E, x.beginPath(), x.arc(p, A, Z, 0, X, !0), x.fill()), Pp(w) ? S = w(k, b, O, K) : w && (S = k), S) {
                                    var e = Te(V, S).height,
                                    l = x.shadowBlur;
                                    if (l) {
                                        var d = x.shadowOffsetX,
                                        g = x.shadowOffsetY,
                                        P = x.shadowColor;
                                        x.shadowOffsetX = 0,
                                        x.shadowOffsetY = 0,
                                        x.shadowBlur = 0,
                                        x.shadowColor = F
                                    }
                                    wb(x, S, V, G, p, A - e - Z + 2, 0, e, Nq),
                                    l && (x.shadowOffsetX = d, x.shadowOffsetY = g, x.shadowColor = P, x.shadowBlur = l)
                                }
                            }
                        }
                    }
                }
            },
            S = {
                border: l,
                image: y,
                text: Z,
                pieChart: o,
                columnChart: M,
                stackedColumnChart: L,
                percentageColumnChart: n,
                lineChart: E
            };
            return function(y, d, Q, M, w, U, h, Y, l) {
                if (d && w && U) {
                    if (x = y, K = h, m = Y, u = m ? m._zoom ? m._zoom: 1 : 1, N = l, d.tagName) return x.drawImage(d, Q, M, w, U),
                    void 0;
                    if (z(d, "visible") !== !1) {
                        N || (N = dj(d.color, K, m));
                        var B = Dr(d, K),
                        c = Ll(d, K),
                        Z = {
                            x: 0,
                            y: 0,
                            width: B,
                            height: c
                        },
                        t = z(d, "clip"),
                        W = z(d, "opacity");
                        x.save(),
                        Oj(x, Q, M),
                        (B !== w || c !== U) && x.scale(w / B, U / c),
                        t && (Pp(t) ? t(x, B, c, K, m, d) : (x.beginPath(), x.rect(0, 0, B, c), x.clip())),
                        W != F && (x.globalAlpha *= W),
                        z(d, "comps").forEach(function(c) {
                            if (z(c, ql) !== !1) {
                                ri.splice(0, 0, c);
                                var n = z(c, "opacity"),
                                B = z(c, "shadow"),
                                Q = z(c, "type"),
                                a = R(c, Z);
                                if (n != F) {
                                    var X = x.globalAlpha;
                                    x.globalAlpha *= n
                                }
                                if (B) {
                                    var b = x.shadowOffsetX,
                                    w = x.shadowOffsetY,
                                    M = x.shadowBlur,
                                    u = x.shadowColor,
                                    G = z(c, "shadowOffsetX"),
                                    s = z(c, "shadowOffsetY"),
                                    g = z(c, "shadowBlur"),
                                    U = z(c, "shadowColor");
                                    x.shadowOffsetX = G == F ? 3 : G,
                                    x.shadowOffsetY = s == F ? 3 : s,
                                    x.shadowBlur = g == F ? 6 : g,
                                    x.shadowColor = U || gc
                                }
                                if (Pp(Q)) Q(x, a, c, K, m);
                                else if (C.getCompType(Q)) C.getCompType(Q)(x, a, c, K, m);
                                else if (eq[Q] || Q === Fb) O(c, Q, a);
                                else if ("SVGPath" === Q) P(c, Q, a);
                                else if (S[Q] && a) {
                                    var o = z(c, Mj);
                                    j(o, a),
                                    S[Q](c, a),
                                    H(o)
                                }
                                B && (x.shadowOffsetX = b, x.shadowOffsetY = w, x.shadowBlur = M, x.shadowColor = u),
                                n != F && (x.globalAlpha = X),
                                ri.splice(0, 1)
                            }
                        }),
                        x.restore()
                    }
                }
            }
        } ();
        C.getCurrentComp = function() {
            return ri[0]
        },
        C.getParentComp = function() {
            return ri[1]
        },
        C.getInternal = function() {
            return {
                isEnter: ib,
                isEsc: sn,
                isSpace: Go,
                isLeft: kb,
                isUp: cj,
                isRight: Bo,
                isDown: ll,
                addMethod: vc,
                superCall: Lo,
                toPointsArray: Dp,
                translateAndScale: ws,
                appendArray: qk,
                createWorldMatrix: Bg,
                vec3TransformMat4: Uo,
                setCanvas: Kc,
                createDiv: hs,
                createView: Kp,
                createCanvas: Jr,
                createImage: yf,
                initContext: oo,
                layout: Sn,
                fillRect: qe,
                Mat: ls,
                drawBorder: Hb,
                isString: Cl,
                setBorder: rd,
                getPropertyValue: rp,
                setPropertyValue: Wb,
                drawVerticalLine: Ci,
                draw3DRect: qi,
                getPinchDist: hb,
                isSameRect: Dj,
                getPosition: jc,
                intersectionLineRect: er,
                getNodeRect: Mo,
                getImageWidth: Dr,
                getImageHeight: Ll,
                formatNumber: mj,
                initItemElement: yj,
                drawPoints: ch,
                createG2: fp,
                closePopup: Or,
                isH: gr,
                createAnim: wq,
                createNormalMatrix: Zo,
                createNormals: wk,
                toFloatArray: mg,
                glMV: Jg,
                batchShape: Oh,
                createNodeMatrix: vb,
                getFaceInfo: cn,
                transformAppend: uc,
                drawFaceInfo: Nr,
                to3dPointsArray: Il,
                setGLDebugMode: function(P) {
                    Zi = P
                },
                cube: function() {
                    return {
                        vs: wo,
                        is: Rb,
                        uv: dm
                    }
                },
                ui: function() {
                    return {
                        DataUI: Pi,
                        NodeUI: Ql,
                        EdgeUI: vq,
                        GroupUI: cs,
                        ShapeUI: Yo,
                        GridUI: kf,
                        Data3dUI: Ep,
                        Node3dUI: Wg,
                        Shape3dUI: Cq
                    }
                },
                getInternalVersion: function() {
                    return "U2FsdGVkX1+3Prpjprw/l0xILytJKD/CGBWHfKrH+nE="
                },
                getDragger: function() {
                    return Nf
                },
                addMSMap: function(u) {
                    vc(Yn, u)
                },
                k: A
            }
        },
        function(t) {
            function G(z, _) {
                z != F && (_ == F && ip != typeof z ? this._54O(z, 256) : this._54O(z, _))
            }
            function I() {
                return new G(F)
            }
            function c(M, E, p, Y, y, k) {
                for (; --k >= 0;) {
                    var W = E * this[M++] + p[Y] + y;
                    y = T(W / 67108864),
                    p[Y++] = 67108863 & W
                }
                return y
            }
            function $(Q, B, m, o, V, H) {
                for (var t = 32767 & B,
                u = B >> 15; --H >= 0;) {
                    var L = 32767 & this[Q],
                    y = this[Q++] >> 15,
                    w = u * L + y * t;
                    L = t * L + ((32767 & w) << 15) + m[o] + (1073741823 & V),
                    V = (L >>> 30) + (w >>> 15) + u * y + (V >>> 30),
                    m[o++] = 1073741823 & L
                }
                return V
            }
            function o(y, i, K, s, b, v) {
                for (var I = 16383 & i,
                M = i >> 14; --v >= 0;) {
                    var D = 16383 & this[y],
                    N = this[y++] >> 14,
                    X = M * D + N * I;
                    D = I * D + ((16383 & X) << 14) + K[s] + b,
                    b = (D >> 28) + (X >> 14) + M * N,
                    K[s++] = 268435455 & D
                }
                return b
            }
            function C(m) {
                return mq.charAt(m)
            }
            function p(b, s) {
                var m = sj[b.charCodeAt(s)];
                return m == F ? -1 : m
            }
            function a(k) {
                for (var F = this.t - 1; F >= 0; --F) k[F] = this[F];
                k.t = this.t,
                k.s = this.s
            }
            function O(V) {
                this.t = 1,
                this.s = 0 > V ? -1 : 0,
                V > 0 ? this[0] = V: -1 > V ? this[0] = V + this.DV: this.t = 0
            }
            function M(j) {
                var u = I();
                return u._58O(j),
                u
            }
            function Y(B, J) {
                var X, W = this;
                if (16 == J) X = 4;
                else if (8 == J) X = 3;
                else if (256 == J) X = 8;
                else if (2 == J) X = 1;
                else if (32 == J) X = 5;
                else {
                    if (4 != J) return W.fromRadix(B, J),
                    void 0;
                    X = 2
                }
                W.t = 0,
                W.s = 0;
                for (var h = B.length,
                I = !1,
                k = 0; --h >= 0;) {
                    var t = 8 == X ? 255 & B[h] : p(B, h);
                    0 > t ? "-" == B.charAt(h) && (I = !0) : (I = !1, 0 == k ? W[W.t++] = t: k + X > W.DB ? (W[W.t - 1] |= (t & (1 << W.DB - k) - 1) << k, W[W.t++] = t >> W.DB - k) : W[W.t - 1] |= t << k, k += X, k >= W.DB && (k -= W.DB))
                }
                8 == X && 0 != (128 & B[0]) && (W.s = -1, k > 0 && (W[W.t - 1] |= (1 << W.DB - k) - 1 << k)),
                W._57O(),
                I && G.ZERO._78O(W, W)
            }
            function E() {
                for (var U = this,
                x = U.s & U.DM; U.t > 0 && U[U.t - 1] == x;)--U.t
            }
            function W(f) {
                var V = this;
                if (V.s < 0) return "-" + V._85O()[Ko](f);
                var p;
                if (16 == f) p = 4;
                else if (8 == f) p = 3;
                else if (2 == f) p = 1;
                else if (32 == f) p = 5;
                else {
                    if (4 != f) return V.toRadix(f);
                    p = 2
                }
                var i, T = (1 << p) - 1,
                K = !1,
                b = "",
                u = V.t,
                c = V.DB - u * V.DB % p;
                if (u-->0) for (c < V.DB && (i = V[u] >> c) > 0 && (K = !0, b = C(i)); u >= 0;) p > c ? (i = (V[u] & (1 << c) - 1) << p - c, i |= V[--u] >> (c += V.DB - p)) : (i = V[u] >> (c -= p) & T, 0 >= c && (c += V.DB, --u)),
                i > 0 && (K = !0),
                K && (b += C(i));
                return K ? b: "0"
            }
            function b() {
                var O = I();
                return G.ZERO._78O(this, O),
                O
            }
            function R() {
                return this.s < 0 ? this._85O() : this
            }
            function P(o) {
                var z = this,
                $ = z.s - o.s;
                if (0 != $) return $;
                var q = z.t;
                if ($ = q - o.t, 0 != $) return z.s < 0 ? -$: $;
                for (; --q >= 0;) if (0 != ($ = z[q] - o[q])) return $;
                return 0
            }
            function J(Z) {
                var m, O = 1;
                return 0 != (m = Z >>> 16) && (Z = m, O += 16),
                0 != (m = Z >> 8) && (Z = m, O += 8),
                0 != (m = Z >> 4) && (Z = m, O += 4),
                0 != (m = Z >> 2) && (Z = m, O += 2),
                0 != (m = Z >> 1) && (Z = m, O += 1),
                O
            }
            function U() {
                var G = this;
                return G.t <= 0 ? 0 : G.DB * (G.t - 1) + J(G[G.t - 1] ^ G.s & G.DM)
            }
            function r(N, R) {
                var b;
                for (b = this.t - 1; b >= 0; --b) R[b + N] = this[b];
                for (b = N - 1; b >= 0; --b) R[b] = 0;
                R.t = this.t + N,
                R.s = this.s
            }
            function e(m, C) {
                for (var A = m; A < this.t; ++A) C[A - m] = this[A];
                C.t = h(this.t - m, 0),
                C.s = this.s
            }
            function y(o, O) {
                var N, i = this,
                x = o % i.DB,
                f = i.DB - x,
                I = (1 << f) - 1,
                j = T(o / i.DB),
                J = i.s << x & i.DM;
                for (N = i.t - 1; N >= 0; --N) O[N + j + 1] = i[N] >> f | J,
                J = (i[N] & I) << x;
                for (N = j - 1; N >= 0; --N) O[N] = 0;
                O[j] = J,
                O.t = i.t + j + 1,
                O.s = i.s,
                O._57O()
            }
            function l(b, K) {
                var a = this;
                K.s = a.s;
                var J = T(b / a.DB);
                if (J >= a.t) return K.t = 0,
                void 0;
                var F = b % a.DB,
                C = a.DB - F,
                i = (1 << F) - 1;
                K[0] = a[J] >> F;
                for (var e = J + 1; e < a.t; ++e) K[e - J - 1] |= (a[e] & i) << C,
                K[e - J] = a[e] >> F;
                F > 0 && (K[a.t - J - 1] |= (a.s & i) << C),
                K.t = a.t - J,
                K._57O()
            }
            function j(U, n) {
                for (var W = this,
                p = 0,
                e = 0,
                B = s(U.t, W.t); B > p;) e += W[p] - U[p],
                n[p++] = e & W.DM,
                e >>= W.DB;
                if (U.t < W.t) {
                    for (e -= U.s; p < W.t;) e += W[p],
                    n[p++] = e & W.DM,
                    e >>= W.DB;
                    e += W.s
                } else {
                    for (e += W.s; p < U.t;) e -= U[p],
                    n[p++] = e & W.DM,
                    e >>= W.DB;
                    e -= U.s
                }
                n.s = 0 > e ? -1 : 0,
                -1 > e ? n[p++] = W.DV + e: e > 0 && (n[p++] = e),
                n.t = p,
                n._57O()
            }
            function m(e, S) {
                var u = this.abs(),
                g = e.abs(),
                c = u.t;
                for (S.t = c + g.t; --c >= 0;) S[c] = 0;
                for (c = 0; c < g.t; ++c) S[c + u.t] = u.am(0, g[c], S, c, 0, u.t);
                S.s = 0,
                S._57O(),
                this.s != e.s && G.ZERO._78O(S, S)
            }
            function d(l) {
                for (var S = this.abs(), j = l.t = 2 * S.t; --j >= 0;) l[j] = 0;
                for (j = 0; j < S.t - 1; ++j) {
                    var q = S.am(j, S[j], l, 2 * j, 0, 1); (l[j + S.t] += S.am(j + 1, 2 * S[j], l, 2 * j + 1, q, S.t - j - 1)) >= S.DV && (l[j + S.t] -= S.DV, l[j + S.t + 1] = 1)
                }
                l.t > 0 && (l[l.t - 1] += S.am(j, S[j], l, 2 * j, 0, 1)),
                l.s = 0,
                l._57O()
            }
            function u(K, w, g) {
                var E = K.abs(),
                A = this;
                if (! (E.t <= 0)) {
                    var R = A.abs();
                    if (R.t < E.t) return w != F && w._58O(0),
                    g != F && A._77O(g),
                    void 0;
                    g == F && (g = I());
                    var a = I(),
                    i = A.s,
                    X = K.s,
                    h = A.DB - J(E[E.t - 1]);
                    h > 0 ? (E._44O(h, a), R._44O(h, g)) : (E._77O(a), R._77O(g));
                    var V = a.t,
                    U = a[V - 1];
                    if (0 != U) {
                        var Y = U * (1 << A.F1) + (V > 1 ? a[V - 2] >> A.F2: 0),
                        o = A.FV / Y,
                        C = (1 << A.F1) / Y,
                        P = 1 << A.F2,
                        t = g.t,
                        k = t - V,
                        b = w == F ? I() : w;
                        for (a._59O(k, b), g._52O(b) >= 0 && (g[g.t++] = 1, g._78O(b, g)), G.ONE._59O(V, b), b._78O(a, a); a.t < V;) a[a.t++] = 0;
                        for (; --k >= 0;) {
                            var j = g[--t] == U ? A.DM: T(g[t] * o + (g[t - 1] + P) * C);
                            if ((g[t] += a.am(0, j, g, k, 0, V)) < j) for (a._59O(k, b), g._78O(b, g); g[t] < --j;) g._78O(b, g)
                        }
                        w != F && (g._45O(V, w), i != X && G.ZERO._78O(w, w)),
                        g.t = V,
                        g._57O(),
                        h > 0 && g._46O(h, g),
                        0 > i && G.ZERO._78O(g, g)
                    }
                }
            }
            function V(L) {
                var Q = I();
                return this.abs()._49O(L, F, Q),
                this.s < 0 && Q._52O(G.ZERO) > 0 && L._78O(Q, Q),
                Q
            }
            function x(v) {
                this.m = v
            }
            function S(O) {
                return O.s < 0 || O._52O(this.m) >= 0 ? O.mod(this.m) : O
            }
            function f(U) {
                return U
            }
            function v(l) {
                l._49O(this.m, F, l)
            }
            function B(L, s, v) {
                L._47O(s, v),
                this._74O(v)
            }
            function H(w, g) {
                w._48O(g),
                this._74O(g)
            }
            function _() {
                if (this.t < 1) return 0;
                var i = this[0];
                if (0 == (1 & i)) return 0;
                var y = 3 & i;
                return y = 15 & y * (2 - (15 & i) * y),
                y = 255 & y * (2 - (255 & i) * y),
                y = 65535 & y * (2 - (65535 & (65535 & i) * y)),
                y = y * (2 - i * y % this.DV) % this.DV,
                y > 0 ? this.DV - y: -y
            }
            function D(B) {
                var W = this;
                W.m = B,
                W.mp = B._50O(),
                W.mpl = 32767 & W.mp,
                W.mph = W.mp >> 15,
                W.um = (1 << B.DB - 15) - 1,
                W.mt2 = 2 * B.t
            }
            function z(d) {
                var K = I();
                return d.abs()._59O(this.m.t, K),
                K._49O(this.m, F, K),
                d.s < 0 && K._52O(G.ZERO) > 0 && this.m._78O(K, K),
                K
            }
            function n(g) {
                var u = I();
                return g._77O(u),
                this._74O(u),
                u
            }
            function Q(H) {
                for (var G = this; H.t <= G.mt2;) H[H.t++] = 0;
                for (var $ = 0; $ < G.m.t; ++$) {
                    var F = 32767 & H[$],
                    V = F * G.mpl + ((F * G.mph + (H[$] >> 15) * G.mpl & G.um) << 15) & H.DM;
                    for (F = $ + G.m.t, H[F] += G.m.am(0, V, H, $, 0, G.m.t); H[F] >= H.DV;) H[F] -= H.DV,
                    H[++F]++
                }
                H._57O(),
                H._45O(G.m.t, H),
                H._52O(G.m) >= 0 && H._78O(G.m, H)
            }
            function xc(N, x) {
                N._48O(x),
                this._74O(x)
            }
            function Vc(c, i, P) {
                c._47O(i, P),
                this._74O(P)
            }
            function Sj() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            function wl(S, s) {
                if (S > 4294967295 || 1 > S) return G.ONE;
                var w = I(),
                P = I(),
                U = s._73O(this),
                A = J(S) - 1;
                for (U._77O(w); --A >= 0;) if (s._76O(w, P), (S & 1 << A) > 0) s._75O(P, U, w);
                else {
                    var W = w;
                    w = P,
                    P = W
                }
                return s.revert(w)
            }
            function tm(w, h) {
                var P;
                return P = 256 > w || h._51O() ? new x(h) : new D(h),
                this.exp(w, P)
            }
            function wq() {
                var n = this;
                if (n.s < 0) {
                    if (1 == n.t) return n[0] - n.DV;
                    if (0 == n.t) return - 1
                } else {
                    if (1 == n.t) return n[0];
                    if (0 == n.t) return 0
                }
                return (n[1] & (1 << 32 - n.DB) - 1) << n.DB | n[0]
            }
            function dj(M, S) {
                return new G(M, S)
            }
            function tl() {
                var r = this;
                r.n = F,
                r.e = 0,
                r.d = F,
                r.p = F,
                r.q = F,
                r.dmp1 = F,
                r.dmq1 = F,
                r._10A = F
            }
            function ig(G) {
                return G._53O(this.e, this.n)
            }
            function Xl(x) {
                var m, M, i, K = "",
                j = 0;
                for (m = 0; m < x.length && x.charAt(m) != Sf; ++m) i = yg.indexOf(x.charAt(m)),
                0 > i || (0 == j ? (K += C(i >> 2), M = 3 & i, j = 1) : 1 == j ? (K += C(M << 2 | i >> 4), M = 15 & i, j = 2) : 2 == j ? (K += C(M), K += C(i >> 2), M = 3 & i, j = 3) : (K += C(M << 2 | i >> 4), K += C(15 & i), j = 0));
                return 1 == j && (K += C(M << 2)),
                K
            }
            function yb(x) {
                var S = x.split(""),
                F = Xl(x);
                return S.forEach(function(P) {
                    var i = P.length;
                    i > 0 && F && (Dg += q(P))
                }),
                F
            }
            function Jf(Z, d) {
                var b = lk._4O.Util._56O(Z, "ss"),
                h = {},
                Y = 0;
                return h.v = b == d,
                h.t = 1,
                h.s = 0 > Y ? -1 : 0,
                xo = h.v,
                Y > 0 ? h[0] = Y: -1 > Y ? h[0] = Y + h.DV: h.t = 0,
                [b, h]
            }
            function ap(W) {
                var q = 38,
                $ = W.substring(0, q);
                if ($ && 30 == $.indexOf("05000420")) {
                    var G = ["ss", W.substring(q)];
                    return G
                }
                return []
            }
            function so(J, N) {
                N = N.replace(de, ""),
                N = N.replace(/[ \n]+/g, "");
                var q = dj(N, 16);
                if (q._55O() > this.n._55O()) return 0;
                var e = this._37O(q),
                S = e[Ko](16).replace(/^1f+00/, ""),
                Z = ap(S);
                if (0 == Z.length) return ! 1;
                for (var O, f, k, $ = .5,
                E = Qm,
                G = [0, .5, .75, .875, .9375], r = [], s = [], a = [], I = X / E, l = Z[1], w = Jf(J, l)[0], n = 0, Q = 0; n < G.length; n++) {
                    var j = 0 === n % 2 ? 0 : .5;
                    for (O = 0; E >= O; O++) f = (O + j) * I,
                    k = 1 - G[n],
                    r.push(i(f) * $ * k, -$ + 2 * G[n] * $, -g(f) * $ * k),
                    s.push((O + j) / E, k)
                }
                for (n = 0; n < G.length - 1; n++) {
                    var x = n * (E + 1),
                    U = (n + 1) * (E + 1);
                    for (O = 0; E > O; O++) a.push(x + O, U + O + 1, U + O, x + O, x + O + 1, U + O + 1)
                }
                return a.forEach(function(f) {
                    Q += f
                }),
                l == w && Q > 10
            }
            var id, Dm = 0xdeadbeefcafe,
            Tp = 15715070 == (16777215 & Dm),
            Ko = "toString",
            Em = "",
            rb = "nat",
            oj = function() {};
            Z = t["D" + 11182[Ko](L(2, 5))];
            var Sc = G.prototype;
            kp += Mr.substr(0, 1);
            var ns = t.navigator ? t.navigator.appName: "";
            Tp && "Microsoft Internet Explorer" == ns ? (Sc.am = $, id = 30) : Tp && "Netscape" != ns ? (Sc.am = c, id = 26) : (Sc.am = o, id = 28),
            Sc.DB = id,
            Sc.DM = (1 << id) - 1,
            Sc.DV = 1 << id;
            var He = 52;
            Sc.FV = L(2, He),
            Sc.F1 = He - id,
            Sc.F2 = 2 * id - He;
            var qc, cr, mq = "0123456789abcdefghijklmnopqrstuvwxyz",
            sj = [],
            kf = function(u) {
                return String.fromCharCode(u)
            };
            for (qc = "0".charCodeAt(0), cr = 0; 9 >= cr; ++cr) sj[qc++] = cr;
            for (qc = "a".charCodeAt(0), cr = 10; 36 > cr; ++cr) sj[qc++] = cr;
            for (qc = "A".charCodeAt(0), cr = 10; 36 > cr; ++cr) sj[qc++] = cr;
            var Vn = x.prototype;
            Vn._73O = S,
            Vn.revert = f,
            Vn._74O = v,
            Vn._75O = B,
            Vn._76O = H;
            var hh = D.prototype;
            hh._73O = z,
            hh.revert = n,
            hh._74O = Q,
            hh._75O = Vc,
            hh._76O = xc,
            Sc._77O = a,
            Sc._58O = O,
            Sc._54O = Y,
            Sc._57O = E,
            Sc._59O = r,
            Sc._45O = e,
            Sc._44O = y,
            Sc._46O = l,
            Sc._78O = j,
            Sc._47O = m,
            Sc._48O = d,
            Sc._49O = u,
            Sc._50O = _,
            Sc._51O = Sj,
            Sc.exp = wl,
            Sc.toString = W,
            Sc._85O = b,
            Sc.abs = R,
            Sc._52O = P,
            Sc._55O = U,
            Sc.mod = V,
            Sc._53O = tm,
            G.ZERO = M(0),
            G.ONE = M(1),
            Sc._86O = wq;
            var Uq = function(O, x) {
                var p = this;
                p.isPublic = !0,
                typeof O !== ip ? (p.n = O, p.e = x) : O != F && x != F && O.length > 0 && x.length > 0 && (p.n = dj(O, 16), p.e = q(x, 16))
            };
            gm = function() {
                var q, t, n = yb(Pn),
                R = n.substr(0, 4),
                N = n.substr(4, 2),
                o = n.substr(6, 2),
                Q = 1,
                Y = !Q,
                u = A,
                i = [],
                _ = Xo.charAt(7);
                if (Z && (Z[Ko]().indexOf(rb) < 0 || Z[kp][Ko]().indexOf(rb) < 0 || !n ? q = wm(pl[_]) : (n = new Z(R - 0, N - Q, o - 0), t = n.setHours(9), Z[kp]() > t ? q = wm(pl[_]) : Y = !0)), n && q && u) {
                    for (var P in q) i.push(P);
                    var l, m = q[i[0]],
                    z = q[i[1]],
                    y = q[i[2]],
                    I = q[i[4]],
                    J = q[i[5]],
                    T = q[i[6]],
                    M = Fq._27O(u);
                    M && T && (l = m + z + y + I + "" + J, l && M._31O(l, T) && (Y = !0))
                }
                return Y || (Ak = Tn),
                _
            };
            var Zj = tl.prototype;
            Zj._37O = ig,
            Zj._38O = Uq;
            var yg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Sf = "=",
            $o = 25,
            Oo = 10,
            Pn = "IBcCFQ==",
            Ki = Ki ||
            function(P, D) {
                var R = {},
                r = R._7A = {},
                z = r._6A = function() {
                    function Q() {}
                    return {
                        _80O: function(R) {
                            Q.prototype = this;
                            var B = new Q;
                            return R && B._5A(R),
                            B.hasOwnProperty("_82O") || (B._82O = function() {
                                B.$super._82O.apply(this, arguments)
                            }),
                            B._82O.prototype = B,
                            B.$super = this,
                            B
                        },
                        _3A: function() {
                            var B = this._80O();
                            return B._82O.apply(B, arguments),
                            B
                        },
                        _82O: function() {},
                        _5A: function(b) {
                            for (var E in b) b.hasOwnProperty(E) && (this[E] = b[E]);
                            b.hasOwnProperty(Ko) && (this.toString = b.toString)
                        },
                        _88O: function() {
                            return this._82O.prototype._80O(this)
                        }
                    }
                } (),
                V = r._39O = z._80O({
                    _82O: function(e, K) {
                        e = this._84O = e || [],
                        this._65O = K != D ? K: 4 * e.length
                    },
                    toString: function(h) {
                        return (h || Z).stringify(this)
                    },
                    _89O: function(n) {
                        var T = this._84O,
                        e = n._84O,
                        c = this._65O,
                        f = n._65O;
                        if (this._57O(), c % 4) for (var v = 0; f > v; v++) {
                            var y = 255 & e[v >>> 2] >>> 24 - 8 * (v % 4);
                            T[c + v >>> 2] |= y << 24 - 8 * ((c + v) % 4)
                        } else if (e.length > 65535) for (var v = 0; f > v; v += 4) T[c + v >>> 2] = e[v >>> 2];
                        else T.push.apply(T, e);
                        return this._65O += f,
                        this
                    },
                    _57O: function() {
                        var T = this._84O,
                        h = this._65O;
                        T[h >>> 2] &= 4294967295 << 32 - 8 * (h % 4),
                        T.length = w(h / 4)
                    },
                    _88O: function() {
                        var $ = z._88O.call(this);
                        return $._84O = this._84O.slice(0),
                        $
                    },
                    _87O: function(L) {
                        for (var o = [], q = 0; L > q; q += 4) o.push(0 | 4294967296 * N);
                        return new V._82O(o, L)
                    }
                }),
                g = R._2A = {},
                Z = g._69O = {
                    stringify: function(l) {
                        var C, p = l._84O,
                        K = l._65O,
                        c = [];
                        for (C = 0; K > C; C++) {
                            var B = 255 & p[C >>> 2] >>> 24 - 8 * (C % 4);
                            c.push((B >>> 4).toString(16)),
                            c.push((15 & B).toString(16))
                        }
                        return c.join("")
                    },
                    _68O: function(t) {
                        for (var e = t.length,
                        k = [], N = 0; e > N; N += 2) k[N >>> 3] |= q(t.substr(N, 2), 16) << 24 - 4 * (N % 8);
                        return new V._82O(k, e / 2)
                    }
                },
                i = g._8A = {
                    stringify: function(z) {
                        var Y, T = z._84O,
                        u = z._65O,
                        j = [];
                        for (Y = 0; u > Y; Y++) {
                            var v = 255 & T[Y >>> 2] >>> 24 - 8 * (Y % 4);
                            j.push(kf(v))
                        }
                        return j.join("")
                    },
                    _68O: function(H) {
                        var c, y = H.length,
                        $ = [];
                        for (c = 0; y > c; c++) $[c >>> 2] |= (255 & H.charCodeAt(c)) << 24 - 8 * (c % 4);
                        return new V._82O($, y)
                    }
                },
                M = g._9A = {
                    stringify: function(J) {
                        try {
                            return decodeURIComponent(escape(i.stringify(J)))
                        } catch(R) {
                            throw new Error("")
                        }
                    },
                    _68O: function(d) {
                        return i._68O(unescape(encodeURIComponent(d)))
                    }
                },
                Y = r._32O = z._80O({
                    _1A: function() {
                        this._83O = new V._82O,
                        this._23O = 0
                    },
                    _33O: function(Q) {
                        typeof Q == ip && (Q = M._68O(Q)),
                        this._83O._89O(Q),
                        this._23O += Q._65O
                    },
                    _25O: function(E) {
                        var u = this._83O,
                        T = u._84O,
                        b = u._65O,
                        t = this._79O,
                        e = 4 * t,
                        A = b / e;
                        A = E ? w(A) : h((0 | A) - this._22O, 0);
                        var p = A * t,
                        y = s(4 * p, b);
                        if (p) {
                            for (var z = 0; p > z; z += t) this._20O(T, z);
                            var d = T.splice(0, p);
                            u._65O -= y
                        }
                        return new V._82O(d, y)
                    },
                    _88O: function() {
                        var e = z._88O.call(this);
                        return e._83O = this._83O._88O(),
                        e
                    },
                    _22O: 0
                });
                r._66O = Y._80O({
                    cfg: z._80O(),
                    _82O: function(O) {
                        this.cfg = this.cfg._80O(O),
                        this._1A()
                    },
                    _1A: function() {
                        Y._1A.call(this),
                        this._34O()
                    },
                    _81O: function(B) {
                        return this._33O(B),
                        this._25O(),
                        this
                    },
                    _72O: function(K) {
                        K && this._33O(K);
                        var f = this._21O();
                        return f
                    },
                    _79O: 16,
                    _26O: function(h) {
                        return function(w, H) {
                            return new h._82O(H)._72O(w)
                        }
                    },
                    _19O: function(d) {
                        return function(c, j) {
                            return new e._71O._82O(d, j)._72O(c)
                        }
                    }
                });
                var e = R._67O = {};
                return R
            } (); !
            function() {
                var b = Ki,
                s = b._7A,
                g = s._39O,
                F = s._66O,
                y = b._67O,
                C = [],
                a = []; !
                function() {
                    function b(b) {
                        for (var v = k(b), H = 2; v >= H; H++) if (! (b % H)) return ! 1;
                        return ! 0
                    }
                    function j(M) {
                        return 0 | 4294967296 * (M - (0 | M))
                    }
                    for (var R = 2,
                    r = 0; 64 > r;) b(R) && (8 > r && (C[r] = j(L(R, .5))), a[r] = j(L(R, 1 / 3)), r++),
                    R++
                } ();
                var U = [],
                t = y._41O = F._80O({
                    _34O: function() {
                        this._64O = new g._82O(C.slice(0))
                    },
                    _20O: function(E, i) {
                        for (var c = this._64O._84O,
                        Y = c[0], f = c[1], r = c[2], z = c[3], G = c[4], F = c[5], C = c[6], O = c[7], g = 0; 64 > g; g++) {
                            if (16 > g) U[g] = 0 | E[i + g];
                            else {
                                var I = U[g - 15],
                                R = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3,
                                p = U[g - 2],
                                l = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;
                                U[g] = R + U[g - 7] + l + U[g - 16]
                            }
                            var x = G & F ^ ~G & C,
                            D = Y & f ^ Y & r ^ f & r,
                            t = (Y << 30 | Y >>> 2) ^ (Y << 19 | Y >>> 13) ^ (Y << 10 | Y >>> 22),
                            o = (G << 26 | G >>> 6) ^ (G << 21 | G >>> 11) ^ (G << 7 | G >>> 25),
                            m = O + o + x + a[g] + U[g],
                            Q = t + D;
                            O = C,
                            C = F,
                            F = G,
                            G = 0 | z + m,
                            z = r,
                            r = f,
                            f = Y,
                            Y = 0 | m + Q
                        }
                        c[0] = 0 | c[0] + Y,
                        c[1] = 0 | c[1] + f,
                        c[2] = 0 | c[2] + r,
                        c[3] = 0 | c[3] + z,
                        c[4] = 0 | c[4] + G,
                        c[5] = 0 | c[5] + F,
                        c[6] = 0 | c[6] + C,
                        c[7] = 0 | c[7] + O
                    },
                    _21O: function() {
                        var v = this._83O,
                        B = v._84O,
                        U = 8 * this._23O,
                        c = 8 * v._65O;
                        return B[c >>> 5] |= 128 << 24 - c % 32,
                        B[(c + 64 >>> 9 << 4) + 14] = T(U / 4294967296),
                        B[(c + 64 >>> 9 << 4) + 15] = U,
                        v._65O = 4 * B.length,
                        this._25O(),
                        this._64O
                    },
                    _88O: function() {
                        var A = F._88O.call(this);
                        return A._64O = this._64O._88O(),
                        A
                    }
                });
                b._41O = F._26O(t),
                b._42O = F._19O(t)
            } ();
            var de = new RegExp("");
            de.compile("[^0-9a-f]", "gi"),
            tl._28O = -1,
            tl._29O = -2,
            Zj._31O = so,
            Zj._63O = so,
            tl._43O = -2;
            var sf = new
            function() {
                var D = this;
                D._5O = function(T, x) {
                    if ("8" != T.substring(x + 2, x + 3)) return 1;
                    var C = q(T.substring(x + 3, x + 4));
                    return 0 == C ? -1 : C > 0 && 10 > C ? C + 1 : -2
                },
                D._13O = function(u, O) {
                    var B = D._5O(u, O);
                    return 1 > B ? "": u.substring(O + 2, O + 2 + 2 * B)
                },
                D._12O = function(A, O) {
                    var j = D._13O(A, O);
                    if ("" == j) return - 1;
                    var s;
                    return s = q(j.substring(0, 1)) < 8 ? new G(j, 16) : new G(j.substring(2), 16),
                    s._86O()
                },
                D._6O = function(e, j) {
                    var i = D._5O(e, j);
                    return 0 > i ? i: j + 2 * (i + 1)
                },
                D._11O = function(m, x) {
                    var C = D._6O(m, x),
                    R = D._12O(m, x);
                    return m.substring(C, C + 2 * R)
                },
                D._10O = function($, F) {
                    var u = D._6O($, F),
                    S = D._12O($, F);
                    return u + 2 * S
                },
                D._7O = function(I, $) {
                    var A = [],
                    h = D._6O(I, $);
                    A.push(h);
                    for (var P = D._12O(I, $), H = h, N = 0;;) {
                        var E = D._10O(I, H);
                        if (E == F || E - h >= 2 * P) break;
                        if (N >= 200) break;
                        A.push(E),
                        H = E,
                        N++
                    }
                    return A
                }
            };
            if (sf._90O = kf(Oo + 24), sf._91O = K + kf(Oo * Oo + 8), lk == F || !lk) var lk = {};
            lk._4O != F && lk._4O || (lk._4O = {}),
            lk._4O.Util = new
            function() {
                var V = this;
                V._56O = function(x) {
                    var v = new lk._4O._3O;
                    return v._30O(x)
                },
                V._4A = function(f) {
                    var O = new lk._4O._3O;
                    return O._36O(f)
                }
            },
            lk._4O._3O = function() {
                var E = this;
                E._8O = function(F, p) {
                    if ("ss" == F && "cj" == p) {
                        try {
                            E.md = Ki._67O._41O._3A()
                        } catch(V) {
                            oj(Em)
                        }
                        E._24O = function(T) {
                            E.md._81O(T)
                        },
                        E._35O = function($) {
                            var T = Ki._2A._69O._68O($);
                            E.md._81O(T)
                        },
                        E._60O = function() {
                            var o = E.md._72O();
                            return o[Ko](Ki._2A._69O)
                        },
                        E._30O = function(x) {
                            return E._24O(x),
                            E._60O()
                        },
                        E._36O = function(Z) {
                            return E._35O(Z),
                            E._60O()
                        }
                    }
                },
                E._24O = function() {
                    oj(Em)
                },
                E._35O = function() {
                    oj(Em)
                },
                E._60O = function() {
                    oj(Em)
                },
                E._30O = function() {
                    oj(Em)
                },
                E._36O = function() {
                    oj(Em)
                },
                E._8O("ss", "cj")
            },
            oe = function(x) {
                var r = t[sf._91O],
                J = 1,
                B = !1;
                if (hl.forEach(function(T) {
                    J *= T
                }), hl.a) return hl.a;
                if (x > J) {
                    if (r) {
                        r = r.split(sf._90O);
                        var _ = r[3],
                        w = r[7],
                        $ = r[11],
                        s = r[19],
                        v = r[23],
                        c = r[27],
                        o = _ + w + $ + s + v;
                        B = os()(o, c)
                    }
                    B || (Pi.prototype._42 = Fo)
                } else B = !0;
                return hl.a = B,
                B
            },
            $o = String.fromCharCode($o + 20);
            var sd = function(D) {
                return D = D.replace(de, Em),
                D = D.replace(/[ \n]+/g, Em)
            },
            Kq = "30",
            be = "06",
            Wb = "02",
            se = "03",
            Jc = dj,
            So = /^1f+00/,
            Fq = function() {
                var j;
                return j = {
                    _18O: function(L) {
                        var K = L,
                        Z = K.replace(/\s+/g, ""),
                        m = Xl(Z);
                        return m
                    },
                    _14O: function(S) {
                        var z = this._18O(S),
                        O = this._15O(z);
                        return O
                    },
                    _15O: function(c) {
                        var l = this._17O(c);
                        if ("2a864886f70d010101" == l._61O) {
                            var M = this._16O(l.key),
                            O = new tl;
                            return O._38O(M.n, M.e),
                            O
                        }
                        oj(Em)
                    },
                    _16O: function(y) {
                        var L = {};
                        y.substr(0, 2) != Kq && oj(Em);
                        var i = sf._7O(y, 0);
                        return 2 != i.length && oj(Em),
                        y.substr(i[0], 2) != Wb && oj(Em),
                        L.n = sf._11O(y, i[0]),
                        y.substr(i[1], 2) != Wb && oj(Em),
                        L.e = sf._11O(y, i[1]),
                        L
                    },
                    _17O: function(p) {
                        var h = {};
                        h._40O = F;
                        var g = sf._7O(p, 0);
                        2 != g.length && oj(Em);
                        var G = g[0];
                        p.substr(G, 2) != Kq && oj(Em);
                        var d = sf._7O(p, G);
                        return 2 != d.length && oj(Em),
                        p.substr(d[0], 2) != be && oj(Em),
                        h._61O = sf._11O(p, d[0]),
                        p.substr(d[1], 2) == be ? h._40O = sf._11O(p, d[1]) : p.substr(d[1], 2) == Kq && (h._40O = {},
                        h._40O.p = sf._70O(p, d[1], [0], Wb), h._40O.q = sf._70O(p, d[1], [1], Wb), h._40O.g = sf._70O(p, d[1], [2], Wb)),
                        p.substr(g[1], 2) != se && oj(Em),
                        h.key = sf._11O(p, g[1]).substr(2),
                        h
                    }
                },
                j._17O ? j: F
            } (),
            ec = Fq._27O = function(t) {
                return Fq._14O(t)
            };
            return os = function() {
                return function(G, k) {
                    k = sd(k);
                    var v = Jc(k, L(2, 4)),
                    I = this;
                    if (!I || !I.n || v._55O() > I.n._55O()) return 0;
                    var n = I._37O(v),
                    X = n[Ko](L(2, 4)).replace(So, ""),
                    Y = ap(X);
                    if (0 == Y.length) return ! 1;
                    var p = Y[0],
                    H = Y[1],
                    z = function(C) {
                        return lk._4O.Util._56O(C, p)
                    },
                    Q = z(G);
                    return H == Q
                }.bind(ec(A))
            },
            Fq
        } (z, o);
        var Lq = Y.List = function() {
            this._as = [];
            var b, P, U = arguments.length;
            if (1 === U) {
                var Q = arguments[0];
                if (Fm(Q) && (Q = Q._as), eb(Q)) for (P = Q.length, b = 0; P > b; b++) this._as.push(Q[b]);
                else Q != F && this._as.push(Q)
            } else if (U > 1) for (b = 0; U > b; b++) this._as.push(arguments[b])
        };
        uh("List", o, {
            size: function() {
                return this._as.length
            },
            isEmpty: function() {
                return 0 === this._as.length
            },
            add: function(p, k) {
                return k === V ? this._as.push(p) : this._as.splice(k, 0, p)
            },
            addAll: function(_) {
                Fm(_) && (_ = _._as),
                eb(_) ? qk(this._as, _) : this._as.push(_)
            },
            get: function(P) {
                return this._as[P]
            },
            slice: function(z, m) {
                return new Lq(this._as.slice(z, m))
            },
            remove: function(s) {
                var A = this._as.indexOf(s);
                return A >= 0 && A < this._as.length && this.removeAt(A),
                A
            },
            removeAt: function(p) {
                return this._as.splice(p, 1)[0]
            },
            set: function(Y, E) {
                return this._as[Y] = E
            },
            clear: function() {
                return this._as.splice(0, this._as.length)
            },
            contains: function(v) {
                return this._as.indexOf(v) >= 0
            },
            indexOf: function(P) {
                return this._as.indexOf(P)
            },
            each: function(y, J) {
                for (var P = 0,
                f = this._as.length; f > P; P++) {
                    var F = this._as[P];
                    J ? y.call(J, F) : y(F)
                }
            },
            reverseEach: function(N, t) {
                for (var B = this._as.length - 1; B >= 0; B--) {
                    var m = this._as[B];
                    t ? N.call(t, m) : N(m)
                }
            },
            toArray: function(g, Z) {
                if (g) {
                    for (var J, O = [], s = 0, B = this._as.length; B > s; s++) J = this._as[s],
                    Z ? g.call(Z, J) && O.push(J) : g(J) && O.push(J);
                    return O
                }
                return this._as.concat()
            },
            toList: function(v, W) {
                if (v) {
                    for (var l, Z = new Lq,
                    E = 0,
                    N = this._as.length; N > E; E++) l = this._as[E],
                    W ? v.call(W, l) && Z.add(l) : v(l) && Z.add(l);
                    return Z
                }
                return new Lq(this)
            },
            reverse: function() {
                this._as.reverse()
            },
            sort: function(z) {
                return this._as.sort(z ? z: $q),
                this
            },
            toString: function() {
                return this._as.toString()
            }
        });
        var ir = new Lq;
        vc(ir, {
            size: function() {
                return 0
            },
            indexOf: function() {
                return - 1
            },
            contains: function() {
                return ! 1
            },
            isEmpty: function() {
                return ! 0
            },
            sort: vm,
            each: vm,
            reverseEach: vm,
            toArray: function() {
                return []
            },
            toList: function() {
                return new Lq
            },
            add: re,
            addAll: re,
            set: re,
            remove: re,
            removeAt: re,
            clear: re
        });
        var Lf = Y.Notifier = function() {};
        uh("Notifier", o, {
            contains: function(b, x) {
                if (this._ls) for (var i, M = 0,
                O = this._ls.size(); O > M; M++) if (i = this._ls.get(M), b === i.l && x === i.s) return ! 0;
                return ! 1
            },
            add: function(u, P, k) {
                var b = this,
                X = {
                    l: u,
                    s: P,
                    a: k
                };
                b._ls || (b._ls = new Lq),
                b._f ? (b._as || (b._as = new Lq), b._as.add(X)) : X.a ? b._ls.add(X, 0) : b._ls.add(X)
            },
            remove: function(k, w) {
                var q = this;
                q._ls && (q._f ? (q._rs || (q._rs = new Lq), q._rs.add({
                    l: k,
                    s: w
                })) : q._remove(k, w))
            },
            _remove: function(T, J) {
                for (var p, M = this._ls,
                E = 0,
                U = M.size(); U > E; E++) if (p = M.get(E), p.l === T && p.s === J) return M.removeAt(E),
                void 0
            },
            fire: function(m) {
                var e = this,
                t = e._ls;
                if (e._b = 100, t) {
                    e._f = 1;
                    for (var b, K = 0,
                    G = t.size(); G > K; K++) b = t.get(K),
                    b.s ? b.l.call(b.s, m) : b.l(m);
                    if (delete e._f, e._rs) {
                        for (G = e._rs.size(), K = 0; G > K; K++) b = e._rs.get(K),
                        e._remove(b.l, b.s);
                        delete e._rs
                    }
                    if (e._as) {
                        for (G = e._as.size(), K = 0; G > K; K++) b = e._as.get(K),
                        b.a ? t.add(b, 0) : t.add(b);
                        delete e._as
                    }
                }
            }
        });
        var kg = Y.Data = function() {
            this._id = js()
        };
        uh("Data", o, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: F,
            _parent: F,
            _children: ir,
            _childMap: F,
            _styleMap: F,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function() {
                return F
            },
            _22Q: function() {
                return F
            },
            s: function(X, x) {
                var E = this;
                if (2 === arguments.length) E.setStyle(X, x);
                else {
                    if (!_l(X)) return E.getStyle(X);
                    for (var Q in X) E.setStyle(Q, X[Q])
                }
                return E
            },
            fp: function(R, U, $) {
                return this.firePropertyChange(R, U, $)
            },
            firePropertyChange: function(f, L, R) {
                if (L === R) return ! 1;
                var Q = this,
                G = {
                    property: f,
                    oldValue: L,
                    newValue: R,
                    data: Q
                };
                return Q._dataModel && Q._dataModel.handleDataPropertyChange(G),
                Q.onPropertyChanged(G),
                !0
            },
            onPropertyChanged: function(v) {
                var Z = this,
                S = Z._parent,
                r = v.property;
                if (sl(S)) {
                    var A = Z.s(ss),
                    z = "s:ingroup" === r; (A && hi[r] || r === z) && S._81I(),
                    (A || z) && S.fp("childChange", !0, !1)
                }
            },
            _21I: function(S) {
                var c = this;
                if (S && c._dataModel) throw "HT-DM";
                c._dataModel = S
            },
            getId: function() {
                return this._id
            },
            setId: function(T) {
                this._id = T
            },
            getChildren: function() {
                return this._children
            },
            size: function() {
                return this._children.size()
            },
            toChildren: function(t, A) {
                return this._children.toList(t, A)
            },
            eachChild: function(s, x) {
                this._children.each(s, x)
            },
            addChild: function(k, r) {
                var K = this;
                k !== K && (K._children === ir && (K._children = new Lq, K._childMap = {}), r === V && (r = K._children.size()), K._childMap[k._id] || K.isDescendantOf(k) || (k._parent && k._parent.removeChild(k), (0 > r || r > K._children.size()) && (r = K._children.size()), K._children.add(k, r), K._childMap[k._id] = k, k.setParent(K), K.onChildAdded(k, r), K.fp(Yc, F, k)))
            },
            onChildAdded: function() {},
            removeChild: function(m) {
                var n = this;
                if (n._childMap && n._childMap[m._id]) {
                    var R = n._children.remove(m);
                    delete n._childMap[m._id],
                    n.fp(Yc, m, F),
                    m.setParent(F),
                    n.onChildRemoved(m, R)
                }
            },
            onChildRemoved: function() {},
            getChildAt: function(g) {
                return this._children.get(g)
            },
            clearChildren: function() {
                var e = this;
                if (!e._children.isEmpty()) for (var C = 0,
                Z = e._children.toArray(), d = Z.length; d > C; C++) e.removeChild(Z[C])
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(m) {
                var S = this;
                if (! (S._73I || S._parent === m || S === m || m && m.isDescendantOf(S))) {
                    var e = S._parent;
                    S._parent = m,
                    S._73I = 1,
                    e && e.removeChild(S),
                    m && m.addChild(S),
                    delete S._73I,
                    S.fp("parent", e, m),
                    S.onParentChanged(e, m)
                }
            },
            onParentChanged: function() {},
            hasChildren: function() {
                return this._children.size() > 0
            },
            isEmpty: function() {
                return this._children.isEmpty()
            },
            isRelatedTo: function(o) {
                return o ? this.isDescendantOf(o) || o.isDescendantOf(this) : !1
            },
            isParentOf: function(B) {
                return B && this._childMap ? !!this._childMap[B._id] : !1
            },
            isDescendantOf: function(N) {
                if (!N || N.isEmpty()) return ! 1;
                for (var C = this._parent; C;) {
                    if (N === C) return ! 0;
                    C = C._parent
                }
                return ! 1
            },
            getStyleMap: function() {
                return this._styleMap
            },
            getStyle: function(O, K) {
                K === V && (K = 1);
                var n = this._styleMap ? this._styleMap[O] : V;
                return n === V && K ? b[O] : n
            },
            setStyle: function(r, f) {
                var L = this;
                L._styleMap || (L._styleMap = {});
                var J = L._styleMap[r];
                f === V ? delete L._styleMap[r] : L._styleMap[r] = f,
                L.fp("s:" + r, J, f) && L.onStyleChanged(r, J, f)
            },
            onStyleChanged: function() {},
            iv: function() {
                this.invalidate()
            },
            invalidate: function() {
                this.fp("*", !1, !0)
            },
            toString: function() {
                var b = this;
                return b._displayName || b._name || b._tag || b._id
            },
            toLabel: function() {
                return this._displayName || this._name
            },
            addStyleIcon: function(I, S) {
                var b = this,
                f = b.s(Ph);
                f || b.s(Ph, f = {}),
                S ? f[I] = S: delete f[I],
                b.fp(Ph, F, f)
            },
            removeStyleIcon: function(A) {
                var O = this.s(Ph);
                if (O) {
                    var I = O[A];
                    delete O[A],
                    this.fp(Ph, F, O)
                }
                return I
            },
            getSerializableProperties: function() {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1
                }
            },
            getSerializableStyles: function() {
                var S, m = {};
                for (S in this._styleMap) m[S] = 1;
                return m
            }
        });
        var si = Y.DataModel = function() {
            var I = this;
            I._datas = new Lq,
            I._dataMap = {},
            I._roots = new Lq,
            I._rootMap = {},
            I._78O = {},
            I._36I = new Lf,
            I._35I = new Lf,
            I._3o = new tf(I);
            var F = I._29Q = [],
            J = I._scheduleCallback = function() {
                for (var w = Date.now(), d = 0; d < F.length; d++) {
                    var O = F[d];
                    O.enabled && w - O.lastTime > O.interval && (I.each(function(I) {
                        O.action(I)
                    }), O.lastTime = w)
                }
                F.length && (I._30Q = z.requestAnimationFrame(J))
            }
        };
        uh("DataModel", o, {
            ms_fire: 1,
            ms_attr: 1,
            ms_ac: ["name", "autoAdjustIndex"],
            _name: V,
            _autoAdjustIndex: !0,
            sm: function() {
                return this.getSelectionModel()
            },
            mm: function(v, S, b) {
                this.addDataModelChangeListener(v, S, b)
            },
            umm: function(_, g) {
                this.removeDataModelChangeListener(_, g)
            },
            md: function(c, d, p) {
                this.addDataPropertyChangeListener(c, d, p)
            },
            umd: function(y, I) {
                this.removeDataPropertyChangeListener(y, I)
            },
            mh: function(W, Y, b) {
                this.addHierarchyChangeListener(W, Y, b)
            },
            umh: function(W, j) {
                this.removeHierarchyChangeListener(W, j)
            },
            getHistoryManager: function() {
                return this._historyManager
            },
            getAttrObject: function() {
                return this._attrObject
            },
            setAttrObject: function(i) {
                return this._attrObject = i
            },
            getSelectionModel: function() {
                return this._3o
            },
            size: function() {
                return this._datas.size()
            },
            isEmpty: function() {
                return this._datas.isEmpty()
            },
            getRoots: function() {
                return this._roots
            },
            getDatas: function() {
                return this._datas
            },
            getDataById: function(y) {
                return this._dataMap[y]
            },
            removeDataById: function(B) {
                this.remove(this.getDataById(B))
            },
            toDatas: function(c, h) {
                return this._datas.toList(c, h)
            },
            each: function(C, M) {
                this._datas.each(C, M)
            },
            getDataByTag: function(K) {
                return this._78O[K]
            },
            removeDataByTag: function(Y) {
                this.remove(this.getDataByTag(Y))
            },
            add: function(C, N) {
                var O = this,
                u = C._id,
                r = C._tag,
                n = O._roots;
                if (O._dataMap[u]) throw "'" + u + "' already exists";
                r != F && (O._78O[r] = C),
                O._dataMap[u] = C,
                O._datas.add(C),
                C._parent || (O._rootMap[u] = C, N >= 0 ? n.add(C, N) : n.add(C)),
                C._21I(O),
                O.onAdded(C),
                O._36I.fire({
                    kind: "add",
                    data: C
                })
            },
            onAdded: function() {},
            remove: function(P) {
                if (P) {
                    var c = this,
                    n = P._id,
                    H = P.getTag(),
                    o = c.getHistoryManager();
                    P._dataModel === c && (o && o.beginInteraction(), c.prepareRemove(P), P.toChildren().each(c.remove, c), P._parent && P._parent.removeChild(P), c._datas.remove(P), delete c._dataMap[n], H != F && delete c._78O[H], c._rootMap[n] && (delete c._rootMap[n], c._roots.remove(P)), P._21I(F), c.onRemoved(P), c._36I.fire({
                        kind: ej,
                        data: P
                    }), o && o.endInteraction())
                }
            },
            onRemoved: function() {},
            prepareRemove: function() {},
            clear: function() {
                var Q = this;
                Q._datas.size() > 0 && (Q._datas.each(function(q) {
                    q._21I(F)
                }), Q._datas.clear(), Q._dataMap = {},
                Q._roots.clear(), Q._rootMap = {},
                Q._78O = {},
                Q._36I.fire({
                    kind: Rg
                }))
            },
            contains: function(V) {
                return V && V._dataModel === this
            },
            handleDataPropertyChange: function(g) {
                var M = this,
                A = g.data,
                S = g.property;
                if ("parent" === S) {
                    var l = A._id,
                    j = M._rootMap,
                    L = M._roots;
                    A._parent ? j[l] && (delete j[l], L.remove(A)) : j[l] || (j[l] = A, L.add(A))
                } else if ("tag" === S) {
                    var k = g.oldValue,
                    C = g.newValue,
                    N = M._78O;
                    k != F && delete N[k],
                    C != F && (N[C] = A)
                }
                this.onDataPropertyChanged(A, g),
                this._35I.fire(g)
            },
            onDataPropertyChanged: function() {},
            addDataModelChangeListener: function(Z, W, J) {
                this._36I.add(Z, W, J)
            },
            removeDataModelChangeListener: function(F, u) {
                this._36I.remove(F, u)
            },
            addDataPropertyChangeListener: function(A, k, I) {
                this._35I.add(A, k, I)
            },
            removeDataPropertyChangeListener: function(D, n) {
                this._35I.remove(D, n)
            },
            _38I: function(y, f, B) {
                this._37I && this._37I.fire({
                    data: y,
                    oldIndex: f,
                    newIndex: B
                })
            },
            addHierarchyChangeListener: function(k, V, q) {
                this._37I || (this._37I = new Lf),
                this._37I.add(k, V, q)
            },
            removeHierarchyChangeListener: function(X, L) {
                this._37I.remove(X, L)
            },
            getSiblings: function(f) {
                var c = f._parent;
                return c ? c._children: this._roots
            },
            eachByDepthFirst: function(U, s, a) {
                if (s) this._11I(U, s, a);
                else for (var L = 0,
                r = this._roots,
                x = r.size(); x > L; L++) if (this._11I(U, r.get(L), a) === !1) return
            },
            _11I: function(G, Y, B) {
                for (var I = Y.size(), h = 0; I > h; h++) if (this._11I(G, Y.getChildAt(h), B) === !1) return ! 1;
                if (B) {
                    if (G.call(B, Y) === !1) return ! 1
                } else if (G(Y) === !1) return ! 1;
                return ! 0
            },
            eachByBreadthFirst: function(d, v, C) {
                var E = new Lq;
                for (v ? E.add(v) : this._roots.each(E.add, E); E.size() > 0;) if (v = E.removeAt(0), v.eachChild(E.add, E), C) {
                    if (d.call(C, v) === !1) return ! 1
                } else if (d(v) === !1) return ! 1;
                return ! 0
            },
            moveTo: function(u, E) {
                var A = this.getSiblings(u),
                n = A.indexOf(u);
                n === E || 0 > n || E >= 0 && E <= A.size() && (A.remove(u), E > A.size() && E--, A.add(u, E), this._38I(u, n, E))
            },
            moveUp: function(M) {
                this.moveTo(M, this.getSiblings(M).indexOf(M) - 1)
            },
            moveDown: function(S) {
                this.moveTo(S, this.getSiblings(S).indexOf(S) + 1)
            },
            moveToTop: function(D) {
                this.moveTo(D, 0)
            },
            moveToBottom: function(Z) {
                this.moveTo(Z, this.getSiblings(Z).size())
            },
            moveSelectionUp: function(d) {
                d || (d = this.sm());
                var o = new Lq;
                zm(d, o, this._roots),
                o.each(this.moveUp, this)
            },
            moveSelectionDown: function(n) {
                n || (n = this.sm());
                var X = new Lq;
                Yh(n, X, this._roots),
                X.each(this.moveDown, this)
            },
            moveSelectionToTop: function(O) {
                O || (O = this.sm());
                var b = new Lq;
                vs(O, b, this._roots),
                b.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function(P) {
                P || (P = this.sm());
                var O = new Lq;
                Lh(P, O, this._roots),
                O.each(this.moveToBottom, this)
            },
            addScheduleTask: function(m) {
                var h = this;
                h.removeScheduleTask(m),
                m.enabled == F && (m.enabled = !0),
                m.interval == F && (m.interval = 10),
                m.action == F && (m.action = vm),
                m.lastTime = Date.now(),
                h._29Q.push(m),
                h._30Q == F && (h._30Q = z.requestAnimationFrame(h._scheduleCallback))
            },
            removeScheduleTask: function(S) {
                var N = this,
                I = N._29Q,
                A = I.indexOf(S);
                A >= 0 && I.splice(A, 1),
                I.length || N._30Q == F || (z.cancelAnimationFrame(N._30Q), delete N._30Q)
            }
        });
        var tf = Y.SelectionModel = function(q) {
            var E = this;
            E._68O = bs,
            E._map = {},
            E._73O = new Lq,
            E._74I = new Lf,
            E._21I(q)
        };
        uh("SelectionModel", o, {
            ms_fire: 1,
            ms_dm: 1,
            ms: function(r, $, z) {
                this.addSelectionChangeListener(r, $, z)
            },
            ums: function(L, p) {
                this.removeSelectionChangeListener(L, p)
            },
            fd: function() {
                return this.getFirstData()
            },
            ld: function() {
                return this.getLastData()
            },
            sg: function() {
                return this._68O === t
            },
            co: function(D) {
                return this._map[D._id] != F
            },
            ss: function(s) {
                this.setSelection(s)
            },
            as: function(H) {
                this.appendSelection(H)
            },
            rs: function(q) {
                this.removeSelection(q)
            },
            cs: function() {
                this.clearSelection()
            },
            sa: function() {
                this.selectAll()
            },
            getSelectionMode: function() {
                return this._68O
            },
            setSelectionMode: function(y) {
                var g = this;
                if (g._68O !== y && (y === yh || y === t || y === bs)) {
                    g.cs();
                    var E = g._68O;
                    g._68O = y,
                    g.fp("selectionMode", E, y)
                }
            },
            _21I: function(K) {
                var u = this,
                g = u._dataModel;
                g !== K && (g && (u.cs(), g.umm(u.handleDataModelChange, u)), u._dataModel = K, K.mm(u.handleDataModelChange, u, !0), u.fp(Kj, g, K))
            },
            dispose: function() {
                var e = this;
                e.cs(),
                e._dataModel.umm(e.handleDataModelChange, e)
            },
            handleDataModelChange: function(z) {
                var D = this;
                if (z.kind === ej) {
                    var g = z.data;
                    D.co(g) && (D._73O.remove(g), delete D._map[g._id], D._75I(ej, new Lq(g)))
                } else z.kind === Rg && D.cs()
            },
            getFilterFunc: function() {
                return this._filterFunc
            },
            setFilterFunc: function(s) {
                var N = this;
                if (N._filterFunc !== s) {
                    N.cs();
                    var i = N._filterFunc;
                    N._filterFunc = s,
                    N.fp("filterFunc", i, N._filterFunc)
                }
            },
            _75I: function(P, u, l, s) {
                l && (this._73O.each(function(k) {
                    s[k._id] ? l.remove(k) : l.add(k)
                }), u = l.toList()),
                this._74I.fire({
                    kind: P,
                    datas: new Lq(u)
                })
            },
            addSelectionChangeListener: function(T, q, e) {
                this._74I.add(T, q, e)
            },
            removeSelectionChangeListener: function(M, k) {
                this._74I.remove(M, k)
            },
            _97O: function(W, j) {
                for (var X, E = this,
                o = 0,
                Q = new Lq(W); o < Q.size(); o++) X = Q.get(o),
                (E._filterFunc && !E._filterFunc(X) || j && E.co(X) || !j && !E.co(X) || !E._dataModel.contains(X)) && (Q.removeAt(o), o--);
                return Q
            },
            appendSelection: function(u) {
                var w = this;
                if (w._68O !== yh) {
                    var F, t, h = w._73O,
                    M = w._97O(u, !0);
                    M.isEmpty() || (w.sg() && (F = new Lq(h), t = w._map, h.clear(), w._map = {},
                    M = new Lq(M.get(M.size() - 1))), M.each(function(c) {
                        h.add(c),
                        w._map[c._id] = c
                    }), w._75I("append", M, F, t))
                }
            },
            removeSelection: function(e) {
                var q = this,
                z = q._97O(e),
                D = 0,
                Z = z.size();
                if (0 !== Z) {
                    for (; Z > D; D++) {
                        var M = z.get(D);
                        q._73O.remove(M),
                        delete q._map[M._id]
                    }
                    q._75I(ej, z)
                }
            },
            toSelection: function(z, k) {
                return this._73O.toList(z, k)
            },
            getSelection: function() {
                return this._73O
            },
            each: function(o, N) {
                this._73O.each(o, N)
            },
            setSelection: function(S) {
                var z = this,
                b = z._73O;
                if (z._68O !== yh && !(b.isEmpty() && !S || 1 === b.size() && z.ld() === S)) {
                    var c = new Lq(b),
                    V = z._map;
                    b.clear(),
                    z._map = {};
                    var q = z._97O(S, !0);
                    z.sg() && q.size() > 1 && (q = new Lq(q.get(q.size() - 1))),
                    q.each(function(C) {
                        b.add(C),
                        z._map[C._id] = C
                    }),
                    z._75I("set", F, c, V)
                }
            },
            clearSelection: function() {
                var c = this,
                s = c._73O;
                if (s.size() > 0) {
                    var f = s.toList();
                    s.clear(),
                    c._map = {},
                    c._75I(Rg, f)
                }
            },
            selectAll: function() {
                var e = this;
                if (e._68O !== yh) {
                    var Q, Y, W = e._dataModel.toDatas();
                    if (e._filterFunc) for (Q = 0; Q < W.size(); Q++) Y = W.get(Q),
                    e._filterFunc(Y) || (W.removeAt(Q), Q--);
                    var L = e._73O,
                    h = new Lq(L),
                    X = e._map;
                    L.clear(),
                    e._map = {},
                    e.sg() && W.size() > 1 && (W = new Lq(W.get(W.size() - 1)));
                    var i = W.size();
                    for (Q = 0; i > Q; Q++) Y = W.get(Q),
                    L.add(Y),
                    e._map[Y._id] = Y;
                    e._75I("all", F, h, X)
                }
            },
            size: function() {
                return this._73O.size()
            },
            isEmpty: function() {
                return this._73O.isEmpty()
            },
            contains: function(e) {
                return this._map[e._id] != F
            },
            getLastData: function() {
                var A = this._73O;
                return A.size() > 0 ? A.get(A.size() - 1) : F
            },
            getFirstData: function() {
                var n = this._73O;
                return n.size() > 0 ? n.get(0) : F
            },
            isSelectable: function(v) {
                var d = this;
                return v && d._68O !== yh ? d._filterFunc ? d._filterFunc(v) : !0 : !1
            }
        }),
        vc(C, {
            edgeGroupAgentFunc: F,
            graphViewAutoScrollZone: 16,
            graphViewResettable: !0,
            graphViewPannable: !0,
            graphViewRectSelectable: !0,
            graphViewScrollBarVisible: !0,
            graphViewRectSelectBorderColor: _.rectSelectBorder,
            graphViewRectSelectBackground: Tr,
            graphViewEditPointSize: a ? 17 : 7,
            graphViewEditPointBorderColor: _.editPointBorder,
            graphViewEditPointBackground: _.editPointBackground,
            setEdgeType: function(A, Q, $) {
                cb[A] = Q,
                Mi[A] = $
            },
            getEdgeType: function(s) {
                return cb[s]
            }
        },
        !0),
        vc(b, {
            "2d.selectable": !0,
            "2d.visible": !0,
            "2d.movable": !0,
            "2d.editable": !0,
            "2d.move.mode": V,
            "image.stretch": "fill",
            icons: V,
            ingroup: !0,
            "body.color": V,
            opacity: V,
            pixelPerfect: !0,
            "select.color": jk,
            "select.width": 1,
            "select.padding": 2,
            "select.type": ih,
            "shadow.blur": 6,
            "shadow.offset.x": 3,
            "shadow.offset.y": 3,
            "shadow.color": jk,
            "border.color": V,
            "border.width": 2,
            "border.padding": 2,
            "border.type": ih,
            label: V,
            "label.font": V,
            "label.color": Wp,
            "label.background": V,
            "label.position": 31,
            "label.position.fixed": !1,
            "label.offset.x": 0,
            "label.offset.y": 2,
            "label.rotation": V,
            "label.max": V,
            "label.opacity": V,
            "label.scale": 1,
            "label.align": V,
            label2: V,
            "label2.font": V,
            "label2.color": Wp,
            "label2.background": V,
            "label2.position": 34,
            "label2.position.fixed": !1,
            "label2.offset.x": 0,
            "label2.offset.y": -2,
            "label2.rotation": V,
            "label2.max": V,
            "label2.opacity": V,
            "label2.scale": 1,
            "label2.align": V,
            note: V,
            "note.expanded": !0,
            "note.font": V,
            "note.color": Cf,
            "note.background": jk,
            "note.position": 8,
            "note.offset.x": -3,
            "note.offset.y": 3,
            "note.max": V,
            "note.toggleable": !0,
            "note.border.width": 1,
            "note.border.color": V,
            "note.opacity": V,
            "note.scale": 1,
            "note.align": V,
            note2: V,
            "note2.expanded": !0,
            "note2.font": V,
            "note2.color": Cf,
            "note2.background": jk,
            "note2.position": 3,
            "note2.offset.x": 3,
            "note2.offset.y": -3,
            "note2.max": V,
            "note2.toggleable": !0,
            "note2.border.width": 1,
            "note2.border.color": V,
            "note2.opacity": V,
            "note2.scale": 1,
            "note2.align": V,
            "group.type": V,
            "group.image": V,
            "group.image.stretch": "fill",
            "group.repeat.image": V,
            "group.padding": 8,
            "group.padding.left": 0,
            "group.padding.right": 0,
            "group.padding.top": 0,
            "group.padding.bottom": 0,
            "group.position": 17,
            "group.toggleable": !0,
            "group.title.font": V,
            "group.title.color": Cf,
            "group.title.background": _.groupTitleBackground,
            "group.title.align": Tb,
            "group.background": _.groupBackground,
            "group.depth": 1,
            "group.border.width": 1,
            "group.border.pattern": V,
            "group.border.color": Ln,
            "group.border.cap": ol,
            "group.border.join": qc,
            "group.gradient": F,
            "group.gradient.color": "#FFF",
            shape: V,
            "shape.background": Ln,
            "shape.repeat.image": V,
            "shape.border.width": 0,
            "shape.border.color": Ln,
            "shape.border.3d": !1,
            "shape.border.3d.color": V,
            "shape.border.3d.accuracy": V,
            "shape.border.cap": ol,
            "shape.border.join": qc,
            "shape.border.pattern": V,
            "shape.gradient": F,
            "shape.gradient.color": "#FFF",
            "shape.depth": 0,
            "shape.dash": !1,
            "shape.dash.pattern": cl,
            "shape.dash.offset": 0,
            "shape.dash.color": Oc,
            "shape.dash.width": V,
            "shape.dash.3d": !1,
            "shape.dash.3d.color": V,
            "shape.dash.3d.accuracy": V,
            "shape.polygon.side": 6,
            "shape.arc.from": y,
            "shape.arc.to": X,
            "shape.arc.close": !0,
            "shape.arc.oval": !1,
            "shape.corner.radius": V,
            "edge.type": V,
            "edge.points": V,
            "edge.segments": V,
            "edge.color": Ln,
            "edge.width": 2,
            "edge.offset": 20,
            "edge.group": 0,
            "edge.expanded": !0,
            "edge.gap": 12,
            "edge.toggleable": !0,
            "edge.center": !1,
            "edge.3d": !1,
            "edge.3d.color": V,
            "edge.3d.accuracy": V,
            "edge.cap": ol,
            "edge.join": qc,
            "edge.source.position": 17,
            "edge.source.offset.x": 0,
            "edge.source.offset.y": 0,
            "edge.target.position": 17,
            "edge.target.offset.x": 0,
            "edge.target.offset.y": 0,
            "edge.pattern": V,
            "edge.dash": !1,
            "edge.dash.pattern": cl,
            "edge.dash.offset": 0,
            "edge.dash.color": Oc,
            "edge.dash.width": V,
            "edge.dash.3d": !1,
            "edge.dash.3d.color": V,
            "edge.dash.3d.accuracy": V,
            "edge.independent": !1,
            "attach.row.index": 0,
            "attach.column.index": 0,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 0,
            "attach.padding.left": 0,
            "attach.padding.right": 0,
            "attach.padding.top": 0,
            "attach.padding.bottom": 0,
            "attach.index": -1,
            "attach.offset": 0,
            "attach.offset.relative": !1,
            "attach.offset.opposite": !1,
            "attach.thickness": V,
            "attach.gap": 0,
            "attach.gap.relative": !1,
            "grid.row.count": 1,
            "grid.column.count": 1,
            "grid.row.percents": V,
            "grid.column.percents": V,
            "grid.border": 1,
            "grid.border.left": 0,
            "grid.border.right": 0,
            "grid.border.top": 0,
            "grid.border.bottom": 0,
            "grid.gap": 1,
            "grid.background": _.gridBackground,
            "grid.depth": 1,
            "grid.cell.depth": -1,
            "grid.cell.border.color": _.gridCellBorderColor,
            "grid.block": V,
            "grid.block.padding": 3,
            "grid.block.width": 1,
            "grid.block.color": _.gridBlockColor,
            text: "",
            "text.align": "left",
            "text.vAlign": "middle",
            "text.color": Wp,
            "text.font": El,
            "text.shadow": !1,
            "text.shadow.color": gc,
            "text.shadow.blur": 6,
            "text.shadow.offset.x": 3,
            "text.shadow.offset.y": 3
        },
        !0),
        vc(si, {
            _76I: function(D, c, G) {
                this._39I && this._39I.fire({
                    data: D,
                    oldIndex: c,
                    newIndex: G
                })
            },
            addIndexChangeListener: function(d, v, z) {
                var p = this;
                p._39I || (p._39I = new Lf),
                p._39I.add(d, v, z)
            },
            removeIndexChangeListener: function(x, z) {
                this._39I.remove(x, z)
            },
            prepareRemove: function(G) {
                wn(G) && (G.setSource(F), G.setTarget(F)),
                G._70O && G._70O.toList().each(this.remove, this),
                G._69O && G._69O.toList().each(function(w) {
                    w.setHost(F)
                }),
                G._host && G.setHost(F)
            },
            onAdded: function(O) {
                this.isAutoAdjustIndex() && this._76O(O)
            },
            onDataPropertyChanged: function(O, H) {
                jo[H.property] && this.isAutoAdjustIndex() && this._76O(O)
            },
            isAdjustable: function(o) {
                return Bm(o) || wn(o)
            },
            isAdjustedToBottom: function(h) {
                return sl(h) ? h.isExpanded() && tj(h) : !1
            },
            _76O: function(k) {
                var z = this;
                z.isAdjustedToBottom(k) ? (z.sendToBottom(k), k.eachChild(z._76O, z)) : z.sendToTop(k)
            },
            sendToTop: function(t) {
                var G = this;
                if (G.contains(t) && G.isAdjustable(t)) {
                    var m = G._datas;
                    if (t !== m.get(G.size() - 1)) {
                        var H = m.indexOf(t);
                        m.removeAt(H),
                        m.add(t),
                        G._76I(t, H, G.size() - 1)
                    }
                    if (wn(t)) {
                        var h = t._40I;
                        h && !G.isAdjustedToBottom(h) && G.sendToTop(h),
                        h = t._41I,
                        h && !G.isAdjustedToBottom(h) && G.sendToTop(h)
                    }
                    t._69O && t._69O.each(function(w) {
                        w.isRelatedTo(t) || Bm(t) && w.isLoopedHostOn(t) || G.sendToTop(w)
                    }),
                    t.ISubGraph || (!sl(t) || t.isExpanded()) && t._adjustChildrenToTop && t.eachChild(function(E) {
                        wn(E) || G.sendToTop(E)
                    })
                }
            },
            sendToBottom: function(s, W) {
                var N = this;
                if (s !== W && N.contains(s) && N.isAdjustable(s) && (!W || N.contains(W))) {
                    var M = N._datas,
                    P = M.remove(s),
                    k = W ? N._datas.indexOf(W) : 0;
                    if (M.add(s, k), P !== k) {
                        N._76I(s, P, k);
                        var Y = s._parent; ! Y || Y.ISubGraph || wn(Y) || N.sendToBottom(s._parent, s)
                    }
                }
            }
        }),
        vc(Yn, {
            ms_edit: function(N) {
                N._46O = function(r) {
                    var V = this,
                    U = V.gv.dm(),
                    L = U.getHistoryManager(),
                    z = V._index,
                    o = V._89I,
                    Q = V._node,
                    M = V._shape,
                    E = V._edge,
                    t = V._77I;
                    Q && o ? (this.fi({
                        kind: "endEditRect",
                        event: r,
                        data: Q,
                        direction: o
                    }), L && L.endInteraction()) : M && z >= 0 ? (V.fi({
                        kind: "endEditPoint",
                        event: r,
                        data: M,
                        index: z
                    }), L && L.endInteraction()) : E && z >= 0 ? (V.fi({
                        kind: "endEditPoint",
                        event: r,
                        data: E,
                        index: z
                    }), L && L.endInteraction()) : t && (V.fi({
                        kind: "endEditRotation",
                        event: r,
                        data: t
                    }), L && L.endInteraction())
                },
                N._78I = function(c) {
                    var q = this;
                    q.autoScroll(c);
                    var M = q.gv.lp(c),
                    t = q._index,
                    y = q._89I,
                    l = q._node,
                    I = q._shape,
                    O = q._edge,
                    x = q._77I;
                    if (l && y) q._80O(M),
                    q.fi({
                        kind: "betweenEditRect",
                        event: c,
                        data: l,
                        direction: y
                    });
                    else if (I && t >= 0) M.e = I.getPoints().get(t).e,
                    I.setPoint(t, M),
                    q.fi({
                        kind: "betweenEditPoint",
                        event: c,
                        data: I,
                        index: t
                    });
                    else if (O && t >= 0) {
                        var A = O.s(ah);
                        M.e = A.get(t).e,
                        A.set(t, M),
                        O.fp(ah, F, A),
                        q.fi({
                            kind: "betweenEditPoint",
                            event: c,
                            data: O,
                            index: t
                        })
                    } else if (x) {
                        var D = x.p(),
                        f = S + B(M.y - D.y, M.x - D.x);
                        R(f) < .04 && (f = 0),
                        x.setRotation(f),
                        q.fi({
                            kind: "betweenEditRotation",
                            event: c,
                            data: x
                        })
                    }
                },
                N._80O = function(l) {
                    var U = this,
                    m = U._rect,
                    n = m.x,
                    A = m.y,
                    Z = m.width,
                    h = m.height,
                    j = U._89I;
                    "northwest" === j ? m = Hd(l, {
                        x: n + Z,
                        y: A + h
                    }) : j === $e ? m = Hd({
                        x: n,
                        y: l.y
                    },
                    {
                        x: n + Z,
                        y: A + h
                    }) : "northeast" === j ? m = Hd({
                        x: n,
                        y: l.y
                    },
                    {
                        x: l.x,
                        y: A + h
                    }) : j === Mr ? m = Hd({
                        x: l.x,
                        y: A
                    },
                    {
                        x: n + Z,
                        y: A + h
                    }) : j === uk ? m = Hd({
                        x: n,
                        y: A
                    },
                    {
                        x: l.x,
                        y: A + h
                    }) : "southwest" === j ? m = Hd({
                        x: l.x,
                        y: A
                    },
                    {
                        x: n + Z,
                        y: l.y
                    }) : "south" === j ? m = Hd({
                        x: n,
                        y: A
                    },
                    {
                        x: n + Z,
                        y: l.y
                    }) : "southeast" === j && (m = Hd({
                        x: n,
                        y: A
                    },
                    l)),
                    U._node.setRect(m)
                },
                N._80I = function(r, s, Q, I, j) {
                    var o = this,
                    t = o.gv.getEditPointSize() + 2;
                    return je({
                        x: s - t / 2,
                        y: Q - t / 2,
                        width: t,
                        height: t
                    },
                    r) ? (o._89I !== I && (o.setCursor(j), o._89I = I), !0) : !1
                },
                N._79I = function(M, O, x) {
                    var Z = this,
                    _ = Z.gv,
                    $ = O ? _.getDataUI(O) : F,
                    D = $ ? $._55O: F;
                    if (D) {
                        var V, W, I, f = _.getEditPointSize() + 2,
                        K = _.lp(M);
                        if (Bm(O)) {
                            if (D._56O && Bm(O) && (W = D._98o, je({
                                x: W.x - f / 2,
                                y: W.y - f / 2,
                                width: f,
                                height: f
                            },
                            K))) return Z._77I = O,
                            x && Z.fi({
                                kind: "beginEditRotation",
                                event: M,
                                data: O
                            }),
                            Z.setCursor("crosshair"),
                            !0;
                            if (D._43O && O instanceof wr) for (I = O.getPoints(), V = I.size() - 1; V >= 0; V--) if (W = I.get(V), je({
                                x: W.x - f / 2,
                                y: W.y - f / 2,
                                width: f,
                                height: f
                            },
                            K)) return Z._index = V,
                            Z._shape = O,
                            x && Z.fi({
                                kind: "beginEditPoint",
                                event: M,
                                data: O,
                                index: V
                            }),
                            Z.setCursor("crosshair"),
                            !0;
                            if (D._42O) {
                                var J = O.getRect(),
                                Q = J.x,
                                q = J.y,
                                s = J.width,
                                u = J.height;
                                if (Z._80I(K, Q, q, "northwest", "nwse-resize") || Z._80I(K, Q + s / 2, q, $e, Xo) || Z._80I(K, Q + s, q, "northeast", "nesw-resize") || Z._80I(K, Q, q + u / 2, Mr, Sf) || Z._80I(K, Q + s, q + u / 2, uk, Sf) || Z._80I(K, Q, q + u, "southwest", "nesw-resize") || Z._80I(K, Q + s / 2, q + u, "south", Xo) || Z._80I(K, Q + s, q + u, "southeast", "nwse-resize")) return Z._node = O,
                                Z._rect = O.getRect(),
                                x && Z.fi({
                                    kind: "beginEditRect",
                                    event: M,
                                    data: O,
                                    direction: Z._89I
                                }),
                                !0
                            }
                        }
                        if (D._43O && wn(O) && O.s(Ae) === ue && (I = O.s(ah))) for (V = I.size() - 1; V >= 0; V--) if (W = I.get(V), je({
                            x: W.x - f / 2,
                            y: W.y - f / 2,
                            width: f,
                            height: f
                        },
                        K)) return Z._index = V,
                        Z._edge = O,
                        x && Z.fi({
                            kind: "beginEditPoint",
                            event: M,
                            data: O,
                            index: V
                        }),
                        Z.setCursor("crosshair"),
                        !0
                    }
                    return ! 1
                }
            },
            ms_gv: function(l) {
                l._currentSubGraph = F,
                l.upSubGraph = function() {
                    this.setCurrentSubGraph(Qo(this._currentSubGraph))
                },
                l.isVisible = function(q) {
                    var P = this;
                    if (Qo(q) !== P._currentSubGraph) return ! 1;
                    if (wn(q)) {
                        var A = q._40I,
                        K = q._41I;
                        if (!A || !K) return ! 1;
                        if (! (q.s("edge.independent") || P.isVisible(A) && P.isVisible(K))) return ! 1;
                        if (q.isEdgeGroupHidden()) return ! 1
                    } else for (var O = q._parent; O && !O.ISubGraph;) {
                        if (sl(O) && (!O.isExpanded() || !P.isVisible(O))) return ! 1;
                        O = O._parent
                    }
                    if (P instanceof Iq) {
                        if (!q.s("3d.visible")) return ! 1
                    } else if (!q.s("2d.visible")) return ! 1;
                    return P._visibleFunc ? P._visibleFunc(q) : !0
                },
                l._16o = function(z) {
                    var L = this;
                    z.datas.each(function(I) {
                        L.invalidateData(I);
                        var X = I._parent;
                        sl(X) && Bm(I) && I.s(ss) && (L.invalidateData(X), X._49I && X._49I.each(function(O) {
                            L.invalidateData(O)
                        }))
                    }),
                    L.onSelectionChanged(z)
                },
                l.onSelectionChanged = function(K) {
                    var N = this,
                    i = N.sm();
                    if (1 === i.size() && ("set" === K.kind || "append" === K.kind)) {
                        var F = i.ld();
                        N.isAutoMakeVisible() && N.makeVisible(F),
                        N._76O && N._dataModel.isAutoAdjustIndex() && N._76O(F)
                    }
                },
                l.makeVisible = function(n) {
                    if (n) {
                        var m = this,
                        E = m.getDataUI ? m.getDataUI(n) : m.getData3dUI(n);
                        if (E) {
                            var Z = n,
                            v = Qo(n);
                            for (v !== m._currentSubGraph && m.setCurrentSubGraph(v); (Z = Z._parent) && Z !== v;) sl(Z) && Z.setExpanded(!0);
                            m._23I = n,
                            m.iv()
                        }
                    }
                },
                l.getLabel = function(Z) {
                    var G = Z.getStyle(br);
                    return G === V ? Z.getName() : G
                },
                l.getLabelBackground = function(T) {
                    return T.getStyle("label.background")
                },
                l.getLabelColor = function(y) {
                    return y.getStyle("label.color")
                },
                l.getLabel2 = function(o) {
                    return o.getStyle("label2")
                },
                l.getLabel2Background = function($) {
                    return $.getStyle("label2.background")
                },
                l.getLabel2Color = function(g) {
                    return g.getStyle("label2.color")
                },
                l.getNote = function(h) {
                    return h.getStyle(Wr)
                },
                l.getNoteBackground = function(Q) {
                    return Q.getStyle("note.background")
                },
                l.getNote2 = function(Q) {
                    return Q.getStyle(cp)
                },
                l.getNote2Background = function(u) {
                    return u.getStyle("note2.background")
                },
                l.handleClick = function(G, b, N) {
                    var r = this;
                    b ? (r.fi({
                        kind: "clickData",
                        event: G,
                        data: b,
                        part: N
                    }), r.onDataClicked(b, G)) : (r.fi({
                        kind: "clickBackground",
                        event: G
                    }), r.onBackgroundClicked(G))
                },
                l.handleDoubleClick = function(o, Z, v) {
                    var s = this;
                    oi(o) && (Z ? (s.fi({
                        kind: "doubleClickData",
                        event: o,
                        data: Z,
                        part: v
                    }), s.onDataDoubleClicked(Z, o, v), s.checkDoubleClickOnNote(o, Z, v) || s.checkDoubleClickOnRotation && s.checkDoubleClickOnRotation(o, Z, v) || (wn(Z) ? s.onEdgeDoubleClicked(Z, o, v) : Z.ISubGraph ? s.onSubGraphDoubleClicked(Z, o, v) : sl(Z) ? s.onGroupDoubleClicked(Z, o, v) : Z.IDoorWindow ? s.onDoorWindowDoubleClicked(Z, o, v) : Z.ICSGBox && s.onCSGBoxDoubleClicked(Z, o, v))) : (s.fi({
                        kind: "doubleClickBackground",
                        event: o
                    }), s.onBackgroundDoubleClicked(o)))
                },
                l.onSubGraphDoubleClicked = function(g) {
                    this.setCurrentSubGraph(g)
                },
                l.onEdgeDoubleClicked = function(U, l) {
                    U.ISubGraph && !ui(l) ? this.setCurrentSubGraph(U) : U.s("edge.toggleable") && U.toggle()
                },
                l.onGroupDoubleClicked = function(O) {
                    O.s("group.toggleable") && O.toggle()
                },
                l.onDoorWindowDoubleClicked = function(t) {
                    t.s("dw.toggleable") && t.toggle(!0)
                },
                l.onCSGBoxDoubleClicked = function(u, O) {
                    var A = this;
                    if (A instanceof Iq) {
                        var L = A.getHitFaceInfo(O);
                        L && L.face && u.s(L.face + ".toggleable") && u.toggleFace(L.face, !0)
                    }
                },
                l.onBackgroundClicked = function() {},
                l.onBackgroundDoubleClicked = function() {
                    this.upSubGraph()
                },
                l.onDataClicked = function() {},
                l.onDataDoubleClicked = function() {},
                l.onAutoLayoutEnded = function() {},
                l.onMoveEnded = function() {},
                l.onPanEnded = function() {},
                l.onPinchEnded = function() {},
                l.onRectSelectEnded = function() {},
                l.onZoomEnded = function() {}
            },
            ms_icons: function(w) {
                w.getRotation = function(V) {
                    return V == F ? 0 : V
                },
                w._15O = function() {
                    var z = this,
                    b = z.s(Ph);
                    if (b) {
                        var m = z,
                        H = z.data || z._data,
                        k = z._38o = {
                            icons: b,
                            rects: {}
                        };
                        for (var D in b) {
                            var J = b[D],
                            E = dj(J.shape3d, H, m);
                            if (! (dj(J.visible, H, m) === !1 || dj(J.for3d, H, m) && !z.I3d || E && !z.I3d)) {
                                var U = E ? [E] : dj(J.names, H, m),
                                V = U ? U.length: 0,
                                N = dj(J.position, H, m) || 3,
                                e = dj(J.offsetX, H, m) || 0,
                                I = dj(J.offsetY, H, m) || 0,
                                K = dj(J.direction, H, m) || uk,
                                q = dj(J.gap, H, m),
                                S = q != F ? q: 1,
                                r = dj(J.rotation, H, m),
                                _ = dj(J.keepOrien, H, m),
                                y = dj(J.rotationFixed, H, m) ? r: z.getRotation(r, _, N),
                                R = F,
                                A = k.rects[D] = new Array(V);
                                A.rotation = y;
                                for (var i = 0; V > i; i++) {
                                    var g, u, G, n, L = U[i];
                                    if (E) G = 0,
                                    n = 0;
                                    else {
                                        var v = oq(L);
                                        G = dj(J.width, H, m),
                                        n = dj(J.height, H, m),
                                        G == F && (G = Dr(v, H)),
                                        n == F && (n = Ll(v, H))
                                    }
                                    if (R ? K === uk ? e += G / 2 : K === Mr ? e -= G / 2 : K === $e ? I -= n / 2 : I += n / 2 : R = {
                                        width: G,
                                        height: n
                                    },
                                    z.I3d) {
                                        var W = -G / 2,
                                        O = -n / 2;
                                        u = {
                                            width: G,
                                            height: n,
                                            mat: z._16O(dj(J.autorotate, H, m), N, R, dj(J.face, H, m) || ps, dj(J.t3, H, m), dj(J.r3, H, m), dj(J.rotationMode, H, m), e, I),
                                            vs: new zl([W, -O, 0, W, -O - n, 0, W + G, -O - n, 0, W + G, -O, 0])
                                        }
                                    } else g = z.getPosition(N, e, I, R, dj(J.positionFixed, H, m)),
                                    u = {
                                        x: g.x - G / 2,
                                        y: g.y - n / 2,
                                        width: G,
                                        height: n
                                    },
                                    z._68o(u, y);
                                    A[i] = u,
                                    K === uk ? e += G / 2 + S: K === Mr ? e -= G / 2 + S: K === $e ? I -= n / 2 + S: I += n / 2 + S
                                }
                            }
                        }
                    }
                }
            }
        });
        var rm = {
            1 : 1,
            2 : 1,
            6 : 1,
            9 : 1,
            10 : 1,
            14 : 1,
            15 : 1,
            16 : 1,
            21 : 1,
            22 : 1,
            26 : 1,
            29 : 1,
            30 : 1,
            34 : 1,
            36 : 1,
            38 : 1,
            40 : 1,
            42 : 1,
            45 : 1,
            50 : 1,
            52 : 1,
            54 : 1
        },
        Nc = {
            3 : 1,
            7 : 1,
            11 : 1,
            17 : 1,
            23 : 1,
            27 : 1,
            31 : 1,
            44 : 1,
            46 : 1,
            47 : 1,
            49 : 1
        },
        kd = {
            translateX: 1,
            translateY: 1,
            zoom: 1,
            scrollBarVisible: 1
        },
        jo = {
            sourceAgent: 1,
            targetAgent: 1,
            expanded: 1,
            parent: 1,
            host: 1
        },
        hi = {
            position: 1,
            width: 1,
            height: 1,
            expanded: 1,
            rotation: 1,
            "s:edge.points": 1
        },
        om = {
            "edge.type": 1,
            "edge.group": 1
        },
        Wl = {
            rotation: 1,
            rotationX: 1,
            rotationZ: 1
        },
        Vf = {
            position: 1,
            width: 1,
            height: 1,
            "s:grid.row.count": 1,
            "s:grid.column.count": 1,
            "s:grid.row.percents": 1,
            "s:grid.column.percents": 1,
            "s:grid.border": 1,
            "s:grid.border.left": 1,
            "s:grid.border.right": 1,
            "s:grid.border.top": 1,
            "s:grid.border.bottom": 1,
            "s:grid.gap": 1
        },
        Bk = {
            "attach.row.index": 1,
            "attach.column.index": 1,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 1,
            "attach.padding.left": 1,
            "attach.padding.right": 1,
            "attach.padding.top": 1,
            "attach.padding.bottom": 1,
            "attach.index": 1,
            "attach.offset": 1,
            "attach.offset.relative": 1,
            "attach.offset.opposite": 1,
            "attach.gap": 1,
            "attach.gap.relative": 1,
            "attach.thickness": 1
        },
        Wo = {
            shape: 1,
            thickness: 1,
            position: 1
        },
        _p = function(R, t) {
            if (!R || !sl(t) || t.isEmpty()) return ! 1;
            for (R = R._parent; sl(R);) {
                if (R === t) return ! 0;
                R = R._parent
            }
            return ! 1
        },
        Qo = function(Z) {
            if (!Z) return F;
            if (wn(Z)) {
                var t = Z._40I,
                g = Z._41I;
                if (!t || !g) return F;
                var L = Qo(t),
                Y = Qo(g);
                return L === Y ? L: F
            }
            for (var B = Z._parent; wn(B) && !B.ISubGraph;) B = B._parent;
            return B ? B.ISubGraph ? B: Qo(B) : F
        },
        Pd = function(V, U, E, L) {
            var x = U.getStyle(E) * L;
            x && tq(V, x),
            x = U.getStyle(E + ".left") * L,
            x && (V.x -= x, V.width += x),
            x = U.getStyle(E + ".right") * L,
            x && (V.width += x),
            x = U.getStyle(E + ".top") * L,
            x && (V.y -= x, V.height += x),
            x = U.getStyle(E + ".bottom") * L,
            x && (V.height += x),
            V.width < 0 && (V.width = -V.width, V.x -= V.width),
            V.height < 0 && (V.height = -V.height, V.y -= V.height)
        },
        tj = function(c) {
            for (var b, U = 0,
            $ = c.size(); $ > U; U++) if (b = c.getChildAt(U), Bm(b) && tj(b)) return ! 0;
            return c.hasAgentEdges()
        },
        is = function(h) {
            if (!h) return F;
            for (var T = h._parent; sl(T);) {
                if (!sl(T._parent)) return T.isExpanded() ? h: T;
                T.isExpanded() || (h = T),
                T = T._parent
            }
            return h
        },
        Fn = function(W, R) {
            if (!W || !R) return F;
            var K, g, N, b = Qo(W),
            j = Qo(R);
            if (b !== j) {
                for (; j && b !== j;) j = Qo(j);
                if (b === j) return W;
                K = new Lq,
                K.add(W, 0);
                for (var c = W._parent; Bm(c) && !R.isDescendantOf(c);) K.add(c, 0),
                c = c._parent;
                for (N = K.size(), g = 0; N > g; g++) {
                    var A = K.get(g);
                    if (sl(A) && !A.isExpanded()) return A;
                    if (A.ISubGraph) return A
                }
                return W
            }
            return W
        },
        qf = function(D) {
            if (D.isLooped()) return D._source;
            var R = is(D._source),
            d = is(D._target);
            return R === d ? D._source: Fn(R, d)
        },
        jb = function(X) {
            if (X.isLooped()) return X._target;
            var i = is(X._source),
            _ = is(X._target);
            return i === _ ? X._target: Fn(_, i)
        },
        Mo = function(A, s) {
            var n;
            if (sl(s) && s.isExpanded()) {
                var _ = A.getDataUI(s);
                _ && _._88I && (n = _._88I.rect)
            }
            return n ? n: s.getRect()
        },
        Jl = function(V, g, f, v, P) {
            return g ? (f = jc(f, Mo(V, g)), f.x += v, f.y += P, f) : F
        },
        bd = function($, c) {
            if (!$ || !c) return F;
            var f, A, u, X, h, Q;
            if ($ === c) {
                if (X = $.getLoopedEdges(), !X) return F;
                X = new Lq(X)
            } else {
                if (h = $.getAgentEdges(), Q = c.getAgentEdges(), !h || !Q) return F;
                for (A = h.size(), f = 0; A > f; f++) u = h.get(f),
                Q.contains(u) && (X || (X = new Lq), X.add(u))
            }
            if (X) for (f = 0; f < X.size(); f++) u = X.get(f),
            u.getStyle(Ae) === ue && (u._22I(F), X.removeAt(f), f--);
            return X
        },
        lc = function(k, d) {
            var E = bd(k, d);
            if (E && !E.isEmpty()) {
                if (1 === E.size()) return E.get(0)._22I(F),
                void 0;
                var i = new Lq,
                r = new Lq;
                E.each(function(s) {
                    var p = s.s("edge.group");
                    i.contains(p) || i.add(p)
                }),
                i.sort(),
                i.each(function(s) {
                    r.add(new Y.EdgeGroup(E.toList(function(t) {
                        return s === t.s("edge.group")
                    }), r))
                }),
                r.each(function(g) {
                    g.each(function(b) {
                        b._22I(g)
                    })
                })
            }
        },
        Xk = function(Q, j) {
            if (j) {
                var u = j.rect,
                f = j.color,
                w = j.rotation,
                J = j.labelWidth,
                O = j.background,
                L = j.opacity,
                B = j.scale,
                $ = B != F && 1 !== B;
                if (L != F) {
                    var y = Q.globalAlpha;
                    Q.globalAlpha *= L
                }
                if (w || $) {
                    Q.save();
                    var a = u.x + u.width / 2,
                    c = u.y + u.height / 2;
                    Oj(Q, a, c),
                    w && Wk(Q, w),
                    $ && Q.scale(B, B),
                    Oj(Q, -a, -c)
                }
                if (O && qe(Q, u.x, u.y, u.width, u.height, O), J) {
                    var P = u.width,
                    K = Q.createLinearGradient(u.x, u.y, u.x + P, u.y);
                    K.addColorStop(0, f),
                    K.addColorStop(.9, f),
                    K.addColorStop(1, fh),
                    f = K,
                    u.width = J
                }
                Dh(Q, j.ss, u, j.font, f, j.align),
                J && (u.width = P),
                (w || $) && Q.restore(),
                L != F && (Q.globalAlpha = y)
            }
        },
        $c = function(N, L) {
            if (L) {
                var Z = L.rect,
                x = Z.x,
                O = Z.y,
                P = Z.width,
                J = Z.height,
                l = L.background,
                H = L.backgroundImage,
                C = L.borderWidth,
                u = L.borderColor,
                o = L.labelWidth,
                A = L.opacity,
                R = L.scale,
                _ = R != F && 1 !== R;
                if (A != F) {
                    var z = N.globalAlpha;
                    N.globalAlpha *= A
                }
                if (_) {
                    N.save();
                    var V = Z.x + Z.width / 2,
                    g = Z.y + Z.height / 2;
                    Oj(N, V, g),
                    N.scale(R, R),
                    Oj(N, -V, -g)
                }
                if (L.expanded) {
                    var E = s(8, P / 4),
                    k = O + J - 8;
                    if (N.fillStyle = l, N.beginPath(), N.moveTo(x, O), N.lineTo(x, k), N.lineTo(x + P / 2, k), N.lineTo(x + P / 2, O + J), N.lineTo(x + P / 2 + E, k), N.lineTo(x + P, k), N.lineTo(x + P, O), N.closePath(), N.fill(), C && (N.lineWidth = C, N.lineJoin = "round", N.lineCap = "round", N.strokeStyle = u ? u: rh(l), N.beginPath(), N.moveTo(x + P, O), N.lineTo(x + P, k), N.lineTo(x + P / 2 + E, k), N.lineTo(x + P / 2, O + J), N.stroke(), N.strokeStyle = u ? u: fi(l), N.beginPath(), N.moveTo(x + P, O), N.lineTo(x, O), N.lineTo(x, k), N.lineTo(x + P / 2, k), N.lineTo(x + P / 2, O + J), N.stroke()), H) qg(N, oq(H), Sh, Z.x, Z.y, Z.width, Z.height - 8, L.data, L.view);
                    else {
                        if (Z.height -= 8, l = L.color, o) {
                            var t = P,
                            a = N.createLinearGradient(x, O, x + t, O);
                            a.addColorStop(0, l),
                            a.addColorStop(.9, l),
                            a.addColorStop(1, fh),
                            l = a,
                            Z.width = o
                        }
                        Dh(N, L.ss, Z, L.font, l, L.align),
                        o && (Z.width = t),
                        Z.height += 8
                    }
                } else if (L.icon) zd(N, oq(L.icon), x, O, P, J, L.data, L.view);
                else {
                    var w = P / 2;
                    C && (N.lineWidth = C, N.lineJoin = "round", N.lineCap = "round", N.strokeStyle = u ? u: rh(l), N.beginPath(), N.arc(x + w, O + w, w, S, 1.6 * y, !0), N.moveTo(x + w, O + J), N.lineTo(x + P - w / 5, O + w), N.stroke(), N.strokeStyle = u ? u: fi(l), N.beginPath(), N.arc(x + w, O + w, w, 1.6 * y, S, !0), N.moveTo(x + w, O + J), N.lineTo(x + w / 5, O + w), N.stroke()),
                    N.fillStyle = l,
                    N.beginPath(),
                    N.arc(x + w, O + w, w, 0, X, !0),
                    N.moveTo(x + w, O + J),
                    N.lineTo(x + P - w / 5, O + w),
                    N.lineTo(x + w / 5, O + w),
                    N.closePath(),
                    N.fill(),
                    N.fillStyle = L.color,
                    N.beginPath(),
                    N.arc(x + w, O + w, w / 3, 0, X, !0),
                    N.fill()
                }
                _ && N.restore(),
                A != F && (N.globalAlpha = z)
            }
        },
        pe = function(V, o) {
            return o > 2 * V ? V: o / 2
        },
        ud = function(W, _, l, f) {
            if (!W || !_) return 0;
            var O = B(_.y - W.y, _.x - W.x);
            return l || (O = _.x < W.x ? O + y: O),
            O + f
        },
        eh = function(U, X, Z, A, k, x, J) {
            J && (U.x > X.x || U.x === X.x && U.y > X.y) && (Z = Vo[Z], k = -k);
            var m = jc(Z, {
                x: 0,
                y: 0,
                width: ep(U, X),
                height: 0
            },
            x);
            return m.x += A,
            m.y += k,
            m = new ls(B(X.y - U.y, X.x - U.x)).tf(m),
            m.x += U.x,
            m.y += U.y,
            m
        },
        ic = function(S, X, F, Z, q) {
            if (S._19Q = !0, !F.getEdgeGroup()) return Z ? F.s("edge.gap") : 0;
            var y, x = 0,
            J = 0,
            R = 0;
            if (F.getEdgeGroup().getSiblings().each(function(j) {
                j.each(function(l) {
                    if (X.isVisible(l) && l.s(Ae) == q) {
                        var d = l.s("edge.gap");
                        y ? (J += R / 2 + d / 2, R = d) : (y = l, R = d),
                        l === F && (x = J)
                    }
                })
            }), Z) return J - x + R;
            var z = x - J / 2;
            return y && F._40I !== y._40I && (S._19Q = !1),
            z
        },
        Ah = function() {
            var K = function(S) {
                var Y = [];
                return S.forEach(function(B) {
                    Y.push({
                        x: B.x,
                        y: B.y
                    }),
                    Y.push({
                        x: B.x + B.width,
                        y: B.y + B.height
                    }),
                    Y.push({
                        x: B.x + B.width,
                        y: B.y
                    }),
                    Y.push({
                        x: B.x,
                        y: B.y + B.height
                    })
                }),
                Y
            };
            return function(W, h, e) {
                if ("oval" === W) {
                    var N = 0,
                    L = e.height / e.width,
                    r = L * L,
                    D = e.x + e.width / 2,
                    q = e.y + e.height / 2,
                    j = K(h);
                    j.forEach(function(Z) {
                        var t = Z.x - D,
                        M = Z.y - q,
                        d = t * t + M * M / r;
                        d > N && (N = d)
                    }),
                    N = k(N);
                    var $ = L * N;
                    return {
                        x: D - N,
                        y: q - $,
                        width: 2 * N,
                        height: 2 * $
                    }
                }
                if ("circle" === W) {
                    var Q = 0,
                    D = e.x + e.width / 2,
                    q = e.y + e.height / 2,
                    j = K(h);
                    return j.forEach(function(m) {
                        var A = m.x - D,
                        g = m.y - q,
                        n = A * A + g * g;
                        n > Q && (Q = n)
                    }),
                    Q = k(Q),
                    {
                        x: D - Q,
                        y: q - Q,
                        width: 2 * Q,
                        height: 2 * Q
                    }
                }
                return "roundRect" === W ? (tq(e, s(e.width, e.height) / 16), e) : e
            }
        } (),
        lf = Y.graph = {},
        Ug = function(v, J, U) {
            eg(K + ".graph." + v, J, U)
        };
        Y.layout = {};
        var En = {
            comps: [{
                type: Fb,
                points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 57, 83, 66, 113, 112, 122, 85, 83, 65, 54, 105, 82, 97, 101, 116, 87, 49, 115, 97, 70, 80, 102, 49, 113, 99, 88, 114, 84, 117, 53, 107, 110, 99, 61],
                borderWidth: 1,
                borderColor: F
            }]
        };
        En[$o] = En[$f] = 160,
        Td("node_image", yf(30, 30, [{
            type: ih,
            rect: [4, 5, 22, 16],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [2, 3, 26, 20],
            borderWidth: 1,
            borderColor: Ln
        },
        {
            type: ih,
            rect: [11, 23, 8, 4],
            background: Ln
        },
        {
            type: ih,
            rect: [6, 27, 18, 2],
            background: Ln
        }])),
        Td("node_icon", yf(16, 16, [{
            type: ih,
            rect: [2, 2, 12, 10],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: Af,
            rect: [2, 2, 12, 10],
            width: 1,
            color: Ln
        },
        {
            type: ih,
            rect: [6, 12, 4, 2],
            background: Ln
        },
        {
            type: ih,
            rect: [4, 14, 8, 1],
            background: Ln
        }])),
        Td("group_image", yf(66, 39, [{
            type: ih,
            rect: [44.3, 18, 18.1, 12.8],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [3.3, 17.8, 18.1, 12.8],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [15.8, 3.2, 33.5, 26.4],
            borderWidth: 1,
            borderColor: Ln,
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [26.2, 29.4, 12.8, 4.2],
            background: Ln
        },
        {
            type: ih,
            rect: [21.3, 33.5, 22.5, 2.3],
            background: Ln
        },
        {
            type: ih,
            rect: [5.3, 32.7, 14.1, 2.1],
            background: Ln
        },
        {
            type: ih,
            rect: [9, 30.4, 6.7, 2.4],
            background: Ln
        },
        {
            type: ih,
            rect: [50, 30.7, 6.7, 2.4],
            background: Ln
        },
        {
            type: ih,
            rect: [46.3, 33, 14.1, 2.1],
            background: Ln
        }])),
        Td("group_icon", yf(16, 16, [{
            type: ih,
            rect: [4, 12, 4, 2],
            background: Ln
        },
        {
            type: ih,
            rect: [2, 13, 8, 1],
            background: Ln
        },
        {
            type: ih,
            rect: [12, 12, 2, 1],
            background: Ln
        },
        {
            type: ih,
            rect: [11, 13, 4, 1],
            background: Ln
        },
        {
            type: ih,
            rect: [10, 7, 6, 5],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [1, 2, 10, 10],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: Af,
            rect: [1, 2, 10, 10],
            width: 1,
            color: Ln
        }])),
        Td("edge_icon", yf(16, 16, [{
            type: ih,
            rect: [2.1, 6.9, 11.5, 2.6],
            rotation: -.79,
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [10.8, 1, 4, 4],
            background: Ln
        },
        {
            type: ih,
            rect: [1, 11, 4, 4],
            background: Ln
        }])),
        Td("subGraph_image", yf(72, 45, [{
            type: Fb,
            points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
            segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [29.6, 30.7, 3.6, 1.8],
            background: Ln
        },
        {
            type: ih,
            rect: [28.4, 32.3, 6, 1.2],
            background: Ln
        },
        {
            type: ih,
            rect: [37.3, 32, 10.8, 1.8],
            background: Ln
        },
        {
            type: ih,
            rect: [39.1, 29.9, 7.2, 2.3],
            background: Ln
        },
        {
            type: ih,
            rect: [26.6, 23.7, 9.6, 7.2],
            gradient: wh,
            gradientColor: le,
            background: Ln
        },
        {
            type: ih,
            rect: [34.3, 16.8, 16.8, 13.2],
            borderWidth: 1,
            borderColor: Ln,
            gradient: wh,
            gradientColor: le,
            background: Ln
        }])),
        Td("subGraph_icon", yf(17, 17, [{
            type: Fb,
            points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
            segments: [1, 3, 3, 3, 3, 3],
            gradient: wh,
            gradientColor: le,
            background: Ln
        }])),
        Td("shape_icon", yf(16, 16, [{
            type: Fb,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            background: Ln
        }])),
        Td("polyline_icon", yf(16, 16, [{
            type: Fb,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            borderWidth: 1,
            borderColor: Ln
        },
        sr(7.5, .4), sr(7.5, 6.3), sr(13.6, 6.3), sr(13.6, 14), sr(.7, 13.9), sr(.7, .3)])),
        Td("grid_icon", yf(16, 16, [{
            type: ih,
            rect: [1, 1, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [6, 1, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [11, 1, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [11, 6, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [6, 6, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [1, 6, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [11, 11, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [6, 11, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        },
        {
            type: ih,
            rect: [1, 11, 4, 4],
            background: Ln,
            gradient: wh,
            gradientColor: le
        }])),
        Td("light_icon", yf(16, 16, [{
            type: "rect",
            rect: [6, 9, 5, 5],
            borderWidth: 1,
            borderColor: Ln
        },
        {
            type: "circle",
            rect: [1, 1, 15, 10],
            borderWidth: 1,
            borderColor: Ln,
            gradient: wh,
            gradientColor: le,
            background: {
                func: function(R) {
                    var k = R ? R.s(sp) : F;
                    return eb(k) ? "rgb(" + q(255 * k[0]) + "," + q(255 * k[1]) + "," + q(255 * k[2]) + ")": k || Ln
                }
            }
        }])),
        Td("text_icon", yf(16, 16, [{
            type: "shape",
            points: [3, 3, 13, 3, 8, 3, 8, 14],
            segments: [1, 2, 1, 2],
            borderWidth: 1,
            borderColor: Ln
        }]));
        var wc = function(n, O) {
            for (var s = n.vertices,
            u = 0; u < s.length; u++) {
                var H = s[u],
                Z = H.y;
                H.y = H.z,
                H.z = -Z,
                O && (H.y += O)
            }
        },
        qr = function(w) {
            for (var e, i, W, G, l, M, H = [], P = [], Y = [], b = w.faces, A = 0, Q = 0, _ = 0, N = b.length; N > A; A++, Q += 6, _ += 9) {
                var O = b[A];
                1 === O.i ? (e || (e = [], i = [], W = []), Ko(O, A, Q, _, w, e, W, i)) : 2 === O.i ? (G || (G = [], l = [], M = []), Ko(O, A, Q, _, w, G, M, l)) : Ko(O, A, Q, _, w, H, Y, P)
            }
            return {
                vs: H,
                uv: P,
                ns: Y,
                top_vs: e,
                top_uv: i,
                top_ns: W,
                bottom_vs: G,
                bottom_uv: l,
                bottom_ns: M
            }
        },
        Ko = function(K, D, f, y, o, t, B, i) {
            var u = o.vertices,
            x = o.faceVertexUvs,
            M = u[K.a],
            P = u[K.b],
            N = u[K.c];
            t[y] = M.x,
            t[y + 1] = M.y,
            t[y + 2] = M.z,
            t[y + 3] = P.x,
            t[y + 4] = P.y,
            t[y + 5] = P.z,
            t[y + 6] = N.x,
            t[y + 7] = N.y,
            t[y + 8] = N.z;
            var S = K.vertexNormals;
            if (3 === S.length) {
                var O = S[0],
                R = S[1],
                I = S[2];
                B[y] = O.x,
                B[y + 1] = O.y,
                B[y + 2] = O.z,
                B[y + 3] = R.x,
                B[y + 4] = R.y,
                B[y + 5] = R.z,
                B[y + 6] = I.x,
                B[y + 7] = I.y,
                B[y + 8] = I.z
            } else {
                var c = K.normal;
                B[y] = c.x,
                B[y + 1] = c.y,
                B[y + 2] = c.z,
                B[y + 3] = c.x,
                B[y + 4] = c.y,
                B[y + 5] = c.z,
                B[y + 6] = c.x,
                B[y + 7] = c.y,
                B[y + 8] = c.z
            }
            var Q = x[0][D][0],
            g = x[0][D][1],
            C = x[0][D][2];
            i[f] = Q.x,
            i[f + 1] = Q.y,
            i[f + 2] = g.x,
            i[f + 3] = g.y,
            i[f + 4] = C.x,
            i[f + 5] = C.y
        },
        uj = function(c, $, w, P, U, g, e, I, q) {
            w == F && (w = !0),
            P == F && (P = !0),
            e == F && (e = 1),
            I == F && (I = 0);
            var T = new Pl;
            return ch(T, c, $, q),
            qr(new Fe(T, {
                top: w,
                bottom: P,
                curveSegments: U,
                amount: e,
                repeatUVLength: g
            },
            -e / 2 + I))
        },
        ln = function(M, V) {
            this.x = M || 0,
            this.y = V || 0
        };
        ln.prototype = {
            constructor: ln,
            add: function(j) {
                return this.x += j.x,
                this.y += j.y,
                this
            },
            sub: function(g) {
                return this.x -= g.x,
                this.y -= g.y,
                this
            },
            equals: function(v) {
                return v.x === this.x && v.y === this.y
            },
            multiplyScalar: function(Z) {
                return this.x *= Z,
                this.y *= Z,
                this
            },
            distanceTo: function(J) {
                return k(this.distanceToSquared(J))
            },
            distanceToSquared: function(R) {
                var H = this.x - R.x,
                L = this.y - R.y;
                return H * H + L * L
            },
            clone: function() {
                return new ln(this.x, this.y)
            }
        };
        var Nm = function(d, L, M) {
            this.x = d || 0,
            this.y = L || 0,
            this.z = M || 0
        };
        Nm.prototype = {
            constructor: Nm,
            set: function(B, k, _) {
                return this.x = B,
                this.y = k,
                this.z = _,
                this
            },
            setY: function(f) {
                return this.y = f,
                this
            },
            copy: function(p) {
                return this.x = p.x,
                this.y = p.y,
                this.z = p.z,
                this
            },
            add: function(h) {
                return this.x += h.x,
                this.y += h.y,
                this.z += h.z,
                this
            },
            addVectors: function(T, F) {
                return this.x = T.x + F.x,
                this.y = T.y + F.y,
                this.z = T.z + F.z,
                this
            },
            sub: function(B) {
                return this.x -= B.x,
                this.y -= B.y,
                this.z -= B.z,
                this
            },
            subVectors: function(X, z) {
                return this.x = X.x - z.x,
                this.y = X.y - z.y,
                this.z = X.z - z.z,
                this
            },
            multiplyScalar: function(k) {
                return this.x *= k,
                this.y *= k,
                this.z *= k,
                this
            },
            applyMatrix4: function(f) {
                var Q = this.x,
                b = this.y,
                T = this.z,
                E = f.elements;
                return this.x = E[0] * Q + E[4] * b + E[8] * T + E[12],
                this.y = E[1] * Q + E[5] * b + E[9] * T + E[13],
                this.z = E[2] * Q + E[6] * b + E[10] * T + E[14],
                this
            },
            divideScalar: function(D) {
                if (0 !== D) {
                    var B = 1 / D;
                    this.x *= B,
                    this.y *= B,
                    this.z *= B
                } else this.x = 0,
                this.y = 0,
                this.z = 0;
                return this
            },
            dot: function(u) {
                return this.x * u.x + this.y * u.y + this.z * u.z
            },
            length: function() {
                return k(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            cross: function(O) {
                var g = this.x,
                N = this.y,
                G = this.z;
                return this.x = N * O.z - G * O.y,
                this.y = G * O.x - g * O.z,
                this.z = g * O.y - N * O.x,
                this
            },
            crossVectors: function(F, N) {
                var X = F.x,
                f = F.y,
                W = F.z,
                $ = N.x,
                U = N.y,
                G = N.z;
                return this.x = f * G - W * U,
                this.y = W * $ - X * G,
                this.z = X * U - f * $,
                this
            },
            distanceTo: function(s) {
                return k(this.distanceToSquared(s))
            },
            distanceToSquared: function(I) {
                var V = this.x - I.x,
                $ = this.y - I.y,
                A = this.z - I.z;
                return V * V + $ * $ + A * A
            },
            clone: function() {
                return new Nm(this.x, this.y, this.z)
            }
        };
        var Hn = function() {
            this.elements = new Float32Array(16)
        };
        Hn.prototype = {
            constructor: Hn,
            set: function(I, r, R, m, N, v, k, y, n, l, Z, V, E, z, f, K) {
                var J = this.elements;
                return J[0] = I,
                J[4] = r,
                J[8] = R,
                J[12] = m,
                J[1] = N,
                J[5] = v,
                J[9] = k,
                J[13] = y,
                J[2] = n,
                J[6] = l,
                J[10] = Z,
                J[14] = V,
                J[3] = E,
                J[7] = z,
                J[11] = f,
                J[15] = K,
                this
            },
            makeRotationAxis: function(n, j) {
                var U = i(j),
                P = g(j),
                v = 1 - U,
                h = n.x,
                e = n.y,
                x = n.z,
                Z = v * h,
                Q = v * e;
                return this.set(Z * h + U, Z * e - P * x, Z * x + P * e, 0, Z * e + P * x, Q * e + U, Q * x - P * h, 0, Z * x - P * e, Q * x + P * h, v * x * x + U, 0, 0, 0, 0, 1),
                this
            }
        };
        var dh = function(k) {
            this.repeatUVLength = k
        };
        dh.prototype = {
            generateTopUV: function(T, Y, u, U, I, _, z) {
                var w, R, o, X, v = T.vertices,
                d = v[U].x,
                M = v[U].y,
                V = v[I].x,
                p = v[I].y,
                s = v[_].x,
                O = v[_].y,
                t = this.repeatUVLength;
                if (t) w = 0,
                R = 0,
                o = t,
                X = t;
                else {
                    this._bb || (this._bb = Y.getBoundingBox());
                    var S = this._bb;
                    w = S.minX,
                    R = S.minY,
                    o = S.maxX - w,
                    X = S.maxY - R
                }
                return z ? [new ln((d - w) / o, (M - R) / X), new ln((V - w) / o, (p - R) / X), new ln((s - w) / o, (O - R) / X)] : [new ln((d - w) / o, 1 - (M - R) / X), new ln((V - w) / o, 1 - (p - R) / X), new ln((s - w) / o, 1 - (O - R) / X)]
            },
            generateBottomUV: function(k, M, N, s, h, I) {
                return this.generateTopUV(k, M, N, s, h, I, !0)
            },
            generateSideWallUV: function(n, y, c, V, m, Y, Z, C, U, q, O, u) {
                if (!this._cl) {
                    for (var t, Q, h = [], T = 0, K = c.length, z = 0; K > z; z++) {
                        t = c[z],
                        Q = c[(z + 1) % K];
                        var f = t.x - Q.x,
                        w = t.y - Q.y,
                        s = k(f * f + w * w);
                        h.push(T),
                        T += s
                    }
                    for (var z = 0; K > z; z++) h[z] /= T;
                    this._cl = h
                }
                var h = this._cl,
                S = 1 - U / q,
                B = 1 - (U + 1) / q,
                W = h[O],
                r = h[u];
                return r > W && (W += 1),
                [new ln(W, S), new ln(r, S), new ln(r, B), new ln(W, B)]
            }
        };
        var Lc = function(U, d, X, R, I, u) {
            this.a = U,
            this.b = d,
            this.c = X,
            this.i = u,
            this.normal = R instanceof Nm ? R: new Nm,
            this.vertexNormals = R instanceof Array ? R: []
        };
        Lc.prototype = {
            constructor: Lc
        };
        var ci = function() {},
        Vl = ci.prototype;
        Vl.getPointAt = function(m) {
            var l = this.getUtoTmapping(m);
            return this.getPoint(l)
        },
        Vl.getPoints = function(L) {
            L || (L = 5);
            var i, _ = [];
            for (i = 0; L >= i; i++) _.push(this.getPoint(i / L));
            return _
        },
        Vl.getSpacedPoints = function(X) {
            X || (X = 5);
            var k, E = [];
            for (k = 0; X >= k; k++) E.push(this.getPointAt(k / X));
            return E
        },
        Vl.getLength = function() {
            var G = this.getLengths();
            return G[G.length - 1]
        },
        Vl.getLengths = function(i) {
            if (i || (i = this.__arcLengthDivisions ? this.__arcLengthDivisions: 200), this.cacheArcLengths && this.cacheArcLengths.length == i + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var F, N, l = [],
            h = this.getPoint(0),
            Q = 0;
            for (l.push(0), N = 1; i >= N; N++) F = this.getPoint(N / i),
            Q += F.distanceTo(h),
            l.push(Q),
            h = F;
            return this.cacheArcLengths = l,
            l
        },
        Vl.getUtoTmapping = function(e, X) {
            var w, J = this.getLengths(),
            D = 0,
            Y = J.length;
            w = X ? X: e * J[Y - 1];
            for (var y, i = 0,
            Q = Y - 1; Q >= i;) if (D = T(i + (Q - i) / 2), y = J[D] - w, 0 > y) i = D + 1;
            else {
                if (! (y > 0)) {
                    Q = D;
                    break
                }
                Q = D - 1
            }
            if (D = Q, J[D] == w) {
                var E = D / (Y - 1);
                return E
            }
            var u = J[D],
            P = J[D + 1],
            C = P - u,
            z = (w - u) / C,
            E = (D + z) / (Y - 1);
            return E
        },
        Vl.getTangent = function(b) {
            var K = 1e-4,
            O = b - K,
            h = b + K;
            0 > O && (O = 0),
            h > 1 && (h = 1);
            var J = this.getPoint(O),
            D = this.getPoint(h),
            l = D.clone().sub(J);
            return l.normalize()
        },
        Vl.getTangentAt = function(g) {
            var b = this.getUtoTmapping(g);
            return this.getTangent(b)
        },
        ci.create = function(_, K) {
            return _.prototype = Re(ci.prototype),
            _.prototype.getPoint = K,
            _
        };
        var Mp = function() {
            this.curves = [],
            this.autoClose = !1
        },
        kc = Mp.prototype = Re(Vl);
        kc.add = function(a) {
            this.curves.push(a)
        },
        kc.closePath = function() {
            var h = this.curves[0].getPoint(0),
            m = this.curves[this.curves.length - 1].getPoint(1);
            h.equals(m) || this.curves.push(new dp(m, h))
        },
        kc.getPoint = function(n) {
            for (var B, w, V = n * this.getLength(), K = this.getCurveLengths(), N = 0; N < K.length;) {
                if (K[N] >= V) {
                    B = K[N] - V,
                    w = this.curves[N];
                    var $ = 1 - B / w.getLength();
                    return w.getPointAt($)
                }
                N++
            }
            return null
        },
        kc.getLength = function() {
            var h = this.getCurveLengths();
            return h[h.length - 1]
        },
        kc.getCurveLengths = function() {
            if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
            var m, s = [],
            Z = 0,
            D = this.curves.length;
            for (m = 0; D > m; m++) Z += this.curves[m].getLength(),
            s.push(Z);
            return this.cacheLengths = s,
            s
        },
        kc.getTransformedPoints = function(K) {
            return this.getPoints(K)
        },
        kc.getBoundingBox = function() {
            var X, z, H, M, F, c, B = this.getPoints();
            X = z = Number.NEGATIVE_INFINITY,
            M = F = Number.POSITIVE_INFINITY;
            var i, Q, m, $, I = B[0] instanceof Nm;
            for ($ = I ? new Nm: new ln, Q = 0, m = B.length; m > Q; Q++) i = B[Q],
            i.x > X && (X = i.x),
            i.x < M && (M = i.x),
            i.y > z && (z = i.y),
            i.y < F && (F = i.y),
            I && (i.z > H && (H = i.z), i.z < c && (c = i.z)),
            $.add(i);
            var N = {
                minX: M,
                minY: F,
                maxX: X,
                maxY: z
            };
            return I && (N.maxZ = H, N.minZ = c),
            N
        };
        var _n = function(W) {
            Mp.call(this),
            this.actions = [],
            W && this.fromPoints(W)
        },
        Fj = _n.prototype = Re(Mp.prototype),
        Gp = "moveTo",
        Ve = "lineTo",
        Im = "quadraticCurveTo",
        ul = "bezierCurveTo",
        Ti = "arc",
        il = "ellipse";
        Fj.fromPoints = function(G) {
            this.moveTo(G[0].x, G[0].y);
            for (var r = 1,
            B = G.length; B > r; r++) this.lineTo(G[r].x, G[r].y)
        },
        Fj.moveTo = function() {
            var X = Array.prototype.slice.call(arguments);
            this.actions.push({
                action: Gp,
                args: X
            })
        },
        Fj.lineTo = function(j, y) {
            var x = Array.prototype.slice.call(arguments),
            P = this.actions[this.actions.length - 1].args,
            $ = P[P.length - 2],
            o = P[P.length - 1],
            G = new dp(new ln($, o), new ln(j, y));
            this.curves.push(G),
            this.actions.push({
                action: Ve,
                args: x
            })
        },
        Fj.quadraticCurveTo = function(Y, Q, z, u) {
            var V = Array.prototype.slice.call(arguments),
            n = this.actions[this.actions.length - 1].args,
            N = n[n.length - 2],
            G = n[n.length - 1],
            f = new De(new ln(N, G), new ln(Y, Q), new ln(z, u));
            this.curves.push(f),
            this.actions.push({
                action: Im,
                args: V
            })
        },
        Fj.bezierCurveTo = function(p, e, r, D, k, v) {
            var P = Array.prototype.slice.call(arguments),
            g = this.actions[this.actions.length - 1].args,
            w = g[g.length - 2],
            F = g[g.length - 1],
            $ = new Yl(new ln(w, F), new ln(p, e), new ln(r, D), new ln(k, v));
            this.curves.push($),
            this.actions.push({
                action: ul,
                args: P
            })
        },
        Fj.arc = function(A, E, O, $, Z, x) {
            var q = this.actions[this.actions.length - 1].args,
            J = q[q.length - 2],
            r = q[q.length - 1];
            this.absarc(A + J, E + r, O, $, Z, x)
        },
        Fj.absarc = function(m, c, u, U, p, i) {
            this.absellipse(m, c, u, u, U, p, i)
        },
        Fj.ellipse = function(K, q, a, k, Z, N, y) {
            var B = this.actions[this.actions.length - 1].args,
            A = B[B.length - 2],
            E = B[B.length - 1];
            this.absellipse(K + A, q + E, a, k, Z, N, y)
        },
        Fj.absellipse = function(x, J, L, t, e, R, D) {
            var E = Array.prototype.slice.call(arguments),
            c = new sq(x, J, L, t, e, R, D);
            this.curves.push(c);
            var j = c.getPoint(1);
            E.push(j.x),
            E.push(j.y),
            this.actions.push({
                action: il,
                args: E
            })
        },
        Fj.getSpacedPoints = function(L) {
            L || (L = 40);
            for (var z = [], O = 0; L > O; O++) z.push(this.getPoint(O / L));
            return z
        },
        Fj.getPoints = function(l, t) {
            l = l || 12;
            var p, V, z, I, c, F, K, w, r, s, B, P, X, u, _, f, E, U, j = [];
            for (p = 0, V = this.actions.length; V > p; p++) switch (z = this.actions[p], I = z.action, c = z.args, I) {
            case Gp:
                j.push(new ln(c[0], c[1]));
                break;
            case Ve:
                j.push(new ln(c[0], c[1]));
                break;
            case Im:
                for (F = c[2], K = c[3], s = c[0], B = c[1], j.length > 0 ? (u = j[j.length - 1], P = u.x, X = u.y) : (u = this.actions[p - 1].args, P = u[u.length - 2], X = u[u.length - 1]), _ = 1; l >= _; _++) f = _ / l,
                E = pc.b2(f, P, s, F),
                U = pc.b2(f, X, B, K),
                j.push(new ln(E, U));
                break;
            case ul:
                for (F = c[4], K = c[5], s = c[0], B = c[1], w = c[2], r = c[3], j.length > 0 ? (u = j[j.length - 1], P = u.x, X = u.y) : (u = this.actions[p - 1].args, P = u[u.length - 2], X = u[u.length - 1]), _ = 1; l >= _; _++) f = _ / l,
                E = pc.b3(f, P, s, w, F),
                U = pc.b3(f, X, B, r, K),
                j.push(new ln(E, U));
                break;
            case Ti:
                var Z, A = c[0],
                J = c[1],
                o = c[2],
                O = c[3],
                L = c[4],
                m = !!c[5],
                $ = L - O,
                x = 2 * l;
                for (_ = 1; x >= _; _++) f = _ / x,
                m || (f = 1 - f),
                Z = O + f * $,
                E = A + o * i(Z),
                U = J + o * g(Z),
                j.push(new ln(E, U));
                break;
            case il:
                var Z, A = c[0],
                J = c[1],
                h = c[2],
                Y = c[3],
                O = c[4],
                L = c[5],
                m = !!c[6],
                $ = L - O,
                x = 2 * l;
                for (_ = 1; x >= _; _++) f = _ / x,
                m || (f = 1 - f),
                Z = O + f * $,
                E = A + h * i(Z),
                U = J + Y * g(Z),
                j.push(new ln(E, U))
            }
            var H = j[j.length - 1],
            C = 1e-10;
            return R(H.x - j[0].x) < C && R(H.y - j[0].y) < C && j.splice(j.length - 1, 1),
            t && j.push(j[0]),
            j
        },
        Fj.toShapes = function(u, q) {
            function E(k) {
                var p, K, n, s, U, Y = [],
                v = new _n;
                for (p = 0, K = k.length; K > p; p++) n = k[p],
                U = n.args,
                s = n.action,
                s == Gp && 0 != v.actions.length && (Y.push(v), v = new _n),
                v[s].apply(v, U);
                return 0 != v.actions.length && Y.push(v),
                Y
            }
            function _(Y) {
                for (var r = [], M = 0, l = Y.length; l > M; M++) {
                    var D = Y[M],
                    F = new Pl;
                    F.actions = D.actions,
                    F.curves = D.curves,
                    r.push(F)
                }
                return r
            }
            function i(E, n) {
                for (var f = 1e-10,
                w = n.length,
                p = !1,
                L = w - 1,
                H = 0; w > H; L = H++) {
                    var v = n[L],
                    z = n[H],
                    _ = z.x - v.x,
                    q = z.y - v.y;
                    if (R(q) > f) {
                        if (0 > q && (v = n[H], _ = -_, z = n[L], q = -q), E.y < v.y || E.y > z.y) continue;
                        if (E.y == v.y) {
                            if (E.x == v.x) return ! 0
                        } else {
                            var t = q * (E.x - v.x) - _ * (E.y - v.y);
                            if (0 == t) return ! 0;
                            if (0 > t) continue;
                            p = !p
                        }
                    } else {
                        if (E.y != v.y) continue;
                        if (z.x <= E.x && E.x <= v.x || v.x <= E.x && E.x <= z.x) return ! 0
                    }
                }
                return p
            }
            var D = E(this.actions);
            if (0 == D.length) return [];
            if (q === !0) return _(D);
            var Z, K, v, T = [];
            if (1 == D.length) return K = D[0],
            v = new Pl,
            v.actions = K.actions,
            v.curves = K.curves,
            T.push(v),
            T;
            var p = !pc.isClockWise(D[0].getPoints());
            p = u ? !p: p;
            var C, h = [],
            Y = [],
            w = [],
            j = 0;
            Y[j] = V,
            w[j] = [];
            var O, m;
            for (O = 0, m = D.length; m > O; O++) K = D[O],
            C = K.getPoints(),
            Z = pc.isClockWise(C),
            Z = u ? !Z: Z,
            Z ? (!p && Y[j] && j++, Y[j] = {
                s: new Pl,
                p: C
            },
            Y[j].s.actions = K.actions, Y[j].s.curves = K.curves, p && j++, w[j] = []) : w[j].push({
                h: K,
                p: C[0]
            });
            if (!Y[0]) return _(D);
            if (Y.length > 1) {
                for (var t = !1,
                N = [], k = 0, g = Y.length; g > k; k++) h[k] = [];
                for (var k = 0,
                g = Y.length; g > k; k++) {
                    Y[k];
                    for (var I = w[k], W = 0; W < I.length; W++) {
                        for (var Q = I[W], d = !0, s = 0; s < Y.length; s++) i(Q.p, Y[s].p) && (k != s && N.push({
                            froms: k,
                            tos: s,
                            hole: W
                        }), d ? (d = !1, h[s].push(Q)) : t = !0);
                        d && h[k].push(Q)
                    }
                }
                N.length > 0 && (t || (w = h))
            }
            var n, S, r;
            for (O = 0, m = Y.length; m > O; O++) for (v = Y[O].s, T.push(v), n = w[O], S = 0, r = n.length; r > S; S++) v.holes.push(n[S].h);
            return T
        };
        var Pl = function() {
            _n.apply(this, arguments),
            this.holes = []
        },
        hk = Pl.prototype = Re(Fj);
        hk.getPointsHoles = function(b) {
            var Q, $ = this.holes.length,
            s = [];
            for (Q = 0; $ > Q; Q++) s[Q] = this.holes[Q].getTransformedPoints(b);
            return s
        },
        hk.extractAllPoints = function(S) {
            return {
                shape: this.getTransformedPoints(S),
                holes: this.getPointsHoles(S)
            }
        },
        hk.extractPoints = function(p) {
            return this.extractAllPoints(p)
        };
        var pc = {
            triangulateShape: function(C, l) {
                function E(N, B, y) {
                    return N.x != B.x ? N.x < B.x ? N.x <= y.x && y.x <= B.x: B.x <= y.x && y.x <= N.x: N.y < B.y ? N.y <= y.y && y.y <= B.y: B.y <= y.y && y.y <= N.y
                }
                function j(h, b, w, c, H) {
                    var C = 1e-10,
                    o = b.x - h.x,
                    x = b.y - h.y,
                    O = c.x - w.x,
                    U = c.y - w.y,
                    V = h.x - w.x,
                    G = h.y - w.y,
                    N = x * O - o * U,
                    $ = x * V - o * G;
                    if (R(N) > C) {
                        var n;
                        if (N > 0) {
                            if (0 > $ || $ > N) return [];
                            if (n = U * V - O * G, 0 > n || n > N) return []
                        } else {
                            if ($ > 0 || N > $) return [];
                            if (n = U * V - O * G, n > 0 || N > n) return []
                        }
                        if (0 == n) return ! H || 0 != $ && $ != N ? [h] : [];
                        if (n == N) return ! H || 0 != $ && $ != N ? [b] : [];
                        if (0 == $) return [w];
                        if ($ == N) return [c];
                        var f = n / N;
                        return [{
                            x: h.x + f * o,
                            y: h.y + f * x
                        }]
                    }
                    if (0 != $ || U * V != O * G) return [];
                    var a = 0 == o && 0 == x,
                    e = 0 == O && 0 == U;
                    if (a && e) return h.x != w.x || h.y != w.y ? [] : [h];
                    if (a) return E(w, c, h) ? [h] : [];
                    if (e) return E(h, b, w) ? [w] : [];
                    var r, v, X, k, K, P, Z, y;
                    return 0 != o ? (h.x < b.x ? (r = h, X = h.x, v = b, k = b.x) : (r = b, X = b.x, v = h, k = h.x), w.x < c.x ? (K = w, Z = w.x, P = c, y = c.x) : (K = c, Z = c.x, P = w, y = w.x)) : (h.y < b.y ? (r = h, X = h.y, v = b, k = b.y) : (r = b, X = b.y, v = h, k = h.y), w.y < c.y ? (K = w, Z = w.y, P = c, y = c.y) : (K = c, Z = c.y, P = w, y = w.y)),
                    Z >= X ? Z > k ? [] : k == Z ? H ? [] : [K] : y >= k ? [K, v] : [K, P] : X > y ? [] : X == y ? H ? [] : [r] : y >= k ? [r, v] : [r, P]
                }
                function z(e, Y, V, w) {
                    var W = 1e-10,
                    O = Y.x - e.x,
                    _ = Y.y - e.y,
                    $ = V.x - e.x,
                    d = V.y - e.y,
                    r = w.x - e.x,
                    s = w.y - e.y,
                    z = O * d - _ * $,
                    g = O * s - _ * r;
                    if (R(z) > W) {
                        var p = r * d - s * $;
                        return z > 0 ? g >= 0 && p >= 0 : g >= 0 || p >= 0
                    }
                    return g > 0
                }
                function m(u, B) {
                    function X(Y, U) {
                        var Z = k.length - 1,
                        v = Y - 1;
                        0 > v && (v = Z);
                        var j = Y + 1;
                        j > Z && (j = 0);
                        var X = z(k[Y], k[v], k[j], K[U]);
                        if (!X) return ! 1;
                        var s = K.length - 1,
                        b = U - 1;
                        0 > b && (b = s);
                        var L = U + 1;
                        return L > s && (L = 0),
                        X = z(K[U], K[b], K[L], k[Y]),
                        X ? !0 : !1
                    }
                    function N(V, L) {
                        var A, i, p;
                        for (A = 0; A < k.length; A++) if (i = A + 1, i %= k.length, p = j(V, L, k[A], k[i], !0), p.length > 0) return ! 0;
                        return ! 1
                    }
                    function A(l, I) {
                        var N, C, K, n, A;
                        for (N = 0; N < b.length; N++) for (C = B[b[N]], K = 0; K < C.length; K++) if (n = K + 1, n %= C.length, A = j(l, I, C[K], C[n], !0), A.length > 0) return ! 0;
                        return ! 1
                    }
                    for (var K, D, C, P, i, W, p, r, o, l, E, k = u.concat(), b = [], T = [], _ = 0, t = B.length; t > _; _++) b.push(_);
                    for (var O = 0,
                    L = 2 * b.length; b.length > 0 && (L--, !(0 > L));) for (C = O; C < k.length; C++) {
                        P = k[C],
                        D = -1;
                        for (var _ = 0; _ < b.length; _++) if (W = b[_], p = P.x + ":" + P.y + ":" + W, T[p] === V) {
                            K = B[W];
                            for (var g = 0; g < K.length; g++) if (i = K[g], X(C, g) && !N(P, i) && !A(P, i)) {
                                D = g,
                                b.splice(_, 1),
                                r = k.slice(0, C + 1),
                                o = k.slice(C),
                                l = K.slice(D),
                                E = K.slice(0, D + 1),
                                k = r.concat(l).concat(E).concat(o),
                                O = C;
                                break
                            }
                            if (D >= 0) break;
                            T[p] = !0
                        }
                        if (D >= 0) break
                    }
                    return k
                }
                for (var P, r, M, K, G, v, e = {},
                $ = C.concat(), k = 0, L = l.length; L > k; k++) Array.prototype.push.apply($, l[k]);
                for (P = 0, r = $.length; r > P; P++) G = $[P].x + ":" + $[P].y,
                e[G] !== V,
                e[G] = P;
                var c = m(C, l),
                _ = Bp.Triangulate(c, !1);
                for (P = 0, r = _.length; r > P; P++) for (K = _[P], M = 0; 3 > M; M++) G = K[M].x + ":" + K[M].y,
                v = e[G],
                v !== V && (K[M] = v);
                return _.concat()
            },
            isClockWise: function(V) {
                return Bp.Triangulate.area(V) < 0
            },
            b2p0: function(q, X) {
                var B = 1 - q;
                return B * B * X
            },
            b2p1: function(a, u) {
                return 2 * (1 - a) * a * u
            },
            b2p2: function(D, y) {
                return D * D * y
            },
            b2: function(N, T, d, g) {
                return this.b2p0(N, T) + this.b2p1(N, d) + this.b2p2(N, g)
            },
            b3p0: function(J, $) {
                var T = 1 - J;
                return T * T * T * $
            },
            b3p1: function(O, Q) {
                var w = 1 - O;
                return 3 * w * w * O * Q
            },
            b3p2: function(T, p) {
                var k = 1 - T;
                return 3 * k * T * T * p
            },
            b3p3: function(b, $) {
                return b * b * b * $
            },
            b3: function(l, g, V, Y, W) {
                return this.b3p0(l, g) + this.b3p1(l, V) + this.b3p2(l, Y) + this.b3p3(l, W)
            }
        },
        Bp = {
            faces: {},
            face: "",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getDefaultFont: function() {
                var x = o.keys(this.faces);
                return x.length ? x[0] : null
            },
            getFace: function() {
                try {
                    return this.faces[this.face][this.weight][this.style]
                } catch(R) {
                    throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function(V) {
                var _ = V.familyName.toLowerCase(),
                g = this;
                return g.faces[_] = g.faces[_] || {},
                g.faces[_][V.cssFontWeight] = g.faces[_][V.cssFontWeight] || {},
                g.faces[_][V.cssFontWeight][V.cssFontStyle] = V,
                V
            },
            drawText: function(z) {
                var l, v = this.getFace(),
                i = this.size / v.resolution,
                V = 0,
                x = String(z).split(""),
                k = x.length,
                X = [];
                for (l = 0; k > l; l++) {
                    var A = new _n,
                    K = this.extractGlyphPoints(x[l], v, i, V, A);
                    K && (V += K.offset * this.spacing, X.push(K.path))
                }
                var b = V / 2;
                return {
                    paths: X,
                    offset: b
                }
            },
            extractGlyphPoints: function(S, v, a, H, V) {
                var B, i, x, j, A, J, u, p, K, W, k, y, f, z, N, d, Y, m, e, I = [],
                U = v.glyphs[S] || v.glyphs["?"];
                if (U) {
                    if (U.o) for (j = U._cachedOutline || (U._cachedOutline = U.o.split(" ")), J = j.length, u = a, p = a, B = 0; J > B;) switch (A = j[B++]) {
                    case "m":
                        K = j[B++] * u + H,
                        W = j[B++] * p,
                        V.moveTo(K, W);
                        break;
                    case "l":
                        K = j[B++] * u + H,
                        W = j[B++] * p,
                        V.lineTo(K, W);
                        break;
                    case "q":
                        if (k = j[B++] * u + H, y = j[B++] * p, N = j[B++] * u + H, d = j[B++] * p, V.quadraticCurveTo(N, d, k, y), e = I[I.length - 1]) for (f = e.x, z = e.y, i = 1, x = this.divisions; x >= i; i++) {
                            var C = i / x;
                            pc.b2(C, f, N, k),
                            pc.b2(C, z, d, y)
                        }
                        break;
                    case "b":
                        if (k = j[B++] * u + H, y = j[B++] * p, N = j[B++] * u + H, d = j[B++] * p, Y = j[B++] * u + H, m = j[B++] * p, V.bezierCurveTo(N, d, Y, m, k, y), e = I[I.length - 1]) for (f = e.x, z = e.y, i = 1, x = this.divisions; x >= i; i++) {
                            var C = i / x;
                            pc.b3(C, f, N, Y, k),
                            pc.b3(C, z, d, m, y)
                        }
                    }
                    return {
                        offset: U.ha * a,
                        path: V
                    }
                }
            }
        };
        Bp.generateShapes = function(p, m) {
            m = m || {};
            var y = m.font;
            if (y === V && (y = Bp.getDefaultFont(), !y)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."),
            [];
            var n = m.size !== V ? m.size: 1,
            L = m.curveSegments !== V ? m.curveSegments: 4,
            t = m.spacing !== V ? m.spacing: 1,
            E = m.weight !== V ? m.weight: "normal",
            j = m.style !== V ? m.style: "normal";
            Bp.size = n,
            Bp.divisions = L,
            Bp.face = y,
            Bp.weight = E,
            Bp.style = j,
            Bp.spacing = t;
            for (var J = Bp.drawText(p), q = J.paths, H = [], g = 0, D = q.length; D > g; g++) Array.prototype.push.apply(H, q[g].toShapes());
            return H
        },
        function(D) {
            var Y = 1e-10,
            $ = function(G, j) {
                var O = G.length;
                if (3 > O) return null;
                var $, i, b, Q = [],
                p = [],
                X = [];
                if (J(G) > 0) for (i = 0; O > i; i++) p[i] = i;
                else for (i = 0; O > i; i++) p[i] = O - 1 - i;
                var r = O,
                S = 2 * r;
                for (i = r - 1; r > 2;) {
                    if (S--<=0) return j ? X: Q;
                    if ($ = i, $ >= r && ($ = 0), i = $ + 1, i >= r && (i = 0), b = i + 1, b >= r && (b = 0), N(G, $, i, b, r, p)) {
                        var B, y, P, C, z;
                        for (B = p[$], y = p[i], P = p[b], Q.push([G[B], G[y], G[P]]), X.push([p[$], p[i], p[b]]), C = i, z = i + 1; r > z; C++, z++) p[C] = p[z];
                        r--,
                        S = 2 * r
                    }
                }
                return j ? X: Q
            },
            J = function(u) {
                for (var Z = u.length,
                F = 0,
                t = Z - 1,
                k = 0; Z > k; t = k++) F += u[t].x * u[k].y - u[k].x * u[t].y;
                return.5 * F
            },
            N = function(g, N, S, F, Z, J) {
                var Q, M, G, O, z, e, V, j, u;
                if (M = g[J[N]].x, G = g[J[N]].y, O = g[J[S]].x, z = g[J[S]].y, e = g[J[F]].x, V = g[J[F]].y, Y > (O - M) * (V - G) - (z - G) * (e - M)) return ! 1;
                var A, m, s, q, X, U, _, D, H, T, h, E, r, y, o;
                for (A = e - O, m = V - z, s = M - e, q = G - V, X = O - M, U = z - G, Q = 0; Z > Q; Q++) if (j = g[J[Q]].x, u = g[J[Q]].y, !(j === M && u === G || j === O && u === z || j === e && u === V) && (_ = j - M, D = u - G, H = j - O, T = u - z, h = j - e, E = u - V, o = A * T - m * H, r = X * D - U * _, y = s * E - q * h, o >= -Y && y >= -Y && r >= -Y)) return ! 1;
                return ! 0
            };
            return D.Triangulate = $,
            D.Triangulate.area = J,
            D
        } (Bp),
        z._typeface_js = {
            faces: Bp.faces,
            loadFace: Bp.loadFace
        };
        var an = function() {
            this.vertices = [],
            this.faces = [],
            this.faceVertexUvs = [[]]
        },
        Uc = an.prototype = {
            constructor: an,
            computeFaceNormals: function() {
                for (var S = new Nm,
                m = new Nm,
                l = 0,
                I = this.faces.length; I > l; l++) {
                    var p = this.faces[l],
                    _ = this.vertices[p.a],
                    t = this.vertices[p.b],
                    N = this.vertices[p.c];
                    S.subVectors(N, t),
                    m.subVectors(_, t),
                    S.cross(m),
                    S.normalize(),
                    p.normal.copy(S)
                }
            },
            computeVertexNormals: function(Y) {
                var A, F, M, m, G, h;
                for (h = new Array(this.vertices.length), A = 0, F = this.vertices.length; F > A; A++) h[A] = new Nm;
                if (Y) {
                    var J, b, t, C = new Nm,
                    j = new Nm;
                    for (M = 0, m = this.faces.length; m > M; M++) G = this.faces[M],
                    J = this.vertices[G.a],
                    b = this.vertices[G.b],
                    t = this.vertices[G.c],
                    C.subVectors(t, b),
                    j.subVectors(J, b),
                    C.cross(j),
                    h[G.a].add(C),
                    h[G.b].add(C),
                    h[G.c].add(C)
                } else for (M = 0, m = this.faces.length; m > M; M++) G = this.faces[M],
                h[G.a].add(G.normal),
                h[G.b].add(G.normal),
                h[G.c].add(G.normal);
                for (A = 0, F = this.vertices.length; F > A; A++) h[A].normalize();
                for (M = 0, m = this.faces.length; m > M; M++) G = this.faces[M],
                G.vertexNormals[0] = h[G.a].clone(),
                G.vertexNormals[1] = h[G.b].clone(),
                G.vertexNormals[2] = h[G.c].clone()
            },
            mergeVertices: function() {
                var P, A, g, W, I, G, O, i, y = {},
                f = [],
                E = [],
                z = 4,
                F = L(10, z);
                for (g = 0, W = this.vertices.length; W > g; g++) P = this.vertices[g],
                A = Q(P.x * F) + "_" + Q(P.y * F) + "_" + Q(P.z * F),
                y[A] === V ? (y[A] = g, f.push(this.vertices[g]), E[g] = f.length - 1) : E[g] = E[y[A]];
                var m = [];
                for (g = 0, W = this.faces.length; W > g; g++) {
                    I = this.faces[g],
                    I.a = E[I.a],
                    I.b = E[I.b],
                    I.c = E[I.c],
                    G = [I.a, I.b, I.c];
                    for (var w = 0; 3 > w; w++) if (G[w] == G[(w + 1) % 3]) {
                        m.push(g);
                        break
                    }
                }
                for (g = m.length - 1; g >= 0; g--) {
                    var k = m[g];
                    for (this.faces.splice(k, 1), O = 0, i = this.faceVertexUvs.length; i > O; O++) this.faceVertexUvs[O].splice(k, 1)
                }
                var Y = this.vertices.length - f.length;
                return this.vertices = f,
                Y
            }
        },
        sq = function(u, K, e, I, Z, j, U) {
            this.aX = u,
            this.aY = K,
            this.xRadius = e,
            this.yRadius = I,
            this.aStartAngle = Z,
            this.aEndAngle = j,
            this.aClockwise = U
        };
        sq.prototype = Re(Vl),
        sq.prototype.getPoint = function(z) {
            var u, H = this.aEndAngle - this.aStartAngle;
            0 > H && (H += X),
            H > X && (H -= X),
            u = this.aClockwise === !0 ? this.aEndAngle + (1 - z) * (X - H) : this.aStartAngle + z * H;
            var f = this.aX + this.xRadius * i(u),
            Q = this.aY + this.yRadius * g(u);
            return new ln(f, Q)
        };
        var dp = function(s, j) {
            this.v1 = s,
            this.v2 = j
        },
        ml = dp.prototype = Re(Vl);
        ml.getPoint = function(z) {
            var b = this.v2.clone().sub(this.v1);
            return b.multiplyScalar(z).add(this.v1),
            b
        },
        ml.getPointAt = function(z) {
            return this.getPoint(z)
        },
        ml.getTangent = function() {
            var S = this.v2.clone().sub(this.v1);
            return S.normalize()
        };
        var De = function(j, W, y) {
            this.v0 = j,
            this.v1 = W,
            this.v2 = y
        };
        De.prototype = Re(Vl),
        De.prototype.getPoint = function(F) {
            var B, v;
            return B = pc.b2(F, this.v0.x, this.v1.x, this.v2.x),
            v = pc.b2(F, this.v0.y, this.v1.y, this.v2.y),
            new ln(B, v)
        };
        var Yl = function(A, K, l, s) {
            this.v0 = A,
            this.v1 = K,
            this.v2 = l,
            this.v3 = s
        };
        Yl.prototype = Re(Vl),
        Yl.prototype.getPoint = function(l) {
            var q, m;
            return q = pc.b3(l, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            m = pc.b3(l, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
            new ln(q, m)
        },
        ci.create(function(E, C) {
            this.v1 = E,
            this.v2 = C
        },
        function(q) {
            var i = new Nm;
            return i.subVectors(this.v2, this.v1),
            i.multiplyScalar(q),
            i.add(this.v1),
            i
        });
        var lo = ci.create(function(F, s, M) {
            this.v0 = F,
            this.v1 = s,
            this.v2 = M
        },
        function(f) {
            var h, M, H;
            return h = pc.b2(f, this.v0.x, this.v1.x, this.v2.x),
            M = pc.b2(f, this.v0.y, this.v1.y, this.v2.y),
            H = pc.b2(f, this.v0.z, this.v1.z, this.v2.z),
            new Nm(h, M, H)
        }),
        uf = ci.create(function(Y, f, W, g) {
            this.v0 = Y,
            this.v1 = f,
            this.v2 = W,
            this.v3 = g
        },
        function(B) {
            var Y, V, o;
            return Y = pc.b3(B, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
            V = pc.b3(B, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
            o = pc.b3(B, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
            new Nm(Y, V, o)
        }),
        Qi = function(Y, c, o, R, T, M, I, J) {
            an.call(this),
            R = R !== V ? R: .5,
            T = T !== V ? T: .5,
            J = J !== V ? J: 1,
            Y = Y || 8,
            M = M || 0,
            I = I || X;
            var e, n, Q = 1,
            v = J / 2,
            t = [],
            _ = [],
            h = this.vertices,
            p = this.faces,
            s = this.faceVertexUvs;
            for (n = 0; Q >= n; n++) {
                var f = [],
                l = [],
                j = n / Q,
                d = j * (T - R) + R;
                for (e = 0; Y >= e; e++) {
                    var H = e / Y,
                    u = new Nm,
                    N = -(H * I + M);
                    u.z = d * g(N),
                    u.y = -j * J + v,
                    u.x = d * i(N),
                    h.push(u),
                    f.push(h.length - 1),
                    l.push(new ln(H, j))
                }
                t.push(f),
                _.push(l)
            }
            var G, x, B = (T - R) / J;
            for (e = 0; Y > e; e++) for (0 !== R ? (G = h[t[0][e]].clone(), x = h[t[0][e + 1]].clone()) : (G = h[t[1][e]].clone(), x = h[t[1][e + 1]].clone()), G.setY(k(G.x * G.x + G.z * G.z) * B).normalize(), x.setY(k(x.x * x.x + x.z * x.z) * B).normalize(), n = 0; Q > n; n++) {
                var S = t[n][e],
                $ = t[n + 1][e],
                W = t[n + 1][e + 1],
                b = t[n][e + 1],
                q = G.clone(),
                P = G.clone(),
                C = x.clone(),
                F = x.clone(),
                y = _[n][e].clone(),
                r = _[n + 1][e].clone(),
                K = _[n + 1][e + 1].clone(),
                a = _[n][e + 1].clone();
                p.push(new Lc(S, $, b, [q, P, F])),
                s[0].push([y, r, a]),
                p.push(new Lc($, W, b, [P.clone(), C, F.clone()])),
                s[0].push([r.clone(), K, a.clone()])
            }
            if (c && R > 0) for (this.vertices.push(new Nm(0, v, 0)), e = 0; Y > e; e++) {
                var S = t[0][e],
                $ = t[0][e + 1],
                W = this.vertices.length - 1,
                q = new Nm(0, 1, 0),
                P = new Nm(0, 1, 0),
                C = new Nm(0, 1, 0),
                y = _[0][e].clone(),
                r = _[0][e + 1].clone(),
                K = new ln(r.x, 0);
                p.push(new Lc(S, $, W, [q, P, C], null, 1));
                var O = e / Y * X,
                L = i(O),
                z = g(O),
                Z = (e + 1) / Y * X,
                A = i(Z),
                E = g(Z);
                s[0].push([new ln(.5 + .5 * L, .5 + .5 * z), new ln(.5 + .5 * A, .5 + .5 * E), new ln(.5, .5)])
            }
            if (o && T > 0) for (this.vertices.push(new Nm(0, -v, 0)), e = 0; Y > e; e++) {
                var S = t[n][e + 1],
                $ = t[n][e],
                W = h.length - 1,
                q = new Nm(0, -1, 0),
                P = new Nm(0, -1, 0),
                C = new Nm(0, -1, 0),
                y = _[n][e + 1].clone(),
                r = _[n][e].clone();
                p.push(new Lc(S, $, W, [q, P, C], null, 2));
                var O = e / Y * X,
                L = i(O),
                z = g(O),
                Z = (e + 1) / Y * X,
                A = i(Z),
                E = g(Z);
                s[0].push([new ln(.5 + .5 * A, .5 - .5 * E), new ln(.5 + .5 * L, .5 - .5 * z), new ln(.5, .5)])
            }
        };
        Qi.prototype = Re(Uc);
        var og = function(c, C, m, M, p, e, L) {
            an.call(this),
            L = L || .5,
            c = c || 16,
            C = C || 16,
            m = (m !== V ? m: 0) - y,
            M = M !== V ? M: X,
            p = p !== V ? p: 0,
            e = e !== V ? e: y;
            var r, Y, h = [],
            B = [],
            $ = this.vertices,
            b = this.faces,
            O = this.faceVertexUvs;
            for (Y = 0; C >= Y; Y++) {
                var G = [],
                j = [];
                for (r = 0; c >= r; r++) {
                    var W = r / c,
                    I = Y / C,
                    q = new Nm;
                    q.x = -L * i(m + W * M) * g(p + I * e),
                    q.y = L * i(p + I * e),
                    q.z = L * g(m + W * M) * g(p + I * e),
                    $.push(q),
                    G.push($.length - 1),
                    j.push(new ln(W, I))
                }
                h.push(G),
                B.push(j)
            }
            for (Y = 0; C > Y; Y++) for (r = 0; c > r; r++) {
                var U = h[Y][r + 1],
                n = h[Y][r],
                z = h[Y + 1][r],
                S = h[Y + 1][r + 1],
                J = $[U].clone().normalize(),
                P = $[n].clone().normalize(),
                s = $[z].clone().normalize(),
                A = $[S].clone().normalize(),
                t = B[Y][r + 1].clone(),
                N = B[Y][r].clone(),
                k = B[Y + 1][r].clone(),
                f = B[Y + 1][r + 1].clone();
                R($[U].y) === L ? (t.x = (t.x + N.x) / 2, b.push(new Lc(U, z, S, [J, s, A])), O[0].push([t, k, f])) : R($[z].y) === L ? (k.x = (k.x + f.x) / 2, b.push(new Lc(U, n, z, [J, P, s])), O[0].push([t, N, k])) : (b.push(new Lc(U, n, S, [J, P, A])), O[0].push([t, N, f]), b.push(new Lc(n, z, S, [P.clone(), s, A.clone()])), O[0].push([N.clone(), k, f.clone()]))
            }
        };
        og.prototype = Re(Uc);
        var Dc = function(f, Q, F, M, O, d) {
            an.call(this),
            f = f || .33,
            Q = Q || .17,
            M = M || 8,
            F = F || 6,
            O = O || 0,
            d = d || X;
            for (var m = new Nm,
            n = [], e = [], G = 0; M >= G; G++) for (var z = G / M * X + y,
            P = 0; F >= P; P++) {
                var a = P / F * d + O;
                m.x = f * i(a),
                m.z = -f * g(a);
                var B = new Nm,
                R = f + Q * i(z);
                B.x = R * i(a),
                B.z = -R * g(a),
                B.y = Q * g(z),
                this.vertices.push(B),
                n.push(new ln(P / F, 1 - G / M)),
                e.push(B.clone().sub(m).normalize())
            }
            for (var G = 1; M >= G; G++) for (var P = 1; F >= P; P++) {
                var U = (F + 1) * G + P - 1,
                N = (F + 1) * (G - 1) + P - 1,
                p = (F + 1) * (G - 1) + P,
                H = (F + 1) * G + P,
                I = new Lc(U, N, H, [e[U].clone(), e[N].clone(), e[H].clone()]);
                this.faces.push(I),
                this.faceVertexUvs[0].push([n[U].clone(), n[N].clone(), n[H].clone()]),
                I = new Lc(N, p, H, [e[N].clone(), e[p].clone(), e[H].clone()]),
                this.faces.push(I),
                this.faceVertexUvs[0].push([n[N].clone(), n[p].clone(), n[H].clone()])
            }
            this.computeFaceNormals()
        };
        Dc.prototype = Re(Uc);
        var Fe = function(b, Y, j) {
            return b ? (an.call(this), b = b instanceof Array ? b: [b], this.addShapeList(b, Y), Y.convertYZ !== !1 && wc(this, j), this.computeFaceNormals(), void 0) : (b = [], void 0)
        },
        mr = Fe.prototype = Re(an.prototype);
        mr.addShapeList = function(o, P) {
            for (var R = o.length,
            _ = 0; R > _; _++) {
                var Z = o[_];
                this.addShape(Z, P)
            }
        },
        mr.addShape = function(a, G) {
            function j() {
                if (G.bottom) for (var g = 0; f > g; g++) q = c[g],
                t(q[2], q[1], q[0], !0);
                if (G.top) for (g = 0; f > g; g++) q = c[g],
                t(q[0] + k * s, q[1] + k * s, q[2] + k * s, !1)
            }
            function F() {
                var n = 0;
                for (z(r, n), n += r.length, I = 0, L = w.length; L > I; I++) e = w[I],
                z(e, n),
                n += e.length
            }
            function z(F, $) {
                for (var U, X, h = F.length; --h >= 0;) {
                    U = h,
                    X = h - 1,
                    0 > X && (X = F.length - 1);
                    var u = 0,
                    y = s;
                    for (u = 0; y > u; u++) {
                        var g = k * u,
                        f = k * (u + 1),
                        d = $ + U + g,
                        i = $ + X + g,
                        I = $ + X + f,
                        r = $ + U + f;
                        R(d, i, I, r, F, u, y, U, X)
                    }
                }
            }
            function n(N, C, D) {
                M.vertices.push(new Nm(N, C, D))
            }
            function t(k, Y, $, R) {
                k += X,
                Y += X,
                $ += X,
                M.faces.push(new Lc(k, Y, $, null, null, R ? 2 : 1));
                var N = R ? H.generateBottomUV(M, a, G, k, Y, $) : H.generateTopUV(M, a, G, k, Y, $);
                M.faceVertexUvs[0].push(N)
            }
            function R(D, Q, q, x, y, C, B, w, _) {
                D += X,
                Q += X,
                q += X,
                x += X,
                M.faces.push(new Lc(D, Q, x)),
                M.faces.push(new Lc(Q, q, x));
                var A = H.generateSideWallUV(M, a, y, G, D, Q, q, x, C, B, w, _);
                M.faceVertexUvs[0].push([A[0], A[1], A[3]]),
                M.faceVertexUvs[0].push([A[1], A[2], A[3]])
            }
            var P, T, C, U, K, E = G.amount,
            J = G.curveSegments || Yr,
            s = G.steps || 1,
            W = G.extrudePath,
            A = !1,
            H = new dh(G.repeatUVLength);
            W && (P = W.getSpacedPoints(s), A = !0, T = G.frames !== V ? G.frames: new lr.FrenetFrames(W, s, !1), C = new Nm, U = new Nm, K = new Nm);
            var e, I, L, M = this,
            X = this.vertices.length,
            i = a.extractPoints(J),
            p = i.shape,
            w = i.holes,
            Q = !pc.isClockWise(p);
            if (Q) {
                for (p = p.reverse(), I = 0, L = w.length; L > I; I++) e = w[I],
                pc.isClockWise(e) && (w[I] = e.reverse());
                Q = !1
            }
            var c = pc.triangulateShape(p, w),
            r = p;
            for (I = 0, L = w.length; L > I; I++) e = w[I],
            p = p.concat(e);
            for (var v, q, k = p.length,
            f = c.length,
            y = 0; k > y; y++) v = p[y],
            A ? (U.copy(T.normals[0]).multiplyScalar(v.x), C.copy(T.binormals[0]).multiplyScalar(v.y), K.copy(P[0]).add(U).add(C), n(K.x, K.y, K.z)) : n(v.x, v.y, 0);
            var h;
            for (h = 1; s >= h; h++) for (y = 0; k > y; y++) v = p[y],
            A ? (U.copy(T.normals[h]).multiplyScalar(v.x), C.copy(T.binormals[h]).multiplyScalar(v.y), K.copy(P[h]).add(U).add(C), n(K.x, K.y, K.z)) : n(v.x, v.y, E / s * h);
            j(),
            F()
        };
        var lr = function(H, M, U, n, L) {
            function F(t, C, K) {
                return z.vertices.push(new Nm(t, C, K)) - 1
            }
            an.call(this),
            M = M || 64,
            U = U || 1,
            n = n || 8,
            L = L || !1;
            var t, k, h, R, B, $, Y, s, d, T, A, o, E, p, l, Z, W, D, S, r, P = [],
            z = this,
            c = M + 1,
            O = new Nm,
            I = new lr.FrenetFrames(H, M, L),
            _ = I.tangents,
            w = I.normals,
            f = I.binormals;
            for (this.tangents = _, this.normals = w, this.binormals = f, d = 0; c > d; d++) for (P[d] = [], R = d / (c - 1), s = H.getPointAt(R), t = _[d], k = w[d], h = f[d], T = 0; n > T; T++) B = T / n * X,
            $ = -U * i(B),
            Y = U * g(B),
            O.copy(s),
            O.x += $ * k.x + Y * h.x,
            O.y += $ * k.y + Y * h.y,
            O.z += $ * k.z + Y * h.z,
            P[d][T] = F(O.x, O.y, O.z);
            for (d = 0; M > d; d++) for (T = 0; n > T; T++) A = L ? (d + 1) % M: d + 1,
            o = (T + 1) % n,
            E = P[d][T],
            p = P[A][T],
            l = P[A][o],
            Z = P[d][o],
            W = new ln(d / M, T / n),
            D = new ln((d + 1) / M, T / n),
            S = new ln((d + 1) / M, (T + 1) / n),
            r = new ln(d / M, (T + 1) / n),
            this.faces.push(new Lc(E, p, Z)),
            this.faceVertexUvs[0].push([W, D, r]),
            this.faces.push(new Lc(p, l, Z)),
            this.faceVertexUvs[0].push([D.clone(), S, r.clone()]);
            this.computeFaceNormals(),
            this.computeVertexNormals()
        };
        lr.prototype = Re(Uc),
        lr.FrenetFrames = function(h, O, o) {
            function G() {
                S[0] = new Nm,
                C[0] = new Nm,
                i = Number.MAX_VALUE,
                q = R(I[0].x),
                _ = R(I[0].y),
                A = R(I[0].z),
                i >= q && (i = q, D.set(1, 0, 0)),
                i >= _ && (i = _, D.set(0, 1, 0)),
                i >= A && D.set(0, 0, 1),
                z.crossVectors(I[0], D).normalize(),
                S[0].crossVectors(I[0], z),
                C[0].crossVectors(I[0], S[0])
            }
            var t, i, q, _, A, v, Q, D = new Nm,
            I = [],
            S = [],
            C = [],
            z = new Nm,
            K = new Hn,
            B = O + 1,
            k = 1e-4;
            for (this.tangents = I, this.normals = S, this.binormals = C, v = 0; B > v; v++) Q = v / (B - 1),
            I[v] = h.getTangentAt(Q),
            I[v].normalize();
            for (G(), v = 1; B > v; v++) S[v] = S[v - 1].clone(),
            C[v] = C[v - 1].clone(),
            z.crossVectors(I[v - 1], I[v]),
            z.length() > k && (z.normalize(), t = d(Xh(I[v - 1].dot(I[v]), -1, 1)), S[v].applyMatrix4(K.makeRotationAxis(z, t))),
            C[v].crossVectors(I[v], S[v]);
            if (o) for (t = d(Xh(S[0].dot(S[B - 1]), -1, 1)), t /= B - 1, I[0].dot(z.crossVectors(S[0], S[B - 1])) > 0 && (t = -t), v = 1; B > v; v++) S[v].applyMatrix4(K.makeRotationAxis(I[v], t * v)),
            C[v].crossVectors(I[v], S[v])
        };
        var fe = function(I, G, p, c) {
            an.call(this),
            G = G || 18,
            p = p || 0,
            c = c == F ? X: c;
            for (var H = 1 / (I.length - 1), W = 1 / G, V = 0, z = G; z >= V; V++) for (var E = p + V * W * c,
            Z = i(E), e = g(E), b = 0, T = I.length; T > b; b++) {
                var m = I[b],
                n = new Nm;
                n.x = Z * m.x - e * m.y,
                n.y = e * m.x + Z * m.y,
                n.z = m.z,
                this.vertices.push(n)
            }
            for (var Y = I.length,
            V = 0,
            z = G; z > V; V++) for (var b = 0,
            T = I.length - 1; T > b; b++) {
                var f = b + Y * V,
                D = f,
                x = f + Y,
                Z = f + 1 + Y,
                K = f + 1,
                t = V * W,
                L = b * H,
                q = t + W,
                s = L + H;
                this.faces.push(new Lc(D, K, x)),
                this.faceVertexUvs[0].push([new ln(t, L), new ln(t, s), new ln(q, L)]),
                this.faces.push(new Lc(x, K, Z)),
                this.faceVertexUvs[0].push([new ln(q, L), new ln(t, s), new ln(q, s)])
            }
            this.mergeVertices(),
            wc(this),
            this.computeFaceNormals(),
            this.computeVertexNormals()
        };
        fe.prototype = Re(Uc);
        var Ih = function(c, Y) {
            Y = Y || {};
            var l = Bp.generateShapes(c, Y);
            Y.amount = Y.amount !== V ? Y.amount: .5,
            Y.convertYZ = !1,
            Y.fill !== !1 && (Y.bottom = !0, Y.top = !0),
            Fe.call(this, l, Y)
        };
        Ih.prototype = Re(mr);
        var go = Y.Node = function() {
            Lo(go, this)
        },
        Zc = {
            X: Bq,
            Y: Dd,
            Z: jf
        },
        Fp = {
            xyz: "XYZ",
            xzy: "XZY",
            yxz: "YXZ",
            yzx: "YZX",
            zxy: "ZXY",
            zyx: "ZYX"
        },
        Pe = "xzy",
        Bh = function(V, f, J) {
            if (f) {
                var h = f[0],
                y = f[1],
                j = f[2];
                "xzy" === J ? (Dd(V, y), jf(V, j), Bq(V, h)) : "xyz" === J ? (jf(V, j), Dd(V, y), Bq(V, h)) : "yxz" === J ? (jf(V, j), Bq(V, h), Dd(V, y)) : "yzx" === J ? (Bq(V, h), jf(V, j), Dd(V, y)) : "zxy" === J ? (Dd(V, y), Bq(V, h), jf(V, j)) : "zyx" === J ? (Bq(V, h), Dd(V, y), jf(V, j)) : (Dd(V, y), jf(V, j), Bq(V, h))
            }
        };
        uh("Node", kg, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: Pe,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: F,
            _position: {
                x: 0,
                y: 0
            },
            _tall: 20,
            _54O: 0,
            getUIClass: function() {
                return Ql
            },
            _22Q: function() {
                return Wg
            },
            p: function() {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
            },
            p3: function() {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
            },
            s3: function() {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
            },
            r3: function() {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
            },
            t3: function() {
                return this.translate3d.apply(this, arguments),
                this
            },
            translate3dBy: function(z, n) {
                Uo(z, Bg(F, F, this.r3(), this.getRotationMode())),
                this.translate3d(z[0] * n, z[1] * n, z[2] * n)
            },
            translateFront: function(a) {
                this.translate3dBy([0, 0, 1], a)
            },
            translateBack: function(I) {
                this.translate3dBy([0, 0, -1], I)
            },
            translateLeft: function(L) {
                this.translate3dBy([ - 1, 0, 0], L)
            },
            translateRight: function(o) {
                this.translate3dBy([1, 0, 0], o)
            },
            translateTop: function(J) {
                this.translate3dBy([0, 1, 0], J)
            },
            translateBottom: function(M) {
                this.translate3dBy([0, -1, 0], M)
            },
            getPosition3d: function() {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function(X, j, I) {
                1 === arguments.length && (j = X[1], I = X[2], X = X[0]),
                this.p(X, I),
                this.setElevation(j)
            },
            translate3d: function(v, I, s) {
                1 === arguments.length && (I = v[1], s = v[2], v = v[0]),
                this.translate(v, s),
                this.setElevation(this._54O + I)
            },
            getSize3d: function() {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function(w, E, b) {
                1 === arguments.length && (E = w[1], b = w[2], w = w[0]),
                this.setSize(w, b),
                this.setTall(E)
            },
            getRotation3d: function() {
                return [this._rotationX, -this._64O, this._53O]
            },
            setRotation3d: function(X, D, v) {
                1 === arguments.length && (D = X[1], v = X[2], X = X[0]),
                this.setRotationX(X),
                this.setRotation( - D),
                this.setRotationZ(v)
            },
            setRotationY: function(M) {
                this.setRotation( - M)
            },
            getRotationY: function() {
                return - this._64O
            },
            lookAt: function(V, T) {
                T = T || ps;
                var o = this,
                p = Ge(V, o.p3()),
                R = ep(p);
                T === ps ? (o.r3([ - $(p[1] / R), -B(p[2], p[0]) + S, 0]), o.setRotationMode("xzy")) : T === um ? (o.r3(0, -B(p[2], p[0]), $(p[1] / R)), o.setRotationMode("zyx")) : T === Tb ? (o.r3(0, -B(p[2], p[0]) + y, -$(p[1] / R)), o.setRotationMode("zyx")) : T === aq ? (o.r3([ - $(p[1] / R) + S, -B(p[2], p[0]) + S, 0]), o.setRotationMode("xzy")) : T === Gg && (o.r3([ - $(p[1] / R) - S, -B(p[2], p[0]) + S, 0]), o.setRotationMode("xzy")),
                T === $m && (o.r3([ - $(p[1] / R) + y, -B(p[2], p[0]) + S, y]), o.setRotationMode("zxy"))
            },
            getLoopedEdges: function() {
                return this._45I
            },
            getEdges: function() {
                return this._70O
            },
            getAgentEdges: function() {
                return this._49I
            },
            getHost: function() {
                return this._host
            },
            setHost: function(N) {
                var U = this;
                if (U !== N && U._host !== N) {
                    var G = U._host;
                    G && G._removeAttach(U),
                    U._host = N,
                    U._host && U._host._addAttach(U),
                    U.fp("host", G, N),
                    U.onHostChanged(G, N)
                }
            },
            getAttaches: function() {
                return this._69O
            },
            _addAttach: function(h) {
                var C = this;
                C._69O || (C._69O = new Lq),
                C._69O.add(h),
                C.fp("attaches", F, h)
            },
            _removeAttach: function(i) {
                var h = this;
                h._69O.remove(i),
                h._69O.isEmpty() && delete h._69O,
                h.fp("attaches", i, F)
            },
            getSourceEdges: function() {
                return this._42I
            },
            getTargetEdges: function() {
                return this._43I
            },
            _2I: function(F) {
                var z = this;
                z._44I || (z._44I = new Lq),
                z._42I || (z._42I = new Lq),
                z._44I.add(F),
                z._42I.add(F),
                z._20I()
            },
            _4I: function(_) {
                var e = this;
                e._44I || (e._44I = new Lq),
                e._43I || (e._43I = new Lq),
                e._44I.add(_),
                e._43I.add(_),
                e._20I()
            },
            _16I: function(_) {
                var n = this;
                n._44I.remove(_),
                n._42I.remove(_),
                n._44I.isEmpty() && delete n._44I,
                n._42I.isEmpty() && delete n._42I,
                n._20I()
            },
            _18I: function(n) {
                var l = this;
                l._44I.remove(n),
                l._43I.remove(n),
                l._44I.isEmpty() && delete l._44I,
                l._43I.isEmpty() && delete l._43I,
                l._20I()
            },
            _20I: function() {
                var H = this;
                if (delete H._45I, !H._44I || H._44I.isEmpty()) return delete H._70O,
                void 0;
                var s;
                H._44I.each(function(r) {
                    r.isLooped() && (s || (s = {}), s[r._id] || (H._45I || (H._45I = new Lq), H._45I.add(r), s[r._id] = r))
                }),
                s ? (H._70O = new Lq, H._44I.each(function(Y) {
                    s[Y._id] ? "A" === s[Y._id] || (s[Y._id] = "A", H._70O.add(Y)) : H._70O.add(Y)
                })) : H._70O = H._44I
            },
            hasAgentEdges: function() {
                return !! this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function() {
                return this._46I
            },
            getTargetAgentEdges: function() {
                return this._47I
            },
            _1I: function(p) {
                var g = this;
                g._46I || (g._46I = new Lq),
                g._48I || (g._48I = new Lq),
                g._46I.add(p),
                g._48I.add(p),
                g._19I()
            },
            _3I: function(u) {
                var x = this;
                x._47I || (x._47I = new Lq),
                x._48I || (x._48I = new Lq),
                x._47I.add(u),
                x._48I.add(u),
                x._19I()
            },
            _15I: function(u) {
                var Z = this;
                Z._46I.remove(u),
                Z._48I.remove(u),
                Z._46I.isEmpty() && delete Z._46I,
                Z._48I.isEmpty() && delete Z._48I,
                Z._19I()
            },
            _17I: function(e) {
                var k = this;
                k._47I.remove(e),
                k._48I.remove(e),
                k._47I.isEmpty() && delete k._47I,
                k._48I.isEmpty() && delete k._48I,
                k._19I()
            },
            _19I: function() {
                var O = this;
                delete O._49I;
                var F = O._48I;
                if (F && !F.isEmpty()) {
                    var R = {};
                    F.each(function(Q) {
                        R[Q._id] ? O._49I || (O._49I = new Lq) : R[Q._id] = Q
                    }),
                    O._49I ? F.each(function(b) {
                        R[b._id] && (O._49I.add(b), delete R[b._id])
                    }) : O._49I = F
                }
            },
            getImage: function() {
                return this._image
            },
            setImage: function($) {
                var D = this,
                d = D._image,
                U = D.getWidth(),
                a = D.getHeight();
                D._image = $,
                D.fp("image", d, $),
                D.fp($o, U, D.getWidth()),
                D.fp($f, a, D.getHeight())
            },
            getElevation: function() {
                return this._54O
            },
            setElevation: function(u) {
                var g = this;
                if (!g._50O) {
                    g._50O = 1;
                    var U = g._54O;
                    g._54O = u,
                    g.fp(qb, U, u),
                    delete this._50O
                }
            },
            getRotation: function() {
                return this._64O
            },
            setRotation: function(u) {
                var h = this;
                if (!h._49O) {
                    h._49O = 1;
                    var p = h._64O;
                    h._64O = u,
                    h.fp(Mj, p, u),
                    delete h._49O
                }
            },
            getRotationX: function() {
                return this._rotationX
            },
            setRotationX: function(r) {
                var B = this;
                if (!B._51O) {
                    B._51O = 1;
                    var O = B._rotationX;
                    B._rotationX = r,
                    B.fp("rotationX", O, r),
                    delete B._51O
                }
            },
            getRotationZ: function() {
                return this._53O
            },
            setRotationZ: function(J) {
                var Z = this;
                if (!Z._52O) {
                    Z._52O = 1;
                    var E = Z._53O;
                    Z._53O = J,
                    Z.fp("rotationZ", E, J),
                    delete Z._52O
                }
            },
            getPosition: function() {
                return this._position
            },
            setPosition: function(P, n) {
                var R = this;
                if (!R._50I) {
                    R._50I = 1;
                    var Y;
                    if (Y = 2 === arguments.length ? {
                        x: P,
                        y: n
                    }: P, Y.x !== R._position.x || Y.y !== R._position.y) {
                        var g = R._position;
                        R._position = Y,
                        R.fp(Rq, g, Y)
                    }
                    delete R._50I
                }
            },
            translate: function(n, e) {
                var i = this._position;
                this.p(i.x + n, i.y + e)
            },
            getWidth: function() {
                var J = this;
                if (J._width >= 0) return J._width;
                var k = oq(J._image);
                return k ? Dr(k, J) : 20
            },
            setWidth: function(r) {
                var s = this,
                I = s._width;
                s._width = r,
                s.fp($o, I, r)
            },
            getHeight: function() {
                var Z = this;
                if (Z._height >= 0) return Z._height;
                var h = oq(Z._image);
                return h ? Ll(h, Z) : 20
            },
            setHeight: function(Y) {
                var r = this,
                I = r._height;
                r._height = Y,
                r.fp($f, I, Y)
            },
            setSize: function(Q, i) {
                var t = this;
                2 === arguments.length ? (t.setWidth(Q), t.setHeight(i)) : (t.setWidth(Q.width), t.setHeight(Q.height))
            },
            getSize: function() {
                return {
                    width: this.getWidth(),
                    height: this.getHeight()
                }
            },
            setRect: function(U, d, s, F) {
                var B = this;
                1 === arguments.length ? (B.p(U.x + U.width / 2, U.y + U.height / 2), B.setWidth(U.width), B.setHeight(U.height)) : (B.p(U + s / 2, d + F / 2), B.setWidth(s), B.setHeight(F))
            },
            getRect: function() {
                var g = this,
                v = g.getWidth(),
                B = g.getHeight();
                return ld({
                    x: g._position.x - v / 2,
                    y: g._position.y - B / 2,
                    width: v,
                    height: B
                },
                g._64O)
            },
            getCorners: function(x, l) {
                x == F && (x = 0),
                l == F && (l = x);
                var y = this,
                k = y._position,
                o = y.getWidth() / 2 + x,
                K = y.getHeight() / 2 + l,
                J = new ls(y._64O, k.x, k.y);
                return [J.tf( - o, -K), J.tf(o, -K), J.tf(o, K), J.tf( - o, K)]
            },
            rotateAt: function(z, Q, S) {
                var p = this,
                Y = p._position,
                F = p._64O,
                n = new ls(F, Y.x, Y.y).tf(z, Q),
                W = k(z * z + Q * Q),
                f = B(Y.y - n.y, Y.x - n.x) + S;
                p.setRotation(F + S),
                p.p(n.x + W * i(f), n.y + W * g(f))
            },
            onParentChanged: function() {
                go.superClass.onParentChanged.apply(this, arguments),
                this._8I()
            },
            _8I: function() {
                this._70O && this._70O.each(function(R) {
                    R._7I()
                })
            },
            onPropertyChanged: function(q) {
                var W = this;
                go.superClass.onPropertyChanged.call(W, q),
                W._69O && W._69O.each(function(w) {
                    w.handleHostPropertyChange(q)
                }),
                W._49I && W._49I.each(function(z) {
                    z.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function() {
                this.updateAttach()
            },
            handleHostPropertyChange: function(p) {
                this.updateAttach(p)
            },
            onStyleChanged: function(n) {
                go.superClass.onStyleChanged.apply(this, arguments),
                Bk[n] && this.updateAttach()
            },
            updateAttach: function(J) {
                var G = this;
                G._51I || rl || (G._51I = 1, G._71O(J), delete G._51I)
            },
            _71O: function(O) {
                var C, b, n, V, H, W, _ = this,
                t = _._host,
                g = O ? O.property: F,
                T = O ? O.oldValue: F,
                P = O ? O.newValue: F;
                if (t instanceof Fk) {
                    if (g === qb) _.setElevation(_._54O + P - T);
                    else if (!O || Vf[g]) {
                        if (C = _.s("attach.row.index"), b = _.s("attach.column.index"), n = t.getCellRect(C, b), !n) return;
                        V = _.s("attach.row.span"),
                        H = _.s("attach.column.span"),
                        (1 !== V || 1 !== H) && (n = _o(n, t.getCellRect(C + V - 1, b + H - 1))),
                        Pd(n, _, "attach.padding", 1),
                        _.setRect(n)
                    }
                } else if (t instanceof wr && (W = _.s("attach.index")) >= 0 && (!O || Wo[g])) {
                    var S = _.s("attach.thickness");
                    S != F && _.setHeight(t.getThickness() * S);
                    var k = _.s("attach.offset"),
                    R = t.getPoints(),
                    l = R.size();
                    if (l > W) {
                        var G = R.get(W),
                        Q = l === W + 1 ? R.get(0) : R.get(W + 1),
                        v = [Q.x - G.x, Q.y - G.y],
                        w = ep(v);
                        if (w) {
                            _.s("attach.offset.relative") && (k *= w),
                            _.s("attach.offset.opposite") && (k = w - k);
                            var E = {
                                x: G.x + v[0] / w * k,
                                y: G.y + v[1] / w * k
                            },
                            K = _.s("attach.gap");
                            K && (_.s("attach.gap.relative") && (K *= t.getThickness()), E = Jb(F, E, Q, K)),
                            _.p(E),
                            _.setRotation(B(v[1], v[0]))
                        }
                    }
                } else O && (g === Rq ? _.translate(P.x - T.x, P.y - T.y) : g === qb ? _.setElevation(_._54O + P - T) : Wl[g] && _._11Q(t, g, P - T))
            },
            _11Q: function(F, l, V) {
                var z = this,
                v = F.p3(),
                k = Ge(z.p3(), v),
                a = Vi(),
                Z = Fp[z.getRotationMode()],
                U = Z[0],
                f = Z[1],
                b = Z[2],
                e = Zc[U],
                c = Zc[f],
                g = Zc[b];
                l === Mj && (l = "rotationY", V = -V),
                l === Mj + U ? (g(a, F[ad + b]()), c(a, F[ad + f]()), e(a, V), c(a, -F[ad + f]()), g(a, -F[ad + b]()), z[Bl + U](z[ad + U]() + V)) : l === Mj + f ? (g(a, F[ad + b]()), c(a, V), g(a, -F[ad + b]()), z[Bl + f](z[ad + f]() + V)) : l === Mj + b && (g(a, V), z[Bl + b](z[ad + b]() + V)),
                Uo(k, a),
                z.p3(v[0] + k[0], v[1] + k[1], v[2] + k[2])
            },
            isHostOn: function(W) {
                var Y = this;
                if (Y._host && W && W._69O) for (var L = {},
                c = Y._host; c && c !== Y && !L[c._id];) {
                    if (c === W) return ! 0;
                    L[c._id] = c,
                    c = c._host
                }
                return ! 1
            },
            isLoopedHostOn: function(K) {
                return this.isHostOn(K) && K.isHostOn(this)
            },
            getSerializableProperties: function() {
                var n = go.superClass.getSerializableProperties.call(this);
                return vc(n, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    width: 1,
                    height: 1,
                    tall: 1,
                    elevation: 1
                }),
                n
            }
        });
        var mq = Y.Edge = function(k, M) {
            var H = this;
            Lo(mq, H),
            H.setSource(k),
            H.setTarget(M)
        };
        uh("Edge", kg, {
            _icon: "edge_icon",
            getUIClass: function() {
                return vq
            },
            _22Q: function() {
                return Yi
            },
            getSource: function() {
                return this._source
            },
            getTarget: function() {
                return this._target
            },
            getSourceAgent: function() {
                return this._40I
            },
            getTargetAgent: function() {
                return this._41I
            },
            setSource: function(e) {
                var b = this;
                if (b._source !== e) {
                    var l = b._source;
                    b._source = e,
                    l && l._16I(b),
                    e && e._2I(b),
                    b._7I(),
                    b.fp("source", l, e)
                }
            },
            setTarget: function(g) {
                var b = this;
                if (b._target !== g) {
                    var S = b._target;
                    b._target = g,
                    S && S._18I(b),
                    g && g._4I(b),
                    b._7I(),
                    b.fp("target", S, g)
                }
            },
            isLooped: function() {
                var K = this;
                return K._source === K._target && !!K._source && !!K._target
            },
            _7I: function() {
                var f, b = this,
                s = qf(b);
                b._40I !== s && (f = this._40I, f && f._15I(b), b._40I = s, s && s._1I(b), b.fp("sourceAgent", f, s), lc(f, b._41I), lc(s, b._41I));
                var _ = jb(b);
                b._41I !== _ && (f = b._41I, f && f._17I(b), b._41I = _, _ && _._3I(b), b.fp("targetAgent", f, _), lc(f, b._40I), lc(_, b._40I))
            },
            _22I: function(d) {
                this._52I = d,
                this.fp("edgeGroup", !0, !1)
            },
            getEdgeGroup: function() {
                return this._52I
            },
            isEdgeGroupHidden: function() {
                var F = this;
                return F._52I && F._52I.get(0) !== F && !F.getStyle(ap)
            },
            getEdgeGroupSize: function() {
                return this._52I ? this._52I.size() : 1
            },
            getEdgeGroupIndex: function() {
                return this._52I ? this._52I.indexOf(this) : 0
            },
            isEdgeGroupAgent: function() {
                var z = this,
                Y = z._52I;
                return Y && !z.getStyle(ap) && Y.size() > 1 && z === Y.get(0)
            },
            toggle: function() {
                var O = this._52I,
                h = !this.s(ap);
                O && O.size() > 1 && (O.each(function(Q) {
                    Q.s(ap, h)
                }), O.getSiblings().each(function(l) {
                    l !== O && l.each(function(U) {
                        U.fp("edgeGroup", F, l)
                    })
                }))
            },
            setStyle: function(j, G) { (j === ah || "edge.segments" === j) && (G = yo(G)),
                mq.superClass.setStyle.call(this, j, G)
            },
            onStyleChanged: function(n) {
                mq.superClass.onStyleChanged.apply(this, arguments),
                om[n] && lc(this._41I, this._40I)
            },
            getSerializableProperties: function() {
                var Q = mq.superClass.getSerializableProperties.call(this);
                return vc(Q, {
                    source: 1,
                    target: 1
                }),
                Q
            }
        });
        var Hf = Y.Group = function() {
            Lo(Hf, this)
        };
        uh("Group", go, {
            _image: "group_image",
            _icon: "group_icon",
            _57O: !1,
            getUIClass: function() {
                return cs
            },
            onChildAdded: function() {
                Hf.superClass.onChildAdded.apply(this, arguments),
                this._81I()
            },
            onChildRemoved: function() {
                Hf.superClass.onChildRemoved.apply(this, arguments),
                this._81I()
            },
            _81I: function() {
                var J = this;
                if (!J._54I && !rl) {
                    var k = J.getChildrenRect();
                    k && (J._53I = 1, J.p(jc(J.s("group.position"), k, J.getSize())), delete J._53I)
                }
            },
            getChildrenRect: function() {
                var G, N = this;
                return N.eachChild(function(p) {
                    G = _o(G, N.getChildRect(p))
                }),
                G
            },
            getChildRect: function(Y) {
                var j;
                return Bm(Y) && Y.s(ss) && (sl(Y) && Y.isExpanded() && Y.eachChild(function(W) {
                    j = _o(j, Y.getChildRect(W))
                }), !j && Y.getRect && (j = Y.getRect())),
                j
            },
            setPosition: function(m, R) {
                var N = this;
                if (!N._54I) {
                    var x;
                    x = 2 === arguments.length ? {
                        x: m,
                        y: R
                    }: m,
                    rl || N._53I || (N._54I = 1, Nh(N._children, x.x - N._position.x, x.y - N._position.y), delete N._54I),
                    Hf.superClass.setPosition.call(this, x)
                }
            },
            toggle: function() {
                this.setExpanded(!this.isExpanded())
            },
            isExpanded: function() {
                return this._57O
            },
            setExpanded: function(L) {
                var t = this;
                if (t._57O !== L) {
                    var U = t._57O;
                    t._57O = L,
                    t.fp("expanded", U, t._57O),
                    t._8I()
                }
            },
            _8I: function() {
                Hf.superClass._8I.call(this),
                this.eachChild(function(W) {
                    Bm(W) && W._8I()
                })
            },
            onStyleChanged: function(V) {
                Hf.superClass.onStyleChanged.apply(this, arguments),
                "group.position" === V && this._81I()
            },
            getSerializableProperties: function() {
                var M = Hf.superClass.getSerializableProperties.call(this);
                return M.expanded = 1,
                M
            }
        });
        var Fk = Y.Grid = function() {
            Lo(Fk, this)
        };
        uh("Grid", go, {
            IRotatable: !1,
            _icon: "grid_icon",
            _image: F,
            getUIClass: function() {
                return kf
            },
            setRotation: function() {},
            getCellRect: function(X, R) {
                var P = this,
                r = P.s("grid.row.count"),
                Z = P.s("grid.column.count");
                if (0 >= r || 0 >= Z || 0 > X || X >= r || 0 > R || R >= Z) return F;
                var v, p, n, d = P.getRect(),
                L = P.s("grid.row.percents"),
                M = P.s("grid.column.percents");
                if (Pd(d, P, "grid.border", -1), L && L._as && (L = L._as), M && M._as && (M = M._as), L && L.length === r) {
                    for (n = 0, v = 0; X > v; v++) n += d.height * L[v];
                    d.y += n,
                    d.height = d.height * L[X]
                } else d.height = d.height / r,
                d.y += d.height * X;
                if (M && M.length === Z) {
                    for (p = 0, v = 0; R > v; v++) p += d.width * M[v];
                    d.x += p,
                    d.width = d.width * M[R]
                } else d.width = d.width / Z,
                d.x += d.width * R;
                return tq(d, -P.s("grid.gap")),
                d
            }
        });
        var Jf = Y.Text = function() {
            Lo(Jf, this),
            this.setSize(100, 50),
            this.s("text", "TEXT")
        };
        uh("Text", go, {
            _icon: "text_icon",
            _image: "__text__",
            getUIClass: function() {
                return Mm
            },
            setWidth: function(e) {
                e || (e = .001),
                Jf.superClass.setWidth.call(this, e)
            },
            setHeight: function(X) {
                X || (X = .001),
                Jf.superClass.setHeight.call(this, X)
            }
        }),
        Td("__text__", {
            width: {
                value: 100,
                func: function(u) {
                    return u._width
                }
            },
            height: {
                value: 50,
                func: function(O) {
                    return O._height
                }
            },
            comps: [{
                type: "text",
                relative: !0,
                rect: [0, 0, 1, 1],
                text: {
                    func: "style@text"
                },
                align: {
                    func: "style@text.align"
                },
                vAlign: {
                    func: "style@text.vAlign"
                },
                color: {
                    func: "style@text.color"
                },
                font: {
                    func: "style@text.font"
                },
                shadow: {
                    func: "style@text.shadow"
                },
                shadowColor: {
                    func: "style@text.shadow.color"
                },
                shadowBlur: {
                    func: "style@text.shadow.blur"
                },
                shadowOffsetX: {
                    func: "style@text.shadow.offset.x"
                },
                shadowOffsetY: {
                    func: "style@text.shadow.offset.y"
                }
            }]
        });
        var wr = Y.Shape = function() {
            Lo(wr, this),
            this._59O = new Lq
        };
        wr.__de__ = En,
        uh("Shape", go, {
            ms_ac: ["thickness", "closePath"],
            _icon: "shape_icon",
            _thickness: 10,
            _closePath: !1,
            getUIClass: function() {
                return Yo
            },
            _22Q: function() {
                return Cq
            },
            getLength: function(C) {
                return Si(Dp(this._59O, this._58O, C, this._closePath))
            },
            getSegments: function() {
                return this._58O
            },
            toSegments: function() {
                var Z = this._58O;
                return Z ? new Lq(Z._as.slice(0)) : Z
            },
            setSegments: function(Y) {
                var S = this._58O;
                Y = Y ? eb(Y) ? new Lq(Y.slice(0)) : new Lq(Y._as.slice(0)) : new Lq,
                (S && Y && S._as.join(",") !== Y._as.join(",") || S !== Y) && (this._58O = Y, this.fp("segments", S, Y))
            },
            getPoints: function() {
                return this._59O
            },
            toPoints: function() {
                var E = this._59O;
                return new Lq(E._as.slice(0))
            },
            setPoints: function(p) {
                var R = this._59O;
                p = p ? eb(p) ? new Lq(p.slice(0)) : new Lq(p._as.slice(0)) : new Lq,
                (R && p && R._as.join(",") !== p._as.join(",") || R !== p) && (this._59O = p, this.fs(), this.fp("points", R, p))
            },
            addPoint: function(l, u) {
                var h = this.toPoints();
                h.add(l, u),
                this.setPoints(h)
            },
            setPoint: function(f, J) {
                var m = this.toPoints();
                m.set(f, J),
                this.setPoints(m)
            },
            removePointAt: function(Q) {
                var Y = this.toPoints();
                Y.removeAt(Q),
                this.setPoints(Y)
            },
            setWidth: function(O) {
                var o = this;
                if (1 > O && (O = 1), !o._55I && !rl && o.getWidth()) {
                    o._55I = 1;
                    var g = o._position.x,
                    Q = O / o.getWidth(),
                    t = o.toPoints(),
                    k = new Lq;
                    t.each(function(z) {
                        k.add({
                            x: (z.x - g) * Q + g,
                            y: z.y,
                            e: z.e
                        })
                    }),
                    o.setPoints(k),
                    o.fs(),
                    delete o._55I
                }
                wr.superClass.setWidth.call(o, O)
            },
            setHeight: function(n) {
                var E = this;
                if (1 > n && (n = 1), !E._55I && !rl && E.getHeight()) {
                    E._55I = 1;
                    var h = E._position.y,
                    z = n / E.getHeight(),
                    p = E.toPoints(),
                    Z = new Lq;
                    p.each(function(e) {
                        Z.add({
                            x: e.x,
                            y: (e.y - h) * z + h,
                            e: e.e
                        })
                    }),
                    E.setPoints(Z),
                    E.fs(),
                    delete E._55I
                }
                wr.superClass.setHeight.call(E, n)
            },
            setPosition: function(O, B) {
                var s, E = this;
                if (!E._28Q) {
                    if (E._28Q = 1, !E._55I && !rl) {
                        s = 2 === arguments.length ? {
                            x: O,
                            y: B
                        }: O;
                        var N = s.x - E._position.x,
                        u = s.y - E._position.y;
                        if (0 === N && 0 === u) return delete E._28Q,
                        void 0;
                        E._55I = 1;
                        var j = E.toPoints(),
                        G = new Lq;
                        j.each(function(S) {
                            G.add({
                                x: S.x + N,
                                y: S.y + u,
                                e: S.e
                            })
                        }),
                        E.setPoints(G),
                        E.fs(),
                        delete E._55I
                    }
                    wr.superClass.setPosition.apply(E, arguments),
                    delete E._28Q
                }
            },
            fs: function() {
                this.fireShapeChange()
            },
            fireShapeChange: function() {
                var B = this;
                if (!B._55I && !rl) {
                    var G = Hd(B._59O);
                    G && (B._55I = 1, B.setRect(G), delete B._55I)
                }
                B.fp(Fb, !1, !0)
            },
            getSerializableProperties: function() {
                var l = wr.superClass.getSerializableProperties.call(this);
                return l.segments = 1,
                l.points = 1,
                l.thickness = 1,
                l.closePath = 1,
                l
            }
        });
        var Jp = Y.Polyline = function() {
            Lo(Jp, this),
            this.s({
                "shape.background": null,
                "shape.border.width": 2
            })
        };
        uh("Polyline", wr, {
            IRotatable: !1,
            _icon: "polyline_icon",
            _22Q: function() {
                return Of
            },
            getUIClass: function() {
                return Ir
            },
            setRotationX: function() {},
            setRotation: function() {},
            setRotationZ: function() {},
            setClosePath: function() {},
            setTall: function(N) {
                var G = this;
                if (!G._24Q && !rl && G.getTall()) {
                    G._24Q = 1;
                    var Q = G._54O,
                    d = N / G.getTall();
                    G._59O.each(function(Y) {
                        Y.e = Y.e == F ? Q: (Y.e - Q) * d + Q
                    }),
                    G.fs(),
                    delete G._24Q
                }
                Jp.superClass.setTall.call(G, N)
            },
            setElevation: function(Q) {
                var Y = this;
                if (!Y._24Q && !rl) {
                    Y._24Q = 1;
                    var E = Q - Y._54O;
                    Y._59O.each(function(t) {
                        t.e == F ? t.e = Q: t.e += E
                    }),
                    Y.fs(),
                    delete Y._24Q
                }
                Jp.superClass.setElevation.apply(Y, arguments)
            },
            fireShapeChange: function() {
                var N = this,
                y = N._59O;
                if (!N._24Q && !rl) {
                    var O = y.size();
                    if (O) {
                        var m = 1,
                        z = y.get(0),
                        K = N._54O;
                        z.e == F && (z.e = K);
                        for (var V = z.e,
                        M = 0; O > m; m++) {
                            z = y.get(m),
                            z.e == F && (z.e = K);
                            var x = s(V, z.e),
                            P = h(V + M, z.e);
                            V = x,
                            M = P - x
                        }
                        N._24Q = 1,
                        N.setTall(M),
                        N.setElevation(V + M / 2),
                        delete N._24Q
                    }
                }
                Jp.superClass.fireShapeChange.apply(N, arguments)
            }
        });
        var He = Y.SubGraph = function() {
            Lo(He, this)
        };
        uh("SubGraph", go, {
            ISubGraph: 1,
            _image: "subGraph_image",
            _icon: "subGraph_icon",
            _8I: function() {
                He.superClass._8I.call(this),
                this.eachChild(function(v) {
                    Bm(v) && v._8I()
                })
            }
        }),
        Y.EdgeGroup = function(U, V) {
            this._70O = U,
            this._siblings = V;
            for (var l, q, z = 0,
            X = U.size(), W = b[ap]; X > z; z++) if (l = U.get(z).getStyle(ap, !1), l != F) {
                W = l;
                break
            }
            W == F && (W = !0);
            var Z = C.edgeGroupAgentFunc;
            for (Z && (q = Z(U), q && q !== U.get(0) && (U.remove(q), U.add(q, 0))), z = 0; X > z; z++) U.get(z).s(ap, W)
        },
        uh("EdgeGroup", o, {
            getEdges: function() {
                return this._70O
            },
            size: function() {
                return this._70O.size()
            },
            get: function(i) {
                return this._70O.get(i)
            },
            indexOf: function(j) {
                return this._70O.indexOf(j)
            },
            each: function(G, L) {
                this._70O.each(G, L)
            },
            getSiblings: function() {
                return this._siblings
            },
            eachSiblingEdge: function(G, q) {
                this._siblings.each(function(X) {
                    X._70O.each(G, q)
                })
            }
        });
        var qd = Y.JSONSerializer = function(O, y) {
            this.dm = this._dataModel = O,
            this._hierarchical = !!y
        };
        uh("JSONSerializer", o, {
            ms_ac: ["hierarchical"],
            serialize: function(g) {
                return C.stringify(this.toJSON(), g)
            },
            toJSON: function() {
                var K = this,
                I = K.dm,
                h = I.getRoots(),
                Q = K.json = {
                    v: C.getVersion(),
                    p: {},
                    a: {},
                    d: []
                },
                q = I.getSerializableAttrs();
                I.getName() && (Q.p.name = I.getName()),
                Q.p.autoAdjustIndex = I.isAutoAdjustIndex();
                for (var Y in q) {
                    var J = I.a(Y);
                    J !== V && K[Up](Y, J, Q.a)
                }
                return Sk(Q.a) && delete Q.a,
                K._hierarchical ? h.each(K.serializeData, this) : I.each(function(o) {
                    K.serializeData(o)
                }),
                Q
            },
            isSerializable: function() {
                return ! 0
            },
            getProperties: function(y) {
                return y.getSerializableProperties()
            },
            getStyles: function(I) {
                return I.getSerializableStyles()
            },
            getAttrs: function(o) {
                return o.getSerializableAttrs()
            },
            serializeData: function(m) {
                var d = this;
                if (d.isSerializable(m)) {
                    var N, A, t, r, c = m.getClass(),
                    P = new c,
                    W = {
                        c: m.getClassName(),
                        i: m.getId(),
                        p: {},
                        s: {},
                        a: {}
                    };
                    d.json.d.push(W),
                    N = d.getProperties(m);
                    for (A in N) r = sc(A),
                    m[r] && (t = m[r](), t !== P[r]() && d[Up](A, t, W.p));
                    N = d.getStyles(m);
                    for (A in N) t = m.s(A),
                    t !== P.s(A) && d[Up](A, t, W.s);
                    N = d.getAttrs(m);
                    for (A in N) t = m.a(A),
                    t !== P.a(A) && d[Up](A, t, W.a);
                    Sk(W.p) && delete W.p,
                    Sk(W.s) && delete W.s,
                    Sk(W.a) && delete W.a
                }
                d._hierarchical && m.getChildren().each(d.serializeData, d)
            },
            serializeValue: function(g, W, h) {
                Fm(W) ? W = {
                    __a: W._as
                }: W instanceof kg && (W = {
                    __i: W.getId()
                }),
                h[g] = W
            },
            deserialize: function(A, q, v) {
                rl = !0;
                var S = this;
                A = S.json = Cl(A) ? C.parse(A) : A,
                S._82I = {};
                for (var i = S.dm,
                H = new Lq,
                w = new Lq,
                d = 0,
                z = A.d.length; z > d; d++) {
                    var M = A.d[d],
                    L = cf(M.c),
                    K = new L,
                    l = M.i;
                    v && l != F && (K._id = l),
                    S._82I[l] = K,
                    H.add(K),
                    w.add(M)
                }
                for (d = 0; z > d; d++) S.deserializeData(H.get(d), w.get(d));
                H.each(function(O) {
                    q && !O.getParent() && O.setParent(q),
                    i.add(O)
                });
                for (var V in A.a) i.a(V, S[Pj](A.a[V]));
                for (var Z in A.p) i[es(Z)](A.p[Z]);
                return rl = !1,
                H
            },
            deserializeData: function(M, f) {
                for (var x in f.p) M[es(x)](this[Pj](f.p[x]));
                for (x in f.s) M.s(x, this[Pj](f.s[x]));
                for (x in f.a) M.a(x, this[Pj](f.a[x]))
            },
            deserializeValue: function(e) {
                if (_l(e)) {
                    var P = e.__i;
                    if (P != F) return this._82I[P];
                    if (P = e.__a, eb(P)) return new Lq(P)
                }
                return e
            }
        }),
        vc(si, {
            serialize: function(o, S) {
                return new qd(this, S).serialize(o)
            },
            toJSON: function(j) {
                return new qd(this, j).toJSON()
            },
            deserialize: function(_, J, d) {
                return new qd(this).deserialize(_, J, d)
            }
        }),
        lf.GraphView = function(R) {
            var z = this;
            z._24I = {},
            z._34I = new Lq,
            z._25I = {},
            z._56I = {},
            z._view = Kp(1, z),
            z._canvas = Jr(z._view),
            z.dm(R ? R: new si),
            z.setEditable(!1),
            z.setScrollBarVisible(C.graphViewScrollBarVisible)
        },
        Ug("GraphView", o, {
            ms_v: 1,
            ms_gv: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            _52o: 1,
            _51o: 1,
            ms_ac: ["layers", ik, Oi, ur, Hh, "resettable", "editInteractor", Xg, "pannable", "rectSelectable", "autoScrollZone", pb, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
            _resettable: C.graphViewResettable,
            _pannable: C.graphViewPannable,
            _rectSelectable: C.graphViewRectSelectable,
            _autoScrollZone: C.graphViewAutoScrollZone,
            _rectSelectBackground: C.graphViewRectSelectBackground,
            _rectSelectBorderColor: C.graphViewRectSelectBorderColor,
            _editPointSize: C.graphViewEditPointSize,
            _editPointBorderColor: C.graphViewEditPointBorderColor,
            _editPointBackground: C.graphViewEditPointBackground,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoHideScrollBar: xi,
            _autoMakeVisible: Tl,
            setEditable: function(T) {
                var V = this,
                Q = lf.XEditInteractor;
                T ? V.setInteractors([new pn(V), new pp(V), Q ? new Q(V) : new vp(V), new ee(V), new zk(V), new mf(V, {
                    editable: !Q
                })]) : V.setInteractors([new pn(V), new pp(V), new ee(V), new zk(V), new mf(V, {
                    editable: !1
                })])
            },
            getCanvas: function() {
                return this._canvas
            },
            _33I: function(W) {
                var k = W.getUIClass();
                return k ? new k(this, W) : F
            },
            getDataUI: function(Q) {
                var Y = this,
                U = Y._25I[Q._id];
                return U === V && (U = Y._33I(Q), Y._25I[Q._id] = U),
                U
            },
            invalidateAll: function(i) {
                var t = this;
                if (i) {
                    for (var N in t._25I) {
                        var c = t._25I[N];
                        c && c.dispose()
                    }
                    t._25I = {},
                    t._56I = {},
                    t._24I = {},
                    t._34I.clear(),
                    t.redraw()
                } else t.dm().each(function(w) {
                    t.invalidateData(w)
                })
            },
            invalidateSelection: function() {
                var E = this;
                E.sm().each(function(o) {
                    E.invalidateData(o)
                })
            },
            invalidateData: function(G) {
                var M = this;
                M._24I[G._id] = G,
                M._21Q(G),
                M.iv()
            },
            _21Q: function(j) {
                var d = this,
                l = d._24I;
                if (wn(j) && Mi[j.s(Ae)]) {
                    var Y = j.getSourceAgent();
                    Y && Y.getAgentEdges().each(function(b) {
                        l[b._id] = b
                    }),
                    Y = j.getTargetAgent(),
                    Y && Y.getAgentEdges().each(function(r) {
                        l[r._id] = r
                    }),
                    d.iv()
                }
            },
            redraw: function(m) {
                var s = this;
                s._32I || (m ? s._34I.add(m) : (s._32I = 1, s._34I.clear()), s.iv())
            },
            each: function(n, S) {
                var F, b, q, y = 0,
                O = this._layers,
                I = this._dataModel._datas._as,
                J = I.length;
                if (O) for (var U = O.length; U > y; y++) {
                    q = O[y];
                    for (var E = 0; J > E; E++) if (F = I[E], F._layer === q && (b = S ? n.call(S, F) : n(F), b === !1)) return
                } else for (; J > y; y++) if (F = I[y], b = S ? n.call(S, F) : n(F), b === !1) return
            },
            reverseEach: function(m, G) {
                var C, $, l, D, _ = this._layers,
                k = this._dataModel._datas._as,
                o = k.length;
                if (_) for (C = _.length - 1; C >= 0; C--) {
                    D = _[C];
                    for (var F = o - 1; F >= 0; F--) if ($ = k[F], $._layer === D && (l = G ? m.call(G, $) : m($), l === !1)) return
                } else for (C = o - 1; C >= 0; C--) if ($ = k[C], l = G ? m.call(G, $) : m($), l === !1) return
            },
            getViewRect: function() {
                return this._29I
            },
            getContentRect: function() {
                var z = this,
                s = z._84I;
                return s || (z.each(function(S) {
                    z.isVisible(S) && (s = _o(s, z.getDataUIBounds(S)))
                }), z._84I = s ? s: mk),
                z._84I
            },
            getScrollRect: function() {
                return _o(this.getContentRect(), this._29I)
            },
            fitData: function(B, x, w, q, Q) {
                var _ = this;
                if (!_.getWidth() || !_.getHeight()) return Q || jp(_.fitData, _, [B, x, w, q, !0], 200),
                void 0;
                _.makeVisible(B),
                _.validate();
                var p = _.getDataUIBounds(B);
                p && (p = qj(p), tq(p, w == F ? 20 : w), _.fitRect(p, x, q))
            },
            fitContent: function(k, L, N, W) {
                var S = this;
                if (!S.getWidth() || !S.getHeight()) return W || jp(S.fitContent, S, [k, L, N, !0], 200),
                void 0;
                S.validate();
                var M = qj(S.getContentRect());
                tq(M, L == F ? 20 : L),
                S.fitRect(M, k, N)
            },
            fitRect: function(N, E, $) {
                var f = this,
                Z = f.getWidth(),
                u = f.getHeight(),
                B = N.x + N.width / 2,
                P = N.y + N.height / 2,
                g = s(Z / N.width, u / N.height),
                o = f._zoom,
                _ = -B * o + Z / 2,
                t = -P * o + u / 2;
                0 === g || isNaN(g) || ($ && (g = s(1, g)), E ? f.setTranslate(_, t, {
                    finishFunc: function() {
                        f.setZoom(g, E)
                    }
                }) : (f.setTranslate(_, t), f.setZoom(g)))
            },
            toCanvas: function(O, q) {
                q = q || this._zoom,
                this.validateImpl();
                var v = this,
                I = v.getContentRect();
                I.width || (I.width = 10),
                I.height || (I.height = 10);
                var d = Jr(),
                B = I.x * q,
                N = I.y * q,
                J = I.width * q,
                Y = I.height * q;
                Kc(d, J, Y, 1);
                var s = oo(d);
                return O && qe(s, 0, 0, J, Y, O),
                Oj(s, -B, -N),
                s.scale(q, q),
                v._42(s),
                s.restore(),
                d
            },
            toDataURL: function(c, W, i) {
                return this.toCanvas(c, i).toDataURL(W || "image/png", 1)
            },
            getClipBounds: function() {
                return this._74O
            },
            _42: function(x, O) {
                var _, b, K = this;
                K._93db(x, O),
                K.each(function(L) {
                    K._56I[L._id] && (_ = K.getDataUI(L), _ && (b = _._79o(), Y.HtmlNode && L instanceof Y.HtmlNode ? _._42(x) : (!O || Ii(O, b)) && _._42(x)))
                }),
                K._92db(x, O)
            },
            validateImpl: function() {
                var z, r, Z, f, S, $ = this,
                v = $.tx(),
                p = $.ty(),
                l = $._zoom,
                N = $._canvas,
                s = this.getWidth(),
                c = this.getHeight(),
                x = $._29I,
                n = {
                    x: -v / l,
                    y: -p / l,
                    width: s / l,
                    height: c / l
                },
                D = {},
                C = $._34I,
                E = $._24I,
                I = $._32I,
                d = $._23I; (s !== N.clientWidth || c !== N.clientHeight) && (Kc(N, s, c), I = 1),
                I || Dj(n, x) || (I = 1),
                $._29I = n,
                $.each(function(o) {
                    r = o._id;
                    var p = D[r] = $.isVisible(o);
                    p !== $._56I[r] && (E[r] = o, Z = $.getDataUI(E[r]), Z && Z._84o(p), $._84o(o, p))
                },
                $);
                for (r in E) Z = $.getDataUI(E[r]),
                Z && (!I && $._56I[r] && (S = Z._79o(), S && C.add(S)), Z.invalidate()),
                $._83I = 1;
                if ($._56I = D, !I) for (r in E) D[r] && (Z = $.getDataUI(E[r]), Z && (S = Z._79o(), S && C.add(S)));
                if (I ? f = n: (C.each(function(T) {
                    Ii(n, T) && (f = _o(f, T))
                }), f && (tq(f, h(1, 1 / l)), f.x = T(f.x * l) / l, f.y = T(f.y * l) / l, f.width = w(f.width * l) / l, f.height = w(f.height * l) / l, f = Vh(n, f))), $._74O = f, f && (z = oo(N), ws(z, v, p, l), z.beginPath(), z.rect(f.x, f.y, f.width, f.height), z.clip(), z.clearRect(f.x, f.y, f.width, f.height), $._42(z, f), z.restore(), delete $._74O), $._24I = {},
                C.clear(), delete $._32I, d && s > 0 && c > 0) {
                    var Z = $.getDataUI(d);
                    if (Z) {
                        var S = Z._79o(),
                        j = $._29I,
                        W = j.x,
                        b = j.y,
                        O = j.width,
                        U = j.height,
                        l = $._zoom;
                        S && !Ii(S, j) && (S.x + S.width < W && $.tx( - S.x * l), S.x > W + O && $.tx( - (S.x + S.width - O) * l), S.y + S.height < b && $.ty( - S.y * l), S.y > b + U && $.ty( - (S.y + S.height - U) * l))
                    }
                    delete $._23I
                }
                $._83I && (delete $._83I, delete $._84I),
                $._98O(),
                $._interactors && $._interactors.each(function(z) {
                    z.validate()
                })
            },
            isScrollBarVisible: function() {
                return !! this._79O
            },
            setScrollBarVisible: function(X) {
                var y = this;
                X !== y.isScrollBarVisible() && (X ? (Bf(y._view, y._79O = hs()), Bf(y._79O, y._27I = hs()), Bf(y._79O, y._28I = hs())) : (Gq(y._79O), delete y._79O, delete y._27I, delete y._28I), y.fp("scrollBarVisible", !X, X))
            },
            showScrollBar: function() {
                var K = this;
                K._79O && (K._85I || (u(function() {
                    K._86I()
                },
                gd), K.iv()), K._85I = new Date)
            },
            _86I: function() {
                var m = this;
                if (m._85I) {
                    var k = new Date,
                    T = k.getTime();
                    T - m._85I.getTime() >= gd ? (delete m._85I, m.iv()) : u(function() {
                        m._86I()
                    },
                    gd)
                }
            },
            _98O: function() {
                var l = this,
                n = this._27I,
                D = this._28I;
                if (l._79O) {
                    if (l._autoHideScrollBar && !l._85I) return n.style.visibility = gl,
                    D.style.visibility = gl,
                    void 0;
                    var Y = l.getScrollBarColor(),
                    m = l._zoom,
                    $ = l.getScrollBarSize(),
                    F = l.getViewRect(),
                    k = l.getScrollRect(),
                    M = F.height * m,
                    i = k.height * m,
                    s = F.width * m - $ - 2,
                    U = M * ((F.y - k.y) * m / i),
                    v = M * (M / i),
                    P = n.style;
                    i - .5 > M ? (Xf > v && (U = U + v / 2 - Xf / 2, 0 > U && (U = 0), U + Xf > M && (U = M - Xf), v = Xf), Sn(n, s, U, $, v), P.visibility = ql, P.background = Y, P.borderRadius = $ / 2 + mb) : P.visibility = gl;
                    var B = F.width * m,
                    p = k.width * m,
                    U = F.height * m - $ - 2,
                    s = B * ((F.x - k.x) * m / p),
                    A = B * (B / p),
                    P = D.style;
                    p - .5 > B ? (Xf > A && (s = s + A / 2 - Xf / 2, 0 > s && (s = 0), s + Xf > B && (s = B - Xf), A = Xf), Sn(D, s, U, A, $), P.visibility = ql, P.background = Y, P.borderRadius = $ / 2 + mb) : P.visibility = gl
                }
            },
            setDataModel: function(N) {
                var v = this,
                J = v._dataModel,
                s = v._3o;
                J !== N && (J && (J.umm(v.handleDataModelChange, v), J.umd(v.handleDataPropertyChange, v), J.removeIndexChangeListener(v._75O, v), s || J.sm().ums(v._16o, v)), v._dataModel = N, N.mm(v.handleDataModelChange, v), N.md(v.handleDataPropertyChange, v), N.addIndexChangeListener(v._75O, v), s ? s._21I(N) : N.sm().ms(v._16o, v), v.invalidateAll(!0), v.fp(Kj, J, N))
            },
            handleDataPropertyChange: function(N) {
                this.invalidateData(N.data)
            },
            onPropertyChanged: function(p) {
                var q = this,
                B = p.property;
                q.redraw(),
                kd[B] ? q.showScrollBar() : B === Xg && q.onCurrentSubGraphChanged(p)
            },
            onCurrentSubGraphChanged: function() {
                this.reset()
            },
            handleDataModelChange: function(Z) {
                var v = this,
                N = Z.kind,
                c = Z.data;
                if (v._83I = 1, "add" === N) v.invalidateData(c),
                wn(c) && c.getEdgeGroup() && c.getEdgeGroup().eachSiblingEdge(v.invalidateData, v);
                else if (N === ej) {
                    v._21Q(c);
                    var d = c._id,
                    $ = v._25I[d];
                    if ($) {
                        if (v._56I[d]) {
                            var z = $._79o();
                            z && v.redraw(z)
                        }
                        $.dispose(),
                        delete v._25I[d],
                        delete v._24I[d],
                        delete v._56I[d]
                    }
                    c === v._currentSubGraph && v.setCurrentSubGraph(F)
                } else N === Rg && (v.invalidateAll(!0), v.setCurrentSubGraph(F))
            },
            _75O: function(W) {
                this.invalidateData(W.data)
            },
            _76O: function(D) {
                var R = this;
                if (R.isVisible(D)) {
                    for (var T = D; T._parent && R.isVisible(T._parent);) T = T._parent;
                    T && T !== D && R._dataModel._76O(T),
                    R._dataModel._76O(D)
                }
            },
            _2o: function(v) {
                return v.s("select.width")
            },
            isSelectable: function(v) {
                return v.s("2d.selectable") && this.sm().isSelectable(v)
            },
            isMovable: function(N) {
                var i = this;
                return wn(N) && N.getStyle(Ae) !== ue ? !1 : N.s("2d.movable") ? i._movableFunc ? i._movableFunc(N) : !0 : !1
            },
            isEditable: function(o) {
                var c = this;
                if (!c._editInteractor || !c.isSelected(o)) return ! 1;
                if (sl(o)) {
                    var y = c.getDataUI(o);
                    if (!y || y._88I) return ! 1
                }
                return wn(o) && o.getStyle(Ae) !== ue ? !1 : o.s("2d.editable") ? c._editableFunc ? c._editableFunc(o) : !0 : !1
            },
            handleDelete: function() {
                this._editInteractor && this.removeSelection()
            },
            isPointEditable: function(N) {
                return Bm(N) && 0 !== N.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(N) : !0
            },
            isRectEditable: function(u) {
                return Bm(u) && 0 !== u.getRotation() ? !1 : this._rectEditableFunc ? this._rectEditableFunc(u) : !0
            },
            isRotationEditable: function(C) {
                return C.setRotation && C.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(C) : !0 : !1
            },
            getRotationPoint: function(A) {
                var g = Rl(A.getRotation(), 0, -A.getHeight() / 2 - (a ? 32 : 16)),
                l = A.p();
                return g.x += l.x,
                g.y += l.y,
                g
            },
            getLogicalPoint: function(b) {
                var M = this;
                return Kh(b, M._canvas, M.tx(), M.ty(), M._zoom, M._zoom)
            },
            getSelectedDataAt: function(z) {
                var v = this;
                return this.getDataAt(z,
                function(J) {
                    return v.isSelected(J)
                })
            },
            getDataAt: function(j, d, W) {
                j.target && (j = this.lp(j));
                var w;
                return this.reverseEach(function(V) {
                    return (d ? d(V) : this.isSelectable(V)) && this.rectIntersects(V, Xp(j.x, j.y, W)) ? (w = V, !1) : void 0
                },
                this),
                w
            },
            getIconInfoAt: function(U, J) {
                var o = this;
                if (U.target && (U = o.lp(U)), J || (J = o.getDataAt(U)), J) {
                    var z = o.getDataUI(J);
                    if (z && z._38o) {
                        var p, Z = z._38o,
                        r = new Lq;
                        for (p in Z.icons) r.add(p);
                        for (var c = r.size() - 1; c >= 0; c--) {
                            p = r.get(c);
                            for (var x = Z.rects[p], O = x.rotation, $ = x.length - 1; $ >= 0; $--) {
                                var f = x[$],
                                L = f.width,
                                W = f.height,
                                T = {
                                    x: U.x - f.x - L / 2,
                                    y: U.y - f.y - W / 2
                                };
                                O != F && (T = Rl( - O, T.x, T.y));
                                var f = {
                                    x: -L / 2,
                                    y: -W / 2,
                                    width: L,
                                    height: W
                                };
                                if (je(f, T)) return {
                                    key: p,
                                    index: $,
                                    name: Z.icons[p].names[$],
                                    rect: x[$],
                                    point: U,
                                    rotation: O,
                                    relativeRect: f,
                                    relativePoint: T,
                                    data: J
                                }
                            }
                        }
                    }
                }
                return F
            },
            getDatasInRect: function(H, f, G) {
                G === V && (G = 1);
                var s = this,
                M = new Lq;
                return s.reverseEach(function(I) {
                    G && !s.isSelectable(I) || (f ? s.rectIntersects(I, H) : s.rectContains(I, H)) && M.add(I)
                }),
                M
            },
            moveSelection: function(g, u) {
                var $, l = this,
                O = l.dm();
                O && ($ = O.getHistoryManager()),
                $ && $.beginInteraction(),
                Nh(l.sm().toSelection(l.isMovable, l), g, u),
                $ && $.endInteraction()
            },
            getDataUIBounds: function(b) {
                var T = this.getDataUI(b);
                return T ? T._79o() : F
            },
            getBoundsForGroup: function(E) {
                return E.s(ss) ? this.getDataUIBounds(E) : F
            },
            rectIntersects: function(A, L) {
                this.validate();
                var U = F;
                if (this._56I[A._id]) {
                    var s = this._25I[A._id];
                    if (s) {
                        var p = s._79o();
                        if (po(L, p)) U = !0;
                        else if ((L = Vh(L, p)) && (s.rectIntersects && (U = s.rectIntersects(L)), U == F)) {
                            if (!A.s("pixelPerfect")) return ! 0;
                            var M = L.x,
                            W = L.y,
                            y = L.width,
                            i = L.height,
                            c = 1,
                            H = C.hitMaxArea,
                            d = y * i;
                            d > H && (c = H / d);
                            var o = Sj(y * c, i * c);
                            Oj(o, -M * c, -W * c),
                            o.scale(c, c),
                            s._42(o);
                            try {
                                for (var g = 0,
                                j = o.getImageData(0, 0, y * c, i * c).data; g < j.length; g += 4) if (0 !== j[g + 3]) {
                                    U = !0;
                                    break
                                }
                                o.restore()
                            } catch(f) {
                                Sc = F,
                                U = !0
                            }
                        }
                    }
                }
                return U ? !0 : !1
            },
            rectContains: function(m, T) {
                if (this._56I[m._id]) {
                    var J = this._25I[m._id];
                    if (J) return po(T, J._79o())
                }
                return ! 1
            },
            reset: function() {
                this.setZoom(1),
                this.setTranslate(0, 0)
            },
            handleKeyDown: function(f) {
                var y = this,
                X = y._focusData,
                M = X && y._25I[X._id],
                C = 0,
                z = y._dataModel._datas;
                X && X._enabled && X._editable && M && M.onKeyDown && M.onKeyDown(f) === !0 || (9 === f.keyCode && (X && (C = z.indexOf(X), Ei(f) ? -1 === --C && (C = 0) : ++C === z.size() && (C = 0)), y._focusData = X = z.get(C), y.sm().setSelection(X)), zg(f) ? y.selectAll() : Go(f) && y.isResettable() && y.reset(), y.sm().isEmpty() || (qs(f) && y.handleDelete(f), kb(f) && (y.moveSelection( - 1, 0), y.fi({
                    kind: "moveLeft"
                })), cj(f) && (y.moveSelection(0, -1), y.fi({
                    kind: "moveUp"
                })), Bo(f) && (y.moveSelection(1, 0), y.fi({
                    kind: "moveRight"
                })), ll(f) && (y.moveSelection(0, 1), y.fi({
                    kind: "moveDown"
                }))))
            },
            handleScroll: function(l, C) {
                pm(l);
                var g = this.lp(l);
                C > 0 ? this.scrollZoomIn(g) : 0 > C && this.scrollZoomOut(g)
            },
            handlePinch: function(D, i, X) {
                i > X ? this.pinchZoomIn(D) : this.pinchZoomOut(D)
            },
            checkDoubleClickOnNote: function(o, V) {
                var m = this,
                G = m.lp(o),
                j = m.getDataUI(V),
                f = j.note2Info;
                return f && V.s("note2.toggleable") && je(f.clickRect, G) ? (V.s(cq, !V.s(cq)), m.fi({
                    kind: "toggleNote2",
                    event: o,
                    data: V
                }), !0) : (f = j.noteInfo, f && V.s("note.toggleable") && je(f.clickRect, G) ? (V.s(to, !V.s(to)), m.fi({
                    kind: "toggleNote",
                    event: o,
                    data: V
                }), !0) : !1)
            },
            _84o: function() {},
            isNoteVisible: function() {
                return this._zoom > .15
            },
            isLabelVisible: function() {
                return this._zoom > .15
            },
            isSelectVisible: function() {
                return this._zoom > .15
            },
            isEditVisible: function() {
                return this._zoom > .15
            },
            autoScroll: function(E, f) {
                var q = this,
                n = q.getAutoScrollZone(),
                p = n / q.getZoom(),
                t = n / 4,
                i = q._29I,
                w = q.lp(E),
                R = {
                    x: q.tx(),
                    y: q.ty()
                };
                return w && n > 0 && i && (w.x - i.x < p ? q.translate(t, 0) : i.x + i.width - w.x < p && q.translate( - t, 0), w.y - i.y < p ? q.translate(0, t) : i.y + i.height - w.y < p && q.translate(0, -t)),
                R.x = q.tx() - R.x,
                R.y = q.ty() - R.y,
                f && (f.x += R.x, f.y += R.y),
                R
            },
            getMoveMode: function(L, $) {
                var j = $.s("2d.move.mode");
                return j ? j: Eq["88"] ? "x": Eq["89"] ? "y": "xy"
            }
        });
        var Pi = function(b, y) {
            var t = this;
            t.gv = b,
            t.s = function(Q) {
                return y.getStyle(Q)
            },
            t._data = y,
            t._87I = new Lq
        };
        eg(Pi, o, {
            _6I: F,
            ms_icons: 1,
            _84o: function() {},
            dispose: function() {},
            isShadowed: function() {
                return this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            },
            _2o: function() {
                var V = this,
                A = V.gv.isSelected(V._data);
                return ! A || V.isShadowed() ? 0 : V.gv._2o(V._data)
            },
            getBodyColor: function(Y) {
                var f = this._data,
                $ = this.gv.getBodyColor(f);
                return $ ? $: Y ? f.getStyle(Y) : F
            },
            _2Q: function(o) {
                return this.s(o)
            },
            _1Q: function(u, t, a, l) {
                var h = this.s,
                e = h(t + ".dash.color");
                u.strokeStyle = e,
                u.lineWidth = a,
                u.stroke(),
                h(t + ".dash.3d") && Xr(u, e, h(t + ".dash.3d.color"), a, this.gv._zoom, h(t + ".dash.3d.accuracy")),
                Zr(u, l)
            },
            invalidate: function() {
                this._6I = F
            },
            _79o: function() {
                var m = this;
                if (!m._6I) {
                    m.labelInfo = m.label2Info = m.noteInfo = m.note2Info = m._38o = F,
                    m._87I.clear(),
                    m._3O();
                    var z = m._data,
                    d = m.gv;
                    m._55O = d.isEditable(z) ? {
                        _42O: d.isRectEditable(z),
                        _43O: d.isPointEditable(z),
                        _56O: d.isRotationEditable(z)
                    }: F,
                    m._6I = m._81o()
                }
                return m._6I
            },
            _3O: function() {},
            getPosition: function() {
                return mk
            },
            _68o: function(S, M) {
                S && this._87I.add(ld(S, M))
            },
            _81o: function() {
                var r = this,
                B = r.s;
                r._24O(br, "getLabel"),
                r._24O(Sb, "getLabel2"),
                r._26O(Wr, "getNote"),
                r._26O(cp, "getNote2"),
                r._15O(),
                r._55O && r._48O();
                var L;
                if (r._87I.each(function(m) {
                    L = _o(L, m)
                }), L && r.isShadowed()) {
                    var P = qj(L);
                    P.x += B("shadow.offset.x"),
                    P.y += B("shadow.offset.y"),
                    tq(P, B("shadow.blur")),
                    L = _o(L, P)
                }
                return r._87I.clear(),
                L
            },
            _42: function(j) {
                var P = this,
                Z = P._data,
                I = P.gv,
                e = P.s,
                Y = e("opacity"),
                d = this.isShadowed();
                if (d) {
                    var u = j.shadowOffsetX,
                    n = j.shadowOffsetY,
                    o = j.shadowBlur,
                    X = j.shadowColor;
                    j.shadowOffsetX = e("shadow.offset.x"),
                    j.shadowOffsetY = e("shadow.offset.y"),
                    j.shadowBlur = e("shadow.blur"),
                    j.shadowColor = e("shadow.color")
                }
                if (Y != F) {
                    var q = j.globalAlpha;
                    j.globalAlpha = Y
                }
                P._80o(j),
                I.isLabelVisible(Z) && (Xk(j, P.labelInfo), Xk(j, P.label2Info)),
                I.isNoteVisible(Z) && ($c(j, P.noteInfo), $c(j, P.note2Info)),
                P._99O(j),
                Y != F && (j.globalAlpha = q),
                d && (j.shadowOffsetX = u, j.shadowOffsetY = n, j.shadowBlur = o, j.shadowColor = X),
                P._55O && I.isEditVisible(Z) && P._47O(j)
            },
            _80o: function() {},
            _47O: function() {},
            _24O: function(g, n) {
                var W = this,
                A = W._data,
                S = W.gv,
                l = W.s,
                k = S[n](A);
                if (k != F) {
                    var B = l(g + ".scale"),
                    U = l(g + ".max"),
                    e = l(g + ".position"),
                    j = W[g + "Info"] = {
                        label: k,
                        scale: B,
                        color: S[n + "Color"](A),
                        font: l(g + ".font"),
                        opacity: l(g + ".opacity"),
                        align: l(g + ".align"),
                        rotation: W.getRotation(l(g + ".rotation"), !1, e),
                        background: S[n + "Background"](A)
                    },
                    s = Pf(j, k);
                    U > 0 && U < s.width && (j.labelWidth = s.width, s.width = U),
                    1 !== B && (s.width *= B, s.height *= B);
                    var X = W.getPosition(e, l(g + ".offset.x"), l(g + ".offset.y"), s, l(g + ".position.fixed"));
                    if (s.x = X.x - s.width / 2, s.y = X.y - s.height / 2, W._68o(j.rect = s, j.rotation), 1 !== B) {
                        var f = s.width / B,
                        C = s.height / B;
                        j.rect = {
                            x: X.x - f / 2,
                            y: X.y - C / 2,
                            width: f,
                            height: C
                        }
                    }
                }
            },
            _26O: function(z, E) {
                var N = this,
                f = N.gv,
                W = N._data,
                y = N.s,
                r = f[E](W);
                if (r != F) {
                    var L, D, k = y(z + ".scale"),
                    c = N[z + "Info"] = {
                        note: r,
                        scale: k,
                        data: W,
                        view: f,
                        expanded: y(z + ".expanded"),
                        font: y(z + ".font"),
                        color: y(z + ".color"),
                        opacity: y(z + ".opacity"),
                        align: y(z + ".align"),
                        icon: y(z + ".icon"),
                        backgroundImage: y(z + ".backgroundImage"),
                        borderWidth: y(z + ".border.width"),
                        borderColor: y(z + ".border.color"),
                        background: f[E + "Background"](W)
                    },
                    K = N.getPosition(y(z + ".position"), y(z + ".offset.x"), y(z + ".offset.y")),
                    P = K.x,
                    n = K.y;
                    if (c.expanded) {
                        var X, t = y(z + ".max"),
                        S = y(z + ".backgroundImage");
                        S ? (S = oq(S), X = {
                            width: Dr(S, W),
                            height: Ll(S, W)
                        }) : X = Pf(c, r),
                        X.width += 6,
                        X.height += 2,
                        t > 0 && t < X.width && (c.labelWidth = X.width, X.width = t),
                        L = X.width,
                        D = X.height + 8,
                        c.clickRect = {
                            x: P - L * k / 2,
                            y: n - D * k,
                            width: L * k,
                            height: D * k * X.height / D
                        }
                    } else {
                        var j = y(z + ".icon");
                        j ? (j = oq(j), L = Dr(j, W), D = Ll(j, W)) : (L = 12, D = 18),
                        c.clickRect = {
                            x: P - L * k / 2,
                            y: n - D * k,
                            width: L * k,
                            height: D * k
                        }
                    }
                    c.rect = {
                        x: P - L / 2,
                        y: n - D * k / 2 - D / 2,
                        width: L,
                        height: D
                    };
                    var v = w(c.borderWidth / 2) * k;
                    N._68o({
                        x: P - L * k / 2 - v,
                        y: n - D * k - v,
                        width: L * k + 2 * v,
                        height: D * k + 2 * v
                    })
                }
            },
            _48O: function() {},
            _99O: function(s) {
                var v = this,
                I = v._38o;
                if (I) {
                    var w = v.gv,
                    Z = v._data,
                    O = I.icons;
                    for (var V in O) {
                        var K = O[V],
                        x = I.rects[V];
                        if (x) {
                            var L = dj(K.opacity, Z, w),
                            M = dj(K.names, Z, w),
                            m = M ? M.length: 0,
                            S = x.rotation;
                            if (L != F) {
                                var G = s.globalAlpha;
                                s.globalAlpha *= L
                            }
                            for (var o = 0; m > o; o++) {
                                var E = M[o],
                                Y = oq(E),
                                N = x[o];
                                if (S) {
                                    var i = N.x + N.width / 2,
                                    W = N.y + N.height / 2;
                                    s.save(),
                                    Oj(s, i, W),
                                    Wk(s, S),
                                    Oj(s, -i, -W)
                                }
                                qg(s, Y, dj(K.stretch, Z, w), N.x, N.y, N.width, N.height, v._data, v.gv),
                                S && s.restore()
                            }
                            L != F && (s.globalAlpha = G)
                        }
                    }
                }
            }
        });
        var Ql = function(n, F) {
            Lo(Ql, this, [n, F])
        };
        eg(Ql, Pi, {
            _checkEmptyRect: !0,
            _40O: function(N, t) {
                var H = this,
                L = H.s,
                Z = N.rect; (N.borderColor = H.gv.getBorderColor(H._data)) && (N.borderType = L("border.type"), N.borderWidth = L("border.width"), N.borderPadding = L("border.padding"), t = h(t, N.borderPadding + N.borderWidth / 2)),
                (N.selectWidth = H._2o()) && (N.selectType = L("select.type"), N._97o = L("select.color"), N.selectPadding = L("select.padding"), t = h(t, N.selectPadding + N.selectWidth / 2)),
                t > 0 && (Z = qj(Z), tq(Z, t)),
                H._68o(Z)
            },
            _39O: function(a, M) {
                var F = M.rect;
                if (M.borderWidth > 0) {
                    var z = M.borderPadding;
                    a.strokeStyle = M.borderColor,
                    a.lineWidth = M.borderWidth,
                    Ak(a, M.borderType, {
                        x: F.x - z,
                        y: F.y - z,
                        width: F.width + 2 * z,
                        height: F.height + 2 * z
                    }),
                    a.stroke()
                }
                M.selectWidth > 0 && (z = M.selectPadding, a.strokeStyle = M._97o, a.lineWidth = M.selectWidth, Ak(a, M.selectType, {
                    x: F.x - z,
                    y: F.y - z,
                    width: F.width + 2 * z,
                    height: F.height + 2 * z
                }), a.stroke())
            },
            _3O: function() {
                var p = this,
                S = p.s,
                l = p._data,
                H = l.getStyle(Fb),
                f = p.getBodyColor(),
                j = p._83o = H ? {
                    shape: H,
                    _53o: p.getBodyColor("shape.background"),
                    _27Q: oq(S("shape.repeat.image"), f),
                    _54o: S("shape.border.width"),
                    _55o: S("shape.border.color"),
                    _56o: S("shape.border.3d"),
                    _57o: S("shape.border.3d.color"),
                    _58o: S("shape.border.3d.accuracy"),
                    shapeGradient: S("shape.gradient"),
                    _59o: S("shape.gradient.color"),
                    _60o: S("shape.border.pattern"),
                    _61o: S("shape.border.cap"),
                    _62o: S("shape.border.join")
                }: {
                    img: oq(l.getImage(), f),
                    bodyColor: f,
                    stretch: S("image.stretch")
                };
                M && !x || (j.rect = l.getRect(), j.position = l.p(), j.rotation = l.getRotation(), H === ih && (j._63o = S("shape.depth")), p._40O(j, H ? Pc(F, j._54o / 2, j._62o) : 0))
            },
            getPosition: function(P, v, z, H) {
                var r = jc(P, this._83o.rect, H);
                return r.x += v,
                r.y += z,
                r
            },
            _80o: function(A) {
                var h = this,
                w = h.s,
                E = h.gv,
                v = h._data,
                R = h._83o,
                d = R.rect,
                X = d,
                K = R.position,
                e = R.rotation,
                T = R.shape;
                if (!h._checkEmptyRect || d.width > 0 && d.height > 0) {
                    if (e && (A.save(), Oj(A, K.x, K.y), Wk(A, e), Oj(A, -K.x, -K.y), X = v.getSize(), X.x = K.x - X.width / 2, X.y = K.y - X.height / 2), h.freeDraw) h.freeDraw(A, X, R);
                    else if (T) {
                        var b, f, N, F, L = R._60o,
                        g = fp(A, L),
                        k = R._53o,
                        M = R._27Q,
                        i = R._54o,
                        B = R._55o,
                        s = A.lineJoin,
                        Z = A.lineCap;
                        if ("roundRect" === T ? b = w("shape.corner.radius") : "polygon" === T ? b = w("shape.polygon.side") : "arc" === T && (b = w("shape.arc.from"), f = w("shape.arc.to"), N = w("shape.arc.close"), F = w("shape.arc.oval")), A.lineJoin = R._62o, A.lineCap = R._61o, k || M ? (M ? Eb(A, M) : Qp(A, k, R.shapeGradient, R._59o, X), Ak(A, T, X, b, f, N, F), A.fill(), A !== g && Ak(g, T, X, b, f, N, F)) : Ak(g, T, X, b, f, N, F), i > 0 && (A.lineWidth = i, A.strokeStyle = B, A.stroke(), R._56o && Xr(A, B, R._57o, i, E._zoom, R._58o)), Zr(A, L), w("shape.dash")) {
                            var J = w("shape.dash.width") || i;
                            if (J > 0) {
                                L = w("shape.dash.pattern");
                                var g = fp(A, L, h._2Q("shape.dash.offset"));
                                g !== A && Ak(g, T, X, b, f, N, F),
                                h._1Q(A, "shape", J, L)
                            }
                        }
                        qi(A, k, R._63o, X),
                        A.lineJoin = s,
                        A.lineCap = Z
                    } else qg(A, R.img, R.stretch, X.x, X.y, X.width, X.height, v, E, R.bodyColor);
                    e && A.restore()
                }
                h._39O(A, R)
            },
            _48O: function() {
                var P, x = this,
                K = x._data,
                l = x.gv,
                g = x._55O,
                c = l.getEditPointSize() / 2 + 2;
                if (g._42O && (P = K.getRect(), tq(P, c)), g._56O) {
                    var q = g._98o = l.getRotationPoint(K);
                    P = _o(P, {
                        x: q.x - c,
                        y: q.y - c,
                        width: 2 * c,
                        height: 2 * c
                    })
                }
                x._68o(P)
            },
            _47O: function(g) {
                var u = this,
                K = u.gv,
                A = u._55O,
                G = u._data.getRect(),
                V = K.getEditPointSize(),
                P = A._98o;
                A._42O && (g.fillStyle = K.getEditPointBackground(), g.strokeStyle = K.getEditPointBorderColor(), g.lineWidth = 1, [{
                    x: G.x,
                    y: G.y
                },
                {
                    x: G.x + G.width / 2,
                    y: G.y
                },
                {
                    x: G.x + G.width,
                    y: G.y
                },
                {
                    x: G.x,
                    y: G.y + G.height / 2
                },
                {
                    x: G.x + G.width,
                    y: G.y + G.height / 2
                },
                {
                    x: G.x,
                    y: G.y + G.height
                },
                {
                    x: G.x + G.width / 2,
                    y: G.y + G.height
                },
                {
                    x: G.x + G.width,
                    y: G.y + G.height
                }].forEach(function(I) {
                    qe(g, I.x - V / 2, I.y - V / 2, V, V),
                    g.stroke()
                })),
                A._56O && (g.fillStyle = K.getEditPointBorderColor(), g.strokeStyle = K.getEditPointBackground(), g.lineWidth = 1, g.beginPath(), g.arc(P.x, P.y, V / 2, 0, X, !0), g.fill(), g.stroke())
            }
        });
        var vq = function(o, v) {
            Lo(vq, this, [o, v])
        },
        Li = function(F, D, R, X) {
            var K = ep(F, D);
            return R = X ? s(R, K) : pe(R, K),
            K ? R /= K: R = 0,
            {
                x: F.x + (D.x - F.x) * R,
                y: F.y + (D.y - F.y) * R
            }
        };
        eg(vq, Pi, {
            _3O: function() {
                var R, o = this,
                E = o._data,
                H = o.gv,
                L = o.s,
                x = L(Ae),
                A = E.isLooped(),
                z = L("edge.width"),
                w = L("edge.center"),
                v = L("edge.offset"),
                b = H.getBorderColor(E),
                P = b ? L("border.width") : 0,
                N = o._2o(),
                l = E._40I,
                T = E._41I,
                M = o._78o = l && T ? {
                    looped: A,
                    type: x,
                    width: z,
                    center: w,
                    color: o.getBodyColor("edge.color"),
                    borderColor: b,
                    borderWidth: P,
                    _97o: N ? L("select.color") : F,
                    selectWidth: N,
                    pattern: L("edge.pattern"),
                    cap: L("edge.cap"),
                    join: L("edge.join"),
                    is3d: L("edge.3d"),
                    _67o: L("edge.3d.color"),
                    _66o: L("edge.3d.accuracy")
                }: F;
                if (M) {
                    var j = C.getEdgeType(x);
                    if (j) {
                        var Q = j(E, ic(o, H, E, A, x), H, o._19Q);
                        Q.points && Q.points.size() > 1 && (M._4O = Q, R = Hd(M._4O.points))
                    } else {
                        var d = Jl(H, l, L("edge.source.position"), L("edge.source.offset.x"), L("edge.source.offset.y")),
                        r = Jl(H, T, L("edge.target.position"), L("edge.target.offset.x"), L("edge.target.offset.y"));
                        if (x === ue) {
                            var i = M.points = L(ah) || ir,
                            c = i.size();
                            if (M.segments = L("edge.segments"), !w) if (v) {
                                var D = Li(d, c ? i.get(0) : r, v, c),
                                J = Li(r, c ? i.get(c - 1) : d, v, c);
                                d = D,
                                r = J
                            } else {
                                var g = Mo(H, l),
                                t = Mo(H, T),
                                e = er(d, c ? i.get(0) : r, g);
                                e && (d = {
                                    x: e[0],
                                    y: e[1]
                                }),
                                e = er(c ? i.get(c - 1) : d, r, t),
                                e && (r = {
                                    x: e[0],
                                    y: e[1]
                                })
                            }
                            R = _o(Hd(M.points), Hd(d, r))
                        } else {
                            var U = ic(o, H, E, A, x);
                            if (o._19Q || (U = -U), A) d = qj(d),
                            d.x -= l.getWidth() / 2,
                            M.radius = U,
                            R = {
                                x: d.x - U,
                                y: d.y - U,
                                width: 2 * U,
                                height: 2 * U
                            };
                            else {
                                var S = ep(d, r),
                                G = pe(v, S),
                                D = {
                                    x: G,
                                    y: U
                                },
                                J = {
                                    x: S - G,
                                    y: U
                                },
                                Z = B(r.y - d.y, r.x - d.x),
                                n = M.mat = new ls(Z);
                                if (M.orienAngle = Z, M.angle = r.x < d.x ? Z + y: Z, M.rect = {
                                    x: D.x,
                                    y: D.y,
                                    width: J.x - D.x,
                                    height: 0
                                },
                                M.origin = d, D = n.tf(D), D.x += d.x, D.y += d.y, J = n.tf(J), J.x += d.x, J.y += d.y, w) {
                                    var h = {
                                        x: S,
                                        y: 0
                                    };
                                    h = n.tf(h),
                                    h.x += d.x,
                                    h.y += d.y,
                                    R = Hd([d, D, J, h]),
                                    M.c1 = d,
                                    M.c2 = h
                                } else R = Hd(D, J);
                                d = D,
                                r = J
                            }
                        }
                        M._69o = d,
                        M._70o = r
                    }
                    Pc(R, z / 2 + P + N, M.join),
                    o._68o(R)
                }
            },
            getRotation: function(J, $, c) {
                J = J || 0;
                var b = this._78o;
                if (b) {
                    var x, X = b.angle,
                    v = b.points,
                    h = b._4O;
                    if (X != F) return $ ? b.orienAngle + J: X + J;
                    if (h) {
                        var e = h.points;
                        return x = e.size(),
                        Nc[c] ? x && 0 === x % 2 ? ud(e.get(x / 2 - 1), e.get(x / 2), $, J) : J: rm[c] ? ud(e.get(0), e.get(1), $, J) : ud(e.get(x - 2), e.get(x - 1), $, J)
                    }
                    if (v) return x = v.size(),
                    Nc[c] ? x && 0 === x % 2 ? ud(v.get(x / 2 - 1), v.get(x / 2), $, J) : J: rm[c] ? ud(b._69o, x ? v.get(0) : b._70o, $, J) : ud(x ? v.get(x - 1) : b._69o, b._70o, $, J)
                }
                return J
            },
            getPosition: function(V, P, j, o, I) {
                var R = this._78o;
                if (R) {
                    var B, G = R.type,
                    w = R.points,
                    x = R._4O,
                    H = R._69o,
                    L = R._70o;
                    if (!G) return R.looped ? {
                        x: H.x - R.radius + P,
                        y: H.y + j
                    }: (I && H && L && (H.x > L.x || H.x === L.x && H.y > L.y) && (V = Vo[V], j = -j), B = jc(V, R.rect, o), B.x += P, B.y += j, B = R.mat.tf(B), B.x += R.origin.x, B.y += R.origin.y, B);
                    if (w) {
                        var B, X = w.size();
                        if (Nc[V]) {
                            if (X) {
                                var c = X % 2;
                                if (0 === c) return eh(w.get(X / 2 - 1), w.get(X / 2), V, P, j, o, I);
                                B = w.get((X - c) / 2)
                            } else B = {
                                x: (H.x + L.x) / 2,
                                y: (H.y + L.y) / 2
                            };
                            return B = jc(V, {
                                x: B.x,
                                y: B.y,
                                width: 0,
                                height: 0
                            },
                            o),
                            B.x += P,
                            B.y += j,
                            B
                        }
                        return rm[V] ? eh(H, X ? w.get(0) : L, V, P, j, o, I) : eh(X ? w.get(X - 1) : H, L, V, P, j, o, I)
                    }
                    if (x) {
                        var n = x.points,
                        X = n.size();
                        if (Nc[V]) {
                            var c = X % 2;
                            return 0 === c ? eh(n.get(X / 2 - 1), n.get(X / 2), V, P, j, o, I) : (B = n.get((X - c) / 2), B = jc(V, {
                                x: B.x,
                                y: B.y,
                                width: 0,
                                height: 0
                            },
                            o), B.x += P, B.y += j, B)
                        }
                        return rm[V] ? eh(n.get(0), n.get(1), V, P, j, o, I) : eh(n.get(X - 2), n.get(X - 1), V, P, j, o, I)
                    }
                }
                return mk
            },
            _42: function(D) {
                this._78o && vq.superClass._42.call(this, D)
            },
            drawPath: function(Z, V) {
                Z.beginPath();
                var $ = V.type,
                y = V.points,
                I = V.segments,
                r = V._4O;
                if (!$ || y) {
                    var B = V._69o,
                    K = B.x,
                    o = B.y,
                    P = V._70o,
                    A = P.x,
                    n = P.y;
                    if ($) if (I) {
                        var f = new Lq({
                            x: K,
                            y: o
                        });
                        f.addAll(y),
                        f.add({
                            x: A,
                            y: n
                        }),
                        ch(Z, f, I)
                    } else Z.moveTo(K, o),
                    y.each(function(_) {
                        Z.lineTo(_.x, _.y)
                    }),
                    Z.lineTo(A, n);
                    else V.looped ? Z.arc(K, o, V.radius, 0, X, !0) : V.center ? (Z.moveTo(V.c1.x, V.c1.y), Z.lineTo(K, o), Z.lineTo(A, n), Z.lineTo(V.c2.x, V.c2.y)) : (Z.moveTo(K, o), Z.lineTo(A, n))
                } else r && ch(Z, r.points, r.segments)
            },
            _80o: function(C) {
                var Z = this,
                k = Z.s,
                c = Z._78o,
                u = c.width,
                f = c.selectWidth,
                q = c.borderWidth,
                d = c.color,
                O = C.lineJoin,
                E = C.lineCap,
                w = c.pattern;
                if (C.lineJoin = c.join, C.lineCap = c.cap, Z.drawPath(fp(C, w), c), f && (C.strokeStyle = c._97o, C.lineWidth = u + 2 * (q + f), C.stroke()), q && (C.strokeStyle = c.borderColor, C.lineWidth = u + 2 * q, C.stroke()), C.strokeStyle = d, C.lineWidth = u, C.stroke(), c.is3d && Xr(C, d, c._67o, u, Z.gv._zoom, c._66o), Zr(C, w), k("edge.dash")) {
                    w = k("edge.dash.pattern");
                    var v = fp(C, w, Z._2Q("edge.dash.offset"));
                    v !== C && Z.drawPath(v, c),
                    Z._1Q(C, "edge", k("edge.dash.width") || u, w)
                }
                C.lineJoin = O,
                C.lineCap = E
            },
            _48O: function() {
                var j = this,
                z = j._78o;
                if (j._55O._43O && z && z.points) {
                    var y = Hd(z.points);
                    y && (tq(y, j.gv.getEditPointSize() / 2 + 2), j._68o(y))
                }
            },
            _47O: function(d) {
                var C = this,
                j = C.gv,
                G = C._78o;
                if (C._55O._43O && G && G.points) {
                    var R = j.getEditPointSize() / 2;
                    d.fillStyle = j.getEditPointBackground(),
                    d.strokeStyle = j.getEditPointBorderColor(),
                    d.lineWidth = 1,
                    G.points.each(function(M) {
                        d.beginPath(),
                        d.arc(M.x, M.y, R, 0, X, !0),
                        d.fill(),
                        d.stroke()
                    })
                }
            },
            _71o: function(m, u) {
                var C = this,
                I = C._data;
                if (C._19Q = !0, !I.getEdgeGroup()) return m ? I.s("edge.gap") : 0;
                var Q, W = 0,
                q = 0,
                R = 0;
                if (I.getEdgeGroup().getSiblings().each(function(Z) {
                    Z.each(function(w) {
                        if (C.gv.isVisible(w) && w.s(Ae) == u) {
                            var O = w.s("edge.gap");
                            Q ? (q += R / 2 + O / 2, R = O) : (Q = w, R = O),
                            w === I && (W = q)
                        }
                    })
                }), m) return q - W + R;
                var M = W - q / 2;
                return Q && I._40I !== Q._40I && (C._19Q = !1),
                M
            }
        });
        var cs = function(j, t) {
            Lo(cs, this, [j, t])
        };
        eg(cs, Ql, {
            _3O: function() {
                var H, B, L = this,
                f = L.s,
                z = L._data,
                D = L.gv;
                if (L._88I = F, z.isExpanded() && z.eachChild(function($) {
                    var C = D.getBoundsForGroup($);
                    C && (B || (B = []), B.push(C), H = _o(H, C))
                }), H) {
                    var n = D.getLabel(z),
                    y = f("group.type");
                    H = Ah(y, B, H),
                    Pd(H, z, "group.padding", 1);
                    var x = L._88I = {
                        type: y,
                        rect: H,
                        _64o: H
                    };
                    if (!y && n != F) {
                        var o, h = L.labelInfo = {
                            label: n,
                            color: f("group.title.color"),
                            font: f("group.title.font")
                        },
                        g = Pf(h, n),
                        Z = g.width,
                        I = g.height,
                        k = f("group.title.align");
                        Z > H.width && (H.width = Z),
                        h.rect = {
                            y: H.y - I,
                            width: g.width,
                            height: I
                        },
                        o = k === Tb ? H.x: k === um ? H.x + H.width - Z: H.x + H.width / 2 - Z / 2,
                        h.rect.x = o,
                        x.titleRect = {
                            x: H.x,
                            y: H.y - I,
                            width: H.width,
                            height: I + 1
                        },
                        x.rect = {
                            x: H.x,
                            y: H.y - I,
                            width: H.width,
                            height: H.height + I
                        }
                    }
                    L._40O(x, f("group.border.width") / 2)
                } else cs.superClass._3O.call(L)
            },
            getPosition: function(f, i, e, Z) {
                var $ = this._88I;
                if ($) {
                    var w = jc(f, $.rect, Z);
                    return w.x += i,
                    w.y += e,
                    w
                }
                return cs.superClass.getPosition.apply(this, arguments)
            },
            _24O: function(C, U) {
                var k = this._88I; (!k || k.type || "label2" === C) && cs.superClass._24O.call(this, C, U)
            },
            _80o: function(J) {
                var W = this,
                w = W._88I;
                if (w) {
                    var u = W._data,
                    H = W.s,
                    z = W.gv,
                    x = w.type,
                    T = w.rect,
                    B = w._64o,
                    m = w.titleRect,
                    O = W.getBodyColor(),
                    G = oq(H("group.image"), O),
                    Q = H("group.image.stretch"),
                    t = W.getBodyColor("group.background"),
                    l = oq(H("group.repeat.image"), O),
                    y = H("group.gradient"),
                    d = H("group.gradient.color"),
                    e = H("group.depth");
                    if (x) {
                        var U = H("group.border.pattern"),
                        I = H("group.border.width"),
                        k = J.lineJoin,
                        s = J.lineCap;
                        if (J.lineJoin = H("group.border.join"), J.lineCap = H("group.border.cap"), G) {
                            if (J.save(), Ak(J, x, T), J.clip(), qg(J, G, Q, T.x, T.y, T.width, T.height, u, z, O), J.restore(), I > 0) {
                                var g = fp(J, U);
                                Ak(g, x, T),
                                J.lineWidth = I,
                                J.strokeStyle = H("group.border.color"),
                                J.stroke(),
                                Zr(J, U)
                            }
                        } else {
                            var g = fp(J, U);
                            t || l ? (l ? Eb(J, l) : Qp(J, t, y, d, T), Ak(J, x, T), J.fill(), J !== g && Ak(g, x, T)) : Ak(g, x, T),
                            I > 0 && (J.lineWidth = I, J.strokeStyle = H("group.border.color"), J.stroke()),
                            Zr(J, U),
                            x === ih && qi(J, t, e, T)
                        }
                        J.lineJoin = k,
                        J.lineCap = s
                    } else if (G ? qg(J, G, Q, B.x, B.y, B.width, B.height, u, z, W.getBodyColor()) : (t || l) && (l ? Eb(J, l) : Qp(J, t, y, d, B), Ak(J, ih, B), J.fill(), qi(J, t, e, B)), m) {
                        var V = H("group.title.background");
                        qe(J, m.x, m.y, m.width, m.height, V),
                        qi(J, V, e, m)
                    }
                    W._39O(J, w)
                } else cs.superClass._80o.call(W, J)
            }
        });
        var Yo = function(Z, i) {
            Lo(Yo, this, [Z, i])
        };
        eg(Yo, Ql, {
            _3O: function() {
                var R = this,
                Z = R._data,
                T = R.s,
                E = R.gv,
                H = Z.getPoints(),
                x = E.getBorderColor(Z),
                L = x ? T("border.width") : 0,
                O = R._2o(),
                C = T("shape.border.width"),
                N = Z.getRect(),
                X = E.getBodyColor(Z),
                W = R._99o = H.isEmpty() ? F: {
                    rect: N,
                    rotation: Z.getRotation(),
                    position: Z.p(),
                    points: H,
                    segments: Z.getSegments(),
                    bodyColor: X,
                    borderColor: x,
                    borderWidth: L,
                    _94o: T("shape.border.3d"),
                    _95o: T("shape.border.3d.color"),
                    _96o: T("shape.border.3d.accuracy"),
                    _97o: O ? T("select.color") : F,
                    selectWidth: O,
                    _53o: T("shape.background"),
                    _27Q: oq(T("shape.repeat.image"), X),
                    _54o: C,
                    _55o: T("shape.border.color"),
                    shapeGradient: T("shape.gradient"),
                    _59o: T("shape.gradient.color"),
                    _60o: T("shape.border.pattern"),
                    _61o: T("shape.border.cap"),
                    _62o: T("shape.border.join")
                };
                if (W) {
                    var n = C / 2 + L + O;
                    n && (N = qj(N), Pc(N, n, W._62o)),
                    R._68o(N)
                }
            },
            getPosition: function(j, N, K, v) {
                var k = this._99o;
                if (k) {
                    var l = jc(j, k.rect, v);
                    return l.x += N,
                    l.y += K,
                    l
                }
                return mk
            },
            _42: function(y) {
                this._99o && Yo.superClass._42.call(this, y)
            },
            _80o: function(M) {
                var m, S = this,
                W = S.s,
                V = S._99o,
                n = V.position,
                l = V.rotation,
                A = V.bodyColor,
                f = V.borderWidth,
                c = V.selectWidth,
                a = V._53o,
                X = V._27Q,
                o = V._54o,
                N = V.points,
                y = V.segments,
                _ = S._data.isClosePath();
                l && (M.save(), Oj(M, n.x, n.y), Wk(M, l), Oj(M, -n.x, -n.y));
                var k = V._60o,
                g = fp(M, k),
                s = M.lineJoin,
                u = M.lineCap;
                if (M.lineJoin = V._62o, M.lineCap = V._61o, a || X ? (X ? Eb(M, X) : (m = A ? A: a, Qp(M, m, V.shapeGradient, V._59o, V.rect)), ch(M, N, y, _), M.fill(), g !== M && ch(g, N, y, _)) : ch(g, N, y, _), c && (M.strokeStyle = V._97o, M.lineWidth = o + 2 * (f + c), M.stroke()), f && (M.strokeStyle = V.borderColor, M.lineWidth = o + 2 * f, M.stroke()), o && (m = V._55o, !a && A && (m = A), M.strokeStyle = m, M.lineWidth = o, M.stroke(), V._94o && Xr(M, m, V._95o, o, S.gv._zoom, V._96o)), Zr(M, k), W("shape.dash")) {
                    var Y = W("shape.dash.width") || o;
                    if (Y > 0) {
                        k = W("shape.dash.pattern");
                        var g = fp(M, k, S._2Q("shape.dash.offset"));
                        g !== M && ch(g, N, y, _),
                        S._1Q(M, "shape", Y, k)
                    }
                }
                M.lineJoin = s,
                M.lineCap = u,
                l && M.restore()
            },
            _48O: function() {
                var y = this;
                if (Yo.superClass._48O.call(y), y._55O._43O) {
                    var J = y._data.getRect();
                    tq(J, y.gv.getEditPointSize() / 2 + 2),
                    y._68o(J)
                }
            },
            _47O: function(M) {
                var N = this;
                if (Yo.superClass._47O.call(N, M), N._55O._43O) {
                    var n = N.gv,
                    y = n.getEditPointSize() / 2;
                    M.fillStyle = n.getEditPointBackground(),
                    M.strokeStyle = n.getEditPointBorderColor(),
                    M.lineWidth = 1,
                    N._data.getPoints().each(function(m) {
                        M.beginPath(),
                        M.arc(m.x, m.y, y, 0, X, !0),
                        M.fill(),
                        M.stroke()
                    })
                }
            }
        });
        var Ir = function(Q, m) {
            Lo(Ir, this, [Q, m])
        };
        eg(Ir, Yo, {
            getRotation: function(w, j, l) {
                w = w || 0;
                var L = this._data.getPoints(),
                T = L.size();
                return T > 1 ? Nc[l] ? T && 0 === T % 2 ? ud(L.get(T / 2 - 1), L.get(T / 2), j, w) : w: rm[l] ? ud(L.get(0), L.get(1), j, w) : ud(L.get(T - 2), L.get(T - 1), j, w) : w
            },
            getPosition: function(e, h, G, f, y) {
                var L = this._data.getPoints(),
                b = L.size();
                if (b > 1) {
                    if (Nc[e]) {
                        var k = b % 2;
                        if (0 === k) return eh(L.get(b / 2 - 1), L.get(b / 2), e, h, G, f, y);
                        var o = L.get((b - k) / 2),
                        Y = {
                            x: o.x,
                            y: o.y,
                            width: 0,
                            height: 0
                        };
                        return o = jc(e, Y, f),
                        o.x += h,
                        o.y += G,
                        o
                    }
                    return rm[e] ? eh(L.get(0), L.get(1), e, h, G, f, y) : eh(L.get(b - 2), L.get(b - 1), e, h, G, f, y)
                }
                return mk
            }
        });
        var kf = function(j, y) {
            Lo(kf, this, [j, y])
        };
        eg(kf, Ql, {
            _3O: function() {
                var s = this;
                kf.superClass._3O.call(s);
                var C = s.s,
                q = s._83o;
                s._82o = q.img || q.shape ? F: {
                    background: s.getBodyColor("grid.background"),
                    depth: C("grid.depth"),
                    rect: q.rect,
                    _88o: C("grid.cell.depth"),
                    cellBorderColor: C("grid.cell.border.color"),
                    _89o: C("grid.row.count"),
                    _90o: C("grid.column.count"),
                    block: C("grid.block"),
                    _91o: C("grid.block.color"),
                    _92o: C("grid.block.padding"),
                    _93o: C("grid.block.width")
                }
            },
            _80o: function(r) {
                var G = this,
                B = G._82o;
                if (!B) return kf.superClass._80o.call(G, r),
                void 0;
                var w, y, h = G._data,
                q = B.background,
                d = B.rect,
                D = B.block,
                E = B._91o,
                _ = B._92o,
                i = B._93o,
                W = B._88o,
                c = B.cellBorderColor,
                $ = B._89o,
                S = B._90o;
                if (q) if (qe(r, d.x, d.y, d.width, d.height, q), qi(r, q, B.depth, d), W) for (w = 0; $ > w; w++) for (y = 0; S > y; y++) d = h.getCellRect(w, y),
                d && qi(r, q, W, d);
                else if (c) {
                    for (r.beginPath(), w = 0; $ > w; w++) for (y = 0; S > y; y++) d = h.getCellRect(w, y),
                    d && r.rect(d.x, d.y, d.width, d.height);
                    r.strokeStyle = c,
                    r.lineWidth = 1,
                    r.stroke()
                }
                if ("h" === D) for (w = 0; $ > w; w++) d = _o(h.getCellRect(w, 0), h.getCellRect(w, S - 1)),
                tq(d, _),
                Hb(r, E, d.x, d.y, d.width, d.height, i);
                else if ("v" === D) for (y = 0; S > y; y++) d = _o(h.getCellRect(0, y), h.getCellRect($ - 1, y)),
                tq(d, _),
                Hb(r, E, d.x, d.y, d.width, d.height, i);
                G._39O(r, G._83o)
            }
        });
        var Mm = function(F, S) {
            Lo(Mm, this, [F, S])
        };
        eg(Mm, Ql, {
            _checkEmptyRect: !1,
            _81o: function() {
                var X = this._data,
                T = Mm.superClass._81o.call(this),
                f = X.s("text");
                if (f != F) {
                    var Z, b, l = X.s("text.font"),
                    h = X.s("text.align"),
                    H = X.s("text.vAlign"),
                    O = X.getRotation(),
                    P = Te(l, f),
                    Y = P.width,
                    G = P.height;
                    "left" === h ? Z = -X.getWidth() / 2 : "center" === h ? Z = -P.width / 2 : "right" === h && (Z = X.getWidth() / 2 - P.width),
                    "top" === H ? b = -X.getHeight() / 2 : "middle" === H ? b = -P.height / 2 : "bottom" === H && (b = X.getHeight() / 2 - P.height);
                    var n;
                    if (O) {
                        var e = new ls(O);
                        n = Hd([e.tf(Z, b), e.tf(Z + Y, b), e.tf(Z + Y, b + G), e.tf(Z, b + G)])
                    } else n = {
                        x: Z,
                        y: b,
                        width: Y,
                        height: G
                    };
                    n.x += X.getPosition().x,
                    n.y += X.getPosition().y,
                    T = _o(T, n)
                }
                return T
            }
        });
        var Pm = lf.Interactor = function(F) {
            this.gv = this._graphView = F
        };
        Ug("Interactor", o, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners(),
                this.clear()
            },
            clear: function() {},
            fi: function(d) {
                this.gv.fi(d)
            },
            setCursor: function(E) {
                a || (this.getView().style.cursor = E)
            },
            startDragging: function(u) {
                var D = this;
                D._lastClientPoint = ce(u),
                D._lastLogicalPoint = D.gv.lp(u),
                fk(D, u)
            },
            clearDragging: function() {
                var q = this;
                q._lastClientPoint = q._lastLogicalPoint = q._logicalPoint = F
            },
            autoScroll: function(C) {
                return this.gv.autoScroll(C, this._lastClientPoint)
            },
            validate: function() {}
        });
        var zk = lf.DefaultInteractor = function(i) {
            Lo(zk, this, [i])
        };
        Ug("DefaultInteractor", Pm, {
            handle_mousedown: function($) {
                pm($);
                var B = this,
                t = B.gv,
                Y = t.getDataAt($); ! t.setFocus($) || t._editing || t._scrolling || (Rr($) ? t.handleDoubleClick($, Y) : t.handleClick($, Y), t.isPannable() && !Y && oi($) && !ui($) && (B._tx = t.tx(), B._ty = t.ty(), B.startDragging($)))
            },
            handleWindowMouseUp: function(p) {
                var q = this,
                J = q.gv;
                J._panning && (delete J._panning, J.onPanEnded(), q.fi({
                    kind: "endPan",
                    event: p
                })),
                delete q._tx,
                delete q._ty,
                q.clearDragging()
            },
            handle_mousemove: function(N) {
                var O = this,
                L = O.gv;
                O._hoverTimer && (l(O._hoverTimer), delete O._hoverTimer),
                O._hoverTimer = u(function() {
                    O.fi({
                        kind: "hover",
                        event: N
                    }),
                    l(O._hoverTimer),
                    delete O._hoverTimer
                },
                L.getHoverDelay() || 800)
            },
            handle_touchmove: function(g) {
                this.handle_mousemove(g)
            },
            handleWindowMouseMove: function(V) {
                var z = this,
                x = z.gv,
                k = z._lastClientPoint;
                z.fi({
                    kind: x._panning ? "betweenPan": "beginPan",
                    event: V
                }),
                x._panning = 1,
                x.setTranslate(z._tx + V.clientX - k.x, z._ty + V.clientY - k.y)
            },
            handle_mousewheel: function(D) {
                this.gv.handleScroll(D, D.wheelDelta)
            },
            handle_DOMMouseScroll: function(S) {
                2 === S.axis && this.gv.handleScroll(S, -S.detail)
            },
            handle_keydown: function(S) {
                this.gv.handleKeyDown(S)
            }
        });
        var pp = lf.SelectInteractor = function(U) {
            Lo(pp, this, [U])
        };
        Ug("SelectInteractor", Pm, {
            _42: function() {
                var K = this,
                x = K.gv,
                v = x.getZoom(),
                p = K.mark,
                E = K.div;
                E || (E = K.div = hs(), Bf(K.getView(), E));
                var O = {};
                O.x = p.x * v + x.tx(),
                O.y = p.y * v + x.ty(),
                O.width = p.width * v,
                O.height = p.height * v,
                Sn(E, O),
                this.intersects() ? (E.style.border = "", E.style.background = x.getRectSelectBackground()) : (E.style.background = "", E.style.border = "1px solid " + x.getRectSelectBorderColor())
            },
            handle_mousedown: function(l) {
                var i = this,
                O = i.gv;
                if (i._57I = F, !O._editing && !O._scrolling) {
                    var a = O.getDataAt(l),
                    M = O.sm();
                    a ? ui(l) ? M.co(a) ? M.rs(a) : M.as(a) : M.co(a) || M.ss(a) : ui(l) || !O.isPannable() ? oi(l) && (ui(l) || M.cs(), O.isRectSelectable() && (i.startDragging(l), O._77O = 1)) : i._57I = ce(l)
                }
            },
            handle_mouseup: function($) {
                var M = this,
                V = M._57I;
                V && (ep(V, ce($)) <= 1 && M.gv.sm().cs(), M._57I = F)
            },
            handleWindowMouseUp: function(C) {
                this.clear(C)
            },
            handleWindowMouseMove: function(u) {
                var p = this,
                z = p.gv;
                p._logicalPoint = z.lp(u),
                p.mark ? (p.fi({
                    kind: "betweenRectSelect",
                    event: u
                }), p.autoScroll(u), p.redraw()) : p.fi({
                    kind: "beginRectSelect",
                    event: u
                }),
                p.mark = Hd(p._lastLogicalPoint, p._logicalPoint),
                p.redraw()
            },
            intersects: function() {
                var t = this,
                z = t._lastLogicalPoint,
                _ = t._logicalPoint;
                return z.x > _.x || z.y > _.y
            },
            clear: function(o) {
                var Y = this,
                C = Y.gv,
                e = Y.mark;
                if (Y._57I = F, Y._lastLogicalPoint) {
                    if (e) {
                        if (0 !== e.width && 0 !== e.height) {
                            var H = C.getDatasInRect(e, Y.intersects());
                            if (!H.isEmpty()) {
                                var M = C.sm(),
                                L = M.toSelection();
                                H.each(function(U) {
                                    M.co(U) ? L.remove(U) : L.add(U)
                                }),
                                M.ss(L)
                            }
                        }
                        Gq(Y.div),
                        delete Y.div,
                        delete Y.mark,
                        Y.redraw(),
                        Y.fi({
                            kind: "endRectSelect",
                            event: o
                        }),
                        C.onRectSelectEnded()
                    }
                    Y.clearDragging(),
                    delete C._77O
                }
            },
            redraw: function() {
                var K = this;
                K._draw || (K._draw = 1, u(function() {
                    K.mark && K._42(),
                    delete K._draw
                },
                16))
            }
        });
        var ee = lf.MoveInteractor = function(t) {
            Lo(ee, this, [t])
        };
        Ug("MoveInteractor", Pm, {
            handle_mousedown: function(X) {
                var $ = this,
                i = $.gv;
                if (oi(X) && !i._editing && !i._scrolling) {
                    var v = i.getSelectedDataAt(X);
                    v ? ($._data = v, i.handleMouseDown && i.handleMouseDown(X, v), $.startDragging(X), i.isMovable(v) && (i._moving = 1)) : i._focusData = F
                }
            },
            handleWindowMouseUp: function(u) {
                var J = this,
                q = J.gv;
                q.handleMouseUp && q.handleMouseUp(u, J._data),
                J.clear(u)
            },
            handleWindowMouseMove: function(g) {
                var R = this,
                B = R.gv,
                v = R._data,
                r = B.getDataModel(),
                i = r.getHistoryManager();
                if ((!B._93O || !B._93O(g, v)) && B._moving) {
                    var Y = R._logicalPoint ? "betweenMove": "beginMove",
                    E = {
                        kind: Y,
                        event: g
                    },
                    N = R._logicalPoint = B.lp(g);
                    i && "beginMove" === Y && i.beginInteraction();
                    var L = N.x - R._lastLogicalPoint.x,
                    X = N.y - R._lastLogicalPoint.y,
                    J = B.getMoveMode(g, v);
                    J && ("x" === J ? X = 0 : "y" === J ? L = 0 : "xy" !== J && (L = X = 0)),
                    B.moveSelection(L, X),
                    R._lastLogicalPoint = N,
                    R.autoScroll(g),
                    R.fi(E)
                }
            },
            clear: function(K) {
                var w = this,
                B = w.gv,
                g = B.getDataModel(),
                I = g.getHistoryManager();
                w._lastLogicalPoint && (w._lastLogicalPoint = w._data = B._moving = F, w._logicalPoint && (w.fi({
                    kind: "endMove",
                    event: K
                }), B.onMoveEnded(), I && I.endInteraction()), w.clearDragging())
            }
        });
        var vp = lf.EditInteractor = function(u) {
            Lo(vp, this, [u])
        };
        Ug("EditInteractor", Pm, {
            ms_edit: 1,
            setUp: function() {
                var m = this;
                vp.superClass.setUp.call(m),
                a || m.gv.setEditInteractor(m)
            },
            tearDown: function() {
                vp.superClass.tearDown.call(this),
                a || this.gv.setEditInteractor(F)
            },
            clear: function() {
                var n = this,
                l = n.gv;
                l._editing && (l._editing = n._77I = n._node = n._edge = n._shape = n._rect = n._89I = n._index = F, n.clearDragging(), n.setCursor(G))
            },
            handle_mousedown: function(L) {
                var v = this,
                q = v.gv.dm(),
                B = q.getHistoryManager(),
                S = v._index,
                X = v._node,
                o = v._shape,
                K = v._edge,
                l = v._77I,
                p = v._89I;
                oi(L) && v.gv._editing && (X && p ? (v._rect = X.getRect(), v.startDragging(L), B && B.beginInteraction(), v.fi({
                    kind: "beginEditRect",
                    event: L,
                    data: X,
                    direction: p
                })) : o && S >= 0 ? (v.startDragging(L), B && B.beginInteraction(), v.fi({
                    kind: "beginEditPoint",
                    event: L,
                    data: o,
                    index: S
                })) : K && S >= 0 ? (v.startDragging(L), B && B.beginInteraction(), v.fi({
                    kind: "beginEditPoint",
                    event: L,
                    data: K,
                    index: S
                })) : l && (v.startDragging(L), B && B.beginInteraction(), v.fi({
                    kind: "beginEditRotation",
                    event: L,
                    data: l
                })))
            },
            handleWindowMouseUp: function(J) {
                this._46O(J),
                this.clear()
            },
            handleWindowMouseMove: function(p) {
                this._78I(p)
            },
            handle_mousemove: function(x) {
                if (!Nf) {
                    var t = this,
                    F = t.gv;
                    t._79I(x, F.getSelectedDataAt(x)) ? F._editing = 1 : t.clear()
                }
            }
        });
        var pn = lf.ScrollBarInteractor = function(B) {
            Lo(pn, this, [B])
        };
        Ug("ScrollBarInteractor", Pm, {
            _41o: function() {
                return this.gv.getViewRect().height < this.gv.getScrollRect().height
            },
            _40o: function() {
                return this.gv.getViewRect().width < this.gv.getScrollRect().width
            },
            isV: function(V) {
                var b = this.gv.getViewRect();
                return this._41o() && (b.x + b.width - this.gv.lp(V).x) * this.gv.getZoom() < _f
            },
            isH: function(G) {
                var a = this.gv.getViewRect();
                return this._40o() && (a.y + a.height - this.gv.lp(G).y) * this.gv.getZoom() < _f
            },
            handle_mousemove: function(S) {
                this.handle_touchmove(S)
            },
            handle_touchmove: function(Y) {
                if (!Nf && oi(Y)) {
                    var V = this,
                    w = V.isV(Y),
                    W = V.isH(Y);
                    V._cp ? V._state || (w ? V._state = "vScroll": W && (V._state = "hScroll"), V._state && (fk(V, Y), V.fi({
                        kind: "beginScroll",
                        event: Y
                    }))) : (w || W) && V.gv.showScrollBar(),
                    V.gv._scrolling = w || W
                }
            },
            handleWindowMouseUp: function(N) {
                this.handleWindowTouchEnd(N)
            },
            handleWindowTouchEnd: function(O) {
                this._state = this._cp = this._tx = this._ty = this.gv._scrolling = F,
                this.fi({
                    kind: "endScroll",
                    event: O
                })
            },
            handle_mousedown: function(u) {
                this.handle_touchstart(u)
            },
            handle_touchstart: function(n) {
                this.gv.setFocus(n),
                pm(n),
                this.handle_touchmove(n),
                se(n) > 1 || !this.gv._scrolling || (this._cp = ce(n), this._tx = this.gv.tx(), this._ty = this.gv.ty())
            },
            handleWindowMouseMove: function(p) {
                this.handleWindowTouchMove(p)
            },
            handleWindowTouchMove: function(b) {
                var X = ce(b),
                w = this.gv.getViewRect(),
                k = this.gv.getScrollRect();
                "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - X.y) * k.height / w.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - X.x) * k.width / w.width),
                this.fi({
                    kind: "betweenScroll",
                    event: b
                })
            }
        });
        var mf = lf.TouchInteractor = function(G, y) {
            y = y || {},
            y.selectable === V && (y.selectable = !0),
            y.movable === V && (y.movable = !0),
            y.pannable === V && (y.pannable = !0),
            y.pinchable === V && (y.pinchable = !0),
            y.editable === V && (y.editable = !0),
            this.params = y,
            Lo(mf, this, [G])
        };
        Ug("TouchInteractor", Pm, {
            ms_edit: 1,
            setUp: function() {
                var U = this;
                mf.superClass.setUp.call(U),
                a && U.params.editable && U.gv.setEditInteractor(U)
            },
            tearDown: function() {
                var u = this;
                mf.superClass.tearDown.call(u),
                a && u.params.editable && u.gv.setEditInteractor(F)
            },
            clear: function(u) {
                var O = this,
                r = O.gv,
                T = r.dm().getHistoryManager();
                r._moving && (O.fi({
                    kind: "endMove",
                    event: u
                }), delete r._moving, r.onMoveEnded(), T && T.endInteraction()),
                r._panning && (O.fi({
                    kind: "endPan",
                    event: u
                }), delete r._panning, r.onPanEnded()),
                r._pinching && (O.fi({
                    kind: "endPinch",
                    event: u
                }), delete r._pinching, r.onPinchEnded()),
                r._editing && (O._46O(u), O._77I = O._node = O._edge = O._shape = O._rect = O._89I = O._index = r._editing = F),
                O._moving = O._panning = O._pinching = O._editing = O._57I = O._data = O._beginHistory = F,
                O.clearDragging()
            },
            handle_touchstart: function(T) {
                var P = this;
                if (!P.gv._editing) {
                    pm(T),
                    P._57I = F;
                    var G = P.params,
                    S = P.gv,
                    A = S.sm(),
                    R = S.getDataAt(T),
                    z = se(T);
                    if (1 === z) Rr(T) ? S.handleDoubleClick(T, R) : (S.handleClick(T, R), R && (S.handleMouseDown && S.handleMouseDown(T, R), P._data = R)),
                    G.selectable || (R = F),
                    R ? (A.co(R) || A.ss(R), G.editable && S.isEditable(R) && P._79I(T, R, !0) ? (P._editing = 1, P.startDragging(T)) : G.movable && S.isMovable(R) && (P._moving = 1, P.startDragging(T))) : (P._57I = ce(T), G.pannable && S.isPannable() && (P._panning = 1, P.startDragging(T), P._translate = {
                        x: S.tx(),
                        y: S.ty()
                    }));
                    else if (G.pinchable && 2 === z) {
                        P._pinching = 1,
                        P.startDragging(T);
                        var h = S.getView(),
                        H = S.getZoom(),
                        Z = h.getBoundingClientRect(),
                        $ = T.touches[0],
                        r = T.touches[1],
                        I = {
                            x: ($.clientX + r.clientX) / 2 - Z.left,
                            y: ($.clientY + r.clientY) / 2 - Z.top
                        };
                        I.x -= S.tx(),
                        I.y -= S.ty(),
                        I.x /= H,
                        I.y /= H,
                        P._p = I,
                        P._d = hb(T)
                    }
                }
            },
            handle_touchend: function(h) {
                var O = this,
                j = O.gv,
                d = O._57I,
                f = O._data;
                d && (ep(d, ce(h)) <= 1 && j.sm().cs(), O._57I = F),
                f && j.handleMouseUp && j.handleMouseUp(h, f)
            },
            handleWindowTouchEnd: function(w) {
                this.clear(w)
            },
            handleWindowTouchMove: function(N) {
                var i = this,
                F = i.gv,
                y = F.dm().getHistoryManager(),
                m = se(N);
                if (1 === m) {
                    if (i._editing && (y && !i._beginHistory && (i._beginHistory = 1, y.beginInteraction()), F._editing = 1, i._78I(N)), i._moving) y && !i._beginHistory && (i._beginHistory = 1, y.beginInteraction()),
                    i.handleMove(N);
                    else if (i._panning) {
                        var J = ce(N);
                        F.setTranslate(i._translate.x + J.x - i._lastClientPoint.x, i._translate.y + J.y - i._lastClientPoint.y),
                        i.fi({
                            kind: F._panning ? "betweenPan": "beginPan",
                            event: N
                        }),
                        F._panning = 1
                    }
                } else if (2 === m && i._pinching) {
                    var A = hb(N);
                    F.handlePinch(i._p, A, i._d),
                    i._d = A,
                    i.fi({
                        kind: F._pinching ? "betweenPinch": "beginPinch",
                        event: N
                    }),
                    F._pinching = 1
                }
            },
            handleMove: function(J) {
                var U = this,
                _ = U.gv,
                Y = _.lp(J);
                _._93O && _._93O(J, U._data) || (_.moveSelection(Y.x - U._lastLogicalPoint.x, Y.y - U._lastLogicalPoint.y), U._lastLogicalPoint = Y, U.autoScroll(J), U.fi({
                    kind: _._moving ? "betweenMove": "beginMove",
                    event: J
                }), _._moving = 1)
            }
        });
        var rb = "directional",
        Zl = "point",
        xm = "spot",
        sp = "light.color";
        vc(C, {
            graph3dViewAttributes: F,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: y / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: Tr,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: y / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function(d, s) {
                Df[d] = s
            },
            getShape3dModel: function(D) {
                return Df[D]
            },
            createMatrix: function(L, N) {
                eb(L) || (L = [L]);
                for (var O = L.length - 1; O >= 0; O--) {
                    var $ = L[O];
                    N = Bg($.mat, $.s3, $.r3, $.rotationMode, $.t3, N)
                }
                return N
            },
            transformVec: function(v, q) {
                return Uo(v, q)
            },
            createBoxModel: function() {
                return {
                    vs: wo,
                    ns: xp,
                    uv: dm,
                    is: Rb
                }
            },
            createRoundRectModel: function(d, X) {
                return Tq.roundRect(d, X)
            },
            createStarModel: function(z, E) {
                return Tq.star(z, E)
            },
            createRectModel: function(p, w) {
                return Tq.rect(p, w)
            },
            createTriangleModel: function(t, r) {
                return Tq.triangle(t, r)
            },
            createRightTriangleModel: function(j, o) {
                return Tq.rightTriangle(j, o)
            },
            createParallelogramModel: function(G, t) {
                return Tq.parallelogram(G, t)
            },
            createTrapezoidModel: function(w, u) {
                return Tq.trapezoid(w, u)
            },
            createSmoothSphereModel: function(P, G, I, e, W, B, o) {
                return qr(new og(P, G, I, e, W, B, o))
            },
            createSphereModel: function(N, T, Z, t, z, q) {
                return N ? qm(N, T, Z, t, z, q) : C.createSmoothSphereModel()
            },
            createSmoothConeModel: function(d, l, Z, N, u) {
                return Le(d, l, Z, N, u)
            },
            createConeModel: function(U, n, k, i, $, b) {
                return U ? ko(U, n, k, i, $, b) : Le(b)
            },
            createSmoothCylinderModel: function(F, t, Q, o, b, X, U, e) {
                return qr(new Qi(F, t, Q, o, b, X, U, e))
            },
            createCylinderModel: function(b, z, Z, n, I, F, M) {
                return b ? Nk(b, z, Z, n, I, F, M) : yp(F, M)
            },
            createSmoothTorusModel: function(A, m, b, C, t, f) {
                return qr(new Dc(A, m, b, C, t, f))
            },
            createTorusModel: function(i, P, G, $, Q, m, k) {
                return i ? Lp(i, P, G, $, Q, m, k) : $j(m, k)
            },
            createExtrusionModel: function(I, e, $, H, g, K, h, y) {
                return mn(I, e, $, H, g, K, h, y)
            },
            createSmoothRingModel: function(v, E, J, D, Z, $) {
                for (var d = [], F = 0; F < v.length - 1; F += 2) d.push({
                    x: v[F],
                    y: v[F + 1]
                });
                for (v = Dp(d, E, J)[0], d = [], F = 0; F < v.length; F++) {
                    var m = v[F];
                    d.push(new Nm(m.x, 0, m.y))
                }
                return qr(new fe(d, $, D, Z))
            },
            createTextGeometry: function(c, B) {
                return qr(new Ih(c, B))
            },
            loadFontFace: function(V, p) {
                C.xhrLoad(V,
                function(Z) {
                    if (!Z) return p();
                    var x;
                    try {
                        x = JSON.parse(Z)
                    } catch(m) {
                        x = JSON.parse(Z.substring(65, Z.length - 2))
                    }
                    Bp.loadFace(x),
                    p && p(x.familyName.toLowerCase())
                },
                p ? null: {
                    sync: !0
                })
            },
            createRingModel: function(N, j, o, L, G, b, k, m, h, B) {
                for (var O = [], w = 0; w < N.length - 1; w += 2) O.push({
                    x: N[w],
                    y: N[w + 1]
                });
                b = b || C.shapeSide,
                k = k || 0,
                m = m || b;
                var T, W, c, v, u, z, d, V, q, y, w, X, R, f, $, P, n, s, J = [],
                E = [],
                Z = h ? [] : F,
                Y = h ? [] : F,
                H = B ? [] : F,
                A = B ? [] : F,
                D = L ? [] : F,
                S = L ? [] : F,
                _ = G ? [] : F,
                x = G ? [] : F,
                N = Dp(O, j, o),
                a = Si(N),
                K = 0,
                p = 2 * Math.PI / b;
                return N.forEach(function(o) {
                    if (c = o.length, c > 1) {
                        if (v = o[0], L) for (z = v.x, V = v.y, w = k; m > w; w++) X = w + 1,
                        R = w * p,
                        f = X * p,
                        $ = i(R),
                        P = g(R),
                        n = i(f),
                        s = g(f),
                        D.push($ * z, V, -P * z, n * z, V, -s * z, 0, V, 0),
                        S.push(.5 - .5 * $, .5 - .5 * P, .5 - .5 * n, .5 - .5 * s, .5, .5);
                        for (y = 0; c > y; y++) {
                            for (u = o[y], z = v.x, d = u.x, V = v.y, q = u.y, T = K / a, K += ep(v, u), W = K / a, w = k; m > w; w++) X = w + 1,
                            R = w * p,
                            f = X * p,
                            $ = i(R),
                            P = g(R),
                            n = i(f),
                            s = g(f),
                            J.push($ * d, q, -P * d, n * d, q, -s * d, $ * z, V, -P * z, n * d, q, -s * d, n * z, V, -s * z, $ * z, V, -P * z),
                            E.push(w / b, W, X / b, W, w / b, T, X / b, W, X / b, T, w / b, T),
                            h && w === k && (Z.push(0, V, 0, 0, q, 0, $ * d, q, -P * d, $ * d, q, -P * d, $ * z, V, -P * z, 0, V, 0), Y.push(0, .5 - V, 0, .5 - q, 2 * d, .5 - q, 2 * d, .5 - q, 2 * z, .5 - V, 0, .5 - V)),
                            B && X === m && (H.push(0, V, 0, n * d, q, -s * d, 0, q, 0, n * d, q, -s * d, 0, V, 0, n * z, V, -s * z), A.push(1, .5 - V, 1 - 2 * d, .5 - q, 1, .5 - q, 1 - 2 * d, .5 - q, 1, .5 - V, 1 - 2 * z, .5 - V));
                            v = u
                        }
                        if (G) for (z = v.x, V = v.y, w = k; m > w; w++) X = w + 1,
                        R = w * p,
                        f = X * p,
                        $ = i(R),
                        P = g(R),
                        n = i(f),
                        s = g(f),
                        _.push(n * z, V, -s * z, $ * z, V, -P * z, 0, V, 0),
                        x.push(.5 - .5 * n, .5 + .5 * s, .5 - .5 * $, .5 + .5 * P, .5, .5)
                    }
                }),
                {
                    vs: J,
                    uv: E,
                    bottom_vs: _,
                    bottom_uv: x,
                    top_vs: D,
                    top_uv: S,
                    from_vs: Z,
                    from_uv: Y,
                    to_vs: H,
                    to_uv: A
                }
            }
        },
        !0),
        vc(b, {
            "3d.move.mode": V,
            "3d.selectable": !0,
            "3d.visible": !0,
            "3d.movable": !0,
            "3d.editable": !0,
            "shape.border.gradient.color": V,
            "edge.gradient.color": V,
            "edge.source.t3": V,
            "edge.target.t3": V,
            "light.type": Zl,
            "light.center": [0, 0, 0],
            "light.color": [1, 1, 1, 1],
            "light.disabled": !1,
            "light.angle": y / 4,
            "light.range": 0,
            "light.exponent": 1,
            "light.intensity": 1,
            "wf.visible": !1,
            "wf.width": 1,
            "wf.color": jk,
            "wf.short": !1,
            "wf.mat": V,
            batch: V,
            "transparent.mask": !1,
            brightness: V,
            "select.brightness": .7,
            "repeat.uv.length": V,
            "label.face": ps,
            "label.t3": V,
            "label.r3": V,
            "label.texture.scale": 2,
            "label.rotationMode": Pe,
            "label.light": !1,
            "label.blend": V,
            "label.reverse.flip": !1,
            "label.reverse.color": zc,
            "label.reverse.cull": !1,
            "label.transparent": !1,
            "label.autorotate": !1,
            "label2.face": ps,
            "label2.t3": V,
            "label2.r3": V,
            "label2.texture.scale": 2,
            "label2.rotationMode": Pe,
            "label2.light": !1,
            "label2.blend": V,
            "label2.reverse.flip": !1,
            "label2.reverse.color": zc,
            "label2.reverse.cull": !1,
            "label2.transparent": !1,
            "label2.autorotate": !1,
            "note.face": ps,
            "note.t3": V,
            "note.r3": V,
            "note.texture.scale": 2,
            "note.rotationMode": Pe,
            "note.light": !1,
            "note.blend": V,
            "note.reverse.flip": !1,
            "note.reverse.color": zc,
            "note.reverse.cull": !1,
            "note.transparent": !1,
            "note.autorotate": !1,
            "note2.face": ps,
            "note2.t3": V,
            "note2.r3": V,
            "note2.texture.scale": 2,
            "note2.rotationMode": Pe,
            "note2.light": !1,
            "note2.blend": V,
            "note2.reverse.flip": !1,
            "note2.reverse.color": zc,
            "note2.reverse.cull": !1,
            "note2.transparent": !1,
            "note2.autorotate": !1,
            shape3d: V,
            "shape3d.color": Ln,
            "shape3d.top.color": V,
            "shape3d.bottom.color": V,
            "shape3d.from.color": V,
            "shape3d.to.color": V,
            "shape3d.image": V,
            "shape3d.top.image": V,
            "shape3d.bottom.image": V,
            "shape3d.from.image": V,
            "shape3d.to.image": V,
            "shape3d.light": !0,
            "shape3d.side": 0,
            "shape3d.side.from": V,
            "shape3d.side.to": V,
            "shape3d.visible": !0,
            "shape3d.from.visible": !0,
            "shape3d.to.visible": !0,
            "shape3d.top.visible": !0,
            "shape3d.bottom.visible": !0,
            "shape3d.torus.radius": .17,
            "shape3d.resolution": 0,
            "shape3d.blend": V,
            "shape3d.opacity": V,
            "shape3d.reverse.flip": !1,
            "shape3d.reverse.color": zc,
            "shape3d.reverse.cull": !1,
            "shape3d.transparent": !1,
            "shape3d.uv.offset": V,
            "shape3d.uv.scale": V,
            "shape3d.top.uv.offset": V,
            "shape3d.top.uv.scale": V,
            "shape3d.bottom.uv.offset": V,
            "shape3d.bottom.uv.scale": V,
            "shape3d.from.uv.offset": V,
            "shape3d.from.uv.scale": V,
            "shape3d.to.uv.offset": V,
            "shape3d.to.uv.scale": V,
            "shape3d.top.cap": V,
            "shape3d.bottom.cap": V,
            "shape3d.start.angle": 0,
            "shape3d.discard.selectable": !0,
            "shape3d.top.discard.selectable": !0,
            "shape3d.bottom.discard.selectable": !0,
            "shape3d.from.discard.selectable": !0,
            "shape3d.to.discard.selectable": !0,
            "shape3d.scaleable": !0,
            "all.light": !0,
            "all.visible": !0,
            "all.color": Ln,
            "all.image": V,
            "all.blend": V,
            "all.opacity": V,
            "all.reverse.flip": !1,
            "all.reverse.color": zc,
            "all.reverse.cull": !1,
            "all.transparent": !1,
            "all.uv": V,
            "all.uv.offset": V,
            "all.uv.scale": V,
            "all.discard.selectable": !0,
            mat: V,
            "left.mat": V,
            "right.mat": V,
            "top.mat": V,
            "bottom.mat": V,
            "front.mat": V,
            "back.mat": V
        },
        !0);
        var Zi, kh = !1,
        wi = [0, 0, 0, 1 / 255],
        rq = {
            left: [1 / 255, 0, 0, 1],
            right: [2 / 255, 0, 0, 1],
            top: [3 / 255, 0, 0, 1],
            bottom: [4 / 255, 0, 0, 1],
            front: [5 / 255, 0, 0, 1],
            back: [6 / 255, 0, 0, 1],
            m: {
                1 : Tb,
                2 : um,
                3 : aq,
                4 : Gg,
                5 : ps,
                6 : $m
            }
        },
        Zp = function(H, x, S, O) {
            if (x.getFaceVisible(H, S)) {
                Jg(x, vb(H, x.getFaceMat(H, S) || x.getMat(H)));
                var B = x._26I;
                x.getFaceReverseCull(H, S) ? B.enable(B.CULL_FACE) : B.disable(B.CULL_FACE),
                Cc(B, x._prg.uFixPickReverseColor, rq[S]),
                _b(B),
                Kb(B, O, 6),
                af(B),
                Ed(x)
            }
        },
        de = function(N) {
            return N instanceof tm
        },
        Ai = function(X) {
            return [X.x, X.e || 0, X.y]
        },
        Tf = function(q, D, T) {
            for (var D = sj(D), p = D[0], $ = D[1], H = D[2]; T--;) q.push(p, $, H)
        },
        jn = function(s, c, U) {
            for (var c = sj(c), m = c[0], M = c[1], p = c[2], t = c[3]; U--;) s.push(m, M, p, t)
        },
        uc = function(p, l, L) {
            if (l) for (var u, X, T, R = l[0], r = l[1], n = l[2], z = l[4], C = l[5], y = l[6], U = l[8], Y = l[9], o = l[10], k = l[12], A = l[13], m = l[14], f = L.length, V = 0, V = 0; f > V; V += 3) u = L[V],
            X = L[V + 1],
            T = L[V + 2],
            p.push(R * u + z * X + U * T + k, r * u + C * X + Y * T + A, n * u + y * X + o * T + m);
            else qk(p, L)
        },
        zr = function(G, H) {
            var I = H.s("light.intensity"),
            Q = sj(H.s(sp)),
            c = Q[0],
            N = Q[1],
            X = Q[2];
            1 !== I && (c *= I, N *= I, X *= I),
            G.push(c, N, X, H.s("light.disabled") ? 1 : 0)
        },
        Jc = function(Y, R, t) {
            Cc(R, t.uHeadlightRange, Y._headlightRange);
            var S = Y._headlightIntensity,
            N = sj(Y._headlightColor);
            1 !== S && (N = [N[0] * S, N[1] * S, N[2] * S]),
            Cc(R, t.uHeadlightColor, [N[0], N[1], N[2], Y._headlightDisabled ? 1 : 0]);
            var I = Y._59O,
            g = Y._spots,
            G = Y._dirs;
            if (I.length) {
                var H = [],
                b = [],
                z = [];
                I.forEach(function(_) {
                    zr(H, _),
                    qk(b, _.p3()),
                    z.push(_.s("light.range"))
                }),
                R.uniform4fv(t.uPointColor, H),
                R.uniform1fv(t.uPointRange, z),
                R.uniform3fv(t.uPointPosition, b)
            }
            if (g.length) {
                var D = [],
                B = [],
                j = [],
                u = [],
                J = [],
                U = [];
                g.forEach(function(s) {
                    zr(D, s),
                    qk(B, s.p3()),
                    qk(j, s.s("light.center")),
                    u.push(s.s("light.range")),
                    J.push(i(s.s("light.angle") / 2)),
                    U.push(s.s("light.exponent"))
                }),
                R.uniform4fv(t.uSpotColor, D),
                R.uniform1fv(t.uSpotRange, u),
                R.uniform1fv(t.uSpotAngle, J),
                R.uniform1fv(t.uSpotExponent, U),
                R.uniform3fv(t.uSpotPosition, B),
                R.uniform3fv(t.uSpotCenter, j)
            }
            if (G.length) {
                var o = [],
                p = [];
                G.forEach(function(Q) {
                    zr(o, Q),
                    qk(p, Q.p3())
                }),
                R.uniform4fv(t.uDirColor, o),
                R.uniform3fv(t.uDirPosition, p)
            }
        },
        sk = function(Y) {
            return Y > 0 && 0 === (Y - 1 & Y)
        },
        rn = function(B) {
            return B = h(0, s(y, B)),
            B = h(Un, s(y - Un, B))
        },
        em = function() {
            return.05 + N() / 2
        },
        Op = function(R, t, Q, o) {
            var I, U = R.getEye();
            return R.isOrtho() ? (I = Ge(R.getCenter(), U), I[0] += o[0], I[1] += o[1], I[2] += o[2]) : I = U,
            Cj(t, Q, o, I)
        },
        Cj = function(l, J, _, h) {
            var M = Xd(l, J),
            X = Ge(h, _, !0),
            r = Xd(X, J);
            if (R(r) < Un) return F;
            var c = (M - Xd(_, J)) / r;
            return [_[0] + X[0] * c, _[1] + X[1] * c, _[2] + X[2] * c]
        },
        mo = function(Z, p) {
            return {
                x: 2 * Z.x - p.x,
                y: 2 * Z.y - p.y
            }
        },
        Jb = function(s, $, q, t) {
            var E, N;
            if (!s) return E = B($.y - q.y, q.x - $.x),
            {
                x: $.x + t * g(E),
                y: $.y + t * i(E)
            };
            if (!q) return E = B(s.y - $.y, $.x - s.x),
            {
                x: $.x + t * g(E),
                y: $.y + t * i(E)
            };
            var P = Ge([s.x, s.y, 0], [$.x, $.y, 0], !0),
            f = Ge([q.x, q.y, 0], [$.x, $.y, 0], !0),
            L = -(P[0] + f[0]) / 2,
            Y = -(P[1] + f[1]) / 2,
            H = k(L * L + Y * Y);
            return Un > H ? (E = B(s.y - $.y, $.x - s.x), {
                x: $.x + t * g(E),
                y: $.y + t * i(E)
            }) : (E = d(Xd(P, f)) / 2, N = P[1] * f[0] - P[0] * f[1] > 0 ? -1 : 1, L /= H, Y /= H, H = t / g(E), {
                x: $.x + N * H * L,
                y: $.y + N * H * Y
            })
        },
        qn = function(r) {
            var k = r[1],
            m = r[2],
            x = r[3],
            P = r[6],
            E = r[7],
            O = r[11];
            r[1] = r[4],
            r[2] = r[8],
            r[3] = r[12],
            r[4] = k,
            r[6] = r[9],
            r[7] = r[13],
            r[8] = m,
            r[9] = P,
            r[11] = r[14],
            r[12] = x,
            r[13] = E,
            r[14] = O
        },
        kk = function(f) {
            var V = f[0],
            E = f[1],
            j = f[2],
            n = f[3],
            B = f[4],
            s = f[5],
            l = f[6],
            $ = f[7],
            L = f[8],
            A = f[9],
            h = f[10],
            y = f[11],
            a = f[12],
            T = f[13],
            N = f[14],
            O = f[15],
            b = V * s - E * B,
            P = V * l - j * B,
            W = V * $ - n * B,
            u = E * l - j * s,
            S = E * $ - n * s,
            v = j * $ - n * l,
            Q = L * T - A * a,
            x = L * N - h * a,
            o = L * O - y * a,
            X = A * N - h * T,
            k = A * O - y * T,
            U = h * O - y * N,
            g = b * U - P * k + W * X + u * o - S * x + v * Q;
            return g ? (g = 1 / g, f[0] = (s * U - l * k + $ * X) * g, f[1] = (j * k - E * U - n * X) * g, f[2] = (T * v - N * S + O * u) * g, f[3] = (h * S - A * v - y * u) * g, f[4] = (l * o - B * U - $ * x) * g, f[5] = (V * U - j * o + n * x) * g, f[6] = (N * W - a * v - O * P) * g, f[7] = (L * v - h * W + y * P) * g, f[8] = (B * k - s * o + $ * Q) * g, f[9] = (E * o - V * k - n * Q) * g, f[10] = (a * S - T * W + O * b) * g, f[11] = (A * W - L * S - y * b) * g, f[12] = (s * x - B * X - l * Q) * g, f[13] = (V * X - E * x + j * Q) * g, f[14] = (T * P - a * u - N * b) * g, f[15] = (L * u - A * P + h * b) * g, void 0) : F
        },
        rc = function(Q, y) {
            if (y) {
                var C = y[0],
                n = y[1],
                M = y[2];
                Q[12] = Q[0] * C + Q[4] * n + Q[8] * M + Q[12],
                Q[13] = Q[1] * C + Q[5] * n + Q[9] * M + Q[13],
                Q[14] = Q[2] * C + Q[6] * n + Q[10] * M + Q[14],
                Q[15] = Q[3] * C + Q[7] * n + Q[11] * M + Q[15]
            }
        },
        tc = function(R, Z) {
            if (Z) {
                var D = Z[0],
                i = Z[1],
                M = Z[2];
                R[0] = R[0] * D,
                R[1] = R[1] * D,
                R[2] = R[2] * D,
                R[3] = R[3] * D,
                R[4] = R[4] * i,
                R[5] = R[5] * i,
                R[6] = R[6] * i,
                R[7] = R[7] * i,
                R[8] = R[8] * M,
                R[9] = R[9] * M,
                R[10] = R[10] * M,
                R[11] = R[11] * M
            }
        },
        jq = function(c, w, n) {
            var h = w[0],
            O = w[1],
            y = w[2],
            W = w[3],
            Y = w[4],
            p = w[5],
            L = w[6],
            H = w[7],
            b = w[8],
            j = w[9],
            z = w[10],
            f = w[11],
            l = w[12],
            N = w[13],
            E = w[14],
            S = w[15],
            G = n[0],
            Q = n[1],
            g = n[2],
            v = n[3];
            return c[0] = G * h + Q * Y + g * b + v * l,
            c[1] = G * O + Q * p + g * j + v * N,
            c[2] = G * y + Q * L + g * z + v * E,
            c[3] = G * W + Q * H + g * f + v * S,
            G = n[4],
            Q = n[5],
            g = n[6],
            v = n[7],
            c[4] = G * h + Q * Y + g * b + v * l,
            c[5] = G * O + Q * p + g * j + v * N,
            c[6] = G * y + Q * L + g * z + v * E,
            c[7] = G * W + Q * H + g * f + v * S,
            G = n[8],
            Q = n[9],
            g = n[10],
            v = n[11],
            c[8] = G * h + Q * Y + g * b + v * l,
            c[9] = G * O + Q * p + g * j + v * N,
            c[10] = G * y + Q * L + g * z + v * E,
            c[11] = G * W + Q * H + g * f + v * S,
            G = n[12],
            Q = n[13],
            g = n[14],
            v = n[15],
            c[12] = G * h + Q * Y + g * b + v * l,
            c[13] = G * O + Q * p + g * j + v * N,
            c[14] = G * y + Q * L + g * z + v * E,
            c[15] = G * W + Q * H + g * f + v * S,
            c
        },
        vf = function(Y, V, l, F) {
            var r, t, K, w, s, _, d, h, o, D, v = V[0],
            c = V[1],
            b = V[2],
            u = F[0],
            S = F[1],
            x = F[2],
            W = l[0],
            H = l[1],
            L = l[2];
            return R(v - W) < Un && R(c - H) < Un && R(b - L) < Un ? ng(Y) : (d = v - W, h = c - H, o = b - L, D = 1 / k(d * d + h * h + o * o), d *= D, h *= D, o *= D, r = S * o - x * h, t = x * d - u * o, K = u * h - S * d, D = k(r * r + t * t + K * K), D ? (D = 1 / D, r *= D, t *= D, K *= D) : (r = 0, t = 0, K = 0), w = h * K - o * t, s = o * r - d * K, _ = d * t - h * r, D = k(w * w + s * s + _ * _), D ? (D = 1 / D, w *= D, s *= D, _ *= D) : (w = 0, s = 0, _ = 0), Y[0] = r, Y[1] = w, Y[2] = d, Y[3] = 0, Y[4] = t, Y[5] = s, Y[6] = h, Y[7] = 0, Y[8] = K, Y[9] = _, Y[10] = o, Y[11] = 0, Y[12] = -(r * v + t * c + K * b), Y[13] = -(w * v + s * c + _ * b), Y[14] = -(d * v + h * c + o * b), Y[15] = 1, Y)
        },
        ns = function(S, M, A, N, Z) {
            var C = 1 / I(M / 2),
            B = 1 / (N - Z);
            return S[0] = C / A,
            S[1] = 0,
            S[2] = 0,
            S[3] = 0,
            S[4] = 0,
            S[5] = C,
            S[6] = 0,
            S[7] = 0,
            S[8] = 0,
            S[9] = 0,
            S[10] = (Z + N) * B,
            S[11] = -1,
            S[12] = 0,
            S[13] = 0,
            S[14] = 2 * Z * N * B,
            S[15] = 0,
            S
        },
        lk = function(Y, x, B, o, U, O, d) {
            var y = 1 / (x - B),
            s = 1 / (o - U),
            i = 1 / (O - d);
            return Y[0] = -2 * y,
            Y[1] = 0,
            Y[2] = 0,
            Y[3] = 0,
            Y[4] = 0,
            Y[5] = -2 * s,
            Y[6] = 0,
            Y[7] = 0,
            Y[8] = 0,
            Y[9] = 0,
            Y[10] = 2 * i,
            Y[11] = 0,
            Y[12] = (x + B) * y,
            Y[13] = (U + o) * s,
            Y[14] = (d + O) * i,
            Y[15] = 1,
            Y
        },
        Hm = function(S, Z) {
            var u = Z[0],
            L = Z[1],
            A = Z[2],
            R = Z[3],
            z = u * u + L * L + A * A + R * R,
            Y = z ? 1 / z: 0;
            return S[0] = -u * Y,
            S[1] = -L * Y,
            S[2] = -A * Y,
            S[3] = R * Y,
            S
        },
        pk = function(x, M) {
            var J = M[0] + M[5] + M[10],
            d = 0;
            return J > 0 ? (d = 2 * Math.sqrt(J + 1), x[3] = .25 * d, x[0] = (M[6] - M[9]) / d, x[1] = (M[8] - M[2]) / d, x[2] = (M[1] - M[4]) / d) : M[0] > M[5] & M[0] > M[10] ? (d = 2 * Math.sqrt(1 + M[0] - M[5] - M[10]), x[3] = (M[6] - M[9]) / d, x[0] = .25 * d, x[1] = (M[1] + M[4]) / d, x[2] = (M[8] + M[2]) / d) : M[5] > M[10] ? (d = 2 * Math.sqrt(1 + M[5] - M[0] - M[10]), x[3] = (M[8] - M[2]) / d, x[0] = (M[1] + M[4]) / d, x[1] = .25 * d, x[2] = (M[6] + M[9]) / d) : (d = 2 * Math.sqrt(1 + M[10] - M[0] - M[5]), x[3] = (M[1] - M[4]) / d, x[0] = (M[8] + M[2]) / d, x[1] = (M[6] + M[9]) / d, x[2] = .25 * d),
            x
        },
        up = function(d, W, Q) {
            var Y = W[0],
            h = W[1],
            s = W[2],
            g = W[3],
            E = Y + Y,
            l = h + h,
            u = s + s,
            f = Y * E,
            t = Y * l,
            p = Y * u,
            _ = h * l,
            w = h * u,
            o = s * u,
            X = g * E,
            e = g * l,
            j = g * u;
            return d[0] = 1 - (_ + o),
            d[1] = t + j,
            d[2] = p - e,
            d[3] = 0,
            d[4] = t - j,
            d[5] = 1 - (f + o),
            d[6] = w + X,
            d[7] = 0,
            d[8] = p + e,
            d[9] = w - X,
            d[10] = 1 - (f + _),
            d[11] = 0,
            d[12] = Q[0],
            d[13] = Q[1],
            d[14] = Q[2],
            d[15] = 1,
            d
        },
        xg = function(v, U) {
            return vf(U ? U: Vi(), v._eye, v._center, v._up)
        },
        Ab = function(g) {
            var e = g.getAspect(),
            M = g._near,
            Y = g._far,
            y = Vi();
            if (g._ortho) {
                var P = g._orthoWidth / 2,
                u = P / e;
                lk(y, -P, P, -u, u, M, Y)
            } else ns(y, g._fovy, e, M, Y);
            return y
        },
        wk = function(u, I) {
            if (!u) return F;
            var w = 0,
            n = 1,
            $ = 2,
            M = [],
            E = 0,
            c = u.length,
            z = c / 3;
            if (I) {
                for (; c > E; E++) M[E] = 0;
                for (E = 0; E < I.length; E += 3) {
                    var L = [],
                    y = [],
                    R = [];
                    L[w] = u[3 * I[E + 1] + w] - u[3 * I[E] + w],
                    L[n] = u[3 * I[E + 1] + n] - u[3 * I[E] + n],
                    L[$] = u[3 * I[E + 1] + $] - u[3 * I[E] + $],
                    y[w] = u[3 * I[E + 2] + w] - u[3 * I[E + 1] + w],
                    y[n] = u[3 * I[E + 2] + n] - u[3 * I[E + 1] + n],
                    y[$] = u[3 * I[E + 2] + $] - u[3 * I[E + 1] + $],
                    R[w] = L[n] * y[$] - L[$] * y[n],
                    R[n] = L[$] * y[w] - L[w] * y[$],
                    R[$] = L[w] * y[n] - L[n] * y[w];
                    for (var x = 0; 3 > x; x++) M[3 * I[E + x] + w] += R[w],
                    M[3 * I[E + x] + n] += R[n],
                    M[3 * I[E + x] + $] += R[$]
                }
            } else for (E = 0; z > E; E += 3) {
                var L = [],
                y = [],
                R = [];
                L[w] = u[3 * (E + 1) + w] - u[3 * E + w],
                L[n] = u[3 * (E + 1) + n] - u[3 * E + n],
                L[$] = u[3 * (E + 1) + $] - u[3 * E + $],
                y[w] = u[3 * (E + 2) + w] - u[3 * (E + 1) + w],
                y[n] = u[3 * (E + 2) + n] - u[3 * (E + 1) + n],
                y[$] = u[3 * (E + 2) + $] - u[3 * (E + 1) + $],
                R[w] = L[n] * y[$] - L[$] * y[n],
                R[n] = L[$] * y[w] - L[w] * y[$],
                R[$] = L[w] * y[n] - L[n] * y[w];
                for (var x = 0; 3 > x; x++) M[3 * (E + x) + w] = R[w],
                M[3 * (E + x) + n] = R[n],
                M[3 * (E + x) + $] = R[$]
            }
            for (E = 0; c > E; E += 3) {
                var B = [];
                B[w] = M[E + w],
                B[n] = M[E + n],
                B[$] = M[E + $];
                var g = k(B[w] * B[w] + B[n] * B[n] + B[$] * B[$]);
                0 === g && (g = Un),
                B[w] = B[w] / g,
                B[n] = B[n] / g,
                B[$] = B[$] / g,
                M[E + w] = B[w],
                M[E + n] = B[n],
                M[E + $] = B[$]
            }
            return new zl(M)
        },
        Mk = function($, w, q) {
            if (q || (q = $.createTexture()), w) {
                var D = $.TEXTURE_2D,
                Y = $.LINEAR,
                f = $.REPEAT,
                A = $.CLAMP_TO_EDGE,
                i = $.TEXTURE_MIN_FILTER;
                Gh($, q),
                $.texImage2D(D, 0, $.RGBA, $.RGBA, $.UNSIGNED_BYTE, w),
                qo($, $.TEXTURE_MAG_FILTER, Y),
                sk(w.width) && sk(w.height) ? (qo($, $.TEXTURE_WRAP_S, f), qo($, $.TEXTURE_WRAP_T, f), qo($, i, $.LINEAR_MIPMAP_LINEAR), $.generateMipmap(D)) : (qo($, $.TEXTURE_WRAP_S, A), qo($, $.TEXTURE_WRAP_T, A), qo($, i, Y)),
                Gh($, F)
            }
            return q
        },
        Kl = function(Y, Q) {
            var j = new Uint8Array(3);
            return Q = Q || Y.createTexture(),
            Gh(Y, Q),
            qo(Y, Y.TEXTURE_MIN_FILTER, Y.LINEAR),
            Y.texImage2D(Y.TEXTURE_2D, 0, Y.RGB, 1, 1, 0, Y.RGB, Y.UNSIGNED_BYTE, j),
            Q
        },
        tg = function(d) {
            d._26I && d._prg && (d._26I.deleteProgram(d._prg), d._prg = F)
        },
        Gd = function(c, h, j, N) {
            var v = c.createShader(j);
            return c.shaderSource(v, N),
            c.compileShader(v),
            c.attachShader(h, v),
            v
        },
        nd = function(Y) {
            return Y.createBuffer()
        },
        Gh = function(o, Z) {
            o.bindTexture(o.TEXTURE_2D, Z)
        },
        Wq = function(d, X) {
            d.bindFramebuffer(d.FRAMEBUFFER, X)
        },
        qo = function(K, S, G) {
            K.texParameteri(K.TEXTURE_2D, S, G)
        },
        Tj = function(w, G) {
            if (G) {
                var G = sj(G);
                w.clearColor(G[0], G[1], G[2], G[3])
            }
        },
        gs = function(y, L) {
            Cc(y, L.uFix, !0),
            Eh(y, L.aNormal)
        },
        fl = function(D, s) {
            Cc(D, s.uFix, !1),
            Io(D, s.aNormal)
        },
        Hi = function(N, D, c, i, j, J, E, M) {
            N._picking || (c ? (Cc(N, D.uBlend, !0), Cc(N, D.uBlendColor, c)) : Cc(N, D.uBlend, !1), Cc(N, D.uLight, i == F ? !0 : i), ye(j) && 1 !== j && Cc(N, D.uPartOpacity, j), Cc(N, D.uReverseFlip, J == F ? !1 : J), Cc(N, D.uFixPickReverseColor, E || zc)),
            M ? N.enable(N.CULL_FACE) : N.disable(N.CULL_FACE)
        },
        Rk = function(o, x) {
            o._picking || Cc(o, x.uPartOpacity, 1)
        },
        _b = function(x, q, Y, R, c, r, T, o) {
            if (!Y) return Gh(x, x._emptyTexture),
            void 0;
            Cc(x, q.uTexture, !0),
            Cc(x, q.uDiscardSelectable, Xq(R) ? R: !0),
            Io(x, q.aUv),
            Zb(x, c, r, q.aUv, 2),
            x.activeTexture(x.TEXTURE0),
            Gh(x, Y),
            x.uniform1i(q.uSampler, 0);
            var K = [0, 0, 1, 1];
            T && (K[0] = T[0], K[1] = T[1]),
            o && (K[2] = o[0], K[3] = o[1]),
            Cc(x, q.uOffsetScale, K)
        },
        af = function(m, M, Y) {
            Gh(m, F),
            Y && (Eh(m, M.aUv), Cc(m, M.uTexture, !1))
        },
        ab = function(r, V, x, e, q, K) { ! x || H || U || r.lineWidth(x),
            e && !r._picking && Cc(r, V.uFixPickReverseColor, e),
            q && Zb(r, q, K, V.aPosition)
        },
        Np = function(o, T, M, X) {
            Zi && (X = o[Zi]),
            o.drawArrays(X == F ? o.TRIANGLES: X, T, M)
        },
        Kb = function(W, D, L, y) {
            Zi && (y = W[Zi]),
            W.drawElements(y == F ? W.TRIANGLES: y, L, W.UNSIGNED_SHORT, D == F ? 0 : 2 * D)
        },
        Zb = function(l, j, i, T, G) {
            var D = l.ARRAY_BUFFER;
            l.bindBuffer(D, j),
            i && l.bufferData(D, i, l.STATIC_DRAW),
            T != F && l.vertexAttribPointer(T, G ? G: 3, l.FLOAT, !1, 0, 0)
        },
        Cn = function(h, y, q) {
            var D = h.ELEMENT_ARRAY_BUFFER;
            h.bindBuffer(D, y),
            q && h.bufferData(D, q, h.STATIC_DRAW)
        },
        Cc = function(Q, $, x) {
            if (x != F && $ != F) {
                x = sj(x);
                var s = x.length;
                3 === s ? Q.uniform3fv($, x) : 4 === s ? Q.uniform4fv($, x) : 16 === s ? Q.uniformMatrix4fv($, !1, x) : Xq(x) ? Q.uniform1i($, x ? 1 : 0) : 2 === s ? Q.uniform2fv($, x) : Q.uniform1f($, x)
            }
        },
        Io = function(y, j) {
            j != F && j >= 0 && y.enableVertexAttribArray(j)
        },
        Eh = function(L, W) {
            W != F && W >= 0 && L.disableVertexAttribArray(W)
        },
        Ed = function(_, S) {
            var y = _.getGL(),
            Z = _._prg;
            _._7O = _._8O.pop(),
            S && (Cc(y, Z.uMVMatrix, _._7O), _._6O = S, Cc(y, Z.uNMatrix, S))
        },
        Zo = function(c, n) {
            return n || (n = Vi()),
            oh(n, c),
            kk(n),
            qn(n),
            n
        },
        Jg = function(I, O) {
            var j = I.getGL(),
            _ = I._prg,
            k = I._7O;
            O && (I._8O.push(_m(k)), jq(k, k, O)),
            Cc(j, _.uMVMatrix, k),
            Cc(j, _.uNMatrix, Zo(k, I._6O))
        },
        ki = function(D, B, F, u, g, l) {
            if (F) {
                if (u) {
                    var s = F.value++,
                    b = [(255 & s >> 24) / 255, (255 & s >> 16) / 255, (255 & s >> 8) / 255, (255 & s) / 255];
                    F[s] = {
                        data: g,
                        part: l
                    }
                } else b = wi;
                return Cc(D, B.uFixPickReverseColor, b),
                b
            }
        },
        yr = function() {
            var X = {
                center: function(A, q, $, i, G) {
                    var b = q[1] / 2,
                    E = {
                        x: -q[0] / 2,
                        y: b,
                        width: q[0],
                        height: q[1]
                    },
                    t = jc(A, E, $);
                    return [t.x + i, 2 * b - t.y - G, em()]
                },
                front: function(P, n, z, E, y) {
                    var S = n[1] / 2,
                    e = {
                        x: -n[0] / 2,
                        y: S,
                        width: n[0],
                        height: n[1]
                    },
                    p = jc(P, e, z);
                    return [p.x + E, 2 * S - p.y - y, n[2] / 2 + em()]
                },
                back: function(s, H, Y, v, r) {
                    var y = H[0] / 2,
                    B = H[1] / 2,
                    C = {
                        x: y,
                        y: B,
                        width: H[0],
                        height: H[1]
                    },
                    j = jc(s, C, Y);
                    return [2 * y - j.x - v, 2 * B - j.y - r, -H[2] / 2 - em()]
                },
                left: function(H, l, X, z, y) {
                    var Z = l[1] / 2,
                    w = {
                        x: -l[2] / 2,
                        y: Z,
                        width: l[2],
                        height: l[1]
                    },
                    O = jc(H, w, X);
                    return [ - l[0] / 2 - em(), 2 * Z - O.y - y, O.x + z]
                },
                right: function(F, j, M, y, n) {
                    var U = j[2] / 2,
                    i = j[1] / 2,
                    v = {
                        x: U,
                        y: i,
                        width: j[2],
                        height: j[1]
                    },
                    R = jc(F, v, M);
                    return [j[0] / 2 + em(), 2 * i - R.y - n, 2 * U - R.x - y]
                },
                top: function(k, j, B, p, D) {
                    var H = {
                        x: -j[0] / 2,
                        y: -j[2] / 2,
                        width: j[0],
                        height: j[2]
                    },
                    Y = jc(k, H, B);
                    return [Y.x + p, j[1] / 2 + em(), Y.y + D]
                },
                bottom: function(j, d, E, _, z) {
                    var p = d[2] / 2,
                    U = {
                        x: -d[0] / 2,
                        y: p,
                        width: d[0],
                        height: d[2]
                    },
                    F = jc(j, U, E);
                    return [F.x + _, -d[1] / 2 - em(), 2 * p - F.y - z]
                }
            };
            return function(A, B, U, O, k, I) {
                return X[O](A, B, U, k || 0, I || 0)
            }
        } (),
        Nj = function(u, g, Q, w, $, o, n, l, B, d) {
            if ($ && (g[0] += $[0], g[1] += $[1], g[2] += $[2]), rc(u, Q), l) {
                var K = Vi();
                if (Bh(K, B, d), Uo(g, K), rc(u, g), u.auto = l, u.pos = Uo([0, 0, 0], u), o) {
                    var r = u.mat2 = Vi();
                    Bh(r, o, n)
                }
            } else Bh(u, B, d),
            rc(u, g),
            w === Tb ? Dd(u, -S) : w === um ? Dd(u, S) : w === aq ? Bq(u, -S) : w === Gg ? Bq(u, S) : w === $m && Dd(u, y),
            Bh(u, o, n);
            return u
        },
        xk = function(d, U) {
            var R = U.auto,
            Y = U.mat2,
            k = d.gv;
            if (R) {
                var x, E = Vi(),
                w = [0, 0, 0, 0];
                x = "string" == typeof R ? [R.indexOf("x") < 0 ? k._eye[0] : k._center[0], R.indexOf("y") < 0 ? k._eye[1] : k._center[1], R.indexOf("z") < 0 ? k._eye[2] : k._center[2]] : k._eye,
                pk(w, vf(Vi(), x, k._center, k._up)),
                up(E, Hm(w, w), U.pos),
                Y && jq(E, E, Y),
                Jg(k, E)
            } else Jg(k, U)
        },
        np = function(k, F, z, W, T) {
            var Z = k.s,
            q = k.gv,
            i = q.getGL(),
            O = q._prg,
            M = q._buffer,
            y = q._1O;
            Mk(i, Sc, y),
            xk(k, z),
            Hi(i, O, Z(F + ".blend"), Z(F + ".light"), Z(F + ".opacity"), Z(F + ".reverse.flip"), Z(F + ".reverse.color"), Z(F + ".reverse.cull")),
            _b(i, O, y, T, M.uv, gj),
            Zb(i, M.vs, W, O.aPosition),
            Zb(i, M.ns, Bj, O.aNormal),
            Cn(i, M.is, Gn),
            Kb(i, 0, Gn.length),
            af(i, O, y),
            Rk(i, O),
            Ed(q)
        },
        cn = function(s, v, T) {
            var r = s.gv,
            J = s.data,
            l = s[v] = {
                blend: r.getBodyColor(J) || r.getFaceBlend(J, v),
                light: r.getFaceLight(J, v),
                color: r.getFaceColor(J, v),
                opacity: r.getFaceOpacity(J, v),
                transparent: r.getFaceTransparent(J, v),
                reverseFlip: r.getFaceReverseFlip(J, v),
                reverseColor: r.getFaceReverseColor(J, v),
                reverseCull: r.getFaceReverseCull(J, v),
                texture: r.getFaceImage(J, v),
                discardSelectable: r.getFaceDiscardSelectable(J, v)
            };
            if ("csg" !== v) {
                l.uv = r.getFaceUv(J, v) || T && T[v + "Uv"],
                l.uvScale = r.getFaceUvScale(J, v) || T && T[v + "UvScale"],
                l.uvOffset = r.getFaceUvOffset(J, v) || T && T[v + "UvOffset"];
                var I = r.getFaceMat(J, v);
                I && (l.mat = vb(J, I))
            }
            return l
        },
        Nr = function(L, J, r, X, Y) {
            if (X) {
                if (!Y(X.transparent)) return;
                var q = L.data,
                C = L.gv,
                A = C._buffer,
                v = C.getTexture(X.texture, q);
                _b(J, r, v, X.discardSelectable, A.uv, X.tuv, X.uvOffset, X.uvScale),
                Hi(J, r, X.blend, X.light, X.opacity, X.reverseFlip, X.reverseColor, X.reverseCull),
                Cc(J, r.uDiffuse, X.color),
                Zb(J, A.vs, X.vs, r.aPosition),
                Zb(J, A.ns, X.ns, r.aNormal),
                Np(J, 0, X.vs.length / 3),
                Rk(J, r),
                af(J, r, v)
            }
        },
        fn = function(S, J, h, m, k, M) {
            var Y, T, E, C, g, d, O, t, c, X, B, N = [m - J, k - h],
            x = S ? S.length: 0;
            for (E = 0; x > E; E++) {
                for (C = 2, Y = S[E], g = Y[0], d = Y[1]; C + 1 < Y.length;) {
                    if (O = Y[C], t = Y[C + 1], T = Uq(J, h, m, k, g, d, O, t, !0)) {
                        c = [O - g, t - d],
                        X = ep(c),
                        c[0] /= X,
                        c[1] /= X,
                        X = Xd(N, c),
                        X = X > 0 ? M: -M,
                        B = [c[0] * X, c[1] * X];
                        break
                    }
                    g = O,
                    d = t,
                    C += 2
                }
                if (B) break
            }
            if (B) for (m = J + B[0], k = h + B[1], E = 0; x > E; E++) for (C = 2, Y = S[E], g = Y[0], d = Y[1]; C + 1 < Y.length;) {
                if (O = Y[C], t = Y[C + 1], T = Uq(J, h, m, k, g, d, O, t, !0)) return [0, 0];
                g = O,
                d = t,
                C += 2
            }
            return B ? B: [m - J, k - h]
        },
        zb = Y.graph3d = {},
        Dm = function(f, d, x) {
            eg(K + ".graph3d." + f, d, x)
        },
        Di = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
        zj = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        vc(C, {
            setBatchInfo: function(J, b) {
                iq[J] = b
            },
            getBatchInfo: function(C) {
                return iq[C]
            }
        },
        !0);
        var On = [1, 1, 1],
        bi = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
        Uh = [ - .5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
        zo = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
        Rm = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
        Km = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
        Vd = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
        vn = [ - .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
        ph = function(O, H) {
            ek(O, H),
            ro(O, H, "_wireframeModelMap", "_wireframeIndexMap"),
            ro(O, H, "_polylineModelMap", "_polylineIndexMap")
        },
        ek = function(B, d) {
            if (d) {
                var l, e, C = d._id,
                T = B._33O,
                j = B._34O,
                K = j[C];
                if (K) {
                    e = K.batch,
                    l = T[e];
                    var S = K.begin,
                    b = K.size,
                    t = 3 * S,
                    U = 3 * b,
                    F = 4 * S,
                    n = 4 * b,
                    v = l.vs,
                    k = l.uv,
                    D = l.cs,
                    h = l.bs,
                    Q = l.rs,
                    p = l.ds,
                    q = K.index;
                    if (l.invalidate = !0, delete j[C], p.splice(q, 1), Tn(p)) delete T[e];
                    else {
                        for (; q < p.length; q++) K = j[p[q]._id],
                        K.index--,
                        K.begin -= b;
                        v.splice(t, U),
                        l.ns.splice(t, U),
                        l.ps.splice(F, n),
                        k && k.splice(2 * S, 2 * b),
                        D && D.splice(F, n),
                        h && h.splice(t, U),
                        Q && Q.splice(S, b)
                    }
                }
            } else B._34O = {},
            B._33O = {}
        },
        ro = function(I, o, m, F) {
            if (o) {
                var j, T, X = o._id,
                r = I[m],
                f = I[F],
                v = f[X];
                if (v) {
                    T = v.batch,
                    j = r[T];
                    var x = v.begin,
                    w = v.size,
                    q = 3 * x,
                    z = 3 * w,
                    N = 4 * x,
                    M = 4 * w,
                    Q = j.ds,
                    O = v.index;
                    if (j.invalidate = !0, delete f[X], Q.splice(O, 1), Tn(Q)) delete r[T];
                    else {
                        for (; O < Q.length; O++) v = f[Q[O]._id],
                        v.index--,
                        v.begin -= w;
                        j.vs.splice(q, z),
                        j.cs.splice(N, M),
                        j.ps.splice(N, M),
                        j.ls && j.ls.splice(x, w)
                    }
                }
            } else I[m] = {},
            I[F] = {}
        },
        gb = function(D, e, f, z) {
            if (!z) return F;
            var d = e[z];
            if (!d) {
                var l = iq[z] || jj,
                m = l.image ? [] : F;
                d = e[z] = {
                    vs: [],
                    ns: [],
                    uv: m,
                    cs: m ? F: l.color ? F: [],
                    bs: l.blend ? [] : F,
                    ps: [],
                    rs: l.brightness ? [] : F,
                    ds: []
                }
            }
            return d.invalidate = !0,
            D[f._id] = {
                index: d.ds.length,
                begin: d.vs.length / 3,
                batch: z
            },
            d.ds.push(f),
            d
        },
        kr = function(R, p) {
            return p != F && 1 !== p ? [R[0] * p, R[1] * p, R[2] * p, R[3]] : R
        },
        zn = function(v, r, H) {
            var C = v.getBrightness(r),
            I = sj(H.color || "white"),
            d = I[3] < 1,
            h = Math.ceil(H.width) || 1,
            D = (d ? "T": "O") + h,
            m = v._wireframeIndexMap,
            Z = v._wireframeModelMap,
            i = Z[D];
            i || (i = Z[D] = {
                vs: [],
                cs: [],
                ps: [],
                ds: [],
                T: d,
                W: h
            }),
            i.invalidate = !0;
            var t = i.vs,
            n = i.cs,
            V = i.ds,
            y = m[r._id] = {
                index: V.length,
                begin: t.length / 3,
                batch: D
            };
            V.push(r),
            uc(t, vb(r, H.mat), H.short ? Pr: Do);
            var E = y.size = t.length / 3 - y.begin;
            jn(n, kr(I, C), E)
        },
        Jq = function(e, W, m, Y, o, S, M, z, D) {
            var s = e.getBrightness(W);
            s == F && (s = 1);
            var c = kr(sj(Y), s),
            $ = c[3] < 1;
            S = Math.ceil(S) || 1;
            var Z = ($ ? "T": "O") + S;
            if (M) {
                var x = M[0],
                I = (M[1] || x) + x;
                Z += "-" + x + "-" + I,
                D && (Z += "-" + cd(D) + "-" + s, D = kr(sj(D), s))
            }
            var J = e._polylineIndexMap,
            X = e._polylineModelMap,
            u = X[Z];
            u || (u = X[Z] = {
                vs: [],
                cs: [],
                ps: [],
                ds: [],
                ls: M ? [] : F,
                T: $,
                W: S
            },
            M && (u.D = x, u.G = I, u.A = D)),
            u.invalidate = !0;
            var Q, g = u.vs,
            B = u.cs,
            E = u.ds,
            H = u.ls,
            C = J[W._id] = {
                index: E.length,
                begin: g.length / 3,
                batch: Z
            };
            E.push(W),
            qk(g, m);
            var V, k = C.size = g.length / 3 - C.begin,
            U = m.length,
            l = 0,
            _ = [];
            if (M || o) for (Q = 0; U > Q; Q += 6) V = ep([m[Q], m[Q + 1], m[Q + 2]], [m[Q + 3], m[Q + 4], m[Q + 5]]),
            _.push(V),
            l += V;
            if (l && o) {
                var P, w = kr(sj(o), s),
                R = [w[0] - c[0], w[1] - c[1], w[2] - c[2], w[3] - c[3]],
                L = 0;
                for (Q = 0; U > Q; Q += 6) P = L / l,
                jn(B, [c[0] + R[0] * P, c[1] + R[1] * P, c[2] + R[2] * P, c[3] + R[3] * P], 1),
                L += _[Q / 6],
                P = L / l,
                jn(B, [c[0] + R[0] * P, c[1] + R[1] * P, c[2] + R[2] * P, c[3] + R[3] * P], 1)
            } else jn(B, c, k);
            if (M) for (L = z || 0, Q = 0; U > Q; Q += 6) H.push(L),
            L += _[Q / 6],
            H.push(L)
        },
        Sr = function(x, J, C) {
            if (J) for (var Q = 4 * J.begin,
            v = C[J.batch].ps, L = 0; L < J.size; L++) v[Q++] = x[0],
            v[Q++] = x[1],
            v[Q++] = x[2],
            v[Q++] = x[3]
        },
        wd = function(V, d) {
            var z = d + ["32"],
            l = V[d],
            P = V[z];
            l ? P && P.length === l.length ? P.set(l) : V[z] = new zl(l) : delete V[z]
        },
        jr = function(l, N, D, y, L, J, b, p, i) {
            if (eb(D)) D.forEach(function(K) {
                jr(l, N, K, y, L, J, b, p, i)
            });
            else if (Cl(D)) jr(l, N, Pk(y, D), y, L, J, b, p, i);
            else if (_l(D)) {
                var j, I = dj(D.mat, N, l),
                a = dj(D.s3, N, l),
                Q = dj(D.t3, N, l),
                n = dj(D.r3, N, l);
                if ((a || n || Q || I) && (j = Bg(I, a, n, dj(D.rotationMode, N, l), Q), J.push(j)), D.shape3d) jr(l, N, D.shape3d, y, L, J, b, p, D);
                else {
                    var z = y.s;
                    i = i || jj;
                    var E = J[0],
                    d = J.length,
                    C = z("shape3d.color", D.color, i.color);
                    if (L || (L = z("shape3d.blend", D.blend, i.blend)), d > 1) {
                        E = _m(E);
                        for (var F = 1; d > F; F++) jq(E, E, J[F])
                    }
                    D.vs && z(_e, D.visible, i.visible) && $r(E, b, p, D.vs, D.uv, D.is, L, C),
                    D.top_vs && z(Sm, D.topVisible, i.topVisible) && $r(E, b, p, D.top_vs, D.top_uv, D.top_is, L, z("shape3d.top.color", D.topColor, i.topColor) || C),
                    D.bottom_vs && z(Ap, D.bottomVisible, i.bottomVisible) && $r(E, b, p, D.bottom_vs, D.bottom_uv, D.bottom_is, L, z("shape3d.bottom.color", D.bottomColor, i.bottomColor) || C),
                    D.from_vs && z(id, D.fromVisible, i.fromVisible) && $r(E, b, p, D.from_vs, D.from_uv, D.from_is, L, z("shape3d.from.color", D.fromColor, i.fromColor) || C),
                    D.to_vs && z(Cd, D.toVisible, i.toVisible) && $r(E, b, p, D.to_vs, D.to_uv, D.to_is, L, z("shape3d.to.color", D.toColor, i.toColor) || C)
                }
                j && J.pop()
            }
        },
        $r = function(V, s, A, y, v, S, Y, F) {
            var Z, w = s.cs,
            o = s.uv,
            N = s.bs;
            if (S) {
                Z = S.length;
                for (var P = 0; Z > P; P++) {
                    var C = S[P];
                    uc(A, V, [y[3 * C], y[3 * C + 1], y[3 * C + 2]]),
                    o && qk(o, [v[2 * C], v[2 * C + 1]])
                }
            } else Z = y.length / 3,
            uc(A, V, y),
            o && qk(o, v);
            w && jn(w, F, Z),
            N && (Y ? Tf(N, Y, Z) : qk(N, On, Z))
        },
        Oh = function(U, c, j, I) {
            var L = [];
            I ? jr(U.gv, U.data, I, U, U.getBodyColor(), [c], j, L) : (pd(U, Tb, c, j, L), pd(U, um, c, j, L), pd(U, ps, c, j, L), pd(U, $m, c, j, L), pd(U, aq, c, j, L), pd(U, Gg, c, j, L), pd(U, "csg", c, j, L)),
            L.length && (qk(j.vs, L), qk(j.ns, wk(L)))
        },
        pd = function(z, y, G, U, X) {
            var H = z[y];
            if (H) {
                var D = H.tuv;
                if (D) {
                    var L, P, R, t, I = H.uvScale,
                    Y = H.uvOffset;
                    if (I) for (L = D.length, P = I[0], R = I[1], t = 0; L > t; t += 2) D[t] *= P,
                    D[t + 1] *= R;
                    if (Y) for (L = D.length, P = Y[0], R = Y[1], t = 0; L > t; t += 2) D[t] += P,
                    D[t + 1] += R
                }
                $r(G, U, X, H.vs, D, F, H.blend, H.color)
            }
        },
        fm = function(v, p, x, z, t, B, H, U) {
            var f, d = x.cs,
            s = x.uv,
            c = x.bs;
            if (v.getFaceVisible(p, B)) {
                var g = v.getFaceMat(p, B);
                if (g && (t = vb(p, g)), uc(H, t, U), d && jn(d, v.getFaceColor(p, B), 6), s) {
                    var G = v.getFaceUv(p, B) || z[B + "Uv"],
                    N = v.getFaceUvScale(p, B) || z[B + "UvScale"],
                    m = v.getFaceUvOffset(p, B) || z[B + "UvOffset"];
                    G = G ? [G[6], G[7], G[0], G[1], G[2], G[3], G[2], G[3], G[4], G[5], G[6], G[7]] : bi;
                    var Y = G[0],
                    e = G[1],
                    S = G[2],
                    j = G[3],
                    F = G[4],
                    M = G[5],
                    w = G[6],
                    A = G[7],
                    h = G[8],
                    R = G[9],
                    a = G[10],
                    L = G[11];
                    if (N) {
                        var J = N[0],
                        D = N[1];
                        Y *= J,
                        e *= D,
                        S *= J,
                        j *= D,
                        F *= J,
                        M *= D,
                        w *= J,
                        A *= D,
                        h *= J,
                        R *= D,
                        a *= J,
                        L *= D
                    }
                    if (m) {
                        var i = m[0],
                        q = m[1];
                        Y += i,
                        e += q,
                        S += i,
                        j += q,
                        F += i,
                        M += q,
                        w += i,
                        A += q,
                        h += i,
                        R += q,
                        a += i,
                        L += q
                    }
                    s.push(Y, e, S, j, F, M, w, A, h, R, a, L)
                }
                c && (f = v.getBodyColor(p) || v.getFaceBlend(p, B), f ? Tf(c, f, 6) : qk(c, On, 6))
            }
        },
        Vc = function(x, $, I, E) {
            var q = x.getGL(),
            J = x._prg,
            n = x._buffer;
            if (!Sk($)) {
                Jg(x),
                gs(q, J);
                for (var u in $) {
                    var O = $[u];
                    if (! (E && !O.T || !E && O.T)) {
                        O.invalidate ? (O.invalidate = !1, wd(O, "vs"), wd(O, "cs"), wd(O, "ls"), wd(O, "ps")) : I && wd(O, "ps");
                        var M = O.vs32,
                        j = I ? O.ps32: O.cs32;
                        ab(q, J, O.W, F, n.vs, M);
                        var l = O.D,
                        f = !x._dashDisabled && l;
                        f && (Cc(q, J.uDash, !0), Cc(q, J.uDashDistance, l), Cc(q, J.uDashGapDistance, O.G), Io(q, J.aLineDistance), Zb(q, n.lineDistance, O.ls32, J.aLineDistance, 1), Cc(q, J.uDiffuse, O.A || jh));
                        var w = !x._batchColorDisabled;
                        w && (Cc(q, J.uBatchColor, !0), Io(q, J.aBatchColor), Zb(q, n.batchColor, j, J.aBatchColor, 4)),
                        _b(q),
                        Np(q, 0, M.length / 3, q.LINES),
                        af(q),
                        w && (Cc(q, J.uBatchColor, !1), Eh(q, J.aBatchColor)),
                        f && (Cc(q, J.uDash, !1), Eh(q, J.aLineDistance))
                    }
                }
                fl(q, J)
            }
        },
        ec = function(A, Q, E) {
            var $, H, N, m, q, v, O, D, x, p, K, R = A.getGL(),
            w = A._prg,
            u = A._buffer,
            S = A._33O;
            if (!Sk(S)) {
                Jg(A);
                for ($ in S) if (H = iq[$] || jj, !(E && !H.transparent || !E && H.transparent) && (N = S[$], Q || !H.transparentMask)) {
                    var X = E && H.autoSort !== !1 && (A._33Q || N.invalidate);
                    if (N.invalidate ? (N.invalidate = !1, wd(N, "vs"), wd(N, "ns"), wd(N, "cs"), wd(N, "rs"), wd(N, "ps"), wd(N, "bs"), wd(N, "uv")) : Q && wd(N, "ps"), q = N.vs32, v = Q ? N.ps32: N.cs32, x = N.uv32, O = N.bs32, D = N.rs32, K = q.length / 3, X && (N.is = li(q, A.getEye())), K) {
                        m = H.light,
                        p = A.getTexture(H.image),
                        Hi(R, w, F, H.light, H.opacity, H.reverseFlip, H.reverseColor, H.reverseCull),
                        v ? A._batchColorDisabled || (Cc(R, w.uBatchColor, !0), Io(R, w.aBatchColor), Zb(R, u.batchColor, v, w.aBatchColor, 4)) : Cc(R, w.uDiffuse, H.color);
                        var f = O && !A._batchBlendDisabled;
                        f && (Cc(R, w.uBatchBlend, !0), Io(R, w.aBatchBlend), Zb(R, u.batchBlend, O, w.aBatchBlend));
                        var i = D && !A._batchBrightnessDisabled;
                        i && (Cc(R, w.uBatchBrightness, !0), Io(R, w.aBatchBrightness), Zb(R, u.batchBrightness, D, w.aBatchBrightness, 1)),
                        x ? _b(R, w, p, H.discardSelectable, u.uv, x, H.uvOffset, H.uvScale) : _b(R),
                        Zb(R, u.vs, q, w.aPosition),
                        Zb(R, u.ns, N.ns32, w.aNormal),
                        N.is ? (Cn(R, u.is, N.is), Kb(R, 0, K)) : Np(R, 0, K),
                        x ? af(R, w, p) : af(R),
                        v && !A._batchColorDisabled && (Cc(R, w.uBatchColor, !1), Eh(R, w.aBatchColor)),
                        f && (Cc(R, w.uBatchBlend, !1), Eh(R, w.aBatchBlend)),
                        i && (Cc(R, w.uBatchBrightness, !1), Eh(R, w.aBatchBrightness)),
                        Rk(R, w)
                    }
                }
            }
        },
        li = function(f, G) {
            for (var S = f.length / 3,
            w = new Array(S), u = S / 3, K = new Array(u), s = 0; u > s; s++) K[s] = s;
            K.sort(function(A, R) {
                var c = 9 * A,
                a = [(f[c] + f[c + 3] + 2 * f[c + 6]) / 4, (f[c + 1] + f[c + 4] + 2 * f[c + 7]) / 4, (f[c + 2] + f[c + 5] + 2 * f[c + 8]) / 4];
                c = 9 * R;
                var W = [(f[c] + f[c + 3] + 2 * f[c + 6]) / 4, (f[c + 1] + f[c + 4] + 2 * f[c + 7]) / 4, (f[c + 2] + f[c + 5] + 2 * f[c + 8]) / 4],
                g = ep(G, a) - ep(G, W);
                return g > 0 ? -1 : 0 > g ? 1 : 0
            });
            for (var s = 0; u > s; s++) {
                var x = 3 * s,
                r = 3 * K[s];
                w[x] = r,
                w[x + 1] = r + 1,
                w[x + 2] = r + 2
            }
            return new Kn(w)
        },
        gj = new zl([0, 0, 0, 1, 1, 1, 1, 0]),
        Bj = new zl([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
        Gn = new Kn([0, 1, 2, 2, 3, 0]),
        wo = new zl([ - .5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
        Rb = new Kn([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
        dm = new zl([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
        bb = new zl([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
        xp = wk(wo, Rb),
        Do = (new zl([ - .5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new Kn([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [ - .5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
        Pr = [ - .5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
        qm = function(G, V, L, N, p, D) {
            D = D || 16,
            G = G || 16,
            V = V || 0,
            L = L || G;
            var H, v, a, S, r, Y, o, j, B = .5,
            C = [],
            K = [],
            w = X / G,
            f = y / D;
            for (H = 0; D > H; H++) for (r = H + 1, S = H * f, j = r * f, v = V; L > v; v++) Y = v + 1,
            a = v * w,
            o = Y * w,
            C.push(B * g(S) * i(a), B * i(S), -B * g(S) * g(a), B * g(j) * i(o), B * i(j), -B * g(j) * g(o), B * g(S) * i(o), B * i(S), -B * g(S) * g(o), B * g(S) * i(a), B * i(S), -B * g(S) * g(a), B * g(j) * i(a), B * i(j), -B * g(j) * g(a), B * g(j) * i(o), B * i(j), -B * g(j) * g(o)),
            K.push(v / G, H / D, Y / G, r / D, Y / G, H / D, v / G, H / D, v / G, r / D, Y / G, r / D);
            if (N) {
                var h = [],
                s = [];
                for (a = V * w, H = 0; D > H; H++) r = H + 1,
                S = H * f,
                j = r * f,
                h.push(0, 0, 0, B * g(j) * i(a), B * i(j), -B * g(j) * g(a), B * g(S) * i(a), B * i(S), -B * g(S) * g(a)),
                s.push(0, .5, V / G, r / D, V / G, H / D)
            }
            if (p) {
                var R = [],
                P = [];
                for (a = L * w, H = 0; D > H; H++) r = H + 1,
                S = H * f,
                j = r * f,
                R.push(0, 0, 0, B * g(S) * i(a), B * i(S), -B * g(S) * g(a), B * g(j) * i(a), B * i(j), -B * g(j) * g(a)),
                P.push(1, .5, L / G, H / D, L / G, r / D)
            }
            return {
                vs: C,
                uv: K,
                from_vs: h,
                from_uv: s,
                to_vs: R,
                to_uv: P
            }
        },
        $j = function(B, x, V) {
            B = B || .17,
            x = x || 12,
            V = V || 18,
            0 > B ? B = 0 : B > .25 && (B = .25);
            var $, Z, a, l, d, H, W, k = .5,
            N = [],
            h = [],
            L = [],
            A = X / V,
            P = X / x,
            z = k - B;
            for (Z = 0; x >= Z; Z++) for (l = -y + Z * P, H = i(l), d = g(l), $ = 0; V >= $; $++) a = $ * A,
            W = z + B * H,
            N.push(i(a) * W, d * B, -g(a) * W),
            h.push($ / V, 1 - Z / x);
            for (Z = 0; x > Z; Z++) {
                var D = Z * (V + 1),
                F = (Z + 1) * (V + 1);
                for ($ = 0; V > $; $++) L.push(D + $, F + $ + 1, F + $, D + $, D + $ + 1, F + $ + 1)
            }
            return {
                vs: N,
                uv: h,
                is: L
            }
        },
        Lp = function(t, l, V, E, Y, U, O) {
            O = O || 12,
            t = t || 18,
            l = l || 0,
            V = V || t,
            U = U || .17,
            0 > U ? U = 0 : U > .25 && (U = .25);
            var P, b, I, h, o, A, k, s, v, L, m = .5,
            H = [],
            F = [],
            S = X / t,
            x = X / O,
            B = m - U;
            for (I = 0; O > I; I++) for (h = I + 1, k = -y + I * x, s = -y + h * x, P = l; V > P; P++) b = P + 1,
            o = P * S,
            A = b * S,
            v = B + U * i(k),
            L = B + U * i(s),
            H.push(i(o) * v, g(k) * U, -g(o) * v, i(A) * v, g(k) * U, -g(A) * v, i(A) * L, g(s) * U, -g(A) * L, i(o) * v, g(k) * U, -g(o) * v, i(A) * L, g(s) * U, -g(A) * L, i(o) * L, g(s) * U, -g(o) * L),
            F.push(P / t, 1 - I / O, b / t, 1 - I / O, b / t, 1 - h / O, P / t, 1 - I / O, b / t, 1 - h / O, P / t, 1 - h / O);
            if (E) {
                var W = [],
                N = [];
                for (I = 0; O > I; I++) h = I + 1,
                k = -y + I * x,
                s = -y + h * x,
                o = l * S,
                v = B + U * i(k),
                L = B + U * i(s),
                W.push(i(o) * v, g(k) * U, -g(o) * v, i(o) * L, g(s) * U, -g(o) * L, i(o) * B, 0, -g(o) * B),
                N.push(.5 + .5 * i(k), .5 - .5 * g(k), .5 + .5 * i(s), .5 - .5 * g(s), .5, .5)
            }
            if (Y) {
                var G = [],
                u = [];
                for (I = 0; O > I; I++) h = I + 1,
                k = -y + I * x,
                s = -y + h * x,
                o = V * S,
                v = B + U * i(k),
                L = B + U * i(s),
                G.push(i(o) * v, g(k) * U, -g(o) * v, i(o) * B, 0, -g(o) * B, i(o) * L, g(s) * U, -g(o) * L),
                u.push(.5 - .5 * i(k), .5 - .5 * g(k), .5, .5, .5 - .5 * i(s), .5 - .5 * g(s))
            }
            return {
                vs: H,
                uv: F,
                from_vs: W,
                from_uv: N,
                to_vs: G,
                to_uv: u
            }
        },
        yp = function(H, Y) {
            for (var a, $, _, K = .5,
            o = 16,
            U = [], O = [], f = [], L = X / o, G = 0; o >= G; G++) a = G * L,
            $ = i(a) * K,
            _ = g(a) * K,
            U.push($, -K, _, $, K, _),
            O.push(1 - G / o, 1, 1 - G / o, 0);
            for (G = 0; o > G; G++) f.push(2 * G, 2 * G + 1, 2 * G + 3, 2 * G, 2 * G + 3, 2 * G + 2);
            if (Y) {
                var q = [],
                R = [],
                m = [];
                for (q.push(0, -K, 0), R.push(.5, .5), G = 0; o >= G; G++) a = G * L,
                $ = i(a),
                _ = g(a),
                q.push($ * K, -K, -_ * K),
                R.push(.5 + .5 * $, .5 + .5 * _);
                for (G = 0; o > G; G++) m.push(0, G + 2, G + 1)
            }
            if (H) {
                var j = [],
                r = [],
                k = [];
                for (j.push(0, K, 0), r.push(.5, .5), G = 0; o >= G; G++) a = G * L,
                $ = i(a),
                _ = g(a),
                j.push($ * K, K, -_ * K),
                r.push(.5 + .5 * $, .5 - .5 * _);
                for (G = 0; o > G; G++) k.push(0, G + 1, G + 2)
            }
            return {
                vs: U,
                uv: O,
                is: f,
                bottom_vs: q,
                bottom_uv: R,
                bottom_is: m,
                top_vs: j,
                top_uv: r,
                top_is: k
            }
        },
        Nk = function(V, M, K, z, G, J, L) {
            V = V || 12,
            M = M || 0,
            K = K || V;
            for (var P, _, O, h, Z, l, W, s, c = .5,
            t = [], S = [], A = X / V, u = M; K > u; u++) P = u + 1,
            _ = u * A,
            O = P * A,
            h = i(_) * c,
            Z = g(_) * c,
            l = i(O) * c,
            W = g(O) * c,
            t.push(h, -c, -Z, l, -c, -W, h, c, -Z, l, -c, -W, l, c, -W, h, c, -Z),
            S.push(u / V, 1, P / V, 1, u / V, 0, P / V, 1, P / V, 0, u / V, 0);
            if (L) {
                var a = [],
                I = [];
                for (u = M; K > u; u++) _ = A * u,
                O = A * (u + 1),
                h = i(_),
                Z = g(_),
                l = i(O),
                W = g(O),
                a.push(h * c, -c, -Z * c, 0, -c, 0, l * c, -c, -W * c),
                I.push(.5 + .5 * h, .5 + .5 * Z, .5, .5, .5 + .5 * l, .5 + .5 * W)
            }
            if (J) {
                var R = [],
                E = [];
                for (u = M; K > u; u++) _ = A * u,
                O = A * (u + 1),
                h = i(_),
                Z = g(_),
                l = i(O),
                W = g(O),
                R.push(h * c, c, -Z * c, l * c, c, -W * c, 0, c, 0),
                E.push(.5 + .5 * h, .5 - .5 * Z, .5 + .5 * l, .5 - .5 * W, .5, .5)
            }
            if (z) {
                var f = [],
                q = [];
                _ = A * M,
                h = i(_) * c,
                Z = g(_) * c,
                s = M / V,
                f.push(0, c, 0, 0, -c, 0, h, -c, -Z, h, -c, -Z, h, c, -Z, 0, c, 0),
                q.push(0, 0, 0, 1, s, 1, s, 1, s, 0, 0, 0)
            }
            if (G) {
                var o = [],
                d = [];
                _ = A * K,
                h = i(_) * c,
                Z = g(_) * c,
                s = K / V,
                o.push(0, -c, 0, 0, c, 0, h, c, -Z, h, c, -Z, h, -c, -Z, 0, -c, 0),
                d.push(1, 1, 1, 0, s, 0, s, 0, s, 1, 1, 1)
            }
            return {
                vs: t,
                uv: S,
                bottom_vs: a,
                bottom_uv: I,
                top_vs: R,
                top_uv: E,
                from_vs: f,
                from_uv: q,
                to_vs: o,
                to_uv: d
            }
        },
        Le = function(C, h, s, j, w) {
            h = h || 18,
            s = s || 0,
            j = j == F ? X: j,
            w = w == F ? .5 : w;
            for (var d, v, B, Q, y, Y, l = [0, .5, .75, .875, .9375], E = [], k = [], r = [], m = j / h, c = 0; c < l.length; c++) {
                var b = 0 === c % 2 ? 0 : .5;
                for (d = 0; h >= d; d++) v = (d + b) * m + s,
                B = 1 - l[c],
                E.push(i(v) * w * B, -w + 2 * l[c] * w, -g(v) * w * B),
                k.push((d + b) / h, B)
            }
            for (c = 0; c < l.length - 1; c++) {
                var a = c * (h + 1),
                o = (c + 1) * (h + 1);
                for (d = 0; h > d; d++) r.push(a + d, o + d + 1, o + d, a + d, a + d + 1, o + d + 1)
            }
            for (Y = E.length / 3 - (h + 1), d = 0; h > d; d++) E.push(0, w, 0),
            k.push((d + .5) / h, 0);
            for (d = 0; h > d; d++) r.push(Y + d, Y + d + 1, Y + (h + 1) + d);
            if (C) {
                var D = [],
                x = [],
                U = [];
                for (D.push(0, -w, 0), x.push(.5, .5), d = 0; h >= d; d++) v = d * m + s,
                Q = i(v),
                y = g(v),
                D.push(Q * w, -w, -y * w),
                x.push(.5 + .5 * Q, .5 + .5 * y);
                for (d = 0; h > d; d++) U.push(0, d + 2, d + 1)
            }
            return {
                vs: E,
                uv: k,
                is: r,
                bottom_vs: D,
                bottom_uv: x,
                bottom_is: U
            }
        },
        ko = function(y, Z, B, f, k, e) {
            y = y || 16,
            Z = Z || 0,
            B = B || y;
            for (var W = .5,
            c = [], b = [], s = X / y, O = Z; B > O; O++) {
                var J = O + 1,
                A = s * O,
                K = s * J;
                c.push(i(A) * W, -W, -g(A) * W, i(K) * W, -W, -g(K) * W, 0, W, 0),
                b.push(O / y, 1, J / y, 1, (O + J) / 2 / y, 0)
            }
            if (e) {
                var a = [],
                m = [];
                for (O = Z; B > O; O++) {
                    A = s * O,
                    K = s * (O + 1);
                    var z = i(A),
                    H = g(A),
                    N = i(K),
                    L = g(K);
                    a.push(z * W, -W, -H * W, 0, -W, 0, N * W, -W, -L * W),
                    m.push(.5 + .5 * z, .5 + .5 * H, .5, .5, .5 + .5 * N, .5 + .5 * L)
                }
            }
            if (f) {
                var u = [],
                _ = [];
                A = s * Z,
                u.push(0, W, 0, 0, -W, 0, i(A) * W, -W, -g(A) * W),
                _.push(0, 0, 0, 1, Z / y, 1)
            }
            if (k) {
                var R = [],
                w = [];
                A = s * B,
                R.push(0, -W, 0, 0, W, 0, i(A) * W, -W, -g(A) * W),
                w.push(1, 1, 1, 0, B / y, 1)
            }
            return {
                vs: c,
                uv: b,
                bottom_vs: a,
                bottom_uv: m,
                from_vs: u,
                from_uv: _,
                to_vs: R,
                to_uv: w
            }
        },
        mn = function(Y, s, y, Z, W, P, k, S) {
            for (var E = [], z = 0; z < Y.length - 1; z += 2) E.push({
                x: Y[z],
                y: Y[z + 1]
            });
            return uj(E, s, y, Z, W, P, k, S, !1)
        },
        Tq = {
            roundRect: function(Z, g) {
                return mn([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], Z, g, 3)
            },
            star: function(i, G) {
                return mn([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], i, G)
            },
            rect: function(q, D) {
                return mn([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], q, D)
            },
            triangle: function(D, V) {
                return mn([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], D, V)
            },
            rightTriangle: function(U, e) {
                return mn([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], U, e)
            },
            parallelogram: function(p, k) {
                return mn([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], p, k)
            },
            trapezoid: function(X, e) {
                return mn([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], X, e)
            }
        },
        hq = {
            sphere: 1,
            cylinder: 1,
            cone: 1,
            torus: 1
        },
        op = {
            torus: 1,
            sphere: 1
        },
        _c = vc(qj(Tq), {
            cylinder: 1
        }),
        _k = vc(qj(Tq), {
            cylinder: 1,
            cone: 1
        }),
        vg = function(T, l, u) {
            var D, t = dj(T.mat, u, l),
            R = dj(T.s3, u, l),
            b = dj(T.t3, u, l),
            N = dj(T.r3, u, l);
            return (R || N || b || t) && (D = _m(l._6O), Jg(l, Bg(t, R, N, dj(T.rotationMode, u, l), b))),
            D
        },
        xl = function(U, s, F, Y, c, W, V) {
            if (eb(F)) F.forEach(function($) {
                xl(U, s, $, Y, c, W, V)
            });
            else if (Cl(F)) xl(U, s, Pk(Y, F), Y, c, W, V);
            else if (_l(F)) if (F.shape3d) {
                var R = vg(F, U, s);
                xl(U, s, F.shape3d, Y, c, W, F),
                R && Ed(U, R)
            } else gf(U, s, F, Y.s, c, W, V)
        },
        gf = function(A, T, X, q, N, c, F) {
            if (F = F || jj, !c || c(q("shape3d.transparent", X.transparent, F.transparent))) {
                var n = vg(X, A, T);
                Bc(X);
                var O = A._26I,
                H = A._prg,
                u = A._buffer,
                L = q("shape3d.color", X.color, F.color);
                N || (N = q("shape3d.blend", X.blend, F.blend)),
                Hi(O, H, N, q("shape3d.light", X.light, F.light), q("shape3d.opacity", X.opacity, F.opacity), q("shape3d.reverse.flip", X.reverseFlip, F.reverseFlip), q("shape3d.reverse.color", X.reverseColor, F.reverseColor), q("shape3d.reverse.cull", X.reverseCull, F.reverseCull)),
                X.vs && q(_e, X.visible, F.visible) && Gf(O, H, u, L, A.getTexture(q("shape3d.image", X.image, F.image), T), q("shape3d.discard.selectable", X.discardSelectable, F.discardSelectable), X.vs, X.uv, X.ns, X.is, q("shape3d.uv.offset", X.uvOffset, F.uvOffset), q("shape3d.uv.scale", X.uvScale, F.uvScale)),
                X.top_vs && q(Sm, X.topVisible, F.topVisible) && Gf(O, H, u, q("shape3d.top.color", X.topColor, F.topColor) || L, A.getTexture(q("shape3d.top.image", X.topImage, F.topImage), T), q("shape3d.top.discard.selectable", X.topDiscardSelectable, F.topDiscardSelectable), X.top_vs, X.top_uv, X.top_ns, X.top_is, q("shape3d.top.uv.offset", X.topUvOffset, F.topUvOffset), q("shape3d.top.uv.scale", X.topUvScale, F.topUvScale)),
                X.bottom_vs && q(Ap, X.bottomVisible, F.bottomVisible) && Gf(O, H, u, q("shape3d.bottom.color", X.bottomColor, F.bottomColor) || L, A.getTexture(q("shape3d.bottom.image", X.bottomImage, F.bottomImage), T), q("shape3d.bottom.discard.selectable", X.bottomDiscardSelectable, F.bottomDiscardSelectable), X.bottom_vs, X.bottom_uv, X.bottom_ns, X.bottom_is, q("shape3d.bottom.uv.offset", X.bottomUvOffset, F.bottomUvOffset), q("shape3d.bottom.uv.scale", X.bottomUvScale, F.bottomUvScale)),
                X.from_vs && q(id, X.fromVisible, F.fromVisible) && Gf(O, H, u, q("shape3d.from.color", X.fromColor, F.fromColor) || L, A.getTexture(q("shape3d.from.image", X.fromImage, F.fromImage), T), q("shape3d.from.discard.selectable", X.fromDiscardSelectable, F.fromDiscardSelectable), X.from_vs, X.from_uv, X.from_ns, X.from_is, q("shape3d.from.uv.offset", X.fromUvOffset, F.fromUvOffset), q("shape3d.from.uv.scale", X.fromUvScale, F.fromUvScale)),
                X.to_vs && q(Cd, X.toVisible, F.toVisible) && Gf(O, H, u, q("shape3d.to.color", X.toColor, F.toColor) || L, A.getTexture(q("shape3d.to.image", X.toImage, F.toImage), T), q("shape3d.to.discard.selectable", X.toDiscardSelectable, F.toDiscardSelectable), X.to_vs, X.to_uv, X.to_ns, X.to_is, q("shape3d.to.uv.offset", X.toUvOffset, F.toUvOffset), q("shape3d.to.uv.scale", X.toUvScale, F.toUvScale)),
                Rk(O, H),
                n && Ed(A, n)
            }
        },
        Gf = function(z, H, w, p, n, l, v, I, o, E, t, _) {
            v && (Cc(z, H.uDiffuse, p), I ? _b(z, H, n, l, w.uv, I, t, _) : _b(z), Zb(z, w.vs, v, H.aPosition), Zb(z, w.ns, o, H.aNormal), E ? (Cn(z, w.is, E), Kb(z, 0, E.length)) : Np(z, 0, v.length / 3), I ? af(z, H, n) : af(z))
        },
        Pk = function(g, a) {
            var O = g.s;
            if (a || (a = O(Ce)), !a) return F;
            if (_l(a)) return a;
            var Y = Df[a];
            if (Y) return Y;
            if ("text" === a) {
                var q = {
                    amount: O("shape3d.text.amount"),
                    size: O("shape3d.text.size"),
                    font: O("shape3d.text.font"),
                    style: O("shape3d.text.style"),
                    weight: O("shape3d.text.weight"),
                    fill: O("shape3d.text.fill"),
                    curveSegments: O("shape3d.text.curveSegments"),
                    spacing: O("shape3d.text.spacing")
                },
                E = g.gv.getShape3dText(g.data),
                y = E;
                for (var l in q) y += "_" + (q[l] === V ? "U": q[l]);
                return g._cachedTextKey === y ? g._cachedTextGeometry: (g._cachedTextKey = y, g._cachedTextGeometry = C.createTextGeometry(E, q))
            }
            var l = a;
            if (hq[a]) {
                var c = O("shape3d.side"),
                z = O("shape3d.side.from"),
                Q = O("shape3d.side.to"),
                S = O(id),
                L = O(Cd);
                3 > c ? (c = 0, z = 0, Q = 0, S = !1, L = !1) : ((z == F || 0 > z) && (z = 0), (Q == F || Q > c) && (Q = c), 0 === z && Q === c && (S = !1, L = !1)),
                l += "-" + c + "-" + z + "-" + Q + "-" + S + "-" + L
            }
            if (_c[a]) {
                var J = O(Sm);
                l += "-" + J
            }
            if (_k[a]) {
                var A = O(Ap);
                l += "-" + A
            }
            if ("torus" === a) {
                var I = O("shape3d.torus.radius");
                0 > I ? I = 0 : I > .25 && (I = .25),
                l += "-" + I
            }
            if (op[a]) {
                var e = O(Ie);
                l += "-" + e
            }
            return Y = Ej[l],
            Y || ("box" === a ? Y = C.createBoxModel() : Tq[a] ? Y = Tq[a](J, A) : "sphere" === a ? Y = C.createSphereModel(c, z, Q, S, L, e) : a === fo ? Y = C.createCylinderModel(c, z, Q, S, L, J, A) : "cone" === a ? Y = C.createConeModel(c, z, Q, S, L, A) : "torus" === a && (Y = C.createTorusModel(c, z, Q, S, L, I, e)), Ej[l] = Y),
            Y
        },
        Bc = function() {
            var e = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
            Q = ["is", "top_is", "bottom_is", "from_is", "to_is"];
            return A = Yp(Di.substr(Di.indexOf("^#") + 2)),
            ok(C[sc(Ek + e[15] + "n" + e[16])]()) && gm() ?
            function(X) {
                X && !X._complete_ && (X._complete_ = !0, X.vs && Tn(X.ns) && (X.ns = wk(X.vs, X.is)), X.top_vs && Tn(X.top_ns) && (X.top_ns = wk(X.top_vs, X.top_is)), X.bottom_vs && Tn(X.bottom_ns) && (X.bottom_ns = wk(X.bottom_vs, X.bottom_is)), X.from_vs && Tn(X.from_ns) && (X.from_ns = wk(X.from_vs, X.from_is)), X.to_vs && Tn(X.to_ns) && (X.to_ns = wk(X.to_vs, X.to_is)), e.forEach(function(w) {
                    var R = X[w];
                    eb(R) && (X[w] = new zl(R))
                }), Q.forEach(function(n) {
                    var c = X[n];
                    eb(c) && (X[n] = new Kn(c))
                }))
            }: void 0
        } (),
        mg = function(e, x) {
            var D = e[x];
            eb(D) && (e[x] = new zl(D))
        };
        vc(Yn, {
            _25Q: function(d) {
                d._16O = function(t, F, z, A, Z, Y, k, U, v) {
                    var O = this.info;
                    if (O) {
                        var R, o, w, C, V, L, Q = Vi();
                        if (Nc[F] ? (R = O.p3, o = O.c1, w = O.c2) : rm[F] ? (o = O.s1 || O.c1, w = O.s2 || O.c2) : (o = O.t1 || O.c1, w = O.t2 || O.c2), R) L = yr(F, rf, z, A, U, v);
                        else {
                            var p = Ge(w, o),
                            f = ep(o, w);
                            C = [0, -B(p[2], p[0]), $(p[1] / f)],
                            V = "zyx",
                            R = [(o[0] + w[0]) / 2, (o[1] + w[1]) / 2, (o[2] + w[2]) / 2],
                            L = yr(F, [f, 0, 0], z, A, U, v)
                        }
                        return Nj(Q, L, R, A, Z, Y, k, t, C, V)
                    }
                    return Je
                },
                d._80o = function(p, Z, n) {
                    var K = this,
                    W = K.shapeModel;
                    if (W) {
                        var v = K.gv;
                        Jg(v),
                        xl(v, K.data, W, K, K.getBodyColor(), n)
                    }
                },
                d.createLineModel = function(P, W, v, T, o) {
                    for (var M = this,
                    X = M.s,
                    J = Il(P, W, X(Ie)), d = [], K = 0; K < J.length; K++) {
                        var n = J[K],
                        H = n.length;
                        if (H > 1) {
                            var z = n[0];
                            d.push(z.x, z.y, z.z);
                            for (var _ = 1; H - 1 > _; _++) z = n[_],
                            d.push(z.x, z.y, z.z),
                            d.push(z.x, z.y, z.z);
                            z = n[H - 1],
                            d.push(z.x, z.y, z.z)
                        }
                    }
                    var E, N, O, L = X(T + ".color"),
                    Y = X(o),
                    q = 0;
                    return Y && (N = X(o + ".color"), E = X(o + ".pattern"), q = X(o + ".offset"), O = L),
                    Jq(M.gv, M.data, d, N || L, O ? F: X(T + ".gradient.color"), v, E || X(T + ".pattern"), q, O),
                    J
                },
                d.createTubeModel = function(V, I, u, P) {
                    for (var k = this,
                    f = k.s,
                    T = f("shape3d.side") || Qm, p = f("shape3d.start.angle"), i = f(Sm) ? f("shape3d.top.cap") : F, c = f(Ap) ? f("shape3d.bottom.cap") : F, v = "flat" === i, B = "flat" === c, z = v && (P ? P.uv: f("shape3d.top.image")), L = B && (P ? P.uv: f("shape3d.bottom.image")), M = P ? P.uv: f("shape3d.image"), r = {
                        vs: [],
                        uv: M ? [] : F,
                        top_vs: v ? [] : F,
                        top_uv: z ? [] : F,
                        bottom_vs: B ? [] : F,
                        bottom_uv: L ? [] : F
                    },
                    C = Il(V, I, f(Ie), u), $ = 0, d = C.length; d > $; $++) md(r, C[$], f($h), u, T, p, i, c);
                    if (P) {
                        var U = [];
                        jr(k.gv, k.data, r, k, k.getBodyColor(), [], P, U),
                        U.length && (qk(P.vs, U), qk(P.ns, wk(U)))
                    } else k.shapeModel = r;
                    return C
                },
                d.getCache = function() {
                    var Q = this.info;
                    if (Q) {
                        var j = Q.list;
                        if (j) {
                            var K = Q.cache;
                            return K || (K = Q.cache = Ze(j)),
                            K
                        }
                    }
                    return F
                }
            }
        });
        var Lm = function(c, f) {
            for (var t, O = 0,
            L = c.length,
            x = 0,
            M = L - 1; M >= x;) if (O = T(x + (M - x) / 2), t = c[O].length - f, 0 > t) x = O + 1;
            else {
                if (! (t > 0)) {
                    M = O;
                    break
                }
                M = O - 1
            }
            O = M;
            var S = c[O],
            g = S.point;
            return O === L - 1 || S.length === f || (g = (new Nm).subVectors(c[O + 1].point, g).normalize().multiplyScalar(f - S.length).add(g)),
            {
                point: g,
                tangent: S.tangent
            }
        },
        Ze = function(Q) {
            for (var r, $, k = [], V = 0, p = 0; p < Q.length; p++) {
                for (var M = Q[p], t = 0; t < M.length; t++) {
                    r = M[t],
                    $ && (V += $.distanceTo(r));
                    var f = new Nm,
                    F = M[t + 1];
                    F ? f.subVectors(F, r) : $ ? f.subVectors(r, $) : f.x = 1,
                    f.normalize(),
                    k.push({
                        point: r,
                        length: V,
                        tangent: f
                    }),
                    $ = r
                }
                $ = null
            }
            return k
        },
        Il = function(b, T, v, A) {
            v = v || Oq;
            for (var C = [], k = 0, J = b.size(); J > k; k++) {
                var O = b.get(k);
                C.push(new Nm(O.x, O.e || 0, O.y))
            }
            Fm(T) && (T = T._as);
            for (var n, K, $, L, t, Y = [], i = 0, V = 0, P = T ? T.length: J; P > V; V++) if (t = T ? T[V] : 0 === V ? 1 : 2, 1 === t) Y.push($ = []),
            $.push(C[i++]);
            else if (2 === t || 5 === t) if (L = 2 === t ? C[i++] : $[0], A) {
                var W = T ? T[V + 1] : P > V + 1 ? 2 : F;
                if (2 === W || 5 === W) {
                    var u = $[$.length - 1],
                    U = 2 === W ? C[i] : $[0],
                    G = (new Nm).subVectors(u, L),
                    z = (new Nm).subVectors(U, L),
                    H = G.length(),
                    M = z.length();
                    if (A > H / 2 && A > M / 2) $.push(L);
                    else for (G.multiplyScalar(s(A, H / 2) / H).add(L), z.multiplyScalar(s(A, M / 2) / M).add(L), n = new lo(G, L, z).getPoints(v), K = 0; v >= K; K++) $.push(n[K])
                } else $.push(L)
            } else $.push(L);
            else if (3 === t) for (n = new lo($[$.length - 1], C[i++], C[i++]).getPoints(v), K = 1; v >= K; K++) $.push(n[K]);
            else if (4 === t) for (n = new uf($[$.length - 1], C[i++], C[i++], C[i++]).getPoints(v), K = 1; v >= K; K++) $.push(n[K]);
            return Y
        },
        Uf = function(V) {
            for (var L, W, S = new Nm,
            T = [], P = [], x = [], p = 0, v = V.length; v > p; p++) L = V[p],
            W = V[p + 1],
            W ? S.subVectors(W, L) : S.subVectors(L, V[p - 1]),
            T.push(S.normalize().clone());
            var N, U, D, i, Y = new Nm,
            g = new Nm,
            G = new Hn,
            f = 1e-4,
            k = Number.MAX_VALUE,
            q = T[0],
            c = P[0] = new Nm,
            h = x[0] = new Nm;
            for (U = R(q.x), D = R(q.y), i = R(q.z), k >= U && (k = U, Y.set(1, 0, 0)), k >= D && (k = D, Y.set(0, 1, 0)), k >= i && Y.set(0, 0, 1), g.crossVectors(q, Y).normalize(), c.crossVectors(q, g), h.crossVectors(q, c), p = 1; v > p; p++) P[p] = P[p - 1].clone(),
            x[p] = x[p - 1].clone(),
            g.crossVectors(T[p - 1], T[p]),
            g.length() > f && (g.normalize(), N = d(Xh(T[p - 1].dot(T[p]), -1, 1)), P[p].applyMatrix4(G.makeRotationAxis(g, N))),
            x[p].crossVectors(T[p], P[p]);
            return {
                B: x,
                T: T,
                N: P
            }
        },
        md = function() {
            var b = function(r) {
                for (var q = 1; q < arguments.length; q++) {
                    var $ = arguments[q];
                    r.push($.x, $.y, $.z)
                }
            },
            z = function(u) {
                for (var d = 1; d < arguments.length; d++) {
                    var m = arguments[d].uv;
                    u.push(m[0], m[1])
                }
            },
            Q = function(t, R, Y, e, w) {
                var $ = -e * i(w),
                X = e * g(w);
                return new Nm(t.x + $ * Y.x + X * R.x, t.y + $ * Y.y + X * R.y, t.z + $ * Y.z + X * R.z)
            },
            x = function($, e, d, H, t, M, b) {
                for (var L = [], q = X / t, c = 0; t >= c; c++) {
                    var N = Q($, e, d, H, c * q + M);
                    L.push(N),
                    b != F && (N.uv = [b, c / t])
                }
                return L
            },
            j = function($, l, C, K, z, J, U, w) {
                var R = l ? $.top_vs: $.bottom_vs;
                if (R) for (var k = l ? $.top_uv: $.bottom_uv, p = X / U, E = 0; U > E; E++) {
                    var x, r;
                    l ? (x = E * p + w, r = (E + 1) * p + w) : (r = E * p + w, x = (E + 1) * p + w),
                    b(R, Q(C, K, z, J, x), Q(C, K, z, J, r), C),
                    k && k.push(.5 - .5 * i(x), .5 - .5 * g(x), .5 - .5 * i(r), .5 - .5 * g(r), .5, .5)
                }
            };
            return function(M, G, T, e, S, W, r, B) {
                var o = G.length;
                if (o > 1) {
                    var Z, K, E, P, q, U, l, t = Uf(G),
                    H = t.T,
                    D = t.N,
                    N = t.B;
                    "flat" === r && j(M, !0, G[0], N[0], D[0], e, S, W),
                    "flat" === B && j(M, !1, G[o - 1], N[o - 1], D[o - 1], e, S, W);
                    var h, A, n = [],
                    d = w(S / 2),
                    Y = "round" === r,
                    Q = "round" === B,
                    y = G[0],
                    _ = H[0],
                    c = N[0],
                    R = D[0],
                    O = G[o - 1],
                    u = H[o - 1],
                    J = N[o - 1],
                    v = D[o - 1];
                    if (Y) {
                        for (E = 1; d >= E; E++) D.splice(0, 0, R),
                        N.splice(0, 0, c),
                        H.splice(0, 0, _),
                        A = -E / d * e,
                        G.splice(0, 0, _.clone().multiplyScalar(A).add(y)),
                        n[d - E] = k(e * e - A * A);
                        o += d
                    }
                    if (Q) {
                        for (E = 1; d >= E; E++) D.push(v),
                        N.push(J),
                        H.push(u),
                        A = E / d * e,
                        G.push(u.clone().multiplyScalar(A).add(O)),
                        n[G.length - 1] = k(e * e - A * A);
                        o += d
                    }
                    if (M.uv) {
                        var C = 0,
                        p = 0,
                        X = [];
                        for (T && (C = T), q = G[0], X[0] = 0, E = 1; o > E; E++) P = G[E],
                        X[E] = q.distanceTo(P),
                        q = P,
                        T || (C += X[E]);
                        for (h = [], E = 0; o > E; E++) p += X[E],
                        h[E] = C ? p / C: 0
                    }
                    for (E = 0; o > E; E++) {
                        if (P = G[E], U = N[E], l = D[E], Z = x(P, U, l, n[E] === V ? e: n[E], S, W, h ? h[E] : F), K) for (var g = 0; S > g; g++) {
                            var I = K[g],
                            f = K[g + 1] || K[0],
                            L = Z[g],
                            s = Z[g + 1] || Z[0];
                            b(M.vs, f, I, L, L, s, f),
                            M.uv && z(M.uv, f, I, L, L, s, f)
                        }
                        K = Z
                    }
                }
            }
        } ();
        vc(C, {
            getLineLength: function(P) {
                return P[P.length - 1].length
            },
            getLineOffset: function(R, z) {
                return Lm(R, z)
            },
            getLineCacheInfo: function(f, l, Y, n) {
                return Ze(Il(f, l, Y, n))
            }
        });
        var tm = Y.Light = function() {
            Lo(tm, this),
            this.s(sp, b[sp]),
            this.s(Ce, "sphere"),
            this.s3(20, 20, 20)
        };
        uh("Light", go, {
            _image: "light_icon",
            _icon: "light_icon",
            onStyleChanged: function(L, G, f) {
                tm.superClass.onStyleChanged.apply(this, arguments),
                L === sp && this.s("shape3d.color", f)
            }
        });
        var Iq = zb.Graph3dView = function(H, h) {
            var n = this;
            n._attributes = h || C.graph3dViewAttributes,
            n._25I = {},
            n._view = Kp(1, n);
            var M = n._canvas = Jr(n._view);
            M.addEventListener("webglcontextlost",
            function(r) {
                r.preventDefault(),
                tg(n),
                n._26I = F,
                n._1o.texture = F,
                n._35O = !0
            },
            !1),
            M.addEventListener("webglcontextrestored",
            function() {
                n._35O = !1,
                n.iv()
            },
            !1),
            n._34O = {},
            n._33O = {},
            n._wireframeIndexMap = {},
            n._wireframeModelMap = {},
            n._polylineIndexMap = {},
            n._polylineIndexMap = {},
            n._8O = [],
            n._7O = Vi(),
            n._6O = Vi(),
            n._1o = new Vk(n),
            n._30O = new Kg(n),
            n._31O = new hg(n),
            n._32O = new yb(n),
            n._33Q = !0,
            n._eye = qj(C.graph3dViewEye),
            n._center = qj(C.graph3dViewCenter),
            n._up = qj(C.graph3dViewUp),
            n._lightChanged = !1,
            n._59O = [],
            n._spots = [],
            n._dirs = [],
            n.dm(H ? H: new si),
            n.setInteractors([new Ji(n)])
        },
        un = {
            fogDisabled: 1,
            dashDisabled: 1,
            batchColorDisabled: 1,
            batchBlendDisabled: 1,
            batchBrightnessDisabled: 1
        };
        Dm("Graph3dView", o, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", Xg, ur, "firstPersonMode", pb, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", vh, Nq, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: V,
            _boundaries: V,
            _moveStep: C.graph3dViewMoveStep,
            _rotateStep: C.graph3dViewRotateStep,
            _pannable: C.graph3dViewPannable,
            _rotatable: C.graph3dViewRotatable,
            _walkable: C.graph3dViewWalkable,
            _resettable: C.graph3dViewResettable,
            _zoomable: C.graph3dViewZoomable,
            _firstPersonMode: C.graph3dViewFirstPersonMode,
            _mouseRoamable: C.graph3dViewMouseRoamable,
            _gridVisible: C.graph3dViewGridVisible,
            _gridSize: C.graph3dViewGridSize,
            _gridGap: C.graph3dViewGridGap,
            _gridColor: C.graph3dViewGridColor,
            _originAxisVisible: C.graph3dViewOriginAxisVisible,
            _centerAxisVisible: C.graph3dViewCenterAxisVisible,
            _axisXColor: C.graph3dViewAxisXColor,
            _axisYColor: C.graph3dViewAxisYColor,
            _axisZColor: C.graph3dViewAxisZColor,
            _ortho: C.graph3dViewOrtho,
            _orthoWidth: C.graph3dViewOrthoWidth,
            _fovy: C.graph3dViewFovy,
            _near: C.graph3dViewNear,
            _far: C.graph3dViewFar,
            _headlightColor: C.graph3dViewHeadlightColor,
            _headlightIntensity: C.graph3dViewHeadlightIntensity,
            _headlightRange: C.graph3dViewHeadlightRange,
            _headlightDisabled: C.graph3dViewHeadlightDisabled,
            _rectSelectable: C.graph3dViewRectSelectable,
            _rectSelectBackground: C.graph3dViewRectSelectBackground,
            _editSizeColor: C.graph3dViewEditSizeColor,
            _autoMakeVisible: Tl,
            _fogDisabled: C.graph3dViewFogDisabled,
            _fogColor: C.graph3dViewFogColor,
            _fogNear: C.graph3dViewFogNear,
            _fogFar: C.graph3dViewFogFar,
            _dashDisabled: C.graph3dViewDashDisabled,
            _batchColorDisabled: C.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: C.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: C.graph3dViewBatchBrightnessDisabled,
            setEye: function(W, e, R) {
                1 === arguments.length && (e = W[1], R = W[2], W = W[0]);
                var C = this._eye;
                C[0] = W,
                C[1] = e,
                C[2] = R,
                this.fp(vh, F, C)
            },
            setCenter: function(m, E, H) {
                1 === arguments.length && (E = m[1], H = m[2], m = m[0]);
                var P = this._center;
                P[0] = m,
                P[1] = E,
                P[2] = H,
                this.fp(Nq, F, P)
            },
            setUp: function(D, W, Q) {
                1 === arguments.length && (W = D[1], Q = D[2], D = D[0]);
                var n = this._up;
                n[0] = D,
                n[1] = W,
                n[2] = Q,
                this.fp("up", F, n)
            },
            isTransparentMask: function(T) {
                return T.s("transparent.mask")
            },
            getAspect: function() {
                var H = this,
                k = H._aspect;
                return k ? k: H.getWidth() / H.getHeight()
            },
            getCanvas: function() {
                return this._canvas
            },
            setDataModel: function(q) {
                var t = this,
                U = t._dataModel,
                a = t._3o;
                U !== q && (U && (U.umm(t.handleDataModelChange, t), U.umd(t.handleDataPropertyChange, t), a || U.sm().ums(t._16o, t)), t._dataModel = q, q.mm(t.handleDataModelChange, t), q.md(t.handleDataPropertyChange, t), a ? a._21I(q) : q.sm().ms(t._16o, t), t.invalidateAll(!0), t.invalidateLight(), t.fp(Kj, U, q))
            },
            handleDataPropertyChange: function(s) {
                var B = s.data;
                this.invalidateData(B),
                de(B) && "s:light.type" === s.property && this.invalidateLight()
            },
            invalidateLight: function() {
                this._lightChanged || (this._lightChanged = !0, this.iv())
            },
            onPropertyChanged: function(P) {
                var J = this,
                b = P.property;
                J.iv(),
                J._18Q = F,
                "eye" === b ? J._33Q = !0 : "devicePixelRatio" === b ? J._42(F, J._devicePixelRatio || Wj) : un[b] && tg(J)
            },
            _5O: function(z) {
                var n = z._22Q();
                return n ? new n(this, z) : F
            },
            getData3dUI: function(W) {
                var j = this._25I[W._id];
                return j === V && (j = this._5O(W), this._25I[W._id] = j),
                j
            },
            invalidateAll: function(n) {
                var c = this;
                if (n) {
                    for (var Q in c._25I) {
                        var V = c._25I[Q];
                        V && V.dispose()
                    }
                    c._25I = {},
                    c.iv(),
                    ph(c)
                } else c.dm().each(function(h) {
                    c.invalidateData(h)
                })
            },
            invalidateSelection: function() {
                var S = this;
                S.sm().each(function(w) {
                    S.invalidateData(w)
                })
            },
            invalidateData: function(m) {
                var C = this,
                N = C.getData3dUI(m);
                N && (N.iv(), C.iv()),
                ph(C, m)
            },
            getShape3dText: function(D) {
                return D.getStyle("shape3d.text") || this.getLabel(D)
            },
            invalidateBatch: function(N) {
                var x = this,
                C = x._33O,
                w = C[N],
                A = [],
                q = {};
                if (w) {
                    w.ds.forEach(function(K) {
                        var V = x.getData3dUI(K);
                        V && V.iv(),
                        delete x._34O[K._id],
                        A.push(K._id)
                    }),
                    delete C[N];
                    for (var f, p, I, r, v, l, O, a, M, y = 0; 2 > y; y++) {
                        var t = x[["_wireframeModelMap", "_polylineModelMap"][y]],
                        T = x[["_wireframeIndexMap", "_polylineIndexMap"][y]];
                        for (q = {},
                        a = 0; a < A.length; a++) {
                            var c = T[A[a]];
                            if (c) {
                                delete T[A[a]],
                                M = c.batch,
                                f = t[M];
                                var H = c.begin,
                                J = c.size,
                                Q = 3 * H,
                                Y = 3 * J,
                                j = 4 * H,
                                i = 4 * J;
                                for (p = f.ds, I = f.vs, r = f.cs, v = f.ps, l = f.ls, O = c.index, f.invalidate = !0, p[O] = V, O = Q; Q + Y > O; O++) I[O] = V;
                                for (O = j; j + i > O; O++) r[O] = V;
                                for (O = j; j + i > O; O++) v[O] = V;
                                if (l) for (O = Q; Q + Y > O; O++) l[O] = V;
                                q[M] = !0
                            }
                        }
                        for (M in q) {
                            f = t[M],
                            p = f.ds,
                            I = f.vs,
                            r = f.cs,
                            v = f.ps,
                            l = f.ls;
                            var z = [];
                            for (O = 0; O < p.length; O++) p[O] !== V && z.push(p[O]);
                            if (0 === z.length) delete t[M];
                            else {
                                for (f.ds = z, z = [], O = 0; O < I.length; O++) I[O] !== V && z.push(I[O]);
                                for (f.vs = z, z = [], O = 0; O < r.length; O++) r[O] !== V && z.push(r[O]);
                                for (f.cs = z, z = [], O = 0; O < v.length; O++) v[O] !== V && z.push(v[O]);
                                if (f.ps = z, l) {
                                    for (z = [], O = 0; O < l.length; O++) l[O] !== V && z.push(l[O]);
                                    f.ls = z
                                }
                            }
                        }
                    }
                    x.iv()
                }
            },
            handleDataModelChange: function(Q) {
                var _ = this,
                M = Q.kind,
                q = Q.data;
                if ("add" === M) _.invalidateData(q),
                wn(q) && q.getEdgeGroup() && q.getEdgeGroup().eachSiblingEdge(_.invalidateData, _),
                de(q) && _.invalidateLight();
                else if (M === ej) {
                    var N = q._id,
                    D = _._25I[N];
                    D && (D.dispose(), delete _._25I[N], _.iv()),
                    q === _._currentSubGraph && _.setCurrentSubGraph(F),
                    ph(_, q),
                    de(q) && _.invalidateLight()
                } else M === Rg && (_.invalidateAll(!0), _.setCurrentSubGraph(F), ph(_), _.invalidateLight())
            },
            toCanvas: function(n) {
                var u = this,
                s = u.getGL();
                if (u.validate(), n) {
                    var $ = s.getParameter(s.COLOR_CLEAR_VALUE);
                    Tj(s, n)
                }
                u._42(F, 1);
                var e = u.getWidth(),
                B = u.getHeight(),
                J = new Uint8Array(4 * e * B),
                I = Jr(),
                R = I.getContext("2d");
                s.readPixels(0, 0, e, B, s.RGBA, s.UNSIGNED_BYTE, J),
                Kc(I, e, B, 1);
                for (var i = R.getImageData(0, 0, e, B), j = i.data, o = 0; o < j.length; o += 4) {
                    var f = o / 4,
                    a = T(f / e),
                    g = f - a * e;
                    f = 4 * ((B - 1 - a) * e + g),
                    j[f] = J[o],
                    j[f + 1] = J[o + 1],
                    j[f + 2] = J[o + 2],
                    j[f + 3] = J[o + 3]
                }
                return R.putImageData(i, 0, 0),
                n && Tj(s, $),
                u._42(F, u._devicePixelRatio || Wj),
                I
            },
            toDataURL: function(m, w) {
                var d = this,
                q = d.getGL();
                if (d.validate(), m) {
                    var B = q.getParameter(q.COLOR_CLEAR_VALUE);
                    Tj(q, m)
                }
                d._42(F, 1);
                var P = d._canvas.toDataURL(w || "image/png", 1);
                return m && Tj(q, B),
                d._42(F, d._devicePixelRatio || Wj),
                P
            },
            getGL: function() {
                var g = this,
                b = g._26I,
                m = g._prg;
                if (!b) try {
                    g._2O = {},
                    b = g._26I = g._canvas.getContext("webgl", g._attributes) || g._canvas.getContext("experimental-webgl", g._attributes),
                    b._emptyTexture = Kl(b),
                    g._buffer = {
                        vs: nd(b),
                        ns: nd(b),
                        is: nd(b),
                        uv: nd(b),
                        batchColor: nd(b),
                        batchBlend: nd(b),
                        batchBrightness: nd(b),
                        lineDistance: nd(b)
                    },
                    g._1O = Mk(b);
                    var k = g._cube = {
                        vs: nd(b),
                        ns: nd(b),
                        is: nd(b),
                        uv: nd(b)
                    };
                    Zb(b, k.vs, wo),
                    Zb(b, k.ns, xp),
                    Zb(b, k.uv, dm),
                    Cn(b, k.is, Rb)
                } catch(B) {}
                if (b && !m) {
                    if (m = g._prg = b.createProgram(), !m) return F;
                    var j = g._dirs.length,
                    l = g._spots.length,
                    M = g._59O.length,
                    V = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    j && V.push("uDirColor", "uDirPosition"),
                    l && V.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"),
                    M && V.push("uPointColor", "uPointRange", "uPointPosition"),
                    Tj(b, [0, 0, 0, 0]),
                    b.clearDepth(1),
                    b.enable(b.DEPTH_TEST),
                    b.depthFunc(b.LEQUAL),
                    b.enable(b.BLEND),
                    b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA),
                    kh || (Di = Yp(Di.substring(0, Di.indexOf("^#"))), zj = Yp(zj), kh = !0);
                    var s = ["#define MAX_DIR " + j, "#define MAX_SPOT " + l, "#define MAX_POINT " + M, g._fogDisabled ? "": "#define FOG", g._dashDisabled ? "": "#define DASH", g._batchColorDisabled ? "": "#define BATCHCOLOR", g._batchBlendDisabled ? "": "#define BATCHBLEND", g._batchBrightnessDisabled ? "": "#define BATCHBRIGHTNESS", ""].join("\n"),
                    I = Gd(b, m, b.VERTEX_SHADER, Di.replace("PREFIX", s)),
                    a = Gd(b, m, b.FRAGMENT_SHADER, zj.replace("PREFIX", s));
                    H ? V.push("aPosition") : (m.aPosition = 0, b.bindAttribLocation(m, 0, "aPosition")),
                    b.linkProgram(m),
                    V.forEach(function(J) {
                        m[J] = /^u/.test(J) ? b.getUniformLocation(m, J) : b.getAttribLocation(m, J)
                    }),
                    b.useProgram(m),
                    b.deleteShader(I),
                    b.deleteShader(a)
                }
                return b
            },
            getBrightness: function(k) {
                var c = k.s("brightness"),
                H = this.isSelected(k) ? k.s("select.brightness") : F;
                return c == F ? H: H == F ? c: c * H
            },
            getWireframe: function(m) {
                var r = m.s("wf.visible"),
                Z = m.s("wf.width");
                return r === !0 || Z > 0 && "selected" === r && this.isSelected(m) ? {
                    color: m.s("wf.color"),
                    width: Z,
                    "short": m.s("wf.short"),
                    mat: m.s("wf.mat")
                }: void 0
            },
            getBodyColor: function(F) {
                return F.s("body.color")
            },
            getMat: function(v) {
                return v.getMat ? v.getMat() : v.s("mat")
            },
            getFaceMat: function(V, w) {
                return V.getFaceMat ? V.getFaceMat(w) : V.s(w + ".mat")
            },
            getFaceBlend: function(P, W) {
                return P.s(W + ".blend") || P.s("all.blend")
            },
            getFaceColor: function(p, y) {
                return p.s(y + ".color") || p.s("all.color")
            },
            getFaceImage: function(W, J) {
                return W.s(J + ".image") || W.s("all.image")
            },
            getFaceDiscardSelectable: function(d, T) {
                var y = d.s(T + ".discard.selectable");
                return y == F ? d.s("all.discard.selectable") : y
            },
            getFaceUv: function(g, R) {
                return g.s(R + ".uv") || g.s("all.uv")
            },
            getFaceUvOffset: function(I, T) {
                return I.s(T + ".uv.offset") || I.s("all.uv.offset")
            },
            getFaceUvScale: function(d, u) {
                return d.s(u + ".uv.scale") || d.s("all.uv.scale")
            },
            getFaceLight: function(p, R) {
                var z = p.s(R + ".light");
                return z == F ? p.s("all.light") : z
            },
            getFaceVisible: function(e, w) {
                var W = e.s(w + ".visible");
                return W == F ? e.s("all.visible") : W
            },
            getFaceOpacity: function(X, y) {
                var h = X.s(y + ".opacity");
                return h == F ? X.s("all.opacity") : h
            },
            getFaceTransparent: function(Z, g) {
                var A = Z.s(g + ".transparent");
                return A == F ? Z.s("all.transparent") : A
            },
            getFaceReverseColor: function(z, p) {
                return z.s(p + ".reverse.color") || z.s("all.reverse.color")
            },
            getFaceReverseFlip: function(p, v) {
                var m = p.s(v + ".reverse.flip");
                return m == F ? p.s("all.reverse.flip") : m
            },
            getFaceReverseCull: function(V, Z) {
                var c = V.s(Z + ".reverse.cull");
                return c == F ? V.s("all.reverse.cull") : c
            },
            getTextureMap: function() {
                return this._2O
            },
            deleteTexture: function(n) {
                var K = this,
                p = K._2O[n];
                p && (delete K._2O[n], K.getGL().deleteTexture(p))
            },
            getTexture: function(q, Z) {
                if (!q) return F;
                var X = this,
                k = X.getGL(),
                I = X._2O[q];
                if (!I) {
                    var H = oq(q);
                    if (H) if (H.tagName) {
                        if (H.dynamic) return Mk(k, H, X._1O);
                        I = X._2O[q] = Mk(k, H)
                    } else {
                        var U = Dr(H, Z),
                        g = Ll(H, Z);
                        if (U >= 1 && g >= 1) {
                            var i = Sj(U, g);
                            return zd(i, H, 0, 0, U, g, Z, X),
                            i.restore(),
                            Mk(k, Sc, X._1O)
                        }
                    }
                }
                return I
            },
            redraw: function() {
                this.iv()
            },
            validateImpl: function() {
                var S = this;
                if (S._lightChanged) {
                    S._lightChanged = !1;
                    var C = [],
                    u = [],
                    v = [];
                    S.dm().each(function(Q) {
                        if (de(Q)) {
                            var B = Q.s("light.type");
                            B === Zl ? C.push(Q) : B === xm ? u.push(Q) : B === rb && v.push(Q)
                        }
                    }),
                    (C.length !== S._59O.length || u.length !== S._spots.length || v.length !== S._dirs.length) && tg(S),
                    S._59O = C,
                    S._spots = u,
                    S._dirs = v
                }
                S._42(),
                S._1o.iv()
            },
            _42: function(E, Q) {
                var N = this;
                if (!N._35O && (!Oe || oe(Oe))) {
                    var j, z;
                    E && (E instanceof go ? z = E: j = E);
                    var q = N._canvas,
                    T = N.getWidth(),
                    U = N.getHeight(),
                    p = N.getGL(),
                    w = N._prg;
                    if (p) {
                        if (Q ? E || Kc(q, T, U, Q) : (Q = N._devicePixelRatio || Wj, E || T === q.clientWidth && U === q.clientHeight || Kc(q, T, U, Q)), p.viewport(0, 0, T * Q, U * Q), N._81O = F, p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), Cc(p, w.uBrightness, 1), Cc(p, w.uOpacity, 1), Cc(p, w.uPartOpacity, 1), p._picking = !!E, Cc(p, w.uPick, !!E), Cc(p, w.uTexture, !1), Cc(p, w.uFix, !1), Cc(p, w.uTransparent, !1), Cc(p, w.uBatchColor, !1), Cc(p, w.uBatchBlend, !1), Cc(p, w.uBatchBrightness, !1), E || (Jc(N, p, w), N._fogDisabled || (Cc(p, w.uFogColor, N._fogColor), Cc(p, w.uFogNear, N._fogNear), Cc(p, w.uFogFar, N._fogFar))), Io(p, w.aPosition), Io(p, w.aNormal), Eh(p, w.aUv), Eh(p, w.aBatchColor), Eh(p, w.aBatchBlend), Eh(p, w.aBatchBrightness), Eh(p, w.aLineDistance), Cc(p, w.uPMatrix, Ab(N)), Cc(p, w.uViewMatrix, xg(N, N._7O)), z) {
                            var C = p.getParameter(p.COLOR_CLEAR_VALUE);
                            p.clearColor(0, 0, 0, 0),
                            p.disable(p.BLEND),
                            Eh(p, w.aNormal),
                            Zb(p, N._cube.vs, F, w.aPosition),
                            Cn(p, N._cube.is),
                            Zp(z, N, Tb, 0),
                            Zp(z, N, ps, 6),
                            Zp(z, N, um, 12),
                            Zp(z, N, $m, 18),
                            Zp(z, N, aq, 24),
                            Zp(z, N, Gg, 30),
                            Io(p, w.aNormal),
                            Tj(p, C)
                        } else if (j) {
                            j.value = 2;
                            var C = p.getParameter(p.COLOR_CLEAR_VALUE);
                            p.clearColor(0, 0, 0, 0),
                            p.disable(p.BLEND),
                            N._95I(p, w, j),
                            ec(N, j),
                            Vc(N, N._polylineModelMap, j),
                            Vc(N, N._wireframeModelMap, j),
                            Cc(p, w.uTransparent, !0),
                            N._95I(p, w, j, !0),
                            ec(N, j, !0),
                            Vc(N, N._polylineModelMap, j, !0),
                            Vc(N, N._wireframeModelMap, j, !0),
                            Cc(p, w.uTransparent, !1),
                            p.disable(p.DEPTH_TEST),
                            N._30O._42(p, w, j),
                            p.enable(p.DEPTH_TEST),
                            Tj(p, C)
                        } else p.disable(p.BLEND),
                        N._31O._42(p, w),
                        N._95I(p, w),
                        ec(N),
                        Vc(N, N._polylineModelMap),
                        Vc(N, N._wireframeModelMap),
                        p.enable(p.BLEND),
                        p.depthMask(!1),
                        Cc(p, w.uTransparent, !0),
                        N._95I(p, w, F, !0),
                        ec(N, F, !0),
                        Vc(N, N._polylineModelMap, F, !0),
                        Vc(N, N._wireframeModelMap, F, !0),
                        Cc(p, w.uTransparent, !1),
                        p.depthMask(!0),
                        p.disable(p.BLEND),
                        p.disable(p.DEPTH_TEST),
                        N._32O._42(p, w),
                        N._30O._42(p, w),
                        p.enable(p.DEPTH_TEST);
                        Zb(p, F),
                        Cn(p, F),
                        N._33Q = !1
                    }
                }
            },
            _95I: function(F, Y, L, E) {
                var l = this,
                o = function(x) {
                    return E ? x: !x
                };
                l.dm().each(function(u) {
                    if (l.isVisible(u) && (!M || x)) {
                        if (!L && l.isTransparentMask(u)) return;
                        var r = l.getData3dUI(u);
                        r && r._42(F, Y, L, o)
                    }
                })
            },
            getLogicalPoint: function(i) {
                return Kh(i, this._canvas)
            },
            getHitFaceInfo: function(Z) {
                Z.target && (Z = this.lp(Z));
                var S = this.getDataInfoAt(Z);
                if (S) {
                    var w = this._1o.face(S.data, Xp(Z.x, Z.y));
                    if (w) return {
                        data: S.data,
                        face: w
                    }
                }
                return F
            },
            getDataAt: function(N) {
                var l = this.getDataInfoAt(N);
                return l ? l.data: F
            },
            getDataInfoAt: function(e, P) {
                return e.target && (e = this.lp(e)),
                this._1o.get(Xp(e.x, e.y, P), !0)
            },
            getDatasInRect: function(G) {
                return this._1o.get(G)
            },
            setEditable: function(j) {
                var D = this,
                Z = D._editable;
                D._editable = j,
                this.fp(rk, Z, j)
            },
            isEditable: function(e) {
                var d = this;
                return d._editable ? Bm(e) ? e.s("3d.editable") ? d._editableFunc ? d._editableFunc(e) : !0 : !1 : !1 : !1
            },
            isSelectable: function(K) {
                return K.s("3d.selectable") && this.sm().isSelectable(K)
            },
            isMovable: function(x) {
                var z = this;
                return wn(x) && x.getStyle(Ae) !== ue ? !1 : x.s("3d.movable") ? z._movableFunc ? z._movableFunc(x) : !0 : !1
            },
            isSizeEditable: function(c) {
                return Bm(c) ? this._sizeEditableFunc ? this._sizeEditableFunc(c) : !0 : !1
            },
            isRotationEditable: function(l) {
                return Bm(l) && l.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(l) : !0 : !1
            },
            handleDelete: function() {
                this._editable && this.removeSelection()
            },
            zoomIn: function(I) {
                this.setZoom(ef, I)
            },
            zoomOut: function(l) {
                this.setZoom(1 / ef, l)
            },
            setZoom: function(D, Y) {
                if (1 !== D) {
                    var A = this;
                    if (A._ortho) return A.setOrthoZoom(D, Y),
                    void 0;
                    A._14o && A._14o.stop(!0);
                    var L = 1 / D,
                    a = A._eye,
                    N = A._center,
                    p = N[0] + (a[0] - N[0]) * L - a[0],
                    I = N[1] + (a[1] - N[1]) * L - a[1],
                    s = N[2] + (a[2] - N[2]) * L - a[2];
                    if (! (ep(a, N) < A._moveStep && 1 > L)) {
                        if (Y = wq(Y)) {
                            var i = qj(a);
                            return Y.action = function(K) {
                                A.fi({
                                    kind: A._zooming ? "betweenZoom": "beginZoom"
                                }),
                                A._zooming = 1,
                                a[0] = i[0] + p * K,
                                a[1] = i[1] + I * K,
                                a[2] = i[2] + s * K,
                                A.fp(vh, F, a)
                            },
                            Y._37o = function() {
                                delete A._14o,
                                delete A._zooming,
                                A.fi({
                                    kind: "endZoom"
                                }),
                                A.onZoomEnded()
                            },
                            A._14o = Cm(Y)
                        }
                        a[0] += p,
                        a[1] += I,
                        a[2] += s,
                        A.fp(vh, F, a)
                    }
                }
            },
            setOrthoZoom: function(J, i) {
                if (1 !== J) {
                    var g = this;
                    g._14o && g._14o.stop(!0);
                    var K = g._orthoWidth,
                    L = K / J - K;
                    if (! (K < g._moveStep && J > 1)) return (i = wq(i)) ? (i.action = function(t) {
                        g.fi({
                            kind: g._zooming ? "betweenZoom": "beginZoom"
                        }),
                        g._zooming = 1,
                        g.setOrthoWidth(K + L * t)
                    },
                    i._37o = function() {
                        delete g._14o,
                        delete g._zooming,
                        g.fi({
                            kind: "endZoom"
                        }),
                        g.onZoomEnded()
                    },
                    g._14o = Cm(i)) : (g.setOrthoWidth(K / J), void 0)
                }
            },
            getPositionInfo: function(G) {
                var F = this,
                S = F._eye,
                s = F._center,
                o = F.getAspect(),
                c = G ? Xd(Ge(s, S, !0), Ge(G, S)) : ep(S, s);
                if (F._ortho) {
                    var K = F._orthoWidth;
                    return {
                        length: c,
                        height: K / o,
                        width: K
                    }
                }
                var k = 2 * I(F._fovy / 2) * c;
                return {
                    length: c,
                    height: k,
                    width: k * o
                }
            },
            getCenterInfo: function() {
                var N = this;
                return N._81O || (N._81O = N.getPositionInfo()),
                qj(N._81O)
            },
            rotate: function(t, f, n, X) {
                var N = this;
                if (t || f) {
                    X == F && (X = N._firstPersonMode),
                    N._88O && N._88O.stop(!0);
                    var a = N._center,
                    O = N._eye,
                    Z = N.getCenterInfo().length,
                    x = X ? a: O,
                    c = X ? O: a,
                    A = Ge(x, c),
                    R = B(A[0], A[2]),
                    V = B(k(A[0] * A[0] + A[2] * A[2]), A[1]),
                    U = X ? Nq: vh;
                    return X && (f = -f),
                    (n = wq(n)) ? (n.action = function(r) {
                        N.fi({
                            kind: N._rotating ? "betweenRotate": "beginRotate"
                        }),
                        N._rotating = 1;
                        var K = R + t * r,
                        w = V + f * r;
                        w = rn(w),
                        A[0] = Z * g(w) * g(K),
                        A[1] = Z * i(w),
                        A[2] = Z * g(w) * i(K),
                        x[0] = c[0] + A[0],
                        x[1] = c[1] + A[1],
                        x[2] = c[2] + A[2],
                        N.fp(U, F, x)
                    },
                    n._37o = function() {
                        delete N._88O,
                        delete N._rotating,
                        N.fi({
                            kind: "endRotate"
                        }),
                        N.onRotateEnded()
                    },
                    N._88O = Cm(n)) : (R += t, V += f, V = rn(V), A[0] = Z * g(V) * g(R), A[1] = Z * i(V), A[2] = Z * g(V) * i(R), x[0] = c[0] + A[0], x[1] = c[1] + A[1], x[2] = c[2] + A[2], N.fp(U, F, x), void 0)
                }
            },
            pan: function(V, q, c, r) {
                if (V || q) {
                    var A = this;
                    r == F && (r = A._firstPersonMode),
                    A._89O && A._89O.stop(!0);
                    var S = xg(A),
                    G = [S[0] * V, S[4] * V, S[8] * V],
                    n = [S[1] * q, S[5] * q, S[9] * q],
                    t = G[0] + n[0],
                    o = G[1] + n[1],
                    T = G[2] + n[2],
                    g = A._center,
                    Q = A._eye;
                    if (r) {
                        var I = fn(A.getBoundaries(), Q[0], Q[2], Q[0] + t, Q[2] + T, k(t * t + T * T));
                        t = I[0],
                        T = I[1]
                    }
                    if (c = wq(c)) {
                        var D = qj(Q),
                        u = qj(g);
                        return c.action = function(W) {
                            A.fi({
                                kind: A._panning ? "betweenPan": "beginPan"
                            }),
                            A._panning = 1,
                            g[0] = u[0] + t * W,
                            g[1] = u[1] + o * W,
                            g[2] = u[2] + T * W,
                            Q[0] = D[0] + t * W,
                            Q[1] = D[1] + o * W,
                            Q[2] = D[2] + T * W,
                            A.fp(vh, F, Q),
                            A.fp(Nq, F, g)
                        },
                        c._37o = function() {
                            delete A._89O,
                            delete A._panning,
                            A.fi({
                                kind: "endPan"
                            }),
                            A.onPanEnded()
                        },
                        A._89O = Cm(c)
                    }
                    g[0] += t,
                    g[1] += o,
                    g[2] += T,
                    Q[0] += t,
                    Q[1] += o,
                    Q[2] += T,
                    A.fp(vh, F, Q),
                    A.fp(Nq, F, g)
                }
            },
            walk: function(M, m, S) {
                if (M) {
                    var f = this;
                    S == F && (S = f._firstPersonMode),
                    f._90O && f._90O.stop(!0);
                    var P = f._center,
                    Q = f._eye,
                    b = Ge(P, Q, !0);
                    if (S) {
                        var r = fn(f.getBoundaries(), Q[0], Q[2], Q[0] + b[0] * M, Q[2] + b[2] * M, R(M));
                        if (M = ep(r), !M) return;
                        b = [r[0] / M, 0, r[1] / M]
                    }
                    if (m = wq(m)) {
                        var J = qj(Q),
                        D = qj(P);
                        return m.action = function(g) {
                            f.fi({
                                kind: f._walking ? "betweenWalk": "beginWalk"
                            }),
                            f._walking = 1;
                            var a = M * g;
                            Q[0] = J[0] + b[0] * a,
                            Q[1] = J[1] + b[1] * a,
                            Q[2] = J[2] + b[2] * a,
                            P[0] = D[0] + b[0] * a,
                            P[1] = D[1] + b[1] * a,
                            P[2] = D[2] + b[2] * a,
                            f.fp(vh, F, Q),
                            f.fp(Nq, F, P)
                        },
                        m._37o = function() {
                            delete f._90O,
                            delete f._walking,
                            f.fi({
                                kind: "endWalk"
                            }),
                            f.onWalkEnded()
                        },
                        f._90O = Cm(m)
                    }
                    Q[0] += b[0] * M,
                    Q[1] += b[1] * M,
                    Q[2] += b[2] * M,
                    P[0] += b[0] * M,
                    P[1] += b[1] * M,
                    P[2] += b[2] * M,
                    f.fp(vh, F, Q),
                    f.fp(Nq, F, P)
                }
            },
            handleScroll: function(x, L) {
                x.preventDefault();
                var i = this,
                j = i._moveStep;
                i.isFirstPersonMode() ? i.isPannable() && i.pan(0, L > 0 ? j: -j) : i.isZoomable() && i.setZoom(0 > L ? 1 / Hg: Hg)
            },
            handlePinch: function(c, q) {
                this.isZoomable() && this.setZoom(q > c ? 1 / Gc: Gc)
            },
            reset: function() {
                this.setCenter(C.graph3dViewCenter),
                this.setEye(C.graph3dViewEye),
                this.setUp(C.graph3dViewUp)
            },
            moveSelection: function(x, q, P) {
                var p, H = this,
                l = H.dm();
                l && (p = l.getHistoryManager()),
                p && p.beginInteraction(),
                Nh(this.sm().toSelection(this.isMovable, this), x, q, P),
                p && p.endInteraction()
            },
            getMoveMode: function(u, b) {
                var D = b.s("3d.move.mode");
                if (D) return D;
                var e = "88",
                x = "89",
                $ = "90";
                return Ei(u) || Eq[e] && Eq[x] && Eq[$] ? "xyz": Eq[e] && Eq[x] ? "xy": Eq[e] && Eq[$] ? "xz": Eq[x] && Eq[$] ? "yz": Eq[e] ? "x": Eq[x] ? "y": Eq[$] ? "z": "xz"
            },
            handleTick: function() {
                var C = this,
                o = !1,
                n = C._moveStep,
                X = n,
                J = !1,
                j = !0,
                W = C._rotateStep * (j ? -1 : 1);
                if (C.isWalkable() || (X = 0), C.isPannable() || (n = 0), C.isRotatable() || (W = 0), C._32Q) {
                    var $ = (db() - C._32Q) / 50;
                    X *= $,
                    n *= $,
                    W *= $
                }
                C._31Q && (cr(C._31Q), delete C._31Q, delete C._32Q),
                bp() && (o = !0, C.pan( - n, 0, J, j)),
                ig() && (o = !0, C.pan(n, 0, J, j)),
                ag() && (o = !0, Ei() ? C.pan(0, n, J, j) : C.walk(X, J, j)),
                Ac() && (o = !0, Ei() ? C.pan(0, -n, J, j) : C.walk( - X, J, j)),
                kb() && (o = !0, C.rotate( - W, 0, J, j)),
                Bo() && (o = !0, C.rotate(W, 0, J, j)),
                cj() && (o = !0, C.rotate(0, -W / 2, J, j)),
                ll() && (o = !0, C.rotate(0, W / 2, J, j)),
                o && (C._32Q = db(), C._31Q = jp(C.handleTick, C))
            },
            handleKeyDown: function(f) {
                var K = this; ! ui(f) && nc[f.keyCode] ? K.handleTick() : zg(f) ? K.selectAll() : qs(f) ? K.handleDelete(f) : Go(f) && this.isResettable() && K.reset()
            },
            checkDoubleClickOnNote: function(k, Y, Q) {
                var j = this;
                if (Q === Wr) {
                    if (Y.s("note.toggleable")) return Y.s(to, !Y.s(to)),
                    j.fi({
                        kind: "toggleNote",
                        event: k,
                        data: Y,
                        part: Q
                    }),
                    !0
                } else if (Q === cp && Y.s("note2.toggleable")) return Y.s(cq, !Y.s(cq)),
                j.fi({
                    kind: "toggleNote2",
                    event: k,
                    data: Y,
                    part: Q
                }),
                !0;
                return ! 1
            },
            checkDoubleClickOnRotation: function(p, b, T) {
                return T === yl ? (b.setRotationX(0), !0) : T === Jm ? (b.setRotationY(0), !0) : T === gg ? (b.setRotationZ(0), !0) : !1
            },
            onRotateEnded: function() {},
            onWalkEnded: function() {},
            toViewPosition: function(h) {
                var d = this,
                s = d.getWidth() / 2,
                G = d.getHeight() / 2,
                q = d._18Q;
                return q || (q = Ab(d), d._18Q = jq(q, q, xg(d))),
                h = wp([h[0], h[1], h[2], 1], q),
                {
                    x: s + s * h[0] / h[3],
                    y: G - G * h[1] / h[3]
                }
            },
            getHitPosition: function(K, f, _) {
                var P = this,
                a = P.getWidth(),
                x = P.getHeight(),
                o = K.target ? P.lp(K) : K,
                g = o.x - a / 2,
                c = o.y - x / 2,
                X = P.getCenterInfo(),
                G = xg(P);
                f = f ? f: [0, 0, 0],
                _ = _ ? _: [0, 1, 0],
                g = g / a * X.width,
                c = -1 * c / x * X.height;
                var u = [G[0] * g, G[4] * g, G[8] * g],
                l = [G[1] * c, G[5] * c, G[9] * c],
                Z = [u[0] + l[0], u[1] + l[1], u[2] + l[2]],
                $ = P.getCenter(),
                z = Op(P, f, _, [Z[0] + $[0], Z[1] + $[1], Z[2] + $[2]]);
                return z ? z: [0, 0, 0]
            },
            getLineLength: function(w) {
                this.validate();
                var e = this.getData3dUI(w);
                if (e && e.getCache) {
                    var d = e.getCache();
                    if (d) return d[d.length - 1].length
                }
                return 0
            },
            getLineOffset: function(y, O) {
                this.validate();
                var U = this.getData3dUI(y);
                if (U && U.getCache) {
                    var v = U.getCache();
                    if (v) return Lm(v, O)
                }
                return F
            },
            isLabelVisible: function() {
                return ! 0
            },
            isNoteVisible: function() {
                return ! 0
            }
        });
        var ni = zb.Interactor = function(p) {
            this.gv = p
        };
        Dm("Interactor", o, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners()
            }
        });
        var Ji = zb.DefaultInteractor = function(H) {
            Lo(Ji, this, [H])
        };
        Dm("DefaultInteractor", ni, {
            handle_contextmenu: function(o) {
                pm(o)
            },
            handle_mousewheel: function(L) {
                this.gv.handleScroll(L, L.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(a) {
                2 === a.axis && this.gv.handleScroll(a, -a.detail)
            },
            handle_keydown: function(f) {
                this.gv.handleKeyDown(f)
            },
            handle_mousedown: function(E) {
                this.handle_touchstart(E)
            },
            handle_touchstart: function(W) {
                pm(W);
                var P = this,
                K = P.gv,
                z = oi(W),
                U = K.getDataInfoAt(W),
                g = U ? U.data: F,
                S = U ? U.part: F,
                o = K.sm(),
                h = dc(W),
                V = se(W);
                K.setFocus(W) && (P._62O = F, P._57I = F, g ? ui(W) ? o.co(g) ? o.rs(g) : o.as(g) : o.co(g) || o.ss(g) : z && (ui(W) ? K.isRectSelectable() && (P._62O = Yj) : P._57I = ce(W)), P._31Q && (cr(P._31Q), delete P._31Q, delete P._32Q), P._62O || (K.isFirstPersonMode() && (Ei(W) || V > 2 ? P._62O = "pan": K.isMouseRoamable() || a ? (P._62O = "roaming", P.foward = h && oi(W), P._32Q = db(), P._31Q = jp(P.tick, P)) : z || (P._62O = "roaming")), P._62O || (z && h && Ne[S] ? (P._62O = S, P.p3 = g.p3()) : z && h && Bm(g) && K.isSelected(g) && K.isMovable(g) ? (P._62O = "move", P.p3 = g.p3(), P.movedata = g) : a && (V > 2 ? P._62O = "pan": 2 === V && (P.dist = hb(W), P._62O = "pinch")))), P.point = K.lp(W), fk(P, W), Rr(W) ? K.handleDoubleClick(W, g, S) : K.handleClick(W, g, S))
            },
            tick: function() {
                var d = this,
                W = d.gv,
                x = W._moveStep;
                d.point && W.isWalkable() && (d._32Q && (x *= (db() - d._32Q) / 50), W.walk(d.foward ? x: -x), d._32Q = db(), d._31Q = jp(d.tick, d))
            },
            handle_mouseup: function(K) {
                this.handle_touchend(K)
            },
            handle_touchend: function(Q) {
                var c = this._57I;
                c && (ep(c, ce(Q)) <= 1 && this.gv.sm().cs(), this._57I = F)
            },
            handleWindowMouseMove: function(L) {
                this.handleWindowTouchMove(L)
            },
            handleWindowTouchMove: function(y) {
                var q, e, c = this,
                W = c.gv,
                m = c._62O,
                S = c.point,
                z = W.dm(),
                Q = z.getHistoryManager(),
                k = W.lp(y),
                N = k.x - S.x,
                O = k.y - S.y,
                J = -X * N / W.getWidth(),
                l = -X * O / W.getHeight();
                if ("roaming" === m) c.rotate(y, J / 2, l / 2);
                else if (m === yl || m === Jm || m === gg) Q && !W._86O && Q.beginInteraction(),
                W.fi({
                    kind: W._86O ? "betweenEditRotation": "beginEditRotation",
                    event: y
                }),
                W._86O = 1,
                W.sm().each(function(b) {
                    if (Bm(b) && W.isRotationEditable(b)) {
                        var F = R(J) > R(l) ? J: l;
                        m === yl ? b.setRotationX(b.getRotationX() + F) : m === Jm ? b.setRotationY(b.getRotationY() + F) : m === gg && b.setRotationZ(b.getRotationZ() + F)
                    }
                });
                else if ("move" === m || Ne[m]) {
                    m === td || m === fs || m === Om ? (Q && !W._87O && Q.beginInteraction(), W.fi({
                        kind: W._87O ? "betweenEditSize": "beginEditSize",
                        event: y
                    }), W._87O = 1) : (Q && !W._moving && Q.beginInteraction(), W.fi({
                        kind: W._moving ? "betweenMove": "beginMove",
                        event: y
                    }), W._moving = 1);
                    var C, P = c.p3,
                    $ = W.getPositionInfo(P),
                    p = xg(W);
                    C = m === Xb ? "x": m === od ? "y": m === Qr ? "z": m === td ? "sx": m === fs ? "sy": m === Om ? "sz": W.getMoveMode(y, c.movedata),
                    N = N / W.getWidth() * $.width,
                    O = -1 * O / W.getHeight() * $.height;
                    var A, r, B = [p[0] * N, p[4] * N, p[8] * N],
                    j = [p[1] * O, p[5] * O, p[9] * O],
                    D = B[0] + j[0],
                    K = B[1] + j[1],
                    T = B[2] + j[2],
                    d = [P[0] + D, P[1] + K, P[2] + T],
                    g = Ge(W.getEye(), d, !0);
                    if ("xyz" === C ? (A = d, W.moveSelection(D, K, T)) : "xz" === C ? (A = Op(W, P, [0, 1, 0], d), A && W.moveSelection(A[0] - P[0], 0, A[2] - P[2])) : "xy" === C ? (A = Op(W, P, [0, 0, 1], d), A && W.moveSelection(A[0] - P[0], A[1] - P[1], 0)) : "yz" === C ? (A = Op(W, P, [1, 0, 0], d), A && W.moveSelection(0, A[1] - P[1], A[2] - P[2])) : "x" === C || "sx" === C ? (g[0] = 0, A = Op(W, P, g, d), A && (r = A[0] - P[0], "x" === C ? W.moveSelection(r, 0, 0) : W.sm().each(function(X) {
                        Bm(X) && W.isSizeEditable(X) && (q = h(Un, X.getWidth() + r), e = q / X.getWidth(), X.setWidth(q), Ei(y) && (X.setHeight(X.getHeight() * e), X.setTall(X.getTall() * e)))
                    }))) : "y" === C || "sy" === C ? (g[1] = 0, A = Op(W, P, g, d), A && (r = A[1] - P[1], "y" === C ? W.moveSelection(0, r, 0) : W.sm().each(function(g) {
                        Bm(g) && W.isSizeEditable(g) && (q = h(Un, g.getTall() + r), e = q / g.getTall(), g.setTall(q), Ei(y) && (g.setHeight(g.getHeight() * e), g.setWidth(g.getWidth() * e)))
                    }))) : ("z" === C || "sz" === C) && (g[2] = 0, A = Op(W, P, g, d), A && (r = A[2] - P[2], "z" === C ? W.moveSelection(0, 0, r) : W.sm().each(function(b) {
                        Bm(b) && W.isSizeEditable(b) && (q = h(Un, b.getHeight() + r), e = q / b.getHeight(), b.setHeight(q), Ei(y) && (b.setTall(b.getTall() * e), b.setWidth(b.getWidth() * e)))
                    }))), !A) return;
                    c.p3 = A
                } else if (m === Yj) {
                    var H = c.div;
                    H || (H = c.div = hs(), Bf(c.getView(), H), H.op = S, H.style.background = W.getRectSelectBackground()),
                    W.fi({
                        kind: W._rectSelecting ? "betweenRectSelect": "beginRectSelect",
                        event: y
                    }),
                    W._rectSelecting = 1,
                    H.rect = Hd(H.op, k),
                    Sn(H, H.rect)
                } else if ("pinch" === m && 2 === se(y)) {
                    W.fi({
                        kind: W._pinching ? "betweenPinch": "beginPinch",
                        event: y
                    }),
                    W._pinching = 1;
                    var r = hb(y);
                    W.handlePinch(r, c.dist),
                    c.dist = r
                } else "pan" === m || Ei(y) ? c.pan(y, N, O) : W.isFirstPersonMode() || (oi(y) ? c.rotate(y, J, l) : (c.pan(y, N, 0), W.isWalkable() && (W.fi({
                    kind: W._walking ? "betweenWalk": "beginWalk",
                    event: y
                }), W._walking = 1, W.walk(O / W.getHeight() * W.getCenterInfo().height))));
                c.point = k
            },
            pan: function(z, Z, s) {
                var n = this.gv;
                if (n.isPannable()) {
                    var y = n.getCenterInfo(),
                    P = Z / n.getWidth() * y.width,
                    B = -1 * s / n.getHeight() * y.height;
                    n.fi({
                        kind: n._panning ? "betweenPan": "beginPan",
                        event: z
                    }),
                    n._panning = 1,
                    n.pan( - P, -B)
                }
            },
            rotate: function(T, z, D) {
                var W = this.gv;
                W.isRotatable() && (W.fi({
                    kind: W._rotating ? "betweenRotate": "beginRotate",
                    event: T
                }), W._rotating = 1, W.rotate(z, D))
            },
            handleWindowMouseUp: function(x) {
                this.handleWindowTouchEnd(x)
            },
            handleWindowTouchEnd: function(k) {
                var g = this,
                N = g.gv,
                x = N.dm(),
                L = x.getHistoryManager(),
                M = g.div;
                if (M) {
                    var b = N.getDatasInRect(M.rect);
                    if (!b.isEmpty()) {
                        var q = N.sm(),
                        Z = q.toSelection();
                        b.each(function(A) {
                            q.co(A) ? Z.remove(A) : Z.add(A)
                        }),
                        q.ss(Z)
                    }
                    Gq(M)
                }
                N._moving && (delete N._moving, N.fi({
                    kind: "endMove",
                    event: k
                }), N.onMoveEnded(), L && L.endInteraction()),
                N._panning && (delete N._panning, N.fi({
                    kind: "endPan",
                    event: k
                }), N.onPanEnded()),
                N._rotating && (delete N._rotating, N.fi({
                    kind: "endRotate",
                    event: k
                }), N.onRotateEnded()),
                N._86O && (delete N._86O, N.fi({
                    kind: "endEditRotation",
                    event: k
                }), L && L.endInteraction()),
                N._87O && (delete N._87O, N.fi({
                    kind: "endEditSize",
                    event: k
                }), L && L.endInteraction()),
                N._pinching && (delete N._pinching, N.fi({
                    kind: "endPinch",
                    event: k
                }), N.onPinchEnded()),
                N._rectSelecting && (delete N._rectSelecting, N.fi({
                    kind: "endRectSelect",
                    event: k
                }), N.onRectSelectEnded()),
                N._walking && (delete N._walking, N.fi({
                    kind: "endWalk",
                    event: k
                }), N.onWalkEnded()),
                g.dist = g.point = g._62O = g.p3 = g.movedata = g.div = g._57I = g._32Q = g._31Q = g.foward = F
            }
        });
        var Vk = function(K) {
            this.gv = K
        };
        eg(Vk, o, {
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            face: function(I, v) {
                var G = this,
                W = G.gv.getGL();
                if (!W || !Bm(I)) return F;
                var o = v.x,
                M = v.width,
                r = v.height,
                f = G.height - v.y - r,
                L = T(M / 2),
                t = new Uint8Array(4 * M * r),
                p = 0;
                for (G.iv(), G.validate(I), Wq(W, G.frame), W.readPixels(o, f, M, r, W.RGBA, W.UNSIGNED_BYTE, t), Wq(W, F), G.iv(); L >= p; p++) for (var m = L - p,
                Z = L + p,
                X = m; Z >= X; X++) for (var B = m; Z >= B; B++) if (X === m || X === Z || B === m || B === Z) {
                    var $ = rq.m[t[4 * (X * M + B)]];
                    if ($) return $
                }
            },
            get: function(c, I) {
                this.validate();
                var O = this,
                P = O.gv.getGL();
                if (!P) return F;
                var p, t, e = c.x,
                Q = c.width,
                q = c.height,
                X = O.height - c.y - q,
                S = T(Q / 2),
                M = new Uint8Array(4 * Q * q),
                v = 0,
                D = M.length,
                s = I ? F: new Lq,
                u = I ? F: {};
                if (Wq(P, O.frame), P.readPixels(e, X, Q, q, P.RGBA, P.UNSIGNED_BYTE, M), Wq(P, F), I) {
                    for (; S >= v; v++) for (var o = S - v,
                    K = S + v,
                    J = o; K >= J; J++) for (var C = o; K >= C; C++) if ((J === o || J === K || C === o || C === K) && (p = O.info(M, 4 * (J * Q + C)))) return p
                } else for (; D > v; v += 4) p = O.info(M, v),
                p && (t = p.data, u[t._id] || (s.add(t), u[t._id] = t));
                return s
            },
            info: function(b, F) {
                return this.colorMap[(b[F] << 24) + (b[F + 1] << 16) + (b[F + 2] << 8) + b[F + 3]]
            },
            validate: function(A) {
                var u = this,
                z = u.gv,
                o = z.getGL();
                if (o) {
                    var K = z.getWidth(),
                    i = z.getHeight(),
                    Z = o.RGBA,
                    b = o.TEXTURE_2D,
                    R = o.RENDERBUFFER,
                    I = o.FRAMEBUFFER;
                    u.texture || (u.texture = Mk(o), u.render = o.createRenderbuffer(), u.frame = o.createFramebuffer()),
                    (u.width !== K || u.height !== i) && (Gh(o, u.texture), o.texImage2D(b, 0, Z, K, i, 0, Z, o.UNSIGNED_BYTE, F), qo(o, o.TEXTURE_MIN_FILTER, o.LINEAR), o.bindRenderbuffer(R, u.render), o.renderbufferStorage(R, o.DEPTH_COMPONENT16, K, i), Wq(o, u.frame), o.framebufferTexture2D(I, o.COLOR_ATTACHMENT0, b, u.texture, 0), o.framebufferRenderbuffer(I, o.DEPTH_ATTACHMENT, R, u.render), Gh(o, F), o.bindRenderbuffer(R, F), Wq(o, F), u.width = K, u.height = i),
                    u._iv && (u._iv = !1, Wq(o, u.frame), z._42(A || (u.colorMap = {}), 1), Wq(o, F))
                }
            }
        });
        var hg = function(I) {
            this.gv = I
        };
        eg(hg, o, {
            gap: 0,
            size: 0,
            _42: function(g, n) {
                var K = this,
                a = K.gv,
                O = a._gridGap,
                h = a._gridSize;
                if (a._gridVisible) {
                    if (K.gap !== O || K.size !== h) {
                        for (var Z = [], N = a._gridSize / 2, C = O * N, V = 0; 2 * N + 1 > V; V++) {
                            var f = 6 * V,
                            S = 6 * (2 * N + 1) + f;
                            Z[f] = -C,
                            Z[f + 1] = 0,
                            Z[f + 2] = -C + V * O,
                            Z[f + 3] = C,
                            Z[f + 4] = 0,
                            Z[f + 5] = -C + V * O,
                            Z[S] = -C + V * O,
                            Z[S + 1] = 0,
                            Z[S + 2] = -C,
                            Z[S + 3] = -C + V * O,
                            Z[S + 4] = 0,
                            Z[S + 5] = C
                        }
                        K.vs = new zl(Z),
                        K.gap = O,
                        K.size = h
                    }
                    Jg(a),
                    gs(g, n),
                    _b(g),
                    ab(g, n, 1, a._gridColor, a._buffer.vs, K.vs),
                    Np(g, 0, K.vs.length / 3, g.LINES),
                    af(g),
                    fl(g, n)
                } else K.vs = K.gap = K.size = F
            }
        });
        var yb = function(e) {
            this.gv = e
        };
        eg(yb, o, {
            _42: function(c, C) {
                var V = this.gv,
                I = V._buffer.vs,
                K = V._axisXColor,
                u = V._axisYColor,
                D = V._axisZColor,
                A = V._originAxisVisible,
                J = V._centerAxisVisible;
                if (A || J) {
                    var G = H ? c.TRIANGLES: c.TRIANGLE_FAN,
                    x = c.LINES;
                    if (Jg(V), gs(c, C), _b(c), A) {
                        var p = V.getCenterInfo(),
                        j = s(p.width, p.height) / 5,
                        U = .8 * j,
                        Q = .05 * j;
                        ab(c, C, 1.5, K, I, new zl([0, 0, 0, j, 0, 0, U, Q, 0, U, 0, Q, U, -Q, 0, U, 0, -Q, U, Q, 0, 0, 0, 0, 0, j, 0, Q, U, 0, 0, U, Q, -Q, U, 0, 0, U, -Q, Q, U, 0, 0, 0, 0, 0, 0, j, Q, 0, U, 0, Q, U, -Q, 0, U, 0, -Q, U, Q, 0, U])),
                        Np(c, 0, 2, x),
                        Np(c, 1, 6, G),
                        ab(c, C, F, u),
                        Np(c, 7, 2, x),
                        Np(c, 8, 6, G),
                        ab(c, C, F, D),
                        Np(c, 14, 2, x),
                        Np(c, 15, 6, G)
                    }
                    if (J) {
                        var _ = V._center,
                        Z = _[0],
                        r = _[1],
                        T = _[2],
                        p = V.getPositionInfo(_);
                        j = s(p.width, p.height) / 20,
                        ab(c, C, 1.5, K, I, new zl([Z, r, T, Z + j, r, T, Z, r, T, Z, r + j, T, Z, r, T, Z, r, T + j])),
                        Np(c, 0, 2, x),
                        ab(c, C, F, u),
                        Np(c, 2, 2, x),
                        ab(c, C, F, D),
                        Np(c, 4, 2, x)
                    }
                    af(c),
                    fl(c, C)
                }
            }
        });
        var Kg = function(k) {
            this.gv = k
        },
        Xb = "edit_tx",
        od = "edit_ty",
        Qr = "edit_tz",
        yl = "edit_rx",
        Jm = "edit_ry",
        gg = "edit_rz",
        td = "edit_sx",
        fs = "edit_sy",
        Om = "edit_sz",
        Ne = {};
        Ne[Xb] = 1,
        Ne[od] = 1,
        Ne[Qr] = 1,
        Ne[yl] = 1,
        Ne[Jm] = 1,
        Ne[gg] = 1,
        Ne[td] = 1,
        Ne[fs] = 1,
        Ne[Om] = 1,
        eg(Kg, o, {
            _42: function(Z, i, w) {
                var M = this,
                u = M.gv,
                $ = u.sm().ld();
                if (u.isEditable($) && Bm($) && (!u.isFirstPersonMode() || !u.isMouseRoamable() && !a)) {
                    Jg(u);
                    var b, y, m = u.isMovable($),
                    k = u.isRotationEditable($),
                    c = u.isSizeEditable($),
                    q = u._axisXColor,
                    C = u._axisYColor,
                    D = u._axisZColor,
                    F = u._editSizeColor,
                    x = u.getCenterInfo(),
                    f = s(x.width, x.height) / 10,
                    H = f / (w ? 5 : 10),
                    g = .7 * f,
                    t = .4 * g,
                    B = $.p3(),
                    R = B[0],
                    T = B[1],
                    Q = B[2];
                    b = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                    m && M._17O(Z, i, $, w, Xb, q, b, [R, T - H, Q, R + g, T - H, Q, R + g, T, Q, R + g, T, Q, R, T, Q, R, T - H, Q, R, T - H, Q + H, R + g, T - H, Q + H, R + g, T - H, Q, R + g, T - H, Q, R, T - H, Q, R, T - H, Q + H]),
                    y = R + g,
                    c && M._17O(Z, i, $, w, td, F, b, [y, T - H, Q, y + t, T - H, Q, y + t, T, Q, y + t, T, Q, y, T, Q, y, T - H, Q, y, T - H, Q + H, y + t, T - H, Q + H, y + t, T - H, Q, y + t, T - H, Q, y, T - H, Q, y, T - H, Q + H]),
                    y += t,
                    k && M._17O(Z, i, $, w, yl, q, b, [y, T - H, Q, y + t, T - H, Q, y + t, T, Q, y + t, T, Q, y, T, Q, y, T - H, Q, y, T - H, Q + H, y + t, T - H, Q + H, y + t, T - H, Q, y + t, T - H, Q, y, T - H, Q, y, T - H, Q + H]),
                    b = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
                    m && M._17O(Z, i, $, w, od, C, b, [R, T, Q, R, T + g, Q, R - H, T + g, Q, R - H, T + g, Q, R - H, T, Q, R, T, Q, R, T, Q, R, T, Q - H, R, T + g, Q - H, R, T + g, Q - H, R, T + g, Q, R, T, Q]),
                    y = T + g,
                    c && M._17O(Z, i, $, w, fs, F, b, [R, y, Q, R, y + t, Q, R - H, y + t, Q, R - H, y + t, Q, R - H, y, Q, R, y, Q, R, y, Q, R, y, Q - H, R, y + t, Q - H, R, y + t, Q - H, R, y + t, Q, R, y, Q]),
                    y += t,
                    k && M._17O(Z, i, $, w, Jm, C, b, [R, y, Q, R, y + t, Q, R - H, y + t, Q, R - H, y + t, Q, R - H, y, Q, R, y, Q, R, y, Q, R, y, Q - H, R, y + t, Q - H, R, y + t, Q - H, R, y + t, Q, R, y, Q]),
                    b = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                    m && M._17O(Z, i, $, w, Qr, D, b, [R, T, Q, R, T, Q + g, R, T - H, Q + g, R, T - H, Q + g, R, T - H, Q, R, T, Q, R, T - H, Q, R - H, T - H, Q, R - H, T - H, Q + g, R - H, T - H, Q + g, R, T - H, Q + g, R, T - H, Q]),
                    y = Q + g,
                    c && M._17O(Z, i, $, w, Om, F, b, [R, T, y, R, T, y + t, R, T - H, y + t, R, T - H, y + t, R, T - H, y, R, T, y, R, T - H, y, R - H, T - H, y, R - H, T - H, y + t, R - H, T - H, y + t, R, T - H, y + t, R, T - H, y]),
                    y += t,
                    k && M._17O(Z, i, $, w, gg, D, b, [R, T, y, R, T, y + t, R, T - H, y + t, R, T - H, y + t, R, T - H, y, R, T, y, R, T - H, y, R - H, T - H, y, R - H, T - H, y + t, R - H, T - H, y + t, R, T - H, y + t, R, T - H, y])
                }
            },
            _17O: function(w, K, H, k, g, p, V, c) {
                var A = this.gv._buffer;
                ki(w, K, k, !0, H, g),
                Hi(w, K, F, !0, F, !0, F, !1),
                Cc(w, K.uDiffuse, p),
                Zb(w, A.vs, new zl(c), K.aPosition),
                Zb(w, A.ns, new zl(V), K.aNormal),
                _b(w),
                Np(w, 0, 12),
                af(w),
                Rk(w, K)
            }
        });
        var Ep = function(V, q) {
            this.gv = V,
            this.s = function(P, v, M) {
                return v == F && (v = M),
                v == F ? q.getStyle(P) : dj(v, q, V)
            },
            this.data = q
        };
        eg(Ep, o, {
            I3d: !0,
            ms_icons: 1,
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            _42: function(T, l, Z, m) {
                var g, j, n, R, G, v, O, K = this,
                h = K.gv,
                B = K.data,
                b = B._id,
                Q = K.s("batch"),
                X = h._34O,
                w = h._33O,
                y = h.isSelectable(B),
                k = h.getBrightness(B),
                C = k != F && 1 !== k;
                if (K._iv) {
                    if (n = gb(X, w, B, Q), K.validate(n, Q ? iq[Q] || jj: F), n && (R = X[b], G = R.size = n.vs.length / 3 - R.begin, O = n.rs)) for (k = C ? k: 1, v = 0; G > v; v++) O.push(k);
                    if (Bm(B)) {
                        var t = h.getWireframe(B);
                        t && zn(h, B, t)
                    }
                    K.labelInfo = K.label2Info = K.noteInfo = K.note2Info = K._38o = F,
                    K._24O(br, "getLabel"),
                    K._24O(Sb, "getLabel2"),
                    K._26O(Wr, "getNote"),
                    K._26O(cp, "getNote2"),
                    K._15O(),
                    K._iv = !1
                }
                C && Cc(T, l.uBrightness, k),
                j = ki(T, l, Z, y, B, Gj),
                j && (Sr(j, X[b], w), Sr(j, h._polylineIndexMap[b], h._polylineModelMap), Sr(j, h._wireframeIndexMap[b], h._wireframeModelMap)),
                X[b] || K._80o(T, l, m),
                h.isLabelVisible(B) && ((g = K.labelInfo) && (ki(T, l, Z, y, B, br), K._28O(g, br, m)), (g = K.label2Info) && (ki(T, l, Z, y, B, Sb), K._28O(g, Sb, m))),
                h.isNoteVisible(B) && ((g = K.noteInfo) && (ki(T, l, Z, y, B, Wr), K._29O(g, Wr, m)), (g = K.note2Info) && (ki(T, l, Z, y, B, cp), K._29O(g, cp, m))),
                (g = K._38o) && K._99O(T, l, g, Z, y, m),
                C && Cc(T, l.uBrightness, 1)
            },
            validate: function() {},
            _16O: function() {
                return Je
            },
            _80o: function() {},
            dispose: function() {},
            getBodyColor: function(_) {
                var o = this.data,
                Y = this.gv.getBodyColor(o);
                return Y ? Y: _ ? o.getStyle(_) : F
            },
            _24O: function(_, P) {
                var r = this,
                q = r.data,
                G = r.gv,
                o = r.s,
                A = G[P](q);
                if (A != F) {
                    var m = o(_ + ".scale"),
                    n = o(_ + ".max"),
                    I = r[_ + "Info"] = {
                        label: A,
                        textureScale: o(_ + ".texture.scale"),
                        color: G[P + "Color"](q),
                        font: o(_ + ".font"),
                        align: o(_ + ".align"),
                        background: G[P + "Background"](q)
                    },
                    Y = I.rect = Pf(I, A);
                    n > 0 && n < Y.width && (I.labelWidth = Y.width, Y.width = n),
                    Y.x = Y.y = 0,
                    Y.width *= m,
                    Y.height *= m,
                    I.mat = r._16O(o(_ + ".autorotate"), o(_ + ".position"), Y, o(_ + ".face"), o(_ + ".t3"), o(_ + ".r3"), o(_ + ".rotationMode"));
                    var $ = Y.width / 2,
                    i = Y.height / 2;
                    I.vs = new zl([ - $, i, 0, -$, -i, 0, $, -i, 0, $, i, 0]),
                    Y.width /= m,
                    Y.height /= m
                }
            },
            _26O: function(V, d) {
                var r = this,
                K = r.data,
                A = r.gv,
                D = r.s,
                j = A[d](K);
                if (j != F) {
                    var n = D(V + ".scale"),
                    G = this[V + "Info"] = {
                        note: j,
                        textureScale: D(V + ".texture.scale"),
                        expanded: D(V + ".expanded"),
                        font: D(V + ".font"),
                        color: D(V + ".color"),
                        align: D(V + ".align"),
                        borderWidth: D(V + ".border.width"),
                        borderColor: D(V + ".border.color"),
                        background: A[d + "Background"](K)
                    };
                    if (G.expanded) {
                        var g = D(V + ".max"),
                        y = Pf(G, j);
                        y.width += 6,
                        y.height += 2,
                        g > 0 && g < y.width && (G.labelWidth = y.width, y.width = g);
                        var l = {
                            x: -y.width / 2,
                            y: -8 - y.height,
                            width: y.width,
                            height: y.height + 8
                        }
                    } else l = {
                        x: -6,
                        y: -18,
                        width: 12,
                        height: 18
                    };
                    G.mat = r._16O(D(V + ".autorotate"), D(V + ".position"), F, D(V + ".face"), D(V + ".t3"), D(V + ".r3"), D(V + ".rotationMode")),
                    G.rect = l,
                    1 !== n && (l = qj(l), l.x *= n, l.height *= n, l.y = -l.height, l.width *= n);
                    var b = l.x,
                    I = l.y,
                    M = l.width,
                    c = l.height;
                    G.vs = new zl([b, -I, 0, b, -I - c, 0, b + M, -I - c, 0, b + M, -I, 0])
                }
            },
            _28O: function(g, c, W) {
                if (W(this.s(c + ".transparent"))) {
                    var S = g.rect,
                    q = g.textureScale,
                    C = S.width * q,
                    G = S.height * q;
                    if (C >= 1 && G >= 1) {
                        var L = Sj(C, G);
                        1 !== q && (L.translate(L, S.x, S.y), L.scale(q, q), L.translate(L, -S.x, -S.y)),
                        Xk(L, g),
                        L.restore(),
                        np(this, c, g.mat, g.vs, !0)
                    }
                }
            },
            _29O: function(U, w, f) {
                if (f(this.s(w + ".transparent"))) {
                    var j = U.rect,
                    I = U.textureScale,
                    K = j.x,
                    s = j.y,
                    B = j.width * I,
                    t = j.height * I;
                    if (B >= 1 && t >= 1) {
                        j.x = j.y = 0;
                        var T = Sj(B, t);
                        1 !== I && T.scale(I, I),
                        $c(T, U),
                        T.restore(),
                        j.x = K,
                        j.y = s,
                        np(this, w, U.mat, U.vs, !1)
                    }
                }
            },
            _99O: function(q, e, L, b, i, $) {
                if (L) {
                    var p = this,
                    E = p.gv,
                    U = p.data,
                    D = E._buffer,
                    C = E._1O,
                    s = L.icons;
                    for (var r in s) {
                        var K = s[r],
                        t = L.rects[r];
                        if (t && $(dj(K.transparent, U, E))) {
                            ki(q, e, b, i, U, r);
                            var Q = dj(K.shape3d, U, E),
                            n = Q ? [Q] : dj(K.names, U, E),
                            x = n ? n.length: 0,
                            V = dj(K.textureScale, U, E) || 1,
                            Y = dj(K.light, U, E);
                            Y == F && (Y = Q ? !0 : !1),
                            Hi(q, e, dj(K.blend, U, E), Y, dj(K.opacity, U, E), dj(K.reverseFlip, U, E), dj(K.reverseColor, U, E), dj(K.reverseCull, U, E));
                            for (var u = 0; x > u; u++) {
                                var y = n[u],
                                m = t[u];
                                if (xk(p, m.mat), Q) xl(E, U, Pk(p, Q), p);
                                else {
                                    var O = oq(y);
                                    if (O) {
                                        var J = m.width * V,
                                        A = m.height * V;
                                        if (J >= 1 && A >= 1) {
                                            var T = Sj(J, A);
                                            qg(T, O, dj(K.stretch, U, E), 0, 0, J, A, U, E),
                                            T.restore(),
                                            Mk(q, Sc, C),
                                            _b(q, e, C, dj(K.discardSelectable, U, E), D.uv, gj),
                                            Zb(q, D.vs, m.vs, e.aPosition),
                                            Zb(q, D.ns, Bj, e.aNormal),
                                            Cn(q, D.is, Gn),
                                            Kb(q, 0, Gn.length),
                                            af(q, e, C)
                                        }
                                    }
                                }
                                Ed(E)
                            }
                            Rk(q, e)
                        }
                    }
                }
            }
        });
        var Wg = function(L, r) {
            Lo(Wg, this, [L, r])
        };
        eg(Wg, Ep, {
            _16O: function(o, f, X, c, V, p, z, s, I) {
                var W = this.data,
                B = yr(f, W.s3(), X, c, s, I);
                return Nj(Vi(), B, W.p3(), c, V, p, z, o, W.r3(), W.getRotationMode())
            },
            clear: function() {
                var R = this;
                R.faceMat = R.mat = R.shapeModel = R.left = R.right = R.front = R.back = R.top = R.bottom = R.csg = F
            },
            validate: function(b, W) {
                var o = this,
                c = o.gv,
                $ = o.data,
                V = Pk(o),
                U = vb($, c.getMat($), V ? o.s("shape3d.scaleable") : !0);
                if (o.clear(), b) {
                    var B = [];
                    V ? jr(c, $, V, o, o.getBodyColor(), [U], b, B) : (fm(c, $, b, W, U, Tb, B, Uh), fm(c, $, b, W, U, um, B, zo), fm(c, $, b, W, U, aq, B, Rm), fm(c, $, b, W, U, Gg, B, Km), fm(c, $, b, W, U, ps, B, Vd), fm(c, $, b, W, U, $m, B, vn)),
                    B.length && (qk(b.vs, B), qk(b.ns, wk(B)))
                } else o.mat = U,
                (o.shapeModel = V) || (o.vf(Tb), o.vf(um), o.vf(ps), o.vf($m), o.vf(aq), o.vf(Gg))
            },
            vf: function(F) {
                var o = this;
                if (o.gv.getFaceVisible(o.data, F)) {
                    var w = cn(o, F);
                    return w.mat && (o.faceMat = !0),
                    w
                }
            },
            _80o: function(U, f, M) {
                var V = this,
                T = V.gv,
                k = V.data,
                j = T._cube,
                Z = V.shapeModel;
                Jg(T, V.mat),
                Z ? xl(T, k, Z, V, V.getBodyColor(), M) : (Zb(U, j.vs, F, f.aPosition), Zb(U, j.ns, F, f.aNormal), Cn(U, j.is), V._18O(U, f, V.left, 0, M), V._18O(U, f, V.front, 6, M), V._18O(U, f, V.right, 12, M), V._18O(U, f, V.back, 18, M), V._18O(U, f, V.top, 24, M), V._18O(U, f, V.bottom, 30, M)),
                Ed(T),
                V.faceMat && (V._18O(U, f, V.left, 0, M, !0), V._18O(U, f, V.front, 6, M, !0), V._18O(U, f, V.right, 12, M, !0), V._18O(U, f, V.back, 18, M, !0), V._18O(U, f, V.top, 24, M, !0), V._18O(U, f, V.bottom, 30, M, !0))
            },
            _18O: function(B, r, _, J, c, z) {
                if (_) {
                    if (!c(_.transparent)) return;
                    if (z && !_.mat || !z && _.mat) return;
                    z && Jg(this.gv, _.mat);
                    var k = this,
                    g = k.data,
                    C = k.gv,
                    q = C.getTexture(_.texture, g),
                    V = _.uv,
                    j = _.uvScale,
                    m = _.uvOffset,
                    d = _.discardSelectable;
                    if (q) if (V) {
                        for (var M = 8 * (J / 6), Z = 0; 8 > Z; Z++) bb[M + Z] = V[Z];
                        _b(B, r, q, d, C._buffer.uv, bb, m, j)
                    } else _b(B, r, q, d, C._cube.uv, F, m, j);
                    else _b(B);
                    Hi(B, r, _.blend, _.light, _.opacity, _.reverseFlip, _.reverseColor, _.reverseCull),
                    Cc(B, r.uDiffuse, _.color),
                    Kb(B, J, 6),
                    Rk(B, r),
                    af(B, r, q),
                    z && Ed(C)
                }
            }
        });
        var Yi = function(w, n) {
            Lo(Yi, this, [w, n])
        };
        eg(Yi, Ep, {
            _25Q: 1,
            validate: function(R) {
                var a = this,
                X = a.gv,
                c = a.data,
                v = a.s,
                n = v("edge.width"),
                d = c._40I,
                o = c._41I;
                if (a.shapeModel = a.info = F, d && o) {
                    var g, r, w, U, M, Z, W, L, j, I, D = c.isLooped(),
                    u = v(Ae),
                    T = C.getEdgeType(u);
                    if (T) {
                        var m = T(c, ic(a, X, c, D, u), X, a._19Q);
                        if (!m.points || m.points.isEmpty()) return;
                        Z = a.info = {},
                        W = m.segments,
                        M = m.points,
                        L = M.size();
                        for (var Q = d.getElevation(), N = o.getElevation(), P = 0; L > P; P++) {
                            var z = M.get(P);
                            z.e == F && (z.e = Q + (N - Q) * P / (L - 1))
                        }
                        j = Ai(M.get(0)),
                        I = Ai(M.get(L - 1));
                        var l = L % 2;
                        0 === l ? (Z.c1 = Ai(M.get(L / 2 - 1)), Z.c2 = Ai(M.get(L / 2))) : Z.p3 = Ai(M.get((L - l) / 2)),
                        Z.s1 = j,
                        Z.s2 = Ai(M.get(1)),
                        Z.t1 = Ai(M.get(L - 2)),
                        Z.t2 = I
                    } else {
                        M = new Lq,
                        Z = a.info = {};
                        var e = v("edge.offset"),
                        _ = v("edge.center"),
                        p = v("edge.source.t3"),
                        q = v("edge.target.t3"),
                        K = d.p3(),
                        y = o.p3();
                        if (p && (K[0] += p[0], K[1] += p[1], K[2] += p[2]), q && (y[0] += q[0], y[1] += q[1], y[2] += q[2]), u === ue) {
                            W = v("edge.segments");
                            var A = Z.points = v(ah) || ir;
                            if (L = A.size()) {
                                j = Ai(A.get(0)),
                                I = Ai(A.get(L - 1)),
                                !_ && e && (w = Ge(j, K, !0), e = s(e, ep(K, j)), K = [K[0] + w[0] * e, K[1] + w[1] * e, K[2] + w[2] * e], w = Ge(y, I, !0), e = s(e, ep(I, y)), y = [y[0] - w[0] * e, y[1] - w[1] * e, y[2] - w[2] * e]);
                                var l = L % 2;
                                0 === l ? (g = Ai(A.get(L / 2 - 1)), r = Ai(A.get(L / 2))) : Z.p3 = Ai(A.get((L - l) / 2)),
                                Z.s1 = K,
                                Z.s2 = j,
                                Z.t1 = I,
                                Z.t2 = y
                            } else ! _ && e && (w = Ge(y, K, !0), U = ep(K, y), e = pe(e, U), K = [K[0] + w[0] * e, K[1] + w[1] * e, K[2] + w[2] * e], y = [y[0] - w[0] * e, y[1] - w[1] * e, y[2] - w[2] * e]),
                            g = K,
                            r = y;
                            M.add({
                                x: K[0],
                                y: K[2],
                                e: K[1]
                            }),
                            M.addAll(A),
                            M.add({
                                x: y[0],
                                y: y[2],
                                e: y[1]
                            })
                        } else {
                            var Y = ic(a, X, c, D, u);
                            if (a._19Q || (Y = -Y), D) {
                                var f = K[0],
                                B = K[1],
                                V = K[2],
                                H = d.getTall() / 2 + Y;
                                g = [f - Y, B + H, V],
                                r = [f + Y, B + H, V],
                                M.add({
                                    x: f - Y,
                                    y: V,
                                    e: B
                                }),
                                M.add({
                                    x: f - Y,
                                    y: V,
                                    e: B + H
                                }),
                                M.add({
                                    x: f + Y,
                                    y: V,
                                    e: B + H
                                }),
                                M.add({
                                    x: f + Y,
                                    y: V,
                                    e: B
                                })
                            } else {
                                w = Ge(y, K, !0),
                                U = ep(K, y);
                                var E = {
                                    x: K[0],
                                    y: K[2]
                                },
                                G = {
                                    x: y[0],
                                    y: y[2]
                                },
                                i = Jb(F, E, G, Y),
                                J = i.x - E.x,
                                t = i.y - E.y;
                                e = pe(e, U),
                                w[0] *= e,
                                w[1] *= e,
                                w[2] *= e,
                                g = [K[0] + w[0] + J, K[1] + w[1], K[2] + w[2] + t],
                                r = [y[0] - w[0] + J, y[1] - w[1], y[2] - w[2] + t],
                                _ ? (M.add({
                                    x: K[0],
                                    y: K[2],
                                    e: K[1]
                                }), M.add({
                                    x: g[0],
                                    y: g[2],
                                    e: g[1]
                                }), M.add({
                                    x: r[0],
                                    y: r[2],
                                    e: r[1]
                                }), M.add({
                                    x: y[0],
                                    y: y[2],
                                    e: y[1]
                                })) : (M.add({
                                    x: g[0],
                                    y: g[2],
                                    e: g[1]
                                }), M.add({
                                    x: r[0],
                                    y: r[2],
                                    e: r[1]
                                }))
                            }
                        }
                        Z.c1 = g,
                        Z.c2 = r
                    }
                    Z.list = v(Ce) === fo ? a.createTubeModel(M, W, n / 2, R) : a.createLineModel(M, W, n, "edge", "edge.dash")
                }
            }
        });
        var Cq = function(Q, A) {
            Lo(Cq, this, [Q, A])
        };
        eg(Cq, Wg, {
            _80o: function(J, z, b) {
                var A = this,
                U = A.gv,
                O = A.shapeModel;
                Jg(U, A.mat),
                O ? xl(U, A.data, O, A, A.getBodyColor(), b) : (Nr(A, J, z, A.left, b), Nr(A, J, z, A.front, b), Nr(A, J, z, A.right, b), Nr(A, J, z, A.back, b), Nr(A, J, z, A.top, b), Nr(A, J, z, A.bottom, b)),
                Ed(U)
            },
            validate: function(m, n) {
                var V, T, j = this,
                K = j.s,
                t = j.data,
                P = t.p3(),
                k = t._thickness / 2,
                p = t.isClosePath(),
                D = t.getPoints(),
                Z = t.getSegments(),
                Q = K(Ie),
                Y = m && m.uv;
                if (j.clear(), 0 > k) T = j.shapeModel = uj(D, Z, K(Sm), K(Ap), Q, K($h), t.getTall(), t.getElevation(), p),
                K(_e) ? K("shape3d.image") || delete T.uv: (delete T.vs, delete T.ns, delete T.uv),
                K("shape3d.top.image") || delete T.top_uv,
                K("shape3d.bottom.image") || delete T.bottom_uv;
                else if (K(Ce) === fo) V = Dp(D, Z, Q, p),
                T = j.shapeModel = {
                    vs: []
                },
                K("shape3d.image") && (T.uv = [], T.sum = K($h) || Si(V) || 1, T.len = 0),
                K(Sm) && !p && (T.top_vs = [], K("shape3d.top.image") && (T.top_uv = [])),
                K(Ap) && !p && (T.bottom_vs = [], K("shape3d.bottom.image") && (T.bottom_uv = [])),
                j._12O(V, k);
                else {
                    var H, s, e, h, L, N, U, E, l, B;
                    V = Dp(D, Z, Q, p),
                    L = j.vf(ps, Y, !1, n),
                    k && (N = j.vf($m, Y, !1, n), U = p ? F: j.vf(Tb, Y, !1, n), E = p ? F: j.vf(um, Y, !1, n), l = j.vf(aq, Y, !1, n), B = j.vf(Gg, Y, !1, n)),
                    k ? j._12O(V, k) : L && V.forEach(function(p) {
                        if (h = p.length, h > 0) for (H = p[0], e = 1; h > e; e++) s = p[e],
                        j.addV(L.vs, H, s),
                        H = s
                    }),
                    j._20Q(V),
                    m || (L && (L.ns = wk(L.vs), mg(L, "vs"), mg(L, wg)), k && (N && (N.ns = wk(N.vs), mg(N, "vs"), mg(N, wg)), U && (U.ns = wk(U.vs), mg(U, "vs"), mg(U, wg)), E && (E.ns = wk(E.vs), mg(E, "vs"), mg(E, wg)), l && (l.ns = wk(l.vs), mg(l, "vs"), mg(l, wg)), B && (B.ns = wk(B.vs), mg(B, "vs"), mg(B, wg))))
                }
                var q = j.mat = Vi();
                rc(q, P),
                Bh(q, t.r3(), t.getRotationMode()),
                rc(q, ck(P)),
                m && (Oh(j, q, m, T), j.clear())
            },
            _20Q: function(r) {
                var q, I, k, l, W, j, G, o = this,
                H = o.front,
                L = o.back,
                P = o.top,
                d = o.bottom,
                b = H ? H.tuv: F,
                v = L ? L.tuv: F,
                E = P ? P.tuv: F,
                Q = d ? d.tuv: F,
                X = 0; (b || v || E || Q) && (q = o.s($h) || Si(r) || 1, r.forEach(function(i) {
                    if (I = i.length, I > 0) for (j = i[0], k = 1; I > k; k++) G = i[k],
                    l = X / q,
                    X += ep(j, G),
                    W = X / q,
                    o._14O(H, l, W),
                    o._14O(L, 1 - W, 1 - l),
                    o._14O(P, l, W),
                    o._14O(d, l, W),
                    j = G
                }))
            },
            _14O: function(X, i, Q) {
                if (X) {
                    var B = X.uv,
                    e = X.tuv;
                    if (e) {
                        if (B) var T = B[0] + (B[6] - B[0]) * i,
                        x = B[1] + (B[7] - B[1]) * i,
                        K = B[2] + (B[4] - B[2]) * i,
                        R = B[3] + (B[5] - B[3]) * i,
                        c = B[2] + (B[4] - B[2]) * Q,
                        E = B[3] + (B[5] - B[3]) * Q,
                        H = B[0] + (B[6] - B[0]) * Q,
                        n = B[1] + (B[7] - B[1]) * Q;
                        else T = i,
                        x = 0,
                        K = i,
                        R = 1,
                        c = Q,
                        E = 1,
                        H = Q,
                        n = 0;
                        e.push(K, R, c, E, H, n, H, n, T, x, K, R)
                    }
                }
            },
            _13O: function(l) {
                var e = l.uv,
                G = l.tuv;
                G && (e ? G.push(e[2], e[3], e[4], e[5], e[6], e[7], e[6], e[7], e[0], e[1], e[2], e[3]) : G.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            },
            _12O: function(v, U) {
                var h, X, _, L, N, W = this;
                v.forEach(function(B) {
                    if (N = B.length, N > 0) for (h = {
                        p: B[0],
                        n: !0
                    },
                    L = 1; N > L; L++) X = B[L],
                    _ = N - 1 > L ? B[L + 1] : F,
                    W.addPoint(h, X, _, U, B)
                })
            },
            addPoint: function(j, u, Y, k, o) {
                var T, p, B, E, L, W, Z, S, r, q = this,
                c = j.p,
                $ = j.f,
                O = j.b,
                i = q.s("shape3d.side") || Qm,
                K = q.s("shape3d.start.angle"),
                A = q.shapeModel,
                v = q.data.isClosePath();
                if (j.n && (j.n = !1, $ = v && o.length > 2 ? Jb(o[o.length - 2], c, u, k) : Jb(F, c, u, k), O = mo(c, $), A ? A.top_vs && q._10O(O, $, i, K, A.top_vs, A.top_uv) : (T = q.left) && (q.addV(T.vs, O, $), q._13O(T))), p = Y ? Jb(c, u, Y, k) : v && o.length > 2 ? Jb(c, u, o[1], k) : Jb(c, u, F, k), B = mo(u, p), A) {
                    var R, d, h = A.vs,
                    n = A.uv,
                    N = A.sum;
                    for (n && (R = A.len / N, A.len += ep(c, u), d = A.len / N), W = q._9O(O, $, i, K), Z = q._9O(B, p, i, K), S = 0; i > S; S++) r = S + 1,
                    qk(h, W[r]),
                    qk(h, Z[S]),
                    qk(h, W[S]),
                    qk(h, Z[S]),
                    qk(h, W[r]),
                    qk(h, Z[r]),
                    n && (E = S / i, L = r / i, n.push(R, L, d, E, R, E, d, E, R, L, d, L)); ! Y && A.bottom_vs && q._10O(B, p, i, K, A.bottom_vs, A.bottom_uv, !0)
                } else ! Y && (T = q.right) && (q.addV(T.vs, p, B), q._13O(T)),
                (T = q.front) && q.addV(T.vs, $, p),
                (T = q.back) && q.addV(T.vs, B, O),
                (T = q.top) && q.addH(T.vs, $, p, B, O, !0),
                (T = q.bottom) && q.addH(T.vs, O, B, p, $);
                j.p = u,
                j.f = p,
                j.b = B
            },
            _10O: function(a, J, t, s, j, l, V) {
                var w, f, L = this,
                b = L.data,
                z = L._9O(a, J, t, s),
                M = (a.x + J.x) / 2,
                B = (a.y + J.y) / 2,
                Y = b.getElevation(),
                I = 0;
                for (I = 0; t > I; I++) V ? (qk(j, z[I]), qk(j, z[I + 1])) : (qk(j, z[I + 1]), qk(j, z[I])),
                qk(j, [M, Y, B]),
                l && (V ? (w = X * (I + 1) / t + s, f = X * I / t + s) : (w = X * I / t + s, f = X * (I + 1) / t + s), l.push(.5 - .5 * i(f), .5 - .5 * g(f), .5 - .5 * i(w), .5 - .5 * g(w), .5, .5))
            },
            _9O: function(x, p, W, t) {
                for (var _, U, y = this,
                o = y.data,
                T = [], R = (x.x + p.x) / 2, Q = (x.y + p.y) / 2, h = o.getTall() / 2, Y = o.getElevation(), L = 0; W >= L; L++) _ = X * L / W + t,
                U = i(_),
                T.push([R + (x.x - R) * U, Y + h * g(_), Q + (x.y - Q) * U]);
                return T
            },
            addV: function(e, q, M) {
                var j = q.x,
                x = q.y,
                L = M.x,
                p = M.y,
                a = this.data,
                i = a.getElevation(),
                C = a.getTall() / 2;
                e.push(j, i - C, x, L, i - C, p, L, i + C, p, L, i + C, p, j, i + C, x, j, i - C, x)
            },
            addH: function(V, K, t, i, q, k) {
                var h = this.data,
                Q = h.getTall() / 2,
                d = h.getElevation() + (k ? Q: -Q);
                V.push(K.x, d, K.y, t.x, d, t.y, i.x, d, i.y, i.x, d, i.y, q.x, d, q.y, K.x, d, K.y)
            },
            vf: function(H, r, N, D) {
                var h, t = this,
                S = t.gv.getFaceVisible(t.data, H);
                return (N || S) && (h = cn(t, H, D), h.vs = [], h.tuv = S && (h.texture || r) ? [] : F, h.visible = S),
                h
            }
        });
        var Of = function(l, $) {
            Lo(Of, this, [l, $])
        };
        eg(Of, Ep, {
            _25Q: 1,
            validate: function(K) {
                var Y = this,
                $ = Y.data,
                d = Y.s,
                L = $.getPoints(),
                Q = L.size();
                if (Y.shapeModel = Y.info = F, Q > 1) {
                    var B = Y.info = {},
                    A = $.getSegments(),
                    D = $.getThickness(),
                    r = Ai(L.get(0)),
                    H = Ai(L.get(Q - 1)),
                    g = Q % 2;
                    0 === g ? (B.c1 = Ai(L.get(Q / 2 - 1)), B.c2 = Ai(L.get(Q / 2))) : B.p3 = Ai(L.get((Q - g) / 2)),
                    B.s1 = r,
                    B.s2 = Ai(L.get(1)),
                    B.t1 = Ai(L.get(Q - 2)),
                    B.t2 = H,
                    B.list = d(Ce) === fo ? Y.createTubeModel(L, A, D / 2, K) : Y.createLineModel(L, A, D, "shape.border", "shape.dash")
                }
            }
        }),
        vc(C, {
            accordionViewExpandIcon: Wm(_r),
            accordionViewCollapseIcon: Wm(_r, !0),
            accordionViewLabelColor: Cf,
            accordionViewLabelFont: El,
            accordionViewTitleBackground: Fh,
            accordionViewSelectBackground: jk,
            accordionViewSelectWidth: 3,
            accordionViewSeparatorColor: V,
            splitViewDividerSize: 1,
            splitViewDividerBackground: Fh,
            splitViewDragOpacity: .5,
            splitViewToggleIcon: {
                width: 16,
                height: 16,
                comps: [{
                    type: tr,
                    rect: [2, 2, 12, 12],
                    background: _r
                }]
            },
            propertyViewLabelColor: Wp,
            propertyViewLabelSelectColor: Cf,
            propertyViewLabelFont: El,
            propertyViewExpandIcon: Wm(bk),
            propertyViewCollapseIcon: Wm(bk, !0),
            propertyViewBackground: Ch,
            propertyViewRowLineVisible: !0,
            propertyViewColumnLineVisible: !0,
            propertyViewRowLineColor: tn,
            propertyViewColumnLineColor: tn,
            propertyViewSelectBackground: jk,
            listViewLabelColor: Wp,
            listViewLabelSelectColor: Cf,
            listViewLabelFont: El,
            listViewRowLineVisible: !1,
            listViewRowLineColor: tn,
            listViewSelectBackground: jk,
            treeViewLabelColor: Wp,
            treeViewLabelSelectColor: Cf,
            treeViewLabelFont: El,
            treeViewExpandIcon: Wm(ge),
            treeViewCollapseIcon: Wm(ge, !0),
            treeViewRowLineVisible: !1,
            treeViewRowLineColor: tn,
            treeViewSelectBackground: jk,
            treeViewDoubleClickToToggle: !0,
            tableViewLabelColor: Wp,
            tableViewLabelSelectColor: Cf,
            tableViewLabelFont: El,
            tableViewRowLineVisible: !0,
            tableViewColumnLineVisible: !0,
            tableViewRowLineColor: tn,
            tableViewColumnLineColor: tn,
            tableViewSelectBackground: jk,
            treeTableViewLabelColor: Wp,
            treeTableViewLabelSelectColor: Cf,
            treeTableViewLabelFont: El,
            treeTableViewExpandIcon: Wm(ge),
            treeTableViewCollapseIcon: Wm(ge, !0),
            treeTableViewRowLineVisible: !0,
            treeTableViewColumnLineVisible: !0,
            treeTableViewRowLineColor: tn,
            treeTableViewColumnLineColor: tn,
            treeTableViewSelectBackground: jk,
            tableHeaderLabelColor: Wp,
            tableHeaderLabelFont: El,
            tableHeaderColumnLineVisible: !0,
            tableHeaderColumnLineColor: Bd,
            tableHeaderBackground: Ch,
            tableHeaderMoveBackground: gc,
            tableHeaderInsertColor: jk,
            tableHeaderSortDescIcon: Qb(bk, !0),
            tableHeaderSortAscIcon: Qb(bk),
            tabViewTabGap: 1,
            tabViewLabelColor: Cf,
            tabViewLabelFont: El,
            tabViewTabBackground: Fh,
            tabViewSelectWidth: 3,
            tabViewSelectBackground: jk,
            tabViewMoveBackground: gc,
            tabViewInsertColor: jk,
            toolbarLabelColor: Wp,
            toolbarLabelSelectColor: Cf,
            toolbarLabelFont: El,
            toolbarBackground: Ch,
            toolbarSelectBackground: jk,
            toolbarItemGap: 8,
            toolbarSeparatorColor: Br
        },
        !0);
        var kq = {
            translateX: 1,
            sortColumn: 1
        },
        yn = {
            sortable: 1,
            sortOrder: 1,
            sortFunc: 1
        },
        ne = {
            focusData: 1
        },
        Lb = {
            dataModel: 1,
            sortColumn: 1,
            sortFunc: 1,
            visibleFunc: 1,
            rootData: 1,
            rootVisible: 1
        },
        Uj = {
            dataModel: 1,
            sortFunc: 1,
            visibleFunc: 1,
            categorizable: 1
        },
        gn = function(T, V) {
            V.add(T),
            T.hasChildren() && T.eachChild(function(w) {
                gn(w, V)
            })
        },
        Vr = function(I, E, i, h, G, K, P, V, n, b, R) {
            var v, p = i.getValueType(),
            c = i.getAlign();
            if (i.getEnumValues()) {
                var Z = i.toEnumLabel(E),
                k = Tk || 0,
                N = 0,
                m = K,
                e = C.getTextSize(h, Z).width;
                return v = oq(i.toEnumIcon(E)),
                v && (N = K + Tk / 2, "center" === c ? N += (V - (k + e)) / 2 : "right" === c && (N = N + V - (k + e)), Cs(I, v, N, P + n / 2), m = N + Tk / 2),
                Z != F && (v ? wb(I, Z, h, G, m, P, V - (m - K), n) : wb(I, Z, h, G, K, P, V, n, c)),
                void 0
            }
            return E = i.formatValue(E),
            E != F ? p === Qk ? (qe(I, K, P, V, n, E), void 0) : p === hh || !p && Xq(E) ? (v = oq(E ? Pb: be), Cs(I, v, K + V / 2, P + n / 2, b, R), void 0) : (wb(I, E, h, G, K, P, V, n, c), void 0) : void 0
        },
        jg = function(x, i) {
            var O = i.view,
            j = O.getDataModel().getHistoryManager(),
            P = Ee(x),
            h = i.column || i.property;
            j && j.beginInteraction(),
            i.editor = x,
            x.info = i,
            O.setCurrentEditor(x),
            O.getView().insertBefore(P, O._79O),
            Sn(x, i.editorRect),
            x.setFocus ? x.setFocus() : ze(x),
            x.commitValue = function() {
                x._17Q && (x = x._17Q),
                O.setValue(i.data, h, x.getValue ? x.getValue() : x.value),
                x.close && x.close(),
                Gq(P)
            },
            h.onEditorCreated && h.onEditorCreated(i)
        },
        Aj = function(h, Q, l, X, S) {
            var j = Jk(h, l),
            z = Q.value,
            N = Q.view,
            s = S.getValueType();
            return j.onblur = j.onchange = function() {
                N.endEditing()
            },
            "input" === h ? (z = S.formatValue(z), z != F && (j.value = z), j.onkeydown = function(E) {
                ib(E) && N.endEditing()
            },
            (s === Ek || s === xq) && j.addEventListener(Ur, C.numberListener, !1)) : h === Yj && X.forEach(function(B) {
                var d = E.createElement("option");
                d.innerHTML = S.toEnumLabel(B),
                d.value = B,
                S.isEnumEqual(z, B) && (d.selected = !0),
                Bf(j, d)
            }),
            jg(j, Q),
            j
        },
        Ff = Y.widget = {},
        Zm = function(M, Q, y) {
            eg(K + ".widget." + M, Q, y)
        };
        vc(Yn, {
            ms_value: function(W) {
                W.getValue = function(B) {
                    var p = this.getItemById(B),
                    a = p.element;
                    return Cl(a) ? a: a ? a.getValue ? a.getValue() : a.value: p.selected
                },
                W.setValue = function(w, m) {
                    var b = this.getItemById(w),
                    R = b.element;
                    R && !Cl(R) ? R.setValue ? R.setValue(m) : R.value = m: Xq(m) ? (b.selected = m, this.iv()) : (b.element = m, this.iv())
                },
                W.v = function(P, F) {
                    var D = this;
                    if (2 === arguments.length) D.setValue(P, F);
                    else {
                        if (!_l(P)) return D.getValue(P);
                        for (var Z in P) D.setValue(Z, P[Z])
                    }
                    return D
                }
            },
            _46o: function(G) {
                G._icon = F,
                G._accessType = F,
                G._valueType = F,
                G._editable = !1,
                G._batchEditable = !0,
                G._align = Tb,
                G._nullable = !0,
                G._emptiable = !1,
                G.setParent = re,
                G.formatValue = function(z) {
                    var Y = this,
                    B = Y._valueType;
                    if (Y.getEnumValues()) return Y.toEnumLabel(z);
                    if (B === hh) return !! z;
                    if (z != F) {
                        if (B === Ek) return Q(z);
                        if (ye(z)) return mj(z)
                    }
                    return z
                },
                G.setEnum = function(e, f, i, p, E, U) {
                    var Y = this;
                    e && !eb(e) && e.values && (p = e.editable, i = e.icons, f = e.labels, E = e.strict, U = e.maxHeight, e = e.values),
                    Fm(e) && (e = e._as),
                    Fm(f) && (f = f._as),
                    Fm(i) && (i = i._as),
                    Y._enumValues = e,
                    Y._enumLabels = f,
                    Y._enumIcons = i,
                    Y._enumEditable = p,
                    Y._enumStrict = E == F ? !0 : E,
                    Y._enumMaxHeight = U,
                    e && e.length && ye(e[0]) && (Y._valueType = xq),
                    Y.fp("enum", !1, !0)
                },
                G.getEnumMaxHeight = function() {
                    return this._enumMaxHeight
                },
                G.isEnumEditable = function() {
                    return this._enumEditable
                },
                G.getEnumValues = function() {
                    return this._enumValues
                },
                G.getEnumLabels = function() {
                    return this._enumLabels
                },
                G.getEnumIcons = function() {
                    return this._enumIcons
                },
                G.isEnumStrict = function() {
                    return this._enumStrict
                },
                G.isEnumEqual = function(A, R) {
                    return this._enumStrict ? A === R: A == R
                },
                G.toEnumLabel = function(D) {
                    var d = this,
                    k = d._enumValues,
                    h = d._enumLabels;
                    if (k && h) for (var C = 0; C < k.length; C++) if (d.isEnumEqual(D, k[C])) return h[C];
                    return D
                },
                G.toEnumIcon = function(g) {
                    var _ = this,
                    L = _._enumValues,
                    i = _._enumIcons;
                    if (L && i) for (var H = 0; H < L.length; H++) if (_.isEnumEqual(g, L[H])) return i[H];
                    return V
                }
            },
            _45o: function(e) {
                e._87o = function(h, c, p, Q, X, o) {
                    if (h) {
                        var t = this,
                        J = t._90I,
                        M = hs(1);
                        t._columnLineVisible && (X -= 1),
                        t._rowLineVisible && (o -= 1),
                        0 >= X || 0 >= o || (t._90I || (J = t._90I = {}), J[c] || (J[c] = new Lq), Sn(M, t.tx() + p, t.ty() + Q, X, o), Bf(M, h), t._view.insertBefore(M, t._79O), h.onParentAdded && h.onParentAdded(M), J[c].add(M))
                    }
                },
                e._76o = function() {
                    var U = this,
                    R = U._90I;
                    if (R) {
                        for (var v in R) R[v].each(function(v) {
                            Gq(v)
                        });
                        delete U._90I
                    }
                },
                e._77o = function(F) {
                    var J = this;
                    if (J._90I) {
                        var V = J._90I[F];
                        V && (V.each(function(p) {
                            Gq(p)
                        }), delete J._90I[F])
                    }
                }
            },
            _47o: function(L) {
                L.getValue = function(s, U) {
                    return U.getValue ? U.getValue(s, U, this) : rp(s, U.getAccessType(), U.getName())
                },
                L.setValue = function(g, w, m) {
                    if (w.isEmptiable() || "" !== m || (m = V), w.isNullable() || m != F) {
                        var N = this,
                        A = w.getName(),
                        R = w.getAccessType(),
                        x = w.getValueType();
                        x === Ek && Cl(m) ? m = q(m) : x === xq && Cl(m) ? m = parseFloat(m) : x === hh && Cl(m) && (m = "true" === m),
                        N._batchEditable && w._batchEditable && N.isSelected(g) ? N.sm().each(function(T) {
                            w.setValue ? w.setValue(T, w, m, N) : Wb(T, R, A, m)
                        }) : w.setValue ? w.setValue(g, w, m, N) : Wb(g, R, A, m)
                    }
                },
                L.setCurrentEditor = function(O) {
                    this.endEditing(),
                    this._currentEditor = O,
                    this.redraw()
                },
                L.isEditing = function(B, K) {
                    var H = this,
                    P = H._currentEditor;
                    if (!P) return ! 1;
                    if (K) {
                        var y = P.info;
                        return y ? (y.column || y.property) === K && y.data === B: !1
                    }
                    return ! 0
                },
                L.endEditing = function() {
                    var $ = this,
                    t = $._currentEditor,
                    O = $.getDataModel().getHistoryManager();
                    t && (delete $._currentEditor, t.commitValue && t.commitValue(t.info), $.redraw(), O && O.endInteraction())
                },
                L.beginEditing = function(m) {
                    this.endEditing();
                    var Z = this,
                    d = m.column || m.property;
                    if (d.beginEditing) d.beginEditing(m);
                    else {
                        var j = m.data,
                        U = m.value,
                        b = Z.getSelectBackground(j),
                        c = d.getEnumValues(),
                        R = d.getSlider(),
                        D = d.getColorPicker();
                        if (R) {
                            var N = on(Ff.Slider, R);
                            return N.setValue(U),
                            N.getView().onblur = function() {
                                Z.endEditing()
                            },
                            N.isInstant() && (N.onValueChanged = function() {
                                Z.setValue(j, d, N.getValue())
                            }),
                            jg(N, m),
                            void 0
                        }
                        if (D || d.getValueType() === Qk) {
                            var M = on(Ff.ColorPicker, D);
                            return M.setValue(U),
                            M.onClosed = function() {
                                Z.endEditing()
                            },
                            M.isInstant() && (M.onValueChanged = function(a, x) {
                                Z.setValue(j, d, x)
                            }),
                            jg(M, m),
                            M.open(),
                            void 0
                        }
                        if (c) {
                            if (Ff.ComboBox) {
                                var g = new Ff.ComboBox;
                                g.setValue(U),
                                g.setValues(c),
                                g.setLabels(d.getEnumLabels()),
                                g.setIcons(d.getEnumIcons()),
                                g.setEditable(d.isEnumEditable()),
                                g.setStrict(d.isEnumStrict()),
                                g.setMaxHeight(d.getEnumMaxHeight()),
                                g.onClosed = function() {
                                    Z.endEditing()
                                },
                                jg(g, m),
                                g.open()
                            } else Aj(Yj, m, b, c, d);
                            return
                        }
                        var o = d.getValueType();
                        if (o === hh || Xq(U)) return Z.setValue(j, d, !U),
                        void 0;
                        if (d.getItemEditor()) {
                            var Q = cf(d.getItemEditor()),
                            X = new Q(j, d, Z, m),
                            K = X.getView();
                            return K._17Q = X,
                            X.setValue(U),
                            dg(K),
                            jg(K, m),
                            X.editBeginning && X.editBeginning(),
                            void 0
                        }
                        Aj("input", m, b, F, d)
                    }
                }
            },
            _44o: function(p) {
                p.init = function(Y) {
                    var n = this,
                    f = n.th = new Po(Y),
                    A = n._view = Kp(1, n);
                    n.tv = n._tableView = Y,
                    Bf(A, f.getView()),
                    Bf(A, Y.getView()),
                    f.mp(function(y) {
                        y.property === $f && n.iv()
                    }),
                    n.iv()
                },
                p.getTableView = function() {
                    return this.tv
                },
                p.getTableHeader = function() {
                    return this.th
                },
                p.getDataModel = function() {
                    return this.tv.dm()
                },
                p.getColumnModel = function() {
                    return this.tv.getColumnModel()
                },
                p.setColumns = function(Q) {
                    this.tv.setColumns(Q)
                },
                p.addColumns = function(f) {
                    this.tv.addColumns(f)
                },
                p.endEditing = function() {
                    this.tv.endEditing()
                },
                p.validateImpl = function() {
                    var B = this,
                    t = B.th,
                    c = hd(t),
                    W = {
                        x: 0,
                        y: 0,
                        width: B.getWidth(),
                        height: c
                    };
                    Sn(t, W),
                    W.y = c,
                    W.height = h(0, B.getHeight() - c),
                    Sn(B.tv, W)
                }
            },
            ms_vs: function(_) {
                _._41o = function() {
                    return this._29I.height < this._59I
                },
                _._43o = function() {
                    var N = this;
                    N._41o() && (N._58I || (u(function() {
                        N._94O()
                    },
                    gd), N.iv()), N._58I = new Date)
                },
                _._94O = function() {
                    var P = this;
                    if (P._58I) {
                        var g = new Date;
                        g.getTime() - P._58I.getTime() >= gd ? (delete P._58I, P.iv()) : u(function() {
                            P._94O()
                        },
                        gd)
                    }
                },
                _._93I = function() {
                    var P = this,
                    B = P._27I;
                    if (P._58I || !P._autoHideScrollBar) {
                        B || Bf(P._79O, B = P._27I = hs());
                        var Z = P._29I,
                        I = Z.height,
                        R = P._59I,
                        H = P.getScrollBarSize(),
                        N = Z.width - H - 2,
                        Q = I * ( - P.ty() / R),
                        W = I * (I / R),
                        F = B.style;
                        R > I ? (Xf > W && (Q = Q + W / 2 - Xf / 2, 0 > Q && (Q = 0), Q + Xf > I && (Q = I - Xf), W = Xf), F.visibility = ql, F.background = P.getScrollBarColor(), F.borderRadius = H / 2 + mb, Sn(B, N, Q, H, W)) : F.visibility = gl
                    } else B && (B.style.visibility = gl)
                }
            },
            ms_hs: function(C) {
                C._40o = function() {
                    return this._29I.width < this._91I
                },
                C._42o = function() {
                    var G = this;
                    G._40o() && (G._95O || (u(function() {
                        G._94I()
                    },
                    gd), G.iv()), G._95O = new Date)
                },
                C._94I = function() {
                    var z = this;
                    if (z._95O) {
                        var $ = new Date;
                        $.getTime() - z._95O.getTime() >= gd ? (delete z._95O, z.iv()) : u(function() {
                            z._94I()
                        },
                        gd)
                    }
                },
                C._92I = function() {
                    var A = this,
                    g = A._28I;
                    if (A._95O || !A._autoHideScrollBar) {
                        g || Bf(A._79O, g = A._28I = hs());
                        var J = A._29I,
                        h = J.width,
                        T = A._91I,
                        e = A.getScrollBarSize(),
                        o = J.height - e - 2,
                        z = h * ( - A.tx() / T),
                        _ = h * (h / T),
                        a = g.style;
                        T > h ? (Xf > _ && (z = z + _ / 2 - Xf / 2, 0 > z && (z = 0), z + Xf > h && (z = h - Xf), _ = Xf), a.visibility = ql, a.background = A.getScrollBarColor(), a.borderRadius = e / 2 + mb, Sn(g, z, o, _, e)) : a.visibility = gl
                    } else g && (g.style.visibility = gl)
                }
            }
        }),
        Td(Pb, yf(16, 16, [{
            type: ih,
            rect: [1, 1, 14, 14],
            background: jk
        },
        {
            type: Af,
            rect: [1, 1, 14, 14],
            width: 1,
            color: ed
        },
        {
            type: Fb,
            points: [13, 3, 7, 12, 4, 8],
            borderWidth: 2,
            borderColor: "#FFF"
        }])),
        Td(be, yf(16, 16, {
            type: Af,
            rect: [1, 1, 14, 14],
            width: 1,
            color: ed
        })),
        Td(nb, yf(16, 16, [{
            type: zf,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: ed,
            background: "#FFF"
        },
        {
            type: zf,
            rect: [4, 4, 8, 8],
            background: jk
        }])),
        Td(Ip, yf(16, 16, {
            type: zf,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: ed
        })),
        Yn._15Q = function(P) {
            P._29I = mk,
            P._59I = 0,
            P._91I = 0,
            P._5o = function(L) {
                var F = this;
                F._30I = new Lq,
                F._rows = new Lq,
                F._rowMap = {},
                F._31I = 0,
                F._14I = 0,
                F._view = Kp(1, F),
                F._canvas = Jr(F._view),
                Bf(F._view, F._79O = hs()),
                F.dm(L ? L: new si)
            },
            P.getCheckIcon = function(B) {
                var J = this.sm(),
                w = J.co(B);
                return J.sg() ? oq(w ? nb: Ip) : oq(w ? Pb: be)
            },
            P.checkData = function(q) {
                var B = this.sm(),
                g = B.co(q);
                B.sg() && g || (this._32o = 1, g ? B.rs(q) : B.as(q), delete this._32o)
            },
            P.getDataAt = function(N) {
                N.target && (N = this.lp(N));
                var A = T(N.y / this._rowHeight),
                M = this._rows;
                return 0 > A || A >= M.size() ? F: M.get(A)
            },
            P.onDataDoubleClicked = function() {},
            P.onDataClicked = function() {},
            P.adjustTranslateX = function() {
                return 0
            },
            P.adjustTranslateY = function(C) {
                var o = this.getHeight() - this._59I;
                return o > C && (C = o),
                C > 0 ? 0 : Q(C)
            },
            P.onPropertyChanged = function(d) {
                var N = this,
                G = d.property;
                Lb[G] ? N.ivm() : ne[G] || N.redraw(),
                G === Se ? N._42o() : G === _d && N._43o()
            },
            P.getLabel = function(S) {
                return S.toLabel()
            },
            P.getLabelFont = function() {
                return this._labelFont
            },
            P.getLabelColor = function(J) {
                var n = this;
                if (n.isCheckMode()) {
                    if (n._focusData === J) return n._labelSelectColor
                } else if (n.isSelected(J)) return n._labelSelectColor;
                return n._labelColor
            },
            P.getStartRowIndex = function() {
                return this._31I
            },
            P.getEndRowIndex = function() {
                return this._14I
            },
            P.getRowDatas = function() {
                return this._rows
            },
            P.getRowIndex = function(R) {
                return this._rowMap[R._id]
            },
            P.getRowSize = function() {
                return this._rows.size()
            },
            P.getViewRect = function() {
                return qj(this._29I)
            },
            P.isVisible = function(H) {
                return this._visibleFunc ? this._visibleFunc(H) : !0
            },
            P.getCurrentSortFunc = function() {
                return this._sortFunc
            },
            P.setDataModel = function(Z) {
                var u = this,
                K = u._dataModel,
                h = u._3o;
                K !== Z && (K && (K.umm(u.handleDataModelChange, u), K.umd(u.handleDataPropertyChange, u), K.umh(u._15o, u), h || K.sm().ums(u._16o, u)), u._dataModel = Z, Z.mm(u.handleDataModelChange, u), Z.md(u.handleDataPropertyChange, u), Z.mh(u._15o, u), h ? h._21I(Z) : Z.sm().ms(u._16o, u), u.fp("dataModel", K, Z))
            },
            P.validateModel = function() {
                var I = this;
                I._rows.clear(),
                I._rowMap = {},
                I.buildChildren(I._dataModel._roots);
                var M = I._rows = I._rows.toList(I.isVisible, I),
                G = 0,
                C = I.getCurrentSortFunc(),
                m = M.size();
                for (C && M.sort(C); m > G; G++) I._rowMap[M.get(G)._id] = G
            },
            P.buildChildren = function(t) {
                var r = this;
                t.each(function(h) {
                    r._rows.add(h),
                    r.buildChildren(h._children)
                })
            },
            P.handleDataModelChange = function() {
                this.ivm()
            },
            P.handleDataPropertyChange = function(E) {
                "parent" === E.property ? this.ivm() : this.invalidateData(E.data)
            },
            P._15o = function() {
                this.ivm()
            },
            P._16o = function(o) {
                o.datas.each(this.invalidateData, this),
                this.onSelectionChanged(o)
            },
            P.onSelectionChanged = function(u) {
                var M = this,
                C = M.sm(); ! M.isAutoMakeVisible() || 1 !== C.size() || "set" !== u.kind && "append" !== u.kind || M._32o || M.makeVisible(C.ld())
            },
            P.makeVisible = function(D) {
                D && (this._23I = D, this.iv())
            },
            P.scrollToIndex = function(d) {
                var A = this,
                $ = A._29I,
                O = $.height,
                Y = A._rowHeight,
                W = Y * d;
                d >= 0 && d < A._rows.size() && O > 0 && (W + Y > $.y + O ? A.ty( - W + O - Y) : W < $.y && A.ty( - W))
            },
            P.ivm = function() {
                this.invalidateModel()
            },
            P.invalidateModel = function() {
                var s = this;
                s._96I || (s._96I = 1, s._32I = 1, delete s._24I, s.iv())
            },
            P.redraw = function() {
                var E = this;
                E._32I || (E._32I = 1, delete E._24I, E.iv())
            },
            P.invalidateData = function(Q) {
                var $ = this;
                J ? $.redraw() : $._32I || ($._24I || ($._24I = {}), $._24I[Q._id] = Q, $.iv())
            },
            P.getFocusData = function() {
                return this._focusData
            },
            P.setFocusDataById = function(O) {
                this.setFocusData(this.dm().getDataById(O))
            },
            P.setFocusData = function(j) {
                var l = this,
                D = l._focusData;
                D !== j && (l._focusData = j, l.fp("focusData", D, j), D && l.invalidateData(D), j && (l.invalidateData(j), l.isAutoMakeVisible() && l.makeVisible(j)))
            },
            P.drawRowBackground = function(t, u, _, C, v, K, B) {
                var h = this,
                l = h.isCheckMode(); (u === h._focusData && l || _ && !l) && qe(t, C, v, K, B, h.getSelectBackground(u))
            },
            P.drawData = function(V, a, Z) {
                var u = this,
                W = u._rowHeight,
                i = W * Z,
                q = u._29I,
                D = q.x,
                l = q.width;
                V.save(),
                V.beginPath(),
                V.rect(D, i, l, W),
                V.clip(),
                u._87o(u.drawRow(V, a, u.isSelected(a), D, i, l, W), Z, D, i, l, W),
                V.restore(),
                u._rowLineVisible && qe(V, D, i + W - 1, l, 1, u._rowLineColor)
            },
            P._12I = function(R) {
                var l = this,
                e = l._31I,
                A = l._29I,
                m = A.x,
                y = A.y,
                p = A.width,
                B = A.height;
                for (R.beginPath(), R.rect(m, y, p, B), R.clip(), R.clearRect(m, y, p, B), l._76o(), l._93db(R); e < l._14I; e++) l.drawData(R, l._rows.get(e), e);
                l._92db(R)
            },
            P._13I = function(u) {
                for (var V, L = this,
                y = L._rowHeight,
                Y = L._29I,
                a = Y.x,
                C = Y.width,
                B = L._31I,
                o = L._30I; B < L._14I; B++) V = L._rows.get(B),
                L._24I[V._id] && o.add({
                    data: V,
                    index: B
                });
                o.isEmpty() || (u.beginPath(), o.each(function(s) {
                    u.rect(a, s.index * y, C, y)
                }), u.clip(), o.each(function(U) {
                    u.clearRect(a, U.index * y, C, y)
                }), o.each(function(d) {
                    L._77o(d.index)
                }), L._93db(u), o.each(function($) {
                    L.drawData(u, $.data, $.index)
                }), L._92db(u), o.clear())
            },
            P.validateImpl = function() {
                var y = this,
                U = y._canvas,
                K = y.getWidth(),
                $ = y.getHeight(),
                s = y._rowHeight,
                p = y._32I; (K !== U.clientWidth || $ !== U.clientHeight) && (Kc(U, K, $), p = 1);
                var v = M && !x;
                y._96I && !v && y.validateModel();
                var E = y._29I,
                k = {
                    x: -y.tx(),
                    y: -y.ty(),
                    width: K,
                    height: $
                },
                f = y._rows.size(),
                Y = oo(U),
                J = y._23I;
                p || Dj(k, E) || (p = 1),
                y._29I = k,
                y._59I = f * s,
                y._31I = T(k.y / s),
                y._14I = w((k.y + k.height) / s),
                y._31I < 0 && (y._31I = 0),
                y._14I > f && (y._14I = f),
                y._99I && p && y._99I(),
                ws(Y, y.tx(), y.ty(), 1),
                p ? y._12I(Y) : y._24I && y._13I(Y),
                y._93I(),
                y._92I(),
                Y.restore(),
                y._32I = y._24I = y._96I = F,
                J && (y.scrollToIndex(y.getRowIndex(J)), delete y._23I),
                y.tx(y.tx()),
                y.ty(y.ty())
            }
        },
        Yn._48o = function(w) {
            w._rootVisible = !0,
            w._rootData = F,
            w._35o = function() {
                this._expandMap = {},
                this._levelMap = {}
            },
            w.validateModel = function() {
                var B = this,
                Z = B._rootData;
                B._rows.clear(),
                B._levelMap = {},
                B._rowMap = {},
                B._currentLevel = 0,
                Z ? B._rootVisible ? B.isVisible(Z) && B.buildData(Z) : B.buildChildren(Z) : B.buildChildren(),
                delete B._currentLevel
            },
            w.buildData = function(O) {
                var z = this,
                P = O._id,
                A = z._rows;
                z._rowMap[P] = A.size(),
                A.add(O),
                z._levelMap[P] = z._currentLevel,
                z.isExpanded(O) && (z._currentLevel++, z.buildChildren(O), z._currentLevel--)
            },
            w.buildChildren = function(O) {
                var w = this,
                D = O ? O._children: w._dataModel._roots,
                U = w.getCurrentSortFunc();
                U && w.isChildrenSortable(O) ? D.toList(w.isVisible, w).sort(U).each(w.buildData, w) : D.each(function(Z) {
                    w.isVisible(Z) && w.buildData(Z)
                })
            },
            w.getLevel = function(H) {
                return this._levelMap[H._id]
            },
            w.getToggleIcon = function(c) {
                var Q = this,
                W = Q._loader,
                g = Q._collapseIcon;
                return W && !W.isLoaded(c) ? g: c.hasChildren() ? Q.isExpanded(c) ? Q._expandIcon: g: F
            },
            w.isCheckMode = function() {
                return this._checkMode != F
            },
            w.isChildrenSortable = function() {
                return ! 0
            },
            w.handleDataModelChange = function(K) {
                var D = this;
                K.kind === ej ? delete D._expandMap[K.data._id] : K.kind === Rg && (D._expandMap = {}),
                D.ivm()
            },
            w.toggle = function(e) {
                var u = this;
                u.isExpanded(e) ? u.collapse(e) : u.expand(e)
            },
            w.isExpanded = function(Y) {
                return 1 === this._expandMap[Y._id]
            },
            w.expand = function(l) {
                var D = this,
                Y = D._loader;
                D.isExpanded(l) || (Y && !Y.isLoaded(l) && Y.load(l), D._expandMap[l._id] = 1, D.ivm(), D.onExpanded(l))
            },
            w.onExpanded = function() {},
            w.collapse = function(l) {
                var j = this;
                j.isExpanded(l) && (delete j._expandMap[l._id], j.ivm(), j.onCollapsed(l))
            },
            w.onCollapsed = function() {},
            w.expandAll = function() {
                var A = this;
                A._dataModel.each(function(N) {
                    N.hasChildren() && (A._expandMap[N._id] = 1)
                }),
                A.ivm()
            },
            w.collapseAll = function() {
                this._expandMap = {},
                this.ivm()
            },
            w.makeVisible = function(S) {
                if (S) {
                    var X = this;
                    if (!X._rootData || S.isDescendantOf(X._rootData)) {
                        for (var L = S._parent; L;) X.expand(L),
                        L = L._parent;
                        X._23I = S,
                        X.iv()
                    }
                }
            },
            w.checkData = function(N) {
                var g, r = this,
                E = r._checkMode,
                M = r.sm(),
                Z = M.co(N);
                if (!M.sg() || !Z) {
                    if (r._32o = 1, E === G) Z ? M.rs(N) : M.as(N);
                    else if (E === Yc) g = new Lq(N),
                    g.addAll(N._children);
                    else if ("descendant" === E) g = new Lq,
                    gn(N, g);
                    else if ("all" === E && (g = new Lq, gn(N, g), !Z)) for (var c = N._parent; c;) g.add(c),
                    c = c._parent;
                    g && (Z ? M.rs(g) : M.as(g)),
                    delete r._32o
                }
            },
            w._97I = function(w, S, L, t, R, c, l) {
                var $ = this,
                b = $._indent,
                U = $._levelMap[S._id],
                h = $.getIconWidth(S),
                n = oq($.getToggleIcon(S));
                n ? (t += b * U, Cs(w, n, t + b / 2, R + l / 2, S, $), t += b) : t += b * (U + 1),
                $._checkMode && (Cs(w, $.getCheckIcon(S), t + b / 2, R + l / 2, S, $), t += b),
                $.drawIcon(w, S, t, R, h, l),
                $.drawLabel(w, S, t + h, R, l)
            }
        },
        Yn._14Q = function(E) {
            E.getIcon = function(O) {
                return O.getIcon()
            },
            E.getIconWidth = function(e) {
                return this.getIcon(e) ? this._indent: 0
            },
            E.drawIcon = function(m, e, _, K, A, D) {
                if (A) {
                    var H = this,
                    I = H.getBodyColor(e),
                    W = oq(H.getIcon(e), I);
                    W && (D -= H.isRowLineVisible() ? 1 : 0, qg(m, W, Sh, _, K, A, D, e, H, I), Hb(m, H.getBorderColor(e), _, K, A, D))
                }
            },
            E.drawLabel = function(N, I, S, H, b) {
                var A = this;
                wb(N, A.getLabel(I), A.getLabelFont(I), A.getLabelColor(I), S, H, 0, b)
            }
        },
        Yn._50o = function(i) {
            i._98I = function() {
                var T = this,
                f = T._39o = new si;
                T._60I = new Lq,
                f.mm(T._17o, T),
                f.md(T._18o, T),
                f.mh(T._19o, T)
            },
            i.setColumns = function(_) {
                this._39o.clear(),
                this.addColumns(_)
            },
            i.addColumns = function(L) {
                var G = this._39o;
                L.forEach(function(o) {
                    if (! (o instanceof dq)) {
                        var v = cf(o.className);
                        o = on(v ? v: dq, o)
                    }
                    G.add(o)
                })
            },
            i.onColumnClicked = function() {},
            i.onCheckColumnClicked = function() {},
            i._3Q = function(c) {
                for (var J, m = 0,
                U = this._60I,
                i = U.size(); i > m; m++) if (J = U.get(m), J.column === c) return J;
                return F
            },
            i.getColumnAt = function(P) {
                var X = this._4Q(P);
                return X ? X.column: F
            },
            i._4Q = function(A) {
                for (var n = this,
                S = A.target ? n.lp(A).x: A.x, G = n._60I, v = 0; v < G.size(); v++) {
                    var s = G.get(v),
                    X = s.startX;
                    if (S >= X && S < X + s.column.getWidth()) return s
                }
                return F
            },
            i.getToolTip = function(d) {
                var P = this,
                j = P.getDataAt(d),
                G = P.getColumnAt(d);
                return j && G ? G.getToolTip(j, P) : F
            },
            i.adjustTranslateX = function(s) {
                var u = this.getWidth() - this._91I;
                return u > s && (s = u),
                s > 0 ? 0 : Q(s)
            },
            i._99I = function() {
                var m = this,
                A = m._29I,
                P = m._60I;
                P.clear(),
                m._91I = 0,
                m._39o._roots.each(function(O) {
                    if (O.isVisible()) {
                        var a = m._91I + O.getWidth();
                        m._91I <= A.x + A.width && a >= A.x && P.add({
                            column: O,
                            startX: m._91I
                        }),
                        m._91I = a
                    }
                })
            },
            i.drawData = function(h, H, F) {
                var c = this,
                e = c._rowHeight,
                T = e * F,
                G = c.isSelected(H),
                $ = c._29I,
                u = $.x,
                v = $.width;
                c.drawRowBackground(h, H, G, u, T, v, e),
                c._60I.each(function(X) {
                    var I = X.column,
                    Z = X.startX,
                    w = I.getWidth();
                    w > 0 && !c.isEditing(H, I) && (h.save(), h.beginPath(), h.rect(Z, T, w, e), h.clip(), c._87o(c.drawCell(h, H, G, I, Z, T, w, e), F, Z, T, w, e), c._columnLineVisible && qe(h, Z + w - 1, T, 1, e, c._columnLineColor), h.restore())
                }),
                c._rowLineVisible && qe(h, u, T + e - 1, v, 1, c._rowLineColor)
            },
            i.drawCell = function(n, s, j, y, I, $, u, z) {
                var m = this;
                if (y.drawCell) return y.drawCell(n, s, j, y, I, $, u, z, m);
                var P = m.getValue(s, y);
                Vr(n, P, y, m.getLabelFont(s, y, P), m.getLabelColor(s, y, P), I, $, u, z, s, m)
            },
            i.getColumnModel = function() {
                return this._39o
            },
            i._17o = function() {
                this.redraw()
            },
            i._18o = function(v) {
                var I = this;
                v.data === I._sortColumn && yn[v.property] ? I.ivm() : (I._42o(), I.redraw())
            },
            i._19o = function() {
                this.redraw()
            },
            i.getCurrentSortFunc = function() {
                var N = this,
                h = N._sortColumn;
                if (h && h.isSortable()) {
                    var k = h.getSortFunc(),
                    B = Vm === h.getSortOrder() ? 1 : -1;
                    return k || (k = $q),
                    function(S, U) {
                        return k.call(N, N.getValue(S, h), N.getValue(U, h), S, U) * B
                    }
                }
                return N._sortFunc
            },
            i.isCellEditable = function(Y, L) {
                return L.isEditable() && this.isEditable()
            },
            i._37O = function(Q, N) {
                if (oi(N)) for (var o = this,
                j = o.lp(N), V = o._60I, I = o._rowHeight, $ = o._29I, v = $.x, C = $.y, Z = $.width, x = $.height, T = 0; T < V.size(); T++) {
                    var H = V.get(T),
                    z = H.startX,
                    Y = H.column,
                    p = Y.getWidth();
                    if (Y !== o._31o && Y !== o._4o && o.isCellEditable(Q, Y) && j.x >= z && j.x < z + p) {
                        var R = {
                            x: z,
                            y: o.getRowIndex(Q) * I,
                            width: p,
                            height: I
                        },
                        D = {
                            x: R.x + o.tx(),
                            y: R.y + o.ty(),
                            width: R.width,
                            height: R.height
                        },
                        G = 0,
                        O = 0;
                        return R.x < v ? G = R.x - v: R.x + R.width > v + Z && (G = R.x + R.width - v - Z),
                        G && (o.tx(o.tx() - G), D.x -= G),
                        R.y < C ? O = R.y - C: R.y + I > C + x && (O = R.y + I - C - x),
                        O && (o.ty(o.ty() - O), D.y -= O),
                        o.beginEditing({
                            data: Q,
                            column: Y,
                            value: o.getValue(Q, Y),
                            event: N,
                            rect: R,
                            editorRect: D,
                            view: o
                        }),
                        void 0
                    }
                }
            }
        },
        Ff.BaseItemEditor = function(u, p, q, Q) {
            this._data = u,
            this._column = p,
            this._master = q,
            this._editInfo = Q
        },
        Zm("BaseItemEditor", o, {
            ms_ac: ["data", "column", "master", "editInfo"],
            editBeginning: function() {},
            getView: function() {},
            getValue: function() {},
            setValue: function() {}
        });
        var mc = Y.Tab = function() {
            Lo(mc, this)
        };
        uh("Tab", kg, {
            ms_ac: ["view", "closable", "disabled"],
            _icon: F,
            _closable: !1,
            _disabled: !1,
            setParent: re
        });
        var dq = Y.Column = function() {
            Lo(dq, this)
        };
        uh("Column", kg, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", ql, rk, Be, $o, "align", Qk, "sortOrder", ho, "sortable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: Vm,
            _sortFunc: F,
            _sortable: !0,
            setWidth: function(Q) {
                16 > Q && (Q = 16);
                var i = this._width;
                this._width = Q,
                this.fp($o, i, Q)
            },
            getToolTip: function(r, l) {
                return this.formatValue(l.getValue(r, this))
            }
        });
        var Gl = Y.Property = function() {
            Lo(Gl, this)
        };
        uh("Property", kg, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", rk, Be, "categoryName", Qk, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: F,
            getToolTip: function(v, M, l) {
                var S = this;
                return M ? S.formatValue(l.getValue(v, S)) : l.getPropertyName(S)
            }
        }),
        Ff.AccordionView = function() {
            var s = this;
            s._20o = {},
            s._21o = new Lq,
            s._10o = F,
            s._9o = F,
            s._11o = F,
            s._view = Kp(0, s),
            s.iv()
        },
        Zm("AccordionView", o, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: [jd, Ok, "titleHeight", kj, xh, "titleBackground", "selectWidth", Ng, "orientation", "separatorColor"],
            _expandIcon: C.accordionViewExpandIcon,
            _collapseIcon: C.accordionViewCollapseIcon,
            _titleHeight: nl,
            _labelColor: C.accordionViewLabelColor,
            _labelFont: C.accordionViewLabelFont,
            _titleBackground: C.accordionViewTitleBackground,
            _selectBackground: C.accordionViewSelectBackground,
            _selectWidth: C.accordionViewSelectWidth,
            _orientation: "v",
            _separatorColor: C.accordionViewSeparatorColor,
            onPropertyChanged: function() {
                this.iv()
            },
            getView: function() {
                return this._view
            },
            getTitles: function() {
                return this._21o
            },
            getCurrentTitle: function() {
                return this._10o
            },
            add: function(K, k, v, c) {
                var Y = this,
                R = hs();
                if (Y._20o[K]) throw K + " already exists";
                R.onmousedown = pm,
                R.style.cursor = bg,
                R.addEventListener(a ? Nn: Tc,
                function(o) {
                    pm(o)
                },
                !1),
                R.addEventListener(a ? Zd: Fr,
                function(D) {
                    pm(D),
                    oi(D) && (Y._10o === K ? Y.collapse() : Y.expand(K))
                },
                !1),
                Bf(Y._view, R),
                Y._20o[K] = {
                    content: k,
                    div: R,
                    canvas: Jr(R),
                    icon: c
                },
                Y._21o.add(K),
                v && Y.expand(K),
                Y.iv()
            },
            remove: function(G) {
                var F = this,
                V = F._20o[G];
                V && (Gq(V.div), delete F._20o[G], F._21o.remove(G), F.iv())
            },
            clear: function() {
                var e = this;
                e._20o = {},
                e._21o.clear(),
                e.iv()
            },
            isExpanded: function(k) {
                return this._10o === k
            },
            expand: function(J) {
                var Y = this;
                Y._20o[J] && Y._10o !== J && (Y._10o = J, Y.onExpanded(J), Y.iv())
            },
            onExpanded: function() {},
            collapse: function() {
                var R = this;
                R._10o && (R.onCollapsed(R._10o), delete R._10o, R.iv())
            },
            onCollapsed: function() {},
            initCanvas: function(e, v, G) {
                Kc(e, v, G);
                var A = oo(e);
                return ws(A, 0, 0, 1),
                A.clearRect(0, 0, v, G),
                A
            },
            drawTitle: function(Z, z, o, g, V) {
                var F = this,
                j = oq(V.icon),
                Y = F.isExpanded(z),
                S = F._titleHeight,
                T = F._titleBackground,
                n = F._selectWidth,
                H = F._separatorColor,
                w = oq(Y ? F._expandIcon: F._collapseIcon),
                b = n + 4;
                qe(Z, 0, 0, o, g, T),
                Y && n && qe(Z, 0, 0, n, g, F._selectBackground),
                (Y || F._21o.get(F._21o.size() - 1) !== z) && qe(Z, 0, g - 1, o, 1, H ? H: fi(T)),
                j && (Cs(Z, j, b + Dr(j) / 2, S / 2), b += Dr(j) + 2),
                wb(Z, z, F.getLabelFont(z), F.getLabelColor(z), b, 0, 0, S),
                w && Cs(Z, w, o - Dr(w) / 2 - 4, S / 2)
            },
            validateImpl: function() {
                var t = this,
                P = t._view,
                F = 0,
                c = 0,
                l = t.getWidth(),
                x = t.getHeight(),
                i = t._titleHeight,
                H = t._21o.size() * i,
                n = t._11o,
                M = t._9o;
                delete t._11o,
                delete t._9o,
                t._21o.each(function(E) {
                    var f, T, R = t._20o[E],
                    r = R.content,
                    B = t._10o === E;
                    gr(t) ? (Sn(R.div, F, 0, i, x), f = t.initCanvas(R.canvas, i, x), Oj(f, 0, x), Wk(f, -S), t.drawTitle(f, E, x, i, R), f.restore(), B ? (T = h(0, l - H), r && (t._11o = r, t._9o = Ee(r), Sn(r, F + i, 0, T, x)), F += i + T) : F += i) : (Sn(R.div, 0, c, l, i), f = t.initCanvas(R.canvas, l, i), t.drawTitle(f, E, l, i, R), f.restore(), B ? (T = h(0, x - H), r && (t._11o = r, t._9o = Ee(r), Sn(r, 0, c + i, l, T)), c += i + T) : c += i)
                });
                var A = t._9o;
                n && n !== t._11o && n.endEditing && n.endEditing(),
                A && A !== M && Bf(P, A),
                M && M !== A && Gq(M)
            }
        }),
        Ff.SplitView = function(p, j, b, A) {
            var G = this,
            M = G._dividerDiv = hs(),
            l = G._60O = Jr(),
            m = G._61O = Jr(),
            L = l.style,
            N = m.style;
            G._view = Kp(1, G),
            Bf(G._view, M),
            L.msTouchAction = or,
            L.pointerEvents = or,
            L.cursor = bg,
            N.msTouchAction = or,
            N.pointerEvents = or,
            N.cursor = bg,
            p && G.setLeftView(p),
            j && G.setRightView(j),
            b && G.setOrientation(b),
            A != F && G.setPosition(A),
            G.setStatus(bo),
            new Vb(G)
        },
        Zm("SplitView", o, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: ["dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
            _position: .5,
            _togglable: !0,
            _orientation: "h",
            _draggable: !0,
            _dividerSize: C.splitViewDividerSize,
            _dividerBackground: C.splitViewDividerBackground,
            _dragOpacity: C.splitViewDragOpacity,
            _toggleIcon: C.splitViewToggleIcon,
            onPropertyChanged: function() {
                this.iv()
            },
            getDividerDiv: function() {
                return this._dividerDiv
            },
            getPosition: function() {
                return this._position
            },
            setPosition: function($, S) {
                var R = this,
                u = R._position;
                isNaN($) || (S || (R._82O = 0 > $ ? -1 : $ > 1 ? 1 : 0), R._position = $, R.fp(Rq, u, $))
            },
            getLeftView: function() {
                return this._leftView
            },
            setLeftView: function(k) {
                var o = this,
                n = o._leftView,
                x = o._view;
                if (o._leftView !== k) {
                    if (n && n !== o._rightView) {
                        var X = Ee(n);
                        X.parentNode === x && Gq(X)
                    }
                    if (o._leftView = k, k) {
                        var C = Ee(k);
                        C.parentNode !== x && x.insertBefore(C, o._dividerDiv)
                    }
                    o.fp("leftView", n, k)
                }
            },
            getRightView: function() {
                return this._rightView
            },
            setRightView: function(R) {
                var Z = this,
                T = Z._rightView,
                F = Z._view;
                if (Z._rightView !== R) {
                    if (T && T !== Z._leftView) {
                        var C = Ee(T);
                        C.parentNode === F && Gq(C)
                    }
                    if (Z._rightView = R, R) {
                        var A = Ee(R);
                        A.parentNode !== F && F.insertBefore(A, Z._dividerDiv)
                    }
                    Z.fp("rightView", T, R)
                }
            },
            validateImpl: function() {
                var v = this,
                l = v._draggable,
                p = v._position,
                E = v.getWidth(),
                L = v.getHeight(),
                r = v._dividerSize,
                x = v._dividerBackground,
                n = a ? 18 : 8,
                i = v._dividerDiv,
                $ = v._82O,
                T = v._60O,
                g = v._61O,
                R = v._toggleIcon,
                I = v._status,
                X = i.style,
                o = null,
                c = a ? 20 : 4,
                j = R.comps[0];
                r >= n || 0 === r ? v._coverDiv && (Gq(v._coverDiv), delete v._coverDiv) : v._coverDiv || (v._coverDiv = hs(), H && (v._coverDiv.style.background = fh), Bf(i, v._coverDiv)),
                v._togglable ? T.parentNode || (Bf(i, T), Bf(i, g)) : (Gq(T), Gq(g));
                var z = v._coverDiv,
                M = v._leftView,
                f = v._rightView;
                if (gr(v)) {
                    if (r > E && (r = E), I === bo) if (1 === $) var b = p,
                    u = h(0, E - r - b);
                    else - 1 === $ ? (u = -p, b = h(0, E - r - u)) : (b = Q((E - r) * p), u = h(0, E - r - b));
                    else "cl" === I ? (b = 0, u = h(0, E - r)) : "cr" === I && (u = 0, b = h(0, E - r));
                    M && Sn(M, 0, 0, b, L),
                    f && Sn(f, b + r, 0, u, L),
                    Sn(i, b, 0, r, L),
                    v._22o = b,
                    z && (Sn(z, r / 2 - n / 2, 0, n, L), z.style.cursor = l ? Sf: ""),
                    i.style.cursor = l ? Sf: "";
                    var B = i.clientHeight / 2,
                    U = i.clientWidth;
                    Kc(T, U, U),
                    Sn(T, 0, B - U - c, U, U),
                    o = oo(T),
                    ws(o, 0, 0, 1),
                    j.rotation = -S,
                    zd(o, R, 0, 0, U, U),
                    o.restore(),
                    Kc(g, U, U),
                    Sn(g, 0, B + c, U, U),
                    o = oo(g),
                    ws(o, 0, 0, 1),
                    j.rotation = S,
                    zd(o, R, 0, 0, U, U),
                    o.restore()
                } else {
                    if (r > L && (r = L), I === bo) if (1 === $) var F = p,
                    K = h(0, L - r - F);
                    else - 1 === $ ? (K = -p, F = h(0, L - r - K)) : (F = Q((L - r) * p), K = h(0, L - r - F));
                    else "cl" === I ? (F = 0, K = h(0, L - r)) : "cr" === I && (K = 0, F = h(0, L - r));
                    M && Sn(M, 0, 0, E, F),
                    f && Sn(f, 0, F + r, E, K),
                    Sn(i, 0, F, E, r),
                    v._22o = F,
                    z && (Sn(z, 0, r / 2 - n / 2, E, n), z.style.cursor = l ? Xo: ""),
                    X.cursor = l ? Xo: "";
                    var t = i.clientWidth / 2,
                    U = i.clientHeight;
                    Kc(T, U, U),
                    Sn(T, t - U - c, 0, U, U),
                    o = oo(T),
                    ws(o, 0, 0, 1),
                    j.rotation = 0,
                    zd(o, R, 0, 0, U, U),
                    o.restore(),
                    Kc(g, U, U),
                    Sn(g, t + c, 0, U, U),
                    o = oo(g),
                    ws(o, 0, 0, 1),
                    j.rotation = y,
                    zd(o, R, 0, 0, U, U),
                    o.restore()
                }
                X.background = x
            }
        });
        var Vb = function(b) {
            this.sv = b,
            this.addListeners()
        };
        eg(Vb, o, {
            ms_listener: 1,
            getView: function() {
                return this.sv.getView()
            },
            handle_touchstart: function(v) {
                var m = this,
                W = m.sv,
                u = W._dividerDiv,
                y = W._60O,
                s = W._61O,
                z = W._status,
                F = v.target;
                if (F === y) z === bo ? W.setStatus("cl") : "cr" === z && W.setStatus(bo);
                else if (F === s) z === bo ? W.setStatus("cr") : "cl" === z && W.setStatus(bo);
                else if (dc(v) && (F === u || F === W._coverDiv) && (pm(v), W.isDraggable())) {
                    m.resizeDiv = hs();
                    var V = m.resizeDiv.style,
                    M = u.style,
                    Q = W.getLeftView(),
                    i = W.getRightView();
                    m._maskViews = [],
                    [Q, i].forEach(function(p) {
                        if (p) {
                            p = p.getView ? p.getView() : p;
                            var d = hs(),
                            Q = d.style;
                            Q.left = p.style.left,
                            Q.top = p.style.top,
                            Q.width = p.offsetWidth + "px",
                            Q.height = p.offsetHeight + "px",
                            W.getView().appendChild(d),
                            m._maskViews.push(d)
                        }
                    }),
                    V.left = M.left,
                    V.top = M.top,
                    V.width = M.width,
                    V.height = M.height,
                    V.opacity = W.getDragOpacity(),
                    V.background = W.getDividerBackground(),
                    m._85o = m._86o = gr(W) ? ce(v).x: ce(v).y,
                    Bf(m.getView(), m.resizeDiv),
                    m._clientPoint = ce(v),
                    fk(m, v)
                }
            },
            handleWindowTouchMove: function(E) {
                if (dc(E)) {
                    var P = this,
                    n = P.sv,
                    s = n._dividerSize,
                    C = P.resizeDiv.style,
                    G = n.getWidth(),
                    F = n.getHeight(),
                    X = n._22o - P._86o;
                    gr(n) ? (P._85o = ce(E).x, X += P._85o, X > G - s && (X = G - s), 0 > X && (X = 0), C.left = X + mb) : (P._85o = ce(E).y, X += P._85o, X > F - s && (X = F - s), 0 > X && (X = 0), C.top = X + mb)
                }
            },
            handleWindowTouchEnd: function(E) {
                var f = this,
                t = f.sv,
                X = t._22o - f._86o + f._85o,
                K = t._dividerSize,
                S = gr(t) ? t.getWidth() : t.getHeight(),
                z = t._82O,
                Y = ep(f._clientPoint, ce(E));
                Y > 1 && (t.setStatus(bo), 0 > X && (X = 0), X > S - K && (X = S - K), S !== K && (1 === z ? t.setPosition(X, 1) : -1 === z ? t.setPosition(X - S + K, 1) : t.setPosition(X / (S - K), 1))),
                f._maskViews && f._maskViews.forEach(function(Y) {
                    Gq(Y)
                }),
                Gq(f.resizeDiv),
                f.resizeDiv = f._85o = f._clientPoint = F
            },
            handle_mousedown: function(h) {
                oi(h) && this.handle_touchstart(h)
            },
            handleWindowMouseMove: function(x) {
                this.handleWindowTouchMove(x)
            },
            handleWindowMouseUp: function(c) {
                this.handleWindowTouchEnd(c)
            }
        }),
        Ff.TabView = function() {
            var T = this,
            w = T._view = Kp(1, T),
            J = T._91O = hs(1),
            E = T._tabModel = new si,
            R = E.sm(),
            A = T.invalidate;
            T._7o = new Lq,
            T._canvas = Jr(J),
            Bf(w, J),
            Bf(w, T._92O = hs(1)),
            R.setSelectionMode(t),
            R.ms(A, T),
            E.mm(A, T),
            E.md(A, T),
            E.mh(A, T),
            new nr(T),
            T.iv()
        },
        Zm("TabView", o, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_ty: 1,
            ms_lp: 1,
            ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", kj, xh, "tabBackground", "selectWidth", Ng, "moveBackground", "insertColor"],
            _tabPosition: aq,
            _tabHeight: nl,
            _tabGap: C.tabViewTabGap,
            _labelColor: C.tabViewLabelColor,
            _labelFont: C.tabViewLabelFont,
            _tabBackground: C.tabViewTabBackground,
            _selectWidth: C.tabViewSelectWidth,
            _selectBackground: C.tabViewSelectBackground,
            _moveBackground: C.tabViewMoveBackground,
            _insertColor: C.tabViewInsertColor,
            _movable: !0,
            getContentDiv: function() {
                return this._92O
            },
            getTitleDiv: function() {
                return this._91O
            },
            getTabModel: function() {
                return this._tabModel
            },
            add: function(C, E, P) {
                var n = new mc,
                m = this._tabModel;
                return n.setName(C),
                n.setView(E),
                m.add(n),
                P && m.sm().ss(n),
                n
            },
            getLabel: function(z) {
                return z.toLabel()
            },
            onPropertyChanged: function() {
                this.iv()
            },
            _7Q: function(n) {
                this._23o = n,
                this.iv()
            },
            get: function(i) {
                var d = this,
                r = d._tabModel;
                if (ye(i)) return r._roots.get(i);
                if (Cl(i)) {
                    var m;
                    return r.each(function(Z) {
                        i === d.getLabel(Z) && (m = Z)
                    }),
                    m
                }
                return i instanceof mc ? i: F
            },
            select: function(F) {
                this._tabModel.sm().ss(this.get(F))
            },
            remove: function(l) {
                var G = this;
                if (l = G.get(l)) {
                    var P = G._tabModel,
                    _ = P._roots.indexOf(l);
                    G._tabModel.remove(l),
                    G._12Q(--_)
                }
            },
            getCurrentTab: function() {
                return this._8o
            },
            hideTabView: function(Q, D) {
                D.parentNode === this._92O && (Al(D) ? (D.style.display = yh, D._tab_ = Q) : Gq(D), of())
            },
            showTabView: function(X, L) {
                Al(L) && (L.style.display = "block", L._tab_ = X),
                L.parentNode !== this._92O && (Bf(this._92O, L), of())
            },
            _24o: function() {
                var _, P = this,
                V = P._8o,
                W = P._9o,
                n = P._tabModel.sm().ld();
                n && (_ = Ee(n.getView())),
                _ !== W && (W && (V.getView() && V.getView().endEditing && V.getView().endEditing(), P.hideTabView(V, W)), _ && P.showTabView(n, _)),
                P._8o = n,
                P._9o = _,
                V !== n && P.onTabChanged(V, n)
            },
            onTabClosing: function() {
                return ! 0
            },
            onTabChanged: function() {},
            onTabClosed: function(p, y) {
                this._12Q(--y)
            },
            _12Q: function(c) {
                var y = this,
                p = y._tabModel,
                w = p.size();
                if (w && !p.sm().ld()) {
                    c == F && (c = 0),
                    c >= w && (c = w - 1),
                    0 > c && (c = 0);
                    for (var H = c; H >= 0; H--) {
                        var u = y.get(H);
                        if (!u.isDisabled()) return y.select(u),
                        u
                    }
                    for (H = c + 1; w > H; H++) if (u = y.get(H), !u.isDisabled()) return y.select(u),
                    u
                }
            },
            _9Q: function(e) {
                var G = 4,
                E = oq(e.getIcon());
                E && (G += Dr(E, e) + 4);
                var F = this.getLabel(e);
                return F && (G += Te(this.getLabelFont(e), F).width + 4),
                e.isClosable() && (G += 10),
                G
            },
            _10Q: function(V, r, i, a, o, t, J) {
                var M, I = this,
                u = I._tabPosition,
                R = i + 4,
                e = I._selectWidth,
                T = oq(r.getIcon()),
                $ = r.isDisabled(),
                O = I.getLabelColor(r),
                z = I.getLabelFont(r),
                Q = I.getLabel(r),
                D = I._selectBackground,
                E = u === Tb + "-vertical",
                P = u === um + "-vertical"; (E || P) && (R = a + 4),
                $ && (V.globalAlpha = xr),
                qe(V, i, a, o, t, J),
                r === I._8o && e && (u === aq ? qe(V, i, a + t - e, o, e, D) : u === Tb ? qe(V, i + o - e, a, e, t, D) : u === um ? qe(V, i, a, e, t, D) : E ? qe(V, i + o - e, a, e, t, D) : P ? qe(V, i, a, e, t, D) : qe(V, i, a, o, e, D));
                var Z = o / 2;
                if (E && (Oj(V, Z, a + t / 2), Wk(V, y), Oj(V, -Z, -a - t / 2)), T) {
                    var K = Ll(T, r),
                    Y = Dr(T, r);
                    if (E || P) {
                        var C = i + o / 2,
                        G = R + K / 2;
                        Oj(V, C, G),
                        Wk(V, S),
                        Oj(V, -C, -G),
                        Cs(V, T, i + o / 2, R + K / 2, r, I),
                        Oj(V, C, G),
                        Wk(V, -S),
                        Oj(V, -C, -G),
                        R += K + 4
                    } else Cs(V, T, R + Y / 2, a + t / 2, r, I),
                    R += Y + 4
                }
                return E || P ? (Oj(V, o / 2, R + o / 2), Wk(V, S), Oj(V, -o / 2, -R - o / 2), wb(V, Q, z, O, i, R, t, o), Oj(V, o / 2, R + o / 2), Wk(V, -S), Oj(V, -o / 2, -R - o / 2)) : wb(V, Q, z, O, R, a, o, t),
                E && (Oj(V, Z, a + t / 2), Wk(V, -y), Oj(V, -Z, -a - t / 2)),
                r.isClosable() && (M = P ? {
                    x: i + o - 12,
                    y: a + t - 12,
                    width: 12,
                    height: 12
                }: {
                    x: i + o - 12,
                    y: a + 2,
                    width: 12,
                    height: 12
                },
                this.drawCloseIcon(r, V, O, M)),
                $ && (V.globalAlpha = 1),
                M
            },
            drawCloseIcon: function(d, b, X, I) {
                var z = I.x,
                r = I.y;
                b.strokeStyle = X,
                b.lineWidth = 1,
                b.beginPath(),
                b.moveTo(z + 2, r + 8),
                b.lineTo(z + 8, r + 2),
                b.moveTo(z + 8, r + 8),
                b.lineTo(z + 2, r + 2),
                b.stroke()
            },
            validateImpl: function() {
                var Y = this;
                Y._24o();
                var n, e = Y._canvas,
                B = Y._tabPosition,
                X = Y._91O,
                J = Y._92O,
                $ = Y._tabModel,
                N = Y.getWidth(),
                O = Y.getHeight(),
                T = Y._tabHeight,
                i = Y._7o,
                c = Y._tabGap,
                y = B === aq,
                d = B === Tb,
                Z = B === um,
                r = B === Tb + "-vertical",
                o = B === um + "-vertical",
                z = Y._23o,
                C = 0;
                if ((d || Z) && $._roots.each(function(M) {
                    C = h(Y._9Q(M), C)
                }), y ? (Sn(X, 0, 0, N, T), n = {
                    x: 0,
                    y: T,
                    width: N,
                    height: h(0, O - T)
                }) : d ? (Sn(X, 0, 0, C, O), n = {
                    x: C,
                    y: 0,
                    width: h(0, N - C),
                    height: O
                }) : Z ? (Sn(X, N - C, 0, C, O), n = {
                    x: 0,
                    y: 0,
                    width: h(0, N - C),
                    height: O
                }) : r ? (Sn(X, 0, 0, T, O), n = {
                    x: T,
                    y: 0,
                    width: h(0, N - T),
                    height: O
                }) : o ? (Sn(X, N - T, 0, T, O), n = {
                    x: 0,
                    y: 0,
                    width: h(0, N - T),
                    height: O
                }) : (Sn(X, 0, O - T, N, T), n = {
                    x: 0,
                    y: 0,
                    width: N,
                    height: h(0, O - T)
                }), Sn(J, n), r || o) {
                    Y._9o && (n.x = 0, Sn(Y._8o.getView(), n)),
                    Kc(e, T, O);
                    var f = oo(e),
                    L = 0;
                    if (ws(f, 0, Y.ty(), 1), f.clearRect(0, 0, T, O), i.clear(), $._roots.each(function(n) {
                        var X, Q = Y._9Q(n);
                        z && z.tab === n || (X = Y._10Q(f, n, 0, L, T, Q, Y._tabBackground)),
                        i.add({
                            _75o: X,
                            tab: n,
                            startY: L,
                            endY: L + Q,
                            height: Q
                        }),
                        L += Q + c
                    }), Y._23Q = h(0, L - c), z) {
                        var K = z.position;
                        Y._10Q(f, z.tab, 0, z.startY, T, z.height, Y._moveBackground),
                        qe(f, 0, K, T, 1, Y._insertColor)
                    }
                    f.restore(),
                    Y.ty(Y.ty())
                } else if (d || Z) {
                    Y._9o && (n.x = 0, Sn(Y._8o.getView(), n)),
                    Kc(e, C, O);
                    var f = oo(e),
                    L = 0;
                    if (ws(f, 0, Y.ty(), 1), f.clearRect(0, 0, C, O), i.clear(), $._roots.each(function(p) {
                        var o;
                        z && z.tab === p || (o = Y._10Q(f, p, 0, L, C, T, Y._tabBackground)),
                        i.add({
                            _75o: o,
                            tab: p,
                            startY: L,
                            endY: L + T,
                            height: T
                        }),
                        L += T + c
                    }), Y._23Q = h(0, L - c), z) {
                        var K = z.position;
                        Y._10Q(f, z.tab, 0, z.startY, C, z.height, Y._moveBackground),
                        qe(f, 0, K, C, 1, Y._insertColor)
                    }
                    f.restore(),
                    Y.ty(Y.ty())
                } else {
                    Y._9o && (n.y = 0, Sn(Y._8o.getView(), n)),
                    Kc(e, N, T);
                    var f = oo(e),
                    I = 0;
                    if (ws(f, Y.tx(), 0, 1), f.clearRect(0, 0, N, T), i.clear(), $._roots.each(function(u) {
                        var E, F = Y._9Q(u);
                        z && z.tab === u || (E = Y._10Q(f, u, I, 0, F, T, Y._tabBackground)),
                        i.add({
                            _75o: E,
                            tab: u,
                            startX: I,
                            endX: I + F,
                            width: F
                        }),
                        I += F + c
                    }), Y._64I = h(0, I - c), z) {
                        var K = z.position;
                        Y._10Q(f, z.tab, z.startX, 0, z.width, T, Y._moveBackground),
                        Ci(f, Y._insertColor, K, 0, T)
                    }
                    f.restore(),
                    Y.tx(Y.tx())
                }
                for (var P = [], u = J.children, F = 0; F < u.length; F++) {
                    var m = u[F],
                    W = m._tab_;
                    W && !$.contains(W) && P.push(m)
                }
                P.forEach(function(u) {
                    J.removeChild(u)
                })
            }
        });
        var nr = function(F) {
            this.tv = F,
            this.addListeners()
        };
        eg(nr, o, {
            ms_listener: 1,
            getView: function() {
                return this.tv._91O
            },
            handle_mousewheel: function(N) {
                this.handleScroll(N, 10 * (N.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(p) {
                this.handleScroll(p, 10 * -p.detail)
            },
            handleScroll: function(Q, p) {
                pm(Q);
                var j = this.tv,
                n = j._tabPosition; ! j._40o() || n !== aq && n !== Gg || j.tx(this.tv.tx() + p),
                !j._41o() || n !== Tb && n !== um && n !== Tb + "-vertical" && n !== um + "-vertical" || j.ty(this.tv.ty() + p)
            },
            _8Q: function(d) {
                var D, K, H = this.tv,
                A = H._tabPosition,
                S = H._7o;
                if (A === aq || A === Gg) {
                    var X = H.lp(d).x;
                    for (D = 0; D < S.size(); D++) if (K = S.get(D), K.startX <= X && X <= K.endX) return K
                } else if (A === Tb || A === um || A === Tb + "-vertical" || A === um + "-vertical") {
                    var b = H.lp(d).y;
                    for (D = 0; D < S.size(); D++) if (K = S.get(D), K.startY <= b && b <= K.endY) return K
                }
                return F
            },
            isClickable: function(N) {
                var C = this.tv,
                t = C._tabPosition,
                E = this._73o = this._8Q(N);
                return ! C._40o() || t !== aq && t !== Gg ? !C._41o() || t !== Tb && t !== um && t !== Tb + "-vertical" && t !== um + "-vertical" ? E && (!E.tab.isDisabled() || C.isMovable()) : !0 : !0
            },
            handle_mousemove: function(D) {
                var j = this;
                Nf ? j._74o = j._8Q(D) : j.getView().style.cursor = j.isClickable(D) ? bg: ""
            },
            handle_mousedown: function(C) {
                this.handle_mousemove(C),
                this.handle_touchstart(C)
            },
            handle_touchstart: function(v) {
                var X = this,
                H = X.tv,
                q = H._tabPosition;
                pm(v),
                X.isClickable(v) && (q === aq || q === Gg ? (X.x = ce(v).x, X.lp = H.lp(v), X.tx = H.tx()) : (X.y = ce(v).y, X.lp = H.lp(v), X.ty = H.ty()), fk(X, v))
            },
            handleWindowMouseMove: function(A) {
                this.handleWindowTouchMove(A)
            },
            handleWindowTouchMove: function(a) {
                var S, g = this,
                P = g.tv,
                c = P._tabPosition,
                K = g._73o;
                if (c === aq || c === Gg) {
                    if (S = ce(a).x - g.x, !g._25o && !g.moving && R(S) > 2 && (P._40o() && !ui(a) ? g._25o = 1 : K && P.isMovable() && (g.moving = 1)), g._25o) P.tx(g.tx + S);
                    else if (g.moving) {
                        var D = g.lp.x + S,
                        n = P._tabGap / 2;
                        P._7o.each(function(L) {
                            var C = L.endX,
                            X = D - L.startX < C - D;
                            D >= L.startX && C >= D && P._7Q({
                                tab: K.tab,
                                startX: K.startX + S,
                                width: K.width,
                                front: X,
                                insertTab: L.tab,
                                position: X ? h(0, L.startX - n) : s(P._64I, C + n)
                            })
                        })
                    }
                } else if (S = ce(a).y - g.y, !g._25o && !g.moving && R(S) > 2 && (P._41o() && !ui(a) ? g._25o = 1 : K && P.isMovable() && (g.moving = 1)), g._25o) P.ty(g.ty + S);
                else if (g.moving) {
                    var B = g.lp.y + S,
                    n = P._tabGap / 2;
                    P._7o.each(function(j) {
                        var o = j.endY,
                        w = B - j.startY < o - B;
                        B >= j.startY && o >= B && P._7Q({
                            tab: K.tab,
                            startY: K.startY + S,
                            height: K.height,
                            front: w,
                            insertTab: j.tab,
                            position: w ? h(0, j.startY - n) : s(P._23Q, o + n)
                        })
                    })
                }
            },
            handleWindowMouseUp: function(R) {
                this.handleWindowTouchEnd(R)
            },
            handleWindowTouchEnd: function() {
                var s = this,
                t = s.tv,
                N = t._tabPosition,
                j = t.getTabModel(),
                m = j._roots,
                x = s._73o;
                if (s.moving) {
                    var _ = t._23o;
                    if (_ && _.insertTab !== _.tab) {
                        var O = _.tab,
                        P = m.remove(O),
                        M = m.indexOf(_.insertTab);
                        M >= 0 && (_.front || M++, M <= m.size() && (m.add(O, M), j._38I(O, P, M)))
                    }
                    t._7Q(F),
                    delete s.moving
                } else if (!s._25o && x) {
                    O = x.tab;
                    var B = s._74o;
                    if (!B || B.tab === O) if (!O.isDisabled() && je(x._75o, s.lp)) {
                        var i = function() {
                            var R = m.indexOf(O);
                            j.remove(O),
                            t.onTabClosed(O, R)
                        };
                        t.onTabClosing(O, i) && i()
                    } else O.isDisabled() || t._8o === O || j.sm().ss(O)
                }
                s._25o = s._73o = s._74o = N === aq || N === Gg ? s.x = s.lp = s.tx = F: s.y = s.lp = s.ty = F
            }
        }),
        Ff.PropertyView = function(S) {
            var F = this;
            F._view = Kp(1, F),
            F._canvas = Jr(F._view),
            Bf(F._view, F._79O = hs()),
            F._rows = new Lq,
            F._28o = new Lq,
            F._26o = {},
            F._26Q = {};
            var L = F._propertyModel = new si,
            D = F.ivm;
            L.mm(D, F),
            L.md(D, F),
            L.mh(D, F),
            F.dm(S ? S: new si),
            new uo(F)
        },
        Zm("PropertyView", o, {
            ms_ac: [kj, pi, xh, rk, Be, "categorizable", Jj, ho, pb, jd, Ok, ik, Oi, Hh, "selectRowIndex", Ng, "background", tl, bq, yd, Bi, hf],
            ms_v: 1,
            ms_dm: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            _45o: 1,
            _47o: 1,
            ms_tip: 1,
            _29I: mk,
            _59I: 0,
            _9I: 0,
            _selectRowIndex: -1,
            _editable: !0,
            _batchEditable: !0,
            _categorizable: !0,
            _indent: Tk,
            _background: C.propertyViewBackground,
            _expandIcon: C.propertyViewExpandIcon,
            _collapseIcon: C.propertyViewCollapseIcon,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoHideScrollBar: xi,
            _selectBackground: C.propertyViewSelectBackground,
            _rowHeight: ks,
            _rowLineVisible: C.propertyViewRowLineVisible,
            _rowLineColor: C.propertyViewRowLineColor,
            _10I: .5,
            _columnLineVisible: C.propertyViewColumnLineVisible,
            _columnLineColor: C.propertyViewColumnLineColor,
            _labelColor: C.propertyViewLabelColor,
            _labelSelectColor: C.propertyViewLabelSelectColor,
            _labelFont: C.propertyViewLabelFont,
            getRows: function() {
                return this._rows
            },
            getColumnPosition: function() {
                return this._10I
            },
            setColumnPosition: function(r) {
                0 > r && (r = 0),
                r > 1 && (r = 1);
                var $ = this,
                X = $._10I;
                $._10I = r,
                $.fp("columnPosition", X, r)
            },
            getPropertyName: function(e) {
                return e.toLabel()
            },
            getLabelFont: function() {
                return this._labelFont
            },
            getLabelColor: function(L, D, U) {
                return U === this._selectRowIndex ? this._labelSelectColor: this._labelColor
            },
            getPropertyFont: function() {
                return this._labelFont
            },
            getPropertyColor: function(Y, R) {
                return R === this._selectRowIndex ? this._labelSelectColor: Y.getColor() || this._labelColor
            },
            getCategoryFont: function() {
                return this._labelFont
            },
            getCategoryColor: function() {
                return this._labelColor
            },
            adjustTranslateX: function() {
                return 0
            },
            adjustTranslateY: function(b) {
                var r = this.getHeight() - this._59I;
                return r > b && (b = r),
                b > 0 ? 0 : Q(b)
            },
            isExpanded: function(Q) {
                if (!Q) return ! 0;
                var D = this._26o[Q];
                return D ? D.isExpanded: !(this._26Q[Q] === !1)
            },
            toggle: function(a) {
                var N = this;
                N.isExpanded(a) ? N.collapse(a) : N.expand(a)
            },
            expandAll: function() {
                this.validate();
                for (var $ in this._26o) this.expand($)
            },
            expand: function(O) {
                if (O && O !== yh) {
                    var b = this,
                    R = b._26o[O];
                    R && !R.isExpanded && (R.isExpanded = !0, b.onExpanded(O), b.ivm())
                }
            },
            onExpanded: function() {},
            collapseAll: function() {
                this.validate();
                for (var k in this._26o) this.collapse(k)
            },
            collapse: function(W) {
                if (W && W !== yh) {
                    var E = this,
                    z = E._26o[W];
                    z && z.isExpanded && (z.isExpanded = !1, E.onCollapsed(W), E.ivm())
                }
            },
            onCollapsed: function() {},
            getCategoryName: function(g) {
                if (!this.isCategorizable()) return yh;
                var J = g.getCategoryName();
                return J ? J: yh
            },
            getPropertyModel: function() {
                return this._propertyModel
            },
            setDataModel: function(P) {
                var G = this,
                E = G._dataModel;
                E !== P && (E && (E.umd(G.handlePropertyChange, G), G._3o || E.sm().ums(G.ivm, G)), G._dataModel = P, P.md(G.handlePropertyChange, G), G._3o ? G._3o._21I(P) : P.sm().ms(G.ivm, G), G.fp(Kj, E, P))
            },
            isVisible: function(F) {
                return this._visibleFunc ? this._visibleFunc(F) : !0
            },
            onPropertyChanged: function(J) {
                var C = this,
                B = J.property;
                Uj[B] ? C.ivm() : C.iv(),
                B === _d && C._43o()
            },
            getCurrentData: function() {
                return this._27o
            },
            updateCurrentData: function() {
                this._27o = this.sm().ld()
            },
            getRawProperties: function() {
                return this._27o ? this._propertyModel._roots: ir
            },
            handlePropertyChange: function(Q) {
                this._27o === Q.data && this.iv()
            },
            ivm: function() {
                this.invalidateModel()
            },
            invalidateModel: function() {
                var H = this;
                H._96I || (H.setSelectRowIndex( - 1), H._96I = 1, H.iv())
            },
            redraw: function() {
                this.iv()
            },
            validateModel: function() {
                var k = this,
                E = k._rows,
                l = k._28o,
                _ = {},
                Z = new Lq,
                L = k._27o;
                k.updateCurrentData(),
                L !== k._27o && k.endEditing(),
                E.clear(),
                l.clear(),
                k.getRawProperties().each(function(h) {
                    if (k.isVisible(h)) {
                        Z.add(h);
                        var z = k.getCategoryName(h);
                        _[z] || (l.add(z, z === yh ? 0 : V), _[z] = {
                            isExpanded: k.isExpanded(z),
                            properties: new Lq
                        })
                    }
                }),
                k._sortFunc && Z.sort(k._sortFunc);
                for (var i in k._26o) k._26Q[i] = k.isExpanded(i);
                k._26o = _,
                l.each(function(M) {
                    M !== yh && E.add(M);
                    var $ = _[M];
                    $.isExpanded && Z.each(function(O) {
                        k.getCategoryName(O) === M && ($.properties.add(O), E.add({
                            property: O,
                            data: k._27o
                        }))
                    },
                    k)
                })
            },
            validateImpl: function() {
                var p = this;
                p._76o(),
                p._96I && (p.validateModel(), delete p._96I);
                var s = p._canvas,
                d = p.getWidth(),
                V = p.getHeight(),
                K = -p.ty(),
                f = p._rowHeight,
                W = p._indent,
                O = d - W,
                _ = p._rows,
                G = _.size(),
                E = p._9I = W + O * p._10I,
                k = p._59I = G * f;
                Kc(s, d, V),
                p._29I = {
                    x: 0,
                    y: K,
                    width: d,
                    height: V
                },
                p._31I = T(K / f),
                p._14I = w((K + V) / f),
                p._31I < 0 && (p._31I = 0),
                p._14I > G && (p._14I = G);
                var t, Q = oo(s),
                n = p._background;
                ws(Q, 0, -K, 1),
                Q.beginPath(),
                Q.rect(0, K, d, V),
                Q.clip(),
                Q.clearRect(0, K, d, V),
                p._93db(Q),
                n && qe(Q, 0, 0, W, k, n);
                for (var A = p._31I; A < p._14I; A++) {
                    var Z = _.get(A),
                    K = f * A;
                    if (Cl(Z)) n && qe(Q, W, K, O, f, n),
                    t = oq(p.isExpanded(Z) ? p._expandIcon: p._collapseIcon),
                    t && qg(Q, t, Sh, 0, K, W, f),
                    Q.save(),
                    Q.beginPath(),
                    Q.rect(W, K, O, f),
                    Q.clip(),
                    p.drawCategoryName(Q, Z, A, W, K, O, f),
                    Q.restore();
                    else {
                        var P = Z.property,
                        $ = Z.data,
                        t = oq(P.getIcon()),
                        C = p._selectRowIndex === A ? p.getSelectBackground() : F;
                        if (t && qg(Q, t, Sh, 0, K, W, f), C && qe(Q, W, K, O, f, C), Q.save(), Q.beginPath(), Q.rect(W, K, E - W, f), Q.clip(), p.drawPropertyName(Q, P, A, W, K, E - W, f), Q.restore(), !p.isEditing($, P)) {
                            var l = E + 1,
                            u = d - E - 1;
                            Q.save(),
                            Q.beginPath(),
                            Q.rect(l, K, u, f),
                            Q.clip(),
                            p._87o(p.drawPropertyValue(Q, P, p.getValue($, P), A, l, K, u, f, $), A, l, K, u, f),
                            Q.restore()
                        }
                    }
                    p._rowLineVisible && qe(Q, W, K + f - 1, O, 1, p._rowLineColor)
                }
                p._columnLineVisible && (qe(Q, E, 0, 1, k, p._columnLineColor), qe(Q, d - 1, 0, 1, k)),
                p._92db(Q),
                p._93I(),
                Q.restore(),
                p.ty(p.ty())
            },
            drawCategoryName: function(R, m, h, H, o, G, _) {
                wb(R, m, this.getCategoryFont(m), this.getCategoryColor(m), H, o, G, _)
            },
            drawPropertyName: function(D, t, r, q, I, x, Y) {
                return t.drawPropertyName ? (t.drawPropertyName(D, t, r, q, I, x, Y, this), void 0) : (wb(D, this.getPropertyName(t), this.getPropertyFont(t, r), this.getPropertyColor(t, r), q, I, x, Y), void 0)
            },
            drawPropertyValue: function(i, Z, L, Y, Q, q, N, j, P) {
                return Z.drawPropertyValue ? Z.drawPropertyValue(i, Z, L, Y, Q, q, N, j, P, this) : (Vr(i, L, Z, this.getLabelFont(Z, L, Y), this.getLabelColor(Z, L, Y), Q, q, N, j, P, this), void 0)
            },
            isPropertyEditable: function(H) {
                return H.isEditable() && this.isEditable()
            },
            setProperties: function(U) {
                this._propertyModel.clear(),
                this.addProperties(U)
            },
            addProperties: function(Q) {
                if (Q) {
                    var A = this._propertyModel;
                    Q.forEach(function(y) {
                        if (! (y instanceof Gl)) {
                            var $ = cf(y.className);
                            y = on($ ? $: Gl, y)
                        }
                        A.add(y)
                    })
                }
            },
            getRowIndexAt: function(W) {
                var l = this,
                j = T(l.lp(W).y / l._rowHeight);
                return j >= 0 && j < l._rows.size() ? j: -1
            },
            getPropertyAt: function(o) {
                var k = this,
                E = k.getRowIndexAt(o);
                return E >= 0 ? k._rows.get(E).property: F
            },
            getToolTip: function(b) {
                var D = this,
                a = D.getPropertyAt(b),
                $ = D._27o;
                return a && $ ? a.getToolTip($, D._9I < D.lp(b).x, D) : F
            }
        });
        var uo = function(l) {
            this.pv = l,
            this.addListeners()
        };
        eg(uo, o, {
            ms_listener: 1,
            getView: function() {
                return this.pv._view
            },
            setCursor: function(A) {
                this.getView().style.cursor = A
            },
            clear: function() {
                var l = this;
                l._62O = l.cp = l.ty = l.p = F,
                l.setCursor(G)
            },
            handle_mousedown: function(r) {
                this.handle_touchstart(r)
            },
            handle_touchstart: function(x) {
                var U = this,
                D = U.pv;
                pm(x),
                D.setFocus(x) && (oi(x) ? (U.cp = ce(x), U.ty = D.ty(), U.p = D.getColumnPosition(), U.handle_touchmove(x)) : D.setSelectRowIndex(D.getRowIndexAt(x)))
            },
            handleWindowMouseUp: function() {
                this.clear()
            },
            handleWindowTouchEnd: function() {
                this.clear()
            },
            handle_mouseup: function(S) {
                this.handle_touchend(S)
            },
            handle_touchend: function(L) {
                var q = this;
                if (q.cp && !q._62O) {
                    var B = q.pv,
                    c = B.lp(L),
                    A = c.x,
                    N = c.y,
                    I = B._indent,
                    o = B.getRowIndexAt(L),
                    G = B._9I;
                    if (o >= 0) {
                        var V = B._rowHeight,
                        T = V * o,
                        H = B._rows.get(o),
                        f = H.property;
                        if (Cl(H)) oq(B.isExpanded(H) ? B._expandIcon: B._collapseIcon) && A >= 0 && I >= A && N >= T && T + V >= N ? B.toggle(H) : Rr(L) && B.toggle(H);
                        else if (A > G && B.isPropertyEditable(f)) {
                            var Z = {
                                x: G + 1,
                                y: T,
                                width: B.getWidth() - G - 1,
                                height: V
                            },
                            _ = {
                                x: Z.x + B.tx(),
                                y: Z.y + B.ty(),
                                width: Z.width,
                                height: Z.height
                            },
                            $ = 0,
                            R = B._29I;
                            Z.y < R.y ? $ = Z.y - R.y: Z.y + V > R.y + R.height && ($ = Z.y + V - R.y - R.height),
                            $ && (B.ty(B.ty() - $), _.y -= $),
                            B.beginEditing({
                                data: H.data,
                                property: f,
                                value: B.getValue(H.data, f),
                                event: L,
                                rect: Z,
                                editorRect: _,
                                view: B
                            })
                        }
                    }
                    B.setSelectRowIndex(o)
                }
                q.clear()
            },
            handleWindowMouseMove: function(b) {
                this.handleWindowTouchMove(b)
            },
            handleWindowTouchMove: function(Y) {
                var K = this,
                s = K.pv,
                d = K.ty,
                l = K.cp,
                C = ce(Y),
                R = K._62O;
                if ("p" === R) s.setTranslateY(d + C.y - l.y);
                else if ("c" === R) {
                    var y = s.getWidth() - s._indent;
                    if (y > 16) {
                        var B = K.p - (l.x - C.x) / y,
                        P = 16 / y;
                        P > B && (B = P),
                        B > 1 - P && (B = 1 - P),
                        s.setColumnPosition(B)
                    }
                } else "s" === R && s.setTranslateY(d + (l.y - C.y) * s._59I / s._29I.height)
            },
            handle_mousemove: function(X) {
                this.handle_touchmove(X)
            },
            handle_touchmove: function(I) {
                if (!Nf && oi(I)) {
                    var A = this,
                    z = A.pv,
                    p = R(z.lp(I).x - z._9I) <= (a ? 8 : 3);
                    A.cp ? A._62O || (p ? (A._62O = "c", fk(A)) : R(ce(I).y - A.cp.y) >= 2 && (A._62O = A.isV(I) ? "s": "p", fk(A))) : (p ? A.setCursor(Sf) : A.setCursor(G), A.isV(I) && z._43o())
                }
            },
            isV: function(Z) {
                var a = this.pv,
                j = a._29I;
                return a._41o() && j.x + j.width - a.lp(Z).x < _f
            },
            handle_mousewheel: function(H) {
                this.handleScroll(H, H.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(k) {
                2 === k.axis && this.handleScroll(k, -k.detail)
            },
            handleScroll: function(p, B) {
                var d = this.pv;
                pm(p),
                d.endEditing(),
                d.translate(0, B * d.getRowHeight())
            },
            handle_keydown: function(b) {
                var m = this.pv,
                t = m._rows.size(),
                D = m._selectRowIndex + (cj(b) ? -1 : 1); (cj(b) || ll(b)) && (0 > D && (D = 0), D >= t && (D = t - 1), m.setSelectRowIndex(D))
            }
        }),
        Ff.ListView = function(M) {
            this._5o(M),
            new ar(this)
        },
        Zm("ListView", o, {
            ms_ac: [kj, pi, xh, tl, Jj, bq, yd, ho, pb, ik, Oi, Hh, ur, Ng],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            _14Q: 1,
            ms_dm: 1,
            _45o: 1,
            _checkMode: !1,
            _indent: Tk,
            _rowHeight: ks,
            _rowLineVisible: C.listViewRowLineVisible,
            _rowLineColor: C.listViewRowLineColor,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoMakeVisible: Tl,
            _autoHideScrollBar: xi,
            _selectBackground: C.listViewSelectBackground,
            _labelColor: C.listViewLabelColor,
            _labelSelectColor: C.listViewLabelSelectColor,
            _labelFont: C.listViewLabelFont,
            isCheckMode: function() {
                return this._checkMode
            },
            setCheckMode: function(A) {
                var D = this,
                r = D._checkMode;
                D._checkMode = A,
                D.fp(Ec, r, A)
            },
            drawRow: function(T, F, A, f, g, M, d) {
                var o = this,
                E = 0,
                B = o._indent,
                w = o.getIconWidth(F);
                o.drawRowBackground(T, F, A, f, g, M, d),
                o._checkMode && (Cs(T, o.getCheckIcon(F), E + B / 2, g + d / 2, F, o), E += B),
                o.drawIcon(T, F, E, g, w, d),
                o.drawLabel(T, F, E + w, g, d)
            }
        });
        var ar = function(p) {
            this.list = p,
            this.addListeners()
        };
        eg(ar, o, {
            ms_listener: 1,
            getView: function() {
                return this.list._view
            },
            clear: function(c) {
                var C = this;
                c && "d" === C._62O && C.list.handleDragAndDrop(c, "end"),
                C._62O = C.cp = C.tx = C.ty = F
            },
            handle_mousedown: function(y) {
                this.handle_touchstart(y)
            },
            handle_touchstart: function(E) {
                var T = this,
                L = T.list;
                if (pm(E), L.setFocus(E)) if (T.cp = ce(E), T.tx = L.tx(), T.ty = L.ty(), oi(E)) T.isV(E) || T.isH(E) || !L.handleDragAndDrop || L.handleDragAndDrop(E, "prepare");
                else {
                    var W = L.getDataAt(E);
                    W && T._33o(E, W),
                    T.clear(E)
                }
            },
            handleWindowMouseUp: function(n) {
                this.clear(n)
            },
            handleWindowTouchEnd: function(A) {
                this.clear(A)
            },
            handle_mouseup: function(Y) {
                this.handle_touchend(Y)
            },
            handle_touchend: function(s) {
                var G = this,
                P = G.list;
                if (G.cp && !G._62O) {
                    var Q = P.getDataAt(s);
                    Q && (P.isCheckMode() ? G._34o(s, Q) : G._33o(s, Q), Rr(s) ? P.onDataDoubleClicked(Q, s) : P.onDataClicked(Q, s))
                }
                G.clear(s)
            },
            handleWindowMouseMove: function(e) {
                this.handleWindowTouchMove(e)
            },
            handleWindowTouchMove: function($) {
                var e = this,
                j = e.list,
                u = e._62O,
                A = e.tx,
                f = e.ty,
                J = e.cp,
                L = ce($),
                D = j._29I;
                "p" === u ? j.setTranslate(A + L.x - J.x, f + L.y - J.y) : "v" === u ? j.ty(f + (J.y - L.y) * j._59I / D.height) : "h" === u ? j.tx(A + (J.x - L.x) * j._91I / D.width) : "d" === u && j.handleDragAndDrop($, "between")
            },
            handle_mousemove: function(I) {
                this.handle_touchmove(I)
            },
            handle_touchmove: function(X) {
                if (!Nf && oi(X)) {
                    var d = this,
                    h = d.list,
                    a = d.isV(X),
                    Q = d.isH(X);
                    if (d.cp) {
                        if (!d._62O) {
                            if (ep(ce(X), d.cp) < 2) return;
                            a ? d._62O = "v": Q ? d._62O = "h": h.handleDragAndDrop ? (d._62O = "d", h.handleDragAndDrop(X, "begin")) : d._62O = "p",
                            fk(d)
                        }
                    } else a && h._43o(),
                    Q && h._42o()
                }
            },
            isV: function(f) {
                var I = this.list,
                c = I._29I;
                return I._41o() && c.x + c.width - I.lp(f).x < _f
            },
            isH: function(F) {
                var r = this.list,
                T = r._29I;
                return r._40o() && T.y + T.height - r.lp(F).y < _f
            },
            handle_mousewheel: function(g) {
                this.handleScroll(g, g.wheelDelta / 40, g.wheelDelta !== g.wheelDeltaX)
            },
            handle_DOMMouseScroll: function(l) {
                this.handleScroll(l, -l.detail, 1)
            },
            handleScroll: function(Y, h, i) {
                var v = this.list;
                pm(Y),
                v.endEditing && v.endEditing(),
                i && v._41o() ? v.translate(0, h * v.getRowHeight()) : v._40o() && v.translate(10 * h, 0)
            },
            handle_keydown: function(_) {
                var B, E = this.list,
                H = E.sm(),
                I = E._rows,
                z = I.size();
                if (zg(_)) E.selectAll();
                else if (qs(_)) E.handleDelete && E.handleDelete(_);
                else if (Go(_)) E.isCheckMode() && (B = E.getFocusData(), B && E.checkData(B));
                else if (cj(_) || ll(_)) {
                    var p = E.isCheckMode();
                    if (B = p ? E.getFocusData() : H.ld()) {
                        var j = E.getRowIndex(B);
                        j >= 0 && (cj(_) ? 0 !== j && (B = I.get(j - 1), p ? E.setFocusData(B) : H.ss(B)) : j !== z - 1 && (B = I.get(j + 1), p ? E.setFocusData(B) : H.ss(B)))
                    } else z > 0 && (B = I.get(0), p ? E.setFocusData(B) : H.ss(B))
                }
            },
            _34o: function(d, Z) {
                var v = this.list,
                O = v.lp(d).x;
                return O >= 0 && O <= v._indent ? (v.checkData(Z), void 0) : (v.setFocusData(Z), void 0)
            },
            _33o: function(Z, y) {
                var x = this.list,
                e = x.sm(),
                E = e.ld();
                if (ui(Z)) x.isSelected(y) ? e.rs(y) : e.as(y);
                else if (Ei(Z)) if (E) for (var X = x.getRowIndex(E), H = x.getRowIndex(y); X !== H;) X += H > X ? 1 : -1,
                e.as(x._rows.get(X));
                else e.ss(y);
                else(oi(Z) || !e.contains(y)) && e.ss(y)
            }
        }),
        Ff.TreeView = function(t) {
            var u = this;
            u._35o(),
            u._5o(t),
            new Xn(u)
        },
        Zm("TreeView", o, {
            ms_ac: [kj, pi, xh, "rootVisible", Ec, "rootData", ho, pb, ik, Oi, Hh, Jj, tl, bq, yd, jd, Ok, ur, Ng, "loader", "doubleClickToToggle"],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _checkMode: F,
            _indent: Tk,
            _rowHeight: ks,
            _rowLineVisible: C.treeViewRowLineVisible,
            _rowLineColor: C.treeViewRowLineColor,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoHideScrollBar: xi,
            _expandIcon: C.treeViewExpandIcon,
            _collapseIcon: C.treeViewCollapseIcon,
            _autoMakeVisible: Tl,
            _selectBackground: C.treeViewSelectBackground,
            _labelColor: C.treeViewLabelColor,
            _labelSelectColor: C.treeViewLabelSelectColor,
            _labelFont: C.treeViewLabelFont,
            _doubleClickToToggle: C.treeViewDoubleClickToToggle,
            drawRow: function($, V, g, H, w, h, f) {
                var T = this;
                T.drawRowBackground($, V, g, H, w, h, f),
                T._97I($, V, g, 0, w, h, f)
            },
            isOnToggleIcon: function(Z) {
                var $ = this.getDataAt(Z);
                if ($) {
                    var y = this.getIndent(),
                    T = this.lp(Z).x;
                    if (oq(this.getToggleIcon($))) {
                        var N = y * this.getLevel($);
                        if (T >= N && N + y >= T) return ! 0
                    }
                }
                return ! 1
            }
        });
        var Xn = function(c) {
            Lo(Xn, this, [c])
        };
        eg(Xn, ar, {
            toggle: function(h, M, x, g) {
                var q = this.list,
                A = q.lp(h).x;
                if (oq(q.getToggleIcon(M))) {
                    var s = x * g;
                    if (A >= s && s + x >= A) return q.toggle(M),
                    !0
                }
                return q.isDoubleClickToToggle() && Rr(h) ? (q.toggle(M), !0) : !1
            },
            _34o: function(L, N) {
                var s = this.list,
                $ = s.lp(L).x,
                u = s._levelMap[N._id],
                c = s._indent,
                Y = c * (u + 1);
                return $ >= Y && Y + c >= $ ? (s.checkData(N), void 0) : (this.toggle(L, N, c, u) || s.setFocusData(N), void 0)
            },
            _33o: function(D, o) {
                var Q = this,
                S = Q.list;
                Q.toggle(D, o, S._indent, S.getLevel(o)) || Xn.superClass._33o.call(Q, D, o)
            },
            handle_keydown: function(j) {
                if (kb(j) || Bo(j)) {
                    var C = this.list,
                    b = C._rows,
                    I = C.isCheckMode(),
                    q = C.sm(),
                    Z = I ? C.getFocusData() : q.ld();
                    Z ? Z.hasChildren() && (kb(j) ? C.collapse(Z) : C.expand(Z)) : b.size() > 0 && (Z = b.get(0), I ? C.setFocusData(Z) : q.ss(Z))
                } else Xn.superClass.handle_keydown.call(this, j)
            }
        });
        var $n = Ff.TableView = function(a) {
            this._98I(),
            this._5o(a),
            new wl(this)
        };
        Zm("TableView", o, {
            ms_ac: [kj, pi, xh, "sortMode", rk, Be, tl, bq, yd, Bi, hf, "sortColumn", ho, pb, ik, Oi, Hh, ur, Ng],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: pg,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: ks,
            _rowLineVisible: C.tableViewRowLineVisible,
            _rowLineColor: C.tableViewRowLineColor,
            _columnLineVisible: C.tableViewColumnLineVisible,
            _columnLineColor: C.tableViewColumnLineColor,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoHideScrollBar: xi,
            _autoMakeVisible: Tl,
            _selectBackground: C.tableViewSelectBackground,
            _labelColor: C.tableViewLabelColor,
            _labelSelectColor: C.tableViewLabelSelectColor,
            _labelFont: C.tableViewLabelFont,
            getCheckColumn: function() {
                var G = this;
                if (!G._31o) {
                    var g = G._31o = new dq;
                    g.setEditable(!0),
                    g.setWidth(40),
                    g.getValue = G.getCheckColumValue,
                    g.drawCell = G.drawCheckColumnCell
                }
                return G._31o
            },
            isCheckMode: function() {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function(S) {
                var r = this,
                d = r._39o,
                I = r.getCheckColumn();
                S !== r.isCheckMode() && (S ? d.add(I, 0) : d.remove(I), r.fp(Ec, !S, S))
            },
            getCheckColumValue: function(c, C, A) {
                return A.isSelected(c)
            },
            drawCheckColumnCell: function(I, E, v, l, N, V, x, m, b) {
                Cs(I, b.getCheckIcon(E), N + x / 2, V + m / 2, E, b)
            }
        });
        var wl = function(c) {
            Lo(wl, this, [c])
        };
        eg(wl, ar, {
            _34o: function(M, t) {
                var c = this.list,
                S = c._31o;
                if (c.isCellEditable(t, S)) {
                    var v = c._3Q(S),
                    R = c.lp(M).x;
                    if (v && R >= v.startX && R < v.startX + S.getWidth()) return c.checkData(t),
                    void 0
                }
                c.setFocusData(t),
                c._37O(t, M)
            },
            _33o: function(V, u) {
                wl.superClass._33o.apply(this, arguments),
                this.list._37O(u, V)
            }
        });
        var Cb = Ff.TreeTableView = function(t) {
            var g = this,
            C = g._4o = new dq;
            g._35o(),
            g._98I(),
            g._5o(t),
            C.setDisplayName("Name"),
            C.setEditable(!0),
            C.setWidth(180),
            C.drawCell = dn,
            C.getValue = _h,
            g._39o.add(C),
            new gh(g)
        },
        dn = function(p, c, O, o, a, f, J, u, j) {
            j._97I(p, c, O, a, f, J, u)
        },
        _h = function(K, m, D) {
            return D.getLabel(K)
        };
        Zm("TreeTableView", o, {
            ms_ac: [kj, pi, xh, "sortMode", rk, Be, Jj, Ec, "rootData", "rootVisible", ho, pb, "sortColumn", jd, Ok, ik, Oi, Hh, ur, yd, tl, bq, Bi, hf, Ng, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: pg,
            _checkMode: F,
            _editable: !0,
            _batchEditable: !1,
            _indent: Tk,
            _rowHeight: ks,
            _rowLineVisible: C.treeTableViewRowLineVisible,
            _rowLineColor: C.treeTableViewRowLineColor,
            _columnLineVisible: C.treeTableViewColumnLineVisible,
            _columnLineColor: C.treeTableViewColumnLineColor,
            _expandIcon: C.treeTableViewExpandIcon,
            _collapseIcon: C.treeTableViewCollapseIcon,
            _scrollBarColor: kn,
            _scrollBarSize: Ki,
            _autoHideScrollBar: xi,
            _autoMakeVisible: Tl,
            _selectBackground: C.treeTableViewSelectBackground,
            _labelColor: C.treeTableViewLabelColor,
            _labelSelectColor: C.treeTableViewLabelSelectColor,
            _labelFont: C.treeTableViewLabelFont,
            getTreeColumn: function() {
                return this._4o
            }
        });
        var gh = function(_) {
            Lo(gh, this, [_])
        };
        eg(gh, ar, {
            _34o: function(q, M) {
                var X = this.list,
                L = X._4o,
                D = X._3Q(L),
                v = X.lp(q).x;
                if (D) {
                    var a = X._indent,
                    k = D.startX + a * X.getLevel(M);
                    if (oq(X.getToggleIcon(M)) && v >= k && k + a >= v) return X.toggle(M),
                    void 0;
                    if (X.isCellEditable(M, L) && (k += a, v >= k && k + a >= v)) return X.checkData(M),
                    void 0
                }
                X.setFocusData(M),
                X._37O(M, q)
            },
            _33o: function(W, c) {
                var G = this.list,
                e = G.lp(W).x;
                if (oq(G.getToggleIcon(c))) {
                    var F = G._3Q(G._4o);
                    if (F) {
                        var j = G._indent,
                        b = F.startX + j * G.getLevel(c);
                        if (e >= b && b + j >= e) return G.toggle(c),
                        void 0
                    }
                }
                gh.superClass._33o.apply(this, arguments),
                G._37O(c, W)
            }
        });
        var Po = Ff.TableHeader = function(Q) {
            var m = this,
            N = m._view = Kp(1, m),
            b = m._39o = Q.getColumnModel(),
            v = m.iv;
            m.tv = m._tableView = Q,
            m._60I = new Lq,
            m._canvas = Jr(N),
            N.style.background = C.tableHeaderBackground || "",
            N.style.height = Zq + mb,
            b.mm(v, m),
            b.md(v, m),
            b.mh(v, m),
            Q.mp(function(M) {
                kq[M.property] && m.iv()
            },
            m),
            new Og(m),
            m.iv()
        };
        Zm("TableHeader", o, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", kj, xh, Jj, "moveBackground", "insertColor", Bi, hf, "resizable", "movable"],
            _checkIcon: be,
            _movable: !0,
            _resizable: !0,
            _labelColor: C.tableHeaderLabelColor,
            _labelFont: C.tableHeaderLabelFont,
            _columnLineColor: C.tableHeaderColumnLineColor,
            _columnLineVisible: C.tableHeaderColumnLineVisible,
            _sortDescIcon: C.tableHeaderSortDescIcon,
            _sortAscIcon: C.tableHeaderSortAscIcon,
            _moveBackground: C.tableHeaderMoveBackground,
            _insertColor: C.tableHeaderInsertColor,
            _indent: Tk,
            getCheckIcon: function() {
                return this._checkIcon
            },
            getTableView: function() {
                return this.tv
            },
            getLabel: function(M) {
                return M.toLabel()
            },
            getLabelFont: function() {
                return this._labelFont
            },
            getLabelColor: function(z) {
                return z.getColor() || this._labelColor
            },
            getLabelAlign: function(d) {
                return d._align
            },
            onPropertyChanged: function() {
                this.iv()
            },
            _5Q: function(r) {
                this._61I = r,
                this.iv()
            },
            getLogicalPoint: function(Q) {
                return Kh(Q, this._canvas, this.tv.tx())
            },
            validateImpl: function() {
                var o = this,
                G = o._canvas,
                z = o.getWidth(),
                C = o.getHeight(),
                k = o.tv,
                x = o._60I,
                Y = o._61I,
                B = -k.tx(),
                M = 0; (z !== G.clientWidth || C !== G.clientHeight) && Kc(G, z, C),
                x.clear(),
                o._39o._roots.each(function(I) {
                    if (I.isVisible()) {
                        var i = M + I.getWidth();
                        B + z >= M && i >= B && x.add({
                            column: I,
                            startX: M
                        }),
                        M = i
                    }
                });
                var r = oo(G);
                if (ws(r, -B, 0, 1), r.beginPath(), r.rect(B, 0, z, C), r.clip(), r.clearRect(B, 0, z, C), x.each(function(t) {
                    var D = t.column,
                    U = t.startX,
                    l = D.getWidth();
                    l > 0 && (r.save(), r.beginPath(), r.rect(U, 0, l, C), r.clip(), Y && Y.column === D || o.drawColumn(r, D, U, 0, l, C), o._columnLineVisible && qe(r, U + l - 1, 0, 1, C, o._columnLineColor), r.restore())
                }), Y) {
                    var u = Y.column,
                    M = Y.startX,
                    O = Y.position,
                    T = u.getWidth();
                    r.save(),
                    r.beginPath(),
                    r.rect(M, 0, T, C),
                    r.clip(),
                    r.fillStyle = o._moveBackground,
                    r.fill(),
                    o.drawColumn(r, u, M, 0, T, C),
                    r.restore(),
                    Ci(r, o._insertColor, O, 0, C)
                }
                r.restore()
            },
            _6Q: function(C) {
                var n = this.tv;
                return n._31o === C && n.sm().getSelectionMode() === bs
            },
            drawColumn: function(Z, m, b, P, t, L) {
                var x = this,
                i = x.tv,
                v = oq(m.getIcon()),
                Y = x.getLabelAlign(m);
                if (x._6Q(m)) {
                    var A = oq(x._checkIcon);
                    Cs(Z, A, b + t / 2, P + L / 2, m, x)
                } else {
                    var R = x.getLabel(m),
                    C = x.getLabelFont(m),
                    E = x.getLabelColor(m),
                    O = Te(C, R).width,
                    p = v ? x._indent: 0;
                    Y === Tb ? (v && qg(Z, v, Sh, b, P, p, L), wb(Z, R, C, E, b + p, P, t, L, Tb)) : Y === um ? (v && qg(Z, v, Sh, b + t - O - p, P, p, L), wb(Z, R, C, E, b, P, t, L, um)) : (v && qg(Z, v, Sh, b + (t - O - p) / 2, P, p, L), wb(Z, R, C, E, b + (t - O + p) / 2, P, 0, L, Tb))
                }
                if (m.isSortable() && i.getSortColumn() === m && (v = oq(m.getSortOrder() === Vm ? x._sortAscIcon: x._sortDescIcon))) {
                    var a = Dr(v, m) / 2 + 2;
                    Cs(Z, v, Y === um ? b + a: b + t - a, P + L / 2, m, i)
                }
            }
        });
        var Og = function(P) {
            var S = this;
            S.th = P,
            S.tv = P._tableView,
            S.addListeners()
        };
        eg(Og, o, {
            ms_listener: 1,
            getView: function() {
                return this.th.getView()
            },
            setCursor: function(Q) {
                this.getView().style.cursor = Q
            },
            handle_mousemove: function(Q) {
                if (!Nf) {
                    var E = this;
                    delete E._29o,
                    E.setCursor(G);
                    for (var y = E.th,
                    j = y._60I,
                    F = y.lp(Q).x, H = j.size() - 1; H >= 0; H--) {
                        var u = j.get(H),
                        n = u.column,
                        K = u.startX + n.getWidth();
                        if (y.isResizable() && R(K - F) <= (a ? 10 : 3)) return E._29o = u,
                        E.setCursor(Sf),
                        void 0; (n.isSortable() || y.isMovable() || n === E.tv.getCheckColumn()) && F >= u.startX && K >= F && n.getWidth() > 0 && (E._29o = u, E.setCursor(bg))
                    }
                }
            },
            handle_mousedown: function(Z) {
                this.handle_touchstart(Z)
            },
            handle_touchstart: function(p) {
                var F = this;
                pm(p),
                F.tv.endEditing(),
                F.handle_mousemove(p),
                F._29o && (F.x = ce(p).x, F.lx = F.th.lp(p).x, F.w = F._29o.column.getWidth(), fk(F, p))
            },
            handleWindowMouseMove: function(G) {
                this.handleWindowTouchMove(G)
            },
            handleWindowTouchMove: function(T) {
                var C = this,
                e = C.th,
                s = C.getView().style.cursor,
                G = C._29o,
                V = ce(T).x - C.x;
                if (C.resizing || C.moving || (s === Sf ? C.resizing = 1 : e.isMovable() && s === bg && R(V) > 2 && (C.moving = 1)), C.resizing) G.column.setWidth(C.w + V);
                else if (C.moving) {
                    var v = C.lx + V;
                    e._60I.each(function(x) {
                        var Q = x.startX,
                        p = Q + x.column.getWidth();
                        if (v >= Q && p >= v) {
                            var L = {
                                column: G.column,
                                startX: G.startX + V,
                                front: p - v > v - Q,
                                insertColumn: x.column
                            };
                            L.position = L.front ? Q: p,
                            e._5Q(L)
                        }
                    })
                }
            },
            _16Q: function(U, m) {
                var d = this,
                I = d.tv,
                _ = d.th,
                Y = _._checkIcon;
                if (_._6Q(U)) {
                    var Q = oq(Y),
                    $ = d.lx,
                    A = U.getWidth(),
                    V = Dr(Q, U);
                    if ($ >= m + A / 2 - V && m + A / 2 + V >= $) {
                        _.setCheckIcon(Y === Pb ? be: Pb);
                        var C = I.sm(),
                        X = I._rows;
                        return Y === Pb ? C.rs(X) : C.ss(X),
                        I.onCheckColumnClicked(U),
                        !0
                    }
                }
                return ! 1
            },
            handleWindowMouseUp: function(E) {
                this.handleWindowTouchEnd(E)
            },
            handleWindowTouchEnd: function(z) {
                var g = this,
                G = g.tv,
                h = g.th,
                W = g._29o;
                if (g.moving) {
                    var I = h._61I;
                    if (I && I.insertColumn !== I.column) {
                        var S = I.column,
                        c = G.getColumnModel()._roots,
                        N = c.remove(S),
                        V = c.indexOf(I.insertColumn);
                        V >= 0 && (I.front || V++, V <= c.size() && (c.add(S, V), G.getColumnModel()._38I(S, N, V)))
                    }
                    h._5Q(F),
                    delete g.moving
                } else if (!g.resizing && W) {
                    S = W.column;
                    var v = h.lp(z).x,
                    X = W.startX,
                    w = !0;
                    if (h.onColumnClicked) {
                        var A = h.onColumnClicked(S, z);
                        A === !1 && (w = !1)
                    }
                    if (w && v >= X && v <= X + S.getWidth() && !g._16Q(S, X)) {
                        if (S.isSortable()) {
                            var B = G.getSortMode(),
                            K = S.getSortOrder();
                            B === pg ? G.getSortColumn() === S ? (K === Rj && G.setSortColumn(F), S.setSortOrder(K === Vm ? Rj: Vm)) : G.setSortColumn(S) : "bistate" === B && (G.getSortColumn() === S ? S.setSortOrder(K === Vm ? Rj: Vm) : G.setSortColumn(S))
                        }
                        G.onColumnClicked(S, z)
                    }
                }
                g._29o = g.resizing = g.x = g.lx = g.w = F
            }
        }),
        Ff.TablePane = function(O) {
            this.init(new $n(O))
        },
        Zm("TablePane", o, {
            ms_v: 1,
            _44o: 1
        }),
        Ff.TreeTablePane = function(G) {
            this.init(new Cb(G))
        },
        Zm("TreeTablePane", o, {
            ms_v: 1,
            _44o: 1
        }),
        Ff.Toolbar = function(b) {
            var X = this,
            l = X._view = Kp(1, X),
            W = l.style;
            W.background = C.toolbarBackground || "",
            W.height = nl + mb,
            X._canvas = Jr(l),
            X._30o = new Lq,
            X._90I = new Lq,
            X.setItems(b || []),
            l.handleGroupSelectedChanged = function(S) {
                if (S.isSelected()) {
                    var k = S.getGroupId();
                    null != k && X._items.forEach(function(f) {
                        var Z = f.element;
                        Z && Z !== S && Z.setSelected && Z.getGroupId && Z.getGroupId() === k && Z.setSelected(!1)
                    })
                }
            },
            new Ml(X)
        },
        Zm("Toolbar", o, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_lp: 1,
            ms_tip: 1,
            ms_value: 1,
            ms_ac: [uq, kj, xh, pi, Ng, "itemGap", "separatorColor", "currentItem", "stickToRight"],
            _labelColor: C.toolbarLabelColor,
            _labelSelectColor: C.toolbarLabelSelectColor,
            _labelFont: C.toolbarLabelFont,
            _selectBackground: C.toolbarSelectBackground,
            _itemGap: C.toolbarItemGap,
            _separatorColor: C.toolbarSeparatorColor,
            _stickToRight: !1,
            getSumWidth: function() {
                return this._64I
            },
            getToolTip: function(t) {
                var e = this.getItemInfoAt(t);
                return e ? e.item.toolTip: F
            },
            getLabelColor: function(q) {
                return q.selected && q.type !== Pb && q.type !== gi ? this._labelSelectColor: this._labelColor
            },
            onPropertyChanged: function(m) {
                this.iv(),
                m.property === uq && this._items.forEach(function(q) {
                    yj(q)
                })
            },
            redraw: function() {
                this.iv()
            },
            addItem: function(o, u) {
                var w = this._items;
                u == F ? w.push(o) : w.splice(u, 0, o),
                this.fp(uq, F, w)
            },
            removeItem: function(H) {
                if (H) for (var A = this._items,
                g = 0; g < A.length; g++) H === A[g] && (A.splice(g, 1), this.fp(uq, F, A))
            },
            removeItemById: function(B) {
                if (B != F) for (var h = this._items,
                l = 0; l < h.length; l++) B === h[l].id && (h.splice(l, 1), this.fp(uq, F, h))
            },
            getItemById: function(p) {
                if (p != F) for (var e = this._items,
                V = 0; V < e.length; V++) {
                    var m = e[V];
                    if (p === m.id) return m
                }
            },
            getItemInfos: function() {
                return this._30o
            },
            getItemInfoAt: function(a) {
                var s = this,
                m = 0,
                w = s._30o,
                v = s.lp(a),
                G = v.x,
                x = v.y;
                if (x >= 0 && x <= s.getHeight()) for (; m < w.size(); m++) {
                    var n = w.get(m);
                    if (n.startX <= G && G <= n.endX) return n
                }
                return F
            },
            drawItem: function(P, f, k, Q, Z) {
                if (f.visible === !1) return 0;
                if (Pp(f.visible) && f.visible() === !1) return 0;
                var T = this,
                N = f.disabled;
                N && (P.globalAlpha = xr);
                var v = T.drawItemImpl(P, f, k, Q, Z),
                y = T._itemGap;
                return N && (P.globalAlpha = 1),
                this._currentItem !== f || "separator" === f || f.unfocusable || Hb(P, T._separatorColor, k - y / 2, 0, v + y, Q),
                v
            },
            drawItemImpl: function(D, U, f, u, $) {
                var C, y = this,
                s = y._view,
                h = y._itemGap,
                T = u / 2,
                c = U.type,
                m = U.label,
                w = y.getLabelFont(U),
                F = y.getLabelColor(U),
                W = U.selected,
                P = oq(U.icon),
                k = Dr(P, U),
                q = 0,
                O = U.element,
                X = k + (m ? Te(w, m).width: 0);
                if ("separator" === U) return Ci(D, y._separatorColor, f, u / 4, T),
                1;
                if (O) {
                    P && Cs(D, P, f + k / 2, T),
                    wb(D, m, w, F, f + k, 0, 0, u);
                    var t = Ee(O);
                    $ || y._90I.add(t),
                    t.parentNode !== s && Bf(s, t),
                    O.iv && O.iv(),
                    O.validate && O.validate();
                    var o = t.getBoundingClientRect(),
                    Q = o.width,
                    H = t.style;
                    return dg(t),
                    H.left = y.tx() + f + X + mb,
                    H.top = (u - o.height) / 2 + mb,
                    X + Q
                }
                return c === gi ? C = oq(W ? nb: Ip) : c === Pb && (C = oq(W ? Pb: be)),
                C ? (q = Dr(C, U), Cs(D, C, f + q / 2, T), f += q, X += q) : W && qe(D, f - h / 2, 0, X + h, u, y.getSelectBackground(U)),
                P && Cs(D, P, f + k / 2, T),
                wb(D, m, w, F, f + k, 0, 0, u),
                X
            },
            validateImpl: function() {
                var U = this,
                l = U._canvas,
                o = U.getWidth(),
                N = U.getHeight(),
                w = U._30o,
                F = U._items;
                Kc(l, o, N);
                var X = oo(l),
                C = U._itemGap,
                Y = C / 2;
                ws(X, U.tx(), 0, 1),
                X.clearRect(0, 0, o, N);
                var T = U._90I;
                U._90I = new Lq,
                w.clear(),
                F.forEach(function(_) {
                    var J = U.drawItem(X, _, Y, N);
                    w.add({
                        item: _,
                        startX: Y,
                        endX: Y + J,
                        width: J
                    }),
                    J && (Y += J + C)
                }),
                T.each(function(g) {
                    U._90I.contains(g) || Gq(g)
                }),
                U._64I = h(0, Y),
                X.restore(),
                U._stickToRight ? (U._65O = 0, X = oo(l), Y = o - U._64I + C, ws(X, 0, 0, 1), X.clearRect(0, 0, o, N), w.clear(), F.forEach(function(y) {
                    var M = U.drawItem(X, y, Y, N, !0);
                    w.add({
                        item: y,
                        startX: Y,
                        endX: Y + M,
                        width: M
                    }),
                    M && (Y += M + C)
                }), X.restore()) : U.tx(U.tx())
            },
            handleClick: function(q) {
                var j = this,
                g = q.type,
                z = q.action,
                i = q.groupId,
                I = q.selected;
                q.disabled || (i != F ? I || (q.selected = !0, this._items.forEach(function(x) {
                    x.groupId === i && q !== x && (x.selected = !1)
                }), z && q.action(q, j)) : g === Pb || "toggle" === g ? (q.selected = !I, z && q.action(q, j)) : z && q.action(q, j)),
                of(),
                j.iv()
            }
        });
        var Ml = function(U) {
            this.tb = U,
            this.addListeners()
        };
        eg(Ml, o, {
            ms_listener: 1,
            getView: function() {
                return this.tb._view
            },
            handle_mousewheel: function(T) {
                this.handleScroll(T, 10 * (T.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(V) {
                this.handleScroll(V, 10 * -V.detail)
            },
            handleScroll: function(N, H) {
                pm(N);
                var Y = this.tb;
                Y.isScrollable() && !Y._stickToRight && (Y.tx(Y.tx() + H), Or())
            },
            handle_mousemove: function(P) {
                var U = this;
                Nf ? U.info2 = U.tb.getItemInfoAt(P) : U.setItem(P)
            },
            handle_mouseout: function(J) {
                var Z = this;
                J.target === Z.getView() ? Z.tb.setCurrentItem(F) : Z.handle_mousemove(J)
            },
            handle_mousedown: function(s) {
                this.handle_mousemove(s),
                this.handle_touchstart(s)
            },
            handle_touchstart: function(q) {
                var R = this,
                K = R.tb,
                V = q.target; (V === R.getView() || V === K._canvas) && (pm(q), K.setFocus(q) && (this.setItem(q, !0), (K.isScrollable() || R.info && !R.info.item.disabled) && (R.x = ce(q).x, R.tx = K.tx(), fk(R, q))))
            },
            handleWindowMouseMove: function(W) {
                this.handleWindowTouchMove(W)
            },
            handleWindowTouchMove: function(Y) {
                var V = this,
                G = V.tb;
                if (!G._stickToRight) {
                    var P = ce(Y).x - V.x; ! V._25o && R(P) > 2 && G.isScrollable() && (V._25o = 1),
                    V._25o && G.tx(V.tx + P)
                }
            },
            handleWindowMouseUp: function(g) {
                this.handleWindowTouchEnd(g)
            },
            handleWindowTouchEnd: function() {
                var h = this,
                y = h.tb,
                q = h.info,
                t = h.info2;
                if (!h._25o && q) {
                    var C = q.item;
                    t && t.item !== C || y.handleClick(C)
                }
                h._25o = h.x = h.tx = h.info2 = F,
                h.setItem()
            },
            setItem: function(W, i) {
                var h = this,
                f = h.tb,
                U = h.info = W ? f.getItemInfoAt(W) : F,
                T = U ? U.item: F;
                f.setCurrentItem(T),
                i && T && Pp(T.onDown) && T.onDown(W)
            }
        }),
        Ff.BorderPane = function() {
            this._view = Kp(1, this),
            this.iv()
        },
        Zm("BorderPane", o, {
            ms_v: 1,
            ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
            ms_fire: 1,
            getLeftView: function() {
                return this._leftView
            },
            setLeftView: function(U, f) {
                this._12o("leftView", U),
                f != F && this.setLeftWidth(f)
            },
            getRightView: function() {
                return this._rightView
            },
            setRightView: function(A, O) {
                this._12o("rightView", A),
                O != F && this.setRightWidth(O)
            },
            getTopView: function() {
                return this._topView
            },
            setTopView: function(T, r) {
                this._12o("topView", T),
                r != F && this.setTopHeight(r)
            },
            getBottomView: function() {
                return this._bottomView
            },
            setBottomView: function($, f) {
                this._12o("bottomView", $),
                f != F && this.setBottomHeight(f)
            },
            getCenterView: function() {
                return this._centerView
            },
            setCenterView: function(J) {
                this._12o("centerView", J)
            },
            _12o: function(B, Z) {
                var o = this,
                r = "_" + B,
                Q = o._view,
                y = o[r];
                y !== Z && (y && (y.getView ? Gq(y.getView()) : Gq(y)), o[r] = Z, Z && (Z.getView ? Bf(Q, Z.getView(), 1) : Bf(Q, Z, 1)), o.fp(B, y, Z))
            },
            onPropertyChanged: function() {
                this.iv()
            },
            validateImpl: function() {
                var w = this,
                S = w._topView,
                o = w._bottomView,
                v = w._leftView,
                A = w._rightView,
                j = w._centerView,
                _ = w.getWidth(),
                D = w.getHeight(),
                L = 0,
                B = 0,
                d = _,
                e = D,
                q = 0,
                X = 0,
                O = 0,
                E = 0;
                S && (q = w._topHeight == F ? hd(S) : w._topHeight, B = q),
                o && (X = w._bottomHeight == F ? hd(o) : w._bottomHeight, e = D - X),
                v && (O = w._leftWidth == F ? Fi(v) : w._leftWidth, L = O),
                A && (E = w._rightWidth == F ? Fi(A) : w._rightWidth, d = _ - E);
                var u = h(0, d - L),
                r = h(0, e - B);
                S && Sn(S, 0, 0, _, q),
                o && Sn(o, 0, e, _, X),
                v && Sn(v, 0, B, O, r),
                A && Sn(A, d, B, E, r),
                j && Sn(j, L, B, u, r)
            }
        })
    }
} ("undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: this, Object);