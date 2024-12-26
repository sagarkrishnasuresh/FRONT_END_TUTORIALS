import React from "react";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
