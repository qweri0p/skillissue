(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();let s;function u(){return navigator.language==="nl"?s="nl":s="en",s}const d={en:"This is incredibly stupid!",nl:"Dit is ontzettend dom!"},a={en:"Continue",nl:"Verder"},f={en:"You're winner!",nl:"Jij is winnaar!"},l={about:d,accept:a,ad:f};function m(){const o=document.querySelector(".content"),n=document.createElement("div");o==null||o.append(n);const r=document.createElement("p");r.innerHTML=l.about[u()];const t=document.createElement("button");t.innerHTML=l.accept[u()],t.setAttribute("id","understood"),t.addEventListener("click",()=>{n.setAttribute("class","hidden"),setTimeout(()=>{p()},1e3)}),setTimeout(()=>{n.append(r),setTimeout(()=>{n.append(t)},1e3)},3e3)}function p(){alert(l.ad[u()]),location.href="https://i.redd.it/vljnc3cygex11.jpg"}function g(){const o=document.querySelector("#app"),n=document.createElement("h1"),r=document.createElement("a");r.href=location.toString(),r.innerHTML="SkillIssue",n.append(r),n.setAttribute("id","header");const t=document.createElement("button");t.innerHTML="Start",t.style.fontSize="5vmin",t.onclick=function(){t.setAttribute("class","hidden"),setTimeout(()=>{t.remove(),o==null||o.append(n)},1e3),m()},o==null||o.append(t)}window.onload=function(){g()};
