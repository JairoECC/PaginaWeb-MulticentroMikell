window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navigationLinks = document.querySelectorAll('.directions');
  var logo = document.querySelector('.logo-multicentro');
  var checkbtn = this.document.querySelector('.checkbtn');

  if (window.scrollY > 0) {
    navbar.classList.add('bg-white', 'text-blue-dark');
    navbar.classList.remove('bg-gradient-to-r', 'from-my-colour', 'to-blue-dark');
    logo.classList.remove('text-white');
    logo.classList.add('text-blue-dark');
    logo.classList.add('border-blue-dark'); // Agrega la clase de borde dark-blue
    logo.classList.remove('border-white'); // Elimina la clase de borde blanco
    checkbtn.classList.add('text-blue-dark');
    checkbtn.classList.remove('text-white');

    navigationLinks.forEach(function(link) {
      link.classList.remove('text-white');
      link.classList.add('text-blue-dark');
    });
  } else {
    navbar.classList.remove('bg-white', 'text-blue-dark');
    navbar.classList.add('bg-gradient-to-r', 'from-my-colour', 'to-blue-dark');
    logo.classList.remove('text-blue-dark');
    logo.classList.add('text-white');
    logo.classList.remove('border-blue-dark'); // Elimina la clase de borde dark-blue
    logo.classList.add('border-white'); // Agrega la clase de borde blanco
    checkbtn.classList.remove('text-blue-dark');
    checkbtn.classList.add('text-white');

    navigationLinks.forEach(function(link) {
      link.classList.remove('text-blue-dark');
      link.classList.add('text-white');
    });
  }
});
