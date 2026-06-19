// Get the to-do's from the browser storage. If there are none, use an empty array.
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// This says which to-do we are editing right now. null means we are not editing, we are adding a new one.
let editIndex = null;
// These three lines are icons saved as text (base64)
let checkImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzYzMTcgOS42NzUwNkMxLjU1OTM5IDkuNDc0NDkgMC43NDUyMDQgOS45NjM0OCAwLjU0NDYyOSAxMC43NjczQzAuMzQ0MDU0IDExLjU3MSAwLjgzMzA0NyAxMi4zODUyIDEuNjM2ODMgMTIuNTg1OEwyLjM2MzE3IDkuNjc1MDZaTTguMTU4NzMgMTZMNi43ODA0MSAxNi41OTE4QzcuMDMwOTggMTcuMTc1NCA3LjYyMTk1IDE3LjUzNzkgOC4yNTU3NSAxNy40OTY5QzguODg5NTQgMTcuNDU1OCA5LjQyODc3IDE3LjAyIDkuNjAxOTEgMTYuNDA4OUw4LjE1ODczIDE2Wk0yMi4zMjYxIDMuNDY0MTNDMjMuMTM0NyAzLjI4NDA2IDIzLjY0NDIgMi40ODI1NyAyMy40NjQxIDEuNjczOTVDMjMuMjg0MSAwLjg2NTMyOCAyMi40ODI2IDAuMzU1NzkxIDIxLjY3MzkgMC41MzU4NjZMMjIuMzI2MSAzLjQ2NDEzWk0xLjYzNjgzIDEyLjU4NThDMi4wMjc2NCAxMi42ODMzIDMuMTIyOTkgMTMuMTUxIDQuMjc3OCAxMy45NDI2QzUuNDM5ODggMTQuNzM5MyA2LjM4OTA2IDE1LjY4MDMgNi43ODA0MSAxNi41OTE4TDkuNTM3MDUgMTUuNDA4MkM4LjgxMDk0IDEzLjcxNzEgNy4zMDE1NyAxMi4zNzgzIDUuOTc0MDYgMTEuNDY4MkM0LjYzOTI3IDEwLjU1MzIgMy4yMTM5OSA5Ljg4NzM4IDIuMzYzMTcgOS42NzUwNkwxLjYzNjgzIDEyLjU4NThaTTkuNjAxOTEgMTYuNDA4OUMxMC4xMzU5IDE0LjUyNDQgMTEuNDk0OCAxMS42NTg1IDEzLjY3MjcgOS4wNjM5NUMxNS44NDQ1IDYuNDc2NzUgMTguNzQxNyA0LjI2MjM1IDIyLjMyNjEgMy40NjQxM0wyMS42NzM5IDAuNTM1ODY2QzE3LjI1ODMgMS41MTkyIDEzLjgyNzUgNC4yMTM0MiAxMS4zNzQ5IDcuMTM1MTRDOC45Mjg1MiAxMC4wNDk1IDcuMzY2NzQgMTMuMjkyOSA2LjcxNTU1IDE1LjU5MTFMOS42MDE5MSAxNi40MDg5WiIgZmlsbD0iIzMzMzIyRSIvPgo8L3N2Zz4K"
let penImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMyMkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03Ii8+PHBhdGggZD0iTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCAyLjUtMi41Ii8+PC9zdmc+";
let calImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMyMkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxNiIgeTE9IjIiIHgyPSIxNiIgeTI9IjYiLz48bGluZSB4MT0iOCIgeTE9IjIiIHgyPSI4IiB5Mj0iNiIvPjxsaW5lIHgxPSIzIiB5MT0iMTAiIHgyPSIyMSIgeTI9IjEwIi8+PC9zdmc+";

// Save the to-do list into the browser storage, as text (JSON).
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// This runs one time, when the page is fully loaded.
document.addEventListener("DOMContentLoaded", function() {
  // Show all saved to-do's on the page.
  renderTodos();

  // When the user types in the search field, run the search function.
  document.getElementById("search").addEventListener("input", function() {
    searchTodos(this.value);
  });

  // Update the percent text at the bottom.
  todoCounter();
});

