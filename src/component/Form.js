
function Form ({ addTodo }) {
	const onSubmit = (event) =>{
    event.preventDefault();

    const todoTest = event.currentTarget.elements.todo.value;
    //console.log(todoTest);
    addTodo(todoTest);
    event.currentTarget.reset();
  }
  
  return(
      <div>
        <form className="" onSubmit={onSubmit} >
          <input id="todo" type="text" placeholder="Add new task" />
          <button className="" type="submit" > submit</button>

        </form>

      </div>
    )
};
export default Form;