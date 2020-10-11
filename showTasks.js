var tasks = JSON.parse(localStorage.getItem("tasks"));
if(tasks !== null)
{
  var deletedTasks = JSON.parse(localStorage.getItem("deletedTasks"));
  console.log(deletedTasks);
  if (deletedTasks === null)
  {
    deletedTasks = [];
  }
  for (var i = 0; i < deletedTasks.length; ++i)
  {
    tasks.splice(deletedTasks[i], 1);
  }
  deletedTasks = [];
  localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  localStorage.setItem("tasks", JSON.stringify(tasks))
  for(let x = 0; x < tasks.length; x++)
  {
    var para = document.createElement("div");
    para.id = `deleteDiv${x}`
    console.log(para);
    para.innerHTML = `<p>${tasks[x]}</p>
                      <button type="button" id = "deleteTask${x}">X</button>`
    document.getElementById("updSched").appendChild(para);
    document.getElementById(`deleteTask${x}`).onclick = () => {
      var elem = document.querySelector(`#deleteDiv${x}`);
      elem.parentNode.removeChild(elem);
      deletedTasks.push(x);
      localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
    }
  }

}

/*function deleteTask()
{
  a.remove(b);
}
*/
