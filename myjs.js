const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const runButton = document.getElementById("run");
const userForm = document.querySelector("form");
const buttonRemove = document.getElementById("remove");
const userTableBody = document.getElementById("userTableBody");
runButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const age = ageInput.value.trim();
  if (name && surname && age) {
    let newRow = document.createElement("tr");
    let newId = document.createElement("td");
    let newName = document.createElement("td");
    let newSurname = document.createElement("td");
    let newAge = document.createElement("td");
    let actionCell = document.createElement("td");
    let newAction = document.createElement("button");

    newId.textContent = userTableBody.childElementCount + 1;
    newName.textContent = name;
    newSurname.textContent = surname;
    newAge.textContent = age;
    newAction.innerHTML = '<button class="delete">Удалить</button>';
    newAction.addEventListener("click", () => {
      newRow.remove();
    });
    actionCell.appendChild(newAction);
    newRow.appendChild(newId);
    newRow.appendChild(newName);
    newRow.appendChild(newSurname);
    newRow.appendChild(newAge);
    newRow.appendChild(actionCell);
    userTableBody.appendChild(newRow);
    userForm.reset();
  } else {
    alert("Не все поля заполнены");
  }
});

buttonRemove.addEventListener("click", () => {
  const rows = userTableBody.rows;
  for (let i = rows.length - 1; i >= 0; i--) {
    rows[i].remove();
  }
});
