import {useState} from 'react';

function Checkbox () {
	const [checkedd, setCheckedd] = useState(false);

  let onClick = (event) =>{
    console.log(checkedd);
    setCheckedd(event.target.checked);

  }
  return(
      <div>
        <input type="Checkbox" onClick={onClick} />
      </div>

    )
};

export default Checkbox;