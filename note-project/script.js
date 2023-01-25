const note = document.querySelector(".container");
const editBtn = document.getElementById("edit");
const deleteBtn = document.getElementById("delete");


const content = note.querySelector(".content");
const textArea = note.querySelector("textarea");


editBtn.addEventListener("click", () => {
  content.classList.toggle("hide");
  textArea.classList.toggle("hide");
});


textArea.addEventListener("input", (e) => {
  const { value } = e.target;
  content.innerText = value;
});


