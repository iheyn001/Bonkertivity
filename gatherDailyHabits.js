if(dailies === null)
{
  dailies = [];
}

let initval3 = localStorage.getItem(dailies);
console.log(initval3);
document.getElementById("button3").onclick = addNewHabit;

function addNewHabit()
{
  tasks.push(document.getElementById('habit').value);

  localStorage.setItem("dailies", JSON.stringify(dailies));

  var para = document.createElement("div");
  para.id = `deleteDiv${dailies.length-1}`
  console.log(para);
  para.innerHTML = `<p>${dailies[dailies.length-1]}</p>
                    <button type="button" id = "deleteHabit${dailies.length-1}">X</button>`
  document.getElementById("updDH").appendChild(para);
  document.getElementById(`deleteHabit${dailies.length-1}`).onclick = () => {
    var elem = document.querySelector(`#deleteDiv${dailies.length-1}`);
    elem.parentNode.removeChild(elem);
    deletedTasks.push(dailies.length-1);
    localStorage.setItem("deletedHabits", JSON.stringify(deletedHabits));
  }
}


/*
let key3 = 'dailies';
let initval3 = localStorage.getItem('dailies');
console.log(initval3);
document.getElementById("button3").onclick = addNewTask;

function addNewTask()
{
  localStorage.setItem('dailies', document.getElementById('habit').value);
  let updval3 = localStorage.getItem('dailies');
  console.log(updval3);
}
*/
