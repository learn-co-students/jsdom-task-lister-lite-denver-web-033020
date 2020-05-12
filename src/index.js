// // js function format:
// // function cat(){
// // }
// // const cat = () => {
// // }
// // to call it you use: cat()


// // I need the form since js can't do anything without that

// const taskForm = document.querySelector("#create-task-form")

// const taskList = document.querySelector("#tasks")


// // callback function is below, e stands for the event
// taskForm.addEventListener("submit", function(e){
//   e.preventDefault()
//   console.log("e.target: ", e.target)

// // grab the user input when they click submit and assign a variable to it
//   const newTask = document.querySelector("#new-task-description").value
//   console.log("new task: ", newTask)

// // put in on the dom, need to decide where, however the #tasks doesn't need to be grabbed whenever the
// // user presses submit, its always going to be displayed on the page so we will move it outside this function
// // line: 13

// const taskItem = document.createElement("li")
// //debugger; // this only works when the dev tools are open in browser

// // best practice to hard code example text to see if it works, then interpolate it after confirmation 
// //taskItem.innerText = "fsho"
// taskItem.innerText = newTask
// //console.log("taskItem", taskItem)

// // Now we need to put the tastitem on the task list
// taskList.appendChild(taskItem)
// taskForm.reset(); 

// })

// he then updates his code quite a bit: 
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e){
  e.preventDefault()
  
  const newTask = document.querySelector("#new-task-description").value
  
  // a script could be directly inserted to your DOM if you 
  // aren't careful about how the user can interact with your inner html 
  // his example: <script> alert("Shee bad XSS")</script>
  taskList.innerHTML += `
  <li> ${newTask} 
    <button data-action="delete" data-test="TEST!"> X </button>
    <button data-action="edit" data-test="TEST!"> Edit</button>

  </li>
  `
  taskList.addEventListener("click", function(e){
    // no prevent default because there is no default action for clicking on something on a list
    console.log("e.target: ", e.target)
    if(e.target.dataset.action === "delete"){
      e.target.parentElement.remove();
    }
    if (e.target.dataset.action === "edit"){
      //insert editing code here
    }
  })
  taskForm.reset(); 

})