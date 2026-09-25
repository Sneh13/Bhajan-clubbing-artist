const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    nav.setAttribute("aria-expanded", "false");
  })
);

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const f = new FormData(e.target);

  const msg =
    `Hello, I would like to enquire about a Bhajan Clubbing performance.` +
    `%0A%0AName: ${encodeURIComponent(f.get("name"))}` +
    `%0AWhatsApp: ${encodeURIComponent(f.get("phone"))}` +
    `%0AEvent: ${encodeURIComponent(f.get("event"))}` +
    `%0AEvent Date: ${encodeURIComponent(f.get("date"))}` +
    `%0ALocation: ${encodeURIComponent(f.get("location"))}` +
    `%0AApprox. Budget: ${encodeURIComponent(f.get("budget"))}`;

  window.open(
    `https://wa.me/919136541340?text=${msg}`,
    "_blank"
  );
});