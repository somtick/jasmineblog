import"./MDCSlot.b4w1AoaW.js";import m from"./ButtonLink.7nfdRWXI.js";import f from"./Terminal.gFzshW23.js";import y from"./VideoPlayer.jKmk9F7D.js";import{r as n}from"./slot.HPVDjBF1.js";import{d as _,b as o,c as a,e as s,f as r,F as h,W as c,w as k,t as d,C as i,a3 as v,k as $}from"./entry.w-PNCCNe.js";import"./index._rdfpcqH.js";const w={class:"block-hero"},B={class:"layout"},S={class:"content"},g={key:0,class:"announce"},q={class:"title"},C={class:"description"},H={key:1,class:"extra"},V={class:"actions"},b=["href"],A={class:"support"},N=_({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,T)=>{const l=m,u=f,p=y;return o(),a("section",w,[s("div",B,[s("div",S,[t.$slots.announce?(o(),a("p",g,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",q,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",C,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",H,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",V,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,b)):r("",!0)],64))])]),s("div",A,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),P=$(N,[["__scopeId","data-v-7ad1e07e"]]);export{P as default};
