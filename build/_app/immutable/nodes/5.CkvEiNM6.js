import{a as r,t as v,c as Q}from"../chunks/BFeRD4JR.js";import"../chunks/DSnltW90.js";import{p as R,j as S,b as T,H as U,l as t,k as o,g as s,o as a,v as k,i as V}from"../chunks/8mD8WfQ1.js";import{s as y}from"../chunks/ClMTSzDB.js";import{i as B}from"../chunks/CtgZfLBJ.js";import{a as W,e as C,i as M}from"../chunks/BI1hk3--.js";import{s as c}from"../chunks/Dd4R6xjR.js";import{o as X}from"../chunks/gQ1T-W6o.js";var Y=v('<p class="text-center">Chargement des projets...</p>'),Z=v('<li class="px-3 py-1 text-sm rounded-full bg-white text-black"> </li>'),$=v('<img class="w-16 h-16 object-cover rounded-md mx-1">'),aa=v('<div class="shadow-lg rounded-lg overflow-hidden"><div class="relative"><img class="w-full h-48 object-cover"></div> <div class="p-4"><h2 class="text-xl font-semibold"> </h2> <p class="mt-2"> </p> <div class="mt-4"><h3 class="text-sm font-semibold">Compétences utilisées :</h3> <ul class="flex flex-wrap gap-2 mt-2"></ul></div> <div class="mt-4 flex justify-center"></div></div></div>'),sa=v('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>'),ta=v('<main><div class="max-w-6xl mx-auto p-6"><h1 class="text-3xl font-bold text-center mb-8">Mes Projets</h1> <!></div></main>');function ca(D,E){R(E,!1);let n=U([]);X(async()=>{const e=await fetch("/projects.json");T(n,await e.json())}),W();var p=ta(),H=t(p),F=o(t(H),2);{var G=e=>{var m=Y();r(e,m)},I=e=>{var m=sa();C(m,5,()=>s(n),M,(J,i)=>{var f=aa(),g=t(f),P=t(g);a(g);var q=o(g,2),_=t(q),K=t(_,!0);a(_);var x=o(_,2),L=t(x,!0);a(x);var h=o(x,2),z=o(t(h),2);C(z,5,()=>s(i).skills,M,(u,b)=>{var l=Z(),d=t(l,!0);a(l),k(()=>y(d,s(b))),r(u,l)}),a(z),a(h);var A=o(h,2);C(A,5,()=>s(i).images,M,(u,b,l)=>{var d=Q(),N=V(d);{var O=w=>{var j=$();k(()=>{c(j,"src",s(b)),c(j,"alt",`${s(i).title??""} image ${l??""}`)}),r(w,j)};B(N,w=>{l!==0&&w(O)})}r(u,d)}),a(A),a(q),a(f),k(()=>{c(P,"src",s(i).images[0]),c(P,"alt",s(i).title),y(K,s(i).title),y(L,s(i).description)}),r(J,f)}),a(m),r(e,m)};B(F,e=>{s(n).length===0?e(G):e(I,!1)})}a(H),a(p),r(D,p),S()}export{ca as component};
