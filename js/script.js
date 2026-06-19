let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex = null;
let checkImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzYzMTcgOS42NzUwNkMxLjU1OTM5IDkuNDc0NDkgMC43NDUyMDQgOS45NjM0OCAwLjU0NDYyOSAxMC43NjczQzAuMzQ0MDU0IDExLjU3MSAwLjgzMzA0NyAxMi4zODUyIDEuNjM2ODMgMTIuNTg1OEwyLjM2MzE3IDkuNjc1MDZaTTguMTU4NzMgMTZMNi43ODA0MSAxNi41OTE4QzcuMDMwOTggMTcuMTc1NCA3LjYyMTk1IDE3LjUzNzkgOC4yNTU3NSAxNy40OTY5QzguODg5NTQgMTcuNDU1OCA5LjQyODc3IDE3LjAyIDkuNjAxOTEgMTYuNDA4OUw4LjE1ODczIDE2Wk0yMi4zMjYxIDMuNDY0MTNDMjMuMTM0NyAzLjI4NDA2IDIzLjY0NDIgMi40ODI1NyAyMy40NjQxIDEuNjczOTVDMjMuMjg0MSAwLjg2NTMyOCAyMi40ODI2IDAuMzU1NzkxIDIxLjY3MzkgMC41MzU4NjZMMjIuMzI2MSAzLjQ2NDEzWk0xLjYzNjgzIDEyLjU4NThDMi4wMjc2NCAxMi42ODMzIDMuMTIyOTkgMTMuMTUxIDQuMjc3OCAxMy45NDI2QzUuNDM5ODggMTQuNzM5MyA2LjM4OTA2IDE1LjY4MDMgNi43ODA0MSAxNi41OTE4TDkuNTM3MDUgMTUuNDA4MkM4LjgxMDk0IDEzLjcxNzEgNy4zMDE1NyAxMi4zNzgzIDUuOTc0MDYgMTEuNDY4MkM0LjYzOTI3IDEwLjU1MzIgMy4yMTM5OSA5Ljg4NzM4IDIuMzYzMTcgOS42NzUwNkwxLjYzNjgzIDEyLjU4NThaTTkuNjAxOTEgMTYuNDA4OUMxMC4xMzU5IDE0LjUyNDQgMTEuNDk0OCAxMS42NTg1IDEzLjY3MjcgOS4wNjM5NUMxNS44NDQ1IDYuNDc2NzUgMTguNzQxNyA0LjI2MjM1IDIyLjMyNjEgMy40NjQxM0wyMS42NzM5IDAuNTM1ODY2QzE3LjI1ODMgMS41MTkyIDEzLjgyNzUgNC4yMTM0MiAxMS4zNzQ5IDcuMTM1MTRDOC45Mjg1MiAxMC4wNDk1IDcuMzY2NzQgMTMuMjkyOSA2LjcxNTU1IDE1LjU5MTFMOS42MDE5MSAxNi40MDg5WiIgZmlsbD0iIzMzMzIyRSIvPgo8L3N2Zz4K"
let penImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMyMkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03Ii8+PHBhdGggZD0iTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCAyLjUtMi41Ii8+PC9zdmc+";
let calImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMyMkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxNiIgeTE9IjIiIHgyPSIxNiIgeTI9IjYiLz48bGluZSB4MT0iOCIgeTE9IjIiIHgyPSI4IiB5Mj0iNiIvPjxsaW5lIHgxPSIzIiB5MT0iMTAiIHgyPSIyMSIgeTI9IjEwIi8+PC9zdmc+";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", function() {
  renderTodos();
  document.getElementById("search").addEventListener("input", function() {
    searchTodos(this.value);
  });

  todoCounter();
});

