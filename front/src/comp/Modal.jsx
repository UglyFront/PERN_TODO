import { useDispatch } from "react-redux";
import { actions } from "../redux/action";


function Modal() {

    const dispatch = useDispatch()
    
    return (
      <div className="blocked" onClick = {() => dispatch({
        type: actions.VIEW
    })}>
        <div className="content_modal">

        </div>
      </div>
    );
  }

  export default Modal