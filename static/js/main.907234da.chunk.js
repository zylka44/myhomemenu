(this.webpackJsonpmyhomemenu=this.webpackJsonpmyhomemenu||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/banner.e375bf9d.png"},function(e,a,t){e.exports=t.p+"static/media/kopytka.7da0bf06.jpg"},function(e,a,t){e.exports=t.p+"static/media/spaghetti.d8e3d598.jpg"},function(e,a,t){e.exports=t.p+"static/media/pizza.ea98aef8.jpg"},function(e,a,t){e.exports=t.p+"static/media/sushi.5783d63d.jpg"},function(e,a,t){e.exports=t.p+"static/media/shakshuka.8eb8395b.jpg"},function(e,a,t){e.exports=t.p+"static/media/khachapuri.270d9a7a.jpg"},function(e,a,t){e.exports=t.p+"static/media/tomatosoup.fc2dc9d9.jpg"},function(e,a,t){e.exports=t.p+"static/media/porridge.549429a5.jpg"},function(e,a,t){e.exports=t.p+"static/media/broth.ec9967ab.jpg"},function(e,a,t){e.exports=t.p+"static/media/fruitsoup.30e4c912.jpg"},function(e,a,t){e.exports=t.p+"static/media/ratatouille.e0573021.jpg"},,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),o=t.n(r),s=(t(24),t(3)),c=t(4),l=t(18),m=t(17),d=[{id:1,name:"kopytka",meal:"dinner",ingredients:["flour","potatos","eggs"]},{id:2,name:"spaghetti",meal:"dinner",ingredients:["pasta","onion","garlic","carrot","celery","minced meat","tomato passata","dried basil"]},{id:3,name:"pizza",meal:"supper",ingredients:["flour","yeast","olive oil","tomato sauce","mozzarella","basil"]},{id:4,name:"sushi",meal:"supper",ingredients:["rice","rice vinegar","nori","cucumber","smoked salmon","coriander"]},{id:5,name:"shakshuka",meal:"breakfast",ingredients:["onion","garlic","peppers","tomatos","cumin","eggs","coriander","chive"]},{id:6,name:"khachapuri",meal:"dinner or supper",ingredients:["flour","yeast","potatos","cheese","butter","eggs"]},{id:7,name:"tomato soup",meal:"dinner",ingredients:["broth","totamto sauce","pasta"]},{id:8,name:"porridge",meal:"breakfast",ingredients:["oat flakes","milk","jam"]},{id:9,name:"broth",meal:"dinner",ingredients:["meat","carrot","parsley","onion","celery","leek","allspice","bay leaf"]},{id:10,name:"fruit soup",meal:"breakfast or supper",ingredients:["flour","milk","eggs","cherry compote"]},{id:11,name:"ratatouille",meal:"dinner or supper",ingredients:["onion","garlic","pepper","tomato","zucchini","eggplant"]}],u=t(5),p=t.n(u),h=function(){return i.a.createElement("img",{alt:"kopytka",src:p.a,height:"300vh",style:{margin:"0 auto"}})},g=function(e){var a=e.name,t=e.meal,n=e.graphics;return i.a.createElement("div",{className:"tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5"},i.a.createElement("img",{alt:"kopytka",src:n,height:"150vh"}),i.a.createElement("h2",null,a),i.a.createElement("p",null,t))},f=t(6),v=t.n(f),b=t(7),k=t.n(b),y=t(8),E=t.n(y),S=t(9),w=t.n(S),j=t(10),x=t.n(j),C=t(11),F=t.n(C),z=t(12),N=t.n(z),I=t(13),L=t.n(I),O=t(14),B=t.n(O),D=t(15),M=t.n(D),J=t(16),W=t.n(J),Y=function(e){var a=e.dinners,t=[v.a,k.a,E.a,w.a,x.a,F.a,N.a,L.a,B.a,M.a,W.a],n=a.map((function(e,n){return i.a.createElement(g,{key:n,id:a[n].id,name:a[n].name,meal:a[n].meal,graphics:t[a[n].id-1]})}));return i.a.createElement("div",{style:{padding:"0 5vh"}},n)},A=function(e){return i.a.createElement("div",{style:{overflowY:"scroll",height:"100vh"}},e.children)},G=function(){return i.a.createElement("h3",{style:{fontFamily:"Baloo Bhaina 2"}},"\u017baneta Czapiewska 2020")},H=function(e){var a=e.searchChange,t=e.content;return i.a.createElement("div",null,i.a.createElement("input",{className:"tc pa2 ma4 b--light-gray bg-light-gray",type:"search",placeholder:t,onChange:a}))},R=(t(25),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onSearchDish=function(a){e.setState({dishSearchField:a.target.value})},e.onSearchMeal=function(a){e.setState({mealSearchField:a.target.value})},e.onSearchIngredients=function(a){e.setState({ingredientsSearchField:a.target.value})},e.state={dishes:d,dishSearchField:"",mealSearchField:"",ingredientsSearchField:""},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state.dishSearchField.toLowerCase(),a=this.state.mealSearchField.toLowerCase(),t=this.state.ingredientsSearchField.split(" ").map((function(e){return e.toLowerCase()})),n=this.state.dishes.filter((function(a){return a.name.toLowerCase().includes(e)})).filter((function(e){return e.meal.toLowerCase().includes(a)})).filter((function(e){return t.every((function(a){return e.ingredients.some((function(e){return e.includes(a)}))}))}));return i.a.createElement("div",{className:"tc"},i.a.createElement(h,null),i.a.createElement("div",{className:"flex justify-center"},i.a.createElement(H,{searchChange:this.onSearchDish,content:"search a dish"}),i.a.createElement(H,{searchChange:this.onSearchIngredients,content:"INGREDIENTS YOU HAVE"}),i.a.createElement(H,{searchChange:this.onSearchMeal,content:"search a meal"})),i.a.createElement(A,null,i.a.createElement(Y,{dinners:n})),i.a.createElement(G,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(26);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.907234da.chunk.js.map