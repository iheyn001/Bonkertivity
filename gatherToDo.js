if(todo === null)
{
  todo = [];
}

let initval2 = localStorage.getItem(todo);
console.log(initval2);
document.getElementById("button2").onclick = addNewToDo;

function addNewToDo()
{
  todo.push(document.getElementById('do').value);

  localStorage.setItem("todo", JSON.stringify(todo));

  var para = document.createElement("div");
  para.id = `deleteDiv${todo.length-1}`
  console.log(para);
  para.innerHTML = `<p>${todo[todo.length-1]}</p>
                    <button type="button" id = "deleteToDo${todo.length-1}">X</button>`
  document.getElementById("updToDo").appendChild(para);
  document.getElementById(`deleteToDo${todo.length-1}`).onclick = () => {
    var elem = document.querySelector(`#deleteDiv${todo.length-1}`);
    elem.parentNode.removeChild(elem);
    deletedToDos.push(todo.length-1);
    localStorage.setItem("deletedToDos", JSON.stringify(deletedToDos));
  }
}
