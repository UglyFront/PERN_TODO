import { useSelector } from "react-redux";
import Item from "./Item";

function List() {

    let state = useSelector(state => state.todo)

    
    
        return (
            <ul>
              {state.length !== 0 ? 
              state.map(el =>  <Item key = {el.id} name = {el.name} id = {el.id} checked = {el.checked}/>)
              :
              <h1>Empty list...</h1>
              }
            </ul>
          );
  }
  
  export default List;