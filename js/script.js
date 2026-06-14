function addTodoElement() {
  const addTodoDiv = document.createElement("div");
  let container = document.getElementById("overlayContainer");
  addTodoDiv.id = "addTodoBG";
  container.appendChild(addTodoDiv);

  const addTodoDivBody = document.createElement("div");
  container = document.getElementById("addTodoBG");
  addTodoDivBody.id = "addTodoBody";
  addTodoDivBody.innerHTML = `
    <h3>Add a To-do!</h3>
    <input class="addElement" id="getTitle" type="text" placeholder="Title..." maxlength="255" required>
    <input class="addElement" id="getDesc" type="text" placeholder="Description..." maxlength="255">
    <div class="radioGroup">
      <label class="addElementList">
        <input name="type" type="radio" value="true" onclick="dateDisplay(this.value)" checked> Task
      </label>
      <label class="addElementList">
        <input name="type" type="radio" value="false" onclick="dateDisplay(this.value)"> Event
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="category" type="radio" value="0"> Sport
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="1"> Freizeit
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="2"> Kunst
      </label>
      <label class="addElementList">
        <input name="category" type="radio" value="3"> Reisen
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="importance" type="radio" value="true" checked> Important
      </label>
      <label class="addElementList">
        <input name="importance" type="radio" value="false"> Not Important
      </label>
    </div>
    <div class="radioGroup">
      <label class="addElementList">
        <input name="urgency" type="radio" value="true" checked> Urgent
      </label>
      <label class="addElementList">
        <input name="urgency" type="radio" value="false"> Not Urgent
      </label>
    </div>
    <div id="dates"></div>
    <div id="errorMessages"></div>
    <div class="submitButtons">
      <button type="button" class="cancel" onclick="closeAddTodoElement()">Cancel</button>
      <button type="button" class="add" onclick="runAddTodoElement()">Add</button>
    </div>
    `;

  container.appendChild(addTodoDivBody);
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
  let startDate = "";
  let endDate = "";

  if (title == "") {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Enter a title!</P>";
    return;
  }

  if (title.length > 255) {
    document.getElementById("errorMessages").innerHTML = "<p class='error'>Title to long!</P>";
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
  
  console.log(title, desc, type, category, importance, urgency, startDate, endDate);
  const body = document.getElementById("addTodoBody");
  body.classList.add("closing");

  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}
