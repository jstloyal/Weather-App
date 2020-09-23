const toggle = (() => {
  const toggleLabel = document.createElement("label");
  toggleLabel.setAttribute("class", "toggle");
  const toggleInput = document.createElement("input");
  toggleInput.setAttribute("type", "checkbox");
  const toggleSpan = document.createElement("span");
  toggleSpan.setAttribute("class", "slider round");

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSpan);

  return toggleLabel;
})();

export default toggle;
