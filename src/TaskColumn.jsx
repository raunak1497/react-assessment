import TaskCard from "./TaskCard";

const TaskColumn = ({ title, items = [] }) => {
  return(
    <div className="column">
      <h2 className="column__title">{title}</h2>
      <div className="column__cards">
        {items.map(({id,title,description,assignedUser}) => (
          <TaskCard 
          key={id}
          title={title}
          description = {description}
          assignedUser = {assignedUser}
          />
        ))}
      </div>
    </div>
  )
};

export default TaskColumn;

