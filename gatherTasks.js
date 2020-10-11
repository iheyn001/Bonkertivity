if(tasks === null)
{
  tasks = [];
}

let initval1 = localStorage.getItem(tasks);
console.log(initval1);
document.getElementById("button1").onclick = addNewTask;

function addNewTask()
{
  //var tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(document.getElementById('sched').value);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  var para = document.createElement("div");
  para.id = `deleteDiv${tasks.length-1}`
  console.log(para);
  para.innerHTML = `<p>${tasks[tasks.length-1]}</p>
                    <button type="button" id = "deleteTask${tasks.length-1}">X</button>`
  document.getElementById("updSched").appendChild(para);
  document.getElementById(`deleteTask${tasks.length-1}`).onclick = () => {
    var elem = document.querySelector(`#deleteDiv${tasks.length-1}`);
    elem.parentNode.removeChild(elem);
    deletedTasks.push(tasks.length-1);
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }
}