function addTodoElement(todo = null) {
  const addTodoDiv = document.createElement("div");
  let container = document.getElementById("overlayContainer");
  addTodoDiv.id = "addTodoBG";
  container.appendChild(addTodoDiv);

  const addTodoDivBody = document.createElement("div");
  container = document.getElementById("addTodoBG");
  addTodoDivBody.id = "addTodoBody";
  addTodoDivBody.innerHTML = `
    <h3>${todo ? "Edit your To-do!" : "Add a To-do!"}</h3>
    <input class="addElement" id="getTitle" type="text" placeholder="Title..." maxlength="255" required>
    <input class="addElement" id="getDesc" type="text" placeholder="Description..." maxlength="255">
    <div class="radioGroup">
      <label class="addElementList">
        <input name="type" type="radio" value="true" onclick="dateDisplay(this.value)" ${!todo || todo.type ? "checked" : ""}> Task
      </label>
      <label class="addElementList">
        <input name="type" type="radio" value="false" onclick="dateDisplay(this.value)" ${todo && !todo.type ? "checked" : ""}> Event
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="category" type="radio" value="Sport" ${todo?.category === "Sport" ? "checked" : ""}> Sport
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="Leisure time" ${todo?.category === "Leisure time" ? "checked" : ""}> Leisure time
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="Art" ${todo?.category === "Art" ? "checked" : ""}> Art
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="Travel" ${todo?.category === "Travel" ? "checked" : ""}> Travel
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="importance" type="radio" value="true" ${!todo || todo.importance ? "checked" : ""}> Important
      </label>
      <label class="addElementList">
        <input name="importance" type="radio" value="false" ${todo && !todo.importance ? "checked" : ""}> Not Important
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="urgency" type="radio" value="true" ${!todo || todo.urgency ? "checked" : ""}> Urgent
      </label>
      <label class="addElementList">
        <input name="urgency" type="radio" value="false" ${todo && !todo.urgency ? "checked" : ""}> Not Urgent
      </label>
    </div>
    <div id="dates"></div>
    <div id="errorMessages"></div>
    <div class="submitButtons">
      <button type="button" class="cancel" onclick="closeAddTodoElement()">Cancel</button>
      <button type="button" class="add" onclick="runAddTodoElement()">${todo ? "Save" : "Add"}</button>
    </div>
    `;

  container.appendChild(addTodoDivBody);

  if (todo) {
    document.getElementById("getTitle").value = todo.title;
    document.getElementById("getDesc").value = todo.desc;

    if (!todo.type) {
      dateDisplay("false");
      document.getElementById("getStartDate").value = todo.startDate;
      document.getElementById("getEndDate").value = todo.endDate;
    }
  }
}

function dateDisplay(value) {
  if (value == "false") {
    document.getElementById("dates").innerHTML = `
      <div class="dateFormat">
        <label class="addElementDate">Starts...</label>
        <input class="addElement" id="getStartDate" type="date">
      </div>
      <div class="dateFormat">
        <label class="addElementDate">Ends...</label>
        <input class="addElement" id="getEndDate" type="date">
      </div>
    `;
  } else {
    document.getElementById("dates").innerHTML = "";
  }
}

function closeAddTodoElement() {
  editIndex = null;
  const body = document.getElementById("addTodoBody");
  body.classList.add("closing");

  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}

function runAddTodoElement() {
  let title = document.getElementById("getTitle").value;
  let desc = document.getElementById("getDesc").value;
  let type = document.querySelector("input[name='type']:checked").value === "true";
  let category = (document.querySelector("input[name='category']:checked") != null) ? document.querySelector("input[name='category']:checked").value : "";
  let importance = document.querySelector("input[name='importance']:checked").value === "true";
  let urgency = document.querySelector("input[name='urgency']:checked").value === "true";
  let startDate = document.getElementById("getStartDate")?.value ?? "";
  let endDate = document.getElementById("getEndDate")?.value ?? "";
  if (title == "") {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Enter a title!</p>";
    return;
  }

  if (title.length > 255) {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Title to long!</p>";
    return;
  }

  if (desc.length > 255) {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Description to long!</p>";
    return;
  }

  if (type == false) {
    startDate = document.getElementById("getStartDate").value;
    endDate = document.getElementById("getEndDate").value;

    if (startDate == "" && endDate == "") {
      document.getElementById("errorMessages").innerHTML = "<p class='error'>Enter start- & end date!</p>";
      return;
    }

    let splitStartDate = startDate.split("-");
    let splitEndDate = endDate.split("-");
    let intStartDate = [];
    let intEndDate = [];

    for (let i = 0; i < 3; i++) {
      intStartDate.push(parseInt(splitStartDate[i]));
      intEndDate.push(parseInt(splitEndDate[i]));
    }

    if ((intStartDate[0] + intStartDate[1] * 31 + intStartDate[2]) > (intEndDate[0] + intEndDate[1] * 31 + intEndDate[2])) {
      document.getElementById("errorMessages").innerHTML = "<p class='error'>Invalid start- / end date!</p>";
      return;
    }
  }

  document.getElementById("errorMessages").innerHTML = "";
  
  let todo = {};

  if (type == true) {
    todo = { title, desc, type, category, importance, urgency, done: false };
  } else if (type == false) {
    todo = { title, desc, type, category, importance, urgency, startDate, endDate, done: false };
  }

  if (editIndex !== null) {
  todos[editIndex] = todo;
  editIndex = null;
  } else {
  todos.push(todo);
  }

  saveTodos();
  renderTodos();
  todoCounter();

  const body = document.getElementById("addTodoBody");
  body.classList.add("closing");

  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}

