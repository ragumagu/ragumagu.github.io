var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)



let click_text = "Click ";
let dark_mode_text = " to switch to dark mode.";
let light_mode_text = " to switch to light mode.";
let toggle_par = document.createElement("p");

toggle_par.appendChild(document.createTextNode(click_text));


var theme_toggle_link = document.createElement("a");

theme_toggle_link.href = "#";
theme_toggle_link.innerText = "here";

theme_toggle_link.onclick = (e) =>{
    e.preventDefault();
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

toggle_par.appendChild(theme_toggle_link);

if (document.documentElement.getAttribute("data-theme") === "dark"){
    toggle_par.appendChild(document.createTextNode(dark_mode_text));
} else {
    toggle_par.appendChild(document.createTextNode(light_mode_text));
}

toggle_par.classList.add("sans");

var theme_toggle = document.getElementById("toggle-color-theme");
theme_toggle.replaceChildren(...[toggle_par]);