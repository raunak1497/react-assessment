const TaskColumn = ({ title, items }) => (
  <div className="column">
    <h2 className="column__title">{title}</h2>
    <div className="column__cards"></div>
  </div>
);

export default TaskColumn;