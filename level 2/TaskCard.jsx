const TaskCard = ({title,description,assignedUser}) => {
  // Level 1: Write your code here
  return (
    <>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        {description && (<p className="card__description">{description}</p>)}
        {assignedUser && (<p className="card__assigned ">{assignedUser}</p>)}
      </article>
    </>
  )
};

export default TaskCard;