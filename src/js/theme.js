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
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;
  const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? DARK : LIGHT;
}

root.setAttribute("data-theme", checkTheme());
