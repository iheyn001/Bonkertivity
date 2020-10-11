let key2 = 'todo';
let initval2 = localStorage.getItem('todo');
console.log(initval2);
document.getElementById("button2").onclick = addNewTask;

function addNewTask()
{
  localStorage.setItem('todo', document.getElementById('do').value);
  let updval2 = localStorage.getItem('todo');
  console.log(updval2);
}