// This function opens the popup form to add or edit a to-do.
// If "todo" is given, we are editing. If not, we are adding a new one.
function addTodoElement(todo = null) {
  // Crating the dark background behind the popup.
  const addTodoDiv = document.createElement("div");
  let container = document.getElementById("overlayContainer");
  addTodoDiv.id = "addTodoBG";
  container.appendChild(addTodoDiv);

  // Creating the white box of the popup.
  const addTodoDivBody = document.createElement("div");
  container = document.getElementById("addTodoBG");
  addTodoDivBody.id = "addTodoBody";

  // Building the form inside the popup. 
  // Using `${}` to put the old to-do values into the inputs, so the user can see and change them.
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

  // If we are editing a to-do, put its title and description into the inputs.
  if (todo) {
    document.getElementById("getTitle").value = todo.title;
    document.getElementById("getDesc").value = todo.desc;

    // If the to-do is an event, also show and fill the date fields.
    if (!todo.type) {
      dateDisplay("false");
      document.getElementById("getStartDate").value = todo.startDate;
      document.getElementById("getEndDate").value = todo.endDate;
    }
  }
}

// This function shows or hides the date inputs, depending on Task or Event is picked.
function dateDisplay(value) {
  // "false" means the user picked Event, so we need start and end date.
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
    // The user picked Task, so we don't need dates. Make the box empty.
    document.getElementById("dates").innerHTML = "";
  }
}

// This function closes the popup with a small closing animation.
function closeAddTodoElement() {
  // Quit the edit mode because the user is done editing now.
  editIndex = null;
  const body = document.getElementById("addTodoBody");
  body.classList.add("closing"); // this class plays the "pop out" animation in CSS

  // Wait until the animation is finished, then really remove the popup from the page.
  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}

// This function runs when the user clicks "Add" or "Save" in the popup.
// It checks the inputs, and then it saves the new or edited to-do.
function runAddTodoElement() {
  // Get all the values the user typed or picked in the form.
  let title = document.getElementById("getTitle").value;
  let desc = document.getElementById("getDesc").value;
  let type = document.querySelector("input[name='type']:checked").value === "true";
  let category = (document.querySelector("input[name='category']:checked") != null) ? document.querySelector("input[name='category']:checked").value : "";
  let importance = document.querySelector("input[name='importance']:checked").value === "true";
  let urgency = document.querySelector("input[name='urgency']:checked").value === "true";
  let startDate = document.getElementById("getStartDate")?.value ?? ""; // If the to-do is a Task then no dates are selected.
  let endDate = document.getElementById("getEndDate")?.value ?? "";

  // Check 1: the title can not be empty.
  if (title == "") {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Enter a title!</p>";
    return; // stop the function here, don't save anything
  }

  // Check 2: the title can not be too long.
  if (title.length > 255) {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Title to long!</p>";
    return;
  }

  // Check 3: the description can not be too long.
  if (desc.length > 255) {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Description to long!</p>";
    return;
  }

  // If the to-do is an event, we need to check the dates too.
  if (type == false) {
    startDate = document.getElementById("getStartDate").value;
    endDate = document.getElementById("getEndDate").value;

    // Check 4: both dates must be filled.
    if (startDate == "" && endDate == "") {
      document.getElementById("errorMessages").innerHTML = "<p class='error'>Enter start- & end date!</p>";
      return;
    }

    // Split the date text "YYYY-MM-DD" into 3 separate numbers.
    let splitStartDate = startDate.split("-");
    let splitEndDate = endDate.split("-");
    let intStartDate = [];
    let intEndDate = [];

    // Turn every part of the date (year, month, day) into a real number.
    for (let i = 0; i < 3; i++) {
      intStartDate.push(parseInt(splitStartDate[i]));
      intEndDate.push(parseInt(splitEndDate[i]));
    }

    // Check 5: the start date can not be after the end date.
    if ((intStartDate[0] + intStartDate[1] * 31 + intStartDate[2]) > (intEndDate[0] + intEndDate[1] * 31 + intEndDate[2])) {
      document.getElementById("errorMessages").innerHTML = "<p class='error'>Invalid start- / end date!</p>";
      return;
    }
  }

  // Removing the error Messages if there is no error anymore.
  document.getElementById("errorMessages").innerHTML = "";

  // Build a new to-do object with all the data from the form.
  let todo = {};

  if (type == true) {
    todo = { title, desc, type, category, importance, urgency, done: false };
  } else if (type == false) {
    todo = { title, desc, type, category, importance, urgency, startDate, endDate, done: false };
  }

  // If editIndex is not null, we are editing an old to-do, so we replace it.
  // If editIndex is null, this is a new to-do, so we add it to the end of the list.
  if (editIndex !== null) {
  todos[editIndex] = todo;
  editIndex = null;
  } else {
  todos.push(todo);
  }

  // Save the list, show it again on the page, and update the percent text.
  saveTodos();
  renderTodos();
  todoCounter();

  // Close the popup with the closing animation, same as the cancel button.
  const body = document.getElementById("addTodoBody");
  body.classList.add("closing");

  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}

