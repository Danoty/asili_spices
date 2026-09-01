const header=document.querySelector('.site-header');
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.main-nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open')});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

const c=window.ASILI_CONFIG||{};
const phoneLink=document.getElementById('phoneLink'),phoneText=document.getElementById('phoneText'),wa=document.getElementById('whatsappBtn');
if(c.phoneDisplay){phoneText.textContent=c.phoneDisplay;phoneLink.href='tel:+'+String(c.phoneInternational||'').replace(/\D/g,'');phoneLink.classList.remove('disabled')}
if(c.phoneInternational){wa.href='https://wa.me/'+String(c.phoneInternational).replace(/\D/g,'')+'?text='+encodeURIComponent('Hello Asili Spices, I would like to enquire about your products.');wa.classList.remove('disabled');wa.removeAttribute('aria-disabled')}
const emailLink=document.getElementById('emailLink'),emailText=document.getElementById('emailText');
if(c.email){emailText.textContent=c.email;emailLink.href='mailto:'+c.email;emailLink.classList.remove('disabled')}
if(c.location)document.getElementById('locationText').textContent=c.location;
const socialRow=document.getElementById('socialRow');
[['Instagram',c.instagram],['Facebook',c.facebook],['TikTok',c.tiktok]].filter(x=>x[1]).forEach(([label,url])=>{const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=label;socialRow.appendChild(a)});
