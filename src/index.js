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
console.log(task)
}


AudioTrackListwindow.create = function () {

  if (arguments.length === 0) {
      return document.createElement('div');
  }

  if (arguments.length === 1 && typeof arguments[0] != 'object') {
      return document.createElement(arguments[0]);
  }

  var tag = arguments[0];
  var attr = arguments[1] || arguments[0];

  if (arguments.length === 1 && typeof arguments[0] === 'object') {
      tag = 'div';
  }

  var element = document.createElement(tag);

  for (var i in attr) {
      element.setAttribute(i, attr[i]);
  }

  return element;
}