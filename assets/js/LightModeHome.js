document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');

  // Función para aplicar el tema
  const applyTheme = (lightMode) => {
    const stylesheet = document.getElementById('main-stylesheet');
    
    if (lightMode) {
      stylesheet.setAttribute('href', 'assets/css/mainLightHome.css');
      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = '#FFF'; // Ajusta el color según tu tema claro
    } else {
      stylesheet.setAttribute('href', 'assets/css/main.css');
      document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = '#000'; // Ajusta el color según tu tema oscuro
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
