import{S as s,i as t,s as e,e as n,c as a,b as i,f as l,h as r,o as c,j as o,n as h}from"./client.21e65332.js";function m(s){let t;return{c(){t=n("p"),this.h()},l(s){t=a(s,"P",{class:!0}),i(t).forEach(l),this.h()},h(){r(t,"class","svelte-1o4r1gi"),c(t,"white",s[1]),c(t,"small",s[2])},m(e,n){o(e,t,n),t.innerHTML=s[0]},p(s,[e]){1&e&&(t.innerHTML=s[0]),2&e&&c(t,"white",s[1]),4&e&&c(t,"small",s[2])},i:h,o:h,d(s){s&&l(t)}}}function p(s,t,e){let{content:n=""}=t,{white:a=!1}=t,{small:i=!1}=t;return n=n.replace(/(?:\r\n|\r|\n)/g,"<br>"),s.$set=s=>{"content"in s&&e(0,n=s.content),"white"in s&&e(1,a=s.white),"small"in s&&e(2,i=s.small)},[n,a,i]}class u extends s{constructor(s){super(),t(this,s,p,m,e,{content:0,white:1,small:2})}}export{u as T};
