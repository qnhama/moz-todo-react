import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function addTask(name) {
  alert(name);
}

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

  const subject = props.subject;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
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
