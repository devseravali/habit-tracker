const toggleThemeButton = document.getElementById('theme-toggle');
const themeKey = 'habit-tracker-theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem(themeKey, theme);

  if (toggleThemeButton) {
    toggleThemeButton.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');

    const icon = toggleThemeButton.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = theme === 'dark' ? 'dark_mode' : 'light_mode';
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

const savedTheme = window.localStorage.getItem(themeKey);
const initialTheme = savedTheme === 'light' ? 'light' : 'dark';

setTheme(initialTheme);

if (toggleThemeButton) {
  toggleThemeButton.addEventListener('click', toggleTheme);
}
