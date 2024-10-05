document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu-mobile-item');
  menu.style.display = 'none'; // Inicia o menu fechado

  document.getElementById('menu-toggle').addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block'; // Mostra o menu
    } else {
      menu.style.display = 'none'; // Esconde o menu
    }
  });
});