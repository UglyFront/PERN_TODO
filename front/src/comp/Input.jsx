import { createRef } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../redux/action";

function Input() {

    const dispatch = useDispatch()

    // ДОБАВЛЕНИЕ ПОСТА

    let inp = createRef()

    async function add() {
        let val = inp.current.value

        let body = {
            name: val
        }
        
        if (val != '') {
            await fetch("http://localhost:1112/api/createTodo", {
                method: "post",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            })

            dispatch(getAll())
        }

        else {
            alert("Строка пуста")
        }
    }

    return (
      <form action="">
          <input ref = {inp} type="text" placeholder="Doing..."/>
          <div onClick = {() => add()} className="add">Add</div>
      </form>
    );
  }
  
  export default Input;