function addTaskToList(title, desc, type, category, importance, urgency, startDate, endDate,  done) {
  let prio = "";
  if (importance == true && urgency == true) {
    prio = "Do it now!";
  } else if (importance == false && urgency == true) {
    prio = "Let someone else do it!";
  } else if (importance == true && urgency == false) {
    prio = "Do it at some point!";
  } else {
    prio = "Remove this to-do!";
  }

  let typeString = (type == true) ? "Task" : "Event";

  let ul = document.getElementById("todoListE");
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="todoListElement ${done ? "done" : ""}">
      <div class="checkbox ${done ? "done" : ""}" data-done="${done ? "true" : "false"}" onclick="checkTodo(this)">
        ${done ? `<img id="mac" src="${checkImg}" alt="Mark as Complete" draggable="false">` : ""}
      </div>
      <div class="todoListElementContent" onclick="editTodoElement(this)">
        <p class="todoListElementContentText">${title} <img id="penImg" src="${penImg}" alt="penImg" draggable="false"></p>
        <p class="todoListElementContentTextSmall">${prio}</p>
        <p class="todoListElementContentTextSmall">${desc}</p>
        <p class="todoListElementContentTextSmall">${category}</p>
      </div>
      <div class="delbox" onclick="removeTodo(this)">
        <img id="delimg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wOTkzIDE3Ljc1OTdDMTUuNzk0OSAxOC4yMDk4IDE2LjcyMzUgMTguMDEwOCAxNy4xNzM2IDE3LjMxNTJDMTcuNjIzNiAxNi42MTk3IDE3LjQyNDYgMTUuNjkxMSAxNi43MjkxIDE1LjI0MUMxMy4zMDc5IDEzLjAyNzMgMTAuODIwOSAxMC45OTU5IDguOTIyNTEgOS4wMzczOUM5LjA5NzQyIDguODQ5ODIgOS4yNzI5MSA4LjY2NTcxIDkuNDQ4ODggOC40ODUzNEMxMS44ODY0IDUuOTg2OTIgMTQuMjQ3MiA0LjM4MDY2IDE2LjI5NDQgMy45NzEyMkMxNy4xMDY3IDMuODA4NzUgMTcuNjMzNSAzLjAxODUyIDE3LjQ3MTEgMi4yMDYxOEMxNy4zMDg2IDEuMzkzODQgMTYuNTE4NCAwLjg2NzAxMyAxNS43MDYgMS4wMjk0OEMxMi43NTMyIDEuNjIwMDUgOS44NjQwNiAzLjc2Mzc5IDcuMzAxNTQgNi4zOTAzN0M3LjE4MTUxIDYuNTEzNCA3LjA2MTgxIDYuNjM3ODkgNi45NDI0OSA2Ljc2Mzc1QzUuNDIwMDEgNC44MDQzMyA0LjM3MDU4IDIuODc2MzIgMy40MjU5MSAwLjg2MzE2NEMzLjA3Mzk5IDAuMTEzMjAyIDIuMTgwNzMgLTAuMjA5NDc1IDEuNDMwNzcgMC4xNDI0NDVDMC42ODA4MDkgMC40OTQzNjUgMC4zNTgxMzIgMS4zODc2MiAwLjcxMDA1MSAyLjEzNzU4QzEuODIwODggNC41MDQ4MSAzLjA3ODk5IDYuNzY1MTEgNC45MjkzMiA5LjA1MzA2QzMuMjIyMDYgMTEuMTM0MSAxLjYyNjY5IDEzLjQzMjggMC4yMjI3MjMgMTUuNzE0MkMtMC4yMTE0NTMgMTYuNDE5NyAwLjAwODUyNzUyIDE3LjM0MzcgMC43MTQwNjQgMTcuNzc3OEMxLjQxOTYgMTguMjEyIDIuMzQzNTIgMTcuOTkyIDIuNzc3NyAxNy4yODY1QzQuMDQ4MTkgMTUuMjIyIDUuNDY0MDUgMTMuMTcyNiA2Ljk1NTU5IDExLjMxNjhDOC45ODUgMTMuMzc2NSAxMS41OTU5IDE1LjQ5MjggMTUuMDk5MyAxNy43NTk3WiIgZmlsbD0iIzMzMzIyRSIvPgo8L3N2Zz4K" alt="Delete" draggable="false">
      </div>
    </div>
  `;

  ul.appendChild(li);
}

function addEventToList(title, desc, type, category, importance, urgency, startDate, endDate, done) {
  let prio = "";
  if (importance == true && urgency == true) {
    prio = "Do it now!";
  } else if (importance == false && urgency == true) {
    prio = "Let someone else do it!";
  } else if (importance == true && urgency == false) {
    prio = "Do it at some point!";
  } else {
    prio = "Remove this to-do!";
  }

  let typeString = (type == true) ? "Task" : "Event";

  let ul = document.getElementById("todoListE");
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="todoListElement ${done ? "done" : ""}">
      <div class="checkbox ${done ? "done" : ""}" data-done="${done ? "true" : "false"}" onclick="checkTodo(this)">
        ${done ? `<img id="mac" src="${checkImg}" alt="Mark as Complete" draggable="false">` : ""}
      </div>
      <div class="todoListElementContent" onclick="editTodoElement(this)">
        <p class="todoListElementContentText">${title} <img id="calImg" src="${calImg}" alt="calImg" draggable="false"></p>
        <p class="todoListElementContentTextSmall">${prio}</p>
        <p class="todoListElementContentTextSmall">${desc}</p>
        <p class="todoListElementContentTextSmall">${category}</p>
        <p class="todoListElementContentTextSmall">${startDate} -> ${endDate}</p>
      </div>
      <div class="delbox" onclick="removeTodo(this)">
        <img id="delimg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wOTkzIDE3Ljc1OTdDMTUuNzk0OSAxOC4yMDk4IDE2LjcyMzUgMTguMDEwOCAxNy4xNzM2IDE3LjMxNTJDMTcuNjIzNiAxNi42MTk3IDE3LjQyNDYgMTUuNjkxMSAxNi43MjkxIDE1LjI0MUMxMy4zMDc5IDEzLjAyNzMgMTAuODIwOSAxMC45OTU5IDguOTIyNTEgOS4wMzczOUM5LjA5NzQyIDguODQ5ODIgOS4yNzI5MSA4LjY2NTcxIDkuNDQ4ODggOC40ODUzNEMxMS44ODY0IDUuOTg2OTIgMTQuMjQ3MiA0LjM4MDY2IDE2LjI5NDQgMy45NzEyMkMxNy4xMDY3IDMuODA4NzUgMTcuNjMzNSAzLjAxODUyIDE3LjQ3MTEgMi4yMDYxOEMxNy4zMDg2IDEuMzkzODQgMTYuNTE4NCAwLjg2NzAxMyAxNS43MDYgMS4wMjk0OEMxMi43NTMyIDEuNjIwMDUgOS44NjQwNiAzLjc2Mzc5IDcuMzAxNTQgNi4zOTAzN0M3LjE4MTUxIDYuNTEzNCA3LjA2MTgxIDYuNjM3ODkgNi45NDI0OSA2Ljc2Mzc1QzUuNDIwMDEgNC44MDQzMyA0LjM3MDU4IDIuODc2MzIgMy40MjU5MSAwLjg2MzE2NEMzLjA3Mzk5IDAuMTEzMjAyIDIuMTgwNzMgLTAuMjA5NDc1IDEuNDMwNzcgMC4xNDI0NDVDMC42ODA4MDkgMC40OTQzNjUgMC4zNTgxMzIgMS4zODc2MiAwLjcxMDA1MSAyLjEzNzU4QzEuODIwODggNC41MDQ4MSAzLjA3ODk5IDYuNzY1MTEgNC45MjkzMiA5LjA1MzA2QzMuMjIyMDYgMTEuMTM0MSAxLjYyNjY5IDEzLjQzMjggMC4yMjI3MjMgMTUuNzE0MkMtMC4yMTE0NTMgMTYuNDE5NyAwLjAwODUyNzUyIDE3LjM0MzcgMC43MTQwNjQgMTcuNzc3OEMxLjQxOTYgMTguMjEyIDIuMzQzNTIgMTcuOTkyIDIuNzc3NyAxNy4yODY1QzQuMDQ4MTkgMTUuMjIyIDUuNDY0MDUgMTMuMTcyNiA2Ljk1NTU5IDExLjMxNjhDOC45ODUgMTMuMzc2NSAxMS41OTU5IDE1LjQ5MjggMTUuMDk5MyAxNy43NTk3WiIgZmlsbD0iIzMzMzIyRSIvPgo8L3N2Zz4K" alt="Delete" draggable="false">
      </div>
    </div>
  `;

  ul.appendChild(li);
}

