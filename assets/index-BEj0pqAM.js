var Le=Object.defineProperty;var Oe=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>(Oe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function v(){}function je(e){return e()}function $e(){return Object.create(null)}function ne(e){e.forEach(je)}function Me(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function Pe(e,t){return e===t?!0:(se||(se=document.createElement("a")),se.href=t,e===se.href)}function qe(e){return Object.keys(e).length===0}function He(e,...t){if(e==null){for(const o of t)o(void 0);return v}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(e,t,n){e.$$.on_destroy.push(He(t,n))}function r(e,t){e.appendChild(t)}function de(e,t,n){e.insertBefore(t,n||null)}function oe(e){e.parentNode&&e.parentNode.removeChild(e)}function i(e){return document.createElement(e)}function ee(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function L(e){return document.createTextNode(e)}function d(){return L(" ")}function Ce(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e){return Array.from(e.childNodes)}let xe;function te(e){xe=e}const U=[],Te=[];let V=[];const Ee=[],Be=Promise.resolve();let _e=!1;function Ie(){_e||(_e=!0,Be.then(Se))}function ke(e){V.push(e)}const ge=new Set;let R=0;function Se(){if(R!==0)return;const e=xe;do{try{for(;R<U.length;){const t=U[R];R++,te(t),Je(t.$$)}}catch(t){throw U.length=0,R=0,t}for(te(null),U.length=0,R=0;Te.length;)Te.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];ge.has(n)||(ge.add(n),n())}V.length=0}while(U.length);for(;Ee.length;)Ee.pop()();_e=!1,ge.clear(),te(e)}function Je(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}function De(e){const t=[],n=[];V.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),V=t}const le=new Set;let Ke;function ie(e,t){e&&e.i&&(le.delete(e),e.i(t))}function pe(e,t,n,o){if(e&&e.o){if(le.has(e))return;le.add(e),Ke.c.push(()=>{le.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function be(e){e&&e.c()}function ae(e,t,n){const{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),ke(()=>{const c=e.$$.on_mount.map(je).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...c):ne(c),e.$$.on_mount=[]}),l.forEach(ke)}function ce(e,t){const n=e.$$;n.fragment!==null&&(De(n.after_update),ne(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(U.push(e),Ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,o,l,c,u=null,h=[-1]){const f=xe;te(e);const a=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:$e(),dirty:h,skip_bound:!1,root:t.target||f.$$.root};u&&u(a.root);let $=!1;if(a.ctx=n?n(e,t.props||{},(g,y,...k)=>{const p=k.length?k[0]:y;return a.ctx&&l(a.ctx[g],a.ctx[g]=p)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](p),$&&Fe(e,g)),y}):[],a.update(),$=!0,ne(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){const g=ze(t.target);a.fragment&&a.fragment.l(g),g.forEach(oe)}else a.fragment&&a.fragment.c();t.intro&&ie(e.$$.fragment),ae(e,t.target,t.anchor),Se()}te(f)}class he{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){ce(this,1),this.$destroy=v}$on(t,n){if(!Me(n))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Re);const Qe="webp",Ue=1e3,Ve=500,Ge="srgb",We=3,Xe="uchar",Ye=72,Ze="4:2:0",et=!0,tt=!1,nt=!1,rt="https://cdn.jsdelivr.net/gh/realskyquest/realskyquest.github.io@gh-pages/assets/banner-d1K1vh2s.webp",ye={format:Qe,width:Ue,height:Ve,space:Ge,channels:We,depth:Xe,density:Ye,chromaSubsampling:Ze,isProgressive:et,hasProfile:tt,hasAlpha:nt,src:rt},Q=[];function Ae(e,t=v){let n;const o=new Set;function l(h){if(re(e,h)&&(e=h,n)){const f=!Q.length;for(const a of o)a[1](),Q.push(a,e);if(f){for(let a=0;a<Q.length;a+=2)Q[a][0](Q[a+1]);Q.length=0}}}function c(h){l(h(e))}function u(h,f=v){const a=[h,f];return o.add(a),o.size===1&&(n=t(l,c)||v),h(e),()=>{o.delete(a),o.size===0&&n&&(n(),n=null)}}return{set:l,update:c,subscribe:u}}const ot=()=>{const e=Ae(null),t=matchMedia("(prefers-color-scheme: dark)");function n(){matchMedia("(prefers-color-scheme: dark)").matches?e.set("dark"):e.set("light")}n(),t.addEventListener("change",n);function o(){t.removeEventListener("change",n)}return{subscribe:e.subscribe,Init:n,Disable:o}},we=ot(),st=()=>{const e=Ae(null);function t(){const o=localStorage.getItem("data-theme");o?(we.Disable(),document.documentElement.setAttribute("data-theme",o),e.set(o)):we.subscribe(l=>{l&&(document.documentElement.setAttribute("data-theme",l),e.set(l))})}t();function n(o){we.Disable(),localStorage.setItem("data-theme",o),document.documentElement.setAttribute("data-theme",o),e.set(o)}return{subscribe:e.subscribe,Init:t,ChangeTheme:n}},ve=st();function lt(e){let t,n,o,l,c,u,h,f,a,$,g,y,k,p,C,m,j,O,T,N,M,G,z,B,S,W,I,x,E,X,b,A,P,Y,_,Z,w,J,D,K,q,F;return{c(){t=i("nav"),n=i("div"),o=i("div"),l=i("div"),c=i("div"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>',u=d(),h=i("ul"),f=i("li"),a=i("a"),$=L("Home"),g=d(),y=i("li"),k=i("a"),p=L("Example"),C=d(),m=i("div"),m.textContent="realSkyQuest",j=d(),O=i("div"),T=i("ul"),N=i("li"),M=i("a"),G=L("Home"),z=d(),B=i("li"),S=i("a"),W=L("Example"),I=d(),x=i("div"),E=i("label"),X=d(),b=ee("svg"),A=ee("circle"),P=ee("path"),Y=d(),_=i("input"),Z=d(),w=ee("svg"),J=ee("path"),D=d(),K=i("div"),s(c,"title","mobileMenu"),s(c,"tabindex","0"),s(c,"role","button"),s(c,"class","btn btn-ghost lg:hidden"),s(a,"href",e[1]),s(k,"href",e[1]),s(h,"tabindex","0"),s(h,"class","menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"),s(l,"class","dropdown"),s(m,"class","btn btn-ghost text-xl"),s(o,"class","navbar-start"),s(M,"href",e[1]),s(S,"href",e[1]),s(T,"class","menu menu-horizontal px-1"),s(O,"class","navbar-center hidden lg:flex"),s(E,"class","flex cursor-pointer gap-2"),s(E,"for","themeToggle"),s(E,"title","Light mode and Dark mode"),s(A,"cx","12"),s(A,"cy","12"),s(A,"r","5"),s(P,"d","M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"),s(b,"xmlns","http://www.w3.org/2000/svg"),s(b,"width","20"),s(b,"height","20"),s(b,"viewBox","0 0 24 24"),s(b,"fill","none"),s(b,"stroke","currentColor"),s(b,"stroke-width","2"),s(b,"stroke-linecap","round"),s(b,"stroke-linejoin","round"),s(_,"type","checkbox"),s(_,"class","toggle theme-controller ml-1 mr-1"),s(_,"name","light mode or dark mode toggle"),s(_,"id","themeToggle"),s(J,"d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"),s(w,"xmlns","http://www.w3.org/2000/svg"),s(w,"width","20"),s(w,"height","20"),s(w,"viewBox","0 0 24 24"),s(w,"fill","none"),s(w,"stroke","currentColor"),s(w,"stroke-width","2"),s(w,"stroke-linecap","round"),s(w,"stroke-linejoin","round"),s(x,"class","navbar-end"),s(n,"class","navbar"),s(K,"class","divider mt-0 mb-0 h-0"),s(t,"class","z-50 top-0 fixed w-full bg-base-100 shadow-sm")},m(H,fe){de(H,t,fe),r(t,n),r(n,o),r(o,l),r(l,c),r(l,u),r(l,h),r(h,f),r(f,a),r(a,$),r(h,g),r(h,y),r(y,k),r(k,p),r(o,C),r(o,m),r(n,j),r(n,O),r(O,T),r(T,N),r(N,M),r(M,G),r(T,z),r(T,B),r(B,S),r(S,W),r(n,I),r(n,x),r(x,E),r(x,X),r(x,b),r(b,A),r(b,P),r(x,Y),r(x,_),_.checked=e[0],r(x,Z),r(x,w),r(w,J),r(t,D),r(t,K),q||(F=[Ce(_,"change",e[4]),Ce(_,"click",e[5])],q=!0)},p(H,[fe]){fe&1&&(_.checked=H[0])},i:v,o:v,d(H){H&&oe(t),q=!1,ne(F)}}}function it(e,t,n){let o;Ne(e,ve,a=>n(3,o=a));const l="https://cdn.jsdelivr.net/gh/realskyquest/realskyquest.github.io@gh-pages/";let c=!1;o==="dark"&&(c=!0);function u(){o==="light"?ve.ChangeTheme("dark"):o==="dark"&&ve.ChangeTheme("light")}function h(){c=this.checked,n(0,c)}const f=()=>u();return e.$$.update=()=>{e.$$.dirty&8&&console.log(o)},[c,l,u,o,h,f]}class at extends he{constructor(t){super(),ue(this,t,it,lt,re,{})}}function ct(e){let t;return{c(){t=i("footer"),t.innerHTML="<aside><p>Copyright © 2023 - realSkyQuest</p></aside>",s(t,"class","footer footer-center p-4 bg-base-300 text-base-content")},m(n,o){de(n,t,o)},p:v,i:v,o:v,d(n){n&&oe(t)}}}class dt extends he{constructor(t){super(),ue(this,t,null,ct,re,{})}}function ut(e){let t,n,o,l,c,u,h,f,a,$,g=" ",y,k,p,C,m,j,O,T,N,M,G,z,B,S,W,I,x,E,X,b,A,P,Y,_,Z,w,J,D,K,q;return{c(){t=i("article"),n=i("div"),o=i("h1"),o.textContent="The Joke Tax Chronicles",l=d(),c=i("p"),c.textContent=`Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
			his throne. One day, his advisors came to him with a problem: the kingdom was running out of
			money.`,u=d(),h=i("h2"),h.textContent="The King's Plan",f=d(),a=i("p"),$=L("The king thought long and hard, and finally came up with"),y=L(g),k=d(),p=i("a"),p.textContent="a brilliant plan",C=L(`
			: he would tax the jokes in the kingdom.`),m=d(),j=i("blockquote"),j.textContent=`"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for
			the privilege."`,O=d(),T=i("h3"),T.textContent="The Joke Tax",N=d(),M=i("p"),M.textContent="The king's subjects were not amused. They grumbled and complained, but the king was firm:",G=d(),z=i("ul"),z.innerHTML="<li>1st level of puns: 5 gold coins</li> <li>2nd level of jokes: 10 gold coins</li> <li>3rd level of one-liners : 20 gold coins</li>",B=d(),S=i("p"),S.textContent=`As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was
			one person who refused to let the king's foolishness get him down: a court jester named
			Jokester.`,W=d(),I=i("h3"),I.textContent="Jokester's Revolt",x=d(),E=i("p"),E.textContent=`Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
			the place: under the king's pillow, in his soup, even in the royal toilet. The king was
			furious, but he couldn't seem to stop Jokester.`,X=d(),b=i("p"),b.textContent=`And then, one day, the people of the kingdom discovered that the jokes left by Jokester were
			so funny that they couldn't help but laugh. And once they started laughing, they couldn't
			stop.`,A=d(),P=i("h3"),P.textContent="The People's Rebellion",Y=d(),_=i("p"),_.textContent=`The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns
			again, and soon the entire kingdom was in on the joke.`,Z=d(),w=i("div"),w.innerHTML="<table><thead><tr><th>King&#39;s Treasury</th> <th>People&#39;s happiness</th></tr></thead> <tbody><tr><td>Empty</td> <td>Overflowing</td></tr> <tr><td>Modest</td> <td>Satisfied</td></tr> <tr><td>Full</td> <td>Ecstatic</td></tr></tbody></table>",J=d(),D=i("p"),D.textContent=`The king, seeing how much happier his subjects were, realized the error of his ways and
			repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.`,K=d(),q=i("p"),q.textContent=`The moral of the story is: never underestimate the power of a good laugh and always be careful
			of bad ideas.`,s(p,"href","#"),s(t,"class","prose mx-auto")},m(F,H){de(F,t,H),r(t,n),r(n,o),r(n,l),r(n,c),r(n,u),r(n,h),r(n,f),r(n,a),r(a,$),r(a,y),r(a,k),r(a,p),r(a,C),r(n,m),r(n,j),r(n,O),r(n,T),r(n,N),r(n,M),r(n,G),r(n,z),r(n,B),r(n,S),r(n,W),r(n,I),r(n,x),r(n,E),r(n,X),r(n,b),r(n,A),r(n,P),r(n,Y),r(n,_),r(n,Z),r(n,w),r(n,J),r(n,D),r(n,K),r(n,q)},p:v,i:v,o:v,d(F){F&&oe(t)}}}class ht extends he{constructor(t){super(),ue(this,t,null,ut,re,{})}}function ft(e){let t,n,o,l,c,u,h,f,a,$,g,y,k,p,C;return n=new at({}),y=new ht({}),p=new dt({}),{c(){t=i("main"),be(n.$$.fragment),o=d(),l=i("section"),c=i("article"),u=i("img"),f=d(),a=i("h1"),a.textContent=`${mt}`,$=d(),g=i("section"),be(y.$$.fragment),k=d(),be(p.$$.fragment),s(u,"alt","Banner"),Pe(u.src,h=ye.src)||s(u,"src",h),s(u,"loading","eager"),s(u,"width",ye.width),s(u,"height",ye.height),s(u,"class","shadow-2xl rounded-lg"),s(a,"class","text-center"),s(c,"class","prose mx-auto"),s(l,"class","mt-40 mb-20"),s(g,"class","m-5")},m(m,j){de(m,t,j),ae(n,t,null),r(t,o),r(t,l),r(l,c),r(c,u),r(c,f),r(c,a),r(t,$),r(t,g),ae(y,g,null),r(t,k),ae(p,t,null),C=!0},p:v,i(m){C||(ie(n.$$.fragment,m),ie(y.$$.fragment,m),ie(p.$$.fragment,m),C=!0)},o(m){pe(n.$$.fragment,m),pe(y.$$.fragment,m),pe(p.$$.fragment,m),C=!1},d(m){m&&oe(t),ce(n),ce(y),ce(p)}}}let mt="Lorem ipsum";class gt extends he{constructor(t){super(),ue(this,t,null,ft,re,{})}}new gt({target:document.getElementById("app")});
