import { ref as u, computed as D, onMounted as k, openBlock as c, createElementBlock as d, createElementVNode as p, unref as v, toDisplayString as L, createCommentVNode as y } from "vue";
const b = (r, s) => {
  const a = r.__vccOpts || r;
  for (const [o, i] of s)
    a[o] = i;
  return a;
}, h = {
  key: 0,
  class: "select-label"
}, E = {
  key: 1,
  class: "image-wrapper"
}, I = ["src"], R = {
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
    }), (t, n) => (c(), d("div", null, [
      p("div", {
        ref_key: "fileDropzoneRef",
        ref: i,
        class: "file-dropzone"
      }, [
        v(l) ? y("", !0) : (c(), d("div", h, L(a.label), 1)),
        v(l) ? (c(), d("div", E, [
          p("img", {
            src: v(l),
            class: "image-preview"
          }, null, 8, I)
        ])) : y("", !0)
      ], 512),
      p("input", {
        ref_key: "fileInputRef",
        ref: o,
        type: "file",
        class: "file-input",
        onChange: n[0] || (n[0] = (...e) => t.fileChanged && t.fileChanged(...e))
      }, null, 544)
    ]));
  }
}, V = /* @__PURE__ */ b(R, [["__scopeId", "data-v-fb518815"]]);
function m(r) {
  m.installed || (m.installed = !0, r.component("VueImageDropForm", V));
}
const w = {
  install: m
};
let g = null;
typeof window < "u" && (g = window.Vue);
g && g.use(w);
export {
  V as default,
  m as install
};
