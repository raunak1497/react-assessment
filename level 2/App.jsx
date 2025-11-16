import CreateTaskForm from './CreateTaskForm';
import './index.scss';
import TaskColumn from './TaskColumn';
import taskData from './taskData.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState({
    todoItems: taskData.todoItems,
    inProgressItems: taskData.inProgressItems,
    doneItems: taskData.doneItems
  });

  const handleAddTask = ({title,description}) => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if(!trimmedDescription || !trimmedTitle) return;

    const newTask = {
      id : uuidv4(),
      title: trimmedTitle,
      description: trimmedDescription
    }

    setTasks(prev => ({
      ...prev,
      todoItems: [...prev.todoItems,newTask]
    }))
  }
  return (
    <main>
      <CreateTaskForm onAddTask={handleAddTask}/>
      <div className="board">
        <h2 className="board__title">Tasks</h2>
        <div className="board__columns">
          <TaskColumn key="toDoColumn" title="To Do" items={tasks.todoItems}/>
          <TaskColumn key="inProgressColumn" title="In Progress" items={tasks.inProgressItems}/>
          <TaskColumn key="doneColumn" title="Done"items={tasks.doneItems}/>
        </div>
      </div>
    </main>
  );
};

export default App;