document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`リンク「${e.target.textContent}」がクリックされました！`);
    });
  });
});
