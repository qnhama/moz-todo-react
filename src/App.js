import Todo from "./components/Todo";


function App(props) {

  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}  //key is a special prop that's managed by React – you cannot use the word key for any other purpose. Because keys should be unique, we're going to re-use the id of each task object as its key. Update your taskList constant like so:
    />
  )
); //Rendering with iteration

  console.log(props);
  const subject = props.subject;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      
      <div className="filters btn-group stack-exception">
        
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
        
      </ul>
    </div>
  );
}

export default App;
