import { useEffect,} from "react";
import { useDispatch, useSelector} from "react-redux";
import { Routes } from "react-router-dom";
import Input from "./comp/Input";
import List from "./comp/List";
import Modal from "./comp/Modal";
import { getAll } from "./redux/action";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getAll())
  }, [])



  let view = useSelector(state => state.viewModal)




  return (
    <>
    {/* {view ? <Modal/> : null} */}
    <div className="App">
      <div className="content">
        <h1>TodoApp</h1>
        <Input/>
        <List/>
      </div>
    </div>
    </>
  );
}

export default App;
