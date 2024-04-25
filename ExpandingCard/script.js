const pannels = document.querySelectorAll(".panel");
// console.log(pannels)

pannels.forEach((pannel) => {
  // console.log(pannel)
  pannel.addEventListener("click", () => {
    removeActiveClasses(); //remove all active classes
    pannel.classList.add("active");
  });
});
function removeActiveClasses() {
  pannels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