// This function builds the HTML for one Task and adds it to the list on the page.
function addTaskToList(title, desc, type, category, importance, urgency, startDate, endDate,  done) {
  // Decide which priority text to show, based on importance and urgency.
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

  // Find the list (<ul>) and make a new list item (<li>) for this to-do.
  let ul = document.getElementById("todoListE");
  let li = document.createElement("li");

  // Build the HTML for one to-do row: checkbox, text content, and delete button.
  // If "done" is true, the done class gets added and the check icon gets displayed.
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

  // Add the new to-do at the end of the list, on the page.
  ul.appendChild(li);
}

// This function is the same as addTaskToList, but for Events.
// The only big difference is the date text at the bottom of the to-do.
function addEventToList(title, desc, type, category, importance, urgency, startDate, endDate, done) {
  // Decide the priority text, same logic as in addTaskToList.
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

  // Build the HTML, this time with the calendar icon and the start/end date text.
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
        <p class="todoListElementContentTextSmall">Start: ${startDate}</p>
        <p class="todoListElementContentTextSmall">End: ${endDate}</p>
      </div>
      <div class="delbox" onclick="removeTodo(this)">
        <img id="delimg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wOTkzIDE3Ljc1OTdDMTUuNzk0OSAxOC4yMDk4IDE2LjcyMzUgMTguMDEwOCAxNy4xNzM2IDE3LjMxNTJDMTcuNjIzNiAxNi42MTk3IDE3LjQyNDYgMTUuNjkxMSAxNi43MjkxIDE1LjI0MUMxMy4zMDc5IDEzLjAyNzMgMTAuODIwOSAxMC45OTU5IDguOTIyNTEgOS4wMzczOUM5LjA5NzQyIDguODQ5ODIgOS4yNzI5MSA4LjY2NTcxIDkuNDQ4ODggOC40ODUzNEMxMS44ODY0IDUuOTg2OTIgMTQuMjQ3MiA0LjM4MDY2IDE2LjI5NDQgMy45NzEyMkMxNy4xMDY3IDMuODA4NzUgMTcuNjMzNSAzLjAxODUyIDE3LjQ3MTEgMi4yMDYxOEMxNy4zMDg2IDEuMzkzODQgMTYuNTE4NCAwLjg2NzAxMyAxNS43MDYgMS4wMjk0OEMxMi43NTMyIDEuNjIwMDUgOS44NjQwNiAzLjc2Mzc5IDcuMzAxNTQgNi4zOTAzN0M3LjE4MTUxIDYuNTEzNCA3LjA2MTgxIDYuNjM3ODkgNi45NDI0OSA2Ljc2Mzc1QzUuNDIwMDEgNC44MDQzMyA0LjM3MDU4IDIuODc2MzIgMy40MjU5MSAwLjg2MzE2NEMzLjA3Mzk5IDAuMTEzMjAyIDIuMTgwNzMgLTAuMjA5NDc1IDEuNDMwNzcgMC4xNDI0NDVDMC42ODA4MDkgMC40OTQzNjUgMC4zNTgxMzIgMS4zODc2MiAwLjcxMDA1MSAyLjEzNzU4QzEuODIwODggNC41MDQ4MSAzLjA3ODk5IDYuNzY1MTEgNC45MjkzMiA5LjA1MzA2QzMuMjIyMDYgMTEuMTM0MSAxLjYyNjY5IDEzLjQzMjggMC4yMjI3MjMgMTUuNzE0MkMtMC4yMTE0NTMgMTYuNDE5NyAwLjAwODUyNzUyIDE3LjM0MzcgMC43MTQwNjQgMTcuNzc3OEMxLjQxOTYgMTguMjEyIDIuMzQzNTIgMTcuOTkyIDIuNzc3NyAxNy4yODY1QzQuMDQ4MTkgMTUuMjIyIDUuNDY0MDUgMTMuMTcyNiA2Ljk1NTU5IDExLjMxNjhDOC45ODUgMTMuMzc2NSAxMS41OTU5IDE1LjQ5MjggMTUuMDk5MyAxNy43NTk3WiIgZmlsbD0iIzMzMzIyRSIvPgo8L3N2Zz4K" alt="Delete" draggable="false">
      </div>
    </div>
  `;

  ul.appendChild(li);
}

// This function removes one to-do from the page and from the saved list.
function removeTodo(delbox) {
  // Find the <li> element where the delete icon is inside.
  let li = delbox.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  // Find at which position (index) this <li> is, inside all the to-do's.
  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  // Remove the to-do from the array at this position, then save and update.
  todos.splice(index, 1);
  saveTodos();
  li.remove(); // remove it from the page too
  todoCounter();
}

// This function switches a to-do between "done" and "not done".
function checkTodo(checkbox) {
  // Read the current state from the data-done attribute.
  let isDone = checkbox.dataset.done === "true";
  let todoElement = checkbox.closest(".todoListElement");
  let li = checkbox.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  // Find the position (index) of this to-do, same way as in removeTodo.
  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  if (isDone) {
    // It was done, now we make it "not done" again.
    checkbox.innerHTML = "";
    checkbox.dataset.done = "false";
    todoElement.classList.remove("done");
    checkbox.classList.remove("done");
    todos[index].done = false;
  } else {
    // It was not done, now we mark it as done, and show the check icon.
    checkbox.innerHTML = `<img id="mac" src="${checkImg}" alt="Mark as Complete" draggable="false">`;
    checkbox.dataset.done = "true";
    todoElement.classList.add("done");
    checkbox.classList.add("done");
    todos[index].done = true;
  }

  // Save the new state and update the percent text.
  saveTodos();
  todoCounter();
}

// This function updates the percent text, showing how many to-do's are done.
function todoCounter() {
  let totalTodos = todos.length;
  let checkedTodos = todos.filter(checkCheck).length; // count only the done to-do's
  let totalPercentage = Math.round(checkedTodos / totalTodos * 100);

  // If totalTodos is 0, the math above gives NaN, so we show another text.
  if (!Number.isNaN(totalPercentage)) {
    document.getElementById("todoCounter").innerHTML = totalPercentage + "% of the To-do's completed";
  } else {
    document.getElementById("todoCounter").innerHTML = "Add a To-do to see progress!";
  }
}

// Small helper function, used by .filter() above. It returns true for done to-do's.
function checkCheck(todo) {
  return todo.done === true;
}

// This function marks every not-done to-do as done.
function MarkAllDone() {
  let allTodos = document.querySelectorAll("#todoListE .checkbox");

  for (let i = 0; i < allTodos.length; i++) {
    // Only click the checkbox if it is not done yet.
    if (allTodos[i].dataset.done === "false") {
      checkTodo(allTodos[i]);
    }
  }
}

// This function shows or hides to-do's, based on the search text.
function searchTodos(query) {
  let allLi = document.querySelectorAll("#todoListE li");

  // If the search field is empty, show all to-do's.
  if (query == "") {
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].style.display = "";
    }
    return;
  }

  // Create a regex-object from the search text. "i" means upper and lower case don't matter.
  let regex = new RegExp(query, "i");

  for (let i = 0; i < allLi.length; i++) {
    // Check if the title of the to-do matches the search text.
    if (regex.test(todos[i].title)) {
      allLi[i].style.display = ""; // show it
    } else {
      allLi[i].style.display = "none"; // hide it
    }
  }
}

// This function opens the popup again, but already filled with the clicked to-do's data.
function editTodoElement(content) {
  let li = content.closest("li");
  let allLi = document.querySelectorAll("#todoListE li");

  // Find the position (index) of the clicked to-do.
  let index = 0;
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i] == li) {
      index = i;
    }
  }

  // Remember which to-do we are editing, then open the popup with its data.
  editIndex = index;
  addTodoElement(todos[index]);
}

// This function clears the to-do list on the page, and builds it again from "todos".
// It is used after adding, editing or loading the page, so it will always show exactly what is saved in the "todos" array.
function renderTodos() {
  document.getElementById("todoListE").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].type == true) {
      // It's a Task.
      addTaskToList(todos[i].title, todos[i].desc, todos[i].type, todos[i].category, todos[i].importance, todos[i].urgency, "", "", todos[i].done);
    } else {
      // It's an Event.
      addEventToList(todos[i].title, todos[i].desc, todos[i].type, todos[i].category, todos[i].importance, todos[i].urgency, todos[i].startDate, todos[i].endDate, todos[i].done);
    }
  }
}
