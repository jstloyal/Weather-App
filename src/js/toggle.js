const toggle = (() => {
  const heading = document.createElement("header");
  heading.classList.add("d-flex", "justify-content-end")
  const toggleLabel = document.createElement("label");
  toggleLabel.setAttribute("class", "toggle");
  const toggleInput = document.createElement("input");
  toggleInput.setAttribute('class', 'toggler');
  toggleInput.type = 'checkBox';
  const toggleSpan = document.createElement("span");
  toggleSpan.setAttribute("class", "slider round");

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSpan);

  heading.appendChild(toggleLabel);

  return heading;
})();

export default toggle;
