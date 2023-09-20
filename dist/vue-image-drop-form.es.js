import { ref as u, computed as D, onMounted as k, openBlock as c, createElementBlock as d, Fragment as L, createElementVNode as p, unref as v, toDisplayString as b, createCommentVNode as y } from "vue";
const h = (r, s) => {
  const a = r.__vccOpts || r;
  for (const [o, i] of s)
    a[o] = i;
  return a;
}, E = {
  key: 0,
  class: "select-label"
}, I = {
  key: 1,
  class: "image-wrapper"
}, R = ["src"], V = {
  __name: "VueImageDropForm",
  props: {
    label: { type: String, default: "Select file" }
  },
  emits: ["change"],
  setup(r, { emit: s }) {
    const a = r, o = u(null), i = u(null), f = u(null), _ = (t) => {
      s("change", Array.from(t)[0]), l.value !== "" && URL.revokeObjectURL(l), f.value = Array.from(t)[0];
    }, l = D(() => f.value ? URL.createObjectURL(f.value) : "");
    return k(() => {
      let t = i.value, n = o.value;
      t && (t.addEventListener("dragenter", (e) => {
        e.preventDefault();
      }), t.addEventListener("dragleave", (e) => {
        e.preventDefault();
      }), t.addEventListener("dragover", (e) => {
        e.preventDefault();
      }), t.addEventListener("drop", (e) => {
        e.preventDefault(), e.dataTransfer && _(e.dataTransfer.files);
      }), t.addEventListener("click", (e) => {
        e.preventDefault(), n && n.click();
      }), n && n.addEventListener("change", (e) => {
        e.target.files && _(e.target.files);
      }));
    }), (t, n) => (c(), d(L, null, [
      p("div", {
        ref_key: "fileDropzoneRef",
        ref: i,
        class: "file-dropzone"
      }, [
        v(l) ? y("", !0) : (c(), d("div", E, b(a.label), 1)),
        v(l) ? (c(), d("div", I, [
          p("img", {
            src: v(l),
            class: "image-preview"
          }, null, 8, R)
        ])) : y("", !0)
      ], 512),
      p("input", {
        ref_key: "fileInputRef",
        ref: o,
        onChange: n[0] || (n[0] = (...e) => t.fileChanged && t.fileChanged(...e)),
        type: "file",
        class: "file-input"
      }, null, 544)
    ], 64));
  }
}, F = /* @__PURE__ */ h(V, [["__scopeId", "data-v-25ab0715"]]);
function m(r) {
  m.installed || (m.installed = !0, r.component("VueImageDropForm", F));
}
const w = {
  install: m
};
let g = null;
typeof window < "u" && (g = window.Vue);
g && g.use(w);
export {
  F as default,
  m as install
};
