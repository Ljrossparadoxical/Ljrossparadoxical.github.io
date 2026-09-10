const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('Replace this # link with your real '+a.dataset.placeholder+' business profile URL.')}));

document.getElementById('quoteForm').addEventListener('submit',e=>{
 e.preventDefault();const d=new FormData(e.target);
 // CHANGE THIS to the real business email before publishing.
 const email='YOUR-EMAIL@example.com';
 const subject=encodeURIComponent('A-Z Labor & Property Services - Quote Request');
 const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\nBudget: ${d.get('budget')||'Not specified'}\n\nJob details:\n${d.get('details')}`);
 location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});