document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const logo = document.getElementById('logo');

  // Función para aplicar el tema
  const applyTheme = (lightMode) => {
    const stylesheet = document.getElementById('main-stylesheet');
    
    if (lightMode) {
      stylesheet.setAttribute('href', 'assets/css/mainLightHome.css');
      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = '#FFF'; 
      logo.style.transition = 'opacity 0.5s ease';
      logo.style.opacity = 0; 
      setTimeout(() => {
        logo.src = 'assets/img/logo/SodioBlack.webp';
        logo.style.opacity = 1; 
      }, 500);
    } else {
      stylesheet.setAttribute('href', 'assets/css/main.css');
      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = '#000'; // Ajusta el color según tu tema oscuro
      logo.style.transition = 'opacity 0.5s ease';
      logo.style.opacity = 0; // Iniciar transición
      setTimeout(() => {
        logo.src = 'assets/img/logo/SodioWhite.webp';
        logo.style.opacity = 1; // Terminar transición
      }, 500);
    }
  };

  // Verificar y aplicar el tema al cargar la página
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    themeSwitch.checked = true;
    applyTheme(true);
  } else {
    themeSwitch.checked = false;
    applyTheme(false);
  }

  // Escuchar el cambio en el interruptor de tema
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('theme', 'light'); // Almacenar preferencia de tema claro
      applyTheme(true);
    } else {
      localStorage.setItem('theme', 'dark'); // Almacenar preferencia de tema oscuro
      applyTheme(false);
    }
  });
});
