import './index.scss';
import TaskColumn from './TaskColumn';
import taskData from './taskData.json';

const App = () => {
  return (
    <main>
      <div className="board">
        <h2 className="board__title">Tasks</h2>
        <div className="board__columns">
          <TaskColumn key="toDoColumn" title="To Do" items={taskData.todoItems}/>
          <TaskColumn key="inProgressColumn" title="In Progress" items={taskData.inProgressItems}/>
          <TaskColumn key="doneColumn" title="Done"items={taskData.doneItems}/>
        </div>
      </div>
    </main>
  );
};

export default App;