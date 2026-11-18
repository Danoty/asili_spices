(() => {
  const selected = new Set();
  const panel = document.querySelector('#shortlist');
  const items = document.querySelector('#shortlist-items');
  const product = document.querySelector('#product');
  const buttons = [...document.querySelectorAll('[data-add]')];
  function update() {
    panel.hidden = selected.size === 0;
    document.querySelector('#shortlist-summary').textContent = `${selected.size} ingredient${selected.size === 1 ? '' : 's'} to discuss. Availability is confirmed directly.`;
    items.replaceChildren();
    selected.forEach(name => {
      const li = document.createElement('li');
      const label = document.createElement('span'); label.textContent = name;
      const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', `Remove ${name} from enquiry`);
      remove.addEventListener('click', () => { selected.delete(name); update(); const button=buttons.find(b=>b.dataset.add===name); button?.focus({preventScroll:true}); });
      li.append(label, remove); items.append(li);
    });
    buttons.forEach(b => { const active=selected.has(b.dataset.add); b.setAttribute('aria-pressed', String(active)); b.textContent = active ? 'Added to enquiry ✓' : 'Add to enquiry +'; });
  }
  buttons.forEach(b => b.addEventListener('click', () => { selected.has(b.dataset.add) ? selected.delete(b.dataset.add) : selected.add(b.dataset.add); update(); }));
  document.querySelector('#shortlist-clear').addEventListener('click', () => { selected.clear(); update(); buttons[0]?.focus({preventScroll:true}); });
  document.querySelector('#shortlist-continue').addEventListener('click', () => { product.value = [...selected].join(', '); product.focus({preventScroll:true}); });
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }), {threshold:.08});
    document.querySelectorAll('.tips article, .order-steps li, .kitchen-feature-copy').forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
    motion.addEventListener('change', e => { if(e.matches) document.querySelectorAll('.reveal-ready').forEach(el => el.classList.add('is-visible')); });
  }
})();
