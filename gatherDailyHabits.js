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
