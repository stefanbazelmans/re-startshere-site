document.addEventListener('DOMContentLoaded',()=>{lucide.createIcons();
const b=document.getElementById('mobile-menu-button'),m=document.getElementById('mobile-menu'),h=document.getElementById('site-header');
if(b&&m)b.addEventListener('click',()=>m.classList.toggle('hidden'));
window.addEventListener('scroll',()=>{if(scrollY>20){h.classList.add('bg-blue-700','shadow-lg');
h.classList.remove('bg-blue-700/95')}else{h.classList.add('bg-blue-700/95');
h.classList.remove('shadow-lg')}})});
