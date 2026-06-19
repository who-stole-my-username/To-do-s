# To-do's

A simple, browser-based to-do list with tasks and events, priorities, and persistent storage via `localStorage`.

## Features

- **Tasks & Events**: There are simple Tasks and scheduled events (with start and end date)
- **Categories**: Sport, Leisure time, Art, Travel
- **Prioritization**: Importance and urgency automatically generate a priority label (e.g. "Do it now!")
- **Done status**: Mark to-do's as done via checkbox
- **Editing**: Click a to-do to edit it
- **Search**: Live search by title as you type
- **Progress tracker**: Percentage of completed to-do's
- **Mark All Done**: Mark all to-do's as done with a single click
- **Persistence**: All data is stored via `localStorage` and stays until the browser cache is cleared

## Usage

### Setup

1. Clone or download the repository
2. Start a webserver (e.g. php webserver or apache)
3. Open `index.html` in your browser 

### Adding a to-do

1. Click **"Add a To-do!"**
2. Enter a title (required) and optionally a description
3. Choose **Task** or **Event**
   - For **Event**, also provide a start and end date
4. Select category, importance, and urgency
5. Click **"Add"**

### Editing a to-do

Click on the text area of an existing to-do to edit it

### Marking a to-do as done

Click the round checkbox on the left of the to-do. The item turns green and the progress counter updates automatically.

### Deleting a to-do

Click the trash icon on the right of the to-do.

### Searching

Type in the search field at the top

## Project structure

```
.
├── index.html      # Page structure
├── css/
│   └── style.css   # Styling
└── js/
    └── script.js    # All JS logic (create, edit, delete, search, storage)
```

## Technologies

- Plain HTML, CSS, and JavaScript (no framework, no dependencies)
- Google Font "Fuzzy Bubbles"
- Storage via the `localStorage` Web API
