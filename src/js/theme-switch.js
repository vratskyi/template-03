// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");

// if (prefersDarkScheme.matches) {
//   document.body.classList.add("light");
// } else {
//   document.body.classList.remove("light");
// }

const page = document.querySelector(".page");
const toggle = page.querySelector(".toggle-input");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }

  // set the value of the "checked" key in localStorage
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);

