document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu-mobile-item');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; // Mostra o menu
  } else {
    menu.style.display = 'none'; // Esconde o menu
  }
});

