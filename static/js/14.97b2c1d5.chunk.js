(this["webpackJsonpflixu-dao"]=this["webpackJsonpflixu-dao"]||[]).push([[14],{1335:function(r,n){},1520:function(r,n,t){"use strict";t.r(n),function(r){t.d(n,"getED25519Key",(function(){return i}));var a=t(103),e=t(1369),f=t.n(e).a.lowlevel;function i(n){var t;t="string"===typeof n?r.from(n,"hex"):n;var e=new Uint8Array(64),i=[f.gf(),f.gf(),f.gf(),f.gf()],o=new Uint8Array([].concat(Object(a.a)(new Uint8Array(t)),Object(a.a)(new Uint8Array(32)))),c=new Uint8Array(32);f.crypto_hash(e,o,32),e[0]&=248,e[31]&=127,e[31]|=64,f.scalarbase(i,e),f.pack(c,i);for(var s=0;s<32;s+=1)o[s+32]=c[s];return{sk:r.from(o),pk:r.from(c)}}}.call(this,t(19).Buffer)}}]);
//# sourceMappingURL=14.97b2c1d5.chunk.js.map