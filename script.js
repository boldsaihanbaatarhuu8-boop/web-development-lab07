
const theme = document.getElementById("theme");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Dark mode
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    theme.textContent =
        document.body.classList.contains("dark")
            ? "Light mode"
            : "Dark mode";
});

// Гар утасны цэс
menu.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(isOpen));
});
