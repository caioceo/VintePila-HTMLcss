const dialog = document.getElementById("dialog-anunciar");
const showButton = document.getElementById("show-button");
const closeButton = document.getElementById("close-button")

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});