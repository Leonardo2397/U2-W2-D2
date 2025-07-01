const toggleLink = document.getElementById("toggle-sezione");
const sezione = document.getElementById("sezione-saldi");

toggleLink.addEventListener("click", function (e) {
  e.preventDefault();

  if (sezione.style.display === "none") {
    sezione.style.display = "block";
    toggleLink.textContent = "Nascondi sezione";
  } else {
    sezione.style.display = "none";
    toggleLink.textContent = "Mostra sezione";
  }
});
