const root = document.documentElement;

const LIGHT = "light";
const DARK = "dark";

export function changeTheme() {
  const currTheme = root.dataset.theme;
  root.setAttribute("data-theme", currTheme === LIGHT ? DARK : LIGHT);
}

root.setAttribute("data-theme", LIGHT);
