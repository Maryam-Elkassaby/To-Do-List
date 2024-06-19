const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask(){
  if(inputBox.value === ''){
    alert('you must add task !!')
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // create delete btn
    let deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '\u00d7';
    li.appendChild(deleteBtn);
  }
  inputBox.value = ''
  saveData();
}

listContainer.addEventListener('click' , function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
} , false)

function saveData(){
  localStorage.setItem('data' , listContainer.innerHTML);
}
function showTasks(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showTasks()