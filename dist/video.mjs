(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.video-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.video-tool__video{border-radius:3px;overflow:hidden;margin-bottom:10px}.video-tool__video-picture{max-width:100%;vertical-align:bottom;display:block}.video-tool__video-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.video-tool__video-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:video-preloader-spin 2s infinite linear;box-sizing:border-box}.video-tool__caption{display:none}.video-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.video-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.video-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.video-tool--empty .video-tool__video{display:none}.video-tool--empty .video-tool__caption,.video-tool--uploading .video-tool__caption{display:none!important}.video-tool .cdx-button{display:flex;align-items:center;justify-content:center}.video-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.video-tool--filled .cdx-button,.video-tool--filled .video-tool__video-preloader{display:none}.video-tool--uploading .video-tool__video{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.video-tool--uploading .video-tool__video-picture,.video-tool--uploading .cdx-button{display:none}.video-tool--withBorder .video-tool__video{border:1px solid var(--border-color)}.video-tool--withBackground .video-tool__video{padding:15px;background:var(--bg-color)}.video-tool--withBackground .video-tool__video-picture{max-width:60%;margin:0 auto}.video-tool--stretched .video-tool__video-picture{width:100%}.video-tool--caption .video-tool__caption{display:block}@keyframes video-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 10.5606V13.4394C10 14.4777 11.1572 15.0971 12.0211 14.5211L14.1803 13.0817C14.9536 12.5661 14.9503 11.4317 14.18 10.9181L12.0214 9.47907C11.1591 8.9042 10 9.5203 10 10.5606Z"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function j(C, o = null, r = {}) {
  const d = document.createElement(C);
  Array.isArray(o) ? d.classList.add(...o) : o !== null && d.classList.add(o);
  for (const i in r)
    r.hasOwnProperty(i) && (d[i] = r[i]);
  return r != null && r.playsinline && d.setAttribute("playsinline", ""), d;
}
var _ = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(_ || {});
class N {
  /**
   * @param ui - video tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: o, config: r, onSelectFile: d, readOnly: i }) {
    this.api = o, this.config = r, this.onSelectFile = d, this.readOnly = i, this.nodes = {
      wrapper: j("div", [this.CSS.baseClass, this.CSS.wrapper]),
      videoContainer: j("div", [this.CSS.videoContainer]),
      fileButton: this.createFileButton(),
      videoEl: void 0,
      videoPreloader: j("div", this.CSS.videoPreloader),
      caption: j("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.videoContainer.appendChild(this.nodes.videoPreloader), this.nodes.wrapper.appendChild(this.nodes.videoContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(o, r) {
    var d, i;
    ["autoplay", "loop", "muted", "playsinline", "controls"].includes(o) ? r === !0 ? (d = this.nodes.videoEl) == null || d.setAttribute(o, "") : (i = this.nodes.videoEl) == null || i.removeAttribute(o) : this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`, r);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(o) {
    return o.file === void 0 || Object.keys(o.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(o) {
    this.nodes.videoPreloader.style.backgroundImage = `url(${o})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.videoPreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an video
   * @param url - video source
   */
  fillVideo(o, r) {
    const d = "VIDEO", i = {
      src: o
    };
    i.autoplay = r.autoplay, i.loop = r.loop, i.muted = r.muted, i.playsinline = r.playsinline, i.controls = r.controls;
    const u = "loadeddata";
    this.nodes.videoEl = j(d, this.CSS.videoEl, i), this.nodes.videoEl.addEventListener(u, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.videoPreloader !== void 0 && (this.nodes.videoPreloader.style.backgroundImage = "");
    }), this.nodes.videoContainer.appendChild(this.nodes.videoEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(o) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = o);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "video-tool",
      videoContainer: "video-tool__video",
      videoPreloader: "video-tool__video-preloader",
      videoEl: "video-tool__video-picture",
      caption: "video-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    console.log("create file button");
    const o = j("div", [this.CSS.button]);
    return o.innerHTML = this.config.buttonContent ?? `${D} ${this.api.i18n.t("Select a Video")}`, o.addEventListener("click", () => {
      console.log("file button click"), this.onSelectFile();
    }), o;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(o) {
    for (const r in _)
      Object.prototype.hasOwnProperty.call(_, r) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${_[r]}`, o === _[r]);
  }
}
function I(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var T = { exports: {} };
(function(C, o) {
  (function(r, d) {
    C.exports = d();
  })(self, () => {
    return r = { 954: (i, u, h) => {
      function g(e) {
        return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, g(e);
      }
      h(141);
      var s, m, E, w, a, v, y, c = h(347), t = (m = function(e) {
        return new Promise(function(n, l) {
          e = w(e), (e = a(e)).beforeSend && e.beforeSend();
          var p = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          p.open(e.method, e.url), p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e.headers).forEach(function(f) {
            var k = e.headers[f];
            p.setRequestHeader(f, k);
          });
          var M = e.ratio;
          p.upload.addEventListener("progress", function(f) {
            var k = Math.round(f.loaded / f.total * 100), b = Math.ceil(k * M / 100);
            e.progress(Math.min(b, 100));
          }, !1), p.addEventListener("progress", function(f) {
            var k = Math.round(f.loaded / f.total * 100), b = Math.ceil(k * (100 - M) / 100) + M;
            e.progress(Math.min(b, 100));
          }, !1), p.onreadystatechange = function() {
            if (p.readyState === 4) {
              var f = p.response;
              try {
                f = JSON.parse(f);
              } catch {
              }
              var k = c.parseHeaders(p.getAllResponseHeaders()), b = { body: f, code: p.status, headers: k };
              y(p.status) ? n(b) : l(b);
            }
          }, p.send(e.data);
        });
      }, E = function(e) {
        return e.method = "POST", m(e);
      }, w = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (e.url && typeof e.url != "string") throw new Error("Url must be a string");
        if (e.url = e.url || "", e.method && typeof e.method != "string") throw new Error("`method` must be a string or null");
        if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && g(e.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (e.headers = e.headers || {}, e.type && (typeof e.type != "string" || !Object.values(s).includes(e.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (e.progress && typeof e.progress != "function") throw new Error("`progress` must be a function or null");
        if (e.progress = e.progress || function(n) {
        }, e.beforeSend = e.beforeSend || function(n) {
        }, e.ratio && typeof e.ratio != "number") throw new Error("`ratio` must be a number");
        if (e.ratio < 0 || e.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (e.ratio = e.ratio || 90, e.accept && typeof e.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (e.accept = e.accept || "*/*", e.multiple && typeof e.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (e.multiple = e.multiple || !1, e.fieldName && typeof e.fieldName != "string") throw new Error("`fieldName` must be a string");
        return e.fieldName = e.fieldName || "files", e;
      }, a = function(e) {
        switch (e.method) {
          case "GET":
            var n = v(e.data, s.URLENCODED);
            delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + n : e.url + "?" + n;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            }(e);
            (c.isFormData(e.data) || c.isFormElement(e.data)) && (l = s.FORM), e.data = v(e.data, l), l !== t.contentType.FORM && (e.headers["content-type"] = l);
        }
        return e;
      }, v = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return c.urlEncode(e);
          case s.JSON:
            return c.jsonEncode(e);
          case s.FORM:
            return c.formEncode(e);
          default:
            return e;
        }
      }, y = function(e) {
        return e >= 200 && e < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: m, get: function(e) {
        return e.method = "GET", m(e);
      }, post: E, transport: function(e) {
        return e = w(e), c.selectFiles(e).then(function(n) {
          for (var l = new FormData(), p = 0; p < n.length; p++) l.append(e.fieldName, n[p], n[p].name);
          c.isObject(e.data) && Object.keys(e.data).forEach(function(f) {
            var k = e.data[f];
            l.append(f, k);
          });
          var M = e.beforeSend;
          return e.beforeSend = function() {
            return M(n);
          }, e.data = l, E(e);
        });
      }, selectFiles: function(e) {
        return delete (e = w(e)).beforeSend, c.selectFiles(e);
      } });
      i.exports = t;
    }, 141: () => {
      function i(t, e) {
        this.name = "AggregateError", this.errors = t, this.message = e || "";
      }
      i.prototype = Error.prototype;
      var u = setTimeout;
      function h(t) {
        return !!(t && t.length !== void 0);
      }
      function g() {
      }
      function s(t) {
        if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
        if (typeof t != "function") throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(t, this);
      }
      function m(t, e) {
        for (; t._state === 3; ) t = t._value;
        t._state !== 0 ? (t._handled = !0, s._immediateFn(function() {
          var n = t._state === 1 ? e.onFulfilled : e.onRejected;
          if (n !== null) {
            var l;
            try {
              l = n(t._value);
            } catch (p) {
              return void w(e.promise, p);
            }
            E(e.promise, l);
          } else (t._state === 1 ? E : w)(e.promise, t._value);
        })) : t._deferreds.push(e);
      }
      function E(t, e) {
        try {
          if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
          if (e && (typeof e == "object" || typeof e == "function")) {
            var n = e.then;
            if (e instanceof s) return t._state = 3, t._value = e, void a(t);
            if (typeof n == "function") return void y((l = n, p = e, function() {
              l.apply(p, arguments);
            }), t);
          }
          t._state = 1, t._value = e, a(t);
        } catch (M) {
          w(t, M);
        }
        var l, p;
      }
      function w(t, e) {
        t._state = 2, t._value = e, a(t);
      }
      function a(t) {
        t._state === 2 && t._deferreds.length === 0 && s._immediateFn(function() {
          t._handled || s._unhandledRejectionFn(t._value);
        });
        for (var e = 0, n = t._deferreds.length; e < n; e++) m(t, t._deferreds[e]);
        t._deferreds = null;
      }
      function v(t, e, n) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof e == "function" ? e : null, this.promise = n;
      }
      function y(t, e) {
        var n = !1;
        try {
          t(function(l) {
            n || (n = !0, E(e, l));
          }, function(l) {
            n || (n = !0, w(e, l));
          });
        } catch (l) {
          if (n) return;
          n = !0, w(e, l);
        }
      }
      s.prototype.catch = function(t) {
        return this.then(null, t);
      }, s.prototype.then = function(t, e) {
        var n = new this.constructor(g);
        return m(this, new v(t, e, n)), n;
      }, s.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(n) {
          return e.resolve(t()).then(function() {
            return n;
          });
        }, function(n) {
          return e.resolve(t()).then(function() {
            return e.reject(n);
          });
        });
      }, s.all = function(t) {
        return new s(function(e, n) {
          if (!h(t)) return n(new TypeError("Promise.all accepts an array"));
          var l = Array.prototype.slice.call(t);
          if (l.length === 0) return e([]);
          var p = l.length;
          function M(k, b) {
            try {
              if (b && (typeof b == "object" || typeof b == "function")) {
                var F = b.then;
                if (typeof F == "function") return void F.call(b, function(S) {
                  M(k, S);
                }, n);
              }
              l[k] = b, --p == 0 && e(l);
            } catch (S) {
              n(S);
            }
          }
          for (var f = 0; f < l.length; f++) M(f, l[f]);
        });
      }, s.any = function(t) {
        var e = this;
        return new e(function(n, l) {
          if (!t || t.length === void 0) return l(new TypeError("Promise.any accepts an array"));
          var p = Array.prototype.slice.call(t);
          if (p.length === 0) return l();
          for (var M = [], f = 0; f < p.length; f++) try {
            e.resolve(p[f]).then(n).catch(function(k) {
              M.push(k), M.length === p.length && l(new i(M, "All promises were rejected"));
            });
          } catch (k) {
            l(k);
          }
        });
      }, s.allSettled = function(t) {
        return new this(function(e, n) {
          if (!t || t.length === void 0) return n(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var l = Array.prototype.slice.call(t);
          if (l.length === 0) return e([]);
          var p = l.length;
          function M(k, b) {
            if (b && (typeof b == "object" || typeof b == "function")) {
              var F = b.then;
              if (typeof F == "function") return void F.call(b, function(S) {
                M(k, S);
              }, function(S) {
                l[k] = { status: "rejected", reason: S }, --p == 0 && e(l);
              });
            }
            l[k] = { status: "fulfilled", value: b }, --p == 0 && e(l);
          }
          for (var f = 0; f < l.length; f++) M(f, l[f]);
        });
      }, s.resolve = function(t) {
        return t && typeof t == "object" && t.constructor === s ? t : new s(function(e) {
          e(t);
        });
      }, s.reject = function(t) {
        return new s(function(e, n) {
          n(t);
        });
      }, s.race = function(t) {
        return new s(function(e, n) {
          if (!h(t)) return n(new TypeError("Promise.race accepts an array"));
          for (var l = 0, p = t.length; l < p; l++) s.resolve(t[l]).then(e, n);
        });
      }, s._immediateFn = typeof setImmediate == "function" && function(t) {
        setImmediate(t);
      } || function(t) {
        u(t, 0);
      }, s._unhandledRejectionFn = function(t) {
        typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", t);
      };
      const c = s;
      window.Promise = window.Promise || c;
    }, 347: (i, u, h) => {
      function g(m, E) {
        for (var w = 0; w < E.length; w++) {
          var a = E[w];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(m, a.key, a);
        }
      }
      var s = h(989);
      i.exports = function() {
        function m() {
          (function(a, v) {
            if (!(a instanceof v)) throw new TypeError("Cannot call a class as a function");
          })(this, m);
        }
        var E, w;
        return E = m, w = [{ key: "urlEncode", value: function(a) {
          return s(a);
        } }, { key: "jsonEncode", value: function(a) {
          return JSON.stringify(a);
        } }, { key: "formEncode", value: function(a) {
          if (this.isFormData(a)) return a;
          if (this.isFormElement(a)) return new FormData(a);
          if (this.isObject(a)) {
            var v = new FormData();
            return Object.keys(a).forEach(function(y) {
              var c = a[y];
              v.append(y, c);
            }), v;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(a) {
          return Object.prototype.toString.call(a) === "[object Object]";
        } }, { key: "isFormData", value: function(a) {
          return a instanceof FormData;
        } }, { key: "isFormElement", value: function(a) {
          return a instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(v, y) {
            var c = document.createElement("INPUT");
            c.type = "file", a.multiple && c.setAttribute("multiple", "multiple"), a.accept && c.setAttribute("accept", a.accept), c.style.display = "none", document.body.appendChild(c), c.addEventListener("change", function(t) {
              var e = t.target.files;
              v(e), document.body.removeChild(c);
            }, !1), c.addEventListener("cancel", function(t) {
              y(), document.body.removeChild(c);
            }, !1), c.click();
          });
        } }, { key: "parseHeaders", value: function(a) {
          var v = a.trim().split(/[\r\n]+/), y = {};
          return v.forEach(function(c) {
            var t = c.split(": "), e = t.shift(), n = t.join(": ");
            e && (y[e] = n);
          }), y;
        } }], w && g(E, w), m;
      }();
    }, 989: (i) => {
      var u = function(g) {
        return encodeURIComponent(g).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, h = function(g, s, m, E) {
        return s = s || null, m = m || "&", E = E || null, g ? function(w) {
          for (var a = new Array(), v = 0; v < w.length; v++) w[v] && a.push(w[v]);
          return a;
        }(Object.keys(g).map(function(w) {
          var a, v, y = w;
          if (E && (y = E + "[" + y + "]"), typeof g[w] == "object" && g[w] !== null) a = h(g[w], null, m, y);
          else {
            s && (v = y, y = !isNaN(parseFloat(v)) && isFinite(v) ? s + Number(y) : y);
            var c = g[w];
            c = (c = (c = (c = c === !0 ? "1" : c) === !1 ? "0" : c) === 0 ? "0" : c) || "", a = u(y) + "=" + u(c);
          }
          return a;
        })).join(m).replace(/[!'()*]/g, "") : "";
      };
      i.exports = h;
    } }, d = {}, function i(u) {
      var h = d[u];
      if (h !== void 0) return h.exports;
      var g = d[u] = { exports: {} };
      return r[u](g, g.exports, i), g.exports;
    }(954);
    var r, d;
  });
})(T);
var J = T.exports;
const P = /* @__PURE__ */ I(J);
function L(C) {
  return C !== void 0 && typeof C.then == "function";
}
class $ {
  /**
   * @param params - uploader module params
   * @param params.config - video tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: o, onUpload: r, onError: d }) {
    this.config = o, this.onUpload = r, this.onError = d;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: o }) {
    console.log("uploadSelectedFile");
    const r = function(i) {
      console.log("preparePreview");
      const u = new FileReader();
      u.readAsDataURL(i), u.onload = (h) => {
        console.log("reader onload"), o(h.target.result);
      };
    };
    let d;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const i = this.config.uploader.uploadByFile;
      console.log("custom uploading"), d = P.selectFiles({ accept: this.config.types ?? "video/*" }).then((u) => {
        console.log("selectFiles"), r(u[0]);
        const h = i(u[0]);
        return L(h) || console.warn("Custom uploader method uploadByFile should return a Promise"), h;
      });
    } else
      console.log("default uploading"), d = P.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "video/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (i) => {
          console.log("beforeSend"), r(i[0]);
        },
        fieldName: this.config.field ?? "video"
      }).then((i) => i.body);
    d.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      console.log(i), this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - video source url
   */
  uploadByUrl(o) {
    let r;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (r = this.config.uploader.uploadByUrl(o), L(r) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : r = P.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: o
      }, this.config.additionalRequestData),
      type: P.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((d) => d.body), r.then((d) => {
      this.onUpload(d);
    }).catch((d) => {
      this.onError(d);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(o, { onPreview: r }) {
    const d = new FileReader();
    d.readAsDataURL(o), d.onload = (u) => {
      r(u.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(o), L(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const u = new FormData();
      u.append(this.config.field ?? "video", o), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([h, g]) => {
        u.append(h, g);
      }), i = P.post({
        url: this.config.endpoints.byFile,
        data: u,
        type: P.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((h) => h.body);
    }
    i.then((u) => {
      this.onUpload(u);
    }).catch((u) => {
      this.onError(u);
    });
  }
}
/**
 * Video Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/video}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * video: {
 *   class: VideoTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class O {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: o, config: r, api: d, readOnly: i, block: u }) {
    var h, g;
    this.api = d, this.block = u, this.config = {
      endpoints: r.endpoints,
      additionalRequestData: r.additionalRequestData,
      additionalRequestHeaders: r.additionalRequestHeaders,
      field: r.field,
      types: r.types,
      captionPlaceholder: this.api.i18n.t(r.captionPlaceholder ?? "Caption"),
      buttonContent: r.buttonContent,
      uploader: r.uploader,
      actions: r.actions,
      features: r.features || {}
    }, this.uploader = new $({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.ui = new N({
      api: d,
      config: this.config,
      onSelectFile: () => {
        console.log("onSelectFile"), this.uploader.uploadSelectedFile({
          onPreview: (s) => {
            console.log("onPreview"), this.ui.showPreloader(s);
          }
        });
      },
      readOnly: i
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      autoplay: !1,
      loop: !1,
      muted: !1,
      playsinline: !0,
      controls: !0,
      file: {
        url: ""
      }
    }, this.data = o, (h = this.config.features) != null && h.playsinline && (this._data.playsinline = o.hasOwnProperty("playsinline") ? o.playsinline : !0), (g = this.config.features) != null && g.controls && (this._data.controls = o.hasOwnProperty("controls") ? o.controls : !0);
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: x,
      title: "Video"
    };
  }
  /**
   * Available video tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: R,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: A,
        title: "Stretch video",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: H,
        title: "With background",
        toggle: !0
      },
      {
        name: "autoplay",
        icon: x,
        title: "AutoPlay",
        toggle: !0
      },
      {
        name: "loop",
        icon: V,
        title: "Loop",
        toggle: !0
      },
      {
        name: "muted",
        icon: '<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.5858V7.41421C11 6.52331 9.92286 6.07714 9.29289 6.70711L7.29289 8.70711C7.10536 8.89464 6.851 9 6.58579 9H5C4.44772 9 4 9.44772 4 10V14C4 14.5523 4.44772 15 5 15H6.58579C6.851 15 7.10536 15.1054 7.29289 15.2929L9.29289 17.2929C9.92286 17.9229 11 17.4767 11 16.5858Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/><path d="M20 9.5L15 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/><path d="M20 14.5L15 9.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/></svg>',
        title: "Muted",
        toggle: !0
      },
      {
        name: "playsinline",
        icon: B,
        title: "PlaysInline",
        toggle: !0
      },
      {
        name: "controls",
        icon: U,
        title: "Controls",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    var o, r, d;
    return (((o = this.config.features) == null ? void 0 : o.caption) === !0 || ((r = this.config.features) == null ? void 0 : r.caption) === void 0 || ((d = this.config.features) == null ? void 0 : d.caption) === "optional" && this.data.caption) && this.ui.applyTune("caption", !0), this.ui.render(this.data);
  }
  /**
   * Validate data: check if Video exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(o) {
    return !!o.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const o = this.ui.nodes.caption;
    return this._data.caption = o.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch video
   * @returns TunesMenuConfig
   */
  renderSettings() {
    var i;
    const o = O.tunes.concat(this.config.actions || []), r = {
      border: "withBorder",
      background: "withBackground",
      stretch: "stretched",
      caption: "caption",
      autoplay: "autoplay",
      loop: "loop",
      muted: "muted",
      playsinline: "playsinline",
      controls: "controls"
    };
    return ((i = this.config.features) == null ? void 0 : i.caption) === "optional" && o.push({
      name: "caption",
      icon: q,
      title: "With caption",
      toggle: !0
    }), o.filter((u) => {
      var g, s;
      const h = Object.keys(r).find((m) => r[m] === u.name);
      return h === "caption" ? ((g = this.config.features) == null ? void 0 : g.caption) !== !1 : h == null || ((s = this.config.features) == null ? void 0 : s[h]) !== !1;
    }).map((u) => ({
      icon: u.icon,
      label: this.api.i18n.t(u.title),
      name: u.name,
      toggle: u.toggle,
      isActive: this.data[u.name],
      onActivate: () => {
        if (typeof u.action == "function") {
          u.action(u.name);
          return;
        }
        this.tuneToggled(u.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Video Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          video: { src: !0 }
        }
      ],
      /**
       * Paste URL of video into the Editor
       */
      patterns: {
        video: /https?:\/\/\S+\.(mp4|webm)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["video/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(o) {
    switch (o.type) {
      case "tag": {
        const r = o.detail.data;
        if (/^blob:/.test(r.src)) {
          const i = await (await fetch(r.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(r.src);
        break;
      }
      case "pattern": {
        const r = o.detail.data;
        this.uploadUrl(r);
        break;
      }
      case "file": {
        const r = o.detail.file;
        this.uploadFile(r);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Video Tool format
   */
  set data(o) {
    this.video = o.file, this._data.caption = o.caption || "", this.ui.fillCaption(this._data.caption), O.tunes.forEach(({ name: r }) => {
      const d = typeof o[r] < "u" ? o[r] === !0 || o[r] === "true" : !1;
      this.setTune(r, d);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new video file
   * @param file - uploaded file data
   */
  set video(o) {
    this._data.file = o || { url: "" }, o && o.url && this.ui.fillVideo(o.url, this.data);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(o) {
    o.success && o.file ? this.video = o.file : this.uploadingFailed("incorrect response: " + JSON.stringify(o));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(o) {
    console.log("Video Tool: uploading failed because of", o), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload video. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(o) {
    this.setTune(o, !this._data[o]), o === "caption" && !this._data[o] && (this._data.caption = "", this.ui.fillCaption(""));
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(o, r) {
    this._data[o] = r, this.ui.applyTune(o, r), o === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = r;
    }).catch((d) => {
      console.error(d);
    });
  }
  /**
   * Show preloader and upload video file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(o) {
    this.uploader.uploadByFile(o, {
      onPreview: (r) => {
        this.ui.showPreloader(r);
      }
    });
  }
  /**
   * Show preloader and upload video by target url
   * @param url - url pasted
   */
  uploadUrl(o) {
    this.ui.showPreloader(o), this.uploader.uploadByUrl(o);
  }
}
export {
  O as default
};
