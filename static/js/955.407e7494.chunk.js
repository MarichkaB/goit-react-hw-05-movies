"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[955],{81:function(e,t,n){n.d(t,{b:function(){return h}});var r=n(861),c=n(757),a=n.n(c),u=n(44),o="https://api.themoviedb.org/3",s="4e5147b94dd9ab5d00dab97571ce77c5",i=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(o,"/search/movie?&language=en-U&include_adult=true&api_key=").concat(s,"&page=").concat(n,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h={getTrending:i,getSearchMovies:p,getMovieDetails:l,"getMovie\u0421redits":v,getMovieReviews:f}},955:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),c=n(791),a=n(689),u=n(81),o=n(174),s=n(184),i=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),i=n[0],p=n[1];if((0,c.useEffect)((function(){u.b.fetchFilmReviews(e).then((function(e){var t=e.data;t.results.length?p(t.results):o.Am.warn("No reviews")})).catch((function(e){return console.log(e.message)}))}),[e]),i.length)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Reviews"}),(0,s.jsx)("ul",{children:i.map((function(e){var t=e.author,n=e.id,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:t||"no name"}),(0,s.jsx)("p",{children:r})]},n)}))})]})}}}]);
//# sourceMappingURL=955.407e7494.chunk.js.map