const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  navigation.querySelectorAll('a').forEach(item => item.classList.toggle('active', item === link));
  closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('#home, #cfp, #program, #organizers, #committee, #contact');
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    navigation.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
  }, {rootMargin:'-80px 0px -65% 0px', threshold:0});
  sections.forEach(section => observer.observe(section));
}
