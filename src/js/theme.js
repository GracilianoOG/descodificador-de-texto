const root = document.documentElement;

const LIGHT = "light";
const DARK = "dark";

export function changeTheme() {
  const currTheme = root.dataset.theme;
  const nextTheme = currTheme === LIGHT ? DARK : LIGHT;
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
}

function checkTheme() {
  return localStorage.getItem("theme") ?? LIGHT;
}

root.setAttribute("data-theme", checkTheme());
