import { ref as u, computed as k, onMounted as h, openBlock as d, createElementBlock as c, Fragment as D, createElementVNode as p, unref as m, toDisplayString as E, createCommentVNode as y } from "vue";
const I = (r, i) => {
  const l = r.__vccOpts || r;
  for (const [a, o] of i)
    l[a] = o;
  return l;
}, F = {
  key: 0,
  class: "select-label"
}, L = {
  key: 1,
  class: "image-wrapper"
}, b = ["src"], w = {
  __name: "ImageForm",
  props: {
    label: { type: String, default: "ファイルを選択" }
  },
  emits: ["change"],
  setup(r, { emit: i }) {
    const l = r, a = u(null), o = u(null), s = u(null), _ = (t) => {
      i("change", Array.from(t)[0]), s.value = Array.from(t)[0];
    }, f = k(() => s.value ? URL.createObjectURL(s.value) : "");
    return h(() => {
      let t = o.value, n = a.value;
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
    }), (t, n) => (d(), c(D, null, [
      p("div", {
        ref_key: "fileDropzoneRef",
        ref: o,
        class: "file-dropzone"
      }, [
        m(f) ? y("", !0) : (d(), c("div", F, E(l.label), 1)),
        m(f) ? (d(), c("div", L, [
          p("img", {
            src: m(f),
            class: "image-preview"
          }, null, 8, b)
        ])) : y("", !0)
      ], 512),
      p("input", {
        ref_key: "fileInputRef",
        ref: a,
        onChange: n[0] || (n[0] = (...e) => t.fileChanged && t.fileChanged(...e)),
        type: "file",
        class: "file-input"
      }, null, 544)
    ], 64));
  }
}, R = /* @__PURE__ */ I(w, [["__scopeId", "data-v-28e7bd6a"]]);
function v(r) {
  v.installed || (v.installed = !0, r.component("ImageForm", R));
}
const z = {
  install: v
};
let g = null;
typeof window < "u" && (g = window.Vue);
g && g.use(z);
export {
  R as default,
  v as install
};
