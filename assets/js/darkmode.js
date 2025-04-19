// Function to toggle between light and dark mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('#checkbox');
  const currentTheme = localStorage.getItem('theme');

  // Check for saved theme preference or use preferred color scheme
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  } else {
    // Use preferred color scheme if available
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
      localStorage.setItem('theme', 'dark');
    }
  }

  // Function to switch theme
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  // Event listener for theme toggle
  toggleSwitch.addEventListener('change', switchTheme);
}); 