function removeTodo(delbox) {
  let li = delbox.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  todos.splice(index, 1);
  saveTodos();
  li.remove();
  todoCounter();
}

function checkTodo(checkbox) {
  let isDone = checkbox.dataset.done === "true";
  let todoElement = checkbox.closest(".todoListElement");
  let li = checkbox.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  if (isDone) {
    checkbox.innerHTML = "";
    checkbox.dataset.done = "false";
    todoElement.classList.remove("done");
    checkbox.classList.remove("done");
    todos[index].done = false;
  } else {
    checkbox.innerHTML = `<img id="mac" src="${checkImg}" alt="Mark as Complete" draggable="false">`;
    checkbox.dataset.done = "true";
    todoElement.classList.add("done");
    checkbox.classList.add("done");
    todos[index].done = true;
  }

  saveTodos();
  todoCounter();
}

function todoCounter() {
  let totalTodos = todos.length;
  let checkedTodos = todos.filter(checkCheck).length;
  let totalPercentage = Math.round(checkedTodos / totalTodos * 100);

  if (!Number.isNaN(totalPercentage)) {
    document.getElementById("todoCounter").innerHTML = totalPercentage + "% of the To-do's completed";
  } else {
    document.getElementById("todoCounter").innerHTML = "Add a To-do to see progress!";
  }
}

