export function dropdown(button, dropdownDiv) {
  const buttonToDropdown = document.querySelector(button);
  const dropdownButtonsDiv = document.querySelector(dropdownDiv);

  dropdownButtonsDiv.setAttribute("style", "visibility: hidden");

  buttonToDropdown.addEventListener("click", () => {
    dropdownButtonsDiv.setAttribute("style", "visibility: visible");
  });

  buttonToDropdown.addEventListener("mouseover", () => {
    dropdownButtonsDiv.setAttribute("style", "visibility: visible");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(dropdownDiv)) {
      dropdownButtonsDiv.setAttribute("style", "visibility: hidden");
    }
  });
}
