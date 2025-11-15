import './index.scss';
import TaskColumn from './TaskColumn';
import taskData from './taskData.json';

const tasks = taskData.tasks;

const App = () => {
  return (
    <main>
      <div className="board">
        <h2 className="board__title">Tasks</h2>
        <div className="board__columns">
          <TaskColumn key="toDoColumn" title="To Do"  />
          <TaskColumn key="inProgressColumn" title="In Progress" />
          <TaskColumn key="doneColumn" title="Done" />
        </div>
      </div>
    </main>
  );
};

export default App;