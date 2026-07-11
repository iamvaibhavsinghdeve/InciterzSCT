// nav scroll state
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>40));
// scroll-spy: highlight active nav link
const navA=[...document.querySelectorAll('.nav-links a')];
const secIds=navA.map(a=>a.getAttribute('href'));
addEventListener('scroll',()=>{
  let cur=secIds[0];
  for(const id of secIds){const s=id&&id.startsWith('#')&&id.length>1?document.querySelector(id):null;if(s&&s.getBoundingClientRect().top<=140)cur=id;}
  navA.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===cur));
});
// mobile menu
const burger=document.getElementById('burger'),mmenu=document.getElementById('mmenu');
burger.addEventListener('click',()=>mmenu.classList.toggle('open'));
mmenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mmenu.classList.remove('open')));
// reveal on scroll
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Our Work: very slow continuous auto-slider (non-clickable leader cards)
const wkt=document.getElementById('wkTrack');
if(wkt) autoScroll(wkt,0.14);
function autoScroll(el,speed){
  el.innerHTML+=el.innerHTML;
  let paused=false,raf;
  el.addEventListener('mouseenter',()=>paused=true);
  el.addEventListener('mouseleave',()=>paused=false);
  el.addEventListener('touchstart',()=>paused=true,{passive:true});
  function tick(){
    if(!paused){el.scrollLeft+=speed;if(el.scrollLeft>=el.scrollWidth/2)el.scrollLeft-=el.scrollWidth/2;}
    raf=requestAnimationFrame(tick);
  }
  tick();
}
// contact form -> open an email to connect@inciterz.com prefilled with the form data
const sb=document.getElementById('submitBtn');
if(sb) sb.addEventListener('click',()=>{
  const v=id=>{const el=document.getElementById(id);return el?el.value.trim():'';};
  const name=v('cName'),phone=v('cPhone'),email=v('cEmail'),msg=v('cMsg');
  const subject=encodeURIComponent('New enquiry from '+(name||'website'));
  const body=encodeURIComponent('Name: '+name+'\nPhone: '+phone+'\nEmail: '+email+'\n\nMessage:\n'+msg);
  window.location.href='mailto:connect@inciterz.com?subject='+subject+'&body='+body;
  const ok=document.getElementById('okMsg'); if(ok) ok.style.display='block';
});
