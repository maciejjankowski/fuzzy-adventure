!(function (u) {
  function e(e) {
    for (
      var t, n, r = e[0], a = e[1], o = e[2], i = 0, s = [];
      i < r.length;
      i++
    )
      (n = r[i]), p[n] && s.push(p[n][0]), (p[n] = 0);
    for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (u[t] = a[t]);
    for (g && g(e); s.length; ) s.shift()();
    return d.push.apply(d, o || []), c();
  }
  function c() {
    for (var e, t = 0; t < d.length; t++) {
      for (var n = d[t], r = !0, a = 1; a < n.length; a++) {
        var o = n[a];
        0 !== p[o] && (r = !1);
      }
      r && (d.splice(t--, 1), (e = m((m.s = n[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      2: 0,
    },
    p = {
      2: 0,
    },
    d = [];
  function m(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return u[e].call(t.exports, t, t.exports, m), (t.l = !0), t.exports;
  }
  (m.e = function (d) {
    var e = [];
    l[d]
      ? e.push(l[d])
      : 0 !== l[d] &&
        {
          1: 1,
          3: 1,
          4: 1,
          6: 1,
          7: 1,
          8: 1,
          9: 1,
        }[d] &&
        e.push(
          (l[d] = new Promise(function (e, r) {
            for (
              var t =
                  ({
                    1: 'category',
                    3: 'not-found',
                    4: 'performance-baseline',
                    6: 'product-group-page',
                    7: 'product-images-slider',
                    8: 'product-page',
                    9: 'search',
                  }[d] || d) + '.css',
                a = m.p + t,
                n = document.getElementsByTagName('link'),
                o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (u = n[o]).getAttribute('data-href') || u.getAttribute('href');
              if ('stylesheet' === u.rel && (i === t || i === a)) return e();
            }
            var s = document.getElementsByTagName('style');
            for (o = 0; o < s.length; o++) {
              var u;
              if ((i = (u = s[o]).getAttribute('data-href')) === t || i === a)
                return e();
            }
            var c = document.createElement('link');
            (c.rel = 'stylesheet'),
              (c.type = 'text/css'),
              (c.onload = e),
              (c.onerror = function (e) {
                var t = (e && e.target && e.target.src) || a,
                  n = new Error(
                    'Loading CSS chunk ' + d + ' failed.\n(' + t + ')'
                  );
                (n.request = t), r(n);
              }),
              (c.href = a),
              document.getElementsByTagName('head')[0].appendChild(c);
          }).then(function () {
            l[d] = 0;
          }))
        );
    var t,
      n = p[d];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise(function (e, t) {
          n = p[d] = [e, t];
        });
        e.push((n[2] = r));
        var a,
          o = document.createElement('script');
        (o.charset = 'utf-8'),
          (o.timeout = 120),
          m.nc && o.setAttribute('nonce', m.nc),
          (o.src =
            m.p +
            '' +
            ({
              1: 'category',
              3: 'not-found',
              4: 'performance-baseline',
              6: 'product-group-page',
              7: 'product-images-slider',
              8: 'product-page',
              9: 'search',
            }[(t = d)] || t) +
            '.js');
        var i = new Error();
        a = function (e) {
          (o.onerror = o.onload = null), clearTimeout(s);
          var t = p[d];
          if (0 !== t) {
            if (t) {
              var n = e && ('load' === e.type ? 'missing' : e.type),
                r = e && e.target && e.target.src;
              (i.message =
                'Loading chunk ' + d + ' failed.\n(' + n + ': ' + r + ')'),
                (i.name = 'ChunkLoadError'),
                (i.type = n),
                (i.request = r),
                t[1](i);
            }
            p[d] = void 0;
          }
        };
        var s = setTimeout(function () {
          a({
            type: 'timeout',
            target: o,
          });
        }, 12e4);
        (o.onerror = o.onload = a), document.head.appendChild(o);
      }
    return Promise.all(e);
  }),
    (m.m = u),
    (m.c = n),
    (m.d = function (e, t, n) {
      m.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (m.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (m.t = function (t, e) {
      if ((1 & e && (t = m(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (m.r(n),
        Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: t,
        }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          m.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (m.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return m.d(t, 'a', t), t;
    }),
    (m.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (m.p = 'https://assets.kramp.com/search-and-products/3.0.49/'),
    (m.oe = function (e) {
      throw (console.error(e), e);
    });
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var a = 0; a < t.length; a++) e(t[a]);
  var g = r;
  d.push([1001, 0]), c();
})({
  1001: function (e, t, n) {
    'use strict';
    n.r(t);
    n(533);
    var g = n(0),
      f = n(69),
      y = n(156),
      h = n(86),
      v = n(332),
      N = n(95),
      b = n(43),
      r = n(58),
      C = n.n(r),
      a = n(334),
      P = n.n(a),
      I = n(161),
      M = n(9),
      O = n(73),
      T = n(8),
      o = (n(659), n(114)),
      u = n.n(o),
      i = n(29),
      c = n.n(i),
      s = new RegExp(M.f + '=([^&]*)$', 'i');
    c.a.interceptors.request.use(function (e) {
      var t = location.search.match(s);
      t && t[1] && (e.headers[M.f] = t[1]);
      var n = C.a.get('_csrf-buyer-journey-value');
      return (e.headers.common['X-CSRF-TOKEN'] = n), e;
    });
    var d,
      B,
      l,
      p = n(1011),
      m =
        ((d = function (e, t) {
          return (d =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          d(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      E = function () {
        return (E =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      _ = null,
      A = function (e, t) {
        return (
          (r = g.Component),
          m(n, r),
          (n.prototype.componentWillMount = function () {
            t && _(t);
          }),
          (n.prototype.render = function () {
            return g.createElement(e, E({}, this.props));
          }),
          n
        );
        function n() {
          return (null !== r && r.apply(this, arguments)) || this;
        }
        var r;
      },
      G = n(12),
      S = n(51),
      V = n(23),
      k = n(4);
    ((l = B = B || {}).FETCH_DELIVERY_PLAN =
      '[frontend/products]/FETCH_DELIVERY_PLAN'),
      (l.FETCH_DELIVERY_PLAN_SUCCESS =
        '[frontend/products]/FETCH_DELIVERY_PLAN_SUCCESS'),
      (l.FETCH_DELIVERY_PLAN_FAILED =
        '[frontend/products]/FETCH_DELIVERY_PLAN_FAILED'),
      (l.CLEAR_DELIVERY_PLAN_ERROR =
        '[frontend/products]/CLEAR_DELIVERY_PLAN_ERROR');
    var z,
      D,
      R = {
        fetchDeliveryPlan: Object(k.a)(B.FETCH_DELIVERY_PLAN),
        fetchDeliveryPlanSuccess: Object(k.a)(B.FETCH_DELIVERY_PLAN_SUCCESS),
        fetchDeliveryPlanFailed: Object(k.a)(B.FETCH_DELIVERY_PLAN_FAILED),
        clearDeliveryPlanError: Object(k.a)(B.CLEAR_DELIVERY_PLAN_ERROR),
      },
      q = n(24),
      H = {
        version: null,
        isHeaderBottomMenuOpen: !1,
        isUnauthorizedDialogOpen: !1,
        categoryNavigation: [],
        categoryBrands: {},
        homePageUrl: null,
        countries: [],
        miniCart: {},
        locale: n(201).a,
        quotation: {
          details: {
            id: '',
            name: '',
            count: 0,
          },
          items: [],
        },
        favorite: [],
        advisoryForm: {
          data: null,
          loading: !1,
          error: !1,
          success: !1,
        },
        quotationForm: {
          loading: !1,
          error: null,
        },
        bodyOverlayActive: !1,
        productConfiguratorUrl: {
          url: null,
          error: !1,
          loading: !1,
        },
        facets: {},
        logo: null,
        loginUrl: '',
      };
    ((D = z = z || {}).FETCH_DEFAULT = '[frontend/quotations]/FETCH_DEFAULT'),
      (D.FETCH_DEFAULT_SUCCESS = '[frontend/quotations]/FETCH_DEFAULT_SUCCESS'),
      (D.FETCH_DEFAULT_ERROR = '[frontend/quotations]/FETCH_DEFAULT_ERROR'),
      (D.FETCH_ALL = '[frontend/quotations]/FETCH_ALL'),
      (D.FETCH_ALL_SUCCESS = '[frontend/quotations]/FETCH_ALL_SUCCESS'),
      (D.FETCH_ALL_ERROR = '[frontend/quotations]/FETCH_ALL_ERROR'),
      (D.CREATE_NEW = '[frontend/quotations/CREATE_NEW'),
      (D.CREATE_NEW_SUCCESS = '[frontend/quotations/CREATE_SUCCESS'),
      (D.CREATE_NEW_FAILED = '[frontend/quotations/CREATE_ERROR'),
      (D.CREATE_NEW_CLEAR = '[frontend/quotations/CLEAR'),
      (D.CHANGE_DEFAULT = '[frontend/quotations/CHANGE_DEFAULT'),
      (D.CHANGE_DEFAULT_SUCCESS =
        '[frontend/quotations/CHANGE_DEFAULT_SUCCESS'),
      (D.CHANGE_DEFAULT_FAILED = '[frontend/quotations/CHANGE_DEFAULT_FAILED');
    Object(k.a)(z.FETCH_DEFAULT),
      Object(k.a)(z.FETCH_DEFAULT_SUCCESS),
      Object(k.a)(z.FETCH_DEFAULT_ERROR),
      Object(k.a)(z.FETCH_ALL);
    var F = Object(k.a)(z.FETCH_ALL_SUCCESS),
      L = Object(k.a)(z.FETCH_ALL_ERROR),
      j = (Object(k.a)(z.CREATE_NEW), Object(k.a)(z.CREATE_NEW_SUCCESS)),
      U = Object(k.a)(z.CREATE_NEW_FAILED),
      w =
        (Object(k.a)(z.CREATE_NEW_CLEAR),
        Object(k.a)(z.CHANGE_DEFAULT),
        Object(k.a)(z.CHANGE_DEFAULT_SUCCESS)),
      $ = Object(k.a)(z.CHANGE_DEFAULT_FAILED),
      Q = function () {
        return (Q =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      x = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      },
      W = Object(S.a)('ui', function (e, t) {
        switch ((void 0 === e && (e = H), t.type)) {
          case N.LOCATION_CHANGE:
            return e.isHeaderBottomMenuOpen
              ? Q(Q({}, e), {
                  isHeaderBottomMenuOpen: !1,
                })
              : e;
          case G.a.SET_RELOAD_URL:
            return Q(Q({}, e), {
              reloadUrl: t.payload,
            });
          case G.a.SET_HEADER_BOTTOM_MENU_OPEN:
            return Q(Q({}, e), {
              isHeaderBottomMenuOpen: t.payload,
            });
          case G.a.FETCH_CATEGORY_BRANDS_SUCCESS:
            return Q(Q({}, e), {
              categoryBrands:
                ((U = e.categoryBrands),
                (w = t.payload),
                Q(
                  Q({}, U),
                  w.reduce(function (e, t) {
                    return (
                      (e[t.categoryId] = t.brands.map(function (e) {
                        return {
                          href: e.href,
                          key: e.id,
                          name: e.name,
                        };
                      })),
                      e
                    );
                  }, {})
                )),
            });
          case G.a.ADD_PRODUCT_TO_QUOTATION:
          case G.a.ADD_PRODUCT_TO_QUOTATION_SUCCESS:
          case G.a.ADD_PRODUCT_TO_QUOTATION_FAILED:
            return Q(Q({}, e), {
              quotation:
                ((I = e.quotation),
                (T = (O = t).type),
                (E = O.payload),
                (_ = E.product),
                (A = E.quantity),
                (S = E.message),
                (k = E.orderLineCount),
                (D = E.description),
                (R = T === G.a.ADD_PRODUCT_TO_QUOTATION),
                (F = T === G.a.ADD_PRODUCT_TO_QUOTATION_FAILED),
                (L = !1),
                ((j = Q({}, I)).items = j.items.map(function (e) {
                  return e.itemId === E.product.id
                    ? ((L = !0),
                      Q(Q({}, e), {
                        quantity: F || R ? e.quantity : e.quantity + Number(A),
                        description:
                          F || R ? e.description : D + ' ' + e.description,
                        loading: R,
                        error: F ? S : null,
                      }))
                    : e;
                })),
                L
                  ? (j.details.count = k || j.details.count)
                  : j.items.push({
                      itemId: _.id,
                      quantity: 0,
                      description: '',
                      loading: R,
                      error: F ? S : null,
                    }),
                j),
            });
          case G.a.ADD_PRODUCT_TO_FAVORITE:
          case G.a.ADD_PRODUCT_TO_FAVORITE_SUCCESS:
          case G.a.ADD_PRODUCT_TO_FAVORITE_FAILED:
            return Q(Q({}, e), {
              favorite:
                ((d = e.favorite),
                (p = (l = t).type),
                (m = l.payload),
                (g = m.product),
                (f = m.quantity),
                (y = m.message),
                (h = m.description),
                (v = p === G.a.ADD_PRODUCT_TO_FAVORITE),
                (b = p === G.a.ADD_PRODUCT_TO_FAVORITE_FAILED),
                (C = !1),
                (P = x(d).map(function (e) {
                  return e.itemId === m.product.id
                    ? ((C = !0),
                      Q(Q({}, e), {
                        comment: b || v ? e.comment : h + ' ' + e.comment,
                        minimumQuantity: g.minimumQuantity,
                        quantity: f,
                        loading: v,
                        error: b ? y : null,
                      }))
                    : e;
                })),
                C ||
                  P.push({
                    itemId: g.id,
                    minimumQuantity: g.minimumQuantity,
                    quantity: f,
                    comment: '',
                    loading: v,
                    error: b ? y : null,
                  }),
                P),
            });
          case G.a.SEND_ADVISORY_FORM:
          case G.a.SEND_ADVISORY_FORM_SUCCESS:
          case G.a.SEND_ADVISORY_FORM_FAILED:
            return Q(Q({}, e), {
              advisoryForm:
                ((n = e.advisoryForm),
                (a = (r = t).type),
                (o = r.payload),
                (i = o.data),
                (s = o.error),
                (u = o.success),
                (c = a === G.a.SEND_ADVISORY_FORM),
                Q(Q({}, n), {
                  loading: c,
                  data: i,
                  error: s,
                  success: u,
                })),
            });
          case G.a.FETCH_PRODUCT_CONFIGURATOR_URL:
            return Q(Q({}, e), {
              productConfiguratorUrl: {
                url: null,
                loading: !0,
                error: !1,
              },
            });
          case G.a.FETCH_PRODUCT_CONFIGURATOR_URL_SUCCESS:
            return Q(Q({}, e), {
              productConfiguratorUrl: {
                url: t.payload,
                loading: !1,
                error: !1,
              },
            });
          case G.a.FETCH_PRODUCT_CONFIGURATOR_URL_FAILED:
            return Q(Q({}, e), {
              productConfiguratorUrl: {
                url: null,
                loading: !1,
                error: !0,
              },
            });
          case z.CREATE_NEW:
            return Q(Q({}, e), {
              quotationForm: {
                error: !1,
                loading: !0,
              },
            });
          case z.CREATE_NEW_FAILED:
            return Q(Q({}, e), {
              quotationForm: {
                error: !0,
                loading: !1,
              },
            });
          case z.CREATE_NEW_CLEAR:
            return Q(Q({}, e), {
              quotationForm: H.quotationForm,
            });
          case V.b.FETCH_PAGE_FAILED:
          case B.FETCH_DELIVERY_PLAN_FAILED:
          case q.c.FETCH_NET_PRICE_FAILED:
          case q.a.FETCH_DISCOUNT_CODE_FAILED:
          case G.a.FETCH_CATEGORY_BRANDS_FAILED:
            return t.payload.status === M.m.UNAUTHORIZED ||
              t.payload.message === M.l.UNAUTHORIZED
              ? Q(Q({}, e), {
                  isUnauthorizedDialogOpen: !0,
                })
              : e;
          case G.a.TOGGLE_BODY_OVERLAY:
            return Q(Q({}, e), {
              bodyOverlayActive: t.payload,
            });
          default:
            return e;
        }
        var n,
          r,
          a,
          o,
          i,
          s,
          u,
          c,
          d,
          l,
          p,
          m,
          g,
          f,
          y,
          h,
          v,
          b,
          C,
          P,
          I,
          O,
          T,
          E,
          _,
          A,
          S,
          k,
          D,
          R,
          F,
          L,
          j,
          U,
          w;
      }),
      K = n(40),
      Y = n(20);
    function Z(e) {
      var t = e.children;
      return g.createElement(
        'div',
        {
          className: te.dialogModalBackground,
        },
        g.createElement(
          'div',
          {
            className: te.dialogModalContentWrapper,
            role: 'dialog',
          },
          t
        )
      );
    }
    var J,
      X,
      ee = n(407),
      te = n(341),
      ne =
        ((J = function (e, t) {
          return (J =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          J(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      re = function () {
        return (re =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
    function ae(e) {
      var t = X.call(this, e) || this;
      return (
        (t.rootModal = document.getElementById('root-modal')),
        (t.el = document.createElement('div')),
        t
      );
    }
    var oe,
      ie,
      se =
        ((X = g.Component),
        ne(ae, X),
        (ae.prototype.componentDidMount = function () {
          this.rootModal.appendChild(this.el);
        }),
        (ae.prototype.componentWillUnmount = function () {
          this.rootModal.removeChild(this.el);
        }),
        (ae.prototype.render = function () {
          return y.createPortal(
            g.createElement(Z, re({}, this.props)),
            this.el
          );
        }),
        ae),
      ue = n(351),
      ce = n(352),
      de = n(342),
      le =
        ((oe = function (e, t) {
          return (oe =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          oe(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    function pe() {
      var e = (null !== ie && ie.apply(this, arguments)) || this;
      return (
        (e.reloadPage = function () {
          var e = document.location.href.replace(/(\?|&)unauthenticated=1/, '');
          document.location.assign(e);
        }),
        (e.redirectToLoginPage = function () {
          window.location.href = M.g
            ? '/mock/log-in?redirectTo='
            : 'https://login.kramp.com?redirectTo=';
        }),
        e
      );
    }
    function me(e) {
      var t = e.size,
        n = void 0 === t ? 'large' : t,
        r = e.className;
      return g.createElement(
        'div',
        {
          className: be.cBackgroundLoader,
        },
        g.createElement(
          'div',
          {
            className: be.cBackgroundLoaderSpinnerContainer,
          },
          g.createElement(T.UILoader, {
            className: r,
            size: n,
          })
        )
      );
    }
    function ge(e) {
      var t = e.authData,
        n = e.children;
      return g.createElement(
        Ie.a.Provider,
        {
          value: t,
        },
        g.createElement(
          T.LoggedInContext.Provider,
          {
            value: {
              isLoggedIn: t.isAuthenticated,
            },
          },
          n
        )
      );
    }
    function fe(e) {
      var t = e.locale,
        n = e.showCookiewall,
        r = Object(T.useCorporateIdentity)(),
        a = r.isKramp ? r.companyName.toUpperCase() : r.companyName,
        o = Object(Re.a)(),
        i = 'https://storage.googleapis.com/kramp-ws-cookiewall-production';
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          De.a,
          Fe({}, o, {
            defaultTitle: a,
            htmlAttributes: {
              lang: t.getLanguage(),
            },
            titleTemplate: '%s - ' + a,
          }),
          n &&
            g.createElement('link', {
              href: i + '/css/main.css',
              rel: 'stylesheet',
            }),
          n &&
            g.createElement('script', {
              src: i + '/js/main.js',
              type: 'text/javascript',
            })
        ),
        g.createElement(T.UIFavIcons, {
          corporateIdentity: r.id,
          wrapper: De.a,
        })
      );
    }
    var ye,
      he,
      ve =
        ((ie = g.PureComponent),
        le(pe, ie),
        (pe.prototype.render = function () {
          var t = this;
          return g.createElement(
            se,
            null,
            g.createElement(
              ue.a,
              null,
              g.createElement(
                'h2',
                null,
                g.createElement(ee.a, {
                  id: 'UnauthorizedMessage.title',
                })
              )
            ),
            g.createElement(
              ce.a,
              {
                className: de.cUnauthorizedDialogBody,
              },
              g.createElement(
                'p',
                null,
                g.createElement(ee.a, {
                  id: 'UnauthorizedMessage.body',
                })
              ),
              g.createElement(
                ee.a,
                {
                  id: 'UnauthorizedMessage.loginButton',
                },
                function (e) {
                  return g.createElement(
                    T.UIButton,
                    {
                      className: de.cUnauthorizedDialogButton,
                      onClick: t.redirectToLoginPage,
                      mode: 'primary',
                    },
                    e
                  );
                }
              ),
              g.createElement(
                'a',
                {
                  onClick: this.reloadPage,
                },
                g.createElement(ee.a, {
                  id: 'UnauthorizedMessage.continueLoggedOffLink',
                })
              )
            )
          );
        }),
        pe),
      be = n(343),
      Ce = n(217),
      Pe = n(128),
      Ie = n(356),
      Oe = n(172),
      Te = Object(h.connect)(function (e) {
        return {
          searchTerm: Object(K.h)(e),
          searchCategoryId: Object(K.i)(e),
        };
      })(function (e) {
        var t = e.countryCode,
          n = e.searchTerm,
          r = e.searchCategoryId,
          a = [
            {
              query: Oe.c,
            },
          ],
          o = [
            {
              query: Oe.d,
            },
            {
              query: Oe.a,
            },
          ],
          i = [
            {
              query: Oe.b,
            },
          ];
        return g.createElement(
          T.HeaderOptionsProvider,
          {
            value: {
              refetchQueries: {
                onChangeQuotation: a,
                onCreateQuotation: a,
                onChangeWishlist: o,
                onCreateWishlist: o,
                onNetPricePreferenceChange: i,
              },
            },
          },
          g.createElement(T.Header, {
            countryCode: t,
            searchTerm: n,
            searchCategoryId: r,
          })
        );
      }),
      Ee = n(207),
      _e = (n(676), n(203)),
      Ae = n(348),
      Se = n(112),
      ke = [Se.d, Se.c, Se.a],
      De = n(174),
      Re = n(353),
      Fe = function () {
        return (Fe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      Le =
        ((ye = function (e, t) {
          return (ye =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          ye(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      je =
        ((he = g.Component),
        Le(Ue, he),
        (Ue.prototype.componentDidMount = function () {
          document.location.search.includes('unauthenticated') &&
            this.setState({
              forceUnauthorizedDialogOpen: !0,
            }),
            this.setupAnalyticsTracking();
        }),
        (Ue.prototype.setupAnalyticsTracking = function () {
          M.o &&
            ((Ee.analyticsTracker.isLoggedIn = this.props.auth.isAuthenticated),
            (Ee.analyticsTracker.appVersion = 'search-products-v3.0.49'));
        }),
        (Ue.prototype.shouldShowCookiewall = function () {
          if (M.o)
            return !(
              -1 < (t = navigator.userAgent).indexOf('Googlebot') ||
              -1 < t.indexOf('bingbot') ||
              (void 0 === (e = C.a.get()) && (e = {}),
              e[Se.e] && -1 < ke.indexOf(e[Se.e]))
            );
          var e, t;
        }),
        (Ue.prototype.render = function () {
          var e = this.props,
            t = e.isHeaderBottomMenuOpen,
            n = e.isUnauthorizedDialogOpen,
            r = e.loadingInBackground,
            a = e.locale,
            o = e.auth,
            i = e.bodyOverlayActive,
            s = e.loginUrl;
          return g.createElement(
            'div',
            {
              id: 'app',
              className: _e.app,
            },
            g.createElement(
              p.a,
              {
                fallback: g.createElement(T.UIErrorPage, null),
              },
              g.createElement(
                T.UrlBuilderProvider,
                {
                  urlBuilder: new T.UrlBuilder(
                    'shop',
                    a.getCountry(),
                    a.getLanguage(),
                    {
                      loginUrl: M.g ? '/mock/log-in' : s,
                    }
                  ),
                },
                g.createElement(
                  T.LinkProvider,
                  {
                    link: Ae.a,
                  },
                  g.createElement(
                    ge,
                    {
                      authData: o,
                    },
                    g.createElement(
                      T.LocaleContext.Provider,
                      {
                        value: new T.Locale(a.getCountry(), a.getLanguage()),
                      },
                      g.createElement(
                        T.HeaderHeightContextProvider,
                        null,
                        g.createElement(fe, {
                          locale: a,
                          showCookiewall: this.shouldShowCookiewall(),
                        }),
                        g.createElement(T.UIVisualWebsiteOptimizer, {
                          accountId: M.w,
                        }),
                        g.createElement(Te, {
                          countryCode: a.getCountry(),
                        }),
                        t &&
                          g.createElement('div', {
                            className: _e.appLockedLayer,
                          }),
                        g.createElement(
                          'main',
                          {
                            role: 'main',
                            className: u()(_e.appMainContainer),
                          },
                          g.createElement(
                            T.UIContainer,
                            null,
                            i &&
                              g.createElement('div', {
                                className: _e.overlay,
                              }),
                            g.createElement(
                              p.a,
                              {
                                fallback: g.createElement(T.UIErrorPage, null),
                              },
                              (n || this.state.forceUnauthorizedDialogOpen) &&
                                g.createElement(ve, null),
                              r && g.createElement(me, null),
                              g.createElement(Pe.b, null)
                            )
                          )
                        ),
                        g.createElement(T.Footer, null),
                        'staging' !== M.q
                          ? g.createElement(T.UIChat, null)
                          : null,
                        g.createElement(T.UIFeedback, {
                          pageType: Ee.analyticsTracker.pageType,
                        })
                      )
                    )
                  )
                )
              )
            ),
            this.shouldShowCookiewall() &&
              g.createElement(
                'div',
                null,
                g.createElement('div', {
                  id: 'cookiewall',
                }),
                g.createElement('div', {
                  id: 'cookiewall-modal',
                })
              )
          );
        }),
        Ue);
    function Ue() {
      var e = (null !== he && he.apply(this, arguments)) || this;
      return (
        (e.state = {
          forceUnauthorizedDialogOpen: !1,
        }),
        e
      );
    }
    var we,
      Ne,
      Me = A(
        Object(h.connect)(function (e) {
          return {
            loadingInBackground: Object(K.c)(e),
            isHeaderBottomMenuOpen: Object(Y.b)(e),
            isUnauthorizedDialogOpen: Object(Y.c)(e),
            locale: Object(Y.d)(e),
            auth: Object(Ce.a)(e),
            bodyOverlayActive: Object(Y.a)(e),
            navigator: e.navigator,
            loginUrl: e.ui.loginUrl,
          };
        })(je),
        [W]
      ),
      Be = n(99);
    ((Ne = we = we || {}).FETCH = '[frontend/wish-lists]/FETCH'),
      (Ne.FETCH_SUCCESS = '[frontend/wish-lists]/FETCH_SUCCESS'),
      (Ne.FETCH_FAILED = '[frontend/wish-lists]/FETCH_FAILED'),
      (Ne.CHANGE_DEFAULT = '[frontend/wish-lists]/CHANGE_DEFAULT'),
      (Ne.CHANGE_DEFAULT_SUCCESS =
        '[frontend/wish-lists]/CHANGE_DEFAULT_SUCCESS'),
      (Ne.CHANGE_DEFAULT_FAILED =
        '[frontend/wish-lists]/CHANGE_DEFAULT_FAILED'),
      (Ne.SEND_FORM = '[frontend/wish-list]/SEND_FORM'),
      (Ne.SEND_FORM_SUCCESS = '[frontend/wish-list]/SEND_FORM_SUCCESS'),
      (Ne.SEND_FORM_FAILED = '[frontend/wish-list]/SEND_FORM_FAILED');
    Object(k.a)(we.FETCH);
    function Ge(r) {
      return function (n) {
        return function (e) {
          switch (e.type) {
            case V.b.FETCH_PAGE_SUCCESS:
              e.payload.data.status === M.m.MOVED_PERMANENTLY &&
                (window.location.href = e.payload.url);
              break;
            case Be.a.LOG_OUT_SUCCESS:
            case Be.a.LOG_OUT_FAILED:
              var t = r.getState();
              window.location.href = t.ui.homePageUrl;
              break;
            case we.SEND_FORM_SUCCESS:
              e.payload.url && (window.location.href = e.payload.url);
            case z.CREATE_NEW_SUCCESS:
              window.location.href = e.payload.url;
          }
          return n(e);
        };
      };
    }
    var Ve,
      ze,
      qe = Object(k.a)(we.FETCH_SUCCESS),
      He = Object(k.a)(we.FETCH_FAILED),
      $e =
        (Object(k.a)(we.CHANGE_DEFAULT),
        Object(k.a)(we.CHANGE_DEFAULT_SUCCESS)),
      Qe = Object(k.a)(we.CHANGE_DEFAULT_FAILED),
      xe = Object(k.a)(we.SEND_FORM_SUCCESS),
      We = (Object(k.a)(we.SEND_FORM), Object(k.a)(we.SEND_FORM_FAILED)),
      Ke = n(81),
      Ye = n(60),
      Ze = n(1021),
      Je = n(202);
    ((ze = Ve = Ve || {}).SAVE_NET_PRICE_SETTING =
      '[frontend/auth]/SAVE_NET_PRICE_SETTING'),
      (ze.SAVE_NET_PRICE_SETTING_SUCCESS =
        '[frontend/auth]/SAVE_NET_PRICE_SETTING_SUCCESS'),
      (ze.SAVE_NET_PRICE_SETTING_FAILED =
        '[frontend/auth]/SAVE_NET_PRICE_SETTING_FAILED'),
      (ze.FETCH_ACCOUNT_INFORMATION =
        '[frontend/auth]/FETCH_ACCOUNT_INFORMATION'),
      (ze.FETCH_ACCOUNT_INFORMATION_SUCCESS =
        '[frontend/auth]/FETCH_ACCOUNT_INFORMATION_SUCCESS'),
      (ze.FETCH_ACCOUNT_INFORMATION_FAILED =
        '[frontend/auth]/FETCH_ACCOUNT_INFORMATION_FAILED'),
      (ze.CLEAR_ACCOUNT_INFORMATION =
        '[frontend/auth]/CLEAR_ACCOUNT_INFORMATION');
    Object(k.a)(Ve.FETCH_ACCOUNT_INFORMATION);
    var Xe = Object(k.a)(Ve.FETCH_ACCOUNT_INFORMATION_SUCCESS),
      et = Object(k.a)(Ve.FETCH_ACCOUNT_INFORMATION_FAILED),
      tt =
        (Object(k.a)(Ve.CLEAR_ACCOUNT_INFORMATION),
        Object(k.a)(Ve.SAVE_NET_PRICE_SETTING),
        Object(k.a)(Ve.SAVE_NET_PRICE_SETTING_FAILED)),
      nt = Object(k.a)(Ve.SAVE_NET_PRICE_SETTING_SUCCESS),
      rt = function () {
        return (rt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      at = {
        id: void 0,
        information: void 0,
        settings: {
          netPrice: !1,
        },
      },
      ot = Object(S.a)('account', function (e, t) {
        switch ((void 0 === e && (e = at), t.type)) {
          case Ve.FETCH_ACCOUNT_INFORMATION_SUCCESS:
            return rt(rt({}, e), {
              id: t.payload.accountId,
              information: {
                username: t.payload.username,
                surname: t.payload.surname,
                customerNumber: t.payload.customerNumber,
                companyName: t.payload.companyName,
              },
              settings: {
                netPrice: t.payload.netPrice,
              },
            });
          case Ve.FETCH_ACCOUNT_INFORMATION_FAILED:
            var n = t.payload.message;
            return rt(rt({}, e), {
              id: t.payload.accountId,
              information: {
                error: n,
              },
            });
          case Ve.CLEAR_ACCOUNT_INFORMATION:
            return {
              id: void 0,
              information: void 0,
              settings: void 0,
            };
          case Ve.SAVE_NET_PRICE_SETTING:
            return rt(rt({}, e), {
              settings: rt(rt({}, e.settings), {
                netPrice: t.payload.showNetPrice,
              }),
            });
          case Ve.SAVE_NET_PRICE_SETTING_FAILED:
            return rt(rt({}, e), {
              settings: rt(rt({}, e.settings), {
                netPrice: !t.payload.showNetPrice,
              }),
            });
          default:
            return e;
        }
      }),
      it = n(13),
      st = function () {
        return (st =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
    function ut(e) {
      if (e.openModalId === V.a) return e.openModalId;
    }
    var ct,
      dt,
      lt = {
        currentUrl: '',
        currentPageDataUrl: '',
        loadingInBackground: !1,
        history: {},
        routerPageType: it.a.NOT_FOUND,
        openModalId: void 0,
        shouldReload: !1,
      },
      pt = Object(S.a)('pages', function (e, t) {
        switch ((void 0 === e && (e = lt), t.type)) {
          case N.LOCATION_CHANGE:
            var n = Object(I.a)(t.payload.location.pathname);
            return st(st({}, e), {
              routerPageType: n,
              shouldReload:
                void 0 !== e.shouldReload &&
                !e.shouldReload &&
                n === it.a.NOT_FOUND,
            });
          case V.b.LOCATION_RELOADED:
            return st(st({}, e), {
              shouldReload: !1,
            });
          case V.b.SET_CURRENT_URL:
            var r = e.history[t.payload.currentPageDataUrl];
            return st(st({}, e), {
              currentUrl: t.payload.currentUrl,
              currentPageDataUrl: t.payload.currentPageDataUrl,
              pageData: r,
              loadingInBackground: !1,
              openModalId: ut(e),
            });
          case V.b.SET_LOADING_IN_BACKGROUND:
            return st(st({}, e), {
              loadingInBackground: t.payload.isLoading,
            });
          case V.b.SET_OPEN_MODAL_ID:
            return st(st({}, e), {
              openModalId: t.payload.openModalId,
            });
          case V.b.FETCH_PAGE_FAILED:
            return t.payload.status === M.m.UNAUTHORIZED
              ? e
              : st(st({}, e), {
                  pageData: st(st({}, e.pageData), {
                    error: t.payload.error,
                  }),
                  loadingInBackground: !1,
                });
          case V.b.FETCH_PAGE_SUCCESS:
            var a = st(
              {},
              ((o = e.history),
              Object.keys(o || {})
                .slice(-3)
                .reduce(function (e, t) {
                  return (e[t] = o[t]), e;
                }, {}))
            );
            return (
              t.payload.data.status === M.m.OK &&
                (delete a[t.payload.pageDataUrl],
                (a[t.payload.pageDataUrl] = t.payload.data)),
              {
                currentUrl: t.payload.url,
                currentPageDataUrl: t.payload.pageDataUrl,
                loadingInBackground: !1,
                history: a,
                pageData: t.payload.data,
                openModalId: ut(e),
                routerPageType: t.payload.data.pageType,
                shouldReload: !1,
              }
            );
          default:
            return e;
        }
        var o;
      });
    ((dt = ct = ct || {}).NET_PRICE_CHECK =
      '[frontend/gtm/product]/NET_PRICE_CHECK'),
      (dt.AVAILABILITY_TO_PROMISE =
        '[frontend/gtm/product]/AVAILABILITY_TO_PROMISE'),
      (dt.ADD_TO_CART_COMPLETE = '[frontend/gtm/product]/ADD_TO_CART_COMPLETE'),
      (dt.CHANGE_QUANTITY = '[frontend/gtm/product]/CHANGE_QUANTITY');
    Object(k.a)(ct.NET_PRICE_CHECK);
    var mt,
      gt = Object(k.a)(ct.ADD_TO_CART_COMPLETE),
      ft =
        (Object(k.a)(ct.AVAILABILITY_TO_PROMISE),
        Object(k.a)(ct.CHANGE_QUANTITY),
        function () {
          return (ft =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        }),
      yt =
        (((mt = {})[ct.NET_PRICE_CHECK] = 'npc'),
        (mt[ct.AVAILABILITY_TO_PROMISE] = 'atp'),
        (mt[G.a.ADD_PRODUCT_TO_QUOTATION] = 'atc'),
        mt),
      ht = {
        eventsByProduct: {},
      },
      vt = Object(S.a)('gtm', function (e, t) {
        var n, r;
        switch ((void 0 === e && (e = ht), t.type)) {
          case ct.NET_PRICE_CHECK:
          case ct.AVAILABILITY_TO_PROMISE:
          case G.a.ADD_PRODUCT_TO_QUOTATION:
            var a =
                t.type === G.a.ADD_PRODUCT_TO_QUOTATION
                  ? t.payload.product.id
                  : t.payload.productId,
              o = e.eventsByProduct[a] || [],
              i = yt[t.type],
              s = o.indexOf(i);
            return (
              -1 !== s && o.splice(s, 1),
              (0 < o.length || t.type !== G.a.ADD_PRODUCT_TO_QUOTATION) &&
                o.push(i),
              {
                eventsByProduct: ft(
                  ft({}, e.eventsByProduct),
                  (((n = {})[a] = o), n)
                ),
              }
            );
          case ct.ADD_TO_CART_COMPLETE:
            return {
              eventsByProduct: ft(
                ft({}, e.eventsByProduct),
                (((r = {})[t.payload.productId] = []), r)
              ),
            };
          default:
            return e;
        }
      }),
      bt = n(37),
      Ct = {
        autoComplete: void 0,
        autoCompleteOpen: !1,
        gtm: {
          searchId: void 0,
          searchBar: null,
          searchType: null,
          clickedSuggestion: null,
        },
      },
      Pt = function () {
        return (Pt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      It = Object(S.a)('search', function (e, t) {
        switch ((void 0 === e && (e = Ct), t.type)) {
          case bt.a.FETCH_AUTO_COMPLETE_SUCCESS:
            return Pt(Pt({}, e), {
              autoComplete: Pt({}, t.payload),
              autoCompleteOpen: !0,
            });
          case bt.a.FETCH_AUTO_COMPLETE_FAILED:
            return Pt(Pt({}, e), {
              autoComplete: void 0,
            });
          case bt.a.TOGGLE_AUTO_COMPLETE:
            return Pt(Pt({}, e), {
              autoCompleteOpen: t.payload,
            });
          case bt.a.UPDATE_TRACK_DATA:
            return Pt(Pt({}, e), {
              gtm: Pt({}, t.payload),
            });
          default:
            return e;
        }
      }),
      Ot = {
        productQuantityState: {
          byId: {},
        },
        netPrices: {
          byHash: {},
        },
        discountCodes: {
          byHash: {},
        },
        deliveryPlans: {
          byHash: {},
        },
        errors: [],
      },
      Tt = function () {
        return (Tt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
    var Et = function () {
        return (Et =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      _t = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
    var At = function () {
      return (At =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
    };
    var St = function () {
        return (St =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      kt = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      };
    function Dt(e) {
      var t;
      return (
        ((t = {
          router: Object(N.connectRouter)(e),
        })[W.key] = W.reducer),
        (t[Je.b.key] = Je.b.reducer),
        (t[ot.key] = ot.reducer),
        (t[pt.key] = pt.reducer),
        (t[Rt.key] = Rt.reducer),
        (t[vt.key] = vt.reducer),
        (t[It.key] = It.reducer),
        (t[jt.key] = jt.reducer),
        (t[Nt.key] = Nt.reducer),
        t
      );
    }
    var Rt = Object(S.a)('normalizedState', function (e, n) {
        var t, r;
        switch ((void 0 === e && (e = Ot), n.type)) {
          case q.c.FETCH_NET_PRICE_SUCCESS:
            var a = n.payload,
              o = {
                productId: a.productId,
                quantity: a.quantity,
                price: a.price,
                volumeDiscounts: a.volumeDiscounts,
              };
            return St(St({}, e), {
              netPrices: {
                byHash: St(
                  St({}, e.netPrices.byHash),
                  (((t = {})[(r = o).productId + '__' + r.quantity] = o), t)
                ),
              },
            });
          case q.c.FETCH_NET_PRICE_FAILED:
            return St(St({}, e), {
              errors: kt(e.errors, [
                {
                  actionName: n.type,
                  payload: n.payload,
                },
              ]),
            });
          case q.b.CLEAR_ERROR:
            return St(St({}, e), {
              errors: kt(e.errors).filter(function (t) {
                if (t.actionName !== n.payload.actionName) return !0;
                if (n.payload.filterPayloadBy) {
                  var e = Object.keys(n.payload.filterPayloadBy);
                  return (
                    e.filter(function (e) {
                      return t.payload[e] === n.payload[e];
                    }).length === e.length
                  );
                }
                return !1;
              }),
            });
          case q.c.CLEAR_NET_PRICES:
            return St(St({}, e), {
              netPrices: Ot.netPrices,
            });
          case q.d.SET_PRODUCT_QUANTITY:
          case q.d.WARN_PRODUCT_QUANTITY_ROUNDED:
          case q.d.CLEAR_PRODUCT_QUANTITY_ROUNDED:
            return St(St({}, e), {
              productQuantityState: (function (e, t) {
                var n, r, a;
                switch (t.type) {
                  case q.d.SET_PRODUCT_QUANTITY:
                    return At(At({}, e), {
                      byId: At(
                        At({}, e.byId),
                        (((n = {})[t.payload.productId] = {
                          quantity: t.payload.quantity,
                          isRounded: t.payload.isRounded,
                        }),
                        n)
                      ),
                    });
                  case q.d.WARN_PRODUCT_QUANTITY_ROUNDED:
                    return At(At({}, e), {
                      byId: At(
                        At({}, e.byId),
                        (((r = {})[t.payload.productId] = At(
                          At({}, e.byId[t.payload.productId]),
                          {
                            warnRounded: t.payload.isRounded,
                          }
                        )),
                        r)
                      ),
                    });
                  case q.d.CLEAR_PRODUCT_QUANTITY_ROUNDED:
                    return At(At({}, e), {
                      byId: At(
                        At({}, e.byId),
                        (((a = {})[t.payload.productId] = At(
                          At({}, e.byId[t.payload.productId]),
                          {
                            warnRounded: !1,
                          }
                        )),
                        a)
                      ),
                    });
                }
                return e;
              })(e.productQuantityState, n),
            });
          case q.a.FETCH_DISCOUNT_CODE:
          case q.a.FETCH_DISCOUNT_CODE_SUCCESS:
          case q.a.FETCH_DISCOUNT_CODE_FAILED:
            return St(St({}, e), {
              discountCodes: (function (e, t) {
                var n,
                  r,
                  a,
                  o = Object(k.b)([t.payload.productId, t.payload.quantity]);
                switch (t.type) {
                  case q.a.FETCH_DISCOUNT_CODE:
                    return Et(Et({}, e), {
                      byHash: Et(
                        Et({}, e.byHash),
                        (((n = {})[o] = Et(
                          Et(
                            {
                              loading: !0,
                              error: null,
                            },
                            t.payload
                          ),
                          {
                            discountCode: null,
                          }
                        )),
                        n)
                      ),
                    });
                  case q.a.FETCH_DISCOUNT_CODE_SUCCESS:
                    return Et(Et({}, e), {
                      byHash: Et(
                        Et({}, e.byHash),
                        (((r = {})[o] = Et(
                          {
                            loading: !1,
                            error: null,
                          },
                          t.payload
                        )),
                        r)
                      ),
                    });
                  case q.a.FETCH_DISCOUNT_CODE_FAILED:
                    var i = t.payload,
                      s = i.message,
                      u = _t(i, ['message']);
                    return Et(Et({}, e), {
                      byHash: Et(
                        Et({}, e.byHash),
                        (((a = {})[o] = Et(
                          Et(
                            {
                              loading: !1,
                              error: s,
                            },
                            u
                          ),
                          {
                            discountCode: null,
                          }
                        )),
                        a)
                      ),
                    });
                }
                return e;
              })(e.discountCodes, n),
            });
          case B.FETCH_DELIVERY_PLAN:
          case B.FETCH_DELIVERY_PLAN_SUCCESS:
          case B.FETCH_DELIVERY_PLAN_FAILED:
          case B.CLEAR_DELIVERY_PLAN_ERROR:
            return St(St({}, e), {
              deliveryPlans: (function (e, t) {
                var n,
                  r,
                  a,
                  o,
                  i = Object(k.b)([t.payload.id, t.payload.requestedQuantity]);
                switch (t.type) {
                  case B.FETCH_DELIVERY_PLAN:
                    return Tt(Tt({}, e), {
                      byHash: Tt(
                        Tt({}, e.byHash),
                        (((n = {})[i] = Tt(Tt({}, t.payload), {
                          loading: !0,
                          error: !1,
                        })),
                        n)
                      ),
                    });
                  case B.FETCH_DELIVERY_PLAN_SUCCESS:
                    return Tt(Tt({}, e), {
                      byHash: Tt(
                        Tt({}, e.byHash),
                        (((r = {})[i] = Tt(Tt({}, t.payload), {
                          loading: !1,
                          error: !1,
                        })),
                        r)
                      ),
                    });
                  case B.FETCH_DELIVERY_PLAN_FAILED:
                    return Tt(Tt({}, e), {
                      byHash: Tt(
                        Tt({}, e.byHash),
                        (((a = {})[i] = Tt(Tt({}, t.payload), {
                          loading: !1,
                          error: !0,
                        })),
                        a)
                      ),
                    });
                  case B.CLEAR_DELIVERY_PLAN_ERROR:
                    return Tt(Tt({}, e), {
                      byHash: Tt(
                        Tt({}, e.byHash),
                        (((o = {})[i] = Tt(Tt({}, t.payload), {
                          loading: !1,
                          error: !1,
                        })),
                        o)
                      ),
                    });
                  default:
                    return e;
                }
              })(e.deliveryPlans, n),
            });
          default:
            return e;
        }
      }),
      Ft = {
        wishLists: [],
        loading: !1,
        error: null,
        wishListForm: {
          loading: !1,
          error: null,
        },
      },
      Lt = function () {
        return (Lt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      jt = Object(S.a)('wishList', function (e, t) {
        switch ((void 0 === e && (e = Ft), t.type)) {
          case we.FETCH:
            return Lt(Lt({}, e), {
              loading: !0,
              error: void 0,
              wishLists: [],
            });
          case we.FETCH_SUCCESS:
            return Lt(Lt({}, e), {
              loading: !1,
              wishLists: t.payload,
            });
          case we.FETCH_FAILED:
            return Lt(Lt({}, e), {
              error: t.payload.message,
              loading: !1,
            });
          case we.CHANGE_DEFAULT:
            return Lt(Lt({}, e), {
              loading: !0,
              error: void 0,
            });
          case we.CHANGE_DEFAULT_SUCCESS:
            return Lt(Lt({}, e), {
              loading: !1,
              error: void 0,
              wishLists: e.wishLists.map(function (e) {
                return Lt(Lt({}, e), {
                  isDefault: e.id === t.payload.id,
                });
              }),
            });
          case we.CHANGE_DEFAULT_FAILED:
            return Lt(Lt({}, e), {
              error: t.payload.message,
              loading: !1,
            });
          case we.SEND_FORM:
            return Lt(Lt({}, e), {
              wishListForm: {
                loading: !0,
                error: void 0,
              },
            });
          case we.SEND_FORM_FAILED:
            return Lt(Lt({}, e), {
              wishListForm: {
                loading: !1,
                error: t.payload.message,
              },
            });
          default:
            return e;
        }
      }),
      Ut = {
        quotations: [],
        loading: !1,
        error: void 0,
      },
      wt = function () {
        return (wt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      Nt = Object(S.a)('quotations', function (e, t) {
        switch ((void 0 === e && (e = Ut), t.type)) {
          case z.FETCH_ALL:
            return wt(wt({}, e), {
              loading: !0,
              error: void 0,
              quotations: [],
            });
          case z.FETCH_ALL_SUCCESS:
            return wt(wt({}, e), {
              loading: !1,
              quotations: t.payload,
            });
          case z.FETCH_ALL_ERROR:
            return wt(wt({}, e), {
              error: t.payload,
              loading: !1,
            });
          case z.CHANGE_DEFAULT:
            return wt(wt({}, e), {
              loading: !0,
              error: void 0,
            });
          case z.CHANGE_DEFAULT_SUCCESS:
            return wt(wt({}, e), {
              loading: !1,
              error: void 0,
              quotations: e.quotations.map(function (e) {
                return wt(wt({}, e), {
                  isDefault: e.id === t.payload.id,
                });
              }),
            });
          case z.CHANGE_DEFAULT_FAILED:
            return wt(wt({}, e), {
              error: t.payload,
              loading: !1,
            });
          default:
            return e;
        }
      }),
      Mt = n(1020),
      Bt = n(521),
      Gt = n(274),
      Vt = n(522),
      zt = n(1007),
      qt = n(1015),
      Ht = n(1005),
      $t = n(1012),
      Qt = n(209),
      xt = n(1013),
      Wt = n(1014),
      Kt = n(420);
    function Yt(e, n, t) {
      var r = Object.keys(n)
          .filter(function (e) {
            return void 0 !== n[e] && 0 !== n[e].length;
          })
          .filter(function (e) {
            return 'page' !== e || ('page' === e && '1' !== n[e].toString());
          })
          .reduce(function (e, t) {
            return (e[t] = n[t]), e;
          }, {}),
        a = Object.keys(r).reduce(function (e, t) {
          return e + (e.length ? '&' : '') + t + '=' + encodeURIComponent(r[t]);
        }, '');
      return '/page-data-loader/' + t.format('-') + '/' + e + '/?' + a;
    }
    var Zt = /[?&]_version=([^&#]*)/,
      Jt = n(1016),
      Xt = n(1017),
      en = n(62),
      tn = n(421),
      nn = n(59),
      rn = n(270),
      an = function () {
        return (an =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
    function on(e, t) {
      return Object(V.c)({
        pageArguments: an(
          an(
            {
              searchTerm: e.pages.pageData.searchTerm,
            },
            Object(en.b)(e.router.location.search)
          ),
          t
        ),
        pageType: it.a.SEARCH,
      });
    }
    var sn = n(272),
      un = n(523),
      cn = n(422),
      dn = n(358);
    var ln,
      pn = n(1023),
      mn = n(1018),
      gn = n(147),
      fn = n(273);
    (ln || (ln = {})).TRACK_EVENT = '[frontend/tracking]/TRACK_EVENT';
    var yn,
      hn,
      vn = Object(k.a)(ln.TRACK_EVENT);
    ((hn = yn = yn || {}).product = 'product'),
      (hn.productgroup = 'productgroup'),
      (hn.overview = 'overview');
    var bn,
      Cn = n(146);
    function Pn(e, t) {
      return void 0 === t
        ? t
        : 1 === e.length && t.hasOwnProperty.call(t, e[0])
        ? t[e[0]]
        : Pn(e, t[e.shift()]);
    }
    var In,
      On,
      Tn = 'direct',
      En = 'upcoming',
      _n = 'unknown';
    ((bn = {})[Tn] = 'check'),
      (bn[En] = 'exclamation-mark'),
      (bn[_n] = 'question-mark');
    ((On = In = In || {})[(On.FRIDAY = 5)] = 'FRIDAY'),
      (On[(On.SATURDAY = 6)] = 'SATURDAY'),
      (On[(On.SUNDAY = 0)] = 'SUNDAY');
    function An(e, t) {
      return t === In.FRIDAY && e <= 3
        ? Tn
        : (n = e) < 1 || 10 <= n
        ? _n
        : 1 === n
        ? Tn
        : 1 < n && n < 10
        ? En
        : void 0;
      var n;
    }
    function Sn(e, t) {
      return e === B.FETCH_DELIVERY_PLAN_SUCCESS
        ? t.id
        : t.product
        ? t.product.id
        : t.productId;
    }
    function kn(e, t) {
      var n = '';
      if (e.type === V.b.FETCH_PAGE_SUCCESS) n = e.payload.url;
      else {
        if (e.type !== V.b.SET_CURRENT_URL) return t.pages.currentUrl;
        n = e.payload.currentUrl;
      }
      return n.split('?')[0];
    }
    var Dn = n(271),
      Rn = n(22),
      Fn = n(139),
      Ln = function () {
        return (Ln =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      jn = [
        function (e, t) {
          return Object(zt.a)(
            e.pipe(Object(Bt.a)(G.a.ADD_PRODUCT_TO_QUOTATION)),
            e.pipe(Object(Bt.a)(ct.NET_PRICE_CHECK)),
            e.pipe(Object(Bt.a)(B.FETCH_DELIVERY_PLAN_SUCCESS))
          ).pipe(
            Object($t.a)(t),
            Object(Ht.a)(function (e) {
              var t = e[0],
                n = t.payload,
                r = t.type;
              return 1 < e[1].gtm.eventsByProduct[Sn(r, n)].length;
            }),
            Object(Qt.a)(function (e) {
              var t = e[0],
                n = t.payload,
                r = t.type,
                a = e[1],
                o = Sn(r, n),
                i = a.gtm.eventsByProduct[o],
                s = {
                  eventParams: Ln(
                    {
                      event: i.join('-'),
                    },
                    (function (e, t) {
                      var n = e.pages,
                        r = n.pageData,
                        a =
                          (((r.pageType === it.a.CATEGORY &&
                            r.browseType === yn.product) ||
                            r.pageType === it.a.SEARCH ||
                            r.pageType === it.a.PRODUCT_GROUP ||
                            r.pageType === it.a.PRODUCT) &&
                            r.products.byId[t]) ||
                          {},
                        o = e.gtm.eventsByProduct[t],
                        i = r.breadcrumbs,
                        s =
                          Pn(
                            [
                              'normalizedState',
                              'productQuantityState',
                              'byId',
                              t,
                            ],
                            e
                          ) || a.roundingQuantity,
                        u = new T.Locale(
                          e.ui.locale.country,
                          e.ui.locale.language
                        ),
                        c = Ln(
                          Ln(
                            {
                              breadcrumb:
                                i && !Object(Cn.a)(i)
                                  ? i
                                      .filter(function (e) {
                                        return e;
                                      })
                                      .map(function (e) {
                                        return e.text;
                                      })
                                      .join(' > ')
                                  : null,
                              country: u.countryLabel(),
                              'gdpr-level': Object(Dn.a)(),
                              langshopId: u.format(),
                              'page-type': r.pageType,
                              'sku-id': t,
                              'view-type': r.displayMode,
                              'click-position': Object(Rn.d)(n.pageData, a.id),
                              shoppingcartId: e.ui.quotation.details.id,
                            },
                            Object(Rn.a)(
                              e.auth.isAuthenticated,
                              e.account.tracking
                            )
                          ),
                          Object(Rn.i)(
                            e.search.gtm.searchId,
                            e.pages.pageData.pageType
                          )
                        );
                      if (o.includes('npc')) {
                        var d = Pn(
                          [
                            'normalizedState',
                            'netPrices',
                            'byHash',
                            Object(k.b)([t, s]),
                            'price',
                          ],
                          e
                        );
                        (c['net-price'] = d ? d.toFixed(2) : ''),
                          (c['gross-price'] = Object(gn.isNumber)(a.grossPrice)
                            ? a.grossPrice.toFixed(2)
                            : '');
                      }
                      if (o.includes('atp')) {
                        var l =
                          e.normalizedState.deliveryPlans.byHash[
                            Object(k.b)([t, s])
                          ];
                        l &&
                          l.deliveries &&
                          l.deliveries.forEach(function (e, t) {
                            if (!(10 <= t)) {
                              var n = Object(fn.differenceInCalendarDays)(
                                e.deliveryTime,
                                Date.now()
                              );
                              (c['atp-request-' + (t + 1)] = e.quantity),
                                (c['atp-result-' + (t + 1)] =
                                  An(n, new Date().getDay()) === Tn
                                    ? 'direct'
                                    : n);
                            }
                          });
                      }
                      return c;
                    })(a, o)
                  ),
                };
              return vn(s);
            })
          );
        },
        function (e, t) {
          return Object(zt.a)(
            e.pipe(Object(Bt.a)(G.a.ADD_PRODUCT_TO_QUOTATION))
          ).pipe(
            Object($t.a)(t),
            Object(Ht.a)(function (e) {
              var t = e[0],
                n = t.type,
                r = t.payload;
              return 0 < e[1].gtm.eventsByProduct[Sn(n, r)].length;
            }),
            Object(Qt.a)(function (e) {
              var t = e[0].payload;
              return gt({
                productId: t.product.id,
              });
            })
          );
        },
        function (e, t) {
          return Object(zt.a)(
            e.pipe(Object(Bt.a)(V.b.FETCH_PAGE_SUCCESS)),
            e.pipe(Object(Bt.a)(V.b.SET_CURRENT_URL)),
            e.pipe(Object(Bt.a)(G.a.PAGE_FINISHED_RENDER), Object(pn.a)(1))
          ).pipe(
            Object($t.a)(t),
            Object(mn.a)(function (e, t) {
              var n = e[0],
                r = e[1],
                a = t[0],
                o = t[1];
              return kn(n, r) === kn(a, o);
            }),
            Object(xt.a)(function (e) {
              e[0];
              var t = e[1];
              return Object(Fn.a)('pageView')(Object(Fn.b)(t)), qt.a;
            })
          );
        },
      ],
      Un = n(72);
    function wn(e, t) {
      var n = Object(en.a)(
        it.a.CATEGORY,
        e.router.location.pathname,
        Object(en.b)(e.router.location.search),
        t
      );
      return Object(V.c)(n);
    }
    var Nn = n(1019);
    function Mn(e, t) {
      return '/data-updater/' + e.format('-') + '/' + t;
    }
    function Bn(e, t, n, r) {
      var a = Object.keys(r || {}).reduce(function (e, t) {
        return e.concat([t, '=', encodeURIComponent(r[t])].join(''));
      }, []);
      return (
        '/data-loader/' +
        e.format('-') +
        '/products/' +
        t +
        '/' +
        n +
        (a.length ? '?' + a.join('&') : '')
      );
    }
    function Gn(e) {
      var t = Math.abs(
        Object(fn.differenceInCalendarDays)(e.deliveryTime, Date.now())
      );
      return An(t, new Date().getDay()) === Tn ? 'direct' : t;
    }
    function Vn(e, t) {
      var n,
        r,
        a =
          (((n = {})[Rr.c] = Lr.a.getCorporateIdentityFromDomain(t)),
          (n['ctx-locale'] =
            e.ui.locale.language + '_' + e.ui.locale.country.toUpperCase()),
          n);
      if (e.auth.isAuthenticated) {
        var o =
          ((r = Rr.b),
          (
            document.cookie.split(';').find(function (e) {
              return e.includes(r + '=');
            }) || ''
          )
            .split('=')
            .slice(1)
            .join('='));
        a[Rr.d] = o;
      }
      return a;
    }
    var zn,
      qn,
      Hn,
      $n,
      Qn,
      xn,
      Wn,
      Kn,
      Yn,
      Zn,
      Jn,
      Xn,
      er,
      tr,
      nr,
      rr,
      ar,
      or,
      ir,
      sr,
      ur,
      cr,
      dr,
      lr,
      pr,
      mr,
      gr,
      fr,
      yr,
      hr,
      vr,
      br,
      Cr,
      Pr,
      Ir,
      Or,
      Tr,
      Er,
      _r,
      Ar,
      Sr,
      kr,
      Dr = [
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(G.a.ADD_PRODUCT_TO_QUOTATION),
            Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var t,
                o = e[0],
                n = e[1];
              return Object(Gt.a)(
                c.a.post(
                  Mn(n, 'add-to-quotation'),
                  o.payload,
                  'production' === M.q
                    ? {}
                    : {
                        headers: (((t = {})[M.x] = o.payload.requestId), t),
                      }
                )
              ).pipe(
                Object(Qt.a)(function (e) {
                  if (e.data.status === M.m.UNAUTHORIZED)
                    return G.d({
                      product: o.payload.product,
                      quantity: o.payload.quantity,
                      index: o.payload.index,
                      comment: o.payload.comment,
                      message: e.data.message,
                    });
                  var t = o.payload,
                    n = t.product,
                    r = t.quantity,
                    a = t.comment;
                  return G.e({
                    product: n,
                    quantity: r,
                    comment: a,
                    orderLineCount: e.data.orderLineCount,
                  });
                }),
                Object(Wt.a)(function (e) {
                  return Object(Vt.a)(
                    G.d({
                      product: o.payload.product,
                      quantity: o.payload.quantity,
                      index: o.payload.index,
                      comment: o.payload.comment,
                      message: e.message,
                    })
                  );
                })
              );
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(G.a.ADD_PRODUCT_TO_FAVORITE),
            Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var t = e[0],
                n = e[1],
                r = t.payload,
                a = r.product,
                o = r.comment,
                i = r.quantity,
                s = r.index,
                u = {
                  itemId: a.id,
                  comment: o,
                  quantity: i,
                };
              return Object(Gt.a)(c.a.post(Mn(n, 'add-to-favorite'), u)).pipe(
                Object(Qt.a)(function (e) {
                  return e.data.status === M.m.UNAUTHORIZED
                    ? G.b({
                        product: a,
                        comment: o,
                        quantity: i,
                        message: e.data.message,
                        index: s,
                      })
                    : G.c({
                        product: a,
                        comment: o,
                        quantity: i,
                        index: s,
                      });
                }),
                Object(Wt.a)(function (e) {
                  var t = e.response.data.message;
                  return Object(Vt.a)(
                    G.b({
                      product: a,
                      comment: o,
                      quantity: i,
                      message: t,
                      index: s,
                    })
                  );
                })
              );
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(B.FETCH_DELIVERY_PLAN),
            Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var o = e[0],
                t = e[1];
              return Object(Gt.a)(
                c.a.get(
                  Bn(t, o.payload.id, 'delivery-plan', {
                    quantity: o.payload.requestedQuantity.toString(),
                  })
                )
              ).pipe(
                Object(Qt.a)(function (e) {
                  var t = e.data,
                    n = o.payload,
                    r = n.id,
                    a = n.requestedQuantity;
                  return e.data.status === M.m.UNAUTHORIZED
                    ? R.fetchDeliveryPlanFailed({
                        id: r,
                        requestedQuantity: a,
                        message: e.data.message,
                      })
                    : R.fetchDeliveryPlanSuccess({
                        id: r,
                        requestedQuantity: a,
                        deliveries: t ? t.deliveries : [],
                        validUntil: t ? t.validUntil : '',
                      });
                }),
                Object(Wt.a)(function (e) {
                  return Object(Vt.a)(
                    R.fetchDeliveryPlanFailed({
                      id: o.payload.id,
                      requestedQuantity: o.payload.requestedQuantity,
                      message: e.message,
                    })
                  );
                })
              );
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(q.c.FETCH_NET_PRICE),
            Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var u = e[0],
                t = e[1];
              return Object(Gt.a)(
                c.a.get(
                  Bn(t, u.payload.productId, 'net-prices', {
                    quantity: u.payload.quantity.toString(),
                  })
                )
              ).pipe(
                Object(Qt.a)(function (e) {
                  if (e.data.status === M.m.UNAUTHORIZED)
                    return Object(q.g)({
                      productId: u.payload.productId,
                      message: e.data.message,
                    });
                  var t = e.data;
                  if (1 === t.netPrices.prices.length) {
                    var n = t.netPrices.prices[0],
                      r = n.price,
                      a = n.volumeDiscounts,
                      o = u.payload,
                      i = o.productId,
                      s = o.quantity;
                    return Object(q.h)({
                      productId: i,
                      price: r,
                      quantity: s,
                      volumeDiscounts: a,
                    });
                  }
                }),
                Object(Wt.a)(function (e) {
                  return Object(Vt.a)(
                    Object(q.g)({
                      productId: u.payload.productId,
                      message: e.message,
                    })
                  );
                })
              );
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(q.a.FETCH_DISCOUNT_CODE),
            Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var i = e[0],
                t = e[1];
              return Object(Gt.a)(
                c.a.get(
                  Bn(t, i.payload.productId, 'discount-code', {
                    quantity: i.payload.quantity.toString(),
                  })
                )
              ).pipe(
                Object(Qt.a)(function (e) {
                  if (e.data.status === M.m.UNAUTHORIZED)
                    return Object(q.e)({
                      productId: i.payload.productId,
                      quantity: i.payload.quantity,
                      message: e.data.message,
                    });
                  var t = e.data;
                  if (1 === t.discountCodes.length) {
                    var n = t.discountCodes[0].discountCode,
                      r = i.payload,
                      a = r.productId,
                      o = r.quantity;
                    return Object(q.f)({
                      productId: a,
                      quantity: o,
                      discountCode: n,
                    });
                  }
                }),
                Object(Wt.a)(function (e) {
                  return Object(Vt.a)(
                    Object(q.e)({
                      productId: i.payload.productId,
                      quantity: i.payload.quantity,
                      message: e.message,
                    })
                  );
                })
              );
            })
          );
        },
        function (e) {
          return e.pipe(
            Object(Bt.a)(q.d.SET_PRODUCT_QUANTITY),
            Object(Ht.a)(function (e) {
              return e.payload.isRounded;
            }),
            Object(Qt.a)(function (e) {
              return Object(q.j)(e.payload);
            })
          );
        },
        function (e, a) {
          return e.pipe(
            Object(Bt.a)(G.a.SEND_ADVISORY_FORM),
            Object($t.a)(a.pipe(Object(Qt.a)(Y.d))),
            Object(un.a)(function (e) {
              var t = e[0],
                n = e[1],
                r = t.payload.data;
              return Object(Gt.a)(
                c.a.post(Mn(n, 'send-advisory-form'), {
                  data: r,
                })
              ).pipe(
                Object($t.a)(a),
                Object(Qt.a)(function () {
                  return G.l({
                    error: !1,
                    success: !0,
                  });
                }),
                Object(Wt.a)(function (e) {
                  var t = e.response;
                  return Object(Vt.a)(
                    G.k({
                      error: t ? t.data.message : 'Connection problems',
                    })
                  );
                })
              );
            })
          );
        },
      ],
      Rr = n(53),
      Fr = n(32),
      Lr = n(127),
      jr = n(197),
      Ur = n(98),
      wr = n(249),
      Nr = n(336),
      Mr = n.n(Nr),
      Br = function () {
        return (Br =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      Gr = n(7),
      Vr = n.n(Gr),
      zr =
        (n(10),
        n(3),
        function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', {
                  value: t,
                })
              : (e.raw = t),
            e
          );
        });
    ((qn = zn = zn || {}).Unblocked = 'UNBLOCKED'),
      (qn.Blocked = 'BLOCKED'),
      (($n = Hn = Hn || {}).Unknown = 'UNKNOWN'),
      ($n.Primary = 'PRIMARY'),
      ($n.Shipping = 'SHIPPING'),
      ($n.Billing = 'BILLING'),
      ($n.Postal = 'POSTAL'),
      ((xn = Qn = Qn || {}).Unknown = 'UNKNOWN'),
      (xn.Text = 'TEXT'),
      (xn.Decimal = 'DECIMAL'),
      (xn.Boolean = 'BOOLEAN'),
      (xn.Date = 'DATE'),
      ((Kn = Wn = Wn || {}).Undefined = 'UNDEFINED'),
      (Kn.Active = 'ACTIVE'),
      (Kn.Inactive = 'INACTIVE'),
      ((Zn = Yn = Yn || {}).SingleSelect = 'SINGLE_SELECT'),
      (Zn.Term = 'TERM'),
      (Zn.Range = 'RANGE'),
      (Zn.Slider = 'SLIDER'),
      ((Xn = Jn = Jn || {}).Published = 'PUBLISHED'),
      (Xn.Preview = 'PREVIEW'),
      ((tr = er = er || {}).Unknown = 'UNKNOWN'),
      (tr.Sku = 'SKU'),
      (tr.Set = 'SET'),
      (tr.Configurable = 'CONFIGURABLE'),
      ((rr = nr = nr || {}).From = 'FROM'),
      (rr.To = 'TO'),
      ((or = ar = ar || {}).Unknown = 'UNKNOWN'),
      (or.Lower = 'LOWER'),
      (or.Equal = 'EQUAL'),
      (or.Higher = 'HIGHER'),
      ((sr = ir = ir || {}).Unknown = 'UNKNOWN'),
      (sr.Accessory = 'ACCESSORY'),
      (sr.SparePart = 'SPARE_PART'),
      (sr.Alternative = 'ALTERNATIVE'),
      (sr.ToolFor = 'TOOL_FOR'),
      (sr.ConsistOf = 'CONSIST_OF'),
      (sr.Supplementary = 'SUPPLEMENTARY'),
      (sr.Recommended = 'RECOMMENDED'),
      (sr.RequiredAccessory = 'REQUIRED_ACCESSORY'),
      (sr.Similar = 'SIMILAR'),
      (sr.ComponentOf = 'COMPONENT_OF'),
      ((cr = ur = ur || {}).Asc = 'ASC'),
      (cr.Desc = 'DESC'),
      ((lr = dr = dr || {}).Own = 'OWN'),
      (lr.Children = 'CHILDREN'),
      (lr.All = 'ALL'),
      ((mr = pr = pr || {}).IsOpenAny = 'IsOpen_ANY'),
      (mr.IsOpenOpen = 'IsOpen_OPEN'),
      (mr.IsOpenNotOpen = 'IsOpen_NOT_OPEN'),
      ((fr = gr = gr || {}).OrganizationId = 'ORGANIZATION_ID'),
      (fr.OrderId = 'ORDER_ID'),
      (fr.OrderCreateDatetime = 'ORDER_CREATE_DATETIME'),
      (fr.OrderLineStatus = 'ORDER_LINE_STATUS'),
      (fr.OrderLineSequence = 'ORDER_LINE_SEQUENCE'),
      (fr.ItemId = 'ITEM_ID'),
      (fr.ItemName = 'ITEM_NAME'),
      (fr.Quantity = 'QUANTITY'),
      (fr.AcknowledgedDeliveryDate = 'ACKNOWLEDGED_DELIVERY_DATE'),
      (fr.IsOpen = 'IS_OPEN'),
      ((hr = yr = yr || {}).Own = 'OWN'),
      (hr.Children = 'CHILDREN'),
      (hr.All = 'ALL'),
      ((br = vr = vr || {}).All = 'ALL'),
      (br.Open = 'OPEN'),
      (br.NotOpen = 'NOT_OPEN'),
      ((Pr = Cr = Cr || {}).OrganizationId = 'ORGANIZATION_ID'),
      (Pr.OrderId = 'ORDER_ID'),
      (Pr.ReadableOrderId = 'READABLE_ORDER_ID'),
      (Pr.OrderDate = 'ORDER_DATE'),
      (Pr.OrderReference = 'ORDER_REFERENCE'),
      (Pr.OrderStatus = 'ORDER_STATUS'),
      (Pr.OrderTotalNetAmount = 'ORDER_TOTAL_NET_AMOUNT'),
      ((Or = Ir = Ir || {}).None = 'NONE'),
      (Or.Name = 'NAME'),
      (Or.ContactAccount = 'CONTACT_ACCOUNT'),
      (Or.Organization = 'ORGANIZATION'),
      (Or.AssignedToAccount = 'ASSIGNED_TO_ACCOUNT'),
      (Or.ClaimedByAccount = 'CLAIMED_BY_ACCOUNT'),
      (Or.Status = 'STATUS'),
      (Or.LastModified = 'LAST_MODIFIED'),
      (Or.Reference = 'REFERENCE'),
      (Or.FulfillmentInstructions = 'FULFILLMENT_INSTRUCTIONS'),
      ((Er = Tr = Tr || {}).Open = 'OPEN'),
      (Er.Hold = 'HOLD'),
      (Er.Claimed = 'CLAIMED'),
      (Er.Submitted = 'SUBMITTED'),
      (Er.Cancelled = 'CANCELLED'),
      (Er.Pending = 'PENDING'),
      ((Ar = _r = _r || {}).Order = 'ORDER'),
      (Ar.OrderLine = 'ORDER_LINE'),
      ((kr = Sr = Sr || {}).Open = 'OPEN'),
      (kr.Deleted = 'DELETED');
    var qr,
      Hr = Vr()(
        (qr =
          qr ||
          zr(
            [
              '\n    mutation logIntent($input: Intent!) {\n  log_intent(intent: $input)\n}\n    ',
            ],
            [
              '\n    mutation logIntent($input: Intent!) {\n  log_intent(intent: $input)\n}\n    ',
            ]
          ))
      );
    var $r = function () {
        return ($r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      Qr = [
        function (e) {
          return e.pipe(
            Object(Bt.a)(ln.TRACK_EVENT),
            Object(un.a)(function (e) {
              var t = e.payload.eventParams;
              return Object(Fn.c)($r({}, t)), sn.a;
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(G.a.ADD_PRODUCT_TO_FAVORITE),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload.product,
                n = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.ADD_TO_FAVORITE,
                    'sku-id': t.id,
                    'click-position': Object(Rn.d)(n.pages.pageData, t.id),
                  },
                  Object(Rn.i)(n.search.gtm.searchId, n.pages.pageData.pageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(G.a.ADD_PRODUCT_TO_QUOTATION),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload,
                n = t.product,
                r = t.index,
                a = e[1],
                o = a.pages,
                i = a.search,
                s = o.pageData.breadcrumbs,
                u =
                  o.routerPageType === it.a.CATEGORY ||
                  o.routerPageType === it.a.PRODUCT_GROUP,
                c = (o.routerPageType !== it.a.SEARCH &&
                  s &&
                  s[s.length - (u ? 1 : 2)]) || {
                  key: '',
                  text: '',
                },
                d = {
                  id: c.key,
                  title: c.text,
                },
                l = o.routerPageType;
              return vn({
                eventParams: $r(
                  $r(
                    {
                      event: Fr.c.ADD_TO_CART,
                      'sku-id': n.id,
                      'click-position': Object(Rn.d)(o.pageData, n.id),
                    },
                    Object(Rn.i)(i.gtm.searchId, o.pageData.pageType)
                  ),
                  {
                    'view-type': (o.pageData && o.pageData.displayMode) || '',
                    ecommerce: {
                      currencyCode: n.currency,
                      add: {
                        actionField: {
                          list: l,
                        },
                        products: [Object(Rn.g)(n, d, r)],
                      },
                    },
                  }
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(Un.a.CLEAR_ACTIVE_FACET, bt.a.CLEAR_ACTIVE_FACET),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload.facetId,
                n = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.FILTER_CATEGORY,
                    'filter-category': '' + t,
                    'filter-option': 'clear filter',
                  },
                  Object(Rn.j)(n.pages.routerPageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(Un.a.CLEAR_ACTIVE_FACETS, bt.a.CLEAR_ACTIVE_FACETS),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              e[0];
              var t = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.FILTER_CATEGORY,
                    'filter-category': 'all',
                    'filter-option': 'clear filter',
                  },
                  Object(Rn.j)(t.pages.routerPageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(Un.a.UPDATE_MULTI_FACET, bt.a.UPDATE_MULTI_FACET),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload,
                n = t.facetId,
                r = t.facetItemId,
                a = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.FILTER_CATEGORY,
                    'filter-category': n,
                    'filter-option': r,
                  },
                  Object(Rn.j)(a.pages.routerPageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(Un.a.UPDATE_RANGE_FACET, bt.a.UPDATE_RANGE_FACET),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload,
                n = t.facetId,
                r = t.newMin,
                a = t.newMax,
                o = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.FILTER_CATEGORY,
                    'filter-category': n + '-slider',
                    'filter-option': r + '-' + a,
                  },
                  Object(Rn.j)(o.pages.routerPageType)
                ),
              });
            })
          );
        },
        function (e) {
          return e.pipe(
            Object(Bt.a)(Un.a.UPDATE_DISPLAY_MODE, bt.a.UPDATE_DISPLAY_MODE),
            Object(Qt.a)(function (e) {
              var t = e.payload.displayMode;
              return vn({
                eventParams: {
                  event: Fr.c.VIEW_CHANGE,
                  searchId: void 0,
                  'view-type': t,
                },
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(q.c.FETCH_NET_PRICE_SUCCESS),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload,
                n = t.productId,
                r = t.price,
                a = e[1];
              return vn({
                eventParams: $r(
                  {
                    event: Fr.c.NET_PRICE_CHECK,
                    'click-position': Object(Rn.d)(a.pages.pageData, n),
                    'sku-id': n,
                    'net-price': r.toFixed(2),
                    'gross-price': a.pages.pageData.products.byId[
                      n
                    ].grossPrice.toFixed(2),
                    'view-type':
                      (a.pages.pageData && a.pages.pageData.displayMode) || '',
                  },
                  Object(Rn.i)(a.search.gtm.searchId, a.pages.pageData.pageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(q.a.FETCH_DISCOUNT_CODE_SUCCESS),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t = e[0].payload,
                n = t.productId,
                r = t.discountCode,
                a = e[1];
              return vn({
                eventParams: {
                  event: Fr.c.DISCOUNT_CODE_CLICK,
                  searchId: void 0,
                  'click-position': Object(Rn.d)(a.pages.pageData, n),
                  'sku-id': n,
                  discountResult: r,
                },
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(B.FETCH_DELIVERY_PLAN_SUCCESS),
            Object($t.a)(t),
            Object(Qt.a)(function (e) {
              var t,
                n,
                r,
                a,
                o = e[0].payload,
                i = e[1];
              return vn({
                eventParams: $r(
                  $r(
                    $r(
                      {},
                      ((n = (t = o).id),
                      (r = t.deliveries),
                      (a = void 0 === r ? [] : r),
                      {
                        event: Fr.c.GET_DELIVERY_TIMES,
                        'sku-id': n,
                        'atp-request-1': a[0] && a[0].quantity,
                        'atp-result-1': a[0] && Gn(a[0]),
                        'atp-request-2': a[1] && a[1].quantity,
                        'atp-result-2': a[1] && Gn(a[1]),
                        'atp-request-3': a[2] && a[2].quantity,
                        'atp-result-3': a[2] && Gn(a[2]),
                      })
                    ),
                    {
                      'click-position': Object(Rn.d)(i.pages.pageData, o.id),
                      'view-type':
                        (i.pages.pageData && i.pages.pageData.displayMode) ||
                        '',
                    }
                  ),
                  Object(Rn.i)(i.search.gtm.searchId, i.pages.pageData.pageType)
                ),
              });
            })
          );
        },
        function (e, t) {
          return e.pipe(
            Object(Bt.a)(G.a.ADD_PRODUCT_TO_QUOTATION),
            Object($t.a)(t),
            Object(xt.a)(function (e) {
              var t,
                n,
                r = e[0],
                a = e[1];
              'production' !== M.q &&
                ((n = $r(
                  $r({}, Vn(a, document.location.hostname)),
                  (((t = {})[Rr.h] = r.payload.requestId), t)
                )),
                new Ur.c({
                  link: new wr.a({
                    fetch: Mr.a,
                    uri:
                      'kiya kvs copy webapp/FUNCTIONAL_LOGGING_GRAPHQL_URL/graphql?key=AIzaSyCM4ggj6HGInQPWra3AhKFz4dBZKGMgZSI',
                    fetchOptions: {
                      timeout: 5e3,
                    },
                    headers: Br(Br({}, n), {
                      'x-client-instance-id': C.a.get('CLIENT_INSTANCE_ID'),
                    }),
                  }),
                  cache: new jr.a(),
                  name: void 0,
                  version: void 0,
                }))
                  .mutate({
                    mutation: Hr,
                    variables: {
                      input: {
                        event_name: 'addToCart',
                        client_event_timestamp: Date.now(),
                        url: document && document.location.href,
                        user_agent: navigator && navigator.userAgent,
                      },
                    },
                  })
                  .then(function () {
                    return null;
                  })
                  .catch(function (e) {
                    return console.error('Error in logging intent: ' + e);
                  });
              return sn.a;
            })
          );
        },
      ];
    function xr(e, t) {
      return (
        void 0 === t && (t = 'all'),
        '/data-loader/' + e.format('-') + '/quotations/' + t
      );
    }
    function Wr(e, t) {
      return '/data-updater/' + e.format('-') + '/' + t;
    }
    function Kr(e) {
      return void 0 === e ? null : e;
    }
    var Yr = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      },
      Zr = Mt.a.apply(
        void 0,
        Yr(
          [
            function (e, r) {
              return e.pipe(
                Object(Bt.a)(V.b.FETCH_PAGE),
                Object(Ht.a)(function (e) {
                  return !!e.payload.pageType;
                }),
                Object($t.a)(r.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t = e[0],
                    n = e[1];
                  return Object(Gt.a)(
                    c.a.get(Yt(t.payload.pageType, t.payload.pageArguments, n))
                  ).pipe(
                    Object($t.a)(r),
                    Object(Qt.a)(function (e) {
                      var t = e[0],
                        n = e[1];
                      if (t.data.status === M.m.UNAUTHORIZED)
                        return V.e({
                          status: M.m.UNAUTHORIZED,
                          error: M.l.UNAUTHORIZED,
                        });
                      var r = window.location.search.match(Zt);
                      return (
                        r && (t.data.version = r[1]),
                        t.data.version !== n.ui.version
                          ? Object(G.m)(t.data.url)
                          : V.f(t.data)
                      );
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(
                        V.e({
                          status: M.m.INTERNAL_SERVER_ERROR,
                          error: e.toString(),
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, o) {
              return e.pipe(
                Object(Bt.a)(V.b.FETCH_OR_SET_PAGE),
                Object($t.a)(o.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t = e[0].payload,
                    n = e[1],
                    r = Yt(t.pageType, t.pageArguments, n),
                    a = o.value.pages.history[r];
                  return a && a.url && 200 === a.status
                    ? [
                        V.g({
                          currentUrl: a.url,
                          currentPageDataUrl: r,
                        }),
                      ]
                    : [
                        V.h({
                          isLoading: !0,
                        }),
                        V.d(t),
                      ];
                })
              );
            },
            function (e, t) {
              return Object(zt.a)(
                e.pipe(Object(Bt.a)(V.b.FETCH_PAGE)),
                e.pipe(Object(Bt.a)(V.b.SET_CURRENT_URL))
              ).pipe(
                Object($t.a)(t),
                Object(xt.a)(function (e) {
                  var t = e[1],
                    n = Object.keys(t.pages.history),
                    r = (1 < n.length ? n.slice(-2) : [''])[0],
                    a = t.pages.currentPageDataUrl,
                    o = /(displayMode|browseType)=[^&]*&?/gi;
                  return (
                    r.replace(o, '') !== a.replace(o, '') && Object(Kt.a)(),
                    qt.a
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.CLEAR_ACTIVE_FACET),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = Object(en.b)(n.router.location.search),
                    a = Object(nn.b)(r.facetValues).filter(function (e) {
                      return e.id !== t.payload.facetId;
                    });
                  return wn(n, {
                    facetValues: Object(nn.a)(a),
                    page: 1,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.CLEAR_ACTIVE_FACETS),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  e[0];
                  return wn(e[1], {
                    facetValues: [],
                    page: 1,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.UPDATE_BROWSE_TYPE),
                Object(Jt.a)(function (e) {
                  return C.a.set(O.d, e.payload, {
                    expires: O.e,
                  });
                }),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0];
                  return wn(e[1], {
                    browseType: t.payload,
                    page: 1,
                    facetValues: [],
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.UPDATE_DISPLAY_MODE),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0];
                  return wn(e[1], {
                    displayMode: t.payload.displayMode,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.UPDATE_MULTI_FACET),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0].payload,
                    n = t.facetId,
                    r = t.facetItemId,
                    a = t.activate,
                    o = e[1],
                    i = !1,
                    s = o.pages.pageData.browseType,
                    u = Object(en.b)(o.router.location.search),
                    c = Object(nn.b)(u.facetValues)
                      .map(function (e) {
                        if (e.id !== n) return e;
                        i = !0;
                        var t = (e.values || []).filter(function (e) {
                          return e !== r;
                        });
                        return 0 === t.length
                          ? null
                          : {
                              id: e.id,
                              values: a ? t.concat([r]) : t,
                            };
                      })
                      .filter(function (e) {
                        return null !== e;
                      });
                  return (
                    i ||
                      c.push({
                        id: n,
                        values: [r],
                      }),
                    wn(o, {
                      facetValues: Object(nn.a)(c),
                      page: 1,
                      browseType: s,
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Un.a.UPDATE_RANGE_FACET),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0].payload,
                    n = t.facetId,
                    r = t.newMin,
                    a = t.newMax,
                    o = e[1],
                    i = !1,
                    s = o.pages.pageData.browseType,
                    u = Object(en.b)(o.router.location.search),
                    c = Object(nn.b)(u.facetValues).map(function (e) {
                      return e.id === n
                        ? ((i = !0),
                          {
                            id: e.id,
                            rangeValues: {
                              min: r,
                              max: a,
                            },
                          })
                        : e;
                    });
                  return (
                    i ||
                      c.push({
                        id: n,
                        rangeValues: {
                          min: r,
                          max: a,
                        },
                      }),
                    wn(o, {
                      facetValues: Object(nn.a)(c),
                      page: 1,
                      browseType: s,
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.CLEAR_ACTIVE_FACET),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = Object(en.b)(n.router.location.search),
                    a = Object(nn.b)(r.facetValues).filter(function (e) {
                      return e.id !== t.payload.facetId;
                    });
                  return on(n, {
                    facetValues: Object(nn.a)(a),
                    page: 1,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.CLEAR_ACTIVE_FACETS),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  e[0];
                  return on(e[1], {
                    facetValues: [],
                    page: 1,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.UPDATE_MULTI_FACET),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0].payload,
                    n = t.facetId,
                    r = t.facetItemId,
                    a = t.activate,
                    o = e[1],
                    i = !1,
                    s = Object(en.b)(o.router.location.search),
                    u = Object(nn.b)(s.facetValues)
                      .map(function (e) {
                        if (e.id !== n) return e;
                        i = !0;
                        var t = (e.values || []).filter(function (e) {
                          return e !== r;
                        });
                        return 0 === t.length
                          ? null
                          : {
                              id: e.id,
                              values: a ? t.concat([r]) : t,
                            };
                      })
                      .filter(function (e) {
                        return null !== e;
                      });
                  return (
                    i ||
                      u.push({
                        id: n,
                        values: [r],
                      }),
                    on(o, {
                      facetValues: Object(nn.a)(u),
                      page: 1,
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.UPDATE_RANGE_FACET),
                Object($t.a)(t),
                Object(Ht.a)(function (e) {
                  var t = e[0].payload,
                    n = t.facetId,
                    r = t.newMin,
                    a = t.newMax,
                    o = e[1],
                    i = Object(tn.a)(o).facets.find(function (e) {
                      return e.id === n;
                    });
                  return !i || (i && !(i.activeMin === r && i.activeMax === a));
                }),
                Object(Qt.a)(function (e) {
                  var t = e[0].payload,
                    n = t.facetId,
                    r = t.newMin,
                    a = t.newMax,
                    o = e[1],
                    i = !1,
                    s = Object(en.b)(o.router.location.search),
                    u = Object(nn.b)(s.facetValues).map(function (e) {
                      return e.id === n
                        ? ((i = !0),
                          {
                            id: e.id,
                            rangeValues: {
                              min: r,
                              max: a,
                            },
                          })
                        : e;
                    });
                  return (
                    i ||
                      u.push({
                        id: n,
                        rangeValues: {
                          min: r,
                          max: a,
                        },
                      }),
                    on(o, {
                      facetValues: Object(nn.a)(u),
                      page: 1,
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.UPDATE_DISPLAY_MODE),
                Object(Jt.a)(function (e) {
                  return C.a.set(M.e, e.payload.displayMode, {
                    expires: O.e,
                  });
                }),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0];
                  return on(e[1], {
                    displayMode: t.payload.displayMode,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.UPDATE_SEARCH_TERM),
                Object($t.a)(t),
                Object(Qt.a)(function (e) {
                  var t = e[0].payload,
                    n = t.searchTerm,
                    r = t.categoryId;
                  return on(e[1], {
                    searchTerm: n,
                    facetValues: Object(nn.a)([
                      {
                        id: O.c,
                        value: r,
                      },
                    ]),
                    page: 1,
                  });
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(bt.a.FETCH_AUTO_COMPLETE),
                Object(Ht.a)(function (e) {
                  return 1 < e.payload.searchTerm.length;
                }),
                Object(Xt.a)(300),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t,
                    i = e[0].payload.searchTerm,
                    n = e[1];
                  return Object(Gt.a)(
                    c.a.get(
                      ((t = i),
                      '/data-loader/' + n.format('-') + '/autocomplete/' + t)
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      var t = e.data;
                      if (void 0 !== t) {
                        var n = t.products,
                          r = t.brands,
                          a = t.categories,
                          o = t.queries;
                        return Object(bt.c)({
                          searchTerm: i,
                          products: n,
                          brands: r,
                          categories: a,
                          queries: o,
                        });
                      }
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(
                        Object(bt.b)({
                          searchTerm: i,
                          message: e,
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return Object(zt.a)(
                e.pipe(
                  Object(Bt.a)(bt.a.TOGGLE_AUTO_COMPLETE),
                  Object(Qt.a)(function (e) {
                    return e.payload;
                  })
                ),
                e.pipe(
                  Object(Bt.a)(bt.a.FETCH_AUTO_COMPLETE_SUCCESS),
                  Object(Qt.a)(function (e) {
                    var t = e.payload,
                      n = t.queries,
                      r = t.products;
                    return !!n.length || !!r.length;
                  })
                )
              ).pipe(
                Object($t.a)(t.pipe(Object(Qt.a)(Y.a))),
                Object(xt.a)(function (e) {
                  var t = e[0],
                    n = e[1];
                  return (t && !n) || (!t && n)
                    ? Object(Vt.a)(Object(G.n)(t))
                    : qt.a;
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(z.FETCH_ALL),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  e[0];
                  var t = e[1];
                  return Object(Gt.a)(c.a.get(xr(t, 'all'))).pipe(
                    Object(Qt.a)(function (e) {
                      return F(e.data);
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(L(e));
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(z.CHANGE_DEFAULT),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var n = e[0],
                    t = e[1];
                  return Object(Gt.a)(
                    c.a.post(Wr(t, 'change-default-quotation'), n.payload)
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      var t = e.data;
                      return w({
                        id: n.payload.id,
                        success: t.success,
                      });
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)($(e));
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(z.CREATE_NEW),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t = e[0],
                    n = e[1];
                  return Object(Gt.a)(
                    c.a.post(Wr(n, 'create-quotation'), t.payload)
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return j({
                        url: e.data.url,
                      });
                    }),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(
                        U({
                          error: !0,
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(we.FETCH),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  e[0];
                  var t = e[1];
                  return Object(Gt.a)(
                    c.a.get('/data-loader/' + t.format('-') + '/wishlists/all')
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return qe(e.data);
                    }),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(
                        He({
                          message: 'Failed to load wish lists',
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(we.CHANGE_DEFAULT),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var n = e[0],
                    t = e[1];
                  return Object(Gt.a)(
                    c.a.post(
                      '/data-updater/' +
                        t.format('-') +
                        '/change-default-wishlist',
                      n.payload
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      var t = e.data;
                      return $e({
                        id: n.payload.id,
                        success: t.success,
                      });
                    }),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(
                        Qe({
                          message: 'Failed to change default wish list',
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(we.SEND_FORM),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t = e[0],
                    n = e[1];
                  return Object(Gt.a)(
                    c.a.post(
                      '/data-updater/' + n.format('-') + '/create-wishlist',
                      t.payload
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return xe({
                        url: e.data.url,
                      });
                    }),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(
                        We({
                          message: 'Error creating new wish list',
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(G.a.FETCH_CATEGORY_BRANDS),
                Object(Ht.a)(function (e) {
                  return 0 < e.payload.categories.length;
                }),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(un.a)(function (e) {
                  var t,
                    n,
                    r = e[0],
                    a = e[1];
                  return Object(Gt.a)(
                    c.a.get(
                      ((t = a),
                      (n = r.payload.categories),
                      '/data-loader/' +
                        t.format('-') +
                        '/categoryBrands/' +
                        encodeURIComponent(n.join(',')))
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return G.g(e.data);
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(
                        G.f({
                          error: e.toString(),
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(G.a.PAGE_FINISHED_RENDER),
                Object($t.a)(t),
                Object(Ht.a)(function (e) {
                  var t = e[1];
                  return Object(rn.a)(t);
                }),
                Object(Qt.a)(function () {
                  return Object(bt.d)(!1);
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(G.a.FETCH_PRODUCT_CONFIGURATOR_URL),
                Object($t.a)(t.pipe(Object(Qt.a)(cn.a))),
                Object(un.a)(function (e) {
                  e[0];
                  var t,
                    n,
                    r = e[1];
                  return Object(Gt.a)(
                    c.a.get(
                      ((t = r),
                      (n = Object.keys(t)
                        .filter(function (e) {
                          return 'locale' !== e;
                        })
                        .map(function (e) {
                          return e + '=' + t[e];
                        })
                        .join('&')),
                      '/data-loader/' +
                        t.locale.format('-') +
                        '/product-configurator-url/?' +
                        n)
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return G.i(e.data);
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(
                        G.h({
                          error: e.toString(),
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e) {
              return e.pipe(
                Object(Bt.a)(G.a.FETCH_PRODUCT_CONFIGURATOR_URL_SUCCESS),
                Object(Jt.a)(function (e) {
                  Object(dn.a)({
                    clickedURL: e.payload,
                  }),
                    window.open(e.payload, '_blank');
                }),
                Object(xt.a)(function () {
                  return sn.a;
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Be.a.LOG_OUT),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(un.a)(function () {
                  return Object(Gt.a)(c.a.post('/auth/logout/')).pipe(
                    Object(Nn.a)(Be.c(null)),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(Be.b(null));
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Ve.FETCH_ACCOUNT_INFORMATION),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t,
                    n,
                    r = e[0],
                    a = e[1];
                  return Object(Gt.a)(
                    c.a.get(
                      ((t = a),
                      (n = r.payload.accountId),
                      '/data-loader/' +
                        t.format('-') +
                        '/account-information/' +
                        n)
                    )
                  ).pipe(
                    Object(Qt.a)(function (e) {
                      return e.data.status === M.m.UNAUTHORIZED
                        ? et({
                            accountId: r.payload.accountId,
                            message: e.data.message,
                          })
                        : Xe({
                            accountId: r.payload.accountId,
                            username: e.data.account.username,
                            surname: e.data.account.surname,
                            customerNumber:
                              e.data.account.organization.customerNumber,
                            companyName:
                              e.data.account.organization.companyName,
                            netPrice: !!e.data.settings.netPrice,
                          });
                    }),
                    Object(Wt.a)(function (e) {
                      return Object(Vt.a)(
                        et({
                          accountId: r.payload.accountId,
                          message: e.message,
                        })
                      );
                    })
                  );
                })
              );
            },
            function (e, t) {
              return e.pipe(
                Object(Bt.a)(Ve.SAVE_NET_PRICE_SETTING),
                Object($t.a)(t.pipe(Object(Qt.a)(Y.d))),
                Object(xt.a)(function (e) {
                  var t = e[0],
                    n = e[1];
                  return Object(Gt.a)(
                    c.a.post(
                      '/data-updater/' +
                        n.format('-') +
                        '/save-net-price-attribute',
                      {
                        show: t.payload.showNetPrice,
                      }
                    )
                  ).pipe(
                    Object(Qt.a)(function () {
                      return nt();
                    }),
                    Object(Wt.a)(function () {
                      return Object(Vt.a)(
                        tt({
                          accountId: t.payload.accountId,
                          showNetPrice: t.payload.showNetPrice,
                        })
                      );
                    })
                  );
                })
              );
            },
          ],
          jn,
          Dr,
          Qr
        )
      ),
      Jr = function () {
        return (Jr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      Xr = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      };
    function ea(e, t) {
      void 0 === e && (e = '/'), void 0 === t && (t = {});
      var n = M.o
          ? Object(Ye.a)()
          : Object(Ye.d)({
              initialEntries: [e],
            }),
        r = Object(Ze.a)(),
        a = [];
      if (M.g && M.o) {
        var o = window.__REDUX_DEVTOOLS_EXTENSION__;
        'function' == typeof o && a.push(o());
      }
      var i,
        s,
        u = [r, Object(N.routerMiddleware)(n), Ge],
        c = Ke.d.apply(void 0, Xr([Ke.a.apply(void 0, u)], a)),
        d = Jr({}, Dt(n)),
        l =
          ((i = t),
          (s = n),
          Object.keys(i).reduce(function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Kr), e;
          }, Jr({}, Dt(s)))),
        p = Object(Ke.e)(Object(Ke.c)(l), t, c);
      return (
        r.run(Zr),
        (_ = function (e) {
          e.forEach(function (e) {
            d[e.key] || (d[e.key] = e.reducer);
          }),
            p.replaceReducer(Object(Ke.c)(Jr(Jr({}, l), d)));
        }),
        {
          store: p,
          history: n,
        }
      );
    }
    function ta(e) {
      return Object(wr.b)({
        fetch: aa.a,
        uri:
          M.o && M.r
            ? new URL('https://www.kramp.com/graphql/checkout-app').pathname
            : 'https://www.kramp.com/graphql/checkout-app',
        credentials: M.r ? 'include' : 'same-origin',
        headers: e,
      });
    }
    function na(e) {
      var u,
        r,
        t = new jr.a({
          fragmentMatcher: pa,
          freezeResults: !0,
        });
      return (
        M.o && t.restore(window.__APOLLO_STATE__),
        new Ur.c({
          link: M.o
            ? sa.a.from([Object(ua.a)(e), Object(T.userDataLink)(), ta(e)])
            : sa.a.from([
                ((r = ca.get()),
                new sa.a(function (e, t) {
                  var n = r.createChildSpan({
                    name: e.operationName,
                  });
                  return t(e).map(function (e) {
                    return n.endSpan(), e;
                  });
                })),
                ((u = e),
                Object(da.a)(function (e) {
                  var t,
                    n,
                    r = e.graphQLErrors,
                    a = e.networkError,
                    s = e.operation;
                  r &&
                    r.forEach(function (e) {
                      var t,
                        n = e.message,
                        r = e.locations,
                        a = e.path,
                        o = e.stack,
                        i = e.name;
                      return la.a.error(
                        o || n,
                        (((t = {
                          type: 'GraphQLError',
                          locations: r,
                          path: a,
                          name: i,
                          operationName: s.operationName,
                        })[Rr.h] = u[Rr.h]),
                        t)
                      );
                    }),
                    a &&
                      ('statusCode' in a &&
                        !('result' in a) &&
                        la.a.error(
                          a.stack || a.message,
                          (((t = {
                            type: 'ServerParseError',
                            statusCode: a.statusCode,
                            response: a.response,
                            name: a.name,
                            text: a.bodyText,
                            errorMessage: a.message,
                            operationName: s.operationName,
                          })[Rr.h] = u[Rr.h]),
                          t)
                        ),
                      'result' in a &&
                        la.a.error(
                          a.stack || a.message,
                          (((n = {
                            type: 'ServerError',
                            statusCode: a.statusCode,
                            response: a.response,
                            result: a.result,
                            name: a.name,
                            errorMessage: a.message,
                            operationName: s.operationName,
                          })[Rr.h] = u[Rr.h]),
                          n)
                        ));
                })),
                Object(ua.a)(e),
                ta(e),
              ]),
          cache: t,
          assumeImmutableResults: !0,
          ssrMode: M.p,
          name: M.p ? 'webapp-ssr-server' : void 0,
          version: M.p ? '3.0.49' : void 0,
          defaultOptions: {
            mutate: {
              errorPolicy: 'all',
            },
            query: {
              errorPolicy: 'all',
            },
            watchQuery: {
              errorPolicy: 'all',
            },
          },
        })
      );
    }
    var ra = n(470),
      aa = n.n(ra),
      oa = n(346),
      ia = n.t(oa, 2),
      sa = n(88),
      ua = n(347),
      ca = n(526),
      da = n(527),
      la = n(166),
      pa = new jr.b({
        introspectionQueryResultData: M.o ? oa : ia,
      }),
      ma = n(281),
      ga = n(1006),
      fa = [
        'getIsProactiveInvite',
        'this.caseExists is not a function',
        'this.proactiveView is undefined',
        'origin:Gutenberg,code:alexis-1,message:UNABLE_TO_RETRIEVE_CONTENT',
        'executing a cancelled action',
        'TypeError: can\'t redefine non-configurable property "userAgent"',
        'The play method is not allowed by the user agent or the platform',
        'ResizeObserver loop limit exceeded',
      ],
      ya = function (e, i, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function a(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(r, a);
          }
          o((u = u.apply(e, i || [])).next());
        });
      },
      ha = function (n, r) {
        var a,
          o,
          i,
          e,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (e = {
            next: t(0),
            throw: t(1),
            return: t(2),
          }),
          'function' == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (a) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((a = 1),
                    o &&
                      (i =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((i = o.return) && i.call(o), 0)
                          : o.next) &&
                      !(i = i.call(o, t[1])).done)
                  )
                    return i;
                  switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                    case 0:
                    case 1:
                      i = t;
                      break;
                    case 4:
                      return (
                        s.label++,
                        {
                          value: t[1],
                          done: !1,
                        }
                      );
                    case 5:
                      s.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = 0 < (i = s.trys).length && i[i.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = t);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(t);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = r.call(n, s);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  a = i = 0;
                }
              if (5 & t[0]) throw t[1];
              return {
                value: t[0] ? t[1] : void 0,
                done: !0,
              };
            })([t, e]);
          };
        }
      };
    window.addEventListener('load', function () {
      return ya(void 0, void 0, void 0, function () {
        var t, n, r, a, o, i, s, u, c, d, l, p, m;
        return ha(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                ga.a({
                  dsn:
                    'https://8386b9c41fa54210b297693a04e70ea9@o412139.ingest.sentry.io/5289112',
                  environment: 'production',
                  sampleRate: 0.5,
                  enabled: M.r,
                  release: '3.0.49',
                  ignoreErrors: fa,
                }),
                (t = {}),
                M.o && ((t = window[M.z]), M.r && delete window[M.z]),
                (n = ea('/', t)),
                (r = n.store),
                (a = n.history),
                (o = window[M.y]),
                M.r && delete window[M.y],
                Object(ma.c)(ma.a, o.locale),
                (i = document.location.hostname),
                (s = r.getState()),
                (u = na(Vn(s, i))),
                'production' !== M.q &&
                  (C.a.get('CLIENT_INSTANCE_ID') ||
                    C.a.set('CLIENT_INSTANCE_ID', P()(), {
                      expires: O.e,
                    })),
                (c = Object(T.mapCountryToLocale)(o.locale.country)),
                (d = Object(T.themeSelector)({
                  query: {
                    theme: 'kramp',
                  },
                })),
                [
                  4,
                  Object(T.themeService)({
                    domain: i,
                    isLoggedIn: s.auth.isAuthenticated,
                    tenantConfigAccessor: Lr.a,
                    apolloClient: u,
                  }),
                ]
              );
            case 1:
              return (
                (l = e.sent()),
                (p = g.createElement(
                  De.b,
                  null,
                  g.createElement(
                    v.b,
                    {
                      locale: c || o.locale.language,
                      defaultLocale: 'en',
                      messages: o.translations,
                    },
                    g.createElement(
                      h.Provider,
                      {
                        store: r,
                      },
                      g.createElement(
                        N.ConnectedRouter,
                        {
                          history: a,
                        },
                        g.createElement(
                          b.b,
                          {
                            client: u,
                          },
                          g.createElement(
                            T.ThemeContextProvider,
                            {
                              theme: d,
                              themeSettings: l,
                            },
                            g.createElement(
                              T.CorporateIdentityProvider,
                              {
                                domain: i,
                                tenantConfigAccessor: Lr.a,
                              },
                              g.createElement(Me, null)
                            )
                          )
                        )
                      )
                    )
                  )
                )),
                (m = document.getElementById('root')),
                f.preloadReady().then(function () {
                  var e = Object(I.c)(a.location.pathname);
                  e
                    ? e.component.preload().then(function () {
                        Object(y.hydrate)(p, m);
                      })
                    : Pe.a.preload().then(function () {
                        Object(y.hydrate)(p, m);
                      });
                }),
                [2]
              );
          }
        });
      });
    });
  },
  112: function (e, t, n) {
    'use strict';
    n.d(t, 'e', function () {
      return r;
    }),
      n.d(t, 'd', function () {
        return a;
      }),
      n.d(t, 'c', function () {
        return o;
      }),
      n.d(t, 'a', function () {
        return i;
      }),
      n.d(t, 'b', function () {
        return s;
      });
    var r = 'GDPR_COOKIES_ACCEPT',
      a = 'STANDARD',
      o = 'RESTRICTED',
      i = 'HIGHLY_RESTRICTED',
      s = 'NOT_SET';
  },
  12: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'g', function () {
        return i;
      }),
      n.d(t, 'f', function () {
        return s;
      }),
      n.d(t, 'm', function () {
        return u;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'd', function () {
        return d;
      }),
      n.d(t, 'j', function () {
        return l;
      }),
      n.d(t, 'c', function () {
        return p;
      }),
      n.d(t, 'b', function () {
        return m;
      }),
      n.d(t, 'l', function () {
        return g;
      }),
      n.d(t, 'k', function () {
        return f;
      }),
      n.d(t, 'n', function () {
        return y;
      }),
      n.d(t, 'i', function () {
        return h;
      }),
      n.d(t, 'h', function () {
        return v;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).SET_RELOAD_URL = '[frontend/ui]/SET_RELOAD_URL'),
      (a.SET_HEADER_BOTTOM_MENU_OPEN =
        '[frontend/ui]/SET_HEADER_BOTTOM_MENU_OPEN'),
      (a.FETCH_CATEGORY_BRANDS = '[frontend/ui]/FETCH_CATEGORY_BRANDS'),
      (a.FETCH_CATEGORY_BRANDS_SUCCESS =
        '[frontend/ui]/FETCH_CATEGORY_BRANDS_SUCCESS'),
      (a.FETCH_CATEGORY_BRANDS_FAILED =
        '[frontend/ui]/FETCH_CATEGORY_BRANDS_FAILED'),
      (a.ADD_PRODUCT_TO_QUOTATION =
        '[frontend/product]/ADD_PRODUCT_TO_QUOTATION'),
      (a.ADD_PRODUCT_TO_QUOTATION_SUCCESS =
        '[frontend/product]/ADD_PRODUCT_TO_QUOTATION_SUCCESS'),
      (a.ADD_PRODUCT_TO_QUOTATION_FAILED =
        '[frontend/product]/ADD_PRODUCT_TO_QUOTATION_FAILED'),
      (a.ADD_PRODUCT_TO_FAVORITE =
        '[frontend/product]/ADD_PRODUCT_TO_FAVORITE'),
      (a.ADD_PRODUCT_TO_FAVORITE_SUCCESS =
        '[frontend/product]/ADD_PRODUCT_TO_FAVORITE_SUCCESS'),
      (a.ADD_PRODUCT_TO_FAVORITE_FAILED =
        '[frontend/product]/ADD_PRODUCT_TO_FAVORITE_FAILED'),
      (a.PAGE_FINISHED_RENDER = '[frontend/ui]/PAGE_FINISHED_RENDER'),
      (a.SEND_ADVISORY_FORM = '[frontend/ui]/SEND_ADVISORY_FORM'),
      (a.SEND_ADVISORY_FORM_SUCCESS =
        '[frontend/ui]/SEND_ADVISORY_FORM_SUCCESS'),
      (a.SEND_ADVISORY_FORM_FAILED = '[frontend/ui]/SEND_ADVISORY_FORM_FAILED'),
      (a.GET_URGENT_MESSAGES_SUCCESS =
        '[frontend/ui]/GET_URGENT_MESSAGES_SUCCESS'),
      (a.TOGGLE_BODY_OVERLAY = '[frontend/ui]/TOGGLE_BODY_OVERLAY'),
      (a.FETCH_PRODUCT_CONFIGURATOR_URL =
        '[frontend/ui]FETCH_PRODUCT_CONFIGURATOR_URL'),
      (a.FETCH_PRODUCT_CONFIGURATOR_URL_FAILED =
        '[frontend/ui]FETCH_PRODUCT_CONFIGURATOR_URL_FAILED'),
      (a.FETCH_PRODUCT_CONFIGURATOR_URL_SUCCESS =
        '[frontend/ui]FETCH_PRODUCT_CONFIGURATOR_URL_SUCCESS');
    Object(o.a)(r.SET_HEADER_BOTTOM_MENU_OPEN),
      Object(o.a)(r.FETCH_CATEGORY_BRANDS);
    var i = Object(o.a)(r.FETCH_CATEGORY_BRANDS_SUCCESS),
      s = Object(o.a)(r.FETCH_CATEGORY_BRANDS_FAILED),
      u = Object(o.a)(r.SET_RELOAD_URL),
      c =
        (Object(o.a)(r.ADD_PRODUCT_TO_QUOTATION),
        Object(o.a)(r.ADD_PRODUCT_TO_QUOTATION_SUCCESS)),
      d = Object(o.a)(r.ADD_PRODUCT_TO_QUOTATION_FAILED),
      l = Object(o.a)(r.PAGE_FINISHED_RENDER),
      p =
        (Object(o.a)(r.ADD_PRODUCT_TO_FAVORITE),
        Object(o.a)(r.ADD_PRODUCT_TO_FAVORITE_SUCCESS)),
      m = Object(o.a)(r.ADD_PRODUCT_TO_FAVORITE_FAILED),
      g =
        (Object(o.a)(r.SEND_ADVISORY_FORM),
        Object(o.a)(r.SEND_ADVISORY_FORM_SUCCESS)),
      f = Object(o.a)(r.SEND_ADVISORY_FORM_FAILED),
      y = Object(o.a)(r.TOGGLE_BODY_OVERLAY),
      h =
        (Object(o.a)(r.FETCH_PRODUCT_CONFIGURATOR_URL),
        Object(o.a)(r.FETCH_PRODUCT_CONFIGURATOR_URL_SUCCESS)),
      v = Object(o.a)(r.FETCH_PRODUCT_CONFIGURATOR_URL_FAILED);
  },
  127: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(8),
      a = n(677),
      o = new r.TenantConfigAccessor(a);
  },
  128: function (e, t, n) {
    'use strict';
    function r() {
      return {};
    }
    var s = n(0),
      a = n(69),
      o = n(30),
      u = n(87),
      i = n(276),
      c = n(13),
      d = function () {
        return (d =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      l = a({
        loader: function () {
          return n.e(9).then(n.bind(null, 1168));
        },
        loading: function () {
          return null;
        },
        render: function (e, t) {
          var n = e.default;
          return s.createElement(
            i.a,
            d(
              {
                pageType: c.a.NOT_FOUND,
                derivedPageArguments: r,
                component: n,
              },
              t
            )
          );
        },
        modules: ['not-found-loadable'],
      });
    n.d(t, 'a', function () {
      return p;
    });
    var p = a({
      loader: function () {
        return n.e(3).then(n.bind(null, 1168));
      },
      loading: function () {
        return null;
      },
      modules: ['not-found'],
    });
    function m(i) {
      return function (e) {
        var t,
          n,
          r = e.match.params,
          a = r.countrycode,
          o = r.languagecode;
        return (
          (n = o),
          (t = a).toLowerCase() !== t ||
          -1 === u.a.indexOf(n + '_' + t.toUpperCase())
            ? s.createElement(l, null)
            : s.createElement(i, null)
        );
      };
    }
    t.b = function () {
      return s.createElement(
        o.Switch,
        null,
        u.c.map(function (e, t) {
          return s.createElement(o.Route, {
            key: 'r' + t,
            path: '' + u.b + e.path,
            render: m(e.component),
          });
        }),
        s.createElement(o.Route, {
          component: l,
        })
      );
    };
  },
  13: function (e, t, n) {
    'use strict';
    var r, a;
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return o;
      }),
      ((a = r = r || {}).CATEGORY = 'category'),
      (a.SEARCH = 'search'),
      (a.PRODUCT_GROUP = 'product-group'),
      (a.PRODUCT = 'product'),
      (a.NOT_FOUND = 'not-found');
    var o = {
      category: {
        path: '/c/:categoryName?--:categoryId',
        pageType: r.CATEGORY,
      },
      categoryCanonical: {
        path: '/c/:categoryId/:categoryName',
        pageType: r.CATEGORY,
      },
      search: {
        path: '/search/:searchTerm',
        pageType: r.SEARCH,
      },
      productGroup: {
        path: '/:productGroupType(vp|cp)/:productGroupName?--:productGroupId/',
        pageType: r.PRODUCT_GROUP,
      },
      product: {
        path: '/p/:productName?--:productId',
        pageType: r.PRODUCT,
      },
    };
  },
  139: function (e, t, n) {
    'use strict';
    var F = n(32),
      r = n(16),
      L = n(22),
      j = function () {
        return (j =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      U = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      },
      w = n(280),
      N = n(141),
      M = function () {
        return (M =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      B = n(13),
      a = n(20),
      o = n(217),
      i = n(40),
      s = n(423),
      u = n(270),
      c = n(158),
      G = function () {
        return (G =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      d = Object(r.a)(
        [o.b, a.d, i.e, s.b, u.b, c.b, a.e],
        function (e, t, n, r, a, o, i) {
          var s,
            u,
            c,
            d,
            l,
            p,
            m,
            g,
            f,
            y,
            h,
            v,
            b,
            C,
            P,
            I,
            O,
            T,
            E,
            _,
            A,
            S,
            k,
            D = n,
            R = {
              isAuthenticated: e,
              locale: t,
              tracking: r,
              searchState: a,
              normalizedState: o,
              miniCart: i,
            };
          switch (n.pageType) {
            case B.a.PRODUCT:
              return (
                (P = G(G({}, R), {
                  page: D,
                })),
                (I = P.isAuthenticated),
                (O = P.locale),
                (T = P.page),
                (E = P.tracking),
                (_ = P.searchState),
                (A = P.miniCart),
                (S = (T.breadcrumbs &&
                  T.breadcrumbs[T.breadcrumbs.length - 2]) || {
                  key: '',
                  text: '',
                }),
                (k = {
                  id: S.key,
                  title: S.text,
                }),
                j(
                  j(
                    j({}, Object(L.b)(I, O, T.pageType, E, _, A)),
                    Object(L.c)(T.breadcrumbs)
                  ),
                  {
                    ecommerce: {
                      currencyCode: Object(L.e)(T.products),
                      detail: {
                        products: U(
                          Object(L.h)(T.products, k, [
                            'position',
                            'quantity',
                          ]).filter(function (e) {
                            return e.id === T.productId;
                          })
                        ),
                      },
                    },
                  }
                )
              );
            case B.a.PRODUCT_GROUP:
              return G(
                G({}, Object(L.b)(e, t, D.pageType, r, a, i)),
                Object(L.c)(D.breadcrumbs)
              );
            case B.a.CATEGORY:
              return null;
            case B.a.SEARCH:
              return (
                (s = G(G({}, R), {
                  page: D,
                })),
                (u = s.isAuthenticated),
                (c = s.locale),
                (d = s.page),
                (l = s.tracking),
                (p = s.searchState),
                (m = s.miniCart),
                (g = d.searchResults),
                (f = g.numberOfResults),
                (y = g.originalSearchTerm),
                (h = p.gtm),
                (v = h.searchId),
                (b = h.searchType),
                (C = h.searchBar),
                M(
                  M(
                    M({}, Object(L.b)(u, c, d.pageType, l, p, m)),
                    Object(L.c)(d.breadcrumbs)
                  ),
                  {
                    event: F.c.PAGE_VIEW,
                    searchId: v || Object(w.v4)(),
                    'filter-shown': Object(L.f)(d.facets),
                    'search-bar': C,
                    'search-method': Object(N.b)(y, d.products),
                    'search-query': y,
                    'search-results': f || 0,
                    'search-type': b,
                    'view-type': d.displayMode,
                  }
                )
              );
            default:
              return (
                n.pageType !== B.a.NOT_FOUND &&
                  console.warn(
                    '[middleware/tracking] Missing Page View data for pageType: ' +
                      n.pageType
                  ),
                G({}, Object(L.b)(e, t, D.pageType, r, a, i))
              );
          }
        }
      );
    n.d(t, 'a', function () {
      return g;
    }),
      n.d(t, 'b', function () {
        return f;
      }),
      n.d(t, 'c', function () {
        return y;
      });
    var l,
      p = function () {
        return (p =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      m = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      };
    function g(e) {
      return function (e) {
        0 < Object.keys(e).length &&
          (('undefined' != typeof window && window.dataLayer) || []).push(e);
      };
    }
    function f(e) {
      var t = d(e);
      return (l = p({}, t));
    }
    var y = function (e, t) {
      void 0 === t && (t = []), g()(p(p({}, Object(N.c)(l, m(t, F.b))), e));
    };
  },
  141: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return o;
    }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'a', function () {
        return s;
      });
    var r = n(32),
      a = n(210),
      o = function (e, t) {
        return t && t.allIds && t.allIds[0] && t.byId[t.allIds[0]].id === e
          ? r.e.PART_NUMBER_SEARCH
          : r.e.TERM_SEARCH;
      },
      i = function (t, e) {
        return (
          e.length &&
            t &&
            e.forEach(function (e) {
              return delete t[e];
            }),
          t
        );
      },
      s = function (e) {
        return e.classifications &&
          void 0 !==
            e.classifications.find(function (e) {
              return e.code === a.a.RETURNABLE && 'true' === e.value;
            })
          ? r.a.STOCK_ITEM
          : r.a.XA_ITEM;
      };
  },
  146: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var r = function (e) {
      return 'errorCode' in (e || {});
    };
  },
  158: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return a;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = n(16),
      a = function (e) {
        return e.normalizedState;
      },
      o = Object(r.a)([a], function (e) {
        return e.errors;
      });
  },
  161: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return s;
    }),
      n.d(t, 'c', function () {
        return u;
      }),
      n.d(t, 'a', function () {
        return c;
      });
    var r = n(30),
      a = n(13),
      o = n(87),
      i = o.c.map(function (e) {
        return {
          path: '/shop-:countrycode/:languagecode' + e.path,
        };
      });
    function s(t) {
      return !!i.find(function (e) {
        return null !== Object(r.matchPath)(t, e);
      });
    }
    function u(t) {
      return o.c.find(function (e) {
        return (
          null !==
          Object(r.matchPath)(t, {
            path: '/shop-:countrycode/:languagecode' + e.path,
          })
        );
      });
    }
    function c(t) {
      var e = Object.keys(a.b)
        .reduce(function (e, t) {
          return e.concat(a.b[t]);
        }, [])
        .map(function (e) {
          return {
            path: '/shop-:countrycode/:languagecode' + e.path,
            pageType: e.pageType,
          };
        })
        .find(function (e) {
          return null !== Object(r.matchPath)(t, e);
        });
      return e ? e.pageType : a.a.NOT_FOUND;
    }
  },
  166: function (e, t, n) {
    'use strict';
    var r,
      a,
      o = n(525),
      i = n(467),
      s =
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      u = ((a = i.a), s(c, a), c);
    function c() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    n.d(t, 'a', function () {
      return f;
    });
    var d,
      l,
      p = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      };
    function m(n) {
      return Object.getOwnPropertyNames(n).reduce(function (e, t) {
        return (e[t] = 'error' === t ? m(n[t]) : n[t]), e;
      }, {});
    }
    function g() {}
    ((l = d = d || {})[(l.TRACE = 0)] = 'TRACE'),
      (l[(l.DEBUG = 1)] = 'DEBUG'),
      (l[(l.INFO = 2)] = 'INFO'),
      (l[(l.WARN = 3)] = 'WARN'),
      (l[(l.ERROR = 4)] = 'ERROR'),
      (l[(l.FATAL = 5)] = 'FATAL');
    var f = ((g.prototype.init = function (e) {
      (this.logger = o({
        messageKey: 'message',
        serializers: {
          error: m,
        },
      })),
        e && this.setLevel(e);
    }),
    (g.getInstance = function () {
      return void 0 === g.instance && (g.instance = new g()), g.instance;
    }),
    (g.prototype.processArgs = function (e, t, n) {
      return t ? p([t, e], n) : [e];
    }),
    (g.prototype.trace = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).trace.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.debug = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).debug.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.info = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).info.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.warn = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).warn.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.error = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).error.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.fatal = function (e, t) {
      for (var n, r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      (n = this.logger).fatal.apply(n, this.processArgs(e, t, r));
    }),
    (g.prototype.setLevel = function (e) {
      switch (e) {
        case d.TRACE:
        case 'trace':
          this.logger.level = 'trace';
          break;
        case d.DEBUG:
        case 'debug':
          this.logger.level = 'debug';
          break;
        case d.INFO:
        case 'info':
          this.logger.level = 'info';
          break;
        case d.WARN:
        case 'warn':
          this.logger.level = 'warn';
          break;
        case d.ERROR:
        case 'error':
          this.logger.level = 'error';
          break;
        case d.FATAL:
        case 'fatal':
          this.logger.level = 'fatal';
          break;
        default:
          throw new u(e, 'NotExistingLogLevelError');
      }
    }),
    g).getInstance();
  },
  171: function (e, t, n) {
    'use strict';
    var r = n(69),
      o = n(0),
      i = n(276),
      s = function () {
        return (s =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
    function a(r, a) {
      return function (e, t) {
        var n = e.default;
        return o.createElement(
          i.a,
          s(
            {
              pageType: r,
              derivedPageArguments: a,
              component: n,
            },
            t
          )
        );
      };
    }
    var u = n(13);
    n.d(t, 'a', function () {
      return l;
    }),
      n.d(t, 'd', function () {
        return p;
      }),
      n.d(t, 'c', function () {
        return m;
      });
    var c = function () {
        return (c =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      d = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      },
      l = {
        path: u.b.category.path,
        component: r({
          loader: function () {
            return n.e(1).then(n.bind(null, 1177));
          },
          loading: function () {
            return null;
          },
          render: a(u.b.category.pageType, function (e, t) {
            var n = e.params.categoryId,
              r = {};
            t.page || (r.page = '1');
            var a = c(
              c(
                {
                  categoryId: n,
                },
                t
              ),
              r
            );
            return Object.keys(a)
              .sort()
              .reduce(function (e, t) {
                return (e[t] = a[t]), e;
              }, {});
          }),
          modules: ['category'],
        }),
      },
      p = {
        path: u.b.search.path,
        component: r({
          loader: function () {
            return n.e(9).then(n.bind(null, 1178));
          },
          loading: function () {
            return null;
          },
          render: a(u.b.search.pageType, function (e, t) {
            var n = e.params,
              r =
                (n.countrycode,
                n.languagecode,
                d(n, ['countrycode', 'languagecode']));
            return c(c({}, r), t);
          }),
          modules: ['search'],
        }),
      },
      m = {
        path: u.b.productGroup.path,
        component: r({
          loader: function () {
            return n.e(6).then(n.bind(null, 1176));
          },
          loading: function () {
            return null;
          },
          render: a(u.b.productGroup.pageType, function (e, t) {
            var n = e.params,
              r =
                (n.countrycode,
                n.languagecode,
                d(n, ['countrycode', 'languagecode']));
            return c(c({}, r), t);
          }),
          modules: ['product-group'],
        }),
      },
      g = {
        path: u.b.product.path,
        component: r({
          loader: function () {
            return n.e(8).then(n.bind(null, 1175));
          },
          loading: function () {
            return null;
          },
          render: a(u.b.product.pageType, function (e, t) {
            var n = e.params,
              r =
                (n.countrycode,
                n.languagecode,
                d(n, ['countrycode', 'languagecode']));
            return c(c({}, r), t);
          }),
          modules: ['product'],
        }),
      };
    t.b = [l, p, m, g];
  },
  172: function (e, t, n) {
    'use strict';
    n.d(t, 'P', function () {
      return N;
    }),
      n.d(t, 'H', function () {
        return B;
      }),
      n.d(t, 'e', function () {
        return V;
      }),
      n.d(t, 'f', function () {
        return q;
      }),
      n.d(t, 'g', function () {
        return $;
      }),
      n.d(t, 'h', function () {
        return x;
      }),
      n.d(t, 'n', function () {
        return K;
      }),
      n.d(t, 'i', function () {
        return Z;
      }),
      n.d(t, 'j', function () {
        return X;
      }),
      n.d(t, 'o', function () {
        return te;
      }),
      n.d(t, 'q', function () {
        return re;
      }),
      n.d(t, 'r', function () {
        return oe;
      }),
      n.d(t, 'k', function () {
        return se;
      }),
      n.d(t, 'l', function () {
        return ce;
      }),
      n.d(t, 'm', function () {
        return le;
      }),
      n.d(t, 'a', function () {
        return pe;
      }),
      n.d(t, 'O', function () {
        return ge;
      }),
      n.d(t, 'L', function () {
        return ye;
      }),
      n.d(t, 'M', function () {
        return ve;
      }),
      n.d(t, 'I', function () {
        return Ce;
      }),
      n.d(t, 'p', function () {
        return Ie;
      }),
      n.d(t, 'x', function () {
        return Te;
      }),
      n.d(t, 'y', function () {
        return _e;
      }),
      n.d(t, 'z', function () {
        return Se;
      }),
      n.d(t, 'A', function () {
        return De;
      }),
      n.d(t, 'B', function () {
        return Fe;
      }),
      n.d(t, 'C', function () {
        return je;
      }),
      n.d(t, 's', function () {
        return we;
      }),
      n.d(t, 'D', function () {
        return Me;
      }),
      n.d(t, 't', function () {
        return Ge;
      }),
      n.d(t, 'E', function () {
        return ze;
      }),
      n.d(t, 'F', function () {
        return He;
      }),
      n.d(t, 'G', function () {
        return Qe;
      }),
      n.d(t, 'J', function () {
        return We;
      }),
      n.d(t, 'b', function () {
        return Ke;
      }),
      n.d(t, 'K', function () {
        return Ye;
      }),
      n.d(t, 'u', function () {
        return Je;
      }),
      n.d(t, 'N', function () {
        return et;
      }),
      n.d(t, 'c', function () {
        return tt;
      }),
      n.d(t, 'Q', function () {
        return rt;
      }),
      n.d(t, 'v', function () {
        return ot;
      }),
      n.d(t, 'w', function () {
        return st;
      }),
      n.d(t, 'R', function () {
        return ct;
      }),
      n.d(t, 'S', function () {
        return lt;
      }),
      n.d(t, 'd', function () {
        return Hn;
      });
    var r,
      a,
      o,
      i,
      s,
      u,
      c,
      d,
      l,
      p,
      m,
      g,
      f,
      y,
      h = n(7),
      v = n.n(h),
      b = (n(0), n(10), n(3)),
      C = function (e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, 'raw', {
                value: t,
              })
            : (e.raw = t),
          e
        );
      };
    ((a = r = r || {}).Unknown = 'UNKNOWN'),
      (a.Text = 'TEXT'),
      (a.Decimal = 'DECIMAL'),
      (a.Boolean = 'BOOLEAN'),
      (a.Date = 'DATE'),
      ((i = o = o || {}).SingleSelect = 'SINGLE_SELECT'),
      (i.Term = 'TERM'),
      (i.Range = 'RANGE'),
      (i.Slider = 'SLIDER'),
      ((u = s = s || {}).From = 'FROM'),
      (u.To = 'TO'),
      ((d = c = c || {}).Unknown = 'UNKNOWN'),
      (d.Lower = 'LOWER'),
      (d.Equal = 'EQUAL'),
      (d.Higher = 'HIGHER'),
      ((p = l = l || {}).Unknown = 'UNKNOWN'),
      (p.Accessory = 'ACCESSORY'),
      (p.SparePart = 'SPARE_PART'),
      (p.Alternative = 'ALTERNATIVE'),
      (p.ToolFor = 'TOOL_FOR'),
      (p.ConsistOf = 'CONSIST_OF'),
      (p.Supplementary = 'SUPPLEMENTARY'),
      (p.Recommended = 'RECOMMENDED'),
      (p.RequiredAccessory = 'REQUIRED_ACCESSORY'),
      (p.Similar = 'SIMILAR'),
      (p.ComponentOf = 'COMPONENT_OF'),
      ((g = m = m || {}).NoPermission = 'NO_PERMISSION'),
      (g.EmptyCart = 'EMPTY_CART'),
      (g.MissingCart = 'MISSING_CART'),
      (g.InvalidQuotationLine = 'INVALID_QUOTATION_LINE'),
      ((y = f = f || {}).Kilometers = 'KILOMETERS'),
      (y.Miles = 'MILES');
    var P = v()(
        (pt =
          pt ||
          C(
            [
              '\n    fragment AttributeValue on AttributeValue {\n  id\n  attribute {\n    id\n    dataType\n    description\n    unit {\n      id\n      content\n      symbol\n    }\n  }\n  values\n}\n    ',
            ],
            [
              '\n    fragment AttributeValue on AttributeValue {\n  id\n  attribute {\n    id\n    dataType\n    description\n    unit {\n      id\n      content\n      symbol\n    }\n  }\n  values\n}\n    ',
            ]
          ))
      ),
      I = v()(
        (mt =
          mt ||
          C(
            [
              '\n    fragment FacetFragment on Facet {\n  name\n  type\n  id\n  values {\n    ... on ValueFacetValues {\n      values {\n        key\n        score\n        label\n      }\n    }\n    ... on RangeFacetValues {\n      unfiltered_min\n      unfiltered_max\n    }\n  }\n}\n    ',
            ],
            [
              '\n    fragment FacetFragment on Facet {\n  name\n  type\n  id\n  values {\n    ... on ValueFacetValues {\n      values {\n        key\n        score\n        label\n      }\n    }\n    ... on RangeFacetValues {\n      unfiltered_min\n      unfiltered_max\n    }\n  }\n}\n    ',
            ]
          ))
      ),
      O = v()(
        (gt =
          gt ||
          C(
            [
              '\n    fragment ActiveFacetFilterFragment on Filter {\n  field\n  value {\n    __typename\n    ... on ValueFilter {\n      value\n    }\n    ... on ValuesFilter {\n      values\n    }\n    ... on RangeFilter {\n      from\n      to\n    }\n  }\n}\n    ',
            ],
            [
              '\n    fragment ActiveFacetFilterFragment on Filter {\n  field\n  value {\n    __typename\n    ... on ValueFilter {\n      value\n    }\n    ... on ValuesFilter {\n      values\n    }\n    ... on RangeFilter {\n      from\n      to\n    }\n  }\n}\n    ',
            ]
          ))
      ),
      T = v()(
        (ft =
          ft ||
          C(
            [
              '\n    fragment ItemFragment on Item {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  roundingQuantity\n  minimumQuantity\n  quantityUnit {\n    id\n    content\n    symbol\n  }\n  grossPrice @include(if: $isAuthenticated) {\n    currency\n    value\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
            ],
            [
              '\n    fragment ItemFragment on Item {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  roundingQuantity\n  minimumQuantity\n  quantityUnit {\n    id\n    content\n    symbol\n  }\n  grossPrice @include(if: $isAuthenticated) {\n    currency\n    value\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
            ]
          ))
      ),
      E = v()(
        (yt =
          yt ||
          C(
            [
              '\n    fragment MerchandisingAssociation on MerchandisingAssociation {\n  id\n  type\n  quantity\n  quantity_unit {\n    id\n    content\n    symbol\n  }\n  item {\n    item {\n      ...ItemFragment\n    }\n    direction\n  }\n}\n    ',
              '',
            ],
            [
              '\n    fragment MerchandisingAssociation on MerchandisingAssociation {\n  id\n  type\n  quantity\n  quantity_unit {\n    id\n    content\n    symbol\n  }\n  item {\n    item {\n      ...ItemFragment\n    }\n    direction\n  }\n}\n    ',
              '',
            ]
          )),
        T
      ),
      _ = v()(
        (ht =
          ht ||
          C(
            [
              '\n    fragment ItemBase on Item {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  roundingQuantity\n  minimumQuantity\n  quantityUnit {\n    id\n    content\n    symbol\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
            ],
            [
              '\n    fragment ItemBase on Item {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  roundingQuantity\n  minimumQuantity\n  quantityUnit {\n    id\n    content\n    symbol\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
            ]
          ))
      ),
      A = v()(
        (vt =
          vt ||
          C(
            [
              '\n    fragment ItemWithPrices on Item {\n  ...ItemBase\n  netPrice {\n    currency\n    quantity\n    value\n    volumeDiscounts {\n      range\n      price {\n        currency\n        value\n      }\n    }\n  }\n  totalNetPrice {\n    currency\n    value\n  }\n  grossPrice {\n    currency\n    value\n  }\n  totalGrossPrice {\n    currency\n    value\n  }\n  discountCode\n}\n    ',
              '',
            ],
            [
              '\n    fragment ItemWithPrices on Item {\n  ...ItemBase\n  netPrice {\n    currency\n    quantity\n    value\n    volumeDiscounts {\n      range\n      price {\n        currency\n        value\n      }\n    }\n  }\n  totalNetPrice {\n    currency\n    value\n  }\n  grossPrice {\n    currency\n    value\n  }\n  totalGrossPrice {\n    currency\n    value\n  }\n  discountCode\n}\n    ',
              '',
            ]
          )),
        _
      ),
      S =
        (v()(
          (bt =
            bt ||
            C(
              [
                '\n    fragment QuotationLineReplaced on QuotationLineReplaced {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ...ItemBase\n  }\n  replacedBy {\n    ...ItemWithPrices\n  }\n}\n    ',
                '\n',
                '',
              ],
              [
                '\n    fragment QuotationLineReplaced on QuotationLineReplaced {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ...ItemBase\n  }\n  replacedBy {\n    ...ItemWithPrices\n  }\n}\n    ',
                '\n',
                '',
              ]
            )),
          _,
          A
        ),
        v()(
          (Ct =
            Ct ||
            C(
              [
                '\n    fragment ConfigurableItem on ConfigurableItem {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
              ],
              [
                '\n    fragment ConfigurableItem on ConfigurableItem {\n  id\n  name\n  brand {\n    id\n    name\n  }\n  description\n  image {\n    src\n    alt\n  }\n}\n    ',
              ]
            ))
        )),
      k = v()(
        (Pt =
          Pt ||
          C(
            [
              '\n    fragment QuotationLineWithPrices on QuotationLine {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ... on Item {\n      ...ItemBase\n    }\n    ... on ConfigurableItem {\n      ...ConfigurableItem\n    }\n  }\n  netPrice {\n    currency\n    quantity\n    value\n    volumeDiscounts {\n      range\n      price {\n        currency\n        value\n      }\n    }\n  }\n  grossPrice {\n    currency\n    value\n  }\n  effectivePrice {\n    currency\n    value\n  }\n  totalNetPrice {\n    currency\n    value\n  }\n  totalEffectivePrice {\n    currency\n    value\n  }\n  totalGrossPrice {\n    currency\n    value\n  }\n}\n    ',
              '\n',
              '',
            ],
            [
              '\n    fragment QuotationLineWithPrices on QuotationLine {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ... on Item {\n      ...ItemBase\n    }\n    ... on ConfigurableItem {\n      ...ConfigurableItem\n    }\n  }\n  netPrice {\n    currency\n    quantity\n    value\n    volumeDiscounts {\n      range\n      price {\n        currency\n        value\n      }\n    }\n  }\n  grossPrice {\n    currency\n    value\n  }\n  effectivePrice {\n    currency\n    value\n  }\n  totalNetPrice {\n    currency\n    value\n  }\n  totalEffectivePrice {\n    currency\n    value\n  }\n  totalGrossPrice {\n    currency\n    value\n  }\n}\n    ',
              '\n',
              '',
            ]
          )),
        _,
        S
      ),
      D = v()(
        (It =
          It ||
          C(
            [
              '\n    fragment QuotationLineBase on QuotationLine {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ... on Item {\n      ...ItemBase\n    }\n    ... on ConfigurableItem {\n      ...ConfigurableItem\n    }\n  }\n}\n    ',
              '\n',
              '',
            ],
            [
              '\n    fragment QuotationLineBase on QuotationLine {\n  id\n  comment\n  quantity\n  item {\n    __typename\n    ... on Item {\n      ...ItemBase\n    }\n    ... on ConfigurableItem {\n      ...ConfigurableItem\n    }\n  }\n}\n    ',
              '\n',
              '',
            ]
          )),
        _,
        S
      ),
      R = v()(
        (Ot =
          Ot ||
          C(
            [
              '\n    fragment QuotationBase on Quotation {\n  id\n  name\n  shared\n  isDefault\n  fulfillmentInstructions\n}\n    ',
            ],
            [
              '\n    fragment QuotationBase on Quotation {\n  id\n  name\n  shared\n  isDefault\n  fulfillmentInstructions\n}\n    ',
            ]
          ))
      ),
      F = v()(
        (Tt =
          Tt ||
          C(
            [
              '\n    fragment QuotationPriceSummary on Quotation {\n  priceSummary {\n    currency\n    gross\n    effective {\n      withVat\n      vat\n      withoutVat\n    }\n    total {\n      withVat\n      vat\n      withoutVat\n    }\n  }\n}\n    ',
            ],
            [
              '\n    fragment QuotationPriceSummary on Quotation {\n  priceSummary {\n    currency\n    gross\n    effective {\n      withVat\n      vat\n      withoutVat\n    }\n    total {\n      withVat\n      vat\n      withoutVat\n    }\n  }\n}\n    ',
            ]
          ))
      ),
      L = v()(
        (Et =
          Et ||
          C(
            [
              '\n    fragment WishlistLineReplaced on WishlistLineReplaced {\n  id\n  itemId\n  replacedBy {\n    id\n    name\n    description\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    image {\n      src\n      alt\n    }\n    quantity\n    roundingQuantity\n    minimumQuantity\n    quantityUnit {\n      id\n      content\n      symbol\n    }\n    grossPrice {\n      value\n      currency\n    }\n  }\n}\n    ',
            ],
            [
              '\n    fragment WishlistLineReplaced on WishlistLineReplaced {\n  id\n  itemId\n  replacedBy {\n    id\n    name\n    description\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    image {\n      src\n      alt\n    }\n    quantity\n    roundingQuantity\n    minimumQuantity\n    quantityUnit {\n      id\n      content\n      symbol\n    }\n    grossPrice {\n      value\n      currency\n    }\n  }\n}\n    ',
            ]
          ))
      ),
      j = v()(
        (_t =
          _t ||
          C(
            [
              '\n    fragment WishlistLineBase on WishlistLine {\n  item {\n    __typename\n    id\n    name\n    description\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    image {\n      src\n      alt\n    }\n    quantity\n    roundingQuantity\n    minimumQuantity\n    quantityUnit {\n      id\n      content\n      symbol\n    }\n    grossPrice {\n      value\n      currency\n    }\n  }\n  id\n  comment\n  quantity\n}\n    ',
            ],
            [
              '\n    fragment WishlistLineBase on WishlistLine {\n  item {\n    __typename\n    id\n    name\n    description\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    image {\n      src\n      alt\n    }\n    quantity\n    roundingQuantity\n    minimumQuantity\n    quantityUnit {\n      id\n      content\n      symbol\n    }\n    grossPrice {\n      value\n      currency\n    }\n  }\n  id\n  comment\n  quantity\n}\n    ',
            ]
          ))
      ),
      U = v()(
        (At =
          At ||
          C(
            [
              '\n    fragment WishListBase on Wishlist {\n  id\n  name\n  shared\n  isDefault\n}\n    ',
            ],
            [
              '\n    fragment WishListBase on Wishlist {\n  id\n  name\n  shared\n  isDefault\n}\n    ',
            ]
          ))
      );
    v()(
      (St =
        St ||
        C(
          [
            '\n    mutation AddItemsToQuotation($quotationId: ID!, $items: [AddItemToQuotationInput!]!) {\n  addItemsToQuotation(quotationId: $quotationId, items: $items) {\n    quotationLines {\n      ... on QuotationLine {\n        id\n      }\n    }\n    quotationLinesCount\n  }\n}\n    ',
          ],
          [
            '\n    mutation AddItemsToQuotation($quotationId: ID!, $items: [AddItemToQuotationInput!]!) {\n  addItemsToQuotation(quotationId: $quotationId, items: $items) {\n    quotationLines {\n      ... on QuotationLine {\n        id\n      }\n    }\n    quotationLinesCount\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (kt =
        kt ||
        C(
          [
            '\n    mutation AddWishlistItemsToQuotation($wishlistId: ID!) {\n  addWishlistItemsToQuotation(wishlistId: $wishlistId) {\n    itemIds\n  }\n}\n    ',
          ],
          [
            '\n    mutation AddWishlistItemsToQuotation($wishlistId: ID!) {\n  addWishlistItemsToQuotation(wishlistId: $wishlistId) {\n    itemIds\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Dt =
        Dt ||
        C(
          [
            '\n    mutation DeleteQuotationLine($input: DeleteQuotationLineInput!) {\n  deleteQuotationLine(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation DeleteQuotationLine($input: DeleteQuotationLineInput!) {\n  deleteQuotationLine(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Rt =
        Rt ||
        C(
          [
            '\n    mutation DeleteWishlistLine($input: DeleteWishlistLineInput!) {\n  deleteWishlistLine(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation DeleteWishlistLine($input: DeleteWishlistLineInput!) {\n  deleteWishlistLine(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Ft =
        Ft ||
        C(
          [
            '\n    mutation UpdateQuotationLine($input: UpdateQuotationLineInput!) {\n  updateQuotationLine(input: $input) {\n    ... on QuotationLine {\n      id\n      comment\n      quantity\n    }\n  }\n}\n    ',
          ],
          [
            '\n    mutation UpdateQuotationLine($input: UpdateQuotationLineInput!) {\n  updateQuotationLine(input: $input) {\n    ... on QuotationLine {\n      id\n      comment\n      quantity\n    }\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Lt =
        Lt ||
        C(
          [
            '\n    mutation UpdateQuotation($input: UpdateQuotationInput!) {\n  updateQuotation(input: $input) {\n    id\n    name\n    shared\n    fulfillmentInstructions\n    state\n  }\n}\n    ',
          ],
          [
            '\n    mutation UpdateQuotation($input: UpdateQuotationInput!) {\n  updateQuotation(input: $input) {\n    id\n    name\n    shared\n    fulfillmentInstructions\n    state\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (jt =
        jt ||
        C(
          [
            '\n    mutation CancelQuotation($input: CancelQuotationInput!) {\n  cancelQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation CancelQuotation($input: CancelQuotationInput!) {\n  cancelQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Ut =
        Ut ||
        C(
          [
            '\n    mutation ChangeDefaultQuotation($input: ChangeDefaultQuotationInput!) {\n  changeDefaultQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation ChangeDefaultQuotation($input: ChangeDefaultQuotationInput!) {\n  changeDefaultQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (wt =
        wt ||
        C(
          [
            '\n    mutation CreateQuotation($input: CreateQuotationInput!) {\n  createQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation CreateQuotation($input: CreateQuotationInput!) {\n  createQuotation(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Nt =
        Nt ||
        C(
          [
            '\n    mutation ReplaceQuotationLine($input: ReplaceQuotationLineInput!) {\n  replaceQuotationLine(input: $input) {\n    ... on QuotationLine {\n      ...QuotationLineBase\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    mutation ReplaceQuotationLine($input: ReplaceQuotationLineInput!) {\n  replaceQuotationLine(input: $input) {\n    ... on QuotationLine {\n      ...QuotationLineBase\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      D
    );
    v()(
      (Mt =
        Mt ||
        C(
          [
            '\n    mutation ReplaceWishlistine($input: ReplaceWishlistLineInput!) {\n  replaceWishlistLine(input: $input) {\n    ... on WishlistLine {\n      ...WishlistLineBase\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    mutation ReplaceWishlistine($input: ReplaceWishlistLineInput!) {\n  replaceWishlistLine(input: $input) {\n    ... on WishlistLine {\n      ...WishlistLineBase\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      j
    );
    var w = v()(
      (Bt =
        Bt ||
        C(
          [
            '\n    mutation SendMessage($msgType: String!, $payload: String!) {\n  sendMessage(msgType: $msgType, payload: $payload)\n}\n    ',
          ],
          [
            '\n    mutation SendMessage($msgType: String!, $payload: String!) {\n  sendMessage(msgType: $msgType, payload: $payload)\n}\n    ',
          ]
        ))
    );
    function N(e) {
      return b.useMutation(w, e);
    }
    v()(
      (Gt =
        Gt ||
        C(
          [
            '\n    mutation SubmitQuotation($input: SubmitQuotationInput!) {\n  submitQuotation(input: $input) {\n    id\n    errors {\n      id\n      code\n    }\n  }\n}\n    ',
          ],
          [
            '\n    mutation SubmitQuotation($input: SubmitQuotationInput!) {\n  submitQuotation(input: $input) {\n    id\n    errors {\n      id\n      code\n    }\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Vt =
        Vt ||
        C(
          [
            '\n    mutation ChangeDefaultWishlist($input: ChangeDefaultWishlistInput!) {\n  changeDefaultWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation ChangeDefaultWishlist($input: ChangeDefaultWishlistInput!) {\n  changeDefaultWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (zt =
        zt ||
        C(
          [
            '\n    mutation CreateWishlist($input: CreateWishlistInput!) {\n  createWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation CreateWishlist($input: CreateWishlistInput!) {\n  createWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (qt =
        qt ||
        C(
          [
            '\n    mutation DeleteWishlist($input: DeleteWishlistInput!) {\n  deleteWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ],
          [
            '\n    mutation DeleteWishlist($input: DeleteWishlistInput!) {\n  deleteWishlist(input: $input) {\n    id\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (Ht =
        Ht ||
        C(
          [
            '\n    mutation UpdateWishlistLine($input: UpdateWishlistLineInput!) {\n  updateWishlistLine(input: $input) {\n    ... on WishlistLine {\n      id\n      comment\n      quantity\n    }\n  }\n}\n    ',
          ],
          [
            '\n    mutation UpdateWishlistLine($input: UpdateWishlistLineInput!) {\n  updateWishlistLine(input: $input) {\n    ... on WishlistLine {\n      id\n      comment\n      quantity\n    }\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      ($t =
        $t ||
        C(
          [
            '\n    mutation UpdateWishlist($input: UpdateWishlistInput!) {\n  updateWishlist(input: $input) {\n    id\n    name\n    shared\n    comment\n  }\n}\n    ',
          ],
          [
            '\n    mutation UpdateWishlist($input: UpdateWishlistInput!) {\n  updateWishlist(input: $input) {\n    id\n    name\n    shared\n    comment\n  }\n}\n    ',
          ]
        ))
    );
    var M = v()(
      (Qt =
        Qt ||
        C(
          [
            '\n    query MyAccount {\n  account {\n    id\n    email\n    lastName\n    logonId\n    organization {\n      name\n      countryCode\n      id\n      properties {\n        key\n        value\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query MyAccount {\n  account {\n    id\n    email\n    lastName\n    logonId\n    organization {\n      name\n      countryCode\n      id\n      properties {\n        key\n        value\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function B(e) {
      return b.useQuery(M, e);
    }
    v()(
      (xt =
        xt ||
        C(
          [
            '\n    query Autocomplete($searchTerm: String!) {\n  autocomplete(searchTerm: $searchTerm, maxItemSuggestions: 10, maxSearchSuggestions: 0) {\n    items {\n      ... on Item {\n        id\n        name\n        description\n        roundingQuantity\n        minimumQuantity\n        grossPrice {\n          value\n          currency\n        }\n        brand {\n          name\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query Autocomplete($searchTerm: String!) {\n  autocomplete(searchTerm: $searchTerm, maxItemSuggestions: 10, maxSearchSuggestions: 0) {\n    items {\n      ... on Item {\n        id\n        name\n        description\n        roundingQuantity\n        minimumQuantity\n        grossPrice {\n          value\n          currency\n        }\n        brand {\n          name\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    var G = v()(
      (Wt =
        Wt ||
        C(
          [
            '\n    query BreadCrumbComponent($componentId: ID!, $categoryId: ID) {\n  component(id: $componentId) {\n    id\n    breadcrumbs(category_id: $categoryId) {\n      id\n      title\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query BreadCrumbComponent($componentId: ID!, $categoryId: ID) {\n  component(id: $componentId) {\n    id\n    breadcrumbs(category_id: $categoryId) {\n      id\n      title\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function V(e) {
      return b.useQuery(G, e);
    }
    var z = v()(
      (Kt =
        Kt ||
        C(
          [
            '\n    query BreadCrumbProduct($itemId: ID!, $categoryId: ID = null, $breadcrumbComponentId: ID, $componentId: ID!, $hasComponentId: Boolean!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      variant {\n        id\n        name\n      }\n      breadcrumbs(category_id: $categoryId, component_id: $breadcrumbComponentId) {\n        id\n        title\n      }\n    }\n  }\n  component(id: $componentId) @include(if: $hasComponentId) {\n    name\n  }\n}\n    ',
          ],
          [
            '\n    query BreadCrumbProduct($itemId: ID!, $categoryId: ID = null, $breadcrumbComponentId: ID, $componentId: ID!, $hasComponentId: Boolean!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      variant {\n        id\n        name\n      }\n      breadcrumbs(category_id: $categoryId, component_id: $breadcrumbComponentId) {\n        id\n        title\n      }\n    }\n  }\n  component(id: $componentId) @include(if: $hasComponentId) {\n    name\n  }\n}\n    ',
          ]
        ))
    );
    function q(e) {
      return b.useQuery(z, e);
    }
    var H = v()(
      (Yt =
        Yt ||
        C(
          [
            '\n    query BreadCrumbSearch($categoryId: ID!) {\n  category(id: $categoryId) {\n    breadcrumbs {\n      id\n      title\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query BreadCrumbSearch($categoryId: ID!) {\n  category(id: $categoryId) {\n    breadcrumbs {\n      id\n      title\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function $(e) {
      return b.useQuery(H, e);
    }
    var Q = v()(
      (Zt =
        Zt ||
        C(
          [
            '\n    query BreadCrumbVariant($variantId: ID!, $categoryId: ID) {\n  variant(id: $variantId) {\n    id\n    breadcrumbs(category_id: $categoryId) {\n      id\n      title\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query BreadCrumbVariant($variantId: ID!, $categoryId: ID) {\n  variant(id: $variantId) {\n    id\n    breadcrumbs(category_id: $categoryId) {\n      id\n      title\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function x(e) {
      return b.useQuery(Q, e);
    }
    var W = v()(
      (Jt =
        Jt ||
        C(
          [
            '\n    query GetCategoryMediaAssets($id: ID!) {\n  category(id: $id) {\n    id\n    groupAssets {\n      videos {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n      documents {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n      safetySheets {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query GetCategoryMediaAssets($id: ID!) {\n  category(id: $id) {\n    id\n    groupAssets {\n      videos {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n      documents {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n      safetySheets {\n        id\n        description\n        usage\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n        resourceLocation\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function K(e) {
      return b.useQuery(W, e);
    }
    var Y = v()(
      (Xt =
        Xt ||
        C(
          [
            '\n    query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {\n  category(id: $id) {\n    id\n    name\n    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n    }\n    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {\n  category(id: $id) {\n    id\n    name\n    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n    }\n    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Z(e) {
      return b.useQuery(Y, e);
    }
    var J = v()(
      (en =
        en ||
        C(
          [
            '\n    query CategoryProductConfigurator($id: ID!) {\n  category(id: $id) {\n    id\n    showProductConfigurator\n  }\n}\n    ',
          ],
          [
            '\n    query CategoryProductConfigurator($id: ID!) {\n  category(id: $id) {\n    id\n    showProductConfigurator\n  }\n}\n    ',
          ]
        ))
    );
    function X(e) {
      return b.useQuery(J, e);
    }
    var ee = v()(
      (tn =
        tn ||
        C(
          [
            '\n    query GetCategoryProducts($categoryId: ID!, $isAuthenticated: Boolean!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    name\n    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n      items {\n        id\n        name\n        description\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n        image {\n          src\n          alt\n        }\n        quantity\n        roundingQuantity\n        minimumQuantity\n        variant {\n          id\n          name\n        }\n        hasVolumeDiscount @include(if: $isAuthenticated)\n        grossPrice @include(if: $isAuthenticated) {\n          value\n          currency\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query GetCategoryProducts($categoryId: ID!, $isAuthenticated: Boolean!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    name\n    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n      items {\n        id\n        name\n        description\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n        image {\n          src\n          alt\n        }\n        quantity\n        roundingQuantity\n        minimumQuantity\n        variant {\n          id\n          name\n        }\n        hasVolumeDiscount @include(if: $isAuthenticated)\n        grossPrice @include(if: $isAuthenticated) {\n          value\n          currency\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function te(e) {
      return b.useQuery(ee, e);
    }
    var ne = v()(
      (nn =
        nn ||
        C(
          [
            '\n    query getComponentImages($id: ID!) {\n  component(id: $id) {\n    id\n    groupedAssets {\n      images {\n        id\n        description\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n      videos {\n        id\n        resourceLocation\n        description\n        usage\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query getComponentImages($id: ID!) {\n  component(id: $id) {\n    id\n    groupedAssets {\n      images {\n        id\n        description\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n      videos {\n        id\n        resourceLocation\n        description\n        usage\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function re(e) {
      return b.useQuery(ne, e);
    }
    var ae = v()(
      (rn =
        rn ||
        C(
          [
            '\n    query getComponentName($id: ID!) {\n  component(id: $id) {\n    id\n    name\n  }\n}\n    ',
          ],
          [
            '\n    query getComponentName($id: ID!) {\n  component(id: $id) {\n    id\n    name\n  }\n}\n    ',
          ]
        ))
    );
    function oe(e) {
      return b.useQuery(ae, e);
    }
    var ie = v()(
      (an =
        an ||
        C(
          [
            '\n    query ComponentPage($id: ID!) {\n  component(id: $id) {\n    id\n    name\n    groupedAssets {\n      documents {\n        id\n        description\n        resourceLocation\n        usage\n      }\n      safetySheets {\n        id\n        description\n        resourceLocation\n        usage\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ComponentPage($id: ID!) {\n  component(id: $id) {\n    id\n    name\n    groupedAssets {\n      documents {\n        id\n        description\n        resourceLocation\n        usage\n      }\n      safetySheets {\n        id\n        description\n        resourceLocation\n        usage\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function se(e) {
      return b.useQuery(ie, e);
    }
    var ue = v()(
      (on =
        on ||
        C(
          [
            '\n    query ComponentTable($id: ID!, $page: Int!, $pageSize: Int!, $hasGrossPricePermission: Boolean = false, $hasVolumeDiscountPermission: Boolean = false) {\n  component(id: $id) {\n    id\n    name\n    usages {\n      itemIds\n      attribute_values {\n        ...AttributeValue\n      }\n    }\n    items(page: $page, pageSize: $pageSize) {\n      pagination {\n        page\n        totalPages\n      }\n      items {\n        ...ItemBase\n        quantity\n        quantityUnit {\n          id\n          content\n          symbol\n        }\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        grossPrice @include(if: $hasGrossPricePermission) {\n          currency\n          value\n        }\n        hasVolumeDiscount @include(if: $hasVolumeDiscountPermission)\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ],
          [
            '\n    query ComponentTable($id: ID!, $page: Int!, $pageSize: Int!, $hasGrossPricePermission: Boolean = false, $hasVolumeDiscountPermission: Boolean = false) {\n  component(id: $id) {\n    id\n    name\n    usages {\n      itemIds\n      attribute_values {\n        ...AttributeValue\n      }\n    }\n    items(page: $page, pageSize: $pageSize) {\n      pagination {\n        page\n        totalPages\n      }\n      items {\n        ...ItemBase\n        quantity\n        quantityUnit {\n          id\n          content\n          symbol\n        }\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        grossPrice @include(if: $hasGrossPricePermission) {\n          currency\n          value\n        }\n        hasVolumeDiscount @include(if: $hasVolumeDiscountPermission)\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ]
        )),
      P,
      _
    );
    function ce(e) {
      return b.useQuery(ue, e);
    }
    var de = v()(
      (sn =
        sn ||
        C(
          [
            '\n    query Content($eventName: ID!, $parameters: [MapValue!]!) {\n  content(eventName: $eventName, parameters: $parameters)\n}\n    ',
          ],
          [
            '\n    query Content($eventName: ID!, $parameters: [MapValue!]!) {\n  content(eventName: $eventName, parameters: $parameters)\n}\n    ',
          ]
        ))
    );
    function le(e) {
      return b.useQuery(de, e);
    }
    var pe = v()(
      (un =
        un ||
        C(
          [
            '\n    query DefaultWishlistLines {\n  defaultWishlist {\n    ...WishListBase\n    wishlistLines {\n      __typename\n      ... on WishlistLine {\n        ...WishlistLineBase\n      }\n      ... on WishlistLineDeleted {\n        id\n        itemId\n      }\n      ... on WishlistLineReplaced {\n        ...WishlistLineReplaced\n      }\n    }\n  }\n}\n    ',
            '\n',
            '\n',
            '',
          ],
          [
            '\n    query DefaultWishlistLines {\n  defaultWishlist {\n    ...WishListBase\n    wishlistLines {\n      __typename\n      ... on WishlistLine {\n        ...WishlistLineBase\n      }\n      ... on WishlistLineDeleted {\n        id\n        itemId\n      }\n      ... on WishlistLineReplaced {\n        ...WishlistLineReplaced\n      }\n    }\n  }\n}\n    ',
            '\n',
            '\n',
            '',
          ]
        )),
      U,
      j,
      L
    );
    v()(
      (cn =
        cn ||
        C(
          [
            '\n    query DefaultWishlist {\n  defaultWishlist {\n    ...WishListBase\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query DefaultWishlist {\n  defaultWishlist {\n    ...WishListBase\n  }\n}\n    ',
            '',
          ]
        )),
      U
    );
    v()(
      (dn =
        dn ||
        C(
          [
            '\n    query DiscountCode($id: ID!, $quantity: Float!) {\n  discountCode(itemId: $id, quantity: $quantity)\n}\n    ',
          ],
          [
            '\n    query DiscountCode($id: ID!, $quantity: Float!) {\n  discountCode(itemId: $id, quantity: $quantity)\n}\n    ',
          ]
        ))
    );
    var me = v()(
      (ln =
        ln ||
        C(
          [
            '\n    query SearchFacets($searchTerm: String!, $facetValues: FacetValuesInput) {\n  searchItems(searchTerm: $searchTerm, page: 1, pageSize: 1, facetValues: $facetValues) {\n    active_filters {\n      ...ActiveFacetFilterFragment\n    }\n    facets {\n      ...FacetFragment\n    }\n  }\n}\n    ',
            '\n',
            '',
          ],
          [
            '\n    query SearchFacets($searchTerm: String!, $facetValues: FacetValuesInput) {\n  searchItems(searchTerm: $searchTerm, page: 1, pageSize: 1, facetValues: $facetValues) {\n    active_filters {\n      ...ActiveFacetFilterFragment\n    }\n    facets {\n      ...FacetFragment\n    }\n  }\n}\n    ',
            '\n',
            '',
          ]
        )),
      O,
      I
    );
    function ge(e) {
      return b.useQuery(me, e);
    }
    var fe = v()(
      (pn =
        pn ||
        C(
          [
            '\n    query ProductFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    breadcrumbs {\n      id\n      title\n    }\n    items(page: 1, pageSize: 1, facetValues: $facetValues) {\n      active_filters {\n        ...ActiveFacetFilterFragment\n      }\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ],
          [
            '\n    query ProductFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    breadcrumbs {\n      id\n      title\n    }\n    items(page: 1, pageSize: 1, facetValues: $facetValues) {\n      active_filters {\n        ...ActiveFacetFilterFragment\n      }\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ]
        )),
      O,
      I
    );
    function ye(e) {
      return b.useQuery(fe, e);
    }
    var he = v()(
      (mn =
        mn ||
        C(
          [
            '\n    query ProductGroupFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    breadcrumbs {\n      id\n      title\n    }\n    entries(page: 1, pageSize: 1, facetValues: $facetValues) {\n      active_filters {\n        ...ActiveFacetFilterFragment\n      }\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ],
          [
            '\n    query ProductGroupFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    breadcrumbs {\n      id\n      title\n    }\n    entries(page: 1, pageSize: 1, facetValues: $facetValues) {\n      active_filters {\n        ...ActiveFacetFilterFragment\n      }\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ]
        )),
      O,
      I
    );
    function ve(e) {
      return b.useQuery(he, e);
    }
    var be = v()(
      (gn =
        gn ||
        C(
          [
            '\n    query OverviewFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    items(page: 1, pageSize: 1, facetValues: $facetValues) {\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query OverviewFacets($categoryId: ID!, $facetValues: FacetValuesInput) {\n  category(id: $categoryId) {\n    id\n    items(page: 1, pageSize: 1, facetValues: $facetValues) {\n      facets {\n        ...FacetFragment\n      }\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      I
    );
    function Ce(e) {
      return b.useQuery(be, e);
    }
    var Pe = v()(
      (fn =
        fn ||
        C(
          [
            '\n    query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Ie(e) {
      return b.useQuery(Pe, e);
    }
    var Oe = v()(
      (yn =
        yn ||
        C(
          [
            '\n    query hasVolumeDiscount($itemId: ID!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      hasVolumeDiscount\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query hasVolumeDiscount($itemId: ID!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      hasVolumeDiscount\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Te(e) {
      return b.useQuery(Oe, e);
    }
    var Ee = v()(
      (hn =
        hn ||
        C(
          [
            '\n    query ItemAssets($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      groupedAssets {\n        __typename\n        documents {\n          __typename\n          id\n          description\n          resourceLocation\n          usage\n        }\n        safetySheets {\n          __typename\n          id\n          description\n          resourceLocation\n          usage\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ItemAssets($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      groupedAssets {\n        __typename\n        documents {\n          __typename\n          id\n          description\n          resourceLocation\n          usage\n        }\n        safetySheets {\n          __typename\n          id\n          description\n          resourceLocation\n          usage\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function _e(e) {
      return b.useQuery(Ee, e);
    }
    var Ae = v()(
      (vn =
        vn ||
        C(
          [
            '\n    query ItemAttributes($id: ID!, $hasComponentId: Boolean!, $componentId: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      customAttributes {\n        ...AttributeValue\n      }\n      variant {\n        id\n        displayableAttributes {\n          ...AttributeValue\n        }\n        groupedAssets {\n          images {\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n      displayableAttributes {\n        ...AttributeValue\n      }\n      displayableComponentAttributes(componentId: $componentId) @include(if: $hasComponentId) {\n        id\n        ...AttributeValue\n      }\n      groupedAssets {\n        images {\n          attributeMappings {\n            symbol\n            attributeIds\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query ItemAttributes($id: ID!, $hasComponentId: Boolean!, $componentId: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      customAttributes {\n        ...AttributeValue\n      }\n      variant {\n        id\n        displayableAttributes {\n          ...AttributeValue\n        }\n        groupedAssets {\n          images {\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n      displayableAttributes {\n        ...AttributeValue\n      }\n      displayableComponentAttributes(componentId: $componentId) @include(if: $hasComponentId) {\n        id\n        ...AttributeValue\n      }\n      groupedAssets {\n        images {\n          attributeMappings {\n            symbol\n            attributeIds\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      P
    );
    function Se(e) {
      return b.useQuery(Ae, e);
    }
    var ke = v()(
      (bn =
        bn ||
        C(
          [
            '\n    query ItemClassifications($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      classifications {\n        code\n        values {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ItemClassifications($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      classifications {\n        code\n        values {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function De(e) {
      return b.useQuery(ke, e);
    }
    var Re = v()(
      (Cn =
        Cn ||
        C(
          [
            '\n    query itemDetails($itemId: ID!, $requestFeatureBasedTaxes: Boolean!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      name\n      brand {\n        id\n        name\n      }\n      roundingQuantity\n      minimumQuantity\n      quantityUnit {\n        id\n        content\n        symbol\n      }\n      description\n      image {\n        src\n        alt\n      }\n      grossPrice {\n        value\n        currency\n      }\n      grossPriceInclFeatureBasedTax @include(if: $requestFeatureBasedTaxes) {\n        value\n        currency\n      }\n      featureBasedTax @include(if: $requestFeatureBasedTaxes) {\n        taxBaseUnitQuantity\n        taxBaseUnit {\n          symbol\n        }\n        taxDescription\n        featureBasedTaxAmount {\n          value\n          currency\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query itemDetails($itemId: ID!, $requestFeatureBasedTaxes: Boolean!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      name\n      brand {\n        id\n        name\n      }\n      roundingQuantity\n      minimumQuantity\n      quantityUnit {\n        id\n        content\n        symbol\n      }\n      description\n      image {\n        src\n        alt\n      }\n      grossPrice {\n        value\n        currency\n      }\n      grossPriceInclFeatureBasedTax @include(if: $requestFeatureBasedTaxes) {\n        value\n        currency\n      }\n      featureBasedTax @include(if: $requestFeatureBasedTaxes) {\n        taxBaseUnitQuantity\n        taxBaseUnit {\n          symbol\n        }\n        taxDescription\n        featureBasedTaxAmount {\n          value\n          currency\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Fe(e) {
      return b.useQuery(Re, e);
    }
    var Le = v()(
      (Pn =
        Pn ||
        C(
          [
            '\n    query ItemHeader($itemId: ID!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      name\n      brand {\n        id\n        name\n        logo {\n          src\n          alt\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ItemHeader($itemId: ID!) {\n  item(id: $itemId) {\n    ... on Item {\n      id\n      name\n      brand {\n        id\n        name\n        logo {\n          src\n          alt\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function je(e) {
      return b.useQuery(Le, e);
    }
    var Ue = v()(
      (In =
        In ||
        C(
          [
            '\n    query getItemImages($id: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      name\n      image {\n        src\n        alt\n      }\n      groupedAssets {\n        images {\n          id\n          description\n          customSizes {\n            key\n            value\n          }\n          attributeMappings {\n            symbol\n            attributeIds\n          }\n        }\n        videos {\n          id\n          resourceLocation\n          description\n          usage\n        }\n      }\n      definingAttributeValues {\n        id\n        attribute {\n          id\n          dataType\n          description\n          unit {\n            id\n            content\n            symbol\n          }\n        }\n        values\n      }\n      displayableAttributes {\n        id\n        attribute {\n          id\n          dataType\n          description\n          unit {\n            id\n            content\n            symbol\n          }\n        }\n        values\n      }\n      variant {\n        id\n        groupedAssets {\n          images {\n            id\n            description\n            usage\n            customSizes {\n              key\n              value\n            }\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query getItemImages($id: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      name\n      image {\n        src\n        alt\n      }\n      groupedAssets {\n        images {\n          id\n          description\n          customSizes {\n            key\n            value\n          }\n          attributeMappings {\n            symbol\n            attributeIds\n          }\n        }\n        videos {\n          id\n          resourceLocation\n          description\n          usage\n        }\n      }\n      definingAttributeValues {\n        id\n        attribute {\n          id\n          dataType\n          description\n          unit {\n            id\n            content\n            symbol\n          }\n        }\n        values\n      }\n      displayableAttributes {\n        id\n        attribute {\n          id\n          dataType\n          description\n          unit {\n            id\n            content\n            symbol\n          }\n        }\n        values\n      }\n      variant {\n        id\n        groupedAssets {\n          images {\n            id\n            description\n            usage\n            customSizes {\n              key\n              value\n            }\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function we(e) {
      return b.useQuery(Ue, e);
    }
    var Ne = v()(
      (On =
        On ||
        C(
          [
            '\n    query ItemMerchandisingAssociations($id: ID!, $isAuthenticated: Boolean = false) {\n  item(id: $id) {\n    ... on Item {\n      id\n      groupedMerchandisingAssociations {\n        spareParts {\n          ...MerchandisingAssociation\n        }\n        alternatives {\n          ...MerchandisingAssociation\n        }\n        accessories {\n          ...MerchandisingAssociation\n        }\n      }\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query ItemMerchandisingAssociations($id: ID!, $isAuthenticated: Boolean = false) {\n  item(id: $id) {\n    ... on Item {\n      id\n      groupedMerchandisingAssociations {\n        spareParts {\n          ...MerchandisingAssociation\n        }\n        alternatives {\n          ...MerchandisingAssociation\n        }\n        accessories {\n          ...MerchandisingAssociation\n        }\n      }\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      E
    );
    function Me(e) {
      return b.useQuery(Ne, e);
    }
    var Be = v()(
      (Tn =
        Tn ||
        C(
          [
            '\n    query getItemName($id: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      name\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query getItemName($id: ID!) {\n  item(id: $id) {\n    __typename\n    ... on Item {\n      id\n      name\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Ge(e) {
      return b.useQuery(Be, e);
    }
    var Ve = v()(
      (En =
        En ||
        C(
          [
            '\n    query itemReplacedBy($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      id\n      replacedBy {\n        __typename\n        id\n        name\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query itemReplacedBy($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      id\n      replacedBy {\n        __typename\n        id\n        name\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function ze(e) {
      return b.useQuery(Ve, e);
    }
    var qe = v()(
      (_n =
        _n ||
        C(
          [
            '\n    query ItemReplaces($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      replaces\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ItemReplaces($id: ID!) {\n  item(id: $id) {\n    ... on Item {\n      __typename\n      id\n      replaces\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function He(e) {
      return b.useQuery(qe, e);
    }
    var $e = v()(
      (An =
        An ||
        C(
          [
            '\n    query ItemsClassifications($itemsIds: [ID!]!) {\n  items(ids: $itemsIds) {\n    ... on Item {\n      id\n      classifications {\n        code\n        values {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ItemsClassifications($itemsIds: [ID!]!) {\n  items(ids: $itemsIds) {\n    ... on Item {\n      id\n      classifications {\n        code\n        values {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Qe(e) {
      return b.useQuery($e, e);
    }
    v()(
      (Sn =
        Sn ||
        C(
          [
            '\n    query NetPrice($id: ID!, $quantity: Float!) {\n  netPrice(itemId: $id, quantity: $quantity) {\n    quantity\n    currency\n    value\n  }\n}\n    ',
          ],
          [
            '\n    query NetPrice($id: ID!, $quantity: Float!) {\n  netPrice(itemId: $id, quantity: $quantity) {\n    quantity\n    currency\n    value\n  }\n}\n    ',
          ]
        ))
    );
    v()(
      (kn =
        kn ||
        C(
          [
            '\n    query organizationSettings {\n  organizationSettings {\n    canCheckout\n  }\n}\n    ',
          ],
          [
            '\n    query organizationSettings {\n  organizationSettings {\n    canCheckout\n  }\n}\n    ',
          ]
        ))
    );
    var xe = v()(
      (Dn =
        Dn ||
        C(
          [
            '\n    query Permissions {\n  permissions {\n    shoppingCart\n    addToCart\n    favorite\n    addToFavorite\n    netPrice\n    grossPrice\n    discountCodes\n    volumeDiscount\n    deliveryTimes\n    submitCart\n    submitCartExternally\n  }\n}\n    ',
          ],
          [
            '\n    query Permissions {\n  permissions {\n    shoppingCart\n    addToCart\n    favorite\n    addToFavorite\n    netPrice\n    grossPrice\n    discountCodes\n    volumeDiscount\n    deliveryTimes\n    submitCart\n    submitCartExternally\n  }\n}\n    ',
          ]
        ))
    );
    function We(e) {
      return b.useQuery(xe, e);
    }
    v()(
      (Rn =
        Rn ||
        C(
          [
            '\n    query PermissionsAndPreferences {\n  permissions {\n    shoppingCart\n    addToCart\n    favorite\n    addToFavorite\n    netPrice\n    grossPrice\n    discountCodes\n    volumeDiscount\n    deliveryTimes\n    submitCart\n  }\n  preferences {\n    showNetPrice\n  }\n}\n    ',
          ],
          [
            '\n    query PermissionsAndPreferences {\n  permissions {\n    shoppingCart\n    addToCart\n    favorite\n    addToFavorite\n    netPrice\n    grossPrice\n    discountCodes\n    volumeDiscount\n    deliveryTimes\n    submitCart\n  }\n  preferences {\n    showNetPrice\n  }\n}\n    ',
          ]
        ))
    );
    var Ke = v()(
      (Fn =
        Fn ||
        C(
          [
            '\n    query preferences {\n  preferences {\n    showNetPrice\n  }\n}\n    ',
          ],
          [
            '\n    query preferences {\n  preferences {\n    showNetPrice\n  }\n}\n    ',
          ]
        ))
    );
    function Ye(e) {
      return b.useQuery(Ke, e);
    }
    var Ze = v()(
      (Ln =
        Ln ||
        C(
          [
            '\n    query GetProductGroupEntries($id: ID!, $page: Int!, $pageSize: Int!, $facetValues: FacetValuesInput) {\n  category(id: $id) {\n    id\n    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n      entries {\n        __typename\n        ... on Component {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n        ... on Variant {\n          id\n          name\n          description\n          brand {\n            id\n            name\n          }\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n        ... on Item {\n          id\n          itemName: name\n          itemDescription: description\n          brand {\n            id\n            name\n          }\n          classifications {\n            code\n            values {\n              key\n              value\n            }\n          }\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query GetProductGroupEntries($id: ID!, $page: Int!, $pageSize: Int!, $facetValues: FacetValuesInput) {\n  category(id: $id) {\n    id\n    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) {\n      pagination {\n        page\n        totalPages\n        totalResults\n      }\n      entries {\n        __typename\n        ... on Component {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n        ... on Variant {\n          id\n          name\n          description\n          brand {\n            id\n            name\n          }\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n        ... on Item {\n          id\n          itemName: name\n          itemDescription: description\n          brand {\n            id\n            name\n          }\n          classifications {\n            code\n            values {\n              key\n              value\n            }\n          }\n          groupedAssets {\n            images {\n              id\n              description\n              usage\n              customSizes {\n                key\n                value\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function Je(e) {
      return b.useQuery(Ze, e);
    }
    var Xe = v()(
      (jn =
        jn ||
        C(
          [
            '\n    query ProductGroupNavigation($categoryId: ID!, $entryId: ID!) {\n  category(id: $categoryId) {\n    id\n    entries_navigation(entry_id: $entryId) {\n      previous {\n        __typename\n        ... on Variant {\n          variantId: id\n          variantName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Component {\n          componentId: id\n          componentName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Item {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n      }\n      next {\n        __typename\n        ... on Variant {\n          variantId: id\n          variantName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Component {\n          componentId: id\n          componentName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Item {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query ProductGroupNavigation($categoryId: ID!, $entryId: ID!) {\n  category(id: $categoryId) {\n    id\n    entries_navigation(entry_id: $entryId) {\n      previous {\n        __typename\n        ... on Variant {\n          variantId: id\n          variantName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Component {\n          componentId: id\n          componentName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Item {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n      }\n      next {\n        __typename\n        ... on Variant {\n          variantId: id\n          variantName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Component {\n          componentId: id\n          componentName: name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n        ... on Item {\n          id\n          name\n          groupedAssets {\n            images {\n              id\n              resourceLocation\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function et(e) {
      return b.useQuery(Xe, e);
    }
    v()(
      (Un =
        Un ||
        C(
          [
            '\n    query getQuotationById($id: ID!) {\n  quotation(id: $id) {\n    ...QuotationBase\n    ...QuotationPriceSummary\n    quotationLines {\n      __typename\n      ... on QuotationLine {\n        ...QuotationLineWithPrices\n      }\n    }\n  }\n}\n    ',
            '\n',
            '\n',
            '',
          ],
          [
            '\n    query getQuotationById($id: ID!) {\n  quotation(id: $id) {\n    ...QuotationBase\n    ...QuotationPriceSummary\n    quotationLines {\n      __typename\n      ... on QuotationLine {\n        ...QuotationLineWithPrices\n      }\n    }\n  }\n}\n    ',
            '\n',
            '\n',
            '',
          ]
        )),
      R,
      F,
      k
    );
    var tt = v()(
      (wn =
        wn ||
        C(
          [
            '\n    query Quotations {\n  quotations {\n    ...QuotationBase\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query Quotations {\n  quotations {\n    ...QuotationBase\n  }\n}\n    ',
            '',
          ]
        )),
      R
    );
    v()(
      (Nn =
        Nn ||
        C(
          [
            '\n    query TopCategories($depth: Int!) {\n  categoryHierarchy(depth: $depth) {\n    id\n    name\n  }\n}\n    ',
          ],
          [
            '\n    query TopCategories($depth: Int!) {\n  categoryHierarchy(depth: $depth) {\n    id\n    name\n  }\n}\n    ',
          ]
        ))
    );
    var nt = v()(
      (Mn =
        Mn ||
        C(
          [
            '\n    query VariantAttributes($id: ID!) {\n  variant(id: $id) {\n    id\n    groupedAssets {\n      images {\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n    }\n    displayableAttributes {\n      ...AttributeValue\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query VariantAttributes($id: ID!) {\n  variant(id: $id) {\n    id\n    groupedAssets {\n      images {\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n    }\n    displayableAttributes {\n      ...AttributeValue\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      P
    );
    function rt(e) {
      return b.useQuery(nt, e);
    }
    var at = v()(
      (Bn =
        Bn ||
        C(
          [
            '\n    query getVariantImages($id: ID!) {\n  variant(id: $id) {\n    id\n    groupedAssets {\n      images {\n        id\n        usage\n        description\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n      videos {\n        id\n        usage\n        resourceLocation\n        description\n        usage\n      }\n    }\n    defining_attributes {\n      id\n      dataType\n      description\n      unit {\n        id\n        content\n        symbol\n      }\n    }\n    displayableAttributes {\n      ...AttributeValue\n    }\n    descriptive_attribute_values {\n      ...AttributeValue\n    }\n  }\n}\n    ',
            '',
          ],
          [
            '\n    query getVariantImages($id: ID!) {\n  variant(id: $id) {\n    id\n    groupedAssets {\n      images {\n        id\n        usage\n        description\n        customSizes {\n          key\n          value\n        }\n        attributeMappings {\n          symbol\n          attributeIds\n        }\n      }\n      videos {\n        id\n        usage\n        resourceLocation\n        description\n        usage\n      }\n    }\n    defining_attributes {\n      id\n      dataType\n      description\n      unit {\n        id\n        content\n        symbol\n      }\n    }\n    displayableAttributes {\n      ...AttributeValue\n    }\n    descriptive_attribute_values {\n      ...AttributeValue\n    }\n  }\n}\n    ',
            '',
          ]
        )),
      P
    );
    function ot(e) {
      return b.useQuery(at, e);
    }
    var it = v()(
      (Gn =
        Gn ||
        C(
          [
            '\n    query getVariantName($id: ID!) {\n  variant(id: $id) {\n    id\n    name\n  }\n}\n    ',
          ],
          [
            '\n    query getVariantName($id: ID!) {\n  variant(id: $id) {\n    id\n    name\n  }\n}\n    ',
          ]
        ))
    );
    function st(e) {
      return b.useQuery(it, e);
    }
    var ut = v()(
      (Vn =
        Vn ||
        C(
          [
            '\n    query VariantPage($id: ID!) {\n  variant(id: $id) {\n    id\n    name\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    groupedAssets {\n      documents {\n        id\n        description\n        resourceLocation\n        usage\n      }\n      safetySheets {\n        id\n        description\n        resourceLocation\n        usage\n      }\n    }\n  }\n}\n    ',
          ],
          [
            '\n    query VariantPage($id: ID!) {\n  variant(id: $id) {\n    id\n    name\n    brand {\n      id\n      name\n      logo {\n        src\n        alt\n      }\n    }\n    groupedAssets {\n      documents {\n        id\n        description\n        resourceLocation\n        usage\n      }\n      safetySheets {\n        id\n        description\n        resourceLocation\n        usage\n      }\n    }\n  }\n}\n    ',
          ]
        ))
    );
    function ct(e) {
      return b.useQuery(ut, e);
    }
    var dt = v()(
      (zn =
        zn ||
        C(
          [
            '\n    query VariantTable($id: ID!, $page: Int!, $pageSize: Int!, $hasGrossPricePermission: Boolean = false, $hasVolumeDiscountPermission: Boolean = false) {\n  variant(id: $id) {\n    id\n    name\n    items(page: $page, pageSize: $pageSize) {\n      pagination {\n        page\n        totalPages\n      }\n      items {\n        ...ItemBase\n        quantity\n        quantityUnit {\n          id\n          content\n          symbol\n        }\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        grossPrice @include(if: $hasGrossPricePermission) {\n          currency\n          value\n        }\n        hasVolumeDiscount @include(if: $hasVolumeDiscountPermission)\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n        displayableAttributes {\n          ...AttributeValue\n        }\n        groupedAssets {\n          images {\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ],
          [
            '\n    query VariantTable($id: ID!, $page: Int!, $pageSize: Int!, $hasGrossPricePermission: Boolean = false, $hasVolumeDiscountPermission: Boolean = false) {\n  variant(id: $id) {\n    id\n    name\n    items(page: $page, pageSize: $pageSize) {\n      pagination {\n        page\n        totalPages\n      }\n      items {\n        ...ItemBase\n        quantity\n        quantityUnit {\n          id\n          content\n          symbol\n        }\n        brand {\n          id\n          name\n          logo {\n            src\n            alt\n          }\n        }\n        grossPrice @include(if: $hasGrossPricePermission) {\n          currency\n          value\n        }\n        hasVolumeDiscount @include(if: $hasVolumeDiscountPermission)\n        classifications {\n          code\n          values {\n            key\n            value\n          }\n        }\n        displayableAttributes {\n          ...AttributeValue\n        }\n        groupedAssets {\n          images {\n            attributeMappings {\n              symbol\n              attributeIds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ',
            '\n',
            '',
          ]
        )),
      _,
      P
    );
    function lt(e) {
      return b.useQuery(dt, e);
    }
    var pt,
      mt,
      gt,
      ft,
      yt,
      ht,
      vt,
      bt,
      Ct,
      Pt,
      It,
      Ot,
      Tt,
      Et,
      _t,
      At,
      St,
      kt,
      Dt,
      Rt,
      Ft,
      Lt,
      jt,
      Ut,
      wt,
      Nt,
      Mt,
      Bt,
      Gt,
      Vt,
      zt,
      qt,
      Ht,
      $t,
      Qt,
      xt,
      Wt,
      Kt,
      Yt,
      Zt,
      Jt,
      Xt,
      en,
      tn,
      nn,
      rn,
      an,
      on,
      sn,
      un,
      cn,
      dn,
      ln,
      pn,
      mn,
      gn,
      fn,
      yn,
      hn,
      vn,
      bn,
      Cn,
      Pn,
      In,
      On,
      Tn,
      En,
      _n,
      An,
      Sn,
      kn,
      Dn,
      Rn,
      Fn,
      Ln,
      jn,
      Un,
      wn,
      Nn,
      Mn,
      Bn,
      Gn,
      Vn,
      zn,
      qn,
      Hn = v()(
        (qn =
          qn ||
          C(
            [
              '\n    query Wishlists {\n  wishlists {\n    ...WishListBase\n  }\n}\n    ',
              '',
            ],
            [
              '\n    query Wishlists {\n  wishlists {\n    ...WishListBase\n  }\n}\n    ',
              '',
            ]
          )),
        U
      );
  },
  20: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return s;
    }),
      n.d(t, 'b', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return c;
      }),
      n.d(t, 'e', function () {
        return d;
      }),
      n.d(t, 'a', function () {
        return l;
      });
    function r(e) {
      return e.ui;
    }
    var a = n(16),
      o = n(8),
      i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      s =
        (Object(a.a)([r], function (e) {
          return e.reloadUrl;
        }),
        Object(a.a)([r], function (e) {
          var t = e.locale;
          return new o.Locale(t.country, t.language);
        })),
      u =
        (Object(a.a)([r], function (e) {
          return e.countries;
        }),
        Object(a.a)([r], function (e) {
          return e.isHeaderBottomMenuOpen;
        })),
      c = Object(a.a)([r], function (e) {
        return e.isUnauthorizedDialogOpen;
      }),
      d = Object(a.a)([r], function (e) {
        var t = e.miniCart,
          n = e.quotation;
        return i(i({}, t), {
          id: n.details.id || '',
          count: n.details.count || 0,
        });
      }),
      l = Object(a.a)([r], function (e) {
        return e.bodyOverlayActive;
      });
    Object(a.a)([r], function (e) {
      return e.quotationForm;
    });
  },
  201: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var r = {
      country: 'de',
      language: 'en',
    };
  },
  202: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(99),
      a = n(51),
      o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      i = {
        isAuthenticated: !1,
        permissions: {
          ShoppingCart: !1,
          AddToCart: !1,
          SubmitCart: !1,
          Favorite: !1,
          AddToFavorite: !1,
          NetPrice: !1,
          GrossPrice: !1,
          DiscountCodes: !1,
          VolumeDiscount: !1,
          DeliveryTimes: !1,
        },
      };
    t.b = Object(a.a)('auth', function (e, t) {
      switch ((void 0 === e && (e = i), t.type)) {
        case r.a.LOG_IN:
          return o(o({}, e), {
            isAuthenticated: t.payload.isAuthenticated,
          });
        case r.a.LOG_OUT_SUCCESS:
          return o({}, e);
        default:
          return e;
      }
    });
  },
  203: function (e, t, n) {
    e.exports = {
      app: '_3wIebBWw',
      'app__main-container': '-mz0NZ45',
      appMainContainer: '-mz0NZ45',
      'app__loading-in-background-layer': 'MZFBDW4g',
      appLoadingInBackgroundLayer: 'MZFBDW4g',
      overlay: '_3FwfsQmA',
      container: '_2AXSUOOQ',
      'app-locked-layer': '_2Y8cYs8x',
      appLockedLayer: '_2Y8cYs8x',
    };
  },
  204: function (e, t, n) {
    e.exports = {
      link: '_2xKK0TNH',
      'link--has-icon': '_3PLQOsAP',
      linkHasIcon: '_3PLQOsAP',
      'chevron-wrapper': '_1pbsSeAq',
      chevronWrapper: '_1pbsSeAq',
      'chevron-wrapper--after': '_2tmCG1IW',
      chevronWrapperAfter: '_2tmCG1IW',
      icon: '_1p2cKXSd',
      'link--disabled': '_1xPcW8vo',
      linkDisabled: '_1xPcW8vo',
    };
  },
  210: function (e, t, n) {
    'use strict';
    var r, a;
    n.d(t, 'a', function () {
      return r;
    }),
      ((a = r = r || {}).ADVISORY = 'advisory'),
      (a.RETURNABLE = 'returnable');
  },
  217: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return i;
      });
    function r(e) {
      return e.auth;
    }
    var a = n(16),
      o = Object(a.a)([r], function (e) {
        return e.isAuthenticated;
      }),
      i = Object(a.a)([r], function (e) {
        return e;
      });
  },
  22: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return m;
    }),
      n.d(t, 'a', function () {
        return g;
      }),
      n.d(t, 'b', function () {
        return f;
      }),
      n.d(t, 'c', function () {
        return y;
      }),
      n.d(t, 'g', function () {
        return h;
      }),
      n.d(t, 'h', function () {
        return v;
      }),
      n.d(t, 'e', function () {
        return b;
      }),
      n.d(t, 'i', function () {
        return C;
      }),
      n.d(t, 'j', function () {
        return P;
      }),
      n.d(t, 'f', function () {
        return I;
      });
    var r,
      i = n(32),
      a = n(13),
      o = n(146),
      s = n(271),
      u = n(141),
      c = n(73),
      d = n(127),
      l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      p = function () {
        return (r = r || {
          'app-name': d.a
            .getCorporateIdentityFromDomain(window.location.hostname)
            .toUpperCase(),
          'app-version': 'search-products-v3.0.49',
          'gdpr-level': Object(s.a)(),
        });
      },
      m = function (e, t) {
        var n;
        if (e.pageType === a.a.CATEGORY)
          n = e.products.allIds.findIndex(function (e) {
            return e === t;
          });
        else if (e.pageType === a.a.SEARCH)
          n = e.products.allIds.findIndex(function (e) {
            return e === t;
          });
        else if (e.pageType === a.a.PRODUCT) {
          e.productId === t && (n = 0);
        } else
          e.pageType === a.a.PRODUCT_GROUP &&
            (n = e.products.allIds.findIndex(function (e) {
              return e === t;
            }));
        return '' + (n ? n + 1 : 1);
      },
      g = function (e, t) {
        return {
          'login-status': e ? 'logged in' : 'logged out',
          userId: t ? t.userId : '',
          dealerId: t ? t.dealerId : '',
          uniqueCustomerId: t ? t.uniqueCustomerId : '',
        };
      },
      f = function (e, t, n, r, a, o) {
        return l(
          l(l(l({}, p()), g(e, r)), {
            event: i.c.PAGE_VIEW,
            pathname: window.location.pathname,
            country: t.countryLabel(),
            langshopId: t.format(),
            breadcrumb: '',
            shoppingcartId: o.id,
            'page-type': n,
            'filter-shown': void 0,
          }),
          C(a.gtm.searchId, n)
        );
      },
      y = function (e) {
        return {
          breadcrumb:
            e && !Object(o.a)(e)
              ? e
                  .map(function (e) {
                    return e.text;
                  })
                  .join(' > ')
              : null,
        };
      },
      h = function (e, t, n, r) {
        return (
          void 0 === t && (t = null),
          void 0 === r && (r = []),
          l(
            {},
            Object(u.c)(
              {
                name: e.name || '',
                id: e.id || '',
                price: e.grossPrice || null,
                brand: e.brand ? e.brand.name : '',
                category: t ? t.id : '',
                variant: Object(u.a)(e),
                quantity: e.quantity || null,
                position: '' + (n ? n + 1 : 1),
              },
              r
            )
          )
        );
      },
      v = function (r, a, o) {
        return (
          void 0 === a && (a = null),
          void 0 === o && (o = []),
          r && r.allIds
            ? r.allIds.map(function (e, t) {
                var n = r.byId[e];
                return n ? h(n, a, t, o) : {};
              })
            : []
        );
      },
      b = function (e) {
        return e &&
          e.allIds.length &&
          e.byId[e.allIds[0]] &&
          e.byId[e.allIds[0]].currency
          ? e.byId[e.allIds[0]].currency
          : '';
      },
      C = function (e, t) {
        return !e || (t !== a.a.SEARCH && t !== a.a.PRODUCT)
          ? {
              searchId: void 0,
            }
          : {
              searchId: e,
            };
      },
      P = function (e) {
        return e !== a.a.SEARCH
          ? {
              searchId: void 0,
            }
          : null;
      },
      I = function (e) {
        if (e) {
          var t = e
            .filter(function (e) {
              return ![c.c, c.a, c.b].includes(e.id);
            })
            .map(function (e) {
              return e.id;
            })
            .join(';');
          return 0 < t.length ? t : void 0;
        }
      };
  },
  23: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'd', function () {
        return i;
      }),
      n.d(t, 'c', function () {
        return s;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'j', function () {
        return c;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'f', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'g', function () {
        return m;
      }),
      n.d(t, 'i', function () {
        return g;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).FETCH_PAGE = '[frontend/pages]/FETCH_PAGE'),
      (a.FETCH_PAGE_FAILED = '[frontend/pages]/FETCH_PAGE_FAILED'),
      (a.FETCH_PAGE_SUCCESS = '[frontend/pages]/FETCH_PAGE_SUCCESS'),
      (a.SET_CURRENT_URL = '[frontend/pages]/SET_CURRENT_URL'),
      (a.SET_LOADING_IN_BACKGROUND =
        '[frontend/pages]/SET_LOADING_IN_BACKGROUND'),
      (a.FETCH_OR_SET_PAGE = '[frontend/pages]/FETCH_OR_SET_PAGE'),
      (a.SET_OPEN_MODAL_ID = '[frontend/pages]/SET_OPEN_MODAL_ID'),
      (a.LOCATION_RELOADED = '[frontend/pages]/LOCATION_RELOADED');
    var i = Object(o.a)(r.FETCH_PAGE),
      s = Object(o.a)(r.FETCH_OR_SET_PAGE),
      u = 'FacetGroupModal',
      c = Object(o.a)(r.SET_OPEN_MODAL_ID),
      d = Object(o.a)(r.SET_LOADING_IN_BACKGROUND),
      l = Object(o.a)(r.FETCH_PAGE_SUCCESS),
      p = Object(o.a)(r.FETCH_PAGE_FAILED),
      m = Object(o.a)(r.SET_CURRENT_URL),
      g = Object(o.a)(r.LOCATION_RELOADED);
  },
  24: function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'h', function () {
        return u;
      }),
      n.d(t, 'g', function () {
        return c;
      }),
      n.d(t, 'a', function () {
        return i;
      }),
      n.d(t, 'f', function () {
        return p;
      }),
      n.d(t, 'e', function () {
        return m;
      }),
      n.d(t, 'd', function () {
        return d;
      }),
      n.d(t, 'i', function () {
        return f;
      }),
      n.d(t, 'j', function () {
        return y;
      }),
      n.d(t, 'b', function () {
        return g;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).FETCH_NET_PRICE =
      '[frontend/normalizedState]/FETCH_NET_PRICE'),
      (a.FETCH_NET_PRICE_SUCCESS =
        '[frontend/normalizedState]/FETCH_NET_PRICE_SUCCESS'),
      (a.FETCH_NET_PRICE_FAILED =
        '[frontend/normalizedState]/FETCH_NET_PRICE_FAILED'),
      (a.CLEAR_NET_PRICES = '[frontend/normalizedState]CLEAR_NET_PRICES');
    Object(o.a)(r.FETCH_NET_PRICE);
    var i,
      s,
      u = Object(o.a)(r.FETCH_NET_PRICE_SUCCESS),
      c = Object(o.a)(r.FETCH_NET_PRICE_FAILED);
    Object(o.a)(r.CLEAR_NET_PRICES);
    ((s = i = i || {}).FETCH_DISCOUNT_CODE =
      '[frontend/normalizedState]/FETCH_DISCOUNT_CODE'),
      (s.FETCH_DISCOUNT_CODE_SUCCESS =
        '[frontend/normalizedState]/FETCH_DISCOUNT_CODE_SUCCESS'),
      (s.FETCH_DISCOUNT_CODE_FAILED =
        '[frontend/normalizedState]/FETCH_DISCOUNT_CODE_FAILED');
    Object(o.a)(i.FETCH_DISCOUNT_CODE);
    var d,
      l,
      p = Object(o.a)(i.FETCH_DISCOUNT_CODE_SUCCESS),
      m = Object(o.a)(i.FETCH_DISCOUNT_CODE_FAILED);
    ((l = d = d || {}).SET_PRODUCT_QUANTITY =
      '[frontend/normalizedState]/SET_PRODUCT_QUANTITY'),
      (l.WARN_PRODUCT_QUANTITY_ROUNDED =
        '[frontend/normalizedState]/WARN_PRODUCT_QUANTITY_ROUNDED'),
      (l.CLEAR_PRODUCT_QUANTITY_ROUNDED =
        '[frontend/normalizedState]/CLEAR_PRODUCT_QUANTITY_ROUNDED');
    var g,
      f = Object(o.a)(d.SET_PRODUCT_QUANTITY),
      y = Object(o.a)(d.WARN_PRODUCT_QUANTITY_ROUNDED);
    Object(o.a)(d.CLEAR_PRODUCT_QUANTITY_ROUNDED);
    (g || (g = {})).CLEAR_ERROR = '[frontend/normalizedState]/CLEAR_ERROR';
    Object(o.a)(g.CLEAR_ERROR);
  },
  270: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return a;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = n(16),
      a = function (e) {
        return e.search;
      },
      o = Object(r.a)([a], function (e) {
        return e.autoCompleteOpen;
      });
  },
  271: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(112),
      a = n(58),
      o = n.n(a);
    function i() {
      return o.a.get(r.e) || r.b;
    }
  },
  276: function (e, t, n) {
    'use strict';
    function r(e) {
      return e.router;
    }
    function a(e) {
      var t = e.className,
        n = e.size,
        r = void 0 === n ? 'large' : n;
      return s.createElement(
        'div',
        {
          className: y.cPageLoader,
        },
        s.createElement(h.UILoader, {
          className: t,
          size: r,
        })
      );
    }
    var o,
      i,
      s = n(0),
      u = n(30),
      c = n(81),
      d = n(86),
      l = n(23),
      p = n(16),
      m = Object(p.a)([r], function (e) {
        var t = e.location;
        return encodeURI(t.pathname) + t.search;
      }),
      g =
        (Object(p.a)([r], function (e) {
          return e.location.search;
        }),
        Object(p.a)([r], function (e) {
          var t = e.location;
          return '' + t.pathname + t.search;
        }),
        n(40)),
      f = n(12),
      y = n(508),
      h = n(8),
      v = n(128),
      b = n(62),
      C = n(13),
      P =
        ((o = function (e, t) {
          return (o =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          o(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      I = function () {
        return (I =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      O =
        ((i = s.Component),
        P(T, i),
        (T.prototype.isNotFoundStatus = function () {
          return 404 === this.props.pageStatus;
        }),
        (T.prototype.isErrorStatus = function () {
          return 200 !== this.props.pageStatus && !this.isNotFoundStatus();
        }),
        (T.prototype.componentDidMount = function () {
          this.props.shouldReload &&
            (this.props.setLocationReloaded(null), document.location.reload()),
            this.props.routerUrl !== this.props.currentUrl &&
              this.props.fetchPage({
                pageType: this.props.pageType,
                pageArguments: this.props.derivedPageArguments(
                  this.props.match,
                  Object(b.b)(this.props.location.search)
                ),
              }),
            this.props.routerUrl === this.props.currentUrl &&
              this.props.pageFinishedRender(null);
        }),
        (T.prototype.componentDidUpdate = function (e) {
          var t = this.props.location.key !== e.location.key;
          e.routerUrl !== this.props.routerUrl || t
            ? this.props.currentUrl !== this.props.routerUrl &&
              this.props.fetchPage({
                pageType: this.props.pageType,
                pageArguments: this.props.derivedPageArguments(
                  this.props.match,
                  Object(b.b)(this.props.location.search)
                ),
              })
            : e.currentUrl !== this.props.currentUrl &&
              this.props.routerUrl !== this.props.currentUrl &&
              (e.routerPageType !== this.props.routerPageType
                ? this.props.history.push(this.props.currentUrl)
                : this.props.history.replace(this.props.currentUrl)),
            this.state.loading ||
              (this.props.currentUrl !== this.state.lastCurrentUrl &&
                this.props.routerUrl === this.props.currentUrl &&
                (this.setState({
                  lastCurrentUrl: this.props.currentUrl,
                }),
                'PUSH' === this.props.history.action &&
                  this.props.pageFinishedRender(null)));
        }),
        (T.getDerivedStateFromProps = function (e, t) {
          var n = e.pageStatus,
            r = e.routerUrl,
            a = e.currentUrl,
            o = e.pageData,
            i = e.pageType,
            s = e.routerPageType;
          if (301 === n)
            return {
              loading: !0,
            };
          if ((500 === n || 404 === n) && r !== a)
            return {
              loading: !0,
            };
          if (t.loading) {
            if (r === a)
              return {
                loading: !1,
              };
          } else if (r !== a || o.pageType !== s)
            return {
              loading: i !== C.a.NOT_FOUND && o.pageType !== C.a.NOT_FOUND,
            };
          return {};
        }),
        (T.prototype.render = function () {
          if (this.state.loading && !this.props.loadingInBackground)
            return s.createElement(a, null);
          if (this.props.pageType === C.a.NOT_FOUND)
            return s.createElement(v.a, null);
          if (this.isErrorStatus()) return s.createElement(v.a, null);
          if (this.isNotFoundStatus()) return s.createElement(v.a, null);
          var e = this.props.component;
          return s.createElement(e, I({}, this.props));
        }),
        T);
    function T() {
      var e = (null !== i && i.apply(this, arguments)) || this;
      return (
        (e.state = {
          loading: !1,
          lastCurrentUrl: '',
        }),
        e
      );
    }
    t.a = Object(d.connect)(
      function (e) {
        return {
          routerUrl: m(e),
          currentUrl: Object(g.a)(e),
          loadingInBackground: Object(g.c)(e),
          pagesHistory: Object(g.b)(e),
          pageData: Object(g.e)(e),
          pageStatus: Object(g.f)(e),
          routerPageType: Object(g.g)(e),
          shouldReload: Object(g.j)(e),
        };
      },
      function (e) {
        return Object(c.b)(
          {
            fetchPage: l.d,
            setCurrentUrl: l.g,
            setLocationReloaded: l.i,
            pageFinishedRender: f.j,
          },
          e
        );
      }
    )(Object(u.withRouter)(O));
  },
  281: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return f;
    }),
      n.d(t, 'c', function () {
        return h;
      }),
      n.d(t, 'b', function () {
        return r;
      });
    function l(e) {
      return JSON.parse(localStorage.getItem(e) || '{}');
    }
    var p = n(8),
      m = function () {
        return (m =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      g = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      },
      f = 'LOCALE_DATA_KEY',
      y = 'recentlyViewedItems',
      h = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      },
      r = function (e) {
        var t,
          n,
          r,
          a = l(f),
          o = new p.Locale(a.country, a.language),
          i = {
            brand: e.brand && {
              id: e.brand.id,
              logo: e.brand &&
                e.brand.logo && {
                  alt: e.brand.logo.alt,
                  src: e.brand.logo.small,
                },
              name: e.brand.name,
            },
            description: e.description,
            href: e.href,
            id: e.id,
            name: e.name,
            type: e.type,
            image: e.image && {
              alt: e.image.alt,
              src: e.image.small,
            },
          },
          s = o.format(),
          u = l(y);
        if (u[s]) {
          var c = u[s],
            d = c.findIndex(function (e) {
              return e.id === i.id;
            });
          0 !== d && (-1 < d && c.splice(d, 1), c.unshift(i), c.splice(14)),
            (r = m(
              m({}, Array.isArray(u) ? {} : u),
              (((t = {})[s] = g(c)), t)
            ));
        } else
          r = m(m({}, Array.isArray(u) ? {} : u), (((n = {})[s] = [i]), n));
        h(y, r);
      };
  },
  32: function (e, t, n) {
    'use strict';
    var r, a;
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return m;
      }),
      n.d(t, 'a', function () {
        return o;
      }),
      n.d(t, 'd', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return l;
      }),
      ((a = r = r || {}).PAGE_VIEW = 'VirtualPageView'),
      (a.PRODUCT_CLICK = 'productClick'),
      (a.DISCOUNT_CODE_CLICK = 'discount-check'),
      (a.PRODUCT_IMPRESSION = 'productImpression'),
      (a.ADD_TO_CART = 'addToCart'),
      (a.ADD_TO_FAVORITE = 'atf'),
      (a.FILTER_CATEGORY = 'filter'),
      (a.VIEW_CHANGE = 'view-change'),
      (a.NET_PRICE_CHECK = 'npc'),
      (a.GET_DELIVERY_TIMES = 'atp'),
      (a.SEARCH_ACTION = 'search-action'),
      (a.OUTBOUND_LINK_CLICK = 'outboundLink'),
      (a.COUNTRY_SWITCH = 'country-switch');
    var o,
      i,
      s,
      u,
      c,
      d,
      l,
      p,
      m = [
        'searchId',
        'search-bar',
        'search-method',
        'search-query',
        'search-results',
        'search-type',
        'ecommerce',
        'click-position',
      ];
    ((i = o = o || {}).STOCK_ITEM = 'stock item'),
      (i.CONFIGURE_ITEM = 'configured item'),
      (i.XA_ITEM = 'xa item'),
      ((u = s = s || {}).GENERAL = 'general'),
      (u.CATEGORY = 'category'),
      (u.BRAND = 'brand'),
      ((d = c = c || {}).TERM_SEARCH = 'term search'),
      (d.PART_NUMBER_SEARCH = 'partNumber search'),
      ((p = l = l || {}).TERM = 'term'),
      (p.SUGGESTED_TERM = 'suggestion-term'),
      (p.SUGGESTED_PART_NUMBER = 'suggestion-partNumber'),
      (p.SUGGESTED_CATEGORY = 'suggestion-category'),
      (p.SUGGESTED_BRAND = 'suggestion-brand');
  },
  341: function (e, t, n) {
    e.exports = {
      'dialog-modal__background': '_198OB0-i',
      dialogModalBackground: '_198OB0-i',
      'dialog-modal__content-wrapper': 'ft5HzQx_',
      dialogModalContentWrapper: 'ft5HzQx_',
      'dialog-modal__header': 'KknUyc43',
      dialogModalHeader: 'KknUyc43',
      'dialog-modal__content': '_3XuJRFLp',
      dialogModalContent: '_3XuJRFLp',
    };
  },
  342: function (e, t, n) {
    e.exports = {
      'c-unauthorized-dialog__body': '_2F2S7qsj',
      cUnauthorizedDialogBody: '_2F2S7qsj',
      'c-unauthorized-dialog__button': 'l1PKwVSd',
      cUnauthorizedDialogButton: 'l1PKwVSd',
    };
  },
  343: function (e, t, n) {
    e.exports = {
      'c-background-loader': '_25n7CmMj',
      cBackgroundLoader: '_25n7CmMj',
      'c-background-loader__spinner-container': 'FC5L8qSp',
      cBackgroundLoaderSpinnerContainer: 'FC5L8qSp',
    };
  },
  346: function (e) {
    e.exports = {
      __schema: {
        types: [
          {
            kind: 'UNION',
            name: 'ItemUnion',
            possibleTypes: [
              {
                name: 'Item',
              },
              {
                name: 'ConfigurableItem',
              },
              {
                name: 'EntityNotFound',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'FeatureEnabled',
            possibleTypes: [
              {
                name: 'FeatureEnabledSimple',
              },
              {
                name: 'FeatureEnabledComplex',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'QuotationLineUnion',
            possibleTypes: [
              {
                name: 'QuotationLine',
              },
              {
                name: 'QuotationLineReplaced',
              },
              {
                name: 'QuotationLineDeleted',
              },
            ],
          },
          {
            kind: 'INTERFACE',
            name: 'IQuotationLine',
            possibleTypes: [
              {
                name: 'QuotationLine',
              },
              {
                name: 'QuotationLineReplaced',
              },
              {
                name: 'QuotationLineDeleted',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'QuotationLineItemUnion',
            possibleTypes: [
              {
                name: 'Item',
              },
              {
                name: 'ConfigurableItem',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'WishlistLineUnion',
            possibleTypes: [
              {
                name: 'WishlistLine',
              },
              {
                name: 'WishlistLineReplaced',
              },
              {
                name: 'WishlistLineDeleted',
              },
            ],
          },
          {
            kind: 'INTERFACE',
            name: 'IWishlistLine',
            possibleTypes: [
              {
                name: 'WishlistLine',
              },
              {
                name: 'WishlistLineReplaced',
              },
              {
                name: 'WishlistLineDeleted',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'CategoryEntry',
            possibleTypes: [
              {
                name: 'Item',
              },
              {
                name: 'Variant',
              },
              {
                name: 'Component',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'FacetValues',
            possibleTypes: [
              {
                name: 'RangeFacetValues',
              },
              {
                name: 'ValueFacetValues',
              },
            ],
          },
          {
            kind: 'UNION',
            name: 'FilterValue',
            possibleTypes: [
              {
                name: 'ValueFilter',
              },
              {
                name: 'ValuesFilter',
              },
              {
                name: 'RangeFilter',
              },
            ],
          },
        ],
      },
    };
  },
  347: function (e, n, u) {
    'use strict';
    (function (r) {
      u.d(n, 'a', function () {
        return t;
      });
      function a(e) {
        var t,
          n,
          r =
            ((t = e),
            (n = s.j),
            (
              t.split(';').find(function (e) {
                return e.includes(n + '=');
              }) || ''
            )
              .split('=')
              .slice(1)
              .join('='));
        if (r) {
          var a = JSON.parse(decodeURIComponent(r));
          return {
            accountId: a.account_id,
            organizationId: a.organization_id,
          };
        }
      }
      var e = u(528),
        o = u(8),
        i = u(53),
        s = u(9),
        t = function (n) {
          return Object(e.a)(function () {
            var e;
            try {
              var t = void 0;
              if (
                (n.cookie
                  ? (t = a(n.cookie))
                  : r.browser && (t = a(window.document.cookie)),
                t)
              )
                return {
                  headers:
                    (((e = {})[i.f] = t.organizationId),
                    (e[i.a] = t.accountId),
                    e),
                };
            } catch (e) {
              o.log.error('Error setting act-as header in apollo link.', e);
            }
          });
        };
    }.call(this, u(36)));
  },
  348: function (e, t, n) {
    'use strict';
    var u = n(0),
      c = n(173),
      d = n(161),
      l = n(204),
      r = n(114),
      p = n.n(r),
      a = n(40),
      o = n(86),
      i = n(81),
      m = function () {
        return (m =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      g = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
    t.a = Object(o.connect)(
      function (e) {
        return {
          currentUrl: Object(a.a)(e),
        };
      },
      function (e) {
        return Object(i.b)({}, e);
      }
    )(function (e) {
      var t = e.href,
        n = e.children,
        r = e.className,
        a = e.currentUrl,
        o = e.enabled,
        i = g(e, ['href', 'children', 'className', 'currentUrl', 'enabled']),
        s = (t || '').split('?')[0] === a.split('?')[0];
      return Object(d.b)((t || '').split('?')[0])
        ? s && !o
          ? u.createElement(
              'span',
              m(
                {
                  className: p()(l.link, l.linkDisabled, r),
                },
                i
              ),
              n
            )
          : u.createElement(
              c.a,
              m(
                {
                  className: p()(l.link, r),
                },
                i,
                {
                  to: t,
                }
              ),
              n
            )
        : u.createElement(
            'a',
            m(
              {
                className: p()(l.link, r),
                rel: 'noopener',
              },
              i,
              {
                href: t,
              }
            ),
            n
          );
    });
  },
  350: function (e, t) {},
  351: function (e, t, n) {
    'use strict';
    var r,
      a,
      o = n(0),
      i = n(513),
      s =
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      u =
        ((a = o.Component),
        s(c, a),
        (c.prototype.render = function () {
          return o.createElement(
            'div',
            {
              className: i.dropdownModalHeader,
            },
            this.props.children
          );
        }),
        c);
    function c() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    t.a = u;
  },
  352: function (e, t, n) {
    'use strict';
    var r,
      a,
      o = n(0),
      i = n(514),
      s = n(114),
      u = n.n(s),
      c =
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      d =
        ((a = o.Component),
        c(l, a),
        (l.prototype.render = function () {
          return o.createElement(
            'div',
            {
              className: u()(i.dropdownModalBody, this.props.className),
            },
            this.props.children
          );
        }),
        l);
    function l() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    t.a = d;
  },
  353: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var o = n(517),
      r = function (e, t) {
        var n = Object(o.a)(),
          r = [],
          a = [
            {
              name: 'theme-color',
              content: n.colors.primaryColor,
            },
            {
              name: 'msapplication-TileColor',
              content: n.colors.primaryColor,
            },
          ];
        return e
          ? (e.canonicalUrl &&
              (r.push({
                rel: 'canonical',
                href: e.canonicalUrl,
              }),
              t &&
                r.push({
                  rel: 'alternate',
                  hreflang: t.format(),
                  href: e.canonicalUrl,
                }),
              e.canonicalPrevUrl &&
                r.push({
                  rel: 'prev',
                  href: e.canonicalPrevUrl,
                }),
              e.canonicalNextUrl &&
                r.push({
                  rel: 'next',
                  href: e.canonicalNextUrl,
                })),
            e.description &&
              a.push({
                name: 'description',
                content: e.description,
              }),
            e.robots &&
              a.push({
                name: 'robots',
                content: e.robots,
              }),
            {
              title: e.title,
              link: r,
              meta: a,
            })
          : {
              meta: a,
              link: r,
            };
      };
  },
  356: function (e, t, n) {
    'use strict';
    var r = n(0),
      a = n(202),
      o = Object(r.createContext)(a.a);
    n.d(t, 'a', function () {
      return i;
    });
    var i = o;
  },
  358: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(139),
      a = n(32),
      o = function (e) {
        var t = e.clickedURL,
          n = {
            event: a.c.OUTBOUND_LINK_CLICK,
            clickedURL: t,
          };
        Object(r.c)(n);
      };
  },
  359: function (e, t, n) {
    'use strict';
    function r(e, t) {
      return e % t == 0 ? e : t * Math.ceil(e / t);
    }
    function a(e, t) {
      return r(e, t);
    }
    n.d(t, 'a', function () {
      return a;
    });
  },
  37: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'g', function () {
        return i;
      }),
      n.d(t, 'f', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return d;
      }),
      n.d(t, 'd', function () {
        return l;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).UPDATE_MULTI_FACET =
      '[frontend/search]/UPDATE_MULTI_FACET'),
      (a.UPDATE_RANGE_FACET = '[frontend/search]/UPDATE_RANGE_FACET'),
      (a.UPDATE_SEARCH_TERM = '[frontend/search]/UPDATE_SEARCH_TERM'),
      (a.CLEAR_ACTIVE_FACET = '[frontend/search]/CLEAR_ACTIVE_FACET'),
      (a.CLEAR_ACTIVE_FACETS = '[frontend/search]/CLEAR_ACTIVE_FACETS'),
      (a.UPDATE_DISPLAY_MODE = '[frontend/search]/TOGGLE_DISPLAY_MODE'),
      (a.FETCH_AUTO_COMPLETE = '[frontend/search]/FETCH_AUTO_COMPLETE'),
      (a.FETCH_AUTO_COMPLETE_SUCCESS =
        '[frontend/search]/FETCH_AUTO_COMPLETE_SUCCESS'),
      (a.FETCH_AUTO_COMPLETE_FAILED =
        '[frontend/search]/FETCH_AUTO_COMPLETE_FAILED'),
      (a.TOGGLE_AUTO_COMPLETE = '[frontend/search]/TOGGLE_AUTO_COMPLETE'),
      (a.UPDATE_TRACK_DATA = '[frontend/search]/UPDATE_TRACK_DATA');
    var i = Object(o.a)(r.UPDATE_SEARCH_TERM),
      s = Object(o.a)(r.UPDATE_TRACK_DATA),
      u =
        (Object(o.a)(r.UPDATE_MULTI_FACET),
        Object(o.a)(r.UPDATE_RANGE_FACET),
        Object(o.a)(r.CLEAR_ACTIVE_FACET),
        Object(o.a)(r.CLEAR_ACTIVE_FACETS),
        Object(o.a)(r.UPDATE_DISPLAY_MODE)),
      c =
        (Object(o.a)(r.FETCH_AUTO_COMPLETE),
        Object(o.a)(r.FETCH_AUTO_COMPLETE_SUCCESS)),
      d = Object(o.a)(r.FETCH_AUTO_COMPLETE_FAILED),
      l = Object(o.a)(r.TOGGLE_AUTO_COMPLETE);
  },
  4: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return a;
      });
    n(158);
    function r(t) {
      return function (e) {
        return {
          payload: e,
          type: t,
        };
      };
    }
    function a(e, t) {
      return void 0 === t && (t = '__'), e.join(t);
    }
  },
  40: function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'b', function () {
        return u;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return d;
      }),
      n.d(t, 'd', function () {
        return l;
      }),
      n.d(t, 'g', function () {
        return p;
      }),
      n.d(t, 'j', function () {
        return m;
      }),
      n.d(t, 'h', function () {
        return g;
      }),
      n.d(t, 'i', function () {
        return f;
      });
    function r(e) {
      return e.pages;
    }
    var a = n(16),
      o = n(13),
      i = Object(a.a)([r], function (e) {
        return e.loadingInBackground;
      }),
      s = Object(a.a)([r], function (e) {
        return e.currentUrl;
      }),
      u =
        (Object(a.a)([r], function (e) {
          return e.currentPageDataUrl;
        }),
        Object(a.a)([r], function (e) {
          return e.history;
        })),
      c = Object(a.a)([r], function (e) {
        return e.pageData;
      }),
      d = Object(a.a)([r], function (e) {
        var t = e.pageData;
        return t ? t.status : 500;
      }),
      l = Object(a.a)([r], function (e) {
        return e.openModalId;
      }),
      p = Object(a.a)([r], function (e) {
        return e.routerPageType;
      }),
      m = Object(a.a)([r], function (e) {
        return e.shouldReload;
      }),
      g = Object(a.a)([r], function (e) {
        return e.pageData && e.pageData.pageType === o.a.SEARCH
          ? decodeURI(e.pageData.searchTerm)
          : '';
      }),
      f = Object(a.a)([r], function (e) {
        if (e.pageData && e.pageData.pageType === o.a.SEARCH) {
          var t = e.pageData.selectedCategory;
          return t ? decodeURI(t) : '';
        }
        return '';
      });
  },
  420: function (e, t, n) {
    'use strict';
    function r() {
      a(window);
    }
    n.d(t, 'a', function () {
      return r;
    });
    function i(a, o) {
      var i = document.scrollingElement || document.documentElement,
        s = i.scrollTop,
        u = a - s,
        c = +new Date(),
        d = function () {
          var e,
            t,
            n,
            r = +new Date() - c;
          (i.scrollTop = parseInt(
            ((e = r),
            (t = s),
            (n = u),
            (e /= o / 2) < 1
              ? (n / 2) * e * e + t
              : (-n / 2) * (--e * (e - 2) - 1) + t)
          )),
            r < o ? requestAnimationFrame(d) : (i.scrollTop = a);
        };
      d();
    }
    var a = function (e) {
      if (e) {
        var t,
          n = 'scrollBehavior' in document.documentElement.style,
          r = e === window,
          a = r ? void 0 : document.querySelector(e);
        if (a || r)
          if (n)
            (t = a),
              window.scroll({
                behavior: 'smooth',
                left: 0,
                top: t ? t.getBoundingClientRect().top + window.pageYOffset : 0,
              });
          else {
            var o = a ? a.offsetTop : 0;
            i(o, 600);
          }
      }
    };
  },
  421: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(16),
      y = n(210),
      a = n(158),
      h = n(359),
      v = n(4),
      o = n(40),
      b = function () {
        return (b =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      i = Object(r.a)(
        [
          o.e,
          function (e) {
            return e.ui;
          },
          a.b,
        ],
        function (e, t, n) {
          var c = t.quotation,
            d = t.favorite,
            l = e;
          if (!l) return null;
          var p = n.netPrices,
            m = n.productQuantityState,
            g = n.discountCodes,
            f = n.deliveryPlans;
          return {
            breadcrumbs: l.breadcrumbs,
            pagination: l.pagination,
            products: l.products.allIds.map(function (e) {
              var t = l.products.byId[e],
                n = m.byId[t.id],
                r = n
                  ? n.quantity
                  : Object(h.a)(t.minimumQuantity, t.roundingQuantity),
                a = !!n && n.warnRounded,
                o = p.byHash[Object(v.b)([t.id, r])],
                i = g.byHash[Object(v.b)([t.id, r])],
                s = f.byHash[Object(v.b)([t.id, r])],
                u =
                  t.classifications &&
                  void 0 !==
                    t.classifications.find(function (e) {
                      return e.code === y.a.ADVISORY && 'true' === e.value;
                    });
              return b(b({}, t), {
                volumeDiscounts: o ? o.volumeDiscounts : void 0,
                netPrice: o ? o.price : void 0,
                quotationStatus: c
                  ? c.items.find(function (e) {
                      return t.id === e.itemId;
                    })
                  : void 0,
                favoriteStatus: d
                  ? d.find(function (e) {
                      return t.id === e.itemId;
                    })
                  : void 0,
                deliveryPlan: s,
                discountCode: i,
                advisory: u,
                quantity: r,
                warnRounded: a,
              });
            }),
            facets:
              (l &&
                l.facets &&
                l.facets.map(function (e) {
                  return b({}, e);
                })) ||
              [],
            selectedCategory: l.selectedCategory,
            displayMode: l.displayMode,
            searchTerm: l.searchTerm,
            searchResults: l.searchResults,
            searchSuggestions: l.searchSuggestions,
            helmetData: {
              title: l.searchTerm,
              canonicalUrl: l.url.split('?')[0],
            },
          };
        }
      );
  },
  422: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return s;
    }),
      n.d(t, 'a', function () {
        return c;
      });
    var r = n(16),
      a = n(40),
      o = n(20),
      i = n(146),
      s = Object(r.a)([a.e], function (e) {
        if (!e || !e.categoryId) return null;
        var t = e.breadcrumbs,
          n = t && !Object(i.a)(t) ? t.length : 0;
        return {
          breadcrumbs: t,
          categoryId: e.categoryId,
          parentCategory: 2 < n ? t[n - 2] : null,
          displayMode: e.displayMode,
          browseType: e.browseType.toLowerCase(),
        };
      }),
      u = Object(r.a)([a.e], function (e) {
        return e && e.categoryId;
      }),
      c = Object(r.b)({
        locale: o.d,
        returnUrl: a.a,
        categoryId: u,
      });
  },
  423: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    }),
      n.d(t, 'b', function () {
        return i;
      });
    function r(e) {
      return e.account;
    }
    var a = n(16),
      o = Object(a.a)([r], function (e) {
        return {
          account: e,
        };
      }),
      i = Object(a.a)([r], function (e) {
        return e.tracking;
      });
  },
  467: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    }),
      n.d(t, 'b', function () {
        return b;
      });
    var r,
      a,
      o =
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i = ((a = Error), o(s, a), s);
    function s(e, t, n) {
      var r = a.call(this, e) || this;
      return (r.error = void 0), (r.name = t), (r.error = n), r;
    }
    var u;
    o(c, (u = i));
    function c(e, t) {
      var n = u.call(this, e, 'BadRequestException') || this;
      return (n.error = t), n;
    }
    var d;
    o(l, (d = i));
    function l(e) {
      return d.call(this, e, 'NotFoundException') || this;
    }
    var p;
    o(m, (p = i));
    function m(e, t) {
      var n =
        p.call(
          this,
          'Invalid locale requested: ' + e,
          'LocaleValidationException'
        ) || this;
      return (n.locale = e), (n.error = t), n;
    }
    var g;
    o(f, (g = i));
    function f(e, t, n) {
      var r = g.call(this, n.message, 'EnrichException') || this;
      return (r.enricher = e), (r.data = t), (r.error = n), r;
    }
    var y;
    o(h, (y = i));
    function h(e, t) {
      var n =
        y.call(
          this,
          'Exception occurred loading state for page [' + e + ']: ' + t.message,
          'PageStateLoaderException'
        ) || this;
      return (n.page = e), (n.error = t), n;
    }
    var v,
      b = (o(C, (v = i)), C);
    function C(e, t) {
      var n =
        v.call(
          this,
          'Exception occurred calling query: ' + e,
          'GraphQLException'
        ) || this;
      return (n.query = e), (n.error = t), n;
    }
  },
  508: function (e, t, n) {
    e.exports = {
      'c-page-loader': '_1herMv_C',
      cPageLoader: '_1herMv_C',
    };
  },
  51: function (e, t, n) {
    'use strict';
    t.a = function (e, t) {
      return {
        key: e,
        reducer: t,
      };
    };
  },
  513: function (e, t, n) {
    e.exports = {
      'dropdown-modal-header': '_1PphvNAx',
      dropdownModalHeader: '_1PphvNAx',
    };
  },
  514: function (e, t, n) {
    e.exports = {
      'dropdown-modal-body': '_1A4poRkD',
      dropdownModalBody: '_1A4poRkD',
    };
  },
  526: function (e, t) {},
  53: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'd', function () {
        return a;
      }),
      n.d(t, 'g', function () {
        return o;
      }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'e', function () {
        return s;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'f', function () {
        return c;
      }),
      n.d(t, 'h', function () {
        return d;
      });
    n(524), n(166);
    var r = 'idToken',
      a = 'x-auth-jwt',
      o = 'X-WCS-COOKIES',
      i = 'ctx-corporate-identity',
      s = 'ctx-locale',
      u = 'ctx-account-id',
      c = 'ctx-organization-id',
      d = 'x-rid';
  },
  552: function (e, t) {},
  554: function (e, t) {},
  588: function (e, t) {},
  589: function (e, t) {},
  59: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return a;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = '|',
      s = '+M+',
      u = '$$',
      c = '+R+',
      d = '_',
      l = '+S+';
    function a(e) {
      return (
        void 0 === e && (e = ''),
        decodeURIComponent(e)
          .split(r)
          .map(function (e) {
            return -1 < e.indexOf(s)
              ? ((a = decodeURIComponent(e).split(s)),
                (o = a[0]),
                (i = a[1].split(u).filter(function (e) {
                  return '' !== e;
                })),
                o && i.length
                  ? {
                      id: o,
                      values: i,
                    }
                  : null)
              : -1 < e.indexOf(c)
              ? (function (e) {
                  var t = e.split(c),
                    n = decodeURIComponent(t[0]);
                  if (!n.length) return null;
                  var r = decodeURIComponent(t[1] || '')
                    .split(c)
                    .map(function (e) {
                      var t = e.split(d);
                      if (2 !== t.length) return null;
                      var n = {
                        min: Number(t[0]),
                        max: Number(t[1]),
                      };
                      return isNaN(n.min) || isNaN(n.max) ? null : n;
                    })
                    .filter(function (e) {
                      return null !== e;
                    });
                  return 1 !== r.length
                    ? null
                    : {
                        id: n,
                        rangeValues: r[0],
                      };
                })(e)
              : -1 < e.indexOf(l)
              ? ((t = decodeURIComponent(e).split(l)),
                (n = t[0]),
                (r = t[1]),
                n && r
                  ? {
                      id: n,
                      value: r,
                    }
                  : null)
              : null;
            var t, n, r, a, o, i;
          })
          .filter(function (e) {
            return null !== e;
          })
      );
    }
    function o(e) {
      return e
        .map(function (e) {
          return e.values
            ? [e.id, e.values.join(u)].join(s)
            : e.value
            ? [e.id, e.value].join(l)
            : e.rangeValues
            ? [e.id, [e.rangeValues.min, e.rangeValues.max].join(d)].join(c)
            : null;
        })
        .filter(function (e) {
          return null !== e;
        })
        .join(r);
    }
  },
  62: function (e, t, n) {
    'use strict';
    var i = n(30),
      s = n(13),
      u = n(87),
      c = n(171),
      o = n(9);
    function d(e, t) {
      return (
        (n = e.params.categoryId),
        (r = t),
        o.c.reduce(
          function (e, t) {
            return r[t] && (e[t] = decodeURIComponent(r[t])), e;
          },
          {
            categoryId: n,
            page: '1',
          }
        )
      );
      var n, r;
    }
    function l(e, t) {
      return (
        (n = e.params.searchTerm),
        (r = t),
        o.u.reduce(
          function (e, t) {
            return r[t] && (e[t] = decodeURIComponent(r[t])), e;
          },
          {
            searchTerm: n,
          }
        )
      );
      var n, r;
    }
    function p(e, t) {
      return (
        (n = e.params.productGroupId),
        (r = e.params.productGroupType),
        (a = t),
        o.s.reduce(
          function (e, t) {
            return a[t] && (e[t] = decodeURIComponent(a[t])), e;
          },
          {
            productGroupId: n,
            productGroupType: r,
            page: '1',
          }
        )
      );
      var n, r, a;
    }
    var r = function () {
      return (r =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
    };
    function m(e, t) {
      return (
        (n = e.params.productId),
        r(r({}, t), {
          id: n,
        })
      );
      var n;
    }
    n.d(t, 'a', function () {
      return a;
    }),
      n.d(t, 'b', function () {
        return f;
      });
    var g = function () {
      return (g =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
    };
    function a(e, t, n, r) {
      void 0 === r && (r = {});
      var a = Object(i.matchPath)(t, {
        path: (function (e) {
          switch (e) {
            case s.a.CATEGORY:
              return '' + u.b + c.a.path;
            case s.a.SEARCH:
              return '' + u.b + c.d.path;
            case s.a.PRODUCT_GROUP:
              return '' + u.b + c.c.path;
          }
          return s.a.NOT_FOUND;
        })(e),
      });
      if (!a)
        throw new Error(
          'fromUrl provided to createFetchPagePayload was not matched to any url!'
        );
      var o = (function (e) {
        switch (e) {
          case s.a.CATEGORY:
            return d;
          case s.a.SEARCH:
            return l;
          case s.a.PRODUCT_GROUP:
            return p;
          case s.a.PRODUCT:
            return m;
          default:
            return function () {
              return {};
            };
        }
      })(e)(a, g({}, n));
      return {
        pageArguments: g(g({}, o), r),
        pageType: e,
      };
    }
    function f(e) {
      return (
        void 0 === e && (e = ''),
        e
          .substr(1)
          .split('&')
          .reduce(function (e, t) {
            var n = t.split('=');
            return n.length < 2 || (e[n[0]] = decodeURIComponent(n[1])), e;
          }, {})
      );
    }
  },
  657: function (e, t) {},
  658: function (e, t) {},
  676: function (e, t, n) {
    e.exports = {
      'o-table-wrapper': '_2HUOJnaF',
      oTableWrapper: '_2HUOJnaF',
      'o-list': 'SgDo5ewm',
      oList: 'SgDo5ewm',
      'o-ordered-list': '_3y88OClr',
      oOrderedList: '_3y88OClr',
      'o-styled-list': 'Z-t2Fj6B',
      oStyledList: 'Z-t2Fj6B',
    };
  },
  677: function (e) {
    e.exports = {
      legalEntityToCountry: {
        10: 'DE',
        20: 'PL',
        22: 'SK',
        25: 'RO',
        30: 'NL',
        40: 'BE',
        45: 'DK',
        46: 'SE',
        47: 'FI',
        48: 'NO',
        50: 'AT',
        55: 'CH',
        58: 'CZ',
        60: 'GB',
        70: 'FR',
        80: 'RU',
        90: 'HU',
        92: 'ES',
        96: 'IT',
      },
      storeIdToCountryMapping: {
        10: 'DE',
        20: 'PL',
        22: 'SK',
        25: 'RO',
        30: 'NL',
        40: 'BE',
        50: 'AT',
        55: 'CH',
        58: 'CZ',
        60: 'GB',
        70: 'FR',
        80: 'RU',
        90: 'HU',
        92: 'ES',
        96: 'IT',
        3010: 'DE',
        4010: 'DE',
        4020: 'PL',
        4070: 'FR',
        4092: 'ES',
        4096: 'IT',
        6010: 'DE',
        9010: 'DE',
        9020: 'PL',
        9022: 'SK',
        9030: 'NL',
        9040: 'BE',
        9050: 'AT',
        9055: 'CH',
        9058: 'CZ',
        9060: 'GB',
        9070: 'FR',
        9090: 'HU',
        9092: 'ES',
        9096: 'IT',
      },
      storeIdToCiMapping: {
        10: 'kramp',
        20: 'kramp',
        22: 'kramp',
        25: 'kramp',
        30: 'kramp',
        40: 'kramp',
        50: 'kramp',
        55: 'kramp',
        58: 'kramp',
        60: 'kramp',
        70: 'kramp',
        80: 'kramp',
        90: 'kramp',
        92: 'kramp',
        96: 'kramp',
        3010: 'raiffeisen',
        4010: 'johndeere',
        4020: 'johndeere',
        4070: 'johndeere',
        4092: 'johndeere',
        4096: 'johndeere',
        6010: 'rwzcologne',
        9010: 'sdf',
        9020: 'sdf',
        9022: 'sdf',
        9030: 'sdf',
        9040: 'sdf',
        9050: 'sdf',
        9055: 'sdf',
        9058: 'sdf',
        9060: 'sdf',
        9070: 'sdf',
        9090: 'sdf',
        9092: 'sdf',
        9096: 'sdf',
        9101: 'sdf_deutz_fahr',
        9102: 'sdf_same',
        9103: 'sdf_lamborghini',
      },
      crmCiToKramphubCi: {
        '0001': 'kramp',
        '0002': 'sdf',
        '0003': 'aparts',
        '0004': 'kramp  # campa / socodicor',
        '0005': 'sdf_deutz_fahr',
        '0006': 'johndeere',
        '0007': 'kramp  # agco',
        '0008': 'raiffeisen',
        '0009': 'sdf_same',
      },
      wcsLanguageIdToLanguage: {
        '-1': 'en',
        '-2': 'fr',
        '-3': 'de',
        '-4': 'it',
        '-5': 'es',
        '-6': 'pt',
        '-17': 'nl',
        '-21': 'ro',
        '-22': 'pl',
        '-24': 'fi',
        '-34': 'sv',
        '-41': 'cs',
        '-42': 'sk',
        '-44': 'no',
        '-52': 'ru',
        '-55': 'da',
        '-62': 'hu',
      },
      storeDefaultCatalogId: {
        9101: 'MERDEUSTEP',
        9102: 'MERSAMSTEP',
        9103: 'MERLAMSTEP',
        DEFAULT: 'STEPWeb',
      },
      defaultLocalePerCountry: {
        BE: 'nl_BE',
        DE: 'de_DE',
        CZ: 'cs_CZ',
        ES: 'es_ES',
        FR: 'fr_FR',
        IT: 'it_IT',
        HU: 'hu_HU',
        NL: 'nl_NL',
        AT: 'de_AT',
        PL: 'pl_PL',
        RO: 'ro_RO',
        CH: 'de_CH',
        SK: 'sk_SK',
        GB: 'en_GB',
        DK: 'da_DK',
        FI: 'fi_FI',
        NO: 'no_NO',
        SE: 'sv_SE',
        DEFAULT: 'en_DE',
      },
      defaultLocalePerLanguage: {
        nl: 'nl_NL',
        de: 'de_DE',
        cs: 'cs_CZ',
        es: 'es_ES',
        fr: 'fr_FR',
        it: 'it_IT',
        hu: 'hu_HU',
        pl: 'pl_PL',
        ro: 'ro_RO',
        sk: 'sk_SK',
        en: 'en_GB',
        da: 'da_DK',
        fi: 'fi_FI',
        no: 'no_NO',
        sv: 'sv_SE',
        bg: 'bg_BG',
        et: 'et_EE',
        ru: 'ru_RU',
        pt: 'pt_ES',
        hr: 'hr_HR',
        lt: 'lt_LT',
        lv: 'lv_LV',
        uk: 'uk_UA',
      },
      buyerToSellerLocale: {
        BE: ['nl_BE', 'fr_BE'],
        DE: ['de_DE', 'en_DE'],
        BA: ['en_DE'],
        BG: ['en_DE', 'ru_DE'],
        CZ: ['cs_CZ'],
        ES: ['es_ES'],
        EE: ['en_PL', 'ru_PL'],
        FR: ['fr_FR'],
        HR: ['en_DE'],
        IT: ['it_IT', 'de_IT'],
        LV: ['en_PL', 'ru_PL'],
        LT: ['en_PL', 'ru_PL'],
        MK: ['en_DE'],
        HU: ['hu_HU'],
        NL: ['nl_NL'],
        AT: ['de_AT'],
        PL: ['pl_PL'],
        PT: ['es_ES', 'en_ES'],
        RO: ['ro_RO', 'en_RO'],
        CH: ['de_CH', 'fr_CH', 'it_CH'],
        RS: ['en_DE'],
        SK: ['sk_SK'],
        SI: ['en_DE'],
        UA: ['ru_PL', 'en_PL'],
        GB: ['en_GB'],
        US: ['en_DE', 'es_DE'],
        DK: ['da_DK', 'en_DK'],
        FI: ['fi_FI', 'sv_FI'],
        NO: ['no_NO'],
        SE: ['sv_SE'],
      },
      azureADCountryToCatlynOrg: {
        Netherlands: 'LE_30',
        NL: 'LE_30',
        'The Netherlands': 'LE_30',
        'United Kingdom': 'LE_60',
        Spain: 'LE_92',
        Poland: 'LE_20',
        France: 'LE_70',
        Denmark: 'LE_45',
        Germany: 'LE_10',
        Sweden: 'LE_46',
        Russia: 'LE_80',
        'Russian Federation': 'LE_80',
        Lithuania: 'LE_LT',
        Italy: 'LE_96',
        Norway: 'LE_48',
        Hungary: 'LE_90',
        Ukraine: 'LE_94',
        Belgium: 'LE_40',
        Finland: 'LE_47',
        India: 'LE_IN',
        Austria: 'LE_50',
        Romania: 'LE_25',
        'Czech Republic': 'LE_58',
        China: 'LE_CN',
        Switzerland: 'LE_55',
        Slovakia: 'LE_22',
        Turkey: 'LE_TR',
      },
      ciToOrgMapping: {
        kramp: 'Kramp',
        sdf: 'SDF',
        johndeere: 'JohnDeere',
        raiffeisen: 'Raiffeisen',
        rwzcologne: 'RWZCologne',
        aparts: 'Agrotec',
        agco: 'Kramp',
      },
      countryConsolidate: {
        NO: !1,
        FI: !1,
        DK: !1,
        SV: !1,
        DEFAULT: !0,
      },
      countryAllowedToSeeDiscountCode: {
        DE: !0,
        SK: !0,
        RO: !0,
        AT: !0,
        CH: !0,
        CZ: !0,
        GB: !0,
        HU: !0,
        DEFAULT: !1,
      },
      configuratorAllowedInCountry: {
        DE: !0,
        SK: !0,
        NL: !0,
        BE: !0,
        CZ: !0,
        CH: !0,
        GB: !0,
        FR: !0,
        HU: !0,
        ES: !0,
        IT: !0,
        PL: !0,
        AT: !0,
        DEFAULT: !1,
      },
      configuratorAllowedForCategory: {
        'web3-4055759': !0,
        'web3-4055760': !0,
        'web4-4065186': !0,
        'web3-4055787': !0,
        'web4-4065370': !0,
        'web4-4065365': !0,
        'web4-4065366': !0,
        'web3-4055503': !0,
        'web3-4055785': !0,
        DEFAULT: !1,
      },
      ciToStorePrefix: {
        kramp: '',
        sdf: '90',
        johndeere: '40',
        raiffeisen: '30',
        rwzcologne: '60',
        aparts: '',
      },
      ciToCompanyName: {
        kramp: 'Kramp',
        sdf: 'Agricenter',
        johndeere: 'John Deere',
        raiffeisen: 'Raiffeisen',
        rwzcologne: 'RWZ Parts',
        aparts: 'AParts',
      },
      localeFallbackOrder: {
        cs_CZ: ['cs_CZ', 'cs', 'en', 'en_GB'],
        da_DK: ['da_DK', 'da', 'en', 'en_GB'],
        de_AT: ['de_AT', 'de', 'de_DE', 'en', 'en_GB'],
        de_CH: ['de_CH', 'de', 'de_DE', 'en', 'en_GB'],
        de_DE: ['de_DE', 'de', 'en', 'en_GB'],
        de_IT: ['de_IT', 'de', 'de_DE', 'it_IT', 'it', 'en', 'en_GB'],
        en_DE: ['en_DE', 'en', 'en_GB', 'de_DE', 'de'],
        en_DK: ['en_DK', 'en', 'en_GB', 'da_DK', 'da'],
        en_ES: ['en_ES', 'en', 'en_GB', 'es_ES', 'es'],
        en_GB: ['en_GB', 'en'],
        en_PL: ['en_PL', 'en', 'en_GB', 'pl_PL', 'pl'],
        en_RO: ['en_RO', 'en', 'en_GB', 'ro_RO', 'ro'],
        es_DE: ['es_DE', 'es', 'es_ES', 'de_DE', 'de', 'en', 'en_GB'],
        es_ES: ['es_ES', 'es', 'en', 'en_GB'],
        fi_FI: ['fi_FI', 'fi', 'en', 'en_GB'],
        fr_BE: ['fr_BE', 'fr', 'fr_FR', 'nl_BE', 'nl', 'nl_NL', 'en', 'en_GB'],
        fr_CH: ['fr_CH', 'fr', 'fr_FR', 'de_CH', 'de', 'de_DE', 'en', 'en_GB'],
        fr_FR: ['fr_FR', 'fr', 'en', 'en_GB'],
        hu_HU: ['hu_HU', 'hu', 'en', 'en_GB'],
        it_CH: ['it_CH', 'it', 'it_IT', 'de_CH', 'de', 'de_DE', 'en', 'en_GB'],
        it_IT: ['it_IT', 'it', 'en', 'en_GB'],
        nl_BE: ['nl_BE', 'nl', 'nl_NL', 'en', 'en_GB'],
        nl_NL: ['nl_NL', 'nl', 'en', 'en_GB'],
        no_NO: ['no_NO', 'no', 'en', 'en_GB'],
        pl_PL: ['pl_PL', 'pl', 'en', 'en_GB'],
        ro_RO: ['ro_RO', 'ro', 'en', 'en_GB'],
        ru_DE: ['ru_DE', 'ru', 'ru_RU', 'de_DE', 'de', 'en', 'en_GB'],
        ru_PL: ['ru_PL', 'ru', 'ru_RU', 'pl_PL', 'pl', 'en', 'en_GB'],
        sk_SK: ['sk_SK', 'sk', 'en', 'en_GB'],
        sv_SE: ['sv_SE', 'sv', 'en', 'en_GB'],
      },
      domainToCiMapping: {
        'www.agricenter.com': 'sdf',
        'login.agricenter.com': 'sdf',
        'auth.agricenter.com': 'sdf',
        'www.agtparts.eu': 'aparts',
        'login.agtparts.eu': 'aparts',
        'auth.agtparts.eu': 'aparts',
        'extraparts.deere.com': 'johndeere',
        'login.extraparts.deere.com': 'johndeere',
        'auth.extraparts.deere.com': 'johndeere',
        'www.rwz-parts.com': 'rwzcologne',
        'login.rwz-parts.com': 'rwzcologne',
        'auth.rwz-parts.com': 'rwzcologne',
        'www.raiffeisen-parts.de': 'raiffeisen',
        'login.raiffeisen-parts.de': 'raiffeisen',
        'auth.raiffeisen-parts.de': 'raiffeisen',
        'parts.raiwa.net': 'raiffeisen',
        'login.parts.raiwa.net': 'raiffeisen',
        'auth.parts.raiwa.net': 'raiffeisen',
        'www.kramp.com': 'kramp',
        'login.kramp.com': 'kramp',
        'auth.kramp.com': 'kramp',
      },
      ciToLogonDomain: {
        sdf: 'login.agricenter.com',
        aparts: 'login.agtparts.eu',
        johndeere: 'login.extraparts.deere.com',
        rwzcologne: 'login.rwz-parts.com',
        raiffeisen: 'login.raiffeisen-parts.de',
        kramp: 'login.kramp.com',
      },
      ciToAuthDomain: {
        sdf: 'auth.agricenter.com',
        aparts: 'auth.agtparts.eu',
        johndeere: 'auth.extraparts.deere.com',
        rwzcologne: 'auth.rwz-parts.com',
        raiffeisen: 'auth.raiffeisen-parts.de',
        kramp: 'auth.kramp.com',
      },
      ciToBaseDomain: {
        sdf: 'www.agricenter.com',
        aparts: 'www.agtparts.eu',
        johndeere: 'extraparts.deere.com',
        rwzcologne: 'www.rwz-parts.com',
        raiffeisen: 'www.raiffeisen-parts.de',
        kramp: 'www.kramp.com',
      },
    };
  },
  72: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return i;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).UPDATE_MULTI_FACET =
      '[frontend/category]/UPDATE_MULTI_FACET'),
      (a.UPDATE_RANGE_FACET = '[frontend/category]/UPDATE_RANGE_FACET'),
      (a.UPDATE_BROWSE_TYPE = '[frontend/category]/UPDATE_BROWSE_TYPE'),
      (a.CLEAR_ACTIVE_FACET = '[frontend/category]/CLEAR_ACTIVE_FACET'),
      (a.CLEAR_ACTIVE_FACETS = '[frontend/category]/CLEAR_ACTIVE_FACETS'),
      (a.UPDATE_DISPLAY_MODE = '[frontend/category]/TOGGLE_DISPLAY_MODE');
    Object(o.a)(r.UPDATE_BROWSE_TYPE),
      Object(o.a)(r.UPDATE_MULTI_FACET),
      Object(o.a)(r.UPDATE_RANGE_FACET),
      Object(o.a)(r.CLEAR_ACTIVE_FACET),
      Object(o.a)(r.CLEAR_ACTIVE_FACETS);
    var i = Object(o.a)(r.UPDATE_DISPLAY_MODE);
  },
  73: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return r;
    }),
      n.d(t, 'e', function () {
        return a;
      }),
      n.d(t, 'f', function () {
        return o;
      }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'b', function () {
        return u;
      });
    var r = 'CAT_BROWSING_TYPE',
      a = 3650,
      o = 'https://img.youtube.com/vi/{id}/default.jpg',
      i = 'sales_category',
      s = 'brand',
      u = 'campaign_id';
  },
  87: function (e, t, n) {
    'use strict';
    var r = n(171),
      a =
        (n(69)({
          loader: function () {
            return n.e(4).then(n.bind(null, 1173));
          },
          loading: function () {
            return null;
          },
          modules: ['performance-baseline'],
        }),
        n(201)),
      o = n(8),
      i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      s = i(
        i(
          i(
            {},
            {
              Services: 'sluzby',
              ConfiguratorHelp: 'konfigurator-kramp',
            }
          ),
          o.translations.cs
        ),
        {
          'AdvisoryForm.contactMethod': 'Kontaktujte mě na',
          'AdvisoryForm.email': 'E-mailová adresa',
          'AdvisoryForm.failedMessage':
            'Váš požadavek se nepodařilo odeslat. Zkuste to znovu později.',
          'AdvisoryForm.phone': 'Telefon',
          'AdvisoryForm.remarks': 'Poznámky/požadavek',
          'AdvisoryForm.sendCopyTo': 'Kopii pošlete na adresu:',
          'AdvisoryForm.submit': 'Odeslat',
          'AdvisoryForm.succeedMessage': 'Váš požadavek byl úspěšně odeslán.',
          'AdvisoryForm.title': 'Zažádat o informace o výrobku',
          'Breadcrumbs.homepage': 'Úvodní stránka',
          'Breadcrumbs.searchFor': 'Hledat {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Zobrazení',
          'Categories.filterBar.overview': 'Přehled',
          'Categories.filterBar.productgroups': 'Skupiny výrobků',
          'Categories.filterBar.products': 'Výrobky',
          'Categories.filterBar.selectDisplayTypeLabel': 'Zobrazit',
          'Categories.meta.description':
            'Objevte {name} u společnosti KRAMP. Nejširší sortiment {name} najdete online. It´s that easy!',
          'Categories.noResultsMessage': 'Žádné výsledky',
          'Categories.overview.actions':
            '{productsLink} nebo {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Zobrazit skupiny výrobků',
          'Categories.overview.actions.viewProducts': 'Zobrazit výrobky',
          'Categories.overview.description':
            'V této kategorii existuje {numOfProductGroups} skupin výrobků s {numOfProducts} výrobky.',
          'Categories.overview.title': 'Výsledky',
          'Categories.quickView.closeButton': 'Zavřít',
          'Categories.quickView.goToProductButton':
            'Přejít na stránku produktu',
          'Categories.quickView.previewButton': 'Detail výrobku',
          'Categories.subCategoriesLabel': 'Kategorie A–Z',
          'ErrorHandler.unableToLoad':
            'Zdá se, že se něco nezdařilo! Zkuste to prosím později',
          'ErrorHandler.buttonLabelTryAgain': 'Zkus to znovu',
          'Facets.categories.mobile.showSubcategories': 'Podkategorie',
          'Facets.categories.title': 'Hledat v aktuální kategorii',
          'Facets.categories.toggleButton.less': 'Zobrazit méně',
          'Facets.categories.toggleButton.more': 'Zobrazit více',
          'Facets.clear': 'Smazat filtr',
          'Facets.filter': 'Filtr',
          'Facets.loadingResults': 'Výsledky se načítají',
          'Facets.search.placeholder': 'Hledat',
          'Facets.showResults': 'Použít filtr',
          'Form.mandatoryField': 'Toto pole musí být vyplněné',
          'Form.invalidEmailAddress': 'e-mailová adresa není platná',
          'MediaAssets.downloadLink': 'Stáhnout',
          'MediaAssets.images': 'Obrázky',
          'MediaAssets.media': 'Média',
          'MediaAssets.safetySheets': 'Bezpečnostní list',
          'MediaAssets.technicalDrawings': 'Technické informace',
          'MediaAssets.videos': 'Videa',
          'PrintAction.print': 'Vytisknout',
          'ProductConfigurator.button.HelpConfigurator': 'Často kladené otázky',
          'ProductConfigurator.button.StartConfigurator': 'Spustit konfiguraci',
          'ProductConfigurator.list.1': 'Rychlá a jednoduchá konfigurace',
          'ProductConfigurator.list.2': 'Přímé vložení do nákupního košíku',
          'ProductConfigurator.title':
            'Potřebujete výrobky na míru? Nyní si je můžete nakonfigurovat a objednat online! Přehled výhod:',
          'ProductGroup.link.scrollToMedia': 'Přejít na Média',
          'ProductGroup.link.scrollToProductsTable':
            'Přejít na Tabulku výrobků',
          'ProductGroup.meta.description':
            'Objevte {name} u společnosti KRAMP. Nejširší sortiment {name} najdete online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Rolovat skupiny položek',
          'ProductGroup.productTable.deliveryTime': 'Dodací lhůta',
          'ProductGroup.productTable.fullscreen': 'Celá obrazovka',
          'ProductGroup.productTable.noProductsMessage': 'Žádné produkty',
          'ProductGroup.productTable.price': 'Cena',
          'ProductGroup.productTable.product': 'Výrobek',
          'ProductGroupItem.goToProductsLink': 'Zobrazit produkty',
          'ProductItem.advisory.description':
            'Kontaktujte nás, chcete-li se dozvědět cenu, dodací lhůtu a další informace',
          'ProductItem.advisory.title': 'Výrobek se zvláštním upozorněním',
          'ProductItem.buttons.addToCart': 'Přidat do košíku',
          'ProductItem.discountCode': 'Kód slevy',
          'ProductItem.discountCode.fetchError': 'Slevový kód nelze načíst',
          'ProductItem.discountCode.label': 'KS',
          'ProductItem.grossPrice': 'Prodejní cena',
          'ProductItem.grossPrice.fetchError': 'Prodejní cena nelze načíst',
          'ProductItem.id': 'Číslo položky',
          'ProductItem.input.remarks': 'Vaše reference',
          'ProductItem.netPrice': 'Čistá',
          'ProductItem.netPrice.fetchError': 'Netto cenu nelze načíst',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable':
            'Tento produkt není možno vrátit, účtováno dopravné',
          'ProductItem.quantity': 'Množství',
          'ProductItem.quantity.roundingWarning':
            'Ověřit zaokrouhlené množství',
          'ProductItem.quantityUnit': 'Jednotka',
          'ProductItem.relations.accessories': 'Doplňky',
          'ProductItem.relations.alternatives': 'Alternativy',
          'ProductItem.relations.spareParts': 'Náhradní díly',
          'ProductItem.replacement': 'Výrobek byl nahrazen',
          'ProductItem.tags.new': 'Nový výrobek',
          'ProductItem.volumeDiscounts': 'Snížené ceny',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Cena',
          'Search.activeFacets.clear': 'Smazat filtr',
          'Search.allCategories': 'Vše',
          'Search.noResults': 'Bohužel nebyly nalezeny žádné výsledky',
          'Search.queryValidation.lessThan2Chars':
            'Zadejte prosím alespoň 2 znaky!',
          'Search.queryValidation.nonEmpty': 'Zadejte hledaný výraz',
          'Search.queryValidation.tooManyCharacters':
            'Nezadávejte více než {maxCharacters} znaků!',
          'Search.results.didYouMean': 'Měli jste na mysli',
          'Search.results.searchForTitle':
            'Výsledky vyhledávání pro {searchTerm}',
          'Search.results.summary':
            'Našli jsme {numberOfResults} výsledků. Vyhledávání můžete upřesnit filtrováním ve sloupci vlevo.',
          'Search.results.summaryNoMatch':
            "Pro vámi hledaný výraz ''{originalSearchTerm}'' nebyly nalezeny žádné výsledky",
          'Search.results.translatedSearch':
            "Zobrazují se výsledky pro ''{translatedSearchTerm}'' ({numOfResults} výsledků).",
          'Search.searchInAllCategories': 'Hledat ve všech kategoriích',
          'Search.searchInCategory': 'Hledat v kategorii',
          'UnauthorizedMessage.body':
            'Byli jste odhlášeni, přihlaste se prosím znovu.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Zůstat odhlášený',
          'UnauthorizedMessage.loginButton': 'Přihlásit',
          'UnauthorizedMessage.title': 'Vaše přihlášení vypršelo',
        }
      ),
      u = function () {
        return (u =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      c = u(
        u(u({}, o.translations.da), {
          Services: 'services',
          ConfiguratorHelp: 'configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Kontakt mig via',
          'AdvisoryForm.email': 'E-mailadresse',
          'AdvisoryForm.failedMessage':
            'Din anmodning kunne ikke sendes. Prøv igen senere.',
          'AdvisoryForm.phone': 'Telefon',
          'AdvisoryForm.remarks': 'Kommentarer/anmodning',
          'AdvisoryForm.sendCopyTo': 'Send en kopi til:',
          'AdvisoryForm.submit': 'Send',
          'AdvisoryForm.succeedMessage': 'Din anmodning er blevet sendt.',
          'AdvisoryForm.title': 'Anmod om produktoplysninger',
          'Breadcrumbs.homepage': 'Startside',
          'Breadcrumbs.searchFor': 'Søg efter {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Vis alternativer',
          'Categories.filterBar.overview': 'Oversigt',
          'Categories.filterBar.productgroups': 'Produktgrupper',
          'Categories.filterBar.products': 'Produkter',
          'Categories.filterBar.selectDisplayTypeLabel': 'Vis',
          'Categories.meta.description':
            'Opdag {name} hos KRAMP. Det største sortiment af {name} finder du online. It´s that easy!',
          'Categories.noResultsMessage': 'Ingen resultater',
          'Categories.overview.actions':
            '{productsLink} eller {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups': 'Se produktgrupper',
          'Categories.overview.actions.viewProducts': 'Se produkter',
          'Categories.overview.description':
            'Der er {numOfProductGroups} produktgrupper i denne kategori med {numOfProducts} produkter.',
          'Categories.overview.title': 'Resultater',
          'Categories.quickView.closeButton': 'Luk',
          'Categories.quickView.goToProductButton': 'Gå til produktside',
          'Categories.quickView.previewButton': 'Forhåndsvisning',
          'Categories.subCategoriesLabel': 'Kategorier A-Å',
          'ErrorHandler.unableToLoad':
            'Det er ud som om, noget er gået galt! Prøv igen senere',
          'ErrorHandler.buttonLabelTryAgain': 'Prøv igen',
          'Facets.categories.mobile.showSubcategories': 'Underkategorier',
          'Facets.categories.title': 'Søg i nuværende kategori',
          'Facets.categories.toggleButton.less': 'Vis mindre',
          'Facets.categories.toggleButton.more': 'Vis mere',
          'Facets.clear': 'Slet filter',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Indlæser resultater',
          'Facets.search.placeholder': 'Søg',
          'Facets.showResults': 'Anvend filter',
          'Form.mandatoryField': 'Dette felt skal udfyldes',
          'Form.invalidEmailAddress': 'e-mail-adresse er ikke gyldig',
          'MediaAssets.downloadLink': 'Download',
          'MediaAssets.images': 'Billeder',
          'MediaAssets.media': 'Medier',
          'MediaAssets.safetySheets': 'Sikkerhedsdatablad',
          'MediaAssets.technicalDrawings': 'Tekniske tegninger',
          'MediaAssets.videos': 'Videoer',
          'PrintAction.print': 'Print',
          'ProductConfigurator.button.HelpConfigurator':
            'Ofte stillede spørgsmål',
          'ProductConfigurator.button.StartConfigurator': 'Start konfiguration',
          'ProductConfigurator.list.1': 'Hurtig og ukompliceret konfiguration',
          'ProductConfigurator.list.2': 'Læg direkte i indkøbskurven',
          'ProductConfigurator.title':
            'Har du brug for produkter efter mål? Konfigurer og bestil med det samme online! Dine fordele:',
          'ProductGroup.link.scrollToMedia': 'Vis medier',
          'ProductGroup.link.scrollToProductsTable': 'Vis produkttabeller',
          'ProductGroup.meta.description':
            'Opdag {name} hos KRAMP. Det største sortiment af {name} finder du online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Vis artikelgruppe',
          'ProductGroup.productTable.deliveryTime': 'Leveringsdato',
          'ProductGroup.productTable.fullscreen': 'Fuld skærm',
          'ProductGroup.productTable.noProductsMessage': 'Ingen produkter',
          'ProductGroup.productTable.price': 'Pris',
          'ProductGroup.productTable.product': 'Produkt',
          'ProductGroupItem.goToProductsLink': 'Til produkterne',
          'ProductItem.advisory.description':
            'Kontakt os for oplysninger om pris, leveringstid og øvrige informationer',
          'ProductItem.advisory.title': 'Produkt med særlig rådgivning',
          'ProductItem.buttons.addToCart': 'Tilføj til indkøbskurven',
          'ProductItem.discountCode': 'Rabatkode',
          'ProductItem.discountCode.fetchError': 'Rabatkode kunne ikke hentes',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Brutto pris',
          'ProductItem.grossPrice.fetchError': 'Brutto pris kunne ikke hentes',
          'ProductItem.id': 'Varenummer',
          'ProductItem.input.remarks': 'Kommentar',
          'ProductItem.netPrice': 'Nettopriser',
          'ProductItem.netPrice.fetchError': 'Nettoprisen kunne ikke hentes',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Dette er et ikke returnerbart produkt',
          'ProductItem.quantity': 'Mængde',
          'ProductItem.quantity.roundingWarning':
            'Bekræft den afrundede mængde',
          'ProductItem.quantityUnit': 'Enhed',
          'ProductItem.relations.accessories': 'Tilbehør',
          'ProductItem.relations.alternatives': 'Alternativer',
          'ProductItem.relations.spareParts': 'Reservedele',
          'ProductItem.replacement': 'Produkt erstattet',
          'ProductItem.tags.new': 'Ny vare',
          'ProductItem.volumeDiscounts': 'Rabatpriser',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Pris',
          'Search.activeFacets.clear': 'Slet filter',
          'Search.allCategories': 'Alle',
          'Search.noResults': 'Desværre gav søgningen ingen resultater',
          'Search.queryValidation.lessThan2Chars': 'Angiv mindst 2 tegn!',
          'Search.queryValidation.nonEmpty': 'Indtast et søgeudtryk',
          'Search.queryValidation.tooManyCharacters':
            'Angiv højst {maxCharacters} tegn!',
          'Search.results.didYouMean': 'Mente du',
          'Search.results.searchForTitle': 'Søgeresultater for {searchTerm}',
          'Search.results.summary':
            'Vi har fundet {numberOfResults} resultater. Du kan lave en mere specifik søgning med filteret i venstre spalte.',
          'Search.results.summaryNoMatch':
            "Din søgning efter ''{originalSearchTerm}'' gav desværre ingen resultater",
          'Search.results.translatedSearch':
            "Resultaterne for ''{translatedSearchTerm}'' vises ({numOfResults} resultater).",
          'Search.searchInAllCategories': 'Søg i alle kategorier',
          'Search.searchInCategory': 'Søg i kategori',
          'UnauthorizedMessage.body': 'Du blev logget ud. Log dig ind igen.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Forbliv logget ud',
          'UnauthorizedMessage.loginButton': 'Log ind',
          'UnauthorizedMessage.title': 'Din session er udløbet',
        }
      ),
      d = function () {
        return (d =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      l = d(
        d(d({}, o.translations.de), {
          Services: 'services',
          ConfiguratorHelp: 'kramp-konfigurator',
        }),
        {
          'AdvisoryForm.contactMethod': 'Kontaktieren Sie mich per',
          'AdvisoryForm.email': 'E-mail',
          'AdvisoryForm.failedMessage':
            'Ihre Anfrage konnte nicht gesendet werden! Bitte versuchen Sie es später noch einmal',
          'AdvisoryForm.fax': 'Fax',
          'AdvisoryForm.phone': 'Telefon',
          'AdvisoryForm.remarks': 'Kommentar / Anfrage',
          'AdvisoryForm.sendCopyTo': 'Senden Sie eine Kopie an:',
          'AdvisoryForm.submit': 'Abschicken',
          'AdvisoryForm.succeedMessage':
            'Ihre Anfrage wurde erfolgreich gesendet',
          'AdvisoryForm.title': 'Anforderung von Produktinformationen',
          'Breadcrumbs.homepage': 'Startseite',
          'Breadcrumbs.searchFor': 'Suchen nach {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Betrachtungen',
          'Categories.filterBar.overview': 'Übersicht',
          'Categories.filterBar.productgroups': 'Produktgruppen',
          'Categories.filterBar.products': 'Produkte',
          'Categories.filterBar.selectDisplayTypeLabel': 'Anzeigen',
          'Categories.meta.description':
            'Entdecken Sie {name} bei KRAMP. Das größte Sortiment an {name} finden Sie online. It´s that easy!',
          'Categories.noResultsMessage': 'Keine Ergebnisse',
          'Categories.overview.actions':
            '{productsLink} or {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Produktgruppen ansehen',
          'Categories.overview.actions.viewProducts': 'Produkte ansehen',
          'Categories.overview.description':
            'Es gibt {numOfProductGroups} Produktgruppen in dieser Kategorie mit {numOfProducts} Produkten.',
          'Categories.overview.title': 'Ergebnisse',
          'Categories.quickView.closeButton': 'Schließen',
          'Categories.quickView.goToProductButton': 'Zur Produktseite wechseln',
          'Categories.quickView.previewButton': 'Produkt Vorschauen',
          'Categories.subCategoriesLabel': 'Kategorien A-Z',
          'ErrorHandler.unableToLoad':
            'Sieht aus, als wäre etwas schief gelaufen! Bitte versuchen Sie es später erneut',
          'ErrorHandler.buttonLabelTryAgain': 'Versuch es noch einmal',
          'Facets.categories.mobile.showSubcategories': 'Unterkategorien',
          'Facets.categories.title': 'In derzeitiger Kategorie suchen',
          'Facets.categories.toggleButton.less': 'Weniger anzeigen',
          'Facets.categories.toggleButton.more': 'Mehr anzeigen',
          'Facets.clear': 'Filter löschen',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Ergebnisse werden geladen',
          'Facets.search.placeholder': 'Suche',
          'Facets.showResults': 'Filter anwenden',
          'Form.mandatoryField': 'Dieses Feld muss gefüllt werden',
          'Form.invalidEmailAddress': 'Ungültige E-Mail-Adresse',
          'MediaAssets.downloadLink': 'Download',
          'MediaAssets.images': 'Bilder',
          'MediaAssets.media': 'Medien',
          'MediaAssets.safetySheets': 'Sicherheitsdatenblatt',
          'MediaAssets.technicalDrawings': 'Technische Informationen',
          'MediaAssets.videos': 'Videos',
          'PrintAction.print': 'Drucken',
          'ProductConfigurator.button.HelpConfigurator':
            'Häufig gestellte Fragen',
          'ProductConfigurator.button.StartConfigurator':
            'Konfiguration starten',
          'ProductConfigurator.list.1':
            'Schnell und unkompliziert konfigurieren',
          'ProductConfigurator.list.2': 'Direkt in den Warenkorb legen',
          'ProductConfigurator.title':
            'Sie benötigen Produkte nach Maß? Konfigurieren und bestellen Sie ab sofort online! Ihre Vorteile:',
          'ProductGroup.link.scrollToMedia': 'Blättern Sie zur Medien',
          'ProductGroup.link.scrollToProductsTable':
            'Blättern Sie zur Produkttabelle',
          'ProductGroup.meta.description':
            'Entdecken Sie {name} bei KRAMP. Das größte Sortiment an {name} finden Sie online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Artikelgruppe blättern',
          'ProductGroup.productTable.deliveryTime': 'Lieferzeit',
          'ProductGroup.productTable.fullscreen': 'Vollbildschirm',
          'ProductGroup.productTable.noProductsMessage': 'keine Produkte',
          'ProductGroup.productTable.price': 'Preis',
          'ProductGroup.productTable.product': 'Product',
          'ProductGroupItem.goToProductsLink': 'Zu den Produkten',
          'ProductItem.advisory.description':
            'Bitte nehmen Sie Kontakt mit uns auf, um den Preis und Lieferzeit und weitere Informationen',
          'ProductItem.advisory.title': 'Produkt mit Sonderberatung',
          'ProductItem.buttons.addToCart': 'In den Warenkorb',
          'ProductItem.discountCode': 'Rabattcode',
          'ProductItem.discountCode.fetchError':
            'Der Abruf des RC ist fehlgeschlagen',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Bruttopreis',
          'ProductItem.grossPrice.fetchError':
            'Der Abruf des Bruttopreis ist fehlgeschlagen',
          'ProductItem.id': 'Artikelnummer',
          'ProductItem.input.remarks': 'Ihre Referenz',
          'ProductItem.netPrice': 'Nettopreis',
          'ProductItem.netPrice.fetchError':
            'Der Abruf des Nettopreises ist fehlgeschlagen',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable':
            'Dieser Artikel kann nicht retour gegeben werden',
          'ProductItem.quantity': 'Menge',
          'ProductItem.quantity.roundingWarning':
            'Abgerundete Menge validieren',
          'ProductItem.quantityUnit': 'Einheit',
          'ProductItem.relations.accessories': 'Zubehör',
          'ProductItem.relations.alternatives': 'Alternativen',
          'ProductItem.relations.spareParts': 'Ersatzteile',
          'ProductItem.replacement': 'Produkt ersetzt:',
          'ProductItem.tags.new': 'Neuer artikel',
          'ProductItem.volumeDiscounts': 'Rabattpreise',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Preis',
          'Search.activeFacets.clear': 'Filter löschen',
          'Search.allCategories': 'Alle',
          'Search.noResults': 'Leider ergab Ihre Suche keine Treffer.',
          'Search.queryValidation.lessThan2Chars':
            'Bitte geben Sie mindestens 2 Zeichen ein!',
          'Search.queryValidation.nonEmpty':
            'Bitte geben Sie einen Suchbegriff ein',
          'Search.queryValidation.tooManyCharacters':
            'Bitte geben Sie nicht mehr als {maxCharacters} Zeichen ein!',
          'Search.results.didYouMean': 'Meinten Sie',
          'Search.results.searchForTitle': 'Suchergebnisse für {searchTerm}',
          'Search.results.summary':
            'Wir haben {numberOfResults} Ergebnisse gefunden. Sie können Ihre Suche durch das Filtern in der Spalte links verfeinern.',
          'Search.results.summaryNoMatch':
            "Für Ihre Suche nach ''{originalSearchTerm}'' wurden keine Ergebnisse gefunden.",
          'Search.results.translatedSearch':
            "Ergebnisse für ''{translatedSearchTerm}'' werden angezeigt ({numOfResults} Treffer).",
          'Search.searchInAllCategories': 'In allen Kategorien suchen',
          'Search.searchInCategory': 'In Kategorie suchen',
          'UnauthorizedMessage.body':
            'Sie wurden abgemeldet, bitte melden Sie sich erneut an.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Abgemeldet bleiben',
          'UnauthorizedMessage.loginButton': 'Anmelden',
          'UnauthorizedMessage.title': 'Ihre Sitzung ist abgelaufen',
        }
      ),
      p = function () {
        return (p =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      m = p(
        p(p({}, o.translations.en), {
          Services: 'services',
          ConfiguratorHelp: 'kramp-product-configurator',
        }),
        {
          'AdvisoryForm.contactMethod': 'Contact me by',
          'AdvisoryForm.email': 'E-mail',
          'AdvisoryForm.failedMessage':
            'Failed to send your request! Please try again later',
          'AdvisoryForm.fax': 'Fax',
          'AdvisoryForm.phone': 'Phone',
          'AdvisoryForm.remarks': 'Comment / request',
          'AdvisoryForm.sendCopyTo': 'Send a copy to:',
          'AdvisoryForm.submit': 'Submit',
          'AdvisoryForm.succeedMessage':
            'Your request has been successfully sent',
          'AdvisoryForm.title': 'Product information request',
          'Breadcrumbs.homepage': 'Homepage',
          'Breadcrumbs.searchFor': 'Search for {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Views',
          'Categories.filterBar.overview': 'Overview',
          'Categories.filterBar.productgroups': 'Product groups',
          'Categories.filterBar.products': 'Products',
          'Categories.filterBar.selectDisplayTypeLabel': 'Show',
          'Categories.meta.description':
            "Discover {name} at KRAMP. You can find the largest range of {name} products online. It's that easy!",
          'Categories.noResultsMessage': 'No results',
          'Categories.overview.actions':
            '{productsLink} or {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'View product groups',
          'Categories.overview.actions.viewProducts': 'View products',
          'Categories.overview.description':
            'There are {numOfProductGroups} product groups in this category containing {numOfProducts} products.',
          'Categories.overview.title': 'Results',
          'Categories.quickView.closeButton': 'Close',
          'Categories.quickView.goToProductButton': 'Go to product page',
          'Categories.quickView.previewButton': 'Product preview',
          'Categories.subCategoriesLabel': 'Categories A–Z',
          'ErrorHandler.unableToLoad':
            "Looks like something's gone wrong! Please try again later",
          'ErrorHandler.buttonLabelTryAgain': 'Try again',
          'Facets.categories.mobile.showSubcategories': 'Subcategories',
          'Facets.categories.title': 'Search in current category',
          'Facets.categories.toggleButton.less': 'Show less',
          'Facets.categories.toggleButton.more': 'Show more',
          'Facets.clear': 'Clear filter',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Loading results',
          'Facets.search.placeholder': 'Search',
          'Facets.showResults': 'Apply filter',
          'Form.mandatoryField': 'This field must be completed',
          'Form.invalidEmailAddress': 'Invalid e-mail address',
          'MediaAssets.downloadLink': 'Downloads',
          'MediaAssets.images': 'Images',
          'MediaAssets.media': 'Media',
          'MediaAssets.safetySheets': 'Safety sheets',
          'MediaAssets.technicalDrawings': 'Technical information',
          'MediaAssets.videos': 'Videos',
          'PrintAction.print': 'Print',
          'ProductConfigurator.button.HelpConfigurator': 'FAQs',
          'ProductConfigurator.button.StartConfigurator': 'Start configuration',
          'ProductConfigurator.list.1': 'Configure products quickly and easily',
          'ProductConfigurator.list.2':
            'Add products directly to your shopping cart',
          'ProductConfigurator.title':
            'Need customized products? Configure products and order them online now! Your benefits:',
          'ProductGroup.link.scrollToMedia': 'Browse to media',
          'ProductGroup.link.scrollToProductsTable': 'Browse to product table',
          'ProductGroup.meta.description':
            "Discover {name} at KRAMP. You can find the largest range of {name} products online. It's that easy!",
          'ProductGroup.navigationBar.title': 'Scroll over item groups',
          'ProductGroup.productTable.deliveryTime': 'Delivery time',
          'ProductGroup.productTable.fullscreen': 'Full screen',
          'ProductGroup.productTable.noProductsMessage': 'No products',
          'ProductGroup.productTable.price': 'Price',
          'ProductGroup.productTable.product': 'Product',
          'ProductGroupItem.goToProductsLink': 'View products',
          'ProductItem.advisory.description':
            'Please contact us regarding prices, delivery times and any other information required',
          'ProductItem.advisory.title': 'Product with advisory note',
          'ProductItem.buttons.addToCart': 'Add to cart',
          'ProductItem.discountCode': 'Discount code',
          'ProductItem.discountCode.fetchError':
            'Cannot retrieve the discount code',
          'ProductItem.discountCode.label': 'DC',
          'ProductItem.grossPrice': 'Gross price',
          'ProductItem.grossPrice.fetchError':
            'Cannot retrieve the gross price',
          'ProductItem.id': 'Part number',
          'ProductItem.input.remarks': 'Comment',
          'ProductItem.netPrice': 'Net price',
          'ProductItem.netPrice.fetchError': 'Cannot retrieve the net price',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'This is a non returnable product',
          'ProductItem.quantity': 'Quantity',
          'ProductItem.quantity.roundingWarning': 'Validate rounded quantity',
          'ProductItem.quantityUnit': 'Unit',
          'ProductItem.relations.accessories': 'Accessories',
          'ProductItem.relations.alternatives': 'Alternatives',
          'ProductItem.relations.spareParts': 'Spare parts',
          'ProductItem.replacement': 'Product replaced',
          'ProductItem.tags.new': 'New product',
          'ProductItem.volumeDiscounts': 'Discount prices',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Price',
          'Search.activeFacets.clear': 'Clear filter',
          'Search.allCategories': 'All',
          'Search.noResults': 'Unfortunately, your search returned no results',
          'Search.queryValidation.lessThan2Chars':
            'Please enter at least 2 characters!',
          'Search.queryValidation.nonEmpty': 'Please enter a search term',
          'Search.queryValidation.tooManyCharacters':
            'Please do not enter more than {maxCharacters} characters!',
          'Search.results.didYouMean': 'Did you mean',
          'Search.results.searchForTitle': 'Search results for {searchTerm}',
          'Search.results.summary':
            'We found {numberOfResults} results. You can refine your search using the filters in the left hand column.',
          'Search.results.summaryNoMatch':
            "Your search for ''{originalSearchTerm}'' returned no results",
          'Search.results.translatedSearch':
            "Showing results for ''{translatedSearchTerm}'' ({numOfResults} matches).",
          'Search.searchInAllCategories': 'Search in all categories',
          'Search.searchInCategory': 'Search in category',
          'UnauthorizedMessage.body':
            'You have been logged out. Please log in again.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Stay logged out',
          'UnauthorizedMessage.loginButton': 'Log in',
          'UnauthorizedMessage.title': 'Your session has expired',
        }
      ),
      g = function () {
        return (g =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      f = g(g({}, m), {
        ConfiguratorHelp: 'kramp-configurator',
      }),
      y = function () {
        return (y =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      h = y(
        y(y({}, o.translations.es), {
          Services: 'servicio',
          ConfiguratorHelp: 'configurador-online',
        }),
        {
          'AdvisoryForm.contactMethod': 'Ponerse en contacto conmigo por',
          'AdvisoryForm.email': 'Dirección de correo electrónico',
          'AdvisoryForm.failedMessage':
            'Su solicitud no se ha podido enviar. Vuelva a intentarlo más tarde.',
          'AdvisoryForm.phone': 'Teléfono',
          'AdvisoryForm.remarks': 'Observaciones / solicitud',
          'AdvisoryForm.sendCopyTo': 'Enviar una copia a:',
          'AdvisoryForm.submit': 'Enviar',
          'AdvisoryForm.succeedMessage':
            'Su solicitud se ha enviado correctamente.',
          'AdvisoryForm.title': 'Solicitud de información sobre productos',
          'Breadcrumbs.homepage': 'Página de inicio',
          'Breadcrumbs.searchFor': 'Buscar {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Vistas',
          'Categories.filterBar.overview': 'Vista general',
          'Categories.filterBar.productgroups': 'Grupos de productos',
          'Categories.filterBar.products': 'Productos',
          'Categories.filterBar.selectDisplayTypeLabel': 'Mostrar',
          'Categories.meta.description':
            'Descubra {name} en KRAMP. Encontrará el mayor surtido de {name} online. Es así de sencillo.',
          'Categories.noResultsMessage': 'No se han encontrado resultados',
          'Categories.overview.actions': '{productsLink} o {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Ver grupos de productos',
          'Categories.overview.actions.viewProducts': 'Ver productos',
          'Categories.overview.description':
            'Hay {numOfProductGroups} grupos de productos en esta categoría con {numOfProducts} productos.',
          'Categories.overview.title': 'Resultados',
          'Categories.quickView.closeButton': 'Cerrar',
          'Categories.quickView.goToProductButton':
            'Ir a la página de productos',
          'Categories.quickView.previewButton': 'Previsualizar producto',
          'Categories.subCategoriesLabel': 'Categorías A-Z',
          'ErrorHandler.unableToLoad':
            'Parece que ha habido un error. Vuelva a intentarlo más tarde.',
          'ErrorHandler.buttonLabelTryAgain': 'Inténtalo de nuevo',
          'Facets.categories.mobile.showSubcategories': 'Subcategorías',
          'Facets.categories.title': 'Buscar en la categoría actual',
          'Facets.categories.toggleButton.less': 'Mostrar menos',
          'Facets.categories.toggleButton.more': 'Mostrar más',
          'Facets.clear': 'Borrar filtros',
          'Facets.filter': 'Filtros',
          'Facets.loadingResults': 'Cargando resultados',
          'Facets.search.placeholder': 'Buscar',
          'Facets.showResults': 'Utilizar filtros',
          'Form.mandatoryField': 'Campo obligatorio',
          'Form.invalidEmailAddress':
            'Dirección de correo electrónico no válida',
          'MediaAssets.downloadLink': 'Descargar',
          'MediaAssets.images': 'Imágenes',
          'MediaAssets.media': 'Multimedia',
          'MediaAssets.safetySheets': 'Hoja de datos de seguridad',
          'MediaAssets.technicalDrawings': 'Información técnica',
          'MediaAssets.videos': 'Vídeos',
          'PrintAction.print': 'Imprimir',
          'ProductConfigurator.button.HelpConfigurator': 'Preguntas frecuentes',
          'ProductConfigurator.button.StartConfigurator':
            'Comenzar la configuración',
          'ProductConfigurator.list.1':
            'La configuración es rápida y sencilla.',
          'ProductConfigurator.list.2':
            'Puede añadirlos a la cesta de la compra directamente.',
          'ProductConfigurator.title':
            '¿Necesita productos a medida? Ya puede configurarlos y pedirlos online. Ventajas:',
          'ProductGroup.link.scrollToMedia':
            'Desplazarse por los elementos multimedia',
          'ProductGroup.link.scrollToProductsTable':
            'Desplazarse por la tabla del producto',
          'ProductGroup.meta.description':
            'Descubra {name} en KRAMP. Encontrará el mayor surtido de {name} online. Es así de sencillo.',
          'ProductGroup.navigationBar.title':
            'Desplazarse por los grupos de artículos',
          'ProductGroup.productTable.deliveryTime': 'Fecha de entrega',
          'ProductGroup.productTable.fullscreen': 'Pantalla completa',
          'ProductGroup.productTable.noProductsMessage': 'Sin productos',
          'ProductGroup.productTable.price': 'Precio',
          'ProductGroup.productTable.product': 'Producto',
          'ProductGroupItem.goToProductsLink': 'Ver productos',
          'ProductItem.advisory.description':
            'Póngase en contacto con nosotros para hablar del precio, el plazo de entrega y otros aspectos.',
          'ProductItem.advisory.title': 'Producto con asesoramiento especial',
          'ProductItem.buttons.addToCart': 'Añadir al carro',
          'ProductItem.discountCode': 'Código de descuento',
          'ProductItem.discountCode.fetchError':
            'No se ha podido obtener el código de descuento.',
          'ProductItem.discountCode.label': 'CD',
          'ProductItem.grossPrice': 'Precio bruto',
          'ProductItem.grossPrice.fetchError':
            'No se ha podido obtener el precio bruto',
          'ProductItem.id': 'Número de artículo',
          'ProductItem.input.remarks': 'Tu referencia',
          'ProductItem.netPrice': 'Precio neto',
          'ProductItem.netPrice.fetchError':
            'No se ha podido obtener el precio neto.',
          'ProductItem.netPrice.linkText': 'PN',
          'ProductItem.nonReturnable': 'Este producto no es retornable',
          'ProductItem.quantity': 'Cantidad',
          'ProductItem.quantity.roundingWarning':
            'Debe validar la cantidad redondeada',
          'ProductItem.quantityUnit': 'Unidad',
          'ProductItem.relations.accessories': 'Accesorios',
          'ProductItem.relations.alternatives': 'Alternativas',
          'ProductItem.relations.spareParts': 'Piezas de repuesto',
          'ProductItem.replacement': 'Producto sustituido',
          'ProductItem.tags.new': 'Nuevo artículo',
          'ProductItem.volumeDiscounts': 'Precios con descuento',
          'ProductItem.volumeDiscounts.linkText': 'PN',
          'ProductItem.volumeDiscounts.price': 'Precio',
          'Search.activeFacets.clear': 'Borrar filtros',
          'Search.allCategories': 'Todos',
          'Search.noResults':
            'Lo sentimos, pero no hay resultados para su búsqueda.',
          'Search.queryValidation.lessThan2Chars':
            'Introduzca al menos 2 caracteres.',
          'Search.queryValidation.nonEmpty':
            'Por favor, introduzca un término de búsqueda',
          'Search.queryValidation.tooManyCharacters':
            'No introduzca más de {maxCharacter} caracteres.',
          'Search.results.didYouMean': 'Quizá quiso decir',
          'Search.results.searchForTitle':
            'Resultados para la búsqueda de {searchTerm}',
          'Search.results.summary':
            'Hemos encontrado {numberOfResults} resultados. Puede restringir su búsqueda utilizando los filtros de la columna de la izquierda.',
          'Search.results.summaryNoMatch':
            "No se han encontrado resultados para su búsqueda de '{originalSearchTerm}'.",
          'Search.results.translatedSearch':
            "Mostrando resultados de ''{translatedSearchTerm}'' ({numOfResults} coincidencias).",
          'Search.searchInAllCategories': 'Buscar en todas las categorías',
          'Search.searchInCategory': 'Buscar en la categoría',
          'UnauthorizedMessage.body':
            'Se ha cerrado la sesión. Vuelva a iniciar sesión.',
          'UnauthorizedMessage.continueLoggedOffLink':
            'Mantener la sesión cerrada',
          'UnauthorizedMessage.loginButton': 'Iniciar sesión',
          'UnauthorizedMessage.title': 'La sesión ha caducado',
        }
      ),
      v = function () {
        return (v =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      b = v(v({}, h), {
        ConfiguratorHelp: 'configurador-de-kramp',
      }),
      C = function () {
        return (C =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      P = C(
        C(C({}, o.translations.fi), {
          Services: 'services',
          ConfiguratorHelp: 'configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Yhteydenottopyyntö',
          'AdvisoryForm.email': 'Sähköpostiosoite',
          'AdvisoryForm.failedMessage':
            'Pyyntöäsi ei voitu lähettää. Yritä myöhemmin uudelleen.',
          'AdvisoryForm.phone': 'Puhelin',
          'AdvisoryForm.remarks': 'Huomautukset/pyyntö',
          'AdvisoryForm.sendCopyTo': 'Lähetä kopio osoitteeseen:',
          'AdvisoryForm.submit': 'Lähetä',
          'AdvisoryForm.succeedMessage': 'Pyyntösi on lähetetty.',
          'AdvisoryForm.title': 'Pyydä tuotetiedot',
          'Breadcrumbs.homepage': 'Etusivu',
          'Breadcrumbs.searchFor': 'Hakusana',
          'Categories.filterBar.displayModeLabel': 'Näytä vaihtoehdot',
          'Categories.filterBar.overview': 'Yleiskatsaus',
          'Categories.filterBar.productgroups': 'Tuoteryhmät',
          'Categories.filterBar.products': 'Tuotteet',
          'Categories.filterBar.selectDisplayTypeLabel': 'Näytä',
          'Categories.meta.description':
            'Tutustu KRAMPin {name} -tuotteisiin. Löydät laajan valikoiman {name} -tuotteita verkkokaupasta. It´s that easy!',
          'Categories.noResultsMessage': 'Ei osumia',
          'Categories.overview.actions':
            '{productsLink} tai  {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups': 'Katso tuoteryhmiä',
          'Categories.overview.actions.viewProducts': 'Katso tuotteita',
          'Categories.overview.description':
            'Tähän kategoriaan sisältyy {numOfProductGroups} tuoteryhmää, joissa on {numOfProducts} tuotetta.',
          'Categories.overview.title': 'Osumat',
          'Categories.quickView.closeButton': 'Sulje',
          'Categories.quickView.goToProductButton': 'Siirry tuotesivulle',
          'Categories.quickView.previewButton': 'Tuotteen esikatselu',
          'Categories.subCategoriesLabel': 'Kategoriat A-Ö',
          'ErrorHandler.unableToLoad':
            'Jokin taisi mennä pieleen! Yritä myöhemmin uudelleen',
          'ErrorHandler.buttonLabelTryAgain': 'Yritä uudelleen',
          'Facets.categories.mobile.showSubcategories': 'Alakategoriat',
          'Facets.categories.title': 'Hae nykyisestä kategoriasta',
          'Facets.categories.toggleButton.less': 'Näytä vähemmän',
          'Facets.categories.toggleButton.more': 'Näytä enemmän',
          'Facets.clear': 'Poista suodatus',
          'Facets.filter': 'Suodatin',
          'Facets.loadingResults': 'Osumia ladataan',
          'Facets.search.placeholder': 'Hae',
          'Facets.showResults': 'Suodata',
          'Form.mandatoryField': 'Tämä kenttä on pakollinen',
          'Form.invalidEmailAddress': 'Sähköpostiosoite ei kelpaa',
          'MediaAssets.downloadLink': 'Lataa',
          'MediaAssets.images': 'Kuvat',
          'MediaAssets.media': 'Media',
          'MediaAssets.safetySheets': 'Käyttöturvallisuustiedote',
          'MediaAssets.technicalDrawings': 'Tekniset tiedot',
          'MediaAssets.videos': 'Videot',
          'PrintAction.print': 'Tulosta',
          'ProductConfigurator.button.HelpConfigurator': 'Usein kysyttyä',
          'ProductConfigurator.button.StartConfigurator':
            'Aloita tuotteen määrittäminen',
          'ProductConfigurator.list.1': 'Nopea ja helppo määrittäminen',
          'ProductConfigurator.list.2': 'Lisää suoraan ostoskoriin',
          'ProductConfigurator.title':
            'Tarvitsetko mitoitettua tuotetta? Määritä tuote ja tilaa verkossa! Etusi:',
          'ProductGroup.link.scrollToMedia': 'Siirry mediakirjastoon',
          'ProductGroup.link.scrollToProductsTable': 'Näytä tuotetaulukot',
          'ProductGroup.meta.description':
            "Tee löytöja KRAMPilta  {name}. Löydät laajan valikoiman tuotteita  {name}  verkkokaupasta. It's that easy!",
          'ProductGroup.navigationBar.title': 'Selaa tuoteryhmiä',
          'ProductGroup.productTable.deliveryTime': 'Toimitusaika',
          'ProductGroup.productTable.fullscreen': 'Koko näyttö',
          'ProductGroup.productTable.noProductsMessage': 'Ei tuotteita',
          'ProductGroup.productTable.price': 'Hinta ALV 0 %',
          'ProductGroup.productTable.product': 'Tuote',
          'ProductGroupItem.goToProductsLink': 'Tuotteisiin',
          'ProductItem.advisory.description':
            'Ota meihin yhteys ja kysy hinta, toimitusaika ja muita tietoja',
          'ProductItem.advisory.title': 'Tuote, jolla on lisätietoja',
          'ProductItem.buttons.addToCart': 'Ostoskorissa',
          'ProductItem.discountCode': 'Alennuskoodi',
          'ProductItem.discountCode.fetchError':
            'Alennuskoodin haku epäonnistui',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Bruttohinta ALV 0 %',
          'ProductItem.grossPrice.fetchError': 'Bruttohinnan haku epäonnistui',
          'ProductItem.id': 'Tuotenumero',
          'ProductItem.input.remarks': 'Kommentit',
          'ProductItem.netPrice': 'Nettohinta ALV 0 %',
          'ProductItem.netPrice.fetchError': 'Nettohinnan haku epäonnistui',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Tämä on tuote, jota ei voi palauttaa',
          'ProductItem.quantity': 'Määrä',
          'ProductItem.quantity.roundingWarning': 'Vahvista pyöristetty määrä',
          'ProductItem.quantityUnit': 'Yksikkö',
          'ProductItem.relations.accessories': 'Lisätarvikkeet',
          'ProductItem.relations.alternatives': 'Vaihtoehdot',
          'ProductItem.relations.spareParts': 'Varaosat',
          'ProductItem.replacement': 'Tuote korvattu',
          'ProductItem.tags.new': 'Uusi tuote',
          'ProductItem.volumeDiscounts': 'Alennushinta',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Hinta',
          'Search.activeFacets.clear': 'Poista suodatus',
          'Search.allCategories': 'Kaikki',
          'Search.noResults': 'Hakusi ei valitettavasti tuottanut osumia',
          'Search.queryValidation.lessThan2Chars':
            'Kirjoita vähintää 2 merkkiä',
          'Search.queryValidation.nonEmpty': 'Anna hakutermi',
          'Search.queryValidation.tooManyCharacters':
            'Anna enintään {maxCharacters} merkkiä',
          'Search.results.didYouMean': 'Tarkoititko',
          'Search.results.searchForTitle': 'Osumat haulle {searchTerm}',
          'Search.results.summary':
            'Löysimme {numberOfResults} osumaa. Voit tarkentaa hakuasi vasemmassa sarakkeessa olevan suodattimen avulla.',
          'Search.results.summaryNoMatch':
            'Hakusi ”{originalSearchTerm}” ei tuottanut osumia',
          'Search.results.translatedSearch':
            'Näytetään osumat haulle ”{translatedSearchTerm}” ({numOfResults} osumaa).',
          'Search.searchInAllCategories': 'Hae kaikista kategorioista',
          'Search.searchInCategory': 'Hae kategoriasta',
          'UnauthorizedMessage.body':
            'Olet kirjautunut ulos, kirjaudu sisään uudelleen.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Pysy uloskirjautuneena',
          'UnauthorizedMessage.loginButton': 'Kirjaudu',
          'UnauthorizedMessage.title': 'Istuntosi on vanhentunut',
        }
      ),
      I = function () {
        return (I =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      O = I(
        I(I({}, o.translations.fr), {
          Services: 'services',
          ConfiguratorHelp: 'easyservices/configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Me contacter par',
          'AdvisoryForm.email': 'Adresse e-mail',
          'AdvisoryForm.failedMessage':
            "Votre demande n'a pas pu être envoyée. Veuillez réessayer plus tard.",
          'AdvisoryForm.phone': 'Téléphone',
          'AdvisoryForm.remarks': 'Commentaires/Demande',
          'AdvisoryForm.sendCopyTo': 'Envoyer une copie à :',
          'AdvisoryForm.submit': 'Envoyer',
          'AdvisoryForm.succeedMessage':
            'Votre demande a été envoyée avec succès.',
          'AdvisoryForm.title': 'Demander des informations sur le produit',
          'Breadcrumbs.homepage': "Page d'accueil",
          'Breadcrumbs.searchFor': 'Rechercher {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Affichages',
          'Categories.filterBar.overview': 'Aperçu',
          'Categories.filterBar.productgroups': 'Groupes de produits',
          'Categories.filterBar.products': 'Produits',
          'Categories.filterBar.selectDisplayTypeLabel': 'Afficher',
          'Categories.meta.description':
            "Découvrez {name} chez KRAMP. Notre boutique en ligne propose la plus grande sélection de {name}. It's that easy!",
          'Categories.noResultsMessage': 'Aucun résultat',
          'Categories.overview.actions':
            '{productsLink} ou {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Afficher les groupes de produits',
          'Categories.overview.actions.viewProducts': 'Afficher les produits',
          'Categories.overview.description':
            'Il y a {numOfProductGroups} groupes de produits dans cette catégorie contenant {numOfProducts} produits.',
          'Categories.overview.title': 'Résultats',
          'Categories.quickView.closeButton': 'Fermer',
          'Categories.quickView.goToProductButton': 'Accéder à la page produit',
          'Categories.quickView.previewButton': 'Aperçu du produit',
          'Categories.subCategoriesLabel': 'Catégories A-Z',
          'ErrorHandler.unableToLoad':
            'Il semble que nous avons rencontré un problème ! Veuillez réessayer plus tard',
          'ErrorHandler.buttonLabelTryAgain': 'Réessayer',
          'Facets.categories.mobile.showSubcategories': 'Sous-catégories',
          'Facets.categories.title': 'Rechercher dans la catégorie actuelle',
          'Facets.categories.toggleButton.less': 'Afficher moins',
          'Facets.categories.toggleButton.more': 'Afficher plus',
          'Facets.clear': 'Supprimer le filtre',
          'Facets.filter': 'Filtre',
          'Facets.loadingResults': 'Chargement des résultats',
          'Facets.search.placeholder': 'Recherche',
          'Facets.showResults': 'Appliquer le filtre',
          'Form.mandatoryField': 'Ce champ doit être rempli',
          'Form.invalidEmailAddress': "L'adresse e-mail n'est pas valide",
          'MediaAssets.downloadLink': 'Télécharger',
          'MediaAssets.images': 'Images',
          'MediaAssets.media': 'Supports',
          'MediaAssets.safetySheets': 'Fiches de sécurité',
          'MediaAssets.technicalDrawings': 'Caractéristiques techniques',
          'MediaAssets.videos': 'Vidéos',
          'PrintAction.print': 'Imprimer',
          'ProductConfigurator.button.HelpConfigurator':
            'Questions fréquemment posées',
          'ProductConfigurator.button.StartConfigurator':
            'Commencer la configuration',
          'ProductConfigurator.list.1': 'Configuration rapide et simple',
          'ProductConfigurator.list.2':
            'Produits directement ajoutés au panier',
          'ProductConfigurator.title':
            'Vous avez besoin de produits sur mesure ? Configurez et commandez-les sur Internet dès maintenant ! Vous profitez des avantages suivants :',
          'ProductGroup.link.scrollToMedia': 'Accéder aux supports',
          'ProductGroup.link.scrollToProductsTable':
            'Accéder au tableau des produits',
          'ProductGroup.meta.description':
            "Découvrez {name} chez KRAMP. Notre boutique en ligne propose la plus grande sélection de {name}. It's that easy!",
          'ProductGroup.navigationBar.title': 'catégorie',
          'ProductGroup.productTable.deliveryTime': 'Date de livraison',
          'ProductGroup.productTable.fullscreen': 'Plein écran',
          'ProductGroup.productTable.noProductsMessage': 'Aucun produit',
          'ProductGroup.productTable.price': 'Prix',
          'ProductGroup.productTable.product': 'Produit',
          'ProductGroupItem.goToProductsLink': 'Afficher les produits',
          'ProductItem.advisory.description':
            'Veuillez nous contacter pour les prix, les délais de livraison et toute autre information nécessaire.',
          'ProductItem.advisory.title':
            'Produit avec recommandations spéciales',
          'ProductItem.buttons.addToCart': 'Ajouter au panier',
          'ProductItem.discountCode': 'Code promotionnel',
          'ProductItem.discountCode.fetchError':
            'Impossible de récupérer le code de réduction',
          'ProductItem.discountCode.label': 'CR',
          'ProductItem.grossPrice': 'Prix brut',
          'ProductItem.grossPrice.fetchError':
            'La demande de prix brut a échoué',
          'ProductItem.id': 'Référence',
          'ProductItem.input.remarks': 'Votre référence',
          'ProductItem.netPrice': 'Prix net',
          'ProductItem.netPrice.fetchError': 'La demande de prix net a échoué',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Ce produit ne peut être retourné',
          'ProductItem.quantity': 'Quantité',
          'ProductItem.quantity.roundingWarning':
            'Valider la quantité arrondie',
          'ProductItem.quantityUnit': 'Unité',
          'ProductItem.relations.accessories': 'Accessoires',
          'ProductItem.relations.alternatives': 'Alternatives',
          'ProductItem.relations.spareParts': 'Pièces de rechange',
          'ProductItem.replacement': 'Produit remplacé',
          'ProductItem.tags.new': 'Nouvel article',
          'ProductItem.volumeDiscounts': 'Réductions',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Prix',
          'Search.activeFacets.clear': 'Supprimer le filtre',
          'Search.allCategories': 'Tout',
          'Search.noResults':
            "Votre recherche n'a malheureusement donné aucun résultat",
          'Search.queryValidation.lessThan2Chars':
            'Saisissez au moins 2 caractères !',
          'Search.queryValidation.nonEmpty':
            'Veuillez saisir un terme de recherche',
          'Search.queryValidation.tooManyCharacters':
            'Ne saisissez pas plus de {maxCharacters} caractères !',
          'Search.results.didYouMean': "Essayez avec l'orthographe",
          'Search.results.searchForTitle':
            'Résultats de la recherche pour {searchTerm}',
          'Search.results.summary':
            "{numberOfResults} résultats ont été trouvés. Vous pouvez affiner votre recherche à l'aide des filtres dans la colonne de gauche.",
          'Search.results.summaryNoMatch':
            "Votre recherche pour ''{originalSearchTerm}'' n'a donné aucun résultat",
          'Search.results.translatedSearch':
            "Résultats de la recherche pour ''{translatedSearchTerm}'' ({numOfResults} résultats).",
          'Search.searchInAllCategories':
            'Rechercher dans toutes les catégories',
          'Search.searchInCategory': 'Rechercher dans la catégorie',
          'UnauthorizedMessage.body':
            'Vous avez été déconnecté. Veuillez vous reconnecter.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Rester déconnecté',
          'UnauthorizedMessage.loginButton': 'Connexion',
          'UnauthorizedMessage.title': 'Votre session a expiré',
        }
      ),
      T = function () {
        return (T =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      E = T(T({}, O), {
        ConfiguratorHelp: 'configurateur-kramp',
      }),
      _ = function () {
        return (_ =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      A = _(_({}, O), {
        ConfiguratorHelp: 'configurateur-kramp',
      }),
      S = function () {
        return (S =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      k = S(
        S(S({}, o.translations.hu), {
          Services: 'szolgaltatas',
          ConfiguratorHelp: 'kramp-konfigurator',
        }),
        {
          'AdvisoryForm.contactMethod':
            'A következő módon vegyék fel velem a kapcsolatot:',
          'AdvisoryForm.email': 'E-mail-cím',
          'AdvisoryForm.failedMessage':
            'A kérés elküldése sikertelen volt. Próbálja újra később.',
          'AdvisoryForm.phone': 'Telefon',
          'AdvisoryForm.remarks': 'Megjegyzések/Kérés',
          'AdvisoryForm.sendCopyTo': 'Másolat küldése a következő címre:',
          'AdvisoryForm.submit': 'Küldés',
          'AdvisoryForm.succeedMessage':
            'A kérés elküldése sikeresen megtörtént.',
          'AdvisoryForm.title': 'Termékinformációk kérése',
          'Breadcrumbs.homepage': 'Kezdőlap',
          'Breadcrumbs.searchFor': 'Keresés erre: {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Megtekintések',
          'Categories.filterBar.overview': 'Áttekintés',
          'Categories.filterBar.productgroups': 'Termékcsoportok',
          'Categories.filterBar.products': 'Termékek',
          'Categories.filterBar.selectDisplayTypeLabel': 'Megjelenítés',
          'Categories.meta.description':
            'Fedezze fel a(z) {name}-t a KRAMP-nál. A(z) {name} legnagyobb választékát online találja meg. It´s that easy!',
          'Categories.noResultsMessage': 'Nincs találat',
          'Categories.overview.actions':
            '{productsLink} vagy {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Termékcsoportok megtekintése',
          'Categories.overview.actions.viewProducts': 'Termékek megtekintése',
          'Categories.overview.description':
            '{numOfProductGroups} termékcsoport van ebben a kategóriában, {numOfProducts} termékkel.',
          'Categories.overview.title': 'Találatok',
          'Categories.quickView.closeButton': 'Bezárás',
          'Categories.quickView.goToProductButton': 'Tovább a termékoldalra',
          'Categories.quickView.previewButton': 'Termék előnézete',
          'Categories.subCategoriesLabel': 'Kategóriák A-Z',
          'ErrorHandler.unableToLoad':
            'Úgy tűnik, valami probléma történt! Próbálja újra később',
          'ErrorHandler.buttonLabelTryAgain': 'Próbáld újra',
          'Facets.categories.mobile.showSubcategories': 'Alkategóriák',
          'Facets.categories.title': 'Keresés az aktuális kategóriában',
          'Facets.categories.toggleButton.less': 'Kevesebb mutatása',
          'Facets.categories.toggleButton.more': 'Több mutatása',
          'Facets.clear': 'Szűrő törlése',
          'Facets.filter': 'Szűrő',
          'Facets.loadingResults': 'Találatok betöltése',
          'Facets.search.placeholder': 'Keresés',
          'Facets.showResults': 'Szűrő alkalmazása',
          'Form.mandatoryField': 'Ennek a mezőnek a kitöltése kötelező',
          'Form.invalidEmailAddress': 'Az e-mail cím nem érvényes',
          'MediaAssets.downloadLink': 'Letöltés',
          'MediaAssets.images': 'Képek',
          'MediaAssets.media': 'Média',
          'MediaAssets.safetySheets': 'Biztonsági adatlap',
          'MediaAssets.technicalDrawings': 'Műszaki adatok',
          'MediaAssets.videos': 'Videók',
          'PrintAction.print': 'Nyomtatás',
          'ProductConfigurator.button.HelpConfigurator':
            'Gyakran ismételt kérdések',
          'ProductConfigurator.button.StartConfigurator':
            'Konfiguráció indítása',
          'ProductConfigurator.list.1': 'Gyors és egyszerű konfigurálás',
          'ProductConfigurator.list.2': 'Azonnali kosárba helyezés',
          'ProductConfigurator.title':
            'Méretre gyártott termékekre van szüksége? Konfigurálja és rendelje meg őket azonnal online! Előnyök:',
          'ProductGroup.link.scrollToMedia':
            'Lapozzon a termékkel kapcsolatos tartalmakhoz',
          'ProductGroup.link.scrollToProductsTable':
            'Lapozzon a terméktáblázathoz',
          'ProductGroup.meta.description':
            'Fedezze fel a(z) {name}-t a KRAMP-nál. A(z) {name} legnagyobb választékát online találja meg. It´s that easy!',
          'ProductGroup.navigationBar.title':
            'Tételcsoportok áttekintése görgetéssel',
          'ProductGroup.productTable.deliveryTime': 'Szállítási határidő',
          'ProductGroup.productTable.fullscreen': 'Teljes képernyő',
          'ProductGroup.productTable.noProductsMessage': 'Nincsenek termékek',
          'ProductGroup.productTable.price': 'Ár',
          'ProductGroup.productTable.product': 'Termék',
          'ProductGroupItem.goToProductsLink': 'Termékek megtekintése',
          'ProductItem.advisory.description':
            'Vegye fel velünk a kapcsolatot az árral, a szállítási idővel és a további információkkal kapcsolatban',
          'ProductItem.advisory.title': 'Termék speciális tanácsadással',
          'ProductItem.buttons.addToCart': 'Kosárba',
          'ProductItem.discountCode': 'Promóciós kód',
          'ProductItem.discountCode.fetchError':
            'A promóciós kód lekérése sikertelen volt',
          'ProductItem.discountCode.label': 'Ák',
          'ProductItem.grossPrice': 'Listaár',
          'ProductItem.grossPrice.fetchError':
            'A Listaár lekérése sikertelen volt',
          'ProductItem.id': 'Cikkszám',
          'ProductItem.input.remarks': 'Az Ön referenciája',
          'ProductItem.netPrice': 'Kedv. ár',
          'ProductItem.netPrice.fetchError':
            'A nettó ár lekérése sikertelen volt',
          'ProductItem.netPrice.linkText': 'Kedv. ár',
          'ProductItem.nonReturnable':
            'Egyedi rendelésű, nem visszaküldhető termék. A megrendelést egy plusz szállítási költség terheli.',
          'ProductItem.quantity': 'Mennyiség',
          'ProductItem.quantity.roundingWarning':
            'Kerekített mennyiség jóváhagyása',
          'ProductItem.quantityUnit': 'Egység',
          'ProductItem.relations.accessories': 'Tartozékok',
          'ProductItem.relations.alternatives': 'Alternatívák',
          'ProductItem.relations.spareParts': 'Pótalkatrészek',
          'ProductItem.replacement': 'Termék cserélve',
          'ProductItem.tags.new': 'Új cikk',
          'ProductItem.volumeDiscounts': 'Kedvezményes árak',
          'ProductItem.volumeDiscounts.linkText': 'Kedv. ár',
          'ProductItem.volumeDiscounts.price': 'Ár',
          'Search.activeFacets.clear': 'Szűrő törlése',
          'Search.allCategories': 'Összes',
          'Search.noResults': 'Keresése sajnos nem eredményezett találatot',
          'Search.queryValidation.lessThan2Chars':
            'Legalább 2 karaktert adjon meg!',
          'Search.queryValidation.nonEmpty':
            'Adjon meg egy keresési kifejezést',
          'Search.queryValidation.tooManyCharacters':
            'Legfeljebb {maxCharacters} karaktert adjon meg!',
          'Search.results.didYouMean': 'Esetleg erre gondolt:',
          'Search.results.searchForTitle':
            'Keresési eredmények ehhez: {searchTerm}',
          'Search.results.summary':
            '{numberOfResults} találat. Keresését a bal oldali oszlopban lévő szűrők segítségével pontosíthatja.',
          'Search.results.summaryNoMatch':
            "A(z) ''{originalSearchTerm}'' kifejezésre irányuló keresése nem hozott találatot",
          'Search.results.translatedSearch':
            "Találatok a(z) ''{translatedSearchTerm}'' kifejezésre ({numOfResults} találat)",
          'Search.searchInAllCategories': 'Keresés az összes kategóriában',
          'Search.searchInCategory': 'Keresés a kategóriában',
          'UnauthorizedMessage.body':
            'A rendszer kiléptette, kérjük, jelentkezzen be újra.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Bejelentkezve maradok',
          'UnauthorizedMessage.loginButton': 'Bejelentkezés',
          'UnauthorizedMessage.title': 'Lejárt a munkamenet',
        }
      ),
      D = function () {
        return (D =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      R = D(
        D(D({}, o.translations.it), {
          Services: 'assistenza',
          ConfiguratorHelp: 'configuratore-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Contattatemi per',
          'AdvisoryForm.email': 'Indirizzo e-mail',
          'AdvisoryForm.failedMessage':
            'Impossibile inviare la richiesta. Riprova più tardi.',
          'AdvisoryForm.phone': 'Telefono',
          'AdvisoryForm.remarks': 'Commenti / Richiesta',
          'AdvisoryForm.sendCopyTo': 'Inviare una copia a:',
          'AdvisoryForm.submit': 'Invia',
          'AdvisoryForm.succeedMessage':
            'La richiesta è stata inviata correttamente.',
          'AdvisoryForm.title': 'Richiedi informazioni sui prodotti',
          'Breadcrumbs.homepage': 'Pagina iniziale',
          'Breadcrumbs.searchFor': 'Ricerca {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Visualizzazioni',
          'Categories.filterBar.overview': 'Panoramica',
          'Categories.filterBar.productgroups': 'Gruppi di prodotti',
          'Categories.filterBar.products': 'Prodotti',
          'Categories.filterBar.selectDisplayTypeLabel': 'Mostra',
          'Categories.meta.description':
            'Scopri {name} in KRAMP. Il più grande assortimento di {name} che puoi trovare online. It´s that easy!',
          'Categories.noResultsMessage': 'Nessun risultato',
          'Categories.overview.actions':
            '{productsLink} oppure {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Mostra gruppi di prodotti',
          'Categories.overview.actions.viewProducts': 'Mostra prodotti',
          'Categories.overview.description':
            'In questa categoria vi sono {numOfProductGroups} gruppi di prodotti con {numOfProducts} prodotti.',
          'Categories.overview.title': 'Risultati',
          'Categories.quickView.closeButton': 'Chiudi',
          'Categories.quickView.goToProductButton': 'Vai alla pagina prodotti',
          'Categories.quickView.previewButton': 'Anteprima prodotto',
          'Categories.subCategoriesLabel': 'Categorie A-Z',
          'ErrorHandler.unableToLoad':
            "C'è qualcosa che non va! Riprova più tardi!",
          'ErrorHandler.buttonLabelTryAgain': 'Riprova',
          'Facets.categories.mobile.showSubcategories': 'Sottocategorie',
          'Facets.categories.title': 'Cerca nella categoria corrente',
          'Facets.categories.toggleButton.less': 'Mostra meno',
          'Facets.categories.toggleButton.more': 'Mostra altro',
          'Facets.clear': 'Cancella filtro',
          'Facets.filter': 'Filtro',
          'Facets.loadingResults': 'Caricamento risultati in corso',
          'Facets.search.placeholder': 'Ricerca',
          'Facets.showResults': 'Applica filtro',
          'Form.mandatoryField': 'Campo oblligatorio',
          'Form.invalidEmailAddress': "L'indirizzo email non è valido",
          'MediaAssets.downloadLink': 'Scarica',
          'MediaAssets.images': 'Immagini',
          'MediaAssets.media': 'Documenti',
          'MediaAssets.safetySheets': 'Scheda dati di sicurezza',
          'MediaAssets.technicalDrawings': 'Informazioni tecniche',
          'MediaAssets.videos': 'Video',
          'PrintAction.print': 'Stampa',
          'ProductConfigurator.button.HelpConfigurator': 'Domande frequenti',
          'ProductConfigurator.button.StartConfigurator':
            'Avvia configurazione',
          'ProductConfigurator.list.1': 'Configurazione rapida e semplice',
          'ProductConfigurator.list.2': 'Inserimento diretto nel carrello',
          'ProductConfigurator.title':
            'Hai bisogno di prodotti su misura? Configura e ordina subito online! Vantaggi:',
          'ProductGroup.link.scrollToMedia': 'Passa a documenti',
          'ProductGroup.link.scrollToProductsTable':
            'Passa alla tabella prodotti',
          'ProductGroup.meta.description':
            'Scopri {name} in KRAMP. Il più grande assortimento di {name} che puoi trovare online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Scorri gruppi di articoli',
          'ProductGroup.productTable.deliveryTime': 'Data di consegna',
          'ProductGroup.productTable.fullscreen': 'Schermo intero',
          'ProductGroup.productTable.noProductsMessage': 'Nessun prodotto',
          'ProductGroup.productTable.price': 'Prezzo',
          'ProductGroup.productTable.product': 'Prodotto',
          'ProductGroupItem.goToProductsLink': 'Visualizza prodotti',
          'ProductItem.advisory.description':
            'Contattaci per conoscere il prezzo, i tempi di consegna e ulteriori informazioni',
          'ProductItem.advisory.title':
            'Fare attenzione alle note del prodotto',
          'ProductItem.buttons.addToCart': 'Aggiungi',
          'ProductItem.discountCode': 'Codice sconto',
          'ProductItem.discountCode.fetchError':
            'Non è stato possibile richiamare il codice sconto',
          'ProductItem.discountCode.label': 'CS',
          'ProductItem.grossPrice': 'Lordo',
          'ProductItem.grossPrice.fetchError':
            'Non è stato possibile richiamare il lordo',
          'ProductItem.id': 'Codice articolo',
          'ProductItem.input.remarks': 'Il vostro riferimento',
          'ProductItem.netPrice': 'Prezzo netto',
          'ProductItem.netPrice.fetchError':
            'Non è stato possibile richiamare il prezzo netto',
          'ProductItem.netPrice.linkText': 'Netto',
          'ProductItem.nonReturnable': 'Questo prodotto non è restituibile',
          'ProductItem.quantity': 'Quantità',
          'ProductItem.quantity.roundingWarning':
            'Convalida quantità arrotondata',
          'ProductItem.quantityUnit': 'Unità',
          'ProductItem.relations.accessories': 'Accessori',
          'ProductItem.relations.alternatives': 'Alternative',
          'ProductItem.relations.spareParts': 'Ricambi',
          'ProductItem.replacement': 'Prodotto sostituito',
          'ProductItem.tags.new': 'Nuovo articolo',
          'ProductItem.volumeDiscounts': 'Sconto',
          'ProductItem.volumeDiscounts.linkText': 'Netto',
          'ProductItem.volumeDiscounts.price': 'Prezzo',
          'Search.activeFacets.clear': 'Cancella filtro',
          'Search.allCategories': 'Tutto',
          'Search.noResults':
            'Sfortunatamente la ricerca non ha prodotto risultati',
          'Search.queryValidation.lessThan2Chars':
            'Immettere almeno 2 caratteri!',
          'Search.queryValidation.nonEmpty':
            'Si prega di inserire un termine di ricerca',
          'Search.queryValidation.tooManyCharacters':
            'Non immettere più di {maxCharacters} caratteri!',
          'Search.results.didYouMean': 'Intendevi',
          'Search.results.searchForTitle':
            'Risultati di ricerca per {searchTerm}',
          'Search.results.summary':
            'Abbiamo trovato {numberOfResults} risultati. Puoi perfezionare la ricerca attraverso il filtro nella colonna a sinistra.',
          'Search.results.summaryNoMatch':
            "La ricerca di ''{originalSearchTerm}'' non ha prodotto risultati",
          'Search.results.translatedSearch':
            "Sono visualizzati i risultati per ''{translatedSearchTerm}'' ({numOfResults} voci).",
          'Search.searchInAllCategories': 'Cerca in tutte le categorie',
          'Search.searchInCategory': 'Cerca nella categoria',
          'UnauthorizedMessage.body':
            'È stato effettuato il logout, effettuare di nuovo il login.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Rimani disconnesso',
          'UnauthorizedMessage.loginButton': 'Login',
          'UnauthorizedMessage.title': 'Sessione scaduta',
        }
      ),
      F = function () {
        return (F =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      L = F(F({}, R), o.translations.it_CH),
      j = function () {
        return (j =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      U = j(
        j(j({}, o.translations.nl), {
          Services: 'services',
          ConfiguratorHelp: 'kramp-product-configurator',
        }),
        {
          'AdvisoryForm.contactMethod': 'Neem contact met mij op via',
          'AdvisoryForm.email': 'E-mailadres',
          'AdvisoryForm.failedMessage':
            'Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw.',
          'AdvisoryForm.phone': 'Telefoon',
          'AdvisoryForm.remarks': 'Opmerkingen/aanvraag',
          'AdvisoryForm.sendCopyTo': 'Stuur een kopie naar:',
          'AdvisoryForm.submit': 'Verzenden',
          'AdvisoryForm.succeedMessage': 'Uw aanvraag is verzonden.',
          'AdvisoryForm.title': 'Productinformatie aanvragen',
          'Breadcrumbs.homepage': 'Startpagina',
          'Breadcrumbs.searchFor': 'Zoeken naar {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Weergave',
          'Categories.filterBar.overview': 'Overzicht',
          'Categories.filterBar.productgroups': 'Productgroepen',
          'Categories.filterBar.products': 'Producten',
          'Categories.filterBar.selectDisplayTypeLabel': 'Toon',
          'Categories.meta.description':
            'Ontdek {name} bij KRAMP. Het grootste assortiment van {name} vindt u online. It´s that easy!',
          'Categories.noResultsMessage': 'Geen resultaten',
          'Categories.overview.actions':
            '{productsLink} of {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Productgroepen bekijken',
          'Categories.overview.actions.viewProducts': 'Producten bekijken',
          'Categories.overview.description':
            'Er zijn {numOfProductGroups} productgroepen in deze categorie met {numOfProducts} producten.',
          'Categories.overview.title': 'Resultaten',
          'Categories.quickView.closeButton': 'Sluiten',
          'Categories.quickView.goToProductButton': 'Ga naar de productpagina',
          'Categories.quickView.previewButton': 'Productvoorbeeld',
          'Categories.subCategoriesLabel': 'Categorieën A-Z',
          'ErrorHandler.unableToLoad':
            'Het lijkt erop dat er iets is misgegaan. Probeer het later nog eens',
          'ErrorHandler.buttonLabelTryAgain': 'Opnieuw proberen',
          'Facets.categories.mobile.showSubcategories': 'Subcategorieën',
          'Facets.categories.title': 'Zoek in huidige categorie',
          'Facets.categories.toggleButton.less': 'Minder tonen',
          'Facets.categories.toggleButton.more': 'Meer tonen',
          'Facets.clear': 'Filters verwijderen',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Resultaten worden geladen',
          'Facets.search.placeholder': 'Zoeken',
          'Facets.showResults': 'Filter toepassen',
          'Form.mandatoryField': 'Dit veld moet worden ingevuld',
          'Form.invalidEmailAddress': 'Ongeldig e-mailadres',
          'MediaAssets.downloadLink': 'Downloaden',
          'MediaAssets.images': 'Afbeeldingen',
          'MediaAssets.media': 'Media',
          'MediaAssets.safetySheets': 'Veiligheidsinformatieblad',
          'MediaAssets.technicalDrawings': 'Technische informatie',
          'MediaAssets.videos': "Video's",
          'PrintAction.print': 'Afdrukken',
          'ProductConfigurator.button.HelpConfigurator': 'Veelgestelde vragen',
          'ProductConfigurator.button.StartConfigurator':
            'Configuratie starten',
          'ProductConfigurator.list.1': 'Snel en eenvoudig configureren',
          'ProductConfigurator.list.2': 'Direct aan winkelmandje toevoegen',
          'ProductConfigurator.title':
            'U heeft producten op maat nodig? Configureer en bestel ze vanaf nu online! Uw voordelen:',
          'ProductGroup.link.scrollToMedia': 'Blader naar media',
          'ProductGroup.link.scrollToProductsTable':
            'Blader naar de producttabel',
          'ProductGroup.meta.description':
            'Ontdek {name} bij KRAMP. Het grootste assortiment van {name} vindt u online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Bladeren in productgroepen',
          'ProductGroup.productTable.deliveryTime': 'Levertermijn',
          'ProductGroup.productTable.fullscreen': 'Full screen',
          'ProductGroup.productTable.noProductsMessage': 'Geen producten',
          'ProductGroup.productTable.price': 'Prijs',
          'ProductGroup.productTable.product': 'Product',
          'ProductGroupItem.goToProductsLink': 'Toon producten',
          'ProductItem.advisory.description':
            'Neem contact met ons op voor de prijs, de levertijd en andere informatie',
          'ProductItem.advisory.title': 'Adviesproduct',
          'ProductItem.buttons.addToCart': 'In de winkelwagen',
          'ProductItem.discountCode': 'Kortingscode',
          'ProductItem.discountCode.fetchError':
            'De kortingscode kon niet worden opgehaald',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Brutoprijs',
          'ProductItem.grossPrice.fetchError':
            'De brutoprijs kon niet worden opgehaald',
          'ProductItem.id': 'Productnummer',
          'ProductItem.input.remarks': 'Uw referentie',
          'ProductItem.netPrice': 'Netto prijs',
          'ProductItem.netPrice.fetchError':
            'De nettoprijs kon niet worden opgehaald',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Dit product is niet retourneerbaar',
          'ProductItem.quantity': 'Aantal',
          'ProductItem.quantity.roundingWarning': 'Hoeveelheid afronden',
          'ProductItem.quantityUnit': 'Eenheid',
          'ProductItem.relations.accessories': 'Accessoires',
          'ProductItem.relations.alternatives': 'Alternatieven',
          'ProductItem.relations.spareParts': 'Reserveonderdelen',
          'ProductItem.replacement': 'Product vervangen',
          'ProductItem.tags.new': 'Nieuw product',
          'ProductItem.volumeDiscounts': 'Kortingsprijzen',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Prijs',
          'Search.activeFacets.clear': 'Filters verwijderen',
          'Search.allCategories': 'Alle',
          'Search.noResults':
            'Helaas heeft uw zoekopdracht geen resultaten opgeleverd',
          'Search.queryValidation.lessThan2Chars': 'Voer minimaal 2 tekens in.',
          'Search.queryValidation.nonEmpty': 'Voer een zoekterm in',
          'Search.queryValidation.tooManyCharacters':
            'Voer niet meer dan {maxCharacters} tekens in.',
          'Search.results.didYouMean': 'Bedoelde u',
          'Search.results.searchForTitle': 'Zoekresultaten voor {searchTerm}',
          'Search.results.summary':
            'Wij hebben {numberOfResults} resultaten gevonden. U kunt uw zoekopdracht verfijnen door middel van de filters in de linker kolom.',
          'Search.results.summaryNoMatch':
            "Uw zoekopdracht naar ''{originalSearchTerm}'' heeft geen resultaten opgeleverd.",
          'Search.results.translatedSearch':
            "Resultaten voor ''{translatedSearchTerm}'' worden weergegeven ({numOfResults} treffers).",
          'Search.searchInAllCategories': 'In alle categorieën zoeken',
          'Search.searchInCategory': 'In categorie zoeken',
          'UnauthorizedMessage.body': 'U bent afgemeld. Meld u opnieuw aan.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Afgemeld blijven',
          'UnauthorizedMessage.loginButton': 'Login',
          'UnauthorizedMessage.title': 'Uw sessie is verlopen',
        }
      ),
      w = function () {
        return (w =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      N = w(
        w(w({}, o.translations.no), {
          Services: 'services',
          ConfiguratorHelp: 'configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Kontakt meg på',
          'AdvisoryForm.email': 'E-postadresse',
          'AdvisoryForm.failedMessage':
            'Forespørselen din kunne ikke sendes. Prøv igjen senere.',
          'AdvisoryForm.phone': 'Telefonnummer',
          'AdvisoryForm.remarks': 'Merknader/forespørsel',
          'AdvisoryForm.sendCopyTo': 'Send en kopi til:',
          'AdvisoryForm.submit': 'Send',
          'AdvisoryForm.succeedMessage': 'Forespørselen din er sendt.',
          'AdvisoryForm.title': 'Be om produktinformasjon',
          'Breadcrumbs.homepage': 'Startside',
          'Breadcrumbs.searchFor': 'Søk etter {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Vis alternativer',
          'Categories.filterBar.overview': 'Oversikt',
          'Categories.filterBar.productgroups': 'Produktgrupper',
          'Categories.filterBar.products': 'Produkter',
          'Categories.filterBar.selectDisplayTypeLabel': 'Vis',
          'Categories.meta.description':
            'Oppdag {name} hos KRAMP. Det største utvalget innen {name} finner du på nett. It’s that easy!',
          'Categories.noResultsMessage': 'Ingen resultater',
          'Categories.overview.actions':
            '{productsLink} eller {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups': 'Se produktgrupper',
          'Categories.overview.actions.viewProducts': 'Se produkter',
          'Categories.overview.description':
            'Der er {numOfProductGroups} produktgrupper i denne kategorien med {numOfProducts} produkter.',
          'Categories.overview.title': 'Resultater',
          'Categories.quickView.closeButton': 'Lukk',
          'Categories.quickView.goToProductButton': 'Gå til produktside',
          'Categories.quickView.previewButton': 'Forhåndsvis produkt',
          'Categories.subCategoriesLabel': 'Kategori A–Å',
          'ErrorHandler.unableToLoad': 'Noe gikk visst galt! Prøv igjen senere',
          'ErrorHandler.buttonLabelTryAgain': 'Prøv igjen',
          'Facets.categories.mobile.showSubcategories': 'Underkategorier',
          'Facets.categories.title': 'Søk i nåværende kategori',
          'Facets.categories.toggleButton.less': 'Vis mindre',
          'Facets.categories.toggleButton.more': 'Vis mer',
          'Facets.clear': 'Fjern filter',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Laster inn resultater',
          'Facets.search.placeholder': 'Søk',
          'Facets.showResults': 'Bruk filter',
          'Form.mandatoryField': 'Dette feltet må fylles ut',
          'Form.invalidEmailAddress': 'e-postadressen er ikke gyldig',
          'MediaAssets.downloadLink': 'Last ned',
          'MediaAssets.images': 'Bilder',
          'MediaAssets.media': 'Medier',
          'MediaAssets.safetySheets': 'Sikkerhetsdatablad',
          'MediaAssets.technicalDrawings': 'Teknisk informasjon',
          'MediaAssets.videos': 'Videoer',
          'PrintAction.print': 'Skriv ut',
          'ProductConfigurator.button.HelpConfigurator': 'Ofte stilte spørsmål',
          'ProductConfigurator.button.StartConfigurator':
            'Start konfigurasjonen',
          'ProductConfigurator.list.1': 'Rask og ukomplisert konfigurering',
          'ProductConfigurator.list.2': 'Legg produkter direkte i handlekurven',
          'ProductConfigurator.title':
            'Trenger du spesialtilpassede produkter? Konfigurer dem og bestill på Internett nå! Dine fordeler:',
          'ProductGroup.link.scrollToMedia': 'Blad videre til medier',
          'ProductGroup.link.scrollToProductsTable': 'Bla til produkttabeller',
          'ProductGroup.meta.description':
            'Oppdag {name} hos KRAMP. Det største utvalget innen {name} finner du på nett. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Blad i artikkelgrupper',
          'ProductGroup.productTable.deliveryTime': 'Leveringstid',
          'ProductGroup.productTable.fullscreen': 'Full skjerm',
          'ProductGroup.productTable.noProductsMessage': 'Ingen produkter',
          'ProductGroup.productTable.price': 'Pris',
          'ProductGroup.productTable.product': 'Produkt',
          'ProductGroupItem.goToProductsLink': 'Til produktene',
          'ProductItem.advisory.description':
            'Ta kontakt med oss, for å få informasjon om pris, leveringstid m.m.',
          'ProductItem.advisory.title': 'Produkt med rådgivningsnotat',
          'ProductItem.buttons.addToCart': 'Legg i handlekurven',
          'ProductItem.discountCode': 'Rabattkode',
          'ProductItem.discountCode.fetchError':
            'Henting av rabattkode mislyktes',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Brutto pris',
          'ProductItem.grossPrice.fetchError':
            'Henting av brutto pris mislyktes',
          'ProductItem.id': 'Artikkelnummer',
          'ProductItem.input.remarks': 'Kommentar',
          'ProductItem.netPrice': 'Nettpris',
          'ProductItem.netPrice.fetchError': 'Henting av nettopris mislyktes',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Dette er et ikke-returnerbart produkt',
          'ProductItem.quantity': 'Antall',
          'ProductItem.quantity.roundingWarning': 'Bekreft avrundet mengde',
          'ProductItem.quantityUnit': 'Enhet',
          'ProductItem.relations.accessories': 'Tilbehør',
          'ProductItem.relations.alternatives': 'Alternativer',
          'ProductItem.relations.spareParts': 'Reservedeler',
          'ProductItem.replacement': 'Produktet er erstattet',
          'ProductItem.tags.new': 'Ny artikkel',
          'ProductItem.volumeDiscounts': 'Rabatterte priser',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Pris',
          'Search.activeFacets.clear': 'Fjern filter',
          'Search.allCategories': 'Alle',
          'Search.noResults': 'Søket ditt ga dessverre ingen resultater',
          'Search.queryValidation.lessThan2Chars': 'Skriv inn minst 2 tegn.',
          'Search.queryValidation.nonEmpty': 'Skriv inn et søkeord',
          'Search.queryValidation.tooManyCharacters':
            'Ikke skriv inn mer enn {maxCharacters} tegn.',
          'Search.results.didYouMean': 'Mente du',
          'Search.results.searchForTitle': 'Søkeresultater for {searchTerm}',
          'Search.results.summary':
            'Søket ga {numberOfResults} resultater. Du kan finjustere søket med filtrene i kolonnen til venstre.',
          'Search.results.summaryNoMatch':
            "Ditt søk etter ''{originalSearchTerm}'' ga ingen resultater",
          'Search.results.translatedSearch':
            "Viser resultater for ''{translatedSearchTerm}'' ({numOfResults} treff).",
          'Search.searchInAllCategories': 'Søk i alle kategorier',
          'Search.searchInCategory': 'Søk i kategori',
          'UnauthorizedMessage.body':
            'Du ble logget ut. Vennligst logg inn igjen.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Forbli avlogget',
          'UnauthorizedMessage.loginButton': 'Logg inn',
          'UnauthorizedMessage.title': 'Økten din er utgått',
        }
      ),
      M = function () {
        return (M =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      B = M(
        M(M({}, o.translations.pl), {
          Services: 'serwis',
          ConfiguratorHelp: 'uslugi-techniczne/konfigurator-silownika',
        }),
        {
          'AdvisoryForm.contactMethod': 'Proszę o kontakt drogą',
          'AdvisoryForm.email': 'Adres e-mail',
          'AdvisoryForm.failedMessage':
            'Nie można wysłać zapytania. Spróbuj ponownie później.',
          'AdvisoryForm.phone': 'Numer telefonu',
          'AdvisoryForm.remarks': 'Uwagi / zapytanie',
          'AdvisoryForm.sendCopyTo': 'Wyślij kopię do:',
          'AdvisoryForm.submit': 'Wyślij',
          'AdvisoryForm.succeedMessage': 'Zapytanie zostało pomyślnie wysłane.',
          'AdvisoryForm.title': 'Poproś o informacje o produktach',
          'Breadcrumbs.homepage': 'Strona główna',
          'Breadcrumbs.searchFor': 'Wyszukaj {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Wyświetlenia',
          'Categories.filterBar.overview': 'Przegląd',
          'Categories.filterBar.productgroups': 'Grupy produktów',
          'Categories.filterBar.products': 'Produkty',
          'Categories.filterBar.selectDisplayTypeLabel': 'Pokaż',
          'Categories.meta.description':
            'Odkryj {name} w firmie KRAMP. Można znaleźć największą gamę produktów {name} online. It´s that easy!',
          'Categories.noResultsMessage': 'Brak wyników',
          'Categories.overview.actions':
            '{productsLink} lub {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Wyświetl grupy produktów',
          'Categories.overview.actions.viewProducts': 'Wyświetl produkty',
          'Categories.overview.description':
            'W tej kategorii znajduje się następująca liczba {numOfProductGroups} grup produktów, które obejmują {numOfProducts} produktów.',
          'Categories.overview.title': 'Wyniki',
          'Categories.quickView.closeButton': 'Zamknij',
          'Categories.quickView.goToProductButton':
            'Przejdź do strony produktu',
          'Categories.quickView.previewButton': 'Podgląd produktu',
          'Categories.subCategoriesLabel': 'Kategorie A–Z',
          'ErrorHandler.unableToLoad':
            'Wygląda na to, że coś poszło nie tak! Spróbuj ponownie później',
          'ErrorHandler.buttonLabelTryAgain': 'Spróbuj ponownie',
          'Facets.categories.mobile.showSubcategories': 'Podkategorie',
          'Facets.categories.title': 'Szukaj w bieżącej kategorii',
          'Facets.categories.toggleButton.less': 'Pokaż mniej',
          'Facets.categories.toggleButton.more': 'Pokaż więcej',
          'Facets.clear': 'Wyczyść filtr',
          'Facets.filter': 'Filtruj',
          'Facets.loadingResults': 'Wczytywanie wyników',
          'Facets.search.placeholder': 'Znajdź',
          'Facets.showResults': 'Zastosuj filtr',
          'Form.mandatoryField': 'To pole nie może być puste',
          'Form.invalidEmailAddress': 'Adres e-mail jest nieprawidłowy',
          'MediaAssets.downloadLink': 'Pobierz',
          'MediaAssets.images': 'Obrazy',
          'MediaAssets.media': 'Multimedia',
          'MediaAssets.safetySheets': 'Karta charakterystyki',
          'MediaAssets.technicalDrawings': 'Informacje techniczne',
          'MediaAssets.videos': 'Filmy',
          'PrintAction.print': 'Wydruk',
          'ProductConfigurator.button.HelpConfigurator':
            'Najczęściej zadawane pytania',
          'ProductConfigurator.button.StartConfigurator':
            'Rozpocznij konfigurację',
          'ProductConfigurator.list.1': 'Szybka i łatwa konfiguracja produktów',
          'ProductConfigurator.list.2':
            'Dodawanie produktów bezpośrednio do koszyka',
          'ProductConfigurator.title':
            'Potrzebujesz spersonalizowanych produktów? Skonfiguruj produkty i zamów je online już teraz! Korzyści dla Ciebie:',
          'ProductGroup.link.scrollToMedia': 'Przejdź do multimediów',
          'ProductGroup.link.scrollToProductsTable':
            'Przejdź do tabeli produktów',
          'ProductGroup.meta.description':
            'Odkryj {name} w firmie KRAMP. Użytkownik może znaleźć najszerszą gamę produktów {name} online.  It´s that easy!',
          'ProductGroup.navigationBar.title': 'Przewiń grupy produktów',
          'ProductGroup.productTable.deliveryTime': 'Czas dostawy',
          'ProductGroup.productTable.fullscreen': 'Pełny ekran',
          'ProductGroup.productTable.noProductsMessage': 'Brak produktów',
          'ProductGroup.productTable.price': 'Cena',
          'ProductGroup.productTable.product': 'Produkt',
          'ProductGroupItem.goToProductsLink': 'Wyświetl produkty',
          'ProductItem.advisory.description':
            'Prosimy o kontakt w sprawie cen, terminów dostaw i wszelkich innych wymaganych informacji',
          'ProductItem.advisory.title': 'Produkt z dodatkową informacją',
          'ProductItem.buttons.addToCart': 'Dodaj',
          'ProductItem.discountCode': 'Kod rabatowy',
          'ProductItem.discountCode.fetchError':
            'Nie można użyć kodu rabatowego',
          'ProductItem.discountCode.label': 'ÁK',
          'ProductItem.grossPrice': 'Detal netto',
          'ProductItem.grossPrice.fetchError': 'Nie można odzyskać detal netto',
          'ProductItem.id': 'Numer części',
          'ProductItem.input.remarks': 'Twoje referencje',
          'ProductItem.netPrice': 'Netto',
          'ProductItem.netPrice.fetchError': 'Nie można odzyskać ceny netto',
          'ProductItem.netPrice.linkText': 'Netto',
          'ProductItem.nonReturnable':
            'Zamówienie specjalne, oddzielny koszt dostawy, nie ma możliwości zwrotu',
          'ProductItem.quantity': 'Ilość',
          'ProductItem.quantity.roundingWarning':
            'Potwierdź ilość w zaokrągleniu',
          'ProductItem.quantityUnit': 'Jednostka',
          'ProductItem.relations.accessories': 'Akcesoria',
          'ProductItem.relations.alternatives': 'Alternatywne rozwiązania',
          'ProductItem.relations.spareParts': 'Części zamienne',
          'ProductItem.replacement': 'Wymieniono produkt',
          'ProductItem.tags.new': 'Nowy produkt',
          'ProductItem.volumeDiscounts': 'Cena promocyjna',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Cena',
          'Search.activeFacets.clear': 'Wyczyść filtr',
          'Search.allCategories': 'All (Wszystkie)',
          'Search.noResults':
            'Niestety, wyszukiwanie nie zwróciło żadnych wyników',
          'Search.queryValidation.lessThan2Chars':
            'Wprowadź co najmniej 2 znaki!',
          'Search.queryValidation.nonEmpty': 'Wpisz wyszukiwane hasło',
          'Search.queryValidation.tooManyCharacters':
            'Proszę nie wpisywać więcej niż {maxCharacters} znaków!',
          'Search.results.didYouMean': 'Czy chodziło Ci o',
          'Search.results.searchForTitle':
            'Wyniki wyszukiwania dla {searchTerm}',
          'Search.results.summary':
            'Znaleziono następującą liczbę wyników: {numberOfResults}. Można zawęzić wyszukiwanie za pomocą filtrów znajdujących się w kolumnie po lewej stronie.',
          'Search.results.summaryNoMatch':
            'Wyszukiwane frazy „{originalSearchTerm}” nie zwróciły żadnych wyników',
          'Search.results.translatedSearch':
            'Wyświetlono pasujące wyniki dla „{translatedSearchTerm}”: ({numOfResults} matches).',
          'Search.searchInAllCategories': 'Szukaj we wszystkich kategoriach',
          'Search.searchInCategory': 'Szukaj w kategorii',
          'UnauthorizedMessage.body':
            'Zostałeś wylogowany. Zaloguj się ponownie.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Wyloguj się',
          'UnauthorizedMessage.loginButton': 'Zaloguj się',
          'UnauthorizedMessage.title': 'Twoja sesja wygasła',
        }
      ),
      G = function () {
        return (G =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      V = G(
        G(G({}, o.translations.ro), {
          Services: 'services',
          ConfiguratorHelp: 'servicii-tehnice/configurare-cilindri-hidraulici',
        }),
        {
          'AdvisoryForm.contactMethod': 'Contactaţi-mă prin',
          'AdvisoryForm.email': 'Adresă de e-mail',
          'AdvisoryForm.failedMessage':
            'Solicitarea dvs. nu a putut fi trimisă. Încercaţi din nou mai târziu.',
          'AdvisoryForm.phone': 'Telefon',
          'AdvisoryForm.remarks': 'Observații/solicitare',
          'AdvisoryForm.sendCopyTo': 'Trimiteţi o copie către:',
          'AdvisoryForm.submit': 'Trimitere',
          'AdvisoryForm.succeedMessage':
            'Solicitarea dvs. a fost trimisă cu succes.',
          'AdvisoryForm.title': 'Solicitare de informaţii despre produse',
          'Breadcrumbs.homepage': 'Pagina de start',
          'Breadcrumbs.searchFor': 'Căutare',
          'Categories.filterBar.displayModeLabel': 'Moduri de vizualizare',
          'Categories.filterBar.overview': 'Vedere de ansamblu',
          'Categories.filterBar.productgroups': 'Grupe de produse',
          'Categories.filterBar.products': 'Produse',
          'Categories.filterBar.selectDisplayTypeLabel': 'Afişare',
          'Categories.meta.description':
            'Descoperiţi {name} la KRAMP. Online găsiţi cea mai vastă gamă de produse {name}. It´s that easy!',
          'Categories.noResultsMessage': 'Fără rezultate',
          'Categories.overview.actions':
            '{productsLink} sau  {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Vizualizare grupe de produse',
          'Categories.overview.actions.viewProducts': 'Vizualizare produse',
          'Categories.overview.description':
            'Există {numOfProductGroups} grupe de produse în această categorie cu {numOfProducts} produse.',
          'Categories.overview.title': 'Rezultate',
          'Categories.quickView.closeButton': 'Închidere',
          'Categories.quickView.goToProductButton':
            'Trecere la pagina cu produse',
          'Categories.quickView.previewButton': 'Previzualizare produs',
          'Categories.subCategoriesLabel': 'Categorii A-Z',
          'ErrorHandler.unableToLoad':
            'Se pare că ceva nu a funcţionat corect! Vă rugăm să încercaţi din nou mai târziu',
          'ErrorHandler.buttonLabelTryAgain': 'Încearcă din nou',
          'Facets.categories.mobile.showSubcategories': 'Subcategorii',
          'Facets.categories.title': 'Căutare în categoria curentă',
          'Facets.categories.toggleButton.less': 'Afişare mai puţine',
          'Facets.categories.toggleButton.more': 'Afişare mai multe',
          'Facets.clear': 'Ştergere filtru',
          'Facets.filter': 'Filtru',
          'Facets.loadingResults': 'Se încarcă rezultatele',
          'Facets.search.placeholder': 'Căutare',
          'Facets.showResults': 'Aplicare filtru',
          'Form.mandatoryField': 'Acest câmp trebuie completat',
          'Form.invalidEmailAddress': 'Adresa de e-mail nu este validă',
          'MediaAssets.downloadLink': 'Descărcare',
          'MediaAssets.images': 'Imagini',
          'MediaAssets.media': 'Media',
          'MediaAssets.safetySheets': 'Fișe cu date de securitate',
          'MediaAssets.technicalDrawings': 'Informaţii tehnice',
          'MediaAssets.videos': 'Materiale video',
          'PrintAction.print': 'Tipărire',
          'ProductConfigurator.button.HelpConfigurator':
            'Întrebări adresate frecvent',
          'ProductConfigurator.button.StartConfigurator': 'Start configurare',
          'ProductConfigurator.list.1': 'Configurare rapidă şi simplă',
          'ProductConfigurator.list.2':
            'Plasare direct în coşul de cumpărături',
          'ProductConfigurator.title':
            'Aveţi nevoie de produse în funcţie de dimensiuni? Configuraţi şi comandaţi online începând de acum! Avantajele dvs.:',
          'ProductGroup.link.scrollToMedia': 'Răsfoiţi în media',
          'ProductGroup.link.scrollToProductsTable':
            'Răsfoiţi în tabelul cu produse',
          'ProductGroup.meta.description':
            'Descoperiţi {name} la KRAMP. Online găsiţi cea mai vastă gamă de produse {name}. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Răsfoiţi prin grupa de articole',
          'ProductGroup.productTable.deliveryTime': 'Termen de livrare',
          'ProductGroup.productTable.fullscreen': 'Afişare pe tot ecranul',
          'ProductGroup.productTable.noProductsMessage': 'Fără produse',
          'ProductGroup.productTable.price': 'Preţ',
          'ProductGroup.productTable.product': 'Produs',
          'ProductGroupItem.goToProductsLink': 'Spre produse',
          'ProductItem.advisory.description':
            'Vă rugăm să luaţi legătura cu noi pentru a afla preţul, termenul de livrare şi alte informaţii suplimentare',
          'ProductItem.advisory.title': 'Produs cu consiliere specială',
          'ProductItem.buttons.addToCart': 'Adăugați în coș',
          'ProductItem.discountCode': 'Cod reducere',
          'ProductItem.discountCode.fetchError':
            'Accesarea codului de reducere a eșuat',
          'ProductItem.discountCode.label': 'CR',
          'ProductItem.grossPrice': 'Preţ de listă brut',
          'ProductItem.grossPrice.fetchError':
            'Accesarea preţ de listă brut a eşuat',
          'ProductItem.id': 'Număr articol',
          'ProductItem.input.remarks': 'Referința ta',
          'ProductItem.netPrice': 'Preț net',
          'ProductItem.netPrice.fetchError': 'Accesarea preţului net a eşuat',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable':
            'La acest articol nu se poate face retur',
          'ProductItem.quantity': 'Cantitate',
          'ProductItem.quantity.roundingWarning':
            'Validare cantitate rotunjită',
          'ProductItem.quantityUnit': 'Unitate',
          'ProductItem.relations.accessories': 'Accesorii',
          'ProductItem.relations.alternatives': 'Alternative',
          'ProductItem.relations.spareParts': 'Piese de schimb',
          'ProductItem.replacement': 'Produs înlocuit',
          'ProductItem.tags.new': 'Articol nou',
          'ProductItem.volumeDiscounts': 'Preţuri reduse',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Preţ',
          'Search.activeFacets.clear': 'Ştergere filtru',
          'Search.allCategories': 'Toate',
          'Search.noResults':
            'Din păcate, căutarea nu a returnat niciun rezultat',
          'Search.queryValidation.lessThan2Chars':
            'Vă rugăm să introduceţi cel puţin două caractere!',
          'Search.queryValidation.nonEmpty':
            'Vă rugăm să introduceți un termen de căutare',
          'Search.queryValidation.tooManyCharacters':
            'Vă rugăm să nu introduceţi mai mult de {maxCharacters} caractere!',
          'Search.results.didYouMean': 'Aţi vrut să scrieţi',
          'Search.results.searchForTitle':
            'Rezultatele căutării pentru {searchTerm}',
          'Search.results.summary':
            'Am găsit {numberOfResults} rezultate. Puteţi rafina căutarea dumneavoastră cu ajutorul filtrelor aflate în coloana din partea stângă.',
          'Search.results.summaryNoMatch':
            'Căutarea dumneavoastră după „{originalSearchTerm}” nu a returnat niciun rezultat',
          'Search.results.translatedSearch':
            'Sunt afişate rezultatele pentru „{translatedSearchTerm}” ({numOfResults} găsite).',
          'Search.searchInAllCategories': 'Căutare în toate categoriile',
          'Search.searchInCategory': 'Căutare în categorie',
          'UnauthorizedMessage.body':
            'Aţi fost deconectat, vă rugăm să vă autentificaţi din nou.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Rămâneţi deconectat',
          'UnauthorizedMessage.loginButton': 'Autentificare',
          'UnauthorizedMessage.title': 'Sesiunea dumneavoastră a expirat',
        }
      ),
      z = function () {
        return (z =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      q = z(
        z(z({}, o.translations.ru), {
          Services: 'services',
          ConfiguratorHelp: 'configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Предпочтительный способ связи:',
          'AdvisoryForm.email': 'Адрес электронной почты',
          'AdvisoryForm.failedMessage':
            'Не удалось отправить ваш запрос. Повторите попытку позже.',
          'AdvisoryForm.phone': 'Телефон',
          'AdvisoryForm.remarks': 'Примечания / Запрос',
          'AdvisoryForm.sendCopyTo': 'Отправить копию:',
          'AdvisoryForm.submit': 'Отправить',
          'AdvisoryForm.succeedMessage': 'Ваш запрос успешно отправлен.',
          'AdvisoryForm.title': 'Запрос информации о товаре',
          'Breadcrumbs.homepage': 'Главная страница',
          'Breadcrumbs.searchFor': "Поиск по запросу ''{searchTerm}''",
          'Categories.filterBar.displayModeLabel': 'Просмотры',
          'Categories.filterBar.overview': 'Обзор',
          'Categories.filterBar.productgroups': 'Группы товаров',
          'Categories.filterBar.products': 'Товары',
          'Categories.filterBar.selectDisplayTypeLabel': 'Отобразить',
          'Categories.meta.description':
            'Откройте для себя {name} от KRAMP. Самый большой ассортимент {name} онлайн. It´s that easy!',
          'Categories.noResultsMessage': 'Ничего не найдено',
          'Categories.overview.actions':
            '{productsLink} или {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Посмотреть группы товаров',
          'Categories.overview.actions.viewProducts': 'Посмотреть товары',
          'Categories.overview.description':
            'В этой категории найдено групп товаров: {numOfProductGroups}; найдено товаров: {numOfProducts}.',
          'Categories.overview.title': 'Результаты',
          'Categories.quickView.closeButton': 'Закрыть',
          'Categories.quickView.goToProductButton':
            'Перейти на страницу товара',
          'Categories.quickView.previewButton': 'Быстрый просмотр',
          'Categories.subCategoriesLabel': 'Категории А-Я',
          'ErrorHandler.unableToLoad':
            'Кажется, что-то пошло не так! Повторите попытку позже.',
          'ErrorHandler.buttonLabelTryAgain': 'Попробуй еще раз',
          'Facets.categories.mobile.showSubcategories': 'Подкатегории',
          'Facets.categories.title': 'Поиск по текущей категории',
          'Facets.categories.toggleButton.less': 'Показать меньше',
          'Facets.categories.toggleButton.more': 'Показать больше',
          'Facets.clear': 'Удалить фильтр',
          'Facets.filter': 'Фильтр',
          'Facets.loadingResults': 'Результаты поиска загружаются',
          'Facets.search.placeholder': 'Поиск',
          'Facets.showResults': 'Применить фильтр',
          'Form.mandatoryField': 'Это поле должно быть заполнено',
          'Form.invalidEmailAddress': 'Неверный адрес электронной почты',
          'MediaAssets.downloadLink': 'Загрузка',
          'MediaAssets.images': 'Фотографии',
          'MediaAssets.media': 'Документы',
          'MediaAssets.safetySheets': 'Паспорт безопасности',
          'MediaAssets.technicalDrawings': 'Технические характеристики',
          'MediaAssets.videos': 'Видео',
          'PrintAction.print': 'Печать',
          'ProductConfigurator.button.HelpConfigurator': 'Помощь',
          'ProductConfigurator.button.StartConfigurator': 'Начать конфигурацию',
          'ProductConfigurator.list.1': 'Быстрая и простая конфигурация',
          'ProductConfigurator.list.2':
            'Добавление сконфигурированного товара в корзину',
          'ProductConfigurator.title':
            'Ищете товар с определенными характеристиками? Создайте нужный вам товар и закажите его онлайн! Преимущества:',
          'ProductGroup.link.scrollToMedia': 'Перейти к документам',
          'ProductGroup.link.scrollToProductsTable': 'Перейти к списку товаров',
          'ProductGroup.meta.description':
            'Откройте для себя {name} от KRAMP. Самый большой ассортимент {name} онлайн. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Посмотреть товарные группы',
          'ProductGroup.productTable.deliveryTime': 'Срок поставки',
          'ProductGroup.productTable.fullscreen': 'Полный экран',
          'ProductGroup.productTable.noProductsMessage': 'Нет продуктов',
          'ProductGroup.productTable.price': 'Цена',
          'ProductGroup.productTable.product': 'Товар',
          'ProductGroupItem.goToProductsLink': 'Посмотреть товары',
          'ProductItem.advisory.description':
            'Пожалуйста, свяжитесь с нами, чтобы узнать цену и сроки поставки и получить дополнительную информацию.',
          'ProductItem.advisory.title':
            'Товар, требующий дополнительной консультации',
          'ProductItem.buttons.addToCart': 'Добавить',
          'ProductItem.discountCode': 'Код скидки',
          'ProductItem.discountCode.fetchError': 'Не удалось найти код скидки',
          'ProductItem.discountCode.label': 'О.К.',
          'ProductItem.grossPrice': 'Цена брутто',
          'ProductItem.grossPrice.fetchError':
            'Не удалось найти Цена брутто скидки',
          'ProductItem.id': 'Номер артикула',
          'ProductItem.input.remarks': 'Комментарий',
          'ProductItem.netPrice': 'Нетто',
          'ProductItem.netPrice.fetchError': 'Не удалось найти цену без скидки',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable': 'Это товар не подлежит возврату',
          'ProductItem.quantity': 'Количество',
          'ProductItem.quantity.roundingWarning': 'Проверьте количество',
          'ProductItem.quantityUnit': 'Единица измерения',
          'ProductItem.relations.accessories': 'Принадлежности',
          'ProductItem.relations.alternatives': 'Похожие товары',
          'ProductItem.relations.spareParts': 'Запчасти',
          'ProductItem.replacement': 'Товар заменен',
          'ProductItem.tags.new': 'Новый товар',
          'ProductItem.volumeDiscounts': 'Цены со скидкой',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Цена',
          'Search.activeFacets.clear': 'Удалить фильтр',
          'Search.allCategories': 'Все',
          'Search.noResults':
            'К сожалению, по вашему запросу ничего не найдено.',
          'Search.queryValidation.lessThan2Chars':
            'Необходимо ввести минимум 2 символа!',
          'Search.queryValidation.nonEmpty':
            'Пожалуйста введите критерий поиска',
          'Search.queryValidation.tooManyCharacters':
            'Пожалуйста, введите не более {maxCharacters} символов!',
          'Search.results.didYouMean': 'Возможно, вы имели в виду',
          'Search.results.searchForTitle':
            "Результаты поиска по запросу '{searchTerm}'",
          'Search.results.summary':
            'По вашему запросу найдено результатов: {numberOfResults}. Для более точного поиска вы можете воспользоваться фильтрами в колонке слева.',
          'Search.results.summaryNoMatch':
            "По вашему запросу ''{originalSearchTerm}'' ничего не найдено.",
          'Search.results.translatedSearch':
            "Отображаются результаты поиска по запросу ''{translatedSearchTerm}'' (результатов: {numOfResults}).",
          'Search.searchInAllCategories': 'Искать во всех категориях',
          'Search.searchInCategory': 'Искать в этой категории',
          'UnauthorizedMessage.body':
            'Вы вышли из учетной записи. Пожалуйста, войдите снова.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Запомнить меня',
          'UnauthorizedMessage.loginButton': 'Вход',
          'UnauthorizedMessage.title': 'Время вашего сеанса истекло',
        }
      ),
      H = function () {
        return (H =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      $ = H(
        H(H({}, o.translations.sk), {
          Services: 'sluzby',
          ConfiguratorHelp: 'kramp-configurator',
        }),
        {
          'AdvisoryForm.contactMethod': 'Kontaktujte ma cez',
          'AdvisoryForm.email': 'E-mailová adresa',
          'AdvisoryForm.failedMessage':
            'Vašu požiadavku nebolo možné odoslať. Skúste to znova neskôr.',
          'AdvisoryForm.phone': 'Telefón',
          'AdvisoryForm.remarks': 'Poznámky/požiadavka',
          'AdvisoryForm.sendCopyTo': 'Poslať kópiu na:',
          'AdvisoryForm.submit': 'Odoslať',
          'AdvisoryForm.succeedMessage':
            'Vaša požiadavka bola úspešne odoslaná.',
          'AdvisoryForm.title': 'Vyžiadať informácie o produkte',
          'Breadcrumbs.homepage': 'Domovská stránka',
          'Breadcrumbs.searchFor': 'Vyhľadávať {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Zobrazenia',
          'Categories.filterBar.overview': 'Prehľad',
          'Categories.filterBar.productgroups': 'Skupiny výrobkov',
          'Categories.filterBar.products': 'Výrobky',
          'Categories.filterBar.selectDisplayTypeLabel': 'Zobraziť',
          'Categories.meta.description':
            'Objavte {name} v spoločnosti KRAMP. U nás nájdete najširší sortiment {name} produktov online. It´s that easy!',
          'Categories.noResultsMessage': 'Žiadne výsledky',
          'Categories.overview.actions':
            '{productsLink} alebo {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Zobraziť skupiny výrobkov',
          'Categories.overview.actions.viewProducts': 'Zobraziť výrobky',
          'Categories.overview.description':
            'V tejto kategórii sa nachádza {numOfProductGroups} skupín výrobkov, ktoré obsahujú {numOfProducts} výrobkov.',
          'Categories.overview.title': 'Výsledky',
          'Categories.quickView.closeButton': 'Zatvoriť',
          'Categories.quickView.goToProductButton':
            'Prejsť na stránku produktu',
          'Categories.quickView.previewButton': 'Ukážka výrobku',
          'Categories.subCategoriesLabel': 'Kategórie od A - Z',
          'ErrorHandler.unableToLoad':
            'Zdá sa, že sa vyskytol problém! Skúste to neskôr znova',
          'ErrorHandler.buttonLabelTryAgain': 'Skúste to znova',
          'Facets.categories.mobile.showSubcategories': 'Podkategórie',
          'Facets.categories.title': 'Vyhľadávať v aktuálnej kategórii',
          'Facets.categories.toggleButton.less': 'Zobraziť menej',
          'Facets.categories.toggleButton.more': 'Zobraziť viac',
          'Facets.clear': 'Zrušiť filter',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Načítavanie výsledkov',
          'Facets.search.placeholder': 'Vyhľadávanie',
          'Facets.showResults': 'Použiť filter',
          'Form.mandatoryField': 'Toto pole musí byť vyplnené',
          'Form.invalidEmailAddress': 'Neplatná e-mailová adresa',
          'MediaAssets.downloadLink': 'Stiahnuť',
          'MediaAssets.images': 'Obrázky',
          'MediaAssets.media': 'Médiá',
          'MediaAssets.safetySheets': 'Bezpečnostné listy',
          'MediaAssets.technicalDrawings': 'Technické informácie',
          'MediaAssets.videos': 'Videá',
          'PrintAction.print': 'Tlačiť',
          'ProductConfigurator.button.HelpConfigurator': 'Často kladené otázky',
          'ProductConfigurator.button.StartConfigurator':
            'Spustiť konfiguráciu',
          'ProductConfigurator.list.1':
            'Rýchla a jednoduchá konfigurácia výrobkov',
          'ProductConfigurator.list.2': 'Priame vloženie do nákupného košíka',
          'ProductConfigurator.title':
            'Potrebujete výrobky na mieru? Zostavte si produkty a objednajte si ich online! Vaše výhody:',
          'ProductGroup.link.scrollToMedia': 'Prejsť na médiá',
          'ProductGroup.link.scrollToProductsTable':
            'Prejsť na tabuľku výrobkov',
          'ProductGroup.meta.description':
            'Objavte {name} v spoločnosti KRAMP. U nás nájdete najširší sortiment {name} produktov online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Rolovať skupiny položiek',
          'ProductGroup.productTable.deliveryTime': 'Dodacia lehota',
          'ProductGroup.productTable.fullscreen': 'Celá obrazovka',
          'ProductGroup.productTable.noProductsMessage': 'Žiadne produkty',
          'ProductGroup.productTable.price': 'Cena',
          'ProductGroup.productTable.product': 'Výrobok',
          'ProductGroupItem.goToProductsLink': 'Zobraziť produkty',
          'ProductItem.advisory.description':
            'Neváhajte nás kontaktovať ohľadom cien, dodacích termínov a iných potrebných informácií',
          'ProductItem.advisory.title': 'Výrobok so špeciálnym upozornením',
          'ProductItem.buttons.addToCart': 'Pridať do košíka',
          'ProductItem.discountCode': 'Zľavový kód',
          'ProductItem.discountCode.fetchError':
            'Nie je možné načítať zľavový kód',
          'ProductItem.discountCode.label': 'DC',
          'ProductItem.grossPrice': 'Cenníková cena',
          'ProductItem.grossPrice.fetchError':
            'Nie je možné načítať cenníková cena',
          'ProductItem.id': 'Číslo položky',
          'ProductItem.input.remarks': 'Tvoja referencia',
          'ProductItem.netPrice': 'Cena netto',
          'ProductItem.netPrice.fetchError': 'Nie je možné načítať netto cenu',
          'ProductItem.netPrice.linkText': 'Nett',
          'ProductItem.nonReturnable': 'Tento produkt nie je možné vrátiť',
          'ProductItem.quantity': 'Množstvo',
          'ProductItem.quantity.roundingWarning': 'Overiť zaokrúhlené množstvo',
          'ProductItem.quantityUnit': 'Jednotka',
          'ProductItem.relations.accessories': 'Príslušenstvo',
          'ProductItem.relations.alternatives': 'Alternatívy',
          'ProductItem.relations.spareParts': 'Náhradné diely',
          'ProductItem.replacement': 'Výrobok bol nahradený',
          'ProductItem.tags.new': 'Nový výrobok',
          'ProductItem.volumeDiscounts': 'Akciové ceny',
          'ProductItem.volumeDiscounts.linkText': 'Nett',
          'ProductItem.volumeDiscounts.price': 'Cena',
          'Search.activeFacets.clear': 'Zrušiť filter',
          'Search.allCategories': 'Všetko',
          'Search.noResults': 'Bohužiaľ neboli nájdené žiadne výsledky',
          'Search.queryValidation.lessThan2Chars': 'Zadajte aspoň 2 znaky!',
          'Search.queryValidation.nonEmpty': 'Zadajte hľadaný výraz',
          'Search.queryValidation.tooManyCharacters':
            'Nezadávajte viac ako {maxCharacters} znakov!',
          'Search.results.didYouMean': 'Mali ste na mysli',
          'Search.results.searchForTitle':
            'Výsledky vyhľadávania pre {searchTerm}',
          'Search.results.summary':
            'Našli sme {numberOfResults} výsledkov. Vyhľadávanie môžete upresniť použitím filtrov v stĺpci naľavo.',
          'Search.results.summaryNoMatch':
            "Pre zadaný výraz ''{originalSearchTerm}'' neboli nájdené žiadne výsledky",
          'Search.results.translatedSearch':
            "Zobrazujú sa výsledky pre ''{translatedSearchTerm}'' ({numOfResults} zhôd).",
          'Search.searchInAllCategories': 'Vyhľadávať vo všetkých kategóriách',
          'Search.searchInCategory': 'Vyhľadávať v kategórii',
          'UnauthorizedMessage.body':
            'Boli ste odhlásený/á. Prihláste sa, prosím, znova.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Zostať odhlásený/á',
          'UnauthorizedMessage.loginButton': 'Prihlásiť sa',
          'UnauthorizedMessage.title': 'Vaše prihlásenie vypršalo',
        }
      ),
      Q = function () {
        return (Q =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
      x = Q(
        Q(Q({}, o.translations.sv), {
          Services: 'services',
          ConfiguratorHelp: 'configurateur-kramp',
        }),
        {
          'AdvisoryForm.contactMethod': 'Kontakta mig per',
          'AdvisoryForm.email': 'E-postadress',
          'AdvisoryForm.failedMessage':
            'Det gick inte att skicka din förfrågan. Försök igen senare.',
          'AdvisoryForm.phone': 'Telefonnummer',
          'AdvisoryForm.remarks': 'Kommentarer/förfrågan',
          'AdvisoryForm.sendCopyTo': 'Skicka en kopia till:',
          'AdvisoryForm.submit': 'Skicka',
          'AdvisoryForm.succeedMessage': 'Din förfrågan har skickats.',
          'AdvisoryForm.title': 'Be om produktinformation',
          'Breadcrumbs.homepage': 'Startsida',
          'Breadcrumbs.searchFor': 'Sök efter {searchTerm}',
          'Categories.filterBar.displayModeLabel': 'Visa alternativ',
          'Categories.filterBar.overview': 'Översikt',
          'Categories.filterBar.productgroups': 'Produktgrupper',
          'Categories.filterBar.products': 'Produkter',
          'Categories.filterBar.selectDisplayTypeLabel': 'Visa val',
          'Categories.meta.description':
            'Hitta {name} hos KRAMP. Du hittar det största sortimentet av {name} online. It´s that easy!',
          'Categories.noResultsMessage': 'Inga resultat',
          'Categories.overview.actions':
            '{productsLink} eller {productGroupsLink}',
          'Categories.overview.actions.viewProductGroups':
            'Visa produktgrupper',
          'Categories.overview.actions.viewProducts': 'Visa produkt',
          'Categories.overview.description':
            'Det finns {numOfProductGroups} produktgrupper i den här kategorin med {numOfProducts} produkter.',
          'Categories.overview.title': 'Resultat',
          'Categories.quickView.closeButton': 'Stäng',
          'Categories.quickView.goToProductButton': 'Gå till produktsida',
          'Categories.quickView.previewButton': 'Förhandsgranska produkt',
          'Categories.subCategoriesLabel': 'Kategorier A-Ö',
          'ErrorHandler.unableToLoad':
            'Det verkar som om något blivit fel! Försök igen litet senare',
          'ErrorHandler.buttonLabelTryAgain': 'Försök igen',
          'Facets.categories.mobile.showSubcategories': 'Underkategorier',
          'Facets.categories.title': 'Sök i aktuell kategori',
          'Facets.categories.toggleButton.less': 'Visa mindre',
          'Facets.categories.toggleButton.more': 'Visa mer',
          'Facets.clear': 'Ta bort filter',
          'Facets.filter': 'Filter',
          'Facets.loadingResults': 'Resultat läses in',
          'Facets.search.placeholder': 'Sök',
          'Facets.showResults': 'Tillämpa filter',
          'Form.mandatoryField': 'Det här fältet måste fyllas i',
          'Form.invalidEmailAddress': 'Ogiltig e-postadress',
          'MediaAssets.downloadLink': 'Ladda ner',
          'MediaAssets.images': 'Bilder',
          'MediaAssets.media': 'Media',
          'MediaAssets.safetySheets': 'Säkerhetsdatablad',
          'MediaAssets.technicalDrawings': 'Teknisk information',
          'MediaAssets.videos': 'Videor',
          'PrintAction.print': 'Skriv ut',
          'ProductConfigurator.button.HelpConfigurator': 'Vanliga frågor',
          'ProductConfigurator.button.StartConfigurator': 'Börja konfiguration',
          'ProductConfigurator.list.1': 'Konfigurera snabbt och enkelt',
          'ProductConfigurator.list.2': 'Lägg direkt i varukorgen',
          'ProductConfigurator.title':
            'Behöver du en måttanpassad produkt? Konfigurera och beställ nu online! Dina fördelar:',
          'ProductGroup.link.scrollToMedia': 'Visa Media',
          'ProductGroup.link.scrollToProductsTable': 'Visa Produkttabeller',
          'ProductGroup.meta.description':
            'Upptäck {name} hos KRAMP. Du hittar det största sortimentet av {name} online. It´s that easy!',
          'ProductGroup.navigationBar.title': 'Visa produktgrupper',
          'ProductGroup.productTable.deliveryTime': 'Leveransdatum',
          'ProductGroup.productTable.fullscreen': 'Helskärm',
          'ProductGroup.productTable.noProductsMessage': 'Inga produkter',
          'ProductGroup.productTable.price': 'Pris',
          'ProductGroup.productTable.product': 'Produkt',
          'ProductGroupItem.goToProductsLink': 'Till produkterna',
          'ProductItem.advisory.description':
            'Kontakta oss för information om pris, leveranstid och övrig information',
          'ProductItem.advisory.title': 'Produkt med extra information',
          'ProductItem.buttons.addToCart': 'Läg till i varukorgen',
          'ProductItem.discountCode': 'Rabattkod',
          'ProductItem.discountCode.fetchError':
            'Det gick inte att hämta rabattkod',
          'ProductItem.discountCode.label': 'RC',
          'ProductItem.grossPrice': 'Bruttopris',
          'ProductItem.grossPrice.fetchError':
            'Det gick inte att hämta bruttopris',
          'ProductItem.id': 'Artikelnummer',
          'ProductItem.input.remarks': 'Kommentar',
          'ProductItem.netPrice': 'Nettopris',
          'ProductItem.netPrice.fetchError':
            'Det gick inte att hämta nettopriset',
          'ProductItem.netPrice.linkText': 'N',
          'ProductItem.nonReturnable':
            'Detta är en produkt som inte kan returneras',
          'ProductItem.quantity': 'Mängd',
          'ProductItem.quantity.roundingWarning': 'Godkänn avrundad summa',
          'ProductItem.quantityUnit': 'Enhet',
          'ProductItem.relations.accessories': 'Tillbehör',
          'ProductItem.relations.alternatives': 'Alternativ',
          'ProductItem.relations.spareParts': 'Reservdelar',
          'ProductItem.replacement': 'Produkten är ersatt',
          'ProductItem.tags.new': 'Ny artikel',
          'ProductItem.volumeDiscounts': 'Rabattpriser',
          'ProductItem.volumeDiscounts.linkText': 'N',
          'ProductItem.volumeDiscounts.price': 'Pris',
          'Search.activeFacets.clear': 'Ta bort filter',
          'Search.allCategories': 'Alla',
          'Search.noResults': 'Tyvärr fick vi ingen sökträff',
          'Search.queryValidation.lessThan2Chars': 'Skriv minst 2 tecken!',
          'Search.queryValidation.nonEmpty': 'Ange ett sökord',
          'Search.queryValidation.tooManyCharacters':
            'Skriv inte fler än {maxCharacters} tecken!',
          'Search.results.didYouMean': 'Menade du',
          'Search.results.searchForTitle': 'Sökresultat för {searchTerm}',
          'Search.results.summary':
            'Vi har hittat {numberOfResults} resultat. Du kan göra sökningen mer detaljerad med filtren i kolumnen till vänster.',
          'Search.results.summaryNoMatch':
            "Vi hittade inget när vi sökte efter ''{originalSearchTerm}''",
          'Search.results.translatedSearch':
            "Resultat för ''{translatedSearchTerm}'' visas ({numOfResults} träffar).",
          'Search.searchInAllCategories': 'Sök i alla kategorier',
          'Search.searchInCategory': 'Sök i kategori',
          'UnauthorizedMessage.body': 'Du har loggats ut. Logga in igen.',
          'UnauthorizedMessage.continueLoggedOffLink': 'Förbli utloggad',
          'UnauthorizedMessage.loginButton': 'Logga in',
          'UnauthorizedMessage.title': 'Din session har tagit slut.',
        }
      ),
      W = {
        cs_CZ: s,
        da_DK: c,
        de_AT: l,
        de_BE: l,
        de_CH: l,
        de_DE: l,
        de_IT: l,
        en_BA: m,
        en_BG: m,
        en_DE: m,
        en_DK: m,
        en_EE: m,
        en_ES: m,
        en_GB: f,
        en_HR: m,
        en_LT: m,
        en_LV: m,
        en_MK: m,
        en_PL: m,
        en_PT: m,
        en_RO: m,
        en_RS: m,
        en_SI: m,
        en_UA: m,
        en_US: m,
        es_DE: b,
        es_ES: h,
        es_PT: h,
        es_US: h,
        fi_FI: P,
        fi_SV: x,
        fr_BE: A,
        fr_CH: E,
        fr_FR: O,
        hu_HU: k,
        it_CH: L,
        it_IT: R,
        nl_BE: U,
        nl_NL: U,
        no_NO: N,
        pl_PL: B,
        ro_RO: V,
        ru_BG: q,
        ru_DE: q,
        ru_EE: q,
        ru_LT: q,
        ru_LV: q,
        ru_PL: q,
        ru_RU: q,
        ru_UA: q,
        sk_SK: $,
        sv_SE: x,
        sv_FI: x,
      };
    new o.Locale(a.a.country, a.a.language);
    n.d(t, 'a', function () {
      return Y;
    }),
      n.d(t, 'b', function () {
        return Z;
      }),
      n.d(t, 'c', function () {
        return X;
      });
    var K = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            r[a] = o[i];
        return r;
      },
      Y = Object.keys(W),
      Z = '/shop-:countrycode/:languagecode',
      J = [],
      X = K(r.b, J);
  },
  9: function (e, D, R) {
    'use strict';
    (function (e) {
      R.d(D, 'r', function () {
        return a;
      }),
        R.d(D, 'g', function () {
          return o;
        }),
        R.d(D, 'q', function () {
          return i;
        }),
        R.d(D, 'v', function () {
          return s;
        }),
        R.d(D, 'f', function () {
          return u;
        }),
        R.d(D, 'x', function () {
          return c;
        }),
        R.d(D, 'z', function () {
          return d;
        }),
        R.d(D, 'y', function () {
          return l;
        }),
        R.d(D, 'o', function () {
          return p;
        }),
        R.d(D, 'p', function () {
          return m;
        }),
        R.d(D, 'j', function () {
          return g;
        }),
        R.d(D, 'h', function () {
          return t;
        }),
        R.d(D, 'a', function () {
          return f;
        }),
        R.d(D, 'b', function () {
          return y;
        }),
        R.d(D, 'e', function () {
          return h;
        }),
        R.d(D, 't', function () {
          return v;
        }),
        R.d(D, 'c', function () {
          return C;
        }),
        R.d(D, 's', function () {
          return P;
        }),
        R.d(D, 'u', function () {
          return I;
        }),
        R.d(D, 'd', function () {
          return O;
        }),
        R.d(D, 'm', function () {
          return T;
        }),
        R.d(D, 'l', function () {
          return E;
        }),
        R.d(D, 'i', function () {
          return _;
        }),
        R.d(D, 'n', function () {
          return A;
        }),
        R.d(D, 'k', function () {
          return S;
        }),
        R.d(D, 'w', function () {
          return k;
        });
      var t,
        n,
        r = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            a = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
              r[a] = o[i];
          return r;
        },
        a = !0,
        o = !a,
        i =
          (['production', 'staging', 'development', 'local'].includes(
            'production'
          ),
          'production'),
        s = 'https://assets.kramp.com/search-and-products/static',
        u = (e.env.LOG_LEVEL, 'x-cloud-debug'),
        c = 'x-rid',
        d = '__PRELOADED_STATE__',
        l = '__INTL_DATA__',
        p = 'undefined' != typeof window,
        m = !p,
        g = 'GF_ACTING_AS';
      ((n = t = t || {}).Grid = 'grid'), (n.List = 'list');
      var f = 'productgroup',
        y = t.Grid,
        h = 'CAT_DISPLAY_MODE',
        v = 'redirected',
        b = [v],
        C = r(['page', 'displayMode', 'browseType', 'facetValues'], b),
        P = r(['page', 'categoryId'], b),
        I = r(['page', 'displayMode', 'facetValues'], b),
        O = (r(['breadcrumb', 'categoryId', 'componentId'], b), 'cp'),
        T = {
          OK: 200,
          MOVED_PERMANENTLY: 301,
          MOVED_TEMPORARILY: 302,
          UNAUTHORIZED: 401,
          NOT_FOUND: 404,
          INTERNAL_SERVER_ERROR: 500,
        },
        E = {
          UNAUTHORIZED: 'Unauthorized',
          NOT_FOUND: 'Not found',
        },
        _ = s + '/sprites/ProductPlaceHolder.svg',
        A = 5,
        S = 60,
        k = parseInt(e.env.VWO_ACCOUNT_ID);
    }.call(this, R(36)));
  },
  99: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'b', function () {
        return s;
      });
    var r,
      a,
      o = n(4);
    ((a = r = r || {}).LOG_IN = '[frontend/auth]/LOG_IN'),
      (a.LOG_OUT = '[frontend/auth]/LOG_OUT'),
      (a.LOG_OUT_SUCCESS = '[frontend/auth]/LOG_OUT_SUCCESS'),
      (a.LOG_OUT_FAILED = '[frontend/auth]/LOG_OUT_FAILED');
    Object(o.a)(r.LOG_IN), Object(o.a)(r.LOG_OUT);
    var i = Object(o.a)(r.LOG_OUT_SUCCESS),
      s = Object(o.a)(r.LOG_OUT_FAILED);
  },
});
