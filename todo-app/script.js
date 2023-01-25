const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const deleteBtn = document.querySelector(".delete");

let todoItems = [];

function renderTodo(todo) {
  const item = document.querySelector(`[data-key='${todo.id}']`);
  if (todo.deleted) {
    item.remove();
    return;
  }
  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
X      </button>
    `;
  if (item) {
    ul.replaceChild(node, item);
  } else {
    ul.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleDone(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodoItem(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-tick")) {
    const itemKey = e.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (e.target.classList.contains("js-delete-todo")) {
    const itemKey = e.target.parentElement.dataset.key;
    deleteTodoItem(itemKey);
  }
});
