import{w as ie,S as Y,i as U,s as X,e as d,a as y,t as V,b as J,c as t,d as D,f as i,l as le,n as W,g as O,r as ye,h as oe,j as Z,k as ne,m as q,o as ve,p as _e,q as z,u as ce,v as ue,x as j,y as we,z as E,A as B,B as $,C as ee,D as ke,T as xe,F as Se,E as Me,G as Ie,H as de,P as Te,M as Ce}from"./vendor-Vp4RR_uE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const Ae=()=>{const l=ie(null);function e(){l.set("https://realskyquest.github.io/")}return e(),{subscribe:l.subscribe,Init:e}},Le=Ae(),qe=()=>{const l=ie(null),e=matchMedia("(prefers-color-scheme: dark)");function s(){matchMedia("(prefers-color-scheme: dark)").matches?l.set("dark"):l.set("light")}s(),e.addEventListener("change",s);function a(){e.removeEventListener("change",s)}return{subscribe:l.subscribe,Init:s,Disable:a}},se=qe(),ze=()=>{const l=ie(null);function e(){const a=localStorage.getItem("data-theme");a?(se.Disable(),document.documentElement.setAttribute("data-theme",a),l.set(a)):se.subscribe(n=>{n&&(document.documentElement.setAttribute("data-theme",n),l.set(n))})}e();function s(a){se.Disable(),localStorage.setItem("data-theme",a),document.documentElement.setAttribute("data-theme",a),l.set(a)}return{subscribe:l.subscribe,Init:e,ChangeTheme:s}},re=ze();function He(l){let e,s,a,n,r,c,b,o,v,m,_,p,h,C,A,T,g,H,L,w,f,k,u,M,F,P,I,Q,S,G,x,K,te,ae;return{c(){e=d("nav"),s=d("div"),a=d("div"),n=d("div"),r=d("div"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>',c=y(),b=d("ul"),o=d("li"),v=d("a"),m=V("Home"),_=y(),p=d("div"),p.textContent="realSkyQuest",h=y(),C=d("div"),A=d("ul"),T=d("li"),g=d("a"),H=V("Home"),L=y(),w=d("div"),f=d("label"),k=y(),u=J("svg"),M=J("circle"),F=J("path"),P=y(),I=d("input"),Q=y(),S=J("svg"),G=J("path"),x=y(),K=d("div"),t(r,"title","mobileMenu"),t(r,"tabindex","0"),t(r,"role","button"),t(r,"class","btn btn-ghost lg:hidden"),t(v,"href",l[1]),t(b,"tabindex","0"),t(b,"class","menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"),t(n,"class","dropdown"),t(p,"class","btn btn-ghost text-xl"),t(a,"class","navbar-start"),t(g,"href",l[1]),t(A,"class","menu menu-horizontal px-1"),t(C,"class","navbar-center hidden lg:flex"),t(f,"class","flex cursor-pointer gap-2"),t(f,"for","themeToggle"),t(f,"title","Light mode and Dark mode"),t(M,"cx","12"),t(M,"cy","12"),t(M,"r","5"),t(F,"d","M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"),t(u,"xmlns","http://www.w3.org/2000/svg"),t(u,"width","20"),t(u,"height","20"),t(u,"viewBox","0 0 24 24"),t(u,"fill","none"),t(u,"stroke","currentColor"),t(u,"stroke-width","2"),t(u,"stroke-linecap","round"),t(u,"stroke-linejoin","round"),t(I,"type","checkbox"),t(I,"class","toggle theme-controller ml-1 mr-1"),t(I,"name","light mode or dark mode toggle"),t(I,"id","themeToggle"),t(G,"d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"),t(S,"xmlns","http://www.w3.org/2000/svg"),t(S,"width","20"),t(S,"height","20"),t(S,"viewBox","0 0 24 24"),t(S,"fill","none"),t(S,"stroke","currentColor"),t(S,"stroke-width","2"),t(S,"stroke-linecap","round"),t(S,"stroke-linejoin","round"),t(w,"class","navbar-end"),t(s,"class","navbar"),t(K,"class","divider mt-0 mb-0 h-0"),t(e,"class","z-50 top-0 fixed w-full bg-base-100 shadow-sm")},m(N,R){D(N,e,R),i(e,s),i(s,a),i(a,n),i(n,r),i(n,c),i(n,b),i(b,o),i(o,v),i(v,m),i(a,_),i(a,p),i(s,h),i(s,C),i(C,A),i(A,T),i(T,g),i(g,H),i(s,L),i(s,w),i(w,f),i(w,k),i(w,u),i(u,M),i(u,F),i(w,P),i(w,I),I.checked=l[0],i(w,Q),i(w,S),i(S,G),i(e,x),i(e,K),te||(ae=[le(I,"change",l[4]),le(I,"click",l[5])],te=!0)},p(N,[R]){R&2&&t(v,"href",N[1]),R&2&&t(g,"href",N[1]),R&1&&(I.checked=N[0])},i:W,o:W,d(N){N&&O(e),te=!1,ye(ae)}}}function Pe(l,e,s){let a,n;oe(l,re,v=>s(3,a=v)),oe(l,Le,v=>s(1,n=v));let r=!1;function c(){a==="light"?re.ChangeTheme("dark"):a==="dark"&&re.ChangeTheme("light")}function b(){r=this.checked,s(0,r),s(3,a)}const o=()=>c();return l.$$.update=()=>{l.$$.dirty&8&&(a==="dark"?s(0,r=!0):a==="light"&&s(0,r=!1))},[r,n,c,a,b,o]}class je extends Y{constructor(e){super(),U(this,e,Pe,He,X,{})}}function Ee(l){let e;return{c(){e=d("footer"),e.innerHTML="<aside><p>Copyright © 2023 - realSkyQuest</p></aside>",t(e,"class","footer footer-center p-4 bg-base-300 text-base-content")},m(s,a){D(s,e,a)},p:W,i:W,o:W,d(s){s&&O(e)}}}class Be extends Y{constructor(e){super(),U(this,e,null,Ee,X,{})}}const fe=[{title:"Technologies",list:[["HTML","Learned it around 4 or 5 years ago, and it was one of the first languages I was introduced to."],["Javascript","Learned it around 2 years ago, I am around intermediate on this language."],["Python","Learned it around 2 years ago, I am at around beginner in this language. Didn't have much purpose for using it, I used it for playing around sometimes or testing stuff out."],["Lua",`Learned it around 4 years ago, I am at around intermediate in this language. Mostly
                used it for Roblox to mess around and in love2d framework.`],["Git","Started using it in 2023, I am using it to manage my projects."]]},{title:"Tools and frameworks",list:[["Svelte/Sveltekit","Started using recently, I am using this library/framework to develop web applications."],["Appwrite","Started using it recently, I am using this to build the BaaS(backend as a service) for my web applications."],["Github","Started using it 2 years ago, I am not that experienced using advanced features of the service."],["Vscode","Started using it 2 years ago, I am not that experienced using advanced features of the IDE."]]}];function me(l,e,s){const a=l.slice();return a[2]=e[s],a}function he(l,e,s){const a=l.slice();return a[5]=e[s],a}function ge(l){let e,s,a;var n=l[5];function r(c,b){return{props:{size:60,class:"mx-auto"}}}return n&&(e=ue(n,r())),{c(){e&&j(e.$$.fragment),s=we()},m(c,b){e&&E(e,c,b),D(c,s,b),a=!0},p(c,b){if(b&2&&n!==(n=c[5])){if(e){ve();const o=e;z(o.$$.fragment,1,0,()=>{B(o,1)}),_e()}n?(e=ue(n,r()),j(e.$$.fragment),q(e.$$.fragment,1),E(e,s.parentNode,s)):e=null}},i(c){a||(e&&q(e.$$.fragment,c),a=!0)},o(c){e&&z(e.$$.fragment,c),a=!1},d(c){c&&O(s),e&&B(e,c)}}}function pe(l){let e,s,a,n=l[2][0]+"",r,c,b,o=l[2][1]+"",v,m;return{c(){e=d("div"),s=d("div"),a=d("h3"),r=V(n),c=y(),b=d("p"),v=V(o),m=y(),t(a,"class","card-title"),t(s,"class","card-body"),t(e,"class","border-4 border-black border-opacity-20 mx-auto card w-full bg-base-100 shadow-xl")},m(_,p){D(_,e,p),i(e,s),i(s,a),i(a,r),i(s,c),i(s,b),i(b,v),i(e,m)},p(_,p){p&1&&n!==(n=_[2][0]+"")&&ne(r,n),p&1&&o!==(o=_[2][1]+"")&&ne(v,o)},d(_){_&&O(e)}}}function De(l){let e,s,a,n,r,c,b=l[0].title+"",o,v,m,_,p,h,C,A,T=Z(l[1]),g=[];for(let f=0;f<T.length;f+=1)g[f]=ge(he(l,T,f));const H=f=>z(g[f],1,1,()=>{g[f]=null});let L=Z(l[0].list),w=[];for(let f=0;f<L.length;f+=1)w[f]=pe(me(l,L,f));return{c(){e=d("section"),s=d("div"),a=d("div"),n=d("article"),r=d("article"),c=d("h2"),o=V(b),v=y(),m=d("div");for(let f=0;f<g.length;f+=1)g[f].c();_=y(),p=d("div"),h=y(),C=d("div");for(let f=0;f<w.length;f+=1)w[f].c();t(c,"class","text-center"),t(m,"class","flex mt-10 mb-5"),t(p,"class","divider"),t(r,"class","prose mb-2"),t(C,"class","flex flex-col gap-y-4"),t(n,"class","prose mx-auto"),t(a,"class","card-body"),t(s,"class","border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] bg-base-200 shadow-xl"),t(e,"class","m-5")},m(f,k){D(f,e,k),i(e,s),i(s,a),i(a,n),i(n,r),i(r,c),i(c,o),i(r,v),i(r,m);for(let u=0;u<g.length;u+=1)g[u]&&g[u].m(m,null);i(r,_),i(r,p),i(n,h),i(n,C);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(C,null);A=!0},p(f,[k]){if((!A||k&1)&&b!==(b=f[0].title+"")&&ne(o,b),k&2){T=Z(f[1]);let u;for(u=0;u<T.length;u+=1){const M=he(f,T,u);g[u]?(g[u].p(M,k),q(g[u],1)):(g[u]=ge(M),g[u].c(),q(g[u],1),g[u].m(m,null))}for(ve(),u=T.length;u<g.length;u+=1)H(u);_e()}if(k&1){L=Z(f[0].list);let u;for(u=0;u<L.length;u+=1){const M=me(f,L,u);w[u]?w[u].p(M,k):(w[u]=pe(M),w[u].c(),w[u].m(C,null))}for(;u<w.length;u+=1)w[u].d(1);w.length=L.length}},i(f){if(!A){for(let k=0;k<T.length;k+=1)q(g[k]);A=!0}},o(f){g=g.filter(Boolean);for(let k=0;k<g.length;k+=1)z(g[k]);A=!1},d(f){f&&O(e),ce(g,f),ce(w,f)}}}function Oe(l,e,s){let{cards:a}=e,{icons:n}=e;return l.$$set=r=>{"cards"in r&&s(0,a=r.cards),"icons"in r&&s(1,n=r.icons)},[a,n]}class be extends Y{constructor(e){super(),U(this,e,Oe,De,X,{cards:0,icons:1})}}function Ge(l){let e,s,a,n,r,c,b,o,v;return{c(){e=d("picture"),s=d("source"),n=y(),r=d("source"),b=y(),o=d("img"),$(s,a=l[4])||t(s,"srcset",a),t(s,"type","image/avif"),$(r,c=l[5])||t(r,"srcset",c),t(r,"type","image/webp"),t(o,"alt",l[0]),t(o,"loading",l[1]),t(o,"fetchpriority",l[2]),ee(o.src,v=l[3].src)||t(o,"src",v),t(o,"width",l[8]),t(o,"height",l[9]),t(o,"class",l[6])},m(m,_){D(m,e,_),i(e,s),i(e,n),i(e,r),i(e,b),i(e,o)},p(m,_){_&16&&a!==(a=m[4])&&t(s,"srcset",a),_&32&&c!==(c=m[5])&&t(r,"srcset",c),_&1&&t(o,"alt",m[0]),_&2&&t(o,"loading",m[1]),_&4&&t(o,"fetchpriority",m[2]),_&8&&!ee(o.src,v=m[3].src)&&t(o,"src",v),_&64&&t(o,"class",m[6])},d(m){m&&O(e)}}}function We(l){let e,s,a,n,r,c,b,o,v,m,_;return{c(){e=d("picture"),s=d("source"),n=y(),r=d("source"),b=y(),o=d("img"),$(s,a=l[4])||t(s,"srcset",a),t(s,"type","image/avif"),$(r,c=l[5])||t(r,"srcset",c),t(r,"type","image/webp"),t(o,"alt",l[0]),t(o,"loading",l[1]),t(o,"fetchpriority",l[2]),ee(o.src,v=l[3].src)||t(o,"src",v),t(o,"width",m=l[3].width),t(o,"height",_=l[3].height),t(o,"class",l[6])},m(p,h){D(p,e,h),i(e,s),i(e,n),i(e,r),i(e,b),i(e,o)},p(p,h){h&16&&a!==(a=p[4])&&t(s,"srcset",a),h&32&&c!==(c=p[5])&&t(r,"srcset",c),h&1&&t(o,"alt",p[0]),h&2&&t(o,"loading",p[1]),h&4&&t(o,"fetchpriority",p[2]),h&8&&!ee(o.src,v=p[3].src)&&t(o,"src",v),h&8&&m!==(m=p[3].width)&&t(o,"width",m),h&8&&_!==(_=p[3].height)&&t(o,"height",_),h&64&&t(o,"class",p[6])},d(p){p&&O(e)}}}function Ne(l){let e;function s(r,c){if(r[7]==="auto")return We;if(r[8]&&r[9])return Ge}let a=s(l),n=a&&a(l);return{c(){n&&n.c(),e=we()},m(r,c){n&&n.m(r,c),D(r,e,c)},p(r,[c]){a===(a=s(r))&&n?n.p(r,c):(n&&n.d(1),n=a&&a(r),n&&(n.c(),n.m(e.parentNode,e)))},i:W,o:W,d(r){r&&O(e),n&&n.d(r)}}}function Fe(l,e,s){let{alt:a}=e,{loading:n="eager"}=e,{fetchpriority:r="auto"}=e,{image:c}=e,{srcsetAvif:b}=e,{srcsetWebp:o}=e,{css:v}=e,{size:m}=e,_=m.split(";")[0],p=m.split(";")[1];return l.$$set=h=>{"alt"in h&&s(0,a=h.alt),"loading"in h&&s(1,n=h.loading),"fetchpriority"in h&&s(2,r=h.fetchpriority),"image"in h&&s(3,c=h.image),"srcsetAvif"in h&&s(4,b=h.srcsetAvif),"srcsetWebp"in h&&s(5,o=h.srcsetWebp),"css"in h&&s(6,v=h.css),"size"in h&&s(7,m=h.size)},[a,n,r,c,b,o,v,m,_,p]}class Qe extends Y{constructor(e){super(),U(this,e,Fe,Ne,X,{alt:0,loading:1,fetchpriority:2,image:3,srcsetAvif:4,srcsetWebp:5,css:6,size:7})}}const Ke="https://cdn.jsdelivr.net/npm/@skyquest/realskyquest-github-io@0.0.6/assets/banner-xdQ4Ok2O.avif 1000w",Re="https://cdn.jsdelivr.net/npm/@skyquest/realskyquest-github-io@0.0.6/assets/banner-d1K1vh2s.webp 1000w",Je="jpeg",Ve=1e3,Ye=500,Ue="srgb",Xe=3,Ze="uchar",$e=72,et="4:2:0",tt=!0,st=!1,rt=!1,nt="https://cdn.jsdelivr.net/npm/@skyquest/realskyquest-github-io@0.0.6/assets/banner-RHrGwWYo.jpeg",it={format:Je,width:Ve,height:Ye,space:Ue,channels:Xe,depth:Ze,density:$e,chromaSubsampling:et,isProgressive:tt,hasProfile:st,hasAlpha:rt,src:nt};function at(l){let e,s,a,n,r,c,b,o,v,m,_,p,h,C,A,T,g,H,L,w,f,k,u,M,F,P,I,Q,S,G;return s=new je({}),c=new Qe({props:{alt:"banner",loading:"eager",fetchpriority:"high",image:it,srcsetAvif:Ke,srcsetWebp:Re,css:"rounded-t-xl",size:"auto"}}),m=new be({props:{cards:fe[0],icons:[ke,xe,Se]}}),p=new be({props:{cards:fe[1],icons:[Me,Ie,de,Te]}}),M=new Ce({props:{size:"150"}}),I=new de({props:{size:"150"}}),S=new Be({}),{c(){e=d("main"),j(s.$$.fragment),a=y(),n=d("section"),r=d("div"),j(c.$$.fragment),b=y(),o=d("div"),o.innerHTML=`<article class="prose mx-auto"><h1 class="text-center">About me</h1> <p class="text-center">Hello! I&#39;m realSkyQuest, a young programmer with 4 years of experience. <br/> I specialize
						in programming and has some experience in user interface, currently expanding my skills and
						knowledge. Also welcome to my website</p></article>`,v=y(),j(m.$$.fragment),_=y(),j(p.$$.fragment),h=y(),C=d("section"),A=d("div"),T=d("div"),g=d("article"),H=d("h2"),H.textContent="Contact me",L=y(),w=d("div"),f=y(),k=d("div"),u=d("a"),j(M.$$.fragment),F=y(),P=d("a"),j(I.$$.fragment),Q=y(),j(S.$$.fragment),t(o,"class","card-body"),t(r,"class","border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] m-6 bg-base-100 shadow-xl"),t(n,"class","mt-40 mb-20"),t(H,"class","text-center"),t(w,"class","divider"),t(u,"href","mailto:connectskyquest@outlook.com"),t(u,"title","Email"),t(P,"href","https://github.com/realskyquest/"),t(P,"target","_blank"),t(P,"title","Github"),t(k,"class","sm:flex gap-x-10"),t(g,"class","prose mx-auto"),t(T,"class","card-body"),t(A,"class","border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] m-6 bg-base-100 shadow-xl"),t(C,"class","m-5")},m(x,K){D(x,e,K),E(s,e,null),i(e,a),i(e,n),i(n,r),E(c,r,null),i(r,b),i(r,o),i(e,v),E(m,e,null),i(e,_),E(p,e,null),i(e,h),i(e,C),i(C,A),i(A,T),i(T,g),i(g,H),i(g,L),i(g,w),i(g,f),i(g,k),i(k,u),E(M,u,null),i(k,F),i(k,P),E(I,P,null),i(e,Q),E(S,e,null),G=!0},p:W,i(x){G||(q(s.$$.fragment,x),q(c.$$.fragment,x),q(m.$$.fragment,x),q(p.$$.fragment,x),q(M.$$.fragment,x),q(I.$$.fragment,x),q(S.$$.fragment,x),G=!0)},o(x){z(s.$$.fragment,x),z(c.$$.fragment,x),z(m.$$.fragment,x),z(p.$$.fragment,x),z(M.$$.fragment,x),z(I.$$.fragment,x),z(S.$$.fragment,x),G=!1},d(x){x&&O(e),B(s),B(c),B(m),B(p),B(M),B(I),B(S)}}}class lt extends Y{constructor(e){super(),U(this,e,null,at,X,{})}}{const l=document.createElement("script");l.src="https://static.cloudflareinsights.com/beacon.min.js",l.defer=!0,l.dataset.cfBeacon='{"token": "c0ae7063fd9b4cd58c35d0016261c940"}',document.body.appendChild(l)}new lt({target:document.getElementById("app")});