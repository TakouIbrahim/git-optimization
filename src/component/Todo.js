import Checkbox from './Checkbox';

function Todo ({children, onDelete}){
	return(
      <div>
          < Checkbox />
          <span>{children}</span>
          <button className="" onClick={onDelete} >Sup</button>
      </div>

    )
};

export default Todo;