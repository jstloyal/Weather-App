const form = (() => {
  const heading = document.createElement("header");
  const form = document.createElement("form");
  form.setAttribute("class", "form-inline");
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group", "mb-2", "mr-sm-2");
  inputGroup.setAttribute("id", "inlineForm");
  const input = document.createElement("input");
  input.classList.add("form-control", "formInput", "text-center");
  input.setAttribute("placeholder", "Enter a city...");

  inputGroup.appendChild(input);
  form.appendChild(inputGroup);
  heading.appendChild(form);

  return heading;
})();

export default form;
