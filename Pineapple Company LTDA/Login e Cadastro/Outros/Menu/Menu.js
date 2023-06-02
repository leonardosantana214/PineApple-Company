    // MARCANDO A VARIAVEL
window.addEventListener('scroll', function() {
    
    var menu = document.getElementById('menu');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//   É PRA SABER SE O SCROLL DESCEU OU NÃO
    if (scrollPosition > 0) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });

 