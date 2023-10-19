"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Page() {
  const [tasks, setTasks] = useState(["study", "read a book"]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const handleEditTask = (index) => {
    const editedText = prompt("Edit the task:", tasks[index]);
    if (editedText !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedText;
      setTasks(updatedTasks);
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-8 border-indigo-200 py-6 px-6">
        <h1 className="text-center text-4xl font-bold">Todo List</h1>
        <input
          className="bg-indigo-100 px-6 mx-6 h-10 my-4"
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-indigo-500 ml-4 px-2 py-2 rounded text-white" onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li className="my-4 mx-4" key={index}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">{task}</h2>
                <div className="flex-row">
                  <Icon onClick={() => handleEditTask(index)} icon="material-symbols:edit" width="24" />
                  <Icon onClick={() => handleDeleteTask(index)} icon="mdi:trash" width="24" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
