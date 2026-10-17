(()=>{const lb=document.getElementById('lb'),img=lb.querySelector('img');
const items=[...document.querySelectorAll('[data-full]')];let i=0;
const show=n=>{i=(n+items.length)%items.length;const t=items[i];img.src=t.dataset.full;img.alt=t.querySelector('img')?.alt||'';lb.hidden=false;document.body.style.overflow='hidden'};
const close=()=>{lb.hidden=true;img.removeAttribute('src');document.body.style.overflow=''};
items.forEach((t,n)=>t.addEventListener('click',()=>show(n)));
lb.querySelector('.lb-close').onclick=close;lb.querySelector('.lb-prev').onclick=()=>show(i-1);lb.querySelector('.lb-next').onclick=()=>show(i+1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});})();
