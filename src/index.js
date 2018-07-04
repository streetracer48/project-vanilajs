import './index.css'

window.onload = function() {

    let taskField = document.querySelector('#taskField')
    let taskBtn= document.querySelector('#addTaskBtn')
    let allTasksParent = document.querySelector('#allTasks')

    taskField.addEventListener('keypress', function() {
      if(event.keyCode === 13)
      {
       createNewTask(allTasksParent, event.target.value)

       this.value = ''

      }

    })
}

function createNewTask(parent, task) {

}