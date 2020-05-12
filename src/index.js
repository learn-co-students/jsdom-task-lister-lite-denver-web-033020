
document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById("create-task-form")
  let field = document.getElementById('new-task-description')
  let tasks = document.getElementById('tasks')

  form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("button clicked")
    let li = document.createElement('li')
    li.innerText = textBox.value
    tasks.append(li)

  })

});
