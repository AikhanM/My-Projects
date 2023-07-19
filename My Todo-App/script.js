const Input = document.querySelector("#Input");
const todo = document.querySelector(".todo-call");
const close = document.querySelector(".close");
const items = document.querySelector(".items");
const numb = document.querySelector("#numb");
const mode=document.querySelector(".mode")

const moon=document.querySelector(".moon")
const sun=document.querySelector(".sun")

let number = 0;
let numberActive=0
let numberPassive=0
let isDark=false

mode.addEventListener("click",changeMode)
  

function changeMode() {
  const todoLists = document.querySelectorAll(".todo-list");
  const bgImg = document.querySelector(".box-top");

  if (isDark) {
    
    todoLists.forEach(todoList => {
      todoList.style.background = "#25273c";
      todoList.style.color = "#fff";
    });
    Input.style.color = "#fff";
    Input.style.background = "#25273c";
    document.querySelector(".info").style.color = "#fff";
    document.querySelector(".info").style.background = "#25273c";
    document.querySelector("body").style.color = "#fff";
    document.querySelector(".box-bottom").style.background = "#181824";
    bgImg.style.background = "url(images/bg-desktop-dark.jpg) center/cover";
    sun.style.display = "inline-block";
    moon.style.display = "none";
    isDark = false;
  } else {
    
    todoLists.forEach(todoList => {
      todoList.style.background = "#fff";
      todoList.style.color = "hsl(235, 19%, 35%)";
    });
    Input.style.color = "hsl(235, 19%, 35%)";
    Input.style.background = "#fff";
    document.querySelector(".info").style.color = "hsl(235, 19%, 35%)";
    document.querySelector(".info").style.background = "#fff";
    document.querySelector("body").style.color = "hsl(235, 19%, 35%)";
    document.querySelector(".box-bottom").style.background = "#fff";
    bgImg.style.background = "url(images/bg-desktop-light.jpg) center/cover";
    sun.style.display = "none";
    moon.style.display = "inline-block";
    isDark = true;
  }
}



Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addtodo();
    number++;
    numb.innerHTML = number;
  }
});

function addtodo() {
  const Value = Input.value;
  const div = document.createElement("div");
  div.classList.add("todo-list");
  div.classList.add("passive")
  if(Value===""){
    alert('Please enter todo')
    Value=""
  }
  div.innerHTML = `
    <div class="check " onclick="Checked(this)"><img src="images/icon-check.svg" alt="" class="icon-check" ></div>
    <p class="outPut">${Value}</p>
    <button class="close" onclick="deletetodo(this.parentNode)"><img src="images/icon-cross.svg" alt=""></button>
  `;
  if(isDark){
    div.classList.add("lightMode")
  }
  else div.classList.add("darkMode")
  todo.appendChild(div);
  todo.appendChild(document.createElement("div")).classList.add("hr");
    Input.value=""
  
}



function deletetodo(element) {
    todo.removeChild(element);
    number-- 
    numb.innerHTML=number
  }

  

  function Checked(checkDiv) {
    const outPut = checkDiv.nextElementSibling;
    const list = checkDiv.parentNode; 
    const icon = checkDiv.querySelector(".icon-check");
  
    if (outPut.style.textDecoration === "line-through") {
      outPut.style.textDecoration = "none";
      list.classList.add("passive");
      list.classList.remove("active");
      checkDiv.classList.remove("active-check");
      icon.style.opacity = "0";
    } else {
      outPut.style.textDecoration = "line-through";
      checkDiv.classList.add("active-check");
      list.classList.add("active");
      list.classList.remove("passive");
      icon.style.opacity = "1";
    }
  }
  



document.querySelector(".choice .ACTIVE").addEventListener("click", showActive);




function showActive() {
  const activeDivs = document.querySelectorAll('.todo-list.active');
  const passiveDivs=document.querySelectorAll('.todo-list.passive')

  passiveDivs.forEach(div => {
    div.style.display = "";
    numberActive++
  });
  activeDivs.forEach(div => {
    div.style.display = "none";
    
    
  });
  numb.innerHTML=numberActive
  numberActive=0
}

function showAll() {
  const passiveDivs = document.querySelectorAll('.todo-list.passive');
  const activeDivs = document.querySelectorAll('.todo-list.active');
  passiveDivs.forEach(div => {
    div.style.display = "";
    
  });
  
  activeDivs.forEach(div => {
    div.style.display = "";
  });
  numb.innerHTML=number
}

function Completed(){
  const passiveDivs = document.querySelectorAll('.todo-list.passive');
  const activeDivs = document.querySelectorAll('.todo-list.active');
  
  activeDivs.forEach(div => {
    div.style.display = "";
    numberPassive++
  });
  passiveDivs.forEach(div => {
    div.style.display = "none";
    
  });
  numb.innerHTML=numberPassive
  numberPassive=0
  }


function clearAll() {
  const todoLists = document.querySelectorAll(".todo-list");
  todoLists.forEach(todoList => {
    todo.removeChild(todoList);
  });
  number=0
  numb.innerHTML=0
}
