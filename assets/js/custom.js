var plexify = function () {
  function n() {
    var e = window.location.search;
    let o = new URLSearchParams(e).get("data-theme");
    var t,
      e = document.querySelector(".dark-theme"),
      n = document.querySelector(".light-theme");
    let l = document.querySelector("html");
    function r(e, t) {
      var n = l.classList.contains("dark") ? "dark" : "light";
      if (t) {
        if (e === n) return;
      } else if (o) e = o;
      else if (e === n) return;
      (l.classList.toggle("dark", "dark" === e),
        l.classList.toggle("light", "light" === e),
        (t = "theme"),
        (n = e),
        (e = 30),
        (e = new Date(Date.now() + 864e5 * e).toUTCString()),
        (document.cookie = t + `=${n}; expires=${e}; path=/`));
    }
    (o
      ? "light" == o
        ? r("light")
        : "dark" == o && r("dark")
      : ((t = "theme"),
        r(
          "dark" ===
            (t = (t = document.cookie.match(
              new RegExp("(^| )" + t + "=([^;]+)"),
            ))
              ? t[2]
              : null) || "light" === t
            ? t
            : "dark",
        )),
      e && e.addEventListener("click", () => r("light", "btn")),
      n && n.addEventListener("click", () => r("dark", "btn")));
  }
  let l = () => {
      function e() {
        (this.classList.toggle("open"),
          l?.classList.toggle("show"),
          r?.classList.toggle("show"),
          document.body.classList.toggle(
            "menu-btn-open",
            this.classList.contains("open"),
          ));
      }
      function t() {
        (o?.classList.remove("open"),
          l?.classList.remove("show"),
          r?.classList.remove("show"),
          document.body.classList.remove("menu-btn-open"));
      }
      function n(t) {
        var n = t.target.closest("a");
        if (n && l.contains(n)) {
          let e = n.nextElementSibling;
          e &&
            (e.classList.contains("sub-menu") ||
              e.classList.contains("mega-menu")) &&
            (t.preventDefault(),
            (t = n.classList.contains("dz-open")),
            ((e) => {
              var t = e.closest("li");
              if (t) {
                var n,
                  t = t.parentElement;
                if (t)
                  for (n of t.children) {
                    var o = n.querySelector(":scope > a.dz-open");
                    o &&
                      o !== e &&
                      (o.classList.remove("dz-open"),
                      (o = o.nextElementSibling)) &&
                      (o.style.maxHeight = null);
                  }
              }
            })(n),
            t
              ? (n.classList.remove("dz-open"),
                (e.style.maxHeight = null),
                requestAnimationFrame(() => s(e)))
              : (n.classList.add("dz-open"),
                requestAnimationFrame(() => {
                  ((e.style.maxHeight = e.scrollHeight + "px"),
                    requestAnimationFrame(() => s(e)));
                })));
        }
      }
      let o = document.querySelector(".menu-btn"),
        l = document.querySelector(".full-sidenav"),
        r = document.querySelector(".main-bar"),
        a = document.querySelector(".menu-close"),
        s = (e) => {
          let t = e.parentElement;
          for (; t; ) {
            if (
              t.classList.contains("sub-menu") ||
              t.classList.contains("mega-menu")
            ) {
              t.style.maxHeight = "none";
              let e = t.scrollHeight;
              requestAnimationFrame(() => {
                t.style.maxHeight = e + "px";
              });
            }
            t = t.parentElement;
          }
        };
      return (
        o?.addEventListener("click", e),
        a?.addEventListener("click", t),
        l?.addEventListener("click", n),
        function () {
          (o?.removeEventListener("click", e),
            a?.removeEventListener("click", t),
            l?.removeEventListener("click", n));
        }
      );
    },
    a = (e = document) => {
      (e.querySelectorAll(".myAccordion").forEach((l) => {
        "true" !== l.dataset.bound &&
          ((l.dataset.bound = "true"),
          l.addEventListener("click", function (e) {
            let t = e.target.closest(".accordion-header");
            var n, o;
            t &&
              l.contains(t) &&
              ((e = t.parentElement.querySelector(".accordion-content")),
              (n = t.querySelector(".arrow")),
              (o = t.classList.contains("open")),
              l.querySelectorAll(".accordion-header").forEach((e) => {
                e !== t &&
                  (e.classList.remove("open"),
                  e.querySelector(".arrow")?.classList.remove("active"),
                  (e = e.parentElement.querySelector(".accordion-content"))) &&
                  (e.style.maxHeight = null);
              }),
              o
                ? (t.classList.remove("open"),
                  (e.style.maxHeight = null),
                  n?.classList.remove("active"))
                : (t.classList.add("open"),
                  (e.style.maxHeight = e.scrollHeight + "px"),
                  n?.classList.add("active")));
          }));
      }),
        e.querySelectorAll(".accordion-header.open").forEach((e) => {
          var t = e.parentElement.querySelector(".accordion-content"),
            e = e.querySelector(".arrow");
          t &&
            ((t.style.maxHeight = t.scrollHeight + "px"),
            e?.classList.add("active"));
        }));
    },
    s = () => {
      let e = document.querySelectorAll(".value"),
        r = 200;
      var t = () => {
        e.forEach((e) => {
          !e.classList.contains("counted") &&
            ((e) => {
              e = e.getBoundingClientRect();
              return (
                0 <= e.top &&
                e.bottom <=
                  (window.innerHeight || document.documentElement.clientHeight)
              );
            })(e) &&
            (e.classList.add("counted"),
            ((e) => {
              let t = +e.getAttribute("data-akhi"),
                n = 0,
                o = t / r,
                l = () => {
                  (n += o) < t
                    ? ((e.innerText = Math.ceil(n)), requestAnimationFrame(l))
                    : (e.innerText = t);
                };
              l();
            })(e));
        });
      };
      (window.addEventListener("scroll", t), t());
    },
    i = () => {
      let l = document.getElementById("videoDialog"),
        r = document.getElementById("videoContainer"),
        e = document.getElementById("closeBtn"),
        t = document.body;
      if (!l || !r || !e) return;
      let n = (e) => {
          var t,
            e = e.target.closest("button[data-type]");
          e &&
            ((t = e.getAttribute("data-type")),
            (e = e.getAttribute("data-src")),
            t) &&
            e &&
            ((e, t) => {
              let n = "";
              if (e === "youtube" || e === "vimeo") {
                const o = encodeURI(t);
                n = `<iframe src="${o}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
              } else if (e === "mp4")
                n = `<video controls autoplay><source src="${t}" type="video/mp4">Your browser does not support the video tag.</video>`;
              ((r.innerHTML = n), (l.style.display = "flex"));
            })(t, e);
        },
        o = () => {
          ((r.innerHTML = ""), (l.style.display = "none"));
        };
      return (
        t.addEventListener("click", n),
        e.addEventListener("click", o),
        () => {
          (t.removeEventListener("click", n),
            e.removeEventListener("click", o));
        }
      );
    },
    c = () => {
      document.querySelectorAll(".input-group").forEach((e) => {
        e.addEventListener("click", function (e) {
          var t,
            n,
            o = e.target.closest(".button-plus, .button-minus");
          o &&
            (o.classList.contains("button-plus")
              ? ((t = e).preventDefault(),
                (n = (t = t.target.closest("[data-field]")).getAttribute(
                  "data-field",
                )),
                (t = (t.closest("div") || t.closest("td")).querySelector(
                  `input[name="${n}"]`,
                )),
                (n = parseInt(t.value, 10)),
                (t.value = isNaN(n) ? 0 : n + 1))
              : o.classList.contains("button-minus") &&
                ((t = e).preventDefault(),
                (n = (t = t.target.closest("[data-field]")).getAttribute(
                  "data-field",
                )),
                (t = (t.closest("div") || t.closest("td")).querySelector(
                  `input[name="${n}"]`,
                )),
                (n = parseInt(t.value, 10)),
                (t.value = !isNaN(n) && 0 < n ? n - 1 : 0)));
        });
      });
    },
    d = () => {
      var e,
        t = document.querySelector(".overlay-navbar");
      t &&
        ((e = window.innerWidth < 1440 ? 22 : 12),
        (e = t.offsetWidth / 2 + e),
        (t.style.clipPath = `inset(0px 0px 0px ${e}px)`));
    },
    u = () => {
      document.querySelectorAll(".dynamic-select").forEach((e) => {
        ((n) => {
          const e = n.id || `select-${Math.random().toString(36).substr(2, 9)}`,
            t = document.createElement("div"),
            o =
              ((t.id = `custom-${e}`),
              (t.className = "custom-select"),
              document.createElement("div")),
            l =
              ((o.className = "select-selected"),
              (o.textContent = (
                n.querySelector("option[selected]") || n.options[0]
              ).textContent),
              n.parentElement?.dataset?.label || "");
          if (l) {
            const a = document.createElement("span");
            a.textContent = l;
            o.appendChild(a);
          }
          t.appendChild(o);
          const r = document.createElement("div");
          ((r.className = "select-items select-hide"),
            t.appendChild(r),
            Array.from(n.options).forEach((e) => {
              const t = document.createElement("div");
              t.className = "select-item";
              t.setAttribute("data-value", e.value);
              t.textContent = e.textContent;
              if (e.selected) t.classList.add("active");
              t.addEventListener("click", function () {
                o.childNodes[0].textContent = this.textContent;
                n.value = this.getAttribute("data-value");
                n.dispatchEvent(new Event("change"));
                n.dispatchEvent(new Event("click"));
                r.classList.add("select-hide");
                o.classList.remove("select-active");
                r.querySelectorAll(".select-item").forEach((e) =>
                  e.classList.remove("active"),
                );
                this.classList.add("active");
              });
              r.appendChild(t);
            }),
            (n.style.display = "none"),
            n.parentNode.insertBefore(t, n.nextSibling),
            o.addEventListener("click", function (e) {
              e.stopPropagation();
              r.classList.toggle("select-hide");
              o.classList.toggle("select-active");
            }),
            document.addEventListener("click", function (e) {
              if (!t.contains(e.target)) {
                r.classList.add("select-hide");
                o.classList.remove("select-active");
              }
            }));
        })(e);
      });
    };
  return {
    init: function () {
      {
        let l = document.getElementById("scrollProgress");
        var t = document.getElementById("scrolltopbtn");
        if (l) {
          let o = l.querySelector("circle");
          if (o) {
            var e = o.r.baseVal.value;
            let n = 2 * Math.PI * e;
            function r() {
              var e = window.scrollY || document.documentElement.scrollTop,
                t =
                  e /
                  (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight),
                t = n * (1 - t);
              ((o.style.strokeDashoffset = t),
                200 < e
                  ? l.classList.add("active")
                  : l.classList.remove("active"));
            }
            ((o.style.strokeDasharray = "" + n),
              (o.style.strokeDashoffset = "" + n),
              window.addEventListener("scroll", r),
              r(),
              l.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }),
              t &&
                t.addEventListener("click", () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }));
          }
        }
      }
      (l(),
        0 < document.querySelectorAll(".wow").length &&
          new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 50,
            mobile: !1,
          }).init(),
        a(),
        document.querySelectorAll(".word-rotate").forEach((e) => {
          var t = e.textContent.trim().split("");
          let o =
              (e.classList.contains("third-one")
                ? 60
                : e.classList.contains("one-third")
                  ? 240
                  : 360) /
              (t.length - 1),
            l = e.closest(".word-rotate-box");
          (t.forEach((e, t) => {
            var n = document.createElement("span");
            ((n.className = "text-char"),
              n.style.setProperty("--char-rotate", t * o + "deg"),
              (n.textContent = e),
              l.appendChild(n));
          }),
            e.remove());
        }),
        (e = (e, n, o) => {
          e = document.getElementById(e);
          if (e) {
            noUiSlider.create(e, {
              start: [40, 346],
              connect: !0,
              format: { from: (e) => Number(e), to: (e) => Math.round(e) },
              tooltips: [wNumb({ decimals: 1 }), !0],
              range: { min: 0, max: 400 },
            });
            let t = [document.getElementById(n), document.getElementById(o)];
            e.noUiSlider.on("update", (e) => {
              ((t[0].innerHTML = "Min Price: $" + e[0]),
                (t[1].innerHTML = "Max Price: $" + e[1]));
            });
          }
        })(
          "slider-tooltips",
          "slider-margin-value-min",
          "slider-margin-value-max",
        ),
        e(
          "slider-tooltips2",
          "slider-margin-value-min2",
          "slider-margin-value-max2",
        ),
        document
          .querySelectorAll(".color-filter .form-check-input")
          .forEach((e) => {
            var t = e.value,
              e = e.closest(".form-check");
            e && (e = e.querySelector("span")) && (e.style.backgroundColor = t);
          }),
        document.querySelectorAll(".custom-tab").forEach((t) => {
          let n = t.querySelectorAll(".tab-title"),
            l = t.querySelectorAll(".tab-content");
          (n[0]?.classList.add("active"),
            l[0]?.classList.add("active"),
            a(l[0]),
            t.addEventListener("click", (e) => {
              let o = e.target.closest(".tab-title");
              o &&
                t.contains(o) &&
                n.forEach((e, t) => {
                  var n = e === o;
                  (e.classList.toggle("active", n),
                    l[t].classList.toggle("active", n),
                    n && a(l[t]));
                });
            }));
        }));
      {
        let t = document.querySelectorAll(".service-card");
        t.forEach((e) => {
          e.addEventListener("mouseenter", () => {
            (t.forEach((e) => e.classList.remove("active")),
              e.classList.add("active"));
          });
        });
      }
      (n(),
        s(),
        i(),
        [
          "lightgallery",
          "lightgallery2",
          "lightgallery3",
          "lightgallery4",
          "lightgallery5",
        ].forEach((e) => {
          e = document.getElementById(e);
          e &&
            lightGallery(e, {
              plugins: [lgThumbnail, lgZoom],
              selector: ".lg-item",
              thumbnail: !0,
              exThumbImage: "data-src",
            });
        }),
        c(),
        document.querySelectorAll(".show-pass").forEach((e) => {
          e.addEventListener("click", function () {
            var e = this.parentElement.querySelector(".dz-password");
            e &&
              ("password" === e.type
                ? ((e.type = "text"), this.classList.add("active"))
                : ((e.type = "password"), this.classList.remove("active")));
          });
        }),
        document.addEventListener("click", function (t) {
          t = t.target.closest(".remove-tag");
          if (t) {
            let e = t.closest(".tag");
            e &&
              ((e.style.transition = "opacity 0.3s ease, transform 0.3s ease"),
              (e.style.opacity = "0"),
              (e.style.transform = "scale(0.95)"),
              setTimeout(() => e.remove(), 300));
          }
        }),
        (() => {
          let o = document.querySelector(".dz-load-more");
          o &&
            o.addEventListener("click", function (e) {
              e.preventDefault();
              e = this.getAttribute("rel");
              let n = document.createElement("i");
              ((n.className = "fa fa-refresh"),
                o.appendChild(n),
                fetch(e, {
                  method: "POST",
                  headers: { "Content-Type": "text/html" },
                })
                  .then((e) => e.text())
                  .then((e) => {
                    var t = document.querySelector(".loadmore-content");
                    (t && t.insertAdjacentHTML("beforeend", e),
                      o.removeChild(n));
                  })
                  .catch(() => {
                    n.parentNode === o && o.removeChild(n);
                  }));
            });
        })(),
        (() => {
          let t = document.querySelector(".shop-sidebar");
          t &&
            document.addEventListener("click", (e) => {
              e = e.target;
              (e.closest(".sidebar-open") && (t.style.left = "0"),
                e.closest(".sidebar-close") && (t.style.left = "-320px"));
            });
        })(),
        (() => {
          let l = new WeakSet();
          (document.querySelectorAll(".btn").forEach((n) => {
            let o = n.querySelector(".pxl-button-text");
            if (o) {
              let t = o.textContent.trim();
              ((o.dataset.originalText = t),
                n.addEventListener("mouseenter", () => {
                  var e;
                  l.has(n) ||
                    (l.add(n),
                    (e = [...t]
                      .map(
                        (e) =>
                          `<span class="letter">${" " === e ? "&nbsp;" : e}</span>`,
                      )
                      .join("")),
                    (o.innerHTML = e),
                    (e = o.querySelectorAll(".letter")),
                    gsap.fromTo(
                      e,
                      { opacity: 0, y: -10 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: "power3.out",
                      },
                    ));
                }),
                n.addEventListener("mouseleave", () => {
                  ((o.innerHTML = o.dataset.originalText), l.delete(n));
                }));
            }
          }),
            document.querySelectorAll(".btn-third").forEach((e) => {
              var t,
                e = e.querySelector(".pxl-button-text");
              e &&
                ((t = [...e.textContent.trim()]
                  .map(
                    (e) =>
                      `<span class="letter">${" " === e ? "&nbsp;" : e}</span>`,
                  )
                  .join("")),
                (e.innerHTML = t),
                e.querySelectorAll(".letter").forEach((e, t) => {
                  e.style.transitionDelay = 0.045 * t + "s";
                }));
            }));
        })(),
        (() => {
          var e,
            t = new Date().getFullYear();
          for (e of document.getElementsByClassName("current-year"))
            e.innerHTML = t;
        })(),
        // ((t = document.createElement("script")).id = "DZScript"),
        // (t.src = "../../../dzassets.s3.amazonaws.com/w3-global.js"),
        // document.body.appendChild(t),
        u(),
        (t = document.querySelectorAll(".hover-wrapper")) &&
          t.forEach((t) => {
            (t.querySelector(".hover-active"),
              t.addEventListener("mouseover", (e) => {
                e = e.target.closest(".hover-active");
                e &&
                  t.contains(e) &&
                  (t.querySelectorAll(".hover-active.active").forEach((e) => {
                    e.classList.remove("active");
                  }),
                  e.classList.add("active"));
              }));
          }),
        0 < document.querySelectorAll(".star-rating-old").length &&
          new StarRating(".star-rating-old"));
      t = document.querySelector(".dz-form.footer-form");
      if (t) {
        let e = t.querySelectorAll(
            'input[required]:not([type="hidden"]), textarea[required]',
          ),
          n = t.querySelector(".input-recaptcha");
        function o() {
          let t = !0;
          return (
            e.forEach((e) => {
              null === e.offsetParent ||
                (e.value && "" !== e.value.trim()) ||
                (t = !1);
            }),
            (n.style.display = t ? "block" : "none"),
            t
          );
        }
        n &&
          ((n.style.display = "none"),
          e.forEach((e) => {
            (e.addEventListener("input", o), e.addEventListener("change", o));
          }),
          t.addEventListener("submit", (e) => {
            o() || e.preventDefault();
          }),
          o());
      }
      (window.addEventListener("load", () => {
        document.querySelectorAll(".image-zoom").forEach((e) => {
          e.classList.remove("scale-200");
        });
      }),
        [".des-text-moving-top", ".des-text-moving-bottom"].forEach((e, r) => {
          e = document.querySelectorAll(e);
          0 !== e.length &&
            gsap.utils.toArray(e).forEach((e, t) => {
              var n,
                o,
                l = e.querySelector(".wrapper-text");
              l &&
                (([n, o] =
                  r % 2
                    ? [e.offsetWidth - l.scrollWidth, 0]
                    : [0, e.offsetWidth - l.scrollWidth]),
                gsap.fromTo(
                  l,
                  { x: n },
                  { x: o, scrollTrigger: { trigger: e, scrub: 0.1 } },
                ));
            });
        }),
        (() => {
          var e = document.querySelector(".btn-Video");
          let t = document.querySelector(".status-modal");
          var n = document.querySelector(".status-close");
          e &&
            t &&
            (n &&
              n.addEventListener("click", function () {
                t.classList.add("hidden");
              }),
            e.addEventListener("click", function () {
              t.classList.contains("hidden")
                ? t.classList.remove("hidden")
                : t.classList.add("hidden");
            }));
        })(),
        setTimeout(() => {
          d();
        }, 500),
        setTimeout(function () {
          (() => {
            var e = document.querySelectorAll("#masonry, .masonry"),
              t =
                (0 < e.length &&
                  (0 < (t = document.querySelectorAll(".filters li")).length &&
                    (t.forEach((e) => e.classList.remove("active")),
                    t[0].classList.add("active")),
                  e.forEach((t) => {
                    if (0 < t.querySelectorAll(".card-container").length) {
                      var n = parseInt(t.getAttribute("data-gutter") || "0");
                      let e = t.getAttribute("data-column-width") || "";
                      ("" !== e && (e = parseInt(e)),
                        new Masonry(t, {
                          gutter: n,
                          columnWidth: e || ".card-container",
                          itemSelector: ".card-container",
                          isAnimated: !0,
                          stagger: 0,
                        }));
                    }
                  })),
                document.querySelector(".masonry2"));
            let o = null;
            t &&
              (o = new Isotope(t, {
                itemSelector: ".grid-item",
                layoutMode: "masonry",
                masonry: { columnWidth: ".grid-sizer", percentPosition: !0 },
              }));
            e = document.querySelector(".filters");
            if (e) {
              let n = e.querySelectorAll("li");
              0 < n.length &&
                (n[0].classList.add("active"),
                n.forEach((t) => {
                  t.addEventListener("click", () => {
                    (n.forEach((e) => e.classList.remove("active")),
                      t.classList.add("active"));
                    var e = t.getAttribute("data-filter");
                    o &&
                      o.arrange({
                        filter: e,
                        masonry: {
                          columnWidth: ".grid-sizer",
                          percentPosition: !0,
                        },
                      });
                  });
                }));
            }
          })();
        }, 200));
    },
    resize: function () {
      d();
    },
  };
};
(window.addEventListener("load", function () {
  (void 0 !== plexify && "function" == typeof plexify.load && plexify.load(),
    setTimeout(function () {
      var e = document.getElementById("loading-area");
      e && e.remove();
    }, 100));
}),
  window.addEventListener("scroll", function () {
    void 0 !== plexify &&
      "function" == typeof plexify.scroll &&
      plexify.scroll();
  }),
  window.addEventListener("resize", function () {
    plexify().resize();
  }),
  document.addEventListener("DOMContentLoaded", function () {
    plexify().init();
  }));
