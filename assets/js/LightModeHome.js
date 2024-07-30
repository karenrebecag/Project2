document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const logo = document.getElementById('logo');

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
      document.body.style.backgroundColor = '#000'; 
      logo.style.transition = 'opacity 0.5s ease';
      logo.style.opacity = 0; 
      setTimeout(() => {
        logo.src = 'assets/img/logo/SodioWhite.webp';
        logo.style.opacity = 1; 
      }, 500);
    }
  };

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
      localStorage.setItem('theme', 'light'); 
      applyTheme(true);
    } else {
      localStorage.setItem('theme', 'dark'); 
      applyTheme(false);
    }
  });
});
