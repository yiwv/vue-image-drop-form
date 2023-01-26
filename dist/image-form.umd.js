(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.ImageForm={},r.Vue))})(this,function(r,e){"use strict";const v="",g=(o,c)=>{const i=o.__vccOpts||o;for(const[s,f]of c)i[s]=f;return i},y={key:0,class:"select-label"},k={key:1,class:"image-wrapper"},E=["src"],m=g({__name:"ImageForm",props:{label:{type:String,default:"ファイルを選択"}},emits:["change"],setup(o,{emit:c}){const i=o,s=e.ref(null),f=e.ref(null),p=e.ref(null),_=n=>{c("change",Array.from(n)[0]),p.value=Array.from(n)[0]},u=e.computed(()=>p.value?URL.createObjectURL(p.value):"");return e.onMounted(()=>{let n=f.value,l=s.value;n&&(n.addEventListener("dragenter",t=>{t.preventDefault()}),n.addEventListener("dragleave",t=>{t.preventDefault()}),n.addEventListener("dragover",t=>{t.preventDefault()}),n.addEventListener("drop",t=>{t.preventDefault(),t.dataTransfer&&_(t.dataTransfer.files)}),n.addEventListener("click",t=>{t.preventDefault(),l&&l.click()}),l&&l.addEventListener("change",t=>{t.target.files&&_(t.target.files)}))}),(n,l)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{ref_key:"fileDropzoneRef",ref:f,class:"file-dropzone"},[e.unref(u)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",y,e.toDisplayString(i.label),1)),e.unref(u)?(e.openBlock(),e.createElementBlock("div",k,[e.createElementVNode("img",{src:e.unref(u),class:"image-preview"},null,8,E)])):e.createCommentVNode("",!0)],512),e.createElementVNode("input",{ref_key:"fileInputRef",ref:s,onChange:l[0]||(l[0]=(...t)=>n.fileChanged&&n.fileChanged(...t)),type:"file",class:"file-input"},null,544)],64))}},[["__scopeId","data-v-28e7bd6a"]]);function a(o){a.installed||(a.installed=!0,o.component("ImageForm",m))}const h={install:a};let d=null;typeof window<"u"&&(d=window.Vue),d&&d.use(h),r.default=m,r.install=a,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});