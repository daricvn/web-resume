(function(t){function e(e){for(var n,c,r=e[0],o=e[1],s=e[2],u=0,b=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(b.length)b.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(l.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},l=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var d=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0308":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"03e6":function(t,e,a){"use strict";var n=a("fb2e"),i=a.n(n);i.a},"0c84":function(t,e,a){},2126:function(t,e,a){},3170:function(t,e,a){},"334a":function(t,e,a){"use strict";var n=a("0308"),i=a.n(n);i.a},"3b12":function(t,e,a){},5651:function(t,e,a){"use strict";var n=a("0c84"),i=a.n(n);i.a},"64a9":function(t,e,a){},"975a":function(t,e,a){"use strict";var n=a("9e05"),i=a.n(n);i.a},"9a49":function(t,e,a){"use strict";var n=a("f6dd"),i=a.n(n);i.a},"9c3f":function(t,e,a){"use strict";var n=a("e0d7"),i=a.n(n);i.a},"9e05":function(t,e,a){},b318:function(t,e,a){"use strict";var n=a("3170"),i=a.n(n);i.a},c867:function(t,e,a){},c8bd:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,i=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("ThemeApp",[a("InfoBoard"),a("Content",{attrs:{maxWidth:720,padLeft:20,showContent:t.showContent}})],1)],1)},c=[],r=(a("7f7f"),a("d225")),o=a("b0b4"),s=a("308d"),d=a("6bb5"),u=a("4e2b"),b=a("9ab4"),p=a("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"info-board"},[t.candidate.avatar?a("div",{staticClass:"avatar center"}):t._e(),t.candidate.avatar?t._e():a("div",{staticClass:"row q-pt-sm"}),a("div",{staticClass:"block text-center white--text"},[a("h6",[t._v(t._s(t.candidate.name))])]),t.candidate.socialNetworks?a("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 white--text text-right q-pr-sm text-weight-bold q-pt-sm"},[t._v(t._s(t.string["address"]))]),a("div",{staticClass:"col-7 q-pl-sm small-border q-pt-sm"},t._l(t.candidate.addressLines,(function(e,n){return a("div",{key:n,staticClass:"white--text"},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 white--text text-right q-pr-sm text-weight-bold q-pt-md"},[t._v(t._s(t.string["phone"]))]),a("div",{staticClass:"col-7 q-pl-sm small-border white--text q-pt-md"},[t._v("\n                "+t._s(t.candidate.phone)+"\n            ")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 white--text text-right q-pr-sm text-weight-bold q-pt-md"},[t._v(t._s(t.string["email"]))]),a("div",{staticClass:"col-7 q-pl-sm small-border white--text q-pt-md"},[a("flex-link",{attrs:{link:t.candidate.email}})],1)]),t.candidate.socialNetworks?a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 white--text  q-pr-sm text-right text-weight-bold  q-pt-md"},[t._v(t._s(t.string["socialNetworks"]))]),a("div",{staticClass:"col-7 q-pl-sm small-border q-pt-md"},t._l(t.candidate.socialNetworks,(function(t,e){return a("div",{key:e,staticClass:"row"},[a("flex-link",{attrs:{link:t}})],1)})),0)]):t._e(),t.candidate.otherLinks?a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 white--text  q-pr-sm text-right text-weight-bold  q-pt-md"},[t._v(t._s(t.string["otherLinks"]))]),a("div",{staticClass:"col-7 q-pl-sm small-border q-pt-md"},t._l(t.candidate.otherLinks,(function(t,e){return a("div",{key:e,staticClass:"row"},[a("flex-link",{attrs:{link:t}})],1)})),0)]):t._e()]):t._e(),a("div",{staticClass:"row q-pt-md",staticStyle:{"margin-top":"15px"}},t._l(t.info,(function(e,n){return a("div",{key:n,staticClass:"row q-mt-sm"},[e.data?a("div",{staticClass:"col-4 text-right line-height white--text text-weight-bold"},[a("delayed-text",{attrs:{delay:400}},[a("span",{staticClass:"white--text"},[t._v(t._s(e.data||""))])])],1):t._e(),a("div",{staticClass:"col q-pr-sm q-pl-sm"},t._l(e.child,(function(t,e){return a("flex-content",{key:e,attrs:{content:t,initialDelay:500+50*e,index:e}})})),1)])})),0)])},y=[],f=a("013f"),m=a("bd86"),j={name:"Hieu Nguyen",addressLines:["Tan Binh","Ho Chi Minh","Vietnam"],phone:"+8485 885 6960",email:{icon:null,alias:"daricvn@gmail.com",ref:"mailto:daricvn@gmail.com"},socialNetworks:[{icon:"fab fa-facebook",alias:"Facebook",ref:"https://fb.com/daricvn"},{icon:"fab fa-linkedin",alias:"LinkedIn",ref:"https://www.linkedin.com/in/daricvn"}],otherLinks:[{icon:"fab fa-github",alias:"GitHub",ref:"https://github.com/daricvn"}]},O=function t(){Object(r["a"])(this,t),this.type=n.Text,this.data="",this.desc="",this.length=0};(function(t){t[t["Text"]=0]="Text",t[t["IconText"]=1]="IconText",t[t["Bar"]=2]="Bar",t[t["Column"]=3]="Column",t[t["ImageText"]=4]="ImageText",t[t["Timeline"]=5]="Timeline",t[t["TimelineItem"]=6]="TimelineItem",t[t["Chip"]=7]="Chip",t[t["ChipList"]=8]="ChipList",t[t["Title"]=9]="Title",t[t["Line"]=10]="Line",t[t["Padding"]=11]="Padding"})(n||(n={}));var g,v,x,w,C,_,T,k,q,D,L,z,N,S,A,E,P,I,M,$,B,W,F,Q,G,R,U,H,V,J,K,X,Y,Z,tt,et,at,nt,it,lt,ct,rt,ot,st,dt,ut,bt,pt,ht,yt,ft,mt,jt,Ot,gt,vt,xt,wt,Ct,_t,Tt,kt,qt,Dt,Lt,zt,Nt,St,At,Et,Pt,It,Mt,$t,Bt,Wt,Ft,Qt,Gt,Rt,Ut,Ht,Vt,Jt=[{type:n.Text,color:"text-white",data:"Skills:",child:[{type:n.ChipList,data:"",child:[{type:n.Chip,data:"Communication",length:"12px",icon:"star",style:"glossy",desc:"primary",color:"white"},{type:n.Chip,data:"Teamwork",length:"12px",style:"glossy",desc:"primary",color:"white"},{type:n.Chip,data:"Problem Solving",length:"12px",style:"glossy",desc:"primary",color:"white"}]}],skipChild:!0},{type:n.Text,color:"text-white",data:"Knowledge:",child:[{type:n.ChipList,data:"",child:[{type:n.Chip,data:"C#",length:"12px",desc:"primary",color:"white"},{type:n.Chip,data:".NET Core",length:"12px",desc:"primary",color:"white"},{type:n.Chip,data:"Vue",length:"12px",desc:"primary",color:"white"},{type:n.Chip,data:"Angular",length:"12px",desc:"primary",color:"white"},{type:n.Chip,data:"MongoDB",length:"12px",desc:"primary",color:"white"}]}],skipChild:!0},{type:n.Text,color:"text-white",data:"Interests:"},{type:n.Text,color:"text-white",data:"",child:[{type:n.ChipList,data:"",length:10,child:[{type:n.Chip,data:"Game",length:"12px",icon:"fas fa-gamepad",style:"outline",color:"white"},{type:n.Chip,data:"Design",length:"12px",icon:"fas fa-dice-d20",style:"outline",color:"white"},{type:n.Chip,data:"Foods",length:"12px",icon:"fas fa-cookie-bite",style:"outline",color:"white"},{type:n.Chip,data:"Language",length:"12px",icon:"public",style:"outline",color:"white"}]}],skipChild:!0}],Kt={socialNetworks:"Social Networks",name:"Name",firstName:"First Name",lastName:"Last Name",achievement:"Achievement",history:"History",address:"Address",phone:"Phone",otherLinks:"Other Links",email:"Email"},Xt=Kt,Yt=Xt,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t.content.type==t.contentType.Column?a("div",[t.content.child&&t.content.child.length>0?a("div",{staticClass:"flex-box"},t._l(t.content.child,(function(e,n){return a("column",{key:n,attrs:{minWidth:200}},[a("flex-content",{attrs:{content:e,initialDelay:t.initialDelay+50*n,index:n,styles:{paddingRight:"10px"}}})],1)})),1):t._e()]):t.content.type==t.contentType.Timeline?a("div",[a("timeline",{attrs:{content:t.content,delay:t.initialDelay+120*t.index}})],1):t.content.type==t.contentType.Text?a("div",[a("delayed-text",{attrs:{delay:t.initialDelay+120*t.index,padLeft:t.content.length,padTop:4}},[t._v(t._s(t.content.data))])],1):t.content.type==t.contentType.IconText?a("div",[a("icon-text",{attrs:{delay:t.initialDelay+120*t.index,size:"18px",icon:t.content.icon,color:t.content.color}},[t._v(t._s(t.content.data))])],1):t.content.type==t.contentType.Bar?a("div",[a("delayed-bar",{attrs:{color:t.content.color,"bg-color":t.content.bgColor,title:t.content.data,width:t.content.length,delay:t.initialDelay+120*t.index}})],1):t.content.type==t.contentType.Title?a("div",[a("delayed-text",{attrs:{delay:t.initialDelay+120*t.index}},[a("h6",{staticClass:"q-mb-none",class:t.content.color},[t._v("\n      "+t._s(t.content.data)+"\n      "),t.content.length?a("span",{staticClass:"text-overline"},[t._v("- "+t._s(t.content.length))]):t._e()])])],1):t.content.type==t.contentType.Line?a("div",[a("delayed-text",{attrs:{delay:t.initialDelay+120*t.index}},[a("q-separator",{style:{width:"85%",marginBottom:t.content.length+"px"}})],1)],1):t.content.type==t.contentType.ChipList&&t.content.child?a("div",[a("delayed-text",{attrs:{delay:t.initialDelay+60*t.index,padLeft:t.content.length}},t._l(t.content.child,(function(e,n){return a("q-chip",{key:n,class:e.style,style:{transitionDelay:t.initialDelay+100*n},attrs:{icon:e.icon?e.icon:void 0,color:e.color?e.color:void 0,outline:"outline"==e.style,size:e.length?e.length:void 0,"text-color":e.desc?e.desc:void 0}},[t._v(t._s(e.data))])})),1)],1):t.content.type==t.contentType.Chip?a("div",[a("delayed-text",{attrs:{delay:t.initialDelay+60*t.index}},[a("q-chip",{class:t.content.style,attrs:{icon:t.content.icon?t.content.icon:void 0,color:t.content.color?t.content.color:void 0,outline:"outline"==t.content.style,size:t.content.length?t.content.length:void 0,"text-color":t.content.desc?t.content.desc:void 0}},[t._v(t._s(t.content.data))])],1)],1):t.content.type==t.contentType.Padding?a("div",[a("div",{style:{padding:t.content.length+"px"}})]):t._e(),t.content.type!=t.contentType.ChipList&&!t.content.skipChild&&t.content.child&&t.content.child.length>0?a("div",t._l(t.content.child,(function(e,n){return a("flex-content",{key:n,attrs:{content:e,initialDelay:t.initialDelay+100+100*n,index:n}})})),1):t._e()])},te=[],ee=a("5e15"),ae=a("d360"),ne=(a("77a7"),a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-fade",appear:""}},[a("div",{staticClass:"block theme-text",staticStyle:{display:"inline-block"},style:{"transition-delay":t.realDelay+"ms","padding-left":t.padLeft+"px","padding-top":t.padTop+"px"}},[t._t("default")],2)])}),ie=[],le=(g=Object(p["b"])({default:0,type:Number}),v=Object(p["b"])({default:0,type:Number}),x=Object(p["b"])({default:0,type:Number}),Object(p["a"])((q=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"delay",_,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"padLeft",T,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"padTop",k,Object(f["a"])(a)),Object(m["a"])(Object(f["a"])(a),"realDelay",0),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;this.delay>0&&(this.realDelay=this.delay,setTimeout((function(){t.realDelay=0}),this.delay+500))}}]),e}(p["c"]),C=q,_=Object(ae["a"])(C.prototype,"delay",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=Object(ae["a"])(C.prototype,"padLeft",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=Object(ae["a"])(C.prototype,"padTop",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=C))||w),ce=le,re=(a("5651"),a("2877")),oe=Object(re["a"])(ce,ne,ie,!1,null,"0c62d76c",null),se=oe.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","margin-top":"5px","margin-bottom":"10px"}},[a("transition",{attrs:{name:"slide-fade",appear:""}},[a("div",{staticClass:"bar-title",style:{"transition-delay":t.delay+"ms"}},[t._v(t._s(t.title))])]),a("transition",{attrs:{name:"length-right",appear:""},on:{"after-enter":function(e){t.inlineBar=!0}}},[a("div",{staticClass:"bar",class:t.backColor,staticStyle:{"transition-duration":"0.4s"},style:{"transition-delay":100+t.delay+"ms"}},[a("div",{staticClass:"bar-block",style:{width:t.barWidth}},[a("transition",{attrs:{name:"length-right"}},[t.inlineBar?a("div",{staticClass:"active-bar",class:t.barColor}):t._e()])],1)])])],1)},ue=[],be=(D=Object(p["b"])({default:0,type:Number}),L=Object(p["b"])({default:0,type:Number|String}),z=Object(p["b"])({default:null,type:void 0|String|null}),N=Object(p["b"])({default:null,type:null|String}),S=Object(p["b"])({default:null,type:null|String}),Object(p["a"])((W=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"delay",P,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"width",I,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"title",M,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"color",$,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"bgColor",B,Object(f["a"])(a)),Object(m["a"])(Object(f["a"])(a),"inlineBar",!1),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"barWidth",get:function(){return this.width&&isNaN(this.width)?(console.log(this.width),this.width):this.width+"%"}},{key:"barColor",get:function(){return this.color?["default",this.color]:["default"]}},{key:"backColor",get:function(){return this.bgColor?["bar",this.bgColor]:["bar","default"]}}]),e}(p["c"]),E=W,P=Object(ae["a"])(E.prototype,"delay",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=Object(ae["a"])(E.prototype,"width",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=Object(ae["a"])(E.prototype,"title",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=Object(ae["a"])(E.prototype,"color",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=Object(ae["a"])(E.prototype,"bgColor",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=E))||A),pe=be,he=(a("975a"),Object(re["a"])(pe,de,ue,!1,null,"6958cde0",null)),ye=he.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column",style:{minWidth:t.minWidth+"px"}},[t._t("default")],2)},me=[],je=(F=Object(p["b"])({default:0,type:void 0|Number}),Object(p["a"])((U=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"minWidth",R,Object(f["a"])(a)),a}return Object(u["a"])(e,t),e}(p["c"]),G=U,R=Object(ae["a"])(G.prototype,"minWidth",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=G))||Q),Oe=je,ge=(a("d84e"),Object(re["a"])(Oe,fe,me,!1,null,"37cbf51c",null)),ve=ge.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"flip",appear:""}},[t.content?a("q-timeline",{style:{"transition-delay":t.delay+"ms"},attrs:{color:"primary","transition-show":"flip-down"}},[t._l(t.content.child,(function(e,n){return a("q-timeline-entry",{key:n,attrs:{title:e.data,subtitle:e.length,icon:e.icon?e.icon:void 0,color:e.color?e.color:void 0}},[a("div",[t._v("\n            "+t._s(e.desc)+"\n            ")])])})),a("q-timeline-entry",{attrs:{heading:""}})],2):t._e()],1)},we=[],Ce=(H=Object(p["b"])({default:void 0,type:void 0|O}),V=Object(p["b"])({default:0,type:Number}),Object(p["a"])((Z=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"content",X,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"delay",Y,Object(f["a"])(a)),a}return Object(u["a"])(e,t),e}(p["c"]),K=Z,X=Object(ae["a"])(K.prototype,"content",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=Object(ae["a"])(K.prototype,"delay",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=K))||J),_e=Ce,Te=(a("ecae"),Object(re["a"])(_e,xe,we,!1,null,null,null)),ke=Te.exports,qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-fade",appear:""}},[a("div",{staticClass:"flex items-center",style:{transitionDelay:t.delay+"ms"}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:t.icon,color:t.color,size:t.size}}),a("div",{class:t.textColor},[t._t("default")],2)],1)])},De=[],Le=(tt=Object(p["b"])({default:void 0,type:void 0|String|null}),et=Object(p["b"])({default:void 0,type:void 0|String|null}),at=Object(p["b"])({default:void 0,type:void 0|Number|null}),nt=Object(p["b"])({default:0,type:void 0|Number|null}),Object(p["a"])((dt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"icon",ct,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"color",rt,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"size",ot,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"delay",st,Object(f["a"])(a)),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"textColor",get:function(){return this.color?"text-".concat(this.color):""}}]),e}(p["c"]),lt=dt,ct=Object(ae["a"])(lt.prototype,"icon",[tt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),rt=Object(ae["a"])(lt.prototype,"color",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ot=Object(ae["a"])(lt.prototype,"size",[at],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),st=Object(ae["a"])(lt.prototype,"delay",[nt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=lt))||it),ze=Le,Ne=(a("03e6"),Object(re["a"])(ze,qe,De,!1,null,"7b1e184d",null)),Se=Ne.exports,Ae=(ut=Object(p["a"])({components:{DelayedText:se,DelayedBar:ye,Column:ve,Timeline:ke,IconText:Se}}),bt=Object(p["b"])({default:null,type:void 0|O|null}),pt=Object(p["b"])({default:0,type:Number}),ht=Object(p["b"])({default:0,type:Number}),yt=Object(p["b"])({default:void 0}),ut((xt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(l))),Object(ee["a"])(Object(f["a"])(a),"content",jt,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"index",Ot,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"initialDelay",gt,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"styles",vt,Object(f["a"])(a)),Object(m["a"])(Object(f["a"])(a),"contentType",n),a}return Object(u["a"])(e,t),e}(p["c"]),mt=xt,jt=Object(ae["a"])(mt.prototype,"content",[bt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ot=Object(ae["a"])(mt.prototype,"index",[pt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gt=Object(ae["a"])(mt.prototype,"initialDelay",[ht],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vt=Object(ae["a"])(mt.prototype,"styles",[yt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=mt))||ft),Ee=Ae,Pe=(a("9a49"),Object(re["a"])(Ee,Zt,te,!1,null,"0a060c02",null)),Ie=Pe.exports,Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"white--text",attrs:{href:t.link.ref,target:"_blank"}},[t.link.icon?a("q-icon",{staticClass:"white--text q-mr-sm",attrs:{name:t.link.icon,size:"18pt"}}):t._e(),a("span",{staticClass:"line-height"},[t._v(t._s(t.link.alias?t.link.alias:t.link.ref))])],1)},$e=[],Be=function t(){Object(r["a"])(this,t)},We=(wt=Object(p["b"])({default:void 0,type:void 0|Be}),Object(p["a"])((kt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"link",Tt,Object(f["a"])(a)),a}return Object(u["a"])(e,t),e}(p["c"]),_t=kt,Tt=Object(ae["a"])(_t.prototype,"link",[wt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ct=_t))||Ct),Fe=We,Qe=(a("334a"),Object(re["a"])(Fe,Me,$e,!1,null,"01050271",null)),Ge=Qe.exports,Re=(qt=Object(p["a"])({components:{FlexContent:Ie,FlexLink:Ge,DelayedText:se}}),qt((Lt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(m["a"])(Object(f["a"])(a),"candidate",j),Object(m["a"])(Object(f["a"])(a),"string",Yt),Object(m["a"])(Object(f["a"])(a),"info",Jt),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;setTimeout((function(){t.$refs.board.className+=" show"}),0)}}]),e}(p["c"]),Dt=Lt))||Dt),Ue=Re,He=(a("da21"),Object(re["a"])(Ue,h,y,!1,null,"22214ffe",null)),Ve=He.exports,Je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._t("default")],2)},Ke=[],Xe=Object(p["a"])(zt=function(t){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(p["c"]))||zt,Ye=Xe,Ze=(a("9c3f"),Object(re["a"])(Ye,Je,Ke,!1,null,null,null)),ta=Ze.exports,ea=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"print-content"},[a("table",[t._m(0),a("tbody",[a("tr",[a("td",[a("div",{style:{"max-width":t.maxWidth+"px","padding-left":t.padLeft+"px"}},[t.showContent?a("div",{staticClass:"inline-content"},t._l(t.historyData,(function(e){return a("div",{key:e.id},[a("title-bar",{attrs:{words:e.title,initialDelay:1500*(e.id-1)}}),a("div",{staticClass:"child-content"},t._l(e.contents,(function(t,n){return a("div",{key:n},[a("flex-content",{attrs:{content:t,initialDelay:800+1500*(e.id-1),index:n}})],1)})),0)],1)})),0):t._e()])])])]),t._m(1)])])},aa=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",{staticClass:"q-pa-sm"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tfoot",[a("tr",[a("td",{staticClass:"q-pa-sm"})])])}],na=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"block",width:"92%","max-width":"780px","margin-top":"10px"}},[a("div",{staticClass:"title-text"},[t._t("default"),a("transition-group",{attrs:{name:"slide-fade",appear:""}},t._l(t.words,(function(e,n){return a("span",{key:n,style:{transitionDelay:t.initialDelay+t.defaultDelay+50*(n+1)+"ms"}},[t._v(t._s(e))])})),0)],2),a("transition",{attrs:{name:"length-right",appear:""}},[a("div",{staticClass:"h-line",style:{transitionDelay:t.initialDelay+"ms"}})])],1)},ia=[],la=(Nt=Object(p["b"])(String),St=Object(p["b"])({default:0,type:Number}),Object(p["a"])((Mt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(i))),Object(ee["a"])(Object(f["a"])(a),"words",Pt,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"initialDelay",It,Object(f["a"])(a)),Object(m["a"])(Object(f["a"])(a),"defaultDelay",200),Object(m["a"])(Object(f["a"])(a),"visible",!1),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){this.visible=!0}}]),e}(p["c"]),Et=Mt,Pt=Object(ae["a"])(Et.prototype,"words",[Nt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),It=Object(ae["a"])(Et.prototype,"initialDelay",[St],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),At=Et))||At),ca=la,ra=(a("f0e9"),Object(re["a"])(ca,na,ia,!1,null,"6e9a395c",null)),oa=ra.exports,sa=[{id:1,title:"About Me",contents:[{type:n.Text,icon:null,color:null,data:"Fullstack developer in C#. Love designing something and enjoy writing application and web application. The most priority while developing software is performance and customer' sastisfaction. Enjoy communicating in English. Able to carry front-end, back-end and database.",desc:"",length:0,child:null,style:null}]},{id:2,title:"Experience",contents:[{type:n.Timeline,icon:null,color:null,data:"",desc:"",length:0,child:[{type:n.TimelineItem,icon:null,color:null,data:"Start Working at TMA",desc:"Begin working in TMA Solution as an Engineer.",length:"5-2018",child:null,style:null},{type:n.TimelineItem,icon:null,color:null,data:"Star Performer",desc:"Receives Star Performer title in TMA Solution.",length:"1-2019",child:null,style:null},{type:n.TimelineItem,icon:"star",color:"warning",data:"Graduate Can Tho University",desc:"Graduate Can Tho University after 4 years of studying. [2014-2018]. GPA: A",length:"4-2019",child:null,style:null}],style:null}]},{id:3,title:"Project",contents:[{type:n.Title,data:"Digital Media Streaming Project",desc:"",length:"2017-2018",child:null,style:null},{type:n.Line,data:"",length:4},{type:n.Text,data:"An ASP.NET Core website made with Angular for my thesis.",length:15},{type:n.Text,data:"- Main developer of the project, maintain and improve the app's performance.",length:15},{type:n.Text,data:"- Ports Materialize CSS to Angular 4 and fix bugs.",length:15},{type:n.Text,data:"- Uses MobX to improve Angular app's overall performance.",length:15},{type:n.Text,data:"- Extremely fast load by using Media Source and partially streaming (like YouTube).",length:15},{type:n.Title,data:"Autoquit",desc:"",length:"2019",child:null,style:null},{type:n.Line,data:"",length:4},{type:n.Text,data:"A small C# project for Windows Application. This application allow to record user's behaviors and then play it as an auto or a macro. Mostly used for improving gaming experience. Visit the project: https://daricvn.github.io/autoquit/",desc:"",length:15,child:null,style:null},{type:n.Text,data:"- Web's interface are made with React.",length:15},{type:n.Title,data:"Clinical Trial Upgrade Project",desc:"",length:"09/2018-10/2019",child:null,style:null},{type:n.Line,data:"",length:4},{type:n.Text,data:"The quite old but huge enterprise ASP.NET web application in clinical trial field. Team size: 20+",length:15},{type:n.Text,data:"- Works as a main developer of the team to upgrade and improve the product. ",length:15},{type:n.Text,data:"- Communicates and present to customers and foreign developers about new features and bug fixes.",length:15},{type:n.Text,data:"- Improves application's performance and optimize data-query code and scripts (from 30 seconds to 3 seconds load time)",length:15},{type:n.Text,data:"- Maintains Oracle Database.",length:15},{type:n.Title,data:"Credit Card OCR",desc:"",length:"2019",child:null,style:null},{type:n.Line,data:"",length:4},{type:n.Text,data:"A .NET Core project to retrieve credit card's information with Tesseract and Template Matching.",length:15},{type:n.Text,data:"- Combine and upgrade algorithm to increase the accuracy.",length:15},{type:n.Text,data:"- Compatible with many font styles.",length:15},{type:n.Text,data:"- Applies Chromely and VueJS to design User Interface.",length:15},{type:n.Padding,data:"",length:15}]}],da=($t=Object(p["a"])({components:{TitleBar:oa,FlexContent:Ie}}),Bt=Object(p["b"])({default:!1,type:Boolean}),Wt=Object(p["b"])({default:800,type:void 0|Number}),Ft=Object(p["b"])({default:10,type:void 0|Number}),$t((Vt=function(t){function e(){var t,a;Object(r["a"])(this,e);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=Object(s["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(l))),Object(m["a"])(Object(f["a"])(a),"historyData",sa),Object(m["a"])(Object(f["a"])(a),"contentType",n),Object(ee["a"])(Object(f["a"])(a),"showContent",Rt,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"maxWidth",Ut,Object(f["a"])(a)),Object(ee["a"])(Object(f["a"])(a),"padLeft",Ht,Object(f["a"])(a)),a}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){}}]),e}(p["c"]),Gt=Vt,Rt=Object(ae["a"])(Gt.prototype,"showContent",[Bt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ut=Object(ae["a"])(Gt.prototype,"maxWidth",[Wt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ht=Object(ae["a"])(Gt.prototype,"padLeft",[Ft],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qt=Gt))||Qt),ua=da,ba=(a("b318"),Object(re["a"])(ua,ea,aa,!1,null,null,null)),pa=ba.exports,ha=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.showContent=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;setTimeout((function(){t.showContent=!0}),1e3),document.title="".concat(j.name,"'s Resume")}}]),e}(p["c"]);ha=Object(b["a"])([Object(p["a"])({components:{ThemeApp:ta,InfoBoard:Ve,Content:pa}})],ha);var ya=ha,fa=ya,ma=(a("034f"),Object(re["a"])(fa,l,c,!1,null,null,null)),ja=ma.exports,Oa=(a("c867"),a("5c7d"),a("7d6e"),a("e54f"),a("573e"),a("b05d")),ga=a("4d5a"),va=a("05eb"),xa=a("74af"),wa=a("0016"),Ca=a("eb85"),_a=a("b047"),Ta=a("9748");i["a"].use(Oa["a"],{config:{},components:{QSeparator:Ca["a"],QChip:_a["a"],QLayout:ga["a"],QTimeline:va["a"],QIcon:wa["a"],QTimelineEntry:xa["a"]},directives:{Intersection:Ta["a"]},plugins:{}}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ja)}}).$mount("#app")},d84e:function(t,e,a){"use strict";var n=a("3b12"),i=a.n(n);i.a},da21:function(t,e,a){"use strict";var n=a("c8bd"),i=a.n(n);i.a},e0d7:function(t,e,a){},ecae:function(t,e,a){"use strict";var n=a("f0f2"),i=a.n(n);i.a},f0e9:function(t,e,a){"use strict";var n=a("2126"),i=a.n(n);i.a},f0f2:function(t,e,a){},f6dd:function(t,e,a){},fb2e:function(t,e,a){}});
//# sourceMappingURL=app.597ac150.js.map