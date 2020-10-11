var dailies = JSON.parse(localStorage.getItem("dailies"));
if(dailies !== null)
{
  var deletedHabits = JSON.parse(localStorage.getItem("deletedHabits"));
  console.log(deletedHabits);
  if (deletedHabits === null)
  {
    deletedHabits = [];
  }
  for (var i = 0; i < deletedHabits.length; ++i)
  {
    dailies.splice(deletedHabits[i], 1);
  }
  deletedHabits = [];
  localStorage.setItem("deletedHabits", JSON.stringify(deletedHabits));
  localStorage.setItem("dailies", JSON.stringify(dailies))
  for(let x = 0; x < dailies.length; x++)
  {
    var para = document.createElement("div");
    para.id = `deleteDiv${x}`
    console.log(para);
    para.innerHTML = `<p>${dailies[x]}</p>
                      <button type="button" id = "deleteHabit${x}">X</button>`
    document.getElementById("updDH").appendChild(para);
    document.getElementById(`deleteHabit${x}`).onclick = () => {
      var elem = document.querySelector(`#deleteDiv${x}`);
      elem.parentNode.removeChild(elem);
      deletedHabits.push(x);
      localStorage.setItem("deletedHabits", JSON.stringify(deletedHabits));
    }
  }

}
