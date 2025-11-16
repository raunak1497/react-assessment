import { useState } from 'react';

const CreateTaskForm = ({onAddTask}) => {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if(!trimmedDescription || !trimmedTitle) return;

    onAddTask({
        title: trimmedTitle,
        description: trimmedDescription
    });

    setTitle('');
    setDescription('');
  }
  return (
    <div className="create-task-form">
      <h2 className="create-task-form__title">Create task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="title" 
          placeholder="Title"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e)=> {setDescription(e.target.value)}}
        ></textarea>

        <input 
          type="submit" 
          value="Add new task" 
        />
      </form>
    </div>
  );
};

export default CreateTaskForm;