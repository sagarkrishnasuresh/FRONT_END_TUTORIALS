# To-Do List App with React

This project is a **To-Do List App** built using **React**. It is designed to teach and practice core React concepts such as components, state management, event handling, and dynamic rendering.

---

## Features
- Add tasks to a list.
- Mark tasks as completed.
- Delete tasks from the list.
- Dynamic updates using React state.

---

## Learning Objectives
- Understand how to set up a React project using Vite.
- Learn React basics such as components, props, and state.
- Use the `useState` hook for managing state.
- Handle user interactions with event handlers.
- Render dynamic lists using `.map()`.
- Style components with CSS.

---

## Prerequisites
- Basic knowledge of JavaScript and HTML.
- Node.js and Yarn installed on your machine.

---

## Setup Instructions

1. **Create a New React Project:**
   ```bash
   yarn create vite to-do-list --template react
   cd to-do-list
   yarn install
   yarn dev
   ```

2. **Clean Up the Default Files:**
   - Remove unnecessary files like `src/assets`.
   - Update `App.jsx` to include a simple heading:
     ```jsx
     const App = () => {
       return <h1>To-Do List App</h1>;
     };
     export default App;
     ```

3. **Organize Components:**
   - Create a `src/components` folder.
   - Add two components: `TaskInput.jsx` and `TaskList.jsx`.

4. **Manage State in `App.jsx`:**
   - Use the `useState` hook to manage tasks.
   ```jsx
   const [tasks, setTasks] = useState([]);
   ```
   - Define functions to add, toggle, and delete tasks.

---

## Component Breakdown

### `App.jsx`
The root component that holds the application state and renders the child components.
```jsx
import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List App</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
```

---

### `TaskInput.jsx`
Handles adding new tasks to the list.
```jsx
import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
```

---

### `TaskList.jsx`
Renders the list of tasks and provides options to toggle completion and delete tasks.
```jsx
import React from "react";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
```

---

## Styling
Add the following styles to `src/styles/styles.css`:
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  justify-content: center;
  margin: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
}

button {
  padding: 10px;
  font-size: 16px;
  margin-left: 10px;
}

ul {
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: auto;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}
```

---

## Run the App
1. Start the development server:
   ```bash
   yarn dev
   ```
2. Open the app in your browser at `http://localhost:5173`.

---

## Enhancements to Try
- Add local storage to save tasks across page reloads.
- Implement task editing.
- Add filters (e.g., All, Completed, Pending).

---

## Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/)

---

Happy Learning! 🚀