function checkCheck(todo) {
  return todo.done === true;
}

function MarkAllDone() {
  let allTodos = document.querySelectorAll("#todoListE .checkbox");

  for (let i = 0; i < allTodos.length; i++) {
    if (allTodos[i].dataset.done === "false") {
      checkTodo(allTodos[i]);
    }
  }
}

function searchTodos(query) {
  let allLi = document.querySelectorAll("#todoListE li");

  if (query == "") {
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].style.display = "";
    }
    return;
  }

  let regex = new RegExp(query, "i");

  for (let i = 0; i < allLi.length; i++) {
    if (regex.test(todos[i].title)) {
      allLi[i].style.display = "";
    } else {
      allLi[i].style.display = "none";
    }
  }
}

function editTodoElement(content) {
  let li = content.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  editIndex = index;
  addTodoElement(todos[index]);
}

function renderTodos() {
  document.getElementById("todoListE").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].type == true) {
      addTaskToList(todos[i].title, todos[i].desc, todos[i].type, todos[i].category, todos[i].importance, todos[i].urgency, "", "", todos[i].done);
    } else {
      addEventToList(todos[i].title, todos[i].desc, todos[i].type, todos[i].category, todos[i].importance, todos[i].urgency, todos[i].startDate, todos[i].endDate, todos[i].done);
    }
  }
}
