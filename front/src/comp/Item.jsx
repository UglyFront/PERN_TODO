import { useDispatch, useSelector } from "react-redux";
import { actions, getAll } from "../redux/action";
import {Link} from "react-router-dom"
import { useState } from "react";

function Item(props) {
    const dispatch = useDispatch()

    async function del() {
        let body = {
            id: props.id
        }

        await fetch("http://localhost:1112/api/deleteTodo", {
                method: "delete",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            })

            dispatch(getAll())
    }





    async function chk() {
        let body = {
            id: props.id
        }

        await fetch("http://localhost:1112/api/checked", {
                method: "put",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            })

            dispatch(getAll())
    }

    if (props.checked) {
        return (
            <li style = {{background: 'pink'}} onClick = {() => dispatch({
                type: actions.VIEW
            })}>
                <p>{props.name}</p>
               {/* <span>Подробнее</span> */}
                  <div className="del" onClick={() => del()}>x</div>
            </li>
          );
    }
    else {
        return (
        <li onClick = {() => dispatch({
            type: actions.VIEW
        })}>
        <p>{props.name}</p>
        {/* <span>Подробнее</span> */}
        <div className="managment">
          <div className="chk" onClick={() => chk()}>✔</div>
          <div className="del" onClick={() => del()}>x</div>
        </div>
    </li>
        );
    }
  }
  
  export default Item;