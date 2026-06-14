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
    <form action="#" method="GET">
      <input class="addElement" type="text" placeholder="Title..." maxlength="255" required>
      <input class="addElement" type="text" placeholder="Description..." maxlength="255">
      <div class="radioGroup">
        <label class="addElementList">
          <input name="type" type="radio" value="0" checked> Task
        </label>
        <label class="addElementList">
          <input name="type" type="radio" value="1"> Event
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
          <input name="importance" type="radio" value="0" checked> Important
        </label>
        <label class="addElementList">
          <input name="importance" type="radio" value="1"> Not Important
        </label>
      </div>
      <div class="radioGroup">
        <label class="addElementList">
          <input name="urgency" type="radio" value="0" checked> Urgent
        </label>
        <label class="addElementList">
          <input name="urgency" type="radio" value="1"> Not Urgent
        </label>
      </div>
      <div class="submitButtons">
        <button type="button" class="cancel" onclick="closeAddTodoElement()">Cancel</button>
        <button class="add">Add</button>
      </div>
    </form>
    `;

  container.appendChild(addTodoDivBody);
}

function closeAddTodoElement() {
  const body = document.getElementById("addTodoBody");
  body.classList.add("closing");

  setTimeout(() => {
    document.getElementById("overlayContainer").innerHTML = "";
  }, 260);
}
