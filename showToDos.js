var todo = JSON.parse(localStorage.getItem("todo"));
if(todo !== null)
{
  var deletedTodos = JSON.parse(localStorage.getItem("deletedToDos"));
  console.log(deletedToDos);
  if (deletedToDos === null)
  {
    deletedToDos = [];
  }
  for (var i = 0; i < deletedToDos.length; ++i)
  {
    tasks.splice(deletedToDos[i], 1);
  }
  deletedTasks = [];
  localStorage.setItem("deletedToDos", JSON.stringify(deletedToDos));
  localStorage.setItem("todo", JSON.stringify(todo))
  for(let x = 0; x < todo.length; x++)
  {
    var para = document.createElement("div");
    para.id = `deleteDiv${x}`
    console.log(para);
    para.innerHTML = `<p>${todo[x]}</p>
                      <button type="button" id = "deleteToDo${x}">X</button>`
    document.getElementById("updToDo").appendChild(para);
    document.getElementById(`deleteToDo${x}`).onclick = () => {
      var elem = document.querySelector(`#deleteDiv${x}`);
      elem.parentNode.removeChild(elem);
      deletedToDos.push(x);
      localStorage.setItem("deletedToDos", JSON.stringify(deletedToDos));
    }
  }

